---
name: short-form-spoken-script
title: Short-Form Spoken Script（短视频口播脚本）
description: 面向抖音、小红书视频、TikTok、Reels、YouTube Shorts 等短视频的口播逐字稿创作与改稿 Skill。把主题、素材或观点先压缩成单一内容承诺，再设计诚实的停滑与留存结构，最后进行中文口语化和出声质检。默认产出标题、最佳 Hook、完整可直接朗读的逐字稿、字数/字符数与预计时长。适合真人口播、旁白型短视频、产品/商业解读、知识分享、观点、教程、评测与故事。不得为了“爆款感”编造事实、夸大承诺或让语言润色破坏前序内容结构。
version: 0.1.0
language: zh-CN
---

# Short-Form Spoken Script（短视频口播脚本）

## 0. 目标

把一个主题、素材包、研究结果、产品分析或已有草稿，变成一篇：

> **前几秒值得继续听、中间持续有新信息、结尾兑现开头承诺，而且真实的人能顺口说出来的短视频口播逐字稿。**

本 Skill 只负责“口播稿本身”。默认不做正式分镜、动画、B-roll、配音、字幕、封面或发布；这些属于下游制作流程。

## 1. 核心原则

1. **One video, one promise.** 一条短视频只承担一个主承诺和一个主要 takeaway。
2. **Hook must be earned.** 开头承诺必须由正文和结尾真实兑现，不允许标题党式 bait-and-switch。
3. **Progress, not repetition.** 每个 beat 必须增加新事实、新动作、新区别、新后果或推进判断；换说法不算推进。
4. **Evidence before confidence.** 数字、新闻、产品能力、案例和因果判断需要依据；没有证据就降低措辞强度或研究后再写。
5. **Structure before style.** 先把留存结构写对，再做人话化；语言层不得擅自重排 Hook、证据顺序、Payoff 或 CTA。
6. **Write for the ear.** 口播是给耳朵听的，不是给眼睛读的。句子要能一口气说清，新名词第一次说全，代词必须有明确指向。
7. **No fake virality.** 不保证“必爆”、不虚构平台规律、不把未经核验的经验数字写成事实。
8. **No mandatory gimmicks.** 不强制反转、争议、夸张、网络黑话、悬念或循环结尾；只有在内容本身支持时才使用。
9. **Final script stays clean.** 默认最终逐字稿不夹导演指令、括号表演说明、镜头提示和分析注释。
10. **Measure with reality.** 真实发布后的停留、完播、跳出、评论质量等数据用于后续校准，不能用写作规则代替真实测试。

## 2. Intake Gate

优先从当前对话直接读取，不重复询问。只有会实质改变稿件时才补问，默认最多 4 个问题：

1. **主题 / 素材**：要讲什么？已有材料、链接、研究或草稿是什么？
2. **平台 + 时长**：抖音 / 小红书视频 / TikTok / Reels / Shorts；目标约多少秒？
3. **受众 + 目标**：主要讲给谁？希望看完后理解、评论、关注、点击还是购买？
4. **说话位置**：本人经验、资料解读、产品评测、教程、观点还是故事？是否有必须保留的判断/证据？

如果用户明确说“你决定”，可自行设定合理默认值并声明，不继续追问。现实题材缺关键事实时：能公开研究就先研究；依赖用户私人经历而用户没有提供时，不得代编亲历。

详见 `references/01_CONTENT_CONTRACT.md`。

## 3. 四阶段流水线

### Stage A — Content Contract

内部锁定：`Audience / Trigger / Promise / Takeaway / Proof / Action`。如果无法用一句话写清 Promise，先缩题。

### Stage B — Retention Architecture

先生成 3–5 个真正不同的 Hook，内部比较后选择一个最佳版本。优先来自具体结果、强相关问题、明确代价/误区、受众正在经历的场景、有证据的反常识或真实冲突。禁止空泛问候、自我介绍、无关铺垫、虚假数字和无法兑现的夸张承诺。

