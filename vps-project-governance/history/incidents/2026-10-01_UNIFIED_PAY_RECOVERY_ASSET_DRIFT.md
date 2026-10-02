# Incident — Recovery assets disappeared during Unified Pay retirement

STATUS: CLOSED_WITH_UNRESOLVED_ROOT_CAUSE
DATE: 2026-10-01
PROJECT: Unified Pay / Shared VPS Infrastructure
CATEGORY: CLOSEOUT / RECOVERY_ASSET_DRIFT

## What happened

Before the final PostgreSQL-container decommission step, accepted evidence showed the production Compose file, bind-mounted database path, and 33 backup files existed. After the bounded container removal, fresh read-back found the Compose file absent, the database directory absent, and the backup directory empty.

The exact recorded `docker rm` did not use volume deletion and was later proven not to explain disappearance of the host bind path.

## Verified cause

The deletion/move mechanism could not be proven from available logs or history. Root cause remains unresolved.

## Impact

Exact historical database recovery and exact deployment-Compose recovery were no longer available. A protected Windows DPAPI artifact still recovered Secrets, but not the lost database state.

## Resolution used

- Immediately freeze further destructive cleanup and suspend standing decommission authority for additional deletion.
- Do not recreate missing directories/files before forensics.
- Run a strict read-only forensic Gate: current path metadata, scoped searches, Docker/runtime history, safe command/audit evidence, and external recovery inventory.
- Distinguish documentation proving an artifact once existed from current recoverable bytes.
- Keep remaining images, protected Secret recovery and historical evidence.
- Close the retired project with the recovery incident explicitly unresolved rather than inventing a causal story or pretending full recoverability.

## Current standard rule

See active `VNEXT.md` §8 “Rollback and recovery” and §11F “Closeout”.

## Source pointers

- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M8_RETURN_R1_RECOVERY_ASSET_DRIFT_FORENSICS.md`.
- `shared-vps-infrastructure/review-packets/M8_R1_UNIFIED_PAY_RECOVERY_ASSET_DRIFT_FORENSICS.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M8_R1_PASS_UNIFIED_PAY_RETIREMENT_INCIDENT_CLOSURE.md`.

No Secret value is stored here.
