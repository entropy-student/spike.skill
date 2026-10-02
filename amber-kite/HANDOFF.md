# Amber Kite — HANDOFF

> Status: SHADOW / DESIGN-ONLY / NON-OPERATIONAL
> Branch: `lab/amber-kite-27`
> Canonical production governance remains: `main:vps-project-governance/`
> Maintainer: current Reviewer / design session
> Rule: this workspace MUST NOT be treated as active Governance until Owner explicitly promotes it.

## 1. Purpose

Amber Kite is a shadow refactor workspace for reorganizing the existing VPS Project Governance.

The current production governance is intentionally frozen. This workspace exists to:

- build a clear macro map of the governance system;
- separate core workflow from specialist safety rules;
- identify duplicated, misplaced, conflicting, stale or unnecessary content;
- design a simpler information architecture without changing operational semantics by accident;
- preserve a durable record of planning, progress, Owner feedback and decisions.

It does NOT authorize changes to `vps-project-governance/`.

## 2. Problem Statement

The existing governance has a sound core idea but its information architecture has become difficult to reason about.

Current symptoms identified with the Owner:

- the overall system is hard to see as a single map;
- the same concepts appear in multiple files and layers;
- Core rules and specialist Contracts overlap;
- Handoff files sometimes mix current state, rules, lessons and release history;
- templates repeat Governance explanations;
- Reviewer startup requires too much simultaneous context reconciliation;
- recent Reviews have therefore been more error-prone.

Working hypothesis:

> The primary problem is not the main workflow itself; it is information architecture, duplication and responsibility overlap.

## 3. Agreed Macro Model

### Core problem being solved

Enable multiple humans/Agents to advance a changing project safely and continuously without relying on chat memory, uncontrolled execution or unverified claims.

### Main loop

```text
CURRENT STATE
  -> DEFINE CURRENT TASK
  -> PREFLIGHT
  -> EXECUTE
  -> EVIDENCE + REVIEW
  -> UPDATE STATE
  -> repeat
```

Short form:

```text
State -> Task -> Execution -> Evidence -> Review -> New State
```

### Three information layers

```text
1. CORE
   universal rules used by every project

2. PROJECT STATE
   only the current factual truth of one project

3. CURRENT GATE / EXECUTION
   only this round's authorized work, evidence and decision
```

### Specialist plugins

Specialist rules should be loaded only when relevant:

- Shared VPS / Storage
- SSH / Secret
- Target Host
- Provider / Payment
- Closeout
- other future specialist domains

A specialist Contract must not become a second parallel project-management workflow.

## 4. Design Principles Agreed with Owner

1. One rule should have one authoritative home.
2. Rules and project facts must be separated.
3. Reviewer should load only the minimum relevant rule set for the current Gate.
4. Existing production Governance must remain untouched during design.
5. First refactor pass should reorganize semantics before changing semantics.
6. Any proposed semantic change must be separately identified and reviewed.
7. The shadow workspace must remain clearly non-operational until explicit Owner promotion.

## 5. Work Plan

```text
Phase 0  Freeze existing production Governance                  DONE
Phase 1  Build macro map                                        DONE (v1)
Phase 2  Inventory old content and classify each rule           NEXT
Phase 3  Identify duplication / conflicts / errors / stale text PENDING
Phase 4  Design new file architecture                           PENDING
Phase 5  Write shadow version                                   PENDING
Phase 6  Old-vs-new semantic coverage verification              PENDING
Phase 7  Owner decision on trial / promotion                    PENDING
```

No Phase may silently alter `main:vps-project-governance/`.

## 6. Current Progress

### Completed

- Read the full current `vps-project-governance/` tree on `main`.
- Confirmed 19 files in the current Governance workspace.
- Identified the macro workflow.
- Identified the three-layer model.
- Identified specialist Contracts as conditional plugins rather than parallel workflows.
- Created isolated branch `lab/amber-kite-27`.
- Created shadow workspace `amber-kite/`.
- Created initial macro map and source inventory.

