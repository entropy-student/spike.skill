# Incident — False PASS markers after failed Owner script

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext Admin Recovery
CATEGORY: EVIDENCE / OWNER_AUTOMATION

## What happened

A long Owner PowerShell sequence was run interactively in pieces. Earlier SQL/crypto/reset/login operations failed, but later unconditional string lines still printed PASS markers. Reading only the terminal tail could therefore make a failed run look successful.

## Verified cause

The step was not atomic; PASS markers were not structurally tied to verified invariants; line-by-line interactive execution defeated the intended fail-stop behavior across the whole operation.

## Resolution used

- One Owner step is delivered/executed atomically.
- PASS markers exist only inside the verified success branch.
- A failed prerequisite makes downstream PASS unreachable.
- Reviewer accepts the underlying read-back/invariant, not free-text PASS alone.

## Current standard rule

See active `VNEXT.md` §7 “Evidence and PASS” and §11B Target-host script fail-closed rules.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §§3.6–3.7 and Final Outcome.

No Secret value is stored here.
