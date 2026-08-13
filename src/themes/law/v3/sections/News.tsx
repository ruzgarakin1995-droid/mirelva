import React from 'react';
export default function News() {
  return (
    <section className="py-32 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-6">
          <h2 className="text-4xl font-serif text-slate-100">Gündem & Basın</h2>
          <span className="text-xs tracking-widest text-yellow-600 uppercase cursor-pointer hover:text-yellow-500">Tüm Haberler</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {["1450101499163-c8848c66cb85", "1589391886645-d51941baf7fb", "1523995462485-3d171b5c8fa9"].map((img, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="h-64 bg-slate-900 mb-6 overflow-hidden relative border border-white/5">
                <img src={`https://images.unsplash.com/photo-${img}?q=80&w=600&auto=format&fit=crop`} alt="News" className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
              </div>
              <span className="text-yellow-600/70 text-xs tracking-[0.2em] mb-3 block font-medium uppercase">{i+11} Eylül 2026</span>
              <h3 className="text-xl font-serif text-slate-200 group-hover:text-yellow-500 transition-colors leading-snug">Önemli Birleşme Dosyası ve Rekabet Kurulu Kararı</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
