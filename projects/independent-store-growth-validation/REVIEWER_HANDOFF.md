# Independent Store Growth Validation — REVIEWER HANDOFF

> 项目性质：三产品独立站增长验证项目  
> 建立日期：2026-09-11  
> 项目状态：ACTIVE / PRE-LAUNCH VALIDATION  
> 唯一项目交接文档：本文件 `REVIEWER_HANDOFF.md`  
> 维护角色：Reviewer / Architect / Gatekeeper  
> 管理参考：`vps-project-governance` 的“唯一事实源 / Gate / Owner 最小介入”思想；本项目不是 VPS 部署项目，不机械套用基础设施规则。

---

## 1. 项目最终目标

建立一套可重复使用的独立站获客与商业验证闭环，使新产品能够按统一方法回答：

1. 目标用户是否真实存在；
2. 产品/方案是否真的产生价值；
3. 用户是否产生购买意图；
4. 用户是否真实付款；
5. 哪个渠道最适合承担“发现需求 / 承接需求 / 转化”的职责；
6. 获客结果能否重复；
7. 单位经济是否成立；
8. 只有通过以上验证后才扩大内容、广告、自动化或库存投入。

最终希望形成：

`产品机会 → 最小价值验证 → 最小成交闭环 → 渠道验证 → 重复性 → 盈利性 → 放大`

本项目不是为了同时运营三个长期品牌，而是用三个产品候选验证并形成可复用的增长系统。

---

## 2. 当前产品组合

### A. Relationship Clarity Report｜关系分析报告

- 类型：数字产品
- 当前定价假设：USD 9.99 / one-time
- 当前路径假设：免费小分析 → 用户产生“说中了我”的价值体验 → 完整付费报告
- 已知优势：开发/交付边际成本低，现有项目基础最接近可运行状态
- 当前最大未知：**免费个性化洞察能否让真实用户明确感受到价值，并推动进一步付费意图**

### B. Dating Profile Audit｜约会资料诊断

- 类型：数字诊断服务 / 后续可自动化
- 当前路径假设：上传 Hinge / Tinder / Bumble 资料 → 免费给出“最值得优先检查的一项” → 完整付费诊断
- 当前策略：先人工验证，不先开发完整 AI 自动诊断系统
- 当前最大未知：**我们的诊断是否足够具体、可信、有帮助，明显优于泛泛建议**

### C. Mini Craft Night Kit｜迷你手工夜套装

- 类型：实物商品
- 当前定位假设：不是卖普通手工材料，而是卖“一个不用刷手机、1–2 晚能完成、最后有漂亮成品留下来的夜晚体验”
- 当前候选方向：Book Nook / Miniature Room / 其他视觉效果强的小型成人手作
- 当前策略：不囤货，先从抽象机会收敛到 1–3 个具体 SKU，再做购买意向测试
- 当前最大未知：**具体 SKU + 场景化定位能否给用户一个足够强的理由，不直接去 Amazon/平台购买替代品**

---

## 3. 项目事实源顺序

发生冲突时按以下顺序：

1. Owner 当前最新明确指令；
2. 本 `REVIEWER_HANDOFF.md`；
3. `acquisition-growth-radar/SKILL.md` 当前正式版本；
4. `independent-store-product-opportunity` 已接受的选品结论；
5. 当前实验的真实行为与付款证据；
6. `acquisition-growth-radar/UPGRADE_OBSERVATIONS_2026-09-11.md`（仅升级观察，不是正式规则）；
7. 历史聊天与临时分析。

规则：

- 不维护第二份竞争性交接文档；
- 历史聊天不替代本 Handoff；
- 计划不得写成已完成事实；
- 外部市场证据不得直接当成“我们的产品已验证”。

---

## 4. 核心治理原则

### 4.1 先找“当前最大未知”，没有数据时不伪造瓶颈

如果尚未产生真实用户行为，写 `CRITICAL UNKNOWN`；只有真实观察到断点后才写 `OBSERVED BOTTLENECK`。

### 4.2 每轮优先减少一个关键不确定性

默认一次只改变一个核心变量，尽量保证结果可解释。

### 4.3 证据等级不得越级

- 播放量 ≠ 需求
- 点赞 ≠ 购买意图
- Early Access ≠ 价值体验
- 上传资料 ≠ 价值体验
- 完成测评 ≠ 自动代表“说中了”
- 一次付款 ≠ 可重复
- 营收 ≠ 利润

### 4.4 Owner 最小介入

Reviewer 可自行完成的研究、设计、文档、方案、页面结构、实验规则、筛选均直接推进。

只有下列事项默认需要 Owner：

- 真实付款 / 采购 / 样品费用；
- 广告真实扣费；
- 新账号授权 / 验证码 / Secret；
- 不可逆操作；
- 大额库存；
- 重大品牌、法律或业务方向变化；
- 首次真实生产放量。

