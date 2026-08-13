"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Dumbbell } from 'lucide-react';

export function Header({ onOpenTrial }: { onOpenTrial: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-bold text-2xl tracking-tighter">
          <Dumbbell className="text-cyan-400" />
          <span>NEXUS<span className="text-cyan-400">FIT</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300 tracking-widest uppercase">
          <a href="#classes" className="hover:text-cyan-400 transition-colors">Dersler</a>
          <a href="#trainers" className="hover:text-cyan-400 transition-colors">Antrenörler</a>
          <a href="#memberships" className="hover:text-cyan-400 transition-colors">Üyelikler</a>
          <a href="#facilities" className="hover:text-cyan-400 transition-colors">Tesisler</a>
        </nav>
        <button 
          onClick={onOpenTrial}
          className="hidden md:block bg-cyan-400 text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors"
        >
          Ücretsiz Dene
        </button>
        <button className="md:hidden text-white"><Menu /></button>
      </div>
    </motion.header>
  );
}

