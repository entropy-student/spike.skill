# Amber Kite — Conflict & Inconsistency Register v0

> Status: SHADOW ANALYSIS / NON-OPERATIONAL
> No existing Governance text has been changed.
> This register records suspected inconsistencies before any resolution.

## Severity legend

- **C1 — Direct conflict**: two active-looking statements can prescribe different behavior.
- **C2 — Authority ambiguity**: precedence/ownership can be interpreted in more than one way.
- **C3 — Stale current-document text**: a current-facing document omits or lags an accepted addendum/state.
- **C4 — Duplication risk**: same rule is copied widely enough that future drift is likely.
- **C5 — Historical noise**: obsolete/history text can be mistaken for current policy.
- **C6 — Scope ambiguity**: concept belongs to several layers/domains and trigger is unclear.

These are review categories, not final verdicts.

## R01 — Current addendum list is inconsistent across active-facing files

**Class:** C3 — Stale current-document text

Observed:

- `GOVERNANCE_HANDOFF.md` declares **Project Closeout and Workstation Hygiene Contract rev1** ACTIVE / VALIDATED.
- `SKILL.md` top operational-addenda sentence omits Closeout.
- `SKILL.md` loading order omits the Closeout contract.
- `README.md` "Skill structure" tree omits the Closeout contract.
- `README.md` current validation block omits Closeout.
- `metadata.yml` has no Closeout revision/status fields.

Why risky:

A Reviewer loading only SKILL/README/metadata can reasonably conclude Closeout is not part of the active rule set.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
Use one authoritative active-governance manifest for the Core and all active specialist rules. Other files reference it rather than maintaining separate active-rule lists.

## R02 — Source-of-truth model differs between old Core Reference and current Source Policy

**Class:** C1/C3

Current Source Policy / SKILL says Governance rules and project facts are separate, with GitHub canonical Governance in the rule precedence.

But `references/GOVERNANCE_V0_1_6.md` still contains an older single "Source of Truth" chain:

```text
Owner
→ Shared VPS Contract
→ REVIEWER_HANDOFF
→ current Gate Prompt
→ Evidence
→ Executor Handoff
→ README/history/chat
```

Why risky:

The old chain mixes rule authority with project factual state and can conflict with the newer Source Policy when the Core Reference is loaded as "full core rules."

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- abolish one mixed Source-of-Truth ranking;
- separate Rule Authority from Project Reality;
- old mixed precedence must not remain normative in the future shadow design.

## R03 — Factual precedence says Handoff first, but fresh host/provider read-back can supersede it

**Class:** C2

Several current files list:

```text
current accepted Reviewer decision / REVIEWER_HANDOFF
→ fresh authoritative read-back + accepted Evidence
```

Yet Target Host / Provider / GOVERNANCE_HANDOFF also say stronger fresh read-back supersedes stale documentation or prior diagnosis.

Why risky:

"Which fact wins right now?" is unclear when Handoff is stale but fresh read-back proves a changed reality.

Possible future distinction to review:

- **epistemic truth**: strongest fresh evidence;
- **accepted/canonical project state**: Reviewer-updated Handoff after reconciliation.

No decision made.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:

```text
Fresh authoritative evidence proves current reality
→ Reviewer reconciles
→ REVIEWER_HANDOFF becomes the updated canonical accepted state
```

The Handoff must not override stronger fresh reality evidence merely because it is the current document.

## R04 — Secret creation is Owner-only in Core, but delegated generation is active

**Class:** C2/C6

Older/core wording says Secret creation/rotation is Owner-only.

Newer active addendum allows exact delegated Secret generation after explicit Owner authorization.

Why risky:

Both statements are true only if the second is clearly modeled as a narrow exception to the first. Today that exception is repeated in several places, while the old Core Reference still reads as absolute.

Status: **SHADOW DECISION ACCEPTED.**

Accepted formulation:
- Secret authority/authorization remains Owner-only.
- Secret technical execution may be explicitly delegated within a bounded exact scope.
- Delegation does not transfer ownership/authority or imply any other consequential authorization.

