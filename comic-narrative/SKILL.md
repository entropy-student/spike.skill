---
name: comic-narrative
title: 漫画叙事
description: 面向“选题 → 剧本 → 最终配音/SRT → 分镜 → 漫画图片资产 → 视频时间轴/成片”的漫画叙事生产 Skill。当前按模块逐步从 ai-story-showrunner / story-showrunner 简化迁移，并通过历史 Case 与源快照复查避免能力丢失。
version: 0.0.12-draft
language: zh-CN
status: ACTIVE_MAINTENANCE_LOCAL_DOC_PURGE
---

# 漫画叙事

## 模块

0. 历史选题库
1. 选题与内容策略
2. 剧本与叙事
2.5 最终配音 / SRT 对齐
3. 分镜与视觉导演
4. 角色 / 图片 / 资产执行
4.5 素材库与图片复用
5. 视频时间轴 / 合成 / 成片
6. 执行与项目管理

## 当前完成范围

Part 0「历史选题库」与 Part 1「选题与内容策略」已完成；Part 2「剧本与叙事」已建立合并基线；Part 2.5「最终配音 / SRT 对齐」已建立正式基线，锁定真实音频时间后再进入 Part 3；Part 3「分镜与视觉导演」已吸收本轮独立复查中 Owner 批准的整体视觉规划、Scene System、事实属性、最终静帧与真实时间链规则；Part 4「图片 / 资产执行」已封板并与 Part 4.5 素材复用正式接通。

执行选题时按顺序读取：

1. `part1/TOPIC_STRATEGY.md`
2. `part0/TOPIC_LIBRARY.md`（历史复查）

Part 0 只有一个正式文档：
- `part0/TOPIC_LIBRARY.md`

Part 1 只有一个正式文档：
- `part1/TOPIC_STRATEGY.md`

Part 2 当前唯一合并基线：
- `part2/SCRIPT_NARRATIVE.md`

Part 2.5 当前唯一正式文档：
- `part2_5/VOICE_SRT_ALIGNMENT.md`

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

- Part 3 已完成本轮已批准规则落地，但仍需继续复查 Reviewer 剩余建议；Part 4 已封板并明确最终图片执行包合同。Part 2.5 现负责最终配音与 SRT 对齐；Part 5 改为视频时间轴 / 合成 / 成片职责，但 Part 5–6 尚未完成正式迁移。
- 不修改 `ai-story-showrunner`。
- 不修改原 `story-showrunner`。

## 当前交接入口

- `REVIEWER_HANDOFF.md`：当前唯一状态仪表盘、当前 Gate、约束与下一步；Reviewer / Executor 默认从这里进入。
- `history/HANDOFF.md`：历史迁移、Owner 决策、旧执行记录与审计材料；只用于追溯，不作为默认启动面。

当前状态、当前 Gate 与下一步以 `REVIEWER_HANDOFF.md` 为准；需要追溯来源时再查 `history/HANDOFF.md`。
