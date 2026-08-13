"use client";

import React, { useState } from "react";
import { 
  Search, Filter, ChevronDown, MoreHorizontal, 
  ArrowUpDown, Download, Edit2, Trash2, EyeOff
} from "lucide-react";
import { Pagination } from "./Pagination";
import { TableEmptyState } from "./TableEmptyState";
import { TableSkeleton } from "./TableSkeleton";

interface DataRow {
  id: string;
  customerName: string;
  customerPhone: string;
  date: Date;
  status: string;
  service?: { name: string };
}

export function PremiumDataGrid({ data = [] }: { data?: any[] }) {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState<string | null>(null);

  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(new Set(data.map(d => d.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="w-full space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-1 items-center space-x-2">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-zinc-400" />
            <input
              type="text"
              placeholder="Randevu Ara..."
              className="h-9 pl-9 pr-4 py-2 w-full sm:w-[250px] rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-700 dark:text-zinc-200 transition-shadow"
            />
          </div>
          <button className="h-9 px-3 flex items-center gap-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-zinc-900 text-sm font-medium text-gray-700 dark:text-zinc-300 transition-colors">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filtrele</span>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="h-9 px-3 flex items-center gap-2 rounded-md border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-gray-50 dark:hover:bg-zinc-900 text-sm font-medium text-gray-700 dark:text-zinc-300 transition-colors">
            <EyeOff className="h-4 w-4" />
            <span className="hidden sm:inline">Sütunlar</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50/50 dark:bg-zinc-900/30 text-gray-700 dark:text-zinc-300 border-b border-gray-200 dark:border-zinc-800">
              <tr>
                <th scope="col" className="px-4 py-3 w-12 font-medium">
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-zinc-700 text-black dark:text-white focus:ring-black dark:focus:ring-white h-4 w-4 bg-transparent cursor-pointer"
                      onChange={toggleAll}
                      checked={selectedRows.size === data.length && data.length > 0}
                    />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white group transition-colors">
                  <div className="flex items-center gap-1">
                    Müşteri
                    <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white group transition-colors">
                  <div className="flex items-center gap-1">
                    Telefon
                    <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white group transition-colors">
                  <div className="flex items-center gap-1">
                    Hizmet
                    <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white group transition-colors">
                  <div className="flex items-center gap-1">
                    Tarih
                    <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 font-medium cursor-pointer hover:text-gray-900 dark:hover:text-white group transition-colors">
                  <div className="flex items-center gap-1">
                    Durum
                    <ArrowUpDown className="h-3 w-3 opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 w-12">
                  <span className="sr-only">İşlemler</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-zinc-800 text-gray-600 dark:text-zinc-400">
              {data.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-0">
                    <TableEmptyState />
                  </td>
                </tr>
              ) : (
                data.map((row: any) => (
                  <tr 
                    key={row.id} 
                    className={`group hover:bg-gray-50/80 dark:hover:bg-zinc-900/60 transition-colors ${
                      selectedRows.has(row.id) ? "bg-gray-50 dark:bg-zinc-900/40" : "bg-white dark:bg-transparent"
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 dark:border-zinc-700 text-black dark:text-white focus:ring-black dark:focus:ring-white h-4 w-4 bg-transparent cursor-pointer"
                          checked={selectedRows.has(row.id)}
                          onChange={() => toggleRow(row.id)}
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-zinc-200">
                      {row.customerName}
                    </td>
                    <td className="px-4 py-3">
                      {row.customerPhone}
                    </td>
                    <td className="px-4 py-3">
                      {row.service?.name || 'Belirtilmedi'}
                    </td>
                    <td className="px-4 py-3">
                      {new Date(row.date).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${
                        row.status === "CONFIRMED" || row.status === "COMPLETED" ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" :
                        row.status === "CANCELLED" ? "bg-gray-100 text-gray-700 border-gray-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700" :
                        "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="relative inline-block text-left">
                        <button 
                          onClick={() => setIsMenuOpen(isMenuOpen === row.id ? null : row.id)}
                          className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-zinc-400 transition-all outline-none"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        
                        {isMenuOpen === row.id && (
                          <>
                            <div 
                              className="fixed inset-0 z-10" 
                              onClick={() => setIsMenuOpen(null)}
                            ></div>
                            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 dark:ring-white/10 z-20 py-1 origin-top-right animate-in fade-in zoom-in-95 duration-100">
                              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center gap-2 transition-colors">
                                <Edit2 className="h-4 w-4" /> Edit record
                              </button>
                              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center gap-2 transition-colors">
                                <Download className="h-4 w-4" /> Export data
                              </button>
                              <div className="h-px bg-gray-200 dark:bg-zinc-800 my-1 mx-2"></div>
                              <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 flex items-center gap-2 transition-colors">
                                <Trash2 className="h-4 w-4" /> Delete record
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Wrapper */}
        {data.length > 0 && <Pagination />}
      </div>
    </div>
  );
}
