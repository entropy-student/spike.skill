# SSH Connection and Delegated Secret Operations

> Governance: VPS Project Governance v0.1.6 operational addendum  
> Revision: 2  
> Status: SSH contract `ACTIVE / VALIDATED`; delegated provisioning `VALIDATED-ON-UNIFIED-PAY`; DPAPI CurrentUser recovery `VALIDATED-ON-UNIFIED-PAY / LIMITED-FAILURE-DOMAIN`; Windows Owner-host transport/recovery rules `VALIDATED-ON-DUJIAONEXT`.
> Default Secret authority still remains with the Owner; delegated generation is allowed only after exact explicit Owner authorization.

This addendum covers recurring gaps in three areas: recovering a known VPS connection without asking the Owner to rediscover technical details, provisioning random application Secrets when the Owner cannot safely create files or run commands, and moving sensitive state across the Windows Owner-host ↔ SSH target boundary without producing false PASS evidence.

## 1. Shared VPS connection contract

Every managed shared host must have one `SHARED_VPS_HANDOFF.md`. It records connection and trust **metadata**, never credentials:

- host/address, SSH port and login role;
- identity-file reference and public-key fingerprint, never private-key data;
- expected SSH host-key fingerprints;
- canonical non-interactive SSH options;
- privilege model (`sudo`, Docker access, panel access if relevant);
- last verified identity/date and a minimal read-only probe;
- shared networks, ingress owners and host-level change boundaries;
- known recovery route if the normal connection stops working.

An SSH key name is not an authority boundary. A pre-existing key may be reused for another project on the same host only when its server-side role is already the intended shared operations role. Do not copy a private key into a project, review bundle, repository, chat or Handoff.

Canonical automation should use `BatchMode=yes`, `IdentitiesOnly=yes` and `StrictHostKeyChecking=yes`. A host-key mismatch is never auto-accepted:

```text
RETURN_SSH_TRUST_DRIFT
```

If the recorded identity reference is unavailable or cannot complete the read-only probe, return `RETURN_SSH_CONNECTION_REQUIRED`. A successful SSH connection proves reachability only; it does not authorize a VPS write.

## 2. Connection recovery order

Do not ask the Owner to remember how a previously verified host was reached. Use this order:

1. read `SHARED_VPS_HANDOFF.md`;
2. verify identity-file presence, permissions and public fingerprint without reading or emitting private-key contents;
3. verify the recorded host key from the normal `known_hosts` file;
4. run the recorded bounded read-only identity probe;
5. compare the result with the last accepted host/user/OS facts;
6. update only metadata and timestamps after Reviewer acceptance.

Changing `authorized_keys`, creating a new login, altering SSH daemon settings, firewall rules or privilege grants is a Shared Infrastructure Change Gate.

## 3. Windows OpenSSH / PowerShell transport contract

Windows PowerShell, OpenSSH `ssh`, OpenSSH `scp`, remote Bash, line endings and native exit codes form one transport boundary. Do not assume syntax that works in Bash will survive PowerShell argument parsing unchanged.

Required rules:

- maintain separate SSH and SCP option arrays; SSH port uses `-p`, SCP port uses `-P`;
- keep `BatchMode=yes`, `IdentitiesOnly=yes`, `StrictHostKeyChecking=yes`, explicit `UserKnownHostsFile`, bounded connect timeout and keepalive settings;
- avoid shell-format strings whose `%`, backslash, newline or quoting semantics differ across PowerShell/OpenSSH/remote shell;
- for multiline remote Bash, normalize CRLF to LF, UTF-8 encode, and prefer one bounded encoded remote payload decoded on the target rather than relying on PowerShell-native multiline stdin semantics;
- if an encoded payload is passed as an SSH argument, prove it remains one argument and contains no Secret value in command history/logs;
- always check `$LASTEXITCODE` after native `ssh`, `scp`, `icacls`, or equivalent commands even when PowerShell itself raised no exception;
- remote cleanup failure is a failure; suppressed cleanup output does not mean cleanup succeeded;
- an ambiguous remote-write outcome requires read-back before retry, never a blind second write.

When a command transports Secret-bearing plaintext, command-line arguments, shell history, transcripts, `tee`, debug echo and ordinary temp files are forbidden. Prefer process memory / stdin inside a reviewed bounded pipeline and ensure the plaintext is never rendered to the Owner console.

## 4. Delegated Secret provisioning

Secret **authority and custody** remain Owner-controlled. When the Owner lacks the technical ability to create or enter a Secret, the Owner may explicitly authorize the Executor to generate and install an exact allowlist. That authorization must name the project, target environment, purposes/files, overwrite policy and recovery policy. It never implies Provider activation, account authorization, payment or production enablement.

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
- values must not appear in chat, command arguments, environment variables, stdout/stderr, shell history, logs, Handoff, Evidence or bundles;
- create atomically with restrictive `umask`; never overwrite an existing file unless an explicit rotation Gate authorizes that exact file;
- verify non-empty/format/uniqueness without printing values or value hashes;
- prove the intended runtime can read only its mounted Secrets and unrelated services cannot;
- record only path, purpose, owner/group, mode, read-only mount and validation result.

If a target exists unexpectedly, permissions are broader than designed, the runtime cannot read it, or recovery cannot be created and checked:

```text
RETURN_SECRET_COLLISION
RETURN_SECRET_ACCESS_MISMATCH
RETURN_SECRET_RECOVERY_UNAVAILABLE
```

## 5. Low-operation encrypted recovery

Database backups and Secret recovery bundles are separate artifacts. A Secret recovery bundle must be encrypted before it is stored outside the protected runtime, and its decrypting capability must not exist only on the VPS being protected.

For a Windows Owner workstation, a DPAPI `CurrentUser` encrypted copy under the Owner's local profile is an acceptable low-operation first recovery copy when:

