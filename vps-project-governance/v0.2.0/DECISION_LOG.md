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


## D018 — No blind retry; define material drift by invalidation impact

**Decision:** ACCEPTED

```text
ambiguous consequential result
-> inspect authoritative current state
-> then decide whether retry is safe
```

Material drift = a change capable of invalidating prior judgment, authorization, evidence, accepted state, or rollback/recovery assumptions.


## D019 — Templates cannot create policy; Reviewer scans all specialist triggers every round

**Decision:** ACCEPTED

- Template = recording format, not rule source.
- Reviewer reads the complete short Governance entry surface each round.
- Reviewer checks every specialist-rule trigger.
- Triggered or uncertain specialist rules are read in full.


## D020 — Rollback must be demonstrably usable; relay requirements are explicit

**Decision:** ACCEPTED

Rollback:
target + recovery artifacts + method + proof + trigger/stop conditions.

Relay:
Each Gate states exactly what must move between Reviewer and Executor. Owner relay defaults to NONE unless a tool-access gap requires manual forwarding.


## D021 — Fixed completion packets; critical constraints persist across Gates

**Decision:** ACCEPTED

Executor/Reviewer endings use fixed short fields.

Current project invariants remain visible in Reviewer Handoff and are re-asserted in every applicable Gate. No silent substitution or drift.


## D022 — Evidence-complete PASS and risk-boundary Gate sizing

**Decision:** ACCEPTED

PASS requires:
required -> available -> reviewable -> inspected -> sufficient.

Gate sizing:
combine by default; split on material risk/authority/rollback/acceptance boundaries, not per operational step.


## D023 — Persist and read back before completion

**Decision:** ACCEPTED

```text
result reached
-> write required durable records
-> read back and verify
-> only then declare PASS / STOP / round complete
```

Chat-only completion is not durable project state.


## D024 — Source-level semantic audit is required before migration PASS

**Decision:** ACCEPTED BY OWNER REQUEST / IMPLEMENTED IN AUTHORIZED REPAIR ROUND

Matrix mapping alone is insufficient proof of semantic preservation.

Required migration verification:
```text
rule-matrix mapping
+
active source-document semantic audit
+
explicit list of intentional Owner-approved differences
=
migration coverage assessment
```

The repaired shadow draft2 restores the safety semantics found missing from draft1 while preserving the compression-first architecture.

Governance-edit authority for this round expires after durable write/read-back of the repair results.


## D025 — Reviewer Owner-facing return format

**Decision:** ACCEPTED

Reviewer responses to Owner use a concise Chinese-titled presentation layer:

- sections: 本轮结果 / 当前状态 / 当前问题 / 项目进度 / 下一步 / 你需要做什么;
- ordinary lines use **meaningful short label: one plain-language sentence**;
- important terms/states may be bolded;
- avoid unexplained technical jargon;
- project progress alone uses a compact code block showing the full project path with one stage per line and no blank lines;
- progress stages use PASS / RETURN->FIXED / IN_PROGRESS / NEXT / PENDING;
- keep Owner-visible stages compressed and meaningful;
- this presentation format does not replace the canonical machine/state fields stored in project records.

Executor completion format remains unchanged pending separate Owner review.


## D026 — Executor completion format

**Decision:** ACCEPTED

Executor completion responses to Reviewer use a compact label + one-sentence format:

- 结果;
- 改动;
- 验证;
- 问题;
- 回滚;
- 请 Reviewer 检查;
- Owner 转交.

Detailed technical proof remains in EXECUTION_EVIDENCE rather than being duplicated into the completion packet.

PASS_CANDIDATE remains an Executor claim only; Reviewer decides formal PASS.

Problem lines must name the real blocking reason rather than generic FAILED.
