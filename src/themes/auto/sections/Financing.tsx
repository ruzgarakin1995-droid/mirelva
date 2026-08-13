"use client";

import React from "react";
import { motion } from "framer-motion";

export function Financing() {
  return (
    <section className="py-32 bg-zinc-950 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-gray-500" />
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Kişiye Özel Çözümler</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Özel Finansman
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Bir şahesere sahip olmanın özel bir yaklaşım gerektirdiğinin bilincindeyiz. Uzman finans danışmanlarımız, varlık yönetimi stratejinizle uyumlu kişiselleştirilmiş kiralama ve finansman yapıları oluşturmak için gizlilik içinde çalışır.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Açık ve kapalı uçlu kiralama",
                "Kurumsal yapılandırma",
                "Portföy kredi düzenlemeleri",
                "Uluslararası satın alma desteği"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="px-8 py-4 bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors rounded-sm">
              Bir Danışmanla Görüşün
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full bg-zinc-900 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80')" }}
            />
            <div className="absolute bottom-10 left-10 z-20">
              <div className="text-6xl font-bold text-white mb-2 tracking-tighter">0%</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">Başlangıç APR</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


