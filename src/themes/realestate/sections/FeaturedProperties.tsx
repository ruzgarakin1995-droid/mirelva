"use client";
import { motion } from 'framer-motion';
import { Bed, Bath, Square, MapPin, ArrowRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Bosphorus Yalı Dairesi",
      location: "Bebek, İstanbul",
      price: "12,500,000 â‚º",
      beds: 4,
      baths: 3,
      area: 320,
      image: "/realestate_property_1.jpg",
      tag: "Öne Çıkan"
    },
    {
      id: 2,
      title: "Orman Manzaralı Penthouse",
      location: "Göktürk, İstanbul",
      price: "8,250,000 â‚º",
      beds: 3,
      baths: 2,
      area: 210,
      image: "/realestate_hero.jpg", // Reusing hero just for placeholder visualization
      tag: "Yeni"
    }
  ];

  return (
    <section id="properties" className="py-32 px-6 md:px-12 bg-stone-50">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4">Seçkin Portföyümüz</h2>
            <h3 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter">
              <TextReveal text="İlham Veren Mülkler" highlightedWords={["İlham", "Veren"]} highlightClassName="text-[var(--accent)]" />
            </h3>
          </div>
          <button className="flex items-center gap-2 text-stone-900 font-bold tracking-widest uppercase hover:text-[var(--accent)] transition-colors group">
            Tüm İlanlar <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {properties.map((prop, i) => (
            <ScrollRevealChild 
              key={prop.id}
              variant="fade-up"
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={prop.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={prop.title} />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-stone-900">
                  {prop.tag}
                </div>
                <div className="absolute bottom-6 left-6 bg-[var(--accent)] text-white px-6 py-3 rounded-xl font-black text-xl shadow-lg">
                  {prop.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-stone-500 mb-4 font-medium">
                  <MapPin size={18} className="text-[var(--accent)]"/> {prop.location}
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-6">{prop.title}</h4>
                <div className="flex items-center gap-6 pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-stone-600 font-medium"><Bed size={20} className="text-stone-400"/> {prop.beds} Yatak O.</div>
                  <div className="flex items-center gap-2 text-stone-600 font-medium"><Bath size={20} className="text-stone-400"/> {prop.baths} Banyo</div>
                  <div className="flex items-center gap-2 text-stone-600 font-medium"><Square size={20} className="text-stone-400"/> {prop.area} m²</div>
                </div>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}


