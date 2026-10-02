# Incident — Shared parent ACL scope drift

STATUS: CLOSED
DATE: 2026-09-15
PROJECT: DujiaoNext / shared Owner recovery root
CATEGORY: ACL / SHARED_BOUNDARY

## What happened

A project-specific Owner script tightened ACLs on a shared recovery parent directory that also contained another project's recovery material.

## Verified cause

“Protect this project's artifact” was implemented by rewriting a shared ancestor rather than the project-owned child boundary.

## Resolution used

Inspect shared parents unless a separate Shared/authority Gate owns them. A project Gate may tighten only its project child/leaf path. If historical shared-parent ACL drift is discovered and no trustworthy baseline exists, audit first and do not guess a restoration that may damage another project.

## Current standard rule

See active `VNEXT.md` §11B “Target-host reality and ACL”.

## Source pointers

- `VPS_PROJECT_GOVERNANCE_RETROSPECTIVE_2026-09-15.md` §3.10.

No Secret value is stored here.
