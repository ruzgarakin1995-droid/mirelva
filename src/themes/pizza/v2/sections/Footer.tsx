"use client";

import React from 'react';
import styles from '../PizzaThemeV2.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <a href="#" className={styles.logo}>ARTISAN<span className={styles.textRed}>.</span></a>
        <p style={{ color: '#999', fontSize: '0.9rem' }}>© 2026 Artisan Pizza. Tüm hakları saklıdır.</p>
      </div>
      
      <div className={styles.footerLinks}>
        <a href="#" className={styles.footerLink}>Menü</a>
        <a href="#" className={styles.footerLink}>Hakkımızda</a>
        <a href="#" className={styles.footerLink}>Restoranlarımız</a>
        <a href="#" className={styles.footerLink}>İletişim</a>
        <a href="#" className={styles.footerLink}>Instagram</a>
      </div>
    </footer>
  );
}
