# Amber Kite — Rule Matrix v0

> Status: SHADOW ANALYSIS / NON-OPERATIONAL
> Purpose: classify existing Governance rules without deleting, rewriting or resolving them.
> Source reviewed: current `main:vps-project-governance/` tree.
> Decision status: every row is inventory only unless explicitly marked otherwise.

## Classification legend

Future bucket candidates:

- **CORE** — universal rule every governed project needs.
- **PROJECT_STATE** — factual state of one project/host, not a rule.
- **GATE** — current-round authorization / preflight / execution / acceptance.
- **STORAGE** — Shared VPS data/storage specialist rule.
- **SSH_SECRET** — SSH trust / Secret provisioning / recovery specialist rule.
- **TARGET_HOST** — real-host evidence specialist rule.
- **PROVIDER** — payment/provider/reconciliation specialist rule.
- **CLOSEOUT** — decommission/archive specialist rule.
- **META** — Governance source/version/release mechanics.
- **EXAMPLE_HISTORY** — examples, incidents, rationale, historical lessons; should not be a unique normative source.
- **TEMPLATE** — structure/fields only; should not contain unique policy.

Risk flags:

- **DUPLICATE** — same rule appears in several normative-looking places.
- **STALE** — text appears behind the current accepted addenda/status.
- **TENSION** — two valid-looking rules can lead to different interpretations.
- **CROSS_DOMAIN** — rule is repeated inside more than one specialist domain.
- **NONE** — no immediate structural problem found.
- **REVIEW** — needs Owner/Reviewer semantic decision later.

## A. Governance authority and continuity

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| A01 | Governance default canonical source is GitHub `entropy-student/spike.skill/vps-project-governance` | README, SKILL, GOVERNANCE_HANDOFF, Source Policy, Reviewer template | META | DUPLICATE | Pending |
| A02 | Governance precedence: Owner latest explicit instruction → active bounded Reviewer override → GitHub latest → local/history | README, SKILL, Source Policy, Reviewer template, GOVERNANCE_HANDOFF | META / CORE trigger | DUPLICATE | Pending |
| A03 | Reviewer override/pin must be bounded and temporary | SKILL, Source Policy | META | DUPLICATE | Pending |
| A04 | Local Governance copy is cache, not competing authority | README, SKILL, Source Policy, GOVERNANCE_HANDOFF | META | DUPLICATE | Pending |
| A05 | Project factual truth is distinct from Governance rule truth | README, SKILL, Source Policy, Reviewer template | CORE | DUPLICATE | Pending |
| A06 | Evidence/Handoff lag must be reconciled before consequential Gate | README, SKILL, Source Policy, Reviewer template | CORE / PROJECT_STATE | DUPLICATE | Pending |
| A07 | Historical Evidence must not be deleted to manufacture consistency | Source Policy, Provider Contract, Closeout Contract | CORE / audit | CROSS_DOMAIN | Pending |
| A08 | `PROJECT_HANDOFF.md` is legacy alias; canonical current project truth is `REVIEWER_HANDOFF.md` | README, SKILL, Core Reference | PROJECT_STATE / META | DUPLICATE | Pending |

## B. Roles and authority

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| B01 | Owner handles only consequential Owner-only actions | README, SKILL, Core Reference, Usage Scenarios, Reviewer template | CORE | DUPLICATE | Pending |
| B02 | Reviewer is sole technical decision / formal PASS authority | README, SKILL, Core Reference | CORE | DUPLICATE | Pending |
| B03 | Executor executes bounded scope only and cannot expand architecture/scope | SKILL, Core Reference, Usage Scenarios, Executor template | CORE / GATE | DUPLICATE | Pending |
| B04 | Executor cannot enter next Gate without Reviewer acceptance/authorization | SKILL, Executor template, Usage Scenarios | CORE | DUPLICATE | Pending |
| B05 | `PASS_CANDIDATE != PASS` | README, SKILL, Core Reference, templates, Usage Scenarios | CORE | DUPLICATE | Pending |
| B06 | Ordinary technical choices should not be pushed back to Owner | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| B07 | Material production enablement is Owner-only | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| B08 | Irreversible deletion of real data is Owner-only | SKILL, Storage, Closeout | CORE + specialist application | DUPLICATE | Pending |
| B09 | Payment/purchase/account identity actions remain Owner/account-side | SKILL, Provider Contract, Usage Scenarios | CORE + PROVIDER | DUPLICATE | Pending |

