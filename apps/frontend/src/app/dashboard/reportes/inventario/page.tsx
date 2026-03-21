'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const productos = [
  { nombre: 'Harina de Maíz Precocida 1kg', sku: 'ALI-HMP-001', stock: 18420, valorUnit: 1.50, rotacion: 8.4, categoria: 'Alimentos', estado: 'Normal' },
  { nombre: 'Aceite Vegetal 1L', sku: 'ALI-ACV-001', stock: 9840, valorUnit: 2.40, rotacion: 6.2, categoria: 'Alimentos', estado: 'Normal' },
  { nombre: 'Pasta Corta 500g', sku: 'ALI-PAS-001', stock: 24100, valorUnit: 1.20, rotacion: 9.1, categoria: 'Alimentos', estado: 'Normal' },
  { nombre: 'Arroz Blanco 1kg', sku: 'ALI-ARR-001', stock: 320, valorUnit: 1.50, rotacion: 11.2, categoria: 'Alimentos', estado: 'Crítico' },
  { nombre: 'Azúcar Refinada 1kg', sku: 'ALI-AZU-001', stock: 6200, valorUnit: 1.80, rotacion: 7.8, categoria: 'Alimentos', estado: 'Normal' },
  { nombre: 'Café Molido 250g', sku: 'ALI-CAF-001', stock: 4800, valorUnit: 3.20, rotacion: 5.4, categoria: 'Alimentos', estado: 'Normal' },
  { nombre: 'Leche en Polvo 400g', sku: 'ALI-LEC-001', stock: 180, valorUnit: 4.50, rotacion: 12.1, categoria: 'Alimentos', estado: 'Crítico' },
  { nombre: 'Detergente Ariel 1kg', sku: 'LIM-ARI-001', stock: 2400, valorUnit: 3.20, rotacion: 4.2, categoria: 'Limpieza', estado: 'Normal' },
  { nombre: 'Jabón de Tocador 100g', sku: 'LIM-JAB-001', stock: 8900, valorUnit: 0.85, rotacion: 6.8, categoria: 'Limpieza', estado: 'Normal' },
  { nombre: 'Resma Papel Carta', sku: 'PAP-RES-001', stock: 42, valorUnit: 6.50, rotacion: 2.1, categoria: 'Papelería', estado: 'Crítico' },
  { nombre: 'Televisor Samsung 43"', sku: 'ELE-TV-001', stock: 8, valorUnit: 320.00, rotacion: 1.2, categoria: 'Electrónica', estado: 'Normal' },
  { nombre: 'Nevera Mabe 14 pies', sku: 'ELE-NEV-001', stock: 3, valorUnit: 580.00, rotacion: 0.8, categoria: 'Electrónica', estado: 'Crítico' },
]

const valorTotalStock = productos.reduce((acc, p) => acc + p.stock * p.valorUnit, 0)
const productosCriticos = productos.filter((p) => p.estado === 'Crítico').length
const rotacionPromedio = (productos.reduce((acc, p) => acc + p.rotacion, 0) / productos.length).toFixed(1)

const estadoVariant: Record<string, 'success' | 'error'> = {
  Normal: 'success',
  Crítico: 'error',
}

const rotacionColor = (r: number) => {
  if (r >= 8) return 'text-emerald-400'
  if (r >= 4) return 'text-primary'
  return 'text-amber-400'
}

export default function ReporteInventarioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Reporte de Inventario" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Reporte de Inventario</h2>
            <p className="text-on-surface-variant mt-1">Valorización y rotación del stock actual.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-[18px]">table_view</span>
              Excel
            </Button>
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-error text-[18px]">picture_as_pdf</span>
              PDF
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-primary">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Valor Total Stock</p>
            <p className="text-3xl font-headline font-bold text-on-surface">${valorTotalStock.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-tertiary mt-1">valorización a precio de costo</p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-error">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Productos Críticos</p>
            <p className="text-3xl font-headline font-bold text-on-surface">{productosCriticos}</p>
            <p className="text-xs text-error mt-1">requieren reposición urgente</p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-tertiary">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Rotación Promedio</p>
            <p className="text-3xl font-headline font-bold text-on-surface">{rotacionPromedio}x</p>
            <p className="text-xs text-outline mt-1">veces por mes</p>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Detalle de Inventario</h3>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-error">
                <span className="w-2 h-2 rounded-full bg-error" />
                {productosCriticos} críticos
              </span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Producto', 'SKU', 'Categoría', 'Stock Actual', 'Valor Unit.', 'Valor Total', 'Rotación/mes', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {productos.map((p) => (
                  <tr key={p.sku} className={`hover:bg-white/5 transition-colors ${p.estado === 'Crítico' ? 'bg-error/5' : ''}`}>
                    <td className="px-6 py-4 text-sm font-medium text-on-surface">{p.nombre}</td>
                    <td className="px-6 py-4 text-sm font-mono text-outline">{p.sku}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{p.categoria}</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">
                      {p.stock.toLocaleString()}
                      {p.estado === 'Crítico' && (
                        <span className="material-symbols-outlined text-error text-[14px] ml-1 align-middle">warning</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">${p.valorUnit.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm font-bold text-primary">${(p.stock * p.valorUnit).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 bg-surface-container-highest rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${p.rotacion >= 8 ? 'bg-emerald-500' : p.rotacion >= 4 ? 'bg-primary' : 'bg-amber-500'}`}
                            style={{ width: `${Math.min((p.rotacion / 12) * 100, 100)}%` }}
                          />
                        </div>
                        <span className={`text-sm font-bold ${rotacionColor(p.rotacion)}`}>{p.rotacion}x</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[p.estado]}>{p.estado}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-surface-container-highest/50 border-t-2 border-primary/20">
                  <td colSpan={5} className="px-6 py-4 text-xs font-spartan uppercase tracking-widest text-outline font-bold">
                    Valor Total del Inventario
                  </td>
                  <td className="px-6 py-4 font-headline font-bold text-primary text-lg">
                    ${valorTotalStock.toLocaleString('es-VE', { minimumFractionDigits: 2 })}
                  </td>
                  <td colSpan={2} />
                </tr>
              </tfoot>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
