'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

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

const TASA_BCV = 46.82
const CATEGORIAS = ['Todas', 'Bebidas', 'Alimentos', 'Snacks', 'Postres', 'Otros']

const PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Café Americano', sku: 'BEB-CAF-AM', precioUSD: 2.50, stock: 50, categoria: 'Bebidas' },
  { id: '2', nombre: 'Sandwich de Pollo', sku: 'ALI-SAN-PO', precioUSD: 5.00, stock: 20, categoria: 'Alimentos' },
  { id: '3', nombre: 'Refresco Cola', sku: 'BEB-COL-2L', precioUSD: 1.50, stock: 180, categoria: 'Bebidas' },
  { id: '4', nombre: 'Pastel de Chocolate', sku: 'POS-PAS-CH', precioUSD: 3.50, stock: 15, categoria: 'Postres' },
  { id: '5', nombre: 'Jugo de Naranja', sku: 'BEB-JUG-NA', precioUSD: 2.00, stock: 40, categoria: 'Bebidas' },
  { id: '6', nombre: 'Ensalada César', sku: 'ALI-ENS-CE', precioUSD: 6.00, stock: 12, categoria: 'Alimentos' },
  { id: '7', nombre: 'Papas Fritas', sku: 'SNA-PAP-FR', precioUSD: 2.80, stock: 60, categoria: 'Snacks' },
  { id: '8', nombre: 'Pizza Pepperoni', sku: 'ALI-PIZ-PE', precioUSD: 3.00, stock: 8, categoria: 'Alimentos' },
  { id: '9', nombre: 'Agua Mineral 1.5L', sku: 'BEB-AGU-15', precioUSD: 0.85, stock: 240, categoria: 'Bebidas' },
  { id: '10', nombre: 'Arroz Cristal 1kg', sku: 'ALI-ARR-1K', precioUSD: 1.50, stock: 320, categoria: 'Alimentos' },
  { id: '11', nombre: 'Detergente Ariel 1kg', sku: 'LIM-ARI-1K', precioUSD: 3.20, stock: 95, categoria: 'Otros' },
  { id: '12', nombre: 'Resma Papel Carta', sku: 'PAP-RES-CA', precioUSD: 6.50, stock: 42, categoria: 'Otros' },
]

type MetodoPago = 'efectivo' | 'transferencia' | 'punto'

