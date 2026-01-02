# PromptG Starter Packs

[![Validate Starter Packs](https://github.com/promptg/starter-packs/actions/workflows/validate.yml/badge.svg)](https://github.com/promptg/starter-packs/actions/workflows/validate.yml)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Starter packs that showcase what PromptG can do and help you get up and running fast.

Each pack includes example templates (blueprints) plus a small set of runnable prompts (instances) you can customize and share.

## Ecosystem

- **You are in `promptg/starter-packs`**: curated packs (templates + prompts) to install and customize.
- **Format/spec**: https://github.com/promptg/spec (canonical spec + schemas + conformance).
- **CLI**: https://github.com/promptg/cli (reference implementation).
- **Website**: https://promptg.io (landing page, hosted schemas, pack mirror).
- **Conceptual model**: https://github.com/promptg/spec/blob/main/spec/promptg-spec.md#2-core-concepts-and-rationale-informative

**Routing:**

- Pack content issues: https://github.com/promptg/starter-packs/issues
- CLI bugs/features: https://github.com/promptg/cli/issues
- Spec/schema issues: https://github.com/promptg/spec/issues

## Quickstart

Install a pack (from a file path or a URL):

```bash
promptg pack install ./packs/promptg-pack-<pack>.json
```

> Pack installs copy prompts and templates into your local store for customization.

Run a prompt (instances are first-class):

```bash
promptg get <prompt-name>
```

Create a new prompt from a template:

```bash
promptg prompt new <new-prompt-name> --from-template <template-name>
```

Inspect a template's full source JSON:

```bash
promptg template show <template-name>
```

## Learn PromptG

**Getting started**

- Quickstart: https://github.com/promptg/cli/blob/main/docs/QUICKSTART.md
- CLI reference: https://github.com/promptg/cli/blob/main/docs/CLI.md

**Understand asset types**

- Prompts (instances): https://github.com/promptg/cli/blob/main/docs/PROMPTS.md
- Templates (blueprints): https://github.com/promptg/cli/blob/main/docs/TEMPLATES.md
- Packs (distribution): https://github.com/promptg/cli/blob/main/docs/PACKS.md

## Repo Layout

- `packs/` -- distributable pack JSON files (`promptg-pack-*.json`)
- `templates/` -- individual template JSON files (blueprints)
- `prompts/` -- individual prompt JSON files (instances)

## Development

Validate all JSON assets against the PromptG v1 schemas:

```bash
# Point this at the directory containing v1 schema files:
# - prompt.schema.json
# - template.schema.json
# - pack.schema.json

PROMPTG_SCHEMA_DIR=../spec/schemas/v1 npm run validate
```

PowerShell:

```powershell
$env:PROMPTG_SCHEMA_DIR = "..\\spec\\schemas\\v1"
npm run validate
```

## Pack Index

### Overview

| Pack                                                                                                                                 | Prompts | Templates | Summary                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------: | --------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Dev Essentials](#dev-essentials-dev-essentials) (`dev-essentials`)                                                                  |       3 |         9 | Compact, general-purpose prompts for daily development work: reviews, PR writing, commit messages, tests, basic security checks, and release notes.                               |
| [Junior Dev: Level Up](#junior-dev-level-up-junior-dev-level-up) (`junior-dev-level-up`)                                             |       3 |         7 | Guided prompts for junior developers that explain terminology, provide checklists, and suggest safe next steps for reviews, bug fixes, and tests.                                 |
| [OSS Maintainer: Steward](#oss-maintainer-steward-oss-maintainer-steward) (`oss-maintainer-steward`)                                 |       3 |         7 | Maintainer-focused prompts for triage and communication: issue/PR responses, repro requests, contribution guidance, and release messaging.                                        |
| [Project Init Starter](#project-init-starter-project-init-starter) (`project-init-starter`)                                          |       3 |         8 | A repo-scoped baseline for teams: consistent prompts and templates for onboarding, PRs, reviews, tests, security checks, and releases (designed to be referenced in docs and CI). |
| [Project Lead: Status & Risk](#project-lead-status--risk-project-lead-status-and-risk) (`project-lead-status-and-risk`)              |       3 |         7 | Status and risk prompts for project leads: translate technical updates into clear progress, blockers, dependencies, and next steps for stakeholders.                              |
| [QA: Break It Before Prod](#qa-break-it-before-prod-qa-break-it-before-prod) (`qa-break-it-before-prod`)                             |       3 |         7 | QA-focused prompts for risk-based testing: test plans, edge cases, regression checklists, and release smoke guidance.                                                             |
| [Security Champion: Threat-First](#security-champion-threat-first-security-champion-threat-first) (`security-champion-threat-first`) |       3 |         7 | Security-focused prompts for threat modeling and diff reviews: identify likely vulnerabilities, rate severity, and recommend practical mitigations.                               |
| [Senior Dev: Fastlane](#senior-dev-fastlane-senior-dev-fastlane) (`senior-dev-fastlane`)                                             |       3 |         7 | High-signal prompts for senior engineers that prioritize correctness/security/maintainability risk and keep output short and decision-oriented.                                   |
| [SRE: Incident Commander](#sre-incident-commander-sre-incident-commander) (`sre-incident-commander`)                                 |       3 |         7 | SRE-focused prompts for incident response and postmortems: timelines, impact summaries, contributing factors, and follow-up actions.                                              |
| [Tech Lead: Align & Ship](#tech-lead-align--ship-tech-lead-align-and-ship) (`tech-lead-align-and-ship`)                              |       3 |         7 | Planning and alignment prompts for tech leads: turn requirements into scope, tradeoffs, technical direction, rollout steps, and team-ready communication.                         |

### Dev Essentials (`dev-essentials`)

Compact, general-purpose prompts for daily development work: reviews, PR writing, commit messages, tests, basic security checks, and release notes.

- Pack file: [`packs/promptg-pack-dev-essentials.json`](packs/promptg-pack-dev-essentials.json)

**Prompts**

- `dev-commit-message` -- Draft a conventional commit message from intent and/or diff context.
- `dev-pr-review` -- Review a PR diff for correctness, security, and maintainability; output top risks and fixes.
- `dev-test-generation` -- Generate unit tests from code and desired behaviors, including edge cases.

**Templates**

- `dev-bug-fix-plan` -- Turn a bug report into investigation steps, hypotheses, and a safe fix plan.
- `dev-code-review` -- Review a code snippet/file (no diff) for bugs, clarity, and maintainability.
- `dev-commit-message` -- Draft a conventional commit message from intent and/or diff context.
- `dev-feature-plan` -- Turn a feature request into scope, approach, tasks, and risks.
- `dev-pr-review` -- Review a PR diff for correctness, security, and maintainability; output top risks and fixes.
- `dev-release-notes-short` -- Summarize changes into short release notes with user-facing highlights.
- `dev-security-scan` -- Scan code or diffs for security issues; report severity and mitigations.
- `dev-test-generation` -- Generate unit tests from code and desired behaviors, including edge cases.
- `dev-test-plan` -- Create a risk-based test plan with prioritized cases and coverage notes.

### Junior Dev: Level Up (`junior-dev-level-up`)

Guided prompts for junior developers that explain terminology, provide checklists, and suggest safe next steps for reviews, bug fixes, and tests.

- Pack file: [`packs/promptg-pack-junior-dev-level-up.json`](packs/promptg-pack-junior-dev-level-up.json)

**Prompts**

- `junior-bug-fix-walkthrough` -- Guide debugging from symptoms to root cause with a step-by-step plan.
- `junior-code-review-coach` -- Explain issues in plain language and suggest safe fixes with clear steps.
- `junior-test-generation-coach` -- Generate tests and explain what each test proves and why it matters.

**Templates**

- `junior-bug-fix-walkthrough` -- Guide debugging from symptoms to root cause with a step-by-step plan.
- `junior-code-review-coach` -- Explain issues in plain language and suggest safe fixes with clear steps.
- `junior-commit-message-helper` -- Draft a conventional commit message with guidance on type/scope/intent.
- `junior-diff-explainer` -- Summarize a diff in plain language and call out likely risks.
- `junior-pr-description-helper` -- Write a clear PR description with prompts for context, changes, and testing.
- `junior-test-generation-coach` -- Generate tests and explain what each test proves and why it matters.
- `junior-test-plan-basics` -- Create a simple test plan covering happy paths, edge cases, and regressions.

### OSS Maintainer: Steward (`oss-maintainer-steward`)

Maintainer-focused prompts for triage and communication: issue/PR responses, repro requests, contribution guidance, and release messaging.

- Pack file: [`packs/promptg-pack-oss-maintainer-steward.json`](packs/promptg-pack-oss-maintainer-steward.json)

**Prompts**

- `oss-issue-response-kind-firm` -- Draft responses that are kind, clear, and bounded by maintainer capacity.
- `oss-issue-triage` -- Triage issues: classify, request missing info, and propose next steps.
- `oss-release-notes-and-thanks` -- Write release notes highlighting changes and thanking contributors.

**Templates**

- `oss-contributing-guidance` -- Provide contribution guidance aligned with repo standards and maintainer bandwidth.
- `oss-duplicate-close` -- Close duplicates with a link to the canonical thread and next steps.
- `oss-issue-response-kind-firm` -- Draft responses that are kind, clear, and bounded by maintainer capacity.
- `oss-issue-triage` -- Triage issues: classify, request missing info, and propose next steps.
- `oss-pr-review-maintainer` -- Review PRs for correctness, tests, docs, and project fit.
- `oss-release-notes-and-thanks` -- Write release notes highlighting changes and thanking contributors.
- `oss-repro-request` -- Request a minimal repro with an actionable checklist and environment details.

### Project Init Starter (`project-init-starter`)

A repo-scoped baseline for teams: consistent prompts and templates for onboarding, PRs, reviews, tests, security checks, and releases (designed to be referenced in docs and CI).

- Pack file: [`packs/promptg-pack-project-init-starter.json`](packs/promptg-pack-project-init-starter.json)

**Prompts**

- `repo-onboarding-quickstart` -- Generate a repo onboarding quickstart: setup, run, test, and contribute.
- `repo-pr-description` -- Produce a PR description in the repo's expected format (what/why/how/testing/risk).
- `repo-pr-review` -- Self-review a PR diff against repo standards, risks, and acceptance criteria.

**Templates**

- `repo-commit-message` -- Draft commit messages that match the repo's conventions and scope style.
- `repo-feature-plan` -- Create a repo-appropriate feature plan including rollout and operational considerations.
- `repo-onboarding-quickstart` -- Generate a repo onboarding quickstart: setup, run, test, and contribute.
- `repo-pr-description` -- Produce a PR description in the repo's expected format (what/why/how/testing/risk).
- `repo-pr-review` -- Self-review a PR diff against repo standards, risks, and acceptance criteria.
- `repo-release-notes-short` -- Draft short release notes aligned with the repo's release style.
- `repo-security-scan` -- Review repo changes for security risks, assumptions, and mitigations.
- `repo-test-plan` -- Plan testing for a change in this repo, focusing on regression and risk.

### Project Lead: Status & Risk (`project-lead-status-and-risk`)

Status and risk prompts for project leads: translate technical updates into clear progress, blockers, dependencies, and next steps for stakeholders.

- Pack file: [`packs/promptg-pack-project-lead-status-and-risk.json`](packs/promptg-pack-project-lead-status-and-risk.json)

**Prompts**

- `project-lead-risk-register` -- Risk register with likelihood, impact, mitigation, owner, and due date.
- `project-lead-stakeholder-update-email` -- Draft a stakeholder update email with clear risks and asks.
- `project-lead-weekly-status` -- Weekly status update: progress, next, risks, blockers, and asks.

**Templates**

- `project-lead-dependency-map` -- Map dependencies/blockers with owners, dates, and escalation needs.
- `project-lead-meeting-notes-to-actions` -- Turn notes into decisions, action items, owners, and deadlines.
- `project-lead-milestone-plan` -- Plan milestones with deliverables, dates, and dependencies.
- `project-lead-risk-register` -- Risk register with likelihood, impact, mitigation, owner, and due date.
- `project-lead-scope-tradeoffs` -- Summarize scope tradeoffs and recommend a path forward.
- `project-lead-stakeholder-update-email` -- Draft a stakeholder update email with clear risks and asks.
- `project-lead-weekly-status` -- Weekly status update: progress, next, risks, blockers, and asks.

### QA: Break It Before Prod (`qa-break-it-before-prod`)

QA-focused prompts for risk-based testing: test plans, edge cases, regression checklists, and release smoke guidance.

- Pack file: [`packs/promptg-pack-qa-break-it-before-prod.json`](packs/promptg-pack-qa-break-it-before-prod.json)

**Prompts**

- `qa-regression-checklist` -- Create a regression checklist based on what the change touches.
- `qa-release-smoke-suite` -- Draft a release smoke suite covering critical user journeys.
- `qa-risk-based-test-plan` -- Build a risk-based test plan with priority ordering and coverage rationale.

**Templates**

- `qa-bug-report-repro-steps` -- Write a bug report with clear repro steps and environment details.
- `qa-edge-case-generator` -- Generate edge and negative test cases for a feature or change.
- `qa-flaky-test-triage` -- Triage flaky tests and propose fixes and stabilization steps.
- `qa-regression-checklist` -- Create a regression checklist based on what the change touches.
- `qa-release-smoke-suite` -- Draft a release smoke suite covering critical user journeys.
- `qa-risk-based-test-plan` -- Build a risk-based test plan with priority ordering and coverage rationale.
- `qa-test-coverage-review` -- Review existing tests and suggest the highest-value coverage gaps.

### Security Champion: Threat-First (`security-champion-threat-first`)

Security-focused prompts for threat modeling and diff reviews: identify likely vulnerabilities, rate severity, and recommend practical mitigations.

- Pack file: [`packs/promptg-pack-security-champion-threat-first.json`](packs/promptg-pack-security-champion-threat-first.json)

**Prompts**

- `security-pr-diff-scan` -- Review a diff for security issues; report severity, evidence, and fixes.
- `security-remediation-plan` -- Turn findings into a prioritized remediation plan with verification steps.
- `security-threat-model-lite` -- Create a lightweight threat model: assets, actors, entry points, mitigations.

**Templates**

- `security-abuse-cases-generator` -- Generate abuse cases and negative scenarios to test and defend against.
- `security-authn-authz-check` -- Review authn/authz changes for bypasses and privilege bugs.
- `security-dependency-change-review` -- Assess dependency changes for supply-chain risk and safeguards.
- `security-pr-diff-scan` -- Review a diff for security issues; report severity, evidence, and fixes.
- `security-remediation-plan` -- Turn findings into a prioritized remediation plan with verification steps.
- `security-secrets-and-logging-check` -- Check for secret exposure and unsafe logging/telemetry patterns.
- `security-threat-model-lite` -- Create a lightweight threat model: assets, actors, entry points, mitigations.

### Senior Dev: Fastlane (`senior-dev-fastlane`)

High-signal prompts for senior engineers that prioritize correctness/security/maintainability risk and keep output short and decision-oriented.

- Pack file: [`packs/promptg-pack-senior-dev-fastlane.json`](packs/promptg-pack-senior-dev-fastlane.json)

**Prompts**

- `senior-breaking-change-check` -- Assess compatibility impact and recommend semver classification and comms.
- `senior-pr-review-fastlane` -- Fast PR review: top risks, severity-ranked findings, and minimal fixes.
- `senior-risk-scan` -- Identify correctness, security, and operability risks quickly and concretely.

**Templates**

- `senior-api-contract-review` -- Review API changes for compatibility, ergonomics, and edge cases.
- `senior-architecture-sanity-check` -- Sanity check architecture for tradeoffs, failure modes, and maintainability.
- `senior-breaking-change-check` -- Assess compatibility impact and recommend semver classification and comms.
- `senior-performance-quickscan` -- Spot performance risks and suggest what to measure and optimize.
- `senior-pr-review-fastlane` -- Fast PR review: top risks, severity-ranked findings, and minimal fixes.
- `senior-refactor-plan` -- Plan a safe refactor with sequencing, guardrails, and rollback strategy.
- `senior-risk-scan` -- Identify correctness, security, and operability risks quickly and concretely.

### SRE: Incident Commander (`sre-incident-commander`)

SRE-focused prompts for incident response and postmortems: timelines, impact summaries, contributing factors, and follow-up actions.

- Pack file: [`packs/promptg-pack-sre-incident-commander.json`](packs/promptg-pack-sre-incident-commander.json)

**Prompts**

- `sre-incident-brief` -- Summarize incident impact, current status, and immediate next steps.
- `sre-postmortem-writeup` -- Write a blameless postmortem with contributing factors and action items.
- `sre-timeline-from-logs` -- Build a timeline from logs/events and highlight gaps and hypotheses.

**Templates**

- `sre-followups-and-owners` -- Turn learnings into follow-ups with owners, priority, and due dates.
- `sre-incident-brief` -- Summarize incident impact, current status, and immediate next steps.
- `sre-postmortem-writeup` -- Write a blameless postmortem with contributing factors and action items.
- `sre-rca-five-whys` -- Run a five-whys analysis to separate root cause from contributing factors.
- `sre-runbook-draft` -- Draft or improve a runbook: symptoms, checks, mitigations, and escalation.
- `sre-status-update` -- Draft stakeholder updates suitable for active incidents and outages.
- `sre-timeline-from-logs` -- Build a timeline from logs/events and highlight gaps and hypotheses.

### Tech Lead: Align & Ship (`tech-lead-align-and-ship`)

Planning and alignment prompts for tech leads: turn requirements into scope, tradeoffs, technical direction, rollout steps, and team-ready communication.

- Pack file: [`packs/promptg-pack-tech-lead-align-and-ship.json`](packs/promptg-pack-tech-lead-align-and-ship.json)

**Prompts**

- `tech-lead-feature-brief` -- Turn requirements into a brief with scope, non-goals, and acceptance criteria.
- `tech-lead-rollout-plan` -- Plan rollout and migration with observability, gating, and rollback.
- `tech-lead-tech-design-outline` -- Draft a technical design with options, tradeoffs, and open questions.

**Templates**

- `tech-lead-adr` -- Write an ADR capturing context, decision, and consequences.
- `tech-lead-execution-plan` -- Create an execution plan with milestones, sequencing, and dependencies.
- `tech-lead-feature-brief` -- Turn requirements into a brief with scope, non-goals, and acceptance criteria.
- `tech-lead-rollout-plan` -- Plan rollout and migration with observability, gating, and rollback.
- `tech-lead-scope-tradeoffs` -- Propose scope tradeoffs and phased delivery to hit constraints.
- `tech-lead-team-message` -- Produce a team update summarizing decisions, rationale, and next steps.
- `tech-lead-tech-design-outline` -- Draft a technical design with options, tradeoffs, and open questions.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

- PRs welcome for improvements to existing packs.
- Add community packs/tools in the PromptG ecosystem list: https://github.com/promptg/spec/blob/main/ECOSYSTEM.md#packs--templates
