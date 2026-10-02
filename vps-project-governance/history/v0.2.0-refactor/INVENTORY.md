# Amber Kite — Existing Source Inventory

> SHADOW ANALYSIS ONLY.
> This is a file-level inventory, not yet the rule-level semantic audit.

## 1. Current production source

Canonical current Governance remains:

```text
main:vps-project-governance/
```

No file below has been modified by Amber Kite.

## 2. File-level classification

| Existing file | Current apparent responsibility | Future bucket hypothesis | Initial concern |
|---|---|---|---|
| `README.md` | human introduction + summary + current addenda | entry documentation | overlaps heavily with Core |
| `README_EN.md` | English introduction/summary | entry documentation | duplicates README/Core |
| `SKILL.md` | executable Governance summary + loading rules | Core / router | currently too broad; repeats specialist rules |
| `GOVERNANCE_HANDOFF.md` | Governance current state + lessons + addenda status | Governance release/state record | mixes status, changelog, lessons and loading rules |
| `metadata.yml` | machine-readable version/status metadata | metadata | likely fine, but must align with one source |
| `references/GOVERNANCE_V0_1_6.md` | full historical/current Core reference | Core/history | overlaps SKILL; contains historical version lessons |
| `references/GOVERNANCE_SOURCE_POLICY.md` | rule-source precedence | Core or small meta contract | may be reducible to a short Core rule |
| `references/STORAGE_LAYOUT_CONTRACT.md` | Shared VPS storage/data isolation | specialist plugin | appropriate specialist domain |
| `references/SSH_AND_DELEGATED_SECRET_OPERATIONS.md` | SSH trust + Secret operations + Windows transport/recovery | specialist plugin(s) | possibly contains multiple separate domains |
| `references/TARGET_HOST_REALITY_CONTRACT.md` | real-host evidence boundary | specialist plugin / cross-cutting invariant | overlaps SSH and Core evidence rules |
| `references/PRODUCTION_PROVIDER_CANARY_AND_RECOVERY_CONTRACT.md` | provider/payment canary and recovery | specialist plugin | appropriate specialist domain but internally large |
| `references/PROJECT_CLOSEOUT_AND_WORKSTATION_HYGIENE_CONTRACT.md` | closeout/decommission | specialist plugin | appropriate lifecycle specialist |
| `references/USAGE_SCENARIOS.md` | invocation/examples | examples only | should never carry unique rules |
| `proposals/PROJECT_CLOSEOUT_AND_WORKSTATION_HYGIENE_CONTRACT_CANDIDATE.md` | historical proposal/validation record | archive/history | operationally superseded; possible startup noise |
| `templates/REVIEWER_HANDOFF_TEMPLATE.md` | project state template | Project State | repeats Governance rules |
| `templates/EXECUTOR_HANDOFF_TEMPLATE.md` | latest execution facts summary | Gate/Execution | potential overlap with Evidence |
| `templates/EXECUTION_EVIDENCE_TEMPLATE.md` | per-Gate execution facts/evidence | Gate/Execution | likely appropriate but overlaps Executor Handoff |
| `templates/PROJECT_STORAGE_MANIFEST_TEMPLATE.md` | project storage state | specialist project-state attachment | appropriate when Storage applies |
| `templates/SHARED_VPS_HANDOFF_TEMPLATE.md` | shared host factual state | shared-infra state | appropriate, but separate authority from project state |

## 3. Initial structural hypotheses

These are hypotheses only; no deletion or semantic change has been approved.

### Hypothesis A — Too many "master" explanations

At least these currently behave partly like master documents:

- README
- SKILL
- GOVERNANCE_V0_1_6
- GOVERNANCE_HANDOFF

Future design should likely have only one normative Core location.

### Hypothesis B — Handoff and Evidence may be over-split

Current project continuity uses:

- REVIEWER_HANDOFF
- EXECUTOR_HANDOFF
- EXECUTION_EVIDENCE

There may be justified separation, but the exact responsibility boundary needs rule-level review because Executor Handoff and Evidence currently overlap.

### Hypothesis C — Some specialist Contracts contain cross-domain material

Examples to audit:

- SSH contract also contains Windows transport, Secret provisioning, DPAPI recovery and ACL behavior.
- Target Host contract overlaps ACL/Windows-host evidence behavior.
- Core repeats portions of both.

The next phase should decide whether these are:
- valid cross-references;
- duplicate rules;
- misplaced rules;
- or genuinely conflicting rules.

### Hypothesis D — Historical lessons are mixed with current normative rules

Historical lessons are valuable, but Reviewer execution should not need to parse them to know current requirements.

A future structure may separate:
- normative current rule;
- rationale/history;
- examples/incident archive.

## 4. Next inventory level

The next version of this document (or a dedicated rule matrix) will classify **individual concepts/rules**, for example:

| Rule concept | Current locations | Future home | Status |
|---|---|---|---|
| PASS_CANDIDATE != PASS | README, SKILL, core reference, templates | Core | duplicate |
| Owner-only boundary | multiple | Core | duplicate |
| host identity before host-local write | SKILL, Target Host, SSH, templates | Target Host + short Core trigger | duplicate/cross-cutting |
| no broad Docker prune | README, SKILL, Storage, Closeout | Core resource safety + specialist application | review |
| DPAPI CurrentUser limitations | SSH, Target Host, Handoff | specialist recovery | review |

No operational text should be rewritten until that matrix is complete enough to show coverage and conflicts.
