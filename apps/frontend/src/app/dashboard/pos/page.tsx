'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils'

interface Producto {
  id: string
  nombre: string
  ref: string
  precio: number
  stock: number
  imagen?: string
  categoria: string
}

interface ItemCarrito {
  producto: Producto
  cantidad: number
}

const CATEGORIAS = ['Todos', 'Electrónica', 'Bebidas', 'Cuidado Personal', 'Oficina', 'Snacks']

const PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Zenith Chrono Black', ref: 'ZNT-7742', precio: 149.99, stock: 24, categoria: 'Electrónica' },
  { id: '2', nombre: 'Obsidian Audio Pods', ref: 'OBS-9912', precio: 89.00, stock: 12, categoria: 'Electrónica' },
  { id: '3', nombre: 'Zenith Lens Pro', ref: 'ZNT-0021', precio: 520.00, stock: 3, categoria: 'Electrónica' },
  { id: '4', nombre: 'Prism Vision Shades', ref: 'PRM-4423', precio: 125.50, stock: 42, categoria: 'Cuidado Personal' },
  { id: '5', nombre: 'Velocity Sport Red', ref: 'VEL-8821', precio: 210.00, stock: 8, categoria: 'Oficina' },
  { id: '6', nombre: 'Echo Wood Studio', ref: 'ECH-3310', precio: 75.00, stock: 15, categoria: 'Electrónica' },
  { id: '7', nombre: 'Hydro Boost 500ml', ref: 'HYD-1122', precio: 4.50, stock: 200, categoria: 'Bebidas' },
  { id: '8', nombre: 'Zenith Notebook Pro', ref: 'ZNB-4411', precio: 18.00, stock: 60, categoria: 'Oficina' },
]

const TASA_BCV = 36.42
const IVA = 0.16

type MetodoPago = 'efectivo' | 'transferencia' | 'punto'

