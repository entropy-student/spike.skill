# 后续系统支付与履约接入准则 v1.0

> 定位：这是后续项目的**默认架构准则（Default Architecture Decision）**，不是绝对唯一方案。  
> 默认情况下按本文件执行；只有当业务能力、合规、平台限制或技术边界明确不适配时，才允许通过 Reviewer / Architecture Change Gate 改方案。

---

## 1. 默认结论

以后新增网站、插件、小程序、独立站或其他业务系统时：

```text
支付渠道不要重复接。
优先统一复用现有 Dujiao-Next + Shared Payment Layer。
```

默认架构：

```text
业务前端 / 插件 / 小程序 / 独立站
                ↓
           Dujiao-Next
       商品 / 订单 / 支付 / 履约
                ↓
      Shared Payment Layer
       /        |        \
   Alipay     PayPal     GMPay
```

---

## 2. 虚拟产品

### 默认方案：全部优先接 Dujiao

适合：

- 测评报告
- 下载资料
- 激活码 / License
- AI 次数
- 会员权益
- 数字内容
- 人工交付服务
- 自动发卡 / 自动报告

流程：

```text
创建 Dujiao 商品
→ 创建订单
→ 用户支付
→ Provider 回调 / 查单
→ order = paid
→ 根据 fulfillment_type 履约
```

### 自动履约

```text
fulfillment_type = automatic
```

支付成功后可执行：

- 自动发卡
- 自动开权益
- 自动增加次数
- 自动生成报告
- 自动提供下载权限

### 人工履约

```text
fulfillment_type = manual
```

支付成功后进入待履约状态，由人工或后续业务流程完成。

**不得为了追求“自动化”而修改商品真实履约语义。**

---

## 3. 实物产品

### 默认方案：简单实物商品也优先接 Dujiao

Dujiao 可以继续作为：

```text
商品中心
+ 订单中心
+ 支付入口
+ 履约状态入口
```

简单实物商品默认：

```text
fulfillment_type = manual
```

典型流程：

```text
用户下单
→ Dujiao 创建订单
→ 支付成功
→ order = paid / fulfilling
→ 人工或外部流程发货
→ 回写履约结果
```

适用于：

- SKU 不复杂
- 单仓库或无需仓库管理
- 运费简单
- 不需要复杂拆单
- 不需要实时物流系统
- 订单量较低或中等

---

## 4. 什么时候不应该只靠 Dujiao

出现以下需求时，应考虑外接或独立 ERP / OMS / WMS：

- 多 SKU 复杂组合
- 多仓库
- 库存锁定与释放
- 复杂运费模板
- 拆单 / 合单
- 部分发货
- 物流轨迹
- 退换货
- 采购 / 补货
- ERP / WMS 联动
- 大规模实物订单

此时推荐：

```text
Dujiao
负责：
商品入口 / 订单入口 / 支付 / 用户侧状态

ERP / OMS / WMS
负责：
库存 / 仓储 / 发货 / 物流 / 售后
```

两者通过 API / webhook 同步。

---

## 5. Shared Payment Layer 的定位

支付渠道永远只接一次。

统一支付层负责：

- Alipay
- PayPal
- GMPay
- 后续其他 Provider
- Provider credentials
- 签名 / 验签
- callback / webhook
- server-side query
- 幂等
- 退款
- 审计
- Provider routing

业务系统不得直接保存 Provider Secret。

---

## 6. 新系统默认接入方式

以后新项目接支付时，优先按以下顺序判断：

```text
① 能否直接作为 Dujiao 商品/订单？
    ↓ YES
接 Dujiao

② 是否需要复杂实物履约？
    ↓ NO
仍接 Dujiao，manual fulfillment

③ 是否需要 ERP / OMS / WMS？
    ↓ YES
Dujiao + 外部履约系统

④ 是否业务模型根本不适合 Dujiao？
    ↓ YES
才允许直接接 Shared Payment API
```

所以：

> **直接调用 Payment API 应是例外，不是默认。**

---

## 7. 新项目最小接入要求

每个新业务系统只需要完成：

1. 定义自己的业务订单号；
2. 映射 Dujiao 商品 / 订单；
3. 明确 fulfillment_type；
4. 配置业务 callback / webhook；
5. 做金额、币种、订单 correlation；
6. 本地 / Sandbox 验证；
7. 最后一笔最小金额真实 Canary。

不再重新：

- 申请一套支付架构；
- 重写支付宝逻辑；
- 重写 PayPal 逻辑；
- 重写 GMPay 逻辑；
- 重做签名/验签；
- 重做退款框架。

---

## 8. 后续支付真实测试原则

Provider 真实测试统一遵循：

```text
1 Provider
→ 1 笔真实 Canary
→ 最小安全金额
→ 只付款一次
→ 后续依赖 webhook + read-only query 验证
```

禁止：

- Provider 已成功后再次付款；
- 因本地状态异常重新付款；
- 因 callback 失败重复创建真实订单；
- 为调试普通代码路径反复花真钱。

普通回归使用：

```text
fixture
mock
sandbox
recorded protocol regression
```

---

## 9. 架构决策级别

本文件不是“参考看看就算了”，而是后续项目的**默认技术决策**。

状态：

```text
DEFAULT_ARCHITECTURE = ACTIVE
DEFAULT_PAYMENT_ENTRY = DUJIAO_NEXT
DEFAULT_SIMPLE_PHYSICAL_FULFILLMENT = DUJIAO_MANUAL
DEFAULT_COMPLEX_PHYSICAL_FULFILLMENT = DUJIAO + ERP/OMS/WMS
DIRECT_SHARED_PAYMENT_API = EXCEPTION_PATH
```

但它也不是不可改变的绝对规则。

如果新项目出现明确不适配，应走：

```text
Architecture Change Gate
```

Reviewer 需要说明：

- 为什么 Dujiao 不适配；
- 为什么不能通过现有接口扩展；
- 替代方案；
- 额外维护成本；
- Secret / Payment 风险；
- 是否会重复建设支付能力。

只有理由成立，才允许偏离默认方案。

---

## 10. 最终默认架构

```text
                    ┌─ 虚拟产品站
                    ├─ 插件
                    ├─ 小程序
                    ├─ AI 服务
                    └─ 简单实物商城
                           │
                           ▼
                     Dujiao-Next
              商品 / 订单 / 支付 / 履约
                           │
                           ▼
                 Shared Payment Layer
                  /        |        \
             Alipay      PayPal     GMPay


复杂实物项目：

Dujiao-Next
    │
    ├── 支付 / 订单入口
    │
    └── API / webhook
            ↓
       ERP / OMS / WMS
       库存 / 仓储 / 物流 / 售后
```

---

## 11. 一句话准则

> **以后新系统默认先接 Dujiao；虚拟产品和简单实物产品都优先由 Dujiao 管商品、订单、支付和履约状态；只有复杂实物履约或业务模型明确不适配时，才外接 ERP/OMS/WMS 或直接调用 Shared Payment API。支付渠道本身永远只接一遍。**