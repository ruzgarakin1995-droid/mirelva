"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  speed?: "slow" | "medium" | "fast";
  overlay?: boolean;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = "",
  imageClassName = "",
  speed = "medium",
  overlay = false
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate translation range based on speed
  const getRange = () => {
    switch (speed) {
      case "slow": return ["-5%", "5%"];
      case "fast": return ["-20%", "20%"];
      default: return ["-10%", "10%"]; // medium
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], getRange());
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]); // subtle scale up

  // Premium clip reveal animation for the container itself
  const containerVariants = {
    hidden: { clipPath: "inset(10% 0 10% 0)" },
    visible: { 
      clipPath: "inset(0% 0 0% 0)", 
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1] as any 
      } 
    }
  };

  return (
    <motion.div 
      ref={ref}
      variants={prefersReducedMotion ? {} : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={prefersReducedMotion ? {} : { y, scale }}
        className={`w-full h-full object-cover will-change-transform ${imageClassName}`}
      />
      {overlay && (
        <div className="absolute inset-0 bg-slate-950/20 mix-blend-multiply" />
      )}
    </motion.div>
  );
};
