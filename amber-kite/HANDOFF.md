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
RULE_CONCEPT_ROWS=112
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
