"use client";

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supplementProducts, supplementCategories } from '@/lib/mock-data/ecommerce/supplement';
import { SupplementProductCard } from '@/components/ecommerce/supplement/SupplementProductCard';
import { Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SupplementShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');

  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory || null);
  const [activeFlavor, setActiveFlavor] = useState<string | null>(null);
  const [activeGoal, setActiveGoal] = useState<string | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Extract unique flavors and goals
  const flavors = Array.from(new Set(supplementProducts.map(p => p.specifications?.['Aroma'] as string).filter(Boolean)));
  const goals = Array.from(new Set(supplementProducts.map(p => p.specifications?.['Hedef'] as string).filter(Boolean)));

  const filteredProducts = useMemo(() => {
    return supplementProducts.filter(p => {
      let match = true;
      if (activeCategory) {
        const cat = supplementCategories.find(c => c.slug === activeCategory);
        if (cat && p.categoryId !== cat.id) match = false;
      }
      if (activeFlavor && p.specifications?.['Aroma'] !== activeFlavor) match = false;
      if (activeGoal && p.specifications?.['Hedef'] !== activeGoal) match = false;
      return match;
    });
  }, [activeCategory, activeFlavor, activeGoal]);

  const FilterSection = () => (
    <div className="space-y-8">
       {/* Category Filter */}
       <div>
         <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Kategori</h4>
         <div className="flex flex-col gap-2">
           <button 
             onClick={() => setActiveCategory(null)}
             className={`text-left text-sm font-medium transition-colors ${!activeCategory ? 'text-[#ccff00]' : 'text-white/50 hover:text-white'}`}
           >
             Tüm Ürünler
           </button>
           {supplementCategories.map(cat => (
             <button 
               key={cat.id}
               onClick={() => setActiveCategory(cat.slug)}
               className={`text-left text-sm font-medium transition-colors ${activeCategory === cat.slug ? 'text-[#ccff00]' : 'text-white/50 hover:text-white'}`}
             >
               {cat.name}
             </button>
           ))}
         </div>
       </div>

       {/* Goal Filter */}
       <div>
         <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Hedef</h4>
         <div className="flex flex-col gap-2">
           {goals.map(goal => (
             <button 
               key={goal}
               onClick={() => setActiveGoal(activeGoal === goal ? null : goal)}
               className={`text-left text-sm font-medium transition-colors flex items-center justify-between group`}
             >
               <span className={activeGoal === goal ? 'text-[#ccff00]' : 'text-white/50 group-hover:text-white'}>{goal}</span>
               {activeGoal === goal && <X size={14} className="text-[#ccff00]" />}
             </button>
           ))}
         </div>
       </div>

       {/* Flavor Filter */}
       <div>
         <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Aroma</h4>
         <div className="flex flex-wrap gap-2">
           {flavors.map(flavor => (
             <button 
               key={flavor}
               onClick={() => setActiveFlavor(activeFlavor === flavor ? null : flavor)}
               className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                 activeFlavor === flavor 
                 ? 'border-[#ccff00] bg-[#ccff00]/10 text-[#ccff00]' 
                 : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
               }`}
             >
               {flavor}
             </button>
           ))}
         </div>
       </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-white">
      {/* Shop Header */}
      <div className="bg-[#121214] border-b border-white/5 py-16 px-6">
         <div className="max-w-[1400px] mx-auto">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Ürün</span> Kataloğu
            </h1>
            <p className="text-white/50 mt-4 max-w-xl font-medium">
              Vertex Nutrition serisindeki tüm profesyonel takviyeleri hedefinize, ürün tipine ve aromaya göre filtreleyin.
            </p>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col md:flex-row gap-10">
        
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
          onClick={() => setIsMobileFiltersOpen(true)}
        >
          <Filter size={18} /> Filtrele
        </button>

        {/* Sidebar Desktop */}
        <div className="hidden md:block w-64 shrink-0">
           <FilterSection />
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isMobileFiltersOpen && (
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[60] bg-[#09090b] p-6 overflow-y-auto md:hidden"
            >
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                 <h3 className="font-black text-xl uppercase tracking-tighter">Filtreler</h3>
                 <button onClick={() => setIsMobileFiltersOpen(false)} className="p-2 bg-white/10 rounded-full">
                   <X size={20} />
                 </button>
               </div>
               <FilterSection />
               <button 
                 onClick={() => setIsMobileFiltersOpen(false)}
                 className="w-full mt-12 bg-[#ccff00] text-black font-black uppercase tracking-widest py-4 rounded-xl"
               >
                 Sonuçları Göster ({filteredProducts.length})
               </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="flex-1">
           <div className="flex justify-between items-center mb-8">
             <div className="text-sm font-bold text-white/50 uppercase tracking-widest">
               {filteredProducts.length} Ürün Bulundu
             </div>
             {(activeCategory || activeFlavor || activeGoal) && (
               <button 
                 onClick={() => { setActiveCategory(null); setActiveFlavor(null); setActiveGoal(null); }}
                 className="text-xs text-[#ccff00] hover:underline font-bold uppercase tracking-widest"
               >
                 Filtreleri Temizle
               </button>
             )}
           </div>

           {filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {filteredProducts.map((product, idx) => (
                 <SupplementProductCard key={product.id} product={product} index={idx} />
               ))}
             </div>
           ) : (
             <div className="w-full py-24 flex flex-col items-center justify-center border border-white/10 rounded-3xl bg-[#121214]">
               <Filter size={48} className="text-white/20 mb-4" />
               <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Sonuç Bulunamadı</h3>
               <p className="text-white/50 text-center max-w-sm">
                 Seçtiğiniz filtrelere uygun bir ürün stoklarımızda yok. Lütfen farklı kriterler deneyin.
               </p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
