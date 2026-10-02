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
| 2026-09-15 | `FALSE_PASS_MARKERS_AFTER_FAILURE` | PASS text is not Evidence; Owner steps must fail closed and be atomic |
| 2026-09-15 | `SHARED_PARENT_ACL_SCOPE_DRIFT` | Project scripts may protect their child path, not silently rewrite a shared parent |
| 2026-09-15 | `CONTROL_PLANE_READBACK_ATTRIBUTION` | Owner report / public behavior / inference are not direct control-plane read-back |
| 2026-09-15 | `REPEATED_PATCHING_BEFORE_DIAGNOSTIC_PROBE` | Repeated similar failure should trigger a bounded probe before another patch |
| 2026-09-29 | `PACKAGED_APP_APPDATA_PATH_VIRTUALIZATION` | A missing ordinary AppData path may be redirected packaged-app storage rather than data loss |

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
