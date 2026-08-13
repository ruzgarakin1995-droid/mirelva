const fs = require('fs');
const path = 'src/app/test-ecommerce-v2/page.tsx';

const newContent = `"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Play, ChevronRight, Apple, BatteryCharging, Cpu, Camera, Leaf, ShieldCheck, Truck, ArrowRight, RefreshCw, HeadphonesIcon } from 'lucide-react';

export default function TechHomePage() {
  return (
    <div className="w-full bg-black text-white selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">
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
            <Link href="/test-ecommerce-v2/product/iphone-15-pro" className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors">
              Satın Alın
            </Link>
            <Link href="#discover" className="group flex items-center gap-2 text-white font-medium text-lg hover:text-blue-400 transition-colors">
              Daha fazlasını keşfedin <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Bento Grid Highlights */}
      <section id="discover" className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Öne Çıkanlar.</h2>
            <p className="text-xl text-slate-400">Teknolojinin en saf hali, şimdiye kadarki en güçlü donanımla buluştu.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Bento Box 1: Chip */}
          <FadeIn delay={0.1} className="lg:col-span-2 relative rounded-[2.5rem] bg-zinc-900 overflow-hidden group">
            <div className="absolute inset-0 z-0">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
            </div>
            <div className="relative z-10 p-12 h-full flex flex-col justify-center">
              <Cpu className="text-blue-500 w-12 h-12 mb-6" />
              <h3 className="text-4xl md:text-5xl font-bold mb-4">A17 Pro Çip. <br/><span className="text-slate-400">Oyunun kuralları değişti.</span></h3>
              <p className="text-lg text-slate-400 max-w-md">Akıllı telefon pazarındaki en büyük yeniden tasarım. İnanılmaz grafik performansı.</p>
            </div>
          </FadeIn>

          {/* Bento Box 2: Battery */}
          <FadeIn delay={0.2} className="relative rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 overflow-hidden group p-12 flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 bg-blue-500/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <BatteryCharging className="text-green-500 w-16 h-16 mb-6" />
             <h3 className="text-3xl font-bold mb-3">Tüm Gün Pil.</h3>
             <p className="text-slate-400">Pro gücüne yaraşır profesyonel pil ömrü.</p>
          </FadeIn>

          {/* Bento Box 3: Camera */}
          <FadeIn delay={0.3} className="relative rounded-[2.5rem] bg-zinc-900 overflow-hidden group">
             <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
             </div>
             <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <h3 className="text-3xl font-bold mb-2">Pro Kamera.</h3>
                <p className="text-slate-300">En uzak mesafe bile şimdi odak noktanız.</p>
             </div>
          </FadeIn>

          {/* Bento Box 4: Watch */}
          <FadeIn delay={0.4} className="lg:col-span-2 relative rounded-[2.5rem] bg-zinc-900 overflow-hidden group flex items-center justify-end">
             <div className="absolute inset-0 z-0 flex items-center">
                <img src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=1000&auto=format&fit=crop" className="w-2/3 h-full object-cover opacity-40 mix-blend-screen group-hover:-translate-x-4 transition-transform duration-1000" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 via-zinc-900/90 to-transparent" />
             <div className="relative z-10 p-12 w-full md:w-1/2 flex flex-col">
                <span className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">Yeni</span>
                <h3 className="text-4xl font-bold mb-4">Series 9</h3>
                <p className="text-lg text-slate-400 mb-8">Sağlığınızın geleceği şimdi bileğinizde parlıyor. Sihirli dokunuşlarla yönetin.</p>
                <Link href="/test-ecommerce-v2/shop" className="text-white hover:text-orange-500 font-medium inline-flex items-center gap-2 transition-colors">
                  İncele <ChevronRight size={18} />
                </Link>
             </div>
          </FadeIn>

        </div>
      </section>

      {/* 3. Deep Dive Cinematic / Mac */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
               <h2 className="text-5xl md:text-7xl font-bold mb-8">MacBook Pro. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Zihin Açıcı.</span></h2>
               <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-16">Hayal edemeyeceğiniz kadar hızlı M3 serisi çiplere ve büyüleyici Space Black rengine sahip yeni MacBook Pro ile tanışın.</p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
               <div className="relative mx-auto max-w-5xl group">
                  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" className="w-full rounded-2xl shadow-[0_0_100px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_120px_rgba(59,130,246,0.25)] transition-shadow duration-700" alt="MacBook Pro" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 hover:bg-white/20 transition-all text-white shadow-2xl">
                     <Play className="ml-1" size={32} fill="currentColor" />
                  </button>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 4. Carousel / New Arrivals (Sleek Horizontal) */}
      <section className="py-32 pl-4 md:pl-8 overflow-hidden bg-black">
         <FadeIn>
            <div className="max-w-7xl mx-auto flex items-end justify-between pr-4 md:pr-8 mb-12">
               <h2 className="text-3xl md:text-5xl font-bold">Yeni Çıkanlar.</h2>
               <Link href="/test-ecommerce-v2/shop" className="hidden md:flex items-center gap-2 text-blue-500 hover:text-blue-400 font-medium">
                  Tümünü Gör <ArrowRight size={18} />
               </Link>
            </div>
         </FadeIn>
         
         <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-12 pr-8 snap-x snap-mandatory">
            {[
               { name: "AirPods Pro", price: "₺8.999", img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=600&auto=format&fit=crop", tag: "Aktif Gürültü Engelleme" },
               { name: "iPad Pro", price: "₺34.999", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop", tag: "M2 Çip" },
               { name: "HomePod", price: "₺10.499", img: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop", tag: "Kusursuz Akustik" },
               { name: "Magic Keyboard", price: "₺5.299", img: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=600&auto=format&fit=crop", tag: "Sessiz Deneyim" },
            ].map((item, i) => (
               <FadeIn key={i} delay={i * 0.1} className="snap-start shrink-0 w-[300px] md:w-[400px]">
                  <Link href="/test-ecommerce-v2/shop" className="group block h-[500px] bg-zinc-900 rounded-3xl overflow-hidden relative border border-zinc-800 hover:border-zinc-700 transition-colors">
                     <div className="p-8 pb-0 relative z-10">
                        <span className="text-xs font-bold text-slate-500 tracking-wider uppercase mb-2 block">{item.tag}</span>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{item.name}</h3>
                        <p className="text-lg text-slate-300">{item.price}</p>
                     </div>
                     <img src={item.img} alt={item.name} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] object-contain opacity-80 group-hover:scale-110 transition-transform duration-700" />
                  </Link>
               </FadeIn>
            ))}
         </div>
      </section>

      {/* 5. Sustainability (Apple Green Theme) */}
      <section className="py-32 bg-white text-black relative overflow-hidden">
         <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
               <Leaf className="w-16 h-16 mx-auto mb-8 text-green-600" />
               <h2 className="text-4xl md:text-6xl font-bold mb-8">2030'a kadar karbon nötr.</h2>
               <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">Ürünlerimizin üretiminden kutusuna kadar, gezegenimiz için en iyisini tasarlıyoruz. Karbon ayak izimizi sıfırlamak için çalışıyoruz.</p>
               <Link href="/test-ecommerce-v2/about" className="inline-flex items-center gap-2 font-bold text-lg text-green-700 hover:text-green-600 transition-colors group">
                  Çevre raporumuzu okuyun <ArrowRight className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </FadeIn>
         </div>
      </section>

      {/* 6. Trust Badges (Premium Footer Top) */}
      <section className="bg-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn delay={0.1} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <ShieldCheck size={24} className="text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Güvenli Alışveriş</h4>
              <p className="text-zinc-500 text-xs">256-bit SSL şifreleme</p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <Truck size={24} className="text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Hızlı Teslimat</h4>
              <p className="text-zinc-500 text-xs">Aynı gün kargo fırsatı</p>
            </FadeIn>
            <FadeIn delay={0.3} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <RefreshCw size={24} className="text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Kolay İade</h4>
              <p className="text-zinc-500 text-xs">14 gün içinde koşulsuz iade</p>
            </FadeIn>
            <FadeIn delay={0.4} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                <HeadphonesIcon size={24} className="text-slate-300 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">7/24 Destek</h4>
              <p className="text-zinc-500 text-xs">Uzman ekibimizle anında çözüm</p>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
`;

fs.writeFileSync(path, newContent, 'utf8');
console.log('Successfully updated V2 page.tsx to Apple Cinematic style.');
