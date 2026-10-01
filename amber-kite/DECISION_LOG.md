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



## D003 — Separate Rule Authority from Project Reality

**Decision:** ACCEPTED

Do not use one combined Source-of-Truth list for both rules and facts.

```text
RULE AUTHORITY:
Owner explicit decision
→ active bounded override
→ current GitHub canonical Governance

PROJECT REALITY:
fresh authoritative evidence
→ Reviewer reconciliation
→ REVIEWER_HANDOFF stores accepted state
```

Reason:
Rules answer "what should be followed"; evidence answers "what is actually true." Mixing them caused contradictory precedence behavior.
