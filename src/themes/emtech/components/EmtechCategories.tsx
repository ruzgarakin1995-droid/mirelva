"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cable } from 'lucide-react';

export function EmtechCategories() {
  return (
    <section className="py-24 bg-white relative z-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Ürün Grupları ]</h2>
            <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">Kategoriler</h3>
          </div>
          <button className="hidden md:block font-space text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-[#0055FF] transition-colors border-b border-zinc-500 hover:border-[#0055FF] pb-1">
            Tümünü Gör
          </button>
        </div>

        {/* Bento Grid: 4 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[500px]">
          
          {/* Large Left: 2 cols, 2 rows */}
          <Link href="/emtech-store/kategori/kbs-lcd" className="md:col-span-2 md:row-span-2 block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-8 flex flex-col justify-between relative overflow-hidden h-full border border-zinc-200 group-hover:border-[#0055FF] transition-colors min-h-[300px]"
            >
              <div className="relative z-10">
                <h3 className="font-space font-black text-3xl uppercase text-zinc-900 group-hover:text-[#0055FF] transition-colors">KBS<br/>Lcd</h3>
                <p className="mt-2 text-zinc-500 font-inter text-sm max-w-sm">En net görüntü ve hassas dokunmatik deneyim için tasarlanmış birinci sınıf ekranlar.</p>
                <div className="mt-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#0055FF] group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <Image src="/emtech-assets/cover_screen-1.jpg" alt="Ekranlar" fill className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </Link>

          {/* Right Top: 2 cols, 1 row */}
          <Link href="/emtech-store/kategori/cartel-max-power" className="md:col-span-2 md:row-span-1 block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-100 p-8 flex flex-col justify-between relative overflow-hidden h-full border border-zinc-200 group-hover:border-[#0055FF] transition-colors min-h-[200px]"
            >
              <div className="relative z-10">
                <h3 className="font-space font-black text-2xl uppercase text-zinc-900 group-hover:text-[#0055FF] transition-colors">Cartel Max<br/>Power</h3>
                <p className="mt-2 text-zinc-500 font-inter text-xs">Uzun ömürlü batarya ile performans hep zirvede...</p>
              </div>
              <Image src="/emtech-assets/pro_2.png" alt="Bataryalar" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider z-10 border border-zinc-200">
                Yeni Nesil
              </div>
            </motion.div>
          </Link>

          {/* Right Bottom Left: 1 col, 1 row */}
          <Link href="/emtech-store/kategori/cmp-plus-lcd" className="md:col-span-1 md:row-span-1 block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-950 p-6 flex flex-col justify-between relative overflow-hidden h-full border border-zinc-950 group-hover:border-[#0055FF] transition-colors min-h-[200px]"
            >
              <div className="relative z-10">
                <h3 className="font-space font-black text-xl uppercase text-white group-hover:text-[#0055FF] transition-colors">CMP Plus<br/>Lcd</h3>
              </div>
              <Image src="/emtech-assets/pro_3.jpg" alt="Bileşenler" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </Link>

          {/* Right Bottom Right: 1 col, 1 row */}
          <Link href="/emtech-store/kategori/kbs-batarya" className="md:col-span-1 md:row-span-1 block group">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-zinc-100 p-6 flex flex-col justify-between relative overflow-hidden h-full border border-zinc-200 group-hover:border-[#0055FF] transition-colors min-h-[200px]"
            >
              <div className="relative z-10">
                <h3 className="font-space font-black text-xl uppercase text-zinc-900 group-hover:text-[#0055FF] transition-colors">KBS<br/>Batarya</h3>
              </div>
              <Image src="/emtech-assets/pro_8.jpg" alt="Araçlar" fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
