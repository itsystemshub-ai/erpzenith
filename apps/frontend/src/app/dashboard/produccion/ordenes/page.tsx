'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const ordenes = [
  { op: 'OP-2025-0841', producto: 'Harina de Maíz Precocida 1kg', cantidad: 5000, unidad: 'kg', inicio: '01/11/2025', fin: '10/11/2025', progreso: 100, estado: 'Completada' },
  { op: 'OP-2025-0842', producto: 'Aceite Vegetal 1L', cantidad: 3200, unidad: 'L', inicio: '05/11/2025', fin: '15/11/2025', progreso: 100, estado: 'Completada' },
  { op: 'OP-2025-0843', producto: 'Pasta Corta 500g', cantidad: 8000, unidad: 'kg', inicio: '10/11/2025', fin: '20/11/2025', progreso: 78, estado: 'En Proceso' },
  { op: 'OP-2025-0844', producto: 'Arroz Blanco 1kg', cantidad: 12000, unidad: 'kg', inicio: '12/11/2025', fin: '25/11/2025', progreso: 55, estado: 'En Proceso' },
  { op: 'OP-2025-0845', producto: 'Azúcar Refinada 1kg', cantidad: 6000, unidad: 'kg', inicio: '15/11/2025', fin: '28/11/2025', progreso: 32, estado: 'En Proceso' },
  { op: 'OP-2025-0846', producto: 'Leche en Polvo 400g', cantidad: 2400, unidad: 'und', inicio: '20/11/2025', fin: '05/12/2025', progreso: 10, estado: 'En Proceso' },
  { op: 'OP-2025-0847', producto: 'Café Molido 250g', cantidad: 4800, unidad: 'und', inicio: '25/11/2025', fin: '10/12/2025', progreso: 0, estado: 'Planificada' },
  { op: 'OP-2025-0848', producto: 'Jabón de Tocador 100g', cantidad: 10000, unidad: 'und', inicio: '28/11/2025', fin: '15/12/2025', progreso: 0, estado: 'Planificada' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Completada: 'success',
  'En Proceso': 'warning',
  Planificada: 'error',
}

const progresoColor = (p: number) => {
  if (p === 100) return 'bg-emerald-500'
  if (p >= 50) return 'bg-primary'
  if (p > 0) return 'bg-amber-500'
  return 'bg-surface-container-highest'
}

export default function OrdenesProduccionPage() {
  const enProceso = ordenes.filter((o) => o.estado === 'En Proceso').length
  const completadas = ordenes.filter((o) => o.estado === 'Completada').length
  const eficiencia = Math.round(
    ordenes.filter((o) => o.estado !== 'Planificada').reduce((acc, o) => acc + o.progreso, 0) /
    ordenes.filter((o) => o.estado !== 'Planificada').length
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Órdenes de Producción" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Producción</h2>
            <p className="text-on-surface-variant mt-1">Control de órdenes de producción activas.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nueva OP
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">En Proceso</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{enProceso}</p>
            <p className="text-xs text-outline mt-1">órdenes activas</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Completadas (Nov)</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{completadas}</p>
            <p className="text-xs text-outline mt-1">este mes</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Eficiencia</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">speed</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{eficiencia}%</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${eficiencia}%` }} />
            </div>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">Órdenes de Producción</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Número OP', 'Producto', 'Cantidad', 'Fecha Inicio', 'Fecha Fin', 'Progreso', 'Estado', ''].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {ordenes.map((o) => (
                  <tr key={o.op} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-primary font-bold">{o.op}</td>
                    <td className="px-6 py-4 text-sm font-medium text-on-surface">{o.producto}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">
                      {o.cantidad.toLocaleString()} {o.unidad}
                    </td>
                    <td className="px-6 py-4 text-sm text-outline">{o.inicio}</td>
                    <td className="px-6 py-4 text-sm text-outline">{o.fin}</td>
                    <td className="px-6 py-4 min-w-[140px]">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-surface-container-highest rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${progresoColor(o.progreso)}`}
                            style={{ width: `${o.progreso}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-on-surface w-8 text-right">{o.progreso}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[o.estado]}>{o.estado}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
