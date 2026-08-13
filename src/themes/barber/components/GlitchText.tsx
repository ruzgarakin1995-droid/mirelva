"use client";

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function GlitchText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 3000)); // wait 3s
        // Glitch!
        controls1.start({ x: [-5, 5, 0], transition: { duration: 0.15, times: [0, 0.5, 1] } });
        controls2.start({ x: [5, -5, 0], transition: { duration: 0.15, times: [0, 0.5, 1], delay: 0.05 } });
      }
    };
    sequence();
  }, [controls1, controls2]);

  return (
    <div ref={containerRef} className="relative font-mono font-black uppercase inline-block">
      <span className="relative z-10">{text}</span>
      <motion.span 
        animate={controls1}
        className="absolute top-0 left-0 text-[#FF3E00] mix-blend-screen pointer-events-none" 
        aria-hidden
      >
        {text}
      </motion.span>
      <motion.span 
        animate={controls2}
        className="absolute top-0 left-0 text-cyan-500 mix-blend-screen pointer-events-none" 
        aria-hidden
      >
        {text}
      </motion.span>
    </div>
  );
}
