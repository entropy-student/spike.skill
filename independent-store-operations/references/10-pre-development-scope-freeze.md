# 开发前范围冻结 — v0.6.0

日期：2026-09-17

> **状态说明（2026-09-17 后续 Review）**：本文是开发前范围冻结的历史 Gate 记录，保留用于审计。本文末尾原写的 `G2_SAFE_SCANNER_SERVICE_IMPLEMENTATION` 已在后续执行中完成 Reviewer 证据验收，不再是当前 NEXT。当前状态请以 `../00_START_HERE.md` 与 `../validation/03-g2-safe-scanner-v0-reviewer-pass.md` 为准。

## Reviewer 最终判断

开发前理论与验证基础：

`PASS_PRE_DEVELOPMENT_FOUNDATION_2026-09-17`

但采用**分层解除 HOLD**，不启动整个商业项目。

## 允许解除 HOLD 的范围

仅：

> **Scanner V0 受限实现 / 测试环境开发**

允许：

- 建立扫描服务代码骨架；
- 落实 Scrapy 静态优先 + 浏览器有限兜底；
- 落实 Normalized Facts Schema；
- 实现已经冻结的 17 条 V0 可信规则；
- 建立任务状态、超时、错误分类、证据对象；
- 本地 / CI / staging 验证；
- 回归现有 Fixture 和 Gold Set；
- 补实现所需的安全控制和可观测性。

## 仍然 HOLD

以下不因本 Gate 通过而启动：

- WordPress 产品页面集成；
- 付费解锁；
- 正式支付；
- VPS 生产部署；
- 真实用户生产扫描；
- 正式商业上线；
- 新增未经 Reviewer 校准的自动诊断规则；
- 用模型自由分析整页 HTML 并生成无证据问题。

## Scanner V0 冻结范围

首版规则固定为 17 条：

### 安全 / 上下文 Gate
- GATE-001
- GATE-002

### 通用可信核心
- CORE-001
- CORE-002
- CORE-003
- CORE-004
- CORE-006
- CORE-007
- CORE-009
- CORE-010

### 实物规则
- PHYS-001
- PHYS-002

### 订阅规则
- SUB-001
- SUB-002
- SUB-003
- SUB-004
- SUB-005

开发阶段不得为了提高测试通过率偷偷调整规则含义。
规则变化必须先回到 Reviewer Gate。

## 暂不进入 V0

第二阶段：

- 错误恢复；
- 变体一致性；
- 精确商品搜索；
- 尺码支持。

继续延后：

- 兼容信息充分性。

## 实现架构冻结

```text
用户 URL
↓
URL / DNS / 网络安全 Gate
↓
Scrapy 静态优先
↓
必要时浏览器有限兜底
↓
Normalized Facts
↓
店型 / 交易拓扑 / 适用性判断
↓
17 条冻结规则
↓
结构化 Issue / PASS / NOT_APPLICABLE / CONTEXT_INSUFFICIENT
↓
证据对象
```

浏览器不得用于绕过明确的站点阻断 / 限流。

## 开发阶段强制回归

每次核心变更至少保持：

```text
规则 Fixture          51 / 51
真实事实 Gold         26 / 26（页面未真实变化时）
真实规则断言          28 / 28
意外 ISSUE            0
context misuse        0
```

## 生产前仍需解决

受限实现可以开始，但生产上线前至少还需要：

1. SSRF / DNS rebinding 的连接时网络出口约束；
2. 多租户 / 队列 / 并发 / 超时 / 取消；
3. 资源与模型成本上限；
4. 浏览器进程隔离；
5. robots / WAF / rate-limit 状态治理；
6. 证据存储生命周期；
7. 日志脱敏；
8. 生产错误恢复；
9. 更多真实 ISSUE 校准；
10. WordPress 接口安全审查。

## 当时的下一 Gate（历史记录）

`G2_SAFE_SCANNER_SERVICE_IMPLEMENTATION`

目标不是“做完整产品”，而是实现一个：

> **能够安全接收公开网址、提取可验证事实、运行冻结规则、返回结构化证据，并严格知道什么时候不该下结论的扫描服务。**

## 后续状态

Recovery Review 已确认：

```text
G2_SAFE_SCANNER_V0 = REVIEWER EVIDENCE PASS
G1_WORDPRESS_LOCAL_BASELINE = PASS
G3_RULE_ENGINE_V0 = MERGED / CLOSED
SOURCE_RECOVERY = PASS
NEXT = G4_WORDPRESS_SCANNER_TOP3_LOCAL_INTEGRATION
```

完整 Scanner V0 与 WordPress G1 源码已在项目交接快照中确认并重新回归；因此源码 UNKNOWN 已解除。本文仅保留作为开发前历史 Gate，不应再用其旧 NEXT 驱动执行。
