"use client";

import React, { useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { Flower } from './Flower';
import { flowerInstances } from './flower-config';

export function FlowerField() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the mouse movement to create the "Apple/premium" delay feel
  const springConfig = { damping: 25, stiffness: 70, mass: 1.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to range [-0.5, 0.5]
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Don't render until mounted to avoid hydration mismatch with window sizes
  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {flowerInstances.map((flowerConfig) => (
        <Flower 
          key={flowerConfig.id} 
          config={flowerConfig} 
          mouseX={smoothMouseX}
          mouseY={smoothMouseY}
          className={flowerConfig.className}
        />
      ))}
    </div>
  );
}
