"use client";
import React, { useState, useEffect } from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const Calculator = () => {
  const [step, setStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSteps = 3;

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  const Step1 = () => (
    <div className={`${isMobile && step !== 1 ? 'hidden' : 'block'} md:block mb-6`}>
      <h3 className="text-xl font-bold text-blue-950 mb-4">Adım 1: Başlangıç Sermayesi</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mevcut Tasarruf (USD)</label>
          <input type="number" defaultValue={100000} className="w-full min-h-[44px] p-3 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Aylık Ek Katkı (USD)</label>
          <input type="number" defaultValue={2000} className="w-full min-h-[44px] p-3 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none" />
        </div>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className={`${isMobile && step !== 2 ? 'hidden' : 'block'} md:block mb-6`}>
      <h3 className="text-xl font-bold text-blue-950 mb-4">Adım 2: Yatırım Süresi ve Risk</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Yatırım Ufku (Yıl)</label>
          <input type="range" min="1" max="30" defaultValue="10" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
          <div className="text-right text-sm font-bold text-blue-950 mt-1">10 Yıl</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Risk Profili</label>
          <select className="w-full min-h-[44px] p-3 border border-slate-300 rounded focus:ring-2 focus:ring-yellow-500 outline-none">
            <option>Düşük Risk (Defansif)</option>
            <option selected>Orta Risk (Dengeli)</option>
            <option>Yüksek Risk (Agresif)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className={`${isMobile && step !== 3 ? 'hidden' : 'block'} md:block mb-6`}>
      <h3 className="text-xl font-bold text-blue-950 mb-4">Adım 3: Sonuç Özeti</h3>
      <div className="bg-blue-50 p-6 rounded border border-blue-100 text-center">
        <p className="text-sm text-slate-500 mb-2">Tahmini Portföy Büyüklüğü</p>
        <h4 className="text-4xl font-bold text-blue-950 mb-2">$452,800</h4>
        <p className="text-xs text-slate-400">*%8 ortalama yıllık getiri varsayımı ile</p>
      </div>
      <button className="w-full min-h-[44px] mt-6 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold py-3 transition-colors">
        Detaylı Rapor İste
      </button>
    </div>
  );

  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-blue-950 mb-4">
            <TextReveal text="Yatırım Simülatörü" className="justify-center" />
          </h2>
          <p className="text-slate-600">Gelecekteki varlığınızı bugünden planlayın.</p>
        </ScrollReveal>

        <ScrollReveal variant="scale" className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden border border-slate-200">
          <div className="p-8">
            {/* Mobile Stepper Header */}
            {isMobile && (
              <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                <div className="text-sm font-bold text-yellow-600">Adım {step} / {totalSteps}</div>
                <div className="flex space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`h-2 w-8 rounded ${i <= step ? 'bg-yellow-500' : 'bg-slate-200'}`} />
                  ))}
                </div>
              </div>
            )}

            <ScrollReveal staggerChildren as="form" className="md:grid md:grid-cols-3 md:gap-8">
              <ScrollRevealChild variant="fade-up"><Step1 /></ScrollRevealChild>
              <ScrollRevealChild variant="fade-up"><Step2 /></ScrollRevealChild>
              <ScrollRevealChild variant="fade-up"><Step3 /></ScrollRevealChild>
            </ScrollReveal>

            {/* Mobile Stepper Controls */}
            {isMobile && (
              <div className="flex justify-between mt-6 pt-6 border-t border-slate-100">
                <button 
                  onClick={prevStep} 
                  disabled={step === 1}
                  className={`min-h-[44px] px-6 py-2 border border-slate-300 font-medium ${step === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-50'}`}
                >
                  Geri
                </button>
                {step < totalSteps && (
                  <button 
                    onClick={nextStep}
                    className="min-h-[44px] px-6 py-2 bg-blue-950 text-white font-medium hover:bg-blue-900"
                  >
                    İleri
                  </button>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};



