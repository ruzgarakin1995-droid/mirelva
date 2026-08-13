"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function SplitPreloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 1500); // Wait for the split animation to complete before unmounting

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.1, delay: 0.5 } }} // Small delay to let the split finish
        >
          {/* Left Panel */}
          <motion.div 
            initial={{ x: 0 }} 
            animate={{ x: "-100%" }} 
            transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-[#09090b] border-r border-[#ccff00]/20 flex items-center justify-end overflow-hidden"
          >
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="mr-2 md:mr-4"
             >
                <span className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase">
                  Vertex
                </span>
             </motion.div>
          </motion.div>

          {/* Right Panel */}
          <motion.div 
            initial={{ x: 0 }} 
            animate={{ x: "100%" }} 
            transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="w-1/2 h-full bg-[#09090b] border-l border-[#ccff00]/20 flex items-center justify-start overflow-hidden"
          >
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="ml-2 md:ml-4"
             >
                <span className="text-4xl md:text-7xl font-black text-[#ccff00] tracking-tighter uppercase">
                  Nutrition
                </span>
             </motion.div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
