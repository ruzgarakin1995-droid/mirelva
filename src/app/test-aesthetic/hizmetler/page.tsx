"use client";

import { AestheticHeader } from '@/themes/aesthetic/components/AestheticHeader';
import { AestheticFooter } from '@/themes/aesthetic/components/AestheticFooter';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HizmetlerPage() {
  const services = [
    {
      title: "Sıvı Yüz Germe",
      desc: "Ameliyatsız yüz gençleştirme, hacim kazandırma ve lifting etkisi sağlayan dolgu teknikleri.",
      link: "/test-aesthetic/sivi-yuz-germe",
      img: "/aesthetic/aesthetic_sivi_yuz_germe.jpg"
    },
    {
      title: "Botoks & Dolgu",
      desc: "Yüz hatlarınızı belirginleştiren ve kırışıklıkları gideren minimal invaziv dokunuşlar.",
      link: "/test-aesthetic/botoks-dolgu",
      img: "/aesthetic/aesthetic_hero_face.jpg"
    },
    {
      title: "Lazer Epilasyon",
      desc: "En son teknoloji cihazlarla acısız, kalıcı ve pürüzsüz sonuçlar.",
      link: "/test-aesthetic/lazer-epilasyon",
      img: "/aesthetic/aesthetic_laser.jpg"
    },
    {
      title: "Medikal Cilt Bakımı",
      desc: "Cildinizin ihtiyacına özel derinlemesine temizlik ve yenileme protokolleri.",
      link: "/test-aesthetic/cilt-bakimi",
      img: "/aesthetic/aesthetic_skincare.jpg"
    },
    {
      title: "Bölgesel İncelme",
      desc: "Vücut hatlarınızı şekillendiren, ameliyatsız ve konforlu incelme sistemleri.",
      link: "/test-aesthetic/bolgesel-incelme",
      img: "/aesthetic/aesthetic_body.jpg"
    },
    {
      title: "Anti-Aging Sistemleri",
      desc: "Zamana meydan okuyan, hücresel düzeyde gençleştirici özel uygulamalar.",
      link: "/test-aesthetic/anti-aging",
      img: "/aesthetic/aesthetic_antiaging.jpg"
    }
  ];

  return (
    <main className="bg-[#FDFCF9] min-h-screen text-[#1C1C1C] selection:bg-[#C4A79A] selection:text-[#FDFCF9]">
      <AestheticHeader />
      
      <section className="pt-32 md:pt-48 pb-10 md:pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A79A]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#1C1C1C]/50">Hizmetlerimiz</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif mb-16"
          >
            Estetik & <br/>
            <span className="italic font-light text-[#C4A79A]">Güzellik.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group flex flex-col"
              >
                <Link href={service.link} className="overflow-hidden relative aspect-[4/5] mb-6">
                  <div className="absolute inset-0 bg-[#1C1C1C]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-[10px] text-[#FDFCF9] font-sans tracking-[0.2em] uppercase">Detayları Gör</span>
                    <div className="w-8 h-[1px] bg-[#FDFCF9]"></div>
                  </div>
                </Link>
                <Link href={service.link}>
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-[#C4A79A] transition-colors">{service.title}</h3>
                </Link>
                <p className="font-sans font-light text-[#1C1C1C]/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AestheticFooter />
    </main>
  );
}
