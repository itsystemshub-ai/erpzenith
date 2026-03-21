'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const impuestos = [
  { nombre: 'IVA (16%)', base: 4850000, monto: 776000, vencimiento: '2025-01-15', estado: 'Pendiente', tipo: 'mensual' },
  { nombre: 'ISLR Retenciones', base: 2400000, monto: 240000, vencimiento: '2025-01-05', estado: 'Pendiente', tipo: 'quincenal' },
  { nombre: 'IGTF (3%)', base: 1200000, monto: 36000, vencimiento: '2025-01-10', estado: 'Pendiente', tipo: 'mensual' },
  { nombre: 'Impuesto Municipal', base: 4850000, monto: 97000, vencimiento: '2025-01-20', estado: 'Pendiente', tipo: 'mensual' },
  { nombre: 'IVA Diciembre 2024', base: 4200000, monto: 672000, vencimiento: '2024-12-15', estado: 'Pagado', tipo: 'mensual' },
  { nombre: 'ISLR Anual 2023', base: 18000000, monto: 1800000, vencimiento: '2024-03-31', estado: 'Pagado', tipo: 'anual' },
]

const estadoBadge: Record<string, string> = {
  Pendiente: 'bg-yellow-500/20 text-yellow-400',
  Pagado: 'bg-tertiary/20 text-tertiary',
  Vencido: 'bg-error/20 text-error',
}

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

export default function FiscalPage() {
  const [tab, setTab] = useState<'declaraciones' | 'retenciones' | 'calendario'>('declaraciones')

  const pendientes = impuestos.filter(i => i.estado === 'Pendiente')
  const totalPendiente = pendientes.reduce((s, i) => s + i.monto, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Consolidador Fiscal</h2>
            <p className="text-on-surface-variant mt-1">Gestión de impuestos, retenciones y declaraciones</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
            Nueva Declaración
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Pendiente', value: fmt(totalPendiente), icon: 'pending_actions', color: 'text-yellow-400' },
            { label: 'Declaraciones Pendientes', value: String(pendientes.length), icon: 'assignment_late', color: 'text-orange-400' },
            { label: 'Próximo Vencimiento', value: '5 días', icon: 'event_upcoming', color: 'text-error' },
            { label: 'Cumplimiento Fiscal', value: '94%', icon: 'verified', color: 'text-tertiary' },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${k.color}`}>{k.icon}</span>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
                <p className="text-xs text-outline">{k.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['declaraciones', 'retenciones', 'calendario'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'declaraciones' ? 'Declaraciones' : t === 'retenciones' ? 'Retenciones' : 'Calendario Fiscal'}
            </button>
          ))}
        </div>

        {tab === 'declaraciones' && (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Impuesto', 'Base Imponible', 'Monto', 'Vencimiento', 'Tipo', 'Estado', 'Acciones'].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {impuestos.map((imp, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-on-surface">{imp.nombre}</td>
                    <td className="px-6 py-4 text-on-surface-variant font-mono">{fmt(imp.base)}</td>
                    <td className="px-6 py-4 font-bold text-on-surface font-mono">{fmt(imp.monto)}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{imp.vencimiento}</td>
                    <td className="px-6 py-4">
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-on-surface-variant capitalize">{imp.tipo}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${estadoBadge[imp.estado]}`}>{imp.estado}</span>
                    </td>
                    <td className="px-6 py-4">
                      {imp.estado === 'Pendiente' && (
                        <button className="text-xs text-primary hover:text-primary/80 font-bold transition-colors">Declarar</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'retenciones' && (
          <div className="space-y-4">
            {[
              { proveedor: 'Distribuidora ABC', rif: 'J-12345678-9', monto: 850000, retencion: 85000, tipo: 'ISLR 10%', fecha: '2024-12-15' },
              { proveedor: 'Servicios Tech S.A.', rif: 'J-98765432-1', monto: 320000, retencion: 32000, tipo: 'ISLR 10%', fecha: '2024-12-14' },
              { proveedor: 'Logística Express', rif: 'J-55544433-2', monto: 180000, retencion: 18000, tipo: 'ISLR 10%', fecha: '2024-12-13' },
            ].map((r, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-on-surface">{r.proveedor}</p>
                  <p className="text-xs text-outline mt-1">RIF: {r.rif} · {r.fecha}</p>
                </div>
                <div className="flex items-center gap-8 text-sm">
                  <div className="text-right">
                    <p className="text-outline text-xs">Monto Pagado</p>
                    <p className="font-bold text-on-surface font-mono">{fmt(r.monto)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-outline text-xs">Retención ({r.tipo})</p>
                    <p className="font-bold text-error font-mono">{fmt(r.retencion)}</p>
                  </div>
                  <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">Comprobante</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'calendario' && (
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-headline font-bold text-on-surface mb-5">Enero 2025 — Obligaciones Fiscales</h3>
            <div className="space-y-3">
              {[
                { dia: '05 Ene', obligacion: 'ISLR Retenciones Quincena 2 Dic', monto: fmt(240000), urgencia: 'alta' },
                { dia: '10 Ene', obligacion: 'IGTF Diciembre 2024', monto: fmt(36000), urgencia: 'media' },
                { dia: '15 Ene', obligacion: 'IVA Diciembre 2024', monto: fmt(776000), urgencia: 'alta' },
                { dia: '20 Ene', obligacion: 'Impuesto Municipal Diciembre', monto: fmt(97000), urgencia: 'baja' },
                { dia: '31 Ene', obligacion: 'ISLR Retenciones Quincena 1 Ene', monto: fmt(240000), urgencia: 'baja' },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold ${e.urgencia === 'alta' ? 'bg-error/20 text-error' : e.urgencia === 'media' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-outline'}`}>
                    {e.dia.split(' ')[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-on-surface">{e.obligacion}</p>
                    <p className="text-xs text-outline">{e.dia}</p>
                  </div>
                  <span className="font-bold text-on-surface font-mono text-sm">{e.monto}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
