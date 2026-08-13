import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="language-selector" style={{position: 'absolute', top: '2rem', right: '2rem', zIndex: 100, display: 'flex', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold'}}>
        <span style={{color: '#fff', cursor: 'pointer', borderBottom: '1px solid #d4af37'}}>TR</span>
        <span style={{color: '#aaa'}}>|</span>
        <span style={{color: '#aaa', cursor: 'pointer', transition: 'color 0.3s'}} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = '#aaa'}>EN</span>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content animate-fade-in">
        <h1 className="hero-title">Eşsiz Bir <span className="gold-text">Prestij</span></h1>
        <p className="hero-subtitle">Dünyanın en seçkin müşterileri için gizlilik odaklı, lüks ve dakik şoför hizmetleri.</p>
        <div className="hero-buttons">
          <button className="gold-button">Hemen Rezervasyon Yapın</button>
          <button className="outline-button">Filomuzu Keşfedin</button>
        </div>
      </div>
    </section>
  );
}
