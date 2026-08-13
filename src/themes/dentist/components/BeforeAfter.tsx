"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { left, width } = containerRef.current.getBoundingClientRect();
    
    let clientX = 0;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - left;
    const position = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(position);
  };

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
           <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#D4C9C3] mb-4 block">
             Gerçek Değişimler
           </span>
           <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
             Öncesi & Sonrası
           </h2>
        </div>

        <motion.div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#1A1A1A]/5 overflow-hidden cursor-ew-resize rounded-sm shadow-xl"
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* AFTER IMAGE (Bottom Layer) */}
          <div className="absolute inset-0 select-none pointer-events-none">
            <img 
              src="/lumina_after.jpg" 
              alt="Sonrası"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6 bg-[#FAFAFA] text-[#1A1A1A] px-4 py-2 text-[10px] font-sans tracking-widest uppercase font-bold shadow-md">
              Sonrası
            </div>
          </div>

          {/* BEFORE IMAGE (Top Layer, Masked) */}
          <div 
            className="absolute inset-0 select-none pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/lumina_before.jpg" 
              alt="Öncesi"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-[#1A1A1A] text-[#FAFAFA] px-4 py-2 text-[10px] font-sans tracking-widest uppercase font-bold shadow-md">
              Öncesi
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-[#FAFAFA] pointer-events-none shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FAFAFA] shadow-xl flex items-center justify-center text-[#1A1A1A]">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <polyline points="11 17 6 12 11 7"></polyline>
                 <polyline points="13 7 18 12 13 17"></polyline>
               </svg>
             </div>
          </div>
          
        </motion.div>

        <p className="text-center text-[#1A1A1A]/40 font-sans text-sm mt-8 tracking-wide">
          Kaydırarak aradaki farkı inceleyin. Porselen Lamina uygulaması.
        </p>

      </div>
    </section>
  );
}
