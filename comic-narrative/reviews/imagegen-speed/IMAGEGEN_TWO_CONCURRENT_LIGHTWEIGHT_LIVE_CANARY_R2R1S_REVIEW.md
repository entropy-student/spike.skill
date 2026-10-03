# IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED**  
> Imagegen calls: **0**  
> Next Gate: **IMAGEGEN_TWO_CONCURRENT_LOGGER_REPAIR_AND_LIVE_CANARY_R2R1T**

## Evidence verification

Owner supplied:

- `IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S.md`
- `PREFLIGHT_EVIDENCE_R2R1S.md`
- `FRESH_READBACK_R2R1S.json`

Reviewer independently recomputed:

- report SHA-256 = `6877ffc3e13a5d60d22458bc3d070a12bd55fa0d25f7472c6d1f5ed41630772a`
- preflight SHA-256 = `48a031353c1cfff4ceaeb1b094079404b26f75d852bb1abc9e29eb0bc554491b`

Both match the supplied fresh-readback record.

Verified final facts:

- current main = `e9c66e9277bc4819b05ee305925cdba04c0d9b39`;
- Part 4 §25 fresh-read passed;
- two distinct 16:9 tasks passed lightweight checks;
- no exact native pixel requirement was reintroduced;
- call guard = 2 / attempts = 1 / retry-replacement-fallback disabled;
- save helper static checks passed;
- `IMAGEGEN_CALLS=0`;
- outputs = 0;
- historical R2R1J files were not read or restored.

## Blocking defect

The temporary logger `source/append_event.ps1` used `PSScriptRoot` as the run root.

Because the logger is itself stored under `source/`, the smoke-test event was written to:

`source/RUN_EVENTS.jsonl`

instead of the required:

`RUN_EVENTS.jsonl`

at the run root.

The root log therefore did not prove that the actual append helper was targeting the canonical event file.

This is a **fresh harness implementation defect**, not:

- an imagegen failure;
- an output_hint failure;
- a concurrency failure;
- a size-policy failure;
- a historical-evidence problem.

## Reviewer decision

Formal result:

`RETURN_IMPLEMENTATION_DRIFT — ACCEPTED`

The Executor correctly stopped before live imagegen.

## Repair principle

Do not open a repair-only Gate that stops before the real test.

The next Gate may perform **one bounded logger repair** in a fresh run directory and, if its smoke test passes, continue in the same round directly to the two-concurrent live canary.

Preferred repair contract:

- logger receives an explicit `-EventLogPath` or explicit run-root argument;
- it must not derive the canonical run root solely from `PSScriptRoot`;
- smoke test must prove the event appears in the intended root `RUN_EVENTS.jsonl`;
- no `source/RUN_EVENTS.jsonl` may be created by the repaired smoke test;
- after smoke PASS, proceed immediately to exactly two concurrent imagegen calls;
- no retry / replacement / third call.

This keeps the Gate focused on obtaining the live result quickly.
