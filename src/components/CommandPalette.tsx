"use client";

import React, { useEffect, useState } from "react";
import { Search, Globe, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32 bg-black/50 backdrop-blur-sm">
      <div 
        className="fixed inset-0" 
        onClick={() => setIsOpen(false)}
      />
      <div className="relative w-full max-w-2xl bg-[#111] rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all">
        
        <div className="flex items-center px-4 border-b border-white/5 bg-[#1A1A1A]">
          <Search className="w-5 h-5 text-gray-400" />
          <input 
            type="text" 
            autoFocus
            placeholder="Proje ara, sayfa bul veya komut çalıştır..." 
            className="w-full bg-transparent border-none outline-none text-white px-4 py-4 text-base placeholder-gray-500"
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => {
              if(e.key === 'Enter' && search) {
                setIsOpen(false);
                router.push(`/studio/projects?search=${search}`);
              }
            }}
          />
          <div className="flex items-center gap-1">
            <kbd className="hidden sm:inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded px-2 py-0.5 text-xs text-gray-400">ESC</kbd>
          </div>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {/* Quick Actions */}
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Hızlı İşlemler</div>
          
          <div 
            onClick={() => { setIsOpen(false); router.push("/studio/new"); }}
            className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-indigo-500/10 cursor-pointer text-gray-300 hover:text-white group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Globe className="w-4 h-4 text-gray-400" />
              </div>
              <span>Yeni Website Oluştur</span>
            </div>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div 
            onClick={() => { setIsOpen(false); router.push("/studio/copilot"); }}
            className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-indigo-500/10 cursor-pointer text-gray-300 hover:text-white group transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <span>AI ile Tasarım Üret</span>
            </div>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}
