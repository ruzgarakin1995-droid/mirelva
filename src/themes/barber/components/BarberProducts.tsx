"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: "01",
    name: "Şekillendirici Pomad",
    desc: "Mat bitişli, güçlü tutuş sağlayan kil bazlı formül.",
    vol: "100ml",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#C1A68D]",
    textColor: "text-[#2A2522]"
  },
  {
    id: "02",
    name: "Arındırıcı Şampuan",
    desc: "Aktif karbon ve nane özü ile derinlemesine temizlik.",
    vol: "250ml",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#1A1715]",
    textColor: "text-[#F8F7F5]"
  },
  {
    id: "03",
    name: "Sakal Bakım Yağı",
    desc: "Argan ve jojoba yağı ile sakalları yumuşatır ve besler.",
    vol: "50ml",
    image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#2A2522]",
    textColor: "text-[#F8F7F5]"
  }
];

export function BarberProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const yProduct1 = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const yProduct2 = useTransform(scrollYProgress, [0, 1], ["40%", "-80%"]);
  const yProduct3 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={containerRef} className="py-48 bg-[#2A2522] relative overflow-hidden">
      
      {/* Background Floating Text */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5"
      >
        <h2 className="text-[15vw] font-serif whitespace-nowrap text-[#F8F7F5] leading-none">
          PREMIUM
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-32">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block">
            Koleksiyon
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#F8F7F5]">
            Sadece En <span className="italic text-[#C1A68D] font-light">İyisi.</span>
          </h2>
          <p className="font-sans font-light text-[#F8F7F5]/60 max-w-lg mx-auto mt-6">
            Ustalarımızın kendi seanslarında kullandığı, özel olarak formüle edilmiş lüks bakım ürünlerini keşfedin.
          </p>
        </div>

        {/* 3D Depth Area */}
        <div className="relative h-[800px] w-full flex flex-col md:block items-center justify-center gap-12 md:gap-0">
          
          {/* Back Product (Moves Slowest) */}
          <motion.div 
            style={{ y: yProduct3 }}
            className={`md:absolute left-[10%] md:left-[20%] top-[10%] w-72 h-[400px] ${products[2].color} p-6 flex flex-col justify-end border border-[#F8F7F5]/5 z-10 group cursor-pointer overflow-hidden`}
          >
            <div className="absolute inset-0 p-6 pb-32">
              <img src={products[2].image} alt={products[2].name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" />
            </div>
            <div className={`relative z-10 ${products[2].textColor}`}>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-sans tracking-widest uppercase text-[#C1A68D]">{products[2].id}</p>
                <p className="text-[10px] font-sans tracking-widest opacity-50">{products[2].vol}</p>
              </div>
              <h3 className="text-xl font-serif mb-2">{products[2].name}</h3>
              <p className="text-xs font-sans font-light opacity-70 mb-4">{products[2].desc}</p>
              <button className="text-[10px] font-sans tracking-widest uppercase border-b border-current pb-1 hover:text-[#C1A68D] hover:border-[#C1A68D] transition-colors">İncele</button>
            </div>
          </motion.div>

          {/* Middle Product (Moves Medium) */}
          <motion.div 
            style={{ y: yProduct1 }}
            className={`md:absolute left-1/2 md:-translate-x-1/2 top-1/2 md:-translate-y-1/2 w-80 h-[480px] ${products[0].color} p-8 flex flex-col justify-end z-20 shadow-2xl group cursor-pointer overflow-hidden`}
          >
            <div className="absolute inset-0 p-8 pb-40">
              <img src={products[0].image} alt={products[0].name} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className={`relative z-10 ${products[0].textColor}`}>
              <div className="flex justify-between items-end mb-4">
                <p className="text-xs font-sans tracking-widest uppercase opacity-60">{products[0].id}</p>
                <p className="text-[10px] font-sans tracking-widest opacity-50">{products[0].vol}</p>
              </div>
              <h3 className="text-2xl font-serif mb-3">{products[0].name}</h3>
              <p className="text-sm font-sans font-light opacity-80 mb-6">{products[0].desc}</p>
              <button className="text-[10px] font-sans tracking-widest uppercase border-b border-current pb-1 hover:opacity-50 transition-opacity">Sepete Ekle</button>
            </div>
          </motion.div>

          {/* Front Product (Moves Fastest) */}
          <motion.div 
            style={{ y: yProduct2 }}
            className={`md:absolute right-[5%] md:right-[15%] bottom-[10%] w-72 h-[420px] ${products[1].color} p-6 flex flex-col justify-end border border-[#F8F7F5]/10 shadow-2xl z-30 group cursor-pointer overflow-hidden`}
          >
            <div className="absolute inset-0 p-6 pb-32">
              <img src={products[1].image} alt={products[1].name} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700" />
            </div>
            <div className={`relative z-10 ${products[1].textColor}`}>
              <div className="flex justify-between items-end mb-2">
                <p className="text-xs font-sans tracking-widest uppercase text-[#C1A68D]">{products[1].id}</p>
                <p className="text-[10px] font-sans tracking-widest opacity-50">{products[1].vol}</p>
              </div>
              <h3 className="text-xl font-serif mb-2">{products[1].name}</h3>
              <p className="text-xs font-sans font-light opacity-70 mb-4">{products[1].desc}</p>
              <button className="text-[10px] font-sans tracking-widest uppercase border-b border-current pb-1 hover:text-[#C1A68D] hover:border-[#C1A68D] transition-colors">İncele</button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
