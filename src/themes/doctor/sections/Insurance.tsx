"use client";
import React from 'react';

export default function Insurance() {
  return (
    <section className="py-16 bg-[var(--surface-alt)] border-y border-[var(--border)]">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-xl font-bold text-[var(--primary)] mb-8">Anlaşmalı Kurumlar ve Sigortalar</h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black text-gray-500">Allianz</div>
          <div className="text-2xl font-black text-gray-500">Acıbadem Sigorta</div>
          <div className="text-2xl font-black text-gray-500">Mapfre</div>
          <div className="text-2xl font-black text-gray-500">Axa Sigorta</div>
          <div className="text-2xl font-black text-gray-500">SGK</div>
        </div>
      </div>
    </section>
  );
}

