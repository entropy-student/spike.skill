---
name: comic-narrative
title: 漫画叙事
description: 面向“选题 → 剧本 → 分镜 → 漫画图片资产 → 配音/时间轴 → 成片”的漫画叙事生产 Skill。当前按六个模块逐步从 ai-story-showrunner / story-showrunner 简化迁移，并通过同 Case 前后回归验证避免能力丢失。原始材料永久保留在 source-snapshots。
version: 0.0.2-draft
language: zh-CN
status: PART1_SIMPLIFIED_AWAITING_OWNER_CONFIRMATION
---

# 漫画叙事

## 六个模块

1. 选题与内容策略
2. 剧本与叙事
3. 分镜与视觉导演
4. 角色 / 图片 / 资产体系
5. 配音 / 时间轴 / 成片
6. 执行与项目管理

## 当前完成范围

Part 1「选题与内容策略」已完成第一版简化并通过 3 Case 回归测试，但尚未 Owner 最终确认。

执行 Part 1 时只需读取：

1. `part1/TOPIC_STRATEGY.md`
2. `part1/TOPIC_MEMORY.md`
3. 需要结构化输出时读取 `schemas/topic-candidate.schema.json`
4. 需要写入选题记忆时读取 `schemas/topic-memory.schema.json`

旧材料只用于追溯与回归：
`source-snapshots/01-topic-content-strategy/`

## 当前限制

- Part 2–6 尚未简化，仍不得用本 Draft 替代完整生产系统。
- 不修改 `ai-story-showrunner`。
- 不修改原 `story-showrunner`。
- Part 1 在 Owner 确认前仍是 Draft。
