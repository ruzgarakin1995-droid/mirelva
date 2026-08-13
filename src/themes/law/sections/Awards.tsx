"use client";
import React from 'react';

const awards = ['Süper Avukatlar 2026', 'Chambers Global 1. Kategori', "Amerika'nın En İyi Avukatları", 'The Legal 500 1. Kategori'];

export const Awards: React.FC = () => {
  return (
    <section className="law-section" style={{ padding: '4rem 0', borderBottom: '1px solid var(--law-border)' }}>
      <div className="law-container">
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          {awards.map((award, idx) => (
            <div key={idx} style={{
              fontFamily: 'Playfair Display',
              fontSize: '1.25rem',
              color: 'var(--law-text-muted)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textAlign: 'center'
            }}>
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

