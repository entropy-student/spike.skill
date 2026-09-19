<div align="center">

# 🎞️ Jingsui Story Video Director（景岁式故事漫画视频导演）

### 第一人称故事口播 → SRT → Visual Beat → 漫画分镜 → 生图计划

**基于多条真实音频与完整视频样本校准，沉淀“具体人物/事件 → 自嘲与梗链 → 观点后置 → 极简漫画视觉”的单人视频生产方法。**

[简体中文](./README.md) · [English](./README_EN.md) · [完整 Skill 规则](./SKILL.md)

![Version](https://img.shields.io/badge/version-v3.4.0-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-CALIBRATING-orange?style=flat-square)

</div>

> [!NOTE]
> 该 Skill 学习的是叙事结构、口播节奏、幽默机制、视觉语义与制作工程规则。正式生产使用原创 IP，不复制参考创作者的角色、原句、现成段子或既有镜头。

## 当前状态

- 3 条真实旁白已用于语速、句法、幽默、开头和结尾校准；
- 3 条完整 MP4 已用于 visual beat、白底比例、镜头密度和资产复用校准；
- V3.4 已完成“具体人物承载抽象主题、观点后置、梗母题集中、结尾去攻略化”；
- 当前状态为 **Calibrating**：文案大框架可冻结，正在进入第一条正式分镜 / 生图生产验证。

## 最快调用

```text
按 Jingsui Story Video Director v3.4 做这个选题：
“关于我特别羡慕高精力人群这件事”。

先生成完整口播稿与 provisional SRT，
再按 Visual Beat 拆分镜头；
不要一句话配一张图，不要 PPT 风格；
正式输出使用我的原创男性 IP。
```

## 生产链

```text
主题
↓
具体人物 / 具体事件
↓
口播稿
↓
SRT
↓
Visual Beat
↓
Scene / Character Bible
↓
生图 Prompt
↓
剪辑计划
↓
QA
```

## V3.4 的关键变化

1. 抽象主题优先挂到一个具体人物或具体事件；
2. 核心观点默认后置到全文约 50–60% 后；
3. 一篇只保留 1–2 个主梗母题，并形成连续梗链；
4. 删除“很多普通人的问题是……”等概念化演讲腔；
5. 结尾继续回到 narrator 本人，不突然变成建议清单；
6. 英文尾签允许轻微直译感，不润色成广告 slogan。

## 文件结构

```text
jingsui-story-video-director/
├── README.md
├── README_EN.md
├── SKILL.md
├── metadata.yml
├── CHANGELOG_V3_4.md
├── references/
│   ├── CALIBRATION_PROFILE.md
│   ├── CONTENT_DNA.md
│   ├── HUMOR_ENGINE.md
│   ├── IMAGE_GENERATION_PROTOCOL.md
│   ├── LANGUAGE_PATTERN_PROFILE.md
│   ├── QUALITY_GATES.md
│   ├── SCRIPT_ENGINE.md
│   ├── SHOT_GRAMMAR.md
│   ├── SIGNATURE_LAYER.md
│   ├── VIDEO_CALIBRATION_PROFILE.md
│   ├── VISUAL_IP_BIBLE.md
│   └── VOICE_SRT.md
└── examples/
    ├── HIGH_ENERGY_TEST_V3_4_SCRIPT.md
    └── HIGH_ENERGY_TEST_V3_4.srt
```

## 当前基线

**V3.4.0 / Calibrating**

下一验证目标：用 V3.4 完整跑通《高精力人群》的正式 Shotlist → 生图 → 剪辑，并根据成片反例决定是否升级 V3.5。
