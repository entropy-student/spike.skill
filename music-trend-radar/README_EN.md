# 🎵 Music Trend Radar（音乐趋势雷达）

A cross-platform trending music radar for NetEase Cloud Music, QQ Music, Qishui Music, plus a separate Bilibili derivative-creation signal.

It separates:

- Current hits
- Breakout songs
- New-song watchlist
- Platform-specific hits
- Persistent chart leaders
- Cultural-template songs that spread through covers, dances, edits, memes, and other Bilibili derivatives

Bilibili is **not** treated as a fourth music chart. It is an independent breakout layer used to measure whether a song has become reusable creative material.

During calibration, the skill outputs Current Heat, Breakout, Balanced Radar, and S+/S/A/B tiers. S+ is further labeled as **active / culture / legacy** to distinguish current breakout, ongoing cultural spread, and long-lived cultural assets.

Core rule: **never invent missing rankings, momentum, or audio features.**

See `SKILL.md` for the full specification.
