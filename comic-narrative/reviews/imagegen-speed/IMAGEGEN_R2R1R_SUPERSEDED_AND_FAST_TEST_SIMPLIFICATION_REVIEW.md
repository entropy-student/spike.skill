# R2R1R SUPERSEDED / FAST-TEST GOVERNANCE SIMPLIFICATION — Reviewer Decision

> Date: 2026-10-04  
> Governance: `vps-project-governance/VNEXT.md` v0.2.6 @ `de2b38ec0e7f3ecceb1aeffa3fc7f033ed14429a`  
> Owner direction: **prioritize fast live validation; stop repeatedly re-proving accepted historical evidence**  
> R2R1R status: **SUPERSEDED BEFORE EXECUTION**  
> Imagegen calls in this governance change: **0**  
> Next Gate: **IMAGEGEN_TWO_CONCURRENT_LIGHTWEIGHT_LIVE_CANARY_R2R1S**

## Why R2R1R is superseded

R2R1R was designed to re-hash the entire preserved R2R1J root and replay the historical positive/negative fixtures before allowing the next two-image live canary.

That requirement is now judged over-constrained for the actual project objective.

Accepted facts already exist:

- R2R1J formally PASSed the single-result `output_hint → strict parse → local PNG → hash → copy → QA` fast path;
- R2R1O formally PASSed the simplified 16:9 / no exact-native-pixel retry policy;
- no accepted evidence shows that the relevant imagegen interface or fast-path semantics changed after those PASS decisions.

The Owner explicitly directed that the project stop repeatedly reading/restoring/revalidating historical local test artifacts and instead obtain the next live result quickly.

Under Governance authority ordering, that explicit Owner direction controls the next bounded execution design.

## Project-level accepted-capability inheritance rule

For this project, a formally Reviewer-accepted PASS capability is reusable by later Gates without replaying its historical local evidence **unless at least one revalidation trigger is present**:

1. the relevant implementation/source was changed;
2. the relevant callable/tool/interface contract changed;
3. the relevant runtime/environment changed in a way that may affect the capability;
4. new execution evidence contradicts the accepted fact;
5. the later Gate exercises a materially different invariant not covered by the accepted PASS.

Absence/deletion of old local evidence directories alone is **not** a revalidation trigger when the formal Reviewer PASS and current canonical rule remain intact.

Historical evidence remains useful for audit, but is not a permanent runtime dependency.

## R2R1R disposition

R2R1R is not PASS and not RETURN.

It is:

`SUPERSEDED_BEFORE_EXECUTION_BY_OWNER_DIRECTION`

No R2R1R Executor run is required.

The existing R2R1J local root and ZIP may remain untouched or later be deleted by the Owner according to normal workspace cleanup needs; they are not required for R2R1S execution.

## Next execution principle

The next Gate should answer only the current question:

> Can the current Codex built-in imagegen path handle two distinct fresh image-generation tasks submitted concurrently, with each result correctly attributed and persisted through the already-accepted local fast path?

Preflight must be lightweight and current-state focused.

Do not:
- replay historical R2R1J fixtures;
- compare historical ZIP/root manifests;
- require old local evidence directories;
- reopen exact-pixel-size research.

Do:
- verify current main and current size policy;
- create two distinct fresh tasks;
- cap total calls at 2;
- submit both concurrently;
- accept no retry / no third call;
- record per-task result identity, local path/hash/copy/QA reachability;
- stop for Reviewer.
