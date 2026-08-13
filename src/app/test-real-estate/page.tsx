"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { realEstateProperties } from '@/lib/mock-data/ecommerce/realestate';
import { PropertyCard } from '@/components/ecommerce/realestate/PropertyCard';

import { SplitHero } from '@/components/ecommerce/realestate/SplitHero';

export default function RealEstateHome() {
  const containerRef = useRef<HTMLDivElement>(null);

  const featuredProperties = realEstateProperties.slice(0, 4);

  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <SplitHero />

      {/* About / Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-[#f5f5f0] relative z-20 border-b border-[#1a1a1a]/10">
         <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-normal tracking-tight text-[#1a1a1a] leading-tight mb-8"
            >
              "Mimari mükemmellik sadece yapılar inşa etmek değil, <br className="hidden md:block" />
              <span className="font-serif italic text-[#1a1a1a]/60">yaşamın ta kendisini tasarlamaktır.</span>"
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#1a1a1a]/70 text-lg max-w-2xl font-medium mb-24"
            >
              AURA, dünyanın en seçkin lokasyonlarında yer alan, sadece estetik değil aynı zamanda yaşam kalitesini zirveye taşıyan özel mülkleri sizlerle buluşturur.
            </motion.p>
            
            {/* Minimal Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full pt-16 border-t border-[#1a1a1a]/10">
               {[
                 { value: '$2B+', label: 'Global Satış Hacmi' },
                 { value: '150+', label: 'Özel Portföy Mülk' },
                 { value: '12', label: 'Uluslararası Ofis' },
                 { value: '24/7', label: 'Özel Danışmanlık' }
               ].map((stat, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: i * 0.1 }}
                   className="flex flex-col items-center gap-2"
                 >
                   <span className="text-4xl md:text-5xl font-light text-[#1a1a1a] tracking-tighter">{stat.value}</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]/50">{stat.label}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Expertise / Services */}
      <section className="py-24 px-6 md:px-12 bg-[#f5f5f0] relative z-20 border-b border-[#1a1a1a]/10">
         <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
               {[
                 { title: 'Lüks Konut', desc: 'Dünyanın en prestijli adreslerinde benzersiz villalar ve özel mimari tasarımlı evler.' },
                 { title: 'Ticari Yatırım', desc: 'Yüksek getiri potansiyelli, şehrin kalbinde stratejik ticari gayrimenkuller.' },
                 { title: 'Özel Danışmanlık', desc: 'Sadece size özel, gizlilik politikalarına tam uyumlu kapalı portföy danışmanlığı.' }
               ].map((service, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.6, delay: i * 0.1 }}
                   className="flex flex-col gap-4 border-l border-[#1a1a1a]/20 pl-6"
                 >
                    <h3 className="text-xl font-bold uppercase tracking-widest text-[#1a1a1a]">{service.title}</h3>
                    <p className="text-[#1a1a1a]/60 font-medium leading-relaxed">{service.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-[#f5f5f0] relative z-20 overflow-hidden">
         <div className="max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
               <h2 className="text-3xl md:text-5xl font-normal tracking-tight">Global <span className="font-serif italic text-[#f5f5f0]/50">Ağımız</span></h2>
               <p className="text-sm uppercase tracking-widest font-bold text-[#f5f5f0]/40">Dünyanın Başkentleri</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
               {['İstanbul', 'Bodrum', 'İzmir', 'Antalya'].map((city, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8, delay: i * 0.1 }}
                   className="group relative aspect-square overflow-hidden cursor-pointer"
                 >
                   <div className="absolute inset-0 bg-[#f5f5f0]/5 group-hover:bg-transparent transition-colors z-10" />
                   <img src={`/images/realestate/${['villa', 'penthouse', 'brutalist', 'seaside'][i]}.jpg`} alt={city} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out" />
                   <div className="absolute bottom-6 left-6 z-20">
                     <h3 className="text-xl md:text-2xl font-normal tracking-tight text-white">{city}</h3>
                   </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 px-6 md:px-12 bg-[#f5f5f0] relative z-20">
         <div className="max-w-[1600px] mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8 }}
               >
                 <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-[#1a1a1a] mb-4">
                   Öne Çıkan <br/><span className="font-serif italic text-[#1a1a1a]/60">Projeler</span>
                 </h2>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.8 }}
               >
                 <Link href="/test-real-estate/properties" className="text-sm font-bold uppercase tracking-widest text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:text-[#1a1a1a]/60 hover:border-[#1a1a1a]/60 transition-all">
                   Tümünü Gör
                 </Link>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
              {featuredProperties.map((property, index) => (
                <div key={property.id} className={index % 2 !== 0 ? 'md:mt-32' : ''}>
                  <PropertyCard property={property} index={index} />
                </div>
              ))}
            </div>

         </div>
      </section>
      {/* Architectural Spotlight */}
      <section className="py-0 relative z-20 bg-[#1a1a1a] flex flex-col lg:flex-row min-h-[80vh]">
         <div className="lg:w-1/2 relative overflow-hidden h-[50vh] lg:h-auto">
           <motion.img 
             initial={{ scale: 1.1 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: "easeOut" }}
             src="/images/realestate/penthouse.jpg" 
             alt="Spotlight" 
             className="absolute inset-0 w-full h-full object-cover"
           />
         </div>
         <div className="lg:w-1/2 flex items-center justify-center p-12 lg:p-24 text-[#f5f5f0]">
            <div className="max-w-xl">
               <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00] mb-8 block">Mimari Odağımız</span>
               <h2 className="text-4xl md:text-5xl font-normal tracking-tight mb-8">
                 Sınırları <span className="font-serif italic text-[#f5f5f0]/60">Aşan</span><br/>Tasarımlar
               </h2>
               <p className="text-[#f5f5f0]/70 text-lg leading-relaxed mb-12 font-medium">
                 Modernizm ve brutalizmin kesiştiği noktada, ışığın ve gölgenin dansıyla şekillenen yapılar. Sadece bir ev değil, sanatsal bir beyan arayanlar için kürate edilmiş özel koleksiyonumuz, standartların çok ötesinde bir yaşam vadediyor.
               </p>
               <Link href="/test-real-estate/properties" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest font-bold hover:text-[#ccff00] transition-colors">
                 Özel Koleksiyonu İncele <ArrowRight size={18} />
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
