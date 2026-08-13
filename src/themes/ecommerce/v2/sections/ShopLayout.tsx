"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, name: "Oversize Crop Ceket", price: 2499, category: "Giyim", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80", colors: ["Siyah", "Krem"] },
  { id: 2, name: "Relaxed Fit Kargo Pantolon", price: 1899, category: "Alt Giyim", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80", colors: ["Haki", "Siyah"] },
  { id: 3, name: "Premium Dokulu Triko", price: 1450, category: "Knitwear", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80", colors: ["Bej"] },
  { id: 4, name: "Deri Biker Ceket", price: 5900, category: "Dış Giyim", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80", colors: ["Siyah"] },
  { id: 5, name: "Basic Pamuklu T-Shirt", price: 499, category: "Giyim", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80", colors: ["Beyaz", "Siyah", "Gri"] },
  { id: 6, name: "Geniş Paça Jean", price: 1299, category: "Alt Giyim", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80", colors: ["Mavi", "Açık Mavi"] },
];

export function ShopLayout({ onAddToCart }: { onAddToCart: (p: any, size: string) => void }) {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const categories = ["Tümü", "Giyim", "Alt Giyim", "Dış Giyim", "Knitwear"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const filtered = PRODUCTS.filter(p => activeCategory === "Tümü" || p.category === activeCategory);

  return (
    <section className="max-w-[1920px] mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12">
      
      {/* Sidebar Filter */}
      <div className="w-full lg:w-64 shrink-0 space-y-12">
        <div>
          <h3 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-200 pb-4">Kategoriler</h3>
          <ul className="space-y-4 text-sm font-medium text-gray-500">
            {categories.map(c => (
              <li 
                key={c} 
                onClick={() => setActiveCategory(c)}
                className={`cursor-pointer transition-colors hover:text-black ${activeCategory === c ? 'text-black font-bold' : ''}`}
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-200 pb-4">Beden</h3>
          <div className="grid grid-cols-3 gap-2">
            {sizes.map(s => (
              <button key={s} className="border border-gray-200 py-2 text-xs font-semibold hover:border-black transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold uppercase">{activeCategory} <span className="text-gray-400 text-lg">({filtered.length})</span></h2>
          <select className="border-none outline-none font-medium text-sm bg-transparent cursor-pointer">
            <option>Önerilenler</option>
            <option>Fiyat (Artan)</option>
            <option>Fiyat (Azalan)</option>
            <option>En Yeniler</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map(product => (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={product.id} 
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Box */}
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                {/* Hover Add To Cart Overlay */}
                <div className={`absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md p-4 transition-transform duration-300 ${hoveredProduct === product.id ? 'translate-y-0' : 'translate-y-full'}`}>
                  <p className="text-xs font-bold uppercase tracking-widest text-center mb-3">Beden Seç</p>
                  <div className="flex justify-center gap-2">
                    {sizes.map(s => (
                      <button 
                        key={s}
                        onClick={(e) => { e.stopPropagation(); onAddToCart(product, s); }}
                        className="w-8 h-8 flex items-center justify-center border border-gray-300 hover:border-black hover:bg-black hover:text-white text-xs font-bold transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wide mb-1 group-hover:underline underline-offset-4">{product.name}</h3>
                  <div className="flex gap-2">
                    {product.colors.map(c => <span key={c} className="text-xs text-gray-500">{c}</span>)}
                  </div>
                </div>
                <span className="font-bold text-sm">{product.price.toLocaleString('tr-TR')} TL</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
