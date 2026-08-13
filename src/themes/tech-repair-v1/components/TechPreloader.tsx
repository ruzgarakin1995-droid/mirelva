"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TechPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => setIsLoading(false), 1200); 
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => { document.body.style.overflow = ""; }, 100);
    }
  }, [isLoading]);

  const numColumns = 5;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          exit={{ opacity: 0, transition: { delay: 1.2, duration: 0.1 } }}
          className="fixed inset-0 z-[100] flex pointer-events-none w-screen h-screen overflow-hidden"
        >
          
          {/* Logo overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center mix-blend-difference"
          >
            <span className="font-space font-black text-6xl text-white tracking-tighter">THE LAB</span>
            <div className="w-12 h-1 bg-cyan-400 mt-4 rounded-full" />
          </motion.div>

          {/* Staggered Columns */}
          {Array.from({ length: numColumns }).map((_, i) => (
            <motion.div 
              key={i}
              initial={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1], 
                delay: i * 0.08 
              }}
              className="h-full bg-zinc-950 border-r border-white/5 flex-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20"></div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
