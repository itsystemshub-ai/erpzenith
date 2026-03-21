'use client'
import { useState } from 'react'
import { useAuthStore } from '@/stores/authStore'

interface TopBarProps {
  title?: string
}

export function TopBar({ title }: TopBarProps) {
  const { user } = useAuthStore()
  const [search, setSearch] = useState('')

  return (
    <header className="w-full border-b border-white/10 sticky top-0 z-40 bg-surface/50 backdrop-blur-xl flex justify-between items-center px-8 py-4">
      <div className="flex items-center gap-8">
        {title && (
          <h2 className="text-xl font-bold tracking-tighter text-primary font-headline">{title}</h2>
        )}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar... (Cmd+K)"
            className="bg-surface-container-highest/50 border-none rounded-full py-2.5 pl-10 pr-6 text-sm focus:ring-2 focus:ring-primary/40 text-on-surface placeholder:text-outline/50 w-72"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* BCV Rate */}
        <div className="hidden sm:flex items-center gap-2 bg-surface-container-highest px-3 py-1.5 rounded-full border border-outline-variant/20">
          <span className="text-tertiary font-bold font-spartan text-xs tracking-widest uppercase">BCV: 36.42 VES</span>
        </div>

        <button className="w-9 h-9 flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all relative">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error border border-surface" />
        </button>

        <button className="w-9 h-9 flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all">
          <span className="material-symbols-outlined text-[22px]">settings</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-sm font-bold font-spartan border-2 border-primary/20">
          {user?.name?.charAt(0) ?? 'U'}
        </div>
      </div>
    </header>
  )
}
