"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Play, ChevronRight, BatteryCharging, Cpu, Leaf, ArrowRight, Laptop, Smartphone, Headphones, Gamepad2, Home } from 'lucide-react';
import { techProducts, techCategories } from '@/lib/mock-data/ecommerce/electronics';
import { TechProductCard } from '@/components/ecommerce/tech/TechProductCard';

export default function TechHomePage() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* 1. Cinematic Hero Section (Light) */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex flex-col items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=2000&auto=format&fit=crop" 
            alt="Titanium Phone" 
            className="w-full h-full object-cover object-center opacity-20 scale-105 transform origin-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-blue-600 font-bold tracking-widest uppercase text-sm md:text-base mb-4"
          >
            GELECEĞİN TEKNOLOJİSİ
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 leading-none"
          >
            TEKNOEMO.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-3xl font-medium text-slate-500 max-w-2xl mb-12"
          >
            Premium teknoloji ürünleri, eşsiz alışveriş deneyimi ve teknoloji dünyasının en iyileri.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/test-ecommerce-v2/shop" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 hover:shadow-xl transition-all">
              Koleksiyonu Keşfedin
            </Link>
            <Link href="#discover" className="group flex items-center gap-2 text-slate-600 font-semibold text-lg hover:text-blue-600 transition-colors">
              Daha fazlasını keşfedin <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Categories Dock */}
      <section className="bg-white py-8 relative overflow-hidden border-b border-slate-200">
         <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar md:justify-center pb-4 pt-4">
               {techCategories.map((cat, i) => (
                  <Link key={cat.id} href={`/test-ecommerce-v2/shop?category=${cat.slug}`} className="relative group shrink-0">
                     <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                     <div className="relative flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200 group-hover:border-blue-200 shadow-sm rounded-full transition-all duration-300 transform group-hover:-translate-y-1">
                        <div className="text-slate-500 group-hover:text-blue-600 transition-colors">
                           {cat.slug === 'bilgisayar' && <Laptop size={22} />}
                           {cat.slug === 'telefon' && <Smartphone size={22} />}
                           {cat.slug === 'ses' && <Headphones size={22} />}
                           {cat.slug === 'oyun' && <Gamepad2 size={22} />}
                           {cat.slug === 'akilli-ev' && <Home size={22} />}
                        </div>
                        <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{cat.name}</span>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </section>

      {/* 2. Bento Grid Highlights */}
      <section id="discover" className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">Sınırları Zorlayan Teknoloji.</h2>
            <p className="text-lg text-slate-500">Dünyanın en iyi teknoloji markaları, en güçlü donanımlarıyla tek bir platformda buluştu.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          
          <FadeIn delay={0.1} className="lg:col-span-2 relative rounded-3xl bg-white border border-slate-200 overflow-hidden group shadow-sm hover:shadow-lg transition-shadow duration-500">
            <div className="absolute inset-0 z-0 bg-slate-50">
               <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
            </div>
            <div className="relative z-10 p-10 h-full flex flex-col justify-center">
              <Cpu className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">Geleceğin İşlemcileri. <br/><span className="text-slate-500">Performansın zirvesini yaşayın.</span></h3>
              <p className="text-slate-600 max-w-md">Oyun oynarken, tasarım yaparken veya çalışırken ihtiyaç duyduğunuz o muazzam işlemci gücünü keşfedin.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden group p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-shadow duration-500">
             <div className="absolute inset-0 bg-green-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             <BatteryCharging className="text-green-600 w-12 h-12 mb-4 relative z-10" />
             <h3 className="text-2xl font-bold mb-2 text-slate-900 relative z-10">Kesintisiz Enerji.</h3>
             <p className="text-slate-500 text-sm relative z-10">Gün boyu hız kesmeden yanınızda olan cihazlar.</p>
          </FadeIn>
        </div>
      </section>

      {/* Flash Deals / Popular Products Ecommerce Integration */}
      <section className="py-24 bg-white relative overflow-hidden border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
               <div className="flex items-end justify-between mb-12 border-b border-slate-100 pb-6">
                  <div>
                     <h2 className="text-3xl font-bold text-slate-900 mb-2">Popüler Ürünler</h2>
                     <p className="text-slate-500 text-sm">En çok tercih edilen teknolojileri keşfedin.</p>
                  </div>
                  <Link href="/test-ecommerce-v2/shop" className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold">
                     Tümünü Gör <ArrowRight size={18} />
                  </Link>
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {techProducts.slice(0, 4).map((product, i) => (
                  <FadeIn key={product.id} delay={i * 0.1}>
                     <div className="h-full">
                        <TechProductCard product={product} />
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Deep Dive Cinematic / Mac */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100 blur-[150px] rounded-full pointer-events-none" />
         <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10 text-center">
            <FadeIn>
               <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Yaratıcılığınızı Serbest Bırakın. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Sınır Tanımayan Güç.</span></h2>
               <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto mb-12">En zorlu projelerden yüksek grafikli oyunlara kadar, hayal gücünüze yetişecek üst düzey bilgisayar koleksiyonumuzu inceleyin.</p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
               <div className="relative mx-auto max-w-4xl group">
                  <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop" className="w-full rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-700" alt="MacBook Pro" />
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white hover:scale-110 hover:bg-white transition-all text-slate-900 shadow-xl">
                     <Play className="ml-1" size={24} fill="currentColor" />
                  </button>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* E-commerce Carousel / New Arrivals (Sleek Horizontal) */}
      <section className="py-24 overflow-hidden bg-slate-50 border-t border-slate-200">
         <FadeIn>
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                     <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest rounded-full mb-4">
                        En Yeniler
                     </span>
                     <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Yeni Çıkanlar.</h2>
                     <p className="text-slate-500 mt-3 text-lg font-medium">Teknoloji dünyasının en taze ürünleriyle tanışın.</p>
                  </div>
                  <Link href="/test-ecommerce-v2/shop" className="group hidden md:inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm hover:shadow-lg">
                     Tüm Koleksiyon <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>
            </div>
         </FadeIn>
         
         <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pl-4 md:pl-8 pr-8 snap-x snap-mandatory">
            {techProducts.slice(4, 8).map((product, i) => (
               <FadeIn key={product.id} delay={i * 0.1} className="snap-start shrink-0 w-[280px] md:w-[320px]">
                  <div className="h-full">
                     <TechProductCard product={product} />
                  </div>
               </FadeIn>
            ))}
         </div>
      </section>

      {/* New Detail Area: Ecosystem Integration */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <FadeIn>
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Geleceğin Yaşam Alanları.</h2>
                  <p className="text-lg text-slate-500">Hayatınızı kolaylaştıracak en akıllı cihazlar TEKNOEMO güvencesiyle sizinle.</p>
               </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <FadeIn delay={0.1} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between h-[400px] group relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                     <Laptop className="text-blue-600 w-10 h-10 mb-4" />
                     <h3 className="text-2xl font-bold mb-2 text-slate-900">Profesyonel İstasyonlar</h3>
                     <p className="text-slate-600">En güçlü bilgisayarlar ve yüksek çözünürlüklü monitörlerle kendi stüdyonuzu kurun.</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                     <div className="text-blue-600 font-bold group-hover:underline cursor-pointer flex items-center gap-1">
                        Keşfet <ArrowRight size={16} />
                     </div>
                  </div>
               </FadeIn>
               <FadeIn delay={0.2} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between h-[400px] group relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500">
                  <div className="absolute inset-0 bg-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                     <Smartphone className="text-purple-600 w-10 h-10 mb-4" />
                     <h3 className="text-2xl font-bold mb-2 text-slate-900">Sınırsız Mobilite</h3>
                     <p className="text-slate-600">Nerede olursanız olun, dünyaya bağlanmanızı sağlayacak en yeni akıllı telefonlar.</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                     <div className="text-purple-600 font-bold group-hover:underline cursor-pointer flex items-center gap-1">
                        Keşfet <ArrowRight size={16} />
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>

      {/* Infinite Marquee Product Scroll (Soldan Sağa) */}
      <section className="py-20 bg-white overflow-hidden border-t border-slate-200">
         <FadeIn>
            <div className="text-center mb-12">
               <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Vitrin Ürünleri</h2>
               <p className="text-slate-500 mt-2">Göz atmanız gereken en seçkin teknolojiler</p>
            </div>
         </FadeIn>
         
         <div className="relative w-full overflow-hidden flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent">
            <motion.div 
               animate={{ x: ["-50%", "0%"] }} 
               transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
               className="flex gap-6 w-max"
            >
               {[...techProducts, ...techProducts, ...techProducts, ...techProducts].map((product, i) => (
                  <div key={i} className="w-[300px] shrink-0 pointer-events-auto">
                     <TechProductCard product={product} />
                  </div>
               ))}
            </motion.div>
         </div>
      </section>

    </div>
  );
}