---

## 5. 总体 Gate 规划

```text
G0 项目治理与产品组合冻结                 ✅ PASS
G1 直接价值 / 商品定位最小验证            ←【现在这里】
G2 最小 Funnel / 实验载体实现             ⏳
G3 第一批真实行为证据                      ⏳
G4 渠道验证                                ⏳
G5 真实 Transaction 验证                  ⏳
G6 Repeatability + Economics              ⏳
G7 Scale Eligibility                      ⏳
```

### G0 — 项目治理与产品组合冻结 ✅

已完成：

- 三个产品被确认进入同一增长验证项目；
- 三者当前不平均投入；
- 不提前认定 TikTok / Google / Pinterest 为赢家；
- 不在没有数据时把“未知”写成“瓶颈”；
- 确认本项目以 `Acquisition Growth Radar v0.2` 为当前正式增长方法；
- Skill 升级问题另行记录，不在本项目执行中修改正式 Skill；
- 建立唯一项目 Handoff。

Reviewer Decision：`PASS_G0`

---

## 6. 当前 Gate：G1 — 最小价值 / 商品定位验证

### Gate 总目标

在花费大量流量、广告、开发或库存之前，先回答三个产品各自最关键的直接问题。

### G1-A Relationship

**目标：** 证明免费个性化洞察本身是否有真实价值感。

本轮需要形成：

1. 5–8 个最小问题集；
2. 免费结果结构；
3. 免费价值与 USD 9.99 完整报告的清晰边界；
4. “价值体验”的可观察代理与用户反馈方式；
5. 页面最小行为事件定义；
6. 成功 / 失败 / 数据不足条件。

本轮禁止：

- 同时测试多个价格；
- 同时比较多个渠道并据此宣称赢家；
- 用完成测评代替“用户认为结果有价值”；
- 在没有证据时做过强心理/关系结果承诺。

### G1-B Dating Profile Audit

**目标：** 先验证诊断质量，而不是先验证自动化系统。

本轮需要形成：

1. 人工 Profile Audit 标准评分/审查框架；
2. “免费 #1 优先问题”输出规范；
3. 完整付费 Audit 的价值边界；
4. 隐私与资料处理最低规则；
5. 用户反馈与“是否真正有帮助”的判断方式；
6. 后续什么条件满足后才值得自动化。

本轮禁止：

- 直接开发完整 AI Profile Analyzer；
- 把“上传 Profile”认定为价值体验；
- 无结果证据时承诺“改完一定增加 Match”；
- 收集不必要的个人隐私资料。

### G1-C Mini Craft Night Kit

**目标：** 从产品机会方向收敛到可测试的具体商品。

本轮需要形成：

1. 1–3 个具体 SKU 候选；
2. 每个 SKU 的供应/价格/物流/完成时长/工具需求/成品视觉性初筛；
3. “为什么不去 Amazon 买”的独立站差异化假设；
4. 首轮场景化定位；
5. 不囤货的 Early Access / 意向页测试方案；
6. 什么条件满足后才值得购买样品。

本轮禁止：

- 直接进大货；
- 把 Early Access 当成真实价值体验；
- 在 SKU 未确定前大规模投内容和广告；
- 仅凭品类市场规模判断我们的 Offer 已成立。

---

## 7. 当前 Validation 状态

### Relationship

- 外部 Problem Evidence：`PASS / 但主要是外部证据`
- 外部相似产品付费证据：`PASS / 间接`
- 我们的 Solution Proof：`UNKNOWN`
- 我们的 Activation / Aha：`UNKNOWN`
- 我们的 Intent：`UNKNOWN`
- 我们的 Transaction：`UNKNOWN`
- Repeatability：`UNKNOWN`
- Economics：`UNKNOWN`

### Dating Profile Audit

- 外部 Problem Evidence：`PASS`
- 外部相似服务付费证据：`PASS / 间接`
- 我们的人工诊断 Solution Proof：`UNKNOWN`
- 我们的 Activation / Aha：`UNKNOWN`
- 我们的 Transaction：`UNKNOWN`
- Repeatability：`UNKNOWN`
- Economics：`UNKNOWN`

### Mini Craft

- 品类层面的 Problem / Desire Evidence：`PASS`
- 品类层面的 Transaction Evidence：`PASS / 外部品类证据`
- 我们具体 SKU：`UNKNOWN`
- 我们的 Positioning：`UNKNOWN`
- 我们的 Direct Intent：`UNKNOWN`
- 我们的 Transaction：`UNKNOWN`
- Post-Transaction Activation：`UNKNOWN`
- Economics：`UNKNOWN`

---

## 8. 当前最重要风险

