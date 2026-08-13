"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LasisPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';
    
    // Total animation time 2.5s (then it splits)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex flex-col">
          {/* Top Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 bg-[#FAF5F0] border-b border-[#3E2B2B]/10 w-full"
          />
          
          {/* Bottom Panel */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 bg-[#FAF5F0] border-t border-[#3E2B2B]/10 w-full"
          />

          {/* Logo container that fades out right before the split */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center justify-center text-[#3E2B2B]">
              <span className="text-5xl md:text-7xl font-serif tracking-widest mb-3 overflow-hidden">
                <motion.span 
                  className="block"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                >
                  Lasis Klinik
                </motion.span>
              </span>
              <motion.span 
                className="text-[10px] md:text-xs font-sans tracking-[0.5em] uppercase opacity-70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1 }}
              >
                Medikal Estetik
              </motion.span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
