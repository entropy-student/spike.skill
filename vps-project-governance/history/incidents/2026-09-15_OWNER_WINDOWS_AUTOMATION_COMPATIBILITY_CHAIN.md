# Incident — Owner Windows automation compatibility chain

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext Admin Recovery
CATEGORY: WINDOWS_RUNTIME / SCRIPT_COMPATIBILITY

## What happened

The Owner automation was generated against assumed modern PowerShell/.NET behavior instead of the actual Windows PowerShell runtime. One version used an unavailable CSPRNG API and initially failed to load the DPAPI type. A later script also used `$pwd`, colliding case-insensitively with PowerShell's automatic `$PWD`, and a later payload parser mishandled Windows CRLF line endings. Early catch blocks returned only a generic failure marker, hiding useful non-secret diagnosis.

## Verified cause

The real Owner runtime was not treated as a hard execution contract before script generation. Static review did not cover PowerShell automatic/reserved-variable collisions, and serialization/parser behavior was not validated against the target line-ending/runtime semantics.

## Resolution used

- Verify/freeze the actual Owner shell/runtime before generating the consequential script.
- Use APIs supported by that runtime and explicitly load required crypto assemblies/types.
- Use explicit variable names for Secrets and critical state rather than automatic/reserved-like short names.
- Validate encoding, BOM, CRLF/LF and parser shape before remote mutation.
- Preserve sanitized stage/error-class information on failure instead of collapsing everything into a generic FAIL.

## Current standard rule

See active `VNEXT.md` §11B, especially Connection/Target-host runtime compatibility, Secret recovery parser compatibility, PowerShell critical-variable review, and fail-closed diagnostics.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §§3.3, 3.4, 3.13, 3.14 and Final Outcome.

No Secret value is stored here.
