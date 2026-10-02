# Incident — Evidence helper/transcription failure looked like target drift

STATUS: CLOSED
DATE: 2026-09-30
PROJECT: Shared VPS Infrastructure / Mini Craft migration
CATEGORY: EVIDENCE_EXTRACTION / BASELINE_FINGERPRINT

## What happened

Two related false-drift paths occurred during M2A reconciliation.

First, parser/formatting/shell helper failures prevented complete network and Compose evidence extraction even though repeated target runtime reads were materially consistent. Later, a Reviewer-sealed Compose SHA differed from the actual and historical accepted source; comparison showed the sealed value had been transcribed incorrectly, while the target and accepted historical hash matched after normalization.

## Verified cause

Evidence tooling/formatting failure was allowed to look like runtime instability, and a critical fingerprint was manually transcribed without validating it against the accepted machine-read source.

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
