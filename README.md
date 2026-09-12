<div align="center">

# 🧩 Spike Skill Library（Spike 技能库）

### 一组面向真实任务的可复用 AI Skills

**不是 Prompt 收藏夹，而是把判断标准、证据规则、执行循环和输出格式沉淀成可以重复调用的 Skill。**

![Skills](https://img.shields.io/badge/skills-12-blue?style=flat-square)
![Language](https://img.shields.io/badge/language-中文%20%2B%20English-success?style=flat-square)
![Status](https://img.shields.io/badge/status-active-orange?style=flat-square)

</div>

---

> ⭐ **Featured / Core Skill：** [VPS Project Governance（VPS 项目管理规范）](./vps-project-governance/) — 用 Reviewer / Executor / Evidence / PASS-RETURN 治理 VPS、Docker、Shared VPS 与生产变更。

## 当前 Skills

| Skill | 主要解决什么问题 | 状态 | 入口 |
|---|---|---:|---|
| ⭐ **VPS Project Governance（VPS 项目管理规范）** | 把新项目接管、VPS/Shared VPS 部署、生产变更、Evidence、回滚、Secret、资源与 Owner 介入时机统一成可复用的 Reviewer / Executor 治理闭环 | **v0.1.6 Active / Validated** | [进入](./vps-project-governance/) |
| 📈 **Acquisition Growth Radar（获客增长雷达）** | 判断项目为什么还没挣到钱、当前卡在哪层证据、下一步最值得验证什么 | v0.2 Frozen | [进入](./acquisition-growth-radar/) |
| 🧭 **Independent Store Product Opportunity（独立站选品决策系统）** | 从实物、虚拟与 SaaS 候选中区分发现信号与决策证据，筛出最值得真实验证的 DTC 产品机会 | **v2.1.0 Active** | [进入](./independent-store-product-opportunity/) |
| 🔬 **Product Business Teardown（产品商业拆解）** | 拆解任意产品服务谁、为什么存在、谁付钱、赚哪部分钱、整体运行逻辑、增长机制与护城河 | **v0.2.0 Calibrating** | [进入](./product-business-teardown/) |
| 🎙️ **Short-Form Spoken Script（短视频口播脚本）** | 先锁定单一内容承诺和短视频留存结构，再做中文口语化、时长与出声质检；Hook 只出现一次，并按同一语速派生独立 SRT | **v0.1.3 Calibrating** | [进入](./short-form-spoken-script/) |
| 🎯 **Entertainment Rander（娱乐热梗雷达）** | 区分普通热点、模仿型热梗与真正能持续增殖的互联网梗文化 | Active | [进入](./entertainment-rander/) |
| 🎭 **Meme Music Router（热梗音乐路由器）** | Meme-first 创意编排：先锁热梗与作品名，再让图片与音乐围绕同一梗核做有趣放大 | **v0.4.1 Calibrating** | [进入](./meme-music-router/) |
| 🎧 **Music Quality Radar（音乐质量雷达）** | 不依赖复杂乐理，判断一首歌为什么好听、哪里普通、最值得怎么改 | Calibrating | [进入](./music-quality-radar/) |
| 🎵 **Music Trend Radar（音乐趋势雷达）** | 跨平台识别真正热门、正在爆发和具有持续传播能力的歌曲 | Active | [进入](./music-trend-radar/) |
| 🎬 **Narrative Motion Semantics（叙事动效语义库）** | 根据流程、时间、对比、因果语义选择信息拓扑、Template ID 与动效表达 | **Incomplete** | [进入](./narrative-motion-semantics/) |
| 🎥 **TalkCraft Design Orchestrator（TalkCraft 视觉编排器）** | 在不修改 video-talkcraft 的前提下增加视觉风格选择与 SHOTBOOK 素材确认，并可接入 awesome-design-md | **v1.0.0 Frozen** | [进入](./video-talkcraft-design-orchestrator/) |
| 🎞️ **Video Director Orchestrator（混合视频导演编排器）** | 组合 TalkCraft 与 Code Motion：先判画面角色、再选模板，用真实素材 + 原生动效 + Continuity / Handoff 统一成片 | **v0.1.0 Experimental** | [进入](./video-director-orchestrator/) |

---

## 这个仓库在做什么？

很多 AI 工作流的问题不是“模型不会回答”，而是：

- 每次回答标准不一致；
- 一换对话就丢失方法；
- 看起来分析很多，但不知道最后应该怎么决策；
- 有数据，却不知道这些数据到底能证明什么；
- 好的方法只存在于一次聊天里，无法复用。

这个仓库尝试把这些经验整理成 **Skill**：

```text
一个真实问题
    ↓
固定的判断框架
    ↓
明确的证据标准
    ↓
可重复的执行流程
    ↓
结构化输出
    ↓
继续校准
```

目标不是让 Skill 写得越来越长，而是让它在真实案例里越来越稳定。

---

## Skill 的基本结构

不同 Skill 会根据任务复杂度有所不同，但原则上采用：

```text
skill-name/
├── README.md        # 给人看的介绍与最快用法
├── README_EN.md     # 英文介绍（如有）
├── SKILL.md         # 给 AI 执行的核心规则
├── metadata.yml     # 统一展示名称等元信息
├── references/      # 深入规则 / 方法论（需要时加载）
├── templates/       # 可重复使用的记录与执行模板
├── examples/        # 示例与校准样本
└── assets/          # 图片等展示资源（如有）
```

不是所有 Skill 都必须包含全部目录。

---

## 命名规范

为了兼顾 GitHub 路径、工具调用和中文可读性：

- **文件夹 slug**：保持英文小写，例如 `music-quality-radar`；
- **展示名称**：统一采用 `English（中文）`；
- **README 标题 / SKILL 标题 / metadata.display_name**：尽量保持一致；
- 不因为展示需要去修改稳定的文件夹路径。

例如：

```text
slug: acquisition-growth-radar
display_name: Acquisition Growth Radar（获客增长雷达）
```

---

## 怎么使用

最简单的方式是进入对应 Skill，查看 `README.md` 的调用示例。

如果是让 AI 严格执行 Skill，则以各目录中的 `SKILL.md` 为准。

例如：

```text
按 VPS Project Governance v0.1.6 接管这个项目。
先读现有 Handoff；没有可靠 Handoff 就进入只读 P0 Discovery。
能安全合并的 Gate 自行压缩，已 PASS 的阶段不要重复跑；
除 Owner-only 事项外，技术判断由 Reviewer 自行完成。
```

```text
按 Acquisition Growth Radar 帮我判断这个项目现在卡在哪里，
不要先给一堆渠道建议，先找最大瓶颈和最小验证实验。
```

```text
按 Independent Store Product Opportunity 帮我从零选一个独立站产品。
正式筛选前先只问我真正会影响结果的条件；
不要把趋势或销量直接当结论，最后只给最值得真实测试的机会、关键未知项和最小验证方案。
```

```text
按 Product Business Teardown 拆解这个产品。
无论它是大公司产品还是一个单一小商品/SKU，都先从合适的分析单位开始；
告诉我它服务谁、用户为什么需要、为什么会有这个产品、谁付钱、真正赚哪部分钱、整体运行逻辑和最难复制的部分；
真实产品要区分 FACT / INFERENCE / UNKNOWN，不要编造卖家利润。
```

```text
按 Short-Form Spoken Script 写一条 45 秒口播。
先按目标时长和语速确定字量；中文未指定语速时默认 4.8 字/秒。
再锁定一个核心承诺和最佳 Hook，按留存逻辑推进；
最后只做中文口语化，不破坏 Hook、证据、Payoff 和 CTA。
默认输出标题、最佳 Hook、正文续接、字量、使用语速和预计时长。
Hook 只出现一次，正文从 Hook 后直接继续；
同时生成一个遵循同一语速的独立 SRT 文件。
```

```text
按 Music Quality Radar 分析这首歌，
告诉我为什么好听/普通，最大优点、最大问题和最值得改的一处。
```

```text
按 Entertainment Rander 筛选最近真正值得关注的娱乐热梗，
不要把单纯热搜或播放量当成梗力。
```

```text
按 Meme Music Router v0.4.1 跑一期。
先现场调用 Entertainment Rander 找热梗并锁定 meme_core，
选题阶段就生成 episode_name 并锁定创意，
再判断哪种形式最能放大原梗；进入标准 Meme Music Episode 后固定交付：名称、带标题图片、歌词、旋律/曲风提示词。
```

```text
按 Narrative Motion Semantics 分析这段旁白，
先判断它主要属于流程、时间、对比还是因果，再选择 Template ID。
```

```text
按 TalkCraft Design Orchestrator 制作这条视频。
首次交互一次性收集当前 TalkCraft 必需输入并同步让我选择视觉风格；
SHOTBOOK 完成后先让我确认并提示哪些镜头适合补充自有素材；
除此之外严格执行当前 video-talkcraft。
```

```text
按 Video Director Orchestrator v0.1 制作这条视频。
先按当前 TalkCraft 完成时间锚、素材与 SHOTBOOK，再生成 DIRECTOR_PLAN；
每个 Beat 先决定 A-roll / B-roll / Evidence / Screen / Code Motion / Typography，再搜索模板；
Code Motion 现成模板保持原版风格，同一模板整片最多一个连续实例，并优先使用同一 Native Style Family；
把 SHOTBOOK、素材缺口、Style Family、模板候选和 Handoff 合成一次 Director Pack 让我确认。
```

---

## 设计原则

### 1. Evidence before conclusion

低等级信号不能越级证明高等级结论。

### 2. Explain the decision

Skill 不只给结果，还要说明为什么，以及为什么没有到更高等级。

### 3. Prefer operational rules

比起堆理论，更重视“下一步具体怎么做”。

### 4. Keep boundaries clear

一个 Skill 只解决自己擅长的问题，不悄悄接管其他系统的职责。

### 5. Calibrate with real cases

规则不是写完就永远正确。真实反例出现时，再升级 Skill。

---

## 当前方向

这个仓库目前主要沉淀五类能力：

- **工程交付与生产治理**：如何接管项目、定义 Gate、约束 Executor、验证 Evidence、保护 Shared Infra 与生产回滚；
- **商业与增长判断**：如何拆解产品、选品、验证、成交、增长；
- **内容与文化判断**：什么正在流行、什么真正优秀、为什么；
- **视觉叙事与语义表达**：信息关系应该用什么视觉拓扑和 Motion Grammar 来解释；
- **视频制作与视觉编排**：在稳定的视频生产流程上增加设计语言选择、素材确认与上游能力编排。

后续新增 Skill 仍遵循同一原则：

> **先把一个真实问题解决得足够稳定，再把解决方法沉淀成 Skill。**

---

<div align="center">

### Small skills. Repeatable judgment.

**把一次好判断，变成可以重复使用的方法。**

</div>