'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const TASA_BCV = 46.82

interface Producto {
  id: string
  nombre: string
  sku: string
  precioUSD: number
  stock: number
  categoria: string
}

interface ItemCarrito {
  producto: Producto
  cantidad: number
}

const CATEGORIAS = ['Todos', 'Electrónica', 'Bebidas', 'Alimentos', 'Limpieza', 'Papelería']

const PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Televisor Samsung 43"', sku: 'TV-SAM-43', precioUSD: 320.00, stock: 8, categoria: 'Electrónica' },
  { id: '2', nombre: 'Nevera Mabe 14 pies', sku: 'NEV-MAB-14', precioUSD: 580.00, stock: 3, categoria: 'Electrónica' },
  { id: '3', nombre: 'Agua Mineral 1.5L', sku: 'BEB-AGU-15', precioUSD: 0.85, stock: 240, categoria: 'Bebidas' },
  { id: '4', nombre: 'Refresco Cola 2L', sku: 'BEB-COL-2L', precioUSD: 1.20, stock: 180, categoria: 'Bebidas' },
  { id: '5', nombre: 'Arroz Cristal 1kg', sku: 'ALI-ARR-1K', precioUSD: 1.50, stock: 320, categoria: 'Alimentos' },
  { id: '6', nombre: 'Harina PAN 1kg', sku: 'ALI-PAN-1K', precioUSD: 1.80, stock: 210, categoria: 'Alimentos' },
  { id: '7', nombre: 'Detergente Ariel 1kg', sku: 'LIM-ARI-1K', precioUSD: 3.20, stock: 95, categoria: 'Limpieza' },
  { id: '8', nombre: 'Resma Papel Carta', sku: 'PAP-RES-CA', precioUSD: 6.50, stock: 42, categoria: 'Papelería' },
  { id: '9', nombre: 'Aceite Mazeite 1L', sku: 'ALI-ACE-1L', precioUSD: 2.40, stock: 150, categoria: 'Alimentos' },
  { id: '10', nombre: 'Jabón Protex x3', sku: 'LIM-JAB-X3', precioUSD: 2.10, stock: 88, categoria: 'Limpieza' },
  { id: '11', nombre: 'Audífonos Bluetooth', sku: 'ELE-AUD-BT', precioUSD: 45.00, stock: 15, categoria: 'Electrónica' },
  { id: '12', nombre: 'Cuaderno Norma 100h', sku: 'PAP-CUA-NO', precioUSD: 1.90, stock: 120, categoria: 'Papelería' },
]

type MetodoPago = 'efectivo' | 'transferencia' | 'punto'

