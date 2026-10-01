# Amber Kite vNext

> STATUS=SHADOW_NON_OPERATIONAL
> VERSION=v0.2.0-draft1
> CANONICAL_PRODUCTION_GOVERNANCE=main:vps-project-governance/
> SHADOW_AUTHORITY=NONE
> Promotion requires a future explicit Owner authorization.

This file is the complete operational rule surface for the shadow design. No README, template, example, local copy, history file, or Handoff may add a competing rule.

## 0. One-line model

```text
Current State -> Gate -> Preflight -> Execute -> Evidence -> Review -> New State
```

Unknown is recorded as `UNKNOWN`, never guessed.

## 1. Authority and truth

### Rule authority
```text
explicit Owner decision
-> active bounded exception explicitly allowed by Owner or Governance
-> current GitHub canonical Governance
```

- GitHub canonical is the authority; local/sandbox copies are avoided by default.
- If temporary local materialization is unavoidable, it is non-authoritative, ephemeral, commit-pinned, and never reused as next-session authority.
- A normal Owner instruction changes goals/authorization; it does not silently waive backup, evidence, rollback, Secret-safety, Shared-Infra, or other safety rules.
- A Governance exception must be explicit and scoped.

### Project reality
```text
fresh authoritative evidence
-> Reviewer reconciliation
-> REVIEWER_HANDOFF records accepted current state
```

Fresh reality may make Handoff stale. Executor output is not canonical until Reviewer accepts it.

Historical Evidence is preserved; EXECUTION_EVIDENCE is append-only except for explicitly scoped corrections. Stronger new evidence supersedes current interpretation without rewriting history.

## 2. Roles

### Owner
Decides consequences: business direction, real money/cost, public production enablement, real-data deletion, account/permission/Secret authority, materially irreversible/security-sensitive actions, and crossing the declared round boundary.

### Reviewer
Owns technical judgment, Governance interpretation, Gate design, rollback strategy, evidence review, PASS/RETURN, and ordinary repair choices inside the authorized boundary.

When escalating to Owner, state:
```text
WHY_REVIEWER_CANNOT_DECIDE
EXACT_OWNER_DECISION_NEEDED
MATERIAL_TRADEOFFS
```

### Executor
Executes only the current Gate. It does not reconstruct Governance or expand scope/architecture. It stops on an obvious contradiction inside the Gate.

`PASS_CANDIDATE != PASS`.

## 3. Reviewer startup

Every round Reviewer must:

1. read this complete file from GitHub;
2. read current `REVIEWER_HANDOFF`, current Gate/Evidence as needed;
3. scan every specialist trigger in section 11;
4. apply every triggered specialist section; if uncertain, treat it as triggered;
5. reconcile material drift before consequential work.

If current project truth is missing/unreliable, the first Gate is read-only Discovery. Existing accepted projects use a bounded Change Gate; do not replay onboarding unless material drift invalidates the accepted baseline.

Material drift = any change that could invalidate an earlier judgment, authorization, Evidence set, accepted state, critical constraint, or rollback/recovery assumption.

## 4. Current project state

`REVIEWER_HANDOFF` is the current dashboard, not the historical log.

Keep only what is needed to continue:

```text
PROJECT_STAGE
CURRENT_ACCEPTED_STATE
CURRENT_GATE
CRITICAL_CONSTRAINTS
DEFAULT_EXECUTION_CHANNEL
CURRENT_ROLLBACK_STATUS
UNRESOLVED
NEXT_STEP
OWNER_ACTION_REQUIRED
EVIDENCE_POINTERS
```

- Critical constraints remain visible until explicitly changed.
- A confirmed default execution channel is sticky.
- If it fails: diagnose/repair first. A fallback requires reason + Reviewer approval and does not become the new default automatically.
- Decision rationale/history belongs in `DECISION_LOG`.
- Execution proof belongs in `EXECUTION_EVIDENCE`.
- Shared-host trust/infrastructure facts and storage/recovery metadata, when needed, live as compact project-state blocks/attachments without Secret values; they do not require separate policy-bearing templates.

