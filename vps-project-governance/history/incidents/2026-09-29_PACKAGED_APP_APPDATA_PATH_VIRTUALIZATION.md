# Incident — Packaged-app AppData path virtualization

STATUS: CLOSED
DATE: 2026-09-29
PROJECT: Mini Craft Night Kit
CATEGORY: WINDOWS_APPDATA / PATH_VIRTUALIZATION

## What happened

Ordinary checks under `%LOCALAPPDATA%\MiniCraftNightKit\` appeared to show that protected recovery material was missing. A broader filename search then found the expected recovery files under the packaged Codex application storage boundary:

```text
%LOCALAPPDATA%\Packages\OpenAI.Codex_*\LocalCache\Local\MiniCraftNightKit\...
```

The recovered set included the rollback metadata and both pending/final protected recovery artifacts; later closeout retained the recovery material successfully.

## Verified cause

The files had not been deleted or lost. Windows packaged-app path virtualization redirected the write into the app package's `LocalCache\Local` view, while a normal PowerShell process inspected the ordinary `%LOCALAPPDATA%` path.

## Recurrence

The same failure class recurred in `vpn-network-optimization` on 2026-10-02. The canonical Owner path under ordinary `%LOCALAPPDATA%\vpn-network-optimization\...` was absent, while the intended DPAPI artifact was found under the OpenAI Codex packaged-app `LocalCache\Local\vpn-network-optimization\...` namespace. The artifact was subsequently validated and then realized into the canonical Owner path without re-fetching/rotating the VPS Secret.

## Resolution used

- Before declaring a Windows/AppData artifact missing, identify the process/runtime that performed the write.
- For packaged applications, inspect the corresponding package-local redirected storage when ordinary-path read-back disagrees with the writer's result.
- Distinguish **path-context mismatch** from actual missing/deleted state.
- After locating the real artifact, continue validation on the real file (existence, expected metadata/permissions, and recovery/read compatibility where applicable) rather than treating discovery alone as PASS.

## Current standard rule

See active `VNEXT.md` §11B “Target-host reality and ACL”, especially the packaged-app/path-virtualization rule.

## Source pointers

- Mini Craft Night Kit local closeout investigation, 2026-09-29.
- Fresh Owner Windows filename/path read-back that located the recovery artifacts under the Codex package `LocalCache\Local` boundary.

This incident is self-contained; the source pointers are for deeper audit only. No Secret value is stored here.
