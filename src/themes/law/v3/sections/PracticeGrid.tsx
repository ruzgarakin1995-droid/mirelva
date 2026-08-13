import React from 'react';
const practices = [
  { title: "Şirketler Hukuku", desc: "Küresel birleşme ve devralmalarda stratejik hamleler." },
  { title: "Ceza Hukuku", desc: "Özgürlüğünüzün tavizsiz ve kudretli savunması." },
  { title: "Uluslararası Tahkim", desc: "Sınır ötesi ihtilaflarda diplomatik ve hukuki zafer." },
  { title: "Fikri Mülkiyet", desc: "Değerli fikirlerinizin zırhı ve kılıcı." }
];
export default function PracticeGrid() {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-yellow-600/20 to-transparent -translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-100 mb-6">Kudretli Uzmanlık</h2>
          <p className="text-slate-400 font-light text-lg">Her biri kendi alanında otorite olan departmanlarımızla, hukukun her cephesinde savaşa hazırız.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {practices.map((p, i) => (
            <div key={i} className="group p-12 bg-slate-950 hover:bg-slate-900 transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600/0 group-hover:via-yellow-600/50 to-transparent transition-all duration-700" />
              <span className="text-yellow-600/10 font-serif text-6xl absolute -top-4 -right-4 group-hover:text-yellow-600/20 transition-colors duration-500">0{i+1}</span>
              <div className="relative z-10">
                <h3 className="text-2xl font-serif text-slate-100 mb-4 group-hover:text-yellow-500 transition-colors">{p.title}</h3>
                <p className="text-slate-500 font-light group-hover:text-slate-300 transition-colors">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
