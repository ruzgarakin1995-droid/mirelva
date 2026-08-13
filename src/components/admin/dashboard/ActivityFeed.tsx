"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, UserPlus, ShoppingCart, AlertCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'order',
    content: 'New order #4231 from',
    target: 'Acme Corp',
    date: '2 minutes ago',
    icon: ShoppingCart,
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    id: 2,
    type: 'user',
    content: 'New user registration:',
    target: 'Jane Smith',
    date: '1 hour ago',
    icon: UserPlus,
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    id: 3,
    type: 'system',
    content: 'System backup completed',
    target: 'successfully',
    date: '3 hours ago',
    icon: CheckCircle2,
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    id: 4,
    type: 'alert',
    content: 'High CPU usage detected on',
    target: 'Server-01',
    date: '5 hours ago',
    icon: AlertCircle,
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-400',
  },
];

export default function ActivityFeed({ activities: dynamicActivities }: { activities?: any[] }) {
  const displayActivities = dynamicActivities && dynamicActivities.length > 0 
    ? dynamicActivities.map((app: any, idx: number) => ({
        id: app.id,
        type: 'order',
        content: 'Yeni Rezervasyon:',
        target: app.customerName || 'Bilinmeyen Müşteri',
        date: new Date(app.createdAt).toLocaleDateString(),
        icon: ShoppingCart,
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-400',
      }))
    : activities;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl"
    >
      <div className="mb-6">
        <h3 className="text-lg font-medium text-white">Activity Feed</h3>
        <p className="text-sm text-gray-400">Platform üzerindeki son işlemler (Prisma)</p>
      </div>
      
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {displayActivities.map((activity: any, activityIdx: number) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-white/10" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-black/40 ${activity.iconBg}`}>
                      <activity.icon className={`h-4 w-4 ${activity.iconColor}`} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-300">
                        {activity.content}{' '}
                        <span className="font-medium text-white">{activity.target}</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-xs text-gray-500">
                      {activity.date}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
