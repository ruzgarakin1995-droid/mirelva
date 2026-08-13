"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Hero from './sections/Hero';
import BrandStory from './sections/BrandStory';
import FeaturedProperties from './sections/FeaturedProperties';
import Stats from './sections/Stats';
import HowItWorks from './sections/HowItWorks';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';
import VideoTour from './sections/VideoTour';
import Neighborhoods from './sections/Neighborhoods';
import FAQ from './sections/FAQ';
import ContactMap from './sections/ContactMap';
import Footer from './sections/Footer';

// A mock subset for MVP preview while building out the full 15 sections
export default function RealEstateTheme({ clientData }: { clientData: any }) {
  const { name, themeConfig } = clientData;
  const { primaryColor, accentColor } = themeConfig || {};

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tokens = {
    '--primary': primaryColor || '#0A0A0A',
    '--accent': accentColor || '#8B7355',
    '--surface': '#FFFFFF',
    '--muted': '#6B6B6B',
    '--border': 'rgba(0,0,0,0.05)',
  } as React.CSSProperties;

  return (
    <div className="bg-[var(--surface)] text-[var(--primary)] font-sans antialiased overflow-x-hidden" style={tokens}>
      
      {/* Mega Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-[var(--border)] text-stone-900 shadow-sm' : 'bg-transparent text-white mix-blend-normal'}`}>
        <div className="text-xl md:text-2xl font-black tracking-tighter uppercase">{name}</div>
        
        <nav className="hidden md:flex space-x-12 text-sm font-bold tracking-widest uppercase">
          <a href="#properties" className="hover:text-[var(--accent)] transition-colors">Portföy</a>
          <a href="#story" className="hover:text-[var(--accent)] transition-colors">Hikayemiz</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors">İletişim</a>
        </nav>

        <button className={`px-8 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-300 rounded-full ${scrolled ? 'bg-[var(--primary)] text-white hover:bg-[var(--accent)]' : 'bg-white text-black hover:bg-[var(--accent)] hover:text-white'}`}>
          İletişime Geç
        </button>
      </motion.header>

      <main>
        <Hero name={name} />
        <BrandStory />
        <FeaturedProperties />
        <Stats />
        <HowItWorks />
        <Services />
        <Testimonials />
        <VideoTour />
        <Neighborhoods />
        <FAQ />
        <ContactMap />
      </main>

      <Footer name={name} />

    </div>
  );
}

