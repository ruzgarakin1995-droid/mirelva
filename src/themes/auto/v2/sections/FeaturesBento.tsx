'use client';

import React from 'react';
import { motion } from 'framer-motion';

const bentoItems = [
  {
    title: "Aerodinamik",
    desc: "Dünyadaki en düşük sürtünme katsayısı.",
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  },
  {
    title: "Elektrikli Aktarma Organları",
    desc: "Eşsiz verimlilik.",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    title: "Otopilot",
    desc: "Sürüşün geleceği, bugün.",
    img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-1",
  },
  {
    title: "Güvenlik",
    desc: "Tüm standartları aşmak için tasarlandı.",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
  }
];

export default function FeaturesBento() {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-tight text-white mb-4">Mühendislik harikaları.</h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl">Her detayı üstün performans ve güvenlik için tasarlandı.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${item.colSpan}`}
            >
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
