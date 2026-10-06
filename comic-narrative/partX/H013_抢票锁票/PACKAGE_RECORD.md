# H013 — 抢票锁票｜Part X 归档记录

## 当前有效包

- 状态：`READY_FOR_IMAGE_EXECUTOR_UNDER_OWNER_PROVISIONAL_TIMING_EXCEPTION_FINALIZED`
- GitHub repo-native 包：`01_最终执行包/H013_抢票锁票_最终素材包_FINAL_R2_REPO.zip`
- 原始完整 transport 包：`H013_抢票锁票_最终素材包_FINAL_R2.zip`
- 原始完整包 SHA-256：`4880458c6249191aa83d70acf34ea3081d4531f49d79f8a8359241b36d91977a`
- repo-native 包 SHA-256：`1db35dd8c43848e841f4e786a63e48f285cf32673b1ec87bc564fad13fbceb60`

## 当前图片任务结构

- Visual Beat：40
- GENERATE：28
- DERIVE_EDIT：7
- EXACT_REUSE：5
- HOLD：0
- 实际 imagegen 任务：35

## GitHub 去重说明

repo-native ZIP 保留最终执行包中的 JSON / MD / SRT / 执行合同与上游锁定输入，但不在 Part X 重复打包以下 4 张已经存在于同仓库的 canonical PNG：

- `comic-narrative/part3/assets/characters/MAIN_CHARACTER_MASTER.png`
- `comic-narrative/part3/assets/characters/MALE_FRIEND_ROOMMATE_MASTER.png`
- `comic-narrative/part3/assets/style/STYLE_PRIMARY_TWO_PERSON_DINING.png`
- `comic-narrative/part3/assets/style/STYLE_SECONDARY_SINGLE_PERSON_DINING.png`

具体解析规则与 hash 仍由 ZIP 内的 `REFERENCE_RESOLUTION.md` / `REFERENCE_MANIFEST.json` 记录。

## 时间边界

当前时间字段仍基于 Owner 已批准的 provisional SRT，仅用于预制作规划；最终真实音频产生后仍需 Timing Rebind。
