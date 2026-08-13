"use client";
import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-950/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-yellow-500 tracking-wider uppercase">
          Finance<span className="text-white">Corp</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">Hizmetler</a>
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">Piyasalar</a>
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">Ekibimiz</a>
          <a href="#" className="text-sm font-medium text-white hover:text-yellow-400 transition-colors">İletişim</a>
          <button className="min-h-[44px] min-w-[44px] px-6 py-2 bg-yellow-500 text-blue-950 font-bold hover:bg-yellow-400 transition-colors rounded-sm">
            Müşteri Girişi
          </button>
        </nav>

        <button 
          className="md:hidden flex flex-col justify-center items-center w-11 h-11 space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-yellow-500 transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-yellow-500 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-yellow-500 transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-950 border-t border-white/10 shadow-xl p-4 flex flex-col gap-4">
          <a href="#" className="block p-3 text-white border-b border-white/5 hover:text-yellow-400">Hizmetler</a>
          <a href="#" className="block p-3 text-white border-b border-white/5 hover:text-yellow-400">Piyasalar</a>
          <a href="#" className="block p-3 text-white border-b border-white/5 hover:text-yellow-400">Ekibimiz</a>
          <a href="#" className="block p-3 text-white border-b border-white/5 hover:text-yellow-400">İletişim</a>
          <button className="w-full min-h-[44px] mt-2 bg-yellow-500 text-blue-950 font-bold hover:bg-yellow-400 transition-colors rounded-sm">
            Müşteri Girişi
          </button>
        </div>
      )}
    </header>
  );
};

