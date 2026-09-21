# Viewpoint Grammar — Candidate v0.1

## Core question

> Should the audience watch the protagonist, or experience the action/discovery with the protagonist?

## Modes

### OBSERVER
Use when body/reaction/behavior is the story.

### IP_POV
Use when the audience should share reading/discovery/experience.

### IP_POV_HANDS
Use when the protagonist's own manual action creates the consequence.

### OVER_SHOULDER_IP
Use when both actor ownership and readable target matter.

### OBJECTIVE_INSERT
Use when a causal object/evidence state must be isolated clearly.

### RELATIONAL_OBSERVER
Use when a two-subject relationship/blocking is the story.

### HYBRID_OBSERVER_POV
Semantic-shot strategy only; child Visual Beats still choose concrete modes.

## Rules

- First-person narration does not force every frame into POV.
- Owned hand action should not default to third-party Observer.
- Exact evidence may use IP_POV for discovery or OBJECTIVE_INSERT for proof.
- POV changes need a story/information reason, never variety alone.
- A target POV requiring a material camera/subject-set change should not be produced by a DERIVE_EDIT from an incompatible source.

Every Visual Beat should record:
- `pov_mode`
- `pov_reason`

## Return codes

- `RETURN_POV_UNMOTIVATED`
- `RETURN_POV_SWITCH_UNMOTIVATED`
- `RETURN_DERIVE_SOURCE_INCOMPATIBLE`
