# 01 — Discovery & Real Account Sampling

用于发现 Account Model，并用真实 Creator 样本验证，而不是先凭印象选赛道。

## 1. 四路发现

至少覆盖：

- **Advertiser-led**：从品牌 Campaign、Creator Marketplace、Agency/平台招募反查 Creator；
- **Creator-led**：从平台自然生态观察增长中、已商业化、少商单、无商单账号；
- **Audience-led**：从长期需求、兴趣、身份、搜索和决策场景发现内容机会；
- **Negative-space**：寻找受众强但商单弱、品牌需求强但 Creator 供给弱的区域。

Negative-space 只能生成 LATENT 假设，不能直接推荐。

## 2. Account Model 结构

不能只写“科技 / 美妆 / 户外”。

统一拆成：

~~~text
Audience
× Persistent Need
× Content Promise
× Repeatable Content Engine
× Sponsor Adjacency
× Platform Context
~~~

候选状态：

- ESTABLISHED：已有明确品牌采购与中小 Creator 商单；
- EMERGING：已有早期采购或需求增长，但重复性不足；
- LATENT：受众或 Sponsor Fit 看起来强，但真实商单证据不足。

## 3. 真实账号抽样

至少并用 Advertiser-led + Creator-led；有条件时加入 Platform-led。

样本必须包含：
- 明显商单账号；
- 少商单账号；
- 无明显商单账号；
- 自然表现强但商业弱账号。

头部案例只能说明成熟形态，不能单独证明新号可进入。

样本量不固定。只要新增样本仍会改变：
- 候选排序；
- Small-creator Access；
- 主要 Sponsor 类别；
- 关键反例；

就继续抽样。结论稳定且新增样本重复度高时可停止。

## 4. 观察字段

至少记录：

| Field | Meaning |
|---|---|
| Platform / Market | 平台、地区、语言 |
| Account / URL | 可复查账号 |
| Account Model | 账号模型 |
| Observation Window | 观察区间 |
| Posting Cadence | 发布频率 |
| Organic Median | 自然内容中位表现 |
| Paid-on-account | 可确认自有账号付费合作 |
| Brands / Categories | 品牌及类别 |
| Repeat Evidence | 复投 / 跨时间采购 |
| Content Engine | 重复内容结构 |
| Production Signals | 制作复杂度与资源 |
| Evidence / Bias | 来源、缺失与偏差 |

公开不可见的数据写 UNKNOWN。

## 5. 商业内容编码

- PAID_ON_ACCOUNT
- GIFTED
- AFFILIATE_ONLY
- UGC_ONLY
- UNKNOWN

公开披露不完整，因此默认报告：

- **Confirmed Paid — Lower Bound**
- **Confirmed + Probable — Sensitivity Range**

不要把公开观察得到的商单密度写成真实精确商单率。

## 6. 关键偏差

每轮至少检查：

- Selection / Survivorship Bias；
- 平台推荐与 Marketplace Bias；
- Disclosure Bias；
- Paid Amplification 污染；
- 地区 / 语言 / 季节；
- Creator 阶段与账号年龄。

## 7. Discovery Stop

当继续扩展来源时：

- 不再出现新的一级 Account Model；
- 主要状态不再变化；
- 新增品牌采购模式重复；
- 主要 Negative-space 已覆盖；

即可从发现进入市场验证。

## 8. 输出

~~~text
Discovery scope:
Advertiser-led patterns:
Creator-led patterns:
Audience-led patterns:
Negative-space:
Model clusters:
ESTABLISHED:
EMERGING:
LATENT:
Strongest counterexamples:
Uncovered areas:
Next validation priority:
~~~
