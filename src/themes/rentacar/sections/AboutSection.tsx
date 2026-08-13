"use client";
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="slide-right" className="relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1470&auto=format&fit=crop" alt="About Us" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-amber-600 p-8 rounded-sm max-w-xs hidden md:block">
              <h4 className="text-4xl font-bold text-white mb-2">15+</h4>
              <p className="text-amber-50 font-medium">Yıllık VIP VIP Sektör Deneyimi</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up">
            <span className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4 block">Hakkımızda</span>
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              <TextReveal text="Mükemmelliğin Standardize Edilmiş Hali" highlightedWords={["Standardize"]} highlightClassName="font-bold" />
            </h2>
            <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
              Kurulduğumuz günden bu yana, beklentilerin ötesinde bir hizmet anlayışıyla VIP kiralama sektörüne yön veriyoruz. Amacımız sadece bir araç kiralama hizmeti sunmak değil; prestij, güvenlik ve kusursuz konforu bir araya getiren unutulmaz bir yolculuk deneyimi yaşatmaktır.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Özel Protokol ve VIP Karşılama Standartları",
                "Periyodik Bakımları Eksiksiz Yapılan Ultra Lüks Filo",
                "İleri Sürüş ve Güvenlik Eğitimli Profesyonel Şžoförler",
                "Kişiselleştirilmiş Seyahat Planlaması ve Konsiyerj"
              ].map((item, index) => (
                <li key={index} className="flex items-center text-zinc-300">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="border-b-2 border-amber-500 text-amber-500 hover:text-white hover:border-white pb-1 transition-all duration-300 font-medium uppercase tracking-wider text-sm">
              Hikayemizi Keşfedin
            </button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

