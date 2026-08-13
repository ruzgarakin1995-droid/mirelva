"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SalonBookingModal } from './SalonBookingModal';

export function SalonHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Custom event listener for opening booking modal from anywhere
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
            ? 'bg-[#FCFBF9]/90 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.02)]' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Brand */}
          <Link href="/test-salon" className="group flex flex-col items-center relative z-[60]">
            <span className={`text-2xl font-serif tracking-widest transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FCFBF9]' : 'text-[#4A403F]'}`}>
              LUMINA
            </span>
            <span className={`text-[8px] font-sans font-light tracking-[0.4em] uppercase transition-colors duration-500 mt-1 ${isMobileMenuOpen ? 'text-[#FCFBF9]/70' : 'text-[#D4A3A3]'}`}>
              Nail Art Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
            {[
              { name: 'Ana Sayfa', path: '/test-salon' },
              { name: 'Hakkımızda', path: '/test-salon/hakkimizda' },
              { name: 'Hizmetler', path: '/test-salon/hizmetler' },
              { name: 'Ekibimiz', path: '/test-salon/ekibimiz' },
              { name: 'İletişim', path: '/test-salon/iletisim' },
            ].map(link => (
              <Link 
                key={link.name}
                href={link.path}
                className="text-[11px] font-sans tracking-[0.15em] uppercase text-[#4A403F]/70 hover:text-[#D4A3A3] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4A3A3] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="text-[11px] font-sans tracking-[0.15em] uppercase text-[#4A403F] border border-[#E0B6B6] px-8 py-3 hover:bg-[#E0B6B6] hover:text-[#FCFBF9] transition-all duration-500 rounded-full"
            >
              Randevu Al
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-[60] p-2 transition-colors duration-500 ${isMobileMenuOpen ? 'text-[#FCFBF9]' : 'text-[#4A403F]'}`}
          >
            <div className="w-6 h-4 relative flex flex-col justify-between items-end">
              <span className={`h-[1px] bg-current transition-all duration-300 origin-right ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-[1px]' : 'w-full'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-4'}`}></span>
              <span className={`h-[1px] bg-current transition-all duration-300 origin-right ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-[1px]' : 'w-5'}`}></span>
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-[#4A403F] flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 mb-16">
              {[
                { name: 'Ana Sayfa', path: '/test-salon' },
                { name: 'Hakkımızda', path: '/test-salon/hakkimizda' },
                { name: 'Hizmetler', path: '/test-salon/hizmetler' },
                { name: 'Ekibimiz', path: '/test-salon/ekibimiz' },
                { name: 'İletişim', path: '/test-salon/iletisim' },
              ].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                >
                  <Link 
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif text-[#FCFBF9] hover:text-[#E0B6B6] transition-colors font-light italic"
                  >
                    {link.name}
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
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#4A403F] bg-[#E0B6B6] px-10 py-4 hover:bg-[#FCFBF9] transition-colors duration-500 rounded-full"
            >
              Randevu Al
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <SalonBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
