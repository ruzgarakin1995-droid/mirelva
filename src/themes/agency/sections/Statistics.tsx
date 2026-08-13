"use client";
import React from 'react';

const stats = [
  { value: '250+', label: 'Tamamlanan Proje' },
  { value: '40+', label: 'Global Ödül' },
  { value: '98%', label: 'Müşteri Memnuniyeti' },
  { value: '15', label: 'Yıllık Deneyim' },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-lime-400 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-6xl font-black mb-2">{stat.value}</span>
              <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