## R05 — "SSH is Shared Infrastructure" vs ordinary SSH read-only connection recovery

**Class:** C6

Core classification lists SSH under Shared Infrastructure.

Newer rules say reading the registered SSH connection contract and running a bounded read-only identity probe does not count as a Shared Infra write.

Why risky:

A literal Reviewer may RETURN merely for using existing SSH connectivity, while another Reviewer may treat all SSH actions as allowed.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- using the already verified server access channel is normal project execution;
- modifying the server login/trust/account/permission mechanism is Shared Infrastructure change;
- if the default channel fails, diagnose/repair first;
- alternate channels require explicit reason and Reviewer-approved deviation;
- temporary fallback does not silently become the new default.

## R06 — Evidence and Reviewer Handoff have unclear history/update semantics

**Class:** C2/C6

Current model says:

- Reviewer Handoff is the current project truth and is updated as the project advances.
- Execution Evidence is append-only.
- Closeout Contract says "cumulative Evidence/Handoff files are append-only audit records except scoped corrections."

Why risky:

It is unclear whether `REVIEWER_HANDOFF.md` is:
- a mutable current-state document,
- an append-only cumulative audit document,
- or both.

Trying to satisfy both can make Handoffs huge and error-prone.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:

```text
REVIEWER_HANDOFF = current accepted state
DECISION_LOG = historical reasoning / Owner + Reviewer decisions
EXECUTION_EVIDENCE = actual execution proof
```

The Handoff is a current dashboard, not the full historical audit log.

## R07 — EXECUTOR_HANDOFF and EXECUTION_EVIDENCE overlap materially

**Class:** C4/C6

Both templates record:

- preflight;
- actual changes;
- validation;
- cleanup;
- anomalies;
- result.

Difference is described as "facts summary" vs "detailed evidence," but the field sets are substantially duplicated.

Why risky:

Two execution truth documents can drift and force Reviewer reconciliation without adding much safety.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- remove persistent EXECUTOR_HANDOFF as a separate long-lived project document;
- keep a short Executor-to-Reviewer completion packet;
- Execution Evidence owns execution facts/proof;
- Reviewer Handoff owns accepted current state/continuation;
- rollback/recovery information has its own canonical record.

## R08 — Core repeats large parts of specialist Contracts

**Class:** C4

`SKILL.md` contains substantial operational rules for:

- Storage;
- SSH/Secret;
- Target Host;
- Provider recovery;
- automation/auth;
- deployment/resources.

The specialist Contracts then restate these in detail.

Why risky:

A rule change can update one location but leave another stale. Reviewer also has to decide which copy is authoritative.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- remove duplicated specialist detail from Core;
- Core keeps only universal rules plus compact references to specialist rules;
- apply compression-first design rather than creating more documents by default.

## R09 — README, SKILL, Core Reference and Governance Handoff all behave partly like master documents

**Class:** C4/C2

Each contains some combination of:

- current status;
- roles;
- source-of-truth;
- core principles;
- addenda;
- lessons;
- loading rules.

Why risky:

There is no single visually obvious normative Core document even though Source Policy defines GitHub as the canonical *directory*.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- reduce competing master documents;
- keep one compact operational entry surface where practical;
- other files must not repeat the same version/rule/loading/state information;
- prefer consolidation over creating additional navigation documents.

## R10 — Governance Handoff mixes release state, changelog, incident lessons, loading rules and policy summaries

**Class:** C6/C4

`GOVERNANCE_HANDOFF.md` currently serves several roles simultaneously.

Why risky:

A continuity document grows indefinitely and starts competing with normative Contracts.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
Governance Handoff is continuity-only: current refactor progress, accepted decisions, unresolved items and next step. It must not duplicate current rule text, loading rules, active-rule inventories or long incident history.

## R11 — Closeout proposal is superseded but still contains many "CANDIDATE / NOT ACTIVE" lines

**Class:** C5

The proposal header correctly says PROMOTED / SUPERSEDED BY ACTIVE REV1.

Its body intentionally preserves many historical "Status remains CANDIDATE / NOT ACTIVE" snapshots.

