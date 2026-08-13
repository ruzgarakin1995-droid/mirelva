"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ClinicGallery() {
 const containerRef = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start end", "end start"]
 });

 const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
 const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

 return (
 <section id="klinik" ref={containerRef} className="py-32 bg-[#FAFAFA] text-[#1A1A1A] overflow-hidden">
 <div className="max-w-7xl mx-auto px-6">
 
 <div className="text-center mb-24">
 <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#1A1A1A]/40 mb-4 block">
 Klinik
 </span>
 <h2 className="text-4xl md:text-5xl font-serif">
 Rahatlatıcı Bir Atmosfer
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 
 <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
 <div className="aspect-[4/5] overflow-hidden bg-[#1A1A1A]/5">
 <img 
 src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop" 
 alt="Clinic Interior"
 className="w-full h-full object-cover transition-all duration-1000"
 />
 </div>
 <div className="aspect-[16/9] overflow-hidden bg-[#1A1A1A]/5">
 <img 
 src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop" 
 alt="Technology"
 className="w-full h-full object-cover transition-all duration-1000"
 />
 </div>
 </motion.div>

 <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:mt-32">
 <div className="aspect-[16/9] overflow-hidden bg-[#1A1A1A]/5">
 <img 
 src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" 
 alt="Details"
 className="w-full h-full object-cover transition-all duration-1000"
 />
 </div>
 <div className="aspect-[4/5] overflow-hidden bg-[#1A1A1A]/5">
 <img 
 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop" 
 alt="Modern Equipment"
 className="w-full h-full object-cover transition-all duration-1000"
 />
 </div>
 </motion.div>

 </div>

 </div>
 </section>
 );
}
