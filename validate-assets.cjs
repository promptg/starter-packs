/* eslint-disable no-console */
const fs = require('node:fs');
const path = require('node:path');

const Ajv = require('ajv/dist/2020');
const addFormats = require('ajv-formats');

function readJsonUtf8(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');

  if (text.includes('\uFFFD')) {
    throw new Error(`File contains Unicode replacement character (possible encoding corruption): ${filePath}`);
  }
  if (text.includes('\u00e2')) {
    throw new Error(`File contains mojibake marker \\u00e2 (possible encoding corruption): ${filePath}`);
  }

  return JSON.parse(text);
}

function loadSchemas(schemaDir) {
  const promptSchemaPath = path.join(schemaDir, 'prompt.schema.json');
  const templateSchemaPath = path.join(schemaDir, 'template.schema.json');
  const packSchemaPath = path.join(schemaDir, 'pack.schema.json');

  if (!fs.existsSync(promptSchemaPath) || !fs.existsSync(templateSchemaPath) || !fs.existsSync(packSchemaPath)) {
    throw new Error(
      `Missing schemas in ${schemaDir}. Expected prompt.schema.json, template.schema.json, pack.schema.json`,
    );
  }

  return {
    prompt: readJsonUtf8(promptSchemaPath),
    template: readJsonUtf8(templateSchemaPath),
    pack: readJsonUtf8(packSchemaPath),
  };
}

function listJsonFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith('.json'))
    .map((d) => path.join(dir, d.name))
    .sort();
}

function formatAjvErrors(errors) {
  if (!errors || errors.length === 0) return 'Unknown schema error';
  return errors
    .map((e) => {
      const instance = e.instancePath ? `at ${e.instancePath}` : 'at <root>';
      const keyword = e.keyword ? ` (${e.keyword})` : '';
      const message = e.message || 'invalid';
      return `${instance}${keyword}: ${message}`;
    })
    .join('\n');
}

function validateFile(validate, kind, filePath) {
  const data = readJsonUtf8(filePath);
  const ok = validate(data);
  if (!ok) {
    const details = formatAjvErrors(validate.errors);
    throw new Error(`[${kind}] ${filePath}\n${details}`);
  }
}

function main() {
  const schemaDir = process.env.PROMPTG_SCHEMA_DIR;
  if (!schemaDir || schemaDir.trim().length === 0) {
    throw new Error('Set PROMPTG_SCHEMA_DIR to the directory containing v1 schemas.');
  }

  const schemas = loadSchemas(schemaDir);

  const ajv = new Ajv({ allErrors: true, strict: false, allowUnionTypes: true });
  addFormats.default ? addFormats.default(ajv) : addFormats(ajv);

  ajv.addSchema(schemas.prompt);
  ajv.addSchema(schemas.template);
  ajv.addSchema(schemas.pack);

  const validatePrompt = ajv.getSchema('https://promptg.io/schemas/v1/prompt.schema.json') || ajv.compile(schemas.prompt);
  const validateTemplate =
    ajv.getSchema('https://promptg.io/schemas/v1/template.schema.json') || ajv.compile(schemas.template);
  const validatePack = ajv.getSchema('https://promptg.io/schemas/v1/pack.schema.json') || ajv.compile(schemas.pack);

  const files = [
    ...listJsonFiles('prompts').map((f) => ({ kind: 'prompt', filePath: f, validate: validatePrompt })),
    ...listJsonFiles('templates').map((f) => ({ kind: 'template', filePath: f, validate: validateTemplate })),
    ...listJsonFiles('packs').map((f) => ({ kind: 'pack', filePath: f, validate: validatePack })),
  ];

  if (files.length === 0) {
    throw new Error('No JSON files found in prompts/, templates/, or packs/.');
  }

  for (const item of files) {
    validateFile(item.validate, item.kind, item.filePath);
  }

  console.log(`Validated ${files.length} JSON files against PromptG schemas.`);
}

try {
  main();
} catch (err) {
  console.error(String(err && err.stack ? err.stack : err));
  process.exitCode = 1;
}
