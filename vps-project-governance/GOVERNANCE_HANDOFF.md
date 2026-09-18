# VPS Project Governance — GOVERNANCE HANDOFF

> Maintainer: Governance Reviewer  
> Last reviewed: 2026-09-19 (Asia/Shanghai)

## Current baseline

- Core governance: v0.1.6, ACTIVE / VALIDATED-ON-XIANYU.
- Storage Layout Contract: rev1, ACTIVE.
- SSH / Delegated Secret Operations: rev2, ACTIVE / VALIDATED across Unified Pay + DujiaoNext Windows Owner-host operations.
- Delegated Secret provisioning: VALIDATED-ON-UNIFIED-PAY; it remains explicit-Owner-authorization-only rather than the default Secret path.
- Windows DPAPI CurrentUser off-host recovery pattern: VALIDATED as a low-operation first recovery copy with a strict target-host/existence/round-trip boundary; it is profile-bound and is not a universal or sole disaster-recovery mechanism.
- Target Host Reality Contract: rev2, ACTIVE / VALIDATED-ON-DUJIAONEXT-WINDOWS-HOST; host-local claims require target-host identity, phase-aware execution evidence and host-local read-back.
- Production Provider Canary and Recovery Contract: rev2, ACTIVE / VALIDATED-ON-DUJIAONEXT-ALIPAY-R16. Transaction recovery now covers exact-cardinality selection, fresh pre-mutation recheck, full-invariant restoration, durable-commit vs asynchronous-side-effect separation, no-blind-replay, diagnostic/recovery parity and incident-tool containment. Cross-provider assumptions remain PROVISIONAL until additional live Provider canaries exercise them.
- Governance Source Policy: rev1, ACTIVE. GitHub `entropy-student/spike.skill/vps-project-governance` is the default canonical Governance source; local Skill copies are non-authoritative caches unless an active Reviewer explicitly pins/overrides a version/addendum.

The v0.1.6 core version remains unchanged. Storage, SSH/Secret, Target Host Reality, Production Provider Canary/Recovery and Governance Source Policy are operational addenda so project observations do not silently rewrite the validated core model.

## Problems closed by current addenda

- Storage Layout Contract closes project/data/backup namespace ambiguity on Shared VPS.
- SSH/Delegated Secret Operations defines how a future Reviewer recovers an already verified connection, how an Owner who cannot create files may explicitly delegate exact cryptographic generation, and how Windows OpenSSH/PowerShell/DPAPI transport is split into evidence-safe phases.
- Target Host Reality rev2 closes the execution-environment/real-host ambiguity and also prevents documented/intended artifacts, partial scripts or broad ancestor ACLs from being mistaken for verified target-host state.
- Production Provider Canary and Recovery rev2 separates Provider success, callback acknowledgement, local payment/order state, timing shape, timeout/post-expiry reconciliation and fulfillment semantics; it forbids blind second payment/recovery replay after ambiguous or committed outcomes and requires exact-cardinality selection, full-invariant restoration, diagnostic parity, and distinct proof of durable DB commit vs asynchronous fulfillment.
- Governance Source Policy rev1 closes GitHub-vs-local Governance drift: GitHub latest is the default rule source, Reviewer pins are temporary explicit overrides, and stale local Governance copies must not remain competing authorities.

## Latest validation results

### Shared VPS / Secret / target-host operations

Unified Pay and DujiaoNext validated these reusable rules:

1. correct non-root Secret readability and production client provisioning;
2. exact allowlist Secret generation/installation without value output or overwrite;
3. Windows DPAPI recovery must be created and verified on the actual Owner profile, not inferred from an Agent-side path;
4. a documented recovery artifact that is absent on the real Owner host is immediately superseded by host-local evidence;
5. PowerShell/OpenSSH failures need phase-specific markers and native exit checks before retry;
6. DPAPI round-trip and payload parsing are distinct checks; CRLF/parser mismatch is not a remote SSH/application failure;
7. ACL review targets the protected subtree and inheritance path, not every broader ancestor indiscriminately.

### Production Provider Canary / callback / recovery

DujiaoNext Alipay production Canary validated:

1. application identity, merchant/Seller identity and product permission are distinct facts;
2. Provider buyer payment can succeed while local payment/order closure fails;
3. RSA2 verification, AppID matching and Seller ownership must be evidenced separately;
4. once Provider success is proven, the correct action is read-only reconciliation, not another buyer payment;
5. Provider-specific callback success acknowledgement must occur only after authenticated, correlated, durable/idempotent handling;
6. a Provider-paid-before-local-timeout transaction that later finds a canceled local order is an application-level recovery problem;
7. a `manual` Canary product cannot be used to claim automatic fulfillment, and business semantics must not be rewritten to force a PASS;
8. stale UI/earlier diagnosis must be explicitly superseded by stronger read-back evidence.

