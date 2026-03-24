'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/stores/authStore'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'
import { useEffect, useState } from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'

interface KpiData {
  tasaBCV: number
  ventas: {
    totalVES: number
    totalUSD: number
    pendienteCobroVES: number
    facturasVencidas: number
    porEstado: Record<string, { count: number; totalVES: number }>
  }
  inventario: { totalProductos: number; stockBajo: number }
  rrhh: { totalEmpleados: number; activos: number; vacaciones: number }
  compras: { porEstado: Record<string, { count: number; totalUSD: number }> }
}

interface ChartData {
  ventasMensuales: { mes: string; ingresos: number; pendiente: number }[]
  topProductos: { nombre: string; sku: string; stock: number; valorUSD: number }[]
}

const COLORS = ['#c0c1ff', '#60a5fa', '#a5b4fc', '#34d399', '#f59e0b']

const MESES: Record<string, string> = {
  '01': 'Ene', '02': 'Feb', '03': 'Mar', '04': 'Abr',
  '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Ago',
  '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dic',
}

function fmtVES(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`
  return n.toLocaleString('es-VE')
}

function fmtUSD(n: number) {
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export default function DashboardPage() {
  const { user } = useAuthStore()
  const [greeting, setGreeting] = useState('Bienvenido')
  useEffect(() => {
    const hour = new Date().getHours()
    setGreeting(hour < 12 ? 'Buenos días' : hour < 18 ? 'Buenas tardes' : 'Buenas noches')
  }, [])

  const { data: kpis, isLoading: kpisLoading } = useErpQuery<KpiData>(
    QK.ejecutivo.kpis(),
    '/dashboard/kpis',
    { refetchInterval: 60_000 }
  )

  const { data: charts } = useErpQuery<ChartData>(
    QK.ejecutivo.charts(),
    '/dashboard/charts',
    { refetchInterval: 120_000 }
  )

  const chartData = charts?.ventasMensuales.map((d) => ({
    mes: MESES[d.mes.slice(5, 7)] ?? d.mes,
    ingresos: Math.round(d.ingresos / 1000),
    pendiente: Math.round(d.pendiente / 1000),
  })) ?? []

  const pieData = charts?.topProductos.map((p) => ({
    name: p.sku,
    value: Math.round(p.valorUSD),
  })) ?? []

  const totalVentas = kpis?.ventas.totalVES ?? 0
  const totalUSD = kpis?.ventas.totalUSD ?? 0
  const pendiente = kpis?.ventas.pendienteCobroVES ?? 0
  const vencidas = kpis?.ventas.facturasVencidas ?? 0
  const stockBajo = kpis?.inventario.stockBajo ?? 0
  const empleados = kpis?.rrhh.totalEmpleados ?? 0
  const tasaBCV = kpis?.tasaBCV ?? 46.82

  const kpiCards = [
    {
      label: 'Ventas Totales',
      value: fmtVES(totalVentas) + ' VES',
      sub: fmtUSD(totalUSD),
      variant: 'success' as const,
      bar: Math.min(100, Math.round((totalVentas / 1_000_000) * 10)),
      barColor: 'bg-primary',
      icon: 'point_of_sale',
    },
    {
      label: 'Pendiente de Cobro',
      value: fmtVES(pendiente) + ' VES',
      sub: fmtUSD(pendiente / tasaBCV),
      variant: 'warning' as const,
      bar: totalVentas > 0 ? Math.round((pendiente / totalVentas) * 100) : 0,
      barColor: 'bg-amber-500',
      icon: 'schedule',
    },
    {
      label: 'Facturas Vencidas',
      value: String(vencidas),
      sub: 'Requieren gestión',
      variant: vencidas > 0 ? 'error' as const : 'success' as const,
      bar: 100,
      barColor: vencidas > 0 ? 'bg-error' : 'bg-emerald-500',
      icon: 'warning',
    },
    {
      label: 'Stock Bajo / Crítico',
      value: String(stockBajo),
      sub: `de ${kpis?.inventario.totalProductos ?? 0} productos`,
      variant: stockBajo > 0 ? 'warning' as const : 'success' as const,
      bar: kpis?.inventario.totalProductos ? Math.round((stockBajo / kpis.inventario.totalProductos) * 100) : 0,
      barColor: 'bg-amber-400',
      icon: 'inventory_2',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="ERP ZENITH" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline">{greeting}, {user?.name ?? 'Administrador'}</h2>
            <p className="text-on-surface-variant mt-1">
              Tasa BCV: <span className="text-tertiary font-bold font-spartan">{tasaBCV.toFixed(2)} VES/USD</span>
              {' · '}Última actualización: ahora mismo
            </p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Generar Informe
          </Button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiCards.map((kpi) => (
            <GlassCard key={kpi.label} className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-on-surface-variant">{kpi.label}</p>
                  <h3 className={`text-2xl font-bold text-on-surface mt-2 font-headline ${kpisLoading ? 'animate-pulse' : ''}`}>
                    {kpisLoading ? '—' : kpi.value}
                  </h3>
                  <p className="text-xs text-outline mt-1">{kpi.sub}</p>
                </div>
                <span className="material-symbols-outlined text-primary/60 text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {kpi.icon}
                </span>
              </div>
              <div className="mt-4 h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className={`h-full ${kpi.barColor} rounded-full transition-all duration-700`} style={{ width: `${kpi.bar}%` }} />
              </div>
            </GlassCard>
          ))}
        </div>

        {/* RRHH + Compras mini-stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Empleados Activos', value: kpis?.rrhh.activos ?? '—', icon: 'group', color: 'text-primary' },
            { label: 'En Vacaciones', value: kpis?.rrhh.vacaciones ?? '—', icon: 'beach_access', color: 'text-tertiary' },
            { label: 'OC Emitidas', value: kpis?.compras.porEstado['EMITIDA']?.count ?? 0, icon: 'shopping_cart', color: 'text-amber-400' },
            { label: 'OC Recibidas', value: kpis?.compras.porEstado['RECIBIDA']?.count ?? 0, icon: 'inventory', color: 'text-emerald-400' },
          ].map((s) => (
            <GlassCard key={s.label} className="p-4 flex items-center gap-4">
              <span className={`material-symbols-outlined text-[28px] ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
              <div>
                <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">{s.label}</p>
                <p className="text-xl font-headline font-bold text-on-surface">{s.value}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <GlassCard className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-on-surface font-headline">Rendimiento de Ventas</h3>
                <p className="text-sm text-on-surface-variant">Ingresos cobrados vs pendientes (VES miles)</p>
              </div>
            </div>
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="ingresosGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#c0c1ff" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#c0c1ff" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="pendienteGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" />
                  <XAxis dataKey="mes" tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} formatter={(v: number) => [`${v}k VES`, '']} />
                  <Area type="monotone" dataKey="ingresos" stroke="#c0c1ff" strokeWidth={2} fill="url(#ingresosGrad)" name="Cobrado" />
                  <Area type="monotone" dataKey="pendiente" stroke="#f59e0b" strokeWidth={2} fill="url(#pendienteGrad)" name="Pendiente" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-[280px] flex items-center justify-center text-outline text-sm">
                {kpisLoading ? 'Cargando datos...' : 'Sin datos de ventas aún'}
              </div>
            )}
          </GlassCard>

          <GlassCard className="p-6 flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-on-surface font-headline">Top Productos</h3>
              <p className="text-sm text-on-surface-variant">Por valor de stock (USD)</p>
            </div>
            {pieData.length > 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" strokeWidth={0}>
                      {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                    </Pie>
                    <Legend iconType="circle" iconSize={8} formatter={(v) => <span className="text-xs text-on-surface-variant">{v}</span>} />
                    <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} formatter={(v: number) => [fmtUSD(v), 'Valor']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex-1 flex items-center justify-center text-outline text-sm">Sin datos</div>
            )}
          </GlassCard>
        </div>

        {/* Facturas recientes */}
        <FacturasRecientes tasaBCV={tasaBCV} />
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

