"use client";

import { motion } from 'framer-motion';

export function SalonGalleryHome() {
  const images = [
    "/salon/nail_hero_bg_1786239167194.jpg",
    "/salon/nail_manicure_service_1786239176905.jpg",
    "/salon/nail_art_gold_1786239186528.jpg",
    "/salon/nail_gallery_hands_1786239195280.jpg"
  ];

  return (
    <section className="py-32 bg-[#FCFBF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
            <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Koleksiyon</span>
            <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A403F]">
            İlham <span className="italic text-[#D4A3A3] font-light">Panosu.</span>
          </h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative h-[300px] md:h-[624px] overflow-hidden bg-[#F0EBE6] group"
          >
            <img src={images[0]} alt="Nail Art 1" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] overflow-hidden bg-[#F0EBE6] group"
          >
            <img src={images[1]} alt="Nail Art 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[300px] overflow-hidden bg-[#F0EBE6] group"
          >
            <img src={images[2]} alt="Nail Art 3" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-2 relative h-[300px] overflow-hidden bg-[#F0EBE6] group flex items-center justify-center p-8 text-center"
          >
            {/* Call to action block instead of image for the last spot */}
            <div className="absolute inset-0 bg-[#E0B6B6]/10"></div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="font-serif text-2xl text-[#4A403F] mb-4">Daha fazlası için Instagram'da bizi takip edin.</span>
              <a href="#" className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#D4A3A3] border-b border-[#D4A3A3] pb-1 hover:text-[#4A403F] hover:border-[#4A403F] transition-colors">
                @LuminaNailArt
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
