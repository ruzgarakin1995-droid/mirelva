"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section style={{
      position: 'relative',
      height: '80vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--law-text-light)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(10, 25, 47, 0.7)' // Navy overlay
      }}></div>
      
      <div className="law-container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '700px' }}
        >
          <div className="law-subtitle" style={{ color: 'var(--law-accent)' }}>Tavizsiz Savunma. Kanıtlanmış Sonuçlar.</div>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '4.5rem',
            lineHeight: 1.1,
            marginBottom: '2rem',
            fontWeight: 700
          }}>
            Adalet <br/>
            <span style={{ color: 'var(--law-accent)', fontStyle: 'italic' }}>mükemmellik</span> gerektirir.
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.6,
            marginBottom: '3rem',
            color: '#D1D5DB'
          }}>
            25 yılı aşkın süredir büromuz, en kritik hukuki zorluklarla karşı karşıya kalan bireylere ve şirketlere seçkin bir hukuki temsil hizmeti sunmaktadır.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="law-btn law-btn-primary">Çalışma Alanlarımız</button>
            <button className="law-btn law-btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>Yönetici Ortaklarla Tanışın</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


