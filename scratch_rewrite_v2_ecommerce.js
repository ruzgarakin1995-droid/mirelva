const fs = require('fs');
const path = 'src/app/test-ecommerce-v2/page.tsx';

const newContent = `"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Play, ChevronRight, BatteryCharging, Cpu, Leaf, ArrowRight } from 'lucide-react';
import { techProducts, techCategories } from '@/lib/mock-data/ecommerce/electronics';
import { TechProductCard } from '@/components/ecommerce/tech/TechProductCard';

export default function TechHomePage() {
  return (
    <div className="w-full bg-black text-white selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000&auto=format&fit=crop" 
            alt="Titanium Phone" 
            className="w-full h-full object-cover object-center opacity-40 scale-105 transform origin-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-500 font-semibold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            Yeni iPhone 15 Pro
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-none"
          >
            TİTANYUM.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl font-medium text-slate-300 max-w-2xl mb-12"
          >
            Çok güçlü. Çok hafif. Çok Pro.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/test-ecommerce-v2/product/iphone-15-pro-max-256gb" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Satın Alın
            </Link>
            <Link href="#discover" className="group flex items-center gap-2 text-white font-medium text-lg hover:text-blue-400 transition-colors">
              Daha fazlasını keşfedin <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="bg-zinc-950 border-b border-zinc-900 py-6">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex gap-8 overflow-x-auto hide-scrollbar">
               {techCategories.map((cat, i) => (
                  <Link key={cat.id} href={\`/test-ecommerce-v2/shop?category=\${cat.slug}\`} className="flex flex-col items-center gap-3 group min-w-[100px]">
                     <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-700 transition-all overflow-hidden p-3">
                        <img src={cat.image} alt={cat.name} className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform" />
                     </div>
                     <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">{cat.name}</span>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 2. Bento Grid Highlights */}
      <section id="discover" className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Öne Çıkan Özellikler.</h2>
            <p className="text-lg text-slate-400">Teknolojinin en saf hali, şimdiye kadarki en güçlü donanımla buluştu.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          
          <FadeIn delay={0.1} className="lg:col-span-2 relative rounded-3xl bg-zinc-900 overflow-hidden group">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-center">
              <Cpu className="text-blue-500 w-10 h-10 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-3">A17 Pro Çip. <br/><span className="text-slate-400">Oyunun kuralları değişti.</span></h3>
              <p className="text-slate-400 max-w-md">Akıllı telefon pazarındaki en büyük yeniden tasarım. İnanılmaz grafik performansı.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden group p-10 flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <BatteryCharging className="text-green-500 w-12 h-12 mb-4" />
             <h3 className="text-2xl font-bold mb-2">Tüm Gün Pil.</h3>
             <p className="text-slate-400 text-sm">Pro gücüne yaraşır profesyonel pil ömrü.</p>
          </FadeIn>
        </div>
      </section>

      {/* Flash Deals / Popular Products Ecommerce Integration */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
               <div className="flex items-end justify-between mb-12 border-b border-zinc-900 pb-6">
                  <div>
                     <h2 className="text-3xl font-bold text-white mb-2">Popüler Ürünler</h2>
                     <p className="text-slate-400 text-sm">En çok tercih edilen teknolojileri keşfedin.</p>
                  </div>
                  <Link href="/test-ecommerce-v2/shop" className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium">
                     Tümünü Gör <ArrowRight size={18} />
                  </Link>
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {techProducts.slice(0, 4).map((product, i) => (
                  <FadeIn key={product.id} delay={i * 0.1}>
                     <div className="bg-zinc-900 border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors">
                        <TechProductCard product={product} />
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Deep Dive Cinematic / Mac */}
      <section className="py-32 bg-black relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
               <h2 className="text-4xl md:text-6xl font-bold mb-6">MacBook Pro. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Zihin Açıcı.</span></h2>
               <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12">Hayal edemeyeceğiniz kadar hızlı M3 serisi çiplere ve büyüleyici Space Black rengine sahip yeni MacBook Pro ile tanışın.</p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
               <div className="relative mx-auto max-w-4xl group">
                  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" className="w-full rounded-2xl shadow-[0_0_80px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_100px_rgba(59,130,246,0.2)] transition-shadow duration-700" alt="MacBook Pro" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all text-white shadow-2xl">
                     <Play className="ml-1" size={24} fill="currentColor" />
                  </button>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* E-commerce Carousel / New Arrivals (Sleek Horizontal) */}
      <section className="py-24 pl-4 md:pl-8 overflow-hidden bg-zinc-950 border-t border-zinc-900">
         <FadeIn>
            <div className="max-w-7xl mx-auto flex items-end justify-between pr-4 md:pr-8 mb-10">
               <h2 className="text-3xl font-bold">Yeni Çıkanlar.</h2>
               <Link href="/test-ecommerce-v2/shop" className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium">
                  Mağazaya Git <ArrowRight size={18} />
               </Link>
            </div>
         </FadeIn>
         
         <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pr-8 snap-x snap-mandatory">
            {techProducts.slice(4, 8).map((product, i) => (
               <FadeIn key={product.id} delay={i * 0.1} className="snap-start shrink-0 w-[280px] md:w-[320px]">
                  <div className="bg-black border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors">
                     <TechProductCard product={product} />
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

      {/* 5. Sustainability (Apple Green Theme) */}
      <section className="py-24 bg-white text-black relative overflow-hidden">
         <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
               <Leaf className="w-12 h-12 mx-auto mb-6 text-green-600" />
               <h2 className="text-3xl md:text-5xl font-bold mb-6">2030'a kadar karbon nötr.</h2>
               <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">Ürünlerimizin üretiminden kutusuna kadar, gezegenimiz için en iyisini tasarlıyoruz. Karbon ayak izimizi sıfırlamak için çalışıyoruz.</p>
               <Link href="/test-ecommerce-v2/about" className="inline-flex items-center gap-2 font-bold text-lg text-green-700 hover:text-green-600 transition-colors group">
                  Çevre raporumuzu okuyun <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </FadeIn>
         </div>
      </section>
      
      {/* (Trust badges were removed from here per user request, as they are already in the TechFooter component) */}

    </div>
  );
}
`;

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully rewrote V2 page.tsx to integrate e-commerce components into cinematic theme and removed duplicate trust badges.');
