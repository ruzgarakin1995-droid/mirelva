"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function BarberAmbience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different elements
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  // Scale effect for the main background
  const scaleMain = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="py-40 bg-[#F8F7F5] relative overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-[#2A2522]/5 hidden md:block"></div>
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-[#2A2522]/5 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header section with offset */}
        <div className="md:ml-[10%] mb-32 relative z-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
          >
            Atmosfer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#2A2522] leading-tight"
          >
            Detaylarda <br/>
            <span className="italic text-[#C1A68D] font-light">Gizli Lüks.</span>
          </motion.h2>
        </div>

        {/* Editorial Parallax Gallery Layout */}
        <div className="relative h-[800px] md:h-[1000px] w-full mt-24">
          
          {/* Main Large Image */}
          <motion.div 
            style={{ y: yImage1 }}
            className="absolute right-0 md:right-[5%] top-0 w-full md:w-[65%] h-[500px] md:h-[700px] overflow-hidden bg-[#2A2522] shadow-2xl z-10"
          >
            <motion.div 
              style={{ scale: scaleMain }}
              className="w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1600&auto=format&fit=crop" 
                alt="Barber Shop Interior"
                className="w-full h-full object-cover sepia-[0.2] opacity-90"
              />
            </motion.div>
          </motion.div>

          {/* Overlapping Smaller Image (Fast Parallax) */}
          <motion.div 
            style={{ y: yImage2 }}
            className="absolute left-0 md:left-[10%] bottom-[10%] md:bottom-[20%] w-[70%] md:w-[35%] h-[300px] md:h-[450px] overflow-hidden bg-[#2A2522] shadow-2xl z-30 border-8 border-[#F8F7F5]"
          >
            <img 
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop" 
              alt="Leather Chair Detail"
              className="w-full h-full object-cover sepia-[0.3]"
            />
          </motion.div>

          {/* Floating Quote Box */}
          <motion.div 
            style={{ y: yText }}
            className="absolute right-[5%] md:right-[20%] bottom-0 md:bottom-[10%] bg-[#2A2522] p-8 md:p-12 w-[80%] md:w-[400px] z-40 shadow-xl"
          >
            <div className="text-[#C1A68D] mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="font-serif text-xl md:text-2xl text-[#F8F7F5] italic leading-relaxed mb-6">
              Sadece bir saç kesimi değil; kokular, dokular ve müzikle tasarlanmış 45 dakikalık bir kaçış.
            </p>
            <div className="w-12 h-[1px] bg-[#C1A68D]"></div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