export default function TerminalPOSPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo')
  const [search, setSearch] = useState('')
  const [cobrado, setCobrado] = useState(false)

  const productosFiltrados = PRODUCTOS.filter((p) => {
    const matchCat = categoriaActiva === 'Todos' || p.categoria === categoriaActiva
    const matchSearch =
      p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito((prev) => {
      const existe = prev.find((i) => i.producto.id === producto.id)
      if (existe)
        return prev.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i
        )
      return [...prev, { producto, cantidad: 1 }]
    })
  }

  const cambiarCantidad = (id: string, delta: number) => {
    setCarrito((prev) =>
      prev
        .map((i) =>
          i.producto.id === id ? { ...i, cantidad: Math.max(0, i.cantidad + delta) } : i
        )
        .filter((i) => i.cantidad > 0)
    )
  }

  const subtotalUSD = carrito.reduce((acc, i) => acc + i.producto.precioUSD * i.cantidad, 0)
  const ivaUSD = subtotalUSD * 0.16
  const totalUSD = subtotalUSD + ivaUSD
  const totalVES = totalUSD * TASA_BCV

  const metodos: { key: MetodoPago; icon: string; label: string }[] = [
    { key: 'efectivo', icon: 'payments', label: 'Efectivo' },
    { key: 'transferencia', icon: 'account_balance', label: 'Transferencia' },
    { key: 'punto', icon: 'credit_card', label: 'Punto' },
  ]

  const handleCobrar = () => {
    if (carrito.length === 0) return
    setCobrado(true)
    setTimeout(() => {
      setCarrito([])
      setCobrado(false)
    }, 2000)
  }

  return (
    <div className="flex min-h-screen">
      {/* Main area */}
      <div className="flex-1 flex flex-col mr-[420px]">
        <TopBar title="Terminal de Ventas" />
        <div className="flex-1 p-8 space-y-6">
          {/* Search + BCV */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar por nombre o SKU..."
                className="w-full bg-surface-container-highest/50 border-none rounded-full py-3 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary/50 text-on-surface placeholder:text-outline/50"
              />
            </div>
            <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary text-[16px]">currency_exchange</span>
              <span className="text-tertiary font-bold font-spartan text-sm tracking-widest uppercase">
                BCV: {TASA_BCV} Bs.
              </span>
            </div>
          </div>

          {/* Categorías */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoriaActiva(cat)}
                className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productosFiltrados.map((p) => (
              <div
                key={p.id}
                className="group bg-surface-container rounded-2xl overflow-hidden hover:ring-2 hover:ring-primary/40 transition-all duration-300 cursor-pointer"
                onClick={() => agregarAlCarrito(p)}
              >
                <div className="aspect-square relative bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-[56px] text-outline/20">inventory_2</span>
                  <div
                    className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${
                      p.stock <= 5 ? 'bg-error/20 text-error' : 'bg-surface/80 text-tertiary'
                    }`}
                  >
                    {p.stock <= 5 ? `¡Bajo: ${p.stock}!` : `Stock: ${p.stock}`}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-on-surface text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors">
                    {p.nombre}
                  </h3>
                  <p className="text-[10px] text-outline mb-2">SKU: {p.sku}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-base font-headline font-bold text-on-surface">
                        ${p.precioUSD.toFixed(2)}
                      </span>
                      <span className="block text-[10px] text-outline">
                        Bs. {(p.precioUSD * TASA_BCV).toFixed(2)}
                      </span>
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); agregarAlCarrito(p) }}
                      className="w-8 h-8 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all active:scale-90"
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right sidebar — carrito */}
      <aside className="fixed right-0 top-0 h-full w-[420px] glass-panel border-l border-outline-variant/10 flex flex-col z-40">
        <div className="p-6 border-b border-outline-variant/10">
          <div className="flex items-center justify-between mb-4">
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
        <div className="flex-1 overflow-y-auto p-6 space-y-3">
          {carrito.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-outline">
              <span className="material-symbols-outlined text-[48px] mb-3">shopping_cart</span>
              <p className="text-sm font-spartan uppercase tracking-widest">Carrito vacío</p>
              <p className="text-xs mt-1">Agrega productos para comenzar</p>
            </div>
          ) : (
            carrito.map((item) => (
              <div key={item.producto.id} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[18px]">inventory_2</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-on-surface truncate">{item.producto.nombre}</h4>
                  <p className="text-[10px] text-outline">${item.producto.precioUSD.toFixed(2)} × {item.cantidad}</p>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => cambiarCantidad(item.producto.id, -1)}
                    className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="text-sm font-bold w-5 text-center text-on-surface">{item.cantidad}</span>
                  <button
                    onClick={() => cambiarCantidad(item.producto.id, 1)}
                    className="w-6 h-6 rounded bg-surface-container-highest flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
                <p className="text-sm font-bold text-on-surface w-16 text-right">
                  ${(item.producto.precioUSD * item.cantidad).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Payment */}
        <div className="p-6 bg-surface-container-low/80 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-outline">Subtotal</span>
              <span className="font-medium text-on-surface">${subtotalUSD.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-outline">IVA (16%)</span>
              <span className="font-medium text-on-surface">${ivaUSD.toFixed(2)}</span>
            </div>
            <div className="pt-3 flex justify-between items-end border-t border-white/5">
              <div>
                <span className="block text-[10px] text-outline font-bold uppercase tracking-widest">Total USD</span>
                <span className="block text-3xl font-headline font-bold text-primary">${totalUSD.toFixed(2)}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-outline">Total Bs.</span>
                <span className="block text-sm font-bold text-tertiary">Bs. {totalVES.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="grid grid-cols-3 gap-2">
            {metodos.map((m) => (
              <button
                key={m.key}
                onClick={() => setMetodoPago(m.key)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                  metodoPago === m.key
                    ? 'bg-surface-container-highest border-2 border-primary text-primary'
                    : 'bg-surface-container hover:bg-surface-container-highest text-outline hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{m.label}</span>
              </button>
            ))}
          </div>

          <Button
            className="w-full py-4 text-base justify-center"
            disabled={carrito.length === 0}
            onClick={handleCobrar}
          >
            {cobrado ? (
              <>
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                ¡Cobrado!
              </>
            ) : (
              <>
                Cobrar
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </>
            )}
          </Button>
        </div>
      </aside>
    </div>
  )
}
