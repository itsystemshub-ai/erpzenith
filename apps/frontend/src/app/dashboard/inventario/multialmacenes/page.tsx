'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const transferencias = [
  { id: '#TR-2024-882', origen: 'Bodega Central', origenColor: 'bg-primary', destino: 'Zona Despacho', items: 50, skus: '3 SKUs distintos', responsable: 'Ana M.', estado: 'En Tránsito', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20', dot: 'bg-amber-500 animate-pulse' },
  { id: '#TR-2024-881', origen: 'Almacén Sur', origenColor: 'bg-orange-400', destino: 'Bodega Central', items: 1200, skus: '1 SKU (Pallet)', responsable: 'Carlos R.', estado: 'Recibido', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', dot: 'bg-tertiary' },
  { id: '#TR-2024-880', origen: 'Bodega Central', origenColor: 'bg-primary', destino: 'Almacén Norte', items: 15, skus: 'Devolución', responsable: 'Juan D.', estado: 'Pendiente', estadoColor: 'bg-outline/10 text-outline border-outline/20', dot: 'bg-outline' },
  { id: '#TR-2024-879', origen: 'Centro Despacho', origenColor: 'bg-tertiary', destino: 'Cliente (Externo)', items: 200, skus: 'Salida Final', responsable: 'Maria S.', estado: 'Completado', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', dot: 'bg-tertiary' },
]

const zonas = [
  { nombre: 'Picking - Nivel 1', icon: 'shelves', iconColor: 'text-primary', pct: 45, pctColor: 'bg-primary', estado: 'Óptimo', estadoColor: 'text-tertiary bg-tertiary/10' },
  { nombre: 'Paletización - Zona B', icon: 'pallet', iconColor: 'text-amber-400', pct: 88, pctColor: 'bg-amber-500', estado: 'Alto', estadoColor: 'text-amber-400 bg-amber-500/10' },
  { nombre: 'Despacho - Muelle 4', icon: 'local_shipping', iconColor: 'text-outline', pct: 60, pctColor: 'bg-primary', estado: 'Activo', estadoColor: 'text-primary bg-primary/10' },
]

const tabs = ['Transferencias', 'Inventario Global', 'Historial']

export default function MultialmacenesPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [search, setSearch] = useState('')
  const filtered = transferencias.filter(t =>
    t.id.toLowerCase().includes(search.toLowerCase()) ||
    t.origen.toLowerCase().includes(search.toLowerCase()) ||
    t.destino.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Multialmacenes y Logística" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Gestión de Multialmacenes y Logística</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Vista unificada de ubicaciones físicas, gestión de stock por niveles de estantería y control de transferencias internas.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>Exportar
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">add</span>Nueva Transferencia
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Almacenes', valor: '12', badge: 'Estable', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'warehouse', iconColor: 'text-primary bg-primary/10' },
            { label: 'Transferencias Activas', valor: '45', badge: '+12%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'local_shipping', iconColor: 'text-amber-400 bg-amber-500/10' },
            { label: 'Ocupación Global', valor: '78%', badge: null, badgeColor: '', icon: 'inventory_2', iconColor: 'text-tertiary bg-tertiary/10', progress: 78 },
            { label: 'Alertas IA', valor: '3', badge: 'Reabastecimiento', badgeColor: 'text-primary bg-primary/10', icon: 'auto_awesome', iconColor: 'text-primary bg-primary/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${k.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
              </div>
              <p className="text-3xl font-bold text-on-surface">{k.valor}</p>
              {k.progress !== undefined && (
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full" style={{ width: `${k.progress}%` }} />
                </div>
              )}
              {k.badge && <span className={`text-xs font-bold px-2 py-0.5 rounded w-fit ${k.badgeColor}`}>{k.badge}</span>}
            </div>
          ))}
        </div>

        {/* Map + Zonas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-2xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/5 flex justify-between items-center">
              <h3 className="font-semibold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">map</span>Mapa de Ubicaciones Físicas
              </h3>
            </div>
            <div className="relative w-full h-72 bg-surface-container-highest flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5" />
              {/* Pins */}
              <div className="absolute top-1/3 left-1/4 group cursor-pointer z-10">
                <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-primary/30 animate-pulse" />
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-44 glass-panel p-3 rounded-xl z-20">
                  <p className="font-bold text-sm text-on-surface">Bodega Central</p>
                  <p className="text-xs text-outline mt-1">Ocupación: <span className="text-tertiary font-medium">85%</span></p>
                  <p className="text-xs text-outline">Alertas: <span className="text-error font-medium">2 Críticas</span></p>
                </div>
              </div>
              <div className="absolute top-1/2 right-1/3 group cursor-pointer z-10">
                <div className="w-4 h-4 bg-tertiary rounded-full ring-4 ring-tertiary/30" />
                <div className="absolute bottom-full mb-2 hidden group-hover:block w-44 glass-panel p-3 rounded-xl z-20">
                  <p className="font-bold text-sm text-on-surface">Centro de Despacho</p>
                  <p className="text-xs text-outline mt-1">Picking: <span className="text-tertiary font-medium">Activo</span></p>
                  <p className="text-xs text-outline">Envíos Hoy: <span className="text-on-surface font-medium">124</span></p>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-1/2 z-10">
                <div className="w-4 h-4 bg-amber-500 rounded-full ring-4 ring-amber-500/30" />
              </div>
              <p className="text-outline text-sm">Mapa de almacenes — Venezuela</p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl flex flex-col">
            <div className="p-4 border-b border-white/5">
              <h3 className="font-semibold text-on-surface">Estado de Zonas</h3>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {zonas.map((z) => (
                <div key={z.nombre} className="p-3 bg-surface-container rounded-xl border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-sm ${z.iconColor}`}>{z.icon}</span>
                      <span className="text-sm font-semibold text-on-surface">{z.nombre}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${z.estadoColor}`}>{z.estado}</span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full mb-1">
                    <div className={`${z.pctColor} h-full rounded-full`} style={{ width: `${z.pct}%` }} />
                  </div>
                  <div className="flex justify-between text-xs text-outline">
                    <span>{z.pct}% Lleno</span>
                  </div>
                </div>
              ))}
              <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-0.5">psychology</span>
                  <div>
                    <p className="text-xs font-semibold text-on-surface mb-1">Sugerencia IA</p>
                    <p className="text-xs text-on-surface-variant leading-snug">Mover 50 unidades de "Laptop Pro X" de Zona B a Picking Nivel 1 para cubrir demanda prevista.</p>
                    <button className="mt-2 text-xs text-primary hover:underline font-semibold">Ejecutar Movimiento</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 border-b border-white/5 gap-4">
            <div className="flex space-x-1 bg-surface-container p-1 rounded-xl self-start">
              {tabs.map((t, i) => (
                <button key={t} onClick={() => setActiveTab(i)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${activeTab === i ? 'bg-surface-container-highest text-on-surface shadow' : 'text-outline hover:text-on-surface'}`}>
                  {t}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar transferencia..."
                className="pl-9 pr-4 py-2 bg-surface-container-highest border-none rounded-xl text-sm text-on-surface focus:ring-1 focus:ring-primary/50" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['ID Transferencia', 'Origen', 'Destino', 'Items / SKUs', 'Responsable', 'Estado', ''].map(h => (
                    <th key={h} className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((t, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4 font-medium text-on-surface">{t.id}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className={`w-2 h-2 rounded-full ${t.origenColor}`} />{t.origen}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{t.destino}</td>
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-on-surface">{t.items} unidades</p>
                      <p className="text-xs text-outline">{t.skus}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{t.responsable}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${t.estadoColor}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />{t.estado}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-outline">Mostrando {filtered.length} de 128 registros</p>
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
