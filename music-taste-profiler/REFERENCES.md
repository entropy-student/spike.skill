# References

Music Taste Profiler is an original integration Skill that draws on ideas and interfaces from the following open-source projects.

## 1. music-lib

- Repository: https://github.com/guohuiyuan/music-lib
- Role here: reference implementation for normalized access to playlists and personal playlists across Chinese music platforms.
- License in upstream repository: AGPL-3.0.
- Important: this Skill does not copy `music-lib` source code. If an implementation embeds, modifies, or deploys that project, review the upstream license and disclaimer separately.

## 2. MiniMax Music Playlist Skill

- Repository: https://github.com/MiniMax-AI/skills
- Skill: `skills/minimax-music-playlist/SKILL.md`
- Role here: reference for the general idea of turning listening data into a taste profile.
- Upstream skill metadata states MIT.
- This repository's Music Taste Profiler uses its own workflow and output design.

## 3. Music Quality Radar

- Local sibling Skill: `../music-quality-radar/`
- Role here: analyze representative favorite songs to explain which musical qualities recur in the user's taste.

## Design principle

`Music Taste Profiler` answers:

> What does this user like?

`Music Quality Radar` answers:

> Why does this song work musically?

Combining them answers:

> Which strong musical traits repeatedly match this user's personal taste?
