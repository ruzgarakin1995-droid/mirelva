"use client";

import { motion } from 'framer-motion';
import { SalonHeader } from '@/themes/salon/components/SalonHeader';
import { SalonFooter } from '@/themes/salon/components/SalonFooter';

export default function HizmetlerPage() {
  const categories = [
    {
      title: "Klasik Bakım",
      items: [
        { name: "Medikal Manikür", desc: "Kusursuz kütikül temizliği ve tırnak şekillendirme.", price: "₺450" },
        { name: "SPA Pedikür", desc: "Aromaterapik yağlar ile dinlendirici ayak bakımı.", price: "₺650" },
        { name: "Kalıcı Oje (Tek Renk)", desc: "3 haftaya kadar kalıcı, parlaklığını yitirmeyen oje uygulaması.", price: "₺350" },
      ]
    },
    {
      title: "Jel & Protez",
      items: [
        { name: "Jel Tırnak / Güçlendirme", desc: "Kendi tırnağınızın üzerine uygulanan ekstra sağlam jel katmanı.", price: "₺850" },
        { name: "Protez Tırnak", desc: "İstenilen uzunluk ve şekilde sıfırdan yaratılan kusursuz tırnaklar.", price: "₺1,200" },
        { name: "Jel Çıkarma İşlemi", desc: "Tırnak yatağına zarar vermeden yapılan güvenli çıkarma.", price: "₺200" },
      ]
    },
    {
      title: "Nail Art",
      items: [
        { name: "Minimal Tasarım (Tırnak Başı)", desc: "Zarif çizgiler, ufak noktalar veya minik taş detayları.", price: "₺50+" },
        { name: "Baby Boomer / Ombre", desc: "Renklerin pürüzsüzce birbirine geçtiği zarif geçiş tasarımı.", price: "₺250" },
        { name: "Özel El Çizimi", desc: "İstediğiniz karmaşık desenlerin el işçiliğiyle uygulanması.", price: "₺400+" },
      ]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-[#F0EBE6]">
      <SalonHeader />
      
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#4A403F]/60">Servis Menüsü</span>
            <div className="w-12 h-[1px] bg-[#D4A3A3]"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-serif text-[#4A403F] leading-tight mb-8"
          >
            Özenli <span className="italic text-[#D4A3A3] font-light">Dokunuşlar.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans font-light text-[#4A403F]/70 max-w-lg mx-auto"
          >
            İhtiyacınıza özel tasarlanmış premium hizmet listemizi keşfedin.
          </motion.p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {categories.map((cat, catIdx) => (
            <div key={cat.title}>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-serif text-[#4A403F] border-b border-[#4A403F]/10 pb-6 mb-10"
              >
                {cat.title}
              </motion.h2>
              
              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="text-xl font-serif text-[#4A403F] group-hover:text-[#D4A3A3] transition-colors">{item.name}</h3>
                      <div className="flex-1 border-b border-dotted border-[#4A403F]/20 mx-4 mb-2 group-hover:border-[#D4A3A3] transition-colors"></div>
                      <span className="font-sans text-sm text-[#4A403F]">{item.price}</span>
                    </div>
                    <p className="font-sans font-light text-sm text-[#4A403F]/60 pr-16">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-[#D4A3A3] text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-[#FCFBF9] mb-8">Randevunuzu Oluşturun</h2>
        <button 
          onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}
          className="text-[11px] font-sans tracking-[0.2em] uppercase text-[#FCFBF9] border border-[#FCFBF9] px-10 py-4 hover:bg-[#FCFBF9] hover:text-[#D4A3A3] transition-colors duration-500 rounded-full"
        >
          Online Rezervasyon
        </button>
      </section>

      <SalonFooter />
    </main>
  );
}
