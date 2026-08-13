"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Wind } from 'lucide-react';

export function InteriorSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
               <div className="absolute -inset-4 bg-cyan-50 rounded-[3rem] -z-10 transform -rotate-3"></div>
               <img src="/yacht_interior.jpg" alt="Yacht Interior" className="rounded-3xl shadow-2xl object-cover h-[500px] w-full" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full mb-6">
              <Wind size={16} />
              <span className="text-sm font-medium">Aydınlık Tasarım</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-blue-950 mb-6 leading-tight">
              Modern ve Ferah <br />Yaşam Alanları
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed mb-8 font-light">
              Geniş camlar, açık renk paletleri ve minimalist dokunuşlarla tasarlanmış iç mekanlar. 
              Denizin mavisini içeri alan, ruhunuzu dinlendirecek bir konfor alanı yarattık.
            </p>
            <ul className="space-y-4 mb-8">
              {['Panoramik Okyanus Manzarası', 'Özel Tasarım Mobilyalar', 'Akıllı İklimlendirme', 'Geniş Master Kabinler'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-blue-900">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}