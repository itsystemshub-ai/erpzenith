'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Ventas del Mes', value: '$48,200', icon: 'payments', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Meta', value: '92%', icon: 'flag', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Clientes', value: '38', icon: 'group', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Comisión', value: '$2,410', icon: 'account_balance_wallet', color: 'text-on-surface', bg: 'bg-surface-container-highest' },
]

const monthlyBars = [
  { month: 'Oct', value: 72 },
  { month: 'Nov', value: 58 },
  { month: 'Dic', value: 90 },
  { month: 'Ene', value: 65 },
  { month: 'Feb', value: 80 },
  { month: 'Mar', value: 92 },
]

const recentSales = [
  { folio: 'VTA-2026-0412', cliente: 'Distribuidora Carabobo C.A.', fecha: '18 Mar 2026', monto: '$4,200', estado: 'Cobrada' },
  { folio: 'VTA-2026-0398', cliente: 'Inversiones Bolívar S.A.', fecha: '15 Mar 2026', monto: '$8,750', estado: 'Pendiente' },
  { folio: 'VTA-2026-0381', cliente: 'Grupo Empresarial Zulia', fecha: '12 Mar 2026', monto: '$3,100', estado: 'Cobrada' },
  { folio: 'VTA-2026-0370', cliente: 'Comercial Andina C.A.', fecha: '08 Mar 2026', monto: '$6,400', estado: 'En Proceso' },
]

const estadoColor: Record<string, string> = {
  Cobrada: 'text-tertiary bg-tertiary/10',
  Pendiente: 'text-amber-400 bg-amber-400/10',
  'En Proceso': 'text-primary bg-primary/10',
}

export default function VendedorDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Vendedores" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
            <span className="text-3xl font-headline font-bold text-primary">AR</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h2 className="text-3xl font-headline font-bold text-on-surface">Alejandro Rivas</h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary/10 text-tertiary">Activo</span>
            </div>
            <p className="text-on-surface-variant">Vendedor Senior · Región Centro</p>
          </div>
          <div className="flex gap-3">
            <button className="glass-panel rounded-xl px-4 py-2 text-sm text-on-surface-variant hover:text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">edit</span>
              Editar
            </button>
            <button className="glass-panel rounded-xl px-4 py-2 text-sm text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">bar_chart</span>
              Reporte
            </button>
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
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Tendencia de Ventas Mensuales</h3>
          <div className="flex items-end gap-4 h-40">
            {monthlyBars.map((b) => (
              <div key={b.month} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs text-outline">{b.value}%</span>
                <div
                  className="w-full rounded-t-lg bg-primary/60 hover:bg-primary transition-all"
                  style={{ height: `${b.value}%` }}
                />
                <span className="text-xs text-on-surface-variant font-spartan">{b.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sales Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5">
            <h3 className="text-lg font-headline font-bold text-on-surface">Ventas Recientes</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Folio', 'Cliente', 'Fecha', 'Monto', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentSales.map((s) => (
                  <tr key={s.folio} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{s.folio}</td>
                    <td className="px-6 py-4 text-on-surface">{s.cliente}</td>
                    <td className="px-6 py-4 text-on-surface-variant text-xs">{s.fecha}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{s.monto}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${estadoColor[s.estado]}`}>{s.estado}</span>
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
