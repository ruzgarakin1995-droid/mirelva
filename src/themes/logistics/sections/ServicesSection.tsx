"use client";
import React from 'react';
import { Anchor, Plane, Truck, Package, Box, Globe2 } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const services = [
  { icon: Anchor, title: 'Denizyolu Taşımacılığı', desc: 'FCL ve LCL konteyner taşımacılığında güvenilir ve maliyet odaklı global çözümler.' },
  { icon: Plane, title: 'Havayolu Taşımacılığı', desc: 'Zaman kritik yükleriniz için dünya çapında ekspres ve standart hava kargo hizmetleri.' },
  { icon: Truck, title: 'Karayolu Taşımacılığı', desc: 'Geniş araç filomuzla Avrupa, Asya ve Ortadoğu hattında kesintisiz karayolu lojistiği.' },
  { icon: Package, title: 'Proje Taşımacılığı', desc: 'Gabari dışı ve ağır tonajlı yükleriniz için mühendislik temelli özel taşımacılık operasyonları.' },
  { icon: Box, title: 'Depolama Çözümleri', desc: 'Antrepo, gümrüksüz depo ve katma değerli (VAS) hizmetlerle stok yönetimi.' },
  { icon: Globe2, title: 'Gümrük Müşavirliği', desc: 'Karmaşık mevzuat süreçlerinde uzman kadromuzla hızlı ve hatasız gümrükleme.' },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Çözümlerimiz</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            <TextReveal text="360 Derece Lojistik Hizmetleri" className="justify-center" />
          </h2>
          <p className="text-lg text-slate-600">Her sektörün dinamiklerine özel tasarlanmış, esnek ve ölçeklenebilir lojistik altyapımızla işinize değer katıyoruz.</p>
        </ScrollReveal>
        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {
            const Icon = srv.icon;
            return (
              <ScrollRevealChild variant="fade-up" key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{srv.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{srv.desc}</p>
                <a href="#" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Detaylı İncele <span className="text-xl">→</span>
                </a>
              </ScrollRevealChild>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
};

