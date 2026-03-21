'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

const BCV = 46.82

interface LineaFactura {
  id: number
  descripcion: string
  cantidad: number
  precioUSD: number
}

const CLIENTES_MOCK = [
  { rif: 'J-30495822-1', nombre: 'Inversiones Globales C.A.', direccion: 'Av. Francisco de Miranda, Caracas' },
  { rif: 'J-29384756-3', nombre: 'Soluciones Tech Andina C.A.', direccion: 'Calle 5, Valencia, Carabobo' },
  { rif: 'J-00012345-6', nombre: 'Alimentos Polar S.A.', direccion: 'Zona Industrial, Los Cortijos, Caracas' },
]

const PRODUCTOS_MOCK = [
  { sku: 'SKU-0011-A', nombre: 'Cable UTP Cat6 (Rollo 305m)', precioUSD: 85.00 },
  { sku: 'SKU-0022-B', nombre: 'Disco Duro Seagate 1TB', precioUSD: 62.50 },
  { sku: 'SKU-0066-F', nombre: 'Tóner HP LaserJet 85A', precioUSD: 38.00 },
  { sku: 'SKU-0088-H', nombre: 'Filtro de Aire Motor Cummins', precioUSD: 32.00 },
]

let nextId = 1

export default function NuevaFacturaPage() {
  const [rif, setRif] = useState('')
  const [clienteEncontrado, setClienteEncontrado] = useState<typeof CLIENTES_MOCK[0] | null>(null)
  const [lineas, setLineas] = useState<LineaFactura[]>([
    { id: nextId++, descripcion: '', cantidad: 1, precioUSD: 0 },
  ])

  const buscarCliente = () => {
    const found = CLIENTES_MOCK.find((c) => c.rif.toLowerCase() === rif.toLowerCase())
    setClienteEncontrado(found ?? null)
  }

  const agregarLinea = () => {
    setLineas([...lineas, { id: nextId++, descripcion: '', cantidad: 1, precioUSD: 0 }])
  }

  const eliminarLinea = (id: number) => {
    setLineas(lineas.filter((l) => l.id !== id))
  }

  const actualizarLinea = (id: number, campo: keyof LineaFactura, valor: string | number) => {
    setLineas(lineas.map((l) => (l.id === id ? { ...l, [campo]: valor } : l)))
  }

  const seleccionarProducto = (id: number, sku: string) => {
    const prod = PRODUCTOS_MOCK.find((p) => p.sku === sku)
    if (prod) {
      setLineas(lineas.map((l) => l.id === id ? { ...l, descripcion: prod.nombre, precioUSD: prod.precioUSD } : l))
    }
  }

  const subtotalUSD = lineas.reduce((acc, l) => acc + l.cantidad * l.precioUSD, 0)
  const ivaUSD = subtotalUSD * 0.16
  const totalUSD = subtotalUSD + ivaUSD
  const totalVES = totalUSD * BCV

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Nueva Factura" />
      <div className="flex-1 p-8 space-y-8 max-w-[1200px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Emitir Nueva Factura</h2>
            <p className="text-on-surface-variant mt-1 text-sm">
              Tasa BCV vigente: <span className="text-tertiary font-bold">{BCV} VES/USD</span>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-xl border border-white/5">
            <span className="material-symbols-outlined text-tertiary text-sm">monetization_on</span>
            <span className="text-xs font-spartan text-on-surface">BCV: {BCV} VES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario principal */}
          <div className="lg:col-span-2 space-y-6">

            {/* Datos del cliente */}
            <GlassCard className="p-6 space-y-4">
              <h3 className="font-headline font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person_search</span>
                Datos del Cliente
              </h3>
              <div className="flex gap-3">
                <div className="flex-1 space-y-1">
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">RIF / Cédula</label>
                  <input
                    value={rif}
                    onChange={(e) => setRif(e.target.value)}
                    placeholder="J-30495822-1"
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex items-end">
                  <Button onClick={buscarCliente} variant="secondary">
                    <span className="material-symbols-outlined text-[16px]">search</span>
                    Buscar
                  </Button>
                </div>
              </div>

              {clienteEncontrado ? (
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{clienteEncontrado.nombre}</p>
                    <p className="text-[10px] text-outline">{clienteEncontrado.rif} • {clienteEncontrado.direccion}</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Razón Social</label>
                    <input
                      placeholder="Nombre de la empresa"
                      className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Dirección Fiscal</label>
                    <input
                      placeholder="Dirección"
                      className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
              )}
            </GlassCard>

            {/* Líneas de productos */}
            <GlassCard className="p-6 space-y-4">
              <h3 className="font-headline font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">inventory_2</span>
                Artículos / Servicios
              </h3>

              <div className="space-y-3">
                {lineas.map((linea, idx) => (
                  <div key={linea.id} className="bg-surface-container-low p-4 rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-spartan uppercase tracking-widest text-outline">Línea {idx + 1}</span>
                      {lineas.length > 1 && (
                        <button
                          onClick={() => eliminarLinea(linea.id)}
                          className="text-error/50 hover:text-error transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                      <div className="md:col-span-5 space-y-1">
                        <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Producto</label>
                        <select
                          value=""
                          onChange={(e) => seleccionarProducto(linea.id, e.target.value)}
                          className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="">Seleccionar...</option>
                          {PRODUCTOS_MOCK.map((p) => (
                            <option key={p.sku} value={p.sku}>{p.nombre}</option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-4 space-y-1">
                        <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Descripción</label>
                        <input
                          value={linea.descripcion}
                          onChange={(e) => actualizarLinea(linea.id, 'descripcion', e.target.value)}
                          placeholder="Descripción del ítem"
                          className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="md:col-span-1 space-y-1">
                        <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Cant.</label>
                        <input
                          type="number"
                          min={1}
                          value={linea.cantidad}
                          onChange={(e) => actualizarLinea(linea.id, 'cantidad', Number(e.target.value))}
                          className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">P. USD</label>
                        <input
                          type="number"
                          min={0}
                          step={0.01}
                          value={linea.precioUSD}
                          onChange={(e) => actualizarLinea(linea.id, 'precioUSD', Number(e.target.value))}
                          className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs text-outline">
                        Subtotal: <span className="font-bold text-on-surface">${(linea.cantidad * linea.precioUSD).toFixed(2)}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={agregarLinea}
                className="w-full py-3 border border-dashed border-white/20 rounded-xl text-[10px] font-bold uppercase tracking-widest text-outline hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                Agregar Línea
              </button>
            </GlassCard>
          </div>

          {/* Resumen */}
          <div className="lg:col-span-1">
            <GlassCard glow className="p-6 space-y-5 sticky top-24">
              <h3 className="font-headline font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Resumen
              </h3>

              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-outline">Base Imponible</span>
                  <span className="font-medium text-on-surface">${subtotalUSD.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-outline">IVA (16%)</span>
                  <span className="font-medium text-on-surface">${ivaUSD.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3 space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-spartan uppercase tracking-widest text-primary font-bold">Total USD</span>
                    <span className="text-2xl font-headline font-bold text-on-surface">${totalUSD.toFixed(2)}</span>
                  </div>
                  <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 flex justify-between items-center">
                    <span className="text-xs font-bold text-primary">Total VES</span>
                    <span className="font-bold text-primary">{totalVES.toLocaleString('es-VE', { maximumFractionDigits: 2 })} Bs.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Condición de Pago</label>
                <select className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Contado</option>
                  <option>15 días</option>
                  <option>30 días</option>
                  <option>45 días</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Observaciones</label>
                <textarea
                  rows={2}
                  placeholder="Notas adicionales..."
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <Button className="w-full justify-center">
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Emitir Factura
                </Button>
                <Button variant="secondary" className="w-full justify-center">
                  <span className="material-symbols-outlined text-[16px]">save</span>
                  Guardar Borrador
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
