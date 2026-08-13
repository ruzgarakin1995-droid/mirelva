"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SalonPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none items-center justify-center bg-[#FCFBF9]">
          <motion.div
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif text-[#4A403F] tracking-wide mb-2"
            >
              LUMINA
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#D4A3A3]"
            >
              Nail Art Studio
            </motion.div>
          </motion.div>
          
          {/* Subtle reveal overlay */}
          <motion.div
            initial={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="absolute bottom-0 left-0 right-0 bg-[#E0B6B6]/10 backdrop-blur-sm origin-bottom"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
