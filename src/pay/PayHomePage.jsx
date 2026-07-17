import React from 'react';
import PaymentShell from './PaymentShell';

/** Landing for /pay — checkout links come from CRM with session + token. */
export default function PayHomePage() {
  return (
    <PaymentShell>
      <h1>Secure checkout</h1>
      <p className="pay-muted">
        Open a payment link from AcoLead CRM to continue. This page is not meant to be opened
        directly.
      </p>
    </PaymentShell>
  );
}
