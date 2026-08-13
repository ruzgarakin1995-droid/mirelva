"use client";

import { motion } from 'framer-motion';

const services = [
  {
    category: "KLASİK BAKIM",
    items: [
      { name: "Centilmen Kesimi", desc: "Kişisel saç analizi, premium şampuan, saç derisi masajı ve şekillendirme.", price: "₺850" },
      { name: "Geleneksel Ustura", desc: "Sıcak havlu kompresi, lüks tıraş kremi ve soğuk taş terapisi ile sinekkaydı tıraş.", price: "₺600" },
      { name: "Sakal Tasarımı", desc: "Yüz hatlarına uygun sakal şekillendirme ve özel yağlarla bakım.", price: "₺550" },
    ]
  },
  {
    category: "RENKLENDİRME & KAMUFLAJ",
    items: [
      { name: "Doğal Beyaz Kapatma", desc: "Sadece 10 dakikada, saçtaki doğal grileri kırmadan gençleştiren organik boya.", price: "₺1200" },
      { name: "Sakal Renklendirme", desc: "Sakal ve bıyıktaki ton farklarını eşitleyen hassas renklendirme işlemi.", price: "₺800" },
    ]
  },
  {
    category: "SPA & ARINMA",
    items: [
      { name: "Aktif Karbon Cilt Bakımı", desc: "Buhar banyosu, siyah nokta temizliği ve gözenek sıkılaştırıcı kil maskesi.", price: "₺950" },
      { name: "Baş & Omuz Masajı", desc: "Kan dolaşımını hızlandıran, stres atıcı 20 dakikalık aromaterapik masaj.", price: "₺700" },
    ]
  },
  {
    category: "BOMONTI İMZA",
    items: [
      { name: "Executive Paket", desc: "Saç kesimi, ustura tıraşı, cilt bakımı, kulak/burun ağdası ve VIP ikramlar.", price: "₺2500" },
      { name: "Damat Ritüeli", desc: "Düğün gününe özel; saç, sakal, cilt bakımı ve manikür içeren 2 saatlik seans.", price: "₺4000" },
    ]
  }
];

export function BarberServices() {
  return (
    <section className="py-32 bg-[#F8F7F5]">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#2A2522]/50 mb-6 block"
          >
            Menü
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-serif text-[#2A2522]"
          >
            Hizmetlerimiz
          </motion.h2>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((section, idx) => (
            <div key={idx}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-sans tracking-[0.3em] uppercase text-[#C1A68D] mb-12 border-b border-[#2A2522]/10 pb-4"
              >
                {section.category}
              </motion.h3>

              <div className="flex flex-col gap-10">
                {section.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: itemIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col md:flex-row md:items-end justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h4 className="text-xl font-serif text-[#2A2522] group-hover:text-[#C1A68D] transition-colors duration-500">
                          {item.name}
                        </h4>
                        <div className="flex-1 h-[1px] bg-[#2A2522]/10 group-hover:bg-[#C1A68D]/30 transition-colors duration-500 hidden md:block" />
                      </div>
                      <p className="text-sm font-sans font-light text-[#2A2522]/60">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-lg font-sans text-[#2A2522] md:pl-4 whitespace-nowrap">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
