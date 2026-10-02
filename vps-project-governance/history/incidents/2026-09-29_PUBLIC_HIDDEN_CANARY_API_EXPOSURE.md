# Incident — Hidden Canary remained anonymously API-discoverable

STATUS: CLOSED
DATE: 2026-09-29
PROJECT: Mini Craft Night Kit
CATEGORY: PUBLIC_EXPOSURE / NEGATIVE_ACCESS

## What happened

A USD 1.00 Canary product was `publish` with catalog visibility set to `hidden`. It did not appear in the public Shop HTML, but unauthenticated WooCommerce Store API search still returned it and the product remained purchasable while real commerce and Soft Launch were disabled.

## Verified cause

Catalog/UI visibility was not a complete exposure boundary. The application/API surface still exposed a public purchasable object.

## Impact

A supposedly dormant Canary remained reachable through an anonymous machine-readable path inconsistent with the project's pre-commerce safety state.

## Resolution used

- Pause unrelated cleanup and treat exposure reduction as the priority safety Gate.
- Preserve the Canary fixture but move it to a non-public state (`publish -> draft`) instead of deleting it.
- Validate every relevant anonymous surface separately: Shop HTML, Store API search, Store API direct object, public permalink and purchasability.
- Do not create a cart/order/payment merely to test containment.
- Future reactivation requires a dedicated payment/launch Gate.

## Current standard rule

See active `VNEXT.md` §11C “Deployment / Network / Resources”: after public exposure, verify anonymous/negative access boundaries; a hidden UI state does not prove an API/object is non-public.

## Source pointers

- `mini-craft-night-kit/docs/REVIEWER_DECISION_K9B_R2R1_RETURN_RECONCILED_DOCKER_COUNT_RESOLVED_CANARY_CONTAINMENT.md`.
- `mini-craft-night-kit/review-packets/K9B_R2R2A_PRODUCT_1224_PUBLIC_EXPOSURE_CONTAINMENT.md`.

No Secret value is stored here.
