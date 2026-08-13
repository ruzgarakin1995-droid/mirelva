"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Hero from './sections/Hero';
import Vision from './sections/Vision';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import Awards from './sections/Awards';
import Process from './sections/Process';
import Philosophy from './sections/Philosophy';
import Testimonials from './sections/Testimonials';
import Team from './sections/Team';
import Press from './sections/Press';
import Studio from './sections/Studio';
import FAQ from './sections/FAQ';
import Newsletter from './sections/Newsletter';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

import ProjectQuoteModal from './components/ProjectQuoteModal';

export default function ArchitectureTheme({ clientData }: { clientData: any }) {
  const { name = 'ARCH STUDIO', themeConfig } = clientData || {};
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-black font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 text-black' : 'bg-transparent text-white mix-blend-difference'}`}
      >
        <a href="#home" className="text-xl md:text-2xl font-black tracking-tighter uppercase">{name}</a>
        
        <nav className="hidden md:flex items-center space-x-12 text-xs font-bold tracking-widest uppercase">
          <a href="#vision" className="hover:opacity-50 transition-opacity">Vision</a>
          <a href="#portfolio" className="hover:opacity-50 transition-opacity">Portfolio</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">Services</a>
          <a href="#studio" className="hover:opacity-50 transition-opacity">Studio</a>
          <button 
            onClick={() => setQuoteModalOpen(true)}
            className={`px-6 py-3 transition-colors duration-500 border ${scrolled ? 'border-black hover:bg-black hover:text-white' : 'border-white hover:bg-white hover:text-black'}`}
          >
            Initiate Project
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black text-white p-6 md:px-12 py-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-black tracking-tighter uppercase">{name}</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8 text-2xl font-light tracking-tight">
              <a href="#vision" onClick={() => setMobileMenuOpen(false)}>Vision</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)}>Team</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>

            <div className="mt-auto pt-12 border-t border-white/10">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full py-4 bg-white text-black text-sm font-bold uppercase tracking-widest"
              >
                Initiate Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero name={name} onQuoteClick={() => setQuoteModalOpen(true)} />
        <Vision />
        <Portfolio />
        <Services />
        <Awards />
        <Process />
        <Philosophy />
        <Testimonials />
        <Team />
        <Press />
        <Studio />
        <FAQ />
        <Newsletter />
        <Contact onQuoteClick={() => setQuoteModalOpen(true)} />
      </main>

      <Footer name={name} />

      <ProjectQuoteModal 
        isOpen={quoteModalOpen} 
        onClose={() => setQuoteModalOpen(false)} 
      />

    </div>
  );
}

