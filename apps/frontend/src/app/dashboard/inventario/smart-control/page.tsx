'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const productos = [
  { nombre: 'Laptop Dell XPS 15', sku: 'ELEC-XPS15', categoria: 'Electrónica', stock: 45, minimo: 10, maximo: 100, estado: 'Normal', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', pct: 45 },
  { nombre: 'Leche UHT Entera 1L', sku: 'DAIRY-001', categoria: 'Alimentos', stock: 8, minimo: 50, maximo: 500, estado: 'Stock Bajo', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', pct: 8 },
  { nombre: 'Zapatillas Running Pro', sku: 'SHOE-RUN-01', categoria: 'Calzado', stock: 0, minimo: 20, maximo: 200, estado: 'Sin Stock', estadoColor: 'bg-error/10 text-error border-error/20', pct: 0 },
  { nombre: 'Monitor LG 27"', sku: 'ELEC-MON27', categoria: 'Electrónica', stock: 78, minimo: 5, maximo: 80, estado: 'Lleno', estadoColor: 'bg-primary/10 text-primary border-primary/20', pct: 98 },
  { nombre: 'Yogur Natural 150g', sku: 'DAIRY-045', categoria: 'Alimentos', stock: 12, minimo: 30, maximo: 300, estado: 'Stock Bajo', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', pct: 12 },
  { nombre: 'Teclado Mecánico Pro', sku: 'ELEC-KB01', categoria: 'Electrónica', stock: 33, minimo: 10, maximo: 60, estado: 'Normal', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', pct: 55 },
]

const filtros = ['Todos', 'Stock Bajo', 'Sin Stock', 'Normal', 'Lleno']

export default function SmartInventoryPage() {
  const [search, setSearch] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const filtered = productos.filter(p => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase())
    const matchFiltro = filtro === 'Todos' || p.estado === filtro
    return matchSearch && matchFiltro
  })

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Smart Inventory Control" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-[10px] font-spartan uppercase tracking-widest text-primary">IA Activa</span>
            </div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Control de Inventario Inteligente</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Monitoreo en tiempo real con predicciones de reabastecimiento basadas en IA.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>Escanear
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>Nuevo Producto
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'SKUs Totales', valor: '12,450', badge: '+5.2%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'inventory_2', iconColor: 'text-primary bg-primary/10' },
            { label: 'Stock Bajo', valor: '23', badge: 'Urgente', badgeColor: 'text-amber-400 bg-amber-500/10', icon: 'warning', iconColor: 'text-amber-400 bg-amber-500/10' },
            { label: 'Sin Stock', valor: '7', badge: 'Crítico', badgeColor: 'text-error bg-error/10', icon: 'remove_shopping_cart', iconColor: 'text-error bg-error/10' },
            { label: 'Valor Total', valor: '$1.2M', badge: '+3.1%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'attach_money', iconColor: 'text-tertiary bg-tertiary/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${k.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-on-surface">{k.valor}</p>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded mb-1 ${k.badgeColor}`}>{k.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sugerencia IA */}
        <div className="glass-panel rounded-2xl p-5 border-l-4 border-primary flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-xl">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-on-surface mb-1">Sugerencia de Reabastecimiento — IA Zenith</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Basado en el historial de ventas, se recomienda reabastecer <span className="text-primary font-semibold">Leche UHT Entera 1L</span> (500 unidades) y <span className="text-primary font-semibold">Yogur Natural 150g</span> (300 unidades) antes del viernes para evitar quiebre de stock.
            </p>
          </div>
          <button className="px-4 py-2 bg-primary/20 text-primary border border-primary/20 rounded-xl text-xs font-semibold hover:bg-primary/30 transition-all whitespace-nowrap">
            Crear Orden
          </button>
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-white/5 gap-4">
            <div className="flex space-x-1 bg-surface-container p-1 rounded-xl self-start overflow-x-auto">
              {filtros.map((f) => (
                <button key={f} onClick={() => setFiltro(f)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${filtro === f ? 'bg-surface-container-highest text-on-surface shadow' : 'text-outline hover:text-on-surface'}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar SKU o producto..."
                className="pl-9 pr-4 py-2 bg-surface-container-highest border-none rounded-xl text-sm text-on-surface focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['Producto', 'SKU', 'Categoría', 'Stock Actual', 'Nivel', 'Estado', ''].map(h => (
                    <th key={h} className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((p, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4 font-semibold text-on-surface text-sm">{p.nombre}</td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-1 rounded bg-surface-container-highest text-xs font-mono text-on-surface-variant border border-white/10">{p.sku}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{p.categoria}</td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-bold text-on-surface">{p.stock}</p>
                      <p className="text-[10px] text-outline">Mín: {p.minimo} / Máx: {p.maximo}</p>
                    </td>
                    <td className="px-5 py-4 w-32">
                      <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all ${p.pct < 20 ? 'bg-error' : p.pct < 40 ? 'bg-amber-500' : 'bg-primary'}`}
                          style={{ width: `${Math.min(p.pct, 100)}%` }} />
                      </div>
                      <p className="text-[10px] text-outline mt-1">{p.pct}%</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${p.estadoColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{p.estado}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-outline">Mostrando {filtered.length} de 12,450 registros</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5 disabled:opacity-40" disabled>Anterior</button>
              <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-lg">1</button>
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
