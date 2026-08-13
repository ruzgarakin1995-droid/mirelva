"use client";
import { Star } from 'lucide-react';
export default function GoogleReviews() {
  return (
    <section className="py-24 bg-white border-b border-[var(--border)] text-center px-6">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-medium mb-6">Google'da Bizi İnceleyin</h2>
        <div className="flex space-x-2 text-yellow-400 mb-6">
          {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={32}/>)}
        </div>
        <p className="text-5xl font-bold mb-4 text-[var(--primary)]">4.9/5</p>
        <p className="text-[var(--muted)] text-lg">250+ Gerçek Danışan Değerlendirmesi</p>
      </div>
    </section>
  );
}

