"use client";

import React, { use } from 'react';
import { notFound } from 'next/navigation';
import { supplementProducts } from '@/lib/mock-data/ecommerce/supplement';
import { Price } from '@/components/ecommerce/shared/Price';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';
import { ShoppingBag, ChevronRight, Activity, Zap, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function SupplementProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = supplementProducts.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    return notFound();
  }

  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast('SEPETE EKLENDİ', `${product.name} ödeme için hazır.`, 'success');
  };

  return (
    <div className="w-full min-h-screen bg-[#09090b] text-white">
      
      {/* Breadcrumb */}
      <div className="border-b border-white/5 px-6 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50">
          <Link href="/test-ecommerce-v4" className="hover:text-[#ccff00] transition-colors">Ana Sayfa</Link>
          <ChevronRight size={14} />
          <Link href="/test-ecommerce-v4/shop" className="hover:text-[#ccff00] transition-colors">Mağaza</Link>
          <ChevronRight size={14} />
          <span className="text-white">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
         <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Image Gallery */}
            <div className="lg:w-1/2">
               <div className="relative aspect-square w-full bg-[#121214] rounded-3xl border border-white/10 flex items-center justify-center p-12 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ccff00]/5 to-transparent pointer-events-none"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#ccff00]/10 blur-[100px] rounded-full pointer-events-none"></div>
                  <img 
                    src={product.thumbnail} 
                    alt={product.name}
                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-110 hover:scale-125 transition-transform duration-700 ease-out"
                  />
               </div>
            </div>

            {/* Product Details */}
            <div className="lg:w-1/2 flex flex-col justify-center">
               <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-[#ccff00]/10 border-l-2 border-[#ccff00] text-[#ccff00] text-[10px] font-black uppercase tracking-[0.2em]">
                 <Activity size={12} />
                 {product.specifications?.['Hedef'] as string || 'Genel Performans'}
               </div>
               
               <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                 {product.name}
               </h1>
               
               <p className="text-white/50 text-lg font-medium leading-relaxed mb-8 max-w-xl">
                 {product.description}
               </p>

               <div className="mb-10">
                 <Price 
                   amount={product.price} 
                   compareAt={product.compareAtPrice} 
                   className="text-4xl text-[#ccff00] font-black"
                   compareAtClassName="text-xl text-white/30 font-medium"
                 />
               </div>

               {/* Specs Grid */}
               {product.specifications && (
                 <div className="grid grid-cols-2 gap-4 mb-10">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="bg-[#121214] border border-white/10 rounded-xl p-4">
                        <span className="block text-[10px] uppercase font-bold tracking-widest text-white/40 mb-1">{key}</span>
                        <span className="block text-sm font-bold text-white">{val as string}</span>
                      </div>
                    ))}
                 </div>
               )}

               <button 
                 onClick={handleAddToCart}
                 className="w-full bg-[#ccff00] hover:bg-white text-black font-black text-lg uppercase tracking-widest py-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
               >
                 <ShoppingBag size={24} /> SEPETE EKLE
               </button>
               
               {/* Trust Badges */}
               <div className="mt-8 flex flex-col gap-3">
                 <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                   <CheckCircle2 size={18} className="text-[#ccff00]" /> %100 Orijinal Ürün Garantisi
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                   <Zap size={18} className="text-[#ccff00]" /> Aynı Gün Ücretsiz Kargo
                 </div>
                 <div className="flex items-center gap-3 text-sm font-medium text-white/60">
                   <Activity size={18} className="text-[#ccff00]" /> Klinik Onaylı İçerik (WADA Uyumlu)
                 </div>
               </div>
            </div>

         </div>

         {/* Nutrition Profile Details (V4 Advanced Specs) */}
         <div className="mt-24 pt-24 border-t border-white/10">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
              Besin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-500">Profili</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-[#121214] p-8 rounded-3xl border border-white/5 hover:border-[#ccff00]/30 transition-colors">
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-[#ccff00]">Makrolar (Servis Başı)</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/60">Protein</span>
                      <span className="font-bold">{20 + (product.name.length % 10)}g</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/60">Karbonhidrat</span>
                      <span className="font-bold">{((product.name.length % 8) + 1.2).toFixed(1)}g</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-white/60">Yağ</span>
                      <span className="font-bold">{((product.name.length % 3) + 0.5).toFixed(1)}g</span>
                    </div>
                  </div>
               </div>

               <div className="md:col-span-2 bg-[#121214] p-8 rounded-3xl border border-white/5">
                 <h3 className="text-xl font-bold uppercase tracking-tight mb-6">Öne Çıkan Özellikler</h3>
                 <ul className="space-y-4">
                   {product.features?.map((feature, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <Zap size={20} className="text-[#ccff00] shrink-0 mt-0.5" />
                       <span className="text-white/80 font-medium">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
