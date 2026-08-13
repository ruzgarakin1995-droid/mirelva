"use client";

import { LasisHeader } from '@/themes/lasis/components/LasisHeader';
import { LasisFooter } from '@/themes/lasis/components/LasisFooter';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop", alt: "Medikal Estetik", style: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop", alt: "Cilt Bakımı", style: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop", alt: "Klinik", style: "aspect-[4/3] md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop", alt: "Botoks", style: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop", alt: "Estetik", style: "aspect-square" },
  { src: "https://images.unsplash.com/photo-1550537687-c9a0b2c15a59?q=80&w=1000&auto=format&fit=crop", alt: "Doktor", style: "aspect-video md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop", alt: "Detaylar", style: "aspect-square md:col-span-2" },
];

export default function GaleriPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <LasisHeader />
      
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
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Kliniğimizden</span>
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

      <LasisFooter />
    </main>
  );
}
