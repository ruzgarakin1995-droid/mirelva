"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  const text = "Gülüşünüz, karakterinizin en güçlü yansımasıdır. Bilim ve estetiği harmanlayarak, size özel, zamansız bir sanat eseri tasarlıyoruz.";
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <section id="felsefemiz" ref={containerRef} className="py-24 md:py-32 bg-[#FAFAFA] px-6 border-b border-[#1A1A1A]/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <span className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-12 block">
          Felsefemiz
        </span>
        
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-[1.6] md:leading-[1.5]"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {words.map((word, idx) => (
            <motion.span 
              key={idx} 
              variants={child}
              className="inline-block mr-[0.3em] mb-2"
            >
              {word === "sanat" || word === "eseri" ? (
                <span className="italic text-[#D4C9C3] font-light">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
