import React from 'react';
export default function CaseStudiesAccordion() {
  return (
    <section className="py-32 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-yellow-600 tracking-[0.2em] text-sm font-light uppercase mb-4 block">Emsal Kararlar</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-100">Zaferlerimiz</h2>
          </div>
          <button className="text-xs uppercase tracking-widest text-slate-400 hover:text-yellow-500 transition-colors pb-2 border-b border-white/10 hover:border-yellow-500 mt-6 md:mt-0">
            Tüm Dosyaları İncele
          </button>
        </div>
        <div className="border-t border-white/10">
          {[
            "Uluslararası Teknoloji Şirketi Birleşmesi",
            "Sınır Ötesi Tahkim Davası Zaferi",
            "Endüstriyel Tasarım İhlali Süreci"
          ].map((title, i) => (
            <div key={i} className="group border-b border-white/10 py-10 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-white/[0.02] transition-colors px-4 -mx-4">
              <div className="flex-1">
                <span className="text-slate-500 text-sm font-mono mb-2 block">DAVA NO: {202400 + i + 1}</span>
                <h3 className="text-2xl font-serif text-slate-200 group-hover:text-yellow-500 transition-colors">{title}</h3>
              </div>
              <div className="flex-1 mt-4 md:mt-0 text-slate-400 font-light text-sm md:pr-8">
                Müvekkilimizin stratejik hedefleri doğrultusunda, karmaşık hukuki engellerin kusursuzca aşılması ve emsal teşkil eden sonuç.
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-yellow-600/50 group-hover:bg-yellow-600/10 transition-all mt-6 md:mt-0">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
