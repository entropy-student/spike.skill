# 漫画叙事 — 唯一交接文档

## 当前状态

当前分支：`codex/comic-narrative-part2-snapshot`

### Part 0 — 历史选题库
唯一正式文档：
`part0/TOPIC_LIBRARY.md`

当前：
- 20 个 Case；
- 第 1 个美食选题保留原版本；
- 其余 13 个已改为更自然的人话题面；
- 新增 6 个科技类 Case；
- 当前历史复查：20 / 20 PASS。

### Part 1 — 选题策略
唯一正式文档：
`part1/TOPIC_STRATEGY.md`

当前已确认：
- X 是主菜，科技是变量；
- 科技包含人工智能、推荐算法、自动化、平台机制、智能设备、数据系统等；
- 不要求标题出现“科技”或“人工智能”；
- 题面先像普通人真的会问的话；
- 先让人认出自己的生活，再解释背后的科技；
- 不默认只做反思题，允许惊奇/机制、实用、判断、趋势、探索/体验等；
- 候选必须对照 Part 0 做 D1–D5 历史复查。

Owner 已明确否决以下四项修改，后续不得擅自恢复：
1. 迁入旧项目完整历史选题；
2. 把现有 Case 改成“证据待核验”状态；
3. 修改 D3 的“主要结论”判定；
4. 修改 D5 的 Meaning 判定公式。

## 当前进入 Part 2 — 剧本与叙事

当前只完成：
**源材料收集 / 原样备份。**

已完成反向漏检并复制 **50 份**相关 / 疑似相关材料到：

`source-snapshots/02-script-narrative/`

包含三层：

### A. 正式规则
- 叙事风格；
- Writer 质量规则；
- Bilibili 编辑基线；
- G2 / G3 / G3R 验证；
- portable Writer Contract；
- Pipeline / Architecture 边界；
- Agent / Context-Memory / MCP 三组 StoryPremise + Script Case；
### B. 验证证据
- Agent / Context-Memory / MCP 的 Topic、KnowledgeCore、StoryPremise、Script；
- G3R 改写版本与 Review，用于追踪“为什么这样改”。

### C. 边界 / 历史参考
- Pipeline / Architecture / Current Doc Index；
- Skill migration conflict / reconciliation / migration review；
- episode schema / template；
- Viewpoint grammar（仅作 Part 2 / Part 3 边界检查）；
- 原 Story Showrunner Skill / migration status；
- 一份已 superseded 的 Dialogue / Prose 候选，仅作历史参考。

所有复制文件均保持与源文件相同的 Git blob 内容。

反向漏检结论：与 Part 2 行为直接相关或合理疑似相关的规则、验证记录和边界文件均已纳入备份；纯分镜、图片、配音、时间轴、执行输出未复制进 Part 2，因为属于后续模块。

## Part 2 边界

Part 2 只处理：
- 故事骨架；
- 人物欲望与冲突；
- 因果推进；
- 转折与收束；
- 观点如何从故事里长出来；
- 口语文案；
- 叙事语气；
- 第一人称 / 角色关系；
- 剧本最终文本。

暂不处理：
- 分镜；
- 镜头；
- 图片资产；
- 生图提示词；
- 配音；
- SRT 时间轴；
- 成片执行。

## 当前停止点

`PART2_SOURCE_AUDIT_COMPLETE / SIMPLIFICATION_PLAN_PENDING_OWNER`

下一步：
1. 从 20 份源材料中提取不可丢失的剧本能力；
2. 标记重复、过时、互相冲突的规则；
3. 给 Owner 看 Part 2 简化方案；
4. Owner 确认后才开始简化；
5. 简化后用旧 Case + 新 Case 做前后对照。

## 安全边界

- 不修改原 `ai-story-showrunner`；
- 不修改原 `story-showrunner`；
- 不因为整理 Part 2 改写已经确认的 Part 0 / Part 1；
- 原始快照不删除；
- 本文件是 `comic-narrative` 唯一交接文档。
