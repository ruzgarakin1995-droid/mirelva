import React from 'react';
import Link from 'next/link';

export default function HotelHomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d1409e5c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Hotel Pool"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f0f0f]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#B59461] uppercase tracking-[0.3em] mb-4 text-sm font-medium">Beş Yıldızlı Ayrıcalık</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Sonsuz Lüksün <br/> <span className="text-[#B59461] italic">Büyüsü</span>
          </h1>
          <p className="text-gray-300 mb-10 text-lg md:text-xl font-light max-w-2xl">
            Denizin mavisinden, doğanın yeşiline, ruhunuzu dinlendirecek kusursuz bir deneyime davetlisiniz.
          </p>
          <div className="flex gap-4">
            <Link href="/hotel/rooms" className="px-8 py-4 bg-[#B59461] text-black font-semibold uppercase tracking-widest hover:bg-[#D4AF37] transition-all duration-300 transform hover:-translate-y-1">
              Odaları Keşfedin
            </Link>
            <Link href="/hotel/reservations" className="px-8 py-4 border border-[#B59461] text-[#B59461] font-semibold uppercase tracking-widest hover:bg-[#B59461] hover:text-black transition-all duration-300">
              Rezervasyon Yap
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0f0f0f] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Neden Biz?</h2>
            <div className="w-24 h-1 bg-[#B59461] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Premium Konaklama",
                desc: "Her detayı özenle tasarlanmış odalarımızda evinizin konforunu aşan bir lüks yaşayın.",
                icon: "✨"
              },
              {
                title: "Gurme Lezzetler",
                desc: "Dünyaca ünlü şeflerimizin hazırladığı eşsiz tatlar ile gastronomi yolculuğuna çıkın.",
                icon: "🍽️"
              },
              {
                title: "Spa & Sağlık",
                desc: "Ruhunuzu ve bedeninizi tazeleyecek özel terapilerimizle kendinizi şımartın.",
                icon: "🌿"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-[#1a1a1a] p-10 border border-[#B59461]/20 hover:border-[#B59461] transition-colors group cursor-default text-center">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-serif text-[#B59461] mb-4 group-hover:text-[#D4AF37]">{feature.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visual Break */}
      <section className="h-[60vh] relative flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2000" 
            alt="Hotel Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Unutulmaz Anılar İçin</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">Bizimle geçirdiğiniz her an, ömür boyu hatırlayacağınız bir anıya dönüşür.</p>
        </div>
      </section>
    </div>
  );
}
