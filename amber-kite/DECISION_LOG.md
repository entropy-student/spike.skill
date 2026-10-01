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


## D004 — One authoritative active-governance manifest

**Decision:** ACCEPTED

Create one short manifest that answers:

- what Core version is active;
- what specialist rules/addenda are active;
- what version/revision each active rule uses.

README, SKILL, metadata and templates must not keep their own competing active-rule inventories.

Reason:
Current status drift across files can make different Reviewers load different rule sets.


## D005 — Secret authority remains Owner-only; execution may be delegated

**Decision:** ACCEPTED

```text
Owner controls Secret authority.
Executor may perform explicitly delegated technical Secret operations only within the exact approved scope.
```

Reason:
This preserves Owner control without requiring the Owner to personally perform every technical Secret operation.


## D006 — Default execution channel is sticky; deviations are explicit

**Decision:** ACCEPTED

```text
default channel works -> use it
default channel fails -> diagnose/repair
fallback needed -> state reason + Reviewer-approved deviation
fallback used -> does not redefine default automatically
```

Using an existing verified connection path is normal execution. Changing login/trust/account/permission mechanics is a separate infrastructure-level change.


## D007 — Owner instructions do not silently waive safety rules

**Decision:** ACCEPTED

```text
Owner decides what/why/authorization.
Governance controls safe execution by default.
Explicit scoped exception is required to waive a Governance rule.
```

Reason:
Normal project instructions had previously been interpreted as permission to skip backup, evidence, rollback or other safety steps.


## D008 — Every Gate has a maximum advancement endpoint

**Decision:** ACCEPTED

A Gate must declare:
```text
CURRENT_OBJECTIVE
MAX_ENDPOINT_THIS_ROUND
MANDATORY_REVIEW_STOP
```

No Agent may continue beyond that endpoint merely because prior steps succeeded.

Conditional preauthorization is valid only within the explicit Gate boundary and cannot silently cross into a new material stage or risk boundary.


## D009 — Clear Owner intervention boundary

**Decision:** ACCEPTED

Reviewer decides ordinary technical choices within the Gate.
Owner decides whether to accept material consequences.

Reviewer escalation must include:
- why escalation is necessary;
- exact decision requested;
- consequences/tradeoffs of the options.


## D010 — Governance-edit authorization is explicit and single-round

**Decision:** ACCEPTED

```text
project authority != governance-edit authority

Governance edit allowed only when:
Owner explicitly authorizes this Governance modification round.

Authorization expires after that round.
Next round = fresh Owner authorization required.
```


## D011 — GitHub canonical is the only authoritative Governance source

**Decision:** ACCEPTED

```text
GitHub canonical = authority
local/sandbox copy = avoid by default
temporary local materialization = non-authoritative + ephemeral + version-pinned
conflict between local and GitHub = GitHub wins
```


## D012 — Reviewer interprets Governance; Executor executes the Gate

**Decision:** ACCEPTED

```text
Reviewer:
GitHub Governance -> understand applicable rules -> build Gate

Executor:
read Gate -> execute Gate -> stop on obvious internal contradiction
```

Executor is not a second Governance interpreter.


## D013 — Persistent Executor Handoff is removed; its responsibilities are split

**Decision:** ACCEPTED

```text
Gate
-> Executor
-> Execution Evidence + short completion packet
-> Reviewer
-> Reviewer Handoff

Rollback/Recovery Record remains separate.
```

The next Agent continues from Reviewer-accepted state, not an Executor self-declared completion state.


## D014 — Compression-first Governance structure

**Decision:** ACCEPTED

Principles:
- aim for one compact operational Governance surface where practical;
- compress before splitting into more files;
- Core contains only universal rules;
- specialist detail lives only where conditionally needed;
- avoid multiple master documents repeating the same information;
- a new Governance file requires a clear reason why it cannot be merged safely into an existing one.

This decision resolves the design direction for R08 and R09 and establishes the anti-sprawl rule captured as R33.


## D015 — Governance Handoff is continuity-only; history is non-authoritative

**Decision:** ACCEPTED

- Governance Handoff = current governance-refactor continuity only.
- Historical/superseded proposals = archive/history only, never a current rule source.
- Active Governance must not be reconstructed from historical snippets.


## D016 — Canonical status vocabulary

**Decision:** ACCEPTED

Use a small shared status set across Governance. Keep interpretation details in a separate reason field.


## D017 — Keep Canary generic in Core

**Decision:** ACCEPTED

Core:
first real-impact action -> smallest meaningful real-world test first.

Details:
belong to the current Gate/project/domain-specific procedure.
