"use client";

import React from "react";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 relative h-[500px] md:h-[700px] w-full"
          >
             <div className="absolute inset-0 bg-zinc-900 border border-white/10 overflow-hidden rounded-sm">
                <motion.div 
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376710356-6186fd000c25?auto=format&fit=crop&q=80')" }}
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-white/10 z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gray-500" />
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Köklü Mirasımız</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              ON YILLIK BİR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">MÜKEMMELİYET.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed mb-10">
              <p>
                Otomotiv mühendisliğine duyulan sarsılmaz bir tutkuyla kurulan AeroMotors, seçkin otomobil tutkunlarının bir numaralı adresi haline gelmiştir.
              </p>
              <p>
                Biz sadece otomobil satmıyoruz; koleksiyonlara yön veriyor, güçlü bağlar kuruyor ve galerimizdeki araçlar kadar kusursuz bir sahiplik deneyimi sunuyoruz.
              </p>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1">Kur. 2010</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Kuruluş</div>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white tracking-tighter mb-1">Küresel</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Erişim</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


