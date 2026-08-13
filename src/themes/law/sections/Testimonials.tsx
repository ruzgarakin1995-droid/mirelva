"use client";
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { quote: "Şirketim milyonlarca dolarlık bir davayla karşı karşıya kaldığında, büronuz bizi sadece savunmakla kalmadı; karşı tarafın davasını tamamen çürüttü. Stratejik dehanız emsalsizdir.", client: "CEO, Fortune 500 Teknoloji Şirketi" },
  { quote: "Son derece karmaşık ve hassas bir aile meselesinde, Elena Vance sadece hukuki bir mükemmellik değil, aynı zamanda mutlak bir gizlilik sağladı. Daha iyi bir hukuki temsil düşünülemezdi.", client: "Özel Müvekkil" }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="law-section law-section-alt">
      <div className="law-container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Müvekkil Referansları</h4>
          <h2 className="law-title">Müvekkillerimiz Neler Söylüyor?</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-2">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              style={{
                backgroundColor: 'var(--law-bg)',
                padding: '3rem',
                borderLeft: '4px solid var(--law-accent)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ color: 'var(--law-accent)', fontSize: '3rem', fontFamily: 'Playfair Display', lineHeight: 0.5, marginBottom: '1rem' }}>"</div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '2rem' }}>{test.quote}</p>
              <div style={{ color: 'var(--law-primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>
                &mdash; {test.client}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


