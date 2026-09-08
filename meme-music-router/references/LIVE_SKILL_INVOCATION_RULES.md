# Live Skill Invocation Rules（Skill 现场读取规则）

> **硬规则：凡工作流中出现“调用某个 Skill”，必须在该次实际使用它之前，现场读取 GitHub 当前版本。历史读取、聊天记忆、摘要、缓存理解均不得替代。**

## 1. Source of Truth

GitHub 当前默认分支中的原始 Skill 文件是唯一执行依据。

调用时必须优先读取：

1. 目标 Skill 的当前 `SKILL.md`；
2. `SKILL.md` 明确要求或当前任务实际依赖的 references / rules / metadata；
3. 若文件存在版本或规则冲突，以当前仓库内容为准，并明确指出冲突。

不得把以下内容当作本次正式调用：

- 之前某一轮已经读取过的 Skill；
- 助手对 Skill 的记忆；
- 对 Skill 的二次摘要或口头概括；
- 旧版本复制到聊天中的内容；
- “我大概知道这个 Skill 怎么做”。

## 2. Fresh Read Before Every Actual Skill Use

每一个实际执行节点都要重新读取其上游 Skill。

例如本工作流：

```text
找热梗
→ 现场读取 entertainment-rander
→ 执行

找近期热歌
→ 现场读取 music-trend-radar
→ 执行

生成 / 改编歌词与曲风
→ 现场读取 music-quality-radar
→ 执行
```

如果同一 Skill 在后续独立步骤再次被正式调用，也应再次读取，而不是假设它从上一阶段到现在没有变化。

## 3. Latest Wins

如果上游 Skill 在两次步骤之间更新：

> **后一次调用必须立即使用新版本。**

禁止为了保持前后回答一致而继续沿用旧规则。

## 4. No Silent Fallback

如果无法读取当前 Skill：

- 不得声称“已调用 Skill”；
- 不得偷偷退回助手记忆中的旧规则；
- 应明确标记 `LIVE_SKILL_READ_FAILED`；
- 可以说明当前无法完成“严格 Skill 调用版”的原因。

## 5. References Must Also Be Fresh When Required

如果当前 `SKILL.md` 指向其他规则文件，例如：

- `references/SCORING.md`
- `references/TIERING.md`
- `references/MUSIC_OUTPUT_RULES.md`
- 其他当前任务依赖文件

则本次执行也要读取这些文件的当前版本。

只读 `SKILL.md`、却继续使用旧 reference 内容，不算完整现场调用。

## 6. Invocation Trace

正式执行时应尽可能保留本次调用痕迹：

```yaml
live_skill_invocation:
  skill:
  repository:
  path:
  version_if_present:
  git_sha_if_available:
  read_at_execution: true
```

不要求每次都把这些技术信息展示给用户，但内部执行必须基于本轮真实读取结果。

## 7. Version Consistency Check

若同一个 Skill 的 `SKILL.md`、`metadata.yml`、README 等版本号不一致：

1. 不得假设它们已经同步；
2. 以实际规则正文为执行依据；
3. 标记版本不一致；
4. 在维护 Skill 时修复一致性。

## 8. Core Rule

> **调用 Skill ≠ 记得 Skill。**
>
> **调用 Skill = 在当前执行时刻重新读取当前原始 Skill，并按当前规则执行。**
