"use client";

import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Cpu } from 'lucide-react';
import { EcommerceProduct } from '@/types/ecommerce';
import { Price } from '@/components/ecommerce/shared/Price';
import { Rating } from '@/components/ecommerce/shared/Rating';
import { useWishlist } from '@/store/ecommerce/WishlistContext';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';

interface TechProductCardProps {
  product: EcommerceProduct;
}

export function TechProductCard({ product }: TechProductCardProps) {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const isWished = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    addToCart(product, 1);
    toast('Sepete Eklendi', `${product.name} başarıyla eklendi.`, 'success');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product);
    if (!isWished) {
      toast('Favorilere Eklendi', '', 'success');
    }
  };

  return (
    <Link 
      href={`/test-ecommerce-v2/product/${product.slug}`}
      className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative p-6 bg-slate-50 flex items-center justify-center aspect-square">
        <img 
          src={product.thumbnail} 
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Yeni</span>
          )}
          {product.compareAtPrice && product.compareAtPrice > product.price && (
            <span className="bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Fırsat</span>
          )}
        </div>

        {/* Wishlist */}
        <button 
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10"
        >
          <Heart size={18} className={isWished ? 'fill-red-500 text-red-500' : ''} />
        </button>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.brand}</span>
        </div>
        <h3 className="text-sm md:text-base font-bold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="mb-4">
          <Rating rating={product.rating} count={product.reviewCount} size={14} />
        </div>

        {/* Mini Specs */}
        {product.specifications && (
          <ul className="text-xs text-slate-500 space-y-1 mb-6 border-t border-slate-100 pt-3 hidden sm:block">
            {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
               <li key={key} className="flex items-center gap-1.5 line-clamp-1">
                  <Cpu size={12} className="text-slate-400 shrink-0" />
                  <span className="font-medium">{key}:</span> {value as string}
               </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <Price 
            amount={product.price} 
            compareAt={product.compareAtPrice} 
            className="text-lg text-blue-700"
            compareAtClassName="text-xs text-slate-400"
          />
          <button 
            onClick={handleAddToCart}
            className="w-10 h-10 md:w-auto md:px-4 md:h-10 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shrink-0"
          >
            <ShoppingCart size={18} />
            <span className="hidden md:block text-sm">Sepete Ekle</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
