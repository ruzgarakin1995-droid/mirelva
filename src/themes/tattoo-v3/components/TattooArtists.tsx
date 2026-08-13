"use client";
import React from 'react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const artists = [
  {
    name: "Deniz Arslan",
    role: "Senior Sanatçı",
    style: "Traditional & Neo-Traditional",
    img: "/images/tattoo-v3/v3_artist_1_1786315271023.jpg"
  },
  {
    name: "Aslı Demir",
    role: "Uzman Sanatçı",
    style: "Fine Line & Minimalist",
    img: "/images/tattoo-v3/v3_artist_2_1786315279260.jpg"
  }
];

export function TattooArtists() {
  return (
    <section id="sanatcilar" className="py-24 bg-zinc-900 border-y border-white/5">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Ekibimiz</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Sanatçılarımız</h3>
          </div>
          <Link href="/test-tattoo-v3/sanatcilar" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">
            Tüm Ekibi Gör
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {artists.map((artist, i) => (
            <ScrollRevealChild key={i} variant="fade-up" className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-zinc-800">
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-red-600 font-bold text-xs uppercase tracking-widest mb-2">{artist.role}</p>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">{artist.name}</h4>
                  <p className="text-zinc-400 font-light text-sm">{artist.style}</p>
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>

        <ScrollReveal delay={0.4} className="mt-12 text-center md:hidden">
          <Link href="/test-tattoo-v3/sanatcilar" className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest border border-zinc-800 px-8 py-4 hover:border-red-600 transition-colors">
            Tüm Ekibi Gör
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
