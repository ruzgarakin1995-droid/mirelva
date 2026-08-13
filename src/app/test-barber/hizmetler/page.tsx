"use client";

import { motion } from 'framer-motion';
import { BarberHeader } from '@/themes/barber/components/BarberHeader';
import { BarberFooter } from '@/themes/barber/components/BarberFooter';

const servicesData = [
  {
    category: "KLASİK BAKIM",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Centilmen Kesimi", desc: "Kişisel saç analizi, premium şampuan, saç derisi masajı ve şekillendirme.", price: "₺850" },
      { name: "Geleneksel Ustura", desc: "Sıcak havlu kompresi, lüks tıraş kremi ve soğuk taş terapisi ile sinekkaydı tıraş.", price: "₺600" },
      { name: "Sakal Tasarımı", desc: "Yüz hatlarına uygun sakal şekillendirme ve özel yağlarla bakım.", price: "₺550" },
    ]
  },
  {
    category: "RENKLENDİRME & KAMUFLAJ",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Doğal Beyaz Kapatma", desc: "Sadece 10 dakikada, saçtaki doğal grileri kırmadan gençleştiren organik boya.", price: "₺1200" },
      { name: "Sakal Renklendirme", desc: "Sakal ve bıyıktaki ton farklarını eşitleyen hassas renklendirme işlemi.", price: "₺800" },
    ]
  },
  {
    category: "SPA & ARINMA",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Aktif Karbon Cilt Bakımı", desc: "Buhar banyosu, siyah nokta temizliği ve gözenek sıkılaştırıcı kil maskesi.", price: "₺950" },
      { name: "Baş & Omuz Masajı", desc: "Kan dolaşımını hızlandıran, stres atıcı 20 dakikalık aromaterapik masaj.", price: "₺700" },
    ]
  },
  {
    category: "BOMONTI İMZA",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop",
    items: [
      { name: "Executive Paket", desc: "Saç kesimi, ustura tıraşı, cilt bakımı, kulak/burun ağdası ve VIP ikramlar.", price: "₺2500" },
      { name: "Damat Ritüeli", desc: "Düğün gününe özel; saç, sakal, cilt bakımı ve manikür içeren 2 saatlik seans.", price: "₺4000" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <BarberHeader />
      
      <main className="flex-1 flex flex-col pt-32 bg-[#F8F7F5] min-h-screen">
        
        {/* Page Header */}
        <section className="max-w-7xl mx-auto px-6 w-full mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-sans tracking-[0.4em] uppercase text-[#C1A68D] mb-6 block"
          >
            Hizmet Menüsü
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#2A2522] leading-tight"
          >
            Özel <span className="italic text-[#C1A68D] font-light">Ritüeller.</span>
          </motion.h1>
        </section>

        {/* Services List with Images */}
        <section className="max-w-7xl mx-auto px-6 w-full pb-32 flex flex-col gap-32">
          {servicesData.map((category, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-24 items-center`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full md:w-1/2 aspect-[4/5] bg-[#2A2522] overflow-hidden group relative"
              >
                <img 
                  src={category.image} 
                  alt={category.category}
                  className="w-full h-full object-cover sepia-[0.3] opacity-80 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 border border-[#F8F7F5]/20 m-6 pointer-events-none"></div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="w-full md:w-1/2 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-[1px] bg-[#C1A68D]"></div>
                  <h2 className="text-2xl font-serif text-[#2A2522] tracking-wide">{category.category}</h2>
                </div>

                <div className="flex flex-col gap-10">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex flex-col gap-2 group">
                      <div className="flex justify-between items-end border-b border-[#2A2522]/10 pb-2">
                        <h3 className="text-xl font-serif text-[#2A2522] group-hover:text-[#C1A68D] transition-colors">{item.name}</h3>
                        <span className="font-sans text-[#2A2522]">{item.price}</span>
                      </div>
                      <p className="text-sm font-sans font-light text-[#2A2522]/60 leading-relaxed pr-12">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </section>

      </main>

      <BarberFooter />
    </>
  );
}
