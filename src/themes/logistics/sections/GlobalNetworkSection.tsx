"use client";
import React from 'react';
import { Map } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export const GlobalNetworkSection = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <ScrollReveal staggerChildren variant="slide-right" className="w-full lg:w-1/2">
            <ScrollRevealChild variant="fade-up" className="text-blue-600 font-semibold tracking-wider uppercase mb-2 block">Küresel Erişim</ScrollRevealChild>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              <TextReveal text="Dünyanın Dört Bir Yanında Lojistik Üslerimiz" />
            </h2>
            <ScrollRevealChild variant="fade-up" className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stratejik noktalardaki aktarma merkezlerimiz ve geniş acente ağımız sayesinde, ticaretin olduğu her kıtada yerel uzmanlıkla global hizmet veriyoruz. 
            </ScrollRevealChild>
            <div className="grid grid-cols-2 gap-6">
              {[
                { region: 'Avrupa', hubs: 'Frankfurt, Rotterdam, Milano' },
                { region: 'Asya Pasifik', hubs: 'Şanghay, Singapur, Tokyo' },
                { region: 'Kuzey Amerika', hubs: 'New York, Los Angeles' },
                { region: 'Ortadoğu', hubs: 'Dubai, Doha' }
              ].map((loc, i) => (
                <ScrollRevealChild variant="fade-up" key={i} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-bold text-slate-900">{loc.region}</h4>
                  <p className="text-sm text-slate-500 mt-1">{loc.hubs}</p>
                </ScrollRevealChild>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-left" className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-full border-4 border-slate-50 flex items-center justify-center bg-slate-100 shadow-inner">
               <Map className="w-32 h-32 text-slate-300" />
               <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
               <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
               <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-blue-600 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

