"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Settings, FileText, Download } from 'lucide-react';

const actions = [
  { name: 'Create Project', icon: Plus, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
  { name: 'Generate Report', icon: FileText, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  { name: 'Export Data', icon: Download, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Settings', icon: Settings, color: 'text-gray-400', bg: 'bg-gray-500/10' },
];

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white">Quick Actions</h3>
        <p className="text-sm text-gray-400">Frequently used tools</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:bg-white/10"
          >
            <div className={`mb-3 rounded-lg p-2 ${action.bg}`}>
              <action.icon className={`h-5 w-5 ${action.color}`} />
            </div>
            <span className="text-xs font-medium text-gray-300">{action.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
