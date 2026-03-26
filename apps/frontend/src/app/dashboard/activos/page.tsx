'use client'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface KpiItem { label: string; value: string; icon: string; color: string; bg: string; badge: string }
interface Activo { codigo: string; nombre: string; categoria: string; costo: string; valorLibros: string; vidaUtil: number; pct: number; estado: 'Activo' | 'Por Retirar' | 'Depreciado'; icon: string }
interface Asiento { cuenta: string; debe: string; haber: string }
interface Categoria { label: string; pct: number; color: string }

const estadoColor: Record<string, string> = {
  Activo: 'text-tertiary bg-tertiary/10',
  'Por Retirar': 'text-amber-400 bg-amber-400/10',
  Depreciado: 'text-outline bg-surface-container-highest',
}
const barColor = (pct: number) => pct >= 80 ? 'bg-primary' : pct >= 50 ? 'bg-amber-400' : 'bg-error'

export default function ActivosPage() {
  const { data: kpis = [] } = useErpQuery<KpiItem[]>(QK.activos.kpis(), '/activos/kpis', { refetchInterval: 60_000 })
  const { data: activos = [] } = useErpQuery<Activo[]>(QK.activos.list(), '/activos', { refetchInterval: 60_000 })
  const { data: asientos = [] } = useErpQuery<Asiento[]>(QK.activos.asientos(), '/activos/asientos', { refetchInterval: 300_000 })
  const { data: categorias = [] } = useErpQuery<Categoria[]>(QK.activos.categorias(), '/activos/categorias', { refetchInterval: 300_000 })

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
              <span className="material-symbols-outlined text-[18px]">download</span>Exportar Reporte
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>Registrar Activo
            </button>
          </div>
        </div>
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
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>{['Código','Activo','Categoría','Costo Original','Valor en Libros','Vida Útil','Estado'].map((h) => (
                  <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {activos.map((a) => (
                  <tr key={a.codigo} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{a.codigo}</td>
                    <td className="px-6 py-4 font-medium text-on-surface">{a.nombre}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{a.categoria}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{a.costo}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{a.valorLibros}</td>
                    <td className="px-6 py-4 w-48">
                      <div className="flex justify-between text-xs text-outline mb-1">
                        <span>{a.vidaUtil} meses</span><span className="font-bold text-on-surface">{a.pct}%</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-headline font-bold text-on-surface mb-4">Asientos de Depreciación</h3>
            <div className="space-y-2">
              {asientos.map((a, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-2 border-b border-white/5">
                  <div className="col-span-6 text-on-surface text-xs">{a.cuenta}</div>
                  <div className="col-span-3 text-right text-on-surface text-xs">{a.debe}</div>
                  <div className="col-span-3 text-right text-outline text-xs">{a.haber}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="text-lg font-headline font-bold text-on-surface mb-4">Por Categoría</h3>
            <div className="space-y-4">
              {categorias.map((c) => (
                <div key={c.label}>
                  <div className="flex justify-between text-xs mb-1"><span className="text-on-surface-variant">{c.label}</span><span className="font-bold text-on-surface">{c.pct}%</span></div>
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
