import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline'

const variants: Record<ButtonVariant, string> = {
  primary: 'primary-gradient text-on-primary shadow-lg shadow-primary/20 hover:opacity-90',
  secondary: 'bg-surface-container-highest border border-outline-variant/20 text-on-surface hover:bg-surface-bright',
  ghost: 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface',
  danger: 'bg-error/10 text-error border border-error/20 hover:bg-error/20',
  outline: 'border border-white/10 bg-transparent text-on-surface hover:bg-white/5',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2.5 text-sm', lg: 'px-6 py-3.5 text-base' }

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-spartan font-bold uppercase tracking-widest transition-all active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
