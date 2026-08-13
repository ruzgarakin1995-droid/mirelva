'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Coffee, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [lang, setLang] = useState<'TR' | 'EN'>('TR');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950 text-stone-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-stone-950/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop" 
          alt="Coffee roasting process" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-stone-200" />
          <span className="text-xl font-medium tracking-widest text-stone-200">ROAST.</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'TR' ? 'EN' : 'TR')}
            className="px-4 py-2 rounded-full border border-stone-700 hover:border-stone-400 transition-colors text-sm font-medium backdrop-blur-sm bg-stone-900/30"
          >
            {lang === 'TR' ? 'TR | EN' : 'EN | TR'}
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Mükemmellik <br/>
            <span className="text-amber-600 italic font-serif">kavruldu.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-stone-300 font-light max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Dünyanın en seçkin kahve çekirdekleri, zanaatkar hassasiyetiyle işleniyor. 
          Endüstriyel kavurma sanatının en saf haliyle tanışın.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <button className="bg-stone-100 text-stone-900 px-8 py-4 rounded-full font-medium tracking-wide hover:bg-stone-300 transition-colors flex items-center gap-2">
            Çekirdekleri Keşfet
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-stone-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
