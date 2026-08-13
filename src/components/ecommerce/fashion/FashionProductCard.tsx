"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus } from 'lucide-react';
import { EcommerceProduct } from '@/types/ecommerce';
import { Price } from '@/components/ecommerce/shared/Price';
import { useWishlist } from '@/store/ecommerce/WishlistContext';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';

interface FashionProductCardProps {
  product: EcommerceProduct;
}

export function FashionProductCard({ product }: FashionProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeColorIndex, setActiveColorIndex] = useState<number | null>(null);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const isWished = isInWishlist(product.id);
  const colorVariants = product.variants?.filter(v => v.type === 'COLOR') || [];

  // If a color is clicked, maybe we show a specific image (mocking it by just keeping activeImage state)
  // For now, if hovered, show image[1] if exists, else image[0]. If color clicked, we can just pretend.
  const displayImage = isHovered && product.images[1] && activeColorIndex === null 
    ? product.images[1] 
    : product.images[0] || product.thumbnail;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    
    // Add default variants if they exist
    const selectedVariants: any = {};
    if (colorVariants.length > 0) {
       selectedVariants.COLOR = activeColorIndex !== null ? colorVariants[activeColorIndex] : colorVariants[0];
    }
    const sizeVariant = product.variants?.find(v => v.type === 'SIZE');
    if (sizeVariant) {
       selectedVariants.SIZE = sizeVariant;
    }

    addToCart(product, 1, selectedVariants);
    toast('Sepete Eklendi', `${product.name} sepetinize eklendi.`, 'success');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    if (!isWished) {
      toast('Favorilere Eklendi', '', 'info');
    }
  };

  const handleColorClick = (e: React.MouseEvent, index: number) => {
     e.preventDefault();
     setActiveColorIndex(index);
  }

  return (
    <Link 
      href={`/test-ecommerce/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-zinc-100 mb-5 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.img 
            key={displayImage}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={displayImage} 
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </AnimatePresence>
        
        {/* Overlay gradient on hover for better text visibility if needed */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-white text-zinc-900 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 shadow-sm">Yeni</span>
          )}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="bg-red-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1.5 shadow-sm">İndirim</span>
          )}
        </div>

        {/* Wishlist Icon */}
        <button 
          onClick={handleWishlist}
          className="absolute top-4 right-4 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart size={20} strokeWidth={isWished ? 0 : 1.5} className={isWished ? 'fill-red-500 text-red-500' : 'text-zinc-600 hover:text-zinc-900'} />
        </button>

        {/* Quick Add Button sliding up */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
          <button 
            onClick={handleAddToCart}
            className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2"
          >
            <Plus size={14} /> Hızlı Ekle
          </button>
        </div>
      </div>

      <div className="px-1">
        {/* Color Swatches */}
        {colorVariants.length > 0 && (
          <div className="flex items-center gap-2 mb-3">
            {colorVariants.slice(0, 4).map((color, idx) => (
              <button
                key={color.id} 
                onClick={(e) => handleColorClick(e, idx)}
                className={`w-3.5 h-3.5 rounded-full border ${activeColorIndex === idx ? 'border-zinc-900 p-[1px]' : 'border-zinc-300'} transition-all`}
                title={color.name}
              >
                 <div className="w-full h-full rounded-full" style={{ backgroundColor: color.value }} />
              </button>
            ))}
            {colorVariants.length > 4 && (
              <span className="text-[10px] text-zinc-500 font-medium ml-1">+{colorVariants.length - 4}</span>
            )}
          </div>
        )}

        <h3 className="text-sm font-light text-zinc-900 line-clamp-1 mb-1 group-hover:underline underline-offset-4 decoration-1">{product.name}</h3>
        <Price 
          amount={product.price} 
          compareAt={product.compareAtPrice} 
          className="text-sm font-medium"
          compareAtClassName="text-xs text-zinc-400"
        />
      </div>
    </Link>
  );
}
