"use client";
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Aylin Yılmaz",
    role: "Kurucu Ortak & Baş Mimar",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Caner Demir",
    role: "Kıdemli İç Mimar",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Elif Kaya",
    role: "Peyzaj Mimarı",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop"
  }
];

const Team = () => {
  return (
    <section className="py-32 bg-[#FDFBF7]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase mb-4 block">Ekibimiz</span>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
              Vizyoner <span className="italic font-serif">Yaratıcılar</span>
            </h2>
          </div>
          <p className="text-zinc-600 font-light max-w-lg leading-relaxed text-lg">
            Mimari mükemmellik, farklı disiplinlerden gelen uzmanların uyum içinde çalışmasıyla mümkün olur. Deneyimli ve tutkulu ekibimiz, her projeye benzersiz bir perspektif katar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden relative h-[500px] mb-6 backdrop-blur-2xl bg-white/30 p-2 border border-black/5 shadow-xl shadow-zinc-200/50 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-light text-zinc-900 mb-2">{member.name}</h3>
                <span className="text-sm font-medium tracking-wider text-amber-700 uppercase">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
