# Incident — Control-plane read-back attribution

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext public route
CATEGORY: EVIDENCE_PROVENANCE / CONTROL_PLANE

## What happened

The Cloudflare control plane was unavailable to the Executor. The route could later be supported by Owner action plus public/private behavior checks, but the exact dashboard/control-plane configuration could not be directly read back by that Executor.

## Verified cause

Different evidence sources were at risk of being collapsed into one stronger claim: Owner report or external behavior is useful evidence, but it is not the same as direct control-plane state.

## Resolution used

Label provenance explicitly when it matters: direct read-back, Owner-reported, behaviorally verified, or inferred. Do not promote a weaker source into a stronger one; inference alone cannot satisfy a high-risk acceptance criterion that explicitly requires authoritative state.

## Current standard rule

See active `VNEXT.md` §7 “Evidence and PASS”.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §3.11.
- DujiaoNext public-route Handoff/Evidence from 2026-09-15.

No Secret value is stored here.
