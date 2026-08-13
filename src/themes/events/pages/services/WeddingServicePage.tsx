"use client";
import React, { useState } from 'react';
import EventsHeader from '../../components/EventsHeader';
import EventsFooter from '../../components/EventsFooter';
import EventsQuoteModal from '../../components/EventsQuoteModal';

export default function WeddingServicePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden pb-24">
        {/* Full Screen Hero Section */}
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden mb-24">
          <img 
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
            alt="Düğün Organizasyonu" 
            className="absolute inset-0 w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#FDFBF7]"></div>
          
          <div className="relative z-10 text-center px-6 mt-20">
            <span className="text-[#C19A6B] tracking-[0.3em] text-xs md:text-sm font-light uppercase mb-6 block animate-fade-in-up">Özel Günlerinizin Mimarı</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
              Düğün <br className="hidden md:block"/> Organizasyonu
            </h1>
            <p className="text-white/80 font-light max-w-2xl mx-auto text-lg md:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Hayatınızın en anlamlı gününde, masalları aratmayacak kusursuz bir deneyime hazır olun.
            </p>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white/50 text-[10px] uppercase tracking-widest mb-2">Detaylar</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </section>

        {/* Vision & Details Section */}
        <section className="max-w-5xl mx-auto px-6 text-center mb-32">
          <div className="w-px h-24 bg-[#C19A6B] mx-auto mb-12"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A1614] mb-10 leading-tight">
            Sizin Aşkınız, <span className="text-[#C19A6B] italic">Bizim Sanatımız</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6 text-[#4A403A]/80 font-light leading-relaxed text-lg">
              <p>
                Gelin yolu süslemelerinden, görkemli nikah tagı tasarımlarına; orkestra seçiminden, büyüleyici masa düzenine kadar her detayı sizin adınıza düşünen profesyonel bir ekiple çalışın.
              </p>
              <p>
                Klasik konseptlerin ötesinde, tamamen sizin karakterinizi yansıtan, özgün ve nefes kesici bir atmosfer yaratıyoruz.
              </p>
            </div>
            <div className="space-y-6 text-[#4A403A]/80 font-light leading-relaxed text-lg">
              <p>
                İster yeşillikler içinde rüya gibi bir kır düğünü, ister görkemli bir tarihi yalı veya otel balosu olsun. Mekanın ruhuna en uygun premium dekorasyon öğelerini, özenle seçilmiş çiçek aranjmanlarını ve büyüleyici ışıklandırmaları kullanıyoruz.
              </p>
              <p>
                Sizin tek yapmanız gereken, sevdiklerinizle birlikte bu özel anın tadını sonuna kadar çıkarmak.
              </p>
            </div>
          </div>
        </section>

        {/* Immersive Gallery Section */}
        <section className="w-full px-4 md:px-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 h-[400px] md:h-full group overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Büyüleyici Atmosfer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-serif text-2xl">Büyüleyici Atmosfer</span>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Zarif Detaylar" 
                />
              </div>
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Premium Kurulum" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1614] mb-6">Hayalinizdeki Düğünü Birlikte Planlayalım</h2>
          <p className="text-[#4A403A]/80 font-light text-lg mb-12 max-w-2xl mx-auto">
            Size özel hazırlayacağımız sunumlar ve benzersiz tasarım alternatifleri için yaratıcı ekibimizle şimdi iletişime geçin.
          </p>
          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-[#C19A6B] text-white px-12 py-5 text-sm uppercase tracking-[0.2em] hover:bg-[#1A1614] transition-colors duration-500 shadow-[0_10px_30px_rgba(193,154,107,0.3)]"
          >
            Özel Teklif Alın
          </button>
        </section>

      </main>

      <EventsFooter />
      <EventsQuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}
