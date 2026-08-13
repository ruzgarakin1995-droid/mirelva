"use client";

import React from 'react';

export default function Lookbook() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-4">Sezonun Görünümü</h2>
          <p className="text-gray-500 font-light tracking-wide">Stil danışmanlarımız tarafından seçilen kombinler.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 relative h-[700px]">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" 
              alt="Lookbook" 
              className="w-full h-full object-cover"
            />
            {/* Hotspot 1 */}
            <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer group">
              <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform"></div>
              <div className="absolute left-8 top-0 bg-white p-3 shadow-xl w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10">
                <p className="text-xs text-gray-500 mb-1">Gömlek</p>
                <p className="text-sm font-medium mb-1">İpek Saten Bluz</p>
                <p className="text-sm font-bold">âº4,200</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-8 bg-white p-8 lg:p-12">
            <div>
              <h3 className="text-2xl font-serif mb-4">Görünümü Satın Al</h3>
              <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
                Bu görünüm, modern şehir kadınının dinamik yaşantısına uyum sağlarken, zarafetinden ödün vermeyen bir stil sunuyor.
              </p>
            </div>
            
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-20 h-24 bg-gray-100 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80" alt="Ürün" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">Klasik Deri Çanta</h4>
                    <p className="text-sm text-gray-500 mt-1">âº8,450</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full py-4 border border-black text-sm font-medium uppercase tracking-widest hover:bg-black hover:text-white transition-colors mt-8">
              Kombini Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

