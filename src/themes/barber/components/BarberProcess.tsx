"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const steps = [
  { 
    num: "01", 
    title: "Danışmanlık", 
    desc: "Tarzınızı ve yüz hatlarınızı analiz edip, size en çok yakışacak imajı birlikte belirliyoruz. Acele etmeden, tamamen size özel bir yol haritası çiziyoruz.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )
  },
  { 
    num: "02", 
    title: "Zanaat", 
    desc: "Klasik berberlik teknikleri, usta makas darbeleri ve hassas ustura işçiliği ile saçınıza ve sakalınıza sanat katıyoruz. Her detay kusursuz olana dek.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <line x1="10" y1="9" x2="8" y2="9"></line>
      </svg>
    )
  },
  { 
    num: "03", 
    title: "Arınma", 
    desc: "Sıcak ve soğuk havlu kompresleri, özel formüllü yağlar ile saç derisi masajı. Seansımızı sadece harika görünerek değil, tamamen yenilenmiş hissederek bitiriyorsunuz.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    )
  }
];

function TiltCard({ step }: { step: typeof steps[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[4/5] bg-white shadow-xl shadow-[#2A2522]/5 p-10 flex flex-col cursor-crosshair overflow-hidden group"
    >
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2A2522 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C1A68D] to-transparent opacity-50"></div>

      <div 
        style={{ transform: "translateZ(60px)" }}
        className="flex justify-between items-start mb-12"
      >
        <div className="text-[#C1A68D] text-6xl font-serif italic leading-none">
          {step.num}
        </div>
        <div className="text-[#2A2522]/30 group-hover:text-[#C1A68D] transition-colors duration-500">
          {step.icon}
        </div>
      </div>
      
      <div style={{ transform: "translateZ(40px)" }} className="mt-auto relative z-10">
        <h3 className="text-3xl font-serif text-[#2A2522] mb-6 relative inline-block">
          {step.title}
          <span className="absolute -bottom-2 left-0 w-12 h-[1px] bg-[#C1A68D] group-hover:w-full transition-all duration-700"></span>
        </h3>
        <p className="text-[#2A2522]/60 font-sans font-light leading-relaxed text-sm">
          {step.desc}
        </p>
      </div>

      {/* Decorative inner border floating slightly higher */}
      <div 
        style={{ transform: "translateZ(20px)" }} 
        className="absolute inset-4 border border-[#2A2522]/5 pointer-events-none" 
      />
    </motion.div>
  );
}

export function BarberProcess() {
  return (
    <section className="py-32 bg-[#F8F7F5] relative" style={{ perspective: "1000px" }}>
      
      {/* Subtle Background noise or texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
          >
            Ritüel
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-serif text-[#2A2522] max-w-2xl mx-auto leading-tight"
          >
            Zamanın Durduğu, <br/>
            <span className="italic text-[#C1A68D] font-light">Mükemmelliğin Başladığı An.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-[#2A2522]/60 font-sans font-light max-w-lg mx-auto"
          >
            Üç aşamalı imza ritüelimiz ile sıradan bir saç kesimini, yenileyici bir deneyime dönüştürüyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12" style={{ perspective: "1200px" }}>
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard step={step} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
