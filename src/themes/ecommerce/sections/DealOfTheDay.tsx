"use client";

import React, { useState, useEffect } from 'react';

export default function DealOfTheDay() {
  // Statik geri sayım görünümü
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-sm font-medium tracking-[0.3em] uppercase mb-4 text-gray-400">Günün Fırsatı</h2>
            <h3 className="text-4xl font-serif mb-6">Özel Üretim Saat Koleksiyonu</h3>
            <p className="text-gray-400 font-light mb-10 leading-relaxed max-w-md">
              Sınırlı sayıda üretilen bu eşsiz tasarım, sadece 24 saatliğine özel fiyatıyla sizlerle. Zamanın ötesinde bir şıklık için fırsatı kaçırmayın.
            </p>
            
            <div className="flex gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">08</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Saat</div>
              </div>
              <div className="text-3xl font-serif text-gray-600">:</div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">45</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Dakika</div>
              </div>
              <div className="text-3xl font-serif text-gray-600">:</div>
              <div className="text-center">
                <div className="text-3xl font-serif mb-1">22</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Saniye</div>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-2xl font-serif">âº14,500</div>
              <div className="text-lg font-serif text-gray-500 line-through">âº22,000</div>
            </div>
            
            <button className="mt-8 px-10 py-4 bg-white text-black text-sm font-medium uppercase tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Fırsatı Yakala
            </button>
          </div>
          
          <div className="order-1 md:order-2 relative h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80" 
              alt="Günün Fırsatı" 
              className="w-full h-full object-cover"
            />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white text-black rounded-full flex flex-col items-center justify-center shadow-2xl">
              <span className="text-xs font-medium uppercase tracking-wider">İndirim</span>
              <span className="text-xl font-bold">-%35</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

