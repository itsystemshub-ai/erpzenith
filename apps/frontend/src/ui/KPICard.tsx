'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  isPositive?: boolean;
  Icon?: LucideIcon;
  color?: string;
}

export function KPICard({
  title,
  value,
  change,
  isPositive = true,
  Icon,
  color = '#3B82F6',
}: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={cn(
        "relative overflow-hidden p-8 rounded-[2.5rem] transition-all duration-500",
        "bg-white dark:bg-slate-950 shadow-card hover:shadow-2xl",
        "border border-slate-100 dark:border-slate-800/50 hover:border-primary/20"
      )}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-2">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
            {title}
          </span>
          <h3 className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white text-glow-primary">
            {value}
          </h3>
        </div>
        {Icon && (
          <div 
            className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm"
            style={{ color }}
          >
            <Icon className="w-6 h-6" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-3">
          <div className={cn(
            "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-black shadow-sm",
            isPositive ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20" : "text-rose-600 bg-rose-50 dark:bg-rose-500/10 border border-rose-100 dark:border-rose-500/20"
          )}>
            {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
            {Math.abs(change).toFixed(1)}%
          </div>
          <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">vs mes anterior</span>
        </div>
      )}
    </motion.div>
  );
}
