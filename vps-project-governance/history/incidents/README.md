# Governance incidents

STATUS: NON_NORMATIVE_HISTORY

This directory stores concise historical incident records when Owner requests durable Governance-side history or when a concrete incident has recurring/audit value.

## Boundary

```text
VNEXT.md            -> what must be done next time
history/incidents/  -> what actually happened before
```

An incident record never creates or overrides policy. If an incident reveals a new cross-project gap, the generalized rule is added to the active `VNEXT.md` only in a separately Owner-authorized Governance modification round.

Reviewer does not read this directory by default. Consult it only for recurrence diagnosis, rationale, prior resolution details, or explicit Owner request.

## Incident index

| Date | Incident | Main lesson |
|---|---|---|
| 2026-09-15 / 09-18 | `DUJIAONEXT_APPDATA_TARGET_HOST_FALSE_POSITIVE` | Same path outside the real Owner host is not proof of host-local state; repeat occurrences stay in the same failure-class record |
| 2026-09-15 | `OWNER_WINDOWS_AUTOMATION_COMPATIBILITY_CHAIN` | Freeze the real shell/runtime; avoid reserved variables; validate serialization and preserve useful errors |
| 2026-09-15 | `SSH_TRANSPORT_PAYLOAD_QUOTING_FAILURE` | Stable transport and complex payload must be separated |
| 2026-09-15 / later G6A | `FALSE_PASS_MARKERS_AFTER_FAILURE` | PASS/completion labels are not Evidence; Owner scripts and UIs must be verified against real outputs/invariants |
| 2026-09-15 | `SHARED_PARENT_ACL_SCOPE_DRIFT` | Project scripts may protect their child path, not silently rewrite a shared parent |
| 2026-09-15 | `CONTROL_PLANE_READBACK_ATTRIBUTION` | Owner report / public behavior / inference are not direct control-plane read-back |
| 2026-09-15 | `REPEATED_PATCHING_BEFORE_DIAGNOSTIC_PROBE` | Repeated similar failure should trigger a bounded probe before another patch |
| 2026-09-29 / 10-02 | `PACKAGED_APP_APPDATA_PATH_VIRTUALIZATION` | A missing ordinary AppData path may be redirected packaged-app storage rather than data loss |
| 2026-09-21 | `PROVIDER_LOG_SECRET_OUTPUT` | Raw provider/plugin logs must be redacted before diagnostic output leaves the protected boundary |
| 2026-09-22 | `SOURCE_BASELINE_AND_GIT_ROOT_CONFUSION` | Prove canonical source/root and isolate dirty shared repositories before project edits |
| 2026-09-28 / 09-30 | `EVIDENCE_PERSISTENCE_GAP_AFTER_EXECUTION` | If execution happened but durable Evidence did not persist, freeze mutation and reconcile without replay |
| 2026-09-30 | `EVIDENCE_HELPER_FALSE_DRIFT` | Parser/helper/transcription failure is not target drift without target evidence |
| 2026-09-30 / 10-01 | `SINGLE_FILE_BIND_MOUNT_STALE_REFERENCE` | Host config + live reload can PASS while a stale single-file bind makes restart persistence unsafe |
| 2026-10-01 | `UNIFIED_PAY_RECOVERY_ASSET_DRIFT` | Unexpected recovery loss after decommission freezes destructive cleanup and triggers read-only forensics |
| 2026-10-02 | `WINDOWS_SECURITY_VALIDATOR_FALSE_NEGATIVE` | Validate security semantics, not incidental ACL/token representation |

## Organization rule

Prefer one incident record per verified failure class. If the same root failure recurs, append a recurrence to the existing record instead of creating duplicate files. Create a new incident when the verified root cause or standard prevention path is materially different.

Source pointers may live in the originating project or another archive; each Governance-side incident must still be self-contained enough to understand the symptom, verified cause, resolution, and current rule without opening those sources.

## Minimal incident record

Keep only:
- date and project;
- observed symptom;
- verified root cause;
- material impact;
- evidence/source pointers;
- actual resolution;
- current canonical rule/path that prevents recurrence.

Do not store Secret values.
