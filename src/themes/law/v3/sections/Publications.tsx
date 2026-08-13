import React from 'react';
export default function Publications() {
  return (
    <section className="py-24 bg-slate-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-slate-100 mb-12 text-center">Akademik Yayınlar & İçtihat</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {[
            "Dijital Çağda Tahkim Süreçleri",
            "Yapay Zeka ve Fikri Mülkiyet",
            "Yeni Ticaret Kanunu Analizi",
            "Uluslararası Sözleşmelerde Mücbir Sebep"
          ].map((pub, i) => (
            <div key={i} className="px-8 py-5 border border-white/5 bg-slate-950 hover:border-yellow-600/50 text-slate-400 hover:text-slate-200 transition-all cursor-pointer text-sm font-light tracking-wide hover:-translate-y-1">
              {pub}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
