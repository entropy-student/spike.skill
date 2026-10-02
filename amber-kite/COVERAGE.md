# Amber Kite — Coverage Check

> AUDIT_ONLY=YES
> OPERATIONAL_RULE_SOURCE=VNEXT.md
> This file is not loaded as Governance policy.

## Result

```text
OLD_MATRIX_RULE_ROWS=128
MATRIX_MAPPED_ROWS=128
MATRIX_UNMAPPED_ROWS=0

ACTIVE_SOURCE_SEMANTIC_AUDIT=PASS_CANDIDATE
KNOWN_UNRESTORED_SAFETY_GAPS=0
SHADOW_OPERATIONAL_RULE_FILES=1
PRODUCTION_GOVERNANCE_MODIFIED=NO
```

Important correction: the earlier `128/128` result proved only that every `RULE_MATRIX` row had a destination. It did **not** prove full semantic coverage because the matrix did not enumerate every operational sentence in the old source files.

A second source-document-level audit was therefore performed against the current Core/SKILL, active Source/Storage/SSH-Secret/Target-Host/Provider/Closeout contracts, README/Usage material and templates. Missing or weakened safety semantics found in that audit were restored into `VNEXT.md` draft2.

Current conclusion: **PASS_CANDIDATE for functional/safety coverage, not exact textual equivalence.** The shadow intentionally changes structure and several semantics already approved by the Owner.

### Restored during source-level audit

- full shared-host connection/trust state needed to recover SSH without Owner memory;
- strict SSH host-key/non-interactive trust behavior;
- Secret leakage prohibition across command args, env, stdout/stderr, shell history, transcripts, temp files and bundles;
- atomic/fail-on-existing Secret provisioning plus runtime-access and unrelated-service denial proof;
- two-phase Secret recovery artifact promotion, parser/serialization and ACL-scope safeguards;
- Target-Host fail-closed script result, partial-object collision handling and required host-local proof;
- minimum P0 Discovery inventory;
- storage-state fields that had been over-compressed;
- encrypted DB + matching-key recovery pairing and validation;
- build-context Secret/live-data exclusion, reproducible build/candidate identity;
- SAFE_MODE/browser-session/REAUTH lifecycle details;
- Canary expiry/safe-end/restart/duplicate controls;
- Provider permission/signing-rotation safeguards;
- Provider recovery timing shapes, no direct SQL recovery, idempotent transaction/replay/requalification/diagnostic-parity rules;
- Closeout deletion/archive barriers, protected-recovery and recovery-channel checks;
- Governance pin/override version/scope/reason/expiry metadata.

### Source-audit residual candidates

Two low lexical-overlap items remain and are **not gaps**:

1. old Provider sentence "do not collapse all late payments into one case" is implemented more explicitly by the two timing shapes in `VNEXT.md`;
2. `SSH config alias` in the old Shared VPS template is an optional recording convenience, not an operational safety requirement.

## Intentional Owner-approved differences from old Governance

These are not omissions:

- one mixed Source-of-Truth chain -> separate Rule Authority and Project Reality;
- many operational rule files -> one compact `VNEXT.md` rule surface;
- persistent `EXECUTOR_HANDOFF` -> Execution Evidence + short Executor completion packet;
- mandatory standalone `PROJECT_STORAGE_MANIFEST.md` -> storage information remains mandatory, file form is optional;
- Shared VPS connection/trust information remains a factual Shared VPS state/Handoff, but it is not a second policy source;
- templates/examples/history cannot create policy;
- historical incident narratives and superseded proposal text are excluded from normal loading;
- status vocabulary and completion packets are standardized;
- Gate maximum endpoint, persistent critical constraints, evidence-inspection PASS rule, one-round Governance edit authorization and persist-before-complete are new Owner-approved safeguards.

## Accepted structural/semantic replacements

| Old item | vNext treatment |
|---|---|
| A02 | One mixed source-of-truth chain replaced by separate Rule Authority and Project Reality chains. |
| A08 | Legacy PROJECT_HANDOFF alias is not carried forward; REVIEWER_HANDOFF is the current-state artifact. |
| H08 | Standalone storage-manifest requirement is folded into compact project-state storage/recovery metadata. |
| M02 | Persistent EXECUTOR_HANDOFF removed; execution facts move to Evidence and a short completion packet. |
| M04/M05 | Shared-host/storage state remains, but policy-bearing standalone templates are not required. |
| N03 | Old v0.1.6 core + independently evolving addenda structure is replaced by one shadow vNext rule surface. |

