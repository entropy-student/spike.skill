# Incident — Windows ACL/integrity validators produced false negatives

STATUS: CLOSED
DATE: 2026-10-02
PROJECT: VPN Network Optimization
CATEGORY: WINDOWS_SECURITY_VALIDATION / OWNER_RECOVERY

## What happened

Two Owner-local recovery checks failed even though the underlying security state was acceptable.

An ACL helper treated “exactly one explicit ACE” as a required invariant; a non-secret fixture later proved that multiple explicit Owner ACEs can combine to the required FullControl safely. A separate integrity precheck returned `HIGH_INTEGRITY_TOKEN_REQUIRED` even though fresh Owner read-back proved the PowerShell process was elevated with a High mandatory integrity token.

## Verified cause

The validators encoded one implementation representation as if it were the security invariant: fixed ACE cardinality in one case, and an unreliable integrity-detection method in the other.

## Impact

Recovery/path-realization work stopped before final promotion and risked unnecessary Secret re-fetch/retry even though the original encrypted artifact was valid.

## Resolution used

- Reproduce suspected validator defects with non-secret fixture data before using real Secrets as debug input.
- Validate ACL semantics: owner identity, inheritance, forbidden principals/Deny entries, and effective required rights; do not require a fixed ACE count unless cardinality itself is the security requirement.
- Validate elevation/integrity using the effective token/integrity property supported by the actual target runtime.
- Patch every independent copy of the faulty validator; do not assume fixing one helper fixes another.
- Reuse the already-validated encrypted recovery artifact instead of re-fetching/rotating the VPS Secret when the Secret itself is not the defect.
- Fresh-read the final canonical Owner path and DPAPI round-trip before closing the recovery Gate.

The canonical Owner DPAPI path was subsequently realized and validated successfully.

## Current standard rule

See active `VNEXT.md` §11B “Target-host reality and ACL”.

## Source pointers

- `vpn-network-optimization/REVIEWER_HANDOFF.md` — ACL fixture repair, High-integrity correction, and canonical Owner DPAPI path realization.

No Secret value is stored here.