正文按：`HOOK → ORIENTATION → PROGRESSION → PAYOFF → CTA/END`。背景只保留理解后文的最低限度；每段必须推进；Payoff 明确兑现 Hook；CTA 只保留一个自然动作，没有合理 CTA 时可以干净结束。

详见 `references/02_RETENTION_ARCHITECTURE.md`。

### Stage C — Spoken Rewrite

锁定 Stage B 后才口语化。以下为 Structural Invariants，不得静默改变：Hook 核心承诺、主结论、关键事实/数字、证据顺序、Payoff、CTA 功能。

口语化重点：书面长句拆成自然呼吸单位；报告腔改成具体主语+动作；新术语第一次出现时顺手解释；减少层层编号、抽象总结和机械排比；允许自然补充/停顿/自我修正但不表演口语感；删除无信息路标；不主动添加网络黑话、粗口、错别字或假口头禅；现实资料不改写成“我亲眼见过”。

详见 `references/03_SPOKEN_REWRITE.md`。

### Stage D — Oral QA

必须检查：First-breath、Breath、Pronoun、Progress、Promise、Mouth、Timing、Claim。没有用户真实语速时只能给 `ESTIMATED` 时长，不冒充精确音频时长。

详见 `references/04_ORAL_QA.md`。

## 4. 内容类型路由

- `EXPLAINER`：问题/现象 → 核心解释 → 证据/例子 → 意义；
- `OPINION`：具体争议 → 判断 → 最强理由 → 反方边界 → 结论；
- `TUTORIAL`：结果 → 前置条件 → 最短依赖步骤 → 易错点 → 可见完成标准；
- `REVIEW`：为什么测 → 真实任务 → 表现/限制 → 适合谁；
- `STORY`：变化/冲突 → 必要背景 → 事件推进 → 结果/理解；
- `PRODUCT_BUSINESS`：发生了什么 → 普通人为什么关心 → 机制 → 限制/未知 → 判断；
- `PROMOTIONAL`：真实问题 → 可证明的价值 → 适用对象/限制 → 单一行动。

## 5. 平台适配

抖音/TikTok/Reels/Shorts 更快进入主题、减少铺垫；小红书视频同时考虑搜索/收藏价值，允许稍多上下文，但开头仍需立刻说明“为什么与你有关”。平台算法或推荐规则如果成为结论依据，应使用当前可核验资料，不写死会过期的万能公式。

## 6. 默认最终输出

标准调用只交付：

1. **标题 / 选题名**
2. **最佳 Hook**
3. **完整口播逐字稿**
4. **字符/字数 + 预计时长**（无实测语速时标 `ESTIMATED`）

需要实验时可追加 Hook Variants；只有用户明确要求审稿/A-B 实验时，才追加 Content Contract、Hook 淘汰理由、Retention Map、Oral QA 和可验证假设。

使用 `templates/final_delivery.md`；调试时使用 `templates/review_mode.md`。

## 7. 下游边界

默认交付后停止在 Script Lock。推荐交接：

`Short-Form Spoken Script → Voice/TTS → aligned subtitles → TalkCraft / Director Layer → production`

本 Skill 不承担正式分镜、Motion Design、B-roll 搜集与授权、配音、字幕对齐、封面、发布或流量结果保证。

## 8. Definition of Done

必须满足：一个清晰受众、一个 Promise、一个 Takeaway；Hook 具体诚实且可兑现；每个主要段落有推进；现实信息有证据或降低措辞强度；口语化不破坏结构性不变量；全文可直接朗读；通过 Mouth/Breath/Pronoun/Promise/Timing/Claim 测试；默认最终只交付四项。

## 9. Calibration Rule

当前状态 `Calibrating`。真实发布后：前段快速跳出优先检查 Hook/兑现速度；中段掉速检查重复/背景/证据出现过晚；完播不错但无互动检查 takeaway/CTA；评论质疑事实检查 Claim/Evidence；看着好但说不顺检查 Spoken Rewrite/Oral QA。不要因单条视频表现不好就重写全部规则。