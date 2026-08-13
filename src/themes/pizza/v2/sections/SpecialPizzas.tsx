"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from '../PizzaThemeV2.module.css';

const pizzas = [
  {
    id: 1,
    name: "Margherita Classico",
    desc: "San Marzano domates sosu, taze mozzarella fior di latte, fesleğen ve sızma zeytinyağı.",
    price: "₺280",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Diavola Piccante",
    desc: "Acı İtalyan salamı, mozzarella, taze kırmızı biber ve özel acı yağımız.",
    price: "₺320",
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=2024&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Tartufo e Funghi",
    desc: "Trüf mantarı kreması, kestane mantarı, mozzarella ve taze kekik.",
    price: "₺380",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function SpecialPizzas() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>İmza Lezzetler</span>
          <h2 className={styles.heading2}>Ustamızın Seçimleri</h2>
        </motion.div>

        <div className={styles.pizzaGrid}>
          {pizzas.map((pizza, idx) => (
            <motion.div 
              key={pizza.id} 
              className={styles.pizzaCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
              <div className={styles.pizzaInfo}>
                <h3 className={styles.pizzaTitle}>{pizza.name}</h3>
                <p className={styles.pizzaDesc}>{pizza.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={styles.pizzaPrice}>{pizza.price}</span>
                  <button style={{
                    background: 'none', border: 'none', color: '#E63946', fontWeight: 700, cursor: 'pointer', fontSize: '1.1rem', transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Sepete Ekle +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
