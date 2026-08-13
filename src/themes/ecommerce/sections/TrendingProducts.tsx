"use client";

import React from 'react';
import { ShoppingBag, Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'Deri Çapraz Askılı Çanta', price: 'âº8,450', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', isNew: true },
  { id: 2, name: 'İpek Saten Elbise', price: 'âº12,900', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80', isNew: false },
  { id: 3, name: 'Klasik Trençkot', price: 'âº16,200', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80', isNew: false },
  { id: 4, name: 'Altın Kaplama Kolye', price: 'âº4,150', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', isNew: true }
];

export default function TrendingProducts() {
  return (
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-3">Trend Ürünler</h2>
            <p className="text-gray-500 font-light tracking-wide">Sezonun en çok arzulanan parçaları.</p>
          </div>
          <a href="#" className="hidden sm:inline-block text-sm uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">Tümünü İncele</a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative h-96 mb-6 overflow-hidden bg-gray-100">
                {product.isNew && (
                  <span className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] uppercase tracking-widest py-1 px-2">
                    Yeni
                  </span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-0 right-0 px-4 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="flex-1 bg-white text-black text-xs uppercase tracking-widest py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors">
                    <ShoppingBag className="w-4 h-4" /> Sepete Ekle
                  </button>
                  <button className="ml-2 bg-white text-black p-3 hover:bg-black hover:text-white transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
          <a href="#" className="inline-block text-sm uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-600 transition-colors">Tümünü İncele</a>
        </div>
      </div>
    </section>
  );
}

