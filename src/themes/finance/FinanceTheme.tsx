"use client";
import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { Services } from './sections/Services';
import { MarketData } from './sections/MarketData';
import { Advisors } from './sections/Advisors';
import { Philosophy } from './sections/Philosophy';
import { Process } from './sections/Process';
import { Testimonials } from './sections/Testimonials';
import { Stats } from './sections/Stats';
import { Insights } from './sections/Insights';
import { Calculator } from './sections/Calculator';
import { Partners } from './sections/Partners';
import { FAQ } from './sections/FAQ';
import { Contact } from './sections/Contact';
import { Newsletter } from './sections/Newsletter';

export const FinanceTheme = () => {
  return (
    <div className="font-sans text-slate-900 overflow-x-hidden w-full selection:bg-yellow-500 selection:text-blue-950 antialiased">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Services />
      <MarketData />
      <Philosophy />
      <Process />
      <Stats />
      <Advisors />
      <Calculator />
      <Testimonials />
      <Insights />
      <FAQ />
      <Contact />
      <Newsletter />
    </div>
  );
};

export default FinanceTheme;

