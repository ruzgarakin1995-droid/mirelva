"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Plus, Minus, Search, Smartphone, Monitor, Wrench, Shield, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-xl mb-4 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full text-left font-bold text-slate-900 p-6"
      >
        <span className="text-lg">{title}</span>
        {isOpen ? <Minus size={20} className="text-blue-600" /> : <Plus size={20} className="text-blue-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-slate-50 border-t border-slate-100"
          >
            <div className="p-6 text-slate-600 font-light leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState('sss');

  return (
    <FadeIn>
    <div className="w-full bg-slate-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA.', href: '/test-ecommerce-v2' },
            { label: 'Destek Merkezi' }
          ]} 
          className="mb-8"
        />

        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center mb-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">Nasıl <span className="text-blue-400">Yardımcı</span> Olabiliriz?</h1>
              <div className="relative max-w-md mx-auto shadow-2xl">
                 <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" strokeWidth={2} />
                 <input type="text" placeholder="Sorununuzu buraya yazın (Örn: Ekran kırıldı)..." className="w-full bg-white rounded-xl pl-12 pr-4 py-4 text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-blue-600/30 transition-all" />
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
           {/* Sidebar */}
           <div className="w-full md:w-72 shrink-0">
              <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar sticky top-28">
                 <button onClick={() => setActiveTab('sss')} className={`text-left px-5 py-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'sss' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'}`}>
                    <Smartphone size={18} className="mr-3" /> Mobil Cihazlar
                 </button>
                 <button onClick={() => setActiveTab('pc')} className={`text-left px-5 py-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'pc' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'}`}>
                    <Monitor size={18} className="mr-3" /> Bilgisayar & Tablet
                 </button>
                 <button onClick={() => setActiveTab('servis')} className={`text-left px-5 py-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'servis' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'}`}>
                    <Wrench size={18} className="mr-3" /> Teknik Servis
                 </button>
                 <button onClick={() => setActiveTab('garanti')} className={`text-left px-5 py-4 rounded-xl text-sm font-bold transition-all whitespace-nowrap flex items-center ${activeTab === 'garanti' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-100'}`}>
                    <Shield size={18} className="mr-3" /> Garanti Şartları
                 </button>
              </nav>
           </div>

           {/* Content */}
           <div className="flex-1 max-w-3xl">
              {activeTab === 'sss' && (
                 <FadeIn delay={0.1}>
                    <h2 className="text-2xl font-black mb-6 text-slate-900">Mobil Cihazlar</h2>
                    <AccordionItem title="Cihazımın pil sağlığını nasıl koruyabilirim?">
                       Pil sağlığınızı optimize etmek için cihazınızı %20 ile %80 şarj aralığında tutmanız önerilir. Ayrıca aşırı ısınmadan kaçınmak ve her zaman orijinal adaptör kullanmak batarya ömrünü uzatır.
                    </AccordionItem>
                    <AccordionItem title="Ekranım kırıldı, garanti kapsamına girer mi?">
                       Ekran kırılmaları genellikle kullanıcı hatası olarak değerlendirildiği için standart garanti kapsamına girmez. Ancak Kapsamlı Koruma Paketiniz varsa ücretsiz değişim sağlanabilir.
                    </AccordionItem>
                    <AccordionItem title="Verilerimi yeni telefonuma nasıl aktarırım?">
                       iOS ve Android ekosistemlerinin sunduğu yerleşik veri aktarım uygulamaları (Örn: Hızlı Başlangıç veya Smart Switch) aracılığıyla tüm verilerinizi kablosuz olarak hızlıca aktarabilirsiniz.
                    </AccordionItem>
                 </FadeIn>
              )}
              {activeTab === 'pc' && (
                 <FadeIn delay={0.1}>
                    <h2 className="text-2xl font-black mb-6 text-slate-900">Bilgisayar & Tablet</h2>
                    <AccordionItem title="MacOS ve Windows arası dosya aktarımı">
                       Bulut depolama servisleri (Google Drive, Dropbox) veya exFAT formatlı harici bir SSD kullanarak her iki işletim sistemi arasında sorunsuz dosya transferi yapabilirsiniz.
                    </AccordionItem>
                    <AccordionItem title="Laptopum aşırı ısınıyor, ne yapmalıyım?">
                       Bilgisayarınızı düz ve sert zeminlerde kullanmaya özen gösterin. Havalandırma boşluklarının kapalı olmadığından emin olun. Sorun devam ederse teknik servisimizle görüşerek fan temizliği talep edebilirsiniz.
                    </AccordionItem>
                 </FadeIn>
              )}
              {activeTab === 'servis' && (
                 <FadeIn delay={0.1}>
                    <h2 className="text-2xl font-black mb-6 text-slate-900">Teknik Servis Süreci</h2>
                    <AccordionItem title="Cihazımı servise nasıl gönderirim?">
                       Hesabım menüsünden "Servis Talebi Oluştur" adımlarını takip ederek ücretsiz kargo kodunuzu alabilirsiniz. Cihazınızı güvenli bir şekilde paketleyerek anlaşmalı kargo firmalarına teslim edebilirsiniz.
                    </AccordionItem>
                    <AccordionItem title="Servis süresi ortalama kaç gündür?">
                       Cihazınız servisimize ulaştıktan sonra ortalama 3-5 iş günü içerisinde işlemler tamamlanmakta ve tarafınıza kargolanmaktadır.
                    </AccordionItem>
                 </FadeIn>
              )}
              {activeTab === 'garanti' && (
                 <FadeIn delay={0.1}>
                    <h2 className="text-2xl font-black mb-6 text-slate-900">Garanti Şartları</h2>
                    <AccordionItem title="Ürünlerin garanti süresi ne kadardır?">
                       Sattığımız tüm elektronik ürünler Türkiye Resmi Distribütör garantisi altında olup 2 yıl (24 Ay) süreyle garanti kapsamındadır.
                    </AccordionItem>
                    <AccordionItem title="Faturamı kaybettim, garanti devam eder mi?">
                       Evet. Tüm satın alımlarınız sistemimizde seri numarası üzerinden kayıtlıdır. E-Arşiv faturanıza dilediğiniz zaman üye panelinizden ulaşabilirsiniz.
                    </AccordionItem>
                 </FadeIn>
              )}
           </div>
        </div>
      </div>
    </div>
    </FadeIn>
  );
}
