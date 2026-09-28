# 漫画叙事 — 唯一交接文档

## 当前状态

分支：`codex/comic-narrative-part3-snapshot`

原 `ai-story-showrunner`、`story-showrunner` 未修改；`source-snapshots/` 只作备份，不参与运行。

## Part 0 — 历史选题库

正式文档：`part0/TOPIC_LIBRARY.md`

- 当前 20 个 Case。
- H001 美食推荐保留原版本。
- 题面优先自然人话。
- “科技”包含 AI、推荐算法、自动化、平台机制、智能设备、数据系统等。

## Part 1 — 选题策略

正式文档：`part1/TOPIC_STRATEGY.md`

已确认：
- X 是主菜，科技是变量；
- 先让人认出自己的生活，再解释科技；
- 不默认只做反思题；
- 新候选必须对照 Part 0 做 D1–D5 历史复查。

Owner 已明确否决，后续不得擅自恢复：
1. 导入旧项目完整历史选题；
2. 把现有 Case 改成“证据待核验”；
3. 删除 D3 的“主要结论”判断；
4. 修改 D5 Meaning 判定公式；
5. 删除 / 降级对白、潜台词、幽默、句尾、排版等现有写作规则。

## Part 2 — 剧本与叙事

正式文档：`part2/SCRIPT_NARRATIVE.md`

状态：**完整合并基线已建立，并完成两项最小补充。**

### 保持不变

- 核心骨架继续保留：人物欲望 → 行动 → 预期落差 → 后果变化 → 转折 → 理解 / 选择。
- 不新增“探究型 / 比较型”等新叙事类型。
- 故事锁定方式、固定 IP、理解型 / 行动型、发现 / 信任 / 解决暂不修改。
- 对白、潜台词、幽默、动作、停顿、句尾、排版规则不动。

### 新增：视角确认门

- 默认：第一人称亲历。
- 若旁观 / 听说明显更自然、更有戏或更符合真实性边界，可提出建议。
- 旁观 / 听说不得自动采用；必须先由 Owner 确认，再锁 StoryPremise。
- 未确认时继续默认亲历。

已做视角回归：
- 外卖配送：旁观；
- 手机翻译：听说。
两者只用于验证视角差异，没有成为新的叙事类型。

### 新增：SRT 下游最小合同

核心原则：
- 语义节拍单元、TTS 单元、字幕单元不再视为同一层；允许一对多 / 多对一。
- 计划 SRT 只用于规划；最终 SRT 以真实 TTS / 对齐结果为准。
- 字幕切分优先：完整意义 > 对话轮次 > 戏剧落点 > 阅读长度 > 标点。
- 禁止拆词、孤立标点 / 引导词、普通信息连续碎切。
- 极短字幕只用于明确包袱、反转、反应或强调。
- 语音结束、字幕结束、静默 / 节拍窗口分开。
- 最终字幕必须做专项 QA。

该补充只定义 Part 2 向后续时间轴模块的合同，不把最终 SRT 时间戳控制权交给 Writer。

## 回归 Case

当前用于判断 Part 2 的样本包括：
- 历史酸菜肉丝面稿：高质量参考，不是唯一模板；
- 天气预报：默认亲历；
- 睡眠手表：默认亲历；
- 酒店价格：默认亲历；
- 外卖配送：旁观测试；
- 手机翻译：听说测试。

当前结论：
- 原核心故事骨架继续有效；
- 暂无证据支持大改 Part 2；
- 主要新发现是“视角入口”可降低长期重复感，以及旧 SRT 层缺少独立字幕编译合同。

## 备份

Part 2 原相关 / 疑似相关材料共 **50 份**，保存在：
`source-snapshots/02-script-narrative/`

原样快照继续保留，不删除。

## Part 3 — 分镜与视觉导演

当前已完成：**源材料收集 / 原样备份 / 反向漏检 + 完整合并基线**。

备份目录：
`source-snapshots/03-storyboard-visual-director/`

当前共 **146 份**源文件副本，分为：
- direct：25；
- cases：63；
- historical：6；
- boundary：47；
- evidence：5。

覆盖：
- G4 Director / Shot Compiler 正式规则；
- 视角语法、Semantic Shot、Visual Beat、分镜拆解；
- Frame Blueprint 与视觉风格；
- 早期 Agent / Context-Memory / MCP G4 Case；
- G4R v0.3 三组已知 Case + Blind Search Answer 完整验证；
- G5 完整下游边界，用于防止简化时破坏资产接口；
- 2026-09-26 Story Event Frame Patch 及最新执行证据；
- portable Story Showrunner 的 Director / Viewpoint / Frame / schema / QA 合同。

这些快照均为备份，不参与运行；G5、执行、资产内容只作为边界证据，不自动升级为 Part 3 规则。

Part 3 当前唯一正式合并基线：
`part3/STORYBOARD_VISUAL_DIRECTOR.md`

合并原则：
- 当前先完整，不做极简；
- 2026-09-26 之后的 Owner 明确覆盖规则优先于旧 Candidate；
- Semantic Shot / Visual Beat、POV、Story Event Gate、Frame Blueprint、Beat economy、整集视觉多样性与 Part 4 边界均已纳入；
- 历史固定秒数、固定图片数量、抽象解释图、POST_OVERLAY、COMPOSITE_CROP 等被后续规则覆盖的行为只保留在历史快照中。

## 当前停止点

`PART3_MERGED_BASELINE_READY / SIMPLIFICATION_PENDING_OWNER`

下一步：
1. Owner 先阅读 / 确认 Part 3 合并基线；
2. 再逐组决定保留 / 合并 / 修改 / 降级 / 删除；
3. 每次只改一小组规则；
4. 每轮用旧 Case + 新 Case 回归；
5. 146 份快照始终保留。

## 安全边界

- 不修改原 `ai-story-showrunner`；
- 不修改原 `story-showrunner`；
- 不因 Part 3 改写已确认的 Part 0 / Part 1 / Part 2；
- 不删除原始快照；
- 本文件是 `comic-narrative` 唯一交接文档。
