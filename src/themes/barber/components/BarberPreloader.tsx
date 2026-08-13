"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function BarberPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none">
          {/* Top Half Split */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#2A2522] flex items-end justify-center overflow-hidden"
          >
            <motion.div 
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-serif text-[#F8F7F5] tracking-[0.2em] translate-y-[50%]"
            >
              BOMONTI
            </motion.div>
          </motion.div>

          {/* Bottom Half Split */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#2A2522] flex items-start justify-center overflow-hidden"
          >
            <motion.div 
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-serif text-[#F8F7F5] tracking-[0.2em] -translate-y-[50%]"
            >
              BOMONTI
            </motion.div>
          </motion.div>
          
          {/* Middle Line */}
          <motion.div
            exit={{ scaleX: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#C1A68D]/30 origin-center"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