1. **过早做渠道判断**：把 TikTok / Google / Pinterest 的适配猜测误写成已验证结论。
2. **把代理行为当价值体验**：完成测评、上传资料、留邮箱都不自动等于 Aha。
3. **过早自动化**：Dating 若诊断本身未被证明，开发 AI 自动化会放大未知。
4. **实物提前投入**：Mini Craft 在具体 SKU 和意向未验证前囤货风险高。
5. **Claim 过强**：关系和约会产品不能在缺乏直接证据时作因果型效果承诺。
6. **项目分散**：三个产品不能同时进入长期内容运营和大规模广告阶段。
7. **数据不可解释**：多渠道、多 Hook、多价格同时变化会导致无法归因。

---

## 9. 资源优先顺序

当前不是固定预算比例，而按“最低成本、最快获得决策信息、结果最能改变下一步”的原则动态分配。

当前排序：

1. **Relationship**：现有基础最多，距离最小真实闭环最近；
2. **Dating Profile Audit**：可通过人工方式低成本证明核心价值；
3. **Mini Craft**：先做 SKU 收敛与无库存意向测试，避免供应链投入。

该排序不是永久结论；真实证据出现后重新路由资源。

---

## 10. Gate 之后的总体路线

### G2 — 最小实验载体实现

- Relationship：最小测评 + 免费结果 + 完整报告入口 + 事件记录；
- Dating：提交入口 + 人工审查工作流 + 免费结果 + 完整 Audit Offer；
- Craft：具体 SKU 意向页 + 价格假设 + Early Access。

### G3 — 第一批真实行为证据

目标不是流量规模，而是第一次拿到可解释的真实行为数据。

### G4 — 渠道验证

仅在核心价值/Offer 已具备最低直接证据后，开始比较候选渠道职责与质量。

候选渠道目前仅为假设：

- Relationship：短视频发现 + 搜索承接；
- Dating：搜索/社区/短视频；
- Craft：视觉短视频/Pinterest/搜索。

在 G4 前不得写成渠道赢家。

### G5 — Transaction

出现真实付款后，仍不得自动进入 Scale。

### G6 — Repeatability + Economics

并行验证：

- 是否能在多个独立用户、素材、时间段重复；
- CAC、支付费、交付成本、退款、物流、毛贡献等是否成立。

### G7 — Scale Eligibility

只有直接价值、真实成交、重复性和经济性足够，才允许扩大：

- 广告预算；
- 内容产能；
- Creator / Affiliate；
- 自动化；
- 库存；
- 新市场。

---

## 11. 当前下一步动作

### Reviewer 下一步

按顺序推进当前 G1：

1. **Relationship**：设计 5–8 题最小问题集、免费结果结构、付费报告边界、价值体验判断方式；
2. **Dating**：建立人工 Profile Audit 的统一审查框架与输出模板；
3. **Mini Craft**：围绕 Book Nook / Miniature Room 等方向筛选具体 SKU，收敛到 1–3 个可测试候选；
4. 三个分支完成后统一做一次 `G1 REVIEW`，决定是否进入 G2。

### Owner 当前是否需要介入

`NO`

当前没有真实付款、广告扣费、账号授权、库存采购、不可逆操作或重大方向变更。

Reviewer 可以继续自行推进。

Owner 后续可能介入的第一个节点：

- Mini Craft 确认需要购买真实样品；或
- 需要真实广告预算购买渠道样本；或
- 需要账户/支付/生产权限；或
- 首次真实用户付费上线涉及 Owner-only 操作。

---

## 12. 当前项目状态摘要

```text
项目目录 / 唯一交接文档                  ✅
产品组合确认                            ✅
外部需求/市场证据基线                   ✅
获客方法与治理边界                      ✅
Skill 实战不足另行记录                  ✅

G1 最小价值 / 商品定位验证              ←【现在这里】
  ├─ Relationship 最小价值实验设计      ⏳
  ├─ Dating 人工诊断框架                ⏳
  └─ Mini Craft 具体 SKU 筛选           ⏳

G2 最小 Funnel                          ⏳
G3 第一批真实行为                       ⏳
G4 渠道验证                             ⏳
G5 真实付款                             ⏳
G6 重复性 + 盈利性                      ⏳
G7 放大                                 ⏳
```

**最终目标：** 建立可复用的独立站产品验证与获客闭环，而不是维持三个依赖人工持续投喂的项目。  
**当前环节：** G1 — 直接价值 / 商品定位最小验证。  
**本轮完成：** 项目治理、唯一事实源、Gate、三个分支状态与下一步均已冻结。  
**下一步：** Reviewer 直接完成三个 G1 子任务，并进行 Gate Review。  
**注意事项：** 暂不大规模做内容、暂不正式投广告、Dating 暂不自动化、Craft 暂不囤货。  
**Owner 介入：** NO。
