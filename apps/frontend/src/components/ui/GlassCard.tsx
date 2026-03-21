import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glow?: boolean
}

export function GlassCard({ children, className, glow }: GlassCardProps) {
  return (
    <div className={cn('glass-panel rounded-2xl', glow && 'zenith-glow', className)}>
      {children}
    </div>
  )
}
