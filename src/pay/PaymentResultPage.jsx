import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCheckoutStatus, formatInrFromPaise } from './paymentsApi';
import PaymentShell from './PaymentShell';

const TERMINAL = new Set(['COMPLETED', 'FAILED', 'EXPIRED']);

export default function PaymentResultPage() {
  const { sessionId = '' } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let pollTimer;
    let redirectTimer;
    let countdownTimer;

    const load = async () => {
      try {
        const status = await fetchCheckoutStatus(sessionId);
        if (cancelled) return;
        setData(status);
        setError(null);

        if (!TERMINAL.has(status.status)) {
          pollTimer = window.setTimeout(load, 2500);
          return;
        }

        if (status.status === 'COMPLETED' && status.canReturn && status.returnUrl) {
          setSecondsLeft(5);
          countdownTimer = window.setInterval(() => {
            setSecondsLeft((s) => (s == null || s <= 1 ? 0 : s - 1));
          }, 1000);
          redirectTimer = window.setTimeout(() => {
            window.location.assign(status.returnUrl);
          }, 5000);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load payment status.');
          pollTimer = window.setTimeout(load, 4000);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
      if (pollTimer) window.clearTimeout(pollTimer);
      if (redirectTimer) window.clearTimeout(redirectTimer);
      if (countdownTimer) window.clearInterval(countdownTimer);
    };
  }, [sessionId]);

  const status = data?.status;
  const title =
    data?.displayStatus ||
    (status === 'COMPLETED'
      ? 'Payment successful'
      : status === 'FAILED' || status === 'EXPIRED'
        ? 'Payment failed'
        : 'Payment pending');

  return (
    <PaymentShell>
      <h1>{title}</h1>
      {error && (
        <div className="pay-alert pay-alert-error" role="alert">
          {error}
        </div>
      )}
      {data && (
        <dl className="pay-details">
          {data.invoiceLabel && (
            <>
              <dt>Invoice</dt>
              <dd>{data.invoiceLabel}</dd>
            </>
          )}
          {typeof data.amountPaise === 'number' && (
            <>
              <dt>Amount</dt>
              <dd className="pay-amount">{formatInrFromPaise(data.amountPaise)}</dd>
            </>
          )}
          <dt>Status</dt>
          <dd>
            <span className={`pay-badge pay-badge-${(status || 'PENDING').toLowerCase()}`}>
              {status}
            </span>
          </dd>
        </dl>
      )}
      {data?.message && <p className="pay-muted">{data.message}</p>}
      {status === 'COMPLETED' && data?.returnUrl && secondsLeft != null && (
        <p className="pay-muted pay-small">Returning to AcoLead in {secondsLeft}s…</p>
      )}
      {data?.canReturn && data?.returnUrl && (
        <a className="pay-btn-primary" href={data.returnUrl}>
          Return to AcoLead
        </a>
      )}
      {!data?.returnUrl && status === 'COMPLETED' && (
        <p className="pay-muted">You can close this window and return to AcoLead CRM.</p>
      )}
    </PaymentShell>
  );
}
