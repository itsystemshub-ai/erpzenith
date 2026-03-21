'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const facturas = [
  { id: '#FAC-2024-001', cliente: 'Inversiones Globales C.A.', fecha: '12 May 2024', total: '45.600,00', estado: 'PAGADA' },
  { id: '#FAC-2024-002', cliente: 'Soluciones Tech J-1234', fecha: '14 May 2024', total: '12.250,00', estado: 'PENDIENTE' },
  { id: '#FAC-2024-003', cliente: 'Alimentos Polar S.A.', fecha: '15 May 2024', total: '89.900,00', estado: 'PAGADA' },
  { id: '#FAC-2024-004', cliente: 'Distribuidora Norte C.A.', fecha: '16 May 2024', total: '33.100,00', estado: 'VENCIDA' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  PAGADA: 'success', PENDIENTE: 'warning', VENCIDA: 'error',
}

const items = [{ desc: 'Servicio de Consultoría', qty: 1, precio: 15000 }]

export default function VentasPage() {
  const [moneda, setMoneda] = useState<'VES' | 'USD'>('VES')
  const [rif, setRif] = useState('J-30459201-0')
  const [cliente, setCliente] = useState('')
  const bcv = 36.50

  const base = 15000
  const iva = base * 0.16
  const total = base + iva
  const totalUSD = total / bcv

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Ventas y Facturación" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Ventas y Facturación</h2>
            <p className="text-on-surface-variant mt-1">Gestiona tus ingresos y comprobantes fiscales con precisión.</p>
          </div>
          <div className="flex items-center gap-2 bg-surface-container p-1 rounded-xl border border-white/5">
            {(['VES', 'USD'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMoneda(m)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${moneda === m ? 'bg-primary/20 text-primary' : 'text-outline hover:bg-white/5'}`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main: Facturas + Métricas */}
          <div className="lg:col-span-8 space-y-6">
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold font-headline">Facturas Recientes</h3>
                <Button size="sm">
                  <span className="material-symbols-outlined text-[16px]">add_circle</span>
                  Nueva Factura
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-y-2">
                  <thead>
                    <tr className="text-left">
                      {['Número', 'Cliente', 'Fecha', `Total ${moneda}`, 'Estado'].map((h) => (
                        <th key={h} className="px-4 py-2 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {facturas.map((f) => (
                      <tr key={f.id} className="bg-surface-container-low/50 hover:bg-surface-container-high transition-colors cursor-pointer">
                        <td className="px-4 py-4 rounded-l-xl font-headline font-medium text-primary">{f.id}</td>
                        <td className="px-4 py-4 text-on-surface-variant">{f.cliente}</td>
                        <td className="px-4 py-4 text-sm text-outline">{f.fecha}</td>
                        <td className="px-4 py-4 font-bold text-on-surface">{f.total}</td>
                        <td className="px-4 py-4 rounded-r-xl text-right">
                          <Badge variant={estadoVariant[f.estado]}>{f.estado}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>

            {/* Métricas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all" />
                <span className="text-[10px] font-spartan uppercase tracking-widest text-outline">Ventas del Mes</span>
                <div className="mt-2 text-4xl font-headline font-bold text-on-surface">
                  324.5k <span className="text-sm font-normal text-outline">{moneda}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">trending_up</span>
                  +12.5% respecto al mes anterior
                </div>
              </GlassCard>
              <GlassCard className="p-6 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-tertiary/10 blur-[60px] group-hover:bg-tertiary/20 transition-all" />
                <span className="text-[10px] font-spartan uppercase tracking-widest text-outline">Facturas Pendientes</span>
                <div className="mt-2 text-4xl font-headline font-bold text-on-surface">18</div>
                <div className="mt-4 flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  4 por vencer esta semana
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Editor de Factura */}
          <div className="lg:col-span-4">
            <GlassCard className="sticky top-24 overflow-hidden">
              <div className="bg-primary/10 p-6 border-b border-white/5">
                <h3 className="font-headline font-bold text-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Editor de Factura
                </h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">RIF / Cédula</label>
                    <input
                      value={rif}
                      onChange={(e) => setRif(e.target.value)}
                      className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-2.5 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Cliente</label>
                    <input
                      value={cliente}
                      onChange={(e) => setCliente(e.target.value)}
                      placeholder="Razón Social"
                      className="w-full bg-surface-container-highest/50 border border-white/10 rounded-xl px-4 py-2.5 text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block">Artículos</label>
                  {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-surface-container-low p-3 rounded-xl border border-white/5">
                      <div className="flex-1">
                        <p className="text-xs font-bold text-on-surface">{item.desc}</p>
                        <p className="text-[10px] text-outline">{item.qty} x {item.precio.toLocaleString('es-VE')}</p>
                      </div>
                      <button className="text-error/50 hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-lg">close</span>
                      </button>
                    </div>
                  ))}
                  <button className="w-full py-2 border border-dashed border-white/20 rounded-xl text-[10px] font-bold uppercase tracking-widest text-outline hover:bg-white/5 transition-all">
                    + Agregar Item
                  </button>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">Base Imponible</span>
                    <span className="font-headline font-medium text-on-surface">{base.toLocaleString('es-VE')} VES</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-outline">IVA (16%)</span>
                    <span className="font-headline font-medium text-on-surface">{iva.toLocaleString('es-VE')} VES</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-[10px] font-spartan uppercase tracking-widest text-primary font-bold">Total Factura</span>
                    <div className="text-right">
                      <div className="text-2xl font-headline font-bold text-on-surface">{total.toLocaleString('es-VE')} VES</div>
                      <div className="text-xs text-outline font-spartan">≈ {totalUSD.toFixed(2)} USD</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full justify-center py-4">
                  PROCESAR FACTURA
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
