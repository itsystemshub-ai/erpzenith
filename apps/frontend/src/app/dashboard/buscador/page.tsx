'use client'
import { useState, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const allResults = [
  { tipo: 'Factura', titulo: 'F-2024-1205 — Empresa XYZ C.A.', sub: '$1,250,000 · 15 Dic 2024', icon: 'receipt_long', href: '/dashboard/ventas/facturas', color: 'text-tertiary' },
  { tipo: 'Cliente', titulo: 'Empresa XYZ C.A.', sub: 'J-98765432-1 · Caracas', icon: 'business', href: '/dashboard/ventas/clientes', color: 'text-primary' },
  { tipo: 'Producto', titulo: 'Laptop Dell XPS 15', sub: 'SKU-001 · Stock: 12 unidades', icon: 'inventory_2', href: '/dashboard/inventario', color: 'text-secondary' },
  { tipo: 'Empleado', titulo: 'Carlos Martínez', sub: 'Vendedor Senior · Ventas', icon: 'person', href: '/dashboard/rrhh', color: 'text-orange-400' },
  { tipo: 'Orden de Compra', titulo: 'OC-2024-0312 — Distribuidora ABC', sub: '$850,000 · Pendiente', icon: 'shopping_cart', href: '/dashboard/compras/ordenes', color: 'text-yellow-400' },
  { tipo: 'Asiento', titulo: 'AST-2024-0847 — Venta al contado', sub: '$1,250,000 · 15 Dic 2024', icon: 'account_balance', href: '/dashboard/contabilidad/asientos', color: 'text-purple-400' },
  { tipo: 'Proveedor', titulo: 'Distribuidora ABC', sub: 'J-12345678-9 · Proveedor activo', icon: 'local_shipping', href: '/dashboard/compras/proveedores', color: 'text-blue-400' },
  { tipo: 'Reporte', titulo: 'Reporte de Ventas Diciembre 2024', sub: 'Generado hace 2h', icon: 'bar_chart', href: '/dashboard/reportes', color: 'text-pink-400' },
]

const recientes = allResults.slice(0, 4)

const categorias = ['Todo', 'Facturas', 'Clientes', 'Productos', 'Empleados', 'Compras', 'Contabilidad']

export default function BuscadorPage() {
  const [query, setQuery] = useState('')
  const [categoria, setCategoria] = useState('Todo')
  const [results, setResults] = useState<typeof allResults>([])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    setResults(allResults.filter(r =>
      r.titulo.toLowerCase().includes(q) ||
      r.tipo.toLowerCase().includes(q) ||
      r.sub.toLowerCase().includes(q)
    ))
  }, [query])

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Buscador Global" />
      <div className="flex-1 p-8 space-y-8 max-w-[900px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Buscador Global</h2>
          <p className="text-on-surface-variant mt-1">Busca en todo el ERP: facturas, clientes, productos y más</p>
        </div>

        {/* Search input */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-2xl">search</span>
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar facturas, clientes, productos, empleados..."
            className="w-full glass-panel rounded-2xl pl-12 pr-4 py-4 text-lg text-on-surface placeholder:text-outline bg-transparent outline-none focus:border focus:border-primary/40"
          />
          {query && (
            <button onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          )}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categorias.map(c => (
            <button key={c} onClick={() => setCategoria(c)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${categoria === c ? 'bg-primary text-on-primary' : 'glass-panel text-on-surface-variant hover:text-on-surface'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Results */}
        {query ? (
          <div className="space-y-3">
            <p className="text-sm text-outline">{results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"</p>
            {results.length > 0 ? results.map((r, i) => (
              <a key={i} href={r.href}
                className="glass-panel rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white/10`}>
                  <span className={`material-symbols-outlined text-[20px] ${r.color}`}>{r.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-outline font-bold">{r.tipo}</span>
                  </div>
                  <p className="font-bold text-on-surface">{r.titulo}</p>
                  <p className="text-xs text-outline">{r.sub}</p>
                </div>
                <span className="material-symbols-outlined text-outline text-[18px]">arrow_forward</span>
              </a>
            )) : (
              <div className="glass-panel rounded-2xl p-8 text-center text-outline">
                <span className="material-symbols-outlined text-4xl">search_off</span>
                <p className="mt-2">No se encontraron resultados para "{query}"</p>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <p className="text-xs text-outline font-bold uppercase tracking-wide mb-3">Accesos Recientes</p>
              <div className="space-y-2">
                {recientes.map((r, i) => (
                  <a key={i} href={r.href}
                    className="glass-panel rounded-xl p-3 flex items-center gap-3 hover:bg-white/5 transition-all">
                    <span className={`material-symbols-outlined text-[18px] ${r.color}`}>{r.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-on-surface">{r.titulo}</p>
                      <p className="text-xs text-outline">{r.tipo}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-outline font-bold uppercase tracking-wide mb-3">Búsquedas Rápidas</p>
              <div className="flex flex-wrap gap-2">
                {['Facturas pendientes', 'Stock bajo', 'Empleados activos', 'Órdenes de compra', 'Clientes nuevos'].map(s => (
                  <button key={s} onClick={() => setQuery(s)}
                    className="glass-panel hover:bg-white/10 text-on-surface-variant text-sm px-4 py-2 rounded-xl transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