## 5. Gate

Prefer one combined Gate when target, rollback domain, evidence boundary, authority boundary, and risk are compatible. Split on a material risk/authority/rollback/acceptance boundary, not per operational step.

Every Gate states:

```text
GATE_ID
OBJECTIVE
MAX_ENDPOINT_THIS_ROUND
MANDATORY_REVIEW_STOP
TARGET_AND_SCOPE
APPLICABLE_CRITICAL_CONSTRAINTS
PREFLIGHT
REQUIRED_EVIDENCE
ACCEPTANCE_CRITERIA
ROLLBACK_STATUS_OR_PLAN
OWNER_ONLY_ACTIONS
REVIEWER_TO_EXECUTOR_RELAY
EXECUTOR_TO_REVIEWER_RELAY
```

- Adjacent accepted work is not replayed unless material drift is proven.
- Conditional continuation is valid only inside the declared maximum endpoint.
- Owner-only consequential actions require Owner authorization.
- Failed normal execution returns/reconciles; it does not improvise a new architecture.

## 6. Preflight and execution

Before a write, prove the target, scope, constraints, required authority, rollback boundary, and expected Evidence.

For consequential actions:
- a native/non-zero execution failure fails closed until reconciled;
- ambiguous prior result -> read-only reconciliation before retry;
- do not blindly repeat an action whose commit/result is unknown;
- classify partial execution before overwrite/replay.

For critical writes, rollback/recovery must be defined before mutation.

When security or access boundaries matter, include both positive and negative checks.

Cleanup/regression checks are part of Gate completion.

## 7. Evidence and PASS

Executor self-report is a claim, not proof.

`EXECUTION_EVIDENCE` records:
```text
ACTUAL_CHANGES
OBJECTIVE_READBACK
VALIDATION
ANOMALIES
EVIDENCE_ARTIFACTS_AND_PURPOSE
ROLLBACK_EFFECT
EXECUTOR_RESULT
```

Evidence may point to logs, diffs, screenshots, files, provider read-back, or other artifacts rather than embedding everything.

Reviewer PASS requires every required item to be:

```text
REQUIRED
-> AVAILABLE
-> REVIEWABLE_BY_CURRENT_REVIEWER
-> ACTUALLY_INSPECTED
-> SATISFIES_ACCEPTANCE_CRITERIA
```

Missing, inaccessible, unreadable, or uninspected required Evidence blocks PASS.

Use objective status vocabulary:
`PASS | PARTIAL | UNVERIFIED | BLOCKED | NOT_APPLICABLE`.
Gate decisions additionally use `PASS_CANDIDATE | PASS | RETURN_*`.

## 8. Rollback and recovery

Historical records alone are not rollback capability.

A verified rollback state answers:

```text
TARGET
RECOVERY_ARTIFACTS
METHOD
RESTORE_OR_COMPATIBILITY_PROOF
TRIGGER_OR_STOP_CONDITIONS
```

`REVIEWER_HANDOFF` exposes only the current rollback status; detailed proof stays in Evidence/recovery records.

A rollback/recovery path must itself respect current Secret, data, target-host, Provider, and Shared-Infra boundaries.

## 9. Relay and completion packets

Owner relay defaults to `NONE`.

If a required artifact is not directly accessible/reviewable, the Gate states the smallest exact Owner relay action.

Executor completion packet:
```text
RESULT
WHAT_CHANGED
EVIDENCE
PROBLEMS
ROLLBACK_STATUS
FOR_REVIEWER
OWNER_RELAY_REQUIRED
```

Reviewer completion packet:
```text
DECISION
CURRENT_GATE
THIS_ROUND_RESULT
PROBLEMS
PROJECT_PROGRESS
CURRENT_STATE
NEXT_STEP
OWNER_RELAY_REQUIRED
OWNER_ACTION_REQUIRED
```

