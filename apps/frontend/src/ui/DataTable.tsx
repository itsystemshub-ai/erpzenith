'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  onRowClick?: (item: T) => void;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
}

export function DataTable<T>({
  data,
  columns,
  isLoading,
  onRowClick,
  pagination,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="w-full h-64 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-[2rem] border border-slate-200/50 dark:border-slate-800/50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest animate-pulse">Procesando Datos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-card transition-all duration-500">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100/80 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              {columns.map((column, i) => (
                <th
                  key={i}
                  className={cn(
                    "px-8 py-5 text-[11px] font-black uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400 border-r border-slate-200/30 last:border-0",
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
              {onRowClick && <th className="px-8 py-5 w-10"></th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-900/50">
            {data.length > 0 ? (
              data.map((item, i) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  key={i}
                  onClick={() => onRowClick?.(item)}
                  className={cn(
                    "group transition-colors cursor-pointer",
                    i % 2 === 1 ? "bg-slate-50/50 dark:bg-slate-900/30" : "bg-white dark:bg-slate-950",
                    "hover:bg-primary/5 dark:hover:bg-primary/10",
                    onRowClick && "active:scale-[0.995] transition-transform"
                  )}
                >
                  {columns.map((column, j) => (
                    <td
                      key={j}
                      className={cn(
                        "px-8 py-5 text-sm font-semibold text-slate-700 dark:text-slate-300",
                        column.className
                      )}
                    >
                      {typeof column.accessor === 'function'
                        ? column.accessor(item)
                        : (item[column.accessor] as ReactNode)}
                    </td>
                  ))}
                  {onRowClick && (
                    <td className="px-8 py-5 text-right">
                      <div className="p-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all shadow-sm border border-slate-100 dark:border-slate-700 inline-block">
                        <ChevronRight className="w-4 h-4 text-primary" strokeWidth={3} />
                      </div>
                    </td>
                  )}
                </motion.tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (onRowClick ? 1 : 0)}
                  className="px-6 py-20 text-center"
                >
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No se encontraron registros</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <div className="px-6 py-4 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/50">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Página <span className="text-primary">{pagination.currentPage}</span> de {pagination.totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={pagination.currentPage <= 1}
              onClick={() => pagination.onPageChange(pagination.currentPage - 1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              disabled={pagination.currentPage >= pagination.totalPages}
              onClick={() => pagination.onPageChange(pagination.currentPage + 1)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
