import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  checkoutFromPaymentLink,
  fetchPaymentLink,
  formatInrFromPaise,
} from './paymentsApi';
import PaymentShell from './PaymentShell';

export default function RenewalPage() {
  const { token = '' } = useParams();
  const navigate = useNavigate();
  const [view, setView] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // Harden public renewal pages against indexing.
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) {
      robots.setAttribute('content', 'noindex, nofollow');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = 'noindex, nofollow';
      document.head.appendChild(meta);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPaymentLink(token);
        if (!cancelled) setView(data);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unable to load payment link.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const onContinue = async (e) => {
    e.preventDefault();
    if (!token || submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const result = await checkoutFromPaymentLink(token);
      if (result.kind === 'ALREADY_PAID' || result.kind === 'NOT_PAYABLE') {
        setView(result);
        setSubmitting(false);
        return;
      }
      if (!result.checkoutUrl) {
        throw new Error('Unable to start checkout for this renewal link.');
      }
      // Prefer client navigation when URL is same-origin /pay/checkout/...
      try {
        const url = new URL(result.checkoutUrl, window.location.origin);
        if (url.pathname.startsWith('/pay/checkout/')) {
          navigate(`${url.pathname}${url.hash}`, { replace: true });
          return;
        }
      } catch {
        // fall through
      }
      window.location.assign(result.checkoutUrl);
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : 'Failed to start checkout.');
    }
  };

  return (
    <PaymentShell>
      <h1>Licence renewal</h1>
      {loading && <p className="pay-muted">Loading renewal details…</p>}
      {!loading && error && (
        <div className="pay-alert pay-alert-error" role="alert">
          {error}
        </div>
      )}
      {!loading && view?.kind === 'ALREADY_PAID' && (
        <div className="pay-stack">
          <div className="pay-alert pay-alert-ok" role="status">
            {view.message ||
              'Payment already completed. Sign in to AcoLead to view your invoice.'}
          </div>
          <p className="pay-muted">
            For privacy, invoice and account details are not shown on this public link.
          </p>
        </div>
      )}
      {!loading && view?.kind === 'NOT_PAYABLE' && (
        <div className="pay-alert pay-alert-error" role="alert">
          {view.message || 'This payment link is no longer available.'}
        </div>
      )}
      {!loading && view?.kind === 'PAYABLE' && (
        <form onSubmit={onContinue} className="pay-stack">
          <dl className="pay-details">
            {view.invoiceLabel && (
              <>
                <dt>Item</dt>
                <dd>{view.invoiceLabel}</dd>
              </>
            )}
            {view.billingOrderId && (
              <>
                <dt>Order</dt>
                <dd>{view.billingOrderId}</dd>
              </>
            )}
            <dt>Amount</dt>
            <dd className="pay-amount">{formatInrFromPaise(view.amountPaise)}</dd>
          </dl>
          <button type="submit" className="pay-btn-primary" disabled={submitting}>
            {submitting ? 'Preparing checkout…' : 'Continue to payment'}
          </button>
          <p className="pay-muted">
            You will confirm the amount on the next step before paying with PhonePe.
          </p>
        </form>
      )}
    </PaymentShell>
  );
}
