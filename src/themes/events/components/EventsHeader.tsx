"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import EventsQuoteModal from './EventsQuoteModal';
import LanguageSwitcher from './LanguageSwitcher';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const EventsHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımızda', href: '/test-events/hakkimizda' },
    { name: 'Hizmetler', href: '/test-events/hizmetler' },
    { name: 'Mekanlar', href: '/test-events/mekanlar' },
    { name: 'Galeri', href: '/test-events/galeri' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-[#1A1614]/60 backdrop-blur-lg py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/test-events" className="z-50 flex flex-col items-start md:items-center justify-center">
            <span className={`${greatVibes.className} text-4xl md:text-5xl text-white leading-none capitalize`}>
              Zehra
            </span>
            <span className="font-sans text-[0.6rem] md:text-[0.65rem] tracking-[0.4em] md:tracking-[0.6em] uppercase text-[#C19A6B] mt-1 pl-1">
              Organizasyon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-[#C19A6B] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-6 ml-2">
              <LanguageSwitcher />
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="border border-[#C19A6B] text-[#C19A6B] px-6 py-2 text-xs uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-colors duration-300"
              >
                Teklif Al
              </button>
            </div>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3 z-50 mt-2">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsQuoteModalOpen(true)}
              className="border border-[#C19A6B] text-[#C19A6B] px-3 py-1.5 text-[9px] uppercase tracking-widest bg-[#1A1614]/50 backdrop-blur-sm whitespace-nowrap"
            >
              Teklif Al
            </button>
            <button 
              className="text-white ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#1A1614] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-white hover:text-[#C19A6B] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { setIsMobileMenuOpen(false); setIsQuoteModalOpen(true); }}
            className="mt-4 border border-[#C19A6B] text-[#C19A6B] px-10 py-3 text-sm uppercase tracking-widest hover:bg-[#C19A6B] hover:text-white transition-colors duration-300"
          >
            Teklif Al
          </button>
        </nav>
      </div>

      <EventsQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </>
  );
};

export default EventsHeader;
