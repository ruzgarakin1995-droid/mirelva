"use client";
import React from 'react';
import { motion } from 'framer-motion';

const practices = [
  { title: 'Şirket Davaları', desc: 'Karmaşık ticari uyuşmazlıkların stratejik bir hassasiyetle yönetilmesi.' },
  { title: 'Beyaz Yaka Savunması', desc: 'Devlet soruşturmalarıyla karşı karşıya kalan bireyler ve şirketler için agresif temsil.' },
  { title: 'Birleşme ve Devralmalar', desc: 'Yüksek değerli işlemlerin yapılandırılması, müzakeresi ve sonuçlandırılması.' },
  { title: 'Fikri Mülkiyet Hukuku', desc: 'En değerli varlıklarınızın ve yeniliklerinizin korunması.' },
  { title: 'Aile Hukuku', desc: 'Yüksek malvarlıklı boşanma davalarında gizli ve güçlü savunma.' },
  { title: 'Gayrimenkul Uyuşmazlıkları', desc: 'Karmaşık ticari ve konut mülkiyeti çatışmalarının çözümü.' }
];

export const PracticeAreas: React.FC = () => {
  return (
    <section id="practices" className="law-section law-section-dark">
      <div className="law-container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Uzmanlığımız</h4>
          <h2 className="law-title">Çalışma Alanlarımız</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-3">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{
                backgroundColor: 'var(--law-secondary)',
                padding: '2.5rem 2rem',
                borderTop: '3px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderTop = '3px solid var(--law-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderTop = '3px solid transparent')}
            >
              <div style={{ color: 'var(--law-accent)', fontSize: '2rem', marginBottom: '1rem' }}>âš–</div>
              <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '1rem' }}>{practice.title}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>{practice.desc}</p>
              <div style={{ marginTop: '1.5rem', color: 'var(--law-accent)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                Daha Fazla Bilgi &rarr;
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


