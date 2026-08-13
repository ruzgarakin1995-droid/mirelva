"use client";
import React, { useState } from 'react';
import EventsHeader from '../../components/EventsHeader';
import EventsFooter from '../../components/EventsFooter';
import EventsQuoteModal from '../../components/EventsQuoteModal';

export default function CorporateServicePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden pb-24">
        {/* Full Screen Hero Section */}
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden mb-24">
          <img 
            src="/images/corporate_gala.jpg" 
            alt="Kurumsal Etkinlikler" 
            className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1614]/80 via-[#1A1614]/60 to-[#FDFBF7]"></div>
          
          <div className="relative z-10 text-center px-6 mt-20">
            <span className="text-[#C19A6B] tracking-[0.3em] text-xs md:text-sm font-light uppercase mb-6 block animate-fade-in-up">Markanızın Prestij Sahnesi</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
              Kurumsal <br className="hidden md:block"/> Etkinlikler
            </h1>
            <p className="text-white/80 font-light max-w-2xl mx-auto text-lg md:text-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Kurumsal kimliğinizi zirveye taşıyan, vizyonunuza yakışır üst düzey davetler.
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
            İmajınızı <span className="text-[#C19A6B] italic">Kusursuzlaştırıyoruz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6 text-[#4A403A]/80 font-light leading-relaxed text-lg">
              <p>
                Gala yemekleri, uluslararası lansmanlar, şirket yıldönümleri veya C-Level motivasyon toplantıları... Etkinliğinizin amacına ve kurum kültürünüze en uygun atmosferi yaratıyoruz.
              </p>
              <p>
                İş dünyasının dinamiklerini estetikle harmanlıyor; pürüzsüz işleyen bir zaman planlaması ve üst düzey misafir ağırlama (LCV) protokolleriyle organizasyonlarınızı baştan sona profesyonelce yönetiyoruz.
              </p>
            </div>
            <div className="space-y-6 text-[#4A403A]/80 font-light leading-relaxed text-lg">
              <p>
                Katılımcı sayınız ne olursa olsun; ileri teknoloji ses ve ışık sistemlerinden, kurumsal branding uygulamalarına, simültane çeviri altyapılarından protokol oturma düzenlerine kadar tüm detaylar kontrolümüz altında.
              </p>
              <p>
                Siz sadece markanızı temsil etmeye ve konuklarınızla prestijli anlar paylaşmaya odaklanın.
              </p>
            </div>
          </div>
        </section>

        {/* Immersive Gallery Section */}
        <section className="w-full px-4 md:px-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 h-[400px] md:h-full group overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
                alt="Üst Düzey Toplantı" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-serif text-2xl">Lansman & Konferans</span>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-4 h-[600px] md:h-full">
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Kurumsal Davet" 
                />
              </div>
              <div className="group overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="Sunum ve Sahne" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1A1614] mb-6">Şirketinize Özel Çözümler</h2>
          <p className="text-[#4A403A]/80 font-light text-lg mb-12 max-w-2xl mx-auto">
            Kurumsal kimliğinizi yansıtacak detayları görüşmek ve vizyonunuzu hayata geçirecek projeyi tasarlamak için randevu oluşturun.
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
