"use client";
import React from 'react';
import { ArrowRight, Settings, Users, Briefcase } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const FleetSection = () => {
  const cars = [
    {
      name: "Mercedes-Benz S-Class",
      category: "First Class Sedan",
      price: "₺15.000 / Gün",
      specs: { seats: "4", luggage: "3", transmission: "Otomatik" },
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Rolls Royce Ghost",
      category: "Ultra Luxury",
      price: "₺45.000 / Gün",
      specs: { seats: "4", luggage: "2", transmission: "Otomatik" },
      img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Range Rover Autobiography",
      category: "Luxury SUV",
      price: "₺22.000 / Gün",
      specs: { seats: "5", luggage: "4", transmission: "Otomatik" },
      img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1470&auto=format&fit=crop" alt="Fleet Background" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal variant="fade-up" className="flex justify-between items-end mb-16">
          <div>
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-2 block">Prestijli Koleksiyon</span>
            <h2 className="text-4xl md:text-5xl font-light">
              <TextReveal text="Seçkin Filomuz" highlightedWords={["Filomuz"]} highlightClassName="font-bold" />
            </h2>
          </div>
          <button className="hidden md:flex items-center text-amber-500 hover:text-amber-400 transition-colors">
            Tüm Filoyu Görüntüle <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </ScrollReveal>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <ScrollRevealChild key={index} variant="fade-up" className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group hover:border-amber-500/50 transition-colors duration-300">
              <div className="h-64 bg-zinc-800 relative overflow-hidden">
                <img src={car.img} alt={car.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 right-4 bg-zinc-900/80 backdrop-blur-md px-4 py-2 rounded-sm border border-zinc-700">
                  <span className="text-amber-500 font-semibold">{car.price}</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-zinc-400 text-sm tracking-wider uppercase">{car.category}</span>
                <h3 className="text-2xl font-medium mt-2 mb-6">{car.name}</h3>
                <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-zinc-800">
                  <div className="flex flex-col items-center text-zinc-400">
                    <Users className="w-5 h-5 mb-2 text-amber-500" />
                    <span className="text-xs">{car.specs.seats} Kişi</span>
                  </div>
                  <div className="flex flex-col items-center text-zinc-400">
                    <Briefcase className="w-5 h-5 mb-2 text-amber-500" />
                    <span className="text-xs">{car.specs.luggage} Bavul</span>
                  </div>
                  <div className="flex flex-col items-center text-zinc-400">
                    <Settings className="w-5 h-5 mb-2 text-amber-500" />
                    <span className="text-xs">{car.specs.transmission}</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-zinc-900 text-white hover:bg-amber-600 transition-colors duration-300 rounded-sm font-medium">
                  Hemen Kirala
                </button>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FleetSection;

