"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Globe, Menu, X } from 'lucide-react';

export function Hero() {
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop" 
          alt="Gourmet Burger" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </motion.div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Flame className="text-yellow-500 w-8 h-8" />
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            Smash<span className="text-yellow-500">Bros.</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase tracking-wider text-sm">
          <a href="#" className="hover:text-yellow-500 transition-colors">Menü</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Hakkımızda</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Lokasyonlar</a>
          
          <div className="flex items-center gap-2 bg-neutral-900/80 backdrop-blur border border-neutral-700 rounded-full px-3 py-1">
            <Globe className="w-4 h-4 text-neutral-400" />
            <button 
              onClick={() => setLang('TR')} 
              className={`transition-colors ${lang === 'TR' ? 'text-yellow-500' : 'text-neutral-500 hover:text-white'}`}
            >
              TR
            </button>
            <span className="text-neutral-700">|</span>
            <button 
              onClick={() => setLang('EN')} 
              className={`transition-colors ${lang === 'EN' ? 'text-yellow-500' : 'text-neutral-500 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(true)}>
          <Menu className="w-8 h-8" />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-neutral-950 flex flex-col items-center justify-center gap-8"
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setMenuOpen(false)}>
              <X className="w-8 h-8" />
            </button>
            <a href="#" className="text-3xl font-black uppercase italic hover:text-yellow-500 transition-colors">Menü</a>
            <a href="#" className="text-3xl font-black uppercase italic hover:text-yellow-500 transition-colors">Hakkımızda</a>
            <a href="#" className="text-3xl font-black uppercase italic hover:text-yellow-500 transition-colors">Lokasyonlar</a>
            
            <div className="flex items-center gap-4 mt-8 text-xl font-bold">
              <button 
                onClick={() => setLang('TR')} 
                className={`transition-colors ${lang === 'TR' ? 'text-yellow-500' : 'text-neutral-500'}`}
              >
                TR
              </button>
              <span className="text-neutral-700">|</span>
              <button 
                onClick={() => setLang('EN')} 
                className={`transition-colors ${lang === 'EN' ? 'text-yellow-500' : 'text-neutral-500'}`}
              >
                EN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-6 text-white drop-shadow-2xl">
            Gerçek <span className="text-yellow-500">Smash</span> Deneyimi.
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 font-medium mb-10 max-w-2xl mx-auto">
            Gevrek kenarlar, sulu iç yapı ve ev yapımı soslar. Şehrin en iddialı burgeriyle tanışın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 text-black font-black uppercase italic tracking-wider hover:bg-yellow-400 transition-colors rounded-sm text-lg">
              Siparişe Başla
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-black uppercase italic tracking-wider hover:bg-white hover:text-black transition-colors rounded-sm text-lg">
              Menüyü Gör
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-neutral-500 flex flex-col items-center"
      >
        <span className="text-xs uppercase font-bold tracking-widest mb-2">Aşağı Kaydır</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-yellow-500 to-transparent" />
      </motion.div>
    </section>
  );
}
