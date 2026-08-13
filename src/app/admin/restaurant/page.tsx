import React from 'react';
import { prisma } from '@/lib/prisma';
import { Users, ShoppingBag, DollarSign, TrendingUp, Clock } from 'lucide-react';

export default async function DashboardPage() {
  const RESTAURANT_CLIENT_ID = "restaurant-demo-client-id";
  
  // Real DB Queries for stats
  const categoryCount = await prisma.menuCategory.count({ where: { clientId: RESTAURANT_CLIENT_ID } });
  const itemsCount = await prisma.menuItem.count({ where: { category: { clientId: RESTAURANT_CLIENT_ID } } });
  
  // Fake stats for UI since we don't have orders/reservations logic fully populated yet
  const stats = [
    { title: "Bugünkü Ciro", value: "₺12,450", trend: "+14%", icon: DollarSign, color: "bg-emerald-100 text-emerald-600" },
    { title: "Aktif Siparişler", value: "8", trend: "Normal", icon: ShoppingBag, color: "bg-blue-100 text-blue-600" },
    { title: "Menü Ürünleri", value: itemsCount.toString(), trend: "Yayında", icon: Users, color: "bg-orange-100 text-orange-600" },
    { title: "Bekleyen Rezervasyon", value: "3", trend: "Yeni", icon: Clock, color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-black text-slate-800">{stat.value}</h3>
              <p className="text-emerald-500 text-sm font-semibold mt-2 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> {stat.trend}
              </p>
            </div>
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-7 h-7" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[400px]">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-lg text-slate-800">Son Siparişler (Canlı)</h2>
            <button className="text-sm text-orange-500 font-bold hover:underline">Tümünü Gör</button>
          </div>
          <div className="flex-1 overflow-auto p-0">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-medium sticky top-0">
                <tr>
                  <th className="px-6 py-4">Sipariş No</th>
                  <th className="px-6 py-4">Müşteri</th>
                  <th className="px-6 py-4">Tutar</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4">Zaman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: "#ORD-001", name: "Ahmet Y.", amount: "₺450", status: "Hazırlanıyor", time: "2 dk önce" },
                  { id: "#ORD-002", name: "Elif S.", amount: "₺1,200", status: "Yolda", time: "15 dk önce" },
                  { id: "#ORD-003", name: "Can B.", amount: "₺280", status: "Teslim Edildi", time: "45 dk önce" },
                  { id: "#ORD-004", name: "Ayşe K.", amount: "₺850", status: "Teslim Edildi", time: "1 saat önce" },
                ].map((order, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{order.id}</td>
                    <td className="px-6 py-4 text-slate-600">{order.name}</td>
                    <td className="px-6 py-4 font-bold text-slate-900">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Hazırlanıyor' ? 'bg-orange-100 text-orange-700' :
                        order.status === 'Yolda' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{order.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & DB Info */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col h-[400px]">
          <h2 className="font-bold text-lg text-slate-800 mb-6">Sistem Bilgisi</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="text-xs text-slate-500 font-bold uppercase mb-1">Database Bağlantısı</div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                MySQL (Prisma) Aktif
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Toplam Kategori</div>
                <div className="text-lg font-black text-slate-800">{categoryCount} Adet</div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center">
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Toplam Ürün</div>
                <div className="text-lg font-black text-slate-800">{itemsCount} Adet</div>
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-400 text-center">Studio OS v2.0 - Production Environment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
