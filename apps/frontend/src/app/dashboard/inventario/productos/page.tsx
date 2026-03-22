'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type StockStatus = 'ok' | 'bajo' | 'critico'

interface Producto {
  id: string
  sku: string
  nombre: string
  categoria: string
  stock: number
  stockMin: number
  precioUSD: number
  estado: StockStatus
}

const CATEGORIAS = ['Todas', 'Electrónica', 'Ferretería', 'Alimentos', 'Papelería', 'Repuestos']

const MOCK_PRODUCTOS: Producto[] = [
  { id: '1', sku: 'SKU-0011-A', nombre: 'Cable UTP Cat6 (Rollo 305m)', categoria: 'Electrónica', stock: 48, stockMin: 20, precioUSD: 85.00, estado: 'ok' },
  { id: '2', sku: 'SKU-0022-B', nombre: 'Disco Duro Seagate 1TB', categoria: 'Electrónica', stock: 6, stockMin: 15, precioUSD: 62.50, estado: 'critico' },
  { id: '3', sku: 'SKU-0033-C', nombre: 'Tornillo Hexagonal 3/8" (Caja 100u)', categoria: 'Ferretería', stock: 320, stockMin: 100, precioUSD: 4.20, estado: 'ok' },
  { id: '4', sku: 'SKU-0044-D', nombre: 'Resma Papel Bond A4 75g', categoria: 'Papelería', stock: 12, stockMin: 30, precioUSD: 6.80, estado: 'bajo' },
  { id: '5', sku: 'SKU-0055-E', nombre: 'Aceite Hidráulico ISO 46 (Tambor)', categoria: 'Repuestos', stock: 3, stockMin: 10, precioUSD: 145.00, estado: 'critico' },
  { id: '6', sku: 'SKU-0066-F', nombre: 'Tóner HP LaserJet 85A', categoria: 'Papelería', stock: 22, stockMin: 10, precioUSD: 38.00, estado: 'ok' },
  { id: '7', sku: 'SKU-0077-G', nombre: 'Interruptor Termomagnético 20A', categoria: 'Electrónica', stock: 9, stockMin: 15, precioUSD: 18.50, estado: 'bajo' },
  { id: '8', sku: 'SKU-0088-H', nombre: 'Filtro de Aire Motor Cummins', categoria: 'Repuestos', stock: 14, stockMin: 8, precioUSD: 32.00, estado: 'ok' },
]

const estadoConfig: Record<StockStatus, { label: string; variant: 'success' | 'warning' | 'error'; dot: string }> = {
  ok: { label: 'OK', variant: 'success', dot: 'bg-emerald-500' },
  bajo: { label: 'Bajo', variant: 'warning', dot: 'bg-amber-400' },
  critico: { label: 'Crítico', variant: 'error', dot: 'bg-error animate-pulse' },
}

export default function ProductosPage() {
  const [search, setSearch] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtered = MOCK_PRODUCTOS.filter((p) => {
    const matchSearch =
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
    const matchCat = categoria === 'Todas' || p.categoria === categoria
    return matchSearch && matchCat
  })

  const totalProductos = MOCK_PRODUCTOS.length
  const stockCritico = MOCK_PRODUCTOS.filter((p) => p.estado === 'critico').length
  const valorTotal = MOCK_PRODUCTOS.reduce((acc, p) => acc + p.stock * p.precioUSD, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Catálogo de Productos" />
      <div className="flex-1 p-8 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 blur-[50px]" />
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Total Productos</p>
            <h3 className="text-3xl font-headline font-bold text-on-surface">{totalProductos}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">inventory_2</span>
              Artículos en catálogo
            </p>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden border-l-4 border-error">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-error/10 blur-[50px]" />
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Stock Crítico</p>
            <h3 className="text-3xl font-headline font-bold text-error">{stockCritico}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-error">warning</span>
              Requieren reposición urgente
            </p>
          </GlassCard>

          <GlassCard className="p-6 relative overflow-hidden border-l-4 border-tertiary">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-tertiary/10 blur-[50px]" />
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Valor Total USD</p>
            <h3 className="text-3xl font-headline font-bold text-tertiary">
              ${valorTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              Valoración actual
            </p>
          </GlassCard>
        </div>

        {/* Filtros y tabla */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    categoria === cat
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por SKU o nombre..."
                  className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-64 focus:ring-2 focus:ring-primary/40 text-on-surface"
                />
              </div>
              <Button size="sm">
                <span className="material-symbols-outlined text-[16px]">add</span>
                Nuevo Producto
              </Button>
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-3 py-4">Producto</th>
                  <th className="px-3 py-4">SKU</th>
                  <th className="px-3 py-4">Categoría</th>
                  <th className="px-3 py-4 whitespace-nowrap">Stock / Mín.</th>
                  <th className="px-3 py-4 text-right whitespace-nowrap">Precio USD</th>
                  <th className="px-3 py-4">Estado</th>
                  <th className="px-3 py-4 text-right">Acc.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((p) => {
                  const cfg = estadoConfig[p.estado]
                  return (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 shrink-0 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                          </div>
                          <p className="text-xs font-semibold text-on-surface font-spartan max-w-[160px] truncate">{p.nombre}</p>
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <span className="text-[10px] font-mono text-on-surface whitespace-nowrap">{p.sku}</span>
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant="info">{p.categoria}</Badge>
                      </td>
                      <td className="px-3 py-3">
                        <p className="text-xs font-bold text-on-surface">{p.stock}</p>
                        <p className="text-[10px] text-outline">Mín: {p.stockMin}</p>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <span className="text-xs font-bold text-on-surface whitespace-nowrap">
                          ${p.precioUSD.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          <Badge variant={cfg.variant}>{cfg.label}</Badge>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">edit</span>
                          </button>
                          <button className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No se encontraron productos con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
