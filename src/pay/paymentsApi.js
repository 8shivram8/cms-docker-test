function getApiBase() {
  const base = process.env.REACT_APP_CRM_BACKEND_URL;
  if (typeof base === 'string' && base.trim()) {
    return base.replace(/\/$/, '');
  }
  // Prod default for temporary acolead.com/pay checkout
  return 'https://api.acolead.com/crm-backend/api';
}

async function parseJson(res) {
  const text = await res.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = { message: text || res.statusText };
  }
  if (!res.ok) {
    const message = body?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }
  return body;
}

function authHeaders(token) {
  const headers = { Accept: 'application/json' };
  if (token) {
    headers['X-Checkout-Token'] = token;
  }
  return headers;
}

export async function fetchCheckoutSession(sessionId, token) {
  const res = await fetch(
    `${getApiBase()}/v1/payments/checkout-sessions/${encodeURIComponent(sessionId)}`,
    {
      method: 'GET',
      headers: authHeaders(token),
      cache: 'no-store',
      credentials: 'omit',
    },
  );
  return parseJson(res);
}

export async function initiateCheckoutSession(sessionId, token) {
  const res = await fetch(
    `${getApiBase()}/v1/payments/checkout-sessions/${encodeURIComponent(sessionId)}/initiate`,
    {
      method: 'POST',
      headers: {
        ...authHeaders(token),
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
      credentials: 'omit',
      body: '{}',
    },
  );
  return parseJson(res);
}

export async function fetchCheckoutStatus(sessionId) {
  const res = await fetch(
    `${getApiBase()}/v1/payments/checkout-sessions/${encodeURIComponent(sessionId)}/status`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      credentials: 'omit',
    },
  );
  return parseJson(res);
}

export function formatInrFromPaise(amountPaise) {
  const rupees = (Number(amountPaise) || 0) / 100;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(rupees);
}
