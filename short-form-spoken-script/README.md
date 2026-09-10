<div align="center">

# 🎙️ Short-Form Spoken Script（短视频口播脚本）

### 先把短视频结构写对，再把它改成真人能顺口说出来的中文

**一个自包含的口播创作 Skill：内容承诺 → 留存结构 → 真人口语化 → 出声与时长质检。**

[简体中文](./README.md) · [English](./README_EN.md) · [完整执行规则](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1.1-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-Calibrating-yellow?style=flat-square)
![Focus](https://img.shields.io/badge/focus-Spoken%20Script-blueviolet?style=flat-square)

</div>

---

## 它解决什么问题？

很多 AI 口播稿会同时出现两类问题：结构没问题但不像人说话，或者说话自然但留不住人。这个 Skill 把两件事拆成两遍做，并在写稿前先锁定时长与语速：

```text
主题 / 素材
    ↓
Timing Contract
目标时长 × 口播语速 = 目标字量
    ↓
Content Contract
锁定受众、承诺、结论和证据
    ↓
Retention Architecture
Hook → 推进 → Payoff → CTA
    ↓
Spoken Rewrite
只改“怎么说”，不破坏前面结构
    ↓
Oral QA
按嘴、耳朵、事实和时长检查
    ↓
最终口播逐字稿
```

## 语速前置条件

用户可以直接指定自己的口播速度，例如 `5.2 字/秒`。如果是中文口播且用户没有指定，默认使用：

> **4.8 个可朗读字符 / 秒**

目标字量按：

```text
target_spoken_chars = target_seconds × speaking_rate_cps
```

例如：
- 45 秒 → 约 216 字符
- 60 秒 → 约 288 字符
- 120 秒 → 约 576 字符

默认允许约 ±5% 浮动。标点、Markdown 和空白不算口播字量；数字、英文缩写和英文单词按实际朗读占用近似。已有真人/音频实测时长时，以实测为准。

## 默认产出物

一轮标准调用只交付：

1. **标题 / 选题名**
2. **最佳 Hook**
3. **完整可直接朗读的口播逐字稿**
4. **可朗读字符/字数 + 使用语速 + 预计口播时长**

默认不把镜头、B-roll、导演提示混进口播正文。需要制作时，把锁定稿再交给 TalkCraft / Director Layer。

## 适合什么内容？

| 内容 | 支持 |
|---|---:|
| 知识解释 / 科普 | ✅ |
| 产品 / 商业解读 | ✅ |
| 观点 / 评论 | ✅ |
| 教程 / 方法 | ✅ |
| 评测 | ✅ |
| 故事 / 个人叙事 | ✅ |
| 产品推广 | ✅，但必须真实可证明 |
| 抖音 / 小红书视频 | ✅ |
| TikTok / Reels / Shorts | ✅ |

## 两层职责为什么必须分开？

第一层 Retention 负责这条视频只讲什么、为什么前几秒值得继续听、信息按什么顺序推进、开头承诺在哪里兑现、CTA 是否自然。

第二层 Spoken Rewrite 负责句子能不能一口气说完、有没有报告腔/模型腔、指代听不听得懂、专业词是否自然，以及纸面顺但嘴里拗的地方怎么改。第二层**禁止擅自改掉第一层的 Hook、证据、Payoff 和 CTA 功能**。

## 最快调用

```text
调用 Short-Form Spoken Script。
主题：为什么很多 AI 项目代码已经写完，却一直没有真正上线？
平台：抖音
时长：45 秒
语速：可选；不填则中文默认 4.8 字/秒
受众：正在用 Cursor / Codex / Claude Code 做产品的人
目标：完播 + 评论

先按时长和语速确定目标字量，再锁定一个核心承诺，设计留存结构；
最后只做中文口语化，不破坏 Hook、证据和 Payoff。
输出标题、最佳 Hook、完整逐字稿、字量、语速和预计时长。
```

如果只给一个主题也可以。Skill 只补问真正缺失且会改变结果的信息，默认最多 4 个问题；用户说“你决定”时直接采用合理默认值。

## Review / A-B 实验模式

需要研究为什么这么写时，可以要求保留 3 个 Hook 候选，并输出 Retention Map 和 Oral QA。标准使用时不输出内部过程，避免把最终稿搞成分析报告。

## 与视频制作的关系

```text
Short-Form Spoken Script
        ↓
最终口播逐字稿
        ↓
Voice / TTS
        ↓
Aligned Subtitles
        ↓
TalkCraft / Director Layer
        ↓
Video Production
```

本 Skill 不负责正式分镜、配音、字幕、动效、封面和发布。

## 方法来源

本 Skill 为 Spike Skill Library 的原创整合实现。设计时重点参考：

- [`social-media-skills/short-form-video-script`](https://github.com/social-media-skills/skills/tree/main/skills/short-form-video-script)：短视频留存、Hook/Payoff 与结构方法；
- [`KKKKhazix/human-writing`](https://github.com/KKKKhazix/human-writing)：中文自然写作、口播形式、材料与事实边界。

参考 Skill **不是运行时依赖**。具体吸收和重构方式见 [`RESEARCH_NOTES.md`](./RESEARCH_NOTES.md)。

## 目录

```text
short-form-spoken-script/
├── README.md
├── README_EN.md
├── SKILL.md
├── metadata.yml
├── RESEARCH_NOTES.md
├── references/
├── templates/
└── examples/
```

<div align="center">

### Structure earns attention. Language earns trust.

**先值得听，再像人说。**

</div>