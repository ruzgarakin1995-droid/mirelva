"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const newItems = [
  { id: 1, title: 'İpek Şal Koleksiyonu', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80' },
  { id: 2, title: 'Gece Elbiseleri', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80' },
  { id: 3, title: 'Özel Tasarım Çantalar', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80' }
];

export default function NewArrivals() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-serif mb-6 text-gray-900">Yeni Gelenler</h2>
            <p className="text-gray-500 font-light mb-8 leading-relaxed">
              En son moda trendleri ile tasarlanmış, zarafeti ve konforu bir arada sunan yeni sezon parçalarımızı yakından inceleyin. Her detayda ustalık yatıyor.
            </p>
            <a href="#" className="inline-flex items-center text-sm uppercase tracking-widest font-medium group">
              Tüm Yeni Ürünler 
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar">
              {newItems.map((item) => (
                <div key={item.id} className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
                  <div className="relative h-[450px] overflow-hidden bg-gray-100 mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-serif text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

