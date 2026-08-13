"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Aero GT 2026",
    price: "$285,000",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
    specs: ["V8 Çift Turbo", "720 BG", "0-100 km/s 2.8s"],
  },
  {
    id: 2,
    name: "Carbon Wraith",
    price: "$415,000",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80",
    specs: ["V12 Atmosferik", "810 BG", "0-100 km/s 2.6s"],
  },
  {
    id: 3,
    name: "Silver Shadow EV",
    price: "$195,000",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80",
    specs: ["Çift Motor AWD", "650 BG", "640km Menzil"],
  },
];

export function FeaturedCars() {
  return (
    <section id="collection" className="py-32 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-gray-500" />
              <span className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold">Seçkin Koleksiyon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Öne Çıkan Koleksiyon</h2>
          </div>
          <button className="text-sm uppercase tracking-widest text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
            Tüm Modelleri İnceleyin <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 rounded-sm mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <motion.img
                  src={car.image}
                  alt={car.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">{car.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{car.price}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {car.specs.map((spec) => (
                      <span key={spec} className="px-3 py-1 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-wider rounded-sm text-gray-300">
                        {spec}
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
}


