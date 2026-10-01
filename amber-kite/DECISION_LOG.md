# Amber Kite — DECISION LOG

> SHADOW DESIGN RECORD / NON-OPERATIONAL
> Records accepted design decisions and Owner feedback. It does not modify current Governance.

## D001 — Reality and accepted project state

**Decision:** ACCEPTED

- Fresh authoritative evidence proves current reality.
- Reviewer reconciles that evidence.
- `REVIEWER_HANDOFF.md` stores the latest Reviewer-accepted canonical project state.
- A stale Handoff cannot override stronger fresh evidence.
- Unreviewed Executor output does not automatically become canonical.

Short form:

```text
Reality -> Evidence -> Reviewer -> Handoff
```

## D002 — Separate current state, decision history and execution evidence

**Decision:** ACCEPTED

```text
REVIEWER_HANDOFF = current accepted state
DECISION_LOG = why key decisions were made
EXECUTION_EVIDENCE = what was actually executed and proven
```

Consequences:
- Handoff is a dashboard, not a complete historical diary.
- Decision history remains queryable.
- Evidence preserves actual execution proof.
- Rollback capability must be separately verified; history alone does not guarantee rollback.

## Process rule P001 — Pull issues forward when naturally encountered

**Decision:** ACCEPTED

If discussion reaches a registered issue before its planned review order:
- identify its R-number;
- discuss it immediately;
- record the decision;
- later skip or only verify it.

