"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HairSalonBookingModal } from './HairSalonBookingModal';

export function HairSalonHeader() {
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

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'bg-[#FDFBF7]/95 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(26,26,26,0.03)]' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[60] p-2 transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FDFBF7]' : 'text-[#352F2A]'}`}
          >
            <div className="w-6 h-3 relative flex flex-col justify-between">
              <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-[120%] rotate-45 translate-y-[-1px]' : 'w-full'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'w-[120%] -rotate-45 translate-y-[1px]' : 'w-full'}`}></span>
            </div>
          </button>

          {/* Desktop Nav - Left */}
          <nav className="hidden md:flex gap-10 items-center flex-1">
            <Link 
              href="/test-hair-salon/hakkimizda"
              className="text-xs font-sans tracking-[0.1em] uppercase text-[#352F2A]/70 hover:text-[#C4A484] transition-colors relative group"
            >
              Hakkımızda
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-hair-salon/hizmetler"
              className="text-xs font-sans tracking-[0.1em] uppercase text-[#352F2A]/70 hover:text-[#C4A484] transition-colors relative group"
            >
              Hizmetler
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Brand */}
          <Link href="/test-hair-salon" className="group flex flex-col items-center justify-center relative z-[60] flex-1 text-center">
            <span className={`text-3xl font-serif tracking-widest transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FDFBF7]' : 'text-[#352F2A]'}`}>
              ÉCLAT
            </span>
            <span className={`text-[8px] font-sans font-light tracking-[0.4em] uppercase transition-colors duration-500 mt-1 ${isMobileMenuOpen ? 'text-[#FDFBF7]/70' : 'text-[#C4A484]'}`}>
              Hair Studio
            </span>
          </Link>

          {/* Desktop Nav - Right */}
          <nav className="hidden md:flex gap-10 items-center justify-end flex-1">
            <Link 
              href="/test-hair-salon/ekibimiz"
              className="text-xs font-sans tracking-[0.1em] uppercase text-[#352F2A]/70 hover:text-[#C4A484] transition-colors relative group"
            >
              Ekibimiz
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/test-hair-salon/iletisim"
              className="text-xs font-sans tracking-[0.1em] uppercase text-[#352F2A]/70 hover:text-[#C4A484] transition-colors relative group"
            >
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C4A484] transition-all duration-500 group-hover:w-full"></span>
            </Link>
            
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="ml-4 text-xs font-sans tracking-[0.1em] uppercase text-[#FDFBF7] bg-[#352F2A] border border-[#352F2A] px-6 py-2.5 hover:bg-transparent hover:text-[#352F2A] transition-all duration-500"
            >
              Randevu
            </button>
          </nav>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#352F2A] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-6 mb-16">
              {[
                { name: 'Ana Sayfa', href: '/test-hair-salon' },
                { name: 'Hakkımızda', href: '/test-hair-salon/hakkimizda' },
                { name: 'Hizmetler', href: '/test-hair-salon/hizmetler' },
                { name: 'Ekibimiz', href: '/test-hair-salon/ekibimiz' },
                { name: 'İletişim', href: '/test-hair-salon/iletisim' }
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.6 }}
                >
                  <Link 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-[#FDFBF7] hover:text-[#C4A484] transition-colors"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#352F2A] bg-[#C4A484] px-10 py-4 hover:bg-[#FDFBF7] transition-colors duration-500"
            >
              Randevu Oluştur
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <HairSalonBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
