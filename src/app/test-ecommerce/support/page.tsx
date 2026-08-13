"use client";

import React, { useState } from 'react';
import { FadeIn } from '@/components/ecommerce/shared/FadeIn';
import { Breadcrumb } from '@/components/ecommerce/shared/Breadcrumb';
import { Plus, Minus, Search, Package, Truck, ArrowLeft, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex items-center justify-between w-full text-left font-medium text-zinc-900 py-6"
      >
        <span className="text-lg">{title}</span>
        {isOpen ? <Minus size={20} className="text-zinc-400" /> : <Plus size={20} className="text-zinc-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-zinc-500 font-light leading-relaxed">
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
    <div className="w-full bg-white pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumb 
          items={[
            { label: 'LOCİZSA', href: '/test-ecommerce' },
            { label: 'Müşteri Hizmetleri' }
          ]} 
          className="mb-8"
        />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">Size Nasıl <span className="font-bold">Yardımcı</span> Olabiliriz?</h1>
          <div className="relative max-w-md mx-auto">
             <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" strokeWidth={1.5} />
             <input type="text" placeholder="Yardım konularında ara..." className="w-full bg-zinc-50 border border-zinc-200 pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-900 transition-colors" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
           {/* Sidebar */}
           <div className="w-full md:w-64 shrink-0">
              <nav className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar sticky top-28">
                 <button onClick={() => setActiveTab('sss')} className={`text-left px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'sss' ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'}`}>
                    <HelpCircle size={16} className="inline-block mr-2" /> Sıkça Sorulan Sorular
                 </button>
                 <button onClick={() => setActiveTab('kargo')} className={`text-left px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'kargo' ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'}`}>
                    <Truck size={16} className="inline-block mr-2" /> Kargo ve Teslimat
                 </button>
                 <button onClick={() => setActiveTab('iade')} className={`text-left px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'iade' ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'}`}>
                    <ArrowLeft size={16} className="inline-block mr-2" /> İade ve Değişim
                 </button>
                 <button onClick={() => setActiveTab('siparis')} className={`text-left px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === 'siparis' ? 'bg-zinc-900 text-white' : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100'}`}>
                    <Package size={16} className="inline-block mr-2" /> Sipariş Süreci
                 </button>
              </nav>
           </div>

           {/* Content */}
           <div className="flex-1 max-w-3xl">
              {activeTab === 'sss' && (
                 <div>
                    <h2 className="text-2xl font-bold mb-6">Sıkça Sorulan Sorular</h2>
                    <AccordionItem title="Siparişim ne zaman kargoya verilir?">
                       Siparişleriniz, onaylandıktan sonra 1-3 iş günü içerisinde kargoya teslim edilmektedir. İndirim dönemlerinde bu süre 5 iş gününe kadar uzayabilir.
                    </AccordionItem>
                    <AccordionItem title="Uluslararası gönderim yapıyor musunuz?">
                       Şu an için yalnızca Türkiye sınırları içerisine gönderim yapıyoruz. Yakında Avrupa gönderimlerimiz başlayacaktır.
                    </AccordionItem>
                    <AccordionItem title="Hangi ödeme yöntemlerini kabul ediyorsunuz?">
                       Tüm kredi kartları (Visa, MasterCard, Amex) ve havale/EFT ile ödeme kabul ediyoruz. Ayrıca kapıda ödeme seçeneğimiz de mevcuttur.
                    </AccordionItem>
                    <AccordionItem title="Bedenimi nasıl bulabilirim?">
                       Her ürün sayfasında detaylı bir "Beden Rehberi" bulunmaktadır. Ürünlerin kalıpları hakkında detaylı bilgi için ürün açıklamalarını inceleyebilirsiniz.
                    </AccordionItem>
                 </div>
              )}
              {activeTab === 'kargo' && (
                 <div>
                    <h2 className="text-2xl font-bold mb-6">Kargo ve Teslimat</h2>
                    <p className="text-zinc-600 font-light mb-6">
                       2000 ₺ ve üzeri tüm alışverişlerinizde kargo ücretsizdir. Standart kargo ücretimiz 49.90 ₺'dir.
                    </p>
                    <AccordionItem title="Hangi kargo firması ile çalışıyorsunuz?">
                       Gönderilerimiz Yurtiçi Kargo ve MNG Kargo güvencesiyle sağlanmaktadır.
                    </AccordionItem>
                    <AccordionItem title="Aynı gün teslimat var mı?">
                       İstanbul içi saat 12:00'ye kadar verilen siparişlerde Kurye ile aynı gün teslimat seçeneğimiz bulunmaktadır.
                    </AccordionItem>
                 </div>
              )}
              {activeTab === 'iade' && (
                 <div>
                    <h2 className="text-2xl font-bold mb-6">İade ve Değişim</h2>
                    <p className="text-zinc-600 font-light mb-6">
                       Kullanılmamış ve etiketi koparılmamış ürünlerinizi, faturası ile birlikte 30 gün içerisinde ücretsiz olarak iade edebilirsiniz.
                    </p>
                    <AccordionItem title="Nasıl iade kodu alabilirim?">
                       Hesabım &gt; Siparişlerim sayfasından iade etmek istediğiniz ürünü seçerek "İade Kodu Oluştur" butonuna tıklayabilirsiniz.
                    </AccordionItem>
                    <AccordionItem title="İade ücretim ne zaman yatar?">
                       İade ettiğiniz ürün depomuza ulaşıp onaylandıktan sonra, 3-5 iş günü içerisinde ödeme yaptığınız karta ücret iadeniz gerçekleştirilir.
                    </AccordionItem>
                 </div>
              )}
              {activeTab === 'siparis' && (
                 <div>
                    <h2 className="text-2xl font-bold mb-6">Sipariş Süreci</h2>
                    <AccordionItem title="Siparişimi iptal edebilir miyim?">
                       Siparişiniz "Kargoya Verildi" statüsüne geçmeden önce Hesabım &gt; Siparişlerim menüsünden siparişinizi iptal edebilirsiniz.
                    </AccordionItem>
                    <AccordionItem title="Siparişime ürün ekleyebilir miyim?">
                       Onaylanmış siparişlere sistem üzerinden ürün eklemesi yapılamamaktadır. İptal edip yeni sipariş oluşturabilir veya yeni bir sipariş verebilirsiniz.
                    </AccordionItem>
                 </div>
              )}
           </div>
        </div>
      </div>
        </div>
    </FadeIn>
  );
}