# Incident — Repeated patching before bounded diagnosis

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext Admin Recovery
CATEGORY: DIAGNOSTIC_DISCIPLINE

## What happened

Several Owner-script revisions were attempted while Windows runtime, DPAPI, ACL, transport and parser behavior were all still plausible fault domains. Two small probes later isolated the actual boundary much faster.

## Verified cause

Patches were being generated from hypotheses without enough new evidence to eliminate competing causes.

## Resolution used

After materially similar repeated failure, stop speculative patching and run a bounded diagnostic probe. Prefer read-only; if a write is necessary, make it temporary/reversible and clean it up. Probe one fault domain at a time, perform no business mutation, emit no Secret, and require the result to directly narrow the next action.

## Current standard rule

See active `VNEXT.md` §6 “Preflight, execution, build and retry”.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §3.15.

No Secret value is stored here.
