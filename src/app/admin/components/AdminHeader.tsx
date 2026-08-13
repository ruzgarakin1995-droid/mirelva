"use client";
import React from 'react';
import { Bell, Search, User as UserIcon } from 'lucide-react';

export default function AdminHeader({ user }: { user: any }) {
  return (
    <header className="bg-[#0A0A0A] border-b border-white/10 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center bg-[#111111] border border-white/5 rounded-lg px-3 py-2 w-96 transition-colors focus-within:border-white/20 focus-within:bg-[#151515]">
        <Search className="h-4 w-4 text-white/40 mr-2" />
        <input 
          type="text" 
          placeholder="İçerik, rezervasyon veya müşteri ara (Ctrl+K)" 
          className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-white/30"
        />
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-white/40 hover:text-white transition-colors relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
          </span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-white/10 pl-6">
          <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/5">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.name || 'Yönetici'}</p>
            <p className="text-xs text-white/40">{user?.email || 'admin@example.com'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
