# H003 — 家庭食谱｜Part X 归档记录

## 当前有效包

- 状态：`READY_FOR_IMAGE_EXECUTOR_UNDER_OWNER_PROVISIONAL_TIMING_EXCEPTION_FINALIZED`
- 归档格式：`EDITABLE_DIRECTORY`
- GitHub repo-native 包目录：`01_最终执行包/`
- 原始 Owner 确认本地目录：`H003_家庭食谱_Part4_素材包_EDITABLE_R2_REVIEWED`
- Transport ZIP：`NONE`（Owner 明确要求保留可编辑文件夹，不打 ZIP）
- Repo-native aggregate SHA-256：`a16aa9ebea605b421746b2744698fc361e06b13d58f472ac2b5f5b88c8b0257b`
- 完整性文件：`01_最终执行包/PACKAGE_DIGEST.txt`
- 文件清单：`01_最终执行包/总清单.json`

## 当前图片任务结构

- Visual Beat：47
- GENERATE：42
- DERIVE_EDIT：4
- EXACT_REUSE：1
- HOLD：0
- 故事 imagegen 操作：46
- 奶奶 Mini Master 前置：1
- 总 imagegen 操作：47
- 最大并发：2
- 画幅：16:9
- final delivery target：1920×1080

## GitHub 去重说明

Part X 不重复存储 3 张已存在于同仓库的 canonical PNG；具体解析见 `01_最终执行包/REFERENCE_RESOLUTION.md` 与 `REFERENCE_MANIFEST.json`。

Part 3 Shotbook 也不在 repo-native 包中重复保存；逐 Beat 所需上游事实已编译进 `图片任务.json` 的自包含合同。

## 时间边界

- Provisional SRT：82 Cue / 03:05.139
- 正式最终音频：未生成
- 正式真实音频 SRT：未生成

最终真实音频产生后仍需 Timing Rebind / downstream timing check。

## 完成状态边界

本归档表示：
`PART4 PLANNING / EXECUTION PACKAGE FINALIZED BY OWNER FOR CURRENT REVISION`

不表示：
`PART4 IMAGE PRODUCTION COMPLETE`
