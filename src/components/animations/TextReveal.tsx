"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightedWords?: string[];
  highlightClassName?: string;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  delay = 0,
  highlightedWords = [],
  highlightClassName = ""
}) => {
  const prefersReducedMotion = useReducedMotion();
  const words = text.split(" ");

  if (prefersReducedMotion) {
    return <div className={className}>{text}</div>;
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => {
        // Strip punctuation to check for highlighting
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted = highlightedWords.includes(cleanWord);

        return (
          <motion.span
            variants={child}
            className={`inline-block mr-2 ${isHighlighted ? highlightClassName : ""}`}
            key={index}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
