# Amber Kite — Macro Map

> SHADOW DESIGN DOCUMENT. Not active Governance.

## 1. What the system is for

The governance system exists to solve one central problem:

> Keep a changing project safe, continuous and verifiable when multiple humans or Agents participate over time.

It primarily prevents:

- state loss;
- authority confusion;
- uncontrolled scope expansion;
- false success claims;
- repeated work after chat/Agent changes.

## 2. The whole system in one loop

```text
┌─────────────────────┐
│ 1. CURRENT STATE    │
│ Where are we now?   │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 2. CURRENT TASK     │
│ What may change now?│
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 3. PREFLIGHT        │
│ Is it safe/true now?│
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 4. EXECUTION        │
│ Perform bounded work│
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 5. EVIDENCE+REVIEW  │
│ Did it really work? │
└──────────┬──────────┘
           ↓
┌─────────────────────┐
│ 6. NEW STATE        │
│ Persist accepted    │
│ truth               │
└──────────┬──────────┘
           │
           └──────────────→ next loop
```

If the project ends, Step 6 transitions into controlled closeout instead of another normal Gate.

## 3. Three information layers

### Layer A — Core

Answers:

> How must every governed project work?

Contains only universal concepts such as:

- authority/roles;
- state → Gate → evidence → review loop;
- PASS / RETURN authority;
- read-before-write;
- bounded scope;
- rollback expectation;
- Owner-only boundary;
- shared-infrastructure escalation principle;
- general Secret non-disclosure principle.

Core should stay small.

### Layer B — Project State

Answers:

> What is true about this one project right now?

Contains:

- current architecture;
- accepted Gates;
- current factual state;
- known risks / UNKNOWN;
- active production baseline;
- recovery baseline;
- next Gate.

It should not re-teach Core Governance.

### Layer C — Current Gate / Execution

Answers:

> What exactly may happen in this round?

Contains:

- goal;
- allowed scope;
- forbidden scope;
- preflight;
- acceptance criteria;
- rollback;
- actual execution;
- evidence;
- Reviewer decision.

It should not become a permanent second project Handoff.

## 4. Specialist plugins

These attach to a Gate only when that Gate needs them.

```text
                    ┌─ Storage / Shared VPS
                    ├─ SSH / Secret
CORE + CURRENT GATE ├─ Target Host
                    ├─ Provider / Payment
                    └─ Closeout
```

Example:

```text
Ordinary project-local code change
= Core + Project State + Current Gate

Shared VPS database migration
= Core + Project State + Current Gate
  + Storage
  + Target Host

Real payment Canary
= Core + Project State + Current Gate
  + Provider/Payment
  (+ Secret/Target Host only if actually relevant)
```

The desired behavior is **conditional composition**, not "read everything every time."

## 5. Target information flow

```text
              CORE
               │
               ↓
        CURRENT PROJECT STATE
               │
               ↓
          CURRENT GATE
               │
       ┌───────┴────────┐
       ↓                ↓
0..N specialist     no specialist
contracts           contract
       └───────┬────────┘
               ↓
           EXECUTION
               ↓
            EVIDENCE
               ↓
            REVIEW
               ↓
       ACCEPTED NEW STATE
```

## 6. Refactor success test

A future structure is better only if a new Reviewer can answer these questions quickly:

1. What problem does this governance solve?
2. Where is the universal rule?
3. What is true about the current project?
4. What is the current Gate?
5. Which specialist rule is relevant to this Gate?
6. What evidence is required?
7. Who may issue PASS?
8. Where is the accepted new state recorded?

If the Reviewer needs to reconcile multiple overlapping "master" documents to answer these, the architecture is still too complex.


## vNext target architecture

Normal Governance loading is intentionally compressed to:

```text
VNEXT.md
  = complete shadow operational rule surface
  = Core + specialist trigger scan + compact specialist rules
```

Non-operational support:
```text
HANDOFF.md    = shadow-refactor continuity
COVERAGE.md   = migration audit only
RULE_MATRIX.md / CONFLICT_REGISTER.md / DECISION_LOG.md
              = design/audit history only
```

Normal project Agents must not load design/audit history as policy.
