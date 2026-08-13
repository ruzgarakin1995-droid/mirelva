"use client";
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "ECU Yazılımı",
    description: "Maksimum güç çıkışı için yakıt ve ateşleme haritalarını optimize eden özel yazılım modifikasyonu.",
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Stage 1", "Stage 2", "Özel"]
  },
  {
    title: "Şanzıman Tuning",
    description: "Daha hızlı vites geçişleri, artırılmış tork limitleri ve optimize edilmiş vites noktaları için TCU yazılımları.",
    image: "https://images.unsplash.com/photo-1611016186353-9af24d5b2bc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["DSG", "ZF", "PDK"]
  },
  {
    title: "Egzoz Sistemleri",
    description: "Yüksek akışlı downpipe'lar, özel titanyum egzozlar ve kumandalı susturucu sistemleri.",
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Titanyum", "Paslanmaz", "Özel"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-neutral-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">
            Sunduğumuz <span className="text-red-500">Hizmetler</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto transform skew-x-[-20deg]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative h-[500px] overflow-hidden rounded-xl"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black uppercase italic mb-3 text-white">{service.title}</h3>
                  <p className="text-neutral-300 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {service.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-400 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
