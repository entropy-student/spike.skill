# Production Provider Canary and Recovery Contract rev1

> Operational addendum to VPS Project Governance v0.1.6.  
> Status: `ACTIVE / VALIDATED-ON-DUJIAONEXT-ALIPAY`; cross-provider clauses remain `PROVISIONAL` until independently exercised by additional live Provider canaries.  
> Purpose: govern real-money / real-provider canaries without confusing Provider success, local payment success, order state, and fulfillment state.

---

## 1. Core invariant

A real payment Canary is not one boolean.

It is a chain of independently evidenced facts:

```text
account/product permission
  → application identity
  → merchant identity
  → signing / verification material
  → provider create
  → buyer action
  → callback / webhook
  → provider read-only query
  → local durable payment commit
  → order state
  → fulfillment according to the product's real fulfillment semantics
```

`Provider paid` does not imply `local Paid`, and `local Paid` does not imply `fulfillment complete`.

Never collapse these layers into one `PASS` marker.

---

## 2. Provider identity map must be frozen before a real Canary

Before the first real Provider call, Reviewer/Executor must establish the non-secret identity map appropriate to that Provider:

- login/account identity used to administer the Provider account;
- merchant / seller / PID / business-account identity;
- application identity (`AppID`, `client_id`, etc.);
- product/contract permission actually bound to that application/merchant;
- environment (`sandbox` / `production`);
- signing mode and verification mode;
- callback / webhook route and Provider-specific acknowledgement contract;
- interaction mode (Page/WAP/QR/approval/cashier/etc.);
- minimum/maximum Canary amount and currency;
- fulfillment type of the Canary product (`automatic`, `manual`, or project-defined equivalent).

These are separate identities. Do not infer that an application belongs to a particular merchant merely because the same human can manage both.

If the platform auto-creates a new application or merchant account during product signing, treat it as a distinct identity until explicitly correlated.

Required fail-closed marker:

```text
RETURN_PROVIDER_IDENTITY_OR_PERMISSION_UNRESOLVED
```

---

## 3. Product permission is not application configuration

A valid AppID/key pair can still fail real payment because the required Provider product is not signed, activated, effective, or bound to that merchant/application.

Before diagnosing code, separate:

```text
APPLICATION_CONFIGURED
PRODUCT_PERMISSION_ACTIVE
MERCHANT_BINDING_CORRECT
```

Account-side KYC/KYB, product signing, merchant binding and Provider authorization remain Owner/account-side checkpoints.

Do not rewrite application code to bypass a missing account-side permission.

---

## 4. One Provider, one Canary, one bounded buyer action

For each real Provider Canary:

- enable only the intended Provider/channel when technically possible;
- keep unrelated Providers disabled;
- create one reviewed Canary transaction;
- allow exactly one buyer approval/payment/transfer action;
- do not create another transaction merely because the UI is stale or local callback processing has not completed;
- after Provider-side success is known, all further work is reconciliation, not another payment.

Recommended markers:

```text
ONLY_ONE_ACTIVE_PROVIDER_PER_CANARY=YES
REAL_PAYMENT_RETRY_AFTER_PROVIDER_SUCCESS=NO
```

A standing Owner authorization may cover bounded reversible diagnostics, read-only queries, project-local fixes, one-channel-at-a-time enablement and evidence updates. It never silently includes a new real payment, 2FA, wallet signature, KYC/KYB, Secret entry/rotation, refund, irreversible action or formal production enablement.

---

## 5. Read-only Provider query must really be read-only

A method named `QueryPayment` is not sufficient evidence that it is non-mutating.

Before using a query for reconciliation, Reviewer/Executor must verify the actual implementation and endpoint semantics.

A reconciliation query must not:

- create a new Provider order;
- capture/authorize/settle;
- refund;
- cancel;
- mutate local business state as a hidden side effect.

If the only existing high-level path mixes query with mutation, use or implement the smallest isolated read-only Provider query boundary first.

Required marker:

```text
PROVIDER_QUERY_SEMANTICS=READ_ONLY_VERIFIED
```

---

## 6. Callback / webhook completion contract

A callback Gate must verify all of the following before returning the Provider's success acknowledgement:

1. signature / webhook authenticity;
2. expected application/environment;
3. server-owned merchant/seller/account identity where the Provider supports it;
4. durable order/payment correlation;
5. exact amount and currency;
6. allowed Provider terminal/intermediate status;
7. idempotency / replay handling;
8. durable local commit or idempotent recognition of an already-committed event.

Only after that may the handler return the Provider-specific exact acknowledgement, for example an exact plain-text body such as `success` where required.

Never "fix" callback retries by returning success unconditionally.

Unit tests of signature verification alone are insufficient. Require a database-backed first-delivery and same-event replay proof, including the exact response body/content type and downstream state/event identity.

---

## 7. Merchant ownership and key rotation

The callback's merchant/seller field is authenticated input only after signature verification, but production ownership should still be compared with server-owned merchant metadata when the Provider exposes such identity.

Do not confuse:

- application public key;
- application private key;
- Provider/platform public key used to verify callbacks;
- merchant/seller/PID/account ID;
- AppID/client ID.

A key rotation or new signing configuration must be treated as a staged change:

```text
new signing material configured
  → read-back / parse compatibility
  → callback/query verification
  → only then retire old material
```

