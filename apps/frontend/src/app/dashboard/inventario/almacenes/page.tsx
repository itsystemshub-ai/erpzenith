'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const ALMACENES = [
  {
    id: '1',
    nombre: 'Almacén Principal',
    ubicacion: 'Zona Industrial La Yaguara, Caracas',
    capacidadTotal: 5000,
    capacidadUsada: 4200,
    responsable: 'Carlos Mendoza',
    color: 'border-primary',
    colorBar: 'bg-primary',
    icon: 'warehouse',
  },
  {
    id: '2',
    nombre: 'Hub Norte',
    ubicacion: 'Av. Intercomunal, Valencia, Carabobo',
    capacidadTotal: 2000,
    capacidadUsada: 640,
    responsable: 'Luisa Fernández',
    color: 'border-tertiary',
    colorBar: 'bg-tertiary',
    icon: 'location_on',
  },
  {
    id: '3',
    nombre: 'Sucursal Sur',
    ubicacion: 'Calle 5, Barquisimeto, Lara',
    capacidadTotal: 1500,
    capacidadUsada: 885,
    responsable: 'Andrés Rojas',
    color: 'border-secondary',
    colorBar: 'bg-secondary',
    icon: 'store',
  },
]

const STOCK_POR_ALMACEN = [
  { producto: 'Cable UTP Cat6 (Rollo 305m)', sku: 'SKU-0011-A', almacen: 'Almacén Principal', cantidad: 30, unidad: 'Rollos' },
  { producto: 'Disco Duro Seagate 1TB', sku: 'SKU-0022-B', almacen: 'Hub Norte', cantidad: 6, unidad: 'Unidades' },
  { producto: 'Tornillo Hexagonal 3/8"', sku: 'SKU-0033-C', almacen: 'Almacén Principal', cantidad: 200, unidad: 'Cajas' },
  { producto: 'Resma Papel Bond A4 75g', sku: 'SKU-0044-D', almacen: 'Sucursal Sur', cantidad: 12, unidad: 'Resmas' },
  { producto: 'Aceite Hidráulico ISO 46', sku: 'SKU-0055-E', almacen: 'Almacén Principal', cantidad: 3, unidad: 'Tambores' },
  { producto: 'Tóner HP LaserJet 85A', sku: 'SKU-0066-F', almacen: 'Hub Norte', cantidad: 22, unidad: 'Unidades' },
]

export default function AlmacenesPage() {
  const [showTransfer, setShowTransfer] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Almacenes" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Gestión de Almacenes</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Control de capacidad y distribución de inventario.</p>
          </div>
          <Button onClick={() => setShowTransfer(!showTransfer)}>
            <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
            Transferir entre Almacenes
          </Button>
        </div>

        {/* Modal de transferencia */}
        {showTransfer && (
          <GlassCard glow className="p-6 border border-primary/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline font-bold text-lg text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">swap_horiz</span>
                Nueva Transferencia
              </h3>
              <button onClick={() => setShowTransfer(false)} className="text-outline hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Origen</label>
                <select className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 [&>option]:bg-[#222a3d] [&>option]:text-on-surface">
                  {ALMACENES.map((a) => <option key={a.id}>{a.nombre}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Destino</label>
                <select className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 [&>option]:bg-[#222a3d] [&>option]:text-on-surface">
                  {ALMACENES.map((a) => <option key={a.id}>{a.nombre}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Producto (SKU)</label>
                <input
                  placeholder="SKU-0011-A"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Cantidad</label>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-3">
              <Button variant="secondary" size="sm" onClick={() => setShowTransfer(false)}>Cancelar</Button>
              <Button size="sm">Confirmar Transferencia</Button>
            </div>
          </GlassCard>
        )}

        {/* Cards de almacenes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALMACENES.map((a) => {
            const pct = Math.round((a.capacidadUsada / a.capacidadTotal) * 100)
            const isHigh = pct >= 80
            return (
              <GlassCard key={a.id} className={`p-6 border-l-4 ${a.color}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">{a.icon}</span>
                  </div>
                  <Badge variant={isHigh ? 'error' : 'success'}>{isHigh ? 'Alta ocupación' : 'Normal'}</Badge>
                </div>
                <h3 className="font-headline font-bold text-on-surface text-lg">{a.nombre}</h3>
                <p className="text-[10px] text-outline uppercase tracking-widest mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {a.ubicacion}
                </p>
                <p className="text-[10px] text-outline mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">person</span>
                  {a.responsable}
                </p>
                <div className="mt-6">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-outline">Capacidad utilizada</span>
                    <span className={`font-bold ${isHigh ? 'text-error' : 'text-on-surface'}`}>{pct}%</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div
                      className={`${a.colorBar} h-full rounded-full transition-all`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-outline mt-2">
                    <span>{a.capacidadUsada.toLocaleString()} unidades</span>
                    <span>Máx: {a.capacidadTotal.toLocaleString()}</span>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>

        {/* Tabla de stock por almacén */}
        <section className="space-y-4">
          <h4 className="text-xl font-spartan font-bold text-on-surface">Stock por Almacén</h4>
          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Producto</th>
                  <th className="px-6 py-5">SKU</th>
                  <th className="px-6 py-5">Almacén</th>
                  <th className="px-6 py-5 text-right">Cantidad</th>
                  <th className="px-6 py-5">Unidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {STOCK_POR_ALMACEN.map((s, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-on-surface">{s.producto}</td>
                    <td className="px-6 py-4 text-xs font-mono text-outline">{s.sku}</td>
                    <td className="px-6 py-4">
                      <Badge variant="info">{s.almacen}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-on-surface">{s.cantidad}</td>
                    <td className="px-6 py-4 text-xs text-outline">{s.unidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