## Row mapping

| ID | Old concept | vNext home | Disposition |
|---|---|---|---|
| A01 | Governance default canonical source is GitHub `entropy-student/spike.skill/vps-project-governance` | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A02 | Governance precedence: Owner latest explicit instruction → active bounded Reviewer override → GitHub latest → local/history | §1 / §3 / §10 | REPLACED_ACCEPTED |
| A03 | Reviewer override/pin must be bounded and temporary | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A04 | Local Governance copy is cache, not competing authority | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A05 | Project factual truth is distinct from Governance rule truth | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A06 | Evidence/Handoff lag must be reconciled before consequential Gate | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A07 | Historical Evidence must not be deleted to manufacture consistency | §1 / §3 / §10 | PRESERVED_OR_MERGED |
| A08 | `PROJECT_HANDOFF.md` is legacy alias; canonical current project truth is `REVIEWER_HANDOFF.md` | §1 / §3 / §10 | REPLACED_ACCEPTED |
| B01 | Owner handles only consequential Owner-only actions | §2 | PRESERVED_OR_MERGED |
| B02 | Reviewer is sole technical decision / formal PASS authority | §2 | PRESERVED_OR_MERGED |
| B03 | Executor executes bounded scope only and cannot expand architecture/scope | §2 | PRESERVED_OR_MERGED |
| B04 | Executor cannot enter next Gate without Reviewer acceptance/authorization | §2 | PRESERVED_OR_MERGED |
| B05 | `PASS_CANDIDATE != PASS` | §2 | PRESERVED_OR_MERGED |
| B06 | Ordinary technical choices should not be pushed back to Owner | §2 | PRESERVED_OR_MERGED |
| B07 | Material production enablement is Owner-only | §2 | PRESERVED_OR_MERGED |
| B08 | Irreversible deletion of real data is Owner-only | §2 | PRESERVED_OR_MERGED |
| B09 | Payment/purchase/account identity actions remain Owner/account-side | §2 | PRESERVED_OR_MERGED |
| C01 | Unknown/unreliable project begins with read-only P0 Discovery | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C02 | UNKNOWN must be recorded rather than guessed | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C03 | Standard loop: discover/review/define Gate/preflight/execute/evidence/review/PASS-RETURN | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C04 | Gate should have single/bounded goal, evidence boundary and rollback domain | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C05 | Adjacent Gates may be compressed only when evidence/rollback/risk boundaries remain safe | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C06 | Accepted Gate is not repeated unless material drift is proven | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C07 | Production modification uses Change Gate, not full onboarding replay | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C08 | Conditional preauthorization is allowed only when explicit/bounded and invalidates on drift/failure | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C09 | Failed normal execution should RETURN/rollback rather than improvise a new architecture | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| C10 | Status language should be objective: IN_PROGRESS/BLOCKED/PASS_CANDIDATE/PASS/RETURN | §0 / §3 / §5 / §6 | PRESERVED_OR_MERGED |
| D01 | Evidence before PASS | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D02 | Preflight before write | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D03 | Critical writes require defined rollback/recovery boundary | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D04 | Evidence should record objective read-back, not narrative claims | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D05 | Positive and negative checks are both required where security boundary matters | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D06 | Cleanup/regression is part of Gate completion | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D07 | Release/image identity must be verified after deploy/recreate | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D08 | Native/non-zero execution failures must fail closed | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D09 | Ambiguous consequential execution requires read-only reconciliation before retry | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| D10 | Fresh stronger read-back may supersede stale diagnosis/snapshot | §6 / §7 / §8 | PRESERVED_OR_MERGED |
| E01 | Business project may not casually mutate Shared Infra | §4 / §11A / §11B | PRESERVED_OR_MERGED |
| E02 | Shared Infra examples include SSH/UFW/Docker daemon/80-443/Caddy/cloudflared/shared network | §4 / §11A / §11B | PRESERVED_OR_MERGED |
| E03 | Shared Infra mutation requires separate Infra Review | §4 / §11A / §11B | PRESERVED_OR_MERGED |
| E04 | Reading registered SSH metadata / bounded read-only probe is not itself Shared Infra write | §4 / §11A / §11B | PRESERVED_OR_MERGED |
| E05 | New key/account/authorized_keys/sshd/sudo/UFW changes are Shared Infra | §4 / §11A / §11B | PRESERVED_OR_MERGED |
| F01 | Secret values must not enter chat/repo/ordinary Handoff/Evidence/logs | §11B | PRESERVED_OR_MERGED |
| F02 | Exposed real credential is compromised input and requires rotation checkpoint | §11B | PRESERVED_OR_MERGED |
| F03 | Secret authority remains Owner-controlled by default | §11B | PRESERVED_OR_MERGED |
| F04 | Exact Secret provisioning may be delegated only by explicit Owner authorization | §11B | PRESERVED_OR_MERGED |
| F05 | Delegated generation must be exact allowlist, CSPRNG, fail-on-existing, zero-value-output | §11B | PRESERVED_OR_MERGED |
| F06 | Runtime Secret access must be least-privilege and proven | §11B | PRESERVED_OR_MERGED |
| F07 | Secret recovery must exist in a different failure domain | §11B | PRESERVED_OR_MERGED |
| F08 | DPAPI CurrentUser is only a profile-bound first recovery copy, not sole DR | §11B | PRESERVED_OR_MERGED |
| F09 | Recovery artifact must be host-locally proven, not just documented | §11B | PRESERVED_OR_MERGED |
| F10 | Pending recovery artifact should not become canonical before remote credential action verifies | §11B | PRESERVED_OR_MERGED |
| F11 | Restore over live Secrets is not implicit; restore is separate explicit Gate | §11B | PRESERVED_OR_MERGED |
| G01 | Before proving what changed, prove which host/runtime was changed | §11B | PRESERVED_OR_MERGED |
| G02 | Same absolute path in sandbox/container/WSL does not prove real-host state | §11B | PRESERVED_OR_MERGED |
| G03 | Host-local write requires target-host identity + post-write host-local read-back | §11B | PRESERVED_OR_MERGED |
| G04 | If real-host execution cannot be proven, return `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE` | §11B | PRESERVED_OR_MERGED |
| G05 | Owner-local checkpoint should be one-shot/minimal and emit bounded non-secret evidence | §11B | PRESERVED_OR_MERGED |
| G06 | Multi-failure-domain Owner script should expose phase markers | §11B | PRESERVED_OR_MERGED |
| G07 | Windows ACL tightening should avoid unnecessary ownership changes | §11B | PRESERVED_OR_MERGED |
| G08 | Partial execution must be classified before retry/overwrite | §11B | PRESERVED_OR_MERGED |
| H01 | Canonical Shared VPS layout: `/srv/infra`, `/srv/apps`, `/srv/data`, `/srv/backups` | §11A | PRESERVED_OR_MERGED |
| H02 | One project gets isolated apps/data/backups namespace + Compose project | §11A | PRESERVED_OR_MERGED |
| H03 | Durable business data must not live only in reconstructible app layer | §11A | PRESERVED_OR_MERGED |
| H04 | Bind mounts preferred for explicit durable user-controlled data | §11A | PRESERVED_OR_MERGED |
| H05 | Named volumes allowed only when namespaced/documented/backupable | §11A | PRESERVED_OR_MERGED |
| H06 | Anonymous volume must not hold unique durable data | §11A | PRESERVED_OR_MERGED |
| H07 | Shared data service must be explicitly promoted to Shared Service | §11A | PRESERVED_OR_MERGED |
| H08 | New Shared VPS project requires `PROJECT_STORAGE_MANIFEST.md` before deployment | §11A | MERGED_ACCEPTED |
| H09 | Existing production data is not migrated merely for neatness | §11A | PRESERVED_OR_MERGED |
| H10 | Historical storage migration requires separate Change Gate with backup/read-back/rollback | §11A | PRESERVED_OR_MERGED |
| H11 | Database backup must use consistency-safe mechanism | §11A | PRESERVED_OR_MERGED |
| H12 | Writable rehearsal must use a copy, not real migration DB | §11A | PRESERVED_OR_MERGED |
| I01 | Production deploy/recreate must explicitly select canonical manifest | §11C | PRESERVED_OR_MERGED |
| I02 | Render/validate resolved config before production write | §11C | PRESERVED_OR_MERGED |
| I03 | Sealed image deploy should avoid accidental rebuild/pull | §11C | PRESERVED_OR_MERGED |
| I04 | Private runtime should be proven before public route | §11C | PRESERVED_OR_MERGED |
| I05 | Public route requires immediate anonymous negative check | §11C | PRESERVED_OR_MERGED |
| I06 | HTTPS WebSocket requires WSS/upgrade verification | §11C | PRESERVED_OR_MERGED |
| I07 | Functional PASS does not imply resource PASS | §11C | PRESERVED_OR_MERGED |
| I08 | Broad Docker prune is forbidden by default | §11C | PRESERVED_OR_MERGED |
| I09 | Cleanup must be allowlisted and have before/after/reference checks | §11C | PRESERVED_OR_MERGED |
| I10 | 60/70/80% disk thresholds are reference guidance | §11C | PRESERVED_OR_MERGED |
| J01 | Automation must have fail-closed SAFE_MODE/equivalent before first real action | §11D | PRESERVED_OR_MERGED |
| J02 | SAFE_MODE must survive restart/recreate and wire to real business actions | §11D | PRESERVED_OR_MERGED |
| J03 | First real business action must be bounded Canary | §11D | PRESERVED_OR_MERGED |
| J04 | Canary limits include single target/count/expiry/central guard/non-target delta | §11D | PRESERVED_OR_MERGED |
| J05 | REAUTH success does not auto-resume business actions | §11D | PRESERVED_OR_MERGED |
| J06 | Identity must match before credential update/resume | §11D | PRESERVED_OR_MERGED |
| J07 | Notification failure must not resume business | §11D | PRESERVED_OR_MERGED |
| K01 | Provider/account/app/merchant/product-permission identities must be separated | §11E | PRESERVED_OR_MERGED |
| K02 | Provider paid ≠ local paid ≠ fulfillment complete | §11E | PRESERVED_OR_MERGED |
| K03 | One real Canary allows one bounded buyer action; no second payment after Provider success | §11E | PRESERVED_OR_MERGED |
| K04 | Provider reconciliation query must be proven read-only | §11E | PRESERVED_OR_MERGED |
| K05 | Callback success acknowledgement requires auth/correlation/amount/status/idempotent durable handling | §11E | PRESERVED_OR_MERGED |
| K06 | Provider success + local timeout/cancel is recovery, not payment retry | §11E | PRESERVED_OR_MERGED |
| K07 | Recovery selector requires exact cardinality | §11E | PRESERVED_OR_MERGED |
| K08 | Recovery requires fresh pre-mutation recheck | §11E | PRESERVED_OR_MERGED |
| K09 | Recovery restores full domain invariant set, not one status | §11E | PRESERVED_OR_MERGED |
| K10 | Durable DB commit and async fulfillment are separate proofs | §11E | PRESERVED_OR_MERGED |
| K11 | Ambiguous/partial/committed recovery attempt must not be blindly replayed | §11E | PRESERVED_OR_MERGED |
| K12 | Incident-only recovery tooling must not become normal runtime policy | §11E | PRESERVED_OR_MERGED |
| K13 | Canary fixture must match real fulfillment semantics | §11E | PRESERVED_OR_MERGED |
| K14 | Refund/new real payment remains separately authorized consequential action | §11E | PRESERVED_OR_MERGED |
| L01 | Closeout phases: remote hygiene → reconstructible archive barrier → local decommission → final reconciliation | §11F | PRESERVED_OR_MERGED |
| L02 | Every deletion candidate must be classified; UNKNOWN fails closed | §11F | PRESERVED_OR_MERGED |
| L03 | Git archive barrier excludes secrets/DB/private recovery/customer data | §11F | PRESERVED_OR_MERGED |
| L04 | Shared repo closeout is scoped to project-owned subtree, not whole repo cleanliness | §11F | PRESERVED_OR_MERGED |
| L05 | Protected recovery artifact can remain as explicit exception | §11F | PRESERVED_OR_MERGED |
| L06 | Execution-policy blocked deletion must not be bypassed via alternate shell/tool | §11F | PRESERVED_OR_MERGED |
| L07 | Known accepted property must be distinguished from new regression/unproven drift | §11F | PRESERVED_OR_MERGED |
| L08 | Packaged-app path virtualization must be considered before declaring local recovery missing | §11F | PRESERVED_OR_MERGED |
| L09 | Deferred-event retention requires explicit reconciliation rather than infinite keep/delete | §11F | PRESERVED_OR_MERGED |
| L10 | Final closeout keeps deferred business actions as `DEFERRED_NOT_PASS` | §11F | PRESERVED_OR_MERGED |
| L11 | Audit references must not be globally rewritten across historical Gates | §11F | PRESERVED_OR_MERGED |
| M01 | `REVIEWER_HANDOFF.md` is Reviewer-maintained current project truth | §3 | PRESERVED_OR_MERGED |
| M02 | `EXECUTOR_HANDOFF.md` contains execution facts only | §7 / §9 | REPLACED_ACCEPTED |
| M03 | `EXECUTION_EVIDENCE.md` stores detailed append-only evidence | §7 | PRESERVED_OR_MERGED |
| M04 | `SHARED_VPS_HANDOFF.md` stores host trust/shared-infra facts but no credentials | §3 / §11A / §11B | MERGED_ACCEPTED |
| M05 | Storage Manifest stores location/recovery/access metadata but no Secret values | §3 / §11A / §11B | MERGED_ACCEPTED |
| M06 | Reviewer minimum Owner-facing report includes progress/current Gate/result/next/Owner need | §9 | PRESERVED_OR_MERGED |
| M07 | Templates should be fields/structure rather than a unique policy source | §10 | PRESERVED_OR_MERGED |
| M08 | Usage Scenarios should be invocation examples, not unique normative rules | §10 | PRESERVED_OR_MERGED |
| N01 | Governance changes should be cross-project reusable and validated, not incident-by-incident | §10 | PRESERVED_OR_MERGED |
| N02 | Rule maturity labels: VALIDATED / PROVISIONAL / CANDIDATE | §10 | PRESERVED_OR_MERGED |
| N03 | Current core remains v0.1.6 while addenda evolve independently | §10 | REPLACED_ACCEPTED |
| N04 | Historical incident lessons should not silently become current generic policy | §10 | PRESERVED_OR_MERGED |
| N05 | Superseded proposal remains for historical validation only | §10 | PRESERVED_OR_MERGED |

