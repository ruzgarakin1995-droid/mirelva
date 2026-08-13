"use client";
import { useState, useMemo } from 'react';
import { Package, TrendingUp, Users, DollarSign, ArrowRight, Activity, Database, Server, Clock, Settings, Calendar, CheckCircle, Star, Crown } from 'lucide-react';
import Link from 'next/link';
import { useAdmin } from './context/AdminContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const { orders, customers } = useAdmin();
  const [dateFilter, setDateFilter] = useState<'daily' | 'weekly' | 'monthly' | 'custom'>('monthly');
  
  const [customStartDate, setCustomStartDate] = useState(() => {
    const d = new Date();
    d.setDate(1);
    return d.toISOString().split('T')[0];
  });
  const [customEndDate, setCustomEndDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Filtering Logic
  const isWithinDateRange = (dateString: string) => {
    if (!dateString || dateString === '-') return false;
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    // Normalize target date to midnight for comparison
    const targetDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (dateFilter === 'daily') {
      return targetDate.getTime() === today.getTime();
    } 
    else if (dateFilter === 'weekly') {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)); // Monday
      return targetDate >= startOfWeek;
    }
    else if (dateFilter === 'monthly') {
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      return targetDate >= startOfMonth;
    }
    else if (dateFilter === 'custom') {
      const start = new Date(customStartDate);
      const end = new Date(customEndDate);
      return targetDate >= start && targetDate <= end;
    }
    return true;
  };

  const dashboardStats = useMemo(() => {
    const filteredOrders = orders.filter(o => isWithinDateRange(o.date));
    const filteredCustomers = customers.filter(c => isWithinDateRange(c.joinDate));

    // Tamamlanan Sipariş
    const completedOrders = filteredOrders.filter(o => o.status === 'COMPLETED');
    
    // Toplam Ciro (Sadece iptal edilmeyen siparişler)
    const validOrders = filteredOrders.filter(o => o.status !== 'CANCELLED');
    const totalGross = validOrders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);
    
    // Net Gelir (Ciro - Maliyetler)
    const totalNet = validOrders.reduce((sum, o) => {
      const cost = (o.costOfGoods || 0) + (o.shippingCost || 0);
      return sum + ((o.totalAmount || 0) - cost);
    }, 0);

    // Aktif Bayiler (Kayıt olan ve durumu aktif/vip olanlar)
    // Eğer tüm zamanların aktif bayisini göstermek isterseniz bu filtreyi kaldırabilirsiniz, 
    // ama tarih filtresiyle çalıştığı için o tarihte katılanları gösteriyoruz.
    const activeCustomersCount = filteredCustomers.filter(c => c.status === 'ACTIVE' || c.status === 'VIP').length;

    return {
      netIncome: totalNet,
      activeDealers: activeCustomersCount,
      completedOrders: completedOrders.length,
      grossIncome: totalGross
    };
  }, [orders, customers, dateFilter, customStartDate, customEndDate]);

  const chartData = useMemo(() => {
    const validOrders = orders.filter(o => o.status !== 'CANCELLED' && isWithinDateRange(o.date));
    const grouped = validOrders.reduce((acc, order) => {
      const dateKey = order.date.split('T')[0];
      if (!acc[dateKey]) acc[dateKey] = { date: dateKey, ciro: 0, net: 0 };
      acc[dateKey].ciro += (order.totalAmount || 0);
      const cost = (order.costOfGoods || 0) + (order.shippingCost || 0);
      acc[dateKey].net += ((order.totalAmount || 0) - cost);
      return acc;
    }, {} as Record<string, { date: string, ciro: number, net: number }>);

    return Object.values(grouped).sort((a, b) => a.date.localeCompare(b.date)).map(item => ({
      ...item,
      dateFormatted: new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' }).format(new Date(item.date))
    }));
  }, [orders, dateFilter, customStartDate, customEndDate]);

  const topDealers = useMemo(() => {
    const validOrders = orders.filter(o => o.status !== 'CANCELLED' && isWithinDateRange(o.date));
    const dealerSales = validOrders.reduce((acc, order) => {
      const customerId = order.customerId;
      if (!customerId) return acc;
      if (!acc[customerId]) {
         const c = customers.find(c => c.id === customerId);
         acc[customerId] = {
           id: customerId,
           name: c ? (c.companyName || c.name) : order.customerName,
           fullName: c ? c.name : order.customerName,
           companyName: c?.companyName || '',
           total: 0,
           orderCount: 0
         };
      }
      acc[customerId].total += (order.totalAmount || 0);
      acc[customerId].orderCount += 1;
      return acc;
    }, {} as Record<string, { id: string, name: string, fullName: string, companyName: string, total: number, orderCount: number }>);

    return Object.values(dealerSales).sort((a, b) => b.total - a.total).slice(0, 5);
  }, [orders, customers, dateFilter, customStartDate, customEndDate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(amount);
  };

  const stats = [
    { title: 'Toplam Ciro', value: formatCurrency(dashboardStats.grossIncome), icon: DollarSign, color: 'from-amber-400 to-orange-500', text: 'text-amber-600', bgIcon: 'bg-amber-100' },
    { title: 'Net Gelir', value: formatCurrency(dashboardStats.netIncome), icon: TrendingUp, color: 'from-emerald-400 to-teal-500', text: 'text-emerald-600', bgIcon: 'bg-emerald-100', valueColor: 'text-emerald-600' },
    { title: 'Yeni Bayiler', value: dashboardStats.activeDealers.toString(), icon: Users, color: 'from-purple-500 to-pink-600', text: 'text-purple-600', bgIcon: 'bg-purple-100' },
    { title: 'Tamamlanan Sipariş', value: dashboardStats.completedOrders.toString(), icon: CheckCircle, color: 'from-blue-500 to-indigo-600', text: 'text-blue-600', bgIcon: 'bg-blue-100' },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">Özet Durum</h2>
          <p className="text-slate-500 text-sm">Mağazanızın genel durumunu buradan takip edebilirsiniz.</p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-1.5 rounded-xl shadow-sm flex items-center overflow-x-auto max-w-full">
            <button 
              onClick={() => setDateFilter('daily')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${dateFilter === 'daily' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
            >
              Günlük
            </button>
            <button 
              onClick={() => setDateFilter('weekly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${dateFilter === 'weekly' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
            >
              Haftalık
            </button>
            <button 
              onClick={() => setDateFilter('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${dateFilter === 'monthly' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
            >
              Aylık
            </button>
            <button 
              onClick={() => setDateFilter('custom')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap ${dateFilter === 'custom' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 hover:bg-white/40'}`}
            >
              <Calendar className="w-4 h-4" /> Özel Tarih
            </button>
          </div>

          {/* Custom Date Picker Inputs */}
          {dateFilter === 'custom' && (
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-xl border border-white/60 p-2 rounded-xl shadow-sm animate-in fade-in slide-in-from-top-2">
              <input 
                type="date" 
                value={customStartDate}
                onChange={e => setCustomStartDate(e.target.value)}
                className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500"
              />
              <span className="text-slate-400 text-sm font-medium">-</span>
              <input 
                type="date" 
                value={customEndDate}
                onChange={e => setCustomEndDate(e.target.value)}
                className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500"
              />
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl flex items-center justify-center ${stat.bgIcon} ${stat.text} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{stat.title}</p>
              <h3 className={`text-3xl font-bold tracking-tight ${stat.valueColor || 'text-slate-900'}`}>{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* NEW ROW: CHART & TOP DEALERS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-stretch">
        
        {/* CHART */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:col-span-2 flex flex-col h-[480px]">
          <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2 flex-shrink-0">
            <TrendingUp className="w-5 h-5 text-indigo-500" /> Gelir Grafiği
          </h3>
          <div className="flex-1 w-full min-h-[250px]">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="dateFormatted" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `₺${value/1000}k`} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', padding: '12px' }}
                    formatter={(value: number) => [formatCurrency(value), '']}
                    labelStyle={{ color: '#64748b', marginBottom: '8px', fontWeight: 600 }}
                  />
                  <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '13px' }} />
                  <Bar dataKey="ciro" name="Ciro" fill="#f59e0b" radius={[4, 4, 0, 0]} maxBarSize={40} />
                  <Bar dataKey="net" name="Net Gelir" fill="#10b981" radius={[4, 4, 0, 0]} maxBarSize={40} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400 italic text-sm">
                Bu tarih aralığında henüz veri bulunmuyor.
              </div>
            )}
          </div>
        </div>

        {/* TOP DEALERS */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-[480px]">
          <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2 flex-shrink-0">
            <Star className="w-5 h-5 text-amber-500" /> En Çok Sipariş Verenler
          </h3>
          <div className="flex flex-col gap-3 flex-1 overflow-hidden">
            {topDealers.length > 0 ? topDealers.map((dealer, index) => (
              <Link href={`/emtech-admin/customers?customerId=${dealer.id}`} key={dealer.id} className={`flex items-center justify-between p-4 rounded-2xl transition-all ${index === 0 ? 'bg-gradient-to-r from-amber-100 to-yellow-50 border border-amber-300 shadow-md shadow-amber-500/10 scale-[1.02] hover:scale-[1.04]' : 'bg-white/50 border border-white hover:bg-white hover:shadow-md hover:-translate-y-0.5'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${index === 0 ? 'bg-amber-500 text-white shadow-inner' : 'bg-slate-100 text-slate-500'}`}>
                    {index === 0 ? <Crown className="w-5 h-5" /> : index + 1}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm truncate pr-2 ${index === 0 ? 'text-amber-900' : 'text-slate-900'}`}>
                      {dealer.companyName || dealer.fullName}
                    </p>
                    {dealer.companyName && (
                      <p className={`text-[11px] font-medium truncate ${index === 0 ? 'text-amber-700/80' : 'text-slate-500'}`}>
                        {dealer.fullName}
                      </p>
                    )}
                    <p className={`text-xs mt-0.5 ${index === 0 ? 'text-amber-700/70' : 'text-slate-400'}`}>{dealer.orderCount} Sipariş</p>
                  </div>
                </div>
                <div className={`font-bold text-sm whitespace-nowrap ${index === 0 ? 'text-amber-700' : 'text-indigo-600'}`}>
                  {formatCurrency(dealer.total)}
                </div>
              </Link>
            )) : (
              <div className="text-center py-10 text-slate-400 text-sm italic flex flex-col items-center gap-2">
                <Star className="w-8 h-8 text-slate-200" />
                Bu tarih aralığında sipariş yok.
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Quick Actions */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="font-bold text-lg text-slate-900 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" /> Hızlı İşlemler
          </h3>
          <div className="flex flex-col gap-4">
            <Link href="/emtech-admin/orders" className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white hover:bg-white hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-xl text-indigo-600">
                  <Package className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">Siparişleri Yönet</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
            </Link>
            
            <Link href="/emtech-admin/customers" className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white hover:bg-white hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-pink-50 rounded-xl text-pink-600">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">Müşterileri Görüntüle</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
            </Link>

            <Link href="/emtech-admin/settings" className="flex items-center justify-between p-4 rounded-2xl bg-white/50 border border-white hover:bg-white hover:shadow-md transition-all group">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 rounded-xl text-emerald-600">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-700">Mağaza Ayarları</span>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white/60 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10"></div>
          
          <h3 className="font-bold text-lg mb-6 flex items-center gap-2 relative z-10 text-slate-900">
            <Server className="w-5 h-5 text-indigo-500" /> Sistem Durumu
          </h3>
          <ul className="space-y-6 relative z-10">
            <li className="flex items-center justify-between border-b border-slate-200/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100"><Database className="w-4 h-4 text-slate-500" /></div>
                <span className="text-sm font-medium text-slate-700">Veritabanı</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-600">Çevrimiçi</span>
              </div>
            </li>
            
            <li className="flex items-center justify-between border-b border-slate-200/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100"><Server className="w-4 h-4 text-slate-500" /></div>
                <span className="text-sm font-medium text-slate-700">Sunucu Bağlantısı</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium text-emerald-600">Stabil</span>
              </div>
            </li>
            
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-slate-100"><Clock className="w-4 h-4 text-slate-500" /></div>
                <span className="text-sm font-medium text-slate-700">Son Güncelleme</span>
              </div>
              <span className="text-sm font-medium text-slate-500">Az önce</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
