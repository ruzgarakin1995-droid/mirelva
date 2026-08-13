"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, Bookmark } from 'lucide-react';
import { useRealEstateWishlist } from '@/store/ecommerce/RealEstateWishlistContext';

export function RealEstateHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { wishlistCount } = useRealEstateWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-[#f5f5f0]/90 backdrop-blur-xl border-b border-[#1a1a1a]/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-6">
          <button className={`md:hidden transition-colors ${scrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
          
          <Link href="/test-real-estate" className="group">
             <span className={`text-2xl font-normal tracking-tight ${scrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`}>
               AURA<span className="font-serif italic text-[#1a1a1a]/60">Estates</span>
             </span>
          </Link>
        </div>

         {/* Middle: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
           {[
             { label: 'Öne Çıkanlar', href: '/test-real-estate/featured' },
             { label: 'Satılık', href: '/test-real-estate/sale' },
             { label: 'Kiralık', href: '/test-real-estate/rent' },
             { label: 'Projeler', href: '/test-real-estate/projects' },
             { label: 'Mimarlar', href: '/test-real-estate/architects' }
           ].map((item, i) => (
             <Link key={i} href={item.href} className="text-sm font-medium text-[#1a1a1a]/60 hover:text-[#1a1a1a] transition-colors relative group">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-300 group-hover:w-full"></span>
             </Link>
           ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
           <button className={`transition-colors p-2 ${scrolled ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]'}`}>
             <Search size={20} strokeWidth={1.5} />
           </button>
           
           <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity">
             <Bookmark size={18} strokeWidth={1.5} className={wishlistCount > 0 ? "fill-[#1a1a1a]" : ""} />
             <span>Favoriler ({wishlistCount})</span>
           </button>
           
           <a 
             href="mailto:info@auraestates.com.tr" 
             className="bg-[#1a1a1a] text-[#f5f5f0] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
           >
             Danışmanla Görüş
           </a>
        </div>

      </div>
    </header>
  );
}
