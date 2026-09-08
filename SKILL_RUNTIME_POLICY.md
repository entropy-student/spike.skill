# Skill Runtime Policy（Skill 实时调用总规则）

本仓库所有工作流统一遵循以下规则。

## 核心硬规则

> **凡声称“调用某个 Skill”，必须在本次实际使用该 Skill 的执行节点，重新读取 GitHub 当前版本的原始 Skill 文件后再执行。**

历史读取、助手记忆、对 Skill 的摘要、聊天上下文中的旧副本、缓存理解，都不能替代本轮现场读取。

## 执行要求

1. 使用某个 Skill 前，现场读取其当前 `SKILL.md`。
2. 如果该 Skill 当前任务依赖 `references/*`、规则文件或 metadata，也必须读取当前版本。
3. 同一 Skill 在后续独立步骤再次使用时，再次读取；不得默认上游没有更新。
4. 上游 Skill 若在两次调用之间更新，后一次立即服从新版本。
5. 无法读取当前 Skill 时，不得声称已调用；标记 `LIVE_SKILL_READ_FAILED`。
6. 禁止在读取失败时静默回退到记忆、摘要或旧版本。
7. 如果 `SKILL.md`、`metadata.yml`、README 的版本号不一致，必须识别并标记；规则正文以当前实际读取内容为依据，维护时应修复版本一致性。

## 标准含义

```text
“我记得这个 Skill” ≠ 调用了 Skill

“之前读过这个 Skill” ≠ 调用了 Skill

本次现场读取当前原始文件
+
按当前规则执行
=
调用了 Skill
```

此规则适用于本仓库全部 Skill 组合、Router、Agent 和后续新增工作流。
