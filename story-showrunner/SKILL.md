---
name: story-showrunner
description: >
  通用故事型知识视频 Showrunner / Control Plane。输入主题，或在未指定主题时从运行时 Calendar 自动取当天选题；
  经 Domain Adapter、Knowledge/Causal Core、Story、Writer、Timing Compiler、Director、Asset Compiler、
  Production Compiler、Executor Adapter 与 QA，产出可执行的视频生产包。当前状态为 CANDIDATE，核心规则已从
  ai-story-showrunner 验证项目抽取，但完整 Antigravity 端到端成片尚未最终验证。
version: 0.1.0-candidate
language: zh-CN
status: CANDIDATE_E2E_NOT_YET_PROVEN
---

# Story Showrunner

## 1. 什么时候使用

用于把“一个知识/概念/时事/现实问题”变成可持续生产的故事型视频。

典型调用：
- “开始今天的视频”
- “今天按排期做一期”
- “用这个主题做成故事视频”
- “继续上一期，从文案/分镜/生产包往下做”
- “换成商业/科学/历史题材，但保留同一生产体系”

如果用户未指定主题，默认通过 Runtime State Locator 解析当天 Calendar。

## 2. 产品边界

本 Skill 是 **Control Plane**，不是单一 Writer、Director、生图模型或剪辑器。

Canonical pipeline：

```text
TopicProvider
→ DomainAdapter
→ Knowledge/CausalCore
→ StoryEngine
→ Writer
→ TimingCompiler
→ Director
→ Frame/AssetCompiler
→ ProductionCompiler
→ ExecutorAdapter
→ QA
```

核心必须保持 domain-neutral。

AI 只是当前第一个 Domain Adapter。

## 3. 默认主题优先级

```text
EXPLICIT_USER_TOPIC
> EXPLICIT_USER_OVERRIDE
> TODAY'S_CALENDAR
> TOPIC_RADAR
> EVERGREEN_BANK
```

不要把 Calendar / Registry / Daily Radar 数据写死进 Skill；它们属于 runtime state。

见：
`references/RUNTIME_STATE_LOCATOR.md`

## 4. 默认 Owner 介入策略

正常生产：

```text
optional invocation override
→ autonomous pipeline
→ final video review
```

默认不要求 Owner 逐阶段确认：
- story premise
- final script
- Production SRT
- Director plan
- first-batch key frames
- image prompts
- Production Package
- individual TTS lines

只有 unresolved RETURN / BLOCKED、真实账号授权、不可逆外部动作或 Owner 明确要求时升级。

## 5. Canonical stage ownership

### Topic / Research
Domain Adapter 负责来源、领域事实与 causal mechanism。

### Knowledge
锁定：
- factual claims
- evidence/source
- uncertainty
- misconception
- one causal mechanism
- bounded implication

### Story
锁定人物欲望、行动、Gap、complication、turning point、payoff。
机制必须作为世界规则驱动结果，而不是最后附加解释。

### Writer
锁定 spoken text。
Writer 不拥有最终时间码。

### Timing Compiler
```text
locked spoken script
→ Speech Units
→ semantic timing kind
→ Voice Timing Profile
→ Production SRT
→ TTS Manifest
```

### Director
消费 Production SRT，只设计 visual rhythm / shot meaning / POV / state change，不重新决定语速或说话时长。

### Asset Compiler
把 Visual Beat 编译成 Frame Blueprint、引用绑定、执行模式、最终 prompt/edit row。

### Production Compiler
组装 deterministic execution package。

### Executor
接近零创意自由。缺少创意决策必须 RETURN，不得补脑。

## 6. 当前 Candidate 默认配置

除非用户覆盖，当前验证配置可使用：

- domain: `adapters/domains/ai/`
- editorial: `profiles/editorial/bilibili-first-person-story/`
- visual: `profiles/visual/simplified-flat-narrative-comic/`
- character: `profiles/character/char-ip-001/`
- voice: `profiles/voice/cosyvoice-300m-v2.1.json`
- executor: `adapters/executors/antigravity/`
- TTS: `adapters/tts/cosyvoice/`
- image: `adapters/image/nano-banana/`

这些都是 Profile/Adapter，不是 Core 不变量。

## 7. 关键规则

1. **One brain, many workers**：Worker 不互相自由改上游。
2. **Knowledge before style**：Writer 不得改 locked KnowledgeCore。
3. **Timing before Director**：Production SRT 在 G4/Director 之前完成。
4. **Visual meaning before prompt**：G4 决定画面意义，Frame Blueprint 决定注意力结构，G5 再生成 prompt。
5. **Reference truth outranks generated continuity**：上一张生成图永远不是角色身份真相。
6. **Pilot is calibration-only**：关键帧人工抽样不是每期必经 Gate。
7. **Fail closed**：无法满足 contract 时 RETURN，不得静默猜。
8. **Runtime state stays outside Skill**：Calendar、Registry、episode artifacts、local paths 都不应写死。

## 8. 加载顺序

执行本 Skill 时按需读取：

1. `references/ARCHITECTURE.md`
2. `references/PIPELINE.md`
3. `references/WRITER_CONTRACT.md`
4. `references/TIMING_COMPILER.md`
5. `references/DIRECTOR_LANGUAGE.md`
6. `references/VIEWPOINT_GRAMMAR.md`
7. `references/FRAME_BLUEPRINT.md`
8. `references/CHARACTER_IDENTITY_CONTRACT.md`
9. `references/ASSET_COMPILER.md`
10. `references/EXECUTOR_CONTRACT.md`
11. `references/QA_AND_RETURN_CODES.md`
12. 当前 Domain Adapter / Profile / Provider Adapter
13. 当前 runtime Calendar / Registry / episode state

不要从 stale 项目历史推断当前规则。

## 9. Candidate 状态

当前：
`CANDIDATE / E2E_NOT_YET_PROVEN`

已验证：
- Topic/Story/Writer/Director/Asset contracts
- Character drift controls
- Viewpoint grammar
- Voice Timing Profile v2.1
- Production-package boundary

尚待：
- 用 Candidate 规则编译完整 Production SRT + TTS Manifest
- 完整 Antigravity package
- Antigravity TTS + images + edit + export
- final-video QA

完整 E2E PASS 后才允许升级为 CANONICAL。