### Current Step

Phase 2 preparation: convert the existing file-level inventory into a rule-level inventory.

The next analysis should classify individual rules, not rewrite them.

## 7. Owner Feedback / Decision Log

### Decision 001 — Macro map first
Owner feedback:
- long explanations were still too confusing;
- needed a map-like macro concept before discussing individual documents.

Accepted response:
- reduce the system to one main loop plus conditional specialist rules.

### Decision 002 — Core problem + six-step loop accepted
Owner confirmed the macro model became clearer:
- current state;
- current task;
- preflight;
- execution;
- evidence/review;
- updated state.

### Decision 003 — Refactor direction accepted
Owner accepted:
- one main line;
- three information layers;
- specialist plugins.

### Decision 004 — Do not touch existing Governance
Owner explicitly requested that existing documents remain untouched because other projects/Agents may currently depend on them.

Implementation:
- production Governance remains on `main`;
- shadow work is isolated on branch `lab/amber-kite-27`.

### Decision 005 — Use an unrelated internal name
Owner requested a temporary name that other Agents would not naturally recognize as another Governance source.

Implementation:
- internal codename: **Amber Kite**;
- directory: `amber-kite/`.

### Decision 006 — Persistent handoff required
Owner requested a handoff document that records:
- plan;
- progress;
- feedback after each step;
- decisions and next actions.

Implementation:
- this file is the single continuity Handoff for the shadow refactor.

## 8. Safety / Authority Boundary

```text
AMBER_KITE_OPERATIONAL_AUTHORITY=NONE
OLD_GOVERNANCE_MODIFIED=NO
MAIN_BRANCH_MODIFIED=NO
PRODUCTION_PROJECTS_MIGRATED=NO
```

If an Agent encounters this workspace, it must not use it as project Governance unless the Owner has explicitly promoted a future version.

## 9. Next Step

Create a **rule-level inventory** of the existing Governance.

For each rule/concept, record:

- current source(s);
- intended future home;
- whether it is universal Core or conditional specialist logic;
- duplicate locations;
- possible conflict/staleness;
- whether it is policy, project state, historical lesson, template field or example;
- recommendation: KEEP / MOVE / MERGE / DELETE-DUPLICATE / REVIEW-SEMANTICS.

Do not rewrite the operational rule yet.

## 10. Current Status Summary

```text
OVERALL=SHADOW_REFACTOR_IN_PROGRESS
CURRENT_PHASE=PHASE_1_COMPLETE_PHASE_2_NEXT
PRODUCTION_GOVERNANCE_FROZEN=YES
OWNER_INTERVENTION_REQUIRED=NO
NEXT_ACTION=RULE_LEVEL_INVENTORY
```


---

## 11. Phase 2 Update — Rule Classification and Conflict Capture

### Owner instruction

Owner approved starting classification with two constraints:

1. do not delete or modify any existing Governance content;
2. pay special attention to contradictions, front/back inconsistencies and ambiguous authority.

Owner also requested that the next step review findings one by one, with:
- Reviewer recommendation;
- reason for the recommendation;
- explicit Owner feedback/decision recorded before proceeding.

### Work completed

Created:

- `RULE_MATRIX.md` — first rule-level semantic inventory;
- `CONFLICT_REGISTER.md` — suspected conflicts/inconsistencies, kept unresolved.

Current inventory size:

```text
RULE_CONCEPT_ROWS=128
CONFLICT_OR_AMBIGUITY_ITEMS=20
EXISTING_GOVERNANCE_FILES_MODIFIED=0
DELETIONS=0
SEMANTIC_RESOLUTIONS_MADE=0
```

Important initial finding:

The main problem appears to be a combination of:
- duplicated normative wording;
- stale current-facing summaries after newer addenda;
- unclear separation between fresh factual evidence and accepted canonical Handoff state;
- unclear document responsibility boundaries;
- historical material mixed with current operational material.

