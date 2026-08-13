"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Heart, User, Menu, Phone, HelpCircle, Monitor, Smartphone, Headphones, Laptop, Gamepad2, Home } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { useWishlist } from '@/store/ecommerce/WishlistContext';

export function TechHeader() {
  const { cartCount, setCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-slate-900 sticky top-0 z-40 shadow-md">
      {/* Top Bar */}
      <div className="border-b border-slate-200 hidden md:block text-xs font-medium text-slate-600">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={14} /> 0850 123 45 67</span>
            <span className="flex items-center gap-1"><HelpCircle size={14} /> Destek Merkezi</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/test-ecommerce-v2/order-tracking" className="hover:text-blue-600 transition-colors">Sipariş Takibi</Link>
            <Link href="/test-ecommerce-v2/stores" className="hover:text-blue-600 transition-colors">Mağazalarımız</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
            <Link href="/test-ecommerce-v2" className="text-3xl flex items-center gap-2 drop-shadow-md">
              <Monitor size={28} className="text-blue-500" />
              <span className="font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-blue-600">TEKNOEMO</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              placeholder="Ürün, marka veya kategori arayın..." 
              className="w-full bg-slate-100 border border-slate-200 text-slate-900 rounded-lg py-2.5 pl-4 pr-12 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 text-slate-400 hover:text-blue-600 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
              <Search size={20} className="text-white" />
            </button>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/test-ecommerce-v2/account" className="hidden md:flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
              <User size={22} />
              <span className="text-[10px] font-medium">Hesabım</span>
            </Link>
            
            <Link href="/test-ecommerce-v2/wishlist" className="relative flex flex-col items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors">
              <Heart size={22} />
              <span className="hidden md:block text-[10px] font-medium">Favoriler</span>
              {wishlistCount > 0 && (
                <span className="absolute -top-1 right-0 md:right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            
            <button onClick={() => setCartOpen(true)} className="relative flex flex-col items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
              <ShoppingCart size={22} />
              <span className="hidden md:block text-[10px] font-medium">Sepetim</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Nav (Desktop) */}
      <nav className="hidden md:block border-t border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-8 h-12">
          <Link href="/test-ecommerce-v2/shop?category=bilgisayar" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Laptop size={16} /> Bilgisayar & Laptop
          </Link>
          <Link href="/test-ecommerce-v2/shop?category=telefon" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Smartphone size={16} /> Telefonlar
          </Link>
          <Link href="/test-ecommerce-v2/shop?category=ses" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Headphones size={16} /> Ses Sistemleri
          </Link>
          <Link href="/test-ecommerce-v2/shop?category=oyun" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Gamepad2 size={16} /> Gaming
          </Link>
          <Link href="/test-ecommerce-v2/shop?category=akilli-ev" className="flex items-center gap-2 text-sm font-semibold hover:text-blue-600 transition-colors">
            <Home size={16} /> Akıllı Ev
          </Link>
          <span className="flex-1"></span>
          <Link href="/test-ecommerce-v2/shop?category=indirim" className="text-sm font-bold text-red-400 hover:text-red-300 transition-colors">
            Flaş Fırsatlar
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white p-4 space-y-4">
          <input 
            type="text" 
            placeholder="Arama yap..." 
            className="w-full bg-slate-100 border border-slate-200 text-slate-900 rounded-lg p-3 focus:outline-none focus:border-blue-500"
          />
          <nav className="flex flex-col gap-4 pt-2">
            <Link href="/test-ecommerce-v2/shop?category=bilgisayar" className="flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-blue-600"><Laptop size={18} /></div>
              Bilgisayar
            </Link>
            <Link href="/test-ecommerce-v2/shop?category=telefon" className="flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-blue-600"><Smartphone size={18} /></div>
              Telefonlar
            </Link>
            <Link href="/test-ecommerce-v2/shop?category=ses" className="flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-blue-600"><Headphones size={18} /></div>
              Ses & Kulaklık
            </Link>
            <Link href="/test-ecommerce-v2/shop?category=oyun" className="flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-blue-600"><Gamepad2 size={18} /></div>
              Gaming
            </Link>
            <Link href="/test-ecommerce-v2/shop?category=akilli-ev" className="flex items-center gap-3 font-medium">
              <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-blue-600"><Home size={18} /></div>
              Akıllı Ev
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
