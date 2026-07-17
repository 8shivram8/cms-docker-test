import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  fetchCheckoutSession,
  formatInrFromPaise,
  initiateCheckoutSession,
} from './paymentsApi';
import { captureCheckoutTokenFromHash, getCheckoutToken } from './checkoutToken';
import PaymentShell from './PaymentShell';

export default function CheckoutPage() {
  const { sessionId = '' } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      const token = captureCheckoutTokenFromHash(sessionId);
      try {
        const data = await fetchCheckoutSession(sessionId, token);
        if (cancelled) return;
        if (data.status === 'EXPIRED') {
          setError(
            data.message ||
              'This checkout session has expired. Return to AcoLead CRM and try again.',
          );
          setSession(data);
          return;
        }
        if (data.status === 'COMPLETED') {
          navigate(`/pay/payment-result/${encodeURIComponent(sessionId)}`, { replace: true });
          return;
        }
        setSession(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load checkout session.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId, navigate]);

  const onProceed = async (e) => {
    e.preventDefault();
    if (!sessionId || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const token = getCheckoutToken(sessionId);
      const result = await initiateCheckoutSession(sessionId, token);
      if (result.status === 'COMPLETED') {
        navigate(`/pay/payment-result/${encodeURIComponent(sessionId)}`, { replace: true });
        return;
      }
      if (!result.phonePeRedirectUrl) {
        throw new Error(result.message || 'Payment provider did not return a redirect URL.');
      }
      // Same-tab navigation — origin must be acolead.com (PhonePe Transacting_URL)
      window.location.assign(result.phonePeRedirectUrl);
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : 'Failed to start PhonePe checkout.');
    }
  };

  return (
    <PaymentShell>
      <h1>Confirm payment</h1>
      {loading && <p className="pay-muted">Loading checkout details…</p>}
      {!loading && error && (
        <div className="pay-alert pay-alert-error" role="alert">
          {error}
        </div>
      )}
      {!loading && session && session.status !== 'EXPIRED' && (
        <form onSubmit={onProceed} className="pay-stack">
          <dl className="pay-details">
            {session.invoiceLabel && (
              <>
                <dt>Invoice</dt>
                <dd>{session.invoiceLabel}</dd>
              </>
            )}
            <dt>Amount</dt>
            <dd className="pay-amount">{formatInrFromPaise(session.amountPaise)}</dd>
          </dl>
          <button type="submit" className="pay-btn-primary" disabled={submitting}>
            {submitting ? 'Connecting to PhonePe…' : 'Proceed to PhonePe'}
          </button>
          {submitting && <div className="pay-spinner" aria-hidden />}
          <p className="pay-muted pay-small">
            You will be redirected to PhonePe in this tab. Do not close the window until you return.
          </p>
        </form>
      )}
    </PaymentShell>
  );
}
