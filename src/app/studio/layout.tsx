"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, FolderGit2, Library, Settings, User, Bot, Search } from "lucide-react";
import CommandPalette from "@/components/CommandPalette";

const sidebarLinks = [
  { name: "Dashboard", href: "/studio", icon: Home },
  { name: "Projeler", href: "/studio/projects", icon: FolderGit2 },
  { name: "Kütüphane", href: "/studio/library", icon: Library },
  { name: "AI Copilot", href: "/studio/copilot", icon: Bot },
  { name: "Ayarlar", href: "/studio/settings", icon: Settings },
];

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isEditor = pathname.includes('/studio/editor');

  if (isEditor) {
    return (
      <div className="font-sans selection:bg-zinc-800 selection:text-zinc-100">
        {children}
        <CommandPalette />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex font-sans selection:bg-zinc-800 selection:text-zinc-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800/50 bg-[#0c0c0c]/80 backdrop-blur-xl flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
          <Link href="/studio" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300">
              Y
            </div>
            <span className="font-medium tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Locizsa Studio
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {sidebarLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? "text-white bg-zinc-800/50" 
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-zinc-800/50 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={18} className="relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800/20 border border-zinc-800/50 hover:bg-zinc-800/40 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center flex-shrink-0">
              <User size={16} className="text-zinc-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-zinc-200 truncate">egem2</p>
              <p className="text-xs text-zinc-500 truncate">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-zinc-800/50 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-2 text-sm text-zinc-400 capitalize">
            <span>Studio</span>
            {pathname !== "/studio" && pathname.split("/").filter(Boolean).slice(1).map((segment, idx) => (
              <React.Fragment key={idx}>
                <span className="text-zinc-600">/</span>
                <span className="text-zinc-100">{segment}</span>
              </React.Fragment>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
               <Search className="w-3.5 h-3.5" />
               <span>Arama için</span>
               <kbd className="font-sans font-medium text-gray-400">Ctrl K</kbd>
             </div>
          </div>
        </header>

        <div className="flex-1 p-8">
          {children}
        </div>
      </main>

      <CommandPalette />
    </div>
  );
}
