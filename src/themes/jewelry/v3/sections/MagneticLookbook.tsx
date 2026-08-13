'use client';
import React from 'react';

export default function MagneticLookbook() {
  return (
    <section className="py-24 bg-black border-t border-gold-thin">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-5xl text-white mb-4">Göz Alıcı <span className="shimmer-text">Görünümler</span></h2>
            <p className="text-gray-400 font-light max-w-md">Sezonun en iddialı parçalarıyla hazırlanan özel seçkimiz.</p>
          </div>
          <button className="text-[#d4af37] font-display uppercase tracking-widest text-sm border-b border-[#d4af37] mt-8 md:mt-0 hover:text-white transition-colors">
            Tüm Lookbook
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1589697554907-f38b0be6bb1d?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1602752250014-411a003f0b27?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=500&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=500&auto=format&fit=crop"
          ].map((imgUrl, i) => (
            <div key={i} className="img-zoom-container h-[400px] border border-[#1a1a1a]">
              <img 
                src={imgUrl} 
                alt={`Look ${i + 1}`} 
                className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
