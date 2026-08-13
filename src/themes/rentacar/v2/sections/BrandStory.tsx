"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const BrandStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-64 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-12">
            Zamanın Ötesinde Bir Deneyim. Sınırları Yeniden Çizen Konfor.
          </h2>
          <p className="text-xl md:text-3xl font-light text-slate-500 leading-relaxed max-w-3xl">
            Sadece bir noktadan diğerine gitmek değil; her kilometrede prestiji hissetmek. En ince detayına kadar düşünülmüş bir filoyla, yolculuğunuzun sanatını yeniden tanımlıyoruz. <span className="text-slate-900 font-medium">Bu sadece bir araç kiralama değil, bir yaşam tarzı beyanıdır.</span>
          </p>
        </motion.div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 text-[20vw] font-black text-slate-50 tracking-tighter whitespace-nowrap select-none pointer-events-none">
        LUXE
      </div>
    </section>
  );
};
