import { cn } from '@/lib/utils'

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'default'

const variants: Record<BadgeVariant, string> = {
  success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
  warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
  error: 'bg-error/10 text-error border border-error/20',
  info: 'bg-primary/10 text-primary border border-primary/20',
  default: 'bg-surface-container-highest text-on-surface-variant',
}

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider font-spartan', variants[variant], className)}>
      {children}
    </span>
  )
}
