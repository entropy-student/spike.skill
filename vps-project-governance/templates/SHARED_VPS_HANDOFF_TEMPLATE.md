# <shared-vps-name> — SHARED VPS HANDOFF

> Maintainer: Shared Infrastructure Reviewer  
> Secret/private-key values: NEVER record here

## 1. Host identity

- Provider/account label:
- Hostname/IP:
- SSH port:
- Login role:
- Server identity/OS:
- Last read-only verification:

## 2. SSH trust metadata

- Identity-file reference:
- Client public-key fingerprint:
- Expected host-key fingerprints:
- `known_hosts` reference:
- Canonical read-only connection command/options:
- SSH config alias: present / absent / not required

Do not record passwords, private-key contents, passphrases or access tokens.

## 3. Privilege model

- Passwordless sudo:
- Docker access:
- Compose access:
- Forbidden host-level actions without a Gate:

## 4. Shared infrastructure inventory

- Existing projects:
- Shared networks:
- 80/443 owner:
- Reverse proxy:
- Tunnel/ingress:
- Firewall:
- Shared backup/monitoring:

## 5. Connection recovery

- Read-only identity probe:
- Host-key mismatch result: `RETURN_SSH_TRUST_DRIFT`
- Missing/unusable identity result: `RETURN_SSH_CONNECTION_REQUIRED`
- Provider-panel recovery route:

## 6. Change boundaries

- Project-local actions allowed by project Gate:
- Shared Infra changes requiring separate authorization:
- Owner-only actions:

## 7. Current status

```text
SSH_CONNECTION_CONTRACT=
HOST_IDENTITY=
SHARED_INFRA_BASELINE=
LAST_VERIFIED=
```
