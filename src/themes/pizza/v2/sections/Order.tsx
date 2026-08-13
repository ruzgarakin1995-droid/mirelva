"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../PizzaThemeV2.module.css';

export default function Order() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.orderCard}
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.orderTitle}>
            Gerçek İtalyan Pizzası<br />Kapınıza Gelsin
          </h2>
          <p style={{ fontSize: '1.35rem', marginBottom: '3.5rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto 3.5rem auto', lineHeight: 1.6 }}>
            Hemen sipariş verin, odun ateşinde pişmiş sıcacık pizzanızı sadece 30 dakikada teslim edelim.
          </p>
          <button className={styles.btnInverted}>
            Online Sipariş Verin
          </button>
        </motion.div>
      </div>
    </section>
  );
}
