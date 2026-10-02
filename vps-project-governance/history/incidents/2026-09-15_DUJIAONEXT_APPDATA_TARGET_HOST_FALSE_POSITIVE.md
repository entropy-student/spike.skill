# Incident — DujiaoNext Owner AppData artifact false-positive

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext
CATEGORY: TARGET_HOST_REALITY / WINDOWS_APPDATA

## What happened

Project documentation stated that the Owner recovery artifact existed at:

```text
C:\Users\34707\AppData\Local\DujiaoNext\recovery\dujiao-next\admin-bootstrap.dpapi
```

A later check from the actual Owner Windows session proved that the artifact was not present on that target host.

## Verified cause

The execution/documentation flow promoted a planned/expected path or a same-named path visible outside the real Owner host into an “artifact exists on Owner Windows” fact. Document-to-document consistency was treated as stronger than actual target-host read-back.

## Impact

- Owner recovery material was not actually available where documentation claimed.
- Handoff/storage state temporarily disagreed with reality.
- An additional Admin Access Recovery flow was required.

## Resolution used

- Treat actual target-host reality as stronger than stale documentation.
- For host-local file claims, prove the real machine/user/effective context before mutation and perform same-target native read-back afterward.
- On Windows, use native checks such as `Test-Path`, `Get-Item`, and where relevant `Get-Acl`.
- If real-host evidence contradicts documentation, mark the old claim superseded rather than preserving the convenient narrative.
- Keep document consistency and physical/runtime reality as separate acceptance checks.

## Current standard rule

The operational prevention/diagnosis path is normative only in:

- `vps-project-governance/v0.2.1/VNEXT.md` §10.1 — standard rule vs incident history;
- `vps-project-governance/v0.2.1/VNEXT.md` §11B — Target-host reality and ACL.

This incident file is historical evidence/rationale only and does not create policy.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §3.1 “文档事实与真实 Target Host 状态发生漂移”.
- Same retrospective §3.2 “文档 Truth Scan PASS 不能替代物理存在性验证”.
- DujiaoNext Admin recovery Evidence/Handoff from 2026-09-15.

No Secret value is stored here.
