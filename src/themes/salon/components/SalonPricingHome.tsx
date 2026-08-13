"use client";

import { motion } from 'framer-motion';

export function SalonPricingHome() {
  const menuLeft = [
    { name: "Signature Manikür", price: "₺450" },
    { name: "Jel Tırnak & Güçlendirme", price: "₺850" },
    { name: "Kalıcı Oje (Tek Renk)", price: "₺350" },
    { name: "Protez Tırnak", price: "₺1,200" },
  ];

  const menuRight = [
    { name: "Nail Art (Tırnak Başı)", price: "₺50+" },
    { name: "Baby Boomer / Ombre", price: "₺250" },
    { name: "SPA Pedikür", price: "₺650" },
    { name: "Jel Çıkarma İşlemi", price: "₺200" },
  ];

  const renderMenuItem = (item: {name: string, price: string}, i: number) => (
    <motion.div 
      key={item.name}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="flex items-end justify-between group cursor-default"
    >
      <div className="flex-1 border-b border-[#4A403F]/10 border-dotted mb-1 mx-4 group-hover:border-[#D4A3A3] transition-colors"></div>
      <span className="font-serif text-lg text-[#4A403F] order-first group-hover:text-[#D4A3A3] transition-colors">{item.name}</span>
      <span className="font-sans text-sm text-[#4A403F]/80 order-last">{item.price}</span>
    </motion.div>
  );

  return (
    <section className="py-32 bg-[#F0EBE6] text-[#4A403F]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#4A403F] mb-6">
            Servis <span className="italic text-[#D4A3A3] font-light">Menüsü.</span>
          </h2>
          <p className="font-sans font-light text-sm text-[#4A403F]/60">
            A La Carte Seçeneklerimiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          <div className="flex flex-col gap-8">
            {menuLeft.map((item, i) => renderMenuItem(item, i))}
          </div>
          <div className="flex flex-col gap-8">
            {menuRight.map((item, i) => renderMenuItem(item, i))}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <button className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#4A403F] border-b border-[#4A403F] pb-1 hover:text-[#D4A3A3] hover:border-[#D4A3A3] transition-colors">
            Tüm Fiyat Listesini İndir
          </button>
        </div>

      </div>
    </section>
  );
}
