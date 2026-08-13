import React from 'react';
import styles from './PizzaThemeV2.module.css';
import Hero from './sections/Hero';
import SpecialPizzas from './sections/SpecialPizzas';
import DoughSecret from './sections/DoughSecret';
import Order from './sections/Order';
import Footer from './sections/Footer';

export default function PizzaThemeV2() {
  return (
    <div className={styles.themeContainer}>
      <Hero />
      <SpecialPizzas />
      <DoughSecret />
      <Order />
      <Footer />
    </div>
  );
}
