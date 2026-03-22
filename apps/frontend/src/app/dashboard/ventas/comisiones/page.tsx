'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const periods = ['Este Mes', 'Trimestre', 'Año'] as const
type Period = typeof periods[number]

const kpis = [
  { label: 'Total Comisiones', value: '$8,240', icon: 'payments', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Vendedores Activos', value: '6', icon: 'group', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Meta Promedio', value: '78%', icon: 'flag', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Mejor Vendedor', value: 'Alejandro R.', icon: 'emoji_events', color: 'text-amber-400', bg: 'bg-amber-400/10' },
]

const vendedores = [
  { vendedor: 'Alejandro Rivas', ventas: '$48,200', meta: 92, comisionBase: '$1,930', bono: '$480', total: '$2,410', estado: 'Pagada' },
  { vendedor: 'Sofía Mendoza', ventas: '$35,600', meta: 78, comisionBase: '$1,424', bono: '$0', total: '$1,424', estado: 'Pendiente' },
  { vendedor: 'Carlos Herrera', ventas: '$29,100', meta: 65, comisionBase: '$1,164', bono: '$0', total: '$1,164', estado: 'Pendiente' },
  { vendedor: 'Valentina Torres', ventas: '$52,800', meta: 105, comisionBase: '$2,112', bono: '$792', total: '$2,904', estado: 'Pagada' },
]

const estadoColor: Record<string, string> = {
  Pagada: 'text-tertiary bg-tertiary/10',
  Pendiente: 'text-amber-400 bg-amber-400/10',
  Retenida: 'text-error bg-error/10',
}

export default function ComisionesPage() {
  const [period, setPeriod] = useState<Period>('Este Mes')

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Ventas" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Comisiones y Rendimiento</h2>
            <p className="text-on-surface-variant mt-1">Seguimiento de comisiones y metas del equipo comercial.</p>
          </div>
          {/* Period Tabs */}
          <div className="flex glass-panel rounded-xl p-1 gap-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  period === p
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-2xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Commissions Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-headline font-bold text-on-surface">Detalle de Comisiones · {period}</h3>
            <button className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Exportar
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Vendedor', 'Ventas', 'Meta', 'Com. Base', 'Bono', 'Total', 'Estado'].map((h) => (
                    <th key={h} className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vendedores.map((v) => (
                  <tr key={v.vendedor} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-3 text-xs font-medium text-on-surface">{v.vendedor}</td>
                    <td className="px-3 py-3 text-xs text-on-surface whitespace-nowrap">{v.ventas}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${v.meta >= 100 ? 'bg-tertiary' : v.meta >= 75 ? 'bg-primary' : 'bg-amber-400'}`}
                            style={{ width: `${Math.min(v.meta, 100)}%` }}
                          />
                        </div>
                        <span className={`font-bold text-xs ${v.meta >= 100 ? 'text-tertiary' : v.meta >= 75 ? 'text-primary' : 'text-amber-400'}`}>
                          {v.meta}%
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant whitespace-nowrap">{v.comisionBase}</td>
                    <td className="px-3 py-3 text-xs text-tertiary font-bold whitespace-nowrap">{v.bono}</td>
                    <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">{v.total}</td>
                    <td className="px-3 py-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${estadoColor[v.estado]}`}>{v.estado}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
