'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className
}: EmptyStateProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30",
        className
      )}
    >
      <div className="p-6 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm mb-6">
        <Icon className="w-10 h-10 text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-black text-slate-800 dark:text-white mb-2 uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 max-w-sm mb-8">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-8 py-3 bg-primary text-white rounded-2xl text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
        >
          {action.label}
        </button>
      )}
    </motion.div>
  );
}
