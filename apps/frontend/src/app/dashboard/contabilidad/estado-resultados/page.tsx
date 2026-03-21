'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const data = {
  ingresos: [
    { label: 'Ventas Netas', value: 4850000, prev: 4200000 },
    { label: 'Ingresos por Servicios', value: 620000, prev: 580000 },
    { label: 'Otros Ingresos', value: 95000, prev: 110000 },
  ],
  costos: [
    { label: 'Costo de Ventas', value: 2310000, prev: 2050000 },
    { label: 'Costo de Servicios', value: 280000, prev: 260000 },
  ],
  gastos: [
    { label: 'Gastos de Personal', value: 890000, prev: 820000 },
    { label: 'Gastos Administrativos', value: 245000, prev: 230000 },
    { label: 'Gastos de Ventas', value: 180000, prev: 165000 },
    { label: 'Depreciación', value: 95000, prev: 88000 },
    { label: 'Gastos Financieros', value: 62000, prev: 75000 },
  ],
}

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`
const pct = (curr: number, prev: number) => (((curr - prev) / prev) * 100).toFixed(1)

export default function EstadoResultadosPage() {
  const [period, setPeriod] = useState('2024-Q4')

  const totalIngresos = data.ingresos.reduce((s, i) => s + i.value, 0)
  const totalCostos = data.costos.reduce((s, i) => s + i.value, 0)
  const utilidadBruta = totalIngresos - totalCostos
  const totalGastos = data.gastos.reduce((s, i) => s + i.value, 0)
  const utilidadOperativa = utilidadBruta - totalGastos
  const impuestos = utilidadOperativa * 0.34
  const utilidadNeta = utilidadOperativa - impuestos

  const prevIngresos = data.ingresos.reduce((s, i) => s + i.prev, 0)
  const prevCostos = data.costos.reduce((s, i) => s + i.prev, 0)
  const prevGastos = data.gastos.reduce((s, i) => s + i.prev, 0)
  const prevUtilidadNeta = (prevIngresos - prevCostos - prevGastos) * 0.66

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Estado de Resultados (P&L)</h2>
            <p className="text-on-surface-variant mt-1">Empresa Zenith S.A. · Período: {period}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex glass-panel rounded-xl p-1 gap-1">
              {['2024-Q4', '2024-Q3', '2024-Q2', '2024-Q1'].map(p => (
                <button key={p} onClick={() => setPeriod(p)}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all ${period === p ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  {p}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Exportar PDF
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Ingresos Totales', value: fmt(totalIngresos), change: pct(totalIngresos, prevIngresos), up: true },
            { label: 'Utilidad Bruta', value: fmt(utilidadBruta), change: pct(utilidadBruta, prevIngresos - prevCostos), up: true },
            { label: 'Utilidad Operativa', value: fmt(utilidadOperativa), change: pct(utilidadOperativa, prevIngresos - prevCostos - prevGastos), up: true },
            { label: 'Utilidad Neta', value: fmt(Math.round(utilidadNeta)), change: pct(utilidadNeta, prevUtilidadNeta), up: utilidadNeta > prevUtilidadNeta },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <p className="text-xs text-outline uppercase tracking-widest font-bold mb-2">{k.label}</p>
              <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
              <p className={`text-xs mt-1 font-bold ${k.up ? 'text-tertiary' : 'text-error'}`}>
                {k.up ? '▲' : '▼'} {k.change}% vs período anterior
              </p>
            </div>
          ))}
        </div>

        {/* P&L Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="font-headline font-bold text-on-surface">Estado de Resultados Detallado</h3>
            <div className="flex gap-6 text-xs text-outline">
              <span>Período Actual</span>
              <span>Período Anterior</span>
              <span>Variación</span>
            </div>
          </div>
          <div className="p-6 space-y-1">

            <Section label="INGRESOS" total={fmt(totalIngresos)} totalClass="text-tertiary" />
            {data.ingresos.map(item => <Row key={item.label} item={item} />)}

            <div className="pt-4" />
            <Section label="COSTO DE VENTAS" total={`(${fmt(totalCostos)})`} totalClass="text-error" />
            {data.costos.map(item => <Row key={item.label} item={item} negate />)}

            <Subtotal label="UTILIDAD BRUTA" value={fmt(utilidadBruta)} color="text-primary" bg="bg-primary/5 border-primary/20" />

            <div className="pt-4" />
            <Section label="GASTOS OPERATIVOS" total={`(${fmt(totalGastos)})`} totalClass="text-error" />
            {data.gastos.map(item => <Row key={item.label} item={item} negate />)}

            <Subtotal label="UTILIDAD OPERATIVA (EBIT)" value={fmt(utilidadOperativa)} color="text-on-surface" bg="bg-white/5 border-white/10" />

            <div className="flex justify-between py-2 pl-4">
              <span className="text-sm text-on-surface-variant">Impuesto sobre la Renta (34%)</span>
              <span className="text-sm text-on-surface">({fmt(Math.round(impuestos))})</span>
            </div>

            <Subtotal label="UTILIDAD NETA" value={fmt(Math.round(utilidadNeta))} color="text-tertiary" bg="bg-tertiary/5 border-tertiary/30" large />
          </div>
        </div>

        {/* Margins */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="font-headline font-bold text-on-surface mb-5">Análisis de Márgenes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Margen Bruto', value: ((utilidadBruta / totalIngresos) * 100), color: 'bg-primary' },
              { label: 'Margen Operativo', value: ((utilidadOperativa / totalIngresos) * 100), color: 'bg-secondary' },
              { label: 'Margen Neto', value: ((utilidadNeta / totalIngresos) * 100), color: 'bg-tertiary' },
            ].map(m => (
              <div key={m.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-on-surface-variant">{m.label}</span>
                  <span className="text-on-surface font-bold">{m.value.toFixed(1)}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className={`h-full ${m.color} rounded-full transition-all`} style={{ width: `${Math.min(m.value, 100)}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

function Section({ label, total, totalClass }: { label: string; total: string; totalClass: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-white/10">
      <span className="font-bold text-on-surface text-sm uppercase tracking-wide">{label}</span>
      <span className={`font-bold text-sm ${totalClass}`}>{total}</span>
    </div>
  )
}

function Row({ item, negate }: { item: { label: string; value: number; prev: number }; negate?: boolean }) {
  const change = Number(pct(item.value, item.prev))
  return (
    <div className="flex justify-between py-1.5 pl-4 hover:bg-white/5 rounded-lg transition-colors">
      <span className="text-sm text-on-surface-variant">{item.label}</span>
      <div className="flex items-center gap-6">
        <span className="text-xs text-outline w-24 text-right">{fmt(item.prev)}</span>
        <span className="text-sm text-on-surface w-28 text-right">{negate ? `(${fmt(item.value)})` : fmt(item.value)}</span>
        <span className={`text-xs w-14 text-right font-bold ${change >= 0 ? 'text-tertiary' : 'text-error'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  )
}

function Subtotal({ label, value, color, bg, large }: { label: string; value: string; color: string; bg: string; large?: boolean }) {
  return (
    <div className={`flex justify-between py-3 px-3 rounded-xl border mt-2 ${bg}`}>
      <span className={`font-bold ${color} ${large ? 'text-lg' : 'text-sm'}`}>{label}</span>
      <span className={`font-bold ${color} ${large ? 'text-lg' : 'text-sm'}`}>{value}</span>
    </div>
  )
}

function pct(curr: number, prev: number) {
  return (((curr - prev) / prev) * 100).toFixed(1)
}

function fmt(n: number) {
  return `$${n.toLocaleString('en-US')}`
}
