# Architecture — Candidate v0.1

## System boundary

Story Showrunner is a reusable orchestration/control plane.

It owns:
- state;
- routing;
- stage contracts;
- locked-field boundaries;
- PASS / RETURN / BLOCKED;
- provenance;
- rollback to the smallest repair stage.

It does not own provider-specific execution.

## Core pipeline

```text
TopicProvider
→ DomainAdapter
→ Knowledge/CausalCore
→ StoryEngine
→ Writer
→ TimingCompiler
→ Director
→ Frame/AssetCompiler
→ ProductionCompiler
→ ExecutorAdapter
→ QA
```

## Canonical domain objects

### TopicOpportunity
- why_now
- human_problem
- human_stakes
- causal_mechanism
- curiosity_gap
- story_seed
- audience_payoff
- content_job
- visual_storyability
- novelty/repetition risk
- source_refs
- uncertainties

### KnowledgeCore
- concept
- mechanism_one_liner
- key_claims
- evidence/source
- misconceptions
- boundaries
- uncertainty
- ordinary-person implication

### StoryPremise
- protagonist
- desire
- obstacle
- stakes
- inciting incident
- expectation-result gap
- complications
- turning point
- mechanism_in_story
- payoff
- story_summary_without_jargon

### ScriptPackage
- title
- hook
- locked_spoken_script
- semantic_timing_hints
- claim_map
- terminology reveal strategy

### TimingPackage
- Speech Units
- semantic timing kind
- voice pace class
- lock class
- authored pauses
- Production SRT
- TTS Manifest

### DirectorPackage
- dramatic hierarchy
- visual strategy
- semantic shots
- visual beats
- POV
- exact visual timing mapped to Production SRT

### AssetPackage
- Frame Blueprints
- bibles
- reference manifest
- execution rows
- prompt/edit instructions

### ProductionPackage
- execution order
- script
- Production SRT
- TTS Manifest
- audio spec
- visual beats
- shot timeline
- image-generation rows
- references
- edit instructions
- output spec
- QA rules

## One brain, many workers

A Worker:
- receives explicit locked inputs;
- may edit only allowed fields;
- returns one stage artifact;
- never silently edits upstream accepted truth.

## Profiles vs adapters vs runtime

Core = universal workflow/rules.

Domain Adapter = field-specific research/causal semantics.

Provider Adapter = concrete TTS/image/executor behavior.

Profile = chosen editorial/visual/character/voice configuration.

Runtime State = changing Calendar, Registry, episode artifacts, local paths, generated assets.

These layers must not be collapsed.