Not every registered item is a true contradiction. The register deliberately separates direct conflicts, ambiguity, stale text, duplication and historical-noise risk so later review does not over-correct.

### Current phase

```text
Phase 0  Freeze existing production Governance                  DONE
Phase 1  Build macro map                                        DONE
Phase 2  Inventory old content and classify each rule           PASS_CANDIDATE
Phase 3  Review conflicts / duplication / semantic issues       NEXT
Phase 4  Design new file architecture                           PENDING
Phase 5  Write shadow version                                   PENDING
Phase 6  Old-vs-new semantic coverage verification              PENDING
Phase 7  Owner decision on trial / promotion                    PENDING
```

### Proposed next review order

Start with the issues most likely to cause actual Reviewer errors:

1. R03 — fresh factual evidence vs accepted Handoff precedence;
2. R06 — current Handoff vs append-only audit semantics;
3. R02 — old Core Source-of-Truth model vs newer Source Policy;
4. R01/R12 — active addendum/status drift across SKILL/README/metadata.

For each item, present only:
- the conflict in plain language;
- current behavior;
- recommendation;
- reason;
- consequences/trade-off.

Then record Owner decision before moving to the next cluster.


### Decision 007 — Reality vs Handoff precedence

Owner decision: **ACCEPTED**

Agreed model:

```text
Reality
  -> fresh authoritative evidence
  -> Reviewer reconciliation
  -> REVIEWER_HANDOFF updated
```

Interpretation:

- Fresh authoritative evidence determines what is actually true now.
- `REVIEWER_HANDOFF.md` records the latest Reviewer-accepted canonical project state.
- If fresh evidence contradicts the Handoff, the Handoff is treated as stale until Reviewer reconciliation.
- Fresh Executor output does not itself become canonical merely because it is newer; Reviewer still accepts/reconciles it.

Short rule:

> Evidence proves reality; Handoff preserves Reviewer-accepted reality.

No production Governance text has been changed.


### Process Decision 008 — Allow early issue pull-forward

Owner feedback:
- If discussion naturally reaches one of the registered conflict/issues before its scheduled turn, identify the corresponding Rxx immediately and include it in the current discussion.
- Do not force the original review order when an earlier topic depends on a later issue.
- Record the decision once resolved so the later scheduled review can skip or only verify it.

Accepted process:
```text
natural discussion reaches registered issue
→ identify Rxx
→ pull it forward
→ discuss/recommend/record Owner decision
→ later review marks it already resolved
```

### New issue raised by Owner — rollback assurance

Owner asked how the governance can guarantee rollback/recovery rather than merely recording history.

Assessment:
- Existing matrix contains rollback-related rules (for example D03 critical writes require rollback/recovery boundaries).
- Existing conflict register R06/R07 touch document responsibility and history/evidence separation.
- However, the current conflict register does not yet contain a dedicated information-architecture issue for proving rollback capability end-to-end.

Action:
- Add a new conflict item R21 for rollback/recovery assurance.


### Owner Pain Points 009 — relay, return format, execution drift

Owner added three recurring pain points for explicit review:

1. Owner does not have a stable rule for what materials must be passed between Reviewer and Executor, including when repository references are insufficient for visual review.
2. Reviewer/Executor completion messages are inconsistent, forcing repeated retraining for PASS/RETURN, problems, progress, next step and relay requirements.
3. Agents may state that they read project rules but later execute with drift; example: an expected SSH operating route later changed to provider/panel operation.

Registered as:
- R22 Owner relay package contract
- R23 role completion packet consistency
- R24 critical invariant / execution-channel drift prevention

Owner also authorized pulling registered issues forward whenever discussion naturally reaches them.


### Decision 010 — Current state, decision history, execution evidence are separated

Owner decision: ACCEPTED.

Agreed information model:

```text
REVIEWER_HANDOFF
= current accepted project state

DECISION_LOG
= why key decisions were made, including Owner feedback, Reviewer recommendation and trade-offs

EXECUTION_EVIDENCE
= what was actually executed and what evidence proves the result
```

