
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-3">Neden Biz?</h2>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Sağlığınız İçin En İyisini İstiyoruz</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hastalarımızın konforu ve sağlığı bizim için her şeyden önce gelir. Gelişmiş tıbbi donanımımız ve hasta odaklı yaklaşımımızla fark yaratıyoruz.
            </p>
            <ul className="space-y-4">
              {[
                "7/24 Kesintisiz Acil Servis",
                "Online Randevu ve Sonuç Görüntüleme",
                "Ferah ve Aydınlık Hasta Odaları",
                "Kişiye Özel Tedavi Planları",
                "Uluslararası Akreditasyon"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" alt="Servis" className="rounded-3xl shadow-xl shadow-blue-100/40 w-full h-[600px] object-cover" />
            <div className="absolute -bottom-8 -left-8 bg-white backdrop-blur-2xl bg-white/90 p-6 rounded-3xl shadow-xl shadow-blue-100/50 border border-blue-50/50 max-w-xs">
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-700 font-medium">Hasta Memnuniyeti Oranı ve Başarılı Tedavi Süreçleri</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
