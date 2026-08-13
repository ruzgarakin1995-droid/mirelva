"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Vision() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12" id="vision">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-32">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-8"
            >
              Vizyon
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-light leading-tight mb-8"
            >
              Mimarinin yalnızca duvarlar örmek değil, <span className="font-bold">ışığı, mekanı ve insan duygusunu şekillendirmek</span> olduğuna inanıyoruz.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-black/70 mb-8 max-w-md">
                Titiz minimalizm prensipleri üzerine kurularak, formun saf özünü ortaya çıkarmak için gereksiz olan her şeyden arınıyoruz. Her proje; bağlam, maddesellik ve mekanın şiirselliği üzerine bir keşiftir.
              </p>
              
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop" alt="Founder Signature" className="h-12 opacity-80" onError={(e) => e.currentTarget.style.display = 'none'} />
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[3/4] md:aspect-square relative overflow-hidden bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" 
                alt="Interior Architecture Detail" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


