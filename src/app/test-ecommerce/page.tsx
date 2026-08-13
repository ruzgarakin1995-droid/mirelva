"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MoveRight } from 'lucide-react';
import { fashionProducts } from '@/lib/mock-data/ecommerce/fashion';
import { FashionProductCard } from '@/components/ecommerce/fashion/FashionProductCard';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';

export default function FashionHome() {
  const newArrivals = fashionProducts.filter(p => p.isNew).slice(0, 4);
  const bestSellers = fashionProducts.filter(p => p.bestseller).slice(0, 4);

  return (
    <div className="w-full bg-white -mt-[128px]">
      
      {/* Cinematic Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] w-full bg-zinc-950 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/images/fashion/hero.jpg" 
          alt="Fashion Hero" 
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-900/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="max-w-2xl text-white"
            >
              <span className="block text-xs font-bold tracking-[0.3em] uppercase mb-6 text-white/80">SS'26 Koleksiyonu</span>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                YENİ<br />MEVSİM.
              </h1>
              <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-md leading-relaxed">
                Hafif kumaşlar, cesur kesimler ve sürdürülebilir zarafet. Sınırları aşan yeni tasarım diliyle tanışın.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/test-ecommerce/shop" className="group flex items-center gap-3 bg-white text-zinc-950 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-zinc-200 transition-colors">
                  Koleksiyonu Keşfet <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ticker / Brands */}
      <div className="border-b border-zinc-100 bg-white py-6 overflow-hidden flex whitespace-nowrap relative">
         <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
            className="flex items-center gap-16 px-8 text-zinc-300 font-black text-2xl md:text-3xl tracking-tighter uppercase min-w-max"
         >
            <span>SÜRDÜRÜLEBİLİR MODA</span>
            <span className="text-zinc-200">•</span>
            <span>%100 ORGANİK PAMUK</span>
            <span className="text-zinc-200">•</span>
            <span>ETİK ÜRETİM</span>
            <span className="text-zinc-200">•</span>
            <span>PREMİUM KUMAŞLAR</span>
            <span className="text-zinc-200">•</span>
            <span>ZAMANSIZ TASARIM</span>
            <span className="text-zinc-200">•</span>
            {/* Duplicated for smooth loop */}
            <span>SÜRDÜRÜLEBİLİR MODA</span>
            <span className="text-zinc-200">•</span>
            <span>%100 ORGANİK PAMUK</span>
            <span className="text-zinc-200">•</span>
            <span>ETİK ÜRETİM</span>
            <span className="text-zinc-200">•</span>
            <span>PREMİUM KUMAŞLAR</span>
            <span className="text-zinc-200">•</span>
            <span>ZAMANSIZ TASARIM</span>
            <span className="text-zinc-200">•</span>
         </motion.div>
      </div>

      {/* Asymmetric Category Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
         <FadeIn delay={0.1}>
           <div className="flex items-end justify-between mb-16">
              <h2 className="text-3xl font-light tracking-tighter text-zinc-900">Sezonun <br/><span className="font-bold">Öne Çıkanları</span></h2>
           </div>
         </FadeIn>
         
         <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-[800px]">
            <Link href="/test-ecommerce/shop?category=kadin" className="group relative md:col-span-7 row-span-2 overflow-hidden bg-zinc-100">
               <img src="/images/fashion/women.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
               <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-4xl font-bold mb-3 tracking-tighter">Kadın</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-white pb-1 group-hover:pr-4 transition-all">Keşfet <MoveRight size={14} /></span>
               </div>
            </Link>
            
            <Link href="/test-ecommerce/shop?category=erkek" className="group relative md:col-span-5 overflow-hidden bg-zinc-100">
               <img src="/images/fashion/men.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
               <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-tighter">Erkek</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-white pb-1 group-hover:pr-4 transition-all">Keşfet <MoveRight size={14} /></span>
               </div>
            </Link>

            <Link href="/test-ecommerce/shop?category=aksesuar" className="group relative md:col-span-5 overflow-hidden bg-zinc-100">
               <img src="/images/fashion/accessories.jpg" className="w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
               <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-3xl font-bold mb-2 tracking-tighter">Aksesuar</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase border-b border-white pb-1 group-hover:pr-4 transition-all">Keşfet <MoveRight size={14} /></span>
               </div>
            </Link>
         </div>
      </section>

      {/* New Arrivals */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-100">
        <FadeIn delay={0.1}>
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-900">Yeni Gelenler</h2>
          </div>
          <Link href="/test-ecommerce/shop?category=yeni-gelenler" className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
            Tüm Koleksiyonu Gör <MoveRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {newArrivals.map(product => (
            <FashionProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <Link href="/test-ecommerce/shop?category=yeni-gelenler" className="md:hidden mt-12 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest border border-zinc-200 py-4 w-full hover:bg-zinc-50 transition-colors">
          Tümünü Gör
        </Link>
        </FadeIn>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <FadeIn delay={0.1}>
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16 items-center">
           <div className="w-full lg:w-1/2 relative aspect-square lg:aspect-[4/5] bg-zinc-100 overflow-hidden">
              <img src="/images/fashion/craftsmanship.jpg" className="w-full h-full object-cover" />
           </div>
           <div className="w-full lg:w-1/2 pt-12 lg:pt-0 lg:-ml-24 z-10 relative">
              <div className="bg-white p-8 lg:p-16 border border-zinc-100 shadow-2xl">
                 <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Zanaat & Detay</span>
                 <h2 className="text-4xl font-light tracking-tighter text-zinc-900 mb-6 leading-tight">İnce İşçiliğin<br/><span className="font-bold">Zamana Meydan Okuyan</span> Yüzü.</h2>
                 <p className="text-zinc-500 mb-8 leading-relaxed font-light">
                    Koleksiyonumuzdaki her bir parça, usta zanaatkarlar tarafından etik ve sürdürülebilir yöntemlerle üretilmektedir. Kullanılan birinci sınıf keten ve organik pamuk, teninize lüksü ve doğallığı aynı anda sunar.
                 </p>
                 <Link href="#" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
                    Atölyemizi Keşfet <MoveRight size={14} />
                 </Link>
              </div>
           </div>
        </div>
        </FadeIn>
      </section>

      {/* Shop By Look Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-100">
         <FadeIn delay={0.1}>
         <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
               <h2 className="text-3xl font-light tracking-tighter text-zinc-900 mb-2">Günün <span className="font-bold">Kombini</span></h2>
               <p className="text-zinc-500 font-light">Stil danışmanlarımız tarafından seçilen görünümler.</p>
            </div>
            <Link href="/test-ecommerce/shop" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-zinc-900 border-b-2 border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
               Tüm Kombinleri Gör <MoveRight size={14} />
            </Link>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="aspect-[3/4] md:aspect-square bg-zinc-100 overflow-hidden relative group">
               <img src="/images/fashion/women.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
               <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse hover:scale-125 transition-transform" title="Keten Ceket">
                 <div className="w-2 h-2 bg-zinc-900 rounded-full" />
               </div>
               <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg animate-pulse hover:scale-125 transition-transform" title="Deri Çanta">
                 <div className="w-2 h-2 bg-zinc-900 rounded-full" />
               </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
               {fashionProducts.slice(0,2).map(product => (
                  <FashionProductCard key={product.id} product={product} />
               ))}
            </div>
         </div>
         </FadeIn>
      </section>
      
      {/* Fabric Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-100">
         <FadeIn delay={0.1}>
         <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-zinc-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Malzeme & Doku</span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-zinc-900 mb-6">Doğanın En Saf <span className="font-bold">Hali</span></h2>
            <p className="text-zinc-500 font-light leading-relaxed">Sürdürülebilir kaynaklardan elde edilen premium kumaşlarımızla tanışın. Teninize nefes aldıran, zamana meydan okuyan dokular.</p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 flex flex-col justify-end p-8">
               <img src="/images/fashion/women.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">Saf Keten</h3>
                  <p className="text-white/80 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Yaz aylarının vazgeçilmezi, yüksek nefes alabilirlik ve eşsiz bir döküm.</p>
                  <Link href="/test-ecommerce/shop?q=keten" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-white pb-1 hover:pr-2 transition-all">Keşfet <MoveRight size={14} /></Link>
               </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 flex flex-col justify-end p-8">
               <img src="/images/fashion/shirt.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">%100 İpek</h3>
                  <p className="text-white/80 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Zarif parlaklık ve pürüzsüz dokunuş. Özel anlarınız için tasarlandı.</p>
                  <Link href="/test-ecommerce/shop?q=ipek" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-white pb-1 hover:pr-2 transition-all">Keşfet <MoveRight size={14} /></Link>
               </div>
            </div>
            
            <div className="group relative overflow-hidden aspect-[4/5] bg-zinc-100 flex flex-col justify-end p-8">
               <img src="/images/fashion/tshirt.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">Organik Pamuk</h3>
                  <p className="text-white/80 font-light text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Doğaya saygılı üretim. Günlük giyimde üstün konfor ve yumuşaklık.</p>
                  <Link href="/test-ecommerce/shop?q=pamuk" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-white pb-1 hover:pr-2 transition-all">Keşfet <MoveRight size={14} /></Link>
               </div>
            </div>
         </div>
         </FadeIn>
      </section>

      {/* Best Sellers */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-100">
        <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold tracking-tighter text-zinc-900 mb-3">İkonik Parçalar</h2>
            <p className="text-zinc-500 font-light">Sezonun en çok tercih edilen, zamansız tasarımlarını keşfedin.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {bestSellers.map(product => (
            <FashionProductCard key={product.id} product={product} />
          ))}
        </div>
        </FadeIn>
      </section>

    </div>
  );
}
