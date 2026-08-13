"use client";

import React from 'react';
import { TrendingUp, Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

const kpiData = [
  {
    title: 'Total Revenue',
    value: '$128,430',
    change: '+14.2%',
    trend: 'up',
    icon: CreditCard,
  },
  {
    title: 'Active Users',
    value: '45,231',
    change: '+24.5%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Pending Orders',
    value: '1,203',
    change: '-4.1%',
    trend: 'down',
    icon: Activity,
  },
  {
    title: 'Conversion Rate',
    value: '3.84%',
    change: '+1.2%',
    trend: 'up',
    icon: TrendingUp,
  },
];

export default function KPIWidgets({ metrics }: { metrics?: any }) {
  const dynamicKpiData = [
    {
      title: 'Toplam Rezervasyon',
      value: metrics?.totalAppointments?.toString() || '0',
      change: '+14.2%',
      trend: 'up',
      icon: CreditCard,
    },
    {
      title: 'Aktif Müşteriler',
      value: metrics?.totalCustomers?.toString() || '0',
      change: '+24.5%',
      trend: 'up',
      icon: Users,
    },
    {
      title: 'Aktif Hizmetler',
      value: metrics?.totalServices?.toString() || '0',
      change: '+4.1%',
      trend: 'up',
      icon: Activity,
    },
    {
      title: 'Dönüşüm Oranı',
      value: '3.84%',
      change: '+1.2%',
      trend: 'up',
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dynamicKpiData.map((kpi, index) => {
        const Icon = kpi.icon;
        const isUp = kpi.trend === 'up';

        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            key={kpi.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-all hover:bg-black/60 hover:shadow-2xl hover:shadow-white/5"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-gray-300" />
              </div>
              <div className={`flex items-center space-x-1 rounded-full px-2.5 py-1 text-xs font-medium ${isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {isUp ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                <span>{kpi.change}</span>
              </div>
            </div>

            <div className="relative z-10 mt-6">
              <h3 className="text-sm font-medium text-gray-400">{kpi.title}</h3>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">{kpi.value}</p>
            </div>
            
            {/* Sparkline Effect (Dummy) */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 transition-opacity group-hover:opacity-40">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
                {isUp ? (
                  <path d="M0,50 L20,40 L40,45 L60,20 L80,30 L100,5 L100,50 Z" fill="url(#gradient-up)" />
                ) : (
                  <path d="M0,50 L20,30 L40,10 L60,35 L80,20 L100,40 L100,50 Z" fill="url(#gradient-down)" />
                )}
                <defs>
                  <linearGradient id="gradient-up" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient-down" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
