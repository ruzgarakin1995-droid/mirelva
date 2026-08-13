"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { FlowerConfig } from './flower-config';

interface FlowerProps {
  config: FlowerConfig;
  mouseX: any; // Spring value from parent
  mouseY: any; // Spring value from parent
  className?: string;
}

export function Flower({ config, mouseX, mouseY, className = "" }: FlowerProps) {
  const prefersReducedMotion = useReducedMotion();
  const flowerRef = useRef<HTMLDivElement>(null);

  // Z-index management based on depth (Background: 10, Midground: 20, Foreground: 30)
  const getZIndex = (depth: string) => {
    switch (depth) {
      case 'background': return 10;
      case 'midground': return 20;
      case 'foreground': return 30;
      default: return 20;
    }
  };

  // Parallax strength based on depth
  const getParallaxStrength = (depth: string) => {
    switch (depth) {
      case 'background': return 0.02; // Very subtle
      case 'midground': return 0.05; // Medium
      case 'foreground': return 0.09; // Strongest
      default: return 0.05;
    }
  };

  const strength = getParallaxStrength(config.depth);
  
  // Transform mouse values into parallax offsets
  const parallaxX = useTransform(mouseX, (x: number) => x * strength * 100);
  const parallaxY = useTransform(mouseY, (y: number) => y * strength * 100);

  // Scroll parallax
  const { scrollY } = useScroll();
  const scrollParallax = useTransform(
    scrollY, 
    [0, 1000], 
    [0, strength * -1000] // Move upwards as we scroll down
  );
  const smoothScrollParallax = useSpring(scrollParallax, { damping: 20, stiffness: 50 });

  // If reduced motion is preferred, render statically without animations
  if (prefersReducedMotion) {
    return (
      <div
        className={className}
        style={{
          position: 'absolute',
          top: config.top,
          bottom: config.bottom,
          left: config.left,
          right: config.right,
          width: config.width,
          zIndex: getZIndex(config.depth),
          pointerEvents: 'none'
        }}
      >
        <img 
          src={config.image} 
          alt="Decorative flower" 
          className="w-full h-auto"
        />
      </div>
    );
  }

  return (
    <motion.div
      ref={flowerRef}
      className={className}
      style={{
        position: 'absolute',
        top: config.top,
        bottom: config.bottom,
        left: config.left,
        right: config.right,
        width: config.width,
        zIndex: getZIndex(config.depth),
        pointerEvents: 'none',
        x: parallaxX,
        y: parallaxY
      }}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 1.5, 
        ease: "easeOut",
        delay: config.delay 
      }}
    >
      <motion.div
        animate={{
          y: config.yRange,
          x: config.xRange,
          rotate: config.rotateRange,
          scale: config.scaleRange
        }}
        transition={{
          duration: config.floatDuration,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: config.delay // Offset the start time
        }}
        style={{
          y: smoothScrollParallax,
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src={config.image} 
          alt="" 
          aria-hidden="true"
          className="w-full h-auto drop-shadow-2xl"
          style={{ 
            willChange: 'transform'
          }}
        />
      </motion.div>
    </motion.div>
  );
}
