'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type TipoMovimiento = 'ENTRADA' | 'SALIDA' | 'AJUSTE' | 'TRASLADO'

interface Movimiento {
  id: string
  fecha: string
  hora: string
  producto: string
  sku: string
  tipo: TipoMovimiento
  cantidad: number
  referencia: string
  usuario: string
}

const MOCK_MOVIMIENTOS: Movimiento[] = [
  { id: '1', fecha: '18/01/2025', hora: '09:14', producto: 'Cable UTP Cat6 (Rollo 305m)', sku: 'SKU-0011-A', tipo: 'ENTRADA', cantidad: 50, referencia: 'OC-2025-0041', usuario: 'C. Mendoza' },
  { id: '2', fecha: '18/01/2025', hora: '10:32', producto: 'Disco Duro Seagate 1TB', sku: 'SKU-0022-B', tipo: 'SALIDA', cantidad: 4, referencia: 'FAC-2025-0118', usuario: 'L. Fernández' },
  { id: '3', fecha: '18/01/2025', hora: '11:05', producto: 'Resma Papel Bond A4 75g', sku: 'SKU-0044-D', tipo: 'AJUSTE', cantidad: -3, referencia: 'AJ-2025-0009', usuario: 'A. Rojas' },
  { id: '4', fecha: '17/01/2025', hora: '14:20', producto: 'Tornillo Hexagonal 3/8"', sku: 'SKU-0033-C', tipo: 'TRASLADO', cantidad: 100, referencia: 'TR-2025-0003', usuario: 'C. Mendoza' },
  { id: '5', fecha: '17/01/2025', hora: '15:48', producto: 'Aceite Hidráulico ISO 46', sku: 'SKU-0055-E', tipo: 'ENTRADA', cantidad: 5, referencia: 'OC-2025-0039', usuario: 'L. Fernández' },
  { id: '6', fecha: '16/01/2025', hora: '08:55', producto: 'Tóner HP LaserJet 85A', sku: 'SKU-0066-F', tipo: 'SALIDA', cantidad: 2, referencia: 'FAC-2025-0112', usuario: 'A. Rojas' },
  { id: '7', fecha: '16/01/2025', hora: '16:10', producto: 'Interruptor Termomagnético 20A', sku: 'SKU-0077-G', tipo: 'AJUSTE', cantidad: 2, referencia: 'AJ-2025-0008', usuario: 'C. Mendoza' },
  { id: '8', fecha: '15/01/2025', hora: '09:30', producto: 'Filtro de Aire Motor Cummins', sku: 'SKU-0088-H', tipo: 'ENTRADA', cantidad: 10, referencia: 'OC-2025-0035', usuario: 'L. Fernández' },
]

const tipoConfig: Record<TipoMovimiento, { variant: 'success' | 'warning' | 'error' | 'info'; icon: string; color: string }> = {
  ENTRADA: { variant: 'success', icon: 'south_west', color: 'text-emerald-500 bg-emerald-500/10' },
  SALIDA: { variant: 'error', icon: 'north_east', color: 'text-error bg-error/10' },
  AJUSTE: { variant: 'warning', icon: 'tune', color: 'text-amber-400 bg-amber-400/10' },
  TRASLADO: { variant: 'info', icon: 'swap_horiz', color: 'text-primary bg-primary/10' },
}

const TIPOS: (TipoMovimiento | 'TODOS')[] = ['TODOS', 'ENTRADA', 'SALIDA', 'AJUSTE', 'TRASLADO']

export default function MovimientosPage() {
  const [tipoFiltro, setTipoFiltro] = useState<TipoMovimiento | 'TODOS'>('TODOS')
  const [fechaFiltro, setFechaFiltro] = useState('')

  const filtered = MOCK_MOVIMIENTOS.filter((m) => {
    const matchTipo = tipoFiltro === 'TODOS' || m.tipo === tipoFiltro
    const matchFecha = !fechaFiltro || m.fecha.includes(fechaFiltro)
    return matchTipo && matchFecha
  })

  const hoy = '18/01/2025'
  const entradasHoy = MOCK_MOVIMIENTOS.filter((m) => m.tipo === 'ENTRADA' && m.fecha === hoy).length
  const salidasHoy = MOCK_MOVIMIENTOS.filter((m) => m.tipo === 'SALIDA' && m.fecha === hoy).length
  const ajustesHoy = MOCK_MOVIMIENTOS.filter((m) => m.tipo === 'AJUSTE' && m.fecha === hoy).length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Movimientos de Inventario" />
      <div className="flex-1 p-8 space-y-8">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-emerald-500">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Entradas Hoy</p>
            <h3 className="text-3xl font-headline font-bold text-emerald-400">{entradasHoy}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-emerald-500">south_west</span>
              Recepciones registradas
            </p>
          </GlassCard>
          <GlassCard className="p-6 border-l-4 border-error">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Salidas Hoy</p>
            <h3 className="text-3xl font-headline font-bold text-error">{salidasHoy}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-error">north_east</span>
              Despachos realizados
            </p>
          </GlassCard>
          <GlassCard className="p-6 border-l-4 border-amber-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Ajustes Hoy</p>
            <h3 className="text-3xl font-headline font-bold text-amber-400">{ajustesHoy}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-amber-400">tune</span>
              Correcciones de inventario
            </p>
          </GlassCard>
        </div>

        {/* Filtros */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {TIPOS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTipoFiltro(t)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    tipoFiltro === t
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                type="date"
                value={fechaFiltro}
                onChange={(e) => setFechaFiltro(e.target.value)}
                className="bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="secondary" size="sm">
                <span className="material-symbols-outlined text-[16px]">download</span>
                Exportar
              </Button>
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Fecha / Hora</th>
                  <th className="px-6 py-5">Producto</th>
                  <th className="px-6 py-5">Tipo</th>
                  <th className="px-6 py-5 text-right">Cantidad</th>
                  <th className="px-6 py-5">Referencia</th>
                  <th className="px-6 py-5">Usuario</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((m) => {
                  const cfg = tipoConfig[m.tipo]
                  return (
                    <tr key={m.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm text-on-surface font-mono">{m.fecha}</p>
                        <p className="text-[10px] text-outline">{m.hora}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-on-surface">{m.producto}</p>
                        <p className="text-[10px] text-outline font-mono">{m.sku}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center ${cfg.color}`}>
                            <span className="material-symbols-outlined text-[14px]">{cfg.icon}</span>
                          </div>
                          <Badge variant={cfg.variant}>{m.tipo}</Badge>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`text-sm font-bold ${m.cantidad < 0 ? 'text-error' : m.tipo === 'SALIDA' ? 'text-error' : 'text-emerald-400'}`}>
                          {m.tipo === 'SALIDA' ? '-' : m.cantidad < 0 ? '' : '+'}{Math.abs(m.cantidad)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-mono text-primary">{m.referencia}</span>
                      </td>
                      <td className="px-6 py-4 text-xs text-outline">{m.usuario}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No hay movimientos con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