Why risky:

A naïve Agent that searches snippets rather than reading the header may misclassify current status.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
Superseded proposals/history are retained only outside the normal loading path and must be visibly marked non-current/non-authoritative, with a pointer to the current rule where useful.

## R12 — metadata.yml does not fully represent current active Governance state

**Class:** C3

It tracks core, Storage, SSH/Secret, Target Host and Provider revisions/status.

It does not currently expose:
- Governance Source Policy status/revision;
- Project Closeout status/revision.

Why risky:

Any future machine/router logic relying on metadata receives an incomplete addendum set.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
metadata must not act as an independent rule-status source. It should either be generated from, or strictly mirror, the single authoritative active-governance manifest.

## R13 — DPAPI status wording differs across files

**Class:** C3/C6

Examples:

- GOVERNANCE_HANDOFF: validated low-operation first recovery copy, profile-bound.
- README/SKILL: profile-bound / limited failure domain.
- metadata: `validated-with-target-host-and-pending-artifact-boundary`.

Why risky:

Likely not a behavior conflict, but different status vocabularies make machine/human interpretation harder.

Status: **TERMINOLOGY DRIFT — low semantic risk, high maintenance noise.**

## R14 — "Owner latest instruction wins" needs scope guard against accidental rule override

**Class:** C2

Governance rule precedence places Owner latest explicit instruction first.

Elsewhere, safety boundaries say Owner instructions do not implicitly authorize Secret disclosure, Shared Infra mutation, real payments, etc., without bounded Gates.

Why risky:

The phrase "Owner latest instruction wins" can be read as an unlimited policy bypass unless it is scoped to valid explicit decisions within non-overridable safety boundaries.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- Owner controls goals, priorities, business choices and consequential authorization.
- Ordinary Owner instructions do not silently waive execution-safety rules.
- Governance exceptions must be explicit and scoped; they are never inferred from urgency or informal wording.

## R15 — Conditional preauthorization vs Owner-only production enablement

**Class:** C2

Core allows:

```text
IF Phase A PASS THEN authorize Phase B production enablement
```

Core also says material production enablement is Owner-only.

Why risky:

This is safe if the conditional authorization originates from the Owner and remains bounded. It is unsafe if a Reviewer can generate the preauthorization itself.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- technical continuation may be chained only inside the declared Gate boundary;
- Owner-only consequential actions require Owner authorization;
- conditional continuation never exceeds the Gate's explicit maximum endpoint.

## R16 — Broad "first real business action Canary" rule vs Provider-specific Canary

**Class:** C6/C4

Core defines a general first-real-action Canary.

Provider Contract defines a much more specific real-payment Canary and recovery model.

Why risky:

It is unclear which generic Canary fields are mandatory for every domain and which are Provider-only.

Status: **UNRESOLVED LAYERING — likely Core principle + domain-specific implementation.**

## R17 — No-blind-retry principle is duplicated across several domains but has no single generic home

**Class:** C4/C6

Appears in:

- SSH ambiguous remote writes;
- Target Host partial execution;
- Provider consequential recovery.

Why risky:

The same safety principle is re-derived independently. Future domains may omit it.

Status: **CANDIDATE CROSS-CUTTING CORE PRINCIPLE — not yet promoted.**

## R18 — "Fresh material drift" lacks one canonical definition

**Class:** C6

Many rules depend on "material drift":

- rerunning accepted Gates;
- invalidating preauthorization;
- closeout baseline comparison;
- production Change Gate behavior.

But there is no compact universal definition of what counts as material vs irrelevant drift.

Why risky:

Reviewer judgment becomes inconsistent between projects.

Status: **UNRESOLVED — candidate concept definition.**

## R19 — Usage Scenarios and templates can accidentally become policy sources

**Class:** C4/C6

The intent is that they are examples/templates, but they repeat normative text extensively.

Why risky:

A future edit may update only a template or usage example, accidentally creating a unique rule not present in Core/Contract.

Status: **STRUCTURAL RISK — needs future "no unique policy" invariant.**

## R20 — Current loading rule still tends toward overloading Reviewer context

