"use client";

import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex items-center justify-between px-2 py-4 border-t border-gray-200 dark:border-zinc-800">
      <div className="flex-1 text-sm text-gray-500 dark:text-zinc-400">
        0 of 100 row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium text-gray-700 dark:text-zinc-300">Rows per page</p>
          <select className="h-8 w-[70px] rounded-md border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-zinc-200 cursor-pointer">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium text-gray-700 dark:text-zinc-300">
          Page 1 of 10
        </div>
        <div className="flex items-center space-x-2">
          <button className="hidden h-8 w-8 p-0 lg:flex items-center justify-center rounded-md border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 disabled:opacity-50 transition-colors">
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 p-0 flex items-center justify-center rounded-md border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 disabled:opacity-50 transition-colors">
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 p-0 flex items-center justify-center rounded-md border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 disabled:opacity-50 transition-colors">
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </button>
          <button className="hidden h-8 w-8 p-0 lg:flex items-center justify-center rounded-md border border-gray-200 dark:border-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 disabled:opacity-50 transition-colors">
            <span className="sr-only">Go to last page</span>
            <ChevronsRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