// ─── Facturas Recientes ───────────────────────────────────────────────────────
interface Factura {
  id: string; numero: string; estado: string; totalVES: number; totalUSD: number
  createdAt: string; cliente: { nombre: string; rif: string }
}

const estadoBadge: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  PAGADA: 'success', PENDIENTE: 'warning', VENCIDA: 'error', ANULADA: 'info',
}

function FacturasRecientes({ tasaBCV }: { tasaBCV: number }) {
  const { data: facturas, isLoading } = useErpQuery<Factura[]>(
    QK.ventas.facturas(),
    '/ventas/facturas',
    { select: (d: Factura[]) => d.slice(0, 5) } as any
  )

  return (
    <GlassCard className="overflow-hidden">
      <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-lg font-bold text-on-surface font-headline">Facturas Recientes</h3>
        <a href="/dashboard/ventas/facturas" className="text-sm text-primary font-medium hover:underline">Ver Todo</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-on-surface-variant">
          <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
            <tr>
              <th className="px-6 py-4">Número</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Fecha</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Total VES</th>
              <th className="px-6 py-4 text-right">Total USD</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <tr key={i}>
                  {Array.from({ length: 6 }).map((_, j) => (
                    <td key={j} className="px-6 py-4"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                  ))}
                </tr>
              ))
            ) : facturas?.map((f) => (
              <tr key={f.id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-primary font-mono">{f.numero}</td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-on-surface">{f.cliente.nombre}</p>
                  <p className="text-[10px] text-outline">{f.cliente.rif}</p>
                </td>
                <td className="px-6 py-4 text-outline">{new Date(f.createdAt).toLocaleDateString('es-VE')}</td>
                <td className="px-6 py-4">
                  <Badge variant={estadoBadge[f.estado] ?? 'info'}>{f.estado}</Badge>
                </td>
                <td className="px-6 py-4 text-right font-semibold text-on-surface">
                  {Number(f.totalVES).toLocaleString('es-VE')}
                </td>
                <td className="px-6 py-4 text-right text-outline">
                  ${Number(f.totalUSD).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!isLoading && (!facturas || facturas.length === 0) && (
          <div className="py-12 text-center text-outline text-sm">No hay facturas registradas aún.</div>
        )}
      </div>
    </GlassCard>
  )
}