## C. Main project loop and Gate mechanics

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| C01 | Unknown/unreliable project begins with read-only P0 Discovery | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| C02 | UNKNOWN must be recorded rather than guessed | SKILL, Core Reference | CORE | DUPLICATE | Pending |
| C03 | Standard loop: discover/review/define Gate/preflight/execute/evidence/review/PASS-RETURN | README, SKILL, Core Reference | CORE | DUPLICATE | Pending |
| C04 | Gate should have single/bounded goal, evidence boundary and rollback domain | SKILL, Core Reference | CORE | DUPLICATE | Pending |
| C05 | Adjacent Gates may be compressed only when evidence/rollback/risk boundaries remain safe | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| C06 | Accepted Gate is not repeated unless material drift is proven | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| C07 | Production modification uses Change Gate, not full onboarding replay | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| C08 | Conditional preauthorization is allowed only when explicit/bounded and invalidates on drift/failure | SKILL, Core Reference, Usage Scenarios | CORE / GATE | DUPLICATE / REVIEW | Pending |
| C09 | Failed normal execution should RETURN/rollback rather than improvise a new architecture | SKILL, Core Reference | CORE / GATE | DUPLICATE | Pending |
| C10 | Status language should be objective: IN_PROGRESS/BLOCKED/PASS_CANDIDATE/PASS/RETURN | GOVERNANCE_HANDOFF, Provider Contract | CORE / reporting | DUPLICATE | Pending |

## D. Evidence, verification and rollback

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| D01 | Evidence before PASS | README, SKILL, Core Reference | CORE | DUPLICATE | Pending |
| D02 | Preflight before write | SKILL, Core Reference, Usage Scenarios | CORE / GATE | DUPLICATE | Pending |
| D03 | Critical writes require defined rollback/recovery boundary | SKILL, templates, Usage Scenarios | CORE / GATE | DUPLICATE | Pending |
| D04 | Evidence should record objective read-back, not narrative claims | SKILL, Core Reference, Target Host | CORE | DUPLICATE | Pending |
| D05 | Positive and negative checks are both required where security boundary matters | SKILL, Evidence template | CORE | DUPLICATE | Pending |
| D06 | Cleanup/regression is part of Gate completion | SKILL, Core Reference, Evidence template | CORE / GATE | DUPLICATE | Pending |
| D07 | Release/image identity must be verified after deploy/recreate | README, SKILL, Core Reference, templates | CORE / deployment | DUPLICATE | Pending |
| D08 | Native/non-zero execution failures must fail closed | Target Host, SSH Contract | TARGET_HOST / SSH_SECRET | CROSS_DOMAIN | Pending |
| D09 | Ambiguous consequential execution requires read-only reconciliation before retry | SSH Contract, Provider Contract, Target Host | CORE trigger + specialists | CROSS_DOMAIN | Pending |
| D10 | Fresh stronger read-back may supersede stale diagnosis/snapshot | GOVERNANCE_HANDOFF, Provider, Target Host | CORE factual-state principle | TENSION | Pending |

## E. Shared Infrastructure boundary

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| E01 | Business project may not casually mutate Shared Infra | README, SKILL, Core Reference, Usage Scenarios | CORE | DUPLICATE | Pending |
| E02 | Shared Infra examples include SSH/UFW/Docker daemon/80-443/Caddy/cloudflared/shared network | README, SKILL, Core Reference, Usage Scenarios | CORE / example | DUPLICATE | Pending |
| E03 | Shared Infra mutation requires separate Infra Review | SKILL, Usage Scenarios | CORE | DUPLICATE | Pending |
| E04 | Reading registered SSH metadata / bounded read-only probe is not itself Shared Infra write | SKILL, SSH Contract | SSH_SECRET | TENSION | Pending |
| E05 | New key/account/authorized_keys/sshd/sudo/UFW changes are Shared Infra | SKILL, SSH Contract | SSH_SECRET / CORE trigger | DUPLICATE | Pending |

