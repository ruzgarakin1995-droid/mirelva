"use client";
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--law-secondary)', color: 'var(--law-text-light)', padding: '4rem 0 2rem 0' }}>
      <div className="law-container">
        <div className="grid grid-4" style={{ marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span style={{ color: 'var(--law-accent)', fontSize: '2rem' }}>Â§</span>
              <div>
                <div style={{ fontFamily: 'var(--law-font)', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '1px' }}>HARRISON & VANCE</div>
              </div>
            </div>
            <p style={{ color: '#9CA3AF', lineHeight: 1.6, maxWidth: '400px' }}>
              En kritik hukuki zorluklarla karşı karşıya kalanlar için seçkin hukuki temsil. Biz hukuku sadece uygulamıyor, onda ustalaşıyoruz.
            </p>
          </div>
          <div>
            <h4 style={{ color: 'var(--law-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Çalışma Alanları</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Şirket Davaları</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Beyaz Yaka Savunması</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Aile Hukuku</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Fikri Mülkiyet Davaları</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--law-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Büromuz</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Avukatlarımız</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Emsal Kararlar</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>İçgörüler</a></li>
              <li><a href="#" style={{ color: '#D1D5DB', textDecoration: 'none' }}>Kariyer</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: '#9CA3AF' }}>
          <div>&copy; {new Date().getFullYear()} Harrison & Vance LLP. Tüm hakları saklıdır.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Gizlilik Politikası</a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Hizmet Şartları</a>
            <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Yasal Uyarı</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

