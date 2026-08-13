"use client";
import React from 'react';

const gallery = [
  { img: "/themes/tattoo-v4/gal_1.jpg", title: "Micro Realism" },
  { img: "/themes/tattoo-v4/gal_2.jpg", title: "Botanical Illustration" },
  { img: "/themes/tattoo-v4/gal_3.jpg", title: "Fine Line Typography" },
  { img: "/themes/tattoo-v4/gal_4.jpg", title: "Minimalist Geometry" }
];

export function TattooV4Gallery() {
  return (
    <section id="portfolyo" className="py-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex justify-between items-end mb-20 border-b border-[#E5E0D8] pb-10">
          <div>
            <span className="text-[10px] text-[#B59461] tracking-[0.3em] uppercase block mb-4">Küratör Seçkisi</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Seçilmiş Eserler.</h2>
          </div>
          <button className="hidden md:inline-block text-xs font-medium text-[#1A1A1A] tracking-[0.2em] uppercase hover:text-[#B59461] transition-colors">
            Tüm Koleksiyonu Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {gallery.map((item, index) => (
            <div key={index} className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
              <div className="relative overflow-hidden bg-white mb-6 p-4 border border-[#E5E0D8] shadow-sm transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full aspect-[3/4] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <h3 className="font-serif text-lg text-[#1A1A1A] italic">{item.title}</h3>
                <span className="text-[10px] tracking-widest text-[#8C8A84] uppercase border border-[#E5E0D8] px-2 py-1">Detay</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