Implications:
- Handoff is a current dashboard, not the full historical archive.
- Historical reasoning is queryable through Decision Log.
- Execution history/proof remains in Evidence.
- Rollback capability remains a separate verified capability, not something guaranteed merely by historical records.

### Owner Pain Points 011 — completion proof, Gate sizing, Owner boundary, durable recording

Owner added four recurring problems:

1. Executor may claim work is complete or passed when it is not; Reviewer may also PASS when required evidence is missing, unreadable, inaccessible or never actually inspected.
2. Some Gates appear unnecessarily fragmented even when adjacent work could plausibly execute in one bounded batch and be reviewed together.
3. Owner is sometimes asked to make technical decisions unexpectedly, and the boundary between Owner-only decisions and Reviewer-owned technical judgment is not predictable.
4. Reviewer or Executor sometimes fails to persist project state/evidence/decisions before stopping; if the chat/browser crashes, the durable record may lag reality and work may need to be rediscovered or repeated.

Registered as R25-R28.


### Owner Pain Points 012 — Governance self-write authority, read completeness, local-copy drift

Owner added three governance-management concerns for later review:

1. Reviewer/Executor has sometimes written to the Governance repository/content without explicit Owner authorization. Owner believes this contributed to current Governance disorder.
2. Reviewer is expected to understand the full Governance, but may only read part of it and omit active rules; meanwhile Executor prompts often instruct the Executor to read Governance too. The correct reading responsibility for each role is unclear.
3. Owner does not want Reviewer or Executor to download/copy Governance into sandbox/local storage because local historical copies may later be read instead of the latest GitHub canonical version.

Registered as R29-R31.

The previously opened Source-of-Truth discussion remains pending Owner response and is not resolved by this entry.


### Decision 013 — Separate rule authority from project reality

Owner decision: ACCEPTED.

Agreed model:

```text
RULE AUTHORITY
= which governance rule should be followed

PROJECT REALITY
= what is actually true in the project now
```

They must not share one combined Source-of-Truth ranking.

Rule authority:
```text
Owner explicit decision
→ active bounded override
→ current GitHub canonical Governance
```

Project reality:
```text
fresh authoritative evidence
→ Reviewer judgment/reconciliation
→ REVIEWER_HANDOFF records accepted current state
```

The older single mixed precedence model is considered unsuitable for the shadow redesign.


### Decision 014 — Single active-governance manifest

Owner decision: ACCEPTED.

Agreed direction:

- There must be exactly one authoritative manifest that lists the currently active Governance Core and specialist rules/addenda.
- README, SKILL, metadata, templates and Handoffs must not independently maintain competing active-rule lists.
- Other files may reference the manifest but must not become alternate version/status registries.
- The manifest should be short and readable by both humans and tooling.

This shadow decision resolves the design issue behind R01 and R12.


### Decision 015 — Secret authority vs delegated execution

Owner decision: ACCEPTED.

Agreed model:

```text
SECRET AUTHORITY = Owner-only
SECRET TECHNICAL EXECUTION = may be explicitly delegated
```

Owner retains authority over:
- whether a Secret should exist;
- which Secret/purpose is authorized;
- target environment/location;
- rotation/revocation decisions;
- whether delegation is allowed.

Executor may perform only the explicitly delegated technical actions within the bounded allowlist and must not expand scope.

This resolves the apparent conflict between "Secret is Owner-only" and delegated Secret provisioning.


### Decision 016 — Default execution channel and reviewed deviation

Owner decision: ACCEPTED.

Agreed model:

- Each project records a default execution channel and, where useful, a recovery/backup channel.
- The confirmed default channel must be used by default.
- If the default channel fails, first diagnose and repair the normal path where practical.
- A temporary alternative channel must not be silently substituted.
- Any deviation must record reason, actual channel, Reviewer approval and whether the default channel changed.
- Temporary recovery use does not automatically redefine the project default.
- Ordinary technical repair remains Reviewer-owned; Owner intervention is only required when the deviation introduces Owner-only consequences such as new credentials, account authorization or material security changes.