Empty fields are `NONE`, not omitted.

## 10. Durability and Governance change

A consequential round is not closed in chat.

```text
result reached
-> write required durable records
-> read back and verify
-> then report PASS / RETURN / STOP / complete
```

Governance edit authority is separate from project authority.

- Canonical Governance changes require explicit Owner authorization.
- Authorization is valid for one modification round only.
- A later Governance modification round requires fresh Owner authorization.
- Agents may propose/record Governance issues without edit authority.

Templates/examples, if any, define recording format only. They cannot create unique policy.

Canonical Governance changes should be cross-project reusable and reviewed; incident-specific lessons remain project/history until generalized deliberately. When maturity labels are needed, use `VALIDATED | PROVISIONAL | CANDIDATE`; shadow/historical status is separate from maturity.

Historical/proposal files are non-authoritative and outside the normal loading path.

## 11. Specialist trigger scan

Reviewer checks every row each round.

| Specialist | Trigger |
|---|---|
| Shared VPS / Storage | touches shared host layout, shared runtime, durable data, backups, Docker resources |
| SSH / Secret | uses or changes server login/trust/privilege, creates/reads/rotates/restores credentials |
| Target Host | host-local state matters or sandbox/WSL/container vs real-host identity may differ |
| Deployment / Network / Resources | deploy/recreate, public route, network exposure, cleanup, resource validation |
| Automation / Auth | automated real actions, SAFE_MODE, reauthentication/resume lifecycle |
| Provider / Payment | real provider/account/payment/refund/callback/recovery/fulfillment state |
| Closeout | archive, deletion, decommission, cleanup, retention, reconstruction |

### 11A. Shared VPS / Storage

- Business projects do not casually mutate Shared Infra. Shared-Infra change gets a separate reviewed boundary.
- Shared Infra includes host SSH trust/accounts, firewall/UFW, Docker daemon/shared networks, shared Caddy/80-443, cloudflared/shared ingress, and equivalent host-wide services.
- Existing verified SSH use is normal execution; changing SSH accounts/keys/sshd/sudo/UFW/trust is Shared Infra.
- Canonical shared layout remains `/srv/infra`, `/srv/apps`, `/srv/data`, `/srv/backups`.
- Each project gets isolated app/data/backup namespaces and Compose project.
- Unique durable data must not live only in a reconstructible app layer or anonymous volume.
- Prefer explicit bind mounts; named volumes must be namespaced, documented, and backupable.
- Shared data services require explicit promotion to Shared Service.
- Before a new shared-VPS deployment, current project state must contain the storage locations, recovery path, ownership/access model, and backup method. A separate template file is not required.
- Existing production data is not migrated merely for neatness; historical migration is a Change Gate with backup, read-back, and rollback.
- Database backup must be consistency-safe; writable rehearsal uses a copy, never the real migration DB.
- No broad Docker prune. Cleanup is exact/allowlisted with before/after/reference checks.

### 11B. SSH / Secret / Target Host

- Secret values never enter chat, repo, ordinary Handoff/Evidence, or logs.
- Exposed real credentials are compromised input and require a rotation checkpoint.
- Secret authority is Owner-only; exact technical provisioning may be explicitly delegated.
- Delegated generation is exact-allowlist, cryptographically secure, fail-on-existing, least-privilege, and emits no Secret value.
- Secret recovery must exist in a different failure domain; profile-bound DPAPI/CurrentUser may be a first copy, never sole disaster recovery.
- Recovery artifacts must be proven where they actually exist; restore over live Secrets is a separate explicit Gate.
- Prove which real host/runtime is being changed before claiming a host-local result.
- Same absolute path in sandbox/container/WSL does not prove real-host state.
- Host-local write requires target identity before mutation and host-local read-back afterward.
- If real-host execution cannot be proven, fail closed/RETURN rather than claiming success.
- Owner-local recovery checkpoints are one-shot/minimal and emit bounded non-secret Evidence.
- If one Owner-local script crosses multiple failure domains/phases, it emits explicit phase markers so partial execution can be reconciled.
- On Windows, tighten ACLs without unnecessary ownership change.
- Partial/ambiguous execution is reconciled before retry.

