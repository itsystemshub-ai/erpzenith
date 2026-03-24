'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

type Estado = 'PROPUESTO' | 'EN_REVISION' | 'APROBADO' | 'RECHAZADO'

interface ProductoDesarrollo {
  id: string
  sku: string
  nombre: string
  descripcion: string
  categoria: string
  unidad: string
  precioUSD: number
  stockMin: number
  estado: Estado
  propuestoPor: string
  fechaPropuesta: string
  notas?: string
}

const ESTADOS: { key: Estado; label: string; icon: string; color: string; bg: string; border: string }[] = [
  { key: 'PROPUESTO',   label: 'Propuesto',   icon: 'lightbulb',      color: 'text-outline',    bg: 'bg-white/5',        border: 'border-white/10' },
  { key: 'EN_REVISION', label: 'En Revisión', icon: 'rate_review',    color: 'text-amber-400',  bg: 'bg-amber-500/10',   border: 'border-amber-500/20' },
  { key: 'APROBADO',    label: 'Aprobado',    icon: 'check_circle',   color: 'text-tertiary',   bg: 'bg-tertiary/10',    border: 'border-tertiary/20' },
  { key: 'RECHAZADO',   label: 'Rechazado',   icon: 'cancel',         color: 'text-error',      bg: 'bg-error/10',       border: 'border-error/20' },
]

const CATEGORIAS = ['Electrónica', 'Ferretería', 'Consumibles', 'Repuestos', 'Papelería', 'Limpieza', 'Herramientas', 'Otro']
const UNIDADES   = ['UND', 'KG', 'LT', 'MT', 'CJ', 'PAR', 'ROLLO', 'PAQ']

const MOCK: ProductoDesarrollo[] = [
  { id: '1', sku: 'DEV-001', nombre: 'Laptop Ultrabook Pro 14"', descripcion: 'Laptop empresarial con procesador i7, 16GB RAM, SSD 512GB', categoria: 'Electrónica', unidad: 'UND', precioUSD: 850, stockMin: 5, estado: 'EN_REVISION', propuestoPor: 'Carlos R.', fechaPropuesta: '2026-03-20', notas: 'Alta demanda proyectada para Q2' },
  { id: '2', sku: 'DEV-002', nombre: 'Taladro Percutor 800W', descripcion: 'Taladro industrial con maletín y set de brocas', categoria: 'Herramientas', unidad: 'UND', precioUSD: 120, stockMin: 10, estado: 'PROPUESTO', propuestoPor: 'Ana M.', fechaPropuesta: '2026-03-21' },
  { id: '3', sku: 'DEV-003', nombre: 'Resma Papel Bond A4 75g', descripcion: 'Resma 500 hojas, papel bond blanco', categoria: 'Papelería', unidad: 'PAQ', precioUSD: 8.5, stockMin: 50, estado: 'APROBADO', propuestoPor: 'Juan D.', fechaPropuesta: '2026-03-18', notas: 'Aprobado para siguiente orden de compra' },
  { id: '4', sku: 'DEV-004', nombre: 'Aceite Hidráulico ISO 46', descripcion: 'Aceite hidráulico para maquinaria pesada, bidón 20L', categoria: 'Consumibles', unidad: 'LT', precioUSD: 45, stockMin: 20, estado: 'RECHAZADO', propuestoPor: 'Maria S.', fechaPropuesta: '2026-03-15', notas: 'Ya existe SKU similar en inventario activo' },
  { id: '5', sku: 'DEV-005', nombre: 'Monitor LED 27" 4K', descripcion: 'Monitor para estaciones de trabajo, panel IPS', categoria: 'Electrónica', unidad: 'UND', precioUSD: 320, stockMin: 3, estado: 'PROPUESTO', propuestoPor: 'Carlos R.', fechaPropuesta: '2026-03-22' },
  { id: '6', sku: 'DEV-006', nombre: 'Cinta Métrica 50m', descripcion: 'Cinta métrica de acero inoxidable para obra', categoria: 'Ferretería', unidad: 'UND', precioUSD: 18, stockMin: 15, estado: 'EN_REVISION', propuestoPor: 'Ana M.', fechaPropuesta: '2026-03-19' },
]

