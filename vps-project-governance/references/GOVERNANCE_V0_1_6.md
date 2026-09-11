# Governance v0.1.6 Reference

> 本文件把原 `spikersun-delivery-governance-v0.1.6` 规范整理为 Skill 参考版。术语已按 v0.1.6 最终状态统一：项目 Reviewer 当前真相使用 `REVIEWER_HANDOFF.md`；`PROJECT_HANDOFF.md` 仅为 legacy alias。Governance 状态以 `GOVERNANCE_HANDOFF.md` 的 `ACTIVE / VALIDATED-ON-XIANYU / EVOLVING` 为准。

## 1. Goal

建立一套可跨聊天、跨 Agent、跨项目复用的 Reviewer / Execution Agent 交付治理，适用于 backend automation、browser automation、database、payments、frontend+backend 与 Shared VPS 多项目部署。

当前验证状态：

```text
Shared VPS Infrastructure  I0-I7 PASS / SEALED
Xianyu                     X0-X7 FINAL PASS / PRODUCTION SEALED
Governance v0.1.6          ACTIVE
```

## 2. Role Model

```text
Owner
  ↓
Reviewer / Architect / Gatekeeper
  ↓
Execution Agent
  ↓
Evidence
  ↓
Reviewer PASS / RETURN
```

只有 Reviewer 可以正式 PASS。`PASS_CANDIDATE != PASS`。

Owner 仅保留：付款/购买、身份/账号授权、Secret 创建或轮换、不可逆删除、material production enablement、重大业务/产品/合规选择。

Reviewer 负责架构、边界、Gate、Prompt、Evidence 审核、PASS/RETURN 和 `REVIEWER_HANDOFF.md`。

Executor 只执行授权范围，必须 preflight、rollback-aware、记录 evidence，不能自行扩大 scope 或进入下一 Gate。

## 3. Source of Truth

1. Owner latest explicit instruction
2. Shared VPS Contract（if applicable）
3. project `REVIEWER_HANDOFF.md`
4. current Reviewer Gate Prompt / decision
5. `EXECUTION_EVIDENCE.md`
6. `EXECUTOR_HANDOFF.md`
7. README / history / chat

## 4. P0 Discovery / Intake

无可靠 Handoff、结构不完整、状态不清的项目先只读 Discovery。

至少识别：目标、运行状态、入口、runtime/framework、frontend/backend/worker/scheduler、database/persistence、Secrets、accounts/Cookies/Tokens、ports、domains、Docker/Compose、external APIs、browser automation、uploads/object storage、tests、backup/restore、线上资源、风险、license、Shared Infra conflicts。

未知写 `UNKNOWN`，禁止猜。完成后先创建最小 `REVIEWER_HANDOFF.md`。

## 5. Standard Gate Loop

```text
DISCOVER → REVIEW → DEFINE GATE → PREFLIGHT → EXECUTE
→ EVIDENCE → CLEANUP/REGRESSION → PASS_CANDIDATE
→ REVIEWER INDEPENDENT REVIEW → PASS / RETURN
```

Gate 要可验证、可回滚、风险边界明确。

v0.1.6 允许相邻 Gate 在同一 rollback domain、同一 evidence boundary 且失败不扩大风险时压缩执行。

## 6. Change Classification

### A — Project-local / Reversible

项目代码、项目 Compose 参数、项目 health check、项目 backup script、临时测试对象。Reviewer 授权后可直接执行。

### B — Shared Infrastructure

SSH、UFW、Docker daemon、host 80/443、Shared Caddy、shared cloudflared、shared network、Shared Infra backup/monitoring。

业务项目不得修改。需要时：

`RETURN_SHARED_INFRA_CHANGE_REQUIRED`

### C — Owner-only / Consequential

付款、身份、Secret、不可逆删除、material production enablement、重大业务/合规选择。

## 7. Shared VPS Default Contract

- host 公共能力与业务项目分层；
- 每个项目独立目录、Compose stack、data 与 backup；
- 业务 app 默认不随意 publish host port；
- Shared Caddy / cloudflared / network 由 Infra 项目治理；
- business Gate 不得顺手修改 host-level infra。

