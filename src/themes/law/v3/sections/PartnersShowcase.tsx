import React from 'react';
export default function PartnersShowcase() {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-20 text-center">Kurucu Ortaklarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: "Av. Mehmet Kara", role: "Kıdemli Yönetici Ortak", img: "1560250097001-3946448443e4" },
            { name: "Av. Zeynep Arslan", role: "Uluslararası Tahkim", img: "1573496359142-b8d87734a5a2" },
            { name: "Av. Caner Yalçın", role: "Ceza Hukuku Başkanı", img: "1507003211169-0a1dd7228f2d" }
          ].map((partner, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative h-[500px] mb-6 overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-slate-800 z-0" />
                <img src={`https://images.unsplash.com/photo-${partner.img}?q=80&w=600&auto=format&fit=crop`} alt={partner.name} className="relative z-10 w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20 opacity-90" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-slate-200 group-hover:text-yellow-500 transition-colors">{partner.name}</h3>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-[0.2em] font-medium">{partner.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
