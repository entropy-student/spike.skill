---
name: creator-sponsorship-cold-start
description: >-
  用于从 0 系统发现并验证最可能形成可持续品牌商单收入的自媒体账号模型。先开放发现市场中的 Account Model，再验证品牌需求、小中型创作者可达性、Sponsor Fit 与可持续性，最后叠加个人约束并设计冷启动实验。
metadata:
  title: Creator Sponsorship Cold Start（自媒体品牌商单冷启动）
  version: "0.5.0"
  language: zh-CN
---

# Creator Sponsorship Cold Start（自媒体品牌商单冷启动）

## 0. 核心目标

> **系统发现并验证：从 0 开始，哪些自媒体账号模型最有可能形成可持续的品牌商单收入。**

核心收入只计包含 Creator 自有账号付费发布的品牌合作。平台分成、联盟、赠品、纯 UGC-only、自有产品收入可以旁录，但不能替代账号商单证据。

本 Skill 不保证收入，也不因行业热度、粉丝量、单条爆款、头部案例或理论品牌数量直接推荐模型。

---

## 1. Account Model

研究单位不是赛道，而是：

~~~text
Audience
× Persistent Need
× Content Promise
× Repeatable Content Engine
× Sponsor Adjacency
× Platform Context
~~~

一个合格模型必须回答：

- 谁持续看；
- 为什么持续看；
- 内容如何重复生产；
- 哪些品牌为什么愿意付费；
- 品牌进入后是否仍然自然；
- 这个模型有没有增长和长期采购空间。

---

## 2. 研究边界

开放发现前只固定真正会改变市场搜索空间的条件：

- Platform；
- Market / Country；
- Language；
- Core revenue definition；
- 法规 / 身份限制；
- 用户明确排除领域。

个人预算、时间、露脸、样品获取、现有技能和内容偏好默认后移到 User Fit。

只有绝对不可违反的个人条件才提前标为 HARD_CONSTRAINT。

平台商业工具、准入、披露和政策属于动态事实，每次执行重新核验。

---

## 3. Open-world Discovery

禁止先凭印象列几个赛道再验证。

至少使用：

1. **Advertiser-led**：品牌 Campaign、Marketplace、Agency / 平台招募；
2. **Creator-led**：平台自然生态中的增长、商业化与反例账号；
3. **Audience-led**：长期需求、兴趣、身份、搜索与决策场景；
4. **Negative-space**：受众强但商单弱，或品牌需求强但 Creator 供给弱的区域。

将发现结果聚类成 Account Model，而不是宽泛赛道。

候选状态：

- ESTABLISHED：已有明确品牌采购和中小 Creator 商单；
- EMERGING：已有早期采购或需求增长，但重复性不足；
- LATENT：受众或 Sponsor Fit 看起来强，但真实商单证据不足。

LATENT 必须继续验证，不能因“竞争少”直接推荐。

执行细节见 references/01_DISCOVERY_AND_SAMPLING.md。

---

## 4. Sponsor Market Validation

对每个候选至少验证：

### Brand Demand
品牌是否跨时间持续采购，而非单一 Campaign。

### Small-creator Access
与新号路径相近的小中型 Creator 是否真实获得 PAID_ON_ACCOUNT。

### Content–Brand Fit
品牌与 Creator 平时内容主题是否自然匹配。

### Audience–Brand Fit
Creator 受众是否接近品牌目标人群。

### Addressable Sponsor Market
不要把“品牌越多越好”当目标。拆成：

- Breadth；
- Depth；
- Fit；
- Concentration；
- Adjacency。

---

## 5. Real Creator Evidence

真实账号研究至少并用 Advertiser-led + Creator-led；有条件时加入 Platform-led。

样本必须包含：
- 商单明显账号；
- 少商单账号；
- 无明显商单账号；
- 自然表现强但商业弱账号。

商业信号编码：

- PAID_ON_ACCOUNT
- GIFTED
- AFFILIATE_ONLY
- UGC_ONLY
- UNKNOWN

公开披露会漏记，因此至少报告：

- Confirmed Paid — Lower Bound
- Confirmed + Probable — Sensitivity Range

公开不可见的合同金额、后台受众、ROI 写 UNKNOWN。

样本量不固定；当新增样本不再改变候选排序、小号可达性和主要反例时停止。

详见 references/01_DISCOVERY_AND_SAMPLING.md。

---

## 6. Sustainability

“接到广告”不等于“可持续收入”。

至少检查六层：

### DEMAND
品牌需求是否持续。

### FIT
Content–Brand Fit 与 Audience–Brand Fit 是否长期成立。

### SCALE
区分：
- Small-account monetization；
- Audience Scale Path；
- Sponsorship value at larger scale。

### CAPACITY
账号能承载多少商业合作，而不持续损害 Audience Value、内容质量和 Creator 产能。

Sponsor Density 只是观察变量，不假设越高或越低越好。

### RETENTION
看同品牌复投、多品牌重复采购和跨时间采购。

### ECONOMICS
只有真实数据时计算收入、直接成本、时间成本、净收入和 Sponsor Concentration。

