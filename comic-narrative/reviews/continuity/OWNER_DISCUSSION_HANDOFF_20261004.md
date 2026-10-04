# Owner 对话续接交接 — 2026-10-04

> 性质：Owner 明确要求把本轮长对话的有效结论整理进 GitHub `main`，用于下一个 Reviewer 无缝续接。
>
> 边界：**本文件不是 Part 0–4.5 的正式规则修改**。本轮不修改 `SKILL.md`、`part0/`–`part4_5/` 的现行正文；需要正式落规则时，下一轮再按 Owner 决策处理。

## 1. 当前续接优先级

下一轮优先继续讨论：

1. **选题标题层与内部 WHY 题面的分离**；
2. 如何避免账号选题滑向“科技科普 / 十万个为什么”；
3. 调研短视频标题、Hook、标题生成 Skill / 开源项目 / 创作者方法，只提炼可迁移核心思想；
4. 判断哪些能力值得加入 Part 1，哪些只作为可选标题编译层；
5. 正式修改前先给 Owner 看最小改动方案。

当前只形成讨论结论，**尚未获得 Owner 对 Part 1 正式修改的授权**。

## 2. 选题库与标题问题：当前讨论结论

当前 `part0/TOPIC_LIBRARY.md` 有 23 个 PASS 选题。

复查发现，现行 Part 1 的内部选题路径明确使用：

`Human Process → 反常（本来应该 A，为什么却 B）→ WHY → Human Tension → mechanism`

这套结构适合作为**内部选题研究 / Gate**，但当前很多最终题面也直接沿用了“为什么 X，却 Y”的形式，导致两个问题：

- 标题句式高度同质；
- 一部分机制型题目容易在发布层呈现成“科技原理科普”。

当前 Owner 对“内部选题问题 ≠ 社交媒体发布标题”的区分表示认可，示例方向包括：

- 内部 WHY：用于证明反常、机制和内容价值；
- 发布标题：可以使用故事型、判断型、现象型，不要求必须带“为什么”。

示例（仅讨论样例，未写入正式题库）：

- H003 内部题面：`食谱都精确到克了，为什么还是做不出奶奶那个味？`
- 发布标题方向：`我把奶奶的食谱精确到了克，结果还是做不出那个味`

- H004 内部题面：`吵架时让人工智能帮你回消息，到底是在帮你沟通，还是帮你绕开问题？`
- 发布标题方向：`我试着让 AI 帮我处理每一次吵架，后来出了一个更大的问题`

高“科普化”风险候选当前初步包括 H015、H017、H020、H021、H022；H016、H023 为中等风险。这个判断仍属于讨论，不是正式降级或退库。

## 3. H003 / H004 本轮测试状态

Owner 早先要求：测试内容不写入正式项目文档，除非明确授权。本文件只记录本轮 Owner 已授权整理的**状态摘要**，不提交完整测试脚本 / 分镜 / ZIP。

### H003｜家庭食谱

已在对话工作区推进到可交生图 Executor 的图片执行包阶段：

- 2 个物理功能空间；
- 9 个剧情 Scene；
- 55 个 Visual Beat；
- 原开头约 8.5 秒长 hold 已拆成两个 Beat；
- 奶奶作为高频 episode-local recurring character，增加 Mini Master 前置任务；
- Part 4 / 4.5 / imagegen 执行合同已按当前规则做跨模块复查；
- Part 2.5 仍使用 Owner 明确允许的“同源预估 SRT”测试例外，不宣称正式真实音频对齐。

### H004｜恋爱冲突

已按同样思路推进到图片执行包阶段：

- 3 个功能空间；
- 10 个剧情 Scene；
- 56 个 Visual Beat；
- 伴侣作为高频 episode-local recurring character，增加 Mini Master 前置任务；
- Part 4 / 4.5 / imagegen 执行合同已按当前规则做跨模块复查；
- 同样沿用 Owner 明确允许的预估 SRT 测试例外。

以上执行包目前不作为 GitHub canonical production package。

## 4. Owner 确认的“素材包批量产出四项补充复查”

Owner 明确要求后续批量生成素材包时固定关注以下四项：

