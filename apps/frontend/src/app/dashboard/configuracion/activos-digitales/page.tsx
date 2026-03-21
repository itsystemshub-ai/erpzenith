'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const activos = [
  { id: 1, nombre: 'Microsoft 365 Business', tipo: 'SaaS', licencias: 25, usadas: 22, costo: 12500, vencimiento: '2025-06-30', estado: 'activo', proveedor: 'Microsoft' },
  { id: 2, nombre: 'Adobe Creative Cloud', tipo: 'SaaS', licencias: 5, usadas: 5, costo: 3750, vencimiento: '2025-03-15', estado: 'por_vencer', proveedor: 'Adobe' },
  { id: 3, nombre: 'Servidor Web Principal', tipo: 'Infraestructura', licencias: 1, usadas: 1, costo: 8400, vencimiento: '2025-12-31', estado: 'activo', proveedor: 'AWS' },
  { id: 4, nombre: 'Antivirus Corporativo', tipo: 'Seguridad', licencias: 30, usadas: 28, costo: 4500, vencimiento: '2025-02-28', estado: 'por_vencer', proveedor: 'Kaspersky' },
  { id: 5, nombre: 'Dominio empresa.com', tipo: 'Dominio', licencias: 1, usadas: 1, costo: 150, vencimiento: '2025-08-10', estado: 'activo', proveedor: 'GoDaddy' },
  { id: 6, nombre: 'Zoom Business', tipo: 'SaaS', licencias: 10, usadas: 7, costo: 2100, vencimiento: '2024-12-31', estado: 'vencido', proveedor: 'Zoom' },
]

const estadoBadge: Record<string, string> = {
  activo: 'bg-tertiary/20 text-tertiary',
  por_vencer: 'bg-yellow-500/20 text-yellow-400',
  vencido: 'bg-error/20 text-error',
}

const estadoLabel: Record<string, string> = {
  activo: 'Activo',
  por_vencer: 'Por Vencer',
  vencido: 'Vencido',
}

const tipoIcon: Record<string, string> = {
  SaaS: 'cloud',
  Infraestructura: 'dns',
  Seguridad: 'security',
  Dominio: 'language',
}

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

export default function ActivosDigitalesPage() {
  const [filter, setFilter] = useState<'todos' | 'activo' | 'por_vencer' | 'vencido'>('todos')

  const filtered = activos.filter(a => filter === 'todos' || a.estado === filter)
  const totalCosto = activos.reduce((s, a) => s + a.costo, 0)
  const porVencer = activos.filter(a => a.estado === 'por_vencer').length
  const vencidos = activos.filter(a => a.estado === 'vencido').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Activos Digitales y Software</h2>
            <p className="text-on-surface-variant mt-1">Control de licencias, suscripciones e infraestructura</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Agregar Activo
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Costo Anual Total', value: fmt(totalCosto), icon: 'payments', color: 'text-primary' },
            { label: 'Activos Registrados', value: String(activos.length), icon: 'inventory_2', color: 'text-secondary' },
            { label: 'Por Vencer (30 días)', value: String(porVencer), icon: 'event_upcoming', color: 'text-yellow-400' },
            { label: 'Vencidos', value: String(vencidos), icon: 'warning', color: 'text-error' },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${k.color}`}>{k.icon}</span>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
                <p className="text-xs text-outline">{k.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['todos', 'activo', 'por_vencer', 'vencido'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${filter === f ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {f === 'todos' ? 'Todos' : estadoLabel[f]}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                {['Activo', 'Tipo', 'Proveedor', 'Licencias', 'Costo/Año', 'Vencimiento', 'Estado', ''].map(h => (
                  <th key={h} className="text-left px-6 py-4 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map(a => (
                <tr key={a.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-[16px]">{tipoIcon[a.tipo] || 'devices'}</span>
                      </div>
                      <span className="font-bold text-on-surface">{a.nombre}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-on-surface-variant">{a.tipo}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{a.proveedor}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-on-surface font-bold">{a.usadas}/{a.licencias}</span>
                      <div className="w-16 h-1.5 bg-white/10 rounded-full">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${(a.usadas / a.licencias) * 100}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-on-surface font-mono">{fmt(a.costo)}</td>
                  <td className="px-6 py-4 text-on-surface-variant">{a.vencimiento}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${estadoBadge[a.estado]}`}>{estadoLabel[a.estado]}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-xs text-primary hover:text-primary/80 font-bold transition-colors">Gestionar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
