"use client";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function MagneticButton({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({ 
      x: (e.clientX - left - width / 2) * 0.3, 
      y: (e.clientY - top - height / 2) * 0.3 
    });
  };

  return (
    <motion.button 
      ref={ref} 
      onMouseMove={onMove} 
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos} 
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      className={`px-8 py-4 bg-[#FF3E00] text-[#0A0A0A] font-mono font-black uppercase tracking-widest hover:bg-[#E5E5E5] transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
}
