'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/stores/authStore'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'

const revenueData = [
  { mes: 'Ene', ingresos: 310, gastos: 110 },
  { mes: 'Feb', ingresos: 400, gastos: 320 },
  { mes: 'Mar', ingresos: 280, gastos: 450 },
  { mes: 'Abr', ingresos: 510, gastos: 320 },
  { mes: 'May', ingresos: 420, gastos: 340 },
  { mes: 'Jun', ingresos: 1090, gastos: 520 },
  { mes: 'Jul', ingresos: 1000, gastos: 410 },
  { mes: 'Ago', ingresos: 850, gastos: 350 },
  { mes: 'Sep', ingresos: 1020, gastos: 550 },
  { mes: 'Oct', ingresos: 1080, gastos: 620 },
  { mes: 'Nov', ingresos: 1150, gastos: 450 },
  { mes: 'Dic', ingresos: 1400, gastos: 500 },
]

const productData = [
  { name: 'Lic. Empresarial', value: 45 },
  { name: 'Sub. Pro', value: 30 },
  { name: 'Complementos', value: 25 },
]

const COLORS = ['#c0c1ff', '#60a5fa', '#a5b4fc']

const transactions = [
  { id: '#TRX-9982', fecha: 'Oct 24, 2023', entidad: 'Global Tech Solutions', estado: 'Completado', monto: '$12,450.00' },
  { id: '#TRX-9981', fecha: 'Oct 23, 2023', entidad: 'Acme Logistics', estado: 'Pendiente', monto: '$3,200.00' },
  { id: '#TRX-9980', fecha: 'Oct 23, 2023', entidad: 'Sirius Cybernetics', estado: 'Fallido', monto: '$850.00' },
]

const estadoBadge: Record<string, 'success' | 'warning' | 'error'> = {
  Completado: 'success', Pendiente: 'warning', Fallido: 'error',
}

const kpis = [
  { label: 'Ingresos Totales', value: '$1.2M', change: '+12%', variant: 'success' as const, bar: 70, barColor: 'bg-primary', note: 'vs. mes pasado' },
  { label: 'Gastos', value: '$840k', change: '-4%', variant: 'success' as const, bar: 45, barColor: 'bg-amber-500', note: 'Optimización activa' },
  { label: 'Beneficio Neto', value: '$360k', change: '-10%', variant: 'error' as const, bar: 60, barColor: 'bg-emerald-500', note: 'Requiere atención' },
]

export default function DashboardPage() {
  const { user } = useAuthStore()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches'

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="ERP ZENITH" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline">{greeting}, {user?.name ?? 'Administrador'}</h2>
            <p className="text-on-surface-variant mt-1">Aquí está lo que sucede en tu organización hoy.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-outline font-medium">Última actualización: Ahora mismo</span>
            <Button size="sm">
              <span className="material-symbols-outlined text-[16px]">download</span>
              Generar Informe
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => (
            <GlassCard key={kpi.label} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant">{kpi.label}</p>
                  <h3 className="text-3xl font-bold text-on-surface mt-2 font-headline">{kpi.value}</h3>
                </div>
                <Badge variant={kpi.variant}>{kpi.change}</Badge>
              </div>
              <div className="mt-6 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className={`h-full ${kpi.barColor} rounded-full`} style={{ width: `${kpi.bar}%` }} />
              </div>
              <p className="text-xs text-outline mt-3">{kpi.note}</p>
            </GlassCard>
          ))}

          {/* AI Insights card */}
          <GlassCard className="p-6 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[80px] text-primary">smart_toy</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant">Insights de IA</p>
                  <h3 className="text-3xl font-bold text-on-surface mt-2 font-headline">3 Alertas</h3>
                </div>
                <Badge variant="warning">Acción Req.</Badge>
              </div>
              <div className="mt-6 flex gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse mt-1 flex-shrink-0" />
                <p className="text-xs text-on-surface-variant font-medium">Anomalía de inventario en WH-04</p>
              </div>
              <button className="mt-3 text-xs text-primary font-semibold hover:underline flex items-center gap-1">
                Ver Análisis <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </GlassCard>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Rendimiento Financiero</h3>
                <p className="text-sm text-on-surface-variant">Ventas vs Gastos (Últimos 12 Meses)</p>
              </div>
              <div className="flex bg-surface-container-highest rounded-xl p-1 gap-1">
                {['12M', '6M', '30D'].map((t) => (
                  <button key={t} className="px-3 py-1 text-xs font-medium rounded-lg first:bg-surface-bright first:text-on-surface text-outline hover:text-on-surface transition-colors">
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="ingresosGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c0c1ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c0c1ff" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="gastosGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#464554" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#464554" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" />
                <XAxis dataKey="mes" tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
                <Area type="monotone" dataKey="ingresos" stroke="#c0c1ff" strokeWidth={2} fill="url(#ingresosGrad)" name="Ingresos" />
                <Area type="monotone" dataKey="gastos" stroke="#464554" strokeWidth={2} fill="url(#gastosGrad)" name="Gastos" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>

          <GlassCard className="p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-on-surface font-headline">Productos Top</h3>
              <p className="text-sm text-on-surface-variant">Desglose de ventas por SKU</p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={productData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" strokeWidth={0}>
                    {productData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                  <Legend iconType="circle" iconSize={8} formatter={(v) => <span className="text-xs text-on-surface-variant">{v}</span>} />
                  <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-2 space-y-2">
              {productData.map((p, i) => (
                <div key={p.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: COLORS[i] }} />
                    <span className="text-on-surface-variant">{p.name}</span>
                  </div>
                  <span className="font-semibold text-on-surface">{p.value}%</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Transactions table */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Transacciones Recientes</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-on-surface-variant">
              <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                <tr>
                  <th className="px-6 py-4">ID Transacción</th>
                  <th className="px-6 py-4">Fecha</th>
                  <th className="px-6 py-4">Entidad</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transactions.map((t) => (
                  <tr key={t.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface font-mono">{t.id}</td>
                    <td className="px-6 py-4">{t.fecha}</td>
                    <td className="px-6 py-4">{t.entidad}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoBadge[t.estado]}>{t.estado}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-on-surface">{t.monto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>

      {/* Floating AI button */}
      <button className="fixed bottom-8 right-8 h-14 w-14 primary-gradient rounded-full shadow-floating flex items-center justify-center text-on-primary z-50 hover:scale-110 transition-transform animate-pulse-glow group">
        <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform">smart_toy</span>
        <span className="absolute right-0 top-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-error" />
        </span>
      </button>
    </div>
  )
}