This decision resolves the practical execution-channel portion of R05 and R24.


### Decision 017 — Owner instruction changes goals/authorization, not safety rules by default

Owner decision: ACCEPTED.

Agreed model:

- Owner may change project goals, priorities, business choices and consequential authorization.
- A normal Owner instruction does not automatically waive backup, rollback, evidence, validation, Secret-safety or Shared-Infra boundaries.
- If an exception to Governance is genuinely intended, it must be explicit, scoped and identifiable as a rule exception rather than inferred from a normal project instruction.
- Agents must not treat vague urgency or "just do it" wording as permission to skip safety steps.

Owner explicitly recognized that previous project work sometimes skipped steps after ordinary instructions, confirming this is a real operational failure mode.


### Owner Feedback 018 — Concern about agents advancing farther than expected

Owner concern:
Even when a sequence is technically safe and within Reviewer authority, the Agent may continue farther than the Owner expected. The Owner may not have explicitly stated the expected stopping point or may have forgotten to do so.

Implication:
Authority alone is not enough. Each Gate needs an explicit maximum advancement boundary so "technically allowed" does not become "unexpectedly progressed."

Registered as R32 and linked to R15 conditional preauthorization / R26 Gate sizing.


### Decision 018 — Explicit maximum advancement boundary per Gate

Owner decision: ACCEPTED.

Agreed model:

Every Gate / round must declare:
- current objective;
- maximum endpoint allowed in this round;
- the checkpoint where execution must stop for review.

If the Owner did not explicitly authorize continuation beyond that endpoint, the Agent must not cross into the next material stage or risk boundary.

Conditional continuation is allowed only when it is explicitly inside the declared round boundary. Technical permission alone is not permission to keep advancing indefinitely.

This decision resolves R32 and constrains R15 conditional preauthorization.


### Decision 019 — Owner intervention boundary

Owner decision: ACCEPTED.

Agreed model:

Reviewer should independently decide ordinary technical implementation, testing, repair strategy, rollback design and Gate decomposition within the current authorized boundary.

Owner intervention is required when the decision creates or accepts material consequences such as:
- real payment/cost;
- public production exposure;
- deletion of real data;
- account/permission authorization;
- Secret authority changes;
- materially irreversible or security-sensitive action;
- product/business-direction change;
- crossing the declared maximum Gate endpoint.

When Reviewer escalates to Owner, Reviewer must state:
1. why Reviewer cannot safely decide within existing authority;
2. what exact decision the Owner must make;
3. the material consequences/tradeoffs of the available choices.

This resolves R27.


### Decision 020 — Governance mutation requires one-round Owner authorization

Owner decision: ACCEPTED.

Agreed model:
- Project execution/review authority never implies Governance mutation authority.
- Canonical Governance may be modified only when Owner gives explicit Governance-change authorization.
- That authorization is valid for exactly one modification round.
- A later modification round requires a fresh Owner authorization; prior approval cannot be carried forward.
- Agents may always record/propose Governance issues without mutation authority.

This resolves R29.


### Decision 021 — GitHub canonical is the only authoritative Governance source

Owner decision: ACCEPTED for R31.

Agreed model:
- Governance should be read directly from GitHub canonical whenever tooling permits.
- Project/local/sandbox workspaces should not keep working Governance copies by default.
- If temporary local materialization is technically unavoidable, it must be non-authoritative, ephemeral, version/commit-pinned, and must not be reused as the next session's Governance source.
- If local/sandbox content differs from GitHub canonical, GitHub canonical wins.


### Decision 022 — Reviewer loads Governance; Executor executes the Gate

Owner decision: ACCEPTED for R30.

