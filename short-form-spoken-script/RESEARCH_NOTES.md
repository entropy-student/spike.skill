# Research Notes

This skill is an original synthesis built for the Spike Skill Library. External projects were used as methodological references, not copied as runtime dependencies.

## Primary references

1. `social-media-skills/skills` — `short-form-video-script`
   - Reference value: short-form retention architecture, honest hook/payoff discipline, spoken/on-screen separation.
   - Repository: https://github.com/social-media-skills/skills

2. `KKKKhazix/human-writing` — Human Writing
   - Reference value: Chinese natural-language rhythm, material/evidence discipline, oral-form constraints, revision against model/report tone.
   - Repository: https://github.com/KKKKhazix/human-writing

## Integration choices

- The Spike skill is self-contained; the two reference skills are not required at runtime.
- Their responsibilities were separated into `Retention Architecture` and `Spoken Rewrite` so language polishing cannot silently destroy retention structure.
- Platform-specific claims that can become stale are not hard-coded as universal facts.
- No personal creator profile, private writing preference, or historical user data is embedded.