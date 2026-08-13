"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const AboutFirm: React.FC = () => {
  return (
    <section id="firm" className="law-section law-section-alt">
      <div className="law-container grid grid-2" style={{ alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="law-subtitle">Büromuz Hakkında</h4>
          <h2 className="law-title">Ayrıcalığın ve tavizsiz hukuki mükemmelliğin mirası.</h2>
          <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            Dürüstlük, azim ve hassasiyet ilkeleri üzerine kurulan büromuz, seçkin bir dava merkezi olarak öne çıkmaktadır. Biz sadece hukuku uygulamıyor, ona yön veriyoruz.
          </p>
          <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Hukuk mesleğinin en üst kademelerinden gelen yönetici ortaklarımız; yüksek riskli ticari ihtilaflar, beyaz yaka suçları savunması ve karmaşık aile hukuku alanlarında onlarca yıllık emsalsiz bir deneyime sahiptir. Üstlendiğimiz her dosyayı en önemli davamız olarak kabul ederiz.
          </p>
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--law-primary)', fontWeight: 700, fontFamily: 'Playfair Display' }}>25+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--law-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Yıllık Deneyim</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', color: 'var(--law-primary)', fontWeight: 700, fontFamily: 'Playfair Display' }}>$2 Milyar+</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--law-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Kazanılan Tazminat</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-20px',
            width: '100%',
            height: '100%',
            border: '2px solid var(--law-accent)',
            zIndex: 0
          }}></div>
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1470&auto=format&fit=crop" 
            alt="Law Office" 
            style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          />
        </motion.div>
      </div>
    </section>
  );
};



