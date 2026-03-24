import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export function GlassCard({ children, className, glow, onClick }: GlassCardProps) {
  return (
    <div
      className={cn('glass-panel rounded-2xl', glow && 'zenith-glow', className)}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); onClick(event as any); } } : undefined}
    >
      {children}
    </div>
  )
}