## F. Secret handling and recovery

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| F01 | Secret values must not enter chat/repo/ordinary Handoff/Evidence/logs | SKILL, Core Reference, Storage, SSH Contract, templates, GOVERNANCE_HANDOFF | CORE | DUPLICATE | Pending |
| F02 | Exposed real credential is compromised input and requires rotation checkpoint | SKILL | CORE / SSH_SECRET | NONE | Pending |
| F03 | Secret authority remains Owner-controlled by default | SKILL, SSH Contract, GOVERNANCE_HANDOFF | CORE | DUPLICATE | Pending |
| F04 | Exact Secret provisioning may be delegated only by explicit Owner authorization | README, SKILL, SSH Contract, Usage Scenarios, GOVERNANCE_HANDOFF | SSH_SECRET + CORE trigger | DUPLICATE / apparent exception | Pending |
| F05 | Delegated generation must be exact allowlist, CSPRNG, fail-on-existing, zero-value-output | README, SKILL, SSH Contract | SSH_SECRET | DUPLICATE | Pending |
| F06 | Runtime Secret access must be least-privilege and proven | Storage, SSH Contract, Storage template | SSH_SECRET / STORAGE | CROSS_DOMAIN | Pending |
| F07 | Secret recovery must exist in a different failure domain | README, SKILL, Storage, SSH Contract | SSH_SECRET | DUPLICATE | Pending |
| F08 | DPAPI CurrentUser is only a profile-bound first recovery copy, not sole DR | README, GOVERNANCE_HANDOFF, SSH Contract | SSH_SECRET | DUPLICATE / terminology drift | Pending |
| F09 | Recovery artifact must be host-locally proven, not just documented | SSH Contract, Target Host | SSH_SECRET / TARGET_HOST | CROSS_DOMAIN | Pending |
| F10 | Pending recovery artifact should not become canonical before remote credential action verifies | SSH Contract, Target Host | SSH_SECRET | DUPLICATE | Pending |
| F11 | Restore over live Secrets is not implicit; restore is separate explicit Gate | SSH Contract | SSH_SECRET | NONE | Pending |

## G. Target-host reality

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| G01 | Before proving what changed, prove which host/runtime was changed | README, SKILL, Target Host, GOVERNANCE_HANDOFF | TARGET_HOST + CORE trigger | DUPLICATE | Pending |
| G02 | Same absolute path in sandbox/container/WSL does not prove real-host state | README, SKILL, Target Host, Usage Scenarios | TARGET_HOST | DUPLICATE | Pending |
| G03 | Host-local write requires target-host identity + post-write host-local read-back | README, SKILL, Target Host | TARGET_HOST | DUPLICATE | Pending |
| G04 | If real-host execution cannot be proven, return `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE` | SKILL, Target Host, Usage Scenarios | TARGET_HOST | DUPLICATE | Pending |
| G05 | Owner-local checkpoint should be one-shot/minimal and emit bounded non-secret evidence | Target Host, GOVERNANCE_HANDOFF | TARGET_HOST | DUPLICATE | Pending |
| G06 | Multi-failure-domain Owner script should expose phase markers | Target Host, SSH Contract | TARGET_HOST / SSH_SECRET | CROSS_DOMAIN | Pending |
| G07 | Windows ACL tightening should avoid unnecessary ownership changes | README, SKILL, Target Host, SSH Contract | TARGET_HOST / SSH_SECRET | CROSS_DOMAIN | Pending |
| G08 | Partial execution must be classified before retry/overwrite | Target Host, SSH Contract, Provider Contract | TARGET_HOST + CORE retry principle | CROSS_DOMAIN | Pending |

## H. Storage and data layout

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| H01 | Canonical Shared VPS layout: `/srv/infra`, `/srv/apps`, `/srv/data`, `/srv/backups` | README, SKILL, Storage Contract, Storage template | STORAGE | DUPLICATE | Pending |
| H02 | One project gets isolated apps/data/backups namespace + Compose project | SKILL, Storage Contract | STORAGE | DUPLICATE | Pending |
| H03 | Durable business data must not live only in reconstructible app layer | Storage Contract | STORAGE | NONE | Pending |
| H04 | Bind mounts preferred for explicit durable user-controlled data | SKILL, Storage Contract | STORAGE | DUPLICATE | Pending |
| H05 | Named volumes allowed only when namespaced/documented/backupable | README, SKILL, Storage Contract | STORAGE | DUPLICATE | Pending |
| H06 | Anonymous volume must not hold unique durable data | README, SKILL, Storage Contract | STORAGE | DUPLICATE | Pending |
| H07 | Shared data service must be explicitly promoted to Shared Service | Storage Contract | STORAGE | NONE | Pending |
| H08 | New Shared VPS project requires `PROJECT_STORAGE_MANIFEST.md` before deployment | README, SKILL, Storage Contract, template | STORAGE | DUPLICATE | Pending |
| H09 | Existing production data is not migrated merely for neatness | README, SKILL, Storage Contract | STORAGE | DUPLICATE | Pending |
| H10 | Historical storage migration requires separate Change Gate with backup/read-back/rollback | README, Storage Contract | STORAGE | DUPLICATE | Pending |
| H11 | Database backup must use consistency-safe mechanism | SKILL, Storage Contract | CORE data principle / STORAGE | DUPLICATE | Pending |
| H12 | Writable rehearsal must use a copy, not real migration DB | SKILL, Core Reference | CORE data principle | DUPLICATE | Pending |

