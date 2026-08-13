"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, UtensilsCrossed, CalendarDays, ShoppingBag, Settings, LogOut, Menu, X, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RestaurantAdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const menu = [
    { title: 'Dashboard', icon: LayoutDashboard, href: '/admin/restaurant' },
    { title: 'Siparişler', icon: ShoppingBag, href: '/admin/restaurant/orders' },
    { title: 'Rezervasyonlar', icon: CalendarDays, href: '/admin/restaurant/reservations' },
    { title: 'Menü Yönetimi', icon: UtensilsCrossed, href: '/admin/restaurant/menu' },
    { title: 'Ayarlar', icon: Settings, href: '/admin/restaurant/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {sidebarOpen && (
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 shrink-0 overflow-hidden"
          >
            <div className="h-16 flex items-center px-6 shrink-0 border-b border-slate-800">
              <div className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                <span className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(249,115,22,0.4)]">G</span>
                OS <span className="text-slate-500 font-medium text-sm">Restaurant</span>
              </div>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto space-y-1">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 mt-4 px-2">Ana Menü</div>
              {menu.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-all group ${
                      isActive ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                    {item.title}
                  </Link>
                );
              })}
            </div>

            <div className="p-4 border-t border-slate-800">
              <button className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 transition-colors">
                <LogOut className="w-5 h-5" />
                Oturumu Kapat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-slate-800">
              {menu.find(m => m.href === pathname)?.title || 'Admin Paneli'}
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-slate-900 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=Admin+User&background=f97316&color=fff" alt="Admin" />
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-bold text-slate-900 leading-none">Admin User</div>
                <div className="text-xs text-slate-500 mt-1">Super Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-slate-50 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
