"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Percent, Clock, ThumbsUp, Leaf, Flame, Sparkles } from 'lucide-react';
import { groceryProducts, groceryCategories } from '@/lib/mock-data/ecommerce/grocery';
import { GroceryProductCard } from '@/components/ecommerce/grocery/GroceryProductCard';

export default function GroceryHome() {
  const flashDeals = groceryProducts.filter(p => p.compareAtPrice).slice(0, 4);
  const popularProducts = groceryProducts.filter(p => p.bestseller).slice(0, 4);
  const organicProducts = groceryProducts.filter(p => p.specifications && Object.values(p.specifications).some(val => typeof val === 'string' && val.toLowerCase().includes('organik'))).slice(0, 4);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-8">
         <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Sidebar Categories (Desktop) */}
            <aside className="hidden lg:block w-64 shrink-0">
               <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-32">
                  <h3 className="bg-emerald-50 text-emerald-800 font-bold px-5 py-4 border-b border-emerald-100">Kategoriler</h3>
                  <ul className="divide-y divide-slate-50">
                     {groceryCategories.map(cat => (
                        <li key={cat.id}>
                           <Link 
                              href={`/test-ecommerce-v3/shop?category=${cat.slug}`}
                              className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 group transition-colors"
                           >
                              <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-600">{cat.name}</span>
                              <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500" />
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-8 md:space-y-12">
               
               {/* Hero Banner Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/test-ecommerce-v3/shop?category=meyve-sebze" className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
                     <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Meyve Sebze" />
                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
                     <div className="absolute inset-0 p-6 flex flex-col justify-center">
                        <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">Tarladan Sofraya</span>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 max-w-[200px] leading-tight">Taptaze Meyve ve Sebzeler</h2>
                        <span className="text-emerald-200 text-sm font-semibold flex items-center gap-1">İncele <ChevronRight size={16}/></span>
                     </div>
                  </Link>

                  <div className="grid grid-rows-2 gap-4">
                     <Link href="/test-ecommerce-v3/shop?category=sut-kahvalti" className="relative rounded-2xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kahvaltı" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-center">
                           <h2 className="text-xl font-black text-white mb-1">Kahvaltılıklar</h2>
                           <span className="text-slate-200 text-sm font-semibold flex items-center gap-1">İncele <ChevronRight size={14}/></span>
                        </div>
                     </Link>
                     <Link href="/test-ecommerce-v3/shop?category=indirim" className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 group flex items-center justify-between p-5 border border-red-100">
                        <div>
                           <div className="flex items-center gap-2 text-red-600 font-black mb-1">
                              <Flame size={20} /> Haftanın Fırsatları
                           </div>
                           <p className="text-sm text-red-800/70 font-medium">Seçili ürünlerde %50'ye varan indirimler.</p>
                        </div>
                        <div className="w-10 h-10 bg-white text-red-500 rounded-full flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors shadow-sm">
                           <ChevronRight size={20} />
                        </div>
                     </Link>
                  </div>
               </div>

               {/* Mobile Categories (Horizontal Scroll) */}
               <div className="lg:hidden">
                  <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><ThumbsUp size={18}/> Hızlı Kategoriler</h3>
                  <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
                     {groceryCategories.map(cat => (
                        <Link 
                           key={cat.id} 
                           href={`/test-ecommerce-v3/shop?category=${cat.slug}`}
                           className="bg-white border border-slate-200 px-4 py-2.5 rounded-full text-sm font-semibold text-slate-700 whitespace-nowrap shrink-0 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                        >
                           {cat.name}
                        </Link>
                     ))}
                  </div>
               </div>

               {/* Flash Deals */}
               <section>
                  <div className="flex items-center justify-between mb-4">
                     <h2 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
                        <Clock size={24} className="text-red-500" /> Günlük Fırsatlar
                     </h2>
                     <Link href="/test-ecommerce-v3/shop?category=indirim" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                        Tümünü Gör
                     </Link>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                     {flashDeals.map(product => (
                        <GroceryProductCard key={product.id} product={product} />
                     ))}
                  </div>
               </section>

               {/* Organic Products */}
               {organicProducts.length > 0 && (
                 <section>
                    <div className="flex items-center justify-between mb-4">
                       <h2 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
                          <Leaf size={24} className="text-emerald-500" /> %100 Organik
                       </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                       {organicProducts.map(product => (
                          <GroceryProductCard key={product.id} product={product} />
                       ))}
                    </div>
                 </section>
               )}

               {/* Popular Products */}
               <section>
                  <div className="flex items-center justify-between mb-4">
                     <h2 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
                        <Sparkles size={24} className="text-amber-500" /> En Çok Satanlar
                     </h2>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                     {popularProducts.map(product => (
                        <GroceryProductCard key={product.id} product={product} />
                     ))}
                  </div>
               </section>

               {/* Info Banner */}
               <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-100">
                  <div className="flex-1">
                     <h3 className="text-xl font-bold text-emerald-900 mb-2">Taze Market Mobil Uygulaması Çıktı!</h3>
                     <p className="text-emerald-700 text-sm">İlk siparişinize özel %20 indirim kazanmak için uygulamamızı indirin.</p>
                  </div>
                  <div className="flex gap-3">
                     <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm">App Store</button>
                     <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm">Google Play</button>
                  </div>
               </div>

            </div>
         </div>
      </div>

    </div>
  );
}