## I. Deployment, network and resource safety

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| I01 | Production deploy/recreate must explicitly select canonical manifest | README, SKILL, Core Reference | CORE deployment | DUPLICATE | Pending |
| I02 | Render/validate resolved config before production write | README, SKILL, Core Reference | CORE deployment | DUPLICATE | Pending |
| I03 | Sealed image deploy should avoid accidental rebuild/pull | SKILL, Core Reference, Executor template | CORE deployment | DUPLICATE | Pending |
| I04 | Private runtime should be proven before public route | SKILL, Core Reference | CORE network principle | DUPLICATE | Pending |
| I05 | Public route requires immediate anonymous negative check | SKILL, Core Reference | CORE network principle | DUPLICATE | Pending |
| I06 | HTTPS WebSocket requires WSS/upgrade verification | SKILL, Core Reference | specialist app/network? | DUPLICATE / REVIEW | Pending |
| I07 | Functional PASS does not imply resource PASS | README, SKILL | CORE | DUPLICATE | Pending |
| I08 | Broad Docker prune is forbidden by default | README, SKILL, Core Reference, Storage, Closeout | CORE resource safety | DUPLICATE | Pending |
| I09 | Cleanup must be allowlisted and have before/after/reference checks | SKILL, Core Reference, Storage, Closeout | CORE resource safety | DUPLICATE | Pending |
| I10 | 60/70/80% disk thresholds are reference guidance | SKILL, Core Reference, Storage | CORE guidance | DUPLICATE / REVIEW | Pending |

## J. Automation and authentication lifecycle

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| J01 | Automation must have fail-closed SAFE_MODE/equivalent before first real action | SKILL, Core Reference | specialist automation or CORE trigger | DUPLICATE / REVIEW | Pending |
| J02 | SAFE_MODE must survive restart/recreate and wire to real business actions | SKILL, Core Reference | specialist automation | DUPLICATE | Pending |
| J03 | First real business action must be bounded Canary | README, SKILL, Core Reference | CORE consequential-action principle | DUPLICATE | Pending |
| J04 | Canary limits include single target/count/expiry/central guard/non-target delta | README, SKILL, Core Reference | CORE + domain specialist | DUPLICATE | Pending |
| J05 | REAUTH success does not auto-resume business actions | README, SKILL, Core Reference | specialist auth lifecycle | DUPLICATE | Pending |
| J06 | Identity must match before credential update/resume | SKILL, Core Reference | specialist auth lifecycle | DUPLICATE | Pending |
| J07 | Notification failure must not resume business | SKILL | specialist auth lifecycle | NONE | Pending |

## K. Provider/payment and recovery

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| K01 | Provider/account/app/merchant/product-permission identities must be separated | GOVERNANCE_HANDOFF, Provider Contract | PROVIDER | DUPLICATE | Pending |
| K02 | Provider paid ≠ local paid ≠ fulfillment complete | GOVERNANCE_HANDOFF, Provider Contract | PROVIDER | DUPLICATE | Pending |
| K03 | One real Canary allows one bounded buyer action; no second payment after Provider success | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K04 | Provider reconciliation query must be proven read-only | Provider Contract | PROVIDER | NONE | Pending |
| K05 | Callback success acknowledgement requires auth/correlation/amount/status/idempotent durable handling | Provider Contract | PROVIDER | NONE | Pending |
| K06 | Provider success + local timeout/cancel is recovery, not payment retry | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K07 | Recovery selector requires exact cardinality | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K08 | Recovery requires fresh pre-mutation recheck | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K09 | Recovery restores full domain invariant set, not one status | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K10 | Durable DB commit and async fulfillment are separate proofs | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K11 | Ambiguous/partial/committed recovery attempt must not be blindly replayed | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER + CORE retry principle | DUPLICATE | Pending |
| K12 | Incident-only recovery tooling must not become normal runtime policy | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K13 | Canary fixture must match real fulfillment semantics | Provider Contract, GOVERNANCE_HANDOFF | PROVIDER | DUPLICATE | Pending |
| K14 | Refund/new real payment remains separately authorized consequential action | Provider Contract | PROVIDER / CORE Owner-only | NONE | Pending |

