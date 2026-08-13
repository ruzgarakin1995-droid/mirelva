"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AestheticBookingModal } from './AestheticBookingModal';
import LanguageSwitcher from './LanguageSwitcher';

export function AestheticHeader({ isDarkBackground = false }: { isDarkBackground?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handleOpenModal = () => setIsBookingModalOpen(true);
    window.addEventListener('open-booking-modal', handleOpenModal);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-booking-modal', handleOpenModal);
    };
  }, []);

  const textColor = (!isScrolled && isDarkBackground) ? 'text-[#FDFCF9]' : 'text-[#1C1C1C]';
  const subTextColor = (!isScrolled && isDarkBackground) ? 'text-[#FDFCF9]/80' : 'text-[#1C1C1C]/70';
  const btnClass = (!isScrolled && isDarkBackground) 
    ? 'bg-[#FDFCF9] text-[#1C1C1C] hover:bg-[#C4A79A] hover:text-[#FDFCF9]' 
    : 'bg-[#1C1C1C] text-[#FDFCF9] hover:bg-[#C4A79A] hover:text-[#FDFCF9]';

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#FDFCF9]/70 backdrop-blur-lg py-4 shadow-sm border-b border-[#1C1C1C]/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between relative h-16">
          
          {/* Left Side Group */}
          <div className="hidden md:flex items-center gap-4 flex-1 md:flex-none z-[60]">
            {/* Desktop Nav - Left */}
            <nav className={`hidden md:flex gap-8 lg:gap-10 items-center justify-start font-sans text-xs tracking-widest ${subTextColor}`}>
              <Link href="/test-aesthetic/uzman-kadro" className="hover:text-[#C4A79A] transition-colors">Uzman Kadro</Link>
              <Link href="/test-aesthetic/hakkimizda" className="hover:text-[#C4A79A] transition-colors">Hakkımızda</Link>
              <Link href="/test-aesthetic/hizmetler" className="hover:text-[#C4A79A] transition-colors">Hizmetler</Link>
            </nav>
          </div>

          {/* Brand - Left on mobile, Centered on desktop */}
          <Link href="/test-aesthetic" className={`md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-start md:items-center justify-center z-[60] shrink-0 text-left md:text-center ${textColor}`}>
            <span className="text-3xl lg:text-4xl font-serif tracking-[0.15em] transition-colors">
              MIRELVA
            </span>
            <span className="text-[7px] font-sans font-medium tracking-[0.4em] uppercase text-[#C4A79A] mt-1.5 ml-1 md:ml-0">
              Beauty Clinic
            </span>
          </Link>

          {/* Right Side Group */}
          <div className="flex-1 md:flex-none flex justify-end items-center gap-4 z-[60]">
            {/* Mobile Language Switcher */}
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 ${textColor}`}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-[-2px]' : 'w-full'}`}></span>
                <span className={`h-[1px] bg-current transition-all duration-300 opacity-100 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-full -rotate-45 translate-y-[2px]' : 'w-full'}`}></span>
              </div>
            </button>

            {/* Desktop Nav - Right */}
            <nav className={`hidden md:flex gap-10 items-center justify-end font-sans text-xs tracking-widest ${subTextColor}`}>
              <Link href="/test-aesthetic/tedaviler" className="hover:text-[#C4A79A] transition-colors">Tedaviler</Link>
              <Link href="/test-aesthetic/iletisim" className="hover:text-[#C4A79A] transition-colors">İletişim</Link>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:block">
                  <LanguageSwitcher />
                </div>
                
                <button 
                  onClick={() => setIsBookingModalOpen(true)}
                  className={`ml-4 text-[11px] font-sans font-medium tracking-[0.15em] uppercase px-7 py-3 transition-colors duration-500 ${btnClass}`}
                >
                  Randevu Al
                </button>
              </div>
            </nav>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at top right)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at top right)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#FDFCF9] flex flex-col justify-center px-8"
          >
            {/* Explicit Close Button inside overlay */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-6 p-2 text-[#1C1C1C] md:hidden z-[70]"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <nav className="flex flex-col gap-8 mb-16">
              {[
                { name: 'Uzman Kadro', href: '/test-aesthetic/uzman-kadro' },
                { name: 'Hakkımızda', href: '/test-aesthetic/hakkimizda' },
                { name: 'Hizmetler', href: '/test-aesthetic/hizmetler' },
                { name: 'İletişim', href: '/test-aesthetic/iletisim' }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-[#1C1C1C] hover:text-[#C4A79A] transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="w-full text-xs font-sans font-medium tracking-[0.2em] uppercase text-[#FDFCF9] bg-[#1C1C1C] py-5 hover:bg-[#C4A79A] transition-colors duration-500"
            >
              Ücretsiz Danışmanlık Al
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AestheticBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}


