'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const lotes = [
  { producto: 'Leche UHT Entera 1L', sku: 'DAIRY-001', lote: 'Lote #8829', ubicacion: 'Bodega Central - A2', vencimiento: '15 Oct 2024', venceEn: 'Vence en 2 días', factura: 'FAC-2023-902', estado: 'Por Vencer', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  { producto: 'Laptop Dell XPS 15', sku: 'ELEC-XPS15', lote: 'SN-99887766', ubicacion: 'Tienda Norte - Vitrina', vencimiento: '12 Oct 2026', venceEn: 'Garantía Extendida', factura: 'FAC-2023-001', estado: 'En Stock', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20' },
  { producto: 'Yogur Natural 150g', sku: 'DAIRY-045', lote: 'Lote #9921', ubicacion: 'Bodega Frío - F1', vencimiento: '18 Oct 2024', venceEn: 'Vence en 5 días', factura: 'FAC-2023-881', estado: 'Por Vencer', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  { producto: 'Zapatillas Running Pro', sku: 'SHOE-RUN-01', lote: 'Lote #SP-2023', ubicacion: 'Tienda Centro - Depósito', vencimiento: 'N/A', venceEn: 'No Perecedero', factura: 'FAC-2022-105', estado: 'Vendido', estadoColor: 'bg-outline/10 text-outline border-outline/20' },
  { producto: 'Cámara DSLR Alpha', sku: 'CAM-009', lote: 'SN-CAM-7728', ubicacion: 'Bodega Seguridad', vencimiento: '01 Sep 2024', venceEn: 'Garantía Expirada', factura: 'FAC-2021-500', estado: 'Riesgo', estadoColor: 'bg-error/10 text-error border-error/20' },
]

const alertas = [
  { icon: 'warning', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', titulo: 'Lote #8829 - Leche UHT', desc: 'Vence en 2 días. Stock restante: 50 un.', accion: 'Aplicar Descuento' },
  { icon: 'error', color: 'text-error', bg: 'bg-error/10 border-error/20', titulo: 'Serial #SN-2291 - Laptop Dell', desc: 'Garantía expira hoy. Revisar estado.', accion: null },
  { icon: 'inventory', color: 'text-outline', bg: 'bg-outline/10 border-outline/20', titulo: 'Lote #9921 - Yogur Natural', desc: 'Rotación baja detectada. Vence en 5 días.', accion: null },
]

const barras = [
  { label: 'Lote A-10', h: 'h-20', color: 'bg-primary' },
  { label: 'Lote B-22', h: 'h-32', color: 'bg-amber-500' },
  { label: 'Lote C-90', h: 'h-12', color: 'bg-primary' },
  { label: 'Lote D-05', h: 'h-44', color: 'bg-error' },
  { label: 'Lote E-12', h: 'h-16', color: 'bg-primary' },
]

export default function TrazabilidadPage() {
  const [search, setSearch] = useState('')
  const filtered = lotes.filter(l => l.producto.toLowerCase().includes(search.toLowerCase()) || l.lote.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Trazabilidad de Lotes y Seriales" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Trazabilidad de Lotes y Seriales</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Gestión de productos perecederos y electrónicos. Monitoreo de fechas de vencimiento, garantías y rotación de stock.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>Exportar
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>Nuevo Lote
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Lotes Activos', valor: '1,245', badge: '+5%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'qr_code_2', iconColor: 'text-primary bg-primary/10' },
            { label: 'Próximos a Vencer (7d)', valor: '48', badge: '+12%', badgeColor: 'text-amber-400 bg-amber-500/10', icon: 'event_busy', iconColor: 'text-amber-400 bg-amber-500/10' },
            { label: 'Valor en Riesgo', valor: '$12,450', badge: '-2%', badgeColor: 'text-error bg-error/10', icon: 'attach_money', iconColor: 'text-error bg-error/10' },
            { label: 'Productos Serializados', valor: '850', badge: '+8%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'barcode_reader', iconColor: 'text-primary bg-primary/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${k.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-on-surface">{k.valor}</p>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded mb-1 ${k.badgeColor}`}>{k.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chart + Alertas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                  <span className="text-[10px] font-spartan uppercase tracking-widest text-primary">Análisis IA</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">Predicción de Rotación de Lotes</h3>
                <p className="text-on-surface-variant text-xs">Proyección de salida de stock vs. fecha de caducidad para lotes críticos.</p>
              </div>
            </div>
            <div className="flex items-end justify-between gap-2 h-48 px-2 pb-2 pt-4 relative">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-2 pb-8 pt-4">
                {[0,1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white/5" />)}
              </div>
              {barras.map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-2 z-10 flex-1">
                  <div className="w-full flex items-end justify-center h-44">
                    <div className={`w-full ${b.color} rounded-t-lg ${b.h} transition-all duration-500 hover:opacity-80`} />
                  </div>
                  <span className="text-[10px] text-on-surface-variant font-spartan">{b.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-4 text-xs justify-center">
              {[['bg-primary','Rotación Saludable'],['bg-amber-500','Riesgo Moderado'],['bg-error','Riesgo Alto']].map(([c,l]) => (
                <div key={l} className="flex items-center gap-2">
                  <div className={`w-3 h-3 ${c} rounded-sm`} />
                  <span className="text-on-surface-variant">{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-400">notifications_active</span>
              Alertas Urgentes
            </h3>
            <div className="flex flex-col gap-3 flex-1">
              {alertas.map((a, i) => (
                <div key={i} className={`p-3 rounded-xl border flex gap-3 items-start ${a.bg}`}>
                  <span className={`material-symbols-outlined text-[20px] mt-0.5 ${a.color}`}>{a.icon}</span>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{a.titulo}</p>
                    <p className="text-xs text-on-surface-variant mt-1">{a.desc}</p>
                    {a.accion && <button className="mt-2 text-xs font-semibold text-primary hover:underline">{a.accion}</button>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <h3 className="font-semibold text-on-surface">Detalle de Inventario</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar..." className="pl-9 pr-4 py-2 bg-surface-container-highest border-none rounded-xl text-sm text-on-surface focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['Producto','Lote / Serial','Ubicación','Vencimiento','Factura','Estado',''].map(h => (
                    <th key={h} className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((l, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-on-surface">{l.producto}</p>
                      <p className="text-xs text-outline">SKU: {l.sku}</p>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2 py-1 rounded bg-surface-container-highest text-xs font-mono text-on-surface-variant border border-white/10">{l.lote}</span>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{l.ubicacion}</td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-on-surface">{l.vencimiento}</p>
                      <p className="text-[10px] text-outline">{l.venceEn}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-primary">{l.factura}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${l.estadoColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{l.estado}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-outline">Mostrando {filtered.length} de 1,245 registros</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5 disabled:opacity-40" disabled>Anterior</button>
              <button className="px-3 py-1 text-xs bg-primary/20 text-primary rounded-lg">1</button>
              <button className="px-3 py-1 text-xs border border-white/10 rounded-lg text-outline hover:bg-white/5">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
