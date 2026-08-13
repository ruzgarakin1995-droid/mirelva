"use client";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-serif font-light tracking-widest text-[#F7E7CE] uppercase mb-6">Hotel V3</h2>
          <p className="font-light max-w-sm">Zamanın durduğu, doğanın ve lüksün kusursuz uyum içinde buluştuğu sığınağınız.</p>
        </div>
        <div>
          <h3 className="text-[#F7E7CE] tracking-widest uppercase text-sm mb-6">İletişim</h3>
          <ul className="space-y-4 font-light text-sm">
            <li>T. +90 212 000 00 00</li>
            <li>E. rzv@hotelv3.com</li>
            <li>Cennet Koyu, Bodrum / Türkiye</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#F7E7CE] tracking-widest uppercase text-sm mb-6">Keşfet</h3>
          <ul className="space-y-4 font-light text-sm uppercase tracking-wider">
            <li><a href="#" className="hover:text-[#F7E7CE] transition-colors">Süitler</a></li>
            <li><a href="#" className="hover:text-[#F7E7CE] transition-colors">Spa</a></li>
            <li><a href="#" className="hover:text-[#F7E7CE] transition-colors">Restoranlar</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-zinc-800 text-xs font-light tracking-widest text-center flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 HOTEL V3. TÜM HAKLARI SAKLIDIR.</p>
        <p>A DIGITAL MASTERPIECE</p>
      </div>
    </footer>
  );
};