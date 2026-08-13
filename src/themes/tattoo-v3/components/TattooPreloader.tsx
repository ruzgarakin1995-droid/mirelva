"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TattooPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll while loading
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); 

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        document.body.style.overflow = "";
      }, 100); 
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none w-screen h-screen overflow-hidden">
          {/* Left Panel */}
          <motion.div 
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-zinc-950 border-r border-zinc-900/50 relative flex items-center justify-end overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10"></div>
          </motion.div>

          {/* Right Panel */}
          <motion.div 
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-zinc-950 border-l border-zinc-900/50 relative flex items-center justify-start overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10"></div>
          </motion.div>

          {/* Center Logo/Text Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
          >
            <motion.div
               animate={{ opacity: [1, 0] }}
               transition={{ duration: 0.3, delay: 0.4 }}
               className="flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-2">
                Iron <span className="text-red-600">&</span> Ink
              </h1>
              <div className="w-16 h-1 bg-red-600 mb-4 mx-auto"></div>
              <p className="text-zinc-500 tracking-[0.4em] text-xs uppercase font-bold">
                Premium Tattoo Studio
              </p>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
