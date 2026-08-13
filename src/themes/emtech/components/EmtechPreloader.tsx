"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EmtechPreloader() {
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

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none w-screen h-screen bg-zinc-50"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <span className="font-space font-black text-6xl md:text-8xl text-zinc-950 tracking-tighter uppercase leading-none">
              EMTECH
            </span>
            <div className="w-full max-w-[200px] h-[2px] bg-zinc-200 mt-6 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#0055FF]"
              />
            </div>
            <span className="font-mono text-[10px] text-zinc-400 tracking-[0.3em] uppercase mt-4 text-center">
              A+ KALİTE YEDEK PARÇA
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
