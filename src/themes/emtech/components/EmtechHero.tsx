"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';

export function EmtechHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center bg-white pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 overflow-hidden">
      
      {/* Neo-brutalist grid background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start relative z-20 mt-4 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-zinc-950 text-white border-2 border-zinc-950 mb-6 md:mb-8 shadow-[4px_4px_0px_#0055FF] md:shadow-[6px_6px_0px_#0055FF] rounded-sm"
          >
            <span className="w-2 md:w-2.5 h-2 md:h-2.5 bg-[#0055FF] animate-pulse rounded-full"></span>
            <span className="font-mono text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase">Yüksek Kalite, Üstün Performans</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[2.75rem] leading-[1] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-space font-black text-zinc-950 uppercase tracking-tighter md:leading-[0.85] mb-6"
          >
            MÜKEMMEL GÖRÜNTÜ <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-blue-400">KESİNTİSİZ</span> PERFORMANS
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-500 font-inter text-sm md:text-base lg:text-lg max-w-md leading-relaxed mb-8 md:mb-10"
          >
            A+ kalite, sıfır iade oranlı LCD ekranlar ve yüksek kapasiteli bataryalar. Güvenilir tedarik ağımız, avantajlı toptan fiyatlarımız ve anında stoktan teslimat garantisiyle.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto"
          >
            <Link href="/emtech-store/katalog" className="w-full sm:w-auto">
              <button className="h-14 px-8 w-full bg-[#0055FF] border-2 border-zinc-950 text-white font-space text-xs font-bold uppercase tracking-widest hover:bg-blue-700 rounded-sm flex items-center justify-center gap-3 shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
                Kataloğu İncele <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/emtech-store/kurumsal/bayimiz-ol" className="w-full sm:w-auto">
              <button className="h-14 px-8 w-full bg-white border-2 border-zinc-950 text-zinc-950 font-space text-xs font-bold uppercase tracking-widest hover:bg-zinc-50 rounded-sm flex items-center justify-center gap-3 shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
                Bayimiz Olun
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Composition */}
        <div className="w-full lg:w-1/2 h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] relative mt-16 lg:mt-0">
          
          {/* Main Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-[5%] right-[5%] w-[85%] h-[85%] md:top-[10%] md:h-[80%] bg-zinc-100 border-2 md:border-4 border-zinc-950 shadow-[8px_8px_0px_#0055FF] md:shadow-[16px_16px_0px_#0055FF] overflow-hidden z-10 rounded-sm"
          >
            <Image src="/emtech-assets/cover_screen-1.jpg" alt="Ekran" fill className="object-cover mix-blend-multiply opacity-90 scale-110 hover:scale-105 transition-transform duration-700" />
            
            {/* Inner aesthetic details */}
            <div className="absolute top-2 left-2 md:top-4 md:left-4 font-mono text-[8px] md:text-[10px] font-bold tracking-widest text-zinc-500 bg-white/80 px-2 py-1 border border-zinc-200">
              ID: EM-X09-ALPHA
            </div>
            <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 font-mono text-[8px] md:text-[10px] font-bold tracking-widest text-[#0055FF] bg-white/80 px-2 py-1 border border-zinc-200">
              CMP PLUS LCD
            </div>
          </motion.div>

          {/* Floating Element 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute top-[15%] md:top-1/4 left-0 md:-left-8 z-20 bg-white border-2 border-zinc-950 p-2.5 md:p-4 rounded-none shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] flex items-center gap-3 hover:-translate-y-2 transition-transform cursor-default scale-90 md:scale-100 origin-left"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white border-2 border-zinc-950 rounded-sm flex items-center justify-center">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-zinc-950" />
            </div>
            <div>
              <div className="font-space font-bold text-zinc-900 text-xs md:text-sm">Cartel Max Power</div>
              <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase mt-0.5">Ekstra Güç & Batarya</div>
            </div>
          </motion.div>

          {/* Floating Element 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[10%] md:bottom-1/4 right-0 md:-right-4 z-20 bg-white border-2 border-zinc-950 p-2.5 md:p-4 rounded-none shadow-[4px_4px_0px_#000] md:shadow-[8px_8px_0px_#000] flex items-center gap-3 hover:-translate-y-2 transition-transform cursor-default scale-90 md:scale-100 origin-right"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0055FF] border-2 border-zinc-950 rounded-sm flex items-center justify-center">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <div className="font-space font-bold text-zinc-900 text-xs md:text-sm">CMP Plus Lcd</div>
              <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 uppercase mt-0.5">%100 Orijinal Renk</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
