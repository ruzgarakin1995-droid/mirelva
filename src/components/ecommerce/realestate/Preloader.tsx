"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we already showed the preloader in this session
    const hasLoaded = sessionStorage.getItem('aura-preloader-shown');
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Set timeout to hide preloader and save to session storage
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('aura-preloader-shown', 'true');
    }, 2800); // 2.8 seconds total display time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a] text-[#f5f5f0] overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo Animation */}
          <div className="overflow-hidden">
            <motion.h1 
              className="text-4xl md:text-6xl font-normal tracking-widest text-[#f5f5f0] flex items-center gap-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
              exit={{ y: "-100%", opacity: 0 }}
            >
              AURA
              <motion.span 
                className="font-serif italic text-[#f5f5f0]/60 lowercase text-3xl md:text-5xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
              >
                estates
              </motion.span>
            </motion.h1>
          </div>

          {/* Slogan */}
          <div className="overflow-hidden mt-6">
             <motion.p 
               className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-[#f5f5f0]/40"
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
               exit={{ opacity: 0 }}
             >
               Sessiz Lüksün Mimarları
             </motion.p>
          </div>
          
          {/* Line expander */}
          <motion.div 
            className="absolute bottom-24 w-[1px] bg-[#f5f5f0]/30 origin-bottom"
            initial={{ height: 0 }}
            animate={{ height: 100 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
            exit={{ opacity: 0 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
