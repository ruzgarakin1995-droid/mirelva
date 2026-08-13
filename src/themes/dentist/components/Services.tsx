"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';

const services = [
 {
 title: "Implant Tedavisi",
 description: "Eksik dişlerinizi, doğal kök görevi gören implantlarla kalıcı olarak tamamlıyoruz.",
 image: "/dismekan_implant.jpg",
 href: "/test-dentist/tedaviler/implant-tedavisi"
 },
 {
 title: "Immediate İmplant Uygulaması",
 description: "Diş çekimi ile aynı gün içerisinde implant yerleştirilmesini sağlayan hızlı tedavi.",
 image: "/dismekan_immediate.jpg",
 href: "/test-dentist/tedaviler/immediate-implant-uygulamasi"
 },
 {
 title: "Gülüş Tasarımı",
 description: "Yüz hatlarınıza en uygun, estetik ve doğal bir gülüş için kişiye özel tasarım.",
 image: "/dismekan_smile.jpg",
 href: "/test-dentist/tedaviler/gulus-tasarimi"
 },
 {
 title: "Zirkonyum Tedavisi",
 description: "Mükemmel ışık geçirgenliği ile doğal diş görünümü sağlayan metal desteksiz kaplamalar.",
 image: "/dismekan_zirconium.jpg",
 href: "/test-dentist/tedaviler/zirkonyum-tedavisi"
 },
 {
 title: "Veneer Porselen Diş Kaplama Tedavisi",
 description: "Diş yüzeyindeki estetik kusurları kapatmak için uygulanan porselen yaprak kaplamalar.",
 image: "/dismekan_veneer.jpg",
 href: "/test-dentist/tedaviler/veneer-porselen-dis-kaplama-tedavisi"
 },
 {
 title: "E-Max Diş Tedavisi",
 description: "Üstün estetik sonuçlar sunan, güçlendirilmiş tam seramik diş restorasyonları.",
 image: "/dismekan_emax.jpg",
 href: "/test-dentist/tedaviler/e-max-dis-tedavisi"
 },
 {
 title: "Protez ve Dolgu Tedavisi",
 description: "Diş kayıplarını ve çürükleri estetik materyallerle onaran tedavi yöntemleri.",
 image: "/dismekan_implant.jpg",
 href: "/test-dentist/tedaviler/protez-ve-dolgu-tedavisi"
 },
 {
 title: "Bonding ve Diş Beyazlatma Tedavisi",
 description: "Diş rengini açma ve küçük şekil bozukluklarını düzeltme işlemleri.",
 image: "/dismekan_smile.jpg",
 href: "/test-dentist/tedaviler/bonding-ve-dis-beyazlatma-tedavisi"
 },
 {
 title: "All On Four İmplant Tekniği",
 description: "Tam dişsiz hastalarda tek günde sabit protez imkanı sunan modern implant konsepti.",
 image: "/dismekan_immediate.jpg",
 href: "/test-dentist/tedaviler/all-on-four-implant-teknigi"
 },
 {
 title: "Metal Altyapılı Porselen Diş Kaplama",
 description: "Dayanıklılığı ile bilinen, ekonomik ve uzun ömürlü klasik kaplama tedavisi.",
 image: "/dismekan_zirconium.jpg",
 href: "/test-dentist/tedaviler/metal-altyapili-porselen-dis-kaplama"
 }
];

export function Services({ limit }: { limit?: number }) {
  const displayedServices = limit ? services.slice(0, limit) : services;
 return (
 <section id="tedaviler" className="py-24 bg-[#FAFAFA]">
 <div className="max-w-7xl mx-auto px-6">
 
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
 <div>
 <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] uppercase text-[#D4C9C3] mb-4 block">
 Tedavilerimiz
 </span>
 <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">
 Kişiye Özel Tedaviler
 </h2>
 </div>
 <div className="hidden md:block">
 <MagneticButton variant="light" className="border border-[#1A1A1A]/10">
 Tümünü İncele
 </MagneticButton>
 </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {displayedServices.map((service, idx) => (
 <Link href={service.href} key={idx} className="group cursor-pointer flex flex-col block">
 <motion.div 
 className="flex flex-col h-full"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
 >
 {/* Image Container with Mask Reveal effect on hover */}
 <div className="relative overflow-hidden w-full aspect-[3/4] mb-8 bg-[#1A1A1A]/5">
 <motion.div 
 className="absolute inset-0 bg-[#D4C9C3] z-10 origin-bottom"
 initial={{ scaleY: 1 }}
 whileInView={{ scaleY: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 1.2, delay: 0.2 + idx * 0.2, ease: [0.76, 0, 0.24, 1] }}
 />
 <img 
 src={service.image} 
 alt={service.title}
 className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-105 "
 />
 </div>

 <div className="flex flex-col flex-1">
 <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4 group-hover:text-[#D4C9C3] transition-colors duration-500">
 {service.title}
 </h3>
 <p className="text-[#1A1A1A]/60 font-sans font-light leading-relaxed mb-6">
 {service.description}
 </p>
 
 <div className="mt-auto">
 <span className="text-xs font-sans tracking-widest uppercase text-[#1A1A1A] relative inline-block overflow-hidden pb-1">
 <span className="block transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:-translate-y-full">
 Detaylı Bilgi
 </span>
 <span className="absolute inset-0 transition-transform duration-500 ease-[0.16,1,0.3,1] translate-y-full group-hover:translate-y-0 text-[#D4C9C3]">
 Detaylı Bilgi
 </span>
 <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1A1A1A]/20" />
 <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4C9C3] transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-full" />
 </span>
 </div>
 </div>
 </motion.div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 );
}
