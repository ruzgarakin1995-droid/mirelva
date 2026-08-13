"use client";

import React from 'react';
import { motion } from 'framer-motion';

export interface TreatmentStep {
  title: string;
  description: string;
}

export interface TreatmentPageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  steps: TreatmentStep[];
  heroImage: string;
  secondaryImage?: string;
  backgroundText?: string;
}

export function TreatmentPageTemplate({
  title,
  subtitle,
  description,
  steps,
  heroImage,
  secondaryImage,
  backgroundText = "AESTHETICS"
}: TreatmentPageTemplateProps) {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-16 text-center max-w-4xl mx-auto"
        >
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#1A1A1A]/40 mb-8 block">
            Tedaviler / {title}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8" dangerouslySetInnerHTML={{ __html: subtitle }} />
          <p className="font-sans font-light text-[#1A1A1A]/60 leading-relaxed text-lg">
            {description}
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="w-full h-[50vh] md:h-[70vh] overflow-hidden mb-24 rounded-2xl"
        >
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Big Statement & Steps */}
        <div className="py-24 border-y border-[#1A1A1A]/10 mb-24 relative overflow-hidden">
          {/* Subtle background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
            <h2 className="text-[10vw] font-serif leading-none whitespace-nowrap">
              {backgroundText}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10 text-center">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2 }}
              >
                <h4 className="text-2xl font-serif text-[#1A1A1A] mb-4">{idx + 1}. {step.title}</h4>
                <p className="font-sans font-light text-[#1A1A1A]/70 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Image if provided */}
        {secondaryImage && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-2xl"
          >
            <img src={secondaryImage} alt={`${title} Detay`} className="w-full h-full object-cover" />
          </motion.div>
        )}

      </div>
    </div>
  );
}
