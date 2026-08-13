"use client";

import React from "react";
import { Database } from "lucide-react";

export function TableEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="h-12 w-12 rounded-full bg-gray-50 dark:bg-zinc-900 flex items-center justify-center mb-4">
        <Database className="h-6 w-6 text-gray-400 dark:text-zinc-500" />
      </div>
      <h3 className="text-sm font-medium text-gray-900 dark:text-zinc-100">No data found</h3>
      <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 max-w-sm text-center">
        No records match your current filters or the database is empty. Add a new record to get started.
      </p>
      <button className="mt-6 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white dark:focus:ring-offset-zinc-950">
        Add Record
      </button>
    </div>
  );
}
