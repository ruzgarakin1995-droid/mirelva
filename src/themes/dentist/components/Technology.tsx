"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const technologies = [
 {
 title: "3D Intraoral Tarayıcılar",
 desc: "Ölçü kaşığı olmadan, saniyeler içinde ağız içinin yüksek çözünürlüklü dijital haritasını çıkarıyoruz."
 },
 {
 title: "Dijital Gülüş Tasarımı",
 desc: "Uygulama öncesinde, yüz hatlarınıza en uygun gülüşü bilgisayar ortamında tasarlıyor ve sonucunu önceden gösteriyoruz."
 },
 {
 title: "Dental Mikroskop",
 desc: "Kanal tedavisi ve hassas cerrahi işlemlerde, çıplak gözle görülemeyen detayları 25 kata kadar büyüterek sıfır hata ile çalışıyoruz."
 }
];

export function Technology() {
 const containerRef = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start end", "end start"]
 });

 const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

 return (
 <section ref={containerRef} className="py-32 bg-[#1A1A1A] text-[#FAFAFA] overflow-hidden">
 <div className="max-w-7xl mx-auto px-6">
 
 <div className="flex flex-col lg:flex-row gap-24 items-center">
 
 <div className="lg:w-1/2">
 <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#D4C9C3] mb-8 block">
 Dijital Diş Hekimliği
 </span>
 <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-12">
 Kusursuzluk İçin İleri Teknoloji
 </h2>
 
 <div className="space-y-12">
 {technologies.map((tech, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.8, delay: idx * 0.2 }}
 className="pl-6 border-l border-[#D4C9C3]/30 hover:border-[#D4C9C3] transition-colors duration-500"
 >
 <h3 className="text-xl font-serif text-[#FAFAFA] mb-3">{tech.title}</h3>
 <p className="text-[#FAFAFA]/50 font-sans font-light leading-relaxed">
 {tech.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </div>

 <div className="lg:w-1/2 relative w-full h-[600px] bg-[#FAFAFA]/5 overflow-hidden">
 <motion.img 
 style={{ y: imgY }}
 src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" 
 alt="Dental Technology"
 className="absolute inset-0 w-full h-[130%] object-cover opacity-80 "
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
 </div>

 </div>

 </div>
 </section>
 );
}
