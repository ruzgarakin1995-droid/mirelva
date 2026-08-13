"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

type RevealVariant = "fade-up" | "blur" | "scale" | "clip-path" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  staggerChildren = false,
  staggerDelay = 0.1,
  as = "div"
}) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion(as as any);

  // If user prefers reduced motion, just do a simple fade
  if (prefersReducedMotion) {
    return (
      <Component
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        className={className}
      >
        {children}
      </Component>
    );
  }

  // Define premium easing
  const ease = [0.22, 1, 0.36, 1]; // Apple-like smooth bezier

  const variantsMap: Record<RevealVariant, Variants> = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    "blur": {
      hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
    },
    "scale": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    },
    "clip-path": {
      hidden: { opacity: 0, clipPath: "inset(15% 0 15% 0)" },
      visible: { opacity: 1, clipPath: "inset(0% 0 0% 0)" }
    },
    "slide-left": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    "slide-right": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    }
  };

  const selectedVariants = staggerChildren
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }
    : variantsMap[variant];

  return (
    <Component
      variants={selectedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay: staggerChildren ? 0 : delay, ease: ease as any }}
      className={className}
    >
      {children}
    </Component>
  );
};

export const ScrollRevealChild: React.FC<{
  children?: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  as?: React.ElementType;
  href?: string;
}> = ({ children, variant = "fade-up", className = "", as = "div", ...props }) => {
  const ease = [0.22, 1, 0.36, 1] as any;
  const variantsMap: Record<RevealVariant, Variants> = {
    "fade-up": {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
    },
    "blur": {
      hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease } }
    },
    "scale": {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease } }
    },
    "clip-path": {
      hidden: { opacity: 0, clipPath: "inset(15% 0 15% 0)" },
      visible: { opacity: 1, clipPath: "inset(0% 0 0% 0)", transition: { duration: 0.8, ease } }
    },
    "slide-left": {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } }
    },
    "slide-right": {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } }
    }
  };

  const Component = motion(as as any);

  return (
    <Component variants={variantsMap[variant]} className={className} {...props}>
      {children}
    </Component>
  );
};