## 8. Evidence Standard

优先记录：

- exit status；
- file permission/ownership；
- process/container/restart state；
- port/network；
- HTTP positive/negative checks；
- image/release identity；
- checksums；
- DB integrity/counts；
- backup/restore compatibility；
- before/after delta；
- cleanup result；
- resource accounting。

Evidence 必须脱敏。测试成功之外还要证明安全边界没有被破坏。

## 9. Secret Evidence Policy

不输出：private key、password、Cookie、Token、webhook URL、Access credential、encryption key、private business identifiers、decrypted private data。

只记录必要 metadata，例如 path、mode、RO mount、present/valid、compatibility PASS、value not recorded。

## 10. Data Project Rules

- test 不直接写真实迁移 DB；
- writable rehearsal 用副本；
- SQLite backup 用 backup API；
- encrypted DB 与 matching key 作为 recovery pair；
- backup/restore 验证 integrity/counts/decrypt compatibility；
- migration 前后保留 baseline。

## 11. Frontend + Backend Rules

- private runtime 先 PASS，再开放 external route；
- external route 后立即 anonymous negative test；
- private admin 不因方便直接 public host port；
- HTTPS + WebSocket 验证 `wss://` / upgrade；
- frontend/backend 分别验证。

## 12. Automation / Browser Agent Rules

自动化首次真实运行前必须有真实 wiring 的 SAFE_MODE 或等效中央 fail-closed guard。

要证明：worker/scheduler/business actions 均受控、restart 后仍安全、browser profile/session lifecycle 明确、持久化幂等、防重复成立。

首次真实业务动作必须 bounded Canary：single target、max actions、short expiry、central guard、Reviewer authorization、non-target delta=0、restart/duplicate prevention。

## 13. Reviewer Output Contract

至少让 Owner 看清：整体进展、最终目标、当前 Gate、已确认事实、UNKNOWN、本轮完成、允许/禁止、验收结果、风险/rollback、下一步、注意事项、是否需要 Owner。

## 14. Executor Return Contract

成功：

```text
PASS_CANDIDATE_<GATE>
STOP_AT_REVIEWER: YES
```

失败返回精确 reason：

```text
RETURN_PREFLIGHT_DRIFT
RETURN_TEST_FAILURE
RETURN_DATA_MIGRATION_RISK
RETURN_SHARED_INFRA_CHANGE_REQUIRED
RETURN_SECRET_RISK
RETURN_OWNER_ACTION_REQUIRED
```

## 15. Governance Continuity

Governance 自身必须有唯一 `GOVERNANCE_HANDOFF.md`。

项目 Handoff 与 Governance 分层：

```text
Governance = 长期、跨项目、可复用规则
Project Reviewer Handoff = 某项目当前状态/风险/Gate/下一步
Execution Evidence = 某轮实际发生什么
```

只有跨项目可复用、影响安全/Shared Infra、经真实项目验证的经验才升级 Governance。

规则状态：`VALIDATED` / `PROVISIONAL` / `CANDIDATE`。

## 16. v0.1.1 Lessons

- 文档声明不等于代码 wiring；
- test 不直接写真实 migration data；
- Docker build context 必须排除 live data / secrets；
- 架构变化同步更新 preflight / backup / health；
- 自动化首次部署必须有 SAFE_MODE；
- health 区分 process / web / DB / business worker；
- HTTPS WebSocket 验证协议；
- 真实业务 smoke 前证明持久化幂等 / restart 防重复。

## 17. v0.1.2 Lessons

- Governance 本身有唯一 Handoff；
- Future Reviewer 不从聊天猜规范；
- 通用规则与项目事实分层；
- 新规则用 VALIDATED/PROVISIONAL/CANDIDATE 标记。

## 18. v0.1.3 Lessons

已上线项目修改进入 Change Gate：

```text
Owner request → Reviewer current handoff → impact/risk → Change Gate
→ Executor → Evidence → PASS/RETURN → update handoff
```

