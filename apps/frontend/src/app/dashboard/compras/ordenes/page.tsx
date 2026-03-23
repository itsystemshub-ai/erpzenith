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
                  <th className="px-3 py-4 whitespace-nowrap">Número</th>
                  <th className="px-3 py-4">Proveedor</th>
                  <th className="px-3 py-4 whitespace-nowrap">Fecha</th>
                  <th className="px-3 py-4 text-right whitespace-nowrap">Total USD</th>
                  <th className="px-3 py-4">Estado</th>
                  <th className="px-3 py-4 text-right">Acc.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i}>
                      {Array.from({ length: 6 }).map((_, j) => (
                        <td key={j} className="px-3 py-3"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                      ))}
                    </tr>
                  ))
                ) : filtered.map((oc) => {
                  const cfg = estadoConfig[oc.estado] ?? { variant: 'info' as const, label: oc.estado }
                  return (
                    <tr key={oc.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                      <td className="px-3 py-3">
                        <span className="text-xs font-medium text-primary font-mono whitespace-nowrap">{oc.numero}</span>
                      </td>
                      <td className="px-3 py-3 max-w-[180px]">
                        <p className="text-xs font-semibold text-on-surface truncate">{oc.proveedor.nombre}</p>
                        <p className="text-[10px] text-outline">{oc.proveedor.rif}</p>
                      </td>
                      <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">
                        {new Date(oc.createdAt).toLocaleDateString('es-VE')}
                      </td>
                      <td className="px-3 py-3 text-right text-xs font-bold text-on-surface whitespace-nowrap">
                        ${Number(oc.totalUSD).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-3 py-3">
                        <Badge variant={cfg.variant}>{cfg.label}</Badge>
                      </td>
                      <td className="px-3 py-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                          </button>
                          {(oc.estado === 'BORRADOR' || oc.estado === 'PENDIENTE') && (
                            <button className="p-1 rounded-lg hover:bg-emerald-500/10 text-outline hover:text-emerald-400 transition-colors">
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
