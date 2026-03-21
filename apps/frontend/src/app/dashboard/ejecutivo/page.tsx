'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Ingresos Totales', valor: '$1.2M', badge: '+12%', badgeColor: 'text-emerald-400 bg-emerald-500/10', icon: 'payments', bar: 70, barColor: 'bg-primary' },
  { label: 'Gastos', valor: '$840k', badge: '-4%', badgeColor: 'text-emerald-400 bg-emerald-500/10', icon: 'trending_down', bar: 45, barColor: 'bg-amber-500' },
  { label: 'Beneficio Neto', valor: '$360k', badge: '-10%', badgeColor: 'text-error bg-error/10', icon: 'account_balance', bar: 60, barColor: 'bg-emerald-500' },
  { label: 'Insights de IA', valor: '3 Alertas', badge: 'Acción Req.', badgeColor: 'text-amber-400 bg-amber-500/10', icon: 'smart_toy', bar: null, barColor: '' },
]

const ventasMes = [
  { mes: 'Ene', ventas: 31, gastos: 11 }, { mes: 'Feb', ventas: 40, gastos: 32 },
  { mes: 'Mar', ventas: 28, gastos: 45 }, { mes: 'Abr', ventas: 51, gastos: 32 },
  { mes: 'May', ventas: 42, gastos: 34 }, { mes: 'Jun', ventas: 109, gastos: 52 },
  { mes: 'Jul', ventas: 100, gastos: 41 }, { mes: 'Ago', ventas: 85, gastos: 35 },
  { mes: 'Sep', ventas: 102, gastos: 55 }, { mes: 'Oct', ventas: 108, gastos: 62 },
  { mes: 'Nov', ventas: 115, gastos: 45 }, { mes: 'Dic', ventas: 140, gastos: 50 },
]

const topProductos = [
  { nombre: 'Lic. Empresarial', pct: 45, color: 'bg-primary' },
  { nombre: 'Sub. Pro', pct: 30, color: 'bg-blue-400' },
  { nombre: 'Complementos', pct: 25, color: 'bg-indigo-300' },
]

const transacciones = [
  { id: '#TRX-9982', fecha: 'Oct 24, 2023', entidad: 'Global Tech Solutions', estado: 'Completado', estadoColor: 'text-emerald-700 bg-green-100', monto: '$12,450.00' },
  { id: '#TRX-9981', fecha: 'Oct 23, 2023', entidad: 'Acme Logistics', estado: 'Pendiente', estadoColor: 'text-amber-700 bg-amber-100', monto: '$3,200.00' },
  { id: '#TRX-9980', fecha: 'Oct 23, 2023', entidad: 'Sirius Cybernetics', estado: 'Fallido', estadoColor: 'text-red-700 bg-red-100', monto: '$850.00' },
]

const periodos = ['12M', '6M', '30D'] as const
type Periodo = typeof periodos[number]

const maxVentas = Math.max(...ventasMes.map(v => v.ventas))

export default function EjecutivoDashboardPage() {
  const [periodo, setPeriodo] = useState<Periodo>('12M')

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Panel Ejecutivo" />
      <div className="flex-1 p-6 lg:p-10 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-on-surface">Buenos días, Alexander</h2>
            <p className="text-on-surface-variant mt-1">Aquí está lo que sucede en su organización hoy.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-outline font-medium">Última actualización: Ahora mismo</span>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-on-primary text-sm font-medium hover:bg-primary/90 transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Generar Informe
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant">{k.label}</p>
                  <h3 className="text-3xl font-bold text-on-surface mt-2">{k.valor}</h3>
                </div>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium ${k.badgeColor}`}>
                  {k.badge}
                </span>
              </div>
              {k.bar !== null && (
                <div className="mt-6 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className={`h-full ${k.barColor} rounded-full`} style={{ width: `${k.bar}%` }} />
                </div>
              )}
              {k.bar === null && (
                <div className="mt-6 flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse mt-1" />
                  <p className="text-xs text-on-surface-variant font-medium">Anomalía de inventario en WH-04</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gráfico + Top Productos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-container p-6 rounded-xl border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-on-surface">Rendimiento Financiero</h3>
                <p className="text-sm text-on-surface-variant">Ventas vs Gastos (Últimos 12 Meses)</p>
              </div>
              <div className="flex bg-surface-container-highest rounded-lg p-1 gap-1">
                {periodos.map((p) => (
                  <button key={p} onClick={() => setPeriodo(p)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${periodo === p ? 'bg-surface-container text-on-surface shadow-sm' : 'text-outline hover:text-on-surface'}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
            {/* Chart bars */}
            <div className="flex items-end gap-1 h-48 pb-6 relative">
              <div className="absolute bottom-6 left-0 right-0 flex flex-col justify-between h-40 pointer-events-none">
                {[0,1,2,3].map(i => <div key={i} className="w-full h-px bg-outline-variant/20" />)}
              </div>
              {ventasMes.map((b) => (
                <div key={b.mes} className="flex-1 flex flex-col items-center gap-0.5 z-10">
                  <div className="w-full flex items-end justify-center gap-0.5 h-40">
                    <div className="w-[45%] bg-primary/70 rounded-t transition-all hover:bg-primary"
                      style={{ height: `${(b.ventas / maxVentas) * 100}%` }} />
                    <div className="w-[45%] bg-outline/30 rounded-t transition-all hover:bg-outline/50"
                      style={{ height: `${(b.gastos / maxVentas) * 100}%` }} />
                  </div>
                  <span className="text-[9px] text-outline">{b.mes}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="w-3 h-1.5 rounded-full bg-primary/70" /> Ingresos
              </div>
              <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                <span className="w-3 h-1.5 rounded-full bg-outline/30" /> Gastos
              </div>
            </div>
          </div>

          <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/10 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-on-surface">Productos Top</h3>
              <p className="text-sm text-on-surface-variant">Desglose de ventas por SKU</p>
            </div>
            {/* Donut visual */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3.8" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#c0c1ff" strokeWidth="3.8"
                    strokeDasharray="45 55" strokeDashoffset="0" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#60a5fa" strokeWidth="3.8"
                    strokeDasharray="30 70" strokeDashoffset="-45" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#a5b4fc" strokeWidth="3.8"
                    strokeDasharray="25 75" strokeDashoffset="-75" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold text-on-surface">45k</span>
                  <span className="text-[10px] text-outline">Unidades</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 mt-2">
              {topProductos.map((p) => (
                <div key={p.nombre} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${p.color}`} />
                    <span className="text-on-surface-variant">{p.nombre}</span>
                  </div>
                  <span className="font-semibold text-on-surface">{p.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transacciones Recientes */}
        <div className="bg-surface-container rounded-xl border border-outline-variant/10 overflow-hidden">
          <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface">Transacciones Recientes</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-surface-container-highest/50 text-xs uppercase font-semibold text-outline">
                <tr>
                  {['ID Transacción', 'Fecha', 'Entidad', 'Estado', 'Monto'].map((h) => (
                    <th key={h} className={`px-6 py-3 ${h === 'Monto' ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {transacciones.map((t) => (
                  <tr key={t.id} className="hover:bg-surface-container-high/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface">{t.id}</td>
                    <td className="px-6 py-4">{t.fecha}</td>
                    <td className="px-6 py-4 text-on-surface">{t.entidad}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${t.estadoColor}`}>
                        {t.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-medium text-on-surface">{t.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Floating AI Button */}
      <button className="fixed bottom-8 right-8 h-14 w-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-on-primary z-50 hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-[28px]">smart_toy</span>
        <span className="absolute right-0 top-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-error" />
        </span>
      </button>
    </div>
  )
}
