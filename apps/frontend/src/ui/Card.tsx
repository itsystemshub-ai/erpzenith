'use client';

import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function Card({ children, className, title, description, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-card overflow-hidden transition-all duration-300',
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="px-8 py-5 border-b border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/50">
          {title && <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">{title}</h3>}
          {description && <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">{description}</p>}
        </div>
      )}
      <div className="p-8">
        {children}
      </div>
    </div>
  );
}
