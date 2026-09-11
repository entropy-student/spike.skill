# Usage Scenarios｜常用场景与话术

> 这些话术来自 Governance v0.1.6 的实际使用方式，目的不是让 Owner 背规则，而是用最短指令触发正确治理流程。

## 1. 全新项目，没有 Handoff

```text
按 VPS Project Governance v0.1.6 接管这个项目。
先进入 P0 Discovery，只读，不执行。
完整读取项目，建立项目地图、真实状态、风险、Shared VPS 冲突，并创建唯一 REVIEWER_HANDOFF.md。
技术细节你自行决定，只有 Owner-only 事项再找我。
```

## 2. 老项目，有 Handoff，继续推进

```text
按 VPS Project Governance v0.1.6 继续这个项目。
先读当前 REVIEWER_HANDOFF.md 和最新 Evidence。
不要重复已经 PASS 的 Gate，除非发现 material drift。
告诉我当前 Gate、风险和下一步，然后直接推进可自行处理的部分。
```

## 3. Reviewer 给 Executor 出任务

```text
按 VPS Project Governance v0.1.6 生成下一轮 Execution Pack。
优先压缩可安全合并的 Gate，尽量一个包跨 checkpoint 继续执行，减少 Owner 文件搬运。
必须包含 preflight、allowed/forbidden scope、rollback、evidence requirements 和明确 STOP 条件。
```

## 4. 把执行包交给 Codex / Executor

```text
完整读取执行包并严格按当前 Gate 执行。
先 preflight，再写入；不得扩大 scope、不得修改 Shared Infra、不得自行进入下一 Gate。
完成后更新 EXECUTION_EVIDENCE.md 和 EXECUTOR_HANDOFF.md，返回 PASS_CANDIDATE_* 或明确 RETURN_*，然后停止在 Reviewer。
```

## 5. Executor 跑完，Reviewer 验收

```text
按 VPS Project Governance v0.1.6 独立 Review 这次执行结果。
不要因为 Executor 自报 PASS_CANDIDATE 就直接 PASS。
核对 Evidence、回归、rollback、资源变化和边界。
给出 Reviewer PASS 或 RETURN，并更新 REVIEWER_HANDOFF.md。
```

## 6. 已上线项目修 Bug / 升级 / 优化

```text
这是一个 Production Change Gate。
按 VPS Project Governance v0.1.6 处理，不重新跑整套 onboarding。
先确认当前 production baseline 和 rollback 点，只修改本次范围；完成后验证 release identity、health、业务范围、备份和资源变化。
```

## 7. 当前业务项目需要改 Shared Infra

```text
停止当前业务项目 Gate。
按 VPS Project Governance v0.1.6 返回 RETURN_SHARED_INFRA_CHANGE_REQUIRED。
切换到独立 Shared Infra Review，不允许业务项目顺手修改宿主机公共能力。
```

Shared Infra 典型包括：SSH、UFW、Docker daemon、宿主机 80/443、Shared Caddy、cloudflared、shared network、host-level backup/monitoring。

## 8. 想减少中间反复授权

```text
条件式预授权：IF Phase A 全部 PASS THEN authorize Phase B [具体动作]。
任何 prerequisite FAIL / RETURN / ambiguity / state drift 自动取消本次授权；除此之外不得扩大动作范围。
失败后的下一次 production-write retry 必须重新取得 fresh explicit authorization。
```

## 9. 换聊天 / 换 Reviewer

```text
按 VPS Project Governance v0.1.6 接手。
不要从聊天历史猜状态。
先读 GOVERNANCE_HANDOFF.md、Protocol、Shared VPS Handoff/Contract（如适用）、当前项目 REVIEWER_HANDOFF.md。
先给我当前项目地图、Gate、风险和下一步；在边界不清前不执行写操作。
```

## 10. 换一个新的 Executor

```text
按 VPS Project Governance v0.1.6 执行。
以当前项目 REVIEWER_HANDOFF.md + 本轮 Execution Prompt 为准；如部署在 Shared VPS，再读取 Shared VPS Contract。
不要自己改架构，不扩大 scope；异常精确 RETURN Reviewer。
```

---

# 最常用的一句话

```text
这个项目按 VPS Project Governance v0.1.6 推进，优先减少我的操作。
先读现有 Handoff；能安全合并的 Gate 自行压缩，已 PASS 的阶段不要重复跑。
除付款、账号/身份授权、Secret、不可逆操作、material production enablement 和重大方向/合规变更外，技术判断由 Reviewer 自行完成。
```

---

# 已上线项目的一句话

```text
按 VPS Project Governance v0.1.6 给这个已上线项目开一个 Change Gate，完成 [目标]。
不要重新跑 onboarding；保护当前 production baseline，先定义 rollback，失败自动 rollback/RETURN。
```

---

# Reviewer 每轮最低汇报

```text
整体进展
最终目标
当前 Gate
本次完成
下一步
注意事项
是否需要 Owner 介入
```

必要时再展开：已确认事实、UNKNOWN、允许/禁止、验收条件、Evidence、风险/rollback。

---

# 不该说的话

避免把治理退化成让 Owner 参与技术调度，例如：

```text
你想让我用 A 目录还是 B 目录？
你觉得 Compose 怎么写？
你来判断这个测试是否算 PASS。
你先帮我排查命令为什么错了。
```

除非这些选择真的改变业务、成本、安全或不可逆后果，否则应由 Reviewer 判断。
