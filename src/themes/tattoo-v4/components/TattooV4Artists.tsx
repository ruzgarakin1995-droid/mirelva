"use client";
import React from 'react';

const artists = [
  {
    name: 'Elif Kaya',
    role: 'Küratör & Sanatçı',
    image: '/themes/tattoo-v4/artist_1.jpg'
  },
  {
    name: 'Can Derin',
    role: 'Minimalist Sanatçı',
    image: '/themes/tattoo-v4/artist_2.jpg'
  }
];

export function TattooV4Artists() {
  return (
    <section id="sanatçılar" className="py-32 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Sanatçılarımız.</h2>
          <div className="h-[1px] w-12 bg-[#B59461] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 lg:gap-32">
          {artists.map((artist, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-8 mx-auto border-4 border-[#FAF9F6] shadow-xl group-hover:border-[#E5E0D8] transition-colors duration-500 relative">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#B59461]/0 group-hover:bg-[#B59461]/10 mix-blend-overlay transition-colors duration-500"></div>
              </div>
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{artist.name}</h3>
              <p className="text-[10px] tracking-[0.2em] text-[#8C8A84] uppercase">{artist.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
