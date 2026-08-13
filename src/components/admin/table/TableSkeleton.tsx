"use client";

import React from "react";

export function TableSkeleton() {
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="h-9 w-[250px] bg-gray-200 dark:bg-zinc-800 rounded-md animate-pulse"></div>
          <div className="h-9 w-24 bg-gray-200 dark:bg-zinc-800 rounded-md animate-pulse"></div>
        </div>
        <div className="h-9 w-28 bg-gray-200 dark:bg-zinc-800 rounded-md animate-pulse"></div>
      </div>
      <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950 shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-zinc-900/50 border-b border-gray-200 dark:border-zinc-800">
            <tr>
              <th className="px-4 py-3 w-12"><div className="h-4 w-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div></th>
              <th className="px-4 py-3"><div className="h-4 w-24 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div></th>
              <th className="px-4 py-3"><div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div></th>
              <th className="px-4 py-3"><div className="h-4 w-20 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div></th>
              <th className="px-4 py-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-b border-gray-200 dark:border-zinc-800">
                <td className="px-4 py-3"><div className="h-4 w-4 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div></td>
                <td className="px-4 py-3"><div className="h-4 w-32 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div></td>
                <td className="px-4 py-3"><div className="h-4 w-48 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div></td>
                <td className="px-4 py-3"><div className="h-4 w-24 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div></td>
                <td className="px-4 py-3"><div className="h-5 w-5 bg-gray-100 dark:bg-zinc-800/50 rounded-full animate-pulse ml-auto"></div></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between px-4 py-4 border-t border-gray-200 dark:border-zinc-800">
          <div className="h-4 w-32 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div>
          <div className="h-6 w-48 bg-gray-100 dark:bg-zinc-800/50 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
