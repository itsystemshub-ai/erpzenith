'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

interface ComponenteBOM {
  material: string
  cantidad: number
  unidad: string
  costoUSD: number
}

interface ProductoBOM {
  id: string
  nombre: string
  codigo: string
  componentes: ComponenteBOM[]
}

const productos: ProductoBOM[] = [
  {
    id: '1',
    nombre: 'Harina de Maíz Precocida 1kg',
    codigo: 'PRD-HMP-001',
    componentes: [
      { material: 'Maíz Amarillo Seco', cantidad: 1.15, unidad: 'kg', costoUSD: 0.42 },
      { material: 'Agua Tratada', cantidad: 0.80, unidad: 'L', costoUSD: 0.02 },
      { material: 'Sal Refinada', cantidad: 0.02, unidad: 'kg', costoUSD: 0.01 },
      { material: 'Bolsa Polietileno 1kg', cantidad: 1, unidad: 'und', costoUSD: 0.08 },
      { material: 'Caja Cartón x12', cantidad: 0.083, unidad: 'und', costoUSD: 0.04 },
    ],
  },
  {
    id: '2',
    nombre: 'Aceite Vegetal 1L',
    codigo: 'PRD-ACV-001',
    componentes: [
      { material: 'Semilla de Girasol', cantidad: 2.80, unidad: 'kg', costoUSD: 0.95 },
      { material: 'Hexano Industrial', cantidad: 0.05, unidad: 'L', costoUSD: 0.12 },
      { material: 'Botella PET 1L', cantidad: 1, unidad: 'und', costoUSD: 0.18 },
      { material: 'Tapón Rosca', cantidad: 1, unidad: 'und', costoUSD: 0.03 },
      { material: 'Etiqueta Impresa', cantidad: 1, unidad: 'und', costoUSD: 0.05 },
    ],
  },
  {
    id: '3',
    nombre: 'Pasta Corta 500g',
    codigo: 'PRD-PAS-001',
    componentes: [
      { material: 'Sémola de Trigo Duro', cantidad: 0.52, unidad: 'kg', costoUSD: 0.38 },
      { material: 'Agua Tratada', cantidad: 0.20, unidad: 'L', costoUSD: 0.01 },
      { material: 'Huevo Líquido Pasteurizado', cantidad: 0.05, unidad: 'L', costoUSD: 0.09 },
      { material: 'Bolsa Polipropileno 500g', cantidad: 1, unidad: 'und', costoUSD: 0.06 },
    ],
  },
  {
    id: '4',
    nombre: 'Café Molido 250g',
    codigo: 'PRD-CAF-001',
    componentes: [
      { material: 'Café Verde Arábica', cantidad: 0.30, unidad: 'kg', costoUSD: 1.20 },
      { material: 'Café Verde Robusta', cantidad: 0.05, unidad: 'kg', costoUSD: 0.80 },
      { material: 'Bolsa Kraft con Válvula', cantidad: 1, unidad: 'und', costoUSD: 0.22 },
      { material: 'Etiqueta Impresa', cantidad: 1, unidad: 'und', costoUSD: 0.05 },
    ],
  },
]

export default function BOMPage() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0])

  const costoTotal = productoSeleccionado.componentes.reduce(
    (acc, c) => acc + c.cantidad * c.costoUSD,
    0
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Bill of Materials" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Bill of Materials</h2>
            <p className="text-on-surface-variant mt-1">Estructura de materiales por producto terminado.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nuevo BOM
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="space-y-3">
            <h3 className="text-sm font-spartan uppercase tracking-widest text-outline px-1">Productos</h3>
            {productos.map((p) => (
              <button
                key={p.id}
                onClick={() => setProductoSeleccionado(p)}
                className={`w-full text-left p-4 rounded-2xl transition-all ${
                  productoSeleccionado.id === p.id
                    ? 'bg-primary/10 border-2 border-primary/40 ring-1 ring-primary/20'
                    : 'bg-surface-container hover:bg-surface-container-high border-2 border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    productoSeleccionado.id === p.id ? 'bg-primary/20 text-primary' : 'bg-surface-container-highest text-outline'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${productoSeleccionado.id === p.id ? 'text-primary' : 'text-on-surface'}`}>
                      {p.nombre}
                    </p>
                    <p className="text-xs text-outline font-mono">{p.codigo}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* BOM del producto seleccionado */}
          <div className="lg:col-span-2">
            <GlassCard className="overflow-hidden">
              <div className="px-6 py-5 border-b border-white/5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-on-surface font-headline">{productoSeleccionado.nombre}</h3>
                    <p className="text-xs font-mono text-outline mt-0.5">{productoSeleccionado.codigo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-spartan uppercase tracking-widest text-outline">Costo Total</p>
                    <p className="text-2xl font-headline font-bold text-primary">${costoTotal.toFixed(4)}</p>
                    <p className="text-xs text-outline">por unidad producida</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/5">
                      {['#', 'Material / Componente', 'Cantidad', 'Unidad', 'Costo Unit. USD', 'Costo Total USD'].map((h) => (
                        <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {productoSeleccionado.componentes.map((c, i) => (
                      <tr key={c.material} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 text-sm text-outline">{i + 1}</td>
                        <td className="px-6 py-4 text-sm font-medium text-on-surface">{c.material}</td>
                        <td className="px-6 py-4 text-sm text-on-surface-variant">{c.cantidad}</td>
                        <td className="px-6 py-4 text-sm text-on-surface-variant">{c.unidad}</td>
                        <td className="px-6 py-4 text-sm text-on-surface">${c.costoUSD.toFixed(4)}</td>
                        <td className="px-6 py-4 text-sm font-bold text-primary">
                          ${(c.cantidad * c.costoUSD).toFixed(4)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-surface-container-highest/50 border-t-2 border-primary/20">
                      <td colSpan={5} className="px-6 py-4 text-xs font-spartan uppercase tracking-widest text-outline font-bold">
                        Costo Total por Unidad
                      </td>
                      <td className="px-6 py-4 font-headline font-bold text-primary text-lg">
                        ${costoTotal.toFixed(4)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
