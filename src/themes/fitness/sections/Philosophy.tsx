"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function Philosophy() {
  return (
    <section className="py-32 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-fuchsia-500 font-bold tracking-[0.2em] uppercase">Felsefemiz</h3>
            <h2 className="text-5xl font-black tracking-tighter leading-tight">BİR SPOR SALONUNDAN FAZLASI.<br />BU BİR YAŞAM TARZI.</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Bütünsel dönüşüme inanıyoruz. Bu sadece ağırlık kaldırmakla ilgili değil; zihninizi, bedeninizi ve ruhunuzu yüceltmekle ilgili. Ekosistemimiz, performansınızın her yönünü optimize etmek için tasarlandı.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-4xl font-black text-cyan-400 mb-2">24/7</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Erişim</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-fuchsia-500 mb-2">50+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wider">Haftalık Ders</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] border border-white/10 p-4"
          >
            <div className="absolute inset-4 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1470&auto=format&fit=crop')" }} />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-500/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

