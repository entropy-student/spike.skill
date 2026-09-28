# 04 — Cold-start Validation

本文件用于验证候选模型能否同时建立受众价值与自有账号品牌商单需求。它不是商单销售手册；具体市场和平台规则须在执行时查证。

## 1. 先写假设与判定条件

每轮测试前记录：

~~~text
Account Model:
Target Audience:
Content Franchises:
Target Brand Categories:
Paid-on-account Offer:
Market / Platform:
Time and Cost Limit:
What would count as a positive signal:
What would disconfirm the model:
Decision date:
~~~

不要测试后再修改“成功”定义。测试范围和数量按资源、平台和需要排除的不确定性确定，不使用通用固定样本数。

## 2. Lane A — Audience Validation

目标：验证目标受众是否持续需要该内容承诺，候选内容系列能否重复成立。

同一轮测试少改变量，并按系列记录：

- 发布数与周期；
- 自然触达或播放中位数；
- 完播、收藏、分享、评论或搜索等符合平台和内容目标的信号；
- 受众是否符合模型假设；
- 制作时长、现金成本和复用程度。

用中位表现和重复模式判断，不以单条峰值作结论。若受众信号弱，先区分模型问题、内容执行问题和分发波动。

## 3. Lane B — Brand Validation

验证对象是具体的品牌类别、账号模型和自有账号付费内容提案。可用与目标市场相符的 Marketplace、官方招募、品牌/代理公开 Campaign 或少量定向接触。优先选已采购相似创作者内容的品牌，并记录筛选理由与触达分母。

按证据强弱分别记录：

1. 看到类别预算或品牌活动：市场信号；
2. 品牌/代理回应且确认受众、内容或平台匹配：合格兴趣；
3. 预算明确的 Brief、付费邀请或谈价：采购意图；
4. 品牌为创作者自有账号上的内容付费：付费商单；
5. 同一品牌或独立品牌再次付费：复投证据。

回复、入选、免费寄样、纯 UGC 订单和联盟佣金不等同于自有账号品牌商单。没有回复不是拒绝原因；记录 `NO_RESPONSE` 并判断触达是否足够相关。

## 4. 复盘首轮合作

若获得付费商单，记录：

~~~text
Brand / Category:
Account Model and Content Franchise:
Paid-on-account Deliverable:
Fee and Direct Cost:
Hours for Brief, Production, Revisions and Reporting:
Organic Performance:
Paid Amplification (YES / NO / UNKNOWN):
Audience Response:
Brand's Stated Outcome:
Renewal / Repeat Signal:
What to change:
~~~

自然数据与品牌付费放大无法拆分时标记 `UNKNOWN`。品牌未提供结果时不推算广告主 ROI。

## 5. 决策

在预先设定的周期结束后，结合两条通道决策：

- **KILL：**相关市场和小号样本持续缺少采购证据，关键假设被反证，或生产经济性无法成立。
- **ITERATE：**有具体信号指出受众、内容系列、品牌类别、平台或提案中有可修正问题。
- **KEEP：**受众模型有重复信号，品牌兴趣初现，但付费、复投或经济性仍未知。
- **SCALE：**自有账号付费合作可重复，跨时间和品牌来源不依赖单一偶发机会，且制作成本、受众反应与用户目标相容。

样本不足或触达质量差时保留 `PROVISIONAL`，先补最关键的证据，不把不确定性误写成失败。
