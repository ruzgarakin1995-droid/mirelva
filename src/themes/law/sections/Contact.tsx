"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <section className="law-section law-section-alt">
      <div className="law-container">
        <div className="grid grid-2" style={{ backgroundColor: 'var(--law-bg)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
          
          <div style={{ padding: '4rem', backgroundColor: 'var(--law-primary)', color: 'var(--law-text-light)' }}>
            <h4 className="law-subtitle" style={{ color: 'var(--law-accent)' }}>Gizli Başvuru</h4>
            <h2 className="law-title" style={{ color: 'var(--law-text-light)' }}>Danışmanlık Talep Edin</h2>
            <p style={{ color: '#9CA3AF', lineHeight: 1.6, marginBottom: '2rem' }}>
              Hukuki meselenizi bir yönetici ortağımızla görüşmek için lütfen kısa bir özet geçiniz. Tüm başvuruları en üst düzeyde gizlilik ilkesiyle değerlendirmekteyiz.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '3rem' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--law-accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Doğrudan Hat</div>
                <div style={{ fontSize: '1.2rem', marginTop: '0.25rem' }}>+1 (800) 555-0199</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--law-accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>E-posta</div>
                <div style={{ fontSize: '1.2rem', marginTop: '0.25rem' }}>partners@harrisonvance.com</div>
              </div>
            </div>
          </div>

          <div style={{ padding: '4rem' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Ad</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--law-border)', borderBottom: '2px solid var(--law-border)', background: 'transparent' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Soyad</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--law-border)', borderBottom: '2px solid var(--law-border)', background: 'transparent' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>E-posta Adresi</label>
                <input type="email" style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--law-border)', borderBottom: '2px solid var(--law-border)', background: 'transparent' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mesaj</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--law-border)', borderBottom: '2px solid var(--law-border)', background: 'transparent', resize: 'vertical' }}></textarea>
              </div>
              <button type="submit" className="law-btn law-btn-primary" style={{ marginTop: '1rem' }}>Başvuruyu İlet</button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};


