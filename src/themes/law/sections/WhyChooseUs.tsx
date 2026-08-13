"use client";
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  { number: '01', title: 'Eşsiz Duruşma Deneyimi', text: 'Dava avukatlarımız, rakipleri tarafından çekinilen ve hakimler tarafından saygı duyulan, mahkeme salonlarının tecrübeli ustalarıdır.' },
  { number: '02', title: 'Stratejik Zeka', text: 'Rakiplerimizden daha iyi düşünüyor ve daha iyi hazırlanıyoruz; başkalarının gözden kaçırdığı detayları tespit ediyoruz.' },
  { number: '03', title: 'Mutlak Gizlilik', text: 'Mahremiyetiniz önceliğimizdir. Yüksek profilli davaları mutlak bir gizlilik ilkesiyle yönetiyoruz.' }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="law-section">
      <div className="law-container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h4 className="law-subtitle">Büromuzun Farkı</h4>
            <h2 className="law-title">Seçkin Müvekkiller Neden Bize Güveniyor?</h2>
            <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Riskler hayati önem taşıdığında, mükemmelliğin bir alternatifi yoktur. Kaybetmeyi göze alamayanlar tarafından tercih ediliyoruz.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  style={{ display: 'flex', gap: '1.5rem' }}
                >
                  <div style={{ 
                    fontFamily: 'Playfair Display', 
                    fontSize: '3rem', 
                    color: 'var(--law-border)', 
                    lineHeight: 1,
                    fontWeight: 700 
                  }}>
                    {reason.number}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{reason.title}</h4>
                    <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.6 }}>{reason.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              width: '80%', 
              aspectRatio: '3/4', 
              backgroundColor: 'var(--law-bg-alt)',
              backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=1470&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'right',
              boxShadow: '-20px 20px 0px var(--law-accent)'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};


