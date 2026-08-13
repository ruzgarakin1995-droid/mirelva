"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { SupplementProduct } from '@/lib/mock-data/ecommerce/supplement';
import { Price } from '@/components/ecommerce/shared/Price';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';

interface SupplementProductCardProps {
  product: SupplementProduct;
  index?: number;
}

export function SupplementProductCard({ product, index = 0 }: SupplementProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast('SEPETE EKLENDİ', `${product.name} ödeme için hazır.`, 'success');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1.0] }}
      className="group flex flex-col h-full bg-[#121214] border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden transition-colors"
    >
      <Link href={`/test-ecommerce-v4/product/${product.slug}`} className="flex-1 flex flex-col relative p-6">
        
        {/* Top Badges */}
        <div className="flex justify-between items-start z-10 mb-4">
           {product.compareAtPrice && product.compareAtPrice > product.price ? (
             <div className="bg-[#ccff00] text-black text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm">
               İndirim
             </div>
           ) : (
             <div className="bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm backdrop-blur-sm">
               Yeni
             </div>
           )}
           <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md rounded-full px-2 py-1 border border-white/10">
             <Star size={10} className="text-[#ccff00]" fill="currentColor" />
             <span className="text-[10px] text-white font-bold">{(4.8 + (product.name.length % 3) * 0.1).toFixed(1)}</span>
           </div>
        </div>

        {/* Image Container with Hover Scale */}
        <div className="relative aspect-[4/5] w-full mb-6 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <motion.img 
             src={product.thumbnail} 
             alt={product.name}
             className="w-[80%] h-[80%] object-contain relative z-10 drop-shadow-2xl"
             whileHover={{ scale: 1.1, rotate: 2 }}
             transition={{ type: 'spring', stiffness: 300, damping: 20 }}
           />
           {/* Glow Effect */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#ccff00]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Content */}
        <div className="mt-auto relative z-10 flex flex-col gap-2">
           <div className="flex justify-between items-end gap-2">
             <h3 className="text-white font-black text-xl leading-tight uppercase tracking-tight line-clamp-2">
               {product.name}
             </h3>
             <ArrowRight size={20} className="text-white/30 group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all shrink-0" />
           </div>
           
           <p className="text-white/50 text-sm font-medium line-clamp-1">
             {product.specifications?.['Aroma']} • {product.specifications?.['Ağırlık'] || '30 Servis'}
           </p>
           
           <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <Price 
                amount={product.price} 
                compareAt={product.compareAtPrice} 
                className="text-2xl text-[#ccff00]" 
                compareAtClassName="text-sm text-white/40"
              />
           </div>
        </div>
      </Link>

      {/* Brutalist Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        className="w-full bg-white/5 hover:bg-[#ccff00] text-white hover:text-black text-sm font-black uppercase tracking-widest py-4 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
      >
         <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" /> 
         <span>SEPETE EKLE</span>
      </button>
    </motion.div>
  );
}
