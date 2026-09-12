# Template Input Contract

This calibration rule was extracted from the first end-to-end hybrid render.

Before choosing a Code Motion template, validate three things together:

1. semantic fit;
2. Native Style Family / template uniqueness;
3. supported-input and visible-subject requirements.

If a native composition visibly assumes A-roll, presenter cutout, screen recording, source document, media cards, or another real input that is unavailable, reject the template rather than allowing its placeholder state into the final film.

A placeholder supplied by the upstream component is acceptable for template preview, but it is not automatically acceptable in a production or calibration film.

Selection order therefore becomes:

`visual role -> semantic job -> supported input contract -> style family -> uniqueness -> Reuse / Adapt / New`

Calibration 001 example: `WideCausalTagMap` was semantically strong for a cause map, but its native layout visibly assumes a presenter subject. With no A-roll available, it was rejected after QC and replaced by `WideProcessPillBuilder`, which supports text / step-list / SRT inputs without requiring a presenter asset.
