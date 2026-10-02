# Amber Kite vNext

> STATUS=SHADOW_NON_OPERATIONAL
> VERSION=v0.2.0-draft3.2
> CANONICAL_PRODUCTION_GOVERNANCE=main:vps-project-governance/
> SHADOW_AUTHORITY=NONE
> ACTIVE_RULESET_IF_PROMOTED=THIS_FILE_UNIVERSAL_SECTIONS_PLUS_TRIGGERED_11A_11F
> EXTERNAL_OPERATIONAL_ADDENDA=NONE
> Promotion requires a future explicit Owner authorization.

This file is the complete operational rule surface for the shadow design. README, template, example, local copy, history file, or Handoff cannot add competing policy.

## 0. One-line model

```text
Current State -> Gate -> Preflight -> Execute -> Evidence -> Review -> New State
```

Unknown is `UNKNOWN`, never guessed.

## 1. Authority and truth

### Rule authority
```text
explicit Owner decision
-> active bounded exception explicitly allowed by Owner/Governance
-> current GitHub canonical Governance
```

- GitHub canonical is authoritative.
- Local/sandbox Governance copies are avoided. If unavoidable, they are non-authoritative, ephemeral, commit-pinned, and never reused as next-session authority. A discovered stale working copy is refreshed or removed so it cannot silently outrank GitHub.
- A normal Owner instruction changes goals/authorization; it does not silently waive backup, evidence, rollback, Secret-safety, Shared-Infra, or other safety rules.
- A Governance exception/pin is explicit, scoped, and temporary. When pinning a version/addendum for reproducibility or incident containment, record the exact version/commit where practical, scope, reason, and expiry/close condition.

### Project reality
```text
fresh authoritative evidence
-> Reviewer reconciliation
-> REVIEWER_HANDOFF records accepted current state
```

Fresh reality may make Handoff stale. Executor output is not canonical until Reviewer accepts it.

`EXECUTION_EVIDENCE` is append-only except explicit scoped corrections. Stronger new evidence supersedes current interpretation without rewriting history.

## 2. Roles

### Owner
Decides consequences: business direction, real money/cost, public production enablement, irreversible real-data deletion, account/permission/Secret authority, materially irreversible/security-sensitive actions, and crossing the declared round boundary.

### Reviewer
Owns technical judgment, Governance interpretation, Gate design, rollback strategy, evidence review, PASS/RETURN, and ordinary repair choices inside the authorized boundary.

Escalation to Owner states:
```text
WHY_REVIEWER_CANNOT_DECIDE
EXACT_OWNER_DECISION_NEEDED
MATERIAL_TRADEOFFS
```

### Executor
Executes only the current Gate. It does not reconstruct Governance, expand scope/architecture, or enter the next Gate. It stops on an obvious contradiction inside the Gate.

`PASS_CANDIDATE != PASS`.

## 3. Reviewer startup and Discovery

Every round Reviewer must:

1. read the universal surface from GitHub: header + sections 0–10 + the section 11 trigger table + sections 12–13;
2. read current `REVIEWER_HANDOFF`, current Gate, and accepted Evidence needed for the round;
3. check **every** specialist trigger in section 11;
4. read in full only the triggered specialist subsection(s) 11A–11F; uncertain applicability counts as triggered and therefore must be read;
5. reconcile material drift before consequential work.

Do not skip the trigger scan, and do not load unrelated specialist sections merely because they exist in the same file.

Material drift = any change that could invalidate an earlier judgment, authorization, Evidence set, accepted state, critical constraint, or rollback/recovery assumption.

If current project truth is missing/unreliable, the first Gate is read-only Discovery. At minimum identify:

```text
goal + current runtime
entrypoints/framework
frontend/backend/worker/scheduler
database/persistence + uploads/object storage
Secret/account/token classes and storage mechanism
ports/domains/network exposure
Docker/Compose/runtime services
external APIs/providers/browser automation
tests
backup/restore/recovery
current online resources
licenses/third-party constraints
Shared Infra dependencies/conflicts
durable-data/storage locations
known risks + UNKNOWN
```