Agreed model:
- Reviewer is responsible for resolving the current GitHub canonical Governance version/manifest and reading the active Core plus Gate-relevant specialist rules.
- Reviewer translates those rules into the current Gate package.
- Executor does not independently reconstruct or reinterpret the whole Governance.
- Executor reads the Gate and executes within it.
- Executor must stop only when the Gate itself contains an obvious contradiction or explicit self-conflict (for example, "do not publish" and later "publish now").
- If Reviewer omitted a Governance rule from the Gate, that is primarily a Reviewer loading/design failure, not a requirement for Executor to reread all Governance.


### Decision 023 — Remove persistent Executor Handoff; preserve its functions by separation

Owner decision: ACCEPTED for R07.

Agreed model:
- Persistent EXECUTOR_HANDOFF is removed from the future design.
- Executor still sends a short completion/relay packet to Reviewer after each Gate.
- Execution facts, changes, validation, anomalies and evidence references live in EXECUTION_EVIDENCE.
- Reviewer-accepted current project state and next continuation point live in REVIEWER_HANDOFF.
- Rollback/recovery capability, recovery artifacts and restore method live in a dedicated rollback/recovery record.
- The next Agent continues from Reviewer-accepted state, not directly from an Executor self-claim.

This preserves auditability, cross-Agent continuity and rollback assurance while removing duplicate long-lived records.


### Decision 024 — Compression-first Governance design

Owner decision: ACCEPTED.

Agreed:
- prefer one-page / minimum-file Governance where practical;
- compress before splitting;
- do not create a new Governance file unless separation is necessary for clarity, conditional loading, or safety;
- Core keeps only universal rules and points to specialist rules when needed;
- README/SKILL/Core/Handoff must not duplicate the same master information;
- historical explanations and examples should stay out of the normal loading path.

This resolves the design direction for R08 and R09 and adds a general anti-sprawl principle.


### Decision 025 — Governance Handoff is continuity-only; historical proposals leave the active path

Owner decision: ACCEPTED for R10 and R11.

Agreed:
- Governance Handoff records only current governance-refactor progress, accepted decisions, unresolved items and next continuation point.
- It must not duplicate active rule text, active-rule inventories, loading instructions or long incident history.
- Superseded proposals/history may be retained, but they are not part of the normal Governance loading path.
- Historical files must be clearly marked as non-current/non-authoritative and point to the current rule when useful.


### Decision 026 — Use a small canonical status vocabulary

Owner decision: ACCEPTED for R13.

Agreed:
- use a small shared set of status values instead of each document inventing its own wording;
- explanatory nuance belongs in a short reason field, not in the status label itself.

Candidate vocabulary:
PASS / PARTIAL / UNVERIFIED / BLOCKED / NOT_APPLICABLE.


### Decision 027 — Generic Canary principle stays short; domain details stay local

Owner decision: ACCEPTED for R16.

Agreed:
- Core keeps only the universal principle: before the first action that has real user, money, or production impact, perform the smallest meaningful real-world test first.
- Domain-specific details (payment amount, webhook checks, refund checks, deployment rollout details, etc.) stay in the relevant Gate/project/specialist rule.
- Do not duplicate full Canary procedures in Core.


### Decision 028 — Ambiguous-result retry rule and material-drift definition

Owner decision: ACCEPTED for R17 and R18.

Agreed:
- if the outcome of a consequential action is unclear, inspect current authoritative reality before any retry;
- do not blindly repeat an action whose prior execution state is unknown;
- "material drift" means any change that could invalidate a prior judgment, authorization, evidence set, accepted state, or rollback/recovery assumption;
- irrelevant wording/history-only changes are not material drift.


### Decision 029 — Templates are record formats only; Reviewer uses full short-directory scanning

Owner decision: ACCEPTED for R19 and R20.

Agreed:
- templates may define how information is recorded, but must not introduce unique behavioral rules;
- if a template/example conflicts with Governance, Governance wins;
- minimize standalone templates where compact inline schemas are sufficient;
- every Reviewer round reads the complete short Governance entry surface;
- that entry surface includes the full specialist-rule directory and trigger conditions;
- Reviewer checks every specialist trigger each round;
- triggered specialist rules are read in full;
- if applicability is uncertain, default to reading the specialist rule.

