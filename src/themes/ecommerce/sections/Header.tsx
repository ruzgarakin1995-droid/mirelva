"use client";

import React from 'react';
import { Search, ShoppingBag, User, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-6">
            <button className="p-2 lg:hidden">
              <Menu className="w-5 h-5 text-gray-800" />
            </button>
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-wider">Koleksiyonlar</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-wider">Yeni Gelenler</a>
              <a href="#" className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors uppercase tracking-wider">Çantalar</a>
              <a href="#" className="text-sm font-medium text-red-700 hover:text-red-500 transition-colors uppercase tracking-wider">İndirim</a>
            </nav>
          </div>
          
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-serif tracking-widest font-bold text-black uppercase">Lumière</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-800 hover:text-gray-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-800 hover:text-gray-500 transition-colors hidden sm:block">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-800 hover:text-gray-500 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


