# H003 — Repo-native Reference Resolution

This Part X archive is an **editable directory package**. Canonical binaries already present in this repository are not duplicated under Part X.

| Package-relative reference | Canonical repository binary | Canonical Git blob SHA |
|---|---|---|
| `参考图片/MAIN_CHARACTER_MASTER.png` | `comic-narrative/part3/assets/characters/MAIN_CHARACTER_MASTER.png` | `c03775dff6852cafb5d9284bd72fb05378e7dc9c` |
| `参考图片/STYLE_PRIMARY_TWO_PERSON_DINING.png` | `comic-narrative/part3/assets/style/STYLE_PRIMARY_TWO_PERSON_DINING.png` | `88e7b3b959f4f190c1abbb95071cdba9f780e6ed` |
| `参考图片/STYLE_SECONDARY_SINGLE_PERSON_DINING.png` | `comic-narrative/part3/assets/style/STYLE_SECONDARY_SINGLE_PERSON_DINING.png` | `aa8e79b2e205479594a7c9f8b9808d0c9e9ee10e` |

Execution rule:
- resolve the package-relative reference to the exact canonical binary above;
- verify the expected SHA-256 in `REFERENCE_MANIFEST.json`;
- canonical identity remains authoritative;
- `PRE_GRANDMA_MASTER` is a run-generated dependency, not preinstalled.

The upstream Part 3 Shotbook is not duplicated in this repo-native archive because every Beat's required Part 3 facts are compiled directly into `图片任务.json` (`frame_requirement`, identity, continuity, POV, and acceptance fields).

This archive does not claim image production completion.
