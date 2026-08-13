"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex overflow-hidden">
      
      {/* Left Panel: Satılık */}
      <motion.div 
        className="relative h-full flex flex-col justify-center items-center border-r border-[#1a1a1a]/10 cursor-pointer overflow-hidden"
        initial={{ width: "50%" }}
        animate={{ 
          width: hoveredSide === 'left' ? "60%" : hoveredSide === 'right' ? "40%" : "50%" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ scale: hoveredSide === 'left' ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="/images/realestate/villa.jpg" 
            alt="Satılık Mülkler"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 transition-colors duration-700 ${hoveredSide === 'left' ? 'bg-[#0a0a0a]/40' : 'bg-[#0a0a0a]/60'}`}></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <motion.span 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5f5f0]/50 mb-6"
            animate={{ y: hoveredSide === 'left' ? -10 : 0, opacity: hoveredSide === 'left' ? 1 : 0.7 }}
            transition={{ duration: 0.4 }}
          >
            Özel Koleksiyon
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#f5f5f0]"
            animate={{ y: hoveredSide === 'left' ? -10 : 0 }}
            transition={{ duration: 0.4 }}
          >
            Satılık
          </motion.h2>
          
          <AnimatePresence>
            {hoveredSide === 'left' && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 overflow-hidden"
              >
                <Link 
                  href="/test-real-estate/sale"
                  className="inline-flex items-center justify-center gap-3 bg-[#f5f5f0] text-[#1a1a1a] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                >
                  Portföyü Keşfet <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Right Panel: Kiralık */}
      <motion.div 
        className="relative h-full flex flex-col justify-center items-center cursor-pointer overflow-hidden"
        initial={{ width: "50%" }}
        animate={{ 
          width: hoveredSide === 'right' ? "60%" : hoveredSide === 'left' ? "40%" : "50%" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{ scale: hoveredSide === 'right' ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="/images/realestate/penthouse.jpg" 
            alt="Kiralık Mülkler"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 transition-colors duration-700 ${hoveredSide === 'right' ? 'bg-[#0a0a0a]/40' : 'bg-[#0a0a0a]/60'}`}></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <motion.span 
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#f5f5f0]/50 mb-6"
            animate={{ y: hoveredSide === 'right' ? -10 : 0, opacity: hoveredSide === 'right' ? 1 : 0.7 }}
            transition={{ duration: 0.4 }}
          >
            Seçkin Yaşam
          </motion.span>
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#f5f5f0]"
            animate={{ y: hoveredSide === 'right' ? -10 : 0 }}
            transition={{ duration: 0.4 }}
          >
            Kiralık
          </motion.h2>
          
          <AnimatePresence>
            {hoveredSide === 'right' && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 overflow-hidden"
              >
                <Link 
                  href="/test-real-estate/rent"
                  className="inline-flex items-center justify-center gap-3 bg-[#f5f5f0] text-[#1a1a1a] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors"
                >
                  Portföyü Keşfet <ArrowRight size={16} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

    </section>
  );
}