### 11C. Deployment / Network / Resources

- Production deploy/recreate explicitly selects the canonical manifest and validates resolved configuration first.
- A sealed-image deploy must not accidentally rebuild/pull a different image; verify deployed release/image identity afterward.
- Prove private runtime before public routing.
- After public exposure, perform immediate anonymous negative/access-boundary checks.
- HTTPS WebSocket paths require WSS/upgrade verification when applicable.
- Functional PASS does not imply resource PASS.
- Broad prune is forbidden; cleanup is allowlisted and reference-checked.
- Legacy 60/70/80% disk thresholds are guidance, not standalone PASS/FAIL rules.

### 11D. Automation / Authentication

- Before the first real automated action, a fail-closed SAFE_MODE/equivalent must exist, survive restart/recreate, and control the real action path.
- First real user/money/production-impact action uses the smallest meaningful real Canary.
- A Canary is bounded by target/count/time/guard; non-target deltas are checked when relevant.
- Reauthentication success does not automatically resume business actions.
- Identity must match before credential update/resume.
- Notification failure does not silently resume business activity.

### 11E. Provider / Payment

- Keep provider account/app/merchant/product-permission identities distinct.
- Provider paid, local paid, order state, and fulfillment completion are separate proofs.
- A real Canary authorizes one bounded buyer action. Provider success forbids a blind second payment.
- Reconciliation/query paths must be proven read-only.
- Callback success requires authentication, server-owned correlation, amount/currency/status validation, idempotent durable handling, and correct acknowledgement.
- Provider success plus local timeout/cancel is a recovery problem, not a payment retry.
- Recovery selector cardinality must be exact; zero or multiple candidates fail closed.
- Re-read critical facts immediately before recovery mutation.
- Recovery restores the full domain invariant set, not one cosmetic status field.
- Durable DB commit and asynchronous dispatch/fulfillment are separate proofs.
- Ambiguous/partial/committed recovery attempts are reconciled before replay.
- Incident-only recovery tooling does not become normal runtime policy automatically.
- Canary fixture semantics must match what it is supposed to prove.
- Refund or another real payment remains a separately authorized consequential action.

### 11F. Closeout

- Closeout sequence: remote hygiene -> reconstructible archive barrier -> local decommission -> final reconciliation.
- Every deletion candidate is classified; `UNKNOWN` fails closed.
- Canonical archive must be read back and must exclude Secrets, DB/live data, private recovery/customer data unless separately approved protected storage applies.
- In shared repositories, cleanliness is scoped to the project-owned subtree.
- A necessary protected recovery artifact may remain as an explicit exception.
- If deletion is blocked by execution policy after safety classification, do not bypass through another shell/tool; move the exact irreversible action to an explicit Owner-local checkpoint.
- Distinguish known accepted properties from new regression/unproven drift.
- Before declaring a packaged-app recovery artifact missing, account for path virtualization/context.
- Deferred retention events require explicit reconciliation; do not keep forever or silently delete.
- Closeout final state proves runtime truth, archive/reconstruction, recovery validity, exact remaining exceptions, and no shared-resource regression.
- Deferred business actions remain deferred/not-PASS.
- Historical audit references are not globally rewritten merely because current references changed.

## 12. End condition

The project loop repeats until closeout.

The Owner should normally see only:
- current result;
- problems that matter;
- project progress;
- next step;
- exact Owner action/relay if one is truly required.

Everything else should stay as short as safety permits.