## Verification notes

- Historical incident examples are intentionally excluded from the operational loading path.
- Templates/examples cannot supply unique policy.
- GitHub canonical remains the only authority if this shadow is ever promoted.
- Production Governance under `vps-project-governance/` was not modified by this coverage exercise.

## Draft3 re-audit — active-source and decision alignment

A fresh repair/audit round was performed after draft2.

```text
VNEXT_VERSION=v0.2.0-draft3
OWNER_DECISION_ALIGNMENT=24/24_PASS
MATRIX_COVERAGE=128/128
LOW_LEXICAL_MATCH_CANDIDATES=2
LOW_MATCH_CLASSIFIED_AS_TRUE_GAPS=0
KNOWN_UNRESTORED_SAFETY_GAPS=0
LOADING_MODEL=UNIVERSAL_SURFACE_PLUS_FULL_TRIGGER_SCAN_PLUS_TRIGGERED_SPECIALIST_SECTIONS
```

Additional safeguards restored in draft3:
- backup scope/timestamp/integrity/Secret-inclusion metadata and migration restore proof;
- SSH/SCP Windows transport details that had operational safety value;
- Secret format/entropy, restrictive-mode baseline, recovery round-trip and fresh-location restore;
- Provider full Canary/payment evidence chain and protected raw-identifier boundary;
- execution-policy deletion precondition that the destructive command did not start/no partial deletion occurred;
- project goal/system map and Reviewer-only canonical Handoff ownership;
- single-file **conditional** specialist loading, correcting draft2's accidental "read every specialist every round" behavior;
- conditional-preauthorization invalidation after FAIL/RETURN/ambiguity/drift;
- Provider identity/permission distinctions, original fulfillment semantics and incident-tool steady-state labeling;
- health-layer separation and dependent-check refresh after architecture/storage/auth changes;
- stale local Governance copy refresh/removal rule.

The two residual low lexical-overlap items remain non-gaps:
1. generic "late payment" wording is replaced by explicit pre-expiry vs post-expiry timing states;
2. SSH config alias remains optional connection metadata, not Governance behavior.

