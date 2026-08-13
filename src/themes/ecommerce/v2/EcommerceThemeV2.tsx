"use client";
import React, { useState } from 'react';
import { HeroSlider } from './sections/HeroSlider';
import { ShopLayout } from './sections/ShopLayout';
import { ShoppingBag, Menu, Search, X, Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function EcommerceThemeV2() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{id: number, name: string, price: number, size: string, quantity: number, image: string}[]>([]);

  const addToCart = (product: any, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => item.id === product.id && item.size === size ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, size, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id: number, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id && item.size === size) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* Search Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col p-8 md:p-16"
          >
            <div className="flex justify-end">
              <X className="w-8 h-8 cursor-pointer hover:rotate-90 transition-transform" onClick={() => setSearchOpen(false)} />
            </div>
            <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full">
              <input 
                type="text" 
                placeholder="NE ARIYORSUNUZ?" 
                className="w-full text-4xl md:text-6xl font-black uppercase tracking-tighter border-b-4 border-black pb-4 outline-none placeholder:text-gray-200"
                autoFocus
              />
              <div className="mt-8 flex gap-4 text-sm font-bold text-gray-400">
                <span>Popüler Aramalar:</span>
                <span className="text-black cursor-pointer hover:underline">Oversize Tişört</span>
                <span className="text-black cursor-pointer hover:underline">Kargo Pantolon</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {loginOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-10 max-w-md w-full relative z-10 shadow-2xl"
            >
              <X className="absolute top-6 right-6 w-6 h-6 cursor-pointer hover:rotate-90 transition-transform" onClick={() => setLoginOpen(false)} />
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Giriş Yap.</h2>
              <input type="email" placeholder="E-Posta Adresi" className="w-full border-b border-gray-300 py-3 mb-6 outline-none focus:border-black transition-colors font-medium" />
              <input type="password" placeholder="Şifre" className="w-full border-b border-gray-300 py-3 mb-8 outline-none focus:border-black transition-colors font-medium" />
              <button 
                onClick={() => setLoginOpen(false)}
                className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-gray-800 transition-colors"
              >
                Devam Et
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Zara/Nike Style Minimal Header */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md z-50 flex items-center justify-between px-6 border-b border-gray-100">
        <div className="flex items-center gap-6 flex-1">
          <Menu className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <Search className="w-5 h-5 cursor-pointer hidden md:block hover:scale-110 transition-transform" onClick={() => setSearchOpen(true)} />
        </div>
        
        <div className="text-3xl font-black tracking-tighter uppercase flex-1 text-center cursor-pointer">
          STUDIO<span className="text-gray-400">.</span>
        </div>
        
        <div className="flex items-center justify-end gap-6 flex-1">
          <span onClick={() => setLoginOpen(true)} className="text-sm font-semibold hidden md:block cursor-pointer hover:underline underline-offset-4">LOG IN</span>
          <div className="relative cursor-pointer hover:scale-110 transition-transform" onClick={() => setCartOpen(true)}>
            <ShoppingBag className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.reduce((a, b) => a + b.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Slide-over Cart */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/30 z-[60] backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold uppercase tracking-wide">Alışveriş Sepeti ({cartItems.reduce((a,b)=>a+b.quantity,0)})</h2>
                <X className="w-6 h-6 cursor-pointer hover:rotate-90 transition-transform" onClick={() => setCartOpen(false)} />
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-500 mt-20 font-medium">Sepetiniz şu an boş.</div>
                ) : (
                  cartItems.map((item, i) => (
                    <motion.div layout key={`${item.id}-${item.size}`} className="flex gap-4 border-b border-gray-100 pb-6">
                      <div className="w-24 h-32 bg-gray-100 overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-sm uppercase">{item.name}</h3>
                          <p className="text-gray-500 text-sm mt-1">Beden: {item.size}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border border-gray-300">
                            <button onClick={() => updateQuantity(item.id, item.size, -1)} className="p-2 hover:bg-gray-100"><Minus className="w-3 h-3" /></button>
                            <span className="px-4 text-sm font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.size, 1)} className="p-2 hover:bg-gray-100"><Plus className="w-3 h-3" /></button>
                          </div>
                          <span className="font-bold">{(item.price * item.quantity).toLocaleString('tr-TR')} TL</span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-bold uppercase tracking-wide">Ara Toplam</span>
                    <span className="font-bold text-xl">{cartTotal.toLocaleString('tr-TR')} TL</span>
                  </div>
                  <button className="w-full bg-black text-white font-bold py-4 uppercase tracking-widest hover:bg-gray-900 active:scale-95 transition-all">
                    Siparişi Tamamla
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <HeroSlider />
        <ShopLayout onAddToCart={addToCart} />
      </main>
    </div>
  );
}
