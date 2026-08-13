"use client";

import React from 'react';

const brands = ['AURA', 'LUMINA', 'NOVA', 'CELESTE', 'VELVET', 'ECLIPSE'];

export default function BrandLogos() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="text-2xl font-serif tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

