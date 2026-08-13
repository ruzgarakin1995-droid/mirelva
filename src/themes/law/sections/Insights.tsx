"use client";
import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  { date: '12 Eki 2026', title: 'Yeni SEC İfşa Kurallarına Uyum: Kurumsal Rehber', category: 'Şirketler Hukuku' },
  { date: '28 Eyl 2026', title: 'Yüksek Malvarlıklı Boşanmalar: İç İçe Geçmiş Ticari Çıkarların Korunması', category: 'Aile Hukuku' },
  { date: '15 Eyl 2026', title: 'Fikri Mülkiyet Davalarını Etkileyen Son Yüksek Mahkeme Kararları', category: 'Fikri Mülkiyet Hukuku' }
];

export const Insights: React.FC = () => {
  return (
    <section className="law-section">
      <div className="law-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h4 className="law-subtitle">Hukuki Perspektifler</h4>
            <h2 className="law-title" style={{ marginBottom: 0 }}>Büromuzdan İçgörüler</h2>
          </div>
          <button className="law-btn law-btn-outline" style={{ display: 'none' }}>Tüm İçgörüleri Görüntüle</button>
        </div>

        <div className="grid grid-3">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                cursor: 'pointer',
                borderBottom: '1px solid var(--law-border)',
                paddingBottom: '2rem'
              }}
            >
              <div style={{ color: 'var(--law-accent)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
                {article.category}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.4, transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--law-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--law-text)')}
              >
                {article.title}
              </h3>
              <div style={{ color: 'var(--law-text-muted)', fontSize: '0.9rem' }}>{article.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


