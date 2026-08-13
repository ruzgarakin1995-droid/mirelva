"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Hero from './sections/Hero';
import Story from './sections/Story';
import Features from './sections/Features';
import Rooms from './sections/Rooms';
import Amenities from './sections/Amenities';
import Dining from './sections/Dining';
import Spa from './sections/Spa';
import Experience from './sections/Experience';
import VideoSection from './sections/VideoSection';
import Gallery from './sections/Gallery';
import Promotions from './sections/Promotions';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import ReservationModal from './sections/ReservationModal';

export default function HotelTheme({ clientData }: { clientData: any }) {
  const { name = "LUMIÃˆRE RESORT", themeConfig, features } = clientData || {};
  const { primaryColor = '#1A1C20', accentColor = '#D4AF37' } = themeConfig || {};

  const [scrolled, setScrolled] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tokens = {
    '--primary': primaryColor,
    '--accent': accentColor,
    '--surface': '#FAFAFA',
    '--muted': '#717171',
    '--border': 'rgba(26,28,32,0.08)',
  } as React.CSSProperties;

  return (
    <div className="bg-[var(--surface)] text-[var(--primary)] font-sans antialiased overflow-x-hidden selection:bg-[var(--accent)] selection:text-white" style={tokens}>
      
      {/* Mega Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-6 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--border)] text-[var(--primary)] shadow-sm' : 'bg-transparent text-white mix-blend-difference'}`}>
        <div className="text-xl md:text-2xl font-serif tracking-widest uppercase">{name}</div>
        
        <nav className="hidden lg:flex space-x-10 text-xs font-semibold tracking-[0.2em] uppercase">
          <a href="#rooms" className="hover:text-[var(--accent)] transition-colors duration-300">Konaklama</a>
          <a href="#spa" className="hover:text-[var(--accent)] transition-colors duration-300">Wellness</a>
          <a href="#dining" className="hover:text-[var(--accent)] transition-colors duration-300">Gastronomi</a>
          <a href="#contact" className="hover:text-[var(--accent)] transition-colors duration-300">İletişim</a>
        </nav>

        {(features?.hasBooking ?? true) && (
          <button 
            onClick={() => setIsReservationOpen(true)}
            className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 border ${scrolled ? 'bg-[var(--primary)] text-white border-[var(--primary)] hover:bg-white hover:text-[var(--primary)]' : 'bg-transparent text-white border-white hover:bg-white hover:text-black'}`}>
            Rezervasyon Yap
          </button>
        )}
      </motion.header>

      <main>
        {/* 15 Ultra-Premium Sections */}
        <Hero />
        <Story />
        <Features />
        <Rooms />
        <Amenities />
        <Dining />
        <Spa />
        <Experience />
        <Promotions />
        <VideoSection />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer name={name} />

      <ReservationModal 
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
        clientId={clientData?.id}
        primaryColor={(tokens as any)['--primary']}
        accentColor={(tokens as any)['--accent']}
      />
    </div>
  );
}

