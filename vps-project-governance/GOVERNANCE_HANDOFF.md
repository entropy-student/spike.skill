# VPS Project Governance — GOVERNANCE HANDOFF

> Maintainer: Governance Reviewer  
> Last reviewed: 2026-09-14 (Asia/Shanghai)

## Current baseline

- Core governance: v0.1.6, ACTIVE / VALIDATED-ON-XIANYU.
- Storage Layout Contract: rev1, ACTIVE.
- SSH connection contract: rev1, VALIDATED by the existing Hostinger shared-VPS
  read-only audit.
- Delegated Secret provisioning: rev1, VALIDATED-ON-UNIFIED-PAY by the production-like private Canary and D14-R2 Storage Manifest closeout; it remains explicit-Owner-authorization-only rather than the default Secret path.
- Windows DPAPI CurrentUser off-host recovery pattern: VALIDATED-ON-UNIFIED-PAY as a low-operation first recovery copy; it is profile-bound and is not a universal or sole disaster-recovery mechanism.
- Target Host Reality Contract: rev1, ACTIVE / VALIDATED-ON-DUJIAONEXT-WINDOWS-HOST; host-local claims require target-host identity plus host-local read-back.

The v0.1.6 core version remains unchanged. Storage, SSH/Secret, and Target Host Reality are operational addenda so project observations do not silently rewrite the validated core model.

## Problems closed by current addenda

- Storage Layout Contract closes project/data/backup namespace ambiguity on Shared VPS.
- SSH/Delegated Secret Operations defines how a future Reviewer recovers an already verified connection and how an Owner who cannot create files may explicitly delegate exact cryptographic generation without exposing values.
- Target Host Reality closes the execution-environment/real-host ambiguity exposed when an Agent-side Windows path existed only in the execution environment and not on the Owner's real host.

## Latest validation result

The compressed Unified Pay D13-R1/D14 Gate has now functionally completed:

1. correct non-root Secret readability and production client provisioning;
2. generate an exact seven-file Secret allowlist on the verified VPS without
   value output or overwrite;
3. create and immediately verify a Windows DPAPI encrypted off-host copy;
4. run the private, Provider-disabled Canary without a public route.

Independent Reviewer checks confirmed the runtime, permissions, protected
recovery artifact metadata and private Canary without reading Secret values.
The delegated provisioning and DPAPI patterns are now `VALIDATED-ON-UNIFIED-PAY`; D14-R2 closed
the remaining current-state Manifest conflicts and D15 independently retained
the runtime boundaries after public ingress. The direct Tunnel-to-alias pattern
remains `CANDIDATE-VALIDATED` because it has one project validation and does not
yet justify a new core rule. No Canary rerun is required.

## Candidate findings not promoted to core/addenda

- Direct Cloudflare Tunnel-to-stable-Docker-alias public Canary is `CANDIDATE-VALIDATED` on Unified Pay D15. It remains project-derived and is not a generic Governance rule yet.

### Provider callback completion contract

Unified Pay D16AB exposed a cross-project review rule that remains
`CANDIDATE-VALIDATED` until another project confirms it: a callback Gate must
verify the exact Provider-specific HTTP success acknowledgement only after the
durable state transaction commits, and every downstream event must carry the
verified Provider identity rather than a handler default. Unit tests of signing
or route gating are insufficient; require a database-backed first-delivery and
same-event replay proof including response body/content type and Outbox payload.

Plaintext credentials discovered in Owner attachments are compromised inputs,
not migration candidates. They must be excluded from execution/evidence and
rotated through one explicit Owner-authorized protected-input checkpoint before
any external Canary.

## Source files

- `SKILL.md`
- `references/GOVERNANCE_V0_1_6.md`
- `references/STORAGE_LAYOUT_CONTRACT.md`
- `references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md`
- `references/TARGET_HOST_REALITY_CONTRACT.md`
- `templates/SHARED_VPS_HANDOFF_TEMPLATE.md`

## Safety boundary

No addendum makes Secret generation, Shared Infra mutation, host-local execution, Provider activation, or production enablement implicit. Delegated generation requires an exact Owner
authorization and an exact Reviewer Gate. Secret values remain forbidden from
chat, repositories, ordinary documentation, logs and evidence.
