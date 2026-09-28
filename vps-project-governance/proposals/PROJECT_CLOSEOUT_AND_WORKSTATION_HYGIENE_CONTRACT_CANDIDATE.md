# Project Closeout and Workstation Hygiene Contract — CANDIDATE

Status: CANDIDATE / NOT ACTIVE
Date: 2026-09-28
Origin: Mini Craft Night Kit closeout
Applies to: future Governance review only

This document is a proposal. It does not modify VPS Project Governance v0.1.6 or any active addendum.

## Problem

Current Governance already defines:

- Shared VPS storage layout;
- project/data/backup separation;
- allowlisted cleanup;
- decommission classification;
- target-host evidence;
- GitHub canonical Governance source;
- PASS/RETURN discipline.

A gap remains after a project has reached a stable production/public-platform state:

- local developer/Owner workspaces can accumulate obsolete runtime copies, rollback folders, browser profiles, transfer packages, Git worktrees and temporary artifacts;
- "archive to GitHub" can be misread as permission to upload databases, Secrets or sensitive recovery material;
- local Docker state can remain indefinitely after production cutover;
- a deferred future event (for example a deferred real-money Canary) can accidentally keep old rollback material forever if retention is expressed only relative to that event;
- no standard evidence proves that local deletion is safe because canonical reconstructible material has already been persisted elsewhere.

## Candidate closeout model

Add a project closeout phase after production/public-platform stabilization:

```text
REMOTE_HYGIENE
  -> RECONSTRUCTIBLE_ARCHIVE_BARRIER
  -> LOCAL_WORKSPACE_DECOMMISSION
  -> FINAL_RECONCILIATION
```

Different target hosts / rollback domains should remain separate Gates.

## Candidate classification

Before deletion, classify every project-owned artifact:

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

UNKNOWN fails closed.

## Git archive barrier

Before deleting local source/docs/workspaces, require:

```text
GITHUB_OR_CANONICAL_REMOTE_READBACK=PASS
UNPUSHED_COMMITS=0
UNTRACKED_UNIQUE_NONSECRET_FILES=0_AFTER_ARCHIVE
SENSITIVE_DATA_UPLOADED_TO_GIT=NO
RECONSTRUCTION_PROOF=PASS
```

A fresh clone/read-back or equivalent reconstruction check is preferred for consequential local worktree deletion.

Git must never be treated as the archive target for:

- database dumps/live DB files;
- Secrets;
- tokens/cookies/browser profiles;
- private keys;
- encrypted Secret recovery artifacts unless a separate approved encrypted-storage design explicitly uses Git;
- customer/order private data;
- provider logs containing private material.

## Workstation decommission rule

Project-local local runtime may be removed only after:

- production/current remote health is proven;
- no local runtime is still required for rollback;
- no unique business data exists only locally;
- exact project ownership is proven;
- project-specific containers/networks/volumes are allowlisted;
- shared images/volumes/networks are not deleted;
- no broad Docker prune is used.

Evidence should include before/after path counts and reclaimed bytes.

## Local-zero-files rule

"Leave no local project files" is an optimization target, not an invariant.

If a secure off-host recovery artifact intentionally lives on the Owner workstation, it remains unless:

1. another secure recovery destination exists;
2. restore/round-trip compatibility is proven;
3. the old recovery copy has a separately authorized deletion decision.

A secure recovery artifact must never be deleted for cosmetic cleanliness.

## Remote cleanup rule

Production VPS cleanup should remove only:

- project-owned;
- unreferenced;
- reconstructible/disposable;
- retention-expired

artifacts.

Keep by default:

- active app manifest/files;
- durable project data;
- runtime Secrets;
- validated recovery points;
- Shared Infra.

No broad system/image/volume/network prune.

## Deferred-event retention candidate

Retention should not depend indefinitely on an event that may be explicitly deferred.

Candidate rule:

If a retention rule says "retain until event X + N days" and event X is formally deferred without a scheduled date, Reviewer should open a retention reconciliation checkpoint.

An older recovery point may become eligible for deletion only when all are true:

- a newer validated recovery point covers the required restore scope;
- required legal/business retention is satisfied;
- Secret recovery remains valid;
- Owner authorizes irreversible deletion when required;
- no unresolved incident still depends on that artifact.

Do not silently keep obsolete artifacts forever and do not silently delete them.

## Candidate Evidence fields

```text
REMOTE_PROJECT_HYGIENE=PASS
CANONICAL_ARCHIVE_READBACK=PASS
LOCAL_UNPUSHED_COMMITS=0
LOCAL_UNIQUE_NONSECRET_FILES=0
LOCAL_SENSITIVE_ITEMS_ARCHIVED_TO_GIT=0
LOCAL_RUNTIME_DECOMMISSIONED=YES/NO
LOCAL_PROJECT_CONTAINERS_REMAINING=
LOCAL_PROJECT_VOLUMES_REMAINING=
LOCAL_PROJECT_FILES_REMAINING=
LOCAL_REMAINING_EXCEPTIONS_WITH_REASON=
SECURE_RECOVERY_STILL_VALID=PASS
SHARED_RESOURCES_TOUCHED=0
BROAD_PRUNE_USED=NO
DISK_BYTES_RECLAIMED=
PRODUCTION_REGRESSION=PASS
```

## Promotion rule

Do not activate this proposal from one project observation.

First validate the closeout pattern on at least one real project, capture any unsafe/ambiguous edge cases, then Reviewer may propose:

`Project Closeout and Workstation Hygiene Contract rev1`

as an operational addendum.

Until promotion, current active Governance remains unchanged.


## Candidate lesson from Mini Craft K9A preflight

Mini Craft K9A produced a safe fail-closed stop before deletion because a cleanup helper used an opaque runtime-field assertion that did not match, even though the exact deletion candidate had already been independently classified as an empty, unreferenced project-local temp directory.

Candidate improvement:

- cleanup helpers should assert only the minimum invariants that are safety-relevant to the exact mutation;
- unrelated serialized runtime fields should not become accidental deletion blockers;
- when a pre-delete assertion fails, Evidence should name the exact failed field/invariant rather than only reporting a generic helper failure;
- accepted candidate classification may be retained across a remediation Gate, but destructive execution still requires a fresh target-host recheck immediately before deletion;
- a remediation Gate should narrow scope to the already-classified exact target instead of repeating broad discovery when no project state was mutated.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.
