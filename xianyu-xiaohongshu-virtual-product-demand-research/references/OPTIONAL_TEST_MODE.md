# Optional Test Mode v2.1

只在用户明确要求“哪个值得卖 / 测 / 优先做”时读取。

## 1. 先路由问题

### RESEARCH_NEXT
用户问：
- 哪个值得继续研究？
- 哪个最值得补证？

此时可以在存在 Critical Unknown 时给出 `RESEARCH_NEXT`。

它只表示**下一步研究优先级**，不表示应该真实发布、收款或投入。

### TEST_READY
用户问：
- 哪个已经值得真实测试？
- 哪个值得卖？

只有候选通过 readiness gate 才能标 `TEST_READY`。

## 2. Readiness Gate

至少检查：

1. **Demand**：D3 或 D4；纯供给/单一弱 Intent 不够。
2. **Policy / Trade Path**：当前平台规则、类目资格、交易路径没有 Critical Unknown。
3. **Competition / Substitute**：知道主要同质化和免费替代。
4. **Trust / Proof**：有可执行的证明方案。
5. **Economics**：价格、关键成本、人工、退款/维护至少能做粗算，且没有明显负单元经济。
6. **Delivery / Rights / Risk**：版权、隐私、账号、争议、更新和人工依赖没有未处理关键阻断。
7. **Operator Fit**：只使用用户本次明确提供的资源/约束。
8. **Counterevidence**：明确什么新证据会 KILL。

任一关键项为 UNKNOWN：
- 不能叫 TEST_READY；
- 改为 `RESEARCH_NEXT` 或 `HOLD`。

## 3. 输出标签

允许：

~~~text
TEST_READY        = 已具备真实最小测试条件，可有多个
RESEARCH_NEXT     = 需求值得继续研究，但还没准备好真实测试
HOLD              = 当前不值得继续推进，等待特定条件
KILL              = 已有明确反证/阻断
NO_PICK           = 没有候选达到要求
~~~

只有用户明确要求“只选一个”时，才可以从 TEST_READY 中再标：

~~~text
PRIORITY_TEST
BACKUP
~~~

因此 `PRIORITY_TEST` 永远表示：
> 已经 TEST_READY，并且是在多个可测试候选中的优先项。

不能把“最值得补证”叫 PRIORITY_TEST。

## 4. Test Priority

候选都接近时，再比较：
- `Cost-to-Learn`：下一条有效证据的时间/现金成本；
- `Cost-of-Being-Wrong`：选错后的现金、时间、账号、退款/声誉和合规代价。

不要求百分制，也不强制唯一赢家。

## 5. Minimum Validation

只对 TEST_READY 设计真实验证。

任何真实测试开始前，必须先写：

~~~text
BUDGET_CAP=
TIMEBOX=
SUCCESS_SIGNAL=
FAIL_OR_KILL_SIGNAL=
STOP_CONDITION=
~~~

没有预算上限、时间盒和停止条件，不进入真实测试。

优先信号：

~~~text
payment > deposit / committed order > qualified inquiry > click/search > collect/like
~~~

闲鱼：清晰 Offer → 合格询盘 / 议价 / 付款 / 退款争议。  
小红书：不同问题与 Proof → 商品动作 / 合格私信 / 搜索进入 / 收藏点赞。

RESEARCH_NEXT 的下一步应是“补哪条证据”，而不是直接发布/收款。
