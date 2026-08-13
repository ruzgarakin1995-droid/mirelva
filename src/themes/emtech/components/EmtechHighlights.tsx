"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Cpu, BatteryCharging, ShieldCheck, Zap } from 'lucide-react';

export function EmtechHighlights() {
  return (
    <section className="py-24 bg-white relative z-10 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Teknoloji & Donanım ]</h2>
          <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">
            Neden Bizi Tercih Etmelisiniz?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CMP Plus LCD Highlight */}
          <Link href="/emtech-store/kategori/cmp-plus-lcd" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 border border-zinc-200 p-8 md:p-12 flex flex-col group-hover:border-[#0055FF] transition-colors relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0055FF]/5 rounded-full blur-3xl group-hover:bg-[#0055FF]/10 transition-colors"></div>
              
              <div className="mb-8 relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-space font-black text-3xl uppercase text-zinc-900 group-hover:text-[#0055FF] transition-colors">CMP PLUS LCD</h4>
                  <p className="font-mono text-xs text-zinc-500 uppercase mt-2 tracking-widest">Üstün Görüntü Kalitesi</p>
                </div>
                <div className="w-12 h-12 bg-white border border-zinc-200 flex items-center justify-center rounded-lg shadow-sm">
                  <Cpu className="w-6 h-6 text-[#0055FF]" />
                </div>
              </div>

              <div className="flex-1 relative min-h-[300px] mb-8 z-10">
                <Image 
                  src="/emtech-assets/cover_screen-1.jpg" 
                  alt="CMP Plus LCD" 
                  fill 
                  className="object-contain mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-white p-4 border border-zinc-200 flex flex-col gap-2">
                  <ShieldCheck className="w-5 h-5 text-zinc-900" />
                  <span className="font-space font-bold text-sm text-zinc-900">Orijinal Renkler</span>
                  <span className="font-inter text-xs text-zinc-500">%100 Renk Kalibrasyonu</span>
                </div>
                <div className="bg-white p-4 border border-zinc-200 flex flex-col gap-2">
                  <Zap className="w-5 h-5 text-zinc-900" />
                  <span className="font-space font-bold text-sm text-zinc-900">Hassas Dokunmatik</span>
                  <span className="font-inter text-xs text-zinc-500">Gecikmesiz Tepkime Süresi</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Cartel Max Power Highlight */}
          <Link href="/emtech-store/kategori/cartel-max-power" className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-950 border border-zinc-900 p-8 md:p-12 flex flex-col group-hover:border-zinc-800 transition-colors relative overflow-hidden h-full"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
              
              <div className="mb-8 relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-space font-black text-3xl uppercase text-white group-hover:text-zinc-300 transition-colors">Cartel Max Power</h4>
                  <p className="font-mono text-xs text-zinc-400 uppercase mt-2 tracking-widest">Performans Hep Zirvede</p>
                </div>
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-lg shadow-sm">
                  <BatteryCharging className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="flex-1 relative min-h-[300px] mb-8 z-10">
                <Image 
                  src="/emtech-assets/pro_2.png" 
                  alt="Cartel Max Power Batarya" 
                  fill 
                  className="object-contain mix-blend-screen opacity-70 group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-zinc-900 p-4 border border-zinc-800 flex flex-col gap-2">
                  <Zap className="w-5 h-5 text-white" />
                  <span className="font-space font-bold text-sm text-white">Yüksek Kapasite</span>
                  <span className="font-inter text-xs text-zinc-400">Uzun Ömürlü Hücreler</span>
                </div>
                <div className="bg-zinc-900 p-4 border border-zinc-800 flex flex-col gap-2">
                  <ShieldCheck className="w-5 h-5 text-white" />
                  <span className="font-space font-bold text-sm text-white">Güvenlik Testi</span>
                  <span className="font-inter text-xs text-zinc-400">Laboratuvar Onaylı</span>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
