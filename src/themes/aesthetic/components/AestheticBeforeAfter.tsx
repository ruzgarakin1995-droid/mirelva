"use client";

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function AestheticBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FDFCF9] text-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#C4A79A]">Klinik Simülasyon</span>
            <div className="w-8 h-[1px] bg-[#C4A79A]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6"
          >
            Ameliyatsız <span className="italic font-light text-[#C4A79A]">Yüz Germe</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans font-light text-[#1C1C1C]/60 max-w-xl mx-auto text-sm"
          >
            HIFU ve fokus ultrason teknolojilerimizle cilt altı dokularına inerek uyguladığımız işlemin etkilerini görmek için ortadaki çubuğu sağa ve sola kaydırın.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] overflow-hidden select-none cursor-ew-resize rounded-lg shadow-2xl"
          ref={containerRef}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onMouseMove={onMouseMove}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          onTouchMove={onTouchMove}
        >
          {/* AFTER IMAGE (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/aesthetic/facelift_after.jpg" 
              alt="Facelift After" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-[#1C1C1C] shadow-lg">Sonrası</div>
          </div>

          {/* BEFORE IMAGE (Clipped Foreground) */}
          <div 
            className="absolute inset-0 w-full h-full border-r-[3px] border-[#C4A79A]"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="/aesthetic/facelift_before.jpg" 
              alt="Facelift Before" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 left-6 bg-[#1C1C1C]/90 backdrop-blur px-6 py-2 rounded-full text-xs font-semibold tracking-widest uppercase text-white shadow-lg">Öncesi</div>
          </div>

          {/* SLIDER HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center transform -translate-x-1/2 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.4)] border border-[#C4A79A]/20">
              <ChevronLeft className="w-5 h-5 text-[#C4A79A] -mr-1" />
              <ChevronRight className="w-5 h-5 text-[#C4A79A] -ml-1" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
