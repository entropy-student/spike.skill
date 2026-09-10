---
name: short-form-spoken-script
title: Short-Form Spoken Script（短视频口播脚本）
description: 面向抖音、小红书视频、TikTok、Reels、YouTube Shorts 等短视频的口播逐字稿创作与改稿 Skill。把主题、素材或观点先压缩成单一内容承诺，再设计诚实的停滑与留存结构，最后进行中文口语化、出声质检与可选/默认 SRT 派生交付。用户可指定口播语速；未指定时中文默认按 4.8 个可朗读字符/秒规划篇幅与 SRT 时间轴。口播稿模板保持标题、最佳 Hook、正文续接、长度/语速/时长不变；另行生成独立 UTF-8 SRT 文件。Hook 作为正式口播第一段只出现一次，正文与 SRT 都不得重复。不得为了“爆款感”编造事实、夸大承诺或让语言润色破坏前序内容结构。
version: 0.1.3
language: zh-CN
---

# Short-Form Spoken Script（短视频口播脚本）

## 0. 目标

把一个主题、素材包、研究结果、产品分析或已有草稿，变成一篇：

> **前几秒值得继续听、中间持续有新信息、结尾兑现开头承诺，而且真实的人能顺口说出来的短视频口播逐字稿。**

在 Script Lock 之后，再从同一份确认稿派生一个遵循同一语速前置条件的标准 SRT 字幕文件。

本 Skill 默认不做正式分镜、动画、B-roll、配音、封面或发布。SRT 只是从锁定口播稿派生的时间轴字幕，不等同于真实音频对齐；如果已有真实录音或 TTS，应以真实音频对齐结果覆盖字符估算时间轴。

## 1. 核心原则

1. **One video, one promise.** 一条短视频只承担一个主承诺和一个主要 takeaway。
2. **Hook must be earned.** 开头承诺必须由正文和结尾真实兑现，不允许标题党式 bait-and-switch。
3. **Progress, not repetition.** 每个 beat 必须增加新事实、新动作、新区别、新后果或推进判断；换说法不算推进。
4. **Evidence before confidence.** 数字、新闻、产品能力、案例和因果判断需要依据；没有证据就降低措辞强度或研究后再写。
5. **Structure before style.** 先把留存结构写对，再做人话化；语言层不得擅自重排 Hook、证据顺序、Payoff 或 CTA。
6. **Write for the ear.** 口播是给耳朵听的，不是给眼睛读的。句子要能一口气说清，新名词第一次说全，代词必须有明确指向。
7. **Speaking rate is an input.** 用户指定语速优先；未指定时中文默认 `4.8 spoken characters/second`。目标篇幅和估算 SRT 时间轴必须使用同一语速来源。
8. **Hook appears once.** 最佳 Hook 就是正式口播的第一段。默认交付中单独展示 Hook 后，正文必须从 Hook 结束处继续，禁止再次复制或改写同一个 Hook。SRT 也只能出现一次 Hook。
9. **SRT is derived, not rewritten.** SRT 只能切分锁定后的 `Hook + 正文续接` 并生成时间码，不得为了字幕重新改写、删句、补句或改变信息顺序。
10. **No fake virality.** 不保证“必爆”、不虚构平台规律、不把未经核验的经验数字写成事实。
11. **No mandatory gimmicks.** 不强制反转、争议、夸张、网络黑话、悬念或循环结尾；只有在内容本身支持时才使用。
12. **Final script stays clean.** 默认最终口播稿不夹导演指令、括号表演说明、镜头提示和分析注释；SRT 只包含标准字幕序号、时间码与正文。
13. **Measure with reality.** 真实发布后的停留、完播、跳出、评论质量，以及真实音频时长用于后续校准，不能用写作规则或字符模型代替真实测试。

## 2. Intake Gate

优先从当前对话直接读取，不重复询问。只有会实质改变稿件时才补问，默认最多 4 个问题：

1. **主题 / 素材**：要讲什么？已有材料、链接、研究或草稿是什么？
2. **平台 + 时长 + 语速**：抖音 / 小红书视频 / TikTok / Reels / Shorts；目标约多少秒？用户是否指定口播语速？若未指定且为中文口播，默认 `4.8 个可朗读字符/秒`。
3. **受众 + 目标**：主要讲给谁？希望看完后理解、评论、关注、点击还是购买？
4. **说话位置**：本人经验、资料解读、产品评测、教程、观点还是故事？是否有必须保留的判断/证据？

SRT 不增加新的必填前置问题。除非用户明确不要，否则标准完成稿同时派生 SRT；如果用户已有真实音频并要求精确字幕，则应改走真实音频对齐，而不是继续使用字符估算。

如果用户明确说“你决定”，可自行设定合理默认值并声明，不继续追问。现实题材缺关键事实时：能公开研究就先研究；依赖用户私人经历而用户没有提供时，不得代编亲历。

