'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface OCPendiente {
  id: string
  numero: string
  proveedor: string
  rif: string
  fechaOC: string
  items: { descripcion: string; cantidadPedida: number; cantidadRecibida: number }[]
  totalUSD: number
}

const OC_PENDIENTES: OCPendiente[] = [
  {
    id: '1',
    numero: 'OC-2025-0048',
    proveedor: 'TechSolutions C.A.',
    rif: 'J-30495822-1',
    fechaOC: '18/01/2025',
    totalUSD: 1250.00,
    items: [
      { descripcion: 'Cable UTP Cat6 (Rollo 305m)', cantidadPedida: 10, cantidadRecibida: 0 },
      { descripcion: 'Patch Panel 24 puertos', cantidadPedida: 2, cantidadRecibida: 0 },
    ],
  },
  {
    id: '2',
    numero: 'OC-2025-0047',
    proveedor: 'Distribuidora Electrónica del Centro',
    rif: 'J-29384756-3',
    fechaOC: '17/01/2025',
    totalUSD: 4890.50,
    items: [
      { descripcion: 'Disco Duro Seagate 1TB', cantidadPedida: 20, cantidadRecibida: 0 },
      { descripcion: 'Memoria RAM DDR4 8GB', cantidadPedida: 15, cantidadRecibida: 0 },
    ],
  },
]

const HISTORIAL = [
  { numero: 'OC-2025-0045', proveedor: 'Suministros Industriales Bolívar', fecha: '14/01/2025', items: 3, estado: 'Completa' },
  { numero: 'OC-2025-0044', proveedor: 'Energía Total Corp.', fecha: '12/01/2025', items: 5, estado: 'Parcial' },
  { numero: 'OC-2025-0040', proveedor: 'Ferretería Industrial Caracas', fecha: '05/01/2025', items: 2, estado: 'Completa' },
]

export default function RecepcionPage() {
  const [ocSeleccionada, setOcSeleccionada] = useState<OCPendiente | null>(null)
  const [cantidades, setCantidades] = useState<Record<string, number>>({})
  const [calidad, setCalidad] = useState<Record<string, string>>({})

  const handleSeleccionar = (oc: OCPendiente) => {
    setOcSeleccionada(oc)
    const initCant: Record<string, number> = {}
    const initCal: Record<string, string> = {}
    oc.items.forEach((item, i) => {
      initCant[i] = item.cantidadPedida
      initCal[i] = 'Buena'
    })
    setCantidades(initCant)
    setCalidad(initCal)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Recepción de Mercancía" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div>
          <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Recepción de Mercancía</h2>
          <p className="text-on-surface-variant mt-1 text-sm">Valida y registra las recepciones de órdenes de compra.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* OC Pendientes */}
          <div className="space-y-4">
            <h4 className="text-lg font-spartan font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400">pending</span>
              OC Pendientes de Recepción
              <Badge variant="warning">{OC_PENDIENTES.length}</Badge>
            </h4>
            <div className="space-y-3">
              {OC_PENDIENTES.map((oc) => (
                <GlassCard
                  key={oc.id}
                  className={`p-5 cursor-pointer transition-all hover:border-primary/30 ${ocSeleccionada?.id === oc.id ? 'border-primary/40 bg-primary/5' : ''}`}
                  onClick={() => handleSeleccionar(oc)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-primary font-mono">{oc.numero}</p>
                      <p className="text-sm font-semibold text-on-surface mt-1">{oc.proveedor}</p>
                      <p className="text-[10px] text-outline">RIF: {oc.rif}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-on-surface">${oc.totalUSD.toFixed(2)}</p>
                      <p className="text-[10px] text-outline">{oc.fechaOC}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-outline">inventory_2</span>
                    <span className="text-xs text-outline">{oc.items.length} artículos pendientes</span>
                    {ocSeleccionada?.id === oc.id && (
                      <span className="ml-auto text-[10px] text-primary font-bold uppercase tracking-widest">Seleccionada</span>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Formulario de recepción */}
          <div className="space-y-4">
            <h4 className="text-lg font-spartan font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">fact_check</span>
              Formulario de Recepción
            </h4>

            {ocSeleccionada ? (
              <GlassCard glow className="p-6 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">business</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{ocSeleccionada.proveedor}</p>
                    <p className="text-[10px] text-outline">{ocSeleccionada.numero} • {ocSeleccionada.fechaOC}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {ocSeleccionada.items.map((item, i) => (
                    <div key={i} className="bg-surface-container-low p-4 rounded-xl space-y-3">
                      <p className="text-sm font-semibold text-on-surface">{item.descripcion}</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">
                            Cant. Recibida (Pedida: {item.cantidadPedida})
                          </label>
                          <input
                            type="number"
                            value={cantidades[i] ?? item.cantidadPedida}
                            onChange={(e) => setCantidades({ ...cantidades, [i]: Number(e.target.value) })}
                            className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Estado de Calidad</label>
                          <select
                            value={calidad[i] ?? 'Buena'}
                            onChange={(e) => setCalidad({ ...calidad, [i]: e.target.value })}
                            className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            <option>Buena</option>
                            <option>Regular</option>
                            <option>Defectuosa</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Observaciones</label>
                  <textarea
                    rows={2}
                    placeholder="Notas sobre la recepción..."
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="secondary" className="flex-1 justify-center" onClick={() => setOcSeleccionada(null)}>
                    Cancelar
                  </Button>
                  <Button className="flex-1 justify-center">
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    Confirmar Recepción
                  </Button>
                </div>
              </GlassCard>
            ) : (
              <GlassCard className="p-12 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-[48px] text-outline mb-4">local_shipping</span>
                <p className="text-sm text-outline">Selecciona una OC de la lista para registrar su recepción.</p>
              </GlassCard>
            )}
          </div>
        </div>

        {/* Historial */}
        <section className="space-y-4">
          <h4 className="text-xl font-spartan font-bold text-on-surface">Historial de Recepciones Recientes</h4>
          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Número OC</th>
                  <th className="px-6 py-5">Proveedor</th>
                  <th className="px-6 py-5">Fecha Recepción</th>
                  <th className="px-6 py-5 text-right">Artículos</th>
                  <th className="px-6 py-5">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {HISTORIAL.map((h, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-primary font-mono">{h.numero}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{h.proveedor}</td>
                    <td className="px-6 py-4 text-sm text-outline">{h.fecha}</td>
                    <td className="px-6 py-4 text-right text-sm text-on-surface">{h.items}</td>
                    <td className="px-6 py-4">
                      <Badge variant={h.estado === 'Completa' ? 'success' : 'warning'}>{h.estado}</Badge>
                    </td>
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
