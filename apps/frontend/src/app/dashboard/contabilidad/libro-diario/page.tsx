'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'

const insights = [
  {
    icon: 'auto_awesome', color: 'bg-tertiary/10 text-tertiary', border: 'border-l-4 border-tertiary',
    title: 'Perspectivas: Ingresos', badge: '+12%', badgeColor: 'text-tertiary bg-tertiary/10',
    desc: 'Los ingresos mensuales han aumentado un 12% vs el mes anterior. Impulsado por contratos renovados en el sector empresarial.',
    bars: [40, 50, 45, 60, 55, 70, 85, 100],
  },
  {
    icon: 'warning', color: 'bg-amber-500/10 text-amber-400', border: 'border-l-4 border-amber-400',
    title: 'Acción Requerida', badge: null, badgeColor: '',
    desc: '3 transacciones en estado Borrador necesitan revisión. Valor total no contabilizado: $3,700.00.',
    bars: null,
  },
  {
    icon: 'analytics', color: 'bg-primary/10 text-primary', border: 'border-l-4 border-primary',
    title: 'Alerta de Gastos', badge: null, badgeColor: '',
    desc: 'Pico de gastos en "Marketing" esta semana. "Gasto Publicitario" ($2,500.00) es 250% más alto que el promedio.',
    bars: null,
  },
]

type EstadoKey = 'Validado' | 'Borrador' | 'Manual' | 'Pendiente'
const estadoVariant: Record<EstadoKey, 'success' | 'warning' | 'error'> = {
  Validado: 'success', Borrador: 'warning', Manual: 'warning', Pendiente: 'error',
}

const asientos = [
  { fecha: 'Oct 24, 2023', hora: '09:42 AM', desc: 'Compra insumos oficina', glosa: 'Detectado: Papel bond, tintas en factura #F001-2390', cuenta: '6205 - Gastos Oficina', tipo: 'Gastos Operativos', debe: '$125.50', haber: '-', estado: 'Validado' as EstadoKey, ia: true },
  { fecha: 'Oct 24, 2023', hora: '08:15 AM', desc: 'Pago Servicios Básicos', glosa: 'Transferencia bancaria #99238 Energía Eléctrica', cuenta: '6210 - Servicios Públicos', tipo: 'Gastos Operativos', debe: '$450.00', haber: '-', estado: 'Manual' as EstadoKey, ia: false },
  { fecha: 'Oct 23, 2023', hora: '04:30 PM', desc: 'Venta Mostrador POS #004', glosa: 'Ingreso detectado por integración POS. Verificar retenciones.', cuenta: '4101 - Ventas Mercadería', tipo: 'Ingresos Operativos', debe: '-', haber: '$1,230.00', estado: 'Pendiente' as EstadoKey, ia: true },
  { fecha: 'Oct 23, 2023', hora: '02:15 PM', desc: 'Suscripción Software', glosa: 'Detectado: Factura recurrente AWS Services', cuenta: '6220 - Licencias Software', tipo: 'Gastos Tecnológicos', debe: '$89.99', haber: '-', estado: 'Validado' as EstadoKey, ia: true },
  { fecha: 'Oct 22, 2023', hora: '11:00 AM', desc: 'Tarifa Consultoría', glosa: 'Pago cliente Acme Corp - Proyecto Q4', cuenta: '4102 - Ingresos Servicios', tipo: 'Ingresos Operativos', debe: '-', haber: '$5,000.00', estado: 'Validado' as EstadoKey, ia: false },
]