### Timing Contract

正式写稿前内部计算：

`target_spoken_chars = target_seconds × speaking_rate_cps`

规则：
- 用户/真人实测语速优先；
- 用户明确指定 `speaking_rate_cps` 时直接使用；
- 中文未指定时默认 `4.8`；
- 默认目标区间为理论字量的约 `±5%`，除非用户要求更严格；
- 中文汉字按一个可朗读字符计；标点、Markdown、空白不计入口播字量；
- 数字、英文缩写、英文单词按实际朗读占用做近似换算，不能仅按键盘字符数机械计算；
- Hook 和正文续接共同构成一条完整口播，只合计一次；
- SRT 每段估算时长使用同一个 `speaking_rate_cps`；
- 真正音频实测优先于任何字符模型。

例如：`120 秒 × 4.8 ≈ 576`，因此两分钟中文口播默认以约 576 个可朗读字符为中心规划；随后 SRT 也按 `4.8 chars/s` 对各字幕块估算时间，不得另用一套固定速度。

详见 `references/01_CONTENT_CONTRACT.md`、`references/04_ORAL_QA.md`、`references/05_SRT_TIMING.md`。

## 3. 四阶段口播流水线

### Stage A — Content Contract

内部锁定：`Audience / Trigger / Promise / Takeaway / Proof / Action / Target Seconds / Speaking Rate / Target Spoken Chars`。如果无法用一句话写清 Promise，先缩题。

### Stage B — Retention Architecture

先生成 3–5 个真正不同的 Hook，内部比较后选择一个最佳版本。优先来自具体结果、强相关问题、明确代价/误区、受众正在经历的场景、有证据的反常识或真实冲突。禁止空泛问候、自我介绍、无关铺垫、虚假数字和无法兑现的夸张承诺。

正文按：`HOOK → ORIENTATION → PROGRESSION → PAYOFF → CTA/END`。背景只保留理解后文的最低限度；每段必须推进；Payoff 明确兑现 Hook；CTA 只保留一个自然动作，没有合理 CTA 时可以干净结束。

最佳 Hook 一旦锁定，它就是最终正式口播的第一段。内部可以保留完整结构稿用于推演，但最终展示时必须拆成 `最佳 Hook + 正文续接`，其中正文续接从 Hook 之后的第一句开始。

在进入 Spoken Rewrite 前检查预计总字量是否落在 Timing Contract 附近。超长优先删背景、重复、弱例子和次要分支；过短则补最有证明力的信息，不用空话填时长。

详见 `references/02_RETENTION_ARCHITECTURE.md`。

### Stage C — Spoken Rewrite

锁定 Stage B 后才口语化。以下为 Structural Invariants，不得静默改变：Hook 核心承诺、主结论、关键事实/数字、证据顺序、Payoff、CTA 功能。

口语化重点：书面长句拆成自然呼吸单位；报告腔改成具体主语+动作；新术语第一次出现时顺手解释；减少层层编号、抽象总结和机械排比；允许自然补充/停顿/自我修正但不表演口语感；删除无信息路标；不主动添加网络黑话、粗口、错别字或假口头禅；现实资料不改写成“我亲眼见过”。

语言自然化之后必须重新检查字符预算；不能因为润色增加大量口头填充词导致超时。最终切分 `Hook / 正文续接` 时不得为衔接方便重复 Hook 的最后一句；需要过渡时，直接从新信息继续推进。

详见 `references/03_SPOKEN_REWRITE.md`。

### Stage D — Oral QA

必须检查：First-breath、Breath、Pronoun、Progress、Promise、Mouth、Timing、Claim、Hook Duplication。

Timing 使用优先级：
1. 用户/真人实测语速；
2. 用户明确指定语速；
3. 中文默认 `4.8 个可朗读字符/秒`；
4. 其他语言或无法合理换算时标 `ESTIMATED` 并说明假设。

字符模型只是计划工具。已有成品音频时，以音频真实时长为准。

Hook Duplication 必须检查：把 `最佳 Hook` 与 `正文续接` 首段连起来朗读，确认没有逐字重复、同义重复或再次自我介绍；总字量只计算这条连续口播一次。

详见 `references/04_ORAL_QA.md`。

## 4. SRT Derivation

只有在 Stage D 通过并完成 Script Lock 后才生成 SRT。

输入固定为：

`locked_spoken_text = Best Hook + Body Continuation`

