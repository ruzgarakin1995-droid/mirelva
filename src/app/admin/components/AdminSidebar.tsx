"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  CalendarDays, 
  Settings, 
  LogOut,
  Building2,
  FileText,
  Image as ImageIcon,
  ShoppingBag,
  Truck,
  Ticket,
  UtensilsCrossed,
  ChefHat,
  DoorOpen,
  QrCode,
  Layers
} from 'lucide-react';
import { signOut } from 'next-auth/react';

const getNavItems = (sector: string) => {
  const baseItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Sayfalar', href: '/admin/pages', icon: FileText },
  ];

  const endItems = [
    { name: 'Medya', href: '/admin/media', icon: ImageIcon },
    { name: 'Ayarlar', href: '/admin/settings', icon: Settings },
  ];

  switch(sector) {
    case 'restaurant':
      return [
        ...baseItems,
        { name: 'QR Menü', href: '/admin/qr-menu', icon: QrCode },
        { name: 'Masalar', href: '/admin/tables', icon: Building2 },
        { name: 'Siparişler', href: '/admin/orders', icon: ShoppingBag },
        { name: 'Kurye', href: '/admin/delivery', icon: Truck },
        { name: 'Mutfak', href: '/admin/kitchen', icon: ChefHat },
        ...endItems,
      ];
    case 'beauty':
      return [
        ...baseItems,
        { name: 'Randevular', href: '/admin/appointments', icon: CalendarDays },
        { name: 'Personeller', href: '/admin/staff', icon: Users },
        { name: 'Takvim', href: '/admin/calendar', icon: CalendarDays },
        { name: 'Hizmetler', href: '/admin/services', icon: Layers },
        ...endItems,
      ];
    case 'ecommerce':
      return [
        ...baseItems,
        { name: 'Ürünler', href: '/admin/products', icon: ShoppingBag },
        { name: 'Siparişler', href: '/admin/orders', icon: ShoppingBag },
        { name: 'Kargo', href: '/admin/shipping', icon: Truck },
        { name: 'Kuponlar', href: '/admin/coupons', icon: Ticket },
        { name: 'Varyantlar', href: '/admin/variants', icon: Layers },
        ...endItems,
      ];
    case 'hotel':
      return [
        ...baseItems,
        { name: 'Odalar', href: '/admin/rooms', icon: DoorOpen },
        { name: 'Rezervasyonlar', href: '/admin/reservations', icon: CalendarDays },
        { name: 'Takvim', href: '/admin/calendar', icon: CalendarDays },
        { name: 'Check-in', href: '/admin/checkin', icon: Users },
        ...endItems,
      ];
    default:
      return [
        ...baseItems,
        { name: 'Randevular', href: '/admin/appointments', icon: CalendarDays },
        { name: 'Müşteriler', href: '/admin/clients', icon: Users },
        ...endItems,
      ];
  }
};

export default function AdminSidebar({ sector = "default" }: { sector?: string }) {
  const pathname = usePathname();
  const navItems = getNavItems(sector);

  return (
    <div className="w-64 bg-[#0A0A0A] text-white flex flex-col h-full border-r border-white/10 transition-colors">
      <div className="p-6">
        <h1 className="text-xl font-bold tracking-tight text-white">
          İşletme Paneli
        </h1>
        <p className="text-xs text-white/40 mt-1 uppercase tracking-widest font-semibold">
          {sector}
        </p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                isActive 
                  ? 'bg-white/10 text-white' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`mr-3 h-[18px] w-[18px] ${isActive ? 'text-white' : 'text-white/60'}`} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button 
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-white/60 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors"
        >
          <LogOut className="mr-3 h-[18px] w-[18px]" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
}
