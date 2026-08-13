"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from './MagneticButton';
import { AppointmentModal } from './AppointmentModal';

export function DentistHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? 'bg-[#FAFAFA]/90 backdrop-blur-xl py-4 border-[#1A1A1A]/5' 
            : 'bg-transparent py-6 md:py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/test-dentist" className="group flex items-center z-50">
            <span className={`text-2xl font-serif tracking-wide transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FAFAFA]' : 'text-[#1A1A1A]'}`}>
              Dişmekan
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link href="/test-dentist/hakkimizda" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Hakkımızda
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/test-dentist/tedaviler" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Tedaviler
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/test-dentist/ekibimiz" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              Doktorlar
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link href="/test-dentist/iletisim" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative group">
              İletişim
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block z-50">
            <div onClick={() => setIsModalOpen(true)}>
              <MagneticButton variant={isMobileMenuOpen ? "light" : "dark"}>
                Randevu Al
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Actions (CTA + Hamburger) */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`text-[10px] font-sans font-medium tracking-[0.2em] uppercase px-4 py-2 border rounded-full transition-colors duration-300 ${
                isMobileMenuOpen 
                  ? 'border-[#FAFAFA]/30 text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#1A1A1A]' 
                  : 'border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAFA]'
              }`}
            >
              Randevu Al
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FAFAFA]' : 'text-[#1A1A1A]'}`}
            >
              {isMobileMenuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 bg-[#1A1A1A] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 mt-12 text-center">
              <Link href="/test-dentist/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#FAFAFA] hover:text-[#D4C9C3] transition-colors">
                Hakkımızda
              </Link>
              <Link href="/test-dentist/tedaviler" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#FAFAFA] hover:text-[#D4C9C3] transition-colors">
                Tedaviler
              </Link>
              <Link href="/test-dentist/ekibimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#FAFAFA] hover:text-[#D4C9C3] transition-colors">
                Doktorlar
              </Link>
              <Link href="/test-dentist/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-serif text-[#FAFAFA] hover:text-[#D4C9C3] transition-colors">
                İletişim
              </Link>
            </nav>
            
            <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-4 text-center">
              <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#D4C9C3]">
                Bize Ulaşın
              </span>
              <a href="tel:+905314977217" className="text-[#FAFAFA] font-sans font-light text-lg">
                +90 531 497 72 17
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
