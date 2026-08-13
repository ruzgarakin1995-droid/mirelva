"use client";
import React from 'react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

const Events = () => {
  const events = [
    {
      date: "15 Eki",
      title: "Trüf Sezonu Prömiyeri",
      desc: "Alba beyaz trüf mantarının 7 aşamalı keşfi.",
    },
    {
      date: "02 Kas",
      title: "Dom Pérignon Eşleşmesi",
      desc: "Kav ustası eşliğinde özel rekolte şampanya eşleşmeli akşam yemeği.",
    },
    {
      date: "31 Ara",
      title: "Yılbaşı Galası",
      desc: "Görkemiyle büyüleyen 10 aşamalı altın menümüzle yeni yıla merhaba deyin.",
    }
  ];

  return (
    <section className="section-padding bg-black border-t border-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold">Gündem</span>
              <span className="h-[1px] w-12 bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white">
              <TextReveal text="Yaklaşan Etkinlikler" highlightedWords={["Etkinlikler"]} highlightClassName="italic text-gray-500" />
            </h2>
          </div>
          <button className="hidden md:block btn-outline mt-6 md:mt-0">Takvimi Görüntüle</button>
        </div>

        <ScrollReveal staggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <ScrollRevealChild
              key={idx}
              variant="fade-up"
              className="bg-gray-900 p-8 border border-gray-800 hover:border-gold/50 transition-colors group cursor-pointer"
            >
              <div className="text-gold font-sans font-bold tracking-widest uppercase text-sm mb-4">
                {event.date}
              </div>
              <h3 className="text-2xl text-white font-serif mb-4 group-hover:text-gold transition-colors">
                {event.title}
              </h3>
              <p className="text-gray-400 font-sans text-sm line-clamp-3 mb-6">
                {event.desc}
              </p>
              <div className="text-white text-xs uppercase tracking-widest flex items-center group-hover:text-gold transition-colors">
                <span>Rezervasyon</span>
                <span className="ml-2 w-4 h-[1px] bg-white group-hover:bg-gold transition-colors"></span>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Events;


