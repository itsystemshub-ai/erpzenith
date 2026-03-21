'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Ventas Hoy', value: '$12,450', icon: 'trending_up', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Transacciones', value: '48', icon: 'receipt', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Ticket Promedio', value: '$259', icon: 'confirmation_number', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Meta Diaria', value: '78%', icon: 'flag', color: 'text-amber-400', bg: 'bg-amber-400/10' },
]

const transactions = [
  { hora: '14:32', cliente: 'Distribuidora Carabobo', producto: 'Válvula V-200 x10', monto: '$420', metodo: 'Transferencia' },
  { hora: '14:18', cliente: 'Inversiones Bolívar', producto: 'Bomba BC-100 x2', monto: '$1,800', metodo: 'Zelle' },
  { hora: '14:05', cliente: 'Comercial Andina', producto: 'Filtro FI-30 x5', monto: '$275', metodo: 'Efectivo USD' },
  { hora: '13:51', cliente: 'Grupo Zulia', producto: 'Conector CH-50 x20', monto: '$640', metodo: 'Transferencia' },
  { hora: '13:40', cliente: 'TechSolutions C.A.', producto: 'Sensor ST-10 x3', monto: '$390', metodo: 'Pago Móvil' },
  { hora: '13:22', cliente: 'Global Logistics', producto: 'Manguera HY-80 x8', monto: '$520', metodo: 'Zelle' },
  { hora: '13:10', cliente: 'Energía Total Corp.', producto: 'Válvula V-200 x4', monto: '$168', metodo: 'Transferencia' },
  { hora: '12:58', cliente: 'Papelería El Norte', producto: 'Filtro FI-30 x2', monto: '$110', metodo: 'Efectivo USD' },
]

const metodoBadge: Record<string, string> = {
  Transferencia: 'text-primary bg-primary/10',
  Zelle: 'text-tertiary bg-tertiary/10',
  'Efectivo USD': 'text-amber-400 bg-amber-400/10',
  'Pago Móvil': 'text-secondary bg-secondary/10',
}

export default function VentasRealtimePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Reportes" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Ventas en Tiempo Real</h2>
              <span className="flex items-center gap-1.5 bg-error/10 text-error text-xs font-bold px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                EN VIVO
              </span>
            </div>
            <p className="text-on-surface-variant mt-1">Transacciones del día · Actualización automática cada 30 segundos.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-outline glass-panel rounded-xl px-4 py-2">
            <span className="material-symbols-outlined text-[16px]">refresh</span>
            Última actualización: hace 12s
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

        {/* Daily Goal Progress */}
        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-headline font-bold text-on-surface">Progreso Meta Diaria</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">$12,450 de $16,000 objetivo</p>
            </div>
            <span className="text-2xl font-headline font-bold text-primary">78%</span>
          </div>
          <div className="h-3 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: '78%' }} />
          </div>
          <div className="flex justify-between text-xs text-outline mt-2">
            <span>$0</span>
            <span>Faltan $3,550 para la meta</span>
            <span>$16,000</span>
          </div>
        </div>

        {/* Live Feed Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-headline font-bold text-on-surface">Feed de Transacciones</h3>
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            </div>
            <span className="text-xs text-outline">Últimas 8 transacciones</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Hora', 'Cliente', 'Producto', 'Monto', 'Método Pago'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{t.hora}</td>
                    <td className="px-6 py-4 text-on-surface">{t.cliente}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{t.producto}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{t.monto}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${metodoBadge[t.metodo]}`}>{t.metodo}</span>
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
