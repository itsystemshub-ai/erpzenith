'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ordenes = [
  { id: 'OP-2024-0041', producto: 'Válvula Industrial V-200', cantidad: 500, inicio: '01 Oct', fin: '15 Oct', progreso: 78, estado: 'En Proceso' },
  { id: 'OP-2024-0040', producto: 'Conector Hidráulico CH-50', cantidad: 1200, inicio: '28 Sep', fin: '10 Oct', progreso: 100, estado: 'Completada' },
  { id: 'OP-2024-0039', producto: 'Bomba Centrífuga BC-100', cantidad: 80, inicio: '05 Oct', fin: '20 Oct', progreso: 35, estado: 'En Proceso' },
  { id: 'OP-2024-0038', producto: 'Filtro Industrial FI-30', cantidad: 300, inicio: '10 Oct', fin: '25 Oct', progreso: 0, estado: 'Planificada' },
]

const eficienciaData = [
  { linea: 'L-01', eficiencia: 92 },
  { linea: 'L-02', eficiencia: 78 },
  { linea: 'L-03', eficiencia: 85 },
  { linea: 'L-04', eficiencia: 61 },
  { linea: 'L-05', eficiencia: 95 },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Completada: 'success', 'En Proceso': 'warning', Planificada: 'error',
}

export default function ProduccionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Producción" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Control de Producción</h2>
            <p className="text-on-surface-variant mt-1">Monitoreo de órdenes de producción y eficiencia de líneas.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Orden de Producción
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Órdenes Activas', valor: '12', icon: 'factory', color: 'bg-primary/10 text-primary', trend: '+3 esta semana' },
            { label: 'Eficiencia Global', valor: '82%', icon: 'speed', color: 'bg-tertiary/10 text-tertiary', trend: '↑ 4% vs mes ant.' },
            { label: 'Unidades Producidas', valor: '4,820', icon: 'inventory', color: 'bg-emerald-500/10 text-emerald-400', trend: 'Este mes' },
            { label: 'Paros No Planificados', valor: '3', icon: 'warning', color: 'bg-error/10 text-error', trend: '↓ 2 vs mes ant.' },
          ].map((kpi) => (
            <GlassCard key={kpi.label} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-xl ${kpi.color}`}>
                  <span className="material-symbols-outlined">{kpi.icon}</span>
                </div>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan">{kpi.label}</p>
              <p className="text-3xl font-headline font-bold text-on-surface mt-1">{kpi.valor}</p>
              <p className="text-xs text-on-surface-variant mt-2">{kpi.trend}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tabla Órdenes */}
          <GlassCard className="lg:col-span-2 overflow-hidden">
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-on-surface font-headline">Órdenes de Producción</h3>
              <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                  <tr>
                    {['ID', 'Producto', 'Cant.', 'Período', 'Progreso', 'Estado'].map((h) => (
                      <th key={h} className="px-6 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ordenes.map((op) => (
                    <tr key={op.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary font-medium">{op.id}</td>
                      <td className="px-6 py-4 text-on-surface">{op.producto}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{op.cantidad}</td>
                      <td className="px-6 py-4 text-outline text-xs">{op.inicio} → {op.fin}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${op.progreso}%` }} />
                          </div>
                          <span className="text-xs text-outline">{op.progreso}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={estadoVariant[op.estado]}>{op.estado}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Eficiencia por Línea */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-on-surface font-headline mb-6">Eficiencia por Línea</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={eficienciaData} barSize={28}>
                <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" vertical={false} />
                <XAxis dataKey="linea" tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
                <Bar dataKey="eficiencia" fill="#c0c1ff" radius={[6, 6, 0, 0]} name="Eficiencia %" />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
