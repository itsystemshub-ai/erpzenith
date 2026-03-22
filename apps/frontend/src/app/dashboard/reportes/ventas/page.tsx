'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const TASA_BCV = 46.82

const ventasPorPeriodo = [
  { periodo: 'Semana 1 (01-07 Nov)', facturas: 142, totalUSD: 18420.50, clientesNuevos: 12 },
  { periodo: 'Semana 2 (08-14 Nov)', facturas: 168, totalUSD: 22840.00, clientesNuevos: 18 },
  { periodo: 'Semana 3 (15-21 Nov)', facturas: 155, totalUSD: 20190.75, clientesNuevos: 9 },
  { periodo: 'Semana 4 (22-28 Nov)', facturas: 181, totalUSD: 25640.30, clientesNuevos: 22 },
]

const totalFacturado = ventasPorPeriodo.reduce((acc, v) => acc + v.totalUSD, 0)
const totalFacturas = ventasPorPeriodo.reduce((acc, v) => acc + v.facturas, 0)
const totalClientesNuevos = ventasPorPeriodo.reduce((acc, v) => acc + v.clientesNuevos, 0)
const ticketPromedio = totalFacturado / totalFacturas

const FILTROS = ['Noviembre 2025', 'Octubre 2025', 'Septiembre 2025', 'Q4 2025']

export default function ReporteVentasPage() {
  const [filtroActivo, setFiltroActivo] = useState('Noviembre 2025')

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Reporte de Ventas" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Reporte de Ventas</h2>
            <p className="text-on-surface-variant mt-1">Análisis de facturación y rendimiento comercial.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-[18px]">table_view</span>
              Excel
            </Button>
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-error text-[18px]">picture_as_pdf</span>
              PDF
            </Button>
          </div>
        </div>

        {/* Filtros de fecha */}
        <div className="flex gap-3 overflow-x-auto pb-1">
          {FILTROS.map((f) => (
            <button
              key={f}
              onClick={() => setFiltroActivo(f)}
              className={`px-5 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all ${
                filtroActivo === f
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                  : 'bg-surface-container-high text-on-surface/70 hover:bg-surface-container-highest'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Total Facturado</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">${totalFacturado.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</p>
            <p className="text-xs text-tertiary mt-1">Bs. {(totalFacturado * TASA_BCV).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Facturas Emitidas</p>
              <div className="p-2 bg-tertiary/10 text-tertiary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{totalFacturas}</p>
            <p className="text-xs text-outline mt-1">en el período</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ticket Promedio</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">analytics</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">${ticketPromedio.toFixed(2)}</p>
            <p className="text-xs text-outline mt-1">por factura</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Clientes Nuevos</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">person_add</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{totalClientesNuevos}</p>
            <Badge variant="success">+{Math.round((totalClientesNuevos / 180) * 100)}% vs mes ant.</Badge>
          </GlassCard>
        </div>

        {/* Tabla por período */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">Ventas por Semana — {filtroActivo}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Período', 'Facturas', 'Total USD', 'Total Bs.', 'Ticket', 'Cli. Nuevos', 'Var.'].map((h) => (
                    <th key={h} className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {ventasPorPeriodo.map((v, i) => {
                  const prev = ventasPorPeriodo[i - 1]
                  const variacion = prev ? (((v.totalUSD - prev.totalUSD) / prev.totalUSD) * 100).toFixed(1) : null
                  return (
                    <tr key={v.periodo} className="hover:bg-white/5 transition-colors">
                      <td className="px-3 py-3 text-xs font-medium text-on-surface">{v.periodo}</td>
                      <td className="px-3 py-3 text-xs text-on-surface-variant text-center">{v.facturas}</td>
                      <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">${v.totalUSD.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                      <td className="px-3 py-3 text-xs text-tertiary whitespace-nowrap">Bs. {(v.totalUSD * TASA_BCV).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                      <td className="px-3 py-3 text-xs text-on-surface whitespace-nowrap">${(v.totalUSD / v.facturas).toFixed(2)}</td>
                      <td className="px-3 py-3 text-xs text-on-surface-variant text-center">{v.clientesNuevos}</td>
                      <td className="px-3 py-3">
                        {variacion ? (
                          <span className={`text-xs font-bold ${parseFloat(variacion) >= 0 ? 'text-emerald-400' : 'text-error'}`}>
                            {parseFloat(variacion) >= 0 ? '↑' : '↓'} {Math.abs(parseFloat(variacion))}%
                          </span>
                        ) : (
                          <span className="text-outline text-xs">—</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
              <tfoot>
                <tr className="bg-surface-container-highest/50 border-t-2 border-primary/20">
                  <td className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">Total</td>
                  <td className="px-3 py-3 text-xs font-bold text-on-surface text-center">{totalFacturas}</td>
                  <td className="px-3 py-3 text-xs font-headline font-bold text-primary whitespace-nowrap">${totalFacturado.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                  <td className="px-3 py-3 text-xs font-bold text-tertiary whitespace-nowrap">Bs. {(totalFacturado * TASA_BCV).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                  <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">${ticketPromedio.toFixed(2)}</td>
                  <td className="px-3 py-3 text-xs font-bold text-on-surface text-center">{totalClientesNuevos}</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
