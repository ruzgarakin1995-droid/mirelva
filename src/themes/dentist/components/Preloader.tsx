"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this might wait for assets to load. 
    // Here we simulate a luxurious 2.5 second loading experience.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col">
          
          {/* Top Half */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 bg-[#1A1A1A] w-full"
          />

          {/* Bottom Half */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="flex-1 bg-[#1A1A1A] w-full"
          />

          {/* Centered Brand Text */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-center overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-4xl md:text-6xl font-serif tracking-widest text-[#FAFAFA]"
              >
                Dişmekan
                <span className="block text-[10px] md:text-xs font-sans font-light tracking-[0.3em] uppercase mt-4 text-[#D4C9C3]">
                  Ağız ve Diş Sağlığı Polikliniği
                </span>
              </motion.span>
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