Do not retire old key material merely because the new configuration screen exists.

Historical diagnosis must be superseded when stronger read-back proves a different root cause; never preserve an outdated `ROOT_CAUSE` as current truth.

---

## 8. Provider success + local timeout/cancel is a recovery problem, not a payment retry

If Provider-side query proves terminal payment success but local payment/order has expired or auto-canceled, do not ask the Owner to pay again.

Classify the timing and cancellation reason first.

Automatic recovery is eligible only when all relevant invariants pass, typically:

- Provider response authentication = PASS;
- Provider terminal success = PASS;
- merchant/application/channel ownership = PASS;
- order correlation = PASS;
- exact amount/currency = PASS;
- `provider_paid_at <= local_expiry_or_auto_cancel_time`;
- local cancellation reason = automatic timeout, not manual cancellation;
- inventory/product/business invariants still permit recovery.

Recovery must occur through application/domain transaction logic, not ad-hoc direct SQL row edits.

The recovery transaction should lock the relevant payment/order records, preserve idempotency, recover only the proven auto-timeout case, and dispatch fulfillment according to the original fulfillment type.

Fail closed when:

- Provider paid after the accepted expiry boundary;
- local cancellation was manual;
- ownership/amount/order/currency is ambiguous;
- business inventory/fulfillment invariants cannot be re-established.

---

## 9. Fulfillment semantics must match the Canary fixture

Before asking a Canary to prove fulfillment, inspect the actual product/child-order fulfillment type.

Do not use a `manual` product to prove automatic delivery.

For a manual item, the valid expected result may be:

```text
payment success
→ order paid
→ canonical manual-fulfillment pending boundary
→ automatic delivery actions = 0
```

For an automatic item, the expected result may be:

```text
payment success
→ order paid
→ automatic fulfillment exactly once
```

The exact state names are project-defined and must be read from source/tests; Governance must not invent them.

If the selected Canary fixture cannot prove the desired invariant, return a fixture-semantics classification rather than changing business semantics to force a PASS:

```text
RETURN_CANARY_FIXTURE_SEMANTICS_MISMATCH
```

---

## 10. Evidence and supersession rules

A real-payment Gate should record compact, non-secret evidence for each relevant layer:

```text
PROVIDER_CREATE
BUYER_ACTION
PROVIDER_REMOTE_STATUS
CALLBACK_OR_WEBHOOK_AUTH
CALLBACK_ACK
SERVER_OWNED_MERCHANT_CORRELATION
AMOUNT_CURRENCY_ORDER_CORRELATION
LOCAL_PAYMENT_STATE
LOCAL_ORDER_STATE
FULFILLMENT_STATE
DUPLICATE_FULFILLMENT
REAL_PAYMENT_RETRY
REFUND_ACTION
```

Provider transaction IDs, buyer identities, raw payloads and credentials should remain inside the protected execution/application boundary unless a non-secret identifier is explicitly required for Owner-facing action.

When UI snapshot, earlier Evidence and fresh authoritative read-back disagree, the fresh source-of-truth read-back supersedes the stale snapshot. Record the supersession explicitly.

Reviewer status language must stay objective:

- use `IN_PROGRESS`, `BLOCKED`, `PASS_CANDIDATE`, `PASS`, `RETURN_*`;
- do not call something the "last step" or "final step" while unresolved `UNKNOWN`, Provider/account-side dependency, recovery rule, or fulfillment invariant remains.

---

## 11. Owner interruption minimization

The default real-payment workflow is:

```text
Executor/Reviewer preflight everything safe
  ↓
STOP only at real buyer/account/wallet action
  ↓
Owner performs exactly one bounded action
  ↓
Executor/Reviewer automatically continue read-back / callback / reconciliation / evidence
  ↓
STOP at Reviewer PASS/RETURN or the next truly Owner-only checkpoint
```

Do not ask the Owner to inspect logs, design scripts, choose technical retry strategy, copy files between runtimes, or decide routine reconciliation details.

---

## 12. Validated incident pattern — DujiaoNext / Alipay production Canary

The 2026-09-15 DujiaoNext Alipay Canary validated several rules in this addendum:

- a real buyer payment succeeded while the local transaction initially failed to close;
- callback delivery and cryptographic verification had to be distinguished from merchant ownership validation;
- the configured merchant Seller ID belonged to a different managed merchant identity than initially assumed;
- after the Owner corrected server-owned seller metadata, a subsequent Provider callback was accepted and the local payment reached success;
- the Provider-side query proved terminal success, exact amount/order/currency, and that payment occurred before the local automatic timeout;
- the local order had already auto-canceled, requiring a recovery rule rather than a second payment;
- the Canary product's only child item was `manual`, so it could not legitimately prove automatic fulfillment.

The incident demonstrates why a production Canary must validate identity, Provider truth, local state, timeout recovery and fulfillment semantics as separate invariants.

---

## 13. Relationship to v0.1.6 core

This Contract does not change the v0.1.6 Owner/Reviewer/Executor model or PASS/RETURN authority.

It operationalizes the core rules for real Provider/payment work:

- bounded Canary;
- Owner-minimized checkpoints;
- fail-closed external actions;
- evidence before PASS;
- no blind retry after ambiguous or remote-success outcomes;
- recovery through reviewed application semantics rather than manual data fabrication.
