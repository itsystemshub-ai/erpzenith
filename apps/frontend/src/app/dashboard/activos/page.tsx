'use client'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface KpiItem {
  label: string
  value: string
  icon: string
  color: string
  bg: string
  badge: string
}

interface Activo {
  codigo: string
  nombre: string
  categoria: string
  costo: string
  valorLibros: string
  vidaUtil: number
  pct: number
  estado: 'Activo' | 'Por Retirar' | 'Depreciado'
  icon: string
}

interface Asiento {
  cuenta: string
  debe: string
  haber: string
}

interface Categoria {
  label: string
  pct: number
  color: string
}

const { data: kpis = [], isLoading: kpisLoading } = useErpQuery<KpiItem[]>(
  QK.activos.kpis(),
  '/activos/kpis',
  { refetchInterval: 60_000 }
)

const { data: activos = [], isLoading: activosLoading } = useErpQuery<Activo[]>(
  QK.activos.list(),
  '/activos',
  { refetchInterval: 60_000 }
)

const { data: asientos = [], isLoading: asientosLoading } = useErpQuery<Asiento[]>(
  QK.activos.asientos(),
  '/activos/asientos',
  { refetchInterval: 300_000 }
)

const { data: categorias = [], isLoading: categoriasLoading } = useErpQuery<Categoria[]>(
  QK.activos.categorias(),
  '/activos/categorias',
  { refetchInterval: 300_000 }
)
const estadoColor: Record<string, string> = {
  Activo: 'text-tertiary bg-tertiary/10',
  'Por Retirar': 'text-amber-400 bg-amber-400/10',
  Depreciado: 'text-outline bg-surface-container-highest',
}

const barColor = (pct: number) => pct >= 80 ? 'bg-primary' : pct >= 50 ? 'bg-amber-400' : 'bg-error'

export default function ActivosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Activos Fijos" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Activos Fijos y Depreciación</h2>
            <p className="text-on-surface-variant mt-1">Gestión del ciclo de vida de activos y generación automática de asientos contables.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Exportar Reporte
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Registrar Activo
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
                </div>
                <span className="text-xs font-bold px-2 py-1 rounded-full bg-surface-container-highest text-outline">{k.badge}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* IA Banner */}
        <div className="glass-panel rounded-2xl p-5 border border-primary/20 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary animate-pulse">auto_awesome</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-on-surface font-headline">Sugerencias de IA</p>
            <p className="text-sm text-on-surface-variant mt-0.5">
              Se sugiere extender la vida útil de <span className="text-primary font-bold">Vehículos de Reparto</span> basado en el bajo kilometraje reportado. Ahorro estimado en depreciación: <span className="text-tertiary font-bold">$840/mes</span>.
            </p>
          </div>
          <button className="shrink-0 text-xs text-primary font-bold hover:underline">Revisar</button>
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-headline font-bold text-on-surface">Registro de Activos</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input placeholder="Buscar activo..." className="bg-surface-container-highest border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-56" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Código', 'Activo', 'Categoría', 'Costo Original', 'Valor en Libros', 'Vida Útil', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activos.map((a) => (
                  <tr key={a.codigo} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{a.codigo}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center">
                          <span className="material-symbols-outlined text-outline text-[18px]">{a.icon}</span>
                        </div>
                        <span className="font-medium text-on-surface">{a.nombre}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{a.categoria}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{a.costo}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{a.valorLibros}</td>
                    <td className="px-6 py-4 w-48">
                      <div className="flex justify-between text-xs text-outline mb-1">
                        <span>{a.vidaUtil} meses</span>
                        <span className="font-bold text-on-surface">{a.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${barColor(a.pct)}`} style={{ width: `${a.pct}%` }} />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${estadoColor[a.estado]}`}>{a.estado}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Asientos */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-headline font-bold text-on-surface">Próxima Ejecución Contable</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">Asientos de depreciación — Marzo 2026</p>
              </div>
              <button className="flex items-center gap-2 bg-surface-container-highest text-on-surface px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Aprobar y Contabilizar
              </button>
            </div>
            <div className="bg-surface-container-highest/50 rounded-xl p-4 font-mono text-sm">
              <div className="grid grid-cols-12 gap-4 pb-2 border-b border-white/10 text-[10px] font-spartan uppercase tracking-widest text-outline">
                <div className="col-span-6">Cuenta</div>
                <div className="col-span-3 text-right">Debe</div>
                <div className="col-span-3 text-right">Haber</div>
              </div>
              {asientos.map((a, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-white/5 last:border-0">
                  <div className="col-span-6 text-on-surface text-xs">{a.cuenta}</div>
                  <div className="col-span-3 text-right text-on-surface text-xs">{a.debe}</div>
                  <div className="col-span-3 text-right text-outline text-xs">{a.haber}</div>
                </div>
              ))}
              <div className="grid grid-cols-12 gap-4 pt-3 mt-2 border-t border-white/20 font-bold">
                <div className="col-span-6 text-on-surface text-xs">Totales</div>
                <div className="col-span-3 text-right text-primary text-xs">$4,200.00</div>
                <div className="col-span-3 text-right text-primary text-xs">$4,200.00</div>
              </div>
            </div>
          </div>

          {/* Categorías */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-headline font-bold text-on-surface mb-2">Distribución por Categoría</h3>
            <p className="text-xs text-on-surface-variant mb-6">Valor actual de activos</p>
            <div className="space-y-5">
              {categorias.map((c) => (
                <div key={c.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-on-surface-variant">{c.label}</span>
                    <span className="font-bold text-on-surface">{c.pct}%</span>
                  </div>
                  <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
