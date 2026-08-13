import React from 'react';
export default function Values() {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif text-slate-300 mb-12 italic">Sarsılmaz İlkelerimiz</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-500 font-serif text-xl md:text-2xl">
          <span className="hover:text-yellow-500 transition-colors cursor-default">Sadakat</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-yellow-500 transition-colors cursor-default">Gizlilik</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-yellow-500 transition-colors cursor-default">Liyakat</span>
          <span className="text-white/10">•</span>
          <span className="hover:text-yellow-500 transition-colors cursor-default">Kudret</span>
        </div>
      </div>
    </section>
  );
}