Remote Ops / Always-on Executor 只作为候选能力：即使未来有远程常驻 Executor，它也不能兼任 Reviewer，高风险与 Shared Infra 仍受控。

## 19. v0.1.4 Lessons

- 代码修改 Gate 必须留下 durable artifact；
- 正式 build chain 必须可复现；
- 测试对象、交接对象、生产候选必须证明一致。

## 20. v0.1.5 Lessons

- SAFE_MODE 要在真实持久数据 + permanent Compose + restart/recreate 条件下验证；
- 先 private deploy，再 external exposure；
- route 创建后 immediate anonymous negative test；
- anonymous 可直达 private app 时立即撤销 route 并 RETURN。

## 21. v0.1.6 — Handoff Ownership

固定层级：

```text
GOVERNANCE_HANDOFF.md
SHARED_VPS_HANDOFF.md
<project>/REVIEWER_HANDOFF.md
<project>/EXECUTOR_HANDOFF.md
<project>/EXECUTION_EVIDENCE.md
```

`REVIEWER_HANDOFF.md` 只由 Reviewer 更新；`EXECUTOR_HANDOFF.md` 只写事实；旧 `PROJECT_HANDOFF.md` 不与新文件并存为两个 truth。

## 22. v0.1.6 — Owner Operation Minimization

- 同 rollback/evidence domain 的相邻 Gate 优先压缩；
- 一个 execution package 尽量跨 checkpoint 使用；
- accepted Gate 不重跑，除非 drift；
- Owner 只处理 Owner-only；
- Reviewer 不把技术细节推回 Owner；
- Executor 常规失败 rollback/RETURN，不让 Owner 排命令。

## 23. v0.1.6 — Conditional Preauthorization

允许 bounded preauth，例如：

`IF Phase A PASS THEN authorize Phase B production enablement`

任何 prerequisite FAIL/RETURN/ambiguity/state drift 自动失效。失败后的下一次 production write 需要 fresh explicit authorization。不能跨重大 scope、Secret、account 或 Shared Infra 变化。

## 24. v0.1.6 — Canonical Deployment Manifest

生产 deploy/recreate：

1. 显式 canonical manifest；Compose 必须 `-f <production-compose>`；
2. 写前 render/validate；
3. sealed image 时优先 no-build/no-pull；
4. 写后立即验证 running image/release identity；
5. mismatch 立即 rollback。

## 25. v0.1.6 — Resource / Disk Governance

至少记录 root `df`、source/data/backups、production image、BuildKit/cache、browser runtime、deployment delta、cleanup reclaimed bytes。

默认禁止 broad prune。Cleanup 必须 allowlist + reference check + before/after + regression。

参考阈值：60% 关注，70% 计划清理，80% 紧急处理。

## 26. v0.1.6 — REAUTH Lifecycle

```text
auth invalid
→ pause affected account
→ persist REAUTH_REQUIRED
→ one notification per transition
→ full target-bound reauth
→ identity match fail-closed
→ encrypted in-place update
→ read-only validation
→ reauth success != business resume
→ explicit controlled resume
```

Notification Secret 不进入源码、普通 ZIP、Handoff、Evidence 或日志。

## 27. v0.1.6 — First Real Action Canary

首次真实动作：single target、max action count、short expiry、central guard、Reviewer explicit authorization、finish 后 safe state、non-target delta=0、restart/duplicate prevention。

## 28. v0.1.6 — Production Closeout

Xianyu X7 Final 验证了 canonical explicit Compose、exactly-one intended seller、automatic-delivery-only、SAFE_MODE 解除后回归、private-only/Access boundary、post-production recovery pair、rollback readiness、storage baseline。

上线后的 optimization/dependency upgrade/image slimming 进入独立 Change Gate，不重开 initial onboarding。

## 29. Version Policy

v0.1.6 暂作为 production-closeout validated baseline。

不要因每个小 incident 改 Governance。收集未来跨项目验证模式后批量升级。下一阶段优先让同一治理在另一类真实 production project（例如 web/payment）中生存，再考虑 v0.2.0。
