"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import KPIWidgets from '@/components/admin/dashboard/KPIWidgets';
import ActivityFeed from '@/components/admin/dashboard/ActivityFeed';

export default function DashboardClient({ metrics }: { metrics: any }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-full bg-transparent text-gray-900 dark:text-white font-sans">
      <div className="mx-auto max-w-5xl space-y-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2 border-b border-gray-200 dark:border-white/10 pb-6"
        >
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold tracking-tight">Hoş Geldiniz</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-medium border border-emerald-200 dark:border-emerald-500/20">
              Sistem Aktif
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-white/50">İşletmenizin bugünkü özeti ve son işlemler.</p>
        </motion.div>

        {/* Dashboard Content */}
        {isLoading ? (
          <div className="space-y-8 animate-pulse">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5"></div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="h-[300px] rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5"></div>
              <div className="h-[300px] rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5"></div>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* 1. Bugünkü Durum */}
            <section>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white/80 mb-4 uppercase tracking-wider">Bugünkü Durum</h2>
              <KPIWidgets metrics={metrics} />
            </section>
            
            {/* 2. Son İşlemler */}
            <section>
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white/80 mb-4 uppercase tracking-wider">Son İşlemler</h2>
              <ActivityFeed activities={metrics?.recentActivities} />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
