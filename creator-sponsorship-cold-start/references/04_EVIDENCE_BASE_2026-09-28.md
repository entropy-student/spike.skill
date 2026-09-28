# 04 — Evidence Base for v0.2 Upgrade (2026-09-28)

本文件记录 v0.2 方法论为什么这样设计。它不是永久市场结论；所有动态平台规则仍需执行时重新核验。

## 1. Advertiser selection is not follower-first

### IAB 2025 Creator Economy Ad Spend & Strategy
- Creator reputation、audience alignment、brand fit 等是核心选人因素。
- 品牌的主要挑战之一就是找到“对的 Creator”。
- Creator 已被当成独立媒体渠道，而不是边缘战术。

Method implication:
- Skill 必须把 Audience Fit / Suitability / Reputation 作为硬 Gate。
- Follower count 不能单独决定优先级。

Source:
https://www.iab.com/insights/2025-creator-economy-ad-spend-strategy-report/

## 2. Brand suitability has become a top selection criterion

### CreatorIQ State of Safety 2025
- Brand safety / suitability 对企业品牌的重要性显著上升。
- Creator suitability / fit 被品牌和 Agency 排在新合作选择因素的首位之一。

Method implication:
- 新增 BRAND SUITABILITY Gate。
- 账号历史内容和商业合规必须进入选品模型，而不是商单后才处理。

Source:
https://www.creatoriq.com/press/releases/state-of-stafety-creator-marketing-report

## 3. Creator content is now also a paid-media asset

### CreatorIQ Creator-Powered Funnel 2026
- Creator content 已被广泛用于 Paid Media。
- 品牌会把 Creator 内容复用于 Paid Social、网站、Commerce 等场景。
- Usage Rights、Paid Performance separation 已成为运营难点。

Method implication:
- 不再只把 Creator 价值定义为“发给自己的粉丝”。
- 新增 CREATIVE_ASSET Job。
- Usage Rights / Amplification 独立建模。
- Ad Retention 必须避免 Paid Amplification 污染。

Source:
https://www.creatoriq.com/press/releases/creator-powered-funnel-report-2026

## 4. Reach collaboration and content collaboration are different products

### Collabstr 2026 report / reporting methodology
- UGC / platform-agnostic content collaboration占比显著上升。
- Reach 合作与 Content 合作应该使用不同衡量方法。
- 小额、高频合作构成很大一部分 Marketplace 交易。

Method implication:
- 引入 Advertiser Job Router。
- 低粉 UGC Creator 不应被 Reach 指标淘汰。
- Small-Creator Access 必须包括 UGC / Content-only 路径。

Sources:
https://collabstr.com/2026-influencer-marketing-report
https://collabstr.com/blog/influencer-marketing-reporting

## 5. Pricing is not one number

### Later 2026 Pricing Benchmarks
- Engagement、audience quality、usage rights、exclusivity、format 都会影响合作价格。
- Usage rights / amplification 需要独立预算。
- Nano / micro creator 仍有明确商业市场。

Method implication:
- 新增 Deal Architecture。
- Base creative fee、distribution、rights、exclusivity 分开。
- 不把“平均单条报价”作为账号模型的唯一收益判断。

Source:
https://later.com/blog/influencer-pricing-benchmarks-the-complete-2026-guide/

## 6. Long-term creator relationships matter

### Later 2026 partnership research
- 品牌越来越强调长期 creator relationships、重复 exposure 和内容迭代。
- 长期合作要求更清晰的 rights、cadence、measurement 和 creative review。

Method implication:
- Repeat Sponsor Rate 与 Renewal Review 进入核心方法。
- 首单只算低级证据。
- SCALE 需要复投或多品牌重复采购。

Sources:
https://later.com/blog/top-influencer-trends-2026-how-brands-should-respond/
https://later.com/blog/how-to-build-influencer-partnerships-that-drive-measurable-results/

## 7. Expertise and credibility matter for behavioral outcomes

### Academic meta-analyses
- Credibility、trustworthiness、expertise 与 engagement / purchase intention 有显著关系。
- 最新 meta-analysis 显示 expertise 对 behavioral intention 尤其重要。

Method implication:
- 高专业、高意图赛道不能因为流量小就自动降级。
- TRUST / EXPERTISE 被单独作为 Advertiser Job。
- Account Model 需考虑 audience intent，而不只是 reach。

Sources:
https://onlinelibrary.wiley.com/doi/10.1002/mar.21927
https://onlinelibrary.wiley.com/doi/10.1002/cb.70246

## 8. Commercial discoverability can be engineered

### YouTube Creator Partnerships 2026
- Creator 可设置 desired rates、business contact、Media Kit。
- 平台建议 Creator 开启 channel insights sharing，提升品牌评估和发现能力。
- 品牌可以通过 Creator Partnerships / Google Ads Creator Search 找到 Creator。

### TikTok One 2026
- 支持 brand direct invitation、open application、invite link。
- 项目参与门槛依 Campaign 而变。

Method implication:
- 新增 Buyer Readiness Pack。
- 新增 Sponsor Acquisition Loop。
- 不允许用“品牌还没主动私信”判断市场不存在。

Sources:
https://support.google.com/youtube/answer/9385307
https://support.google.com/youtube/answer/12928947
https://ads.tiktok.com/resources/help/article/how-creators-can-find-and-join-tiktok-one-projects?lang=en

## 9. China platform infrastructure explicitly buys smaller creators

### 巨量星图 2026
- 达人入驻本身与具体任务门槛分离。
- 图文、投稿、招募任务等不同产品有不同准入。
- 招募任务明确服务于品牌批量招募中腰部达人及 KOC。

### Bilibili 花火
- 平台有明确商单准入体系。

### 小红书蒲公英
- 商业合作存在品牌、代理、博主、不同合作模式与商业审核体系。
- 商业内容和普通内容存在不同审核与合规要求。

Method implication:
- Platform Entry 必须按“任务类型”核验，不能只问“这个平台几粉能接广告”。
- 商业合规和账号健康度进入 Buyer Readiness / Suitability。

Sources:
https://www.xingtu.cn/help-center/author/109194
https://www.xingtu.cn/help-center/author/136554
https://www.bilibili.com/blackboard/activity-zWUGlzmXPK.html
https://pgy.xiaohongshu.com/help/detail?id=6495c527d1eedeeb48fb18b1f875650e&userType=4

## 10. Evidence interpretation rule

本 Evidence Base 只能支持“为什么 Skill 应采用某种方法”，不能永久证明：
- 某平台门槛；
- 某赛道永远最好；
- 某价格永远合理；
- 某平台永远最适合。

执行 Skill 时仍必须重新查最新规则和市场数据。
