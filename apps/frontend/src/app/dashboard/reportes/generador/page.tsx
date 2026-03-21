'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const plantillas = [
  { nombre: 'Reporte de Ventas Mensual', icon: 'point_of_sale', color: 'text-primary bg-primary/10', desc: 'Resumen completo de ventas, facturas y clientes del mes.' },
  { nombre: 'Inventario Valorizado', icon: 'inventory_2', color: 'text-tertiary bg-tertiary/10', desc: 'Stock actual con valorización a precio de costo y venta.' },
  { nombre: 'Nómina del Período', icon: 'payments', color: 'text-secondary bg-secondary/10', desc: 'Detalle de salarios, deducciones y beneficios LOTTT.' },
  { nombre: 'Compras por Proveedor', icon: 'shopping_cart', color: 'text-amber-400 bg-amber-500/10', desc: 'Órdenes de compra agrupadas por proveedor y categoría.' },
  { nombre: 'Asistencia del Personal', icon: 'group', color: 'text-outline bg-outline/10', desc: 'Registro de entradas, salidas y ausencias del período.' },
  { nombre: 'Reporte Ejecutivo', icon: 'analytics', color: 'text-primary bg-primary/10', desc: 'KPIs consolidados para presentación a directivos.' },
]

const formatos = ['PDF', 'Excel', 'CSV', 'JSON']

export default function GeneradorReportesPage() {
  const [selected, setSelected] = useState<number | null>(null)
  const [formato, setFormato] = useState('PDF')
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [generating, setGenerating] = useState(false)
  const [done, setDone] = useState(false)

  const generate = () => {
    if (selected === null) return
    setGenerating(true)
    setTimeout(() => { setGenerating(false); setDone(true); setTimeout(() => setDone(false), 3000) }, 2000)
  }

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Generador de Reportes" />
      <div className="flex-1 p-8 max-w-[1400px] mx-auto w-full space-y-8">

        {/* Header */}
        <div>
          <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Generador de Reportes Corporativos</h1>
          <p className="text-on-surface-variant text-sm mt-1">Genera reportes personalizados en múltiples formatos con datos en tiempo real.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Plantillas */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-on-surface">Selecciona una Plantilla</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {plantillas.map((p, i) => (
                <div key={p.nombre} onClick={() => setSelected(i)}
                  className={`glass-panel rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/10 ${selected === i ? 'ring-2 ring-primary/50 bg-white/10' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${p.color}`}>
                    <span className="material-symbols-outlined">{p.icon}</span>
                  </div>
                  <h4 className="font-semibold text-on-surface text-sm mb-1">{p.nombre}</h4>
                  <p className="text-xs text-outline leading-snug">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Configuración */}
          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-5 h-fit sticky top-24">
            <h3 className="font-semibold text-on-surface">Configurar Reporte</h3>

            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Plantilla Seleccionada</label>
              <div className={`p-3 rounded-xl border ${selected !== null ? 'bg-primary/5 border-primary/20' : 'bg-surface-container border-white/5'}`}>
                <p className="text-sm font-medium text-on-surface">
                  {selected !== null ? plantillas[selected].nombre : 'Ninguna seleccionada'}
                </p>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Período — Desde</label>
              <input type="date" value={desde} onChange={e => setDesde(e.target.value)}
                className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50" />
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Período — Hasta</label>
              <input type="date" value={hasta} onChange={e => setHasta(e.target.value)}
                className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50" />
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Formato de Salida</label>
              <div className="flex gap-2 flex-wrap">
                {formatos.map((f) => (
                  <button key={f} onClick={() => setFormato(f)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${formato === f ? 'bg-primary/20 text-primary border-primary/20' : 'border-white/10 text-outline hover:text-on-surface'}`}>
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={generate} disabled={selected === null || generating}
              className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${done ? 'bg-tertiary/20 text-tertiary border border-tertiary/20' : 'bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 disabled:opacity-40'}`}>
              {generating ? (
                <>
                  <span className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  Generando...
                </>
              ) : done ? (
                <><span className="material-symbols-outlined text-[18px]">check</span>Reporte Listo</>
              ) : (
                <><span className="material-symbols-outlined text-[18px]">download</span>Generar Reporte</>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
