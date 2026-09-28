---
name: comic-narrative
title: 漫画叙事
description: 面向“选题 → 剧本 → 分镜 → 漫画图片资产 → 配音/时间轴 → 成片”的漫画叙事生产 Skill。当前按模块逐步从 ai-story-showrunner / story-showrunner 简化迁移，并通过历史 Case 与源快照复查避免能力丢失。
version: 0.0.8-draft
language: zh-CN
status: PART3_STRUCTURE_SIMPLIFIED_PASS1
---

# 漫画叙事

## 模块

0. 历史选题库
1. 选题与内容策略
2. 剧本与叙事
3. 分镜与视觉导演
4. 角色 / 图片 / 资产体系
5. 配音 / 时间轴 / 成片
6. 执行与项目管理

## 当前完成范围

Part 0「历史选题库」与 Part 1「选题与内容策略」已完成；Part 2「剧本与叙事」已建立合并基线并完成已确认的最小补充；Part 3「分镜与视觉导演」已完成第一轮结构简化：正式工作流收敛为“整集视觉策略 → Semantic Shot → Visual Beat”，核心能力未删。

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

旧材料仅用于追溯与备份：

`source-snapshots/01-topic-content-strategy/`

## 当前限制

- Part 3 仅完成第一轮结构简化；具体规则仍需逐组验证。Part 4–6 尚未迁移完成，仍不得用本 Draft 替代完整生产系统。
- 不修改 `ai-story-showrunner`。
- 不修改原 `story-showrunner`。

## 唯一交接入口

- `HANDOFF.md`

当前状态、Owner 已确认/否决事项和下一步以该文档为准。
