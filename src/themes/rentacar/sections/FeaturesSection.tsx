"use client";
import React from 'react';
import { Shield, Clock, MapPin, Star } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Tam Kapsamlı Güvence",
      description: "VIP seyahatlerinizde maksimum güvenlik için premium kasko ve sigorta paketlerimizle yolculuk yapın."
    },
    {
      icon: <Clock className="w-8 h-8 text-amber-500" />,
      title: "7/24 Kesintisiz Hizmet",
      description: "Günün her saati, size özel atanmış müşteri temsilciniz ve operasyon ekibimiz hizmetinizdedir."
    },
    {
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      title: "İstenen Lokasyona Teslim",
      description: "Havalimanı, otel veya rezidansınız... Aracınızı istediğiniz noktaya eksiksiz teslim ediyoruz."
    },
    {
      icon: <Star className="w-8 h-8 text-amber-500" />,
      title: "Ayrıcalıklı Deneyim",
      description: "Her kiralama öncesi uygulanan özel sterilizasyon ve VIP ikramlarla standartların ötesine geçin."
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <ScrollRevealChild key={index} variant="fade-up" className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600/10 transition-colors duration-300 border border-zinc-800 group-hover:border-amber-500/50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zinc-100">{feature.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">
                {feature.description}
              </p>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;