export default function POSPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo')
  const [search, setSearch] = useState('')

  const productosFiltrados = PRODUCTOS.filter((p) => {
    const matchCat = categoriaActiva === 'Todos' || p.categoria === categoriaActiva
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) || p.ref.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((i) => i.producto.id === producto.id)
      if (existe) return prev.map((i) => i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i)
      return [...prev, { producto, cantidad: 1 }]
    })
  }

  const cambiarCantidad = (id: string, delta: number) => {
    setCarrito((prev) =>
      prev.map((i) => i.producto.id === id ? { ...i, cantidad: Math.max(0, i.cantidad + delta) } : i)
        .filter((i) => i.cantidad > 0)
    )
  }

  const subtotal = carrito.reduce((acc, i) => acc + i.producto.precio * i.cantidad, 0)
  const iva = subtotal * IVA
  const total = subtotal + iva
  const totalVES = total * TASA_BCV

  const metodos: { key: MetodoPago; icon: string; label: string }[] = [
    { key: 'efectivo', icon: 'payments', label: 'Efectivo' },
    { key: 'transferencia', icon: 'account_balance', label: 'Transferencia' },
    { key: 'punto', icon: 'credit_card', label: 'Punto' },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Main area */}
      <div className="flex-1 flex flex-col mr-[400px]">
        <TopBar title="Punto de Venta" />
        <div className="flex-1 p-8 space-y-6">

          {/* Search + BCV */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar productos, SKUs o categorías..."
                className="w-full bg-surface-container-highest/50 border-none rounded-full py-3 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline/50"
              />
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/20">
              <span className="text-tertiary font-bold font-spartan text-sm tracking-widest uppercase">BCV: {TASA_BCV} VES</span>
            </div>
          </div>

          {/* Categorías */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                  categoriaActiva === cat
                    ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                    : 'bg-surface-container-high text-on-surface/70 hover:bg-surface-container-highest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productosFiltrados.map((p) => (
              <div
                key={p.id}
                className="group bg-surface-container rounded-2xl overflow-hidden hover:ring-2 hover:ring-primary/40 transition-all duration-300 cursor-pointer"
                onClick={() => agregarAlCarrito(p)}
              >
                <div className="aspect-square relative bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] text-outline/30">inventory_2</span>
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                    p.stock <= 5 ? 'bg-error/20 text-error' : 'bg-surface/80 text-tertiary'
                  }`}>
                    {p.stock <= 5 ? `Stock Bajo: ${p.stock}` : `En Stock: ${p.stock}`}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-headline font-semibold text-on-surface group-hover:text-primary transition-colors text-sm">{p.nombre}</h3>
                  <p className="text-xs text-on-surface/40 mb-3">Ref: {p.ref}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-lg font-headline font-bold text-on-surface">{formatCurrency(p.precio)}</span>
                      <span className="block text-[10px] text-on-surface/40">{formatCurrency(p.precio * TASA_BCV, 'VES')}</span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); agregarAlCarrito(p) }}
                      className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all active:scale-90"
                    >
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily goal floating */}
        <div className="fixed bottom-8 left-72 z-30">
          <GlassCard className="p-5 flex items-center gap-5 shadow-2xl">
            <span className="material-symbols-outlined text-primary text-4xl">monitoring</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Meta Diaria</p>
              <h4 className="font-headline text-xl font-bold text-on-surface">$ 4,200.00</h4>
              <div className="w-28 h-1 bg-surface-container-highest rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-tertiary rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
            <div className="text-right">
              <span className="text-tertiary text-xs font-bold">+12%</span>
              <p className="text-[10px] text-outline uppercase">vs ayer</p>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Right sidebar — carrito */}
      <aside className="fixed right-0 top-0 h-full w-[400px] glass-panel border-l border-outline-variant/10 flex flex-col z-40">
        <div className="p-6 border-b border-outline-variant/10">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-headline font-bold text-xl text-on-surface">Orden Actual</h2>
            <button
              onClick={() => setCarrito([])}
              className="text-error/70 hover:text-error flex items-center gap-1 text-xs uppercase tracking-widest font-bold transition-colors"
            >
              <span className="material-symbols-outlined text-sm">delete_sweep</span>
              Limpiar
            </button>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-highest/40 p-3 rounded-xl">
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-outline">Cliente</p>
              <p className="text-sm font-semibold text-on-surface">Cliente General</p>
            </div>
            <button className="text-primary">
              <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {carrito.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-outline">
              <span className="material-symbols-outlined text-[48px] mb-3">shopping_cart</span>
              <p className="text-sm font-spartan uppercase tracking-widest">Carrito vacío</p>
              <p className="text-xs mt-1">Agrega productos para comenzar</p>
            </div>
          ) : (
            carrito.map((item) => (
              <div key={item.producto.id} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-on-surface truncate">{item.producto.nombre}</h4>
                  <p className="text-[10px] text-outline">{formatCurrency(item.producto.precio)} x {item.cantidad}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button onClick={() => cambiarCantidad(item.producto.id, -1)} className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="text-sm font-bold w-5 text-center text-on-surface">{item.cantidad}</span>
                  <button onClick={() => cambiarCantidad(item.producto.id, 1)} className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <p className="text-sm font-bold text-on-surface ml-1 w-16 text-right">{formatCurrency(item.producto.precio * item.cantidad)}</p>
              </div>
            ))
          )}
        </div>

        {/* Payment */}
        <div className="p-6 bg-surface-container-low/80 space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-outline">Subtotal</span>
              <span className="font-medium text-on-surface">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-outline">IVA (16%)</span>
              <span className="font-medium text-on-surface">{formatCurrency(iva)}</span>
            </div>
            <div className="pt-3 flex justify-between items-end border-t border-white/5">
              <div>
                <span className="block text-[10px] text-outline font-bold uppercase tracking-widest">Total</span>
                <span className="block text-3xl font-headline font-bold text-primary">{formatCurrency(total)}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-outline">Total VES</span>
                <span className="block text-sm font-bold text-tertiary">{formatCurrency(totalVES, 'VES')}</span>
              </div>
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="grid grid-cols-3 gap-2">
            {metodos.map((m) => (
              <button
                key={m.key}
                onClick={() => setMetodoPago(m.key)}
                className={`flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all ${
                  metodoPago === m.key
                    ? 'bg-surface-container-highest border-2 border-primary text-primary'
                    : 'bg-surface-container hover:bg-surface-container-highest text-outline hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[22px]">{m.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{m.label}</span>
              </button>
            ))}
          </div>

          <Button
            className="w-full py-4 text-base"
            disabled={carrito.length === 0}
          >
            Completar Pago
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Button>
        </div>
      </aside>
    </div>
  )
}
