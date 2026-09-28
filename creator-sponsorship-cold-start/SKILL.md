---
name: creator-sponsorship-cold-start
title: Creator Sponsorship Cold Start（自媒体广告冷启动）
description: 面向“从 0 起号并尽快进入广告主投放池”的证据驱动 Skill。通过广告市场地图、真实中小账号抽样、账号商业模型评分、平台商业门槛核验和最小冷启动实验，筛出 1–3 个可执行、可持续接商单并有复投潜力的账号模型。重点优化广告主密度、受众匹配、稳定流量、广告内容表现、制作经济性与复投，而不是单纯追求粉丝量或爆款。
version: 0.1.0
language: zh-CN
---

# Creator Sponsorship Cold Start（自媒体广告冷启动）

## 0. 核心目标

解决一个问题：

> **什么样的新账号，能够用尽可能低的冷启动成本，在较短周期内进入广告主可采购范围，并逐渐获得稳定复投？**

本 Skill 的最终交付不是“推荐几个赛道”，而是：

1. 筛出 1–3 个真实可执行的账号商业模型；
2. 说明广告主为什么会买、买什么、在哪个平台买；
3. 给出从 0 到首批商单再到复投的验证路径；
4. 明确哪些结论已被证据支持，哪些仍只是候选假设。

## 1. 强制边界

本 Skill 以 **广告主投放 / 品牌商单 / Creator Partnership / UGC / 内容授权 / 投流授权** 为主要变现目标。

默认不把以下目标当作北极星：
- 卖自己的产品；
- 课程/社群变现；
- 平台播放分成；
- 单纯涨粉；
- 单条爆款；
- 泛流量最大化。

如用户明确要求其他目标，应切换或联合其他 Skill。

## 2. 核心原则

1. **Advertiser-first，不是 Creator-first。** 先研究谁在花钱，再反推账号。
2. **赛道 ≠ 账号模型。** “科技”“美妆”“户外”只是市场；真正决策对象是“谁看、看什么、品牌怎么进去、内容怎么持续生产”。
3. **大市场 ≠ 新号好进入。** 同时看广告需求、创作者供给、小号采购、内容成本。
4. **真实账号优先于行业报告。** 报告用于发现方向，中小账号样本用于验证可落地性。
5. **Median > Max。** 广告主更需要稳定交付，不能用单条爆款代表账号价值。
6. **商单内容也必须能跑。** 重点检查广告内容与自然内容之间的性能差。
7. **Repeat > First Deal。** 首单只证明有人愿意试；复投才开始证明商业模型成立。
8. **Current rules must be current.** 平台门槛、官方商业产品、广告政策、报价生态必须实时核验，不把旧规则写死。
9. **Production economics matter.** 能爆但无法持续生产的账号，不算优秀冷启动模型。
10. **Evidence before recommendation.** 没有真实样本和商业证据时，只能标记为候选，不得定案。

## 3. 商业证据阶梯

必须区分以下证据：

```text
MARKET_EXISTS
→ BRANDS_SPEND_ON_CREATORS
→ BRANDS_SPEND_IN_THIS_NICHE
→ BRANDS_BUY_SMALL_MID_CREATORS
→ TARGET ACCOUNT MODEL FITS
→ SPONSOR INQUIRY
→ PAID COLLAB
→ REPEAT COLLAB
→ MULTI-BRAND REPEATABILITY
→ FRAMEWORK / LONG-TERM PARTNERSHIP
```

解释：
- 行业有广告预算，不等于会投这种账号；
- 会投这个赛道，不等于会投小号；
- 小号能接商单，不等于该内容模型可持续；
- 首单不等于复投；
- 单一品牌复投不等于商业模式已经广泛成立。

## 4. 第一阶段：Advertiser Market Map

不要先问“我想做什么内容”，先回答：

### A. 谁在持续花钱
按行业记录：
- 广告主数量；
- 品牌规模分布；
- 新品/活动频率；
- 是否依赖持续内容教育；
- 是否有订阅、上新、季节性、促销等持续投放理由。

### B. 品牌买什么
区分：
- 曝光；
- 种草；
- 转化；
- 搜索占位；
- UGC 素材；
- 投流素材；
- 测评；
- 教程；
- 品牌背书；
- 长期内容共创。

### C. 品牌从哪里采购
核验：
- 官方 Creator Marketplace；
- MCN / Agency；
- 品牌直邀；
- 招募任务；
- UGC Marketplace；
- 商务邮箱/私信；
- 平台投流授权机制。

