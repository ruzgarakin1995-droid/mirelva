"use client";

import React from 'react';

const categories = [
  { id: 1, name: 'Giyim', subtitle: 'Zarafeti Üzerinizde Taşıyın', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80' },
  { id: 2, name: 'Aksesuarlar', subtitle: 'Detaylardaki Gizem', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80' },
  { id: 3, name: 'Çantalar', subtitle: 'Modern Dokunuşlar', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80' }
];

export default function FeaturedCategories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Öne Çıkan Kategoriler</h2>
          <p className="text-gray-500 font-light tracking-wide">Tarzınızı yansıtacak eşsiz parçaları keşfedin.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="group relative h-[600px] overflow-hidden cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-white/80 text-xs uppercase tracking-widest mb-2">{cat.subtitle}</p>
                <h3 className="text-white text-2xl font-serif">{cat.name}</h3>
                <div className="mt-4 w-12 h-[1px] bg-white transition-all duration-300 group-hover:w-24"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