## L. Closeout and decommission

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| L01 | Closeout phases: remote hygiene → reconstructible archive barrier → local decommission → final reconciliation | Closeout Contract | CLOSEOUT | NONE | Pending |
| L02 | Every deletion candidate must be classified; UNKNOWN fails closed | Storage, Closeout | CLOSEOUT / CORE deletion principle | CROSS_DOMAIN | Pending |
| L03 | Git archive barrier excludes secrets/DB/private recovery/customer data | Closeout Contract | CLOSEOUT | NONE | Pending |
| L04 | Shared repo closeout is scoped to project-owned subtree, not whole repo cleanliness | Closeout Contract | CLOSEOUT | NONE | Pending |
| L05 | Protected recovery artifact can remain as explicit exception | Closeout Contract | CLOSEOUT | NONE | Pending |
| L06 | Execution-policy blocked deletion must not be bypassed via alternate shell/tool | Closeout Contract | CLOSEOUT / CORE safety | NONE | Pending |
| L07 | Known accepted property must be distinguished from new regression/unproven drift | Closeout Contract | CLOSEOUT + CORE drift principle | NONE | Pending |
| L08 | Packaged-app path virtualization must be considered before declaring local recovery missing | Closeout Contract | CLOSEOUT / TARGET_HOST | CROSS_DOMAIN | Pending |
| L09 | Deferred-event retention requires explicit reconciliation rather than infinite keep/delete | Closeout Contract | CLOSEOUT | NONE | Pending |
| L10 | Final closeout keeps deferred business actions as `DEFERRED_NOT_PASS` | Closeout Contract | CLOSEOUT | NONE | Pending |
| L11 | Audit references must not be globally rewritten across historical Gates | Closeout Contract | CLOSEOUT / audit | NONE | Pending |

## M. Handoffs, templates and reporting

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| M01 | `REVIEWER_HANDOFF.md` is Reviewer-maintained current project truth | SKILL, Core Reference, Reviewer template | PROJECT_STATE | DUPLICATE | Pending |
| M02 | `EXECUTOR_HANDOFF.md` contains execution facts only | SKILL, Core Reference, Executor template | GATE / execution summary | DUPLICATE / overlap review | Pending |
| M03 | `EXECUTION_EVIDENCE.md` stores detailed append-only evidence | SKILL, Evidence template | GATE / evidence | DUPLICATE / overlap review | Pending |
| M04 | `SHARED_VPS_HANDOFF.md` stores host trust/shared-infra facts but no credentials | README, SKILL, SSH Contract, Shared VPS template | PROJECT/INFRA STATE | DUPLICATE | Pending |
| M05 | Storage Manifest stores location/recovery/access metadata but no Secret values | SKILL, Storage Contract, template | STORAGE state attachment | DUPLICATE | Pending |
| M06 | Reviewer minimum Owner-facing report includes progress/current Gate/result/next/Owner need | SKILL, Core Reference, Usage Scenarios | CORE reporting | DUPLICATE | Pending |
| M07 | Templates should be fields/structure rather than a unique policy source | implicit current design | TEMPLATE | REVIEW | Pending |
| M08 | Usage Scenarios should be invocation examples, not unique normative rules | Usage Scenarios | EXAMPLE_HISTORY | REVIEW | Pending |

## N. Governance evolution and history

| ID | Rule / concept | Current locations | Future bucket | Risk | Decision |
|---|---|---|---|---|---|
| N01 | Governance changes should be cross-project reusable and validated, not incident-by-incident | README, SKILL, Core Reference, GOVERNANCE_HANDOFF | META | DUPLICATE | Pending |
| N02 | Rule maturity labels: VALIDATED / PROVISIONAL / CANDIDATE | SKILL, Core Reference | META | DUPLICATE | Pending |
| N03 | Current core remains v0.1.6 while addenda evolve independently | README, SKILL, GOVERNANCE_HANDOFF, metadata | META | DUPLICATE | Pending |
| N04 | Historical incident lessons should not silently become current generic policy | GOVERNANCE_HANDOFF, Provider, proposal history | META / EXAMPLE_HISTORY | TENSION | Pending |
| N05 | Superseded proposal remains for historical validation only | proposal header, GOVERNANCE_HANDOFF | EXAMPLE_HISTORY | STALE-noise risk | Pending |

## Initial count

This first semantic inventory contains **112 rule/concept rows**.

It is intentionally conservative: related statements were kept separate when combining them could hide a conflict.

## What happens next

Do **not** delete or rewrite anything yet.

Next review should take one rule cluster at a time and decide:

1. Is the rule still correct?
2. Is it universal or specialist?
3. What is its single authoritative future home?
4. Which duplicate copies should eventually become references/examples only?
5. Does any newer addendum supersede older wording?
6. Is there a genuine semantic conflict that requires an Owner decision?

Those decisions will be recorded separately before any shadow rewrite.