### D. 最小可采购层级
必须实时核验：
- 注册门槛；
- 粉丝门槛；
- 任务门槛；
- 内容要求；
- 地区/身份限制；
- 广告披露规则。

任何具体门槛都视为“动态事实”，不得长期写死在 Skill 内。

## 5. 第二阶段：真实中小账号反向抽样

### 默认样本

完整研究目标：
- **100–200 个账号**

快速探索：
- **至少 30 个账号**，只能给 provisional 结论。

优先账号层级：
- 1k–10k：验证最早商业化；
- 10k–50k：验证微型/小型 Creator；
- 50k–200k：验证中腰部商业稳定性。

不允许只研究头部账号。

### 每个账号至少记录

```text
platform
account_name
account_url
niche
account_model
followers
recent_post_count
median_views_or_engagement
sponsored_post_count
sponsor_density
brand_count
repeat_brand_count
repeat_rate
ad_vs_organic_performance
content_format
production_complexity
face_required
posting_frequency
brand_categories
commercial_platform_status
first_observed_sponsorship
notes
```

如果某项无法公开确认，写 `UNKNOWN`，不要伪造。完整抽样字段、证据编码和解释规则见 `references/01_REAL_ACCOUNT_RESEARCH_AND_SCORING.md`；执行时可直接使用 `templates/account-model-research-matrix.md`。

## 6. 核心商业指标

### Sponsor Density

```text
Sponsor Density
= 最近 N 条内容中的商业合作数 / N
```

默认 N = 30；平台内容量不足时可改，但必须声明。

### Repeat Sponsor Rate

```text
Repeat Sponsor Rate
= 出现复投的品牌数 / 全部合作品牌数
```

### Ad Retention

按平台选择播放、互动或其他最接近自然内容表现的指标：

```text
Ad Retention
= 商单内容中位表现 / 自然内容中位表现
```

越接近 1，通常说明广告与账号内容结构越兼容。

### Brand Breadth

统计真实合作品牌类别，而不是理论上“可能合作”的品牌类别。

### Commercial Velocity

观察账号从成立/起量到：
- 首个公开商单；
- 第一次复投；
- 多品牌持续合作

所需时间。无法确认账号成立时间时明确标记低置信度。

### Production Efficiency

```text
Production Efficiency
= 稳定商业内容产出能力 / 时间 + 现金 + 人力成本
```

不强行制造虚假精确值；可以使用 LOW / MEDIUM / HIGH。

## 7. 第三阶段：账号模型，而不是赛道

每个候选必须描述成完整的 **Account Model**：

```text
目标受众是谁
→ 他们持续关心什么问题
→ 固定内容承诺是什么
→ 主要内容 Franchise 是什么
→ 哪类品牌天然进入
→ 品牌在内容里扮演什么角色
→ 内容是否需要露脸/外拍/购买样品
→ 平台为什么适合
→ 小号从哪里获得第一批商业机会
→ 为什么可能复投
```

禁止只写：
- “做科技”
- “做美妆”
- “做户外”
- “做 AI”

这不是可执行账号模型。

## 8. 账号模型八维 Gate

先做硬 Gate：

### 必须 PASS
1. **Advertiser Density**：存在足够真实广告主；
2. **Small-Creator Access**：能找到小号/中小号真实商业合作证据；
3. **Native Integration**：商业内容可以自然进入内容；
4. **Production Feasibility**：目标创作者能持续生产。

任一 FAIL，不进入优先候选。

### 通过 Gate 后再评分

0–5 分：
- 广告主密度；
- 预算强度；
- 复投频率；
- 小号可进入性；
- 内容原生植入度；
- 受众商业价值；
- 制作经济性；
- 创作者供给竞争。

评分只是压缩信息，不得替代原始证据。

## 9. 第四阶段：冷启动内容设计

候选账号必须能压缩成 2–3 个可重复 Content Franchise。

每个 Franchise 必须满足：

```text
Audience Need
+ Repeatable Hook
+ Evidence/Experience
+ Sponsor Slot
+ Organic Value
```

例如不是：
“分享数码知识”

而是：
“固定预算下，同类产品到底怎么买”
“真实使用 X 天后留下什么”
“同类 3–5 个产品横评”

品牌进入后，内容核心价值仍然成立。

## 10. 最小冷启动实验

默认第一轮：

- 20–30 条内容；
- 最多测试 3 个 Content Franchise；
- 同一阶段不要同时更换赛道、形式、受众、表达和平台；
- 优先寻找稳定的中位表现，不追单条爆款。

