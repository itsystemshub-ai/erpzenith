'use client'
import { useState, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { safeStorage } from '@/lib/safeStorage'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

const rules = [
  { name: 'Bloqueo por Fuerza Bruta', description: 'Bloquear IP tras 5 intentos fallidos en 10 min', enabled: true, trigger: '5 intentos / 10 min', action: 'Bloquear IP + Notificar' },
  { name: 'Alerta de Acceso Nocturno', description: 'Notificar accesos entre 11pm y 6am', enabled: true, trigger: '11pm - 6am', action: 'Email + SMS Admin' },
  { name: 'Detección de País Inusual', description: 'Alertar accesos desde países no habituales', enabled: true, trigger: 'País no en whitelist', action: 'Bloquear + Verificar 2FA' },
  { name: 'Sesiones Concurrentes', description: 'Limitar a 3 sesiones simultáneas por usuario', enabled: false, trigger: '> 3 sesiones', action: 'Cerrar sesión más antigua' },
  { name: 'Cambio de Contraseña Forzado', description: 'Forzar cambio cada 90 días', enabled: true, trigger: '90 días sin cambio', action: 'Forzar cambio en próximo login' },
]

interface SeguridadStats { totalUsers: number; activeUsers: number; totalRoles: number; pendingResets: number; scoreSeguridad: number }
interface Sesion { id: string; user: string; role: string; since: string }

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Ahora'
  if (mins < 60) return `Hace ${mins} min`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `Hace ${hrs}h`
  return `Hace ${Math.floor(hrs / 24)}d`
}

export default function SeguridadPage() {
  const [tab, setTab] = useState<'reglas' | 'sesiones'>('sesiones')
  const [stats, setStats] = useState<SeguridadStats | null>(null)
  const [sesiones, setSesiones] = useState<Sesion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = safeStorage.getItem('accessToken')
    const headers = { Authorization: `Bearer ${token}` }
    Promise.all([
      fetch(`${API}/configuracion/seguridad/stats`, { headers }).then(r => r.json()),
      fetch(`${API}/configuracion/sistema/sesiones`, { headers }).then(r => r.json()),
    ]).then(([s, ses]) => {
      setStats(s)
      setSesiones(Array.isArray(ses) ? ses : [])
    }).finally(() => setLoading(false))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Seguridad del Sistema</h2>
            <p className="text-on-surface-variant mt-1">Monitoreo de sesiones activas y reglas de seguridad</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Usuarios Activos', value: loading ? '—' : String(stats?.activeUsers ?? 0), icon: 'person', color: 'text-primary' },
            { label: 'Roles Configurados', value: loading ? '—' : String(stats?.totalRoles ?? 0), icon: 'admin_panel_settings', color: 'text-secondary' },
            { label: 'Sesiones Recientes', value: loading ? '—' : String(sesiones.length), icon: 'devices', color: 'text-tertiary' },
            { label: 'Score Seguridad', value: loading ? '—' : `${stats?.scoreSeguridad ?? 0}/100`, icon: 'shield', color: 'text-tertiary' },
          ].map(s => (
            <div key={s.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${s.color}`}>{s.icon}</span>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{s.value}</p>
                <p className="text-xs text-outline">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['sesiones', 'reglas'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'sesiones' ? 'Sesiones Activas' : 'Reglas & Config'}
            </button>
          ))}
        </div>

        {tab === 'sesiones' && (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-headline font-bold text-on-surface">Actividad Reciente ({sesiones.length})</h3>
            </div>
            {loading ? (
              <div className="py-16 text-center text-outline text-sm">Cargando sesiones...</div>
            ) : sesiones.length === 0 ? (
              <div className="py-16 text-center">
                <span className="material-symbols-outlined text-4xl text-outline/30 block mb-2">devices_off</span>
                <p className="text-sm text-outline">Sin actividad reciente en las últimas 24h</p>
              </div>
            ) : (
              <div className="divide-y divide-white/5">
                {sesiones.map((s) => (
                  <div key={s.id} className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary">person</span>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{s.user}</p>
                        <p className="text-xs text-outline">{s.role}</p>
                      </div>
                    </div>
                    <span className="text-xs text-outline">{timeAgo(s.since)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 'reglas' && (
          <div className="space-y-4">
            {rules.map(rule => (
              <div key={rule.name} className="glass-panel rounded-2xl p-5 flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-on-surface">{rule.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${rule.enabled ? 'bg-tertiary/20 text-tertiary' : 'bg-white/10 text-outline'}`}>
                      {rule.enabled ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant mt-1">{rule.description}</p>
                  <div className="flex gap-4 mt-2 text-xs text-outline">
                    <span>Trigger: {rule.trigger}</span>
                    <span>Acción: {rule.action}</span>
                  </div>
                </div>
                <button className="ml-4 glass-panel hover:bg-white/10 text-on-surface-variant text-xs px-4 py-2 rounded-xl transition-colors">Editar</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
