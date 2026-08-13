"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, ShoppingBasket, MapPin, Menu, User, PhoneCall, ChevronDown, X } from 'lucide-react';
import { useCart } from '@/store/ecommerce/CartContext';
import { Price } from '@/components/ecommerce/shared/Price';

export function GroceryHeader() {
  const router = useRouter();
  const { cartCount, subtotal, setCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Kadıköy, İstanbul');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
       router.push(`/test-ecommerce-v3/shop?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm border-b border-slate-200">
      
      {/* Top Banner */}
      <div className="bg-emerald-600 text-white text-[11px] md:text-xs font-medium py-1.5 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="hidden md:inline-flex items-center gap-1"><PhoneCall size={12}/> Sipariş Hattı: 444 1 444</span>
          <span>1500₺ üzeri alışverişlerde kargo bedava!</span>
        </div>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline">Mağazalarımız</Link>
          <Link href="#" className="hover:underline">Yardım</Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-3 md:gap-4 shrink-0">
          <button className="md:hidden p-1 text-slate-500">
            <Menu size={24} />
          </button>
          <Link href="/test-ecommerce-v3" className="flex items-center gap-2 text-2xl font-black text-emerald-600 tracking-tight">
            <ShoppingBasket size={28} className="hidden md:block" />
            TAZE
          </Link>
        </div>

        {/* Location Selector (Desktop) */}
        <button 
           onClick={() => setLocationModalOpen(true)}
           className="hidden lg:flex items-center gap-2 bg-slate-100 hover:bg-slate-200 transition-colors rounded-full px-4 py-2 shrink-0"
        >
          <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
            <MapPin size={16} />
          </div>
          <div className="text-left">
            <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">Teslimat Adresi</span>
            <span className="block text-sm font-bold text-slate-800 flex items-center gap-1">
              {selectedLocation} <ChevronDown size={14}/>
            </span>
          </div>
        </button>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Ürün, kategori veya marka ara..." 
            className="w-full bg-slate-100 border-2 border-transparent focus:border-emerald-500 focus:bg-white rounded-full py-2.5 md:py-3 pl-5 pr-14 text-sm font-medium transition-colors outline-none"
          />
          <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
            <Search size={18} />
          </button>
        </form>

        {/* User Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/test-ecommerce-v3/account" className="hidden md:flex flex-col items-center gap-1 text-slate-600 hover:text-emerald-600 font-medium px-2">
            <User size={24} strokeWidth={1.5} />
            <span className="text-[11px]">Giriş Yap</span>
          </Link>

          {/* Cart Button */}
          <button 
            onClick={() => setCartOpen(true)}
            className="flex items-center gap-3 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full px-2 py-1 md:px-4 md:py-2 transition-colors"
          >
            <div className="relative">
              <ShoppingBasket size={24} className="text-emerald-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="hidden md:block text-left">
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Sepetim</span>
              <Price amount={subtotal} className="text-sm text-emerald-700" />
            </div>
          </button>
        </div>
      </div>

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
              <button onClick={() => setLocationModalOpen(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full">
                 <X size={20} />
              </button>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                 <MapPin className="text-emerald-500" /> Teslimat Adresi Seçin
              </h2>
              <div className="space-y-3">
                 {['Kadıköy, İstanbul', 'Beşiktaş, İstanbul', 'Şişli, İstanbul', 'Çankaya, Ankara', 'Konak, İzmir'].map(loc => (
                   <button 
                      key={loc}
                      onClick={() => {
                         setSelectedLocation(loc);
                         setLocationModalOpen(false);
                      }}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-colors ${selectedLocation === loc ? 'border-emerald-500 bg-emerald-50 font-bold text-emerald-800' : 'border-slate-100 hover:border-emerald-200 text-slate-700 font-medium'}`}
                   >
                     {loc}
                   </button>
                 ))}
              </div>
           </div>
        </div>
      )}
    </header>
  );
}
