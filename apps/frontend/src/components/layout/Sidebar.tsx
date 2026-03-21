'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'

const NAV_ITEMS = [
  { href: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { href: '/dashboard/inventario', icon: 'inventory_2', label: 'Inventario' },
  { href: '/dashboard/compras', icon: 'shopping_cart', label: 'Compras' },
  { href: '/dashboard/produccion', icon: 'factory', label: 'Producción' },
  { href: '/dashboard/mantenimiento', icon: 'build', label: 'Mantenimiento' },
  { href: '/dashboard/calidad', icon: 'verified', label: 'Calidad' },
  { href: '/dashboard/flota', icon: 'local_shipping', label: 'Flota' },
  { href: '/dashboard/ventas', icon: 'point_of_sale', label: 'Ventas' },
  { href: '/dashboard/pos', icon: 'storefront', label: 'POS' },
  { href: '/dashboard/marketing', icon: 'campaign', label: 'Marketing' },
  { href: '/dashboard/rrhh', icon: 'group', label: 'RRHH' },
  { href: '/dashboard/nomina', icon: 'payments', label: 'Nómina' },
  { href: '/dashboard/reportes', icon: 'analytics', label: 'Reportes' },
  { href: '/dashboard/configuracion', icon: 'settings', label: 'Configuración' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { user, logout } = useAuthStore()

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 z-50 shadow-[20px_0_40px_rgba(0,0,0,0.4)]">
      {/* Logo */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center zenith-glow">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
              deployed_code
            </span>
          </div>
          <div>
            <h1 className="text-primary font-black font-spartan tracking-tighter text-xl">ZENITH</h1>
            <p className="text-[0.625rem] text-outline uppercase tracking-widest font-spartan">Enterprise v6.0</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-xl font-spartan text-[0.6875rem] uppercase tracking-widest transition-all',
                isActive
                  ? 'bg-white/10 text-primary border-l-4 border-primary rounded-l-none'
                  : 'text-outline hover:text-on-surface hover:bg-white/5'
              )}
            >
              <span className="material-symbols-outlined text-[20px]" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 pt-4 border-t border-white/5 space-y-1">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary text-xs font-bold font-spartan">
            {user?.name?.charAt(0) ?? 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-on-surface truncate">{user?.name ?? 'Usuario'}</p>
            <p className="text-[10px] text-outline truncate">{user?.role ?? 'ADMIN'}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-error/70 hover:text-error hover:bg-error/5 transition-all font-spartan text-[0.6875rem] uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Salir
        </button>
      </div>
    </aside>
  )
}