Sustainability Level：

- S0 SINGLE DEAL
- S1 REPEAT SIGNAL
- S2 REPEATABLE MARKET
- S3 ECONOMICALLY SUSTAINABLE
- S4 SCALABLE

详见 references/02_SPONSOR_MARKET_AND_SUSTAINABILITY.md。

---

## 7. User Fit 后置

市场候选形成后，再加入：

- Skills；
- Assets / resources；
- Time；
- Budget；
- Face / voice / location constraints；
- Product / scene access；
- Long-term interest；
- Risk tolerance。

User Fit 回答：

> **市场上值得做的模型里，哪些适合这个 Creator？**

不要反过来用当前不便提前砍掉整个市场搜索空间，除非它是 HARD_CONSTRAINT。

---

## 8. Select Candidates

最终只保留 1–3 个值得实际测试的模型。

只有口径可比时才排序；否则明确暂不排序。

每个 Candidate 至少说明：

~~~text
Account Model:
Status:
Brand Demand:
Small-creator Access:
Content–Brand Fit:
Audience–Brand Fit:
Sponsor Market:
Scale Path:
Sponsor Capacity:
Retention Evidence:
Economics Evidence:
User Fit:
Strongest Counterevidence:
Unknowns:
Confidence:
~~~

---

## 9. Cold-start Dual Validation

### Lane A — Audience
验证：
- Audience Need；
- Content Engine；
- 中位表现；
- Production sustainability。

### Lane B — Brand
验证：
- Qualified sponsor interest；
- Budgeted brief；
- PAID_ON_ACCOUNT；
- Repeat。

赠品、联盟、UGC-only 和单纯入选必须分开。

Buyer Readiness 只在模型已有市场潜力但采购验证受阻时检查：
- Discoverability；
- Contactability；
- Profile / Portfolio；
- Data；
- Offer；
- Rights；
- Delivery；
- Measurement。

不使用固定作品数、固定回复时间或固定转化率作为通用 Gate。

详见 references/03_VALIDATION_AND_BUYER_READINESS.md。

---

## 10. Real Deal Measurement

若一份合同包含 Creator 自有账号付费发布，可把绑定收入拆成：

~~~text
Creative Fee
+ On-account Distribution / Placement
+ Usage Rights
+ Paid Amplification Rights
+ Exclusivity
+ Performance Bonus
+ Other Bound Deliverables
~~~

纯 UGC_ONLY 仍单独记录。

合作后按品牌目标选择指标，并区分 Organic 与 Paid Amplification。

详见 references/04_DEAL_AND_MEASUREMENT.md。

---

## 11. Evidence Levels

### DIRECTION HYPOTHESIS
只有市场 / 平台信号。

### CANDIDATE MODEL
有真实中小账号、品牌需求和 Sponsor Fit 证据，值得测试。

### INITIAL VALIDATION
用户自己的账号出现重复 Audience Signal + PAID_ON_ACCOUNT。

### SUSTAINABILITY EVIDENCE
跨时间存在重复采购、可接受 Sponsor Capacity、可持续 Production 和经济性。

### SCALE
只有用户自己的数据证明重复性、经济性和放大后稳定性才进入。

---

## 12. Evidence Rules

优先来源：

1. 平台官方商业规则 / Creator Marketplace；
2. 品牌、Agency、真实 Campaign；
3. 真实 Creator 账号；
4. 第一方 Marketplace / 可信行业研究；
5. 学术研究；
6. Creator / Agency 访谈；
7. 社区讨论。

规则：

- 行业报告不能代替真实账号；
- 头部不能代替小号可达性；
- Marketplace 数据不能自动外推整个市场；
- 公开报价不等于成交价；
- 动态规则每次重新查；
- 事实、推断、假设和 UNKNOWN 分开。

---

## 13. 默认执行顺序

~~~text
DEFINE BOUNDARY
→ OPEN-WORLD DISCOVERY
→ BUILD ACCOUNT MODELS
→ VALIDATE SPONSOR MARKET
→ TEST SUSTAINABILITY
→ APPLY USER FIT
→ SELECT 1–3 CANDIDATES
→ DUAL VALIDATION
→ REAL PAID SPONSORSHIP
→ REPEAT / SCALE
~~~

---

## 14. 默认交付

1. Research Boundary；
2. Discovery Coverage；
3. Account Model Universe；
4. Candidate status；
5. Sponsor Market evidence；
6. Sustainability；
7. User Fit 后的变化；
8. 最终 Candidate；
9. Strongest Counterevidence / UNKNOWN；
10. 下一项信息增益最高的验证。

---

## 15. References

- references/01_DISCOVERY_AND_SAMPLING.md
- references/02_SPONSOR_MARKET_AND_SUSTAINABILITY.md
- references/03_VALIDATION_AND_BUYER_READINESS.md
- references/04_DEAL_AND_MEASUREMENT.md
- templates/account-model-research-matrix.md

本 Skill 聚焦 Account Model 发现与验证，不负责具体脚本、日常长期运营或合同法律意见。
