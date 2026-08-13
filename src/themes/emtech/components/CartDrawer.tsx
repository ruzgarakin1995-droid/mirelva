"use client";
import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import { X, Minus, Plus, ShoppingBag, MessageCircle } from 'lucide-react';

export function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();

  const handleWhatsApp = () => {
    if (cartItems.length === 0) return;
    
    let message = "Merhaba, aşağıdaki ürünler için toptan fiyat teklifi almak istiyorum:%0A%0A";
    cartItems.forEach(item => {
      message += `- ${item.quantity} Adet x ${item.name}%0A`;
    });
    
    window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-zinc-950/50 backdrop-blur-sm z-[9998]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[9999] flex flex-col border-l-4 border-zinc-950"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-zinc-200">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#0055FF]" />
                <h2 className="font-space font-black text-2xl text-zinc-950 uppercase tracking-tighter">Teklif Sepeti</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-colors border-2 border-transparent hover:border-zinc-950"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mb-6 border-4 border-zinc-200">
                    <ShoppingBag className="w-8 h-8 text-zinc-300" />
                  </div>
                  <h3 className="font-space font-black text-2xl text-zinc-900 mb-2 uppercase">Sepetiniz Boş</h3>
                  <p className="font-inter text-zinc-500 text-sm">Teklif almak istediğiniz ürünleri sepete ekleyin.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-8 px-6 py-3 bg-zinc-950 text-white font-space font-bold text-sm uppercase tracking-widest hover:bg-[#0055FF] hover:shadow-[4px_4px_0px_#000] border-2 border-transparent hover:border-zinc-950 transition-all"
                  >
                    Kataloğa Dön
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 border-2 border-zinc-200 p-3 relative group bg-white shadow-[4px_4px_0px_transparent] hover:shadow-[4px_4px_0px_#0055FF] transition-all hover:border-zinc-950">
                      <div className="w-20 h-20 bg-zinc-50 relative flex-shrink-0 border-2 border-zinc-200 group-hover:border-zinc-950 transition-colors">
                        <Image src={item.image} alt={item.name} fill className="object-cover p-2 mix-blend-multiply" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <h4 className="font-space font-bold text-sm text-zinc-900 leading-tight pr-6 group-hover:text-[#0055FF] transition-colors">{item.name}</h4>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border-2 border-zinc-200 group-hover:border-zinc-950 transition-colors">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 flex items-center justify-center bg-zinc-50 hover:bg-[#0055FF] hover:text-white transition-colors">
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-mono text-xs font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 flex items-center justify-center bg-zinc-50 hover:bg-[#0055FF] hover:text-white transition-colors">
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 w-6 h-6 bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-red-500 hover:text-white transition-colors border-2 border-transparent hover:border-zinc-950"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t-2 border-zinc-200 bg-zinc-50">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#25D366] text-white font-space font-black text-lg uppercase tracking-wider shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] transition-all border-2 border-transparent hover:border-zinc-950"
                >
                  <MessageCircle className="w-6 h-6" />
                  Toplu Teklif İste
                </button>
                <p className="font-inter text-center text-xs text-zinc-500 mt-4">
                  Seçtiğiniz ürünler WhatsApp üzerinden müşteri temsilcimize iletilecektir.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
