"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Truck, ArrowLeft, Ruler, Share2, Plus, Minus } from 'lucide-react';
import { fashionProducts } from '@/lib/mock-data/ecommerce/fashion';
import { Price } from '@/components/ecommerce/shared/Price';
import { Rating } from '@/components/ecommerce/shared/Rating';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { useCart } from '@/store/ecommerce/CartContext';
import { useWishlist } from '@/store/ecommerce/WishlistContext';
import { useToast } from '@/components/ecommerce/shared/Toast';
import { FashionProductCard } from '@/components/ecommerce/fashion/FashionProductCard';

const AccordionItem = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full text-left font-medium text-zinc-900 tracking-wide uppercase text-sm"
      >
        {title}
        {isOpen ? <Minus size={16} className="text-zinc-400" /> : <Plus size={16} className="text-zinc-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-zinc-500 text-sm font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FashionProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const product = fashionProducts.find(p => p.slug === resolvedParams.slug);
  
  if (!product) {
    return notFound();
  }

  const [selectedColor, setSelectedColor] = useState(product.variants?.find(v => v.type === 'COLOR')?.id);
  const [selectedSize, setSelectedSize] = useState(product.variants?.find(v => v.type === 'SIZE')?.id);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const isWished = isInWishlist(product.id);
  
  // Fake related products
  const relatedProducts = fashionProducts.filter(p => p.id !== product.id && p.categoryIds.some(cid => product.categoryIds.includes(cid))).slice(0, 4);

  const handleAddToCart = () => {
    const hasColor = product.variants?.some(v => v.type === 'COLOR');
    const hasSize = product.variants?.some(v => v.type === 'SIZE');
    
    if (hasColor && !selectedColor) return toast('Uyarı', 'Lütfen renk seçiniz.', 'error');
    if (hasSize && !selectedSize) return toast('Uyarı', 'Lütfen beden seçiniz.', 'error');

    const selectedVariants: any = {};
    if (selectedColor) selectedVariants.COLOR = product.variants?.find(v => v.id === selectedColor);
    if (selectedSize) selectedVariants.SIZE = product.variants?.find(v => v.id === selectedSize);

    addToCart(product, 1, selectedVariants);
    toast('Sepete Eklendi', `${product.name} sepete başarıyla eklendi.`, 'success');
  };

  return (
    <FadeIn>
    <div className="w-full bg-white pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <Breadcrumb 
          items={[
            { label: 'Locizsa', href: '/test-ecommerce' },
            { label: 'Koleksiyon', href: '/test-ecommerce/shop' },
            { label: product.name }
          ]} 
          className="mb-8"
        />

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative items-start">
          
          {/* Left: Editorial Image Stacking */}
          <div className="lg:w-7/12 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
             {product.images.map((img, idx) => (
                <div key={idx} className={`relative bg-zinc-100 ${idx === 0 ? 'md:col-span-2 aspect-[3/4] md:aspect-[4/5]' : 'aspect-[3/4]'}`}>
                   <img src={img} alt={`${product.name} - ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
                </div>
             ))}
          </div>

          {/* Right: Sticky Product Info */}
          <div className="lg:w-5/12 w-full lg:sticky lg:top-32">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">Yeni Sezon</span>
                 <button className="text-zinc-400 hover:text-zinc-900 transition-colors"><Share2 size={18} strokeWidth={1.5} /></button>
              </div>
              <h1 className="text-3xl lg:text-4xl font-light tracking-tighter mb-4 text-zinc-900 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <Price 
                  amount={product.price} 
                  compareAt={product.compareAtPrice} 
                  className="text-2xl font-medium text-zinc-900" 
                  compareAtClassName="text-lg text-zinc-400"
                />
              </div>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            <div className="space-y-8 mb-10">
              {/* Colors */}
              {product.variants?.some(v => v.type === 'COLOR') && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900">Renk: <span className="font-medium text-zinc-500 ml-1">{product.variants.find(v => v.id === selectedColor)?.name}</span></h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.filter(v => v.type === 'COLOR').map(color => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`w-8 h-8 rounded-full border ${selectedColor === color.id ? 'border-zinc-900 p-[2px]' : 'border-transparent'}`}
                      >
                        <div className="w-full h-full rounded-full border border-zinc-200" style={{ backgroundColor: color.value }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sizes */}
              {product.variants?.some(v => v.type === 'SIZE') && (
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-900">Beden</h3>
                    <button className="flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors underline underline-offset-4">
                      Beden Rehberi
                    </button>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {product.variants.filter(v => v.type === 'SIZE').map(size => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size.id)}
                        disabled={size.stock === 0}
                        className={`h-12 flex items-center justify-center text-sm font-medium border ${
                          selectedSize === size.id 
                            ? 'border-zinc-900 bg-zinc-900 text-white' 
                            : size.stock === 0 
                              ? 'border-zinc-100 text-zinc-300 bg-zinc-50 cursor-not-allowed line-through' 
                              : 'border-zinc-200 text-zinc-900 hover:border-zinc-900'
                        } transition-colors`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 mb-10">
              <button 
                onClick={handleAddToCart}
                className="w-full h-14 bg-zinc-900 text-white text-xs tracking-widest uppercase font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3"
              >
                <ShoppingBag size={16} /> Sepete Ekle
              </button>
              
              <button 
                onClick={() => { toggleWishlist(product); toast(isWished ? 'Favorilerden Çıkarıldı' : 'Favorilere Eklendi', '', 'info'); }}
                className="w-full h-14 border border-zinc-200 text-zinc-900 text-xs tracking-widest uppercase font-bold hover:bg-zinc-50 transition-colors flex items-center justify-center gap-3"
              >
                <Heart size={16} strokeWidth={isWished ? 0 : 1.5} className={isWished ? 'fill-red-500 text-red-500' : ''} /> 
                {isWished ? 'Favorilerde' : 'Favorilere Ekle'}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-zinc-200 mt-10">
               <AccordionItem title="Ürün Özellikleri" defaultOpen>
                  <ul className="list-disc pl-5 space-y-2">
                     {product.features?.map((f, i) => <li key={i}>{f}</li>)}
                     <li>Stil: Zamansız & Minimalist</li>
                     <li>Kalıp: Normal Kesim</li>
                     <li>SKU: {product.sku}</li>
                  </ul>
               </AccordionItem>
               <AccordionItem title="Kumaş ve Bakım">
                  <p className="mb-4">Bu ürün %100 çevre dostu ve organik materyallerden üretilmiştir.</p>
                  <ul className="list-disc pl-5 space-y-2">
                     <li>Maksimum 30°C'de yıkayın.</li>
                     <li>Ağartıcı kullanmayın.</li>
                     <li>Düşük ısıda ütüleyin.</li>
                     <li>Kuru temizleme önerilmez.</li>
                  </ul>
               </AccordionItem>
               <AccordionItem title="Teslimat ve İade">
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                        <Truck size={20} className="text-zinc-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                           <p className="font-medium text-zinc-900">Ücretsiz Kargo</p>
                           <p>2000 ₺ üzeri alışverişlerinizde kargo ücretsiz. 1-3 iş günü içinde teslimat.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-3">
                        <ArrowLeft size={20} className="text-zinc-900 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <div>
                           <p className="font-medium text-zinc-900">Kolay İade</p>
                           <p>Ürünlerinizi kullanılmamış ve etiketli olması koşuluyla 30 gün içinde iade edebilirsiniz.</p>
                        </div>
                     </div>
                  </div>
               </AccordionItem>
            </div>

          </div>
        </div>
      </div>
      
      {/* Complete the look / Related */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-32 border-t border-zinc-100 pt-24">
         <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light tracking-tighter text-zinc-900">Birlikte İyi Gider</h2>
            <p className="text-zinc-500 font-light mt-2">Kombininizi tamamlayacak parçaları keşfedin.</p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
            {relatedProducts.map(p => (
               <FashionProductCard key={p.id} product={p} />
            ))}
         </div>
      </div>
        </div>
    </FadeIn>
  );
}