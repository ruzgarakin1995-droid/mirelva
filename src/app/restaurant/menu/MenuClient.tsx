"use client";
import React, { useState } from 'react';
import { Search, Plus, Minus, ShoppingBag, ArrowRight, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/components/CartContext';
import Link from 'next/link';

type MenuItem = {
  id: string;
  name: string;
  description: string | null;
  price: any;
  imageUrl: string | null;
};

type Category = {
  id: string;
  name: string;
  items: MenuItem[];
};

export default function MenuClient({ categories }: { categories: Category[] }) {
  const [activeTab, setActiveTab] = useState(categories[0]?.id);
  const [searchTerm, setSearchTerm] = useState('');
  
  const { cartCount, cartTotal, addToCart, cart, updateQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 relative pb-24">
      
      {/* Category Tabs & Search (Ultra Premium) */}
      <div className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6 mb-16 relative z-30 sticky top-24">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide flex-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300 shrink-0 ${
                activeTab === cat.id 
                  ? 'bg-stone-900 text-white shadow-xl scale-105' 
                  : 'bg-transparent text-stone-500 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-80">
          <input 
            type="text" 
            placeholder="Menüde lezzet ara..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-stone-50 border-none rounded-full pl-14 pr-6 py-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm font-medium text-stone-700"
          />
          <Search className="w-5 h-5 text-stone-400 absolute left-5 top-4" />
        </div>
      </div>

      {/* Menu List */}
      <div className="space-y-24">
        {categories.map(category => (
          (activeTab === category.id || (searchTerm && category.items.some(i => i.name.toLowerCase().includes(searchTerm.toLowerCase())))) && (
            <div key={category.id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-stone-900">{category.name}</h2>
                <div className="h-px bg-stone-200 flex-1 mt-2"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).map(item => {
                  const cartItem = cart.find(c => c.item.id === item.id);
                  const imageSrc = item.imageUrl && item.imageUrl.length > 5 ? item.imageUrl : null;

                  return (
                    <motion.div 
                      layout 
                      key={item.id} 
                      className="bg-white rounded-[2rem] p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:shadow-2xl transition-all duration-500 flex flex-col group"
                    >
                      {/* Image Area with Fallback */}
                      <div className="h-56 rounded-3xl overflow-hidden relative bg-stone-100 mb-6">
                        {imageSrc ? (
                          <img src={imageSrc} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.classList.add('fallback-bg'); }} />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-stone-300">
                            <Utensils className="w-12 h-12 mb-2 opacity-50" />
                            <span className="text-xs font-bold uppercase tracking-widest opacity-50">Köhne</span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content Area */}
                      <div className="px-2 flex-1 flex flex-col">
                        <div className="flex justify-between items-start mb-3 gap-4">
                          <h3 className="font-black text-xl text-stone-900 tracking-tight leading-tight">{item.name}</h3>
                          <span className="font-black text-orange-500 text-xl shrink-0">{parseFloat(item.price).toLocaleString('tr-TR')} ₺</span>
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-1">{item.description}</p>
                        
                        {/* Action Area */}
                        <div className="mt-auto">
                          {cartItem ? (
                            <div className="flex items-center justify-between bg-stone-900 text-white rounded-2xl p-2 shadow-lg">
                              <button onClick={() => updateQuantity(item.id, -1)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-800 hover:bg-stone-700 transition-colors">
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-black text-lg">{cartItem.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 transition-colors">
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => addToCart(item)}
                              className="w-full bg-stone-100 hover:bg-orange-500 text-stone-900 hover:text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                            >
                              <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform duration-300" /> Sepete Ekle
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Floating Modern Cart Summary */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:w-auto min-w-[320px] bg-stone-900 text-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-3 flex items-center justify-between z-50 border border-stone-800/50 backdrop-blur-xl"
          >
            <div className="flex items-center gap-5 pl-4">
              <div className="relative">
                <ShoppingBag className="w-6 h-6 text-orange-500" />
                <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full shadow-sm">{cartCount}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Sipariş Toplamı</span>
                <span className="font-black text-xl">{cartTotal.toLocaleString('tr-TR')} ₺</span>
              </div>
            </div>
            <Link href="/restaurant/cart" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-[1.5rem] font-bold text-sm transition-all active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.4)] ml-8 flex items-center gap-2">
              Siparişi Tamamla <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .fallback-bg {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f5f4;
          color: #d6d3d1;
        }
      `}</style>
    </div>
  );
}
