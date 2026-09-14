# SSH Connection and Delegated Secret Operations

> Governance: VPS Project Governance v0.1.6 operational addendum  
> Revision: 1  
> Status: SSH contract `ACTIVE / VALIDATED`; delegated provisioning `VALIDATED-ON-UNIFIED-PAY`; DPAPI CurrentUser recovery `VALIDATED-ON-UNIFIED-PAY / LIMITED-FAILURE-DOMAIN`.
> Default Secret authority still remains with the Owner; delegated generation is allowed only after exact explicit Owner authorization.

This addendum covers two recurring gaps: recovering a known VPS connection
without asking the Owner to rediscover technical details, and provisioning
random application Secrets when the Owner cannot safely create files or run
commands.

## 1. Shared VPS connection contract

Every managed shared host must have one `SHARED_VPS_HANDOFF.md`. It records
connection and trust **metadata**, never credentials:

- host/address, SSH port and login role;
- identity-file reference and public-key fingerprint, never private-key data;
- expected SSH host-key fingerprints;
- canonical non-interactive SSH options;
- privilege model (`sudo`, Docker access, panel access if relevant);
- last verified identity/date and a minimal read-only probe;
- shared networks, ingress owners and host-level change boundaries;
- known recovery route if the normal connection stops working.

An SSH key name is not an authority boundary. A pre-existing key may be reused
for another project on the same host only when its server-side role is already
the intended shared operations role. Do not copy a private key into a project,
review bundle, repository, chat or Handoff.

Canonical automation should use `BatchMode=yes`, `IdentitiesOnly=yes` and
`StrictHostKeyChecking=yes`. A host-key mismatch is never auto-accepted:

```text
RETURN_SSH_TRUST_DRIFT
```

If the recorded identity reference is unavailable or cannot complete the
read-only probe, return `RETURN_SSH_CONNECTION_REQUIRED`. A successful SSH
connection proves reachability only; it does not authorize a VPS write.

## 2. Connection recovery order

Do not ask the Owner to remember how a previously verified host was reached.
Use this order:

1. read `SHARED_VPS_HANDOFF.md`;
2. verify identity-file presence, permissions and public fingerprint without
   reading or emitting private-key contents;
3. verify the recorded host key from the normal `known_hosts` file;
4. run the recorded bounded read-only identity probe;
5. compare the result with the last accepted host/user/OS facts;
6. update only metadata and timestamps after Reviewer acceptance.

Changing `authorized_keys`, creating a new login, altering SSH daemon settings,
firewall rules or privilege grants is a Shared Infrastructure Change Gate.

## 3. Delegated Secret provisioning

Secret **authority and custody** remain Owner-controlled. When the Owner lacks
the technical ability to create or enter a Secret, the Owner may explicitly
authorize the Executor to generate and install an exact allowlist. That
authorization must name the project, target environment, purposes/files,
overwrite policy and recovery policy. It never implies Provider activation,
account authorization, payment or production enablement.

Before generation, the Gate must first satisfy `TARGET_HOST_REALITY_CONTRACT.md` for any host-local claim, then freeze:

- exact target host and project-scoped directory;
- exact file allowlist and purpose of each Secret;
- cryptographic RNG and format/entropy requirement;
- effective runtime users/groups that must read each mounted file;
- refusal behavior when any target already exists;
- encrypted recovery destination in a different failure domain;
- rollback and rotation boundaries.

Generation rules:

- generate directly inside the protected target environment with a CSPRNG;
- values must not appear in chat, command arguments, environment variables,
  stdout/stderr, shell history, logs, Handoff, Evidence or bundles;
- create atomically with restrictive `umask`; never overwrite an existing file
  unless an explicit rotation Gate authorizes that exact file;
- verify non-empty/format/uniqueness without printing values or value hashes;
- prove the intended runtime can read only its mounted Secrets and unrelated
  services cannot;
- record only path, purpose, owner/group, mode, read-only mount and validation
  result.

If a target exists unexpectedly, permissions are broader than designed, the
runtime cannot read it, or recovery cannot be created and checked:

```text
RETURN_SECRET_COLLISION
RETURN_SECRET_ACCESS_MISMATCH
RETURN_SECRET_RECOVERY_UNAVAILABLE
```

## 4. Low-operation encrypted recovery

Database backups and Secret recovery bundles are separate artifacts. A Secret
recovery bundle must be encrypted before it is stored outside the protected
runtime, and its decrypting capability must not exist only on the VPS being
protected.

For a Windows Owner workstation, a DPAPI `CurrentUser` encrypted copy under the Owner's local profile is an acceptable low-operation first recovery copy when:

- plaintext is streamed over the existing verified SSH channel and encrypted
  in memory; no plaintext archive is written locally;
- the ciphertext is outside the repository and ordinary review artifacts;
- an immediate in-memory decrypt/byte-identity check passes;
- ciphertext path, size and checksum are recorded, but no plaintext checksum or
  Secret value is recorded;
- the limitation is explicit: recovery is bound to the same Windows account
  profile and does not survive loss of both VPS and that profile.

The project Executor should implement the smallest reviewed helper for this pattern and validate it with non-secret fixture bytes before using it on real Secrets. If the Executor cannot prove it is operating the Owner's real Windows target host, it must return `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE` and must not claim that the DPAPI recovery artifact exists on that host. A later move to a password manager, HSM/KMS or independent encrypted
vault is a recovery improvement Gate, not a reason to expose plaintext now.

Restore is always a separate, explicit Gate. Default restore behavior is to a
fresh/empty project Secret directory, followed by permission, inventory and
runtime compatibility checks without value output. Never restore over live
Secrets implicitly.

## 5. Evidence markers

Use metadata-only markers such as:

```text
SSH_CONNECTION_CONTRACT_READ=YES
SSH_HOST_KEY_MATCH=YES
DELEGATED_SECRET_AUTHORIZATION=EXACT_ALLOWLIST
SECRET_VALUES_EMITTED=NO
EXISTING_SECRET_OVERWRITES=0
RUNTIME_SECRET_ACCESS=PASS
UNRELATED_SECRET_ACCESS=DENIED_OR_NOT_MOUNTED
OFF_HOST_ENCRYPTED_RECOVERY=PASS
PLAINTEXT_RECOVERY_ARTIFACTS=0
```
