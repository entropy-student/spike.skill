# Music Taste Profiler（音乐口味画像）

> Analyze authorized playlists and liked songs to answer: **what music do you actually like, and why?**

This Skill converts real listening collections into a plain-language music taste profile.

## What it does

Possible inputs:

- NetEase Cloud Music
- QQ Music
- Kugou
- Soda Music
- exported playlists
- manually supplied song lists

The output avoids unnecessary jargon and focuses on statements such as:

> You prefer strong melody over beat-first tracks.  
> You like melancholy that still feels warm rather than hopeless.  
> Clear, youthful vocals affect you more than heavy vocal styles.  
> You often prefer songs that begin restrained and release later.

## Workflow

```text
User authorization / playlist input
        ↓
Read liked songs and personal playlists
        ↓
Normalize and deduplicate
        ↓
Find recurring musical preferences
        ↓
Use Music Quality Radar on representative songs
        ↓
Build a human-readable taste profile
```

## Data-source strategy

The ingestion layer can use or adapt [`guohuiyuan/music-lib`](https://github.com/guohuiyuan/music-lib):

- NetEase: personal playlists ✅ / QR login ✅
- QQ Music: personal playlists ✅ / QQ & WeChat QR login ✅
- Kugou: personal playlists ✅ / QR login ✅
- Soda Music: personal playlists ✅ / QR login currently unstable

The taste-profile concept is inspired by `minimax-music-playlist` in [`MiniMax-AI/skills`](https://github.com/MiniMax-AI/skills), while this Skill focuses only on profiling and links it with this repository's [Music Quality Radar](../music-quality-radar/).

## Main profile dimensions

- genre/style
- mood
- melody vs rhythm preference
- vocal preference
- language
- arrangement density
- lyric preference
- familiarity vs exploration
- representative artists
- core aesthetic summary

## Core rules

### Taste is not quality

This Skill answers:

> **What do you like?**

Music Quality Radar answers:

> **Why is this song musically strong or ordinary?**

Combining both explains why particular kinds of well-made songs are especially likely to work for a specific listener.

### Do not fake precision

- 10–30 songs: preliminary profile
- 30–100: usable
- 100–300: fairly stable
- 300+: high confidence

Do not produce precise-looking percentages when the evidence is sparse.

### Privacy first

- Read personal playlists only with explicit user authorization.
- Never expose cookies or tokens in chat or reports.
- Default to aggregated results rather than raw listening history.
- Store only what is needed.
- Stop access when authorization is revoked.

## Quick invocation

```text
Use Music Taste Profiler to analyze my music taste from my authorized playlists and liked songs.
Explain in plain language:
1. what styles I like most
2. what melody, mood, vocal and arrangement traits I prefer
3. why those songs work for me
4. which songs best represent my taste
5. what hidden patterns appear in my listening
State confidence when the data is limited.
```
