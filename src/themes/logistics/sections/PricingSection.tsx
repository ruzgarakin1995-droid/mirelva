"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const PricingSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Rekabetçi Navlunlar</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            <TextReveal text="Şeffaf Maliyetlendirme" className="justify-center" />
          </h2>
          <p className="text-lg text-slate-600">Projenizin veya yükünüzün özelliklerine göre optimize edilmiş, sürpriz maliyetler barındırmayan net teklifler sunuyoruz.</p>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-12 bg-slate-900 text-white">
              <h3 className="text-2xl font-bold mb-4">Özel Teklif İsteği</h3>
              <p className="text-slate-400 mb-8">Kurumsal taşımacılık ihtiyaçlarınız için form doldurun, uzman ekibimiz 2 saat içinde size özel navlun çalışmasını iletsin.</p>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-center gap-3">✓ SPOT ve Kontratlı Fiyatlandırma</li>
                <li className="flex items-center gap-3">✓ Konsolide Yük Avantajları</li>
                <li className="flex items-center gap-3">✓ Sigorta ve Gümrükleme Opsiyonları</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 p-12">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Taşıma Modu</label>
                  <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500">
                    <option>Denizyolu (FCL/LCL)</option>
                    <option>Havayolu</option>
                    <option>Karayolu</option>
                  </select>
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Yükleme Yeri</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500" placeholder="Ülke / Şehir" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Varış Yeri</label>
                    <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500" placeholder="Ülke / Şehir" />
                  </div>
                </div>
                <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors">
                  Teklif Talep Et
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

