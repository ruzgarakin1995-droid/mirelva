"use client";
import React from 'react';
import EventsHeader from '../components/EventsHeader';
import EventsFooter from '../components/EventsFooter';

export default function EventsVenuesPage() {
  const venues = [
    {
      name: "Tarihi Yalı",
      location: "Boğaz, İstanbul",
      desc: "Boğazın serin sularına nazır, tarihi dokusuyla büyüleyen eşsiz yalı.",
      img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
    },
    {
      name: "Lüks Balo Salonu",
      location: "Zorlu Center, İstanbul",
      desc: "Altın varaklı detaylar, kristal avizeler ve büyüleyici bir atmosfer.",
      img: "https://images.unsplash.com/photo-1545622783-b3e021430fee?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Kır Bahçesi",
      location: "Polonezköy, İstanbul",
      desc: "Doğanın kalbinde, yeşilin her tonunu barındıran huzur dolu bir mekan.",
      img: "/events/kir_bahcesi.jpg"
    },
    {
      name: "Modern Teras",
      location: "Levent, İstanbul",
      desc: "Şehrin ışıltılı silüetine karşı, modern ve sofistike bir davet alanı.",
      img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Sahil Kulübü",
      location: "Bodrum, Muğla",
      desc: "Ege'nin turkuaz sularında rüya gibi bir yaz düğünü.",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Tarihi Sarnıç",
      location: "Sultanahmet, İstanbul",
      desc: "Yüzyıllık sütünlar arasında büyüleyici bir mistik atmosfer.",
      img: "/events/tarihi_sarnic.jpg"
    }
  ];

  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden ">
        <section className="relative w-full h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2127&auto=format&fit=crop" 
              alt="Mekanlar Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Anlaşmalı Mekanlar</h1>
            <p className="text-white/80 font-light max-w-xl mx-auto">En özel anlarınızı, onlara layık mekanlarda kutlayın.</p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {venues.map((venue, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-6 h-[400px]">
                  <img 
                    src={venue.img} 
                    alt={venue.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1614] mb-2">{venue.name}</h3>
                <p className="text-[#C19A6B] text-xs uppercase tracking-widest mb-4">{venue.location}</p>
                <p className="text-[#4A403A]/70 font-light text-sm">{venue.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <EventsFooter />
    </div>
  );
}
