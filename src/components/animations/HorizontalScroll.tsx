"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface HorizontalScrollProps {
  children: React.ReactNode;
  sectionsCount: number; // To calculate the height of the scroll container
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children, sectionsCount }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate how far to translate. We move (sectionsCount - 1) * 100vw left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(sectionsCount - 1) * 100}vw`]);

  if (prefersReducedMotion) {
    // If reduced motion, just stack them vertically
    return <div className="w-full flex flex-col">{children}</div>;
  }

  // Multiply height by sectionsCount so user scrolls down a long time while the content moves horizontally
  return (
    <div ref={targetRef} style={{ height: `${sectionsCount * 100}vh` }} className="relative bg-slate-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 px-12 md:px-24">
          {children}
        </motion.div>
      </div>
    </div>
  );
};
