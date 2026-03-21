'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore, type Notification } from '@/stores/notificationStore'
import { cn } from '@/lib/utils'

interface TopBarProps {
  title?: string
}

const typeIcon: Record<string, string> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
}
const typeColor: Record<string, string> = {
  info: 'text-primary',
  success: 'text-tertiary',
  warning: 'text-amber-400',
  error: 'text-error',
}

function timeAgo(iso: string) {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000)
  if (diff < 60) return 'ahora'
  if (diff < 3600) return `${Math.floor(diff / 60)}m`
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`
  return `${Math.floor(diff / 86400)}d`
}

export function TopBar({ title }: TopBarProps) {
  const router = useRouter()
  const { user, logout } = useAuthStore()
  const { notifications, markRead, markAllRead, remove, unreadCount } = useNotificationStore()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const count = unreadCount()

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNotificationClick = (n: Notification) => {
    markRead(n.id)
    if (n.module) router.push(`/dashboard/${n.module}`)
  }

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

        {/* Campanita */}
        <div className="relative" ref={panelRef}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-9 h-9 flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all relative"
          >
            <span className="material-symbols-outlined text-[22px]" style={count > 0 ? { fontVariationSettings: "'FILL' 1" } : {}}>
              notifications
            </span>
            {count > 0 && (
              <span className="absolute top-1 right-1 min-w-[16px] h-4 rounded-full bg-error text-white text-[9px] font-bold flex items-center justify-center px-0.5 border border-surface">
                {count > 99 ? '99+' : count}
              </span>
            )}
          </button>

          {/* Panel */}
          {open && (
            <div className="absolute right-0 top-12 w-[380px] bg-surface-container-low border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
                  <span className="font-spartan font-bold uppercase tracking-widest text-xs text-on-surface">Notificaciones</span>
                  {count > 0 && (
                    <span className="bg-error/20 text-error text-[10px] font-bold px-2 py-0.5 rounded-full">{count} nuevas</span>
                  )}
                </div>
                {notifications.length > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-[10px] text-primary hover:text-tertiary font-spartan uppercase tracking-widest transition-colors"
                  >
                    Marcar todas
                  </button>
                )}
              </div>

              {/* Lista */}
              <div className="max-h-[420px] overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="py-12 text-center">
                    <span className="material-symbols-outlined text-4xl text-outline block mb-2" style={{ fontVariationSettings: "'FILL' 1" }}>
                      notifications_off
                    </span>
                    <p className="text-xs text-outline font-spartan uppercase tracking-widest">Sin notificaciones</p>
                  </div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => handleNotificationClick(n)}
                      className={cn(
                        'flex gap-3 px-5 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 transition-all group',
                        !n.read && 'bg-primary/5'
                      )}
                    >
                      <span
                        className={cn('material-symbols-outlined text-[20px] mt-0.5 shrink-0', typeColor[n.type])}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {typeIcon[n.type]}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={cn('text-xs font-semibold text-on-surface', !n.read && 'text-primary')}>{n.title}</p>
                          <span className="text-[10px] text-outline shrink-0">{timeAgo(n.createdAt)}</span>
                        </div>
                        <p className="text-[11px] text-on-surface-variant mt-0.5 line-clamp-2">{n.message}</p>
                        {n.module && (
                          <span className="text-[9px] font-spartan uppercase tracking-widest text-outline mt-1 block">{n.module}</span>
                        )}
                      </div>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Footer del panel */}
              {notifications.length > 0 && (
                <div className="px-5 py-3 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => { useNotificationStore.getState().clear(); setOpen(false) }}
                    className="text-[10px] text-outline hover:text-error font-spartan uppercase tracking-widest transition-colors"
                  >
                    Limpiar todo
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={() => router.push('/dashboard/configuracion')}
          className="w-9 h-9 flex items-center justify-center text-outline hover:text-on-surface hover:bg-surface-container-highest rounded-xl transition-all"
        >
          <span className="material-symbols-outlined text-[22px]">settings</span>
        </button>

        <div className="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-sm font-bold font-spartan border-2 border-primary/20">
          {user?.name?.charAt(0) ?? 'U'}
        </div>
      </div>
    </header>
  )
}
