# Governance Source Policy rev1

> Operational addendum to VPS Project Governance v0.1.6.
>
> Status: `ACTIVE / VALIDATED-ON-MULTI-PROJECT-HANDOFF`
>
> Canonical repository: `entropy-student/spike.skill`
>
> Canonical path: `/vps-project-governance`

## 1. Purpose

Governance rules must have one durable default source of truth. Local Skill copies, project ZIPs,
chat excerpts and historical Handoffs are useful execution artifacts, but they must not become
competing long-lived governance authorities.

The default canonical source is the latest accepted Governance state in the GitHub repository above.

## 2. Governance-rule precedence

When **governance rules** conflict, use this order:

1. Owner latest explicit instruction;
2. active Reviewer explicit override / pinned version / Gate-specific addendum;
3. GitHub canonical Governance latest;
4. project-local or local-machine historical copies;
5. old ZIPs, README snapshots and chat history.

An active Reviewer override is intentionally temporary. When the override is closed or no longer
applies, execution automatically returns to GitHub canonical latest.

This rule governs policy/rules. It does not replace the project factual-state chain.

## 3. Project factual-state precedence

For **what actually happened in one project**, use the strongest current evidence:

1. current accepted Reviewer decision / `REVIEWER_HANDOFF.md`;
2. fresh authoritative read-back and accepted `EXECUTION_EVIDENCE.md`;
3. `EXECUTOR_HANDOFF.md`;
4. older project docs, screenshots, README and chat.

If Executor Evidence advances beyond the Reviewer Handoff, the Handoff may temporarily lag.
Before the next consequential Gate, Reviewer must reconcile and synchronize authoritative truth.
Do not erase historical Evidence to make documents appear consistent.

## 4. Local-copy rule

A local Governance Skill or cloned copy is a cache/convenience copy only.

It must not be treated as canonical when:

- its version differs from GitHub;
- it has no explicit Reviewer pin;
- its source/commit cannot be proven;
- a newer accepted GitHub Governance state exists.

A stale local copy must either be refreshed or removed so that it cannot silently outrank GitHub.

Required invariant:

```text
GITHUB_GOVERNANCE_SOURCE=PASS
STALE_LOCAL_GOVERNANCE_COPY=0
```

## 5. Reviewer pin / override

Reviewer may explicitly pin a Governance version or temporary addendum for a bounded Gate when
reproducibility or incident containment requires it.

A pin must state:

- exact version/addendum/commit where practical;
- scope;
- reason;
- expiry/close condition.

A pin does not permanently fork Governance. After its scope ends, GitHub latest becomes default again.

Required invariant:

```text
REVIEWER_OVERRIDE_PRIORITY=PASS
```

## 6. Governance update discipline

Before deleting a local copy after a Governance update:

1. update the canonical GitHub files;
2. read them back from GitHub;
3. verify the intended version/addenda/source policy are present;
4. only then remove or de-authorize the stale local copy;
5. verify future startup instructions point to GitHub latest.

If GitHub update or read-back is unavailable or ambiguous:

```text
RETURN_GOVERNANCE_SOURCE_NOT_PROVEN
```

Do not delete the only known usable Governance copy until canonical GitHub truth is proven.

## 7. Startup rule for Reviewer / Executor

For a new session/project:

```text
GitHub Governance latest
  -> active Reviewer override if explicitly declared
  -> current project REVIEWER_HANDOFF
  -> latest accepted Evidence
  -> current Gate
```

Do not start from a remembered local copy merely because it is faster.

## 8. Boundary

This Source Policy does not authorize:

- GitHub credential disclosure;
- repository deletion;
- destructive history rewrite;
- bypassing branch protection;
- project production changes;
- Secret movement.

It only defines which Governance source is authoritative and how version drift is reconciled.
