# Pipeline & Gates — Candidate v0.1

## Stage 0 — Topic Resolution

Priority:

```text
explicit user topic
> explicit user override
> today's Calendar
> Topic Radar
> Evergreen Bank
```

If runtime state cannot be resolved:
`RETURN_TOPIC_SOURCE_UNRESOLVED`

## Stage 1 — Topic Opportunity

Hard gates:
- evidence
- human relevance
- causal mechanism
- one mechanism
- storyability
- non-trivial payoff
- duplicate/repetition
- audience/platform fit when a profile requires it

## Stage 2 — Knowledge Core

Freeze facts before story style.

Fail:
`RETURN_TO_RESEARCH`

## Stage 3 — Story Premise

Minimum causal grammar:

```text
desire
→ action
→ expectation/result gap
→ progressive complication
→ changed choice
→ turning point
→ payoff
```

Fail:
`RETURN_TO_STORY`

## Stage 4 — Writer

Writer locks spoken text.
No production timestamps.

Fail:
`RETURN_TO_WRITER`

## Stage 5 — Timing Compiler

```text
locked script
→ Speech Units
→ semantic pace
→ Voice Timing Profile
→ Production SRT + TTS Manifest
```

Fail:
`RETURN_TIMING_INFEASIBLE`
or
`RETURN_VOICE_TIMING_PROFILE_MISS`

## Stage 6 — Director

Consumes locked Production SRT.

Locks:
- dramatic hierarchy
- episode/sequence visual strategy
- semantic shots
- visual beats
- POV
- visual timing
- acceptance criteria

Fail:
`RETURN_TO_DIRECTOR`

## Stage 7 — Frame / Asset Compiler

```text
Asset Inventory
→ Reference Lock
→ Frame Blueprint
→ Asset Binding
→ Execution Mode
→ Prompt/Edit Compiler
→ Automatic Package QA
```

Manual/high-risk Pilot exists only as calibration exception.

## Stage 8 — Production Compiler

Assemble deterministic executor package.

Fail:
`RETURN_EXECUTION_CONTRACT_UNRESOLVED`

## Stage 9 — Executor

Executor executes; it does not direct.

Provider-specific rules come from adapters.

## Stage 10 — QA

Independent:
- Story QA
- Knowledge QA
- Timing QA
- Visual QA
- Identity/continuity QA
- Production QA

Only all required gates PASS → reviewable final video.

## Stage 11 — Publish / Learning

Publishing and metrics remain runtime/application concerns.

Feedback may update:
- Topic Registry
- motif repetition memory
- editorial profile
- demand hypotheses

Do not rewrite validated core contracts from one episode's performance.
