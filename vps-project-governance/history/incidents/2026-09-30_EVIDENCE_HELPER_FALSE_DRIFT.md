# Incident — Evidence helper/transcription failure looked like target drift

STATUS: CLOSED
DATE: 2026-09-21 / 2026-09-30 / 2026-10-02
PROJECT: Shared VPS Infrastructure / Mini Craft migration
CATEGORY: EVIDENCE_EXTRACTION / BASELINE_FINGERPRINT

## What happened

Two related false-drift paths occurred during M2A reconciliation.

First, parser/formatting/shell helper failures prevented complete network and Compose evidence extraction even though repeated target runtime reads were materially consistent. Later, a Reviewer-sealed Compose SHA differed from the actual and historical accepted source; comparison showed the sealed value had been transcribed incorrectly, while the target and accepted historical hash matched after normalization.

## Verified cause

Evidence tooling/formatting failure was allowed to look like runtime instability, and a critical fingerprint was manually transcribed without validating it against the accepted machine-read source.

## Recurrence

An earlier Mini Craft PPCP reconciliation on 2026-09-21 showed the same class from a different probe: the WordPress admin UI presented the Sandbox merchant as connected, while an Executor helper reported `PPCP_MERCHANT_CONNECTED=NO`. Read-only reconciliation later proved the helper had parsed the wrong JSON path (`data.merchant` instead of the actual top-level state); there was no real connection-state mismatch. No disconnect/reconnect was allowed until the contradiction was reconciled.

The class recurred again in `vpn-network-optimization` on 2026-10-02. The first G2-B Owner runner passed the Administrator/High checks but failed inside its own route/adapter precheck with `CimJobException` before any benchmark sample. Reviewer reconciliation classified current network reality as healthy and the blocker as runner/precheck implementation rather than route/adapter drift.

## Impact

A safe write Gate was repeatedly stopped for apparent drift that was not proven to exist.

## Resolution used

- Classify parser/helper/shell failures as evidence-extraction failures unless independent target evidence proves drift.
- Prefer structured/raw read-back plus small deterministic parsing over fragile formatting helpers.
- Validate critical hashes/fingerprints for syntax/length and compare against machine-read accepted evidence.
- Preserve historical evidence; supersede the later incorrect Reviewer seal rather than rewriting history.
- Do not repeat large runtime investigations once equivalent fresh reads are already consistent.

## Current standard rule

See active `VNEXT.md` §6 “Preflight, execution, build and retry”.

## Source pointers

- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2A_R4_RETURN_R5_PARSER_INDEPENDENT_CONDITIONAL_EXECUTION.md`.
- `shared-vps-infrastructure/docs/REVIEWER_DECISION_M2A_R5_RETURN_R6_CANONICAL_HASH_CORRECTION_AND_EXECUTION.md`.

No Secret value is stored here.
