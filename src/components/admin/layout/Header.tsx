"use client";

import React from 'react';
import { Search, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-10 flex items-center justify-between px-6">
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md hover:border-zinc-700 transition-colors">
          <Search size={14} />
          <span>Search...</span>
          <kbd className="ml-4 text-[10px] bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">⌘K</kbd>
        </button>
        
        <button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-zinc-950"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-500 cursor-pointer" />
      </div>
    </header>
  );
}
