import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: string
  error?: string
}

export function Input({ label, icon, error, className, ...props }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">
          {label}
        </label>
      )}
      <div className="relative group">
        {icon && (
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">
            {icon}
          </span>
        )}
        <input
          className={cn(
            'w-full bg-surface-container-highest border-none rounded-xl py-3 text-on-surface placeholder:text-outline/50 focus:ring-2 focus:ring-primary/40 transition-all text-sm',
            icon ? 'pl-10 pr-4' : 'px-4',
            error && 'ring-2 ring-error/40',
            className
          )}
          {...props}
        />
        <div className="absolute left-0 bottom-0 h-full w-[2px] bg-tertiary scale-y-0 group-focus-within:scale-y-100 transition-transform origin-bottom rounded-l-xl" />
      </div>
      {error && <p className="text-[10px] text-error font-spartan">{error}</p>}
    </div>
  )
}