## R16 transaction recovery lessons promoted on 2026-09-19

The DujiaoNext production recovery sequence validated the following reusable rules:

1. distinguish `PRE_EXPIRY_PAID_LATE_CALLBACK` from `POST_EXPIRY_PROVIDER_PAYMENT`; do not hide both behind one "late payment" label;
2. a post-expiry Provider payment is fail-closed by default unless a reviewed product/runtime policy or incident-specific recovery Gate explicitly accepts it;
3. recovery selectors require exact cardinality; 0 or >1 candidates fail closed;
4. a fresh pre-mutation recheck is required before critical recovery writes;
5. recovery restores the complete payment/order/inventory/fulfillment/idempotency invariant set rather than editing one status;
6. durable DB recovery and queue/worker/fulfillment completion are separate evidence layers;
7. ambiguous/partial/committed outcomes are never blindly replayed; read-only reconciliation comes first;
8. a proven `NOT_COMMITTED` failure may be minimally fixed, regressed, rebuilt as a new immutable candidate, re-qualified, and only then retried within a bounded Gate;
9. diagnostic paths should share the real selector/facts/validation/guard ordering; copied diagnostic logic requires parity proof and a divergent diagnostic result is void;
10. incident-only recovery tooling must not silently become a scheduled task, public endpoint, startup path, or generic runtime policy;
11. accepted historical PASS remains immutable absent material drift; stronger later evidence supersedes diagnosis by append/update, not by deleting historical evidence.

## Reporting discipline promoted by 2026-09-15 review

Reviewer/Executor status reporting should use objective Gate language:

```text
IN_PROGRESS
BLOCKED
PASS_CANDIDATE
PASS
RETURN_<CAUSE>
```

Do not call a step "the last step" or "final step" while unresolved UNKNOWN, Provider/account-side dependency, recovery rule, target-host boundary or fulfillment invariant remains. Closeout language is reserved for evidence-backed completion.

## Candidate findings not promoted to generic core

- Direct Cloudflare Tunnel-to-stable-Docker-alias public Canary is `CANDIDATE-VALIDATED` on Unified Pay D15. It remains project-derived and is not a generic Governance rule yet.
- Provider-specific merchant migration (for example personal merchant → business merchant) remains a separate account/business Change Gate; do not mix it into an in-flight transaction recovery unless required for safety.

## Source files

- `SKILL.md`
- `references/GOVERNANCE_V0_1_6.md`
- `references/STORAGE_LAYOUT_CONTRACT.md`
- `references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md`
- `references/TARGET_HOST_REALITY_CONTRACT.md`
- `references/PRODUCTION_PROVIDER_CANARY_AND_RECOVERY_CONTRACT.md`
- `references/GOVERNANCE_SOURCE_POLICY.md`
- `templates/SHARED_VPS_HANDOFF_TEMPLATE.md`

## Addendum loading rule

- Any SSH/Secret/recovery Gate: read `SSH_AND_DELEGATED_SECRET_OPERATIONS.md`.
- Any real host path/ACL/service/Owner-local action: read `TARGET_HOST_REALITY_CONTRACT.md`.
- Any real Provider/payment/webhook/callback/refund/reconciliation/fulfillment Canary: read `PRODUCTION_PROVIDER_CANARY_AND_RECOVERY_CONTRACT.md` before authorizing a real buyer action.
- At session/project start or whenever Governance version/source is uncertain: read `GOVERNANCE_SOURCE_POLICY.md`; default to GitHub canonical latest unless the active Reviewer explicitly pins/overrides a bounded version/addendum.

## Canonical Governance source

Default canonical Governance source:

```text
GitHub: entropy-student/spike.skill
Path: /vps-project-governance
```

Governance-rule precedence:

```text
Owner latest explicit instruction
  -> active Reviewer explicit override / pinned addendum
  -> GitHub canonical Governance latest
  -> local/project historical Governance copies
```

This precedence is for Governance rules. Project factual truth remains evidence-driven through the
current Reviewer decision/Handoff and fresh accepted Evidence.

A local Governance Skill is a cache, not a second Source of Truth. After canonical GitHub update and
read-back are proven, stale competing local Governance copies should be removed or de-authorized.
When an active Reviewer override closes, execution automatically returns to GitHub latest.

## Safety boundary

No addendum makes Secret generation, Shared Infra mutation, host-local execution, Provider activation, buyer payment, refund, wallet signature or production enablement implicit. Delegated generation requires exact Owner authorization and an exact Reviewer Gate. Secret values remain forbidden from chat, repositories, ordinary documentation, logs and evidence.
