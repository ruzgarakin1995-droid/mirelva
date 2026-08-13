"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <ScrollReveal variant="slide-right" className="w-full lg:w-1/3">
            <span className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Referanslar</span>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <TextReveal text="İş Ortaklarımızın Gözünden" />
            </h2>
            <p className="text-slate-600 mb-8">
              Otomotivden tekstile, elektronikten kimyaya kadar birçok sektörün lider markaları lojistik operasyonlarını bize emanet ediyor.
            </p>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">→</button>
              <button className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">→</button>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" className="w-full lg:w-2/3">
            <div className="bg-white p-10 rounded-3xl shadow-lg relative border border-slate-100">
              <Quote className="w-16 h-16 text-blue-100 absolute top-6 right-10" />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => <span key={star} className="text-yellow-400 text-xl">★</span>)}
              </div>
              <p className="text-xl text-slate-700 italic mb-8 relative z-10 leading-relaxed">
                "Asya'dan Avrupa'ya uzanan karmaşık tedarik zincirimizde en büyük destekçimiz oldular. Özellikle gümrük süreçlerindeki proaktif yaklaşımları sayesinde termin sürelerimizde ciddi iyileşmeler sağladık."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Ahmet Yılmaz" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">Ahmet Yılmaz</h4>
                  <p className="text-slate-500 text-sm">Tedarik Zinciri Direktörü, Global Otomotiv A.Ş.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

