'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const alerts = [
  { id: 1, type: 'Fuerza Bruta', severity: 'critical', ip: '185.220.101.45', user: 'admin@empresa.com', attempts: 47, time: 'Hace 2 min', status: 'Bloqueado', country: 'RU' },
  { id: 2, type: 'Acceso Sospechoso', severity: 'high', ip: '103.21.244.0', user: 'carlos.m@empresa.com', attempts: 12, time: 'Hace 15 min', status: 'Investigando', country: 'CN' },
  { id: 3, type: 'Token Expirado', severity: 'medium', ip: '192.168.1.105', user: 'maria.g@empresa.com', attempts: 3, time: 'Hace 1h', status: 'Resuelto', country: 'VE' },
  { id: 4, type: 'Login Inusual', severity: 'low', ip: '201.249.100.22', user: 'pedro.r@empresa.com', attempts: 1, time: 'Hace 3h', status: 'Monitoreo', country: 'VE' },
]

const rules = [
  { name: 'Bloqueo por Fuerza Bruta', description: 'Bloquear IP tras 5 intentos fallidos en 10 min', enabled: true, trigger: '5 intentos / 10 min', action: 'Bloquear IP + Notificar' },
  { name: 'Alerta de Acceso Nocturno', description: 'Notificar accesos entre 11pm y 6am', enabled: true, trigger: '11pm - 6am', action: 'Email + SMS Admin' },
  { name: 'Detección de País Inusual', description: 'Alertar accesos desde países no habituales', enabled: true, trigger: 'País no en whitelist', action: 'Bloquear + Verificar 2FA' },
  { name: 'Sesiones Concurrentes', description: 'Limitar a 3 sesiones simultáneas por usuario', enabled: false, trigger: '> 3 sesiones', action: 'Cerrar sesión más antigua' },
  { name: 'Cambio de Contraseña Forzado', description: 'Forzar cambio cada 90 días', enabled: true, trigger: '90 días sin cambio', action: 'Forzar cambio en próximo login' },
]

const severityBadge: Record<string, string> = {
  critical: 'bg-error/20 text-error',
  high: 'bg-orange-500/20 text-orange-400',
  medium: 'bg-yellow-500/20 text-yellow-400',
  low: 'bg-primary/20 text-primary',
}

const statusBadge: Record<string, string> = {
  'Bloqueado': 'bg-error/20 text-error',
  'Investigando': 'bg-orange-500/20 text-orange-400',
  'Resuelto': 'bg-tertiary/20 text-tertiary',
  'Monitoreo': 'bg-primary/20 text-primary',
}

const sessions = [
  { user: 'admin@empresa.com', device: 'Chrome / Windows 11', ip: '192.168.1.10', location: 'Caracas, VE', since: 'Hace 2h', current: true },
  { user: 'carlos.m@empresa.com', device: 'Safari / macOS', ip: '201.249.100.22', location: 'Maracaibo, VE', since: 'Hace 45 min', current: false },
  { user: 'maria.g@empresa.com', device: 'Firefox / Ubuntu', ip: '192.168.1.55', location: 'Valencia, VE', since: 'Hace 1h 20min', current: false },
]

export default function SeguridadPage() {
  const [tab, setTab] = useState<'alertas' | 'reglas' | 'sesiones'>('alertas')
  const [selected, setSelected] = useState<typeof alerts[0] | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Seguridad del Sistema</h2>
            <p className="text-on-surface-variant mt-1">Monitoreo de amenazas, alertas y sesiones activas</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Alertas Activas', value: '3', icon: 'warning', color: 'text-error' },
            { label: 'IPs Bloqueadas', value: '127', icon: 'block', color: 'text-orange-400' },
            { label: 'Sesiones Activas', value: '24', icon: 'devices', color: 'text-primary' },
            { label: 'Score Seguridad', value: '87/100', icon: 'shield', color: 'text-tertiary' },
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
          {(['alertas', 'reglas', 'sesiones'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'alertas' ? 'Alertas' : t === 'reglas' ? 'Reglas & Config' : 'Sesiones Activas'}
            </button>
          ))}
        </div>

        {tab === 'alertas' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-3">
              {alerts.map(alert => (
                <div key={alert.id}
                  onClick={() => setSelected(alert)}
                  className={`glass-panel rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/5 ${selected?.id === alert.id ? 'border border-primary/40' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-on-surface-variant">security</span>
                      <div>
                        <p className="font-bold text-on-surface">{alert.type}</p>
                        <p className="text-xs text-outline">{alert.ip} · {alert.user}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusBadge[alert.status]}`}>{alert.status}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${severityBadge[alert.severity]}`}>{alert.severity}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-xs text-outline">
                    <span>{alert.attempts} intentos</span>
                    <span>País: {alert.country}</span>
                    <span>{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {selected ? (
              <div className="glass-panel rounded-2xl p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-on-surface text-lg">Detalle de Alerta</h3>
                  <button onClick={() => setSelected(null)} className="text-outline hover:text-on-surface">
                    <span className="material-symbols-outlined text-sm">close</span>
                  </button>
                </div>
                <div className={`p-3 rounded-xl ${severityBadge[selected.severity]}`}>
                  <p className="font-bold">{selected.type}</p>
                  <p className="text-xs mt-1 opacity-70">Severidad: {selected.severity.toUpperCase()}</p>
                </div>
                <div className="space-y-3 text-sm">
                  {[['IP Origen', selected.ip], ['Usuario', selected.user], ['Intentos', String(selected.attempts)], ['País', selected.country], ['Estado', selected.status], ['Detectado', selected.time]].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-outline">{k}</span>
                      <span className="text-on-surface font-bold">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 pt-2">
                  <button className="w-full bg-error/20 hover:bg-error/30 text-error font-bold text-sm py-2.5 rounded-xl transition-colors">Bloquear IP Permanente</button>
                  <button className="w-full glass-panel hover:bg-white/10 text-on-surface font-bold text-sm py-2.5 rounded-xl transition-colors">Marcar como Resuelto</button>
                </div>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl p-6 flex items-center justify-center">
                <div className="text-center text-outline">
                  <span className="material-symbols-outlined text-5xl">security</span>
                  <p className="text-sm mt-2">Selecciona una alerta para ver detalles</p>
                </div>
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

        {tab === 'sesiones' && (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-headline font-bold text-on-surface">Sesiones Activas ({sessions.length})</h3>
            </div>
            <div className="divide-y divide-white/5">
              {sessions.map((s, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        {s.user} {s.current && <span className="text-xs text-tertiary ml-1">(Sesión actual)</span>}
                      </p>
                      <p className="text-xs text-outline">{s.device} · {s.ip} · {s.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-outline">{s.since}</span>
                    {!s.current && (
                      <button className="bg-error/20 hover:bg-error/30 text-error text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">Cerrar</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
