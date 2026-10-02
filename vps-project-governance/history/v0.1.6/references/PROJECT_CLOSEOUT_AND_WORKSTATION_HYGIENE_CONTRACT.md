# Project Closeout and Workstation Hygiene Contract rev1

> Operational addendum to VPS Project Governance v0.1.6.
>
> Status: `ACTIVE / VALIDATED-ON-MINI-CRAFT-K9`
>
> Canonical repository: `entropy-student/spike.skill`
>
> Canonical path: `/vps-project-governance`

## 1. Purpose

This contract governs post-production/public-platform project closeout when the project should remain operable or recoverable while obsolete local/runtime residue is removed.

It separates four concerns:

```text
REMOTE_HYGIENE
  -> RECONSTRUCTIBLE_ARCHIVE_BARRIER
  -> LOCAL_WORKSPACE_DECOMMISSION
  -> FINAL_RECONCILIATION
```

Different target hosts and rollback domains remain separate Gates.

## 2. Artifact classification

Before deletion, classify each project-owned artifact as one of:

```text
CANONICAL_REMOTE_RECONSTRUCTIBLE
DURABLE_REMOTE
BACKUP_RECOVERY
SECRET_RECOVERY
LOCAL_REBUILDABLE
LOCAL_DISPOSABLE
SHARED
UNKNOWN
```

`UNKNOWN` fails closed.

A classified sensitive recovery artifact may remain as an intentional protected exception; it does not block cleanup of unrelated ordinary project files.

## 3. Remote hygiene

Production/VPS cleanup may remove only artifacts that are all of:

- project-owned;
- unreferenced;
- reconstructible or disposable;
- outside required retention.

Keep by default:

- active application manifests/files;
- durable project data;
- runtime Secrets;
- validated recovery points;
- Shared Infra.

Never use broad system/Docker prune as a substitute for project classification.

A failed helper/preflight assertion must identify the exact safety invariant that failed. Unrelated serialized/runtime fields must not become accidental deletion blockers.

## 4. Reconstructible archive barrier

Before deleting local source/docs/workspaces, require:

```text
GITHUB_OR_CANONICAL_REMOTE_READBACK=PASS
UNPUSHED_PROJECT_COMMITS=0
UNTRACKED_UNIQUE_NONSECRET_PROJECT_FILES=0_AFTER_ARCHIVE
SENSITIVE_DATA_ARCHIVED_TO_GIT=NO
RECONSTRUCTION_PROOF=PASS
```

When the project lives in a shared repository/workspace, scope this barrier to the project-owned subtree/files. Whole-repository cleanliness is not required.

Do not mutate shared Git topology merely to make one project subtree look clean.

Git must not be used as the archive destination for:

- database dumps/live DB files;
- Secrets;
- tokens/cookies/browser profiles;
- private keys;
- encrypted Secret-recovery artifacts unless a separately reviewed encrypted-storage design explicitly uses Git;
- private customer/order data;
- provider logs containing private material.

## 5. Workstation decommission

Project-local runtime/workspaces may be removed only after:

- current remote/production health is proven;
- no local runtime is still required for rollback;
- no unique business data exists only locally;
- exact project ownership is proven;
- recovery/reconstruction paths are proven;
- project-specific Docker resources are allowlisted;
- shared resources are excluded.

Required Docker rule:

- delete exact project containers/networks/volumes only after fresh reference checks;
- shared images/networks/volumes are retained unless separately reviewed;
- no broad prune.

Evidence should record exact before/after counts and reclaimed bytes when measurement is reliable.

## 6. Protected local recovery exception

"Leave no local project files" is an optimization target, not an invariant.

A local protected recovery artifact remains when:

- it is intentionally outside Git;
- it is required for Secret/provider/business recovery;
- no validated alternative recovery destination has replaced it.

Protected recovery should be moved outside ordinary worktrees when safe and useful, but must not be deleted for cosmetic cleanliness.

A zero-ordinary-files closeout can still PASS with exact protected-recovery/shared-cache exceptions.

## 7. Packaged-app path virtualization

On Windows, environment aliases such as `%LOCALAPPDATA%` may resolve differently inside packaged applications.

Before declaring a protected artifact missing:

- check the execution context that created it;
- search the relevant package LocalCache by exact filename using metadata-only checks;
- distinguish:
  - `PATH_CONTEXT_MISMATCH`
  - `ARTIFACT_MISSING`
  - `ARTIFACT_DELETED`.

Recovery evidence should prefer the concrete resolved namespace/path over an environment-variable shorthand.

Do not move/devirtualize sensitive recovery artifacts merely to make paths conventional unless a separate recovery-management Gate authorizes it.

## 8. Target-host and provider-console recovery checks

Closeout may require proof that local historical runtimes are not the only recovery source.

If strict SSH repeatedly fails before remote identity/output and an authenticated provider browser terminal/console is available, a bounded Owner-local metadata-only checkpoint may be used when allowed by Target Host Reality governance.

Record:

- actual hostname;
- actual console user;
- project backup-root presence;
- database recovery presence;
- wp-content recovery presence;
- deployment/manifest recovery presence;
- current durable-data directory presence.

