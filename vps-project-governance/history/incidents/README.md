# Governance incidents

STATUS: NON_NORMATIVE_HISTORY

This directory stores concise historical incident records when Owner requests durable Governance-side history or when a concrete incident has recurring/audit value.

## Boundary

```text
VNEXT.md            -> what must be done next time
history/incidents/  -> what actually happened before
```

An incident record never creates or overrides policy. If an incident reveals a new cross-project gap, the generalized rule is added to the active `VNEXT.md` only in a separately Owner-authorized Governance modification round.

Reviewer does not read this directory by default. Consult it only for recurrence diagnosis, rationale, prior resolution details, or explicit Owner request.

## Minimal incident record

Keep only:
- date and project;
- observed symptom;
- verified root cause;
- material impact;
- evidence/source pointers;
- actual resolution;
- current canonical rule/path that prevents recurrence.

Do not store Secret values.
