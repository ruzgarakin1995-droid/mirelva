"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Check-Up Paketleri',
    price: 'â‚º2.500\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    features: ['Kapsamlı Kan Tahlili', 'EKG ve Efor Testi', 'Tüm Batın Ultrason', 'Uzman Hekim Değerlendirmesi']
  },
  {
    title: 'Estetik Cerrahi',
    price: 'Kişiye özel fiyatlandırma',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&auto=format&fit=crop',
    features: ['Burun Estetiği (Rinoplasti)', 'Meme Büyütme/Küçültme', 'Liposuction', 'Yüz Germe']
  },
  {
    title: 'Lazer Göz Tedavisi',
    price: 'â‚º15.000\'den başlayan fiyatlarla',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    features: ['No-Touch Laser', 'iLASIK', 'SMILE Lazer', 'Akıllı Lens Operasyonları']
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[var(--surface-alt)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-[var(--accent)] font-bold tracking-wider uppercase mb-3">Özel Hizmetler</div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)]">Öne Çıkan Paketlerimiz</h2>
          </div>
          <button className="px-6 py-3 rounded-full border-2 border-[var(--primary)] text-[var(--primary)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all whitespace-nowrap">
            Tüm Paketleri İncele
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[var(--border)] flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-sm font-bold px-3 py-1 rounded-full shadow-sm">
                  Popüler
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold mb-2">{svc.title}</h3>
                <div className="text-[var(--accent)] font-medium mb-6">{svc.price}</div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {svc.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-4 rounded-xl bg-[var(--surface-alt)] text-[var(--primary)] font-bold hover:bg-[var(--primary)] hover:text-white transition-all">
                  Bilgi Al
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


