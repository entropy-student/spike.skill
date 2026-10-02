# Incident — Execution occurred before durable Evidence persistence completed

STATUS: CLOSED
DATE: 2026-09-28
PROJECTS: Mini Craft Night Kit; Shared VPS Infrastructure
CATEGORY: DURABILITY / EVIDENCE_PERSISTENCE

## What happened

This failure class occurred in more than one project.

Mini Craft K9B-R2 performed partial cleanup but stopped before persisting the actual mutations and remaining state into canonical Evidence/Handoff. Shared VPS M2E-R1 later completed a read-only runtime reconciliation, but GitHub persistence failed, leaving the runtime facts only provisionally reported and several required identity fields unpersisted.

## Verified cause

The execution/read-back boundary and the durable-record boundary were treated as one step, so a later documentation transport/persistence failure left real execution facts outside canonical project state.

## Impact

Reviewer could not formally accept the reported state. Re-running the original operation would have been unnecessary or unsafe; yet the missing canonical record still had to be repaired.

## Resolution used

- Freeze further mutation immediately.
- Fresh-read canonical Evidence/Handoff to prove what was and was not persisted.
- Preserve already-retained execution facts as provisional rather than replaying the consequential action.
- Re-read actual current state for partial mutation reconciliation.
- If a required field was not retained, perform only a bounded read-only lookup for that missing field.
- Persist the reconciled record and fresh-read it before formal PASS.

## Current standard rule

See active `VNEXT.md` §10 “Durability and Governance change”.

## Source pointers

- `mini-craft-night-kit/review-packets/K9B_R2R1_PARTIAL_EXECUTION_EVIDENCE_PERSISTENCE_AND_REMAINING_STATE_RECONCILIATION.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2E_R1_RETURN_R2_GITHUB_EVIDENCE_PERSISTENCE_RECOVERY.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2E_R1_R2_RETURN_R3_MISSING_RUNTIME_IDENTITY_CAPTURE.md`.

No Secret value is stored here.
