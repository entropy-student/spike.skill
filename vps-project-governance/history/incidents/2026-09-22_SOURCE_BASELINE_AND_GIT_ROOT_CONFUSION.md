# Incident — Source baseline and Git-root confusion

STATUS: CLOSED
DATE: 2026-09-22
PROJECT: Conversion Leak Audit
CATEGORY: SOURCE_PROVENANCE / SHARED_GIT_WORKTREE

## What happened

The accepted G4 source trees were absent from the inspected local workspace, and an outer directory containing a different/unborn Git repository was mistaken for the canonical project Git root. The actual project lived in the shared `entropy-student/project` monorepo, whose worktree also contained unrelated pending changes from another project.

## Verified cause

Canonical source provenance, Git root, current remote revision, and shared-worktree state were not all proven before attempting to continue the Gate.

## Impact

The project could not safely edit/commit from the inspected workspace without risking reconstruction from stale material or contamination of unrelated project changes.

## Resolution used

- Recover the exact previously sealed source package and verify its checksum.
- Re-run the frozen regression suites against the recovered source rather than rebuilding accepted stages from theory.
- Reconcile the actual monorepo root and current `origin/main`.
- Create a clean project-scoped workspace/sparse checkout and migrate only project-owned changes.
- Preserve fresh Reviewer-owned canonical documents rather than blindly copying stale local copies.

## Current standard rule

See active `VNEXT.md` §6 “Preflight, execution, build and retry”.

## Source pointers

- `conversion-leak-audit/docs/REVIEWER_DECISION_G4_SOURCE_BASELINE_RECOVERY.md`.
- `conversion-leak-audit/docs/REVIEWER_DECISION_G4_REPOSITORY_RECONCILIATION.md`.

No Secret value is stored here.