**Class:** C6

SKILL loading order can require:

- Source Policy;
- SKILL;
- Governance Handoff;
- full Core Reference;
- Storage;
- SSH/Secret;
- Target Host;
- Provider;
- Usage Scenarios;
- templates;
- project Handoff/Evidence/Gate.

Why risky:

Even though addenda are conditional, several common Gates trigger multiple long documents with overlapping rules. This matches the Owner's observed Reviewer failures.

Status: **CONFIRMED DESIGN PROBLEM — one of the main refactor targets.**

## Review priority proposal

This is ordering only, not resolution:

```text
Priority 1
R03 factual truth vs accepted Handoff
R06 Handoff mutability vs append-only audit
R02 old Core source-of-truth vs new Source Policy
R01/R12 active addendum status drift

Priority 2
R04 Secret Owner-only vs delegation
R05 SSH shared-infra scope
R14 Owner-precedence scope
R15 conditional preauthorization authority
R18 definition of material drift

Priority 3
R07 Executor Handoff vs Evidence overlap
R08/R09/R10 master-document duplication
R16/R17 cross-cutting Canary/retry principles
R19 examples/templates becoming policy
R20 loading/context size
```

We should review these one by one with:
- current wording;
- what problem it was trying to solve;
- my recommendation;
- reason;
- Owner decision;
- resulting future placement.

No source file should be changed during that review unless the Owner later explicitly authorizes a shadow rewrite.


## R21 — Rollback is referenced widely, but end-to-end rollback assurance is not represented as one explicit state model

**Class:** C6 / safety-model gap

Observed:

Governance repeatedly requires:
- rollback definition before critical writes;
- backup/recovery points;
- pre-change baselines;
- restore/read-back validation;
- production rollback readiness.

But these requirements are spread across Core, Storage, Provider, templates and Change Gate guidance.

What is not yet cleanly represented is a single answer to:

> For the current project/Gate, what exact rollback point exists, what artifacts make it recoverable, has restore compatibility been proven, and under what condition may that rollback be used?

Why risky:

A project can have excellent historical records but still be impossible to roll back if:
- the old release no longer exists;
- the backup is invalid;
- the Secret/recovery pair is missing;
- the rollback command/path was never tested;
- the restore boundary is ambiguous.

Historical documentation is therefore not itself rollback capability.

Candidate direction for later review:

```text
ROLLBACK_PLAN
+ ROLLBACK_POINT
+ RECOVERY_ARTIFACTS
+ RESTORE/COMPATIBILITY_PROOF
+ TRIGGER/STOP_CONDITIONS
= VERIFIED_ROLLBACK_CAPABILITY
```

The current Handoff should expose the latest verified rollback capability as current state, while detailed proof/history stays in Evidence/recovery records.

Status: **UNRESOLVED — pulled forward by Owner during R06 discussion.**


## R22 — Owner relay package is undefined

**Class:** C6 / workflow usability gap

Owner pain:
- unclear what Reviewer must hand to Executor;
- unclear what Executor must return to Reviewer;
- some review artifacts need an actual uploaded file/image rather than only a repository reference;
- capability/accessibility mismatches are discovered too late.

Candidate direction:
Each Gate should state a small relay contract:
- Reviewer -> Executor required inputs;
- Executor -> Reviewer required outputs;
- artifacts that must be directly reviewable;
- any Owner relay action.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- Reviewer owns complete current Governance resolution and Gate-relevant rule loading.
- Executor does not independently reconstruct Governance; it executes the Gate.
- Executor only needs to detect obvious contradictions inside the Gate itself.
- Governance omissions from the Gate are primarily Reviewer responsibility.

## R23 — Reviewer and Executor completion formats are inconsistent

**Class:** C6 / interface-contract gap

Owner repeatedly has to ask for:
- PASS / RETURN;
- current Gate result;
- what changed;
- unresolved problems and analysis;
- overall project progress;
- next step;
- what must be relayed;
- whether Owner action is required.

Candidate direction:
Define one fixed completion packet for Executor and one for Reviewer.

Status: UNRESOLVED.

