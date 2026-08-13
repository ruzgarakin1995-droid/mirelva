"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ weight: '400', subsets: ['latin'] });

const SplitScreenLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after a short delay so the user sees the logo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.8 } }}
        >
          {/* Top Half */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-[#1A1614]"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />
          {/* Bottom Half */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#1A1614]"
            initial={{ y: 0 }}
            exit={{ y: "100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
          />

          {/* Logo Wrapper */}
          <motion.div 
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.4, ease: "easeIn" } }}
          >
            <span className={`${greatVibes.className} text-6xl md:text-8xl text-white leading-none capitalize`}>
              Zehra
            </span>
            <span className="font-sans text-[0.7rem] md:text-xs tracking-[0.6em] md:tracking-[0.8em] uppercase text-[#C19A6B] mt-2 pl-2">
              Organizasyon
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplitScreenLoader;
