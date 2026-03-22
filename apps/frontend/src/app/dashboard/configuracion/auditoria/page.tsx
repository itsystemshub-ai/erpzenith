'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface AuditLog {
  id?: string
  usuario: string
  accion: string
  modulo: string
  detalle: string
  ip: string
  fecha: string
  nivel: 'info' | 'warning' | 'critical'
}

const nivelConfig: Record<string, { color: string; bg: string; icon: string }> = {
  info: { color: 'text-primary', bg: 'bg-primary/10 border-primary/20', icon: 'info' },
  warning: { color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', icon: 'warning' },
  critical: { color: 'text-error', bg: 'bg-error/10 border-error/20', icon: 'error' },
}

const filtros = ['Todos', 'info', 'warning', 'critical']

export default function AuditoriaPage() {
  const { data: logs = [], isLoading } = useErpQuery<AuditLog[]>(
    ['configuracion', 'auditoria'],
    '/configuracion/auditoria'
  )

  const [search, setSearch] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const filtered = logs.filter(l => {
    const matchSearch = l.usuario?.toLowerCase().includes(search.toLowerCase()) ||
      l.accion?.toLowerCase().includes(search.toLowerCase()) ||
      l.modulo?.toLowerCase().includes(search.toLowerCase())
    const matchFiltro = filtro === 'Todos' || l.nivel === filtro
    return matchSearch && matchFiltro
  })

  const totalWarning = logs.filter(l => l.nivel === 'warning').length
  const totalCritical = logs.filter(l => l.nivel === 'critical').length

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Historial de Auditoría" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Historial de Auditoría del Sistema</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Registro inmutable de todas las actividades, accesos y cambios críticos realizados en la plataforma.</p>
          </div>
          <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">download</span>Exportar Logs
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Eventos Totales', valor: String(logs.length), icon: 'history', iconColor: 'text-primary bg-primary/10' },
            { label: 'Alertas', valor: String(totalWarning), icon: 'warning', iconColor: 'text-amber-400 bg-amber-500/10' },
            { label: 'Eventos Críticos', valor: String(totalCritical), icon: 'error', iconColor: 'text-error bg-error/10' },
            { label: 'Módulos Afectados', valor: String(new Set(logs.map(l => l.modulo)).size), icon: 'category', iconColor: 'text-tertiary bg-tertiary/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex items-center gap-4">
              <div className={`p-3 rounded-xl ${k.iconColor}`}>
                <span className="material-symbols-outlined text-[24px]">{k.icon}</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
                <p className="text-2xl font-bold text-on-surface">{isLoading ? '—' : k.valor}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-white/5 gap-4">
            <div className="flex space-x-1 bg-surface-container p-1 rounded-xl self-start">
              {filtros.map((f) => (
                <button key={f} onClick={() => setFiltro(f)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all capitalize ${filtro === f ? 'bg-surface-container-highest text-on-surface shadow' : 'text-outline hover:text-on-surface'}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar usuario, acción..."
                className="pl-9 pr-4 py-2 bg-surface-container-highest border-none rounded-xl text-sm text-on-surface focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>

          {isLoading ? (
            <div className="p-8 space-y-3">
              {Array.from({ length: 5 }).map((_, i) => <div key={i} className="skeleton h-12 rounded-xl" />)}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <span className="material-symbols-outlined text-5xl text-outline/30">history_edu</span>
              <p className="text-on-surface-variant text-sm">No hay registros de auditoría disponibles.</p>
              <p className="text-outline text-xs max-w-sm">Los logs se generarán automáticamente cuando se implementen los modelos de auditoría en el backend.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                    {['Nivel', 'Usuario', 'Acción', 'Módulo', 'Detalle', 'IP', 'Fecha'].map(h => (
                      <th key={h} className="px-3 py-3 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filtered.map((l, i) => {
                    const cfg = nivelConfig[l.nivel] ?? nivelConfig.info
                    return (
                      <tr key={l.id ?? i} className="hover:bg-white/5 transition-colors">
                        <td className="px-3 py-3">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color}`}>
                            <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
                            {l.nivel}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-xs font-medium text-on-surface whitespace-nowrap">{l.usuario}</td>
                        <td className="px-3 py-3">
                          <span className="px-2 py-1 rounded bg-surface-container-highest text-xs font-mono text-on-surface-variant border border-white/10 whitespace-nowrap">{l.accion}</span>
                        </td>
                        <td className="px-3 py-3 text-xs text-on-surface-variant">{l.modulo}</td>
                        <td className="px-3 py-3 text-xs text-on-surface-variant max-w-[200px] truncate">{l.detalle}</td>
                        <td className="px-3 py-3 text-xs font-mono text-outline whitespace-nowrap">{l.ip}</td>
                        <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">{l.fecha}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-outline">Mostrando {filtered.length} de {logs.length} eventos</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5 disabled:opacity-40" disabled>Anterior</button>
              <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-lg">1</button>
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5 disabled:opacity-40" disabled>Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
