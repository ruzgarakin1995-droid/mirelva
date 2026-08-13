"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { Price } from '@/components/ecommerce/shared/Price';
import Link from 'next/link';

interface CartDrawerProps {
  theme?: 'fashion' | 'tech' | 'grocery';
  checkoutHref: string;
}

export function CartDrawer({ theme = 'fashion', checkoutHref }: CartDrawerProps) {
  const { items, isCartOpen, setCartOpen, removeFromCart, updateQuantity, subtotal } = useCart();

  // Different button styles per theme
  const checkoutBtnClass = {
    fashion: "w-full bg-zinc-900 text-white py-4 font-medium hover:bg-zinc-800 transition-colors uppercase tracking-wider text-sm",
    tech: "w-full bg-blue-600 text-white py-4 font-semibold hover:bg-blue-700 transition-colors rounded-lg",
    grocery: "w-full bg-emerald-500 text-white py-4 font-bold hover:bg-emerald-600 transition-colors rounded-xl text-lg shadow-lg shadow-emerald-200"
  }[theme];

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-50 flex flex-col shadow-2xl`}
          >
            <div className="p-4 md:p-6 flex items-center justify-between border-b border-zinc-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag size={20} />
                Sepetim <span className="text-sm font-normal text-zinc-500">({items.length} Ürün)</span>
              </h2>
              <button 
                onClick={() => setCartOpen(false)} 
                className="p-2 text-zinc-400 hover:text-zinc-900 bg-zinc-50 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mb-2">
                    <ShoppingBag size={32} className="text-zinc-300" />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900">Sepetiniz Boş</h3>
                  <p className="text-zinc-500 text-sm max-w-[250px]">
                    Sepetinizde henüz ürün bulunmuyor. Alışverişe başlamak için hemen ürünlerimize göz atın.
                  </p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="text-sm font-medium underline underline-offset-4 mt-4"
                  >
                    Alışverişe Devam Et
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <AnimatePresence>
                    {items.map(item => (
                      <motion.div 
                        key={item.cartItemId}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex gap-4"
                      >
                        <div className="w-24 h-24 shrink-0 bg-zinc-50 rounded-md overflow-hidden">
                          <img src={item.product.thumbnail} alt={item.product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between gap-2">
                            <div>
                              <h4 className="text-sm font-medium text-zinc-900 line-clamp-2 leading-snug">
                                {item.product.name}
                              </h4>
                              {/* Display Variants if any */}
                              {item.selectedVariants && (
                                <div className="mt-1 flex flex-wrap gap-2 text-xs text-zinc-500">
                                  {Object.entries(item.selectedVariants).map(([key, variant]) => (
                                    <span key={key}>{variant.name}</span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.cartItemId)}
                              className="text-zinc-400 hover:text-red-500 p-1 -mt-1"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-zinc-200 rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>
                            <Price amount={item.product.price * item.quantity} />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-zinc-100 p-4 md:p-6 bg-zinc-50/50">
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-zinc-500">
                    <span>Ara Toplam</span>
                    <Price amount={subtotal} />
                  </div>
                  <div className="flex justify-between text-zinc-500">
                    <span>Kargo</span>
                    <span>Ücretsiz</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-zinc-900 pt-3 border-t border-zinc-200">
                    <span>Toplam</span>
                    <Price amount={subtotal} />
                  </div>
                </div>
                <Link href={checkoutHref} onClick={() => setCartOpen(false)}>
                  <button className={checkoutBtnClass}>
                    Alışverişi Tamamla
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
