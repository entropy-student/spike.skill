# comic-narrative Governance Takeover Discovery — 2026-10-03

> Governance: `vps-project-governance/VNEXT.md` v0.2.6  
> Discovery baseline: `main@3bdf6e390426c5ba33193020927857fe6cdc7bfc`  
> Scope: read-only project reconciliation + governance-entry repair proposal  
> Runtime / production-rule mutation: **NONE**

## 1. Discovery objective

Reconcile the current canonical project state before further consequential work, identify the active Gate, and separate the current dashboard from historical migration/execution narrative.

## 2. Canonical project surface inspected

- `comic-narrative/SKILL.md`
- `comic-narrative/HANDOFF.md`
- `comic-narrative/part0/TOPIC_LIBRARY.md`
- `comic-narrative/part1/TOPIC_STRATEGY.md`
- `comic-narrative/part2/SCRIPT_NARRATIVE.md`
- `comic-narrative/part2_5/VOICE_SRT_ALIGNMENT.md`
- `comic-narrative/part3/STORYBOARD_VISUAL_DIRECTOR.md`
- `comic-narrative/part4/IMAGE_ASSET_EXECUTION.md`
- `comic-narrative/part4_5/ASSET_REUSE_LIBRARY.md`
- `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_DIAGNOSTIC_R2R1H_REVIEW.md`
- `comic-narrative/reviews/imagegen-speed/IMAGEGEN_OUTPUT_HINT_LOCAL_CACHE_LIVE_CANARY_R2R1I_REVIEW.md`
- `comic-narrative/reviews/part2/PART2_FORMAL_EDIT_MAP.md`
- recent `comic-narrative` commit history on `main`

## 3. Reconciled accepted state

- Part 0 / Part 1: established formal baselines.
- Part 2: current formal baseline remains unchanged; a reviewed 11-item formal edit map exists, but Owner item-level approval is still pending.
- Part 2.5: formal voice/SRT alignment baseline exists.
- Part 3: H019-approved refinements were applied; Scene Anchor, subjective-visual grammar, before/after visible evidence, and Style Plate direction are in the formal baseline. Concrete Style Plate assets remain pending.
- Part 4: formal baseline remains sealed; image execution is separated from planning and Part 4.5 reuse.
- Part 4.5: active catalog/library exists and is connected to Part 4 planning.
- Part 5 / Part 6: not yet formally migrated.
- Imagegen reliability: R2R1H PASS proved an optional verified local-cache fast path on a preserved sample. R2R1I returned `RETURN_IMPLEMENTATION_DRIFT` because a new pre-parser receiver guard was stricter than the reviewed parser contract and the required event/fresh-readback evidence was incomplete.
- Active next Gate: `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J`.

## 4. Material governance drift found

The legacy `HANDOFF.md` still contains a stale development-branch header and has grown into a combined current dashboard + historical diary. This conflicts with the v0.2.6 current-state model, where the Reviewer handoff should remain a compact current dashboard and history/evidence should be consulted only when needed.

This is a documentation/governance drift, not evidence that Part 0–4.5 runtime rules are invalid.

## 5. Specialist trigger scan

- Shared VPS / Storage: **NOT_TRIGGERED**
- SSH / Secret / Target Host: **NOT_TRIGGERED**
- Deployment / Network / Resources: **NOT_TRIGGERED**
- Automation / Auth: **TRIGGERED (automation only)** — current image execution uses automated tooling; no auth/session mutation is authorized by the active Gate.
- Provider / Payment: **NOT_TRIGGERED**
- Closeout: **NOT_TRIGGERED**

## 6. Governance-entry repair applied in this takeover branch

- add compact `comic-narrative/REVIEWER_HANDOFF.md` as the canonical current dashboard;
- keep `HANDOFF.md` intact as legacy history / decision / execution narrative;
- update only handoff-pointer text in `SKILL.md`, Part 4 and Part 4.5;
- do not modify any production rule or current Gate acceptance condition.

## 7. Current execution boundary

No imagegen call is authorized by this takeover repair itself.

The next executable Gate remains R2R1J exactly as accepted by the R2R1I Reviewer decision. Part 2 formal edits remain deferred until Owner item-level approval.