export default function LibroDiarioPage() {
  const [busqueda, setBusqueda] = useState('')
  const [selected, setSelected] = useState(asientos[0])

  const filtrados = asientos.filter(
    (a) => a.desc.toLowerCase().includes(busqueda.toLowerCase()) || a.cuenta.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-outline mb-1">
              <span>Contabilidad</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              <span className="text-on-surface font-medium">Libro Diario</span>
            </div>
            <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
              Libro Diario
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                IA Activada
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 glass-panel rounded-xl text-sm font-medium text-on-surface border border-white/10 hover:bg-white/5 transition-colors">
              <span className="material-symbols-outlined text-[18px] text-outline">download</span>
              Exportar Excel
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
              <span className="material-symbols-outlined text-[18px]">lock</span>
              Cierre Mensual
            </button>
          </div>
        </div>

        {/* AI Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((ins) => (
            <GlassCard key={ins.title} className={`p-5 relative overflow-hidden ${ins.border}`}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className={`p-1.5 rounded-xl ${ins.color}`}>
                    <span className="material-symbols-outlined text-[18px]">{ins.icon}</span>
                  </span>
                  <h3 className="font-bold text-on-surface text-sm">{ins.title}</h3>
                </div>
                {ins.badge && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ins.badgeColor}`}>{ins.badge}</span>
                )}
              </div>
              <p className="text-sm text-outline leading-relaxed">{ins.desc}</p>
              {ins.bars && (
                <div className="h-8 w-full flex items-end gap-1 mt-3 opacity-70">
                  {ins.bars.map((h, i) => (
                    <div key={i} className="flex-1 bg-tertiary/40 rounded-t-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Main Table + AI Panel */}
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          {/* Table */}
          <div className="flex-1 w-full">
            <GlassCard className="overflow-hidden">
              <div className="p-4 border-b border-white/5 flex flex-col md:flex-row gap-3 items-center justify-between">
                <div className="relative w-full md:w-80">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                  <input
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    placeholder="Buscar asiento o cuenta..."
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 glass-panel rounded-xl text-sm text-on-surface border border-white/10 hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-[18px] text-outline">calendar_today</span>
                    Oct 2023
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 glass-panel rounded-xl text-sm text-on-surface border border-white/10 hover:bg-white/5 transition-colors">
                    <span className="material-symbols-outlined text-[18px] text-outline">filter_list</span>
                    Filtro
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                  <thead className="bg-surface-container-low">
                    <tr>
                      {['Fecha', 'Detalle & Glosa IA', 'Cuenta Contable', 'Debe', 'Haber', 'Estado', ''].map((h) => (
                        <th key={h} className="px-4 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtrados.map((a, i) => (
                      <tr
                        key={i}
                        onClick={() => setSelected(a)}
                        className={`cursor-pointer transition-colors hover:bg-white/5 ${selected === a ? 'bg-primary/5 border-l-2 border-primary' : ''} ${a.estado === 'Pendiente' ? 'border-l-2 border-amber-400' : ''}`}
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-on-surface text-sm">{a.fecha}</p>
                          <p className="text-xs text-outline">{a.hora}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-start gap-2">
                            <span className={`material-symbols-outlined text-[18px] mt-0.5 ${a.ia ? 'text-primary' : 'text-outline'}`}>
                              {a.ia ? 'auto_awesome' : 'person'}
                            </span>
                            <div>
                              <p className="font-medium text-on-surface text-sm">{a.desc}</p>
                              <p className="text-xs text-outline italic">{a.glosa}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-on-surface text-sm">{a.cuenta}</p>
                          <p className="text-xs text-outline">{a.tipo}</p>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-sm text-on-surface">{a.debe}</td>
                        <td className="px-4 py-3 text-right font-mono text-sm text-on-surface">{a.haber}</td>
                        <td className="px-4 py-3">
                          <Badge variant={estadoVariant[a.estado]}>{a.estado}</Badge>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button className="text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[20px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-white/5 flex items-center justify-between">
                <p className="text-sm text-outline">
                  Mostrando <span className="text-on-surface font-medium">1</span> – <span className="text-on-surface font-medium">{filtrados.length}</span> de <span className="text-on-surface font-medium">1,204</span> asientos
                </p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((p) => (
                    <button key={p} className={`w-8 h-8 rounded-lg text-sm font-bold transition-colors ${p === 1 ? 'bg-primary text-on-primary' : 'text-outline hover:text-on-surface hover:bg-white/5'}`}>{p}</button>
                  ))}
                  <span className="text-outline px-2">...</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* AI Panel */}
          <div className="w-full xl:w-[360px] shrink-0">
            <GlassCard className="overflow-hidden sticky top-24">
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <span className="material-symbols-outlined">psychology</span>
                  <h3 className="font-headline">Análisis Inteligente</h3>
                </div>
                <button className="text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="p-5 space-y-6 overflow-y-auto max-h-[600px]">
                {/* Selected entry */}
                <div>
                  <p className="text-[10px] font-spartan font-bold text-outline uppercase tracking-widest mb-2">Asiento Seleccionado</p>
                  <div className="p-4 bg-surface-container rounded-xl border border-white/5">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-on-surface">{selected.desc}</h4>
                      <span className="text-primary font-mono font-bold text-sm">{selected.debe !== '-' ? selected.debe : selected.haber}</span>
                    </div>
                    <p className="text-xs text-outline">{selected.fecha} • {selected.hora}</p>
                  </div>
                </div>

                {/* AI Reasoning */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-spartan font-bold text-outline uppercase tracking-widest">Razonamiento IA</p>
                    <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full border border-tertiary/20">98% Confianza</span>
                  </div>
                  <div className="pl-4 border-l-2 border-primary text-sm text-on-surface-variant leading-relaxed">
                    <p className="mb-2">El sistema analizó el documento adjunto y detectó palabras clave relacionadas con la transacción.</p>
                    <p>Basado en el historial de compras, la cuenta sugerida es <span className="text-primary font-medium">{selected.cuenta}</span>.</p>
                  </div>
                </div>

                {/* Suggested account */}
                <div>
                  <p className="text-[10px] font-spartan font-bold text-outline uppercase tracking-widest mb-3">Cuenta Sugerida</p>
                  <div className="flex items-center p-3 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-primary text-sm">{selected.cuenta.split(' - ')[0]}</span>
                        <span className="material-symbols-outlined text-[16px] text-primary">check_circle</span>
                      </div>
                      <p className="font-medium text-on-surface text-sm">{selected.cuenta.split(' - ')[1]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 border-t border-white/5 flex flex-col gap-2">
                <button className="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  Confirmar Validación
                </button>
                <button className="w-full py-2.5 px-4 rounded-xl text-error font-medium text-sm flex items-center justify-center gap-2 hover:bg-error/5 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">flag</span>
                  Reportar Error
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
