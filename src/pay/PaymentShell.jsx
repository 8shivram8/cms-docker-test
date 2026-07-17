import React from 'react';
import './pay.css';

export default function PaymentShell({ title = 'AcoLead Payment', children }) {
  return (
    <main className="pay-shell">
      <div className="pay-card">
        <p className="pay-brand">{title}</p>
        {children}
      </div>
      <p className="pay-footer-note">Payments are processed securely via PhonePe</p>
    </main>
  );
}
