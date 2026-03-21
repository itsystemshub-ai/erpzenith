'use client';

import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'primary' | 'accent' | 'glass';
  gradient?: boolean;
  hover?: boolean;
  children: React.ReactNode;
}

export function GlassCard({
  variant = 'default',
  gradient = false,
  hover = true,
  className,
  children,
  ...props
}: GlassCardProps) {
  const variants = {
    default: 'bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]',
    primary: 'bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/10 shadow-sm',
    accent: 'bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/5 shadow-sm',
    glass: 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-xl',
  };

  return (
    <motion.div
      className={cn(
        'rounded-[2rem] p-8 transition-all duration-500 ease-[0.23,1,0.32,1]',
        variants[variant],
        gradient && 'bg-gradient-to-br from-primary/10 to-indigo-500/10',
        hover && 'hover:shadow-2xl hover:border-primary/20 cursor-default',
        className
      )}
      whileHover={hover ? { scale: 1.01, y: -4, transition: { duration: 0.4 } } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
