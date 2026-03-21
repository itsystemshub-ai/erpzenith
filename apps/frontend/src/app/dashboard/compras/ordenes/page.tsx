'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { useComprasStore } from '@/stores/comprasStore'
import { QK } from '@/lib/queryKeys'

type EstadoOC = 'BORRADOR' | 'EMITIDA' | 'PENDIENTE' | 'RECIBIDA' | 'CANCELADA'

interface OrdenCompra {
  id: string; numero: string; estado: EstadoOC
  totalUSD: number; createdAt: string
  proveedor: { nombre: string; rif: string }
}

const estadoConfig: Record<EstadoOC, { variant: 'success' | 'warning' | 'error' | 'info'; label: string }> = {
  BORRADOR: { variant: 'info', label: 'Borrador' },
  PENDIENTE: { variant: 'warning', label: 'Pendiente' },
  EMITIDA: { variant: 'warning', label: 'Emitida' },
  RECIBIDA: { variant: 'success', label: 'Recibida' },
  CANCELADA: { variant: 'error', label: 'Cancelada' },
}

const ESTADOS: (EstadoOC | 'Todos')[] = ['Todos', 'BORRADOR', 'PENDIENTE', 'EMITIDA', 'RECIBIDA', 'CANCELADA']

export default function OrdenesCompraPage() {
  const { filtros, setFiltro } = useComprasStore()
  const [estadoFiltro, setEstadoFiltro] = useState<EstadoOC | 'Todos'>('Todos')

  const { data: ordenes = [], isLoading } = useErpQuery<OrdenCompra[]>(
    QK.compras.ordenes(),
    '/compras/ordenes',
    { refetchInterval: 60_000 }
  )

  const filtered = ordenes.filter((o) => {
    const matchEstado = estadoFiltro === 'Todos' || o.estado === estadoFiltro
    const q = filtros.proveedorId.toLowerCase()
    const matchBusqueda = !q ||
      o.numero.toLowerCase().includes(q) ||
      o.proveedor.nombre.toLowerCase().includes(q)
    return matchEstado && matchBusqueda
  })

  const ocPendientes = ordenes.filter((o) => o.estado === 'PENDIENTE' || o.estado === 'EMITIDA').length
  const gastoTotal = ordenes.filter((o) => o.estado !== 'CANCELADA').reduce((acc, o) => acc + Number(o.totalUSD), 0)
  const recibidas = ordenes.filter((o) => o.estado === 'RECIBIDA').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Órdenes de Compra" />
      <div className="flex-1 p-8 space-y-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Órdenes de Compra</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Gestión y seguimiento de todas las órdenes de abastecimiento.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva OC
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-amber-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">OC Pendientes / Emitidas</p>
            <h3 className="text-3xl font-headline font-bold text-amber-400">{isLoading ? '—' : ocPendientes}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">pending</span>
              Requieren seguimiento
            </p>
          </GlassCard>
          <GlassCard className="p-6 border-l-4 border-emerald-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">OC Recibidas</p>
            <h3 className="text-3xl font-headline font-bold text-emerald-400">{isLoading ? '—' : recibidas}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">inventory</span>
              Mercancía ingresada
            </p>
          </GlassCard>
          <GlassCard className="p-6 border-l-4 border-primary">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Gasto Total</p>
            <h3 className="text-2xl font-headline font-bold text-primary">
              {isLoading ? '—' : `$${gastoTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
            </h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">payments</span>
              Órdenes activas (USD)
            </p>
          </GlassCard>
        </div>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {ESTADOS.map((e) => (
                <button
                  key={e}
                  onClick={() => setEstadoFiltro(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    estadoFiltro === e
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}
                >
                  {e === 'Todos' ? 'Todos' : estadoConfig[e].label}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input
                value={filtros.proveedorId}
                onChange={(e) => setFiltro('proveedorId', e.target.value)}
                placeholder="Buscar por número o proveedor..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-72 focus:ring-2 focus:ring-primary/40 text-on-surface"
              />
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Número</th>
                  <th className="px-6 py-5">Proveedor</th>
                  <th className="px-6 py-5">Fecha</th>
                  <th className="px-6 py-5 text-right">Total USD</th>
                  <th className="px-6 py-5">Estado</th>
                  <th className="px-6 py-5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <td key={j} className="px-6 py-4"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                      ))}
                    </tr>
                  ))
                ) : filtered.map((oc) => {
                  const cfg = estadoConfig[oc.estado] ?? { variant: 'info' as const, label: oc.estado }
                  return (
                    <tr key={oc.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-primary font-mono">{oc.numero}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-on-surface">{oc.proveedor.nombre}</p>
                        <p className="text-[10px] text-outline">RIF: {oc.proveedor.rif}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-outline">
                        {new Date(oc.createdAt).toLocaleDateString('es-VE')}
                      </td>
                      <td className="px-6 py-4 text-right font-bold text-on-surface">
                        ${Number(oc.totalUSD).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={cfg.variant}>{cfg.label}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          {(oc.estado === 'BORRADOR' || oc.estado === 'PENDIENTE') && (
                            <button className="p-1.5 rounded-lg hover:bg-emerald-500/10 text-outline hover:text-emerald-400 transition-colors">
                              <span className="material-symbols-outlined text-[16px]">check_circle</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {!isLoading && filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No hay órdenes con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}

interface OrdenCompra {
  id: string
  numero: string
  proveedor: string
  rif: string
  fecha: string
  totalUSD: number
  estado: EstadoOC
}

const MOCK_ORDENES: OrdenCompra[] = [
  { id: '1', numero: 'OC-2025-0048', proveedor: 'TechSolutions C.A.', rif: 'J-30495822-1', fecha: '18/01/2025', totalUSD: 1250.00, estado: 'Aprobada' },
  { id: '2', numero: 'OC-2025-0047', proveedor: 'Distribuidora Electrónica del Centro', rif: 'J-29384756-3', fecha: '17/01/2025', totalUSD: 4890.50, estado: 'Pendiente' },
  { id: '3', numero: 'OC-2025-0046', proveedor: 'Papelería El Norte C.A.', rif: 'J-12345678-9', fecha: '16/01/2025', totalUSD: 210.00, estado: 'Borrador' },
  { id: '4', numero: 'OC-2025-0045', proveedor: 'Energía Total Corp.', rif: 'J-40192837-5', fecha: '14/01/2025', totalUSD: 12400.00, estado: 'Recibida' },
  { id: '5', numero: 'OC-2025-0044', proveedor: 'Suministros Industriales Bolívar', rif: 'J-31827465-2', fecha: '12/01/2025', totalUSD: 3750.00, estado: 'Recibida' },
  { id: '6', numero: 'OC-2025-0043', proveedor: 'Global Logistics S.A.', rif: 'J-28374651-7', fecha: '10/01/2025', totalUSD: 8200.00, estado: 'Anulada' },
  { id: '7', numero: 'OC-2025-0042', proveedor: 'Ferretería Industrial Caracas', rif: 'J-19283746-4', fecha: '08/01/2025', totalUSD: 560.75, estado: 'Pendiente' },
]

const estadoConfig: Record<EstadoOC, { variant: 'success' | 'warning' | 'error' | 'info'; label: string }> = {
  Borrador: { variant: 'info', label: 'Borrador' },
  Pendiente: { variant: 'warning', label: 'Pendiente' },
  Aprobada: { variant: 'success', label: 'Aprobada' },
  Recibida: { variant: 'success', label: 'Recibida' },
  Anulada: { variant: 'error', label: 'Anulada' },
}

const ESTADOS: (EstadoOC | 'Todos')[] = ['Todos', 'Borrador', 'Pendiente', 'Aprobada', 'Recibida', 'Anulada']

export default function OrdenesCompraPage() {
  const [estadoFiltro, setEstadoFiltro] = useState<EstadoOC | 'Todos'>('Todos')
  const [busqueda, setBusqueda] = useState('')

  const filtered = MOCK_ORDENES.filter((o) => {
    const matchEstado = estadoFiltro === 'Todos' || o.estado === estadoFiltro
    const matchBusqueda =
      o.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      o.proveedor.toLowerCase().includes(busqueda.toLowerCase())
    return matchEstado && matchBusqueda
  })

  const ocPendientes = MOCK_ORDENES.filter((o) => o.estado === 'Pendiente').length
  const ocEsteMes = MOCK_ORDENES.length
  const gastoTotal = MOCK_ORDENES.filter((o) => o.estado !== 'Anulada').reduce((acc, o) => acc + o.totalUSD, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Órdenes de Compra" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Órdenes de Compra</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Gestión y seguimiento de todas las órdenes de abastecimiento.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva OC
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-amber-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">OC Pendientes</p>
            <h3 className="text-3xl font-headline font-bold text-amber-400">{ocPendientes}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">pending</span>
              Requieren aprobación
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-primary">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">OC Este Mes</p>
            <h3 className="text-3xl font-headline font-bold text-primary">{ocEsteMes}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              Enero 2025
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-tertiary">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Gasto Total</p>
            <h3 className="text-3xl font-headline font-bold text-tertiary">
              ${gastoTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">payments</span>
              Órdenes activas
            </p>
          </GlassCard>
        </div>

        {/* Filtros y tabla */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {ESTADOS.map((e) => (
                <button
                  key={e}
                  onClick={() => setEstadoFiltro(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    estadoFiltro === e
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por número o proveedor..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-72 focus:ring-2 focus:ring-primary/40 text-on-surface"
              />
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Número</th>
                  <th className="px-6 py-5">Proveedor</th>
                  <th className="px-6 py-5">Fecha</th>
                  <th className="px-6 py-5 text-right">Total USD</th>
                  <th className="px-6 py-5">Estado</th>
                  <th className="px-6 py-5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((oc) => {
                  const cfg = estadoConfig[oc.estado]
                  return (
                    <tr key={oc.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-primary font-mono">{oc.numero}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-on-surface">{oc.proveedor}</p>
                        <p className="text-[10px] text-outline">RIF: {oc.rif}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-outline">{oc.fecha}</td>
                      <td className="px-6 py-4 text-right font-bold text-on-surface">
                        ${oc.totalUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={cfg.variant}>{cfg.label}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          {oc.estado === 'Pendiente' && (
                            <button className="p-1.5 rounded-lg hover:bg-emerald-500/10 text-outline hover:text-emerald-400 transition-colors">
                              <span className="material-symbols-outlined text-[16px]">check_circle</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No hay órdenes con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
