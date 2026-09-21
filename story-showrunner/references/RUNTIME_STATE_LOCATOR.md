# Runtime State Locator — Candidate v0.1

## Purpose

Keep changing content/runtime state outside portable Skill source.

The Skill should know **how to locate state**, not hard-code today's data.

## Required runtime sources

A deployment may configure:

- `calendar_source`
- `topic_registry_source`
- `daily_radar_source`
- `evergreen_bank_source`
- `episode_workspace_root`
- `asset_store_root`
- `runtime_provider_config`

## Default topic resolution

```text
explicit user topic
> explicit user override
> today's Calendar
> Topic Radar
> Evergreen Bank
```

## Calendar

Calendar answers:
“What is planned for this date?”

It may contain:
- topic
- lane
- content job
- editorial mode
- target duration
- status
- why-now/human problem

A planned item may be superseded by a valid runtime hot override if the configured Domain Adapter permits it.

## Topic Registry

Registry answers:
“Have we already covered this mechanism/problem/payoff/angle?”

Do not treat Calendar as Registry.

## Daily Radar

Radar is evidence/candidate supply.

It is not automatically editorial truth.

## Episode workspace

Every production run should have one `episode_id`.

Runtime episode state stores:
- selected topic
- KnowledgeCore
- StoryPremise
- locked script
- Production SRT
- Director artifacts
- Asset package
- Production package
- QA result
- provenance

## Local paths

Machine-specific paths such as:
- Windows model installs
- venv paths
- local reference WAVs
- temporary output folders

belong runtime config.

Portable profiles should use logical IDs such as:
- `voice_reference:default_narrator_v1`
- `character:channel_ip_001`
- `executor:antigravity_local`

## Failure

If required runtime state cannot be resolved:
`RETURN_RUNTIME_STATE_UNRESOLVED`

Do not invent a Calendar item, reference path or published-state record.
