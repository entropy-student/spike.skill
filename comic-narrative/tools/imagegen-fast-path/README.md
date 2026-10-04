# Imagegen Fast Path Tools

Purpose: reusable Windows helpers for the accepted Codex built-in image generation fast path.

Accepted flow:

```text
image_gen result
→ output_hint
→ consume_output_hint.ps1
→ official_hint_parser.ps1
→ explicit SourcePath under %USERPROFILE%\.codex\generated_images
→ local_copy.ps1
→ destination PNG + SHA-256 + native dimensions
→ QA
```

Event logging uses `append_event.ps1`, which serializes sequence allocation and append under one file lock.

## Provenance

These helpers were promoted after Reviewer acceptance of R2R1V.

R2R1V proved:

- official hint parser fixtures: 6/6 PASS;
- two simultaneous built-in imagegen calls;
- direct output_hint → SourcePath for both;
- source/copy SHA-256 equality for both;
- 1672×941 native dimensions recorded for both;
- visual QA PASS for both;
- 19 durable contiguous events;
- no stdin, TTY/base64 image transfer, broad cache scan, retry, replacement, or fallback.

The repository copy is the durable reusable implementation. Future Gates should use these files rather than reconstructing helpers from historical local evidence directories.

R2R2R1 additionally proved the repaired `consume_output_hint.ps1` subprocess boundary with named `ScriptPath / ArgumentList`, a zero-image end-to-end smoke, and six real imagegen return objects. The consumer is therefore stored here as the durable result-consumer implementation; future runs should not recreate a temporary consumer.

## Current operating limits

- imagegen concurrency: **2**
- native pixel target: **NONE**
- target/final canvas metadata: **1920×1080**
- exact native pixel mismatch alone is not failure/retry
- do not scan `generated_images` to guess the latest image
- do not transport image payloads through stdin/TTY/base64
- if the current Codex upstream output_hint grammar materially changes, fail closed and revalidate the parser

## Destination path contract

`local_copy.ps1` currently validates the destination by inferring the run output root from the destination grandparent.

Therefore callers must use one explicit bucket level under `outputs`:

```text
<run_root>\outputs\<task_bucket>\<filename>.png
```

Recommended production convention:

```text
<run_root>\outputs\<task_id>\<task_id>.png
```

The bucket directory must already exist before `local_copy.ps1` runs.

A flat path such as `<run_root>\outputs\<file>.png` is not valid for the current helper and fails closed with `DESTINATION_OUTSIDE_RUN_OUTPUTS`.

QA metadata must remain under `<run_root>\qa\...`.

Do not change the helper merely to accept flat destinations unless a later Gate explicitly owns that contract change.
