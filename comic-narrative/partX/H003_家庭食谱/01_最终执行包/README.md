# H003 家庭食谱｜Part 4 可编辑素材包 R2 REVIEWED

这是已由 Owner 确认并准备归档到 Part X 的 **repo-native 可编辑目录执行包**。本轮按当前 Part 4 / Part 4.5 正式要求完成包级复查并修复；未实际生图、未打 ZIP。

## 最终执行规模

| 指标 | 当前值 |
|---|---:|
| Visual Beat | 47 |
| GENERATE | 42 |
| DERIVE_EDIT | 4 |
| EXACT_REUSE | 1 |
| HOLD | 0 |
| 故事 imagegen 操作 | 46 |
| 奶奶 Mini Master | 1 |
| 总 imagegen 操作 | 47 |
| Existing packaged refs | 3 |
| 跨集历史正式复用 | 0 |

## Reviewer 本轮修复

1. B31 / B32 / B36：`DERIVE_EDIT → GENERATE`，避免不兼容 source geometry / POV /动作关系。
2. 所有 Beat 显式补齐 `upstream_ref / frame_requirement / visible_subjects / identity_lock`。
3. GENERATE / DERIVE 任务显式补齐 `character_refs / scene_refs / prop_ui_refs / style_refs`。
4. DERIVE 显式补齐 `immutable_preserve / exact_main_delta / incompatibility_gate`。
5. EXACT_REUSE 显式补齐 no-edit / no-crop / no-new-binary 准入合同。
6. 所有 run reference / Mini Master 都明确 QA + hash 准入条件。
7. 统一补齐 `output_name / delivery_spec`，执行器无需自行推断。

## 当前状态

`READY_FOR_IMAGE_EXECUTOR_UNDER_OWNER_PROVISIONAL_TIMING_EXCEPTION`

时间仍来自 82 Cue / 03:05.139 provisional SRT；最终真实音频出现后需 Timing Rebind / downstream timing check。

## Repo-native 归档去重

- format: `EDITABLE_DIRECTORY`
- canonical PNG binaries：通过 `REFERENCE_RESOLUTION.md` 解析，不重复存储
- Part 3 Shotbook：不重复归档；每条任务已自包含编译必要 Part 3 facts
- integrity：`总清单.json` + `PACKAGE_DIGEST.txt`
