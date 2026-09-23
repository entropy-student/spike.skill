# Runtime Reference Implementations

These files are deterministic reference implementations for portable Story Showrunner contracts.

They are not provider installers and do not contain Owner-machine paths or credentials.

## timeline_resolver.py

Purpose:

```text
Speech Units
+ real normalized TTS durations
+ durable Visual Beat timing bindings
→ FINAL_SUBTITLES.srt
→ FINAL_TIMELINE.json
→ FINAL_SHOT_TIMELINE.csv
→ TIMELINE_RESOLUTION_REPORT.json
```

The resolver may change absolute time only.

It must not change:
- text;
- Speech Unit order;
- semantic pace;
- authored pauses;
- Visual Beat order/meaning;
- POV.

Provider-specific execution remains in adapters.
