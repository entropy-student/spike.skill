<div align="center">

# 🧩 Spike Skill Library（Spike 技能库）

### 面向真实任务的可复用 AI Skills

**把一次有效判断，沉淀成可以重复调用的规则、证据标准与执行流程。**

![Skills](https://img.shields.io/badge/skills-18-blue?style=flat-square)
![Language](https://img.shields.io/badge/language-中文%20%2B%20English-success?style=flat-square)
![Status](https://img.shields.io/badge/status-active-orange?style=flat-square)

</div>

---

> ⭐ **Core Governance：** [VPS Project Governance（VPS 项目管理规范）](./vps-project-governance/) — Reviewer / Executor / Gate / Evidence / PASS-RETURN / rollback / Secret / Shared VPS 的统一治理入口。

## Skill 目录

> 根目录只负责**导航**。每个 Skill 的版本、状态与正式规则以该 Skill 自己的 metadata.yml / SKILL.md / 声明的 canonical rule 为准。

### 工程与治理

| Skill | 主要解决什么问题 | 入口 |
|---|---|---|
| **VPS Project Governance（VPS 项目管理规范）** | 项目接管、Gate、Evidence、回滚、Secret、Shared VPS、生产变更与 Owner 边界 | [进入](./vps-project-governance/) |
| **Payment Integration Governance（支付与履约接入准则）** | 新系统如何复用既有支付/履约能力，避免重复建设支付渠道与 Secret 边界 | [进入](./payment-integration-governance/) |

### 商业、增长与选品

| Skill | 主要解决什么问题 | 入口 |
|---|---|---|
| **Acquisition Growth Radar（获客增长雷达）** | 判断项目当前最大增长瓶颈与最小验证实验 | [进入](./acquisition-growth-radar/) |
| **Creator Sponsorship Cold Start（自媒体品牌商单冷启动）** | 从账号模型、平台证据与真实样本设计品牌商单冷启动验证 | [进入](./creator-sponsorship-cold-start/) |
| **Independent Store Product Opportunity（独立站选品决策系统）** | 从实物、数字与 SaaS 候选中筛选最值得真实测试的 DTC 机会 | [进入](./independent-store-product-opportunity/) |
| **Independent Store Operations（独立站运营系统）** | 定位独立站运营阶段、转化漏损、信任、结账、履约与留存问题 | [进入](./independent-store-operations/) |
| **Product Business Teardown（产品商业拆解）** | 拆解产品服务谁、为何存在、谁付钱、如何赚钱与最难复制的部分 | [进入](./product-business-teardown/) |
| **Xianyu & Xiaohongshu Virtual Product Demand Research（闲鱼/小红书虚拟商品需求研究）** | 发现具体商品与买方需求证据，分开供给、风险与有边界的验证实验 | [进入](./xianyu-xiaohongshu-virtual-product-demand-research/) |

### 内容、趋势与表达

| Skill | 主要解决什么问题 | 入口 |
|---|---|---|
| **Entertainment Rander（娱乐热梗雷达）** | 区分普通热点、模仿型热梗与真正持续增殖的互联网梗 | [进入](./entertainment-rander/) |
| **Music Trend Radar（音乐趋势雷达）** | 跨平台识别热门、爆发中与具持续传播能力的歌曲 | [进入](./music-trend-radar/) |
| **Music Quality Radar（音乐质量雷达）** | 判断歌曲为什么好听/普通、最大优点、最大问题与最值得修改处 | [进入](./music-quality-radar/) |
| **Short-Form Spoken Script（短视频口播脚本）** | 把内容承诺、Hook、口语化、时长与 SRT 编译成稳定短视频文案 | [进入](./short-form-spoken-script/) |
| **Meme Music Router（热梗音乐路由器）** | 以 meme_core 为中心编排梗、图片、歌词、曲风与作品名 | [进入](./meme-music-router/) |

### 故事、视觉与视频生产

| Skill | 主要解决什么问题 | 入口 |
|---|---|---|
| **Story Showrunner** | 从主题到 Knowledge / Story / Writer / Timing / Director / Asset / QA 的故事视频控制平面 | [进入](./story-showrunner/) |
| **Jingsui Story Video Director（景岁式故事漫画视频导演）** | 把第一人称故事口播编译为 SRT、Visual Beat、漫画分镜与生图计划 | [进入](./jingsui-story-video-director/) |
| **Aroll Video Maker（A-roll 视频生成器）** | 用配音主时间轴、有限母图与程序化镜头制作插画叙事视频 | [进入](./aroll-video-maker/) |
| **Narrative Motion Semantics（叙事动效语义库）** | 根据流程、时间、对比、因果选择信息拓扑与动效表达 | [进入](./narrative-motion-semantics/) |
| **TalkCraft Design Orchestrator（TalkCraft 视觉编排器）** | 为 TalkCraft 增加视觉风格选择、SHOTBOOK 与素材确认编排 | [进入](./video-talkcraft-design-orchestrator/) |

## 使用规则

~~~text
先选 Skill
→ 进入对应目录
→ 读 README 获取用途/调用方式
→ 按该 Skill 声明的 canonical rule 执行
→ 真实反例出现后再校准 Skill
~~~

多数 Skill 的执行入口是 SKILL.md。如果某个 Skill 明确声明了其他 canonical rule，以其自身声明为准；例如 VPS Project Governance 当前由入口文件指向根目录 VNEXT.md。

## 仓库边界

- **一个一级目录 = 一个 Skill**。
- 根目录只保留仓库导航与仓库级配置，不存放某个 Skill 的运行产物。
- Skill 内的 README.md 用于说明与导航；正式规则、模板、案例、参考资料留在各自 Skill 目录。
- 不因为展示需要随意修改稳定 slug。
- 新能力只有在真实案例中足够稳定后，才从项目经验抽取为 Skill。

## 设计原则

1. **Evidence before conclusion**：低等级信号不能越级证明高等级结论。
2. **Operational rules first**：优先沉淀“下一步具体怎么做”，而不是堆理论。
3. **Clear boundaries**：一个 Skill 不悄悄接管另一个 Skill 的职责。
4. **Calibrate with real cases**：真实反例驱动升级，不为了版本号而更新。
5. **Keep the root thin**：根目录是地图，不是第二套规则库。

---

<div align="center">

### Small skills. Repeatable judgment.

**把一次好判断，变成可以重复使用的方法。**

</div>
