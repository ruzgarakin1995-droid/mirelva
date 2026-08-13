"use client";

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Truck, ShieldCheck, Check, Info } from 'lucide-react';
import { techProducts } from '@/lib/mock-data/ecommerce/electronics';
import { Price } from '@/components/ecommerce/shared/Price';
import { Rating } from '@/components/ecommerce/shared/Rating';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { useCart } from '@/store/ecommerce/CartContext';
import { useWishlist } from '@/store/ecommerce/WishlistContext';
import { useToast } from '@/components/ecommerce/shared/Toast';
import Link from 'next/link';

export default function TechProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  let product = techProducts.find(p => p.slug === unwrappedParams.slug);
  
  if (!product) {
    product = techProducts.find(p => unwrappedParams.slug.includes(p.slug) || p.slug.includes(unwrappedParams.slug));
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center p-4">
         <h1 className="text-5xl font-black mb-4 text-blue-600">404</h1>
         <h2 className="text-2xl font-bold text-slate-900 mb-2">Ürün Bulunamadı</h2>
         <p className="text-slate-500 mb-8 max-w-md text-center">Aradığınız ürün yayından kaldırılmış olabilir veya hatalı bir bağlantıya (Slug: {unwrappedParams.slug}) tıkladınız.</p>
         <Link href="/test-ecommerce-v2/shop" className="px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-xl font-bold transition-colors shadow-md hover:shadow-lg">Mağazaya Dön</Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.variants?.find(v => v.type === 'COLOR')?.id);
  const [selectedStorage, setSelectedStorage] = useState(product.variants?.find(v => v.type === 'STORAGE')?.id);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const isWished = isInWishlist(product.id);

  const activeStorageVariant = product.variants?.find(v => v.id === selectedStorage);
  const displayPrice = activeStorageVariant ? activeStorageVariant.price : product.price;

  const handleAddToCart = () => {
    const hasColor = product.variants?.some(v => v.type === 'COLOR');
    const hasStorage = product.variants?.some(v => v.type === 'STORAGE');
    
    if (hasColor && !selectedColor) return toast('Uyarı', 'Lütfen renk seçiniz.', 'error');
    if (hasStorage && !selectedStorage) return toast('Uyarı', 'Lütfen kapasite seçiniz.', 'error');

    const selectedVariants: any = {};
    if (selectedColor) selectedVariants.COLOR = product.variants?.find(v => v.id === selectedColor);
    if (selectedStorage) selectedVariants.STORAGE = product.variants?.find(v => v.id === selectedStorage);

    const productToAdd = { ...product, price: displayPrice };

    addToCart(productToAdd, 1, selectedVariants);
    toast('Sepete Eklendi', `${product.name} sepete başarıyla eklendi.`, 'success');
  };

  return (
    <FadeIn className="w-full min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/30 overflow-hidden relative">
       {/* Background ambient glow (Light mode variant) */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-50 blur-[150px] pointer-events-none z-0" />
       
       <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 w-full relative z-10">
         
         {/* Custom Light Breadcrumb */}
         <div className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
            <Link href="/test-ecommerce-v2" className="hover:text-blue-600 transition-colors">Anasayfa</Link>
            <span>/</span>
            <Link href="/test-ecommerce-v2/shop" className="hover:text-blue-600 transition-colors">Mağaza</Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">{product.name}</span>
         </div>

         <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 mb-12 shadow-sm">
           <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
             
             {/* Gallery */}
             <div className="lg:w-1/2 flex flex-col gap-6">
               <div className="relative aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center group">
                 {/* Inner glow behind product image */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent pointer-events-none" />
                 
                 <motion.img 
                   key={activeImage}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.4, ease: "easeOut" }}
                   src={product.images[activeImage]} 
                   alt={product.name} 
                   className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               
               <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                 {product.images.map((img, i) => (
                   <button 
                     key={i} 
                     onClick={() => setActiveImage(i)}
                     className={`relative aspect-square w-24 shrink-0 rounded-xl border-2 p-1 bg-white overflow-hidden transition-all duration-300 ${activeImage === i ? 'border-blue-600 shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
                   >
                     <img src={img} alt={`Thumb ${i}`} className="w-full h-full object-cover rounded-lg mix-blend-multiply" />
                   </button>
                 ))}
               </div>
             </div>

             {/* Info */}
             <div className="lg:w-1/2 flex flex-col">
               <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-xs font-bold text-blue-700 uppercase tracking-widest border border-blue-100">{product.brand}</span>
               </div>
               
               <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-6 leading-tight">{product.name}</h1>
               
               <div className="flex items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                 <Rating rating={product.rating} count={product.reviewCount} className="text-yellow-500" />
                 <span className="text-sm text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full"><Check size={16}/> Stokta Var</span>
               </div>
               
               <div className="mb-8">
                  <Price 
                     amount={displayPrice} 
                     compareAt={product.compareAtPrice} 
                     className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500" 
                     compareAtClassName="text-2xl text-slate-400"
                  />
               </div>
               
               <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-10 font-medium">
                 {product.description}
               </p>

               <div className="space-y-8 mb-10">
                 {/* Colors */}
                 {product.variants?.some(v => v.type === 'COLOR') && (
                   <div>
                     <h3 className="text-sm font-bold text-slate-700 mb-4 flex justify-between items-center">
                       <span className="uppercase tracking-widest text-xs text-slate-500">Renk</span>
                       <span className="text-blue-600 font-bold">{product.variants.find(v => v.id === selectedColor)?.name}</span>
                     </h3>
                     <div className="flex flex-wrap gap-4">
                       {product.variants.filter(v => v.type === 'COLOR').map(color => (
                         <button
                           key={color.id}
                           onClick={() => setSelectedColor(color.id)}
                           className={`w-14 h-14 rounded-full border-2 p-1.5 transition-all duration-300 ${selectedColor === color.id ? 'border-blue-600 scale-110 shadow-lg' : 'border-slate-200 hover:border-slate-400'}`}
                           title={color.name}
                         >
                           <div className="w-full h-full rounded-full border border-slate-200 shadow-inner" style={{ backgroundColor: color.value }} />
                         </button>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Storage */}
                 {product.variants?.some(v => v.type === 'STORAGE') && (
                   <div>
                     <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-widest text-xs text-slate-500">Kapasite</h3>
                     <div className="flex flex-wrap gap-3">
                       {product.variants.filter(v => v.type === 'STORAGE').map(storage => (
                         <button
                           key={storage.id}
                           onClick={() => setSelectedStorage(storage.id)}
                           className={`px-8 py-4 rounded-2xl border-2 font-bold text-base transition-all duration-300 ${
                             selectedStorage === storage.id 
                               ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md' 
                               : 'border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 bg-white'
                           }`}
                         >
                           {storage.name}
                         </button>
                       ))}
                     </div>
                   </div>
                 )}
               </div>

               {/* Actions */}
               <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                 <button 
                   onClick={handleAddToCart}
                   className="w-full sm:flex-1 h-16 bg-slate-900 text-white font-black text-lg rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                 >
                   <ShoppingCart size={22} /> Sepete Ekle
                 </button>
                 
                 <button 
                   onClick={() => { toggleWishlist(product); toast(isWished ? 'Favorilerden Çıkarıldı' : 'Favorilere Eklendi', '', 'info'); }}
                   className={`h-16 w-full sm:w-16 rounded-2xl border-2 flex items-center justify-center transition-all shrink-0 ${isWished ? 'border-red-200 bg-red-50 text-red-500 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-400'}`}
                   title="Favorilere Ekle"
                 >
                   <Heart size={26} className={isWished ? 'fill-red-500 text-red-500' : 'text-slate-400'} />
                 </button>
               </div>
               
               {/* Guarantees */}
               <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                     <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <ShieldCheck size={20} className="text-blue-600" />
                     </div>
                     <span className="text-sm font-semibold text-slate-700">2 Yıl TEKNOEMO<br/>Garantisi</span>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                     <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Truck size={20} className="text-purple-600" />
                     </div>
                     <span className="text-sm font-semibold text-slate-700">Aynı Gün<br/>Ücretsiz Kargo</span>
                  </div>
               </div>

             </div>
           </div>
         </div>

         {/* Specifications Table */}
         {product.specifications && (
            <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-12 mt-12 relative overflow-hidden shadow-sm">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 blur-[100px] pointer-events-none" />
               <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Info size={28} className="text-blue-600" /> Teknik Özellikler
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 relative z-10">
                  {Object.entries(product.specifications).map(([key, value]) => (
                     <div key={key} className="flex flex-col py-4 border-b border-slate-100 group hover:border-blue-200 transition-colors">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{key}</span>
                        <span className="text-base font-medium text-slate-800">{value as string}</span>
                     </div>
                  ))}
               </div>
            </div>
         )}
       </div>
    </FadeIn>
  );
}
