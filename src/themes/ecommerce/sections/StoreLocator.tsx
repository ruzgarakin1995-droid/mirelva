"use client";

import React from 'react';

export default function StoreLocator() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Mağazalarımızı Ziyaret Edin</h2>
            <p className="text-gray-500 font-light mb-10 leading-relaxed">
              Özel koleksiyonlarımızı yakından deneyimlemek ve stil danışmanlarımızdan kişiye özel hizmet almak için sizi butiklerimize bekliyoruz.
            </p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-black pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nişantaşı Flagship</h3>
                <p className="text-gray-500 text-sm font-light mb-1">Abdi İpekçi Cad. No: 45, Şişli, İstanbul</p>
                <p className="text-gray-500 text-sm font-light">Pzt - Cmt: 10:00 - 20:00</p>
              </div>
              <div className="border-l-2 border-gray-200 pl-6 hover:border-black transition-colors cursor-pointer">
                <h3 className="text-lg font-medium text-gray-900 mb-2">İstinyePark</h3>
                <p className="text-gray-500 text-sm font-light mb-1">Pınar Mah. Katar Cad. No: 73, Sarıyer, İstanbul</p>
                <p className="text-gray-500 text-sm font-light">Her Gün: 10:00 - 22:00</p>
              </div>
            </div>
            
            <button className="mt-10 inline-block text-sm uppercase tracking-widest font-medium border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Tüm Mağazaları Gör
            </button>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative h-[600px] bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" 
                alt="Mağaza" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

