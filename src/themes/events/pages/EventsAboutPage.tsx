"use client";
import React from 'react';
import EventsHeader from '../components/EventsHeader';
import EventsFooter from '../components/EventsFooter';

export default function EventsAboutPage() {
  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden ">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" 
              alt="Hakkımızda Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <span className="text-[#C19A6B] tracking-[0.2em] text-xs md:text-sm font-light uppercase mb-4 block">
              Zehra Organizasyon
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white">Hakkımızda</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#1A1614] mb-8 leading-tight">
                Hayallerinizi <span className="text-[#C19A6B] italic">Gerçeğe</span> Dönüştürüyoruz.
              </h2>
              <p className="text-lg font-light text-[#4A403A]/80 leading-relaxed mb-6">
                Zehra Organizasyon olarak, en özel anlarınızı unutulmaz kılmak için buradayız. Yılların getirdiği tecrübe ve detaylara verdiğimiz önemle, hayalinizdeki konsepti en ince ayrıntısına kadar planlıyor ve hayata geçiriyoruz.
              </p>
              <p className="text-lg font-light text-[#4A403A]/80 leading-relaxed">
                Lüks düğünlerden kurumsal lansmanlara kadar her etkinlikte kusursuzluğu hedefliyoruz. Size sadece anın tadını çıkarmak kalıyor.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Etkinlik 1" className="w-full h-[300px] object-cover" />
              <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="Etkinlik 2" className="w-full h-[300px] object-cover mt-8" />
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="bg-[#1A1614] text-white py-24 px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <svg className="w-12 h-12 mx-auto text-[#C19A6B] mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <h3 className="text-2xl md:text-4xl font-serif mb-6 leading-relaxed">
              "Detaylardaki gizli zarafet, mükemmel bir organizasyonun kalbidir."
            </h3>
            <p className="text-[#C19A6B] tracking-widest uppercase text-sm">Zehra İsmail Akdemir</p>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 shadow-sm border border-[#C19A6B]/20 rounded-sm">
              <div className="w-12 h-12 bg-[#FDFBF7] flex items-center justify-center rounded-full mb-6 text-[#C19A6B]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
              </div>
              <h3 className="text-2xl font-serif text-[#1A1614] mb-4">Vizyonumuz</h3>
              <p className="text-[#4A403A]/70 font-light leading-relaxed">
                Etkinlik ve organizasyon sektöründe yenilikçi, sınırları zorlayan ve her zaman mükemmeli arayan öncü bir marka olmak. Tasarım dilimiz ve profesyonelliğimizle sadece Türkiye'de değil, uluslararası alanda da tercih edilen bir isim haline gelmek.
              </p>
            </div>
            
            <div className="bg-white p-12 shadow-sm border border-[#C19A6B]/20 rounded-sm">
              <div className="w-12 h-12 bg-[#FDFBF7] flex items-center justify-center rounded-full mb-6 text-[#C19A6B]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
              </div>
              <h3 className="text-2xl font-serif text-[#1A1614] mb-4">Misyonumuz</h3>
              <p className="text-[#4A403A]/70 font-light leading-relaxed">
                Müşterilerimizin hayallerini merkeze alarak, her organizasyonu kendi hikayesiyle eşsiz kılmak. Güven, kalite ve şeffaflık ilkelerinden ödün vermeden, baştan sona stresten uzak, keyifli ve kusursuz etkinlik deneyimleri yaşatmak.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-[#F6F3EC] py-20 px-6 md:px-12 border-y border-[#C19A6B]/20">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#1A1614] mb-2">500+</p>
              <p className="text-[#C19A6B] text-xs uppercase tracking-widest font-semibold">Başarılı Etkinlik</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#1A1614] mb-2">10</p>
              <p className="text-[#C19A6B] text-xs uppercase tracking-widest font-semibold">Yıllık Tecrübe</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#1A1614] mb-2">250+</p>
              <p className="text-[#C19A6B] text-xs uppercase tracking-widest font-semibold">Mutlu Çift</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-serif text-[#1A1614] mb-2">15+</p>
              <p className="text-[#C19A6B] text-xs uppercase tracking-widest font-semibold">Uzman Ekip Üyesi</p>
            </div>
          </div>
        </section>
      </main>

      <EventsFooter />
    </div>
  );
}
