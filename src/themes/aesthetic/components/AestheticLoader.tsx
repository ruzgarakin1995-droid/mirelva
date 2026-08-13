"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function AestheticLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Hide loader after animation sequence is done (approx 2.5s)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Restore scroll
    }, 2800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          key="loader"
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto"
        >
          {/* Top Half Split */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
            className="absolute top-0 left-0 right-0 h-[50dvh] bg-[#FDFCF9] origin-top"
          />
          
          {/* Bottom Half Split */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
            className="absolute bottom-0 left-0 right-0 h-[50dvh] bg-[#FDFCF9] origin-bottom"
          />

          {/* Center Line that expands and disappears (optional aesthetic detail) */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C4A79A]/30 z-10 -translate-y-1/2"
          />

          {/* Brand Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              exit: { duration: 0.6, ease: "easeIn", delay: 0.8 } 
            }}
            className="relative z-20 flex flex-col items-center justify-center text-[#1C1C1C]"
          >
            <span className="text-4xl md:text-6xl lg:text-[80px] font-serif tracking-[0.2em]">
              MIRELVA
            </span>
            <span className="text-[9px] md:text-xs font-sans font-medium tracking-[0.4em] uppercase text-[#C4A79A] mt-4">
              Beauty Clinic
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
