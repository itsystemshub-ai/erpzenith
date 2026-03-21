'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts'

const kpis = [
  { label: 'Total Ventas', valor: '$142,850', cambio: '+12.5%', icon: 'payments', color: 'bg-primary/10 text-primary', trend: 'success' as const },
  { label: 'Gastos Mensuales', valor: '$45,210', cambio: '-2.4%', icon: 'shopping_cart', color: 'bg-tertiary/10 text-tertiary', trend: 'error' as const },
  { label: 'Valor Inventario', valor: '$892,400', cambio: '+5.1%', icon: 'inventory_2', color: 'bg-primary/10 text-primary', trend: 'success' as const },
  { label: 'Empleados Activos', valor: '1,248', cambio: '0%', icon: 'groups', color: 'bg-secondary/10 text-secondary', trend: 'warning' as const },
]

const revenueData = [
  { mes: 'ENE', usd: 95000, ves: 3467500 },
  { mes: 'FEB', usd: 112000, ves: 4088000 },
  { mes: 'MAR', usd: 98000, ves: 3577000 },
  { mes: 'ABR', usd: 125000, ves: 4562500 },
  { mes: 'MAY', usd: 118000, ves: 4307000 },
  { mes: 'JUN', usd: 142850, ves: 5214025 },
  { mes: 'JUL', usd: 138000, ves: 5037000 },
  { mes: 'AGO', usd: 155000, ves: 5657500 },
]

const inventarioData = [
  { almacen: 'Valencia', stock: 85 },
  { almacen: 'Maracaibo', stock: 45 },
  { almacen: 'Caracas', stock: 65 },
  { almacen: 'Pto. Ordaz', stock: 30 },
  { almacen: 'Barquisimeto', stock: 92 },
]

const alertas = [
  { tipo: 'error', titulo: 'Stock Bajo: SKU-9021', desc: 'Almacén Valencia - 4 unidades restantes' },
  { tipo: 'warning', titulo: 'Aprobación Pendiente', desc: 'OC #8829 - Departamento de Finanzas' },
  { tipo: 'success', titulo: 'Nueva Solicitud Proveedor', desc: 'TechSystems Global - Revisar ahora' },
]

const alertaColor: Record<string, string> = {
  error: 'bg-error', warning: 'bg-amber-500', success: 'bg-primary',
}

export default function ReportesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Reportes & BI" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div>
          <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
            Dashboard <span className="text-primary">General</span>
          </h2>
          <p className="text-on-surface-variant mt-1 font-spartan">Advanced Business Intelligence Console</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi) => (
            <GlassCard key={kpi.label} className="p-6 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-xl ${kpi.color}`}>
                  <span className="material-symbols-outlined">{kpi.icon}</span>
                </div>
                <Badge variant={kpi.trend}>{kpi.cambio}</Badge>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan mb-1">{kpi.label}</p>
              <p className="text-3xl font-headline font-bold text-on-surface">{kpi.valor}</p>
            </GlassCard>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Revenue Chart */}
          <GlassCard className="lg:col-span-8 p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Revenue Performance</h3>
                <p className="text-sm text-outline font-body">Comparativa: VES vs USD</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary">Mensual</button>
                <button className="px-4 py-1.5 rounded-full hover:bg-white/5 text-xs text-outline transition-colors">Semanal</button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="usdGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c0c1ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c0c1ff" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="vesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4cd7f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4cd7f6" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" />
                <XAxis dataKey="mes" tick={{ fill: '#908fa0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#908fa0', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
                <Area type="monotone" dataKey="usd" stroke="#c0c1ff" strokeWidth={2} fill="url(#usdGrad)" name="USD" />
                <Area type="monotone" dataKey="ves" stroke="#4cd7f6" strokeWidth={2} strokeDasharray="6 3" fill="url(#vesGrad)" name="VES" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* AI Insights + Alerts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <GlassCard className="p-6 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h4 className="font-headline font-bold text-primary">Gemini Executive Insights</h4>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                La demanda de <span className="text-primary font-bold">Válvulas Industriales</span> se proyecta con un alza del{' '}
                <span className="text-emerald-400">18%</span> en Q4. Se recomienda optimizar niveles de stock en el{' '}
                <span className="underline decoration-primary/30">Hub Maracaibo</span>.
              </p>
              <button className="mt-4 text-xs font-bold text-primary flex items-center gap-1 group">
                Análisis Completo
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </GlassCard>

            <GlassCard className="p-6 flex-1">
              <h4 className="font-headline font-bold text-on-surface mb-6 flex justify-between items-center">
                Alertas Recientes
                <span className="bg-error/10 text-error text-[10px] px-2 py-0.5 rounded-full uppercase tracking-tighter">3 críticas</span>
              </h4>
              <div className="space-y-5">
                {alertas.map((a) => (
                  <div key={a.titulo} className="flex gap-4 group">
                    <div className={`w-1.5 h-10 ${alertaColor[a.tipo]} rounded-full group-hover:h-12 transition-all`} />
                    <div>
                      <p className="text-sm font-bold text-on-surface">{a.titulo}</p>
                      <p className="text-xs text-outline">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Inventory Bar Chart */}
        <GlassCard className="p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-headline font-bold text-on-surface">Distribución de Inventario</h3>
              <p className="text-sm text-outline">Niveles de stock por almacén regional</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={inventarioData} barSize={40}>
              <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" vertical={false} />
              <XAxis dataKey="almacen" tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
              <Bar dataKey="stock" fill="#c0c1ff" radius={[6, 6, 0, 0]} name="Stock %" />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>
    </div>
  )
}
