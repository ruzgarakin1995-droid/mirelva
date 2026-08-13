"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Package, Settings, LogOut, Store, Users, Briefcase, ShoppingBag, Bell, Menu, X, ChevronDown, Key } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdminProvider, useAdmin } from './context/AdminContext';
import { ReminderNotifications } from './components/ReminderNotifications';
import { ChangePasswordModal } from './components/ChangePasswordModal';

function AdminLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  
  const { orders, applications } = useAdmin();
  
  const activeOrdersCount = orders.filter(o => o.status === 'PENDING' || o.status === 'PROCESSING').length;
  const pendingAppsCount = applications.filter(a => a.status === 'PENDING').length;

  const handleLogout = () => {
    document.cookie = "emtech_admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push('/emtech-admin/login');
  };

  const navItems = [
    { name: 'Dashboard', href: '/emtech-admin', icon: LayoutDashboard },
    { name: 'Hatırlatıcılar', href: '/emtech-admin/reminders', icon: Bell },
    { name: 'Siparişler', href: '/emtech-admin/orders', icon: ShoppingBag, badge: activeOrdersCount },
    { name: 'Müşteriler', href: '/emtech-admin/customers', icon: Users },
    { name: 'Ürün Yönetimi', href: '/emtech-admin/products', icon: Package },
    { name: 'Bayi Başvuruları', href: '/emtech-admin/applications', icon: Briefcase, badge: pendingAppsCount },
    { name: 'Mağaza Ayarları', href: '/emtech-admin/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col md:flex-row relative z-10 min-h-screen w-full">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 left-0 z-50 bg-white/80 md:bg-white/40 backdrop-blur-xl border-r border-white/60 min-h-screen flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out
        ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isDesktopSidebarOpen ? 'w-[280px] md:w-64' : 'w-[280px] md:w-20'}
      `}>
        <div className={`p-6 flex items-center justify-between gap-4 ${!isDesktopSidebarOpen ? 'md:justify-center md:px-0 md:flex-col' : ''}`}>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 flex-shrink-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 text-white font-bold text-xl">
              E
            </div>
            <div className={`transition-opacity duration-300 ${!isDesktopSidebarOpen ? 'md:hidden' : 'block'}`}>
              <h1 className="font-bold text-lg tracking-tight text-slate-900 leading-none">Emtech</h1>
              <span className="text-[11px] tracking-wider text-indigo-600 font-medium uppercase">Admin Portal</span>
            </div>
          </div>
          <div className={`flex items-center gap-2 ${!isDesktopSidebarOpen ? 'md:mt-2' : ''}`}>
            <button onClick={() => setIsMobileSidebarOpen(false)} className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-xl">
              <X className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsDesktopSidebarOpen(!isDesktopSidebarOpen)} 
              className="hidden md:flex p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 rounded-xl transition-colors"
              title="Menüyü Daralt/Genişlet"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                onClick={() => setIsMobileSidebarOpen(false)}
                title={!isDesktopSidebarOpen ? item.name : undefined}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 relative ${
                  isActive 
                    ? 'bg-white/90 md:bg-white/80 text-indigo-600 shadow-sm border border-white' 
                    : 'border border-transparent text-slate-500 hover:text-slate-800 hover:bg-white/40'
                } ${!isDesktopSidebarOpen ? 'md:justify-center' : 'gap-3'}`}
              >
                <div className="relative flex items-center justify-center">
                  <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  {!isDesktopSidebarOpen && item.badge !== undefined && item.badge > 0 && (
                    <span className="hidden md:flex absolute -top-2 -right-3 bg-indigo-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm items-center justify-center min-w-[20px] h-[20px]">
                      {item.badge}
                    </span>
                  )}
                </div>
                
                <span className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${!isDesktopSidebarOpen ? 'md:hidden' : 'block'}`}>
                  {item.name}
                </span>
                
                {item.badge !== undefined && item.badge > 0 && (
                  <span className={`bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${!isDesktopSidebarOpen ? 'md:hidden ml-auto' : 'ml-auto'}`}>
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4">
          <Link href="/emtech-store" title={!isDesktopSidebarOpen ? "Siteye Dön" : undefined} className={`flex items-center px-4 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-white/40 transition-colors border border-transparent ${!isDesktopSidebarOpen ? 'md:justify-center' : 'gap-3'}`}>
            <Store className="w-5 h-5 flex-shrink-0 text-slate-400" />
            <span className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${!isDesktopSidebarOpen ? 'md:hidden' : 'block'}`}>Siteye Dön</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen relative w-full md:w-auto overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white/40 backdrop-blur-xl border-b border-white/60 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsMobileSidebarOpen(true)} className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-white/60 rounded-xl transition-colors">
              <Menu className="w-6 h-6" />
            </button>
            <div className="text-xs text-slate-500 font-medium tracking-wide hidden sm:block">
              {new Date().toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ReminderNotifications />
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 border-l border-slate-200 pl-4 hover:bg-slate-50 p-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <span className="text-sm font-medium text-slate-700 hidden md:block">Yunus Emre Aydoğdu</span>
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-100 to-purple-100 border border-white rounded-full flex items-center justify-center shadow-sm">
                  <span className="font-bold text-sm text-indigo-700">YA</span>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50"
                  >
                    <div className="p-3 border-b border-slate-100 md:hidden">
                      <p className="text-sm font-medium text-slate-800">Yunus Emre Aydoğdu</p>
                      <p className="text-xs text-slate-500">Admin</p>
                    </div>
                    <div className="p-1">
                      <button 
                        onClick={() => {
                          setIsProfileOpen(false);
                          setIsPasswordModalOpen(true);
                        }}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-lg transition-colors mb-1"
                      >
                        <Key className="w-4 h-4" />
                        Şifre Değiştir
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Çıkış Yap
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </header>

        {/* Change Password Modal */}
        <ChangePasswordModal 
          isOpen={isPasswordModalOpen}
          onClose={() => setIsPasswordModalOpen(false)}
        />

        {/* Page Content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto"
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-800 font-sans selection:bg-indigo-500 selection:text-white relative overflow-hidden">
        <style dangerouslySetInnerHTML={{__html: `
          /* Admin Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 8px;
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(99, 102, 241, 0.4);
            border-radius: 8px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.8);
          }
          
          /* Specific overrides for Firefox */
          * {
            scrollbar-width: thin;
            scrollbar-color: rgba(99, 102, 241, 0.4) transparent;
          }
        `}} />
        
        {/* Decorative background blobs for glassmorphism effect */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <AdminLayoutContent>{children}</AdminLayoutContent>
      </div>
    </AdminProvider>
  );
}
