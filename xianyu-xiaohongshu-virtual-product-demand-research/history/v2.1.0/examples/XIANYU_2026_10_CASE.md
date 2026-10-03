# Example — Xianyu Method Evolution, 2026-10

> **用途：方法校准，不是当前市场榜单，也不是 v2.1 的正确答案清单。**

历史项目：
`entropy-student/project/xianyu/docs/FINAL_SKU_CATALOG_2026-10.md`

该项目在 v2.0.1 阶段产出了“6 Confirmed + 44 Probable”的目录。独立 Review 后发现，这些标签存在系统性偏强：多卖家供给被用于升级需求，部分商品族证据被下传到更细 SKU/Bundle，且动态推荐页的复核记录不足。

因此：

~~~text
旧项目候选 = 仍有研究价值
旧 CONFIRMED / PROBABLE 标签 = 不再作为 v2.1 校准真值
~~~

## 1. 保留的发现

旧研究成功纠正了：
- service-first bias；
- 只从个人能力生成候选；
- 忽略会员、卡券、教育、摄影资产等平台原生市场面；
- 推荐页与直接 SKU 混用；
- SKU 粒度不一致。

这些仍是 v2.1 的有效经验。

## 2. v2.1 如何重新解释代表性案例

### AI 漫剧

公开报道如果明确说明某卖家“AI 漫剧教程”卖出 17k 份，则可以支持：

~~~text
Supported unit = AI 漫剧教程
Scope = PRODUCT_TYPE
Demand Level = D4
Demand Status = CONFIRMED_DEMAND
~~~

但不能自动支持：

~~~text
AI 漫剧教程 + 项目文件 + Workflow
~~~

这个 Bundle 需要直接证据，否则是 DERIVED_ADJACENT / U。

### 迅雷会员

如果多个独立商品/卖家分别出现可归属的“想要”等买方信号：

~~~text
Supply repetition = YES
Buyer evidence replication = YES
Demand Level = D3
Demand Status = PROBABLE_DEMAND
~~~

除非有可归属交易数据，否则不能因为“卖家很多 + 想要高”升级成 CONFIRMED。

### 考研资料 / 摄影预设

多个独立商品上都出现买方侧 Intent，可以到 D3 / PROBABLE。

仅“多个卖家都在挂”，但没有买方侧信号：

~~~text
Demand Level = D1
Demand Status = WATCHLIST
~~~

### 单个高想要商品

例如某单一 SKU 有很高“想要”：

~~~text
Demand Level = D2
Demand Status = WATCHLIST
~~~

除非再找到独立买方侧复现，才升级 D3。

## 3. 本案例教会 v2.1 的规则

1. 平台原生市场先扫，但官方类目只证明市场面存在。
2. **供给重复不是需求重复。**
3. Demand Level 必须由买方/交易侧证据升级。
4. Evidence 必须写明 Scope，禁止向更细 SKU/Bundle 下传。
5. 动态页面必须记录日期、商品 ID、原始事实和访问限制。
6. Demand 与 Risk 分列。
7. Counterevidence 可以降低 D-Level，不只是降低 Confidence。
8. 重复调用优先刷新底稿，不从零研究。
9. “值得继续研究”与“已经 TEST_READY”是两回事。


## 4. Boundary behavior checks

以下是 v2.1 的最小行为验收：

### Case A — 供给很多，没有买方信号

~~~text
8 个独立卖家
每个都在挂同类商品
0 个可见想要
0 个询盘/求购
0 个交易证据
~~~

必须得到：

~~~text
Supply Observation = replicated
Demand Level = D1
Demand Status = WATCHLIST
~~~

**不得因为 8 个卖家而升级 D3 / PROBABLE。**

### Case B — 商品族成交，SKU 组合更细

~~~text
Evidence = “AI 漫剧教程卖出 17k”
Candidate = “AI 漫剧教程 + 项目文件 + Workflow”
~~~

必须拆开：

~~~text
AI 漫剧教程 → 可按原证据评估 D4
额外的项目文件 + Workflow → UNKNOWN / DERIVED_ADJACENT
完整 Bundle → 不能继承 D4
~~~

### Case C — 单个商品高想要

~~~text
1 个直接商品
603 个想要
无第二个独立买方信号
无交易证据
~~~

必须得到：

~~~text
Demand Level = D2
Demand Status = WATCHLIST
~~~

高数值增强重要性，不改变独立性。

### Case D — 需求强，但风险高

可以同时：

~~~text
Demand Level = D4
Demand Status = CONFIRMED_DEMAND
Risk Status = HIGH_RISK
~~~

不能为了风险高而声称“没有需求”，也不能因为需求强就忽略风险。

### Case E — 值得研究，但还不能真实测试

~~~text
Demand Level = D3
Policy = UNKNOWN
Economics = UNKNOWN
Delivery/Rights = UNKNOWN
~~~

必须得到：

~~~text
RESEARCH_NEXT
NOT TEST_READY
NOT PRIORITY_TEST
~~~
