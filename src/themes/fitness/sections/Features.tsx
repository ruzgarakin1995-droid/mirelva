"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Heart, Zap, Shield } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Biyo-Takip', desc: 'Her kalp atışınızı ve yaktığınız kaloriyi izlemek için son teknoloji giyilebilir cihaz entegrasyonu.' },
  { icon: Heart, title: 'Toparlanma Alanı', desc: 'Optimum dinlenme için kriyoterapi, kızılötesi saunalar ve kompresyon terapisi.' },
  { icon: Zap, title: 'Yüksek Enerji', desc: 'Adrenalininizi zirvede tutacak özel müzik listeleri ve dinamik aydınlatma.' },
  { icon: Shield, title: 'Elit Antrenörler', desc: 'Başarınıza adanmış olimpiyat sporcuları ve sertifikalı usta antrenörler.' },
];

export function Features() {
  return (
    <section className="py-24 bg-zinc-950 text-white border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-black hover:border-cyan-400/50 transition-colors group"
            >
              <f.icon className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{f.title}</h3>
              <p className="text-gray-500 font-light leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

