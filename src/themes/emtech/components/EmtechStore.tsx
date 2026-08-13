"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, QrCode, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: 'iPhone 17 Pro Max Ekran', slug: "iphone-17-pro-max-ekran", desc: 'Apple yeni nesil OLED panel, orijinal True Tone.', image: '/emtech-assets/cover_screen-1.jpg', tag: 'Yeni Eklendi', sku: 'KARTEL-17PM' },
  { id: 2, name: 'Samsung S24 Ultra Lcd', slug: "samsung-s24-ultra-lcd", desc: 'Kavisli dinamik AMOLED ekran, en yüksek parlaklık.', image: '/emtech-assets/product_1.jpg', tag: 'Çok Sıcak', sku: 'KARTEL-S24U' },
  { id: 3, name: 'Xiaomi 14 Pro Lcd', slug: "xiaomi-14-pro-lcd", desc: 'Yüksek çözünürlüklü profesyonel panel, 120Hz.', image: '/emtech-assets/pro_3.jpg', tag: 'Güçlü', sku: 'KARTEL-X14P' },
  { id: 4, name: 'Oppo Find X5 Pro Ekran', slug: "oppo-find-x5-pro-ekran", desc: 'Kusursuz montaj uyumu ve dayanıklı cam yapısı.', image: '/emtech-assets/kbs_ekran.jpg', tag: 'KBS Garantili', sku: 'KARTEL-OFX5' },
  { id: 5, name: 'Huawei P60 Pro Batarya', slug: "huawei-p60-pro-batarya", desc: 'Orijinal sökme tam kapasite, uzun ömürlü batarya.', image: '/emtech-assets/power.jpg', tag: 'Uzun Ömür', sku: 'KARTEL-HP60' },
  { id: 6, name: 'Redmi Note 13 Pro Batarya', slug: "redmi-note-13-pro-batarya", desc: '5000 mAh tam kapasite şok akım korumalı.', image: '/emtech-assets/pro_8.jpg', tag: 'Fırsat', sku: 'KARTEL-RN13P' },
  { id: 7, name: 'LCD - iPhone 14 Pro Max', slug: "lcd-iphone-14-pro-max", desc: 'Apple orijinal renk kalibrasyonu ve True Tone.', image: '/emtech-assets/fire.jpg', tag: 'Stokta', sku: 'KARTEL-14PM' },
  { id: 8, name: 'iPhone 13 Pro Max Cartel', slug: "iphone-13-pro-max-cartel", desc: 'Sıfır döngü, maksimum performans garantili.', image: '/emtech-assets/time.jpg', tag: 'Popüler', sku: 'KARTEL-13PMC' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 20 } },
};

export function EmtechStore() {
  return (
    <section id="ekranlar" className="py-32 bg-zinc-50 border-t border-zinc-200 relative z-10">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-mono text-[#0055FF] text-xs tracking-[0.2em] uppercase mb-4">[ Katalog ]</h2>
            <h3 className="text-4xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter">
              Profesyonel<br /> Yedek Parçalar
            </h3>
          </div>
          <button className="self-start md:self-auto font-space text-xs font-bold uppercase tracking-widest text-zinc-900 hover:text-[#0055FF] transition-colors border-b border-zinc-900 hover:border-[#0055FF] pb-1">
            Tüm Kataloğu Gör
          </button>
        </div>

        {/* Brutalist Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <Link href={`/emtech-store/urun/${product.slug}`} key={product.id}>
              <motion.div 
                variants={itemVariants}
                className="group bg-white border-2 border-zinc-200 hover:border-zinc-950 rounded-none overflow-hidden hover:-translate-y-2 hover:shadow-[8px_8px_0px_#0055FF] transition-all duration-300 flex flex-col relative h-full"
              >
                {/* Product Image */}
                <div className="h-72 w-full bg-zinc-100 relative overflow-hidden flex items-center justify-center p-8 border-b-2 border-zinc-200 group-hover:border-zinc-950 transition-colors">
                  {product.image ? (
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                  ) : (
                    <div className="w-full h-full bg-zinc-50 flex items-center justify-center text-zinc-300">
                      <QrCode className="w-16 h-16" />
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-[#0055FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply"></div>

                  {/* SKU Badge */}
                  <div className="absolute top-4 left-4 font-mono text-[10px] bg-zinc-950 text-white px-2 py-1 font-bold tracking-wider z-10 shadow-[2px_2px_0px_#0055FF]">
                    {product.sku}
                  </div>
                  {/* Tag Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#0055FF] text-white font-mono text-[10px] uppercase font-bold tracking-wider z-10 shadow-[2px_2px_0px_#000]">
                    {product.tag}
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col flex-1 bg-white relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-space font-bold text-zinc-950 uppercase text-lg pr-4 leading-tight group-hover:text-[#0055FF] transition-colors">{product.name}</h4>
                  </div>
                  <p className="font-inter text-xs text-zinc-500 leading-relaxed mb-6 flex-1">
                    {product.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="w-full flex items-center justify-center gap-2 bg-zinc-950 text-white group-hover:bg-[#0055FF] transition-colors py-3 px-4 border-2 border-transparent group-hover:border-[#0055FF] shadow-[4px_4px_0px_transparent] group-hover:shadow-[4px_4px_0px_#000]">
                      <span className="font-space font-black text-xs uppercase tracking-widest">
                        Detayları Gör
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