## R24 — Reading project rules does not reliably prevent execution drift

**Class:** C1/C6 / execution-discipline gap

Owner pain:
An Agent may say it read the project rules, but later execution can silently deviate from a frozen operating constraint.

Concrete example:
A project that was expected to operate through SSH later switched to a provider/panel path.

Candidate direction:
Store critical project invariants explicitly in current project state and require every Gate preflight to re-assert the applicable ones immediately before mutation. Any deviation requires an explicit reviewed override; no silent substitution.

Status: UNRESOLVED — high practical priority.


## R25 — Completion claims and PASS can occur without complete reviewable evidence

**Class:** C1/C6 / acceptance-integrity gap

Owner pain:
- Executor may say a Gate is done when required work is incomplete.
- Executor may say PASS_CANDIDATE when evidence does not actually prove the acceptance criteria.
- Reviewer may issue PASS even when key evidence is missing, inaccessible, unreadable or never inspected.
- Missing visual evidence is a concrete example: if the Reviewer cannot actually inspect the required image/artifact, lack of access must not silently become PASS.

Candidate direction:

A Gate can only reach Reviewer PASS when all required acceptance evidence is classified:

```text
REQUIRED_EVIDENCE
→ AVAILABLE
→ REVIEWABLE_BY_CURRENT_REVIEWER
→ ACTUALLY_INSPECTED
→ SATISFIES_ACCEPTANCE_CRITERIA
```

Any required item that is MISSING / INACCESSIBLE / UNREADABLE / NOT_INSPECTED must block PASS and explicitly request the smallest needed relay/Owner action.

Status: UNRESOLVED — high practical priority.


## R26 — Gate granularity can become unnecessarily fine

**Class:** C6 / workflow-efficiency gap

Owner pain:
Some adjacent Gates appear to be split into many small rounds even when they may share the same rollback domain, evidence boundary and risk level.

Existing Governance allows Gate compression, but does not give a simple operational sizing rule that consistently prevents over-fragmentation.

Candidate direction:

Prefer one combined Gate when:
- same target/system;
- same rollback domain;
- same evidence boundary;
- no new Owner-only checkpoint between steps;
- no materially higher-risk mutation is introduced;
- failure of a later step does not make earlier accepted work unsafe.

Split only when one of those boundaries changes.

Status: UNRESOLVED — related to existing C05, but current guidance may be too vague.


## R27 — Owner intervention / decision boundary is not predictable enough

**Class:** C2/C6 / authority-usability gap

Owner pain:
Some questions are correctly Owner-only, while others appear to be ordinary technical choices that should have been decided by Reviewer. The Owner does not have a clear mental model for which is which.

Candidate direction:

Use a three-way decision model:

```text
OWNER
= consequence/business/account/identity/payment/irreversible/material-risk choice

REVIEWER
= architecture, technical trade-offs, Gate design, rollback strategy, acceptance decision

EXECUTOR
= bounded implementation choices inside the approved Gate
```

When asking Owner for a decision, Reviewer must state why it cannot be safely resolved within Reviewer authority.

Status: UNRESOLVED.


## R28 — Durable project recording is not guaranteed before session loss

**Class:** C1/C6 / continuity gap

Owner pain:
Reviewer/Executor may finish work in chat but fail to persist current state, decisions or evidence. Browser/chat failure can then leave the durable record behind reality, causing rediscovery, repeated work or stale handoffs.

Candidate direction:

Introduce a durable checkpoint invariant:

```text
execution/review result reached
→ persist required Evidence / Decision / Handoff update
→ read back durable record
→ only then report round complete / STOP
```

For any consequential Gate, "done in chat" without durable write/read-back should not count as fully closed.

Status: UNRESOLVED — high practical priority.


## R29 — Governance content can be modified without explicit Owner authorization

**Class:** C1/C2 / governance-authority gap

Owner pain:
Reviewer or Executor may write/update Governance documents without the Owner explicitly authorizing a Governance change.

Why risky:
- project-specific observations can silently become global rules;
- multiple Agents can independently "improve" Governance and create drift;
- current Governance becomes harder to audit because rule changes are mixed with normal project work.

