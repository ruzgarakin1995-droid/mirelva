"use client";

import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif mb-4">Lumière Ayrıcalıklar Dünyası</h2>
        <p className="text-gray-400 font-light mb-10 tracking-wide max-w-2xl mx-auto">
          Yeni koleksiyonlardan, özel indirimlerden ve stil ipuçlarından ilk siz haberdar olun. Bültenimize katılarak lüks dünyasına adım atın.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="E-posta Adresiniz" 
            className="flex-1 bg-transparent border border-gray-700 py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
            required
          />
          <button 
            type="submit" 
            className="bg-white text-black py-4 px-10 text-sm font-medium uppercase tracking-widest hover:bg-gray-200 transition-colors"
          >
            Abone Ol
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-6 font-light">
          Kayıt olarak Gizlilik Politikamızı ve Şartları kabul etmiş olursunuz.
        </p>
      </div>
    </section>
  );
}

