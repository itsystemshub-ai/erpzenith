'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useVentasStore } from '@/stores/ventasStore'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

type EstadoFactura = 'Pagada' | 'Pendiente' | 'Vencida' | 'Anulada'

interface Factura {
  id: string
  numero: string
  cliente: string
  rif: string
  fecha: string
  totalVES: number
  totalUSD: number
  estado: EstadoFactura
}

const BCV = 46.82

const MOCK_FACTURAS: Factura[] = [
  { id: '1', numero: 'FAC-2025-0128', cliente: 'Inversiones Globales C.A.', rif: 'J-30495822-1', fecha: '18/01/2025', totalVES: 214_000, totalUSD: 4568.56, estado: 'Pagada' },
  { id: '2', numero: 'FAC-2025-0127', cliente: 'Soluciones Tech Andina C.A.', rif: 'J-29384756-3', fecha: '17/01/2025', totalVES: 57_340, totalUSD: 1224.50, estado: 'Pendiente' },
  { id: '3', numero: 'FAC-2025-0126', cliente: 'Alimentos Polar S.A.', rif: 'J-00012345-6', fecha: '16/01/2025', totalVES: 421_000, totalUSD: 8990.00, estado: 'Pagada' },
  { id: '4', numero: 'FAC-2025-0125', cliente: 'Distribuidora Norte C.A.', rif: 'J-40192837-5', fecha: '10/01/2025', totalVES: 155_000, totalUSD: 3309.65, estado: 'Vencida' },
  { id: '5', numero: 'FAC-2025-0124', cliente: 'Constructora Orinoco S.A.', rif: 'J-31827465-2', fecha: '08/01/2025', totalVES: 89_500, totalUSD: 1911.00, estado: 'Pagada' },
  { id: '6', numero: 'FAC-2025-0123', cliente: 'Ferretería Industrial Caracas', rif: 'J-19283746-4', fecha: '05/01/2025', totalVES: 32_000, totalUSD: 683.00, estado: 'Anulada' },
  { id: '7', numero: 'FAC-2025-0122', cliente: 'Clínica Santa María C.A.', rif: 'J-28374651-7', fecha: '03/01/2025', totalVES: 78_200, totalUSD: 1670.00, estado: 'Vencida' },
]

const estadoConfig: Record<EstadoFactura, { variant: 'success' | 'warning' | 'error' | 'info' }> = {
  Pagada: { variant: 'success' },
  Pendiente: { variant: 'warning' },
  Vencida: { variant: 'error' },
  Anulada: { variant: 'info' },
}

const ESTADOS: (EstadoFactura | 'Todas')[] = ['Todas', 'Pagada', 'Pendiente', 'Vencida', 'Anulada']

export default function FacturasPage() {
  const { filtros, setFiltro } = useVentasStore()
  const estadoFiltro = (filtros.estado || 'Todas') as EstadoFactura | 'Todas'
  const busqueda = filtros.clienteId // reusing clienteId field as search text

  const { data: facturasData } = useErpQuery<Factura[]>(
    QK.ventas.facturas(),
    '/ventas/facturas',
    { retry: false }
  )

  const FACTURAS = facturasData ?? MOCK_FACTURAS

  const filtered = FACTURAS.filter((f) => {
    const matchEstado = estadoFiltro === 'Todas' || f.estado === estadoFiltro
    const matchBusqueda =
      f.numero.toLowerCase().includes(busqueda.toLowerCase()) ||
      f.cliente.toLowerCase().includes(busqueda.toLowerCase()) ||
      f.rif.toLowerCase().includes(busqueda.toLowerCase())
    return matchEstado && matchBusqueda
  })

  const hoy = '18/01/2025'
  const facturadoHoy = FACTURAS.filter((f) => f.fecha === hoy).reduce((acc, f) => acc + f.totalVES, 0)
  const pendienteCobro = FACTURAS.filter((f) => f.estado === 'Pendiente').reduce((acc, f) => acc + f.totalVES, 0)
  const vencidas = FACTURAS.filter((f) => f.estado === 'Vencida').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Facturas" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Facturas Emitidas</h2>
            <p className="text-on-surface-variant mt-1 text-sm">
              Tasa BCV: <span className="text-tertiary font-bold">{BCV} VES/USD</span>
            </p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Factura
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-primary">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Facturado Hoy</p>
            <h3 className="text-2xl font-headline font-bold text-primary">
              {facturadoHoy.toLocaleString('es-VE')} VES
            </h3>
            <p className="text-xs text-outline mt-2">
              ≈ ${(facturadoHoy / BCV).toFixed(2)} USD
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-amber-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Pendiente de Cobro</p>
            <h3 className="text-2xl font-headline font-bold text-amber-400">
              {pendienteCobro.toLocaleString('es-VE')} VES
            </h3>
            <p className="text-xs text-outline mt-2">
              ≈ ${(pendienteCobro / BCV).toFixed(2)} USD
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-error">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Facturas Vencidas</p>
            <h3 className="text-3xl font-headline font-bold text-error">{vencidas}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-error">warning</span>
              Requieren gestión de cobro
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
                  onClick={() => setFiltro('estado', e === 'Todas' ? '' : e)}
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
            <div className="flex gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input
                  value={busqueda}
                  onChange={(e) => setFiltro('clienteId', e.target.value)}
                  placeholder="Buscar factura, cliente o RIF..."
                  className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-72 focus:ring-2 focus:ring-primary/40 text-on-surface"
                />
              </div>
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
                  <th className="px-6 py-5">Número</th>
                  <th className="px-6 py-5">Cliente</th>
                  <th className="px-6 py-5">Fecha</th>
                  <th className="px-6 py-5 text-right">Total VES</th>
                  <th className="px-6 py-5 text-right">Total USD</th>
                  <th className="px-6 py-5">Estado</th>
                  <th className="px-6 py-5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((f) => (
                  <tr key={f.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-primary font-mono">{f.numero}</span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-on-surface">{f.cliente}</p>
                      <p className="text-[10px] text-outline">RIF: {f.rif}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-outline">{f.fecha}</td>
                    <td className="px-6 py-4 text-right font-bold text-on-surface">
                      {f.totalVES.toLocaleString('es-VE')}
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-outline">
                      ${f.totalUSD.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoConfig[f.estado].variant}>{f.estado}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">print</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No hay facturas con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
