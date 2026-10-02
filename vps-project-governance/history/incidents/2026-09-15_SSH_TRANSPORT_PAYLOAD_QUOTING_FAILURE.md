# Incident — SSH transport/payload quoting failure

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext Admin Recovery
CATEGORY: SSH / REMOTE_PAYLOAD

## What happened

SSH connectivity itself was already working, but complex PostgreSQL content was embedded through multiple interpretation layers: PowerShell -> ssh.exe -> remote shell -> docker exec -> psql. Quoting broke around SQL syntax even though the SSH transport was healthy.

## Verified cause

Transport and structured payload were treated as one giant command-string problem. A payload error risked reopening an already-proven SSH layer.

## Resolution used

Keep the reviewed SSH command simple and fixed; send complex SQL/JSON/multiline/Secret-bearing payload through reviewed stdin/process-memory or an equivalent bounded input path. Diagnose payload and transport separately.

## Current standard rule

See active `VNEXT.md` §11B “Connection and trust”.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §3.5 and Final Outcome.

No Secret value is stored here.
