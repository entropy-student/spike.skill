# Solo Business Engine v0.3｜整包 Review / 反对者视角

**审查日期**：2026-10-08。**范围**：v0.2 的 31 个文件、原有 acquisition-growth-radar v0.2 的 19 节映射、公开市场 B2B/B2C 两类场景、结构测试。**身份**：本次由同一助手在隔离审稿清单下执行“批判性自评”，不应冒称外部独立 Reviewer。

## 严重度与结论
- 初版等级：`NOT_PRODUCTION_READY`（未有真实客户、真实报价、支付/退款及 Agent 行为盲测）。
- 本轮 Gate：`TEXT_CONTRACT_CHECKED`、`PUBLIC_MARKET_EXAMPLES_RESEARCHED`。不是 `MARKET_TRANSACTION_VALIDATED`。
- v0.3 采用“独立上层 Skill + 旧获客 Skill 作为已具体报价后的可选下游”，**未修改 GitHub/main，也未替换 v0.2 原件**。

## 最重要的修复清单
| ID | 严重度 | v0.2 缺口/反例 | v0.3 处理 | 剩余风险 |
|---|---|---|---|---|
| R01 | HIGH | 静态测试存在、但无真实公开机会跑完整 Gate | 新增 `REAL_MARKET_PILOT_20261008.md` 两条购买机制核验 | 无本人真实成交 |
| R02 | HIGH | 把 Upwork 的 $5/$150 标价误当已售价格的风险 | `PUBLIC_LISTING`、预算类型、来源时间、身份/状态拆分 | 岗位是否仍接受申请只能账号侧验证 |
| R03 | HIGH | 发现交易迹象，但找不到买方/自己没资格接触 | 独立 Contact Eligibility / Buying Center / Offer Proof 关卡 | 真实账号与语言资质未知 |
| R04 | HIGH | 没有严格定义“付钱”“合同”“退款” | v0.3 付款状态分级与付款后交付/实际退款约束 | 无支付系统实证 |
| R05 | HIGH | 20 个 fixtures 只是存在，并未推理运行 | 新增 20 个案例预期决定表 + 可执行数据合同校验；**明确不是 LLM 测试** | 真正 Agent 模型盲测仍待执行 |
| R06 | HIGH | 执行 SOP 没体现独立商业经济性排除 | 首次报价前做 SKU 级工时下界、预算、返工核验 | 一切工时为假设，真实需 Demo 计时 |
| R07 | MEDIUM | 资料台账来源类别与已检验程度易混 | 新增 `PUBLIC_SOURCE_VERIFICATION.md` 区分本轮网页复核的范围 | 全部历史 35 项来源未逐条做本轮复核 |
| R08 | MEDIUM | 客户评论与店铺销量可能误当该商品近期订单 | Etsy 样本专门标出商品历史评论/店铺总销售量/发布日期 | 完整品类需求季节性未知 |
| R09 | MEDIUM | 可能默认中国、美国或跨境有同样外联权 | 明确用户实际经营司法辖区 UNKNOWN，报价外联前查规则 | 需要 Owner 经营实际信息 |
| R10 | MEDIUM | 多项目优先级靠故事或文献热度 | 仅按可证交易意向、准入、风险、证明成本对**下一实验**排序 | 无统计学级市场大小比较 |
| R11 | MEDIUM | “75% 获客”易机械执行影响真实售后 | 履约优先，75/25 保留为可改动初始分配 | 尚未测本人真实每周工时 |
| R12 | LOW | 术语过多、Agent 容易越写越长 | 主文件保持轻量，只读加载 Review/参考，具体行动不超过一个实验 | Agent 仍有长文本习惯风险 |

## 文件组覆盖清单
| 组别 | v0.2 文件 | 结论与动作 |
|---|---|---|
| 路由与合同 | `SKILL.md`, `README.md` | MODIFY：加时效、成交定义和 Review 导航 |
| 文献与结论 | `RESEARCH_REPORT.md`, `SOURCE_LEDGER.md` | KEEP with limitation：来源为叙述性证据，不宣布总体有效；新增本轮公开来源审查 |
| 方法对照 | `METHOD_COMPARISON.md` | KEEP：保留原 19 节审核，禁止直接迁移旧规则 |
| 日常运行 | `OPERATING_MANUAL.md` | MODIFY by extension：补基于真实市场的单条买家操作卡 |
| 审稿门槛 | `INDEPENDENT_REVIEW_PROTOCOL.md`, `QA_REPORT.md`, `CHANGELOG.md`, `FILE_MANIFEST.txt` | KEEP + new review artefacts，不能把自评冒充独立外审 |
| 基础论证 | `references/01_reasoning_model.md`, `02_opportunity_framework.md`, `03_buyer_money_trails.md` | KEEP：机制完整；补公开预算≠成交和时效假阴性 |
| 渠道与销售 | `references/04_channels.md`, `05_sales_offer.md` | KEEP + concrete SOP：加平台内应答、报价前演示和会话退出 |
| 经济与实验 | `references/06_economics.md`, `07_experiments.md` | KEEP：双账本正确，补毛收入/净可得及真实工时核验 |
| 合规与对抗 | `references/08_compliance.md`, `09_adversarial.md` | KEEP：全局适用界限，但法规实施时仍需重新检查 |
| 模板 | `templates/channel_experiments.csv`, `economics.csv`, `lead_ledger.csv`, `opportunity_ledger.csv` | KEEP：schema 可读；增加 `public_market_events.csv` 区分公开证据 |
| 文本模板 | `templates/owner_profile.md`, `lite_experiment.md`, `offer_one_pager.md`, `weekly_review.md` | KEEP：剩余真实输入 UNKNOWN 不填造假 |
| 既有示例 | `examples/FOUR_MODEL_WALKTHROUGHS.md`, `REAL_CASE_SOURCE_AUDIT.md` | KEEP：一律明确 SYNTHETIC/HISTORICAL，不当本用户实收 |
| 旧测试 | `tests/fixtures.json`, `static_contract_check.py` | KEEP + supplement：它们仅查文本/CSV，不是 Agent 推理验证 |

## 真正运行后的建议判定
1. 先让另一个不知道作者结论的 Agent 用本 ZIP 做公开独立新市场复现；核对是否源头不同、是否能找到资质/准入、能否淘汰低价值预算。
2. 用固定的 20 个 fixtures 做逐案 Agent 输出，和 `review/SCENARIO_EXPECTATIONS.md` 人工核查；测 forbidden-claim violation、Buyer/Why Us/Unknown 漏项。
3. Owner 只需在发生有成本外联、预售、签约、真正交付时明确相应许可和预算；未授权保持只读。
4. 通过至少一次**真实本人付款 + 履约验收/退款观察**后仍然只可标 `TRANSACTION_OBSERVED`；规模化须跨买家重复、经济性完整验证。

**总评**：`PASS_WITH_OPEN_HIGH_RISK_GATES`。结构和审计边界可供下一轮实际行动使用；不能称产品化商业 Agent 已验证赚钱。