This avoids both context overload and silent rule omission.


### Decision 030 — Verified rollback state and explicit Owner relay contract

Owner decision: ACCEPTED for R21 and R22.

Agreed:
- rollback capability must answer five things: target, recovery artifacts, method, proof/compatibility, and trigger/stop condition;
- Reviewer Handoff exposes only the latest rollback status compactly; detailed proof remains in Evidence/recovery records;
- each Gate defines Reviewer->Executor and Executor->Reviewer relay requirements;
- Owner relay should be NONE whenever tools already provide access;
- when a required file/image is not directly reviewable, the relay requirement must explicitly say what the Owner must upload/forward.


### Decision 031 — Fixed completion packets and persistent critical constraints

Owner decision: ACCEPTED for R23 and R24.

Agreed:
- Executor and Reviewer use fixed short completion packets rather than free-form endings.
- Missing fields are explicitly NONE, not omitted.
- Reviewer Handoff keeps a compact CRITICAL_CONSTRAINTS block for currently active project invariants.
- Each Gate re-asserts the constraints relevant to that round immediately before execution.
- Silent deviation is forbidden.
- Changing a critical constraint requires an explicit reviewed change path and Owner involvement when it crosses Owner authority.


### Decision 032 — PASS requires inspected evidence; Gates split on risk boundaries

Owner decision: ACCEPTED for R25 and R26.

Agreed:
- Reviewer PASS requires every required acceptance item to exist, be reviewable by the current Reviewer, actually be inspected, and satisfy the criterion.
- Missing/inaccessible/unreadable/not-inspected required evidence blocks PASS and triggers the smallest necessary relay/action request.
- PASS_CANDIDATE from Executor is never a substitute for evidence.
- Gates are combined by default when target, rollback domain, evidence boundary and risk level remain compatible.
- Gates split when a material risk/authority/rollback boundary changes.
- Gate sizing follows risk boundaries, not individual operational steps.


### Decision 033 — Persist and read back before declaring a round complete

Owner decision: ACCEPTED for R28.

Agreed:
- a consequential Gate/result is not considered fully closed merely because the chat reached a conclusion;
- required durable records must be written first;
- the durable write must be read back/verified;
- only then may Reviewer/Executor report the round as complete, PASS, or STOP;
- this applies to Evidence, Reviewer Handoff, Decision Log, and other required state records according to the Gate.


## Shadow vNext Build Completion

Owner authorized one combined shadow-build round.

Completed in this round:
- designed the compressed vNext architecture;
- wrote `amber-kite/VNEXT.md` as the single operational shadow rule surface;
- kept specialist rules inside the same file behind a mandatory trigger scan;
- wrote `amber-kite/COVERAGE.md` as audit-only old-to-new mapping;
- corrected the rule inventory count from stale `112` to actual `128` unique rows;
- mapped all 128 inventory rows to vNext with 0 unmapped;
- did not modify production `vps-project-governance/`.

Current phase:
```text
Phase 0 Freeze production Governance                 DONE
Phase 1 Macro map                                    DONE
Phase 2 Inventory/classification                     DONE
Phase 3 Resolve conflicts/design decisions           DONE (33/33)
Phase 4 Design new architecture                      DONE
Phase 5 Write shadow version                         DONE
Phase 6 Old-vs-new coverage verification             PASS_CANDIDATE (128/128 mapped)
Phase 7 Owner trial/promotion decision               NEXT
```

Important:
- `VNEXT.md` remains SHADOW / NON-OPERATIONAL.
- Promotion or canonical replacement requires a new explicit Owner Governance-change authorization round.


## Semantic Repair Round — draft2

Owner explicitly authorized this shadow-Governance modification round.

