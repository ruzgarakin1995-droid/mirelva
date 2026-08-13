"use client";

import { LasisHeader } from '@/themes/lasis/components/LasisHeader';
import { LasisFooter } from '@/themes/lasis/components/LasisFooter';
import { LasisPackages } from '@/themes/lasis/components/LasisPackages';
import { motion } from 'framer-motion';

const menuData = [
  {
    title: "LAZER UYGULAMALARI",
    description: "Son teknoloji lazer sistemlerimizle kalıcı epilasyon, leke tedavisi ve dövme silme işlemlerinde güvenilir ve etkili çözümler sunuyoruz.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    items: [
      { name: "Tüm Vücut Q-Switch Lazer", price: "Bilgi Al" },
      { name: "Yüz Bölgesi Lazer", price: "Bilgi Al" },
      { name: "Lazerle Leke Tedavisi", price: "Bilgi Al" },
      { name: "Lazerle Dövme Silme", price: "Bilgi Al" },
      { name: "Akne İzi Tedavisi", price: "Bilgi Al" },
      { name: "Karbon Peeling Lazer", price: "Bilgi Al" }
    ]
  },
  {
    title: "BOTOKS & DOLGU",
    description: "Yüz anatominize en uygun doşal dokunuşlarla zamanın etkilerini geri çevirin. Minimalist ve estetik yaklaşım.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    reverse: true,
    items: [
      { name: "Tüm Yüz Botoks", price: "Bilgi Al" },
      { name: "Masseter Botoksu", price: "Bilgi Al" },
      { name: "Göz Çevresi (Kaz Ayakları)", price: "Bilgi Al" },
      { name: "Terleme Botoksu", price: "Bilgi Al" },
      { name: "Dudak Dolgusu", price: "Bilgi Al" },
      { name: "Elmacık Kemiği Dolgusu", price: "Bilgi Al" },
      { name: "Çene Hattı (Jawline) Dolgusu", price: "Bilgi Al" },
      { name: "Göz Altı Işık Dolgusu", price: "Bilgi Al" }
    ]
  },
  {
    title: "CİLT YENİLEME & BAKIM",
    description: "Cildinizin bariyerini onaran, derinlemesine temizleyen ve kolajen üretimini tetikleyen medikal protokoller.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000&auto=format&fit=crop",
    items: [
      { name: "Medikal Cilt Bakımı", price: "Bilgi Al" },
      { name: "Hydrafacial", price: "Bilgi Al" },
      { name: "Dermapen 4", price: "Bilgi Al" },
      { name: "Somon DNA", price: "Bilgi Al" },
      { name: "Gençlik Aşısı", price: "Bilgi Al" },
      { name: "PRP Yüz Tedavisi", price: "Bilgi Al" },
      { name: "Mezoterapi (Yüz/Boyun)", price: "Bilgi Al" },
      { name: "Kimyasal Peeling", price: "Bilgi Al" }
    ]
  },
  {
    title: "BÖLGESEL İNCELME & VÜCUT",
    description: "Vücut hatlarınızı şekillendiren, selülit görünümünü azaltan ameliyatsız estetik çözümleri.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop",
    reverse: true,
    items: [
      { name: "G5 Masajı", price: "Bilgi Al" },
      { name: "Lenf Drenaj", price: "Bilgi Al" },
      { name: "Soşuk Lipoliz", price: "Bilgi Al" },
      { name: "Radyofrekans Vücut Şekillendirme", price: "Bilgi Al" },
      { name: "Selülit Mezoterapisi", price: "Bilgi Al" },
      { name: "Çatlak Tedavisi (Striort)", price: "Bilgi Al" }
    ]
  }
];

export default function HizmetlerPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <LasisHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-24 px-6 lg:px-8 bg-[#3E2B2B] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="/Lasis/Lasis_makeup_1786272894523.jpg" alt="Lasis Klinik Services" className="w-full h-full object-cover opacity-30" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#3E2B2B] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
            <span className="text-[10px] font-sans font-medium tracking-[0.3em] uppercase text-[#D4A373]">Fiyat Listesi & Detaylar</span>
            <div className="w-8 h-[1px] bg-[#D4A373]"></div>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-[#FAF5F0] mb-6"
          >
            Hizmet Menüsü
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-[#FAF5F0]/70 max-w-xl mx-auto text-base"
          >
            Medikal estetik ve yenilenme yolculuğunuzda size özel çözümler sunan uzman ekibimizin işlem detayları.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services Menu */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
        
        {menuData.map((category, index) => (
          <div key={index} className={`flex flex-col ${category.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start mb-32`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 mb-10 lg:mb-0">
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden rounded-t-[100px] shadow-2xl"
              >
                <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
              </motion.div>
            </div>
            
            {/* Menu Side */}
            <div className="w-full lg:w-7/12">
               <h2 className="text-3xl md:text-4xl font-serif mb-4 text-[#3E2B2B]">{category.title}</h2>
               <p className="font-sans text-[#3E2B2B]/70 leading-relaxed mb-12">
                 {category.description}
               </p>
               
               <ul className="space-y-6">
                 {category.items.map((item, idx) => (
                   <motion.li 
                     key={idx}
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.05 }}
                     className="flex items-center justify-between group cursor-pointer border-b border-[#3E2B2B]/10 pb-4 hover:border-[#D4A373] transition-colors"
                   >
                     <span className="font-sans text-sm md:text-base text-[#3E2B2B] group-hover:text-[#D4A373] transition-colors font-medium">
                       {item.name}
                     </span>
                     <span className="font-serif italic text-sm md:text-lg text-[#3E2B2B]/80 group-hover:text-[#D4A373] transition-colors">
                       {item.price}
                     </span>
                   </motion.li>
                 ))}
               </ul>
               
               <button 
                 onClick={() => window.dispatchEvent(new Event('openLasisBooking'))} 
                 className="mt-12 text-[11px] font-sans font-medium tracking-[0.2em] uppercase border-b border-[#3E2B2B] pb-1 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors"
               >
                 Randevu Al
               </button>
            </div>

          </div>
        ))}

      </section>

      {/* Re-use Packages Component */}
      <LasisPackages />

      <LasisFooter />
    </main>
  );
}