export default function POSPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [carrito, setCarrito] = useState<ItemCarrito[]>([])
  const [metodoPago, setMetodoPago] = useState<MetodoPago>('efectivo')
  const [search, setSearch] = useState('')
  const [cobrado, setCobrado] = useState(false)

  const productosFiltrados = PRODUCTOS.filter((p) => {
    const matchCat = categoriaActiva === 'Todas' || p.categoria === categoriaActiva
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase())
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
    setTimeout(() => { setCarrito([]); setCobrado(false) }, 2000)
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* LEFT: Catálogo */}
      <div className="flex-1 flex flex-col overflow-hidden border-r border-slate-200">
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-6 py-3 border-b border-slate-200 h-16 shadow-sm z-20 shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined text-[18px]">storefront</span>
            </div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900">Punto de Venta</h1>
          </div>
          <div className="flex flex-1 max-w-lg mx-6">
            <label className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-[20px]">search</span>
              </div>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="block w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Buscar productos (Ctrl+K)..."
              />
            </label>
          </div>
          <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-full border border-outline-variant/20">
            <span className="material-symbols-outlined text-tertiary text-[16px]">currency_exchange</span>
            <span className="text-tertiary font-bold text-sm tracking-widest uppercase">BCV: {TASA_BCV} Bs.</span>
          </div>
        </header>

        {/* Categorías */}
        <div className="px-6 py-3 bg-white/50 border-b border-slate-200/60 shrink-0">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {CATEGORIAS.map((cat) => (
              <button key={cat} onClick={() => setCategoriaActiva(cat)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  categoriaActiva === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary shadow-sm'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de productos */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {productosFiltrados.map((p) => (
              <div key={p.id}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all cursor-pointer flex flex-col overflow-hidden"
                onClick={() => agregarAlCarrito(p)}>
                <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  <span className="material-symbols-outlined text-[48px] text-slate-300">inventory_2</span>
                  <div className={`absolute top-2 right-2 bg-white/90 backdrop-blur rounded-full px-2 py-0.5 text-xs font-bold text-slate-900 shadow-sm`}>
                    ${p.precioUSD.toFixed(2)}
                  </div>
                  {p.stock <= 5 && (
                    <div className="absolute top-2 left-2 bg-red-100 text-red-700 rounded-full px-2 py-0.5 text-[10px] font-bold">
                      ¡Bajo: {p.stock}!
                    </div>
                  )}
                </div>
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 leading-tight mb-1 group-hover:text-primary transition-colors">{p.nombre}</h3>
                  <p className="text-xs text-slate-500 mt-auto">SKU: {p.sku}</p>
                  <p className="text-[10px] text-slate-400">Bs. {(p.precioUSD * TASA_BCV).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Carrito */}
      <aside className="w-[380px] bg-white flex flex-col shadow-xl z-10 shrink-0">
        {/* Cliente */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Cliente</span>
            <button className="text-primary text-xs font-medium hover:underline flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">edit</span> Cambiar (F2)
            </button>
          </div>
          <div className="flex items-start gap-3 p-3 bg-white border border-primary/20 rounded-lg shadow-sm">
            <div className="size-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 leading-none mb-1">Cliente General</h3>
              <p className="text-[10px] text-slate-400">Consumidor Final</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>
              Factura Elec.
            </button>
            <button className="flex items-center justify-center gap-2 py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-amber-500 text-[18px]">barcode_reader</span>
              Escanear (F4)
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          {carrito.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-slate-400">
              <span className="material-symbols-outlined text-[48px] mb-3">shopping_cart</span>
              <p className="text-sm font-medium">Carrito vacío</p>
              <p className="text-xs mt-1">Agrega productos para comenzar</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {carrito.map((item) => (
                <div key={item.producto.id} className="flex gap-3 items-center group">
                  <div className="flex flex-col items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-100">
                    <button onClick={() => cambiarCantidad(item.producto.id, 1)}
                      className="size-6 flex items-center justify-center bg-white rounded shadow-sm border border-slate-200 text-slate-600 hover:text-primary hover:border-primary active:scale-95 transition-all">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                    </button>
                    <span className="font-bold text-sm w-6 text-center">{item.cantidad}</span>
                    <button onClick={() => cambiarCantidad(item.producto.id, -1)}
                      className="size-6 flex items-center justify-center bg-white rounded shadow-sm border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-500 active:scale-95 transition-all">
                      <span className="material-symbols-outlined text-[16px]">remove</span>
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-0.5">
                      <h4 className="font-medium text-slate-800 text-sm truncate pr-2">{item.producto.nombre}</h4>
                      <span className="font-bold text-slate-900 text-sm">${(item.producto.precioUSD * item.cantidad).toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-slate-500">${item.producto.precioUSD.toFixed(2)} c/u</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Totales y pago */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 pb-6 space-y-4 shrink-0">
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-white border border-dashed border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-all">
              <span className="material-symbols-outlined text-[18px]">percent</span>
              Descuento
            </button>
            <button className="flex-1 flex items-center justify-center gap-1 py-2 px-3 bg-white border border-dashed border-slate-300 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-all">
              <span className="material-symbols-outlined text-[18px]">description</span>
              Nota Crédito
            </button>
          </div>
          <div className="space-y-2 py-2">
            <div className="flex justify-between text-sm text-slate-500">
              <span>Subtotal</span><span>${subtotalUSD.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-slate-500">
              <span>IVA (16%)</span><span>${ivaUSD.toFixed(2)}</span>
            </div>
            <div className="h-px bg-slate-200 my-1" />
            <div className="flex justify-between items-baseline">
              <span className="text-base font-bold text-slate-700">Total a Pagar</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-slate-900">${totalUSD.toFixed(2)}</span>
                <p className="text-[10px] text-slate-400">Bs. {totalVES.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {metodos.map((m) => (
              <button key={m.key} onClick={() => setMetodoPago(m.key)}
                className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                  metodoPago === m.key
                    ? 'bg-white border-2 border-primary text-primary shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-500 hover:border-primary/50'
                }`}>
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tighter">{m.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={handleCobrar}
            disabled={carrito.length === 0}
            className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-on-primary font-bold text-lg py-4 rounded-xl shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2">
            {cobrado ? (
              <><span className="material-symbols-outlined text-[20px]">check_circle</span>¡Cobrado!</>
            ) : (
              <><span>Cobrar</span><span className="bg-white/20 px-2 py-0.5 rounded text-sm font-semibold">${totalUSD.toFixed(2)}</span></>
            )}
          </button>
        </div>
      </aside>
    </div>
  )
}
