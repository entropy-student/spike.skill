# IMAGEGEN_NATIVE_SIZE_OWNER_DECISION_R2R1L — Reviewer Decision

> Date: 2026-10-03  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6  
> Owner decision: **APPROVED**  
> Reviewer verdict: **PASS**  
> Next Gate: **IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M**

## Owner-approved rule

Owner explicitly fixed the future image-production contract to:

- **16:9 is the only formal aspect ratio for both production and delivery**;
- **1792×1008** = default native image-generation target;
- **1920×1080** = final delivery target.

Both sizes are exact 16:9.

The prior wording that 16:9 was merely a "default" is superseded by this Owner decision.

## Formal rule change

Only `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md` §25 was modified.

It now states:

- `16:9` is the only formal aspect ratio and production/delivery may not switch to another aspect ratio;
- `1792×1008 default native image-generation target`;
- `1920×1080 final delivery target`.

No other Part 2 / Part 3 / Part 4 / Part 4.5 / SKILL production rule was modified.

## Cross-document check

Current formal documents inspected:

- `SKILL.md`
- Part 0
- Part 1
- Part 2
- Part 2.5
- Part 3
- Part 4
- Part 4.5

No competing formal image aspect ratio such as `1:1`, `9:16`, `4:3`, or `3:2` was found.

The only current formal image-aspect contract is Part 4 §25.

## Historical evidence

Do not rewrite old R2R1F / R2R1J task packets or generated images.

Their `1920×1080` generation instruction and observed `1672×941` raster are historical evidence of the old contract mismatch, not the current production rule.

## Reviewer decision

R2R1L = **PASS**.

The Owner decision resolves the policy question.

The remaining question is implementation evidence:

> Does a newly compiled task and the actual image-generation call really request `1792×1008`, or does the execution path still only mention the size in prose?

That is the sole active image-size issue for the next Gate.

# NEXT GATE — IMAGEGEN_NATIVE_SIZE_CONTRACT_PROPAGATION_LIVE_CANARY_R2R1M

## Objective

Prove end-to-end propagation of:

`16:9 only → native 1792×1008 → final delivery 1920×1080`

through a new test task and, after no-image preflight, at most one live imagegen call.

## Constraints

- start from current GitHub main;
- no historical task rewrite;
- no alternate aspect ratio;
- no second live attempt;
- no C-VB02 / concurrency / six-Beat / H019;
- do not silently fall back to another requested size;
- record actual returned raster honestly;
- STOP_AT_REVIEWER=YES.