Work completed:
- re-audited `VNEXT.md` against source documents rather than relying only on the 128-row matrix;
- restored weakened/missing SSH trust, Secret containment, Target Host, storage/data recovery, build identity, automation/REAUTH, Provider recovery, and Closeout safeguards;
- restored bounded Governance pin metadata;
- corrected `COVERAGE.md` so 128/128 no longer falsely implies complete semantic equivalence;
- repeated strong-rule source scanning after repair; no known unrestored safety gap remains;
- classified the remaining low-match items as non-gaps (explicit late-payment timing split; optional SSH alias record field).

Current status:
```text
VNEXT_VERSION=v0.2.0-draft2
MATRIX_COVERAGE=128/128
ACTIVE_SOURCE_SEMANTIC_AUDIT=PASS_CANDIDATE
KNOWN_UNRESTORED_SAFETY_GAPS=0
PRODUCTION_GOVERNANCE_MODIFIED=NO
SHADOW_PROMOTED=NO
SHADOW_READY_FOR_CONTROLLED_TRIAL=YES
```

This Governance-edit authorization is consumed by this repair round. Any later shadow/canonical Governance modification requires fresh Owner authorization.


### Final read-back — semantic repair round

Verified after repair:
```text
VNEXT_VERSION=v0.2.0-draft2
KEY_SAFETY_REPAIRS_READBACK=PASS
MATRIX_COVERAGE=128/128
SOURCE_LEVEL_STRONG_RULE_SCAN=PASS_CANDIDATE
KNOWN_UNRESTORED_SAFETY_GAPS=0
COVERAGE_OVERCLAIM_CORRECTED=YES
FILES_CHANGED_OUTSIDE_AMBER_KITE=0
PRODUCTION_GOVERNANCE_MODIFIED=NO
```

The remaining source-scan low-match items are classified as non-gaps:
- "late payment" generic wording is replaced by explicit pre-expiry/post-expiry timing shapes;
- SSH config alias is an optional factual convenience field, not policy.

Old metadata contains version/status metadata only; the superseded Closeout proposal is historical/non-authoritative and has no reason to enter the operational loading path.

This authorized shadow-Governance modification round is now CLOSED. Any further Governance edit requires fresh Owner authorization.


## Semantic Repair Round — draft3

Owner explicitly authorized another shadow-Governance repair/re-audit round.

Repairs completed:
- restored remaining active-contract safeguards found by section-by-section audit;
- corrected the loading model to honor R20: universal surface + complete trigger scan + only triggered specialist sections;
- restored PROJECT_GOAL and SYSTEM_MAP continuity and Reviewer-only canonical Handoff ownership;
- rechecked all accepted design decisions against the implemented vNext surface;
- reran strong normative-source scanning after repair.

Verified state before final seal:
```text
VNEXT_VERSION=v0.2.0-draft3
OWNER_DECISION_ALIGNMENT=24/24_PASS
MATRIX_COVERAGE=128/128
KNOWN_UNRESTORED_SAFETY_GAPS=0
RESIDUAL_LOW_MATCH_TRUE_GAPS=0
PRODUCTION_GOVERNANCE_MODIFIED=NO
SHADOW_PROMOTED=NO
```

Final compare/read-back completed. This repair round is closed.


### Draft3 final seal

```text
DECISION=PASS
CURRENT_GATE=SHADOW_GOVERNANCE_DRAFT3_SEMANTIC_REPAIR_AND_REAUDIT
THIS_ROUND_RESULT=PASS
OWNER_DECISION_ALIGNMENT=24/24_PASS
MATRIX_COVERAGE=128/128
FINAL_STRONG_RULE_SCAN_TRUE_GAPS=0
KNOWN_UNRESTORED_SAFETY_GAPS=0
FILES_CHANGED_OUTSIDE_AMBER_KITE=0
PRODUCTION_GOVERNANCE_MODIFIED=NO
SHADOW_PROMOTED=NO
SHADOW_READY_FOR_CONTROLLED_TRIAL=YES
OWNER_RELAY_REQUIRED=NONE
OWNER_ACTION_REQUIRED=NONE
```

This authorized Governance modification round is CLOSED. Any later shadow or canonical Governance edit requires fresh Owner authorization.
