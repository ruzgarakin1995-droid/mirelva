"use client";

import React from 'react';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', value: 30 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 35 },
  { month: 'Apr', value: 65 },
  { month: 'May', value: 50 },
  { month: 'Jun', value: 85 },
  { month: 'Jul', value: 70 },
  { month: 'Aug', value: 90 },
  { month: 'Sep', value: 110 },
  { month: 'Oct', value: 95 },
  { month: 'Nov', value: 120 },
  { month: 'Dec', value: 140 },
];

export default function RevenueChart() {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="col-span-1 flex flex-col rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl lg:col-span-2"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-medium text-white">Revenue Overview</h3>
          <p className="text-sm text-gray-400">Monthly revenue for the current year</p>
        </div>
        <div className="flex items-center space-x-2 rounded-lg bg-white/5 p-1">
          <button className="rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white shadow-sm">12M</button>
          <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-400 hover:text-white">6M</button>
          <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-400 hover:text-white">30D</button>
        </div>
      </div>

      <div className="relative flex-1 mt-4">
        {/* Y-Axis Guidelines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[4, 3, 2, 1, 0].map((step) => (
            <div key={step} className="flex items-center w-full h-0 border-t border-white/5">
            </div>
          ))}
        </div>

        {/* Chart Bars */}
        <div className="absolute inset-0 flex items-end justify-between px-2 pt-6">
          {data.map((item, index) => {
            const height = (item.value / maxValue) * 100;
            return (
              <div key={item.month} className="group relative flex w-full flex-col items-center justify-end">
                {/* Tooltip */}
                <div className="absolute -top-12 opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
                  <div className="rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-white shadow-xl ring-1 ring-white/10">
                    ${item.value}k
                  </div>
                </div>
                
                {/* Bar */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
                  className="w-full max-w-[2rem] rounded-t-sm bg-gradient-to-t from-blue-600/50 to-blue-400 opacity-80 transition-opacity hover:opacity-100"
                />
                <span className="mt-3 text-[10px] font-medium text-gray-500">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
