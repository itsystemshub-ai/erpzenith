'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const periods = ['Mensual', 'Trimestral', 'Anual'] as const
type Period = typeof periods[number]

const kpis = [
  { label: 'Razón Corriente', value: '1.85', sub: 'Objetivo: > 1.5', trend: '+2.5%', up: true },
  { label: 'Prueba Ácida', value: '1.12', sub: 'Objetivo: > 1.0', trend: '+1.2%', up: true },
  { label: 'Capital de Trabajo', value: '$342k', sub: 'Vs mes anterior', trend: '-1.4%', up: false },
  { label: 'Proyección IA (6M)', value: '+12%', sub: 'Crecimiento estimado', trend: '', up: true },
]

const activos = {
  corriente: [
    { cuenta: 'Efectivo y Equivalentes', monto: '$125,000' },
    { cuenta: 'Cuentas por Cobrar', monto: '$180,000' },
    { cuenta: 'Inventarios', monto: '$147,000' },
  ],
  noCorriente: [
    { cuenta: 'Propiedad, Planta y Equipo', monto: '$650,000' },
    { cuenta: 'Intangibles', monto: '$100,000' },
    { cuenta: 'Otros Activos', monto: '$43,000' },
  ],
}

const pasivos = {
  corriente: [
    { cuenta: 'Cuentas por Pagar', monto: '$120,000' },
    { cuenta: 'Impuestos por Pagar', monto: '$84,000' },
    { cuenta: 'Obligaciones Laborales', monto: '$40,000' },
  ],
  noCorriente: [
    { cuenta: 'Deuda a Largo Plazo', monto: '$306,000' },
  ],
}

const patrimonio = [
  { cuenta: 'Capital Social', monto: '$500,000' },
  { cuenta: 'Utilidades Retenidas', monto: '$150,000' },
  { cuenta: 'Resultado del Ejercicio', monto: '$45,000' },
]

export default function BalancePage() {
  const [period, setPeriod] = useState<Period>('Mensual')

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Balance General</h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary/10 text-tertiary">En tiempo real</span>
            </div>
            <p className="text-on-surface-variant">Empresa Zenith S.A. · Moneda: USD · Última actualización: Hoy</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex glass-panel rounded-xl p-1 gap-1">
              {periods.map((p) => (
                <button key={p} onClick={() => setPeriod(p)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${period === p ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
                  {p}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Exportar
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              Proyección IA
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold mb-2">{k.label}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-headline font-bold text-on-surface">{k.value}</span>
                {k.trend && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.up ? 'text-tertiary bg-tertiary/10' : 'text-error bg-error/10'}`}>
                    {k.trend}
                  </span>
                )}
              </div>
              <p className="text-xs text-outline mt-2">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Balance Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Activos */}
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-tertiary/5">
              <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2">
                <span className="w-2 h-6 bg-tertiary rounded-full" />
                Activos
              </h3>
              <span className="text-sm text-outline">Total: <span className="font-bold text-on-surface">$1,245,000</span></span>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {[{ title: 'Activo Corriente', total: '$452,000', items: activos.corriente }, { title: 'Activo No Corriente', total: '$793,000', items: activos.noCorriente }].map((sec) => (
                <div key={sec.title}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-spartan font-bold uppercase tracking-widest text-outline">{sec.title}</h4>
                    <span className="text-sm font-bold text-on-surface">{sec.total}</span>
                  </div>
                  <div className="pl-4 space-y-2 border-l border-white/10">
                    {sec.items.map((item) => (
                      <div key={item.cuenta} className="flex justify-between items-center py-2 hover:bg-white/5 px-3 rounded-lg transition-colors">
                        <span className="text-sm text-on-surface-variant">{item.cuenta}</span>
                        <span className="text-sm font-bold text-on-surface font-mono">{item.monto}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-6 py-4 bg-tertiary/5 border-t border-white/5 flex justify-between items-center">
              <span className="font-bold text-on-surface">Total Activos</span>
              <span className="text-xl font-headline font-bold text-on-surface">$1,245,000</span>
            </div>
          </div>

          {/* Pasivos + Patrimonio */}
          <div className="flex flex-col gap-6">
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-error/5">
                <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2 h-6 bg-error rounded-full" />
                  Pasivos
                </h3>
                <span className="text-sm text-outline">Total: <span className="font-bold text-on-surface">$550,000</span></span>
              </div>
              <div className="p-6 space-y-6">
                {[{ title: 'Pasivo Corriente', total: '$244,000', items: pasivos.corriente }, { title: 'Pasivo No Corriente', total: '$306,000', items: pasivos.noCorriente }].map((sec) => (
                  <div key={sec.title}>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-spartan font-bold uppercase tracking-widest text-outline">{sec.title}</h4>
                      <span className="text-sm font-bold text-on-surface">{sec.total}</span>
                    </div>
                    <div className="pl-4 space-y-2 border-l border-white/10">
                      {sec.items.map((item) => (
                        <div key={item.cuenta} className="flex justify-between items-center py-2 hover:bg-white/5 px-3 rounded-lg transition-colors">
                          <span className="text-sm text-on-surface-variant">{item.cuenta}</span>
                          <span className="text-sm font-bold text-on-surface font-mono">{item.monto}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden flex-1">
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-primary/5">
                <h3 className="text-lg font-headline font-bold text-on-surface flex items-center gap-2">
                  <span className="w-2 h-6 bg-primary rounded-full" />
                  Patrimonio
                </h3>
                <span className="text-sm text-outline">Total: <span className="font-bold text-on-surface">$695,000</span></span>
              </div>
              <div className="p-6 pl-10 space-y-2 border-l-0">
                {patrimonio.map((item) => (
                  <div key={item.cuenta} className="flex justify-between items-center py-2 hover:bg-white/5 px-3 rounded-lg transition-colors">
                    <span className="text-sm text-on-surface-variant">{item.cuenta}</span>
                    <span className="text-sm font-bold text-on-surface font-mono">{item.monto}</span>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-surface-container-highest/30 border-t border-white/5 flex justify-between items-center">
                <span className="font-bold text-on-surface">Total Pasivo + Patrimonio</span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs font-bold text-tertiary bg-tertiary/10 px-2 py-1 rounded-full">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Balanceado
                  </span>
                  <span className="text-xl font-headline font-bold text-on-surface">$1,245,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IA Insights */}
        <div className="glass-panel rounded-2xl p-8 border border-primary/20 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">psychology</span>
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface text-lg">Insights Inteligentes</h3>
              <p className="text-sm text-on-surface-variant mt-1 max-w-2xl">
                Análisis predictivo sugiere un excedente de liquidez en el próximo trimestre. Se recomienda evaluar opciones de inversión a corto plazo para optimizar el rendimiento del capital inactivo.
              </p>
            </div>
          </div>
          <button className="shrink-0 flex items-center gap-2 glass-panel rounded-xl px-5 py-3 text-sm font-bold text-on-surface hover:bg-white/10 transition-colors">
            Ver análisis completo
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

      </div>
    </div>
  )
}
