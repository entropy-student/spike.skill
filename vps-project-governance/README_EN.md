# VPS Project Governance v0.1.6

> A reusable delivery-governance Skill for turning project work into a controlled loop: Owner request → Reviewer boundary → Executor action → Evidence → Reviewer PASS/RETURN.

**Status: Active / Validated on Xianyu / Evolving**  
**Storage Layout Contract: rev1 / active operational addendum**  
**Target Host Reality Contract: rev1 / active operational addendum**

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
- Owner involvement is reserved for payments/purchases, identity/account authorization, Secret entry/rotation, irreversible deletion, material production enablement, and major business/compliance choices;
- adjacent Gates may be compressed only when rollback and evidence boundaries stay safe;
- accepted Gates are not rerun without material drift;
- production deploy/recreate explicitly selects the canonical manifest and verifies release identity after recreate;
- functional PASS does not imply resource PASS;
- broad Docker prune is forbidden by default;
- first real business action uses a bounded Canary;
- successful reauthentication does not automatically resume business actions;
- post-production maintenance uses a Change Gate rather than reopening onboarding;
- Shared VPS projects must freeze their storage layout before deployment;
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
- `templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md`

## Target Host Reality

An Execution Agent may run in a sandbox, container, WSL instance, VM, or remote runner that is not the Owner's real target host. Therefore an absolute path with the same spelling is not sufficient evidence that the target host was changed.

For host-local claims involving paths, ACLs, services, Docker daemon state, ports, Secret staging, or production host writes, evidence must include target-host identity plus a read-back from that same host after the write.

If the Executor cannot prove it can actually operate the target host, it must return:

```text
RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE
```

and must not create a same-named path in its own environment and call that a PASS.

For Windows Owner-owned Secret staging directories, do not change the owner merely to tighten the DACL. Some `SetOwner()` / `Set-Acl` patterns require `SeSecurityPrivilege` even when the current user already owns the path. Prefer bounded DACL/inheritance changes with host-native read-back such as `Get-Acl` / `icacls`. Any exception or non-zero native exit invalidates PASS; scripts must not print unconditional PASS lines afterward.

See:

- `references/TARGET_HOST_REALITY_CONTRACT.md`

## Source-of-truth order

1. Owner's latest explicit instruction;
2. Shared VPS Contract, when applicable;
3. project `REVIEWER_HANDOFF.md`;
4. current Reviewer Gate Prompt / decision;
5. `EXECUTION_EVIDENCE.md`;
6. `EXECUTOR_HANDOFF.md`;
7. README / history / chat.

Governance defines reusable rules. Handoff files belong to the concrete project or infrastructure layer.

## Packaging normalization

The original v0.1.6 protocol still contained legacy `PROJECT_HANDOFF.md` wording in older sections even though v0.1.6 later standardized `REVIEWER_HANDOFF.md` as the canonical project Reviewer truth. This Skill consistently uses `REVIEWER_HANDOFF.md`; `PROJECT_HANDOFF.md` is legacy-only.

The original protocol header also retained `DRAFT / EVOLVING`, while `GOVERNANCE_HANDOFF.md` declared v0.1.6 `ACTIVE / VALIDATED-ON-XIANYU / EVOLVING`. This Skill follows the Governance Handoff status.

Storage Layout Contract rev1 formalizes the Shared VPS layout already used by the infrastructure design. It is an operational addendum and does not change the core Owner/Reviewer/Executor or PASS/RETURN semantics, so the Governance version remains v0.1.6.

Target Host Reality Contract rev1 is also an operational addendum. It was validated by a DujiaoNext / Unified Pay Windows-host incident where an Agent-side path did not exist on the real Owner host. It adds an execution-environment / target-host evidence boundary without changing the core role or PASS/RETURN semantics, so the Governance version remains v0.1.6.
