# IMAGEGEN R2R1M Gate Contract Repair — Reviewer Record

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Scope: Reviewer/Gate contract only  
> Production-rule changes: **NONE**

## Trigger scan

Triggered specialist sections read in full:

- 11D Automation / Authentication — applicable because R2R1M authorizes one bounded automated live imagegen canary.
- 11E Provider / Payment — treated as triggered by uncertainty because the live image action crosses an external provider/tool boundary; payment-specific rules are not otherwise applicable.

Not triggered:

- Shared VPS / Storage
- SSH / Secret / Target Host
- Deployment / Network / Resources
- Closeout

## Problem found

The R2R1M Gate created after R2R1L had the correct technical objective but did not contain every mandatory Governance v0.2.6 Gate field.

Missing/insufficient fields were:

- `MANDATORY_REVIEW_STOP`
- `TARGET_AND_SCOPE`
- `APPLICABLE_CRITICAL_CONSTRAINTS`
- `ROLLBACK_STATUS_OR_PLAN`
- `REVIEWER_TO_EXECUTOR_RELAY`
- `EXECUTOR_TO_REVIEWER_RELAY`

The acceptance heading was also normalized to `ACCEPTANCE_CRITERIA`.

## Repair

Only `comic-narrative/REVIEWER_HANDOFF.md` current Gate / relay state was repaired.

No Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL production rule was changed.

The repaired Gate now:

- starts from current GitHub main;
- narrows Executor reads to the current Gate, Part 4 §25, R2R1L, R2R1J, and exact preserved R2R1J execution files;
- requires no-image proof of the actual structured imagegen request before any live call;
- permits at most one live imagegen call;
- forbids retry, alternate requested sizes, broad history scans, parser changes, concurrency, 6 Beat, and H019;
- records real returned raster instead of assuming it equals requested size;
- stops at Reviewer.

## Accepted facts carried forward

- 16:9 is the only formal production and delivery aspect ratio.
- Native generation target = `1792×1008`.
- Final delivery target = `1920×1080`.
- R2R1J fast-path is formally PASS.
- Historical C-VB01 `1920×1080` generation wording is historical evidence only and is not a valid new task contract.

## Reviewer result

`PASS` for Gate-contract repair only.

R2R1M execution itself remains **PENDING** until the Windows / Codex Executor returns a completion packet and reviewable evidence.
