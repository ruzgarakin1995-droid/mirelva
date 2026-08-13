import React from 'react';
import { prisma } from '@/lib/prisma';
import { CalendarDays, CheckCircle2, Clock, MapPin, XCircle } from 'lucide-react';

export default async function AdminReservationsPage() {
  const RESTAURANT_CLIENT_ID = "restaurant-demo-client-id";

  const reservations = await prisma.tableReservation.findMany({
    where: { clientId: RESTAURANT_CLIENT_ID },
    orderBy: { date: 'desc' }
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Rezervasyonlar</h1>
          <p className="text-slate-500 text-sm mt-1">Gelen masa taleplerini buradan yönetin.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {reservations.length === 0 ? (
          <div className="p-12 text-center text-slate-500 flex flex-col items-center">
            <CalendarDays className="w-12 h-12 text-slate-300 mb-4" />
            <p className="font-medium text-lg">Henüz bir rezervasyon bulunmuyor.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 font-medium">
                <tr>
                  <th className="px-6 py-4">Müşteri</th>
                  <th className="px-6 py-4">Tarih & Saat</th>
                  <th className="px-6 py-4">Kişi</th>
                  <th className="px-6 py-4">Özel İstek</th>
                  <th className="px-6 py-4">Durum</th>
                  <th className="px-6 py-4 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reservations.map((res) => (
                  <tr key={res.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-slate-900">{res.customerName}</div>
                      <div className="text-xs text-slate-500">{res.customerPhone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-700">
                        <CalendarDays className="w-4 h-4 text-slate-400" />
                        {new Date(res.date).toLocaleDateString('tr-TR')}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500 text-xs mt-1">
                        <Clock className="w-3 h-3" />
                        {new Date(res.date).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-slate-700">{res.guestCount}</td>
                    <td className="px-6 py-4">
                      <p className="text-xs text-slate-500 max-w-[200px] truncate">
                        {res.specialRequests || "-"}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        res.status === 'PENDING' ? 'bg-orange-100 text-orange-700' :
                        res.status === 'CONFIRMED' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {res.status === 'PENDING' ? 'Bekliyor' : res.status === 'CONFIRMED' ? 'Onaylandı' : 'İptal'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors" title="Onayla">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors" title="İptal Et">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
