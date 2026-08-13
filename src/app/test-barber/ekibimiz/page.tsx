"use client";

import { motion } from 'framer-motion';
import { BarberHeader } from '@/themes/barber/components/BarberHeader';
import { BarberFooter } from '@/themes/barber/components/BarberFooter';

const teamData = [
  {
    name: "Alexander K.",
    role: "Master Barber & Kurucu",
    experience: "15 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Matteo R.",
    role: "Klasik Kesim Uzmanı",
    experience: "10 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Julian H.",
    role: "Renklendirme & Kimya",
    experience: "8 Yıl Tecrübe",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function TeamPage() {
  return (
    <>
      <BarberHeader />
      
      <main className="flex-1 flex flex-col pt-32 bg-[#F8F7F5] min-h-screen">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 w-full mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
          >
            Usta Eller
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#2A2522] leading-tight mb-8"
          >
            Sanatkarlar <span className="italic text-[#C1A68D] font-light">Kulübü.</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-2xl mx-auto text-[#2A2522]/60 font-sans font-light text-lg leading-relaxed"
          >
            Her biri kendi alanında ustalaşmış, vizyoner ve kusursuzluğa adanmış profesyonellerden oluşan ekibimizle tanışın.
          </motion.p>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto px-6 w-full pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamData.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col group cursor-pointer"
              >
                {/* Image Container with Hover Effect */}
                <div className="w-full aspect-[3/4] bg-[#2A2522] mb-6 overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-700 m-4 pointer-events-none"></div>
                </div>

                {/* Text Content */}
                <div className="text-center flex flex-col items-center">
                  <h3 className="text-3xl font-serif text-[#2A2522] mb-2 group-hover:text-[#C1A68D] transition-colors">{member.name}</h3>
                  <div className="w-8 h-[1px] bg-[#C1A68D] mb-4"></div>
                  <p className="text-sm font-sans tracking-widest uppercase text-[#2A2522]/80 mb-1">{member.role}</p>
                  <p className="text-xs font-sans font-light text-[#2A2522]/50 italic">{member.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <BarberFooter />
    </>
  );
}
