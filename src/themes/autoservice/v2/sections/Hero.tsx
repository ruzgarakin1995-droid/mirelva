"use client";
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2940&auto=format&fit=crop" 
          alt="Premium Detailing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium mb-8 border border-slate-200 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Klinik Temizlik, Kusursuz Detay</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8"
        >
          Otomobiliniz İçin <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Laboratuvar Hassasiyeti
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Gelişmiş teknoloji, premium ürünler ve sertifikalı uzmanlarla aracınızı fabrikadan çıktığı ilk güne döndürüyoruz.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg">
            Randevu Al
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-lg border border-slate-200 shadow-sm">
            Hizmetlerimizi Keşfet
          </button>
        </motion.div>
      </div>
    </section>
  );
}
