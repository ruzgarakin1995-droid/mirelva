"use client";
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export default function VideoTour() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal 
          variant="scale"
          className="relative h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1470&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Video thumbnail" />
          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:bg-[var(--accent)] group-hover:border-transparent transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
              <Play className="text-white translate-x-1" size={40} fill="currentColor" />
            </div>
          </div>
          
          <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 text-white">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Göktürk Orman Villaları</h2>
            <p className="text-lg font-medium opacity-90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Sanal Turu Başlat
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


