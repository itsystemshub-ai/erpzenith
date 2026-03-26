'use client'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface KpiItem { label: string; value: string; icon: string; color: string; bg: string }
interface Producto { producto: string; sku: string; stockActual: number; puntoReorden: number; cantSugerida: number; proveedor: string; urgente: boolean }

export default function ReabastecimientoPage() {
  const { data: kpis = [] } = useErpQuery<KpiItem[]>(QK.inventario.reabastecimientoKpis(), '/inventario/reabastecimiento/kpis', { refetchInterval: 60_000 })
  const { data: productos = [] } = useErpQuery<Producto[]>(QK.inventario.reabastecimientoProductos(), '/inventario/reabastecimiento/productos', { refetchInterval: 60_000 })

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Inventario" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Reglas de Reabastecimiento</h2>
            <p className="text-on-surface-variant mt-1">Automatización de órdenes basada en puntos de reorden y demanda histórica.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>Nueva Regla
          </button>
        </div>
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
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5">
            <h3 className="text-lg font-headline font-bold text-on-surface">Productos con Reglas Activas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>{['Producto','SKU','Stock Actual','Punto Reorden','Cantidad Sugerida','Proveedor','Acción'].map((h) => (
                  <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                ))}</tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {productos.map((p) => (
                  <tr key={p.sku} className={`hover:bg-white/5 transition-colors ${p.urgente ? 'bg-error/5' : ''}`}>
                    <td className="px-6 py-4 font-medium text-on-surface">{p.producto}</td>
                    <td className="px-6 py-4 font-mono text-on-surface-variant text-xs">{p.sku}</td>
                    <td className="px-6 py-4"><span className={`font-bold ${p.stockActual <= p.puntoReorden ? 'text-error' : 'text-on-surface'}`}>{p.stockActual}</span></td>
                    <td className="px-6 py-4 text-on-surface-variant">{p.puntoReorden}</td>
                    <td className="px-6 py-4 text-primary font-bold">{p.cantSugerida}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{p.proveedor}</td>
                    <td className="px-6 py-4">
                      {p.urgente
                        ? <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-error/10 text-error hover:bg-error/20 transition-colors">Ordenar Ahora</button>
                        : <button className="text-xs font-bold px-3 py-1.5 rounded-lg glass-panel text-on-surface-variant hover:text-on-surface transition-colors">Programar</button>
                      }
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
