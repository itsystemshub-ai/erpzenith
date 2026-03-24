'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const cotizaciones = [
  { cliente: 'Corporación Nova S.A.', folio: '#COT-2024-0842', estado: 'Aprobada', estadoColor: 'bg-primary/10 text-primary border-primary/20', borderColor: 'border-l-primary', fecha: '12 Oct 2024', total: '4,250.00', icon: 'corporate_fare', iconColor: 'text-primary bg-primary/10' },
  { cliente: 'Elena Rodriguez', folio: '#COT-2024-0845', estado: 'Enviada', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', borderColor: 'border-l-tertiary', fecha: '11 Oct 2024', total: '890.00', icon: 'person', iconColor: 'text-tertiary bg-tertiary/10' },
  { cliente: 'Minimarket El Faro', folio: '#COT-2024-0820', estado: 'Vencida', estadoColor: 'bg-error/10 text-error border-error/20', borderColor: 'border-l-error', fecha: '01 Oct 2024', total: '1,420.00', icon: 'store', iconColor: 'text-error bg-error/10' },
  { cliente: 'TechSolutions C.A.', folio: '#COT-2024-0850', estado: 'Borrador', estadoColor: 'bg-outline/10 text-outline border-outline/20', borderColor: 'border-l-outline', fecha: 'Hoy', total: '12,500.00', icon: 'edit_note', iconColor: 'text-outline bg-outline/10' },
]

const partidas = [
  { nombre: 'Servidor Enterprise X1', precio: '3,500.00' },
  { nombre: 'Instalación & Config.', precio: '750.00' },
]

export default function CotizacionesPage() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(0)
  const filtered = cotizaciones.filter(c =>
    c.cliente.toLowerCase().includes(search.toLowerCase()) ||
    c.folio.toLowerCase().includes(search.toLowerCase())
  )
  const cot = cotizaciones[selected]

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Cotizaciones y Pedidos" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Cotizaciones</h1>
            <p className="text-on-surface-variant text-sm mt-1">Gestión de propuestas comerciales y conversión a ventas.</p>
          </div>
          <button className="flex items-center gap-2 px-5 h-11 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>Nueva Cotización
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista */}
          <div className="lg:col-span-2 space-y-4">
            {/* Filtros */}
            <div className="glass-panel rounded-2xl p-4 flex flex-wrap gap-4 items-center">
              <div className="flex-1 min-w-[200px] relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por cliente o folio..."
                  className="w-full bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2 text-sm text-on-surface focus:ring-1 focus:ring-primary/50 placeholder:text-outline" />
              </div>
              <select className="bg-surface-container-highest border-none rounded-xl px-4 py-2 text-sm text-on-surface-variant focus:ring-1 focus:ring-primary/50 [&>option]:bg-[#222a3d] [&>option]:text-on-surface">
                <option>Todos los Vendedores</option>
                <option>Alejandro R.</option>
                <option>Sofia M.</option>
              </select>
            </div>

            {/* Header columnas */}
            <div className="grid grid-cols-6 px-4 text-[10px] uppercase tracking-widest text-outline font-spartan">
              <div className="col-span-2">Cliente / Folio</div>
              <div className="text-center">Estado</div>
              <div className="text-right">Fecha</div>
              <div className="text-right">Total (USD)</div>
              <div className="text-right">Acciones</div>
            </div>

            {/* Filas */}
            {filtered.map((c, i) => (
              <div key={i} onClick={() => setSelected(cotizaciones.indexOf(c))}
                className={`glass-panel rounded-2xl p-4 grid grid-cols-6 items-center hover:bg-white/[0.06] transition-all cursor-pointer border-l-4 ${c.borderColor}`}>
                <div className="col-span-2 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${c.iconColor}`}>
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface text-sm">{c.cliente}</p>
                    <p className="text-xs text-outline">{c.folio}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${c.estadoColor}`}>{c.estado}</span>
                </div>
                <div className="text-right text-sm text-on-surface-variant">{c.fecha}</div>
                <div className="text-right font-bold text-on-surface text-sm">$ {c.total}</div>
                <div className="flex justify-end gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-outline">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-outline">
                    <span className="material-symbols-outlined text-[18px]">more_vert</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Panel detalle */}
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col sticky top-24 h-fit">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 border-b border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Vista Rápida</span>
              <h3 className="text-xl font-bold text-on-surface mt-2 leading-tight">{cot.cliente}</h3>
              <p className="text-sm text-primary/70">{cot.folio}</p>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-outline mb-3">Partidas</p>
                <div className="space-y-2">
                  {partidas.map((p) => (
                    <div key={p.nombre} className="flex justify-between items-center text-sm">
                      <span className="text-on-surface-variant">{p.nombre}</span>
                      <span className="font-medium text-on-surface">$ {p.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface-container rounded-xl p-4 space-y-2">
                <div className="flex justify-between text-xs text-outline">
                  <span>Subtotal</span><span>$ 4,250.00</span>
                </div>
                <div className="flex justify-between text-xs text-outline">
                  <span>IVA (16%)</span><span>$ 680.00</span>
                </div>
                <div className="pt-2 border-t border-white/5 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold uppercase text-primary">Total Estimado</p>
                    <p className="text-2xl font-bold text-on-surface">$ 4,930.00</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase text-outline">Tasa BCV</p>
                    <p className="text-sm font-medium text-primary">Bs. 179,945</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="glass-panel rounded-xl p-3 text-center">
                  <p className="text-[10px] text-outline uppercase tracking-widest">Validez</p>
                  <p className="text-sm font-bold text-on-surface">15 Días</p>
                </div>
                <div className="glass-panel rounded-xl p-3 text-center">
                  <p className="text-[10px] text-outline uppercase tracking-widest">Estado</p>
                  <p className="text-sm font-bold text-on-surface">{cot.estado}</p>
                </div>
              </div>
              <button className="w-full border border-primary/30 text-primary py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors text-sm">
                <span className="material-symbols-outlined">receipt_long</span>Convertir a Factura
              </button>
              {/* IA */}
              <div className="glass-panel rounded-xl p-4 border-l-4 border-tertiary">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-tertiary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  <p className="text-xs font-bold text-on-surface">Sugerencia IA</p>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Este cliente suele cerrar ventas con un <span className="text-tertiary font-bold">descuento del 5%</span> en servicios. Considera aplicarlo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
