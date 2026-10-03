# IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **RETURN_PREFLIGHT_DRIFT — ACCEPTED**  
> Imagegen calls: **0**  
> Retries: **0**  
> Next Gate: **IMAGEGEN_R2R1J_EXISTING_ROOT_READONLY_QUALIFICATION_R2R1R**

## Reviewed evidence

Owner supplied:

- `IMAGEGEN_R2R1J_EVIDENCE_RESTORE_AND_PREFLIGHT_REQUALIFICATION_R2R1Q.md`
- `PREFLIGHT_EVIDENCE_R2R1Q.md`
- `FRESH_READBACK_R2R1Q.json`

Reviewer independently recomputed:

- report SHA-256 = `20b943688e669d2fcb00bdede7078000597c02e3ea48c7b795ac66cfd8fc8eb6`
- preflight SHA-256 = `c2e0ee889bcaf044ea37995153cf366adaac3c18469cd365c0726cb4b1c9e808`
- uploaded fresh-readback JSON SHA-256 = `000302a3dc697477625748602bb188bc1f6bed45057a05ffa7ea0f1805684197`

The report and preflight hashes match the values recorded in the supplied fresh-readback JSON.

## Verified facts

Executor proved the real local execution context:

- OS: `Windows_NT / Win32NT`
- PowerShell: `7.6.5 Core`
- user: `码头整来的薯条\34707`
- current path/provider/drive: `C:\Users\34707\Documents\ChatGPT\批量生图 / FileSystem / C:\`

The accepted R2R1J ZIP is present at the prescribed path and matches the formally accepted identity:

- bytes = `4,866,984`
- SHA-256 = `760fe40a9debd990bde48bf9f673a37457f7367cc90be51986862f0816dcd5b4`
- entries = 25
- absolute/traversal entries = 0

The recorded target root already existed before R2R1Q and had nine immediate entries:

- `outputs`
- `preflight`
- `source`
- `FRESH_READBACK_R2R1J.json`
- `IMAGEGEN_OUTPUT_HINT_GUARD_REPAIR_LIVE_CANARY_R2R1J.md`
- `PREFLIGHT_EVIDENCE_R2R1J.md`
- `QA_REPORT.md`
- `RUN_EVENTS.jsonl`
- `RUN_RECORD.json`

R2R1Q explicitly required a non-empty existing root to stop immediately. Executor therefore correctly did **not**:

- open/hash target-root contents;
- create staging;
- extract;
- overwrite/delete/promote;
- run the positive receiver replay;
- run the five negative path-policy cases;
- call imagegen.

Fresh readback records `imagegen_calls=0`, `target_root_nonempty=true`, `staging_created=false`, and `restore_performed=false`.

## Reviewer additional reconciliation

Reviewer re-inspected the already accepted original R2R1J ZIP.

The ZIP has exactly nine top-level names, and they are the same nine names reported by R2R1Q for the existing target root.

This does **not** yet prove byte identity of the existing root, because R2R1Q was forbidden from reading/hash-comparing its contents. It does establish that the existing root is structurally consistent with the accepted package and makes a read-only qualification Gate appropriate.

## Reviewer judgment

Formal R2R1Q result:

`RETURN_PREFLIGHT_DRIFT — ACCEPTED`

Executor behavior was correct under the Gate.

The active issue is now not “restore missing evidence”; it is:

`EXISTING_R2R1J_ROOT_IDENTITY_UNQUALIFIED`

Do not delete or overwrite the populated root merely to make the previous restore Gate pass.

## Next-step principle

Use the accepted ZIP as immutable reference and qualify the existing root **read-only**:

1. compare complete relative file set;
2. compare every regular file byte length + SHA-256 against the corresponding ZIP entry bytes;
3. require zero missing / zero extra files;
4. only after exact identity passes, run the accepted positive receiver replay and five negative path-policy cases;
5. keep `IMAGEGEN_CALLS=0`.

If any file differs, stop with precise drift evidence; do not overwrite or repair in place.
