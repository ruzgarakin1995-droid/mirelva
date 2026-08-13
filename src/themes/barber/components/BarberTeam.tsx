"use client";

import { motion } from 'framer-motion';

const team = [
  {
    name: "Arthur Pendelton",
    role: "Master Barber / Kurucu",
    image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "James Sterling",
    role: "Klasik Kesim Üstadı",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Oliver Vance",
    role: "Sakal & Bakım Uzmanı",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop"
  }
];

export function BarberTeam() {
  return (
    <section id="ekibimiz" className="py-32 bg-[#2A2522]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
            >
              Ekibimiz
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl font-serif text-[#F8F7F5]"
            >
              Usta <span className="italic text-[#C1A68D] font-light">Eller.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans font-light text-[#F8F7F5]/60 max-w-sm text-sm"
          >
            Yılların getirdiği tecrübe ve bitmek bilmeyen mükemmeliyet tutkusu. Tanışın.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#1A1A1A]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 sepia-[0.3]"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#2A2522]/0 group-hover:bg-[#2A2522]/20 transition-colors duration-500" />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-serif text-[#F8F7F5] mb-2">{member.name}</h3>
                <p className="text-xs font-sans tracking-widest uppercase text-[#C1A68D]">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
