"use client";
import React from 'react';
import Link from 'next/link';
import { ScrollReveal, ScrollRevealChild } from '@/components/animations/ScrollReveal';

const gallery = [
  "/images/tattoo-v3/v3_gallery_1_1786315287427.jpg",
  "/images/tattoo-v3/v3_gallery_2_1786315294323.jpg",
  "/images/tattoo-v3/v3_style_realism_1786315239782.jpg",
  "/images/tattoo-v3/v3_style_trad_1786315247182.jpg",
  "/images/tattoo-v3/v3_style_fine_1786315262164.jpg",
  "/images/tattoo-v3/v3_style_black_1786315254883.jpg"
];

export function TattooGallery() {
  return (
    <section id="galeri" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <ScrollReveal variant="fade-up" className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold text-red-600 tracking-[0.2em] uppercase mb-4">Son İşlerimiz</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Portfolyo</h3>
          </div>
          <Link href="/test-tattoo-v3/iletisim" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors">
            İletişim & Randevu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>

        <ScrollReveal staggerChildren={true} staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {gallery.map((img, i) => (
            <ScrollRevealChild key={i} variant="scale" className="group relative aspect-square overflow-hidden bg-zinc-900 cursor-pointer">
              <img 
                src={img} 
                alt={`Tattoo Portfolio ${i + 1}`} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </span>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
