"use client";
import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    date: "15",
    month: "EKİM",
    title: "Küresel Teknoloji Zirvesi 2027",
    location: "Ana Kampüs, İnovasyon Merkezi",
    type: "Konferans"
  },
  {
    date: "22",
    month: "EKİM",
    title: "Yapay Zeka ve Etik Sempozyumu",
    location: "Çevrimiçi & Oditoryum B",
    type: "Sempozyum"
  },
  {
    date: "05",
    month: "KASIM",
    title: "Geleceğin Kariyerleri Fuarı",
    location: "Kariyer Merkezi",
    type: "Kariyer Fuarı"
  }
];

export const Events = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="flex-1">
          <div className="text-purple-400 font-medium tracking-wider text-sm mb-3 uppercase">Etkinlikler</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Kampüste Yaşam <br className="hidden md:block"/>Hiç Durmuyor</h2>
          <p className="text-slate-400 text-base md:text-lg mb-8 max-w-md">Global konferanslardan, kariyer fuarlarına kadar kampüsümüzde gerçekleşecek yaklaşan etkinlikleri takviminize ekleyin.</p>
          <button className="min-h-[44px] min-w-[44px] px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white rounded-xl font-medium transition-colors flex items-center gap-2">
            Tüm Takvimi Gör <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 flex flex-col gap-4">
          {events.map((e, i) => (
            <div key={i} className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors group cursor-pointer">
              <div className="flex flex-row sm:flex-col items-center justify-center shrink-0 min-w-[80px] bg-slate-950 rounded-xl p-4 sm:p-0 border border-slate-800 group-hover:bg-purple-900/20 group-hover:border-purple-500/30 transition-all">
                <span className="text-3xl sm:text-4xl font-extrabold text-white mr-2 sm:mr-0">{e.date}</span>
                <span className="text-purple-400 text-xs sm:text-sm font-bold tracking-widest">{e.month}</span>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs font-semibold text-slate-500 uppercase mb-2">{e.type}</span>
                <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors mb-2">{e.title}</h3>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {e.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



