"use client";
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#09090b] flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-8 inline-block p-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="white"/>
            <text x="50" y="70" fontFamily="system-ui, sans-serif" fontSize="65" fontWeight="900" fill="#09090b" textAnchor="middle">M</text>
          </svg>
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter mb-6">Mirelva</h1>
        <p className="text-xl text-white/50 mb-12">
          Mirelva platformuna hoş geldiniz.
        </p>
      </div>
    </div>
  );
}
