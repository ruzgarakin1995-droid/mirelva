"use client";
import React, { useState } from 'react';
import EventsHeader from '../components/EventsHeader';
import EventsFooter from '../components/EventsFooter';

export default function EventsGalleryPage() {
  const [filter, setFilter] = useState('All');

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop", category: "Düğün" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", category: "Düğün" },
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", category: "Kurumsal" },
    { src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop", category: "Dış Mekan" },
    { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop", category: "Kutlama" },
    { src: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop", category: "Catering" },
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", category: "Kurumsal" },
    { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop", category: "Dış Mekan" },
    { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop", category: "Düğün" },
  ];

  const categories = ['All', 'Düğün', 'Kurumsal', 'Kutlama', 'Dış Mekan', 'Catering'];

  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="font-sans antialiased text-[#4A403A] bg-[#FDFBF7] selection:bg-[#C19A6B] selection:text-white">
      <EventsHeader />

      <main className="w-full flex flex-col overflow-x-hidden ">
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
              alt="Galeri Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">Galeri</h1>
            <p className="text-white/80 font-light max-w-xl mx-auto">Geçmiş organizasyonlarımızdan unutulmaz kareler.</p>
          </div>
        </section>

        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24 w-full">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-widest transition-colors duration-300 pb-1 border-b ${
                  filter === cat ? 'text-[#C19A6B] border-[#C19A6B]' : 'text-[#4A403A]/60 border-transparent hover:text-[#1A1614]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden h-[300px] md:h-[400px]">
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif text-xl tracking-widest">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <EventsFooter />
    </div>
  );
}
