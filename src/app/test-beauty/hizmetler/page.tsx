"use client";

import { BeautyHeader } from '@/themes/beauty/components/BeautyHeader';
import { BeautyFooter } from '@/themes/beauty/components/BeautyFooter';
import { BeautyPackages } from '@/themes/beauty/components/BeautyPackages';
import { motion } from 'framer-motion';

const menuData = [
  {
    title: "MANİKÜR & JEL OJE",
    description: "Sıradan bir manikürün çok ötesinde. Tırnak yapınıza zarar vermeyen premium jeller ve asitsiz primerler kullanılarak yapılan kusursuz el işçiliği.",
    image: "/beauty/beauty_nails_1786272030225.jpg",
    items: [
      { name: "Manikür", price: "950₺" },
      { name: "Manikür + Normal Oje", price: "1.150₺" },
      { name: "Manikür + Çıkarma", price: "1.500₺" },
      { name: "Japon Manikürü", price: "2.150₺" },
      { name: "Kalıcı Oje El", price: "1.550₺" },
      { name: "Kalıcı Oje Çıkarma El", price: "800₺" },
      { name: "Protez Tırnak (Jel)", price: "2.150₺" },
      { name: "Jel Tırnak Bakım", price: "1.750₺" },
      { name: "Jel Güçlendirme", price: "1.750₺" },
      { name: "Jel Set Çıkarma", price: "800₺" },
      { name: "Akrilik Tırnak Çıkarma", price: "1.200₺" },
      { name: "Normal Oje", price: "200₺" },
      { name: "Törpü", price: "350₺" },
      { name: "French / Ombre / Cat Eye", price: "500₺" },
      { name: "Korean", price: "550₺" },
      { name: "Charm", price: "250₺" }
    ]
  },
  {
    title: "PEDİKÜR",
    description: "Gün boyu yorulan ayaklarınız için medikal standartlarda sterilizasyon ve lüks spa dokunuşlarının birleşimi.",
    image: "/beauty/beauty_interior_detail_1786272904875.jpg",
    reverse: true,
    items: [
      { name: "Pedikür", price: "1.450₺" },
      { name: "Pedikür + Normal Oje", price: "1.600₺" },
      { name: "Pedikür + Çıkarma", price: "2.000₺" },
      { name: "Kalıcı Oje Ayak (pedikür dahil)", price: "1.900₺" },
      { name: "Kalıcı Oje Çıkarma Ayak", price: "800₺" },
      { name: "Ayak Detoksu", price: "1.550₺" },
      { name: "Pedikür + Ayak Detoksu", price: "3.000₺" }
    ]
  },
  {
    title: "AYAK BAKIMI",
    description: "Özel ihtiyaçlarınıza yönelik podolojik yaklaşımlar ve profesyonel cihazlarla yapılan medikal ayak sağlığı uygulamaları.",
    image: "/beauty/beauty_spa_1786272048710.jpg",
    items: [
      { name: "Ayak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Diyabet Ayak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Geriatri Ayak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Hamile Ayak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Sporcu Ayak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Batık Tırnak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "3TO Tel Takma", price: "Detaylı Bilgi Alın" },
      { name: "3TO Tel Ara Değişim", price: "Detaylı Bilgi Alın" },
      { name: "Titanyum Tel Takma", price: "Detaylı Bilgi Alın" },
      { name: "Nasır Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Mantar Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Deforme Tırnak Bakımı", price: "Detaylı Bilgi Alın" },
      { name: "Topuk Temizliği", price: "Detaylı Bilgi Alın" },
      { name: "Onikoplast (Tırnak Düzeltme)", price: "Detaylı Bilgi Alın" },
      { name: "Siğil Bakımı", price: "Detaylı Bilgi Alın" }
    ]
  },
  {
    title: "KAŞ & KİRPİK",
    description: "Göz şeklinize ve yüz anatomisine en uygun altın oran tasarımlarla bakışlarınıza derinlik ve karakter katıyoruz.",
    image: "/beauty/beauty_lashes_1786272039522.jpg",
    reverse: true,
    items: [
      { name: "Altın Oran Kaş Alımı (Kadın)", price: "800₺" },
      { name: "Altın Oran Kaş Alımı (Erkek)", price: "900₺" },
      { name: "Bıyık/Çene/Favori Alımı", price: "250₺" },
      { name: "Tüm Yüz Ağda", price: "950₺" },
      { name: "Kaş Boyama", price: "600₺" },
      { name: "Kirpik Boyama", price: "600₺" },
      { name: "Kirpik Laminasyon", price: "1.750₺" },
      { name: "Kaş Laminasyonu", price: "1.900₺" },
      { name: "Kaş Vitamini", price: "2.400₺" }
    ]
  }
];

export default function HizmetlerPage() {
  return (
    <main className="bg-[#FAF5F0] min-h-screen text-[#3E2B2B] selection:bg-[#D4A373] selection:text-[#FAF5F0]">
      <BeautyHeader />
      
      {/* Mini Hero */}
      <section className="pt-48 pb-24 px-6 lg:px-8 bg-[#3E2B2B] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src="/beauty/beauty_makeup_1786272894523.jpg" alt="La Ville Services" className="w-full h-full object-cover opacity-30" />
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
            La Ville kalite standartlarında sunulan tüm işlemlerimiz ve fiyatlandırma detaylarımız.
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
                 onClick={() => window.dispatchEvent(new Event('openBeautyBooking'))} 
                 className="mt-12 text-[11px] font-sans font-medium tracking-[0.2em] uppercase border-b border-[#3E2B2B] pb-1 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors"
               >
                 Randevu Al
               </button>
            </div>

          </div>
        ))}

      </section>

      {/* Re-use Packages Component */}
      <BeautyPackages />

      <BeautyFooter />
    </main>
  );
}
