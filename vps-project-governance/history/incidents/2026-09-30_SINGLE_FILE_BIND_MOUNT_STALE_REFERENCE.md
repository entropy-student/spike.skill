# Incident — Single-file bind mount retained a stale config reference

STATUS: CLOSED
DATE: 2026-09-30
PROJECT: Shared VPS Infrastructure / Mini Craft ingress
CATEGORY: DOCKER_BIND_MOUNT / RESTART_PERSISTENCE

## What happened

The canonical host Caddyfile was updated and the active Caddy Admin configuration correctly removed the retired Mini Craft route. However, the running container's single-file bind mount still exposed the old Caddyfile bytes. Active runtime behavior and host source looked correct, but a future restart could have loaded the stale mounted file and reintroduced the retired route.

## Verified cause

The host pathname had changed to new file content while the running container retained the earlier single-file bind reference/inode. Live reload correctness was therefore not the same as restart persistence.

## Impact

The migration could not receive final PASS because the next-start configuration remained unsafe.

## Resolution used

- Compare canonical host source, container-mounted file, active runtime config, startup source and mount metadata separately.
- Classify the divergence before mutation.
- Do not assume a plain restart will repair a stale single-file bind.
- Seal the exact Compose/service/image/network/mount baseline.
- Recreate only the affected Caddy service/container without pull/build/dependency recreation.
- Verify the new mounted file matches the host source and unrelated routes/services remain unchanged.

The bounded recreate later passed and closed the persistence risk.

## Current standard rule

See active `VNEXT.md` §11C “Deployment / Network / Resources”.

## Source pointers

- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2E_PARTIAL_PASS_R1_CADDY_MOUNT_PERSISTENCE_RECONCILIATION.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2E_R1_PASS_R2_CADDY_RECREATE_PREFLIGHT.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2E_R3_PASS_MINICRAFT_INGRESS_MIGRATION_COMPLETE.md`.

No Secret value is stored here.
