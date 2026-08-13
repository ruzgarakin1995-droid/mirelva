import React from 'react';
export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-900 border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575505586569-646b2ca898fc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 grayscale" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto text-yellow-600/30 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
          <p className="text-2xl md:text-4xl font-serif text-slate-300 leading-snug mb-10 italic">
            "Sadece hukuki bir danışmanlık değil, en karanlık fırtınalarda gemimizi limana sağ salim yanaştıran bir fener oldular."
          </p>
          <div className="h-px w-12 bg-yellow-600/50 mx-auto mb-6" />
          <span className="text-yellow-600 tracking-[0.2em] text-xs font-bold uppercase block">CEO, Global Holding</span>
        </div>
      </div>
    </section>
  );
}
