"use client";

import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Elena Rostova', role: 'Baş Mimar', image: '/arch_interior.jpg' }, // reusing images for visual consistency as requested
  { name: 'Marcus Chen', role: 'İç Mimari Direktörü', image: '/arch_exterior.jpg' },
  { name: 'David Adjaye', role: 'Ortak, Master Planlama', image: '/arch_hero.jpg' }
];

export default function Team() {
  return (
    <section className="bg-white text-black py-32 px-6 md:px-12" id="team">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/50 mb-4">Liderlik</p>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter">Stüdyo.</h2>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm">
            <p className="text-black/60 text-sm">
              Ekibimiz, mimari mükemmeliyete olan eşsiz bağlılık etrafında birleşmiş, farklı geçmişlerden gelen vizyonerlerden oluşmaktadır.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-widest text-black/50">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


