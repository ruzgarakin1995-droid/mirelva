"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const showcaseItems = [
  { id: 1, img: '/emtech-assets/product_1.jpg', brand: 'APPLE', title: 'iPhone 16 Pro Ekran' },
  { id: 2, img: '/emtech-assets/pro_2.png', brand: 'SAMSUNG', title: 'S23 Ultra Batarya' },
  { id: 3, img: '/emtech-assets/cover_screen-1.jpg', brand: 'CMP PLUS', title: 'Kusursuz Renkler' },
  { id: 4, img: '/emtech-assets/pro_4.jpg', brand: 'KBS', title: 'Premium Bileşenler' },
  { id: 5, img: '/emtech-assets/pro_5.jpg', brand: 'FLEX', title: 'Orijinal Soketler' },
];

export function EmtechShowcase() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Öne Çıkanlar ]</h2>
            <h3 className="text-4xl md:text-5xl font-space font-black text-white uppercase tracking-tighter">
              VİTRİN ÜRÜNLERİ
            </h3>
          </div>
          <p className="text-zinc-400 font-inter text-sm max-w-sm mt-4 md:mt-0">
            En çok tercih edilen, yüksek performanslı premium yedek parçalarımız. Kaydırarak inceleyin.
          </p>
        </div>

        {/* CSS Scroll Snap Container instead of JS animations to improve performance */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {showcaseItems.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={item.id} 
              className="min-w-[280px] md:min-w-[360px] aspect-[4/5] bg-zinc-900 border border-zinc-800 p-6 flex flex-col justify-between relative group snap-center cursor-pointer hover:border-[#0055FF] transition-colors"
            >
              <div className="relative z-10 flex justify-between items-start w-full">
                <span className="px-3 py-1 bg-white/10 text-white font-mono text-[10px] tracking-widest">{item.brand}</span>
              </div>
              
              <div className="absolute inset-0 m-6 mb-24 mt-20 relative mix-blend-screen opacity-80 group-hover:opacity-100 transition-opacity flex-1">
                <Image src={item.img} alt={item.title} fill className="object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              <div className="relative z-10">
                <h4 className="font-space font-bold text-xl text-white uppercase">{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
