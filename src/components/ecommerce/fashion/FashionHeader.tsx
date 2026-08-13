"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Heart, User, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/store/ecommerce/CartContext';
import { useWishlist } from '@/store/ecommerce/WishlistContext';

export function FashionHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();
  const { wishlistCount } = useWishlist();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/test-ecommerce';

  return (
    <>
      <div className="bg-zinc-950 text-zinc-300 text-[10px] md:text-xs py-2 px-4 uppercase tracking-widest font-medium flex justify-between items-center z-50 relative">
        <div className="hidden md:flex items-center gap-4">
           <button className="hover:text-white transition-colors flex items-center gap-1"><Globe size={12}/> TR</button>
           <button className="hover:text-white transition-colors">TRY (₺)</button>
        </div>
        <div className="flex-1 text-center">
           SS'26 KOLEKSİYONU YAYINDA. 2000 ₺ ÜZERİ ÜCRETSİZ KARGO.
        </div>
        <div className="hidden md:flex items-center gap-4">
           <Link href="/test-ecommerce/contact" className="hover:text-white transition-colors">MAĞAZALAR</Link>
           <Link href="/test-ecommerce/support" className="hover:text-white transition-colors">DESTEK</Link>
        </div>
      </div>
      
      <header className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled || !isHome || isSearchOpen ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm' : 'bg-transparent text-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} className={(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'} />
            </button>

            {/* Logo */}
            <Link href="/test-ecommerce" className={`text-3xl font-black tracking-tighter transition-colors ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
              LOCİZSA<span className="font-light">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 h-full">
              <Link href="/test-ecommerce/shop?category=yeni-gelenler" className={`text-sm tracking-wide font-medium hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
                YENİ GELENLER
              </Link>
              
              <div className="relative group h-full flex items-center">
                <button className={`flex items-center gap-1 text-sm tracking-wide font-medium transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
                  KADIN <ChevronDown size={14} className="opacity-50" />
                </button>
                {/* Mega Menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-white border border-zinc-100 shadow-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 flex">
                  <div className="flex-1 p-10 grid grid-cols-2 gap-8 text-zinc-900">
                     <div>
                        <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-500 mb-6">Koleksiyonlar</h4>
                        <ul className="space-y-4 text-sm font-medium">
                           <li><Link href="/test-ecommerce/shop?category=kadin" className="hover:text-zinc-500 transition-colors">Tüm Kadın Ürünleri</Link></li>
                           <li><Link href="/test-ecommerce/shop?category=kadin" className="hover:text-zinc-500 transition-colors">Yaz Koleksiyonu</Link></li>
                           <li><Link href="/test-ecommerce/shop?category=kadin" className="hover:text-zinc-500 transition-colors">Premium Essentials</Link></li>
                        </ul>
                     </div>
                     <div>
                        <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-500 mb-6">Kategoriler</h4>
                        <ul className="space-y-4 text-sm font-medium">
                           <li><Link href="/test-ecommerce/shop?category=elbise" className="hover:text-zinc-500 transition-colors">Elbiseler</Link></li>
                           <li><Link href="/test-ecommerce/shop?category=ayakkabi" className="hover:text-zinc-500 transition-colors">Ayakkabı</Link></li>
                           <li><Link href="/test-ecommerce/shop?category=canta" className="hover:text-zinc-500 transition-colors">Çanta ve Aksesuar</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="w-1/3 bg-zinc-50 p-6 relative overflow-hidden group/image">
                     <img src="/images/fashion/megamenu.jpg" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105" alt="Kadın Koleksiyonu" />
                     <div className="absolute inset-0 bg-black/20" />
                     <div className="absolute bottom-6 left-6 text-white">
                        <span className="text-xl font-bold">Zarif.</span>
                        <p className="text-xs mt-1 font-medium opacity-90">Keşfetmeye Başla &rarr;</p>
                     </div>
                  </div>
                </div>
              </div>

              <Link href="/test-ecommerce/shop?category=erkek" className={`text-sm tracking-wide font-medium hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
                ERKEK
              </Link>
              <Link href="/test-ecommerce/shop?category=indirim" className={`text-sm tracking-wide font-bold hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-red-400' : 'text-red-600'}`}>
                SALE
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-1 hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}
              >
                {isSearchOpen ? <X size={22} strokeWidth={1.5} /> : <Search size={22} strokeWidth={1.5} />}
              </button>
              <Link href="/test-ecommerce/account" className={`hidden md:block p-1 hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
                <User size={22} strokeWidth={1.5} />
              </Link>
              <Link href="/test-ecommerce/wishlist" className={`relative p-1 hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}>
                <Heart size={22} strokeWidth={1.5} />
                {wishlistCount > 0 && (
                  <span className="absolute top-0 -right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button 
                className={`relative p-1 hover:opacity-70 transition-opacity ${(!isScrolled && isHome && !isSearchOpen) ? 'text-white' : 'text-zinc-900'}`}
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-0 -right-1 w-4 h-4 bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center rounded-full border border-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search Expanding Bar */}
        <AnimatePresence>
           {isSearchOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden bg-white border-t border-zinc-100"
              >
                 <div className="max-w-3xl mx-auto px-4 py-8">
                    <div className="relative">
                       <Search size={24} className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400" strokeWidth={1.5} />
                       <input 
                         type="text" 
                         placeholder="Ne arıyorsunuz?" 
                         className="w-full text-2xl font-light text-zinc-900 bg-transparent border-b-2 border-zinc-200 py-4 pl-10 focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-300"
                         autoFocus
                       />
                    </div>
                    <div className="mt-8 flex gap-4 text-sm font-medium text-zinc-500">
                       <span>Popüler Aramalar:</span>
                       <Link href="/test-ecommerce/shop?category=elbise" className="text-zinc-900 hover:underline">Siyah Elbise</Link>
                       <Link href="/test-ecommerce/shop?category=canta" className="text-zinc-900 hover:underline">Deri Çanta</Link>
                       <Link href="/test-ecommerce/shop?category=yeni-gelenler" className="text-zinc-900 hover:underline">SS'26</Link>
                    </div>
                 </div>
              </motion.div>
           )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b border-zinc-100">
                <span className="text-2xl font-black tracking-tighter">LOCİZSA.</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-8">
                <div className="space-y-6">
                  <Link href="/test-ecommerce/shop?category=yeni-gelenler" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl tracking-wide font-light text-zinc-900">YENİ GELENLER</Link>
                  <Link href="/test-ecommerce/shop?category=kadin" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl tracking-wide font-light text-zinc-900">KADIN</Link>
                  <Link href="/test-ecommerce/shop?category=erkek" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl tracking-wide font-light text-zinc-900">ERKEK</Link>
                  <Link href="/test-ecommerce/shop?category=indirim" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl tracking-wide font-bold text-red-600">İNDİRİM</Link>
                </div>
              </div>
              <div className="p-6 border-t border-zinc-100 bg-zinc-50 space-y-4">
                <Link href="/test-ecommerce/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-zinc-900 font-medium tracking-wide">
                  <User size={20} strokeWidth={1.5} /> HESABIM
                </Link>
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 text-xs font-bold text-zinc-500">
                   <span>TR / ₺</span>
                   <span>YARDIM</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}