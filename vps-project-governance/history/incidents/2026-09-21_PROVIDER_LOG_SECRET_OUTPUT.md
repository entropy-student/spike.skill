# Incident — Provider log Secret surfaced in diagnostic output

STATUS: CLOSED
DATE: 2026-09-21
PROJECT: Mini Craft Night Kit
CATEGORY: SECRET_EXPOSURE / PROVIDER_LOGS

## What happened

During PayPal Sandbox diagnostics, a pre-existing WooCommerce PayPal Payments log line containing credential fields was surfaced in bounded diagnostic tool output. No Secret value was committed to GitHub or durable Evidence, and no Live/production credential was implicated.

## Verified cause

The diagnostic path treated raw Provider/plugin logs as ordinary troubleshooting text instead of as potentially Secret-bearing input that must be filtered before leaving the protected execution boundary.

## Impact

The affected Sandbox Secret was treated as compromised for reuse. The project stopped and required rotation before continuing.

## Resolution used

- Stop further exposure and do not reproduce the credential value.
- Classify the affected environment and scope.
- Rotate the affected Sandbox Secret before reuse; keep the replacement Owner-only.
- Reconnect only through the approved local UI checkpoint if rotation invalidates the stored provider connection.
- Filter/redact Provider/plugin logs before diagnostic output is surfaced.

The project later recorded `SANDBOX_SECRET_ROTATED=YES` and continued with the replacement credential without exposing it.

## Current standard rule

See active `VNEXT.md` §11B “Secret handling”.

## Source pointers

- `mini-craft-night-kit/docs/SECURITY_INCIDENT_K3R10_SANDBOX_CREDENTIAL_OUTPUT.md`.
- `mini-craft-night-kit/REVIEWER_HANDOFF.md` — K3R10 incident and K3R11 Owner Secret Rotation.

No Secret value is stored here.
