"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BarberBookingModal } from './BarberBookingModal';

export function BarberHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Listen for modal trigger from other components (like Footer)
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('open-booking-modal', handleOpenModal);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('open-booking-modal', handleOpenModal);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out border-b ${
          isScrolled 
            ? 'bg-[#F8F7F5]/90 backdrop-blur-xl py-4 border-[#2A2522]/5' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/test-barber" className="group flex items-center relative z-[60]">
            <span className={`text-2xl font-serif tracking-wide transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#F8F7F5]' : 'text-[#2A2522]'}`}>
              BOMONTI
              <span className={`text-sm font-sans font-light tracking-widest uppercase ml-2 transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#F8F7F5]/50' : 'text-[#2A2522]/50'}`}>
                Hair Studio
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
            <Link 
              href="/test-barber"
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/70 hover:text-[#2A2522] transition-colors relative group"
            >
              Ana Sayfa
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C1A68D] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-barber/hakkimizda"
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/70 hover:text-[#2A2522] transition-colors relative group"
            >
              Hakkımızda
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C1A68D] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-barber/hizmetler"
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/70 hover:text-[#2A2522] transition-colors relative group"
            >
              Hizmetler
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C1A68D] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-barber/ekibimiz"
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/70 hover:text-[#2A2522] transition-colors relative group"
            >
              Ekibimiz
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C1A68D] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-barber/iletisim"
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522]/70 hover:text-[#2A2522] transition-colors relative group"
            >
              İletişim
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#C1A68D] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#F8F7F5] bg-[#2A2522] px-8 py-4 hover:bg-[#C1A68D] transition-colors duration-500"
            >
              Randevu Oluştur
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[60] p-2 transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#F8F7F5]' : 'text-[#2A2522]'}`}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`w-full h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-y-[-1px]' : ''}`}></span>
              <span className={`w-full h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`w-full h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-y-[1px]' : ''}`}></span>
            </div>
          </button>

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
            className="fixed inset-0 z-50 bg-[#2A2522] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 mb-16">
              {[
                { name: 'Ana Sayfa', path: '/test-barber' },
                { name: 'Hakkımızda', path: '/test-barber/hakkimizda' },
                { name: 'Hizmetler', path: '/test-barber/hizmetler' },
                { name: 'Ekibimiz', path: '/test-barber/ekibimiz' },
                { name: 'İletişim', path: '/test-barber/iletisim' },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-[#F8F7F5] hover:text-[#C1A68D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => setIsModalOpen(true), 500);
              }}
              className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#2A2522] bg-[#C1A68D] px-10 py-4 hover:bg-[#F8F7F5] transition-colors duration-500"
            >
              Randevu Oluştur
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <BarberBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
