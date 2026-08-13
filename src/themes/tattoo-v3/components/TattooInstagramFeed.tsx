"use client";
import React from 'react';

const feedItems = [
  { id: 1, image: '/images/tattoo-v3/v3_gallery_1_1786315287427.jpg' },
  { id: 2, image: '/images/tattoo-v3/v3_gallery_2_1786315294323.jpg' },
  { id: 3, image: '/images/tattoo-v3/v3_style_realism_1786315239782.jpg' },
  { id: 4, image: '/images/tattoo-v3/v3_style_trad_1786315247182.jpg' },
  { id: 5, image: '/images/tattoo-v3/v3_style_black_1786315254883.jpg' },
  { id: 6, image: '/images/tattoo-v3/v3_style_fine_1786315262164.jpg' },
  { id: 7, image: '/images/tattoo-v3/v3_artist_1_1786315271023.jpg' },
  { id: 8, image: '/images/tattoo-v3/v3_artist_2_1786315279260.jpg' },
];

export function TattooInstagramFeed() {
  return (
    <section className="bg-zinc-950">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 container mx-auto">
        <div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            Güncel <span className="text-red-600">İşler</span>
          </h2>
          <p className="text-zinc-400 font-light mt-1">@ironandink_tattoo</p>
        </div>
        <button className="mt-4 md:mt-0 px-6 py-3 bg-transparent border border-zinc-700 hover:border-red-600 hover:bg-red-600 text-white font-bold uppercase tracking-widest transition-all rounded-sm text-sm">
          Takip Et
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {feedItems.map((item) => (
          <a key={item.id} href="#" className="relative aspect-square group overflow-hidden block">
            <img 
              src={item.image} 
              alt={`Instagram post ${item.id}`} 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <div className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-bold text-sm">342</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
