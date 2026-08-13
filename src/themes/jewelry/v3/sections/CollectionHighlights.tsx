'use client';
import React from 'react';

export default function CollectionHighlights() {
  const items = [
    { title: 'AURA', desc: 'Pırlanta Yüzük Serisi', img: 'https://images.unsplash.com/photo-1605100804763-247f66156ce4?q=80&w=800&auto=format&fit=crop' },
    { title: 'LUMINA', desc: 'Safir Kolyeler', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop' },
    { title: 'NOIR', desc: 'Özel Tasarım Küpeler', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="py-32 px-4 bg-black border-b border-gold-thin">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="font-display text-4xl md:text-6xl text-white mb-6">İkonik <span className="shimmer-text">Koleksiyonlar</span></h2>
        <div className="w-24 h-[1px] bg-[#d4af37] mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div key={idx} className="group cursor-pointer relative overflow-hidden">
            <div className="img-zoom-container h-[500px] border border-platinum-thin p-1">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover vignette" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-black via-black/50 to-transparent">
              <h3 className="font-display text-3xl text-[#d4af37] mb-2">{item.title}</h3>
              <p className="text-gray-300 font-light italic">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
