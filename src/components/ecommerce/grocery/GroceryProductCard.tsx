"use client";

import React from 'react';
import Link from 'next/link';
import { Plus, Minus, ShoppingBasket } from 'lucide-react';
import { EcommerceProduct } from '@/types/ecommerce';
import { Price } from '@/components/ecommerce/shared/Price';
import { useCart } from '@/store/ecommerce/CartContext';
import { useToast } from '@/components/ecommerce/shared/Toast';

interface GroceryProductCardProps {
  product: EcommerceProduct;
}

export function GroceryProductCard({ product }: GroceryProductCardProps) {
  const { items, addToCart, updateQuantity, removeFromCart } = useCart();
  const { toast } = useToast();

  const cartItem = items.find(item => item.product.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddInitial = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product, 1);
    toast('Sepete Eklendi', `${product.name} sepete eklendi.`, 'success');
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.preventDefault();
    if (cartItem) {
      updateQuantity(cartItem.cartItemId, cartItem.quantity + 1);
    }
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.preventDefault();
    if (cartItem) {
      if (cartItem.quantity === 1) {
         removeFromCart(cartItem.cartItemId);
         toast('Sepetten Çıkarıldı', `${product.name} sepetten çıkarıldı.`, 'info');
      } else {
         updateQuantity(cartItem.cartItemId, cartItem.quantity - 1);
      }
    }
  };

  return (
    <Link 
      href={`/test-ecommerce-v3/product/${product.slug}`}
      className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-200 flex flex-col h-full group"
    >
      <div className="relative p-4 flex items-center justify-center aspect-square">
        <img 
          src={product.thumbnail} 
          alt={product.name}
          className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
        />
        {product.compareAtPrice && product.compareAtPrice > product.price && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-[11px] font-bold px-2 py-1 rounded-full shadow-sm">
            %{(100 - (product.price / product.compareAtPrice) * 100).toFixed(0)} İndirim
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="mb-2 flex justify-between items-start gap-2">
           <Price 
             amount={product.price} 
             compareAt={product.compareAtPrice} 
             className="text-lg text-emerald-700"
             compareAtClassName="text-xs text-slate-400"
           />
           {product.specifications?.['Birim'] && (
              <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-semibold whitespace-nowrap">
                 {product.specifications['Birim']}
              </span>
           )}
        </div>
        
        <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-1 mb-4">{product.shortDescription}</p>
        
        <div className="mt-auto pt-2">
          {quantityInCart === 0 ? (
            <button 
              onClick={handleAddInitial}
              className="w-full h-10 bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white rounded-xl flex items-center justify-center gap-2 font-bold transition-colors"
            >
              <ShoppingBasket size={18} /> Ekle
            </button>
          ) : (
            <div className="w-full h-10 flex items-center justify-between bg-emerald-600 text-white rounded-xl overflow-hidden shadow-sm shadow-emerald-200">
              <button 
                onClick={handleDecrease}
                className="w-10 h-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <Minus size={18} />
              </button>
              <span className="flex-1 text-center font-bold text-sm">{quantityInCart}</span>
              <button 
                onClick={handleIncrease}
                className="w-10 h-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
