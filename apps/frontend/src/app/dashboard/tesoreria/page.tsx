'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Saldo Global Disponible', value: '$1,250,430', badge: '+5.2% vs mes ant.', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'account_balance', color: 'text-primary' },
  { label: 'Entradas Proyectadas (30d)', value: '$450,200', badge: '+12%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'trending_up', color: 'text-tertiary' },
  { label: 'Salidas Proyectadas (30d)', value: '$320,150', badge: '+8%', badgeColor: 'text-error bg-error/10', icon: 'trending_down', color: 'text-error' },
  { label: 'Capital de Trabajo', value: '$130,050', badge: '-2%', badgeColor: 'text-amber-400 bg-amber-400/10', icon: 'savings', color: 'text-amber-400' },
]

const dias = [
  { dia: 'Lun', entradas: 50, salidas: 30 },
  { dia: 'Mar', entradas: 20, salidas: 60 },
  { dia: 'Mié', entradas: 70, salidas: 15 },
  { dia: 'Jue', entradas: 45, salidas: 40, hoy: true },
  { dia: 'Vie', entradas: 10, salidas: 10 },
  { dia: 'Sáb', entradas: 5, salidas: 5, finde: true },
  { dia: 'Dom', entradas: 5, salidas: 5, finde: true },
]

const inversiones = [
  { instrumento: 'Plazo Fijo 90d', institucion: 'Banco Santander', monto: '$150,000', rendimiento: '4.5%', vencimiento: '15 Nov 2026' },
  { instrumento: 'Fondo Liquidez', institucion: 'BBVA Asset Mgmt', monto: '$85,500', rendimiento: '3.2%', vencimiento: 'Diario' },
]

const sugerencias = [
  { tipo: 'Oportunidad', tipoColor: 'text-tertiary bg-tertiary/10', titulo: 'Pagar Factura #4092 - Proveedor X', desc: 'Descuento pronto pago:', valor: '2.5%', vence: 'Vence en 2 días' },
  { tipo: 'Crítico', tipoColor: 'text-error bg-error/10', titulo: 'Préstamo Bancario - Cuota 12', desc: 'Evitar mora de', valor: '$450', vence: 'Vence Hoy' },
]

const lineas = [
  { nombre: 'Línea Revolvente Citi', pct: 65, color: 'bg-primary', disp: '$35,000', total: '$100,000' },
  { nombre: 'Crédito Pyme Santander', pct: 30, color: 'bg-tertiary', disp: '$350,000', total: '$500,000' },
]

export default function TesoreriaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Tesorería" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Tesorería y Flujo de Caja</h2>
            <p className="text-on-surface-variant mt-1">Gestión centralizada de liquidez, inversiones y obligaciones financieras.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Exportar Informe
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Nueva Operación
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${k.badgeColor}`}>{k.badge}</span>
              </div>
              <p className={`text-3xl font-headline font-bold ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left: Calendar + Inversiones */}
          <div className="xl:col-span-2 space-y-6">
            {/* Calendario de Liquidez */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-headline font-bold text-on-surface">Calendario de Liquidez</h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">Vista consolidada de cobros y pagos</p>
                </div>
                <div className="flex glass-panel rounded-xl p-1 gap-1">
                  {['Diario', 'Semanal', 'Mensual'].map((v, i) => (
                    <button key={v} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${i === 1 ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>{v}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-end gap-3 h-40 px-2">
                {dias.map((d) => (
                  <div key={d.dia} className={`flex-1 flex flex-col items-center gap-1 ${d.finde ? 'opacity-40' : ''}`}>
                    {d.hoy && <span className="text-[9px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">HOY</span>}
                    <div className="w-full flex flex-col items-center gap-0.5 flex-1 justify-end">
                      <div className="w-full bg-error/60 rounded-t-sm hover:bg-error transition-all" style={{ height: `${d.salidas}%` }} />
                      <div className="w-full bg-tertiary/60 rounded-b-sm hover:bg-tertiary transition-all" style={{ height: `${d.entradas}%` }} />
                    </div>
                    <span className={`text-[10px] font-spartan ${d.hoy ? 'text-primary font-bold' : 'text-outline'}`}>{d.dia}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <span className="flex items-center gap-1.5 text-xs text-on-surface-variant"><span className="w-3 h-3 rounded-full bg-tertiary/60" />Cobros Estimados</span>
                <span className="flex items-center gap-1.5 text-xs text-on-surface-variant"><span className="w-3 h-3 rounded-full bg-error/60" />Pagos Comprometidos</span>
              </div>
            </div>

            {/* Inversiones */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-lg font-headline font-bold text-on-surface">Inversiones Activas</h3>
                <button className="text-primary text-sm font-bold hover:underline">Ver todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {['Instrumento', 'Institución', 'Monto', 'Rendimiento', 'Vencimiento'].map((h) => (
                        <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {inversiones.map((inv) => (
                      <tr key={inv.instrumento} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-medium text-on-surface">{inv.instrumento}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{inv.institucion}</td>
                        <td className="px-6 py-4 font-bold text-on-surface">{inv.monto}</td>
                        <td className="px-6 py-4 text-tertiary font-bold">{inv.rendimiento}</td>
                        <td className="px-6 py-4 text-on-surface-variant">{inv.vencimiento}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: IA + Líneas */}
          <div className="space-y-6">
            {/* Optimizador IA */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-primary/20">
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
                  </div>
                  <h3 className="font-headline font-bold text-on-surface">Optimizador IA</h3>
                </div>
                <p className="text-xs text-on-surface-variant mb-4">Sugerencias para maximizar capital de trabajo.</p>
                <div className="space-y-3">
                  {sugerencias.map((s) => (
                    <div key={s.titulo} className="bg-surface-container-highest/50 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.tipoColor}`}>{s.tipo}</span>
                        <span className="text-xs text-outline">{s.vence}</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface mb-1">{s.titulo}</p>
                      <div className="flex justify-between items-end">
                        <p className="text-xs text-on-surface-variant">{s.desc} <span className="text-tertiary font-bold">{s.valor}</span></p>
                        <button className="text-xs text-primary font-bold hover:underline">Ejecutar</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-3 border-t border-white/5">
                <button className="w-full text-center text-xs font-bold text-primary uppercase tracking-widest font-spartan">Ver todas las sugerencias</button>
              </div>
            </div>

            {/* Líneas de Crédito */}
            <div className="glass-panel rounded-2xl p-6">
              <h3 className="text-lg font-headline font-bold text-on-surface mb-6">Líneas de Crédito</h3>
              <div className="space-y-6">
                {lineas.map((l) => (
                  <div key={l.nombre}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-on-surface">{l.nombre}</span>
                      <span className="font-bold text-on-surface">{l.pct}% Usado</span>
                    </div>
                    <div className="w-full h-2.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${l.color}`} style={{ width: `${l.pct}%` }} />
                    </div>
                    <div className="flex justify-between text-xs text-outline mt-1">
                      <span>Disp: {l.disp}</span>
                      <span>Total: {l.total}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2.5 border border-dashed border-white/20 rounded-xl text-sm text-outline font-medium hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                Solicitar Ampliación
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
