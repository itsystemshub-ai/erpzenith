'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Gasto Total', value: '$184,200', icon: 'account_balance', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Órdenes', value: '312', icon: 'receipt_long', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Proveedores Activos', value: '28', icon: 'storefront', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Ahorro Negociado', value: '$12,400', icon: 'savings', color: 'text-on-surface', bg: 'bg-surface-container-highest' },
]

const monthlySpend = [
  { month: 'Oct', value: 55 },
  { month: 'Nov', value: 70 },
  { month: 'Dic', value: 90 },
  { month: 'Ene', value: 60 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 85 },
]

const suppliers = [
  { proveedor: 'TechSolutions C.A.', ordenes: 84, monto: '$52,400', calificacion: 4.8, tendencia: 'up' },
  { proveedor: 'Global Logistics S.A.', ordenes: 67, monto: '$38,900', calificacion: 4.5, tendencia: 'up' },
  { proveedor: 'Energía Total Corp.', ordenes: 92, monto: '$61,200', calificacion: 4.2, tendencia: 'down' },
  { proveedor: 'Papelería El Norte', ordenes: 69, monto: '$31,700', calificacion: 3.9, tendencia: 'neutral' },
]

const tendenciaIcon: Record<string, { icon: string; color: string }> = {
  up: { icon: 'trending_up', color: 'text-tertiary' },
  down: { icon: 'trending_down', color: 'text-error' },
  neutral: { icon: 'trending_flat', color: 'text-outline' },
}

export default function ComprasBIPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Reportes" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Reporte Ejecutivo de Compras BI</h2>
            <p className="text-on-surface-variant mt-1">Análisis de inteligencia de negocio · Período: Octubre 2025 – Marzo 2026</p>
          </div>
          <button className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar PDF
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Gasto Mensual en Compras</h3>
          <div className="flex items-end gap-4 h-40">
            {monthlySpend.map((b) => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-outline">${Math.round(b.value * 2048 / 100).toLocaleString()}</span>
                <div
                  className="w-full rounded-t-lg bg-tertiary/60 hover:bg-tertiary transition-all"
                  style={{ height: `${b.value}%` }}
                />
                <span className="text-xs text-on-surface-variant font-spartan">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Suppliers Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5">
            <h3 className="text-lg font-headline font-bold text-on-surface">Top Proveedores</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Proveedor', 'Órdenes', 'Monto Total', 'Calificación', 'Tendencia'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {suppliers.map((s) => (
                  <tr key={s.proveedor} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface">{s.proveedor}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{s.ordenes}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{s.monto}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-on-surface font-bold">{s.calificacion}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`material-symbols-outlined ${tendenciaIcon[s.tendencia].color}`}>
                        {tendenciaIcon[s.tendencia].icon}
                      </span>
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
