# 01 — Real Account Research & Scoring Method

本文件用于把“真实账号反向验证”执行成可重复研究，而不是凭印象挑案例。

## 1. Sampling Frame

### 完整研究
目标 100–200 个账号。

### 快速研究
至少 30 个账号，只能形成 PROVISIONAL 结论。

### 分层
尽量覆盖：
- 1k–10k；
- 10k–50k；
- 50k–200k。

头部账号只用于观察成熟商业形态，不得作为新号可进入性的主要证据。

## 2. 三路抽样

至少组合两路；完整研究优先三路并行。

### A. Advertiser-led
从：
- 品牌 Campaign；
- Sponsored Content；
- Agency Case；
- Creator Marketplace Campaign；
- 公开招募

反查 Creator。

优点：能确认真实广告需求。
风险：容易高估“已经被品牌挑中”的账号。

### B. Creator-led
从目标赛道搜索结果、关键词、话题、平台推荐中系统抽取中小账号，再判断商单。

优点：能看到无商单和低表现账号。
风险：平台推荐本身存在排序偏差。

### C. Platform-led
从：
- Creator Marketplace；
- Open Call；
- Recruitment；
- 平台达人搜索/榜单

抽样。

优点：直接观察平台采购基础设施。
风险：不同平台准入门槛不同。

## 3. 对照组

每个候选模型至少包含：
- 商单密集账号；
- 有少量商单账号；
- 同类但暂无明显商单账号；
- 自然流量高但商单少账号。

否则无法判断广告是“赛道普遍现象”还是少数成功者特例。

## 4. Observation Window

默认优先：
- 最近 90 天；
- 至少 20 条、最多 50 条内容。

发布频率低时：
- 扩展到 180 天。

同时记录：
- observed_days；
- post_count；
- posts_per_month；
- sponsored_post_count；
- sponsored_posts_per_month。

不得只用固定条数比较高频与低频账号。

## 5. Research Fields

| Field | Meaning |
|---|---|
| Platform | 平台 |
| Account | 账号 |
| Account URL | 链接 |
| Country / Language | 市场 |
| Followers | 粉丝 |
| Account Model | 完整账号模型 |
| Advertiser Job | Distribution / Creative / Performance / Trust / Local |
| Observed Days | 观察窗口 |
| Posts Sampled | 内容数 |
| Posts / Month | 发布频率 |
| Median Organic | 自然内容中位表现 |
| Sponsored Posts | 商业内容数 |
| Sponsored / Month | 商业合作频率 |
| Sponsor Density | 商业内容 / 样本内容 |
| Brand Count | 独立合作品牌 |
| Repeat Brand Count | 复投品牌 |
| Repeat Rate | 复投品牌 / 独立品牌 |
| Top Sponsor Share | 最大品牌合作数 / 商单数 |
| Median Sponsored Organic | 可确认自然商单表现 |
| Organic Ad Retention | Sponsored Organic / Non-sponsored Organic |
| Paid Amplified? | YES / NO / UNKNOWN |
| Brand Categories | 实际合作类别 |
| Rights / Amplification Evidence | 是否有投流/二次使用证据 |
| Content Franchises | 主要模板 |
| Face Required | YES / NO / MIXED |
| Production Complexity | LOW / MEDIUM / HIGH |
| Platform Entry | 当前商业入口 |
| First Observed Sponsorship | 首次可见商单 |
| Evidence Confidence | HIGH / MEDIUM / LOW |
| Notes | 备注 |

## 6. Sponsorship Evidence Coding

### HIGH
- 平台 Paid Partnership / 商业合作标识；
- 品牌或 Creator 明确合作声明；
- 官方 Campaign；
- Creator Marketplace / Agency Case；
- 明确 Sponsored / Ad 披露。

### MEDIUM
- 明显广告结构 + 品牌露出 + 多项合作痕迹，但付费关系未公开。

### LOW
- 仅出现产品；
- 疑似赠品；
- 仅有优惠码/联盟链接但无法确认固定付费；
- 无明确合作证据。

核心 Sponsor Density 优先统计 HIGH。
可单独报告 HIGH+MEDIUM 敏感性分析。

## 7. Gifted / Affiliate / Paid 必须区分