执行规则：
- 不改口播稿任何文字，只做语义/呼吸切分；
- Hook 从 `00:00:00,000` 开始，只出现一次；
- 每段时间约为 `segment_spoken_chars / speaking_rate_cps`；
- 优先按完整小意思切块，默认尽量约 1.5–4 秒一块；
- 时间码连续、不重叠、不倒退；
- 使用标准 `HH:MM:SS,mmm --> HH:MM:SS,mmm`；
- 输出独立 UTF-8 `.srt` 文件，不把标题、语速说明或 Markdown 混进文件正文；
- SRT 最后结束时间应与口播稿预计总时长合理一致；
- 若已有真实录音/TTS/字词级时间码，以真实对齐结果覆盖估算时间轴。

生成后必须做 Script↔SRT 一致性检查：SRT 合并后的文字应与 `Best Hook + Body Continuation` 内容一致，不漏句、不重复句、不新增句。

详见 `references/05_SRT_TIMING.md`，格式见 `templates/srt_delivery.md`。

## 5. 内容类型路由

- `EXPLAINER`：问题/现象 → 核心解释 → 证据/例子 → 意义；
- `OPINION`：具体争议 → 判断 → 最强理由 → 反方边界 → 结论；
- `TUTORIAL`：结果 → 前置条件 → 最短依赖步骤 → 易错点 → 可见完成标准；
- `REVIEW`：为什么测 → 真实任务 → 表现/限制 → 适合谁；
- `STORY`：变化/冲突 → 必要背景 → 事件推进 → 结果/理解；
- `PRODUCT_BUSINESS`：发生了什么 → 普通人为什么关心 → 机制 → 限制/未知 → 判断；
- `PROMOTIONAL`：真实问题 → 可证明的价值 → 适用对象/限制 → 单一行动。

## 6. 平台适配

抖音/TikTok/Reels/Shorts 更快进入主题、减少铺垫；小红书视频同时考虑搜索/收藏价值，允许稍多上下文，但开头仍需立刻说明“为什么与你有关”。平台算法或推荐规则如果成为结论依据，应使用当前可核验资料，不写死会过期的万能公式。

## 7. 默认最终输出

口播稿模板**保持不变**，仍使用 `templates/final_delivery.md`：

1. **标题 / 选题名**
2. **最佳 Hook** —— 正式口播第一段，只出现一次
3. **正文续接** —— 从 Hook 后直接继续，禁止再次重复 Hook
4. **可朗读字符/字数 + 使用语速 + 预计时长** —— 按 `Hook + 正文续接` 合计一次

展示顺序固定为：`标题 → 最佳 Hook → 正文续接 → 长度/语速/时长`。必须明确提示：Hook 已包含在正式口播开头，朗读时不需要再说第二遍。

在上述口播稿之外，标准完成稿另行交付：

5. **独立 SRT 文件** —— 由同一份 `Hook + 正文续接` 派生，时间轴遵循同一前置语速。使用 `templates/srt_delivery.md`。

时长说明必须注明采用的语速来源，例如：`4.8 chars/s (DEFAULT)`、`5.2 chars/s (USER)` 或 `4.6 chars/s (MEASURED)`。SRT 同样继承这一来源。

需要实验时可追加 Hook Variants；只有用户明确要求审稿/A-B 实验时，才追加 Content Contract、Hook 淘汰理由、Retention Map、Oral QA 和可验证假设。

## 8. 下游边界

默认交付后形成两个并行产物：

`Locked Spoken Script + Estimated/Aligned SRT`

推荐交接：

`Short-Form Spoken Script → Voice/TTS → real audio alignment (if available) → TalkCraft / Director Layer → production`

本 Skill 不承担正式分镜、Motion Design、B-roll 搜集与授权、配音、封面、发布或流量结果保证。没有真实音频时生成的是**基于语速模型的估算 SRT**；它可以直接用于预排字幕和制作，但不能冒充字词级真实音频对齐。

## 9. Definition of Done

必须满足：一个清晰受众、一个 Promise、一个 Takeaway；Hook 具体诚实且可兑现；每个主要段落有推进；现实信息有证据或降低措辞强度；口语化不破坏结构性不变量；Hook 在最终交付中只出现一次且正文自然续接；全文按 `Hook + 正文续接` 连起来可直接朗读；通过 Mouth/Breath/Pronoun/Promise/Timing/Claim/Hook Duplication 测试；目标字量与时长/语速契约基本一致；口播稿模板保持不变；SRT 与锁定口播稿文字一致且使用同一语速来源，时间码合法、连续、不重复 Hook。

## 10. Calibration Rule

当前状态 `Calibrating`。真实发布后：前段快速跳出优先检查 Hook/兑现速度；中段掉速检查重复/背景/证据出现过晚；完播不错但无互动检查 takeaway/CTA；评论质疑事实检查 Claim/Evidence；看着好但说不顺检查 Spoken Rewrite/Oral QA；真实口播时长持续偏离字符模型时，优先更新实测 speaking rate，而不是硬改内容规则；SRT 与真实声音持续错位时，优先使用真实音频对齐，不通过篡改口播文字解决。不要因单条视频表现不好就重写全部规则。