Existing accepted projects use a bounded Change Gate; do not replay onboarding unless material drift invalidates the baseline.

## 4. Current project state

`REVIEWER_HANDOFF` is the current dashboard, not a historical diary.

Keep:

```text
PROJECT_GOAL
PROJECT_STAGE
SYSTEM_MAP
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

`SYSTEM_MAP` stays compact but preserves the currently relevant runtime/deployment/data/network/auth/Shared-Infra shape so a new Reviewer does not rediscover the project from scratch.

- `REVIEWER_HANDOFF` is maintained by Reviewer only. Executor writes execution facts/Evidence and the completion packet; it does not promote its own output into canonical project state.
- Critical constraints remain until explicitly changed.
- A confirmed default execution channel is sticky.
- If it fails: diagnose/repair first. A fallback requires reason + Reviewer approval and does not automatically become the new default.
- Decision rationale/history -> `DECISION_LOG`.
- Execution proof -> `EXECUTION_EVIDENCE`.

### Shared host state

A managed shared host keeps one factual Shared VPS state/Handoff, separate from Governance policy:

```text
HOSTNAME_OR_IP
SSH_PORT
LOGIN_ROLE
IDENTITY_FILE_REFERENCE
CLIENT_PUBLIC_KEY_FINGERPRINT
EXPECTED_HOST_KEY_FINGERPRINTS
KNOWN_HOSTS_REFERENCE
CANONICAL_READ_ONLY_PROBE
PRIVILEGE_MODEL
SHARED_NETWORKS
INGRESS_80_443_OWNER
REVERSE_PROXY_OR_TUNNEL
FIREWALL
SHARED_BACKUP_MONITORING
LAST_VERIFIED_HOST_USER_OS_AND_TIME
RECOVERY_ROUTE
```

No password, private-key value, token, passphrase, or other Secret value.

### Storage state

For a Shared-VPS project, current state must answer:

```text
COMPOSE_PROJECT
APP_RELEASE_PATH
DURABLE_DATA_PATHS
DATABASE_ENGINE_AND_LOCATION
UPLOADS_OR_OBJECT_DATA
PERSISTENT_MOUNTS_OR_NAMED_VOLUMES
SECRET_LOCATIONS_METADATA_ONLY
SECRET_RUNTIME_READER_AND_PERMISSIONS
SECRET_RECOVERY_DESTINATION_AND_LIMITATION
BACKUP_METHOD_AND_PATH
BACKUP_SCOPE_TIMESTAMP_INTEGRITY_AND_SECRET_INCLUSION
RESTORE_METHOD_AND_LAST_VALIDATION
RETENTION
MIGRATION_UNIT
DECOMMISSION_RULE
EXPECTED_FOOTPRINT_OR_GROWTH
```

A separate Storage Manifest file is optional; the information is not.

## 5. Gate

Prefer one combined Gate when target, rollback domain, evidence boundary, authority boundary, and risk are compatible. Split on material risk/authority/rollback/acceptance boundaries, not per operational step.

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

- Accepted work is not replayed unless material drift is proven.
- Conditional continuation is valid only inside the declared maximum endpoint. Any prerequisite FAIL/RETURN/ambiguity/material drift invalidates it; after a failed consequential production write, a later production write requires fresh consequential authorization rather than silently reusing the failed preauthorization.
- Owner-only consequential actions require Owner authorization.
- Failed normal execution returns/reconciles; it does not improvise a new architecture.

## 6. Preflight, execution, build and retry

Before a write, prove target, scope, constraints, required authority, rollback boundary, and expected Evidence.

For consequential actions:
- native/non-zero execution failure fails closed until reconciled;
- ambiguous prior result -> read-only reconciliation before retry;
- classify the previous attempt before overwrite/replay;
- do not blindly repeat an action whose commit/result is unknown.

For critical writes, rollback/recovery is defined before mutation.

Security/access boundaries require positive and negative checks where applicable.

Cleanup/regression is part of Gate completion.

### Build/deploy identity

- Build context excludes live data, Secrets, private recovery material, and other non-build artifacts.
- Formal build chain must be reproducible enough to identify the candidate.
- The tested artifact, reviewed/handoff artifact, and production candidate must be proven the same candidate or immutably correlated.
- Production deploy/recreate explicitly selects the canonical manifest and validates resolved configuration before write.
- Sealed-image deployment prevents accidental rebuild/pull of a different candidate where applicable.
- Verify running release/image identity after deploy; mismatch returns/rolls back.

## 7. Evidence and PASS

Executor self-report is a claim, not proof.

`EXECUTION_EVIDENCE` records:

```text
AUTHORIZED_GATE
PREFLIGHT_FACTS
ACTUAL_CHANGES
OBJECTIVE_READBACK
VALIDATION
ANOMALIES
EVIDENCE_ARTIFACTS_AND_PURPOSE
ROLLBACK_EFFECT
RESOURCE_OR_BUSINESS_DELTA_WHEN_RELEVANT
EXECUTOR_RESULT
```

Evidence may point to logs, diffs, screenshots, files, provider read-back, or other artifacts rather than embedding everything.

Reviewer PASS requires each required item to be:

```text
REQUIRED
-> AVAILABLE
-> REVIEWABLE_BY_CURRENT_REVIEWER
-> ACTUALLY_INSPECTED
-> SATISFIES_ACCEPTANCE_CRITERIA
```

Missing, inaccessible, unreadable, or uninspected required Evidence blocks PASS.

Status vocabulary:
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

`REVIEWER_HANDOFF` exposes current rollback status; detailed proof remains in Evidence/recovery records.

Rollback/recovery must respect current Secret, data, target-host, Provider, and Shared-Infra boundaries.

## 9. Relay and completion packets

Owner relay defaults to `NONE`.

If a required artifact is not directly accessible/reviewable, the Gate states the smallest exact Owner relay action.

Executor -> Reviewer uses a short fixed completion format:

```text
结果：PASS_CANDIDATE / RETURN_*
改动：一句话说明实际改了什么。
验证：一句话总结关键检查结果；详细证据仍写入 EXECUTION_EVIDENCE。
问题：NONE，或用“短语概括：一句通俗解释”说明阻塞点。
回滚：一句话说明是否可恢复、恢复到哪里。
请 Reviewer 检查：一句话说明需要 Reviewer 核对什么。
Owner 转交：NONE，或写明最小必要转交动作。
```

Executor-facing formatting rules:
- one line answers one question;
- use a meaningful short label before the colon;
- prefer plain language over unexplained jargon;
- do not paste long logs, raw Provider payloads, Secret values, or full evidence into the completion packet;
- detailed technical proof belongs in `EXECUTION_EVIDENCE`;
- `PASS_CANDIDATE` remains only an Executor claim; Reviewer alone decides formal PASS;
- when RETURNing, the problem line must state the actual blocking reason, not generic `FAILED`;
- `Owner 转交` defaults to `NONE`.

Reviewer -> Owner uses a short, human-readable fixed structure:

```text
本轮结果
当前状态
当前问题
项目进度
下一步
你需要做什么
```

Formatting rules:
- section titles are Chinese;
- each normal line uses **short label: one plain-language sentence**;
- the label must summarize the meaning, not use generic names such as "内容1/问题1";
- important states, risks, objects, or proper nouns are bolded when helpful;
- avoid unexplained technical jargon in Owner-facing text; translate it into plain language unless the exact technical term is necessary;
- `当前问题` is omitted only when there is genuinely nothing useful to report; otherwise each problem is written as **problem phrase: plain-language explanation**;
- `项目进度` is the only section that uses a compact code block. It shows the whole project path from start to finish, one stage per line, with no blank lines, and marks each stage as PASS / RETURN->FIXED / IN_PROGRESS / NEXT / PENDING;
- keep the progress list short: merge substeps that do not represent meaningful Owner-visible stages;
- `下一步` explains what happens next and what will be observed, in plain language;
- `你需要做什么` states Owner action and relay needs directly; use **NONE** when nothing is required.

The Reviewer still preserves the underlying machine/state fields in durable project records; the Owner-facing response is a concise presentation layer, not the canonical data model.

Executor completion format is not changed by this rule.

Empty machine-state fields remain `NONE` in durable records.

## 10. Durability and Governance change

A consequential round is not closed in chat:

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
- Cross-project rules should be deliberately generalized; incident-specific lessons remain project/history until promoted.
- Maturity labels when needed: `VALIDATED | PROVISIONAL | CANDIDATE`.

Templates/examples only define recording/usage format; they cannot create policy. Historical/proposal files are non-authoritative and outside normal loading.

## 11. Specialist trigger scan

Reviewer checks every row each round.

| Specialist | Trigger |
|---|---|
| Shared VPS / Storage | shared host layout/runtime, durable data, backups, Docker resources |
| SSH / Secret / Target Host | server login/trust/privilege, credential lifecycle, host-local write/proof |
| Deployment / Network / Resources | deploy/recreate, public route, network exposure, cleanup/resource validation |
| Automation / Auth | automated real actions, SAFE_MODE, browser/session, reauthentication/resume |
| Provider / Payment | provider/account/payment/refund/callback/recovery/fulfillment |
| Closeout | archive, deletion, decommission, retention, reconstruction |

### 11A. Shared VPS / Storage

- Business projects do not casually mutate Shared Infra. Shared-Infra change gets a separate reviewed boundary.
- Shared Infra includes host SSH trust/accounts, UFW/firewall, Docker daemon/shared networks, shared Caddy/80-443, cloudflared/shared ingress, and equivalent host-wide backup/monitoring.
- Existing verified SSH use is normal project execution; changing SSH accounts/keys/authorized_keys/sshd/sudo/UFW/trust is Shared Infra.
- Canonical layout: `/srv/infra`, `/srv/apps/<project>`, `/srv/data/<project>`, `/srv/backups/<project>`.
- Each project has isolated app/data/backup namespaces and Compose project; cross-project DB/uploads/secrets/backups are forbidden unless explicitly promoted to Shared Service.
- Unique durable data does not live only in reconstructible app files, ephemeral cache, or anonymous volume.
- Prefer explicit bind mounts for user-controlled durable data. Named volumes are namespaced, documented, backupable/restorable. Anonymous volumes cannot hold unique durable data.
- Build/cache/temp/disposable logs and browser download/cache are ephemeral only when reconstructible; if they carry unique business state they are reclassified as durable.
- Before Shared-VPS deployment, the Storage state in section 4 must be complete enough to answer: "If this VPS vanished tomorrow, what must move and how is it restored?"
- Existing production data is not migrated merely for neatness; migration is a Change Gate with consistency-safe backup, restore/read-back, regression, and rollback.
- Migration unit includes reconstructible app/release + durable data + validated backup/recovery material + secure Secret transfer procedure + canonical deployment manifest. Migration PASS proves fresh-target restore, DB integrity/read-back, uploads/state availability, Secret compatibility without value output, project health, and unambiguous old/new target identity.
- Backups record source scope, timestamp, integrity/restore validation, whether Secrets are included, any matching encryption/recovery material, and retention. Distinguish scheduled, pre-change, and final/decommission recovery points when applicable.
- Database backup uses database-consistent mechanisms; writable rehearsal uses a copy, never the real migration DB.
- Encrypted databases are recovered with the matching key/recovery material as one recovery pair; backup validation includes integrity/record-count/read compatibility and decrypt compatibility without plaintext output.
- No broad Docker/system prune. Cleanup is exact/allowlisted with fresh reference checks, before/after Evidence, and shared/production regression.
- Resource Evidence when relevant includes root capacity, project data/backups, production image, build/cache/browser runtime, deployment delta, and cleanup reclaimed bytes. 60/70/80% remain guidance, not universal PASS/FAIL.

### 11B. SSH / Secret / Target Host

#### Connection and trust
- Shared-host state in section 4 records connection/trust metadata; do not ask Owner to rediscover a previously verified connection.
- Automated SSH uses strict non-interactive identity/trust behavior equivalent to `BatchMode=yes`, `IdentitiesOnly=yes`, and `StrictHostKeyChecking=yes`, with explicit known-host trust. Host-key mismatch is never auto-accepted.
- Identity-file reference and public-key fingerprint may be recorded; private-key data never is.
- A successful SSH connection proves reachability only, not write authorization.
- A pre-existing SSH key may be reused for another project on the same host only when its server-side role is already the intended shared operations role; never copy a private key into a project/review bundle.
- If the default connection fails, verify recorded identity, permissions/fingerprint, host key, and bounded read-only identity probe before asking Owner or changing access.
- Windows/OpenSSH/PowerShell/native tools are one transport boundary: keep SSH and SCP options distinct (`-p` vs `-P` where applicable), use explicit known-host file/trust, bounded connection timeout/keepalive as appropriate, validate quoting/argument cardinality, normalize reviewed line endings/encoding for multiline payloads, and explicitly check native exit codes. Remote cleanup failure is a failure.

#### Secret handling
- Secret values never enter chat, repo, ordinary Handoff/Evidence, README, bundles, command arguments, environment variables, stdout/stderr, shell history, transcripts, debug echo, ordinary temp files, or logs.
- Secret-bearing transport prefers bounded reviewed stdin/process-memory handling; plaintext is not rendered to Owner console.
- Exposed real credentials are compromised input and require an independent Owner-authorized rotation checkpoint before reuse.
- Secret authority/custody is Owner-controlled; exact technical generation/install may be explicitly delegated only for a named project/environment/purpose/target/overwrite/recovery policy. It never implies Provider activation, payment, account authorization, or production enablement.
- Delegated generation freezes the reviewed format/entropy requirement and uses CSPRNG inside the protected target, exact allowlist, atomic restrictive creation, fail-on-existing unless a rotation Gate owns the exact file, and emits no value or value hash. Validate non-empty/format/uniqueness without printing values or hashes. Secret directories/files default to restrictive permissions (for example 0700/0600 where compatible) unless the reviewed runtime identity requires a different least-privilege owner/group/mode.
- Freeze effective runtime reader/group and permissions before generation. Prove intended runtime access and prove unrelated services are denied/not-mounted where relevant.
- Secret recovery is encrypted before leaving the protected runtime and exists in a different failure domain. Ciphertext stays outside ordinary repo/review artifacts unless an explicitly reviewed encrypted-storage design says otherwise. Database backup and Secret recovery are separate artifacts.
- A profile-bound DPAPI/CurrentUser copy may be a low-operation first recovery copy, never sole disaster recovery.
- Recovery creation must be proven on the real Owner host; a documented path or sandbox copy is not proof.
- Credential-changing recovery uses two phases: create/verify pending recovery artifact -> perform/verify remote change -> then promote final artifact. Failed/ambiguous remote action does not publish a final recovery artifact.
- Recovery serialization/parser compatibility is validated before remote mutation, including reviewed encoding/line-ending/BOM behavior where relevant; successful decrypt alone does not prove payload/parser validity. Creation includes an immediate in-memory round-trip/identity check. Do not print decrypted payloads or plaintext checksums; clear sensitive plaintext buffers as soon as practical.
- Restore over live Secrets is never implicit; restore is a separate explicit Gate and defaults to a fresh/empty project Secret location followed by permission, inventory, and runtime compatibility checks.

#### Target-host reality and ACL
- Prove which real host/runtime is being changed before claiming a host-local result.
- Same absolute path in sandbox/container/WSL/remote runner does not prove real-host state.
- Host-local write requires machine/user/effective privilege + target identity before mutation and same-target host-local read-back afterward.
- Script/runtime/API compatibility and native exit status are part of preflight where relevant.
- If real-host execution cannot be proven, fail closed with a precise RETURN instead of claiming success.
- Owner-local checkpoints are one-shot/minimal, designed by Reviewer/Executor, and emit bounded non-secret Evidence; Owner is not responsible for debugging/design.
- Multi-domain Owner-local scripts expose phase markers so failures before/after remote execution are distinguishable.
- Windows ACL tightening avoids unnecessary owner changes; validate the protected leaf/subtree and inheritance path, not unrelated ancestors. Protected Secret locations use an explicit principal allowlist and do not gain broad Everyone/Users/Authenticated-Users access for convenience. Do not rewrite unrelated parent ACLs unless the Gate owns them.
- Scripts fail closed: native non-zero exit, runtime exception, or verification mismatch cannot be followed by an unconditional/static PASS; retain a non-secret failure class.
- Partial/ambiguous execution is reconciled before retry. Existing partial objects are classified before repair: known bounded partial state may be repaired; unknown/non-empty objects fail closed. Unknown Secret-path contents are not deleted, overwritten, printed, hashed, or read merely to clear a collision.
- Target-host Evidence for a host-local write includes host identity, execution proof, post-write path/state read-back, permission/ACL read-back when applicable, runtime/version compatibility when applicable, and explicit native-exit checking.

### 11C. Deployment / Network / Resources

- Prove private runtime before public routing.
- Private/admin services are not published on random host ports merely for convenience.
- After public exposure, immediately verify anonymous/negative access boundaries; an unintended anonymous route is removed/contained and returned.
- HTTPS WebSocket paths require WSS/upgrade verification when applicable.
- Frontend deployed does not imply backend ready; validate relevant layers separately.
- Health evidence distinguishes process/container, web/API, DB/persistence, and business worker/scheduler health when those layers exist; one healthy layer does not imply the others.
- Architecture/storage/auth changes update dependent preflight, backup/restore, health, and exposure checks before PASS.
- Functional PASS does not imply resource PASS.
- Cleanup remains allowlisted/reference-checked; no broad prune.

### 11D. Automation / Authentication

- Before first real automated action, fail-closed SAFE_MODE/equivalent must be wired to real worker/scheduler/business actions, persist across restart/recreate, and default safe.
- Browser profile/Cookie/session lifecycle must be explicit when automation depends on them.
- Automation proves persistence/idempotency/duplicate prevention before real smoke.
- First real user/money/production-impact action uses the smallest meaningful real Canary with: single/bounded target, max count, short expiry, central guard, explicit authorization, safe end state, non-target delta check, and restart/duplicate prevention when relevant.
- Auth invalid -> pause affected scope -> persist `REAUTH_REQUIRED` -> notify once per transition -> full target-bound reauth -> identity match fail-closed -> encrypted in-place credential update -> read-only validation.
- Notification failure does not resume business.
- Reauthentication success does not automatically resume business actions; resume is an explicit controlled step.

### 11E. Provider / Payment

Maturity note: rules proven on one Provider/project do not become cross-Provider `VALIDATED` automatically; cross-Provider generalization remains `PROVISIONAL` until independently exercised.

#### Identity, permission, Canary
- Keep account/login, merchant/seller/PID, application/client ID, product/contract permission, environment, signing/verification material, callback route/ack contract, interaction mode, amount/currency, and Canary fulfillment type distinct. A Provider-created new application/merchant identity remains distinct until explicitly correlated.
- Do not infer merchant/application ownership merely because the same human can manage both.
- Account-side KYC/KYB, product signing, merchant binding, Provider authorization, 2FA/wallet signature, and equivalent account-side actions remain Owner checkpoints.
- Treat `APPLICATION_CONFIGURED`, `PRODUCT_PERMISSION_ACTIVE`, and `MERCHANT_BINDING_CORRECT` as separate facts. Do not rewrite application code to bypass a missing Provider/account permission.
- Provider paid, local paid, order state, and fulfillment completion are separate proofs.
- One real Canary enables only the intended channel where practical, keeps unrelated Providers/channels disabled where technically possible, freezes reviewed amount/currency bounds, and authorizes one bounded buyer action. Provider success forbids a blind second payment.
- Reconciliation/query paths are proven read-only from actual implementation/endpoint semantics, not method names alone, and must not create/capture/refund/cancel or mutate local business state as a hidden side effect.

#### Callback and signing
- Callback/webhook success acknowledgement comes only after authenticity, expected app/environment, server-owned merchant correlation, durable order correlation, exact amount/currency, allowed Provider status, idempotency/replay handling, and durable local commit/already-committed recognition.
- Never "fix" retries by returning success unconditionally.
- Signature unit tests alone are insufficient when durable first-delivery/replay behavior is part of the acceptance boundary; verify first delivery + same-event replay, exact Provider acknowledgement/body/content type where required, and downstream event/state identity.
- Key/signing rotation is staged: configure new -> parse/read-back compatibility -> callback/query verification -> only then retire old material.

#### Payment recovery
- Provider terminal success + local timeout/cancel is recovery, not another payment.
- Distinguish at least: `PRE_EXPIRY_PAID_LATE_CALLBACK` vs `POST_EXPIRY_PROVIDER_PAYMENT`.
- Generic automatic recovery is allowed only for timing/cancellation shapes explicitly accepted by the reviewed product/runtime contract.
- Manual cancellation, payment after accepted expiry, ambiguous ownership/order/amount/currency, or unrecoverable inventory/fulfillment invariants fail closed by default.
- Recovery occurs through application/domain transaction logic, not ad-hoc direct SQL status edits.
- Recovery selector cardinality is exact: zero or multiple candidates fail closed.
- Immediately before mutation, re-read/re-lock critical payment/order/inventory facts inside the transaction/equivalent consistency boundary.
- Recovery preserves idempotency and restores the full invariant set: payment/order/child-order truth, inventory, fulfillment eligibility, duplicate prevention, contradictory terminal/refund checks, and downstream dispatch eligibility; fulfillment dispatch follows the product/order's original fulfillment type rather than changing business semantics to make recovery pass.
- Durable DB commit and queue/outbox/worker/fulfillment completion are separate proofs. If DB recovery committed but downstream dispatch is pending/ambiguous, reconcile downstream durable state; do not rerun recovery just to fire the worker.
- Before replay classify previous attempt: `NOT_COMMITTED | COMMITTED | PARTIAL_OR_PENDING | AMBIGUOUS`. Replay is forbidden except where `NOT_COMMITTED` or explicit reviewed replay-safety is proven.
- After a proven non-committed production failure: identify/reproduce the narrow cause, add regression/negative guard, build/qualify a new immutable candidate, run fresh production preflight/backup as required, then authorize only the bounded next attempt.
- Diagnostic and recovery logic should share selector/facts/validation/guard ordering. Separate diagnostic logic requires parity/regression proof before its diagnosis can justify production recovery changes.
- Incident-only recovery tooling remains narrowly scoped and does not become scheduled/startup/public/generic runtime policy automatically. Incident closeout records whether the normal runtime/application was actually changed so a one-shot recovery is not misdocumented as a steady-state capability.
- Canary fixture semantics must match the invariant being proven; manual fulfillment cannot prove automatic delivery.
- Provider/payment Evidence separates at least: provider create, buyer action, provider remote terminal status, callback/webhook authenticity, acknowledgement, merchant/app/order/amount/currency correlation, local payment state, local order state, fulfillment state, duplicate side-effect count, real-payment retry count, and refund action when applicable.
- Raw Provider payloads, buyer identities, transaction identifiers, and private business identifiers remain inside the protected execution/application boundary unless a specific non-secret identifier is required for review.
- Refund or another real payment is a separately authorized consequential action.

### 11F. Closeout

- Closeout sequence: remote hygiene -> reconstructible archive barrier -> local decommission -> final reconciliation.
- Every deletion candidate is classified: reconstructible/durable/backup-recovery/Secret-recovery/local-rebuildable/local-disposable/shared/UNKNOWN. `UNKNOWN` fails closed.
- Remote/local cleanup removes an artifact only when project ownership is proven, it is unreferenced, it is reconstructible/disposable or otherwise explicitly authorized, and retention allows deletion. A failed helper/preflight identifies the exact safety invariant that failed; unrelated serialized/runtime fields do not become accidental deletion blockers. Active manifests, durable business data, runtime Secrets, validated recovery points, and Shared Infra are kept by default.
- Before deleting local source/docs/workspaces, require canonical remote read-back, no unpushed project commits, no untracked unique non-secret project files after archive, no sensitive data archived to Git, and reconstruction proof.
- Git/canonical archive excludes live DB/dumps, Secrets, tokens/cookies/browser profiles, private keys, private customer/order data, Provider logs with private material, and Secret-recovery material unless a separately reviewed encrypted-storage design explicitly permits it.
- In shared repositories, cleanliness is scoped to project-owned paths; do not mutate shared Git topology merely for cosmetic cleanliness.
- Local runtime/workspace deletion requires current remote/production health, no unique business data only locally, exact project ownership, proven recovery/reconstruction, and proof that local runtime is not still required for rollback.
- Project Docker deletion is exact/allowlisted after fresh reference checks; shared resources remain unless separately reviewed.
- A necessary protected recovery artifact may remain outside ordinary worktrees as an explicit exception; do not delete it for cosmetic zero-file goals.
- Packaged-app/path virtualization is considered before declaring recovery material missing; distinguish path-context mismatch from actual missing/deleted state.
- If the normal SSH path repeatedly fails before remote identity/output and an authenticated Provider/server console exists, a reviewed bounded metadata-only recovery checkpoint may use that channel to prove hostname/user/recovery-root/data presence. This is a recovery exception, not a new default execution channel.
- If deletion is blocked by execution policy after safety classification, first prove the destructive command did not start and no partial deletion occurred. Then do not bypass through another shell/language/scheduler/tool; move only the exact irreversible allowlisted action to an explicit Owner-local checkpoint, then verify absence read-only.
- Completed independent sub-Gates remain accepted; do not replay them merely because another closeout step was blocked.
- Compare later probes with accepted baseline and equivalent probe semantics; distinguish known accepted property, new regression, and unproven drift.
- When attaching to an authenticated browser, prefer neutral/admin landing pages. If unrelated sensitive text appears, navigate away, do not inspect/reproduce it, and record only a redacted boundary event. Accidental visibility alone is not automatic credential compromise; concrete exposure/misuse evidence controls rotation.
- Deferred retention events require explicit reconciliation. Older recovery material is deleted only when replacement coverage, business/legal retention, Secret recovery, authorization, and incident dependencies permit.
- Final reconciliation proves project/business stage, completed Gates, production/runtime truth, local workstation truth, recovery model, reconstruction path, mutation/deletion counters where applicable, exact exceptions, deferred obligations, and no shared/production regression.
- Deferred business actions remain `DEFERRED_NOT_PASS`, not PASS.
- Historical audit references are not globally rewritten when current pointers change; reference-only repair does not replay already-valid runtime checks.
- Closeout does not authorize Secret deletion/disclosure, Shared Infra mutation, real payment/refund, Provider activation, destructive Git history rewrite, or other Owner-only actions.

## 12. Common precise returns

Use a precise reason, not generic FAILED. Common stable examples:

```text
RETURN_PREFLIGHT_DRIFT
RETURN_TEST_FAILURE
RETURN_DATA_MIGRATION_RISK
RETURN_SHARED_INFRA_CHANGE_REQUIRED
RETURN_STORAGE_LAYOUT_UNRESOLVED
RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE
RETURN_SSH_TRUST_DRIFT
RETURN_SSH_CONNECTION_REQUIRED
RETURN_SECRET_COLLISION
RETURN_SECRET_ACCESS_MISMATCH
RETURN_SECRET_RECOVERY_UNAVAILABLE
RETURN_SECRET_RISK
RETURN_PROVIDER_IDENTITY_OR_PERMISSION_UNRESOLVED
RETURN_OWNER_ACTION_REQUIRED
```

## 13. End condition

The loop repeats until closeout.

Owner-facing output should normally contain only:
- current result;
- problems that matter;
- project progress;
- next step;
- exact Owner action/relay if truly required.

Everything else stays as short as safety permits.
