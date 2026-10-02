# VPS Project Governance v0.1.6

> A reusable delivery-governance Skill for turning project work into a controlled loop: Owner request → Reviewer boundary → Executor action → Evidence → Reviewer PASS/RETURN.

**Status: Active / Validated on Xianyu / Evolving**  
**Storage Layout Contract: rev1 / active operational addendum**  
**SSH / Delegated Secret Operations: rev2 / active operational addendum**  
**Target Host Reality Contract: rev2 / active operational addendum**

This is not a Docker command cookbook. It governs project delivery, production changes, Shared VPS boundaries, evidence, rollback, secrets, data handling, storage layout, and when the Owner must intervene.

## Use it for

- onboarding a new project to a VPS or Docker host;
- continuing an existing project with handoff files;
- issuing precise work to Codex / an Execution Agent;
- post-production bug fixes, dependency upgrades, configuration changes, and image optimization;
- automation, browser-agent, worker, payment, or database projects;
- multiple projects sharing host-level infrastructure;
- continuing safely across chat, Reviewer, or Executor changes;
- minimizing Owner file-moving and low-level technical decisions.

## Core loop

```text
Owner
  ↓
Reviewer / Architect / Gatekeeper
  ↓
Execution Agent
  ↓
Evidence
  ↓
Reviewer PASS / RETURN
```

`PASS_CANDIDATE != PASS`. Only the Reviewer can issue a formal PASS.

## Fast invocation

```text
Use VPS Project Governance v0.1.6 for this project.
Read the current handoff first. If there is no reliable handoff, enter read-only P0 Discovery.
Do not repeat accepted Gates unless fresh preflight detects material drift.
Minimize Owner operations and keep Shared Infrastructure outside business-project scope.
```

For a production change:

```text
Treat this as a Production Change Gate under VPS Project Governance v0.1.6.
Do not reopen initial onboarding. Protect the current production baseline, define rollback first,
change only the authorized scope, verify, regress, and RETURN/rollback on mismatch.
```

## Non-negotiable rules

- evidence before PASS;
- read before write;
- Shared Infrastructure is changed only in a separate Infra Review;
- Owner involvement is reserved for payments/purchases, identity/account authorization, Secret authority/entry/rotation, irreversible deletion, material production enablement, and major business/compliance choices; an exact Secret allowlist may be delegated only after explicit Owner authorization;
- adjacent Gates may be compressed only when rollback and evidence boundaries stay safe;
- accepted Gates are not rerun without material drift;
- production deploy/recreate explicitly selects the canonical manifest and verifies release identity after recreate;
- functional PASS does not imply resource PASS;
- broad Docker prune is forbidden by default;
- first real business action uses a bounded Canary;
- successful reauthentication does not automatically resume business actions;
- post-production maintenance uses a Change Gate rather than reopening onboarding;
- Shared VPS projects must freeze their storage layout before deployment;
- existing Shared VPS SSH trust should be recovered from a value-safe handoff rather than Owner memory;
- delegated Secret generation is exact, explicit, fail-on-existing, and never implies Provider activation;
- before proving what changed on a host, prove which host was actually changed.

## Shared VPS Storage Layout

The canonical project-storage layout is:

```text
/srv/infra                 Shared Infrastructure only
/srv/apps/<project>        reconstructible app / Compose / non-secret config
/srv/data/<project>        database / uploads / durable state / secret files
/srv/backups/<project>     project-specific recovery material
```

Each project must have its own apps/data/backups namespace and an explicit `PROJECT_STORAGE_MANIFEST.md` before Shared VPS deployment. Durable anonymous volumes are not allowed. Named volumes are allowed only when project-namespaced, documented, and backed by a clear backup/restore path.

Historical production projects are not migrated merely for neatness. Any path migration must use a separate Storage Migration Change Gate with backup, rollback, restore/read-back validation, and Reviewer PASS before cleanup.

See:

- `references/STORAGE_LAYOUT_CONTRACT.md`
- `references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md`
- `templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md`
- `templates/SHARED_VPS_HANDOFF_TEMPLATE.md`

## SSH and Delegated Secret Operations

Shared VPS connection metadata belongs in a value-safe `SHARED_VPS_HANDOFF.md`: host/user/port, identity-file reference, public/host-key fingerprints, privilege model, and a bounded read-only probe. Private-key contents, passwords, passphrases, and tokens never belong there. Host-key drift fails closed.

Secret authority remains Owner-controlled by default. If the Owner cannot create or enter a Secret, they may explicitly delegate an exact allowlist to the Executor. Generation must happen inside the protected target, refuse unexpected existing files, use a CSPRNG, emit zero values, prove least-privilege runtime access, and create encrypted recovery in another failure domain. DPAPI CurrentUser is acceptable as a low-operation first Windows recovery copy only with its profile-bound limitation documented.

See `references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md` and `templates/SHARED_VPS_HANDOFF_TEMPLATE.md`.

## Target Host Reality

An Execution Agent may run in a sandbox, container, WSL instance, VM, or remote runner that is not the Owner's real target host. Therefore an absolute path with the same spelling is not sufficient evidence that the target host was changed. Host-local claims require target-host identity plus read-back from that same host after the write. If the Executor cannot prove it can actually operate the target host, it must return `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE`.

For Windows Owner-owned Secret staging directories, do not change the owner merely to tighten the DACL. Some `SetOwner()` / `Set-Acl` patterns require `SeSecurityPrivilege`; prefer bounded DACL/inheritance changes with host-native read-back such as `Get-Acl` / `icacls`.

See `references/TARGET_HOST_REALITY_CONTRACT.md`.

## Source of truth

Separate **governance rules** from **project factual state**.

Governance-rule precedence:

1. Owner's latest explicit instruction;
2. active bounded Reviewer override / pinned addendum;
3. GitHub canonical Governance latest;
4. project-local or local-machine historical Governance copies;
5. old snapshots / chat.

Project factual-state precedence:

1. current accepted Reviewer decision / `REVIEWER_HANDOFF.md`;
2. fresh authoritative read-back + accepted `EXECUTION_EVIDENCE.md`;
3. `EXECUTOR_HANDOFF.md`;
4. README / history / chat.

Before a consequential Gate, reconcile any Evidence/Handoff lag instead of deleting historical evidence.

## Packaging normalization

The original v0.1.6 protocol still contained legacy `PROJECT_HANDOFF.md` wording in older sections even though v0.1.6 later standardized `REVIEWER_HANDOFF.md` as the canonical project Reviewer truth. This Skill consistently uses `REVIEWER_HANDOFF.md`; `PROJECT_HANDOFF.md` is legacy-only.

The original protocol header also retained `DRAFT / EVOLVING`, while `GOVERNANCE_HANDOFF.md` declared v0.1.6 `ACTIVE / VALIDATED-ON-XIANYU / EVOLVING`. This Skill follows the Governance Handoff status.

Storage Layout Contract rev1 formalizes the Shared VPS layout already used by the infrastructure design. It is an operational addendum and does not change the core Owner/Reviewer/Executor or PASS/RETURN semantics, so the Governance version remains v0.1.6.

SSH/Delegated Secret Operations rev2 records reusable SSH trust metadata and
allows an Owner who cannot run commands to delegate an exact Secret allowlist.
The SSH contract is validated. Delegated provisioning and DPAPI CurrentUser recovery are validated on Unified Pay production-like Gates, while remaining respectively explicit-Owner-authorization-only and profile-bound. Target Host Reality is validated on a DujiaoNext / Unified Pay Windows-host incident.