This proves that irreversible local cleanup will not destroy the only known recovery path; it does not by itself certify ideal disaster-recovery recency.

## 9. Execution-policy blocked deletion

An execution-policy denial is not the same as a safety-classification failure.

If:

- the exact deletion target is already classified;
- recovery barriers are satisfied;
- the destructive command did not start;
- no partial deletion occurred;

then do not bypass policy by switching shells, languages, schedulers, or automation paths.

Move the irreversible exact allowlisted action to an explicit Owner-local checkpoint. After the Owner action, Executor performs read-only absence verification and persists Evidence/Handoff.

Completed independent sub-gates remain accepted and are not replayed.

## 10. Known baseline vs new drift

A closeout Gate must not become blocked by an unrelated previously accepted project property merely because a later probe reports it differently or omits historical probe semantics.

Before opening remediation:

- compare against the last accepted baseline;
- compare the exact probe semantics;
- classify as:
  - `KNOWN_ACCEPTED_PROPERTY`
  - `NEW_REGRESSION_PROVEN`
  - `UNPROVEN_DRIFT`.

Unrelated accepted properties do not block workstation closeout unless the current closeout action materially increases the risk.

## 11. Authenticated-browser snapshot boundary

If automation attaches to an already-authenticated browser session, the initial accessibility/snapshot state is part of the evidence boundary.

Prefer attaching on neutral/admin landing pages, not provider log/debug pages.

If unrelated potentially sensitive text appears:

- navigate away immediately;
- do not inspect further;
- do not reproduce values in Evidence;
- record only a redacted boundary event.

An accidental snapshot is not automatically a credential-compromise incident; rotation requires concrete evidence of credential/Secret exposure or misuse.

## 12. Deferred-event retention

If a retention rule says "retain until event X + N days" and event X is formally deferred without a scheduled date, Reviewer should open a retention reconciliation checkpoint.

An older recovery point becomes eligible for deletion only when:

- a newer validated recovery point covers the required restore scope;
- legal/business retention is satisfied;
- Secret recovery remains valid;
- any required Owner authorization is obtained;
- no unresolved incident depends on it.

Do not silently retain forever and do not silently delete.

## 13. Final reconciliation

Closeout is not complete until a final reconciliation seals:

- current project/business stage;
- completed Gates;
- current production/runtime truth;
- local workstation truth;
- recovery model;
- intentional exceptions;
- deferred obligations;
- reconstruction path;
- mutation counters.

At minimum:

```text
REMOTE_PROJECT_HYGIENE=PASS
CANONICAL_ARCHIVE_READBACK=PASS
LOCAL_UNIQUE_NONSECRET_FILES=0
LOCAL_SENSITIVE_ITEMS_ARCHIVED_TO_GIT=0
LOCAL_RUNTIME_DECOMMISSIONED=YES
LOCAL_PROJECT_CONTAINERS_REMAINING=0_OR_EXACT_EXCEPTION
LOCAL_PROJECT_VOLUMES_REMAINING=0_OR_EXACT_EXCEPTION
LOCAL_ORDINARY_PROJECT_FILES_REMAINING=0_OR_EXACT_EXCEPTION
LOCAL_REMAINING_EXCEPTIONS_WITH_REASON=
SECURE_RECOVERY_STILL_VALID=PASS
SHARED_RESOURCES_TOUCHED=0
BROAD_PRUNE_USED=NO
PRODUCTION_REGRESSION=PASS
```

Deferred business events are recorded as `DEFERRED_NOT_PASS`, not upgraded to PASS by closeout.

## 14. Audit-reference integrity

Cumulative Evidence/Handoff files are append-only audit records except for explicitly scoped corrections.

Never globally replace historical commit IDs merely because a newer Evidence commit exists.

Current-Gate references must be updated only inside the current Gate section; historical references remain bound to the Gate that produced them.

Before final closeout PASS, perform a lightweight reference-integrity check on:

- final report pointer;
- final Evidence pointer;
- current Handoff pointer;
- historical lines touched by final edits.

A reference-only error after runtime validation uses a documentation-only repair Gate. It does not require replaying runtime/deletion/payment checks.

## 15. Closeout success boundary

A project may close with:

```text
LOCAL_ORDINARY_PROJECT_FILES=ZERO
LOCAL_PROJECT_RUNTIME=DECOMMISSIONED
LOCAL_PROJECT_DOCKER_RESIDUE=ZERO
GITHUB_CANONICAL_ARCHIVE=PASS
SECURE_RECOVERY_RETAINED_OUTSIDE_GITHUB
PRODUCTION_RUNTIME=UNCHANGED_HEALTHY
DEFERRED_BUSINESS_ACTIONS=EXPLICIT_NOT_PASS
```

Exact protected recovery, shared Git cache, and shared upstream resources may remain as intentional exceptions.

## 16. Authority boundary

This contract does not authorize:

- Secret disclosure or Secret deletion;
- Shared Infra mutation;
- real payment/refund;
- provider activation;
- irreversible deletion without the normal Owner/Reviewer authority boundary;
- active business/Soft Launch enablement;
- destructive Git history rewrite.

It defines how already-authorized project closeout is classified, evidenced, reconciled, and stopped.
