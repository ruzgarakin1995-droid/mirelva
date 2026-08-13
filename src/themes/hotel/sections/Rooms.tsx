"use client";
import React from 'react';
import { motion } from 'framer-motion';

const rooms = [
  {
    title: "Deluxe Şehir Manzaralı",
    description: "Modern tasarım detayları ve tavandan tabana pencerelerle donatılmış, panoramik şehir manzarasına hakim konforlu odalar.",
    size: "45 m²",
    bed: "King Yatak",
    guests: "2 Yetişkin",
    image: "/hotel_room_1.jpg"
  },
  {
    title: "Premium Ocean Suite",
    description: "Özel terası ve nefes kesici okyanus manzarasıyla, lüksün sınırlarını yeniden çizen geniş yaşam alanları.",
    size: "85 m²",
    bed: "King Yatak",
    guests: "2 Yetişkin, 1 Çocuk",
    image: "/hotel_room_1.jpg"
  },
  {
    title: "Presidential Penthouse",
    description: "Otelin en üst katında yer alan, özel uşak hizmeti ve jakuzili terasıyla eşsiz bir konaklama deneyimi.",
    size: "150 m²",
    bed: "2 King Yatak",
    guests: "4 Yetişkin",
    image: "/hotel_room_1.jpg"
  }
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-[0.2em] text-[var(--accent)] uppercase mb-4"
          >
            Konaklama
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-[var(--primary)]"
          >
            Odalar & Süitler
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-24">
          {rooms.map((room, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-3/5 h-[400px] md:h-[600px] overflow-hidden relative group cursor-pointer">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={room.image} 
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="w-full lg:w-2/5">
                <h3 className="text-3xl font-serif mb-6">{room.title}</h3>
                <p className="text-[var(--muted)] text-lg font-light leading-relaxed mb-8">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 pb-10 border-b border-[var(--border)]">
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-1">Büyüklük</div>
                    <div className="text-[var(--primary)] font-medium">{room.size}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-1">Yatak</div>
                    <div className="text-[var(--primary)] font-medium">{room.bed}</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest text-[var(--muted)] uppercase mb-1">Kapasite</div>
                    <div className="text-[var(--primary)] font-medium">{room.guests}</div>
                  </div>
                </div>

                <button className="text-sm font-bold tracking-[0.2em] uppercase text-[var(--primary)] border-b border-[var(--primary)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all">
                  Detayları İncele
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

