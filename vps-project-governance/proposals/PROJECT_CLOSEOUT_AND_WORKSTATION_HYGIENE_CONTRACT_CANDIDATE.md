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


## Candidate lesson from Mini Craft K9B shared-repository barrier

Mini Craft K9B showed that a whole-worktree Git cleanliness requirement can be too broad when the project lives inside a shared local repository or shared workspace.

Candidate improvement:

- project closeout archive barriers should be scoped to the project-owned subtree/files, not the cleanliness of unrelated shared repository state;
- an unset upstream on a shared repository is not by itself a blocker when current canonical remote truth can be read directly;
- do not mutate shared Git topology (set upstream, checkout/reset/clean) merely to prove one project's local subtree is safe to decommission;
- compare exact project-owned tracked/untracked files against the canonical remote source;
- stale local copies superseded by canonical GitHub may be classified for deletion without first making the entire shared repository clean;
- local Docker daemon unavailability should block Docker-resource deletion, but need not block independent filesystem archive classification;
- unresolved project-local artifacts still fail closed until classified.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.


## Candidate lesson from Mini Craft K9B-R1 sensitive local-only artifact

Mini Craft K9B-R1 proved that a sensitive local-only rollback artifact may be validly classified without being suitable for GitHub archival.

Candidate improvement:

- a sensitive local-only recovery artifact should not indefinitely block cleanup of unrelated ordinary project files once it is fully classified and no UNKNOWN remains;
- such an artifact should be moved out of Git worktrees into an explicitly protected local recovery enclave before ordinary workspace deletion;
- protected local recovery is an intentional closeout exception, not a failure to archive;
- ordinary local-file-zero targets should exclude validated protected recovery artifacts and shared Git cache/worktree exceptions;
- content should not be re-read, hashed, or emitted merely to prove a protected relocation when size/path/type metadata is sufficient;
- Docker-daemon unavailability may defer Docker-resource cleanup independently from filesystem closeout; manual deletion of Docker/WSL internals remains forbidden.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.


## Candidate lesson from authenticated browser attach snapshots

Mini Craft K9B-R2R2A showed that attaching automation to an already-open authenticated browser tab can expose unrelated page text in the initial accessibility snapshot before the Executor navigates to the intended target.

Candidate improvement:

- before an authenticated browser Gate begins, prefer a neutral/admin landing page rather than a log/debug page;
- treat initial accessibility snapshots as part of the execution boundary and avoid attaching on provider log pages when possible;
- if unrelated potentially sensitive log text appears, navigate away immediately, do not inspect further, do not reproduce values in Evidence, and record only a redacted boundary event;
- a non-target snapshot observation is not automatically a credential-compromise incident; rotation should require concrete evidence of credential/Secret exposure or misuse;
- do not reopen sensitive provider logs merely to determine whether the accidental snapshot contained sensitive values.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.


## Candidate lesson from known-baseline vs new-drift reconciliation

Mini Craft K9B showed that a closeout Gate can accidentally become blocked by a pre-existing, previously accepted product/runtime property when a later Evidence record omits the exact probe that produced an observation.

Candidate improvement:

- before opening remediation for an apparent regression, compare the observation against the last accepted baseline and the exact historical probe semantics;
- if a later record says a resource is "discoverable" or "returned" but omits whether the probe explicitly targeted hidden/private/test state, do not automatically treat that as new drift;
- distinguish `KNOWN_ACCEPTED_PROPERTY` from `NEW_REGRESSION_PROVEN`;
- an unrelated pre-existing product issue should not block an independent workstation/filesystem closeout unless the current Gate materially increases that risk;
- when the remediation premise is later disproven or unproven, explicitly supersede the blocker rather than continuing repeated write attempts;
- repeated failed UI writes with authoritative no-change read-back should trigger premise/channel review, not endless retries.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.


## Candidate lesson from control-plane console recovery checks

Mini Craft K9B-R3 showed that repeated SSH transport failure should not indefinitely block a read-only recovery-existence checkpoint when an authenticated provider control-plane browser console is available.

Candidate improvement:

- if strict SSH repeatedly fails before remote identity/output, do not keep retrying the same transport for a closeout-only read-back;
- an authenticated VPS provider browser terminal / console may serve as a bounded Owner-local target-host checkpoint when Governance allows it;
- console use must remain metadata-only for recovery verification unless a separately authorized mutation Gate exists;
- record the actual console user (for example root) and target hostname;
- fresh proof of project backup-root, DB recovery file, wp-content recovery file, deployment/manifest recovery file, and current durable data paths may be sufficient to prove local historical runtimes are not the sole remaining recovery source;
- this does not imply perfect disaster-recovery recency; it establishes that irreversible local cleanup does not destroy the only known recovery path.

Status remains CANDIDATE / NOT ACTIVE pending K9 completion.


## Candidate lesson from execution-policy blocked irreversible deletion

Mini Craft K9B-R3R2 showed that a project can satisfy all safety prerequisites for exact local deletion while the Executor runtime policy still blocks the destructive command before launch.

Candidate improvement:

- do not bypass or work around an execution-policy denial by switching shells, languages, schedulers or alternate automation paths;
- if the deletion target has already been exactly classified, recovery barriers are satisfied, and no partial deletion occurred, move the irreversible action to an explicit Owner-local checkpoint;
- the Owner may perform the exact allowlisted filesystem deletion manually through the operating-system UI;
- after the Owner action, the Executor should perform read-only absence verification and persist Evidence/Handoff;
- distinguish `EXECUTION_POLICY_BLOCKED` from `SAFETY_CLASSIFICATION_FAILED`; the former is an execution-boundary limitation, not new project-state uncertainty;
- partial sub-gates that completed successfully (for example exact Docker-volume deletion) should be formally accepted instead of rerun.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.


## Candidate lesson from packaged-app LocalAppData virtualization

Mini Craft K9B-R3R3 showed that `%LOCALAPPDATA%` is execution-context dependent for packaged Windows applications such as Codex.

Candidate improvement:

- never assume a protected artifact written by a packaged app will appear under the Owner's ordinary user-profile LocalAppData path;
- packaged-app execution may virtualize LocalAppData into a package LocalCache namespace;
- before declaring a protected artifact missing, search by exact filename under the relevant package LocalCache metadata-only;
- distinguish `PATH_CONTEXT_MISMATCH` from `ARTIFACT_MISSING` and `ARTIFACT_DELETED`;
- recovery evidence should record the concrete resolved path or execution-context namespace, not only `%LOCALAPPDATA%` shorthand;
- do not move/devirtualize sensitive recovery artifacts merely to make their path look conventional unless there is a separate recovery-management Gate.

Status remains CANDIDATE / NOT ACTIVE pending full K9 validation.
