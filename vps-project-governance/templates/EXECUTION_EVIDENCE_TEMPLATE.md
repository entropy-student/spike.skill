# <project-name> — EXECUTION EVIDENCE

> Maintainer: Execution Agent  
> Reviewer source of truth: `REVIEWER_HANDOFF.md`  
> Append-only execution facts. No architecture decisions.

## Gate

- Gate ID:
- Date/time:
- Authorized prompt/package:

## Preflight Evidence

- Current state:
- Canonical source/release identity:
- Shared Infra boundary:
- Data/backup readiness:
- Resource baseline:
- Secret handling metadata only:

## Actual Writes

- Files changed:
- Services/containers changed:
- DB writes:
- Network/route writes:
- Account/business-scope writes:

## Verification Evidence

- Exit status:
- Tests:
- Positive checks:
- Negative checks:
- Container/process/restart:
- Ports/networks:
- DB integrity/counts:
- Backup/restore compatibility:
- Release/image identity:
- Business-action delta:
- Resource before/after:

## Cleanup Evidence

- Exact temporary objects removed:
- Retained rollback objects:
- Broad prune: NO
- Final regression:

## Anomalies

- What happened:
- Whether state changed:
- Rollback/containment:
- Remaining risk:

## Secret / Private Data Statement

No private key, password, Cookie, Token, webhook URL, encryption-key value, decrypted private data, or private business identifiers are recorded here.

## Result

```text
PASS_CANDIDATE_<GATE>
STOP_AT_REVIEWER: YES
```

or a precise `RETURN_*` reason.
