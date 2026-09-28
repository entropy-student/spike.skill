# 01 — Real Account Research & Model Comparison

本文件用于验证候选账号模型的品牌商单潜力。研究单位是“受众 × 内容系列 × 品牌适配 × 制作方式”，不是宽泛赛道，也不是某个单独的成功账号。

## 1. 建立可比较的样本

先固定目标市场、平台、语言、时间范围和候选模型定义，再选择适合的观察窗口。优先组合：

- **Advertiser-led：**从品牌 Campaign、付费合作内容、Marketplace 或公开招募反查创作者；
- **Creator-led：**从目标平台和候选模型中系统抽取账号，包含没有明显商单的账号；
- **Platform-led：**从官方 Marketplace 或 Open Call 观察准入与采购条件。

按平台、地区、内容频率和创作者阶段分层。头部账号可以说明成熟商业形态，但不能单独证明新号有进入机会。每个模型都尽量加入成功、少量商单、无明显商单及自然表现强但商单少的对照样本。

样本数按需要排除的不确定性决定，不把固定账号量或粉丝段当成通过标准。若新增样本仍会改变候选排序、小号可达性或主要反例，就继续抽样；若主要结论稳定且新增样本重复度高，可停止并报告覆盖范围。

## 2. 记录观察口径

不同频率的账号要用可比窗口，不要只比较固定条数。每个样本记录：

| Field | Meaning |
|---|---|
| Platform / Market | 平台、地区和语言 |
| Account / URL | 账号标识与可复查链接 |
| Account Model | 受众、需求、内容系列和品牌适配 |
| Creator Stage | 用当地平台和研究目的定义阶段；保留粉丝数原值 |
| Observation Window | 起止日期、观察天数和内容量 |
| Posting Cadence | 发布频率 |
| Organic Median | 可确认的自然内容中位表现及指标 |
| Paid-on-account Posts | 可确认的品牌付费发布数及频率 |
| Brand Count / Categories | 独立品牌数与类别 |
| Repeat Evidence | 同品牌复投或跨时间采购证据 |
| Content Franchises | 实际出现的重复形式 |
| Production Signals | 制作复杂度、频率和可推断成本 |
| Evidence Sources | 来源、日期、证据等级和限制 |
| Notes | 未知项、反例及其他说明 |

只用公开资料时，不推测私有后台数据、合同金额或受众画像；无法观察的字段写 `UNKNOWN`。

## 3. 区分商单与其他商业信号

给每个商业内容编码：

- `PAID_ON_ACCOUNT`：能确认品牌为创作者自有账号上的付费合作；
- `GIFTED`：产品/服务置换，未证实付费；
- `AFFILIATE_ONLY`：佣金或优惠码收入，未证实固定商单费；
- `UGC_ONLY`：制作素材但不在创作者账号发布；
- `UNKNOWN`：存在商业迹象但付款或合作性质不清。

核心商单指标只统计 `PAID_ON_ACCOUNT`。可单独报告其他类型，但不可合并成账号广告收入。

证据强度：

- **HIGH：**平台商业合作标识、品牌/创作者明确付费披露、官方 Campaign 或可核验案例；
- **MEDIUM：**多项迹象支持商业合作，但付费关系未公开；
- **LOW：**只出现产品、疑似赠品、联盟链接或无法核实的广告结构。

主分析使用 HIGH；必要时将 HIGH + MEDIUM 作为敏感性分析并明确标注。

## 4. 计算有用的比较指标

只在样本窗口、分类和分母可比时计算：

~~~text
Paid Post Density = PAID_ON_ACCOUNT posts / observed posts
Paid Post Cadence = PAID_ON_ACCOUNT posts / observation months
Repeat Sponsor Rate = brands with confirmed repeat / brands with confirmed paid posts
Top Sponsor Share = largest brand's paid posts / all confirmed paid posts
Organic Ad Retention = median organic sponsored performance / median organic non-sponsored performance
~~~

自然广告表现被付费投放污染或无法拆分时，将 `Organic Ad Retention` 记为 `UNKNOWN`。这些指标是已观察账号的信号，不是新号未来收入预测。

可记录收入时，优先计算扣除直接现金成本后的商单收入，并同时记录研究、制作、沟通、修改和复盘时间。没有可靠的合同收入数据时，不填估算金额。

## 5. 先检查模型条件，再做相对评分

结构性检查：

1. 品牌类别存在反复的 Creator 内容采购；
2. 有与新号起步路径相近的小中型账号获得自有账号付费合作的证据；
3. 品牌内容可以自然适配受众需要，且没有明显损害内容信任；
4. 内容系列可重复生产，资源成本与用户约束相容；
5. 平台规则、商业披露和类别限制没有让该模式不可行。

没有证据时标为 `UNKNOWN`，不要自动当成 PASS。Buyer Readiness（联系方式、主页、报价资料、交付流程）通常是可修复的执行条件，不能与市场本身是否成立混为一谈。

通过结构性检查的候选可比较：品牌需求频率、可触达品牌范围、小号进入证据、受众商业价值、自然广告适配、竞争供给、制作净收益潜力和平台风险。按用户的成本、周期和目标调整权重；解释权重与证据，不用缺乏依据的精确总分制造确定性。

## 6. 候选模型卡

~~~text
Model Name:
Target Market / Platform:
Audience:
Persistent Need:
Content Promise:
Repeatable Franchises:
Target Brand Categories:
Why a Brand Would Pay for an On-account Placement:
Comparable Small-creator Evidence:
Observed Paid-on-account Cadence / Repeat:
Organic Ad Retention (or UNKNOWN):
Brand Breadth / Concentration:
Production Inputs and Net Economics:
Platform Eligibility / Main Risks:
Evidence Level:
What Would Disconfirm This Model:
Decision: KILL / ITERATE / KEEP / SCALE
~~~

## 7. 偏差检查

每轮检查并报告：

- 成功者/幸存者偏差；
- 广告披露不全造成的漏记；
- 平台推荐、Marketplace 与抽样来源偏差；
- 付费放大对公开表现的污染；
- 地区、语言、季节和发布时间差异；
- 账号年龄、发文频率与阶段不匹配。

偏差未能校正时，降低置信度并指出结论适用范围。

## 8. 结论分级

- **方向假设：**行业或平台资料提示可能有需求，暂无充分真实账号样本。
- **候选模型：**有可复查的中小账号比较和品牌采购证据，足以设计自己的测试。
- **初步验证：**用户自己的账号获得受众信号，并出现自有账号上的付费品牌合作。
- **可持续性证据：**用户自己的合作出现跨时间复购或稳定节奏，来源不依赖单一偶发品牌，净制作经济性和受众反应可接受。

报告每一级的证据、反例、未知项和下一项最小验证。账号样本不能替代用户自己起号后的验证。
