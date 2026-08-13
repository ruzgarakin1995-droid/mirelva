"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../PizzaThemeV2.module.css';

export default function Hero() {
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');

  return (
    <section className={styles.hero}>
      <nav className={styles.navbar}>
        <a href="#" className={styles.logo}>ARTISAN<span className={styles.textRed}>.</span></a>
        <div className={styles.langSwitcher}>
          <button 
            className={`${styles.langBtn} ${lang === 'TR' ? styles.active : ''}`}
            onClick={() => setLang('TR')}
          >
            TR
          </button>
          <span>|</span>
          <button 
            className={`${styles.langBtn} ${lang === 'EN' ? styles.active : ''}`}
            onClick={() => setLang('EN')}
          >
            EN
          </button>
        </div>
      </nav>

      <div className={`${styles.container} ${styles.heroContent}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.badge}>Ateşin Sanatı</span>
          <h1 className={styles.heading1}>
            Gerçek İtalyan<br/>
            <span className={styles.textRed}>Mükemmelliği</span>
          </h1>
          <p className={styles.textBase} style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Napoli'nin geleneksel tarifleri, meşe odunu ateşinde hayat buluyor. İncecik, kenarları kabarık ve çıtır çıtır bir deneyim.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className={styles.btnPrimary}>Sipariş Ver</button>
            <button className={styles.btnSecondary}>Menüyü Keşfet</button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className={styles.heroImageContainer}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop" 
          alt="Wood fired oven pizza" 
          className={styles.heroImage}
        />
      </motion.div>
    </section>
  );
}