记录：
- median reach/views；
- view-to-engagement；
- 收藏/分享；
- 主页访问；
- 受众画像；
- 品牌/Agency 主动询问；
- Creator Marketplace 邀约；
- 广告内容与自然内容差异。

### 第一阶段成功不等于拿到广告

冷启动成功的早期证据可以是：
- 受众稳定；
- 内容模板重复有效；
- 明确商业品类自然出现；
- 达到平台商业任务门槛；
- 开始获得品牌/代理询问。

## 11. 商业验证 Loop

统一执行：

```text
市场假设
↓
真实账号抽样
↓
形成账号模型
↓
最小内容实验
↓
观察自然稳定性
↓
进入可采购层级
↓
首单广告
↓
检查 Ad Retention
↓
争取复投
↓
检查 Multi-brand Repeatability
↓
KEEP / ITERATE / KILL / SCALE
```

### KILL
- 广告主理论很多，但真实中小账号几乎无商单；
- 内容必须高度依赖昂贵生产；
- 商单一出现，内容表现长期崩塌；
- 广告主类别过窄且没有复投；
- 平台规则/地区条件使商业化不可行。

### ITERATE
市场仍成立，但受众、内容 Franchise、平台或商业植入结构需要改变。

### KEEP
已出现稳定自然内容与早期商业信号，但复投/多品牌尚未证明。

### SCALE
至少出现：
- 多次真实付费合作；
- 至少部分品牌复投；
- 商单内容表现可接受；
- 制作成本可持续；
- 有多个品牌类别可采购。

## 12. 真实研究的 Source Hierarchy

优先级：

1. **平台官方商业化规则 / Creator Marketplace / 广告政策**
2. **品牌/Agency 实际 Campaign、公开招募、案例**
3. **真实 Creator 主页与商业内容**
4. **可信行业报告与调查**
5. **学术研究**
6. **Creator/Agency 访谈**
7. **社区讨论**

行业报告不能代替真实账号样本。
社区讨论不能单独证明报价、预算或商单存在。

## 13. 防止常见误判

禁止以下推理：

- 最大广告行业 → 最佳新号机会；
- 流量最大 → 商业价值最高；
- 粉丝最多 → 广告主最喜欢；
- 一个爆款 → 已经找到账号模型；
- 一个商单 → 已经商业化；
- 一个品牌复投 → 已形成多品牌市场；
- 理论上能植入很多产品 → 实际有很多广告主；
- 头部达人有大量商单 → 小号也能进入；
- 平台旧门槛 → 当前仍有效。

## 14. 默认输出协议

每次完整研究应输出：

```text
核心商业目标：
目标市场/平台：
Advertiser Market Map：
真实样本规模：
已证明：
仍未证明：

候选账号模型 1：
- Audience：
- Content Promise：
- Content Franchises：
- Natural Sponsor Slots：
- Small-Creator Evidence：
- Production Economics：
- Platform Fit：
- Main Risk：
- Evidence Level：

候选账号模型 2：
...

候选账号模型 3：
...

当前领先假设：
为什么只是领先假设/为什么可以定案：

最小冷启动实验：
商业验证路径：
KILL 条件：
KEEP/SCALE 条件：
下一步最缺的证据：
```

## 15. 研究停止条件

只有满足以下条件，才允许从“广泛研究”进入“实际起号”：

1. 已形成广告市场地图；
2. 至少有一轮真实中小账号抽样；
3. 候选模型存在真实小号商单证据；
4. 账号模型能压缩成 2–3 个可重复 Franchise；
5. 制作成本可接受；
6. 平台商业入口已核验；
7. 已定义首轮 20–30 条实验与 KILL 条件。

否则继续补证据，不要因为“感觉方向不错”提前定案。

## 16. 与其他 Skill 的关系

- **Acquisition Growth Radar**：用于账号已运行后定位流量/转化/增长瓶颈；
- **Short-Form Spoken Script**：用于具体短视频脚本生产；
- **Product Business Teardown**：用于拆解某个广告主/产品的商业逻辑；
- 本 Skill 专门解决：**选什么广告型账号模型，以及如何从 0 验证它是否能持续获得品牌预算。**

## 17. 核心哲学

> **不是先成为“大博主”再想怎么接广告。**
>
> **而是从第一天就把账号设计成一个广告主愿意反复采购的媒体产品。**

一句话：

> **Advertiser Market → Real Creator Evidence → Account Model → Cold-start Test → Paid Collaboration → Repeat Sponsorship.**
