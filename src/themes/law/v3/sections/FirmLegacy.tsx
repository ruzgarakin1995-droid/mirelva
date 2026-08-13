import React from 'react';
export default function FirmLegacy() {
  return (
    <section className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-yellow-600 tracking-[0.2em] text-sm font-light uppercase mb-4 block">Köklü Miras</span>
            <h2 className="text-4xl md:text-6xl font-serif text-slate-100 mb-8 leading-tight">Bir Asırlık <br/>Hukuk Geleneği</h2>
            <div className="h-px w-24 bg-yellow-600/50 mb-8" />
            <p className="text-slate-400 font-light leading-relaxed mb-6 text-lg">
              1924'ten bu yana, hukukun üstünlüğü ilkesinden ödün vermeden, en karmaşık hukuki ihtilafları çözüme kavuşturuyoruz.
            </p>
            <p className="text-slate-500 font-light leading-relaxed text-base">
              Müvekkillerimizin haklarını korumak, sadece bir meslek değil, nesilden nesile aktarılan kutsal bir görevdir. Her bir dava dosyası, yazdığımız yeni bir zafer destanıdır.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 border border-yellow-600/20 z-0 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-700" />
            <img src="https://images.unsplash.com/photo-1505664177922-94928e1d2c20?q=80&w=1000&auto=format&fit=crop" alt="Library" className="relative z-10 w-full grayscale contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-700 object-cover aspect-[4/5]" />
          </div>
        </div>
      </div>
    </section>
  );
}
