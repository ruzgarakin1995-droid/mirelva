"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Box
} from 'lucide-react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Users, label: 'Customers' },
    { icon: CreditCard, label: 'Billing' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <motion.div 
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col justify-between flex-shrink-0"
    >
      <div>
        <div className="h-16 flex items-center px-4 border-b border-zinc-800/50 justify-between">
          {!isCollapsed && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-zinc-100 font-medium"
            >
              <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center">
                <Box size={16} />
              </div>
              Acme Corp
            </motion.div>
          )}
          {isCollapsed && (
            <div className="w-full flex justify-center">
              <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-100">
                <Box size={16} />
              </div>
            </div>
          )}
        </div>

        <div className="p-4 space-y-1">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md cursor-pointer transition-colors"
            >
              <item.icon size={18} className="flex-shrink-0" />
              {!isCollapsed && (
                <span className="ml-3 text-sm">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-zinc-800/50">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 rounded-md transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>
    </motion.div>
  );
}
