"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop" 
          alt="Hotel Experience" 
          className="w-full h-full object-cover filter brightness-[0.3]"
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
        >
          "Sadece Bir Otel Değil,<br/>Bir Yaşam Stili."
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-24 h-px bg-[var(--accent)] mx-auto mb-8"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl font-light text-white/80"
        >
          Lumière Resort, seçkin konuklarına benzersiz bir konaklama deneyimi vaat ediyor.
        </motion.p>
      </div>
    </section>
  );
}

