"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../PizzaThemeV2.module.css';

export default function DoughSecret() {
  return (
    <section className={`${styles.section} ${styles.bgBlack}`}>
      <div className={`${styles.container} ${styles.grid2}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop" 
            alt="Pizza dough" 
            className={styles.doughImage}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.badge} style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#FDFBF7' }}>
            Bizim Sırrımız
          </span>
          <h2 className={styles.heading2} style={{ color: '#FDFBF7' }}>
            72 Saat <span className={styles.textRed}>Fermantasyon</span>
          </h2>
          <p className={styles.textBase} style={{ marginBottom: '1.5rem' }}>
            Mükemmel pizzanın sırrı, aceleye getirilmemesinde yatar. Hamurumuzu en kaliteli İtalyan unlarıyla hazırlıyor ve 72 saat boyunca soğuk fermantasyona bırakıyoruz.
          </p>
          <p className={styles.textBase} style={{ marginBottom: '3rem' }}>
            Sonuç? İnanılmaz derecede hafif, kolay sindirilebilir ve o karakteristik, dumanlı lezzet profiline sahip efsanevi bir hamur.
          </p>
          <button className={styles.btnPrimary}>Hikayemizi Oku</button>
        </motion.div>
      </div>
    </section>
  );
}
