"use client";
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ScrollReveal, ScrollRevealChild } from "@/components/animations/ScrollReveal";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";
import { TextReveal } from "@/components/animations/TextReveal";

const marketData = [
  { symbol: "S&P 500", value: 5123.45, change: "+1.2%", isUp: true },
  { symbol: "NASDAQ", value: 16234.12, change: "+0.8%", isUp: true },
  { symbol: "BIST 100", value: 9854.30, change: "-0.5%", isUp: false },
  { symbol: "GOLD/USD", value: 2345.10, change: "+2.1%", isUp: true },
  { symbol: "EUR/USD", value: 1.0854, change: "-0.1%", isUp: false, decimals: 4 }
];

export const MarketData = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <ScrollReveal variant="fade-up">
            <h2 className="text-3xl font-serif mb-4">
              <TextReveal text="Canlı Piyasa Verileri" />
            </h2>
            <p className="text-slate-400">Gerçek zamanlı göstergeler ve ana endeksler</p>
          </ScrollReveal>
          <ScrollReveal variant="fade-up">
            <button className="mt-6 md:mt-0 px-6 min-h-[44px] border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-slate-900 transition-colors">
              Tüm Verileri Gör
            </button>
          </ScrollReveal>
        </div>

        {/* RESPONSIVE TABLE TO CARDS: Mobile: Grid of Cards, Desktop: Table */}
        <ScrollReveal staggerChildren className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 text-sm uppercase tracking-wider">
                <th className="py-4 px-6 font-medium">Sembol / Endeks</th>
                <th className="py-4 px-6 font-medium text-right">Son Fiyat</th>
                <th className="py-4 px-6 font-medium text-right">Değişim (%)</th>
                <th className="py-4 px-6 font-medium text-right">Trend</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((data, idx) => (
                <ScrollRevealChild as="tr" variant="fade-up" key={idx} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="py-5 px-6 font-semibold text-lg">{data.symbol}</td>
                  <td className="py-5 px-6 text-right font-mono text-lg">
                    <AnimatedCounter value={data.value} decimals={data.decimals || 2} />
                  </td>
                  <td className={`py-5 px-6 text-right font-medium ${data.isUp ? 'text-green-400' : 'text-red-400'}`}>
                    {data.change}
                  </td>
                  <td className="py-5 px-6 flex justify-end">
                    {data.isUp ? <ArrowUpRight className="text-green-400 w-6 h-6" /> : <ArrowDownRight className="text-red-400 w-6 h-6" />}
                  </td>
                </ScrollRevealChild>
              ))}
            </tbody>
          </table>
        </ScrollReveal>

        {/* Mobile View: Cards instead of Table */}
        <ScrollReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {marketData.map((data, idx) => (
            <ScrollRevealChild variant="fade-up" key={idx} className="bg-slate-800 p-5 rounded-lg border border-slate-700 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-lg mb-1">{data.symbol}</h4>
                <p className="font-mono text-slate-300">
                  <AnimatedCounter value={data.value} decimals={data.decimals || 2} />
                </p>
              </div>
              <div className={`flex flex-col items-end ${data.isUp ? 'text-green-400' : 'text-red-400'}`}>
                {data.isUp ? <ArrowUpRight className="w-5 h-5 mb-1" /> : <ArrowDownRight className="w-5 h-5 mb-1" />}
                <span className="font-medium">{data.change}</span>
              </div>
            </ScrollRevealChild>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};