- plaintext is streamed over the existing verified SSH channel and encrypted in memory; no plaintext archive is written locally;
- the ciphertext is outside the repository and ordinary review artifacts;
- an immediate in-memory decrypt/byte-identity check passes;
- ciphertext path and metadata may be recorded, but no plaintext checksum or Secret value is recorded;
- the limitation is explicit: recovery is bound to the same Windows account profile and does not survive loss of both VPS and that profile.

### Two-phase artifact rule

A recovery artifact that corresponds to a credential-changing remote action must not become the canonical/final artifact before the remote change and verification succeed.

Preferred pattern:

```text
create local *.pending.dpapi
→ DPAPI round-trip verify
→ perform remote credential operation
→ verify normal application login/read-back
→ atomically promote pending → final artifact
→ Test-Path + Get-Item + ACL read-back on the real Owner host
```

If the remote operation fails before execution or has an ambiguous outcome, do not publish a final artifact. Classify/retain/delete the pending artifact according to the reviewed rollback rule, then read back the remote state before any retry.

A documented intended path is not evidence that an artifact exists. `OWNER_WINDOWS_DPAPI_ARTIFACT_CREATED=PASS` requires host-local existence verification on the actual Owner profile.

The project Executor should implement the smallest reviewed helper for this pattern and validate it with non-secret fixture bytes before using it on real Secrets. If the Executor cannot prove it is operating the Owner's real Windows target host, it must return `RETURN_TARGET_HOST_EXECUTION_UNAVAILABLE` and must not claim that the DPAPI recovery artifact exists on that host. A later move to a password manager, HSM/KMS or independent encrypted vault is a recovery improvement Gate, not a reason to expose plaintext now.

Restore is always a separate, explicit Gate. Default restore behavior is to a fresh/empty project Secret directory, followed by permission, inventory and runtime compatibility checks without value output. Never restore over live Secrets implicitly.

## 6. Windows DPAPI payload compatibility

Recovery payloads must define one canonical serialization and parser. Do not let platform line endings turn a valid DPAPI artifact into an apparent corruption.

Rules:

- serialize using an explicit UTF-8 format;
- parsers must tolerate the reviewed Windows CRLF/LF form where appropriate (for example line splitting on `\r?\n` and trimming terminal `\r`);
- immediately decrypt the just-created ciphertext in memory and compare the exact normalized payload before any remote mutation;
- never infer payload validity merely from `ProtectedData.Unprotect` succeeding;
- clear sensitive byte arrays and in-memory plaintext as soon as practical;
- do not print decrypted payloads during validation.

If a payload is readable but the parser contract fails, stop at the local phase and repair the parser; do not continue to a remote credential change.

## 7. ACL scope and false blockers

ACL review must target the actual protected artifact/subtree, not fail a Gate merely because an unrelated or higher-level parent has broader inherited entries.

For a protected Owner-only leaf:

- verify the leaf directory/file has inheritance disabled when required;
- verify the intended allowlist of principals;
- verify no broader parent rule is inherited into the leaf;
- do not rewrite unrelated parent ACLs unless the Gate explicitly owns them;
- if runtime/service principals require access, use the explicit reviewed allowlist instead of forcing Owner-only semantics.

A broad parent ACL is a blocker only when it can actually flow into or otherwise compromise the target subtree.

## 8. Split local and remote phases

Complex Owner-host recovery scripts should separate evidence boundaries instead of hiding everything behind one large try/catch.

Recommended markers:

```text
STEP_A_LOCAL_ARTIFACT=PASS
STEP_B_REMOTE_ACTION=PASS
STEP_C_APPLICATION_VERIFY=PASS
STEP_D_FINAL_ARTIFACT_PROMOTION=PASS
```

Each later phase may start only if the prior phase passed. A failure marker must identify whether the failure occurred before remote execution, after an ambiguous remote call, or after a confirmed remote mutation.

This makes retry decisions evidence-driven and prevents a local parsing/ACL failure from being misdiagnosed as an SSH or application failure.

## 9. Evidence markers

Use metadata-only markers such as:

```text
SSH_CONNECTION_CONTRACT_READ=YES
SSH_HOST_KEY_MATCH=YES
SSH_NATIVE_EXIT_STATUS=PASS
DELEGATED_SECRET_AUTHORIZATION=EXACT_ALLOWLIST
SECRET_VALUES_EMITTED=NO
EXISTING_SECRET_OVERWRITES=0
RUNTIME_SECRET_ACCESS=PASS
UNRELATED_SECRET_ACCESS=DENIED_OR_NOT_MOUNTED
OFF_HOST_ENCRYPTED_RECOVERY=PASS
DPAPI_ROUNDTRIP=PASS
FINAL_ARTIFACT_HOST_LOCAL_READBACK=PASS
PLAINTEXT_RECOVERY_ARTIFACTS=0
```

## 10. Validated incident patterns

The Unified Pay / DujiaoNext production-like work validated the following reusable failures and fixes:

- Windows OpenSSH quoting and SCP port-option differences can produce transport failures unrelated to target permissions;
- PowerShell-native transport of multiline encoded scripts is fragile; bounded normalized single-payload transport plus explicit native exit checks is safer;
- a claimed Owner-local recovery artifact may exist only in the Executor environment; real-host `Test-Path/Get-Item` supersedes documentation;
- DPAPI round-trip can succeed while a newline-sensitive parser still fails; serialization and parser compatibility must be validated before remote mutation;
- a large one-shot Owner script can obscure whether failure is local, SSH, remote or application-level; split local and remote phase markers reduce repeated Owner actions;
- ACL validation must focus on the protected subtree and inheritance path rather than treating every broader ancestor ACL as an automatic blocker.
