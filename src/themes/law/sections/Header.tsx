"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ConsultationModal } from './ConsultationModal';

export const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header style={{
        backgroundColor: 'var(--law-primary)',
        color: 'var(--law-text-light)',
        padding: '1.5rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="law-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ color: 'var(--law-accent)', fontSize: '2rem' }}>Â§</span>
            <div>
              <div style={{ fontFamily: 'var(--law-font)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>HARRISON & VANCE</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--law-accent)', letterSpacing: '2px', textTransform: 'uppercase' }}>Avukatlık Bürosu</div>
            </div>
          </div>
          
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {[
              { label: 'Büromuz', id: 'firm' },
              { label: 'Avukatlarımız', id: 'attorneys' },
              { label: 'Çalışma Alanları', id: 'practices' },
              { label: 'Emsal Kararlar', id: 'results' }
            ].map((item) => (
              <a key={item.id} href={`#${item.id}`} style={{
                color: 'var(--law-text-light)',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--law-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--law-text-light)')}
              >
                {item.label}
              </a>
            ))}
            <button 
              className="law-btn law-btn-primary" 
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}
              onClick={() => setIsModalOpen(true)}
            >
              Ücretsiz Danışmanlık
            </button>
          </nav>
        </div>
      </header>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};


