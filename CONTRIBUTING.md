# Contributing

Thank you for your interest in contributing to the PromptG starter packs!

## Ways to Contribute

- Report issues or suggest improvements
- Fix typos or improve documentation
- Improve existing packs (prompts/templates/metadata)
- Improve consistency (names, descriptions, formatting)

## Scope

This repo is a curated set of official starter packs intended to stay small and allow quick use.

We gladly accept PRs that improve the existing packs. We generally prefer community members publish new packs in their own repos and link them from the ecosystem list (rather than growing this repo indefinitely).

## Publishing Your Own Pack

Create a new pack? Publish it in your own repo (or release assets) and add it to the ecosystem list:
https://github.com/promptg/spec/blob/main/ECOSYSTEM.md#packs--templates

## Guidelines

- **Keep PRs focused** - one pack or one theme per PR
- **Prefer additive changes** - avoid renaming/removing existing prompt/template names without strong justification
- **Match existing naming/layout** - follow the `promptg-pack-*`, `promptg-prompt-*`, and `promptg-template-*` conventions
- **Keep packs broadly reusable** - avoid repo-specific or organization-internal assumptions

## Submitting Changes Here

1. Fork and make your change
2. Commit with sign-off: `git commit -s -m "Fix: clarify pack description"`
3. Open a PR

## Validation (recommended)

This repo validates JSON assets against the PromptG v1 schemas.

To run locally, point `PROMPTG_SCHEMA_DIR` at the PromptG v1 schemas directory (`schemas/v1`) from a checkout of `promptg/spec`, then run:

```bash
npm install
npm run validate
```

## Sign-off

`git commit -s` means you wrote the change and have the right to contribute it.

DCO sign-off is required for PRs and is enforced by CI.

See [DCO](DCO) for details.
