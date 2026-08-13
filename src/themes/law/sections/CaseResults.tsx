"use client";
import React from 'react';
import { motion } from 'framer-motion';

const results = [
  { amount: '$150 Milyon', desc: 'Karmaşık şirket dolandırıcılığı davasında uzlaşma sağlandı.', type: 'Ticaret Hukuku' },
  { amount: '$42 Milyon', desc: 'Fikri mülkiyet hırsızlığı davasında emsal niteliğinde karar.', type: 'Fikri Mülkiyet Davaları' },
  { amount: 'Dava İptali', desc: 'Fortune 500 CEO\'suna yönelik asılsız federal iddianamenin düşürülmesi.', type: 'Beyaz Yaka Savunması' },
];

export const CaseResults: React.FC = () => {
  return (
    <section id="results" className="law-section law-section-dark" style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(10, 25, 47, 0.85)'
      }}></div>
      <div className="law-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Kanıtlanmış Başarı Geçmişi</h4>
          <h2 className="law-title">Emsal Teşkil Eden Zaferler</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-3">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                border: '1px solid rgba(197, 160, 89, 0.3)',
                padding: '3rem 2rem',
                textAlign: 'center',
                backgroundColor: 'rgba(17, 34, 64, 0.6)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ color: 'var(--law-accent)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                {result.type}
              </div>
              <div style={{ fontFamily: 'Playfair Display', fontSize: '3.5rem', fontWeight: 700, color: 'var(--law-text-light)', marginBottom: '1rem' }}>
                {result.amount}
              </div>
              <p style={{ color: '#D1D5DB', lineHeight: 1.6 }}>{result.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <p style={{ color: 'var(--law-text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>*Geçmiş başarılarımız, gelecekteki sonuçların garantisi niteliğinde değildir.</p>
        </div>
      </div>
    </section>
  );
};


