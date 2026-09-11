# <project-name> — PROJECT STORAGE MANIFEST

> Governance: VPS Project Governance v0.1.6 + Storage Layout Contract rev1  
> Maintainer: Reviewer / project operations  
> Secret values: NEVER record here

## 1. Identity

- Project:
- Environment:
- Compose project name:
- Current deployment status:

## 2. Canonical Paths

- App/release: `/srv/apps/<project>`
- Durable data root: `/srv/data/<project>`
- Backup root: `/srv/backups/<project>`

## 3. Durable Data Inventory

| Type | Path / volume | What it stores | Rebuildable? | Backup required? |
|---|---|---|---|---|
| Database |  |  | NO | YES |
| Uploads |  |  | NO | YES |
| State |  |  |  |  |
| Other |  |  |  |  |

## 4. Docker Mounts / Volumes

| Service | Container path | Host bind / named volume | Durable? | Backup / restore method |
|---|---|---|---|---|
|  |  |  |  |  |

- Anonymous durable volumes: NO / UNKNOWN
- Cross-project shared data mount: NO / YES (requires separate Shared Service approval)

## 5. Database

- Engine/version:
- Data location:
- Backup method:
- Integrity validation:
- Restore command/runbook:
- Migration notes:

## 6. Uploads / Object Data

- Location:
- Expected growth:
- Backup method:
- Optional external object storage:

## 7. Secrets Inventory — metadata only

| Secret purpose | File/path or secret mechanism | Expected permission | Backup/transfer policy |
|---|---|---|---|
|  |  |  |  |

Do not record any Secret value, token, private key, webhook URL, Cookie, password or decrypted data.

## 8. Backup Policy

- Scheduled backup path:
- Pre-change recovery path/pattern:
- Retention:
- Encryption:
- Matching key/recovery-pair requirements:
- Last verified restore:

## 9. Migration Unit

A fresh VPS migration requires:

- [ ] reproducible app/release source
- [ ] `/srv/data/<project>` data set
- [ ] validated backup/recovery material
- [ ] secure Secret transfer procedure
- [ ] canonical Compose/deployment manifest
- [ ] domain/network mapping
- [ ] restore/read-back verification

## 10. Ephemeral / Safe-to-Clean Inventory

- Build cache:
- Package cache:
- Temporary files:
- Logs + retention:
- Disposable test data:

## 11. Decommission Rules

- Rebuildable data disposal:
- Durable data retention/migration:
- Secret destruction/rotation:
- Final backup required: YES / NO
- Owner approval required for irreversible real-data deletion: YES

## 12. Capacity Baseline

- Expected steady-state disk:
- Expected monthly growth:
- Current project footprint:
- Alert/cleanup threshold:

## 13. Reviewer Gate Fields

```text
STORAGE_LAYOUT_CONTRACT_READ=
PROJECT_STORAGE_MANIFEST_EXISTS=YES
DURABLE_DATA_PATHS_EXPLICIT=
SECRET_PATHS_EXPLICIT_METADATA_ONLY=
BACKUP_PATH_EXPLICIT=
RESTORE_METHOD_DEFINED=
ANONYMOUS_DURABLE_VOLUME=
CROSS_PROJECT_DATA_SHARING=
```

## 14. Result

- Reviewer decision:
- Remaining UNKNOWN:
- Next action:
