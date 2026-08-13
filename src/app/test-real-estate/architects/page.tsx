"use client";

import React from 'react';
import { architects } from '@/lib/mock-data/ecommerce/realestate';
import { motion } from 'framer-motion';

export default function ArchitectsPage() {
  return (
    <div className="w-full bg-[#f5f5f0] min-h-screen py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-normal tracking-tight mb-6"
          >
            Tasarımın <span className="font-serif italic text-[#1a1a1a]/60">Mimarları</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#1a1a1a]/60 font-medium max-w-2xl mx-auto"
          >
            AURA portföyündeki başyapıtların arkasındaki vizyoner isimler. Yaşam alanlarını sadece inşa etmiyor, yeniden tanımlıyorlar.
          </motion.p>
        </div>

        {/* Architects List */}
        <div className="flex flex-col gap-32">
          {architects.map((architect, index) => (
            <motion.div 
              key={architect.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden bg-[#eaeaea]">
                <img 
                  src={architect.image} 
                  alt={architect.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#1a1a1a]/50 mb-4 block">
                  {architect.role}
                </span>
                <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">
                  {architect.name}
                </h2>
                <div className="relative">
                  <span className="absolute -left-6 -top-4 text-6xl font-serif text-[#1a1a1a]/10">"</span>
                  <p className="text-xl md:text-2xl font-serif italic text-[#1a1a1a]/80 leading-relaxed">
                    {architect.philosophy}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
