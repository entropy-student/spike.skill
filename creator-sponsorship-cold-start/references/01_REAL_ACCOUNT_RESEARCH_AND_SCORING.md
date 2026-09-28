# 01 — Real Account Research & Scoring Method

本文件用于把“真实账号反向验证”执行成可重复研究，而不是凭印象挑案例。

## 1. Sampling Frame

### 完整研究
目标 100–200 个账号。

### 快速研究
至少 30 个账号，只能形成 provisional 结论。

### 分层
尽量覆盖：
- 1k–10k；
- 10k–50k；
- 50k–200k。

不要让头部账号超过样本主体。

## 2. Sampling Rules

1. 同一平台、同一模型至少要有多个独立账号。
2. 不只选“看起来成功”的账号；同时加入：
   - 同类低表现账号；
   - 无明显商单账号；
   - 商单很多但自然流量弱的账号。
3. 尽量覆盖不同账号年龄与更新频率。
4. 无法确认“广告”时标记 UNCERTAIN，不强行计入。
5. 不把品牌赠品、联盟链接、平台任务和明确付费商单混成同一种证据；能区分时分开记录。

## 3. Research Fields

建议每个账号记录：

| Field | Meaning |
|---|---|
| Platform | 平台 |
| Account | 账号 |
| Model | 账号商业模型 |
| Followers | 粉丝 |
| Recent N | 样本内容数 |
| Median Organic | 自然内容中位表现 |
| Sponsored Count | 商业内容数 |
| Sponsor Density | 商业内容 / Recent N |
| Brands | 合作品牌数 |
| Repeat Brands | 复投品牌数 |
| Repeat Rate | Repeat Brands / Brands |
| Median Sponsored | 商单内容中位表现 |
| Ad Retention | Median Sponsored / Median Organic |
| Brand Categories | 真实品牌类别 |
| Production Cost | LOW/MEDIUM/HIGH |
| Face Required | YES/NO/MIXED |
| Platform Entry | 当前商业平台准入情况 |
| Evidence Confidence | HIGH/MEDIUM/LOW |

## 4. Commercial Evidence Coding

### HIGH
- 品牌官方合作披露；
- 平台商业合作标识；
- 创作者明确商业合作；
- 官方 Campaign / Agency case。

### MEDIUM
- 明显广告结构 + 品牌露出 + 可验证合作痕迹，但付费关系未公开。

### LOW
- 仅推测可能是广告；
- 仅出现产品；
- 无商业披露证据。

核心统计优先使用 HIGH/MEDIUM，LOW 只做线索。

## 5. Model Gate

先做硬 Gate。

### G1 Advertiser Density
是否能找到多个真实广告主，而不是单一品牌偶发合作。

### G2 Small-Creator Access
是否存在小型/中小型 Creator 获得合作的真实证据。

### G3 Native Integration
商业内容是否能保持账号原有内容价值。

### G4 Production Feasibility
一个普通个人是否能持续完成该内容。

全部 PASS 才进入候选排序。

## 6. Heuristic Score

通过 Gate 后，8 项各 0–5：

1. Advertiser Density
2. Budget Strength
3. Repeat Frequency
4. Small-Creator Accessibility
5. Native Integration
6. Audience Commercial Value
7. Production Economics
8. Creator Supply Competition（反向分）

默认不强制权重。

如果任务确实需要排序，必须先说明权重由目标决定。例如“最快拿首单”与“长期高客单”不能使用完全相同权重。

## 7. Model Card

每个候选最终整理成：

~~~text
Model Name:
Audience:
Persistent Need:
Content Promise:
Core Franchises:
Natural Sponsor Slots:
Observed Brand Categories:
Small-Creator Evidence:
Sponsor Density:
Repeat Evidence:
Ad Retention:
Production Model:
Platform Fit:
Early Monetization Path:
Main Risk:
Evidence Level:
Decision: KILL / ITERATE / KEEP / SCALE
~~~

## 8. Interpretation Rules

### Sponsor Density 高，但 Repeat 低
可能只是大量一次性采买，未证明品牌满意或账号可持续。

### Repeat 高，但 Brand Breadth 低
可能高度依赖少数品牌，应检查集中度风险。

### Ad Retention 很低
说明商业植入与自然内容结构冲突，或品牌选择不匹配。

### 自然流量很好，但商单极少
不要自动解释为“还没被发现”；优先检查受众商业价值、品牌池与平台采购入口。

### 粉丝很少却持续商单
这是重要正向样本，应进一步研究：
- 是否 UGC；
- 是否垂类高价值；
- 是否有 Agency/平台任务；
- 是否品牌在买素材而非分发。

## 9. Freshness Rule

以下必须每次重新查询：
- 平台 Creator Marketplace 门槛；
- 粉丝/任务准入；
- 广告披露要求；
- 商单产品名称；
- 平台激励/投流授权机制；
- 市场报价和广告预算趋势。

Skill 中只保留研究方法，不把这些动态数字当永久事实。

## 10. Minimum Decision Standard

### 只能叫“方向”
有行业报告和平台证据，但无真实账号样本。

### 可以叫“候选账号模型”
至少有 30 个真实样本，并看到小号商业合作证据。

### 可以进入冷启动验证
Account Model 已完整定义，2–3 个 Franchise 可生产，平台入口已核验，KILL 条件明确。

### 可以称“已验证”
至少出现真实付费合作 + 可接受 Ad Retention + 复投或多品牌重复采购证据。
