# VPS Project Governance — GOVERNANCE HANDOFF

## Current baseline

CURRENT_VERSION: v0.2.0
STATUS: ACTIVE_PROVISIONAL
CANONICAL_RULE_SOURCE: main:vps-project-governance/SKILL.md
EXTERNAL_OPERATIONAL_ADDENDA: NONE
PROMOTION_SOURCE: lab/amber-kite-27@eb6b45f8dac2594293be02fa7996387e96fa292b
PRE_MIGRATION_MAIN: a2de260ffbff6c1978d71545308289b40e339ac3
ROLLBACK_ARCHIVE: vps-project-governance/history/v0.1.6/

## Promotion state

- v0.2.0 has replaced v0.1.6 as the active canonical Governance.
- The old v0.1.6 package is preserved byte-for-byte under `history/v0.1.6/`.
- The shadow semantic audit reached 128/128 matrix coverage and 0 known unrestored safety gaps before promotion.
- v0.2.0 is ACTIVE_PROVISIONAL because the planned real-project controlled trial has not yet completed.
- Historical files, old templates, old addenda, and the refactor branch are non-authoritative for current execution.

## Current loading model

Reviewer reads the universal surface and every specialist trigger, then loads only triggered specialist bodies.
Executor reads the current Gate and explicit inputs; it does not reconstruct Governance.

## Current continuity

UNRESOLVED: NONE
NEXT_STEP: run the first real project under v0.2.0 and evaluate drift, Gate count, Owner interruptions, Evidence quality, and rollback continuity.
OWNER_ACTION_REQUIRED: NONE

This promotion authorization is consumed by this round. Any later Governance modification requires fresh Owner authorization.
