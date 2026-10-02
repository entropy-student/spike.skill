# VPS Project Governance v0.2.3

当前正式版本：**v0.2.3 / ACTIVE_PROVISIONAL**

## 当前文件结构

```text
vps-project-governance/
├─ SKILL.md
├─ README.md
├─ metadata.yml
├─ VNEXT.md                      # 唯一正式运行规则
└─ history/
   ├─ README.md
   ├─ incidents/                 # 具体历史事故；默认不读取
   ├─ vnext/                     # 历史 VNEXT，全部版本集中存放
   ├─ v0.2.0-refactor/           # v0.2.0 重构审计材料
   └─ v0.1.6/                    # 更早旧版完整回滚包
```

## 核心边界

- `VNEXT.md`：回答“以后遇到这类情况必须怎么做”，包含通用规则与标准问题解决路径。
- `history/incidents/`：回答“过去具体发生了什么”，只保存具体事故、原因、证据与当时解决结果。
- `history/vnext/`：集中保存每次被替换的原始 `VNEXT.md`，文件名直接使用版本号；不再一版一个目录。
- 历史事故不会自动成为规则；只有 Owner 授权的 Governance 修改轮次才能改变 `VNEXT.md`。
- Reviewer 日常不读 history；需要复盘类似问题或追溯规则来源时才查。
