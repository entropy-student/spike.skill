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

Status: **UNRESOLVED — review needed.**

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

Status: **UNRESOLVED — likely supersession/annotation problem, not yet edited.**

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

Status: **APPARENT CONFLICT WITH KNOWN EXCEPTION — needs one authoritative formulation.**

## R05 — "SSH is Shared Infrastructure" vs ordinary SSH read-only connection recovery

**Class:** C6

Core classification lists SSH under Shared Infrastructure.

Newer rules say reading the registered SSH connection contract and running a bounded read-only identity probe does not count as a Shared Infra write.

Why risky:

A literal Reviewer may RETURN merely for using existing SSH connectivity, while another Reviewer may treat all SSH actions as allowed.

Status: **UNRESOLVED WORDING/SCOPE — behavior appears reconcilable but trigger needs precision.**

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

Status: **UNRESOLVED — high priority information-architecture issue.**

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

Status: **UNRESOLVED — likely structural simplification candidate.**

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

Status: **CONFIRMED DUPLICATION — no deletion decision yet.**

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

Status: **CONFIRMED INFORMATION-ARCHITECTURE PROBLEM.**

## R10 — Governance Handoff mixes release state, changelog, incident lessons, loading rules and policy summaries

**Class:** C6/C4

`GOVERNANCE_HANDOFF.md` currently serves several roles simultaneously.

Why risky:

A continuity document grows indefinitely and starts competing with normative Contracts.

Status: **CONFIRMED RESPONSIBILITY OVERLAP — content still untouched.**

## R11 — Closeout proposal is superseded but still contains many "CANDIDATE / NOT ACTIVE" lines

**Class:** C5

The proposal header correctly says PROMOTED / SUPERSEDED BY ACTIVE REV1.

Its body intentionally preserves many historical "Status remains CANDIDATE / NOT ACTIVE" snapshots.

Why risky:

A naïve Agent that searches snippets rather than reading the header may misclassify current status.

Status: **KNOWN HISTORICAL-NOISE RISK.**

## R12 — metadata.yml does not fully represent current active Governance state

**Class:** C3

It tracks core, Storage, SSH/Secret, Target Host and Provider revisions/status.

It does not currently expose:
- Governance Source Policy status/revision;
- Project Closeout status/revision.

Why risky:

Any future machine/router logic relying on metadata receives an incomplete addendum set.

Status: **UNRESOLVED — likely stale metadata.**

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

Status: **UNRESOLVED WORDING — semantic boundary should be reviewed.**

## R15 — Conditional preauthorization vs Owner-only production enablement

**Class:** C2

Core allows:

```text
IF Phase A PASS THEN authorize Phase B production enablement
```

Core also says material production enablement is Owner-only.

Why risky:

This is safe if the conditional authorization originates from the Owner and remains bounded. It is unsafe if a Reviewer can generate the preauthorization itself.

Status: **APPARENT CONFLICT — likely needs explicit "Owner-issued" qualifier.**

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