const EMPTY_FORM = { sku: '', nombre: '', descripcion: '', categoria: 'Electrónica', unidad: 'UND', precioUSD: '', stockMin: '', notas: '' }

export default function DesarrolloPage() {
  const [productos, setProductos] = useState<ProductoDesarrollo[]>(MOCK)
  const [search, setSearch] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<Estado | 'TODOS'>('TODOS')
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [detalle, setDetalle] = useState<ProductoDesarrollo | null>(null)

  const filtered = productos.filter(p => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.categoria.toLowerCase().includes(search.toLowerCase())
    const matchEstado = filtroEstado === 'TODOS' || p.estado === filtroEstado
    return matchSearch && matchEstado
  })

  const countBy = (e: Estado) => productos.filter(p => p.estado === e).length

  const handleEstado = (id: string, estado: Estado) => {
    setProductos(prev => prev.map(p => p.id === id ? { ...p, estado } : p))
    setDetalle(prev => prev?.id === id ? { ...prev, estado } : prev)
  }

  const handleAdd = () => {
    if (!form.sku || !form.nombre) return
    const nuevo: ProductoDesarrollo = {
      id: Date.now().toString(),
      sku: form.sku,
      nombre: form.nombre,
      descripcion: form.descripcion,
      categoria: form.categoria,
      unidad: form.unidad,
      precioUSD: parseFloat(form.precioUSD) || 0,
      stockMin: parseInt(form.stockMin) || 0,
      estado: 'PROPUESTO',
      propuestoPor: 'Usuario',
      fechaPropuesta: new Date().toISOString().slice(0, 10),
      notas: form.notas,
    }
    setProductos(prev => [nuevo, ...prev])
    setForm({ ...EMPTY_FORM })
    setModal(false)
  }

  const estadoInfo = (e: Estado) => ESTADOS.find(s => s.key === e)!

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Inventario — Desarrollo" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Productos en Desarrollo</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">
              Pipeline de propuestas de nuevos productos para incorporar al inventario. Gestiona el ciclo desde la propuesta hasta la aprobación.
            </p>
          </div>
          <button
            onClick={() => setModal(true)}
            className="flex items-center gap-2 px-5 h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all shrink-0"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>Proponer Producto
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ESTADOS.map(e => (
            <div key={e.key} className={`glass-panel rounded-2xl p-5 border ${e.border} cursor-pointer transition-all hover:scale-[1.02] ${filtroEstado === e.key ? 'ring-2 ring-primary/40' : ''}`}
              onClick={() => setFiltroEstado(prev => prev === e.key ? 'TODOS' : e.key)}>
              <div className="flex items-center gap-2 mb-3">
                <div className={`p-1.5 rounded-lg ${e.bg}`}>
                  <span className={`material-symbols-outlined text-[18px] ${e.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{e.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{e.label}</p>
              </div>
              <p className="text-3xl font-bold text-on-surface">{countBy(e.key)}</p>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por nombre, SKU o categoría..."
              className="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none" />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={() => setFiltroEstado('TODOS')}
              className={`px-3 py-2 rounded-xl text-xs font-spartan uppercase tracking-widest transition-all ${filtroEstado === 'TODOS' ? 'bg-primary/20 text-primary border border-primary/20' : 'border border-white/10 text-outline hover:bg-white/5'}`}>
              Todos ({productos.length})
            </button>
            {ESTADOS.map(e => (
              <button key={e.key} onClick={() => setFiltroEstado(prev => prev === e.key ? 'TODOS' : e.key)}
                className={`px-3 py-2 rounded-xl text-xs font-spartan uppercase tracking-widest transition-all ${filtroEstado === e.key ? `${e.bg} ${e.color} border ${e.border}` : 'border border-white/10 text-outline hover:bg-white/5'}`}>
                {e.label} ({countBy(e.key)})
              </button>
            ))}
          </div>
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan border-b border-white/5">
                  {['SKU', 'Producto', 'Categoría', 'Unidad', 'Precio USD', 'Stock Mín.', 'Estado', 'Propuesto por', 'Fecha', ''].map(h => (
                    <th key={h} className="px-5 py-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.length === 0 && (
                  <tr><td colSpan={10} className="px-5 py-12 text-center text-outline text-sm">No hay productos que coincidan.</td></tr>
                )}
                {filtered.map(p => {
                  const ei = estadoInfo(p.estado)
                  return (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors cursor-pointer" onClick={() => setDetalle(p)}>
                      <td className="px-5 py-4 font-mono text-xs text-primary">{p.sku}</td>
                      <td className="px-5 py-4">
                        <p className="text-sm font-semibold text-on-surface">{p.nombre}</p>
                        {p.descripcion && <p className="text-xs text-outline mt-0.5 max-w-[220px] truncate">{p.descripcion}</p>}
                      </td>
                      <td className="px-5 py-4 text-sm text-on-surface-variant">{p.categoria}</td>
                      <td className="px-5 py-4 text-sm text-on-surface-variant">{p.unidad}</td>
                      <td className="px-5 py-4 text-sm font-semibold text-on-surface">${p.precioUSD.toFixed(2)}</td>
                      <td className="px-5 py-4 text-sm text-on-surface-variant">{p.stockMin}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${ei.bg} ${ei.color} ${ei.border}`}>
                          <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>{ei.icon}</span>
                          {ei.label}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-sm text-on-surface-variant">{p.propuestoPor}</td>
                      <td className="px-5 py-4 text-xs text-outline">{p.fechaPropuesta}</td>
                      <td className="px-5 py-4 text-right" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center gap-1 justify-end">
                          {p.estado !== 'APROBADO' && (
                            <button onClick={() => handleEstado(p.id, 'APROBADO')} title="Aprobar"
                              className="p-1.5 rounded-lg hover:bg-tertiary/10 text-outline hover:text-tertiary transition-colors">
                              <span className="material-symbols-outlined text-[18px]">check_circle</span>
                            </button>
                          )}
                          {p.estado !== 'EN_REVISION' && p.estado !== 'APROBADO' && (
                            <button onClick={() => handleEstado(p.id, 'EN_REVISION')} title="Poner en revisión"
                              className="p-1.5 rounded-lg hover:bg-amber-500/10 text-outline hover:text-amber-400 transition-colors">
                              <span className="material-symbols-outlined text-[18px]">rate_review</span>
                            </button>
                          )}
                          {p.estado !== 'RECHAZADO' && (
                            <button onClick={() => handleEstado(p.id, 'RECHAZADO')} title="Rechazar"
                              className="p-1.5 rounded-lg hover:bg-error/10 text-outline hover:text-error transition-colors">
                              <span className="material-symbols-outlined text-[18px]">cancel</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-outline">Mostrando {filtered.length} de {productos.length} propuestas</p>
            <p className="text-xs text-outline">
              {countBy('APROBADO')} aprobados · {countBy('EN_REVISION')} en revisión · {countBy('PROPUESTO')} pendientes
            </p>
          </div>
        </div>
      </div>

      {/* Modal — Proponer producto */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]">add_box</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">Proponer Nuevo Producto</p>
                  <p className="text-[10px] text-outline">Se agregará con estado Propuesto</p>
                </div>
              </div>
              <button onClick={() => setModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">SKU *</label>
                  <input value={form.sku} onChange={e => setForm(p => ({ ...p, sku: e.target.value }))} placeholder="DEV-007"
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Unidad</label>
                  <select value={form.unidad} onChange={e => setForm(p => ({ ...p, unidad: e.target.value }))}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                    {UNIDADES.map(u => <option key={u}>{u}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Nombre del Producto *</label>
                <input value={form.nombre} onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))} placeholder="Nombre descriptivo del producto"
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Descripción</label>
                <input value={form.descripcion} onChange={e => setForm(p => ({ ...p, descripcion: e.target.value }))} placeholder="Especificaciones técnicas, marca, modelo..."
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Categoría</label>
                  <select value={form.categoria} onChange={e => setForm(p => ({ ...p, categoria: e.target.value }))}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                    {CATEGORIAS.map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Precio USD</label>
                  <input value={form.precioUSD} onChange={e => setForm(p => ({ ...p, precioUSD: e.target.value }))} placeholder="0.00" type="number" min="0" step="0.01"
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Stock Mínimo</label>
                <input value={form.stockMin} onChange={e => setForm(p => ({ ...p, stockMin: e.target.value }))} placeholder="0" type="number" min="0"
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Notas / Justificación</label>
                <input value={form.notas} onChange={e => setForm(p => ({ ...p, notas: e.target.value }))} placeholder="¿Por qué se propone este producto?"
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
            </div>
            <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10 shrink-0">
              <button onClick={() => setModal(false)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">
                Cancelar
              </button>
              <button onClick={handleAdd} disabled={!form.sku || !form.nombre}
                className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
                <span className="material-symbols-outlined text-[16px]">add</span>Proponer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Panel lateral — Detalle */}
      {detalle && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setDetalle(null)}>
          <div className="w-full max-w-md h-full bg-surface-container-low shadow-2xl flex flex-col overflow-y-auto"
            onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div>
                <p className="font-bold text-on-surface">{detalle.nombre}</p>
                <p className="text-xs font-mono text-primary">{detalle.sku}</p>
              </div>
              <button onClick={() => setDetalle(null)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {/* Estado actual */}
              <div>
                <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-3">Estado Actual</p>
                <div className="flex gap-2 flex-wrap">
                  {ESTADOS.map(e => (
                    <button key={e.key} onClick={() => handleEstado(detalle.id, e.key)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                        detalle.estado === e.key
                          ? `${e.bg} ${e.color} ${e.border} ring-2 ring-white/20`
                          : 'border-white/10 text-outline hover:bg-white/5'
                      }`}>
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>{e.icon}</span>
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Datos del producto */}
              <div className="space-y-3">
                <p className="text-[10px] font-bold tracking-widest text-outline uppercase">Datos del Producto</p>
                {[
                  { label: 'Categoría',    value: detalle.categoria },
                  { label: 'Unidad',       value: detalle.unidad },
                  { label: 'Precio USD',   value: `$${detalle.precioUSD.toFixed(2)}` },
                  { label: 'Stock Mínimo', value: String(detalle.stockMin) },
                  { label: 'Propuesto por', value: detalle.propuestoPor },
                  { label: 'Fecha',        value: detalle.fechaPropuesta },
                ].map(f => (
                  <div key={f.label} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-xs text-outline">{f.label}</span>
                    <span className="text-xs font-semibold text-on-surface">{f.value}</span>
                  </div>
                ))}
              </div>

              {detalle.descripcion && (
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-outline uppercase mb-2">Descripción</p>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{detalle.descripcion}</p>
                </div>
              )}

              {detalle.notas && (
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <div className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">info</span>
                    <div>
                      <p className="text-xs font-semibold text-on-surface mb-1">Notas</p>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{detalle.notas}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Acción — aprobar para inventario */}
              {detalle.estado === 'APROBADO' && (
                <div className="p-4 bg-tertiary/5 rounded-xl border border-tertiary/20">
                  <p className="text-xs font-semibold text-tertiary mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">rocket_launch</span>
                    Listo para incorporar al inventario
                  </p>
                  <p className="text-xs text-on-surface-variant mb-3">Este producto fue aprobado y puede ser creado en el inventario activo.</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-tertiary text-on-primary px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-tertiary/90 transition-colors">
                    <span className="material-symbols-outlined text-[16px]">inventory_2</span>
                    Crear en Inventario
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
