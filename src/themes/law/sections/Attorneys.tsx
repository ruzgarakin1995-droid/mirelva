"use client";
import React from 'react';
import { motion } from 'framer-motion';

const attorneys = [
  { name: 'Robert Harrison', role: 'Kıdemli Ortak', img: '/law/law_attorney.jpg', uni: 'Harvard Hukuk Fakültesi' },
  { name: 'Elena Vance', role: 'Yönetici Ortak', img: '/law/law_attorney.jpg', uni: 'Yale Hukuk Fakültesi' },
  { name: 'James Sterling', role: 'Ortak', img: '/law/law_attorney.jpg', uni: 'Stanford Hukuk Fakültesi' },
  { name: 'Victoria Cole', role: 'Kıdemli Danışman', img: '/law/law_attorney.jpg', uni: 'Columbia Hukuk Fakültesi' },
];

export const Attorneys: React.FC = () => {
  return (
    <section id="attorneys" className="law-section law-section-alt">
      <div className="law-container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h4 className="law-subtitle">Hukuki Dehalar</h4>
          <h2 className="law-title">Avukatlarımız</h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--law-accent)', margin: '0 auto' }}></div>
        </div>

        <div className="grid grid-4">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                backgroundColor: 'var(--law-bg)',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              whileHover={{ y: -10 }}
            >
              <img src={attorney.img} alt={attorney.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.3rem', margin: '0 0 0.5rem 0' }}>{attorney.name}</h3>
                <div style={{ color: 'var(--law-accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', marginBottom: '0.5rem', fontWeight: 600 }}>
                  {attorney.role}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--law-text-muted)' }}>{attorney.uni}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



