"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
import Expertise from './sections/Expertise';
import Story from './sections/Story';
import Services from './sections/Services';
import Video from './sections/Video';
import Statistics from './sections/Statistics';
import Features from './sections/Features';
import Technology from './sections/Technology';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import BeforeAfter from './sections/BeforeAfter';
import FAQ from './sections/FAQ';
import Insurance from './sections/Insurance';
import ContactMap from './sections/ContactMap';
import Footer from './sections/Footer';
import BookingModal from './sections/BookingModal';

export default function DoctorTheme({ clientData }: { clientData: any }) {
  const { name, themeConfig, features } = clientData || { name: 'Klinik', themeConfig: {}, features: {} };
  const { primaryColor = '#1A365D', accentColor = '#3182CE' } = themeConfig || {};

  const [scrolled, setScrolled] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tokens = {
    '--primary': primaryColor,
    '--accent': accentColor,
    '--surface': '#FFFFFF',
    '--surface-alt': '#F7FAFC',
    '--muted': '#718096',
    '--border': '#E2E8F0',
  } as React.CSSProperties;

  return (
    <div className="bg-[var(--surface)] text-[var(--primary)] font-sans antialiased overflow-x-hidden selection:bg-[var(--accent)] selection:text-white" style={tokens}>
      
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4 md:py-6 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--border)] shadow-sm' : 'bg-transparent text-white'}`}>
        <div className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${scrolled ? 'bg-[var(--primary)] text-white' : 'bg-white text-[var(--primary)]'}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          {name}
        </div>
        
        <nav className="hidden md:flex space-x-10 text-sm font-semibold tracking-wide">
          <a href="#uzmanliklar" className="hover:text-[var(--accent)] transition-colors">UZMANLIKLAR</a>
          <a href="#doktorlar" className="hover:text-[var(--accent)] transition-colors">DOKTORLAR</a>
          <a href="#iletisim" className="hover:text-[var(--accent)] transition-colors">İLETİŞİM</a>
        </nav>

        {features?.hasBooking !== false && (
          <button 
            onClick={() => setIsBookingOpen(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-md hover:shadow-lg ${scrolled ? 'bg-[var(--accent)] text-white hover:opacity-90' : 'bg-white text-[var(--primary)] hover:bg-gray-100'}`}>
            RANDEVU AL
          </button>
        )}
      </motion.header>

      <main>
        <Hero onBook={() => setIsBookingOpen(true)} />
        <Features />
        <Story />
        <Expertise />
        <Services />
        <Video />
        <Statistics />
        <Technology />
        <Team />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Insurance />
        <ContactMap />
      </main>

      <Footer name={name} />

      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal 
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            primaryColor={primaryColor}
            accentColor={accentColor}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

