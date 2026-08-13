"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { supplementProducts, supplementCategories } from '@/lib/mock-data/ecommerce/supplement';
import { SupplementProductCard } from '@/components/ecommerce/supplement/SupplementProductCard';
import { ArrowRight, Zap, Dumbbell, Activity, Heart } from 'lucide-react';

export default function SupplementHomePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Just grab some products for display
  const featuredProducts = supplementProducts.slice(0, 4);
  const bestSellers = supplementProducts.slice(4, 8);

  const getIcon = (slug: string) => {
    switch (slug) {
      case 'protein': return <Dumbbell size={32} />;
      case 'performans': return <Zap size={32} />;
      case 'amino': return <Activity size={32} />;
      case 'vitamin': return <Heart size={32} />;
      default: return <Zap size={32} />;
    }
  };

  return (
    <div className="w-full bg-[#09090b] overflow-hidden" ref={containerRef}>
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-32 px-6">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-[#ccff00]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 w-full max-w-[1400px] mx-auto text-center flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ccff00]/30 bg-[#ccff00]/5 text-[#ccff00] font-bold text-xs uppercase tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping"></span>
            Yeni Nesil Performans
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 mb-8"
          >
            BEYOND <br/> LIMITS.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mb-12"
          >
            Profesyonellerin tercihi Vertex Nutrition ile antrenman standartlarınızı yeniden belirleyin. Saf içerik, maksimum performans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/test-ecommerce-v4/shop" 
              className="group relative inline-flex items-center justify-center gap-4 bg-[#ccff00] text-black px-10 py-5 rounded-full overflow-hidden"
            >
               <span className="relative z-10 font-black uppercase tracking-widest text-sm">Ürünleri Keşfet</span>
               <div className="relative z-10 bg-black text-[#ccff00] w-8 h-8 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                 <ArrowRight size={16} />
               </div>
               <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Product (Hero) */}
        <motion.div
           initial={{ opacity: 0, y: 100 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
           className="relative mt-16 w-[90vw] md:w-[50vw] max-w-[600px] aspect-square z-20 mx-auto pointer-events-none"
        >
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-[#ccff00] rounded-full blur-[100px] opacity-10"></div>
              
              <motion.img 
                src="/images/supplement/s-thumb-1.png" 
                alt="Hero Product"
                className="w-full h-full object-contain relative z-10"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 75%)'
                }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
           </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-[#ccff00] text-black overflow-hidden relative z-30 border-y border-black">
        <div className="flex whitespace-nowrap">
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="flex gap-8 items-center text-4xl md:text-5xl font-black uppercase tracking-tighter"
           >
              {[...Array(6)].map((_, i) => (
                <React.Fragment key={i}>
                  <span>%100 WHEY İZOLE</span>
                  <Zap size={40} className="shrink-0" />
                  <span>ŞEKERSİZ</span>
                  <Zap size={40} className="shrink-0" />
                  <span>PREMİUM KALİTE</span>
                  <Zap size={40} className="shrink-0" />
                </React.Fragment>
              ))}
           </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-6 relative z-10 bg-[#09090b]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {supplementCategories.map((category, idx) => (
              <Link 
                key={category.id} 
                href={`/test-ecommerce-v4/shop?category=${category.slug}`}
                className="group relative h-48 md:h-64 bg-[#121214] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-colors p-6 flex flex-col justify-between"
              >
                 <div className="text-white/30 group-hover:text-[#ccff00] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 origin-top-left">
                    {getIcon(category.slug)}
                 </div>
                 <div>
                    <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight">{category.name}</h3>
                    <div className="mt-2 w-0 h-0.5 bg-[#ccff00] group-hover:w-full transition-all duration-500 ease-out"></div>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 bg-[#0c0c0e]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Yeni <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Gelenler</span>
              </h2>
            </div>
            <Link href="/test-ecommerce-v4/shop" className="text-white/50 hover:text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-colors">
              Hepsini Gör <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <SupplementProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}
