'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { useUiStore } from '@/stores/uiStore'
import { api } from '@/lib/api'

type NavItem = { href: string; icon: string; label: string; children?: { href: string; label: string }[] }
type NavGroup = { label: string; icon: string; items: NavItem[] }

const NAV_DASHBOARD: NavItem = { href: '/dashboard', icon: 'dashboard', label: 'Dashboard' }

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Operaciones', icon: 'precision_manufacturing',
    items: [
      {
        href: '/dashboard/inventario', icon: 'inventory_2', label: 'Inventario',
        children: [
          { href: '/dashboard/inventario/productos', label: 'Productos' },
          { href: '/dashboard/inventario/movimientos', label: 'Movimientos' },

          { href: '/dashboard/inventario/trazabilidad', label: 'Trazabilidad' },
          { href: '/dashboard/inventario/desarrollo', label: 'Desarrollo' },
          { href: '/dashboard/inventario/smart-control', label: 'Smart Control' },
          { href: '/dashboard/inventario/reabastecimiento', label: 'Reabastecimiento' },
          { href: '/dashboard/inventario/ajustes', label: 'Ajustes' },
          { href: '/dashboard/reportes/inventario', label: 'Reporte Inventario' },
        ],
      },
      {
        href: '/dashboard/compras', icon: 'shopping_cart', label: 'Compras',
        children: [
          { href: '/dashboard/compras/ordenes', label: 'Órdenes' },
          { href: '/dashboard/compras/proveedores', label: 'Proveedores' },
          { href: '/dashboard/compras/recepcion', label: 'Recepción' },
          { href: '/dashboard/reportes/compras-bi', label: 'Reporte BI' },
        ],
      },

    ],
  },
  {
    label: 'Comercial', icon: 'storefront',
    items: [
      {
        href: '/dashboard/ventas', icon: 'point_of_sale', label: 'Ventas',
        children: [
          { href: '/dashboard/ventas/cotizaciones', label: 'Cotizaciones' },
          { href: '/dashboard/ventas/facturas', label: 'Facturas' },
          { href: '/dashboard/ventas/nueva-factura', label: 'Nueva Factura' },
          { href: '/dashboard/ventas/clientes', label: 'Clientes' },
          { href: '/dashboard/ventas/vendedores', label: 'Vendedores' },
          { href: '/dashboard/ventas/comisiones', label: 'Comisiones' },
          { href: '/dashboard/ventas/portal-b2b', label: 'Portal B2B' },
          { href: '/dashboard/ventas/timeline', label: 'Timeline Clientes' },
          { href: '/dashboard/reportes/ventas', label: 'Reporte Ventas' },
          { href: '/dashboard/reportes/ventas-bi', label: 'Reporte BI' },
          { href: '/dashboard/reportes/ventas-realtime', label: 'Reporte Realtime' },
          { href: '/dashboard/reportes/generador', label: 'Generador Reportes' },
        ],
      },
      {
        href: '/dashboard/pos', icon: 'storefront', label: 'POS',
        children: [
          { href: '/dashboard/pos/terminal', label: 'Terminal' },
          { href: '/dashboard/pos/historial', label: 'Historial' },
        ],
      },
      {
        href: '/dashboard/marketing', icon: 'campaign', label: 'Marketing',
        children: [
          { href: '/dashboard/marketing/campanas', label: 'Campañas' },
          { href: '/dashboard/marketing/segmentacion', label: 'Segmentación' },
        ],
      },
    ],
  },
  {
    label: 'Gestión', icon: 'groups',
    items: [
      { href: '/dashboard/proyectos', icon: 'folder_open', label: 'Proyectos' },
      { href: '/dashboard/documentos', icon: 'description', label: 'Documentos' },
    ],
  },
  {
    label: 'Administración', icon: 'account_balance',
    items: [
      {
        href: '/dashboard/rrhh', icon: 'group', label: 'RRHH',
        children: [
          { href: '/dashboard/rrhh/empleados', label: 'Empleados' },
          { href: '/dashboard/rrhh/asistencia', label: 'Asistencia' },
          { href: '/dashboard/rrhh/asistencia-calendario', label: 'Expediente' },
        ],
      },
      {
        href: '/dashboard/nomina', icon: 'payments', label: 'Nómina',
        children: [
          { href: '/dashboard/nomina/calculo', label: 'Cálculo' },
          { href: '/dashboard/nomina/historial', label: 'Historial' },
        ],
      },
      {
        href: '/dashboard/contabilidad', icon: 'account_balance', label: 'Contabilidad',
        children: [
          { href: '/dashboard/contabilidad/balance', label: 'Balance General' },
          { href: '/dashboard/contabilidad/libro-diario', label: 'Libro Diario' },
          { href: '/dashboard/contabilidad/asientos', label: 'Asientos' },
          { href: '/dashboard/contabilidad/estado-resultados', label: 'Estado de Resultados' },
          { href: '/dashboard/contabilidad/fiscal', label: 'Fiscal' },
          { href: '/dashboard/contabilidad/conciliacion', label: 'Conciliación' },
        ],
      },
      { href: '/dashboard/tesoreria', icon: 'account_balance_wallet', label: 'Tesorería' },
      { href: '/dashboard/activos', icon: 'domain', label: 'Activos Fijos' },
    ],
  },
  {
    label: 'Herramientas', icon: 'build_circle',
    items: [
      { href: '/dashboard/ai-chat', icon: 'smart_toy', label: 'IA Analista' },
      { href: '/dashboard/soporte', icon: 'support_agent', label: 'Soporte' },
    ],
  },
  {
    label: 'Sistema', icon: 'settings',
    items: [
      {
        href: '/dashboard/configuracion', icon: 'settings', label: 'Configuración',
        children: [
          { href: '/dashboard/configuracion/roles-permisos', label: 'Roles y Permisos' },
          { href: '/dashboard/configuracion/usuarios', label: 'Usuarios' },
          { href: '/dashboard/configuracion/auditoria', label: 'Auditoría' },
          { href: '/dashboard/configuracion/localizacion', label: 'Localización' },
          { href: '/dashboard/configuracion/backups', label: 'Backups' },
          { href: '/dashboard/configuracion/base-datos', label: 'Base de Datos' },
          { href: '/dashboard/configuracion/reset-requests', label: 'Reset Requests' },
          { href: '/dashboard/configuracion/seguridad', label: 'Seguridad' },
          { href: '/dashboard/configuracion/automatizaciones', label: 'Automatizaciones' },
          { href: '/dashboard/configuracion/activos-digitales', label: 'Activos Digitales' },
          { href: '/dashboard/configuracion/api', label: 'API & Webhooks' },
          { href: '/dashboard/configuracion/suscripcion', label: 'Suscripción' },
          { href: '/dashboard/configuracion/super-admin', label: 'Super Admin' },
          { href: '/dashboard/configuracion/arquitectura', label: 'Arquitectura' },
        ],
      },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout, accessToken } = useAuthStore()
  const { add: addNotification } = useNotificationStore()
  const { setActiveModule } = useUiStore()
  const [pendingResets, setPendingResets] = useState(0)
  const [expanded, setExpanded] = useState<string[]>([])
  const [collapsedGroups, setCollapsedGroups] = useState<string[]>([])

  const isAdmin = user?.role === 'SUPERDEV' || user?.role === 'ADMIN'

  const toggleExpand = (href: string) => {
    setExpanded(prev => prev.includes(href) ? prev.filter(h => h !== href) : [...prev, href])
  }

  const toggleGroup = (label: string) => {
    setCollapsedGroups(prev => prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label])
  }

  const isExpanded = (href: string) => expanded.includes(href) || pathname.startsWith(href + '/')
  const isGroupOpen = (label: string) => !collapsedGroups.includes(label)

  useEffect(() => {
    if (!isAdmin || !accessToken) return
    let prev = 0
    const fetchResets = async () => {
      try {
        const { data } = await api.get('/auth/reset-requests', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        const count = data.length
        setPendingResets(count)
        if (count > prev) {
          addNotification({
            type: 'warning',
            title: 'Nueva solicitud de contraseña',
            message: `Hay ${count} solicitud${count > 1 ? 'es' : ''} pendiente${count > 1 ? 's' : ''} de aprobación.`,
            module: 'configuracion',
          })
        }
        prev = count
      } catch { /* silencioso */ }
    }
    fetchResets()
    const interval = setInterval(fetchResets, 30000)
    return () => clearInterval(interval)
  }, [isAdmin, accessToken])

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low flex flex-col py-6 z-50 sidebar-shadow">
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
      <nav className="flex-1 px-3 overflow-y-auto space-y-1"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.15) transparent' }}>

        {/* Dashboard — sin grupo */}
        {(() => {
          const item = NAV_DASHBOARD
          const isActive = pathname === item.href
          return (
            <div
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-xl font-spartan text-[0.6875rem] uppercase tracking-widest transition-all cursor-pointer',
                isActive ? 'bg-white/10 text-primary border-l-4 border-primary rounded-l-none' : 'text-outline hover:text-on-surface hover:bg-white/5'
              )}
              onClick={() => { setActiveModule('dashboard'); router.push(item.href) }}
            >
              <span className="material-symbols-outlined text-[20px]" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{item.icon}</span>
              <span className="flex-1">{item.label}</span>
            </div>
          )
        })()}

        {/* Grupos de departamentos */}
        {NAV_GROUPS.map((group) => {
          const groupOpen = isGroupOpen(group.label)
          const groupActive = group.items.some(i => pathname === i.href || pathname.startsWith(i.href + '/'))
          return (
            <div key={group.label} className="mt-3">
              {/* Cabecera del grupo */}
              <button
                onClick={() => toggleGroup(group.label)}
                className={cn(
                  'w-full flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all',
                  groupActive ? 'text-primary/80' : 'text-outline/60 hover:text-outline'
                )}
              >
                <span className="material-symbols-outlined text-[14px]">{group.icon}</span>
                <span className="flex-1 text-left font-spartan text-[0.5625rem] uppercase tracking-[0.15em] font-bold">{group.label}</span>
                <span className="material-symbols-outlined text-[14px] transition-transform" style={{ transform: groupOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                  expand_more
                </span>
              </button>

              {/* Items del grupo */}
              {groupOpen && (
                <div className="mt-0.5 space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
                    const hasChildren = item.children && item.children.length > 0
                    const open = hasChildren && isExpanded(item.href)
                    return (
                      <div key={item.href}>
                        <div
                          className={cn(
                            'flex items-center gap-3 px-4 py-2.5 rounded-xl font-spartan text-[0.6875rem] uppercase tracking-widest transition-all cursor-pointer',
                            isActive && !hasChildren
                              ? 'bg-white/10 text-primary border-l-4 border-primary rounded-l-none'
                              : isActive && hasChildren
                              ? 'text-primary'
                              : 'text-outline hover:text-on-surface hover:bg-white/5'
                          )}
                          onClick={() => hasChildren ? toggleExpand(item.href) : (setActiveModule(item.href.split('/')[2] ?? 'dashboard'), router.push(item.href))}
                        >
                          <span className="material-symbols-outlined text-[20px]" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>
                            {item.icon}
                          </span>
                          <span className="flex-1">{item.label}</span>
                          {item.href === '/dashboard/configuracion' && isAdmin && pendingResets > 0 && (
                            <span className="w-5 h-5 rounded-full bg-error text-white text-[10px] font-bold flex items-center justify-center">
                              {pendingResets}
                            </span>
                          )}
                          {hasChildren && (
                            <span className="material-symbols-outlined text-[16px] transition-transform" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                              expand_more
                            </span>
                          )}
                        </div>
                        {hasChildren && open && (
                          <div className="ml-4 mt-1 space-y-0.5 border-l border-white/10 pl-3">
                            {item.children!.map((child) => {
                              const childActive = pathname === child.href
                              return (
                                <Link key={child.href} href={child.href}
                                  className={cn(
                                    'flex items-center gap-2 px-3 py-2 rounded-lg font-spartan text-[0.625rem] uppercase tracking-widest transition-all',
                                    childActive ? 'text-primary bg-primary/10' : 'text-outline hover:text-on-surface hover:bg-white/5'
                                  )}>
                                  <span className="w-1 h-1 rounded-full bg-current" />
                                  {child.label}
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
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
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-error/70 hover:text-error hover:bg-error/5 transition-all font-spartan text-[0.6875rem] uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Salir
        </button>
      </div>
    </aside>
  )
}
