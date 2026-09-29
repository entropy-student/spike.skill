---
name: comic-narrative
title: 漫画叙事
description: 面向“选题 → 剧本 → 分镜 → 漫画图片资产 → 配音/时间轴 → 成片”的漫画叙事生产 Skill。当前按模块逐步从 ai-story-showrunner / story-showrunner 简化迁移，并通过历史 Case 与源快照复查避免能力丢失。
version: 0.0.12-draft
language: zh-CN
status: PART4_SEALED_PART4_5_BASELINE
---

# 漫画叙事

## 模块

0. 历史选题库
1. 选题与内容策略
2. 剧本与叙事
3. 分镜与视觉导演
4. 角色 / 图片 / 资产执行
4.5 素材库与图片复用
5. 配音 / 时间轴 / 成片
6. 执行与项目管理

## 当前完成范围

Part 0「历史选题库」与 Part 1「选题与内容策略」已完成；Part 2「剧本与叙事」已建立合并基线并完成已确认的最小补充；Part 3「分镜与视觉导演」已完成第一轮结构简化；Part 4「图片 / 资产执行」已完成源材料复查、完整合并基线、安全去重，并已明确图片执行包、自包含图片任务、临时资产门槛与执行 Agent 边界；其余未批准的结构优化继续保持现状。

执行选题时按顺序读取：

1. `part1/TOPIC_STRATEGY.md`
2. `part0/TOPIC_LIBRARY.md`（历史复查）

Part 0 只有一个正式文档：
- `part0/TOPIC_LIBRARY.md`

Part 1 只有一个正式文档：
- `part1/TOPIC_STRATEGY.md`

Part 2 当前唯一合并基线：
- `part2/SCRIPT_NARRATIVE.md`

Part 3 当前唯一合并基线：
- `part3/STORYBOARD_VISUAL_DIRECTOR.md`

Part 4 当前封板基线：
- `part4/IMAGE_ASSET_EXECUTION.md`

Part 4.5 当前唯一正式文档：
- `part4_5/ASSET_REUSE_LIBRARY.md`

旧材料仅用于追溯与备份：

`source-snapshots/01-topic-content-strategy/`
`source-snapshots/02-script-narrative/`
`source-snapshots/03-storyboard-visual-director/`
`source-snapshots/04-image-assets/`

## 当前限制

- Part 3 已封板为当前正式视觉导演基线；Part 4 已明确最终图片执行包合同。Beat Asset Matrix、多个 Bible、Registry/Reference Library 等未获批准的结构合并继续保持现状。Part 5–6 尚未迁移完成，仍不得用本 Draft 替代完整生产系统。
- 不修改 `ai-story-showrunner`。
- 不修改原 `story-showrunner`。

## 唯一交接入口

- `HANDOFF.md`

当前状态、Owner 已确认/否决事项和下一步以该文档为准。
