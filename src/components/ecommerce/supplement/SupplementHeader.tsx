"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ShoppingBag, Menu, User, Zap } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';

export function SupplementHeader() {
  const { cartCount, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-6">
          <button className="md:hidden text-white hover:text-[#ccff00] transition-colors">
            <Menu size={24} />
          </button>
          <Link href="/test-ecommerce-v4" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-[#ccff00] rounded flex items-center justify-center rotate-3 group-hover:-rotate-3 transition-transform duration-300">
               <Zap size={24} className="text-black" fill="currentColor" />
             </div>
             <span className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
               Vertex<br/><span className="text-[10px] tracking-[0.2em] text-[#ccff00] font-bold">Nutrition</span>
             </span>
          </Link>
        </div>

        {/* Middle: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
           {['Protein', 'Performans', 'Amino', 'Vitaminler'].map((item, i) => (
             <Link key={i} href={`/test-ecommerce-v4/shop?category=${item.toLowerCase()}`} className="text-sm font-bold text-white/70 hover:text-white uppercase tracking-widest relative group overflow-hidden">
                {item}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ccff00] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
             </Link>
           ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 md:gap-6">
           <button className="text-white hover:text-[#ccff00] transition-colors p-2 hidden sm:block">
             <Search size={20} />
           </button>
           <button className="text-white hover:text-[#ccff00] transition-colors p-2 hidden sm:block">
             <User size={20} />
           </button>
           
           <button 
             onClick={() => setCartOpen(true)}
             className="relative flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full pl-4 pr-2 py-1.5 transition-all group"
           >
             <span className="text-xs font-bold text-white tracking-widest uppercase">Sepet</span>
             <div className="w-8 h-8 rounded-full bg-[#ccff00] flex items-center justify-center text-black font-black text-sm group-hover:scale-110 transition-transform">
               {cartCount}
             </div>
           </button>
        </div>

      </div>
    </header>
  );
}