1. **Scene System / 场景系统**
   - 不能只列物理空间；
   - 需要检查剧情 Scene / 状态阶段是否充分；
   - 不机械凑地点数。

2. **单图停留时长**
   - 不恢复固定秒数硬门；
   - 长 hold 必须人工复核；
   - 一张图若承载两个独立视觉意义，应拆 Beat。

3. **高频临时角色一致性**
   - 对单集高频、连续性重要、漂移风险高的临时角色，判断是否需要 episode-local Mini Master；
   - 一次性低连续性角色不强制建立。

4. **完成前跨模块整体复查**
   - 素材包认定完成前，重新对照当前项目要求；
   - 至少覆盖 Part 2/2.5、Part 3、Part 4、Part 4.5 与当前 imagegen 执行合同；
   - 不能只看图片数量和 Prompt 是否齐全。

单独清单见：
`reviews/continuity/MATERIAL_PACKAGE_FOUR_SUPPLEMENTAL_CHECKS_20261004.md`

这些是 Owner 已确认的后续批量素材包操作要求；**目前尚未并入 Part 3 / Part 4 正式正文**。

## 5. X 部分｜Owner 认定执行包

Owner 提出建立一个“X 部分”，用途是：

> 集中存放 Owner 已认定可交给执行 Agent 的最终执行包与执行提示词，后续持续追加更多选题。

本轮对话工作区已经按以下思路做过本地整理样例：

```text
X部分_OWNER认定执行包/
├─ README.md
├─ INDEX.json
├─ H003_家庭食谱/
│  ├─ 01_最终执行包/
│  ├─ 02_执行提示词/
│  └─ 03_补充说明/
└─ H004_恋爱冲突/
   ├─ 01_最终执行包/
   ├─ 02_执行提示词/
   └─ 03_补充说明/
```

当前只记录其**产品/目录意图**，不在本轮把大体积测试 ZIP 或测试正文提交仓库，也不把 X 部分直接写成正式生产主链。下一轮如要正式纳入仓库结构，应先决定：

- X 是正式 Part、辅助目录还是 Owner-approved package registry；
- 是否保存 ZIP binary，还是只保存 manifest / prompt / hash / release pointer；
- 新版本覆盖、保留与 supersede 规则；
- 与 Reviewer PASS、Owner 认定之间的权限关系。

## 6. 本轮特别纠正

此前曾把“Owner 明确提出并认可的四项补充点”和“Reviewer 按现行规则复查时顺手修正的执行细节”混在一起。

Owner 明确确认并要求未来遵循的只有上述四项。

以下内容虽然可能在 H003/H004 打包复查中被修过，但**不能描述成 Owner 逐条主动要求或逐条批准**：

- SRT 同源修复；
- `semantic_shots[].visual_beats[]` 结构整理；
- Asset Manifest；
- Part 4.5 检索；
- DERIVE_EDIT 收缩；
- output path / native-size 合同；
- Style Plate 防场景污染；
- dependency / fallback / QA 细节。

这些应归类为“执行当前 canonical 项目要求时的 Reviewer/Planner 修正”。

## 7. 下一对话推荐启动方式

下一 Reviewer 建议先读取：

1. `comic-narrative/REVIEWER_HANDOFF.md`
2. 本文件
3. `comic-narrative/reviews/continuity/MATERIAL_PACKAGE_FOUR_SUPPLEMENTAL_CHECKS_20261004.md`
4. 若继续标题讨论，再读取 `part1/TOPIC_STRATEGY.md` 与 `part0/TOPIC_LIBRARY.md`

然后继续：

> 调研“短视频标题 / Hook / 社交媒体发布标题”的成熟方法、Skill 或开源项目，提炼核心思想，并设计如何最小化接入当前 Part 1。先讨论，不直接修改正式规则。

## 8. 本轮仓库边界

- 不修改 Part 0–4.5 正式正文；
- 不修改 SKILL；
- 不提交 H003/H004 完整测试执行包；
- 只增加续接文档，并在根 `REVIEWER_HANDOFF.md` 添加入口指针；
- 提交目标必须是 `main`，不留在工作分支。
