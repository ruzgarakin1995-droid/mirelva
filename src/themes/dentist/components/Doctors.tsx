"use client";

import React from 'react';
import { motion } from 'framer-motion';

const doctors = [
 {
 name: "Dt. Mizgin Aydın",
 role: "Diş Hekimi",
 image: "/lumina_dr_aylin.jpg"
 },
 {
 name: "Mustafa Bildirici",
 role: "Diş Hekimi",
 image: "/lumina_dr_caner.jpg"
 },
 {
 name: "Uzm. Dt. Simge Diren Esener",
 role: "Ortodonti Uzmanı",
 image: "/dismekan_dr_simge.jpg"
 },
 {
 name: "Uzm. Dt. İbrahim Murat Afat",
 role: "Ağız Diş Çene Cerrahisi Uzmanı",
 image: "/dismekan_dr_ibrahim.jpg"
 },
 {
 name: "Dt. Alper Kabakçı",
 role: "Diş Hekimi",
 image: "/dismekan_dr_alper.jpg"
 }
];

export function Doctors({ limit, theme = 'dark' }: { limit?: number, theme?: 'dark' | 'light' }) {
  const displayedDoctors = limit ? doctors.slice(0, limit) : doctors;
  const isLight = theme === 'light';

 return (
 <section className={`py-32 ${isLight ? 'bg-[#FAFAFA] text-[#1A1A1A]' : 'bg-[#1A1A1A] text-[#FAFAFA]'}`}>
 <div className="max-w-7xl mx-auto px-6">
 
 <div className="text-center mb-24">
 <span className={`text-xs font-sans tracking-[0.3em] uppercase mb-4 block ${isLight ? 'text-[#1A1A1A]/40' : 'text-[#D4C9C3]'}`}>
 Uzman Kadro
 </span>
 <h2 className="text-4xl md:text-5xl font-serif">
 Sanatkarlarımız
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-center">
 {displayedDoctors.map((doc, idx) => (
 <motion.div 
 key={idx}
 className="group cursor-pointer"
 initial={{ opacity: 0, y: 50 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 1, delay: idx * 0.3, ease: [0.16, 1, 0.3, 1] }}
 >
 <div className={`aspect-[3/4] overflow-hidden mb-8 relative ${isLight ? 'bg-[#1A1A1A]/5' : 'bg-[#FAFAFA]/5'}`}>
 <img 
 src={doc.image} 
 alt={doc.name} 
 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-[#1A1A1A]/20 group-hover:bg-transparent transition-colors duration-700" />
 </div>
 
 <div className={`flex flex-col items-center border-b pb-6 ${isLight ? 'border-[#1A1A1A]/10' : 'border-[#FAFAFA]/10'}`}>
 <h3 className={`text-3xl font-serif mb-2 ${isLight ? 'text-[#1A1A1A]' : 'text-[#FAFAFA]'}`}>{doc.name}</h3>
 <p className={`font-sans text-sm tracking-widest uppercase ${isLight ? 'text-[#1A1A1A]/60' : 'text-[#D4C9C3]'}`}>{doc.role}</p>
 </div>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
}
