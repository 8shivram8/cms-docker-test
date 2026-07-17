# Temporary PhonePe checkout on acolead.com (`/pay`)

Branch: **`Acolead-main-website`** (merge this into `develop` to deploy).

Checkout UI lives in this marketing app so PhonePe sees origin **`https://acolead.com`** (registered Transacting_URL). Existing `PaymentResponseDialog` for license return query params is unchanged.

## Routes

| Path | Purpose |
|------|---------|
| `/pay` | Placeholder (open from CRM) |
| `/pay/checkout/:sessionId` | Confirm amount → PhonePe (token in `#token=`) |
| `/pay/payment-result/:sessionId` | Status poll → return to CRM |

## Env

```bash
REACT_APP_CRM_BACKEND_URL=https://api.acolead.com/crm-backend/api
```

Baked in at `npm run build` (CRA). Deploy via existing `develop` → S3/CloudFront Action.

## CRM / backend (coalitionify-platform)

```bash
PAYMENT_WEB_BASE_URL=https://acolead.com/pay
```

Checkout URLs become `https://acolead.com/pay/checkout/{id}#token=…`.

Backend must allow origin `https://acolead.com` for initiate (CORS + `isPayOrigin`).

## Remove after test

1. Delete `src/pay/` and `/pay` routes from `AppRoutesNew.jsx`
2. Remove `REACT_APP_CRM_BACKEND_URL` if unused
3. Point platform `PAYMENT_WEB_BASE_URL` at `https://pay.acolead.com` when that host is live
