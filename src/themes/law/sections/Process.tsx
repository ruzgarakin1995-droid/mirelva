"use client";
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: '01', title: 'Danışmanlık', desc: 'İzlenecek en stratejik yolu belirlemek için durumunuzu mutlak gizlilik içinde analiz ediyoruz.' },
  { step: '02', title: 'Strateji Oluşturma', desc: 'Yönetici ortaklarımız, özel hedeflerinize uygun, agresif ve kapsamlı bir hukuki strateji geliştirir.' },
  { step: '03', title: 'Uygulama', desc: 'İster yüksek riskli müzakerelerde ister karmaşık davalarda olsun, stratejiyi tavizsiz bir şekilde uygularız.' }
];

export const Process: React.FC = () => {
  return (
    <section className="law-section">
      <div className="law-container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Yaklaşımımız</h4>
          <h2 className="law-title">Nasıl Çalışıyoruz</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              style={{ textAlign: 'center', padding: '0 1rem' }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                backgroundColor: 'var(--law-bg-alt)', 
                color: 'var(--law-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Playfair Display',
                fontSize: '1.5rem',
                fontWeight: 700,
                margin: '0 auto 2rem auto',
                border: '2px solid var(--law-accent)'
              }}>
                {step.step}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--law-text-muted)', lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


