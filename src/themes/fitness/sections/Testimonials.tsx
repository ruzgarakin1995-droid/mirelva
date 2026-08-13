"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Testimonials() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] tracking-tighter pointer-events-none uppercase">
        Sonuçlar
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black tracking-tighter">BAŞARI HİKAYELERİ</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "David Chen", text: "Buradaki ortam sizi daha iyi olmaya itiyor. Antrenörler sıradanlıkla yetinmenize izin vermiyor." },
            { name: "Emma Watson", text: "Sadece bir spor salonu değil, burası bir sığınak. Toparlanma alanları yoğun HIIT antrenmanlarından sonra tam da ihtiyacım olan şey." },
            { name: "James Miller", text: "Vücudumu ve zihniyetimi tamamen değiştirdi. Buradaki topluluk karşılıklı mükemmellik üzerine kurulu." }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-black border border-white/10 relative"
            >
              <span className="text-6xl text-cyan-400/20 font-serif absolute top-4 left-4">"</span>
              <p className="text-gray-300 font-light relative z-10 mb-8 italic">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-800 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop')" }} />
                <div>
                  <h4 className="font-bold uppercase tracking-wider">{t.name}</h4>
                  <div className="text-cyan-400 text-xs">'23'ten beri üye</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

