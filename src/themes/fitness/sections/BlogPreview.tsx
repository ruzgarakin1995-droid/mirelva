"use client";
import React from 'react';

export function BlogPreview() {
  return (
    <section className="py-32 bg-zinc-950 text-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black tracking-tighter">HABER AKIŞI</h2>
          <button className="uppercase tracking-widest text-cyan-400 text-sm font-bold hover:text-white transition-colors">Tüm Haberleri Gör â†’</button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "HIIT Sonrası Toparlanmayı Optimize Etmek", tag: "Bilim" },
            { title: "Yeni Baş Antrenörümüzle Tanışın: Sarah K.", tag: "Topluluk" },
            { title: "Büyüme Sezonu İçin Beslenme Stratejileri", tag: "Beslenme" }
          ].map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden relative bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')" }}>
                 <div className="absolute inset-0 bg-white/5 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest mb-3">{post.tag}</div>
              <h3 className="text-2xl font-bold uppercase group-hover:text-cyan-400 transition-colors">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

