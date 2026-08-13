"use client";
import React from 'react';

const offices = [
  { city: 'New York', address: '120 Broadway, Suite 4500\nNew York, NY 10271', phone: '+1 (212) 555-0198' },
  { city: 'Washington D.C.', address: '1001 Pennsylvania Ave NW\nWashington, DC 20004', phone: '+1 (202) 555-0145' },
  { city: 'Londra', address: '1 Canada Square, Canary Wharf\nLondra E14 5AB, Birleşik Krallık', phone: '+44 20 7946 0958' }
];

export const Offices: React.FC = () => {
  return (
    <section className="law-section law-section-dark">
      <div className="law-container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Küresel Erişim</h4>
          <h2 className="law-title">Ofislerimiz</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-3">
          {offices.map((office, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '2rem', color: 'var(--law-accent)', marginBottom: '1rem' }}>ğŸ›</div>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '1rem' }}>{office.city}</h3>
              <p style={{ whiteSpace: 'pre-line', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '1rem' }}>
                {office.address}
              </p>
              <div style={{ color: 'var(--law-accent)', fontWeight: 600 }}>{office.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