Accepted direction:
- project execution/review authority never implies Governance-edit authority;
- canonical Governance changes require explicit Owner authorization;
- that authorization is valid for one modification round only;
- each later modification round requires fresh Owner authorization;
- Agents may propose or record issues without mutation authority.

Status: **SHADOW DECISION ACCEPTED.**


## R30 — Governance reading responsibility is unclear and partial reading causes omissions

**Class:** C6 / loading-contract gap

Owner pain:
- Reviewer should understand the complete Governance but sometimes reads only part of it.
- Executor prompts may also tell Executor to read Governance.
- It is unclear whether both roles should read everything or whether each role should load a scoped subset.

Why risky:
- Reviewer may omit an active addendum while still issuing a Gate;
- Executor may independently interpret Governance and create a second policy decision layer;
- duplicated reading increases context while still not guaranteeing completeness.

Candidate direction for later review:
Define explicit role-based loading contracts:
- Reviewer: must resolve the complete current Governance map/version and load all active Core + all specialist contracts applicable to the current Gate;
- Executor: should not independently reconstruct Governance policy; it should read the current Gate package plus only the specific referenced rules/contracts needed to execute and detect prohibited scope.

Status: UNRESOLVED.


## R31 — Local/sandbox Governance copies can silently outrank GitHub latest

**Class:** C2/C3 / source-drift gap

Owner requirement:
Reviewer and Executor should not download or maintain Governance copies in sandbox/local workspaces as working authorities. Owner only trusts GitHub canonical as current.

Existing relation:
This overlaps the current Source Policy statement that local copies are non-authoritative caches, but the Owner wants a stronger operational rule: avoid creating those copies in the first place where possible.

Why risky:
- later sessions may find the local copy first;
- the copy may be stale;
- an Agent may claim it read "the Governance" while actually reading an older snapshot;
- duplicated files make provenance/version harder to prove.

Candidate direction for later review:
- Governance should be read directly from GitHub canonical whenever tooling permits;
- no project bundle should embed a competing Governance copy;
- if temporary materialization is technically unavoidable, it must be explicitly non-authoritative, ephemeral, version-pinned, and not reused as the next session's source.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
- GitHub canonical is the authoritative Governance source;
- local/sandbox Governance copies are avoided by default;
- unavoidable temporary copies are non-authoritative, ephemeral and version-pinned;
- local copies must never silently become the next session's authority.


## R32 — No explicit maximum advancement boundary for a round

**Class:** C2/C6 / expectation-boundary gap

Owner pain:
An Agent may continue through several technically permitted steps and end in a project state farther than the Owner expected, especially when the Owner did not explicitly state a stopping point.

Why risky:
- technically reversible progress can still surprise the Owner;
- a Reviewer may interpret "continue" too broadly;
- Gate compression and conditional preauthorization can accidentally amplify this effect.

Candidate direction:
Every Gate should declare a maximum endpoint, for example:

```text
THIS_ROUND_MAX_ENDPOINT=<state/checkpoint>
DO_NOT_CROSS_WITHOUT_OWNER=<boundary, if any>
```

If the Owner has not stated an expectation, Reviewer should choose the next natural review boundary rather than assume unlimited continuation.

Status: **SHADOW DECISION ACCEPTED.**

Accepted direction:
Each Gate must state the maximum endpoint for the round and the mandatory review stop. If the Owner did not authorize crossing the next material stage/risk boundary, the Agent stops at the declared endpoint.


## R33 — Governance verbosity and document sprawl

**Class:** C6 / usability-maintenance problem

Owner pain:
Governance becomes too verbose and fragmented. Owner prefers the shortest safe form and a one-page operational surface where practical.

Accepted direction:
- compress before split;
- merge whenever responsibilities can coexist clearly;
- create a new Governance file only when separation is necessary for clarity, conditional loading, or safety;
- prefer short rules, compact tables, and schemas over repeated prose;
- historical explanations/examples stay outside the normal loading path.

Status: **SHADOW DECISION ACCEPTED.**
