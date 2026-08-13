"use client";

import { BeautyHeader } from '@/themes/beauty/components/BeautyHeader';
import { BeautyFooter } from '@/themes/beauty/components/BeautyFooter';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "/beauty/beauty_nails_1786272030225.jpg", alt: "Nail Art", style: "aspect-square" },
  { src: "/beauty/beauty_lashes_1786272039522.jpg", alt: "Lashes", style: "aspect-[3/4]" },
  { src: "/beauty/beauty_hero_1786272021657.jpg", alt: "Interior", style: "aspect-[4/3] md:col-span-2" },
  { src: "/beauty/beauty_makeup_1786272894523.jpg", alt: "Makeup", style: "aspect-[3/4]" },
  { src: "/beauty/beauty_spa_1786272048710.jpg", alt: "Spa", style: "aspect-square" },
  { src: "/beauty/beauty_team_1786273538820.jpg", alt: "Team", style: "aspect-video md:col-span-2" },
  { src: "/beauty/beauty_interior_detail_1786272904875.jpg", alt: "Details", style: "aspect-square md:col-span-2" },
];

export default function GaleriPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <BeautyHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-16 px-6 lg:px-8 bg-[#3E2B2B] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[#3E2B2B]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Sanat Galerimiz</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#FAF5F0] mb-6"
          >
            İlham <span className="italic text-[#D4A373]">Veren</span> Kareler
          </motion.h1>
        </div>
      </section>

      {/* Masonry-like Grid */}
      <section className="py-24 px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-min">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
              className={`relative group overflow-hidden ${image.style}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3E2B2B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <BeautyFooter />
    </main>
  );
}
