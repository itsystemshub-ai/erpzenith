'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const notificaciones = [
  { id: 1, tipo: 'alerta', titulo: 'Stock crítico: Laptop Dell XPS 15', descripcion: 'Quedan 2 unidades. Stock mínimo: 5', tiempo: 'Hace 5 min', leida: false, modulo: 'Inventario', icon: 'inventory_2', color: 'text-error' },
  { id: 2, tipo: 'info', titulo: 'Factura F-2024-1205 pagada', descripcion: 'Empresa XYZ C.A. realizó el pago de $1,250,000', tiempo: 'Hace 15 min', leida: false, modulo: 'Ventas', icon: 'payments', color: 'text-tertiary' },
  { id: 3, tipo: 'tarea', titulo: 'Aprobación pendiente: OC-2024-0315', descripcion: 'Orden de compra por $320,000 requiere tu aprobación', tiempo: 'Hace 1h', leida: false, modulo: 'Compras', icon: 'approval', color: 'text-yellow-400' },
  { id: 4, tipo: 'info', titulo: 'Nómina procesada exitosamente', descripcion: 'Nómina quincenal de 87 empleados procesada', tiempo: 'Hace 2h', leida: true, modulo: 'RRHH', icon: 'group', color: 'text-primary' },
  { id: 5, tipo: 'alerta', titulo: 'Alerta de seguridad: Intento de acceso', descripcion: 'IP 185.220.101.45 bloqueada tras 47 intentos', tiempo: 'Hace 3h', leida: true, modulo: 'Seguridad', icon: 'security', color: 'text-error' },
  { id: 6, tipo: 'info', titulo: 'Backup completado', descripcion: 'Respaldo automático de base de datos exitoso', tiempo: 'Hace 6h', leida: true, modulo: 'Sistema', icon: 'backup', color: 'text-secondary' },
  { id: 7, tipo: 'tarea', titulo: 'Vencimiento de licencia próximo', descripcion: 'Adobe Creative Cloud vence en 25 días', tiempo: 'Hace 1 día', leida: true, modulo: 'Activos', icon: 'event_upcoming', color: 'text-orange-400' },
]

const tipoBadge: Record<string, string> = {
  alerta: 'bg-error/20 text-error',
  info: 'bg-primary/20 text-primary',
  tarea: 'bg-yellow-500/20 text-yellow-400',
}

export default function NotificacionesPage() {
  const [filter, setFilter] = useState<'todas' | 'no_leidas' | 'alertas' | 'tareas'>('todas')
  const [items, setItems] = useState(notificaciones)

  const markAllRead = () => setItems(n => n.map(i => ({ ...i, leida: true })))
  const markRead = (id: number) => setItems(n => n.map(i => i.id === id ? { ...i, leida: true } : i))

  const filtered = items.filter(n => {
    if (filter === 'no_leidas') return !n.leida
    if (filter === 'alertas') return n.tipo === 'alerta'
    if (filter === 'tareas') return n.tipo === 'tarea'
    return true
  })

  const unread = items.filter(n => !n.leida).length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Notificaciones" />
      <div className="flex-1 p-8 space-y-8 max-w-[900px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Notificaciones</h2>
              {unread > 0 && (
                <span className="text-sm font-bold px-3 py-1 rounded-full bg-primary text-on-primary">{unread}</span>
              )}
            </div>
            <p className="text-on-surface-variant mt-1">Centro de alertas y colaboración</p>
          </div>
          {unread > 0 && (
            <button onClick={markAllRead}
              className="glass-panel hover:bg-white/10 text-on-surface-variant font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
              Marcar todas como leídas
            </button>
          )}
        </div>

        {/* Filter */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {([
            { k: 'todas', l: 'Todas' },
            { k: 'no_leidas', l: `No leídas (${unread})` },
            { k: 'alertas', l: 'Alertas' },
            { k: 'tareas', l: 'Tareas' },
          ] as const).map(f => (
            <button key={f.k} onClick={() => setFilter(f.k)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === f.k ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {f.l}
            </button>
          ))}
        </div>

        {/* Notifications */}
        <div className="space-y-2">
          {filtered.map(n => (
            <div key={n.id}
              onClick={() => markRead(n.id)}
              className={`glass-panel rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/5 ${!n.leida ? 'border-l-2 border-primary' : ''}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${!n.leida ? 'bg-primary/20' : 'bg-white/10'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${n.color}`}>{n.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className={`font-bold ${!n.leida ? 'text-on-surface' : 'text-on-surface-variant'}`}>{n.titulo}</p>
                        {!n.leida && <div className="w-2 h-2 rounded-full bg-primary" />}
                      </div>
                      <p className="text-sm text-on-surface-variant mt-0.5">{n.descripcion}</p>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ml-3 shrink-0 ${tipoBadge[n.tipo]}`}>{n.tipo}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-xs text-outline">
                    <span>{n.tiempo}</span>
                    <span>·</span>
                    <span>{n.modulo}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="glass-panel rounded-2xl p-10 text-center text-outline">
              <span className="material-symbols-outlined text-5xl">notifications_none</span>
              <p className="mt-2">No hay notificaciones en esta categoría</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
