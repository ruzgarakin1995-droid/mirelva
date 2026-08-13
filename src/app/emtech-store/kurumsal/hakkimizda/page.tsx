"use client";
import React from 'react';
import { EmtechHeader } from '@/themes/emtech/components/EmtechHeader';
import { EmtechFooter } from '@/themes/emtech/components/EmtechFooter';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col selection:bg-[#0055FF] selection:text-white">
      <EmtechHeader />
      
      <div className="flex-1 pt-24 pb-32">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-8 border-[#0055FF] pl-8 py-4 mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-space font-black text-zinc-950 uppercase tracking-tighter leading-none mb-6">
              Biz <span className="text-[#0055FF]">Kimiz?</span>
            </h1>
            <p className="text-xl md:text-2xl font-inter text-zinc-600 max-w-3xl leading-relaxed">
              Trakya, Marmara ve Anadolu bölgelerinin en güçlü cep telefonu yedek parça tedarikçisi: <strong className="text-zinc-950 font-space uppercase">Emtech Bilişim</strong>.
            </p>
          </motion.div>

          {/* About Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg text-zinc-600 font-inter"
            >
              <p className="mb-6">
                Emtech Bilişim olarak, Türkiye pazarında cep telefonu ekranı ve bataryası başta olmak üzere, profesyonel tamir servislerinin ihtiyaç duyduğu üst düzey A kalite yedek parçaları toptan satış modeliyle sunuyoruz.
              </p>
              <p className="mb-6">
                Sektörün tartışmasız lider markaları olan <strong>KBS</strong>, <strong>CMP Plus</strong> ve <strong>Cartel Max Power</strong>'ın ana iş ortağı ve yetkili distribütörü olarak, kaliteyi asla tesadüfe bırakmıyoruz. Her bir ürünümüz, laboratuvar standartlarında test edildikten sonra partnerlerimize ulaştırılır.
              </p>
              <p>
                Amacımız sadece bir "satıcı" olmak değil; teknik servislerin maliyetlerini düşürürken onarım kalitelerini zirveye taşıyacak güvenilir bir <strong>Çözüm Ortağı</strong> olmaktır.
              </p>
            </motion.div>
            
            {/* Image Placeholder / Graphic */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-auto md:h-full bg-zinc-200 border-4 border-zinc-950 shadow-[16px_16px_0px_#0055FF] flex items-center justify-center p-12 overflow-hidden"
            >
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597848212624-a19eb35e26f3?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-luminosity opacity-80"></div>
               <div className="absolute inset-0 bg-[#0055FF]/20"></div>
               <div className="relative z-10 bg-white p-6 border-4 border-zinc-950 shadow-[8px_8px_0px_#000] text-center max-w-sm">
                 <h3 className="font-space font-black text-3xl uppercase tracking-tighter text-zinc-950 mb-2">Sıfır Taviz</h3>
                 <p className="font-mono text-xs font-bold text-zinc-500 uppercase">%100 Kalite Kontrol</p>
               </div>
            </motion.div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="bg-zinc-950 py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border-2 border-zinc-800 p-10 hover:border-[#0055FF] transition-colors"
              >
                <Target className="w-12 h-12 text-[#0055FF] mb-6" />
                <h3 className="font-space font-black text-3xl uppercase tracking-tighter mb-4">Misyonumuz</h3>
                <p className="font-inter text-zinc-400 leading-relaxed">
                  B2B iş ortaklarımıza, arıza oranını sıfıra indiren, müşteri memnuniyetini garantileyen ve montaj kolaylığı sağlayan endüstri standartlarında yedek parçalar tedarik etmek. Sürekli gelişen teknolojiye anında adapte olarak pazarın tedarik sorunlarını ortadan kaldırmak.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900 border-2 border-zinc-800 p-10 hover:border-[#0055FF] transition-colors"
              >
                <Eye className="w-12 h-12 text-[#0055FF] mb-6" />
                <h3 className="font-space font-black text-3xl uppercase tracking-tighter mb-4">Vizyonumuz</h3>
                <p className="font-inter text-zinc-400 leading-relaxed">
                  Sadece Trakya, Marmara ve Anadolu ile sınırlı kalmayıp, Türkiye'nin her noktasına aynı gün ulaşabilen, teknoloji ve yedek parça denilince akla gelen ilk, tek ve en güvenilir kurum olmak. Yenilikçi B2B altyapımızla sektörü dijitalleştirmek.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24">
           <h2 className="text-3xl md:text-5xl font-space font-black text-zinc-950 uppercase tracking-tighter mb-12 text-center">
              Temel <span className="text-[#0055FF]">Değerlerimiz</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: ShieldCheck, title: "Güven ve Garanti", desc: "Sattığımız her ürünün arkasındayız. Partnerlerimizi mağdur etmeyen, hızlı sonuçlanan, kesin bir iade ve garanti prosedürü işletiriz." },
                { icon: Zap, title: "Hız ve Süreklilik", desc: "Zamanın nakit olduğu bu sektörde, siparişleri en hızlı şekilde kargolar ve stok devamlılığını asla kesintiye uğratmayız." },
                { icon: Target, title: "Orijinal Kalite", desc: "Piyasada bulunan düşük kaliteli (A Copy vb.) ürünler yerine, her zaman orijinal donanım üreticisi standartlarını yakalayan markaları tercih ederiz." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white border-2 border-zinc-950 p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-zinc-100 border-2 border-zinc-950 flex items-center justify-center mb-6">
                    <val.icon className="w-8 h-8 text-[#0055FF]" />
                  </div>
                  <h4 className="font-space font-black text-xl uppercase tracking-tighter text-zinc-950 mb-3">{val.title}</h4>
                  <p className="font-inter text-zinc-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
        </div>

      </div>

      <EmtechFooter />
    </main>
  );
}
