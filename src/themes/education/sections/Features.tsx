"use client";
import React from 'react';
import { Globe2, Laptop, Trophy, Users } from 'lucide-react';

const features = [
  {
    icon: <Globe2 className="w-8 h-8 text-blue-400" />,
    title: "Küresel Akreditasyon",
    desc: "Dünyanın en prestijli 100 üniversitesi arasında yer alan diplomamız ile uluslararası kariyer."
  },
  {
    icon: <Laptop className="w-8 h-8 text-purple-400" />,
    title: "İleri Teknoloji Laboratuvarları",
    desc: "Yapay zeka, kuantum bilişim ve biyoteknoloji alanlarında son teknoloji araştırma merkezleri."
  },
  {
    icon: <Trophy className="w-8 h-8 text-indigo-400" />,
    title: "Mükemmeliyet Merkezi",
    desc: "Nobel ödüllü akademisyenler ve sektör liderleriyle birebir çalışma imkanı."
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Geniş Mezun Ağı",
    desc: "150 farklı ülkeden 50,000+ mezunumuzla küresel bağlantılar kurun."
  }
];

export const Features = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Neden Biz?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">Eğitimde mükemmelliği hedefleyen yapımızla size sadece bir diploma değil, sınırların ötesinde bir vizyon sunuyoruz.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



