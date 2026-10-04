# IMAGEGEN_EXECUTOR_SIX_TASK_RELIABILITY_R2R2 — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Executor self-report: `RETURN_TEST_FAILURE`  
> Reviewer verdict: **RETURN_IMPLEMENTATION_DRIFT — ACCEPTED / CLASSIFICATION CORRECTED**  
> Next Gate: **IMAGEGEN_RESULT_CONSUMER_BINDING_REPAIR_AND_SIX_TASK_RELIABILITY_R2R2R1**

## Evidence identity

Reviewed Owner-provided package:

`_r2r2-six-task-reliability-20261004-095700.zip`

Reviewer-computed ZIP SHA-256:

`e16493da1a6245682e5c87344a1793f8769a8ea4c3922f10a0698dc0193b2119`

Key evidence SHA-256:

- execution report = `00916cb1e4056250d5a515ea2a7fbf002c39021948df052570e0fb038f181d29`
- preflight evidence = `07d45f815f572df6727f18aa1f7d366c7dc89659eb4acbfe87168f00962e41cc`
- preflight status = `f8cccb9012f507c8b6f94a3bbeb735006d3acdd7e79861d946ce15bc2c229be9`
- RUN_EVENTS = `d7ae733b4f3d62076564c412a6489ad8bd56fd95d4f2aa82ebc70e91aba0fd8b`
- RUN_RECORD = `4f5e0f0ed2025b24e1977d8122af633d3f90a18dc915bb8404dde95a045d2b46`
- fresh readback = `62c2b2d5e4e20cc2facc539c16fe68ddf7dcce7e879041570038afde792539c5`
- temporary `consume_output_hint.ps1` = `27b8fe77593479a7a5b00cace65f96ae9be02e79d75853d7d050ad306d09d04f`

## Verified preflight facts

No-image preflight is accepted:

- current main = `a4cc6f8b21fc1ac7d3ba8343e31c5354c60ad4fc`;
- Part 4 §25 blob = `3360312c5ec7b1248d4c46d8703a29290c7aae5f`;
- canonical tool blobs matched the Gate;
- fixed fixture blob matched;
- parser fixtures = 6/6 PASS;
- canonical local-copy missing-path smoke returned exact `SOURCE_MISSING`;
- canonical logger smoke used 8 concurrent writers and fresh readback showed sequences 1..8, unique and contiguous;
- preflight imagegen calls = 0;
- call guard = max_calls 6 / max_in_flight 2.

These accepted facts do not need replay merely because the live orchestration later failed.

## Verified live facts

Wave 1:

- task `R2R2-BEAT-01` submitted at `2026-10-04T02:06:01.5839354Z`;
- task `R2R2-BEAT-02` submitted at `2026-10-04T02:06:01.6105045Z`;
- exactly 2 imagegen calls were started;
- max observed in-flight = 2;
- retries = 0;
- replacements = 0;
- fallback-imagegen = 0;
- no Wave 2 / Wave 3 tasks were submitted;
- no output PNG or QA record was created.

The final durable event chain contains 8 parseable, unique, contiguous events.

## Failure location

The failure occurred **after Beat 01 imagegen return was observed in memory but before the result could be durably handed to the accepted fast path**.

The temporary consumer contains:

```powershell
function Invoke-Canonical([string]$Script,[string[]]$Args) {
    ...
    foreach($arg in $Args) { ... }
}
...
$r = Invoke-Canonical $logger @(
    '-EventLogPath', $eventLog,
    '-EventJson', $json
)
```

This local orchestration helper is not one of the canonical R2R1V fast-path tools.

Its invocation failed before the first durable `IMAGE_RETURNED` event; the child `append_event.ps1` process did not receive its mandatory `EventLogPath` / `EventJson` parameters.

Because the orchestrator then aborted:

- Beat 01 = `RETURN_OBSERVED_BUT_NOT_SAVED`;
- Beat 02 = `SUBMITTED_RESULT_UNOBSERVABLE`;
- current in-flight state correctly remained `UNKNOWN_AFTER_ORCHESTRATOR_ABORT`.

The Gate correctly stopped rather than scanning `generated_images`, replaying calls, or fabricating completion state.

## Reviewer classification

Correct formal result:

`RETURN_IMPLEMENTATION_DRIFT — ACCEPTED`

Reason:

- the accepted imagegen transport path itself was not reached;
- no evidence contradicts R2R1V parser/copy/logger PASS;
- the defect is in a newly introduced temporary result-consumer integration helper;
- therefore this is implementation/orchestration drift, not a failed reliability observation of the accepted imagegen capability.

## Repair direction

Do not alter:

- official hint parser;
- local-copy helper;
- append-event logger;
- R2R2 fixture;
- concurrency=2;
- imagegen callable/path.

Only repair the fresh result-consumer subprocess argument handoff.

Required shape:

```powershell
function Invoke-ChildScript {
    param(
        [Parameter(Mandatory=$true)][string]$ScriptPath,
        [Parameter(Mandatory=$true)][string[]]$ArgumentList
    )
    ...
}

$childArgs = @(
    '-EventLogPath', $eventLog,
    '-EventJson', $json
)

$r = Invoke-ChildScript -ScriptPath $logger -ArgumentList $childArgs
```

Do not declare a formal parameter named `Args`.

Do not rely on ambiguous positional array binding.

## Next Gate design principle

R2R2R1 is **repair + same-round six-task retest**, not another micro-canary.

Before any imagegen call, the repaired temporary consumer must pass a no-image end-to-end consumer boundary test through the same subprocess invocation path:

1. logger child receives named arguments and appends one event;
2. parser child receives named arguments and returns the known positive fixture path;
3. local-copy child is reached through the same wrapper using a fresh synthetic allowed-root PNG source and successfully copies/hashes it;
4. synthetic evidence is cleaned up after readback;
5. no canonical tool or fixture is modified.

Only after that passes, run the same six tasks at fixed concurrency 2.

## Accepted inheritance

R2R1V remains PASS.

R2R2 preflight facts above are accepted.

No historical local imagegen directory replay is required.

