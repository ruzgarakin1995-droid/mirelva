"use client";

import { motion } from 'framer-motion';

export function SalonArtistsHome() {
  const artists = [
    {
      name: "Elara M.",
      role: "Lead Nail Artist",
      img: "/salon/nail_artist_1_1786239286448.jpg"
    },
    {
      name: "Sienna K.",
      role: "Nail Care Specialist",
      img: "/salon/nail_artist_2_1786239295843.jpg"
    }
  ];

  return (
    <section className="py-32 bg-[#FCFBF9] text-[#4A403F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-8 h-[1px] bg-[#D4A3A3]"></div>
              <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Sanatçılarımız</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Usta <span className="italic text-[#D4A3A3] font-light">Eller.</span>
            </h2>
          </div>
          <p className="font-sans font-light text-sm text-[#4A403F]/60 max-w-sm leading-relaxed">
            Tutkuyla çalışan ödüllü sanatçılarımız, her tırnağı bir sanat eserine dönüştürmek için burada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {artists.map((artist, i) => (
            <motion.div 
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group cursor-pointer flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative w-full md:w-1/2 h-[400px] overflow-hidden bg-[#F0EBE6]">
                <img 
                  src={artist.img} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-serif text-[#4A403F] mb-2">{artist.name}</h3>
                <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-[#D4A3A3] mb-6">{artist.role}</span>
                <p className="font-sans font-light text-sm text-[#4A403F]/60 leading-relaxed mb-8">
                  Yılların tecrübesi ve mikro detaylara olan tutkusu ile tırnak sağlığını ön planda tutan benzersiz tasarımlara imza atıyor.
                </p>
                <button className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F] border-b border-[#4A403F]/30 pb-1 hover:border-[#D4A3A3] hover:text-[#D4A3A3] transition-colors">
                  Portfolyoyu Gör
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
