"use client";
import React from 'react';
import Link from 'next/link';

export default function Page() {
  const newV2Themes: Array<{name: string, path: string}> = [
    { name: "Rent A Car V2 (Platform)", path: "/test-rentacar-v2" },
    { name: "E-Ticaret V2 (Platform)", path: "/test-ecommerce-v2" },
    { name: "Emlak V2 (Platform)", path: "/test-realestate-v2" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-8 overflow-y-auto">
      <div className="max-w-5xl w-full text-center py-12">
        <h1 className="text-5xl font-bold text-white mb-4">Award-Winning Agency (Yeni V2)</h1>
        <p className="text-zinc-400 mb-12">Tüm eski şablonlar silindi. Yepyeni, lüks ve hikaye odaklı tasarımlar için temiz bir sayfa.</p>
        
        {newV2Themes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {newV2Themes.map((theme) => (
              <Link 
                key={theme.name} 
                href={theme.path}
                className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800 transition-all text-center flex flex-col justify-center items-center gap-3 group hover:border-zinc-600 hover:-translate-y-1"
              >
                <span className="text-xl font-medium text-white group-hover:text-amber-400 transition-colors">{theme.name}</span>
                <span className="text-sm text-zinc-500">{theme.path}</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-12 border border-zinc-800 border-dashed rounded-2xl flex items-center justify-center">
            <p className="text-zinc-500 font-mono">Henüz yeni V2 teması üretilmedi. Bekleniyor...</p>
          </div>
        )}
      </div>
    </div>
  );
}
