# Incident — Historical audit references corrupted during cumulative Handoff update

STATUS: CLOSED
DATE: 2026-09-29
PROJECT: Mini Craft Night Kit
CATEGORY: DOCUMENT_INTEGRITY / AUDIT_REFERENCES

## What happened

The final K9C factual reconciliation was technically sound, but an Executor Handoff update changed a historical K6 section so that it pointed at the current K9C Evidence commit instead of the original K6 Evidence commit. The current K9C section also pointed at an earlier K9C Evidence commit rather than the final fresh Evidence commit.

## Verified cause

Historical and current Evidence pointers inside a cumulative Handoff were updated without preserving heading-scoped provenance. The document remained readable but its audit chain was no longer exact.

## Impact

Final K9 closeout was returned even though no runtime/project state needed to be replayed.

## Resolution used

- Treat this as documentation/reference integrity only; do not rerun valid runtime checks.
- Repair only the exact heading-scoped pointers.
- Do not globally search/replace old commit hashes or rewrite historical Evidence.
- Fresh-read the repaired Handoff and prove both the historical pointer and current pointer independently.
- Keep accepted runtime/project facts unchanged.

## Current standard rule

See active `VNEXT.md` §11F “Closeout”: historical audit references are not globally rewritten when current pointers change; reference-only repair does not replay already-valid runtime checks.

## Source pointers

- `mini-craft-night-kit/docs/REVIEWER_DECISION_K9C_RETURN_R1_DOCUMENT_REFERENCE_INTEGRITY_REPAIR.md`.
- `mini-craft-night-kit/review-packets/K9C_R1_DOCUMENT_REFERENCE_INTEGRITY_REPAIR.md`.

No Secret value is stored here.
