"use client";
import React from 'react';
import { ArrowRight, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    title: "Yüksek Getiri Potansiyeli",
    description: "Veri odaklı algoritmalarımız sayesinde optimum risk-getiri dengesini kurarak portföyünüzü büyütüyoruz."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
    title: "Sermaye Koruması",
    description: "Piyasa dalgalanmalarına karşı defansif stratejilerle ana paranızı güvende tutmayı hedefliyoruz."
  },
  {
    icon: <PieChart className="w-8 h-8 text-yellow-500" />,
    title: "Kapsamlı Çeşitlendirme",
    description: "Hisse senedi, tahvil, emtia ve alternatif yatırım fonlarıyla riskinizi tüm küresel piyasalara dağıtıyoruz."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="flex flex-col p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-yellow-500">
              <div className="mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">{feature.description}</p>
              <a href="#" className="inline-flex items-center text-blue-900 font-semibold hover:text-yellow-600 transition-colors min-h-[44px]">
                Daha Fazla Bilgi <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



