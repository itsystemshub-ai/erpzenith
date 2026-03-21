'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const MOTIVOS = [
  'Toma física de inventario',
  'Merma / Deterioro',
  'Error de conteo anterior',
  'Robo / Pérdida',
  'Devolución de cliente',
  'Otro',
]

interface Diferencia {
  sku: string
  producto: string
  stockSistema: number
  stockFisico: number
  diferencia: number
  motivo: string
}

const MOCK_DIFERENCIAS: Diferencia[] = [
  { sku: 'SKU-0022-B', producto: 'Disco Duro Seagate 1TB', stockSistema: 10, stockFisico: 6, diferencia: -4, motivo: 'Merma / Deterioro' },
  { sku: 'SKU-0044-D', producto: 'Resma Papel Bond A4 75g', stockSistema: 15, stockFisico: 12, diferencia: -3, motivo: 'Error de conteo anterior' },
  { sku: 'SKU-0077-G', producto: 'Interruptor Termomagnético 20A', stockSistema: 7, stockFisico: 9, diferencia: 2, motivo: 'Error de conteo anterior' },
]

export default function AjustesPage() {
  const [motivo, setMotivo] = useState(MOTIVOS[0])
  const [observaciones, setObservaciones] = useState('')
  const [sku, setSku] = useState('')
  const [cantidadFisica, setCantidadFisica] = useState('')

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Ajustes de Inventario" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Toma Física / Ajuste</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Registra diferencias entre el stock del sistema y el conteo físico.</p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-xl border border-white/5">
            <span className="material-symbols-outlined text-tertiary text-sm">schedule</span>
            <span className="text-xs font-spartan text-on-surface">Última toma: 10/01/2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-1">
            <GlassCard glow className="p-6 space-y-5">
              <h3 className="font-headline font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Registrar Ajuste
              </h3>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">SKU del Producto</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                  <input
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    placeholder="SKU-0011-A"
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Cantidad Física Contada</label>
                <input
                  type="number"
                  value={cantidadFisica}
                  onChange={(e) => setCantidadFisica(e.target.value)}
                  placeholder="0"
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Motivo del Ajuste</label>
                <select
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {MOTIVOS.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Observaciones</label>
                <textarea
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                  rows={3}
                  placeholder="Detalles adicionales del ajuste..."
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <Button className="w-full justify-center">
                <span className="material-symbols-outlined text-[16px]">add_circle</span>
                Agregar a Lista
              </Button>
            </GlassCard>
          </div>

          {/* Tabla de diferencias */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-spartan font-bold text-on-surface">Diferencias Encontradas</h4>
              <Badge variant="warning">{MOCK_DIFERENCIAS.length} pendientes</Badge>
            </div>

            <GlassCard glow className="overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                    <th className="px-6 py-5">Producto</th>
                    <th className="px-6 py-5 text-right">Sistema</th>
                    <th className="px-6 py-5 text-right">Físico</th>
                    <th className="px-6 py-5 text-right">Diferencia</th>
                    <th className="px-6 py-5">Motivo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {MOCK_DIFERENCIAS.map((d) => (
                    <tr key={d.sku} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-on-surface">{d.producto}</p>
                        <p className="text-[10px] text-outline font-mono">{d.sku}</p>
                      </td>
                      <td className="px-6 py-4 text-right text-sm text-on-surface">{d.stockSistema}</td>
                      <td className="px-6 py-4 text-right text-sm text-on-surface">{d.stockFisico}</td>
                      <td className="px-6 py-4 text-right">
                        <span className={`text-sm font-bold ${d.diferencia < 0 ? 'text-error' : 'text-emerald-400'}`}>
                          {d.diferencia > 0 ? '+' : ''}{d.diferencia}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-xs text-outline">{d.motivo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>

            <div className="flex justify-end gap-3">
              <Button variant="secondary">
                <span className="material-symbols-outlined text-[16px]">cancel</span>
                Descartar Todo
              </Button>
              <Button>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Aplicar Ajustes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
