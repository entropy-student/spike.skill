# Part 1 Source Collection — 选题与内容策略

Status: `COLLECTED / NOT_SIMPLIFIED / AWAITING_OWNER_REVIEW`

本目录只保存源材料快照，不代表其中所有规则都会进入最终“漫画叙事” Skill。

## A. Direct — 直接相关

来自 `entropy-student/project/ai-story-showrunner`：

- docs/TOPIC_OPERATING_SYSTEM.md
- docs/DAILY_TOPIC_AUTOMATION.md
- docs/DAILY_TOPIC_AUTOMATION_V2.md
- docs/DAILY_TOPIC_AUTOMATION_V2_PROPOSAL.md
- docs/CONTENT_STRATEGY_AND_CONVERSION.md
- docs/TOPIC_OS_V021_MEANING_DEDUP_VALIDATION.md
- docs/TOPIC_SYSTEM_FULL_SYNC_AUDIT_20260927.md
- docs/BILIBILI_CHANNEL_STRATEGY.md
- docs/SEASON0_21_DAY_PLAN.md
- schemas/topic_opportunity.schema.json
- schemas/topic_registry_entry.schema.json

来自 `entropy-student/spike.skill/story-showrunner`：

- adapters/domains/ai/DAILY_TOPIC_PROVIDER.md
- adapters/domains/ai/TOPIC_AND_KNOWLEDGE.md
- profiles/editorial/bilibili-first-person-story/PROFILE.md

## B. Boundary — 与下一阶段边界重叠，暂不删除

项目侧：

- docs/G2_VALIDATION_REVIEW.md
- docs/G3_VALIDATION_REVIEW.md
- docs/G3R_EDITORIAL_REVIEW.md
- docs/NARRATIVE_STYLE_CONTRACT.md
- docs/WRITER_QUALITY_CONTRACT.md
- docs/STORY_SHOWRUNNER_SKILL_TARGET.md

Skill 侧：

- story-showrunner/SKILL.md
- story-showrunner/CANDIDATE_STATUS.md
- story-showrunner/MIGRATION_MANIFEST.md
- story-showrunner/references/PIPELINE.md
- story-showrunner/references/ARCHITECTURE.md
- story-showrunner/references/WRITER_CONTRACT.md

## C. Runtime Samples — 用于后续 Case / 回归验证

完整保留当前 Topic Ledger 的核心状态：

- topic-ledger/README.md
- topic-ledger/EVERGREEN_BANK.md
- topic-ledger/topic-registry.jsonl
- topic-ledger/calendar/2026-09.md
- topic-ledger/calendar/2026-10.md
- topic-ledger/daily/TEMPLATE.json
- topic-ledger/daily/2026-09-21.json
- topic-ledger/daily/2026-09-22.json
- topic-ledger/daily/2026-09-23.json
- topic-ledger/daily/2026-09-24.json
- topic-ledger/daily/2026-09-25.json
- topic-ledger/daily/2026-09-26.json
- topic-ledger/daily/2026-09-27-v021-runtime-proof.json
- topic-ledger/daily/2026-09-27.json
- topic-ledger/daily/2026-09-28.json

## D. Suspected External — 疑似相关，先备份再判断

来自 `acquisition-growth-radar`：

- SKILL.md
- references/01-evidence-ladder.md
- references/02-proof-and-claim.md
- references/03-message-offer-channel.md
- references/04-experiments-and-economics.md
- references/05-operating-loop.md
- templates/lite-growth-loop.md

## 完整性

本轮共复制 **48 份源文件**。

复制阶段逐文件检查：
`source Git blob SHA == copied blob SHA`

结果：
`48 / 48 identical`

原项目与原 `story-showrunner` 均未修改。

## 注意

“Direct / Boundary / Runtime Samples / Suspected External” 只是整理用标签，不是权威等级，也不是最终结构。