尽量编码为：
- PAID_FLAT；
- PAID_PERFORMANCE；
- HYBRID；
- GIFTED；
- AFFILIATE_ONLY；
- UGC_ONLY；
- UNKNOWN。

不得把免费寄样自动算成付费商单。

## 8. Paid Amplification Contamination

当 Sponsored Post 可能被：
- Boost；
- Partnership Ads；
- 星图投流；
- 品牌 Paid Media；
- Creator Whitelisting

放大时，公开 Views 不再代表 Creator 自然分发。

规则：
- 能确认自然数据 → 计算 Organic Ad Retention；
- 只能看到总播放 → 标记 PAID_CONTAMINATED；
- 无法判断 → Ad Retention = UNKNOWN。

禁止把 Paid Views 与普通自然播放直接相除。

## 9. Core Metrics

### Sponsor Density
Sponsored Posts / Observed Posts

### Sponsor Cadence
Sponsored Posts / Observation Months

### Repeat Sponsor Rate
Brands With 2+ Collaborations / Unique Sponsor Brands

### Top Sponsor Share
Collaborations From Largest Sponsor / All Sponsored Collaborations

### Organic Ad Retention
Median Organic Sponsored Performance / Median Organic Non-sponsored Performance

### Brand Breadth
Unique Real Brand Categories

### Commercial Velocity
从可确认的账号起点到：
- First Sponsor；
- First Repeat；
- Multi-brand Repeat。

成立时间不确定时必须标 LOW CONFIDENCE。

## 10. Gate

### G1 Advertiser Density
多个独立品牌持续采购。

### G2 Small-Creator Access
中小 Creator 或 UGC Creator 有真实采购证据。

### G3 Native Integration
商业内容仍保留原有用户价值。

### G4 Production Feasibility
普通个人可持续执行。

### G5 Brand Suitability
账号内容环境不过度限制品牌池。

### G6 Buyer Readiness
Creator 可以被发现、被评估、被联系、被下单、被合规结算。

全部 PASS 才进入优先候选。

## 11. Scenario Scoring

通过 Gate 后才评分。

### FAST_FIRST_DEAL
高权重：
- Small-Creator Access；
- UGC/Open Call；
- Brand Density；
- Production Speed。

### LONG_TERM_SPONSOR_INCOME
高权重：
- Budget；
- Repeat；
- Brand Breadth；
- Audience Value；
- Rights / Amplification。

### LOW_COST_SOLO
高权重：
- Production Economics；
- Digital/remote；
- No inventory；
- No location dependency。

### HIGH_VALUE_EXPERT
高权重：
- Expertise；
- Audience Intent；
- Sponsor Fit；
- High-value Brand Pool。

不得只输出“总分”，必须解释权重。

## 12. Model Card

~~~text
Model Name:
Audience:
Persistent Need:
Content Promise:
Core Franchises:
Advertiser Jobs:
Natural Sponsor Slots:
Observed Brand Categories:
Small-Creator Evidence:
Sponsor Density / Cadence:
Repeat Evidence:
Top Sponsor Share:
Organic Ad Retention:
Paid Amplification Evidence:
Brand Suitability:
Buyer Readiness:
Production Model:
Platform Fit:
Early Monetization Path:
Main Risk:
Evidence Level:
Decision: KILL / ITERATE / KEEP / SCALE
~~~

## 13. Bias Checklist

每轮必须检查：
- Selection Bias；
- Survivorship Bias；
- Platform Bias；
- Disclosure Bias；
- Paid Amplification Contamination；
- Seasonality；
- Category Regulation；
- Creator Age Bias；
- Language / Geography Bias。

任一明显存在都要降低置信度。

## 14. Minimum Decision Standard

### 只能叫“方向”
只有行业报告/平台证据，没有真实账号样本。

### 可以叫“候选账号模型”
至少 30 个真实样本 + Small-Creator Access 证据。

### 可以进入冷启动
完整 Account Model + Franchises + Buyer Readiness + Audience/Sponsor 双通道实验。

### 可以称“初步商业验证”
至少真实付费合作 + 可解释的商单/素材表现。

### 可以称“可重复”
出现复投或多个独立品牌重复采购。

### 可以 SCALE
重复采购 + 制作经济性 + Buyer Operations + Measurement 均可持续。
