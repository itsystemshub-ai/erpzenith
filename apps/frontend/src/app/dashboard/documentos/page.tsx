'use client'
import { useState, useMemo, useRef, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'
import { jsPDF } from 'jspdf'

// ─── Tipos del backend ────────────────────────────────────────────────────────
interface Factura {
  id: string
  numero: string
  estado: string
  createdAt: string
  totalVES: number
  cliente: { nombre: string }
}

interface OrdenCompra {
  id: string
  numero: string
  estado: string
  createdAt: string
  totalUSD: number
  proveedor: { nombre: string }
}

// ─── Tipo documento unificado ─────────────────────────────────────────────────
type DocCategoria = 'Facturas' | 'Compras'
type DocEstado = 'Firmado' | 'Pendiente Firma' | 'Archivado' | 'Borrador'

interface Doc {
  id: string
  name: string
  type: 'PDF'
  categoria: DocCategoria
  date: string
  autor: string
  estado: DocEstado
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function mapEstadoFactura(estado: string): DocEstado {
  switch (estado) {
    case 'PAGADA':    return 'Firmado'
    case 'PENDIENTE': return 'Pendiente Firma'
    case 'ANULADA':   return 'Archivado'
    default:          return 'Borrador'
  }
}

function mapEstadoOC(estado: string): DocEstado {
  switch (estado) {
    case 'EMITIDA':   return 'Firmado'
    case 'PENDIENTE': return 'Pendiente Firma'
    case 'CANCELADA': return 'Archivado'
    default:          return 'Borrador'
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' })
}

function downloadDoc(doc: Doc) {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const titulo = doc.categoria === 'Facturas' ? 'FACTURA' : 'ORDEN DE COMPRA'

  // Header band
  pdf.setFillColor(99, 102, 241)
  pdf.rect(0, 0, 210, 28, 'F')
  pdf.setTextColor(255, 255, 255)
  pdf.setFontSize(18)
  pdf.setFont('helvetica', 'bold')
  pdf.text('Zenith ERP', 14, 12)
  pdf.setFontSize(9)
  pdf.setFont('helvetica', 'normal')
  pdf.text('NexusCore Zenith C.A. — Sistema de Gestión Empresarial', 14, 20)

  // Título
  pdf.setTextColor(30, 30, 30)
  pdf.setFontSize(16)
  pdf.setFont('helvetica', 'bold')
  pdf.text(titulo, 14, 42)
  pdf.setDrawColor(200, 200, 200)
  pdf.line(14, 46, 196, 46)

  // Filas de datos
  const rows: [string, string][] = [
    ['Número',       doc.id],
    ['Documento',    doc.name],
    ['Categoría',    doc.categoria],
    ['Contraparte',  doc.autor],
    ['Fecha',        doc.date],
    ['Estado',       doc.estado],
  ]

  let y = 56
  pdf.setFontSize(10)
  rows.forEach(([label, value]) => {
    pdf.setFont('helvetica', 'bold')
    pdf.setTextColor(100, 100, 100)
    pdf.text(label + ':', 14, y)
    pdf.setFont('helvetica', 'normal')
    pdf.setTextColor(30, 30, 30)
    pdf.text(value, 62, y)
    y += 9
  })

  // Footer
  pdf.setFontSize(8)
  pdf.setTextColor(160, 160, 160)
  pdf.line(14, 276, 196, 276)
  pdf.text(`Generado por Zenith ERP — ${new Date().toLocaleString('es-VE')}`, 14, 281)

  pdf.save(`${doc.id}.pdf`)
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch(() => {})
}

// ─── Estilos ──────────────────────────────────────────────────────────────────
const CATEGORIAS = ['Todas', 'Facturas', 'Compras'] as const

const estadoBadge: Record<DocEstado, string> = {
  'Firmado':        'text-tertiary bg-tertiary/10',
  'Pendiente Firma':'text-amber-400 bg-amber-400/10',
  'Borrador':       'text-outline bg-surface-container-highest',
  'Archivado':      'text-on-surface-variant bg-surface-container',
}

const estadoIcon: Record<DocEstado, string> = {
  'Firmado':        'verified',
  'Pendiente Firma':'draw',
  'Borrador':       'edit_note',
  'Archivado':      'archive',
}

const categoriaIcon: Record<DocCategoria, string> = {
  'Facturas': 'receipt_long',
  'Compras':  'shopping_cart',
}

// ─── Dropdown de acciones ─────────────────────────────────────────────────────
function DocMenu({ doc }: { doc: Doc }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={(e) => { e.stopPropagation(); setOpen(v => !v) }}
        className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors"
      >
        <span className="material-symbols-outlined text-[16px]">more_vert</span>
      </button>
      {open && (
        <div className="absolute right-0 bottom-full mb-1 z-50 glass-panel rounded-xl shadow-xl border border-white/10 py-1 min-w-[160px]">
          <button
            onClick={(e) => { e.stopPropagation(); downloadDoc(doc); setOpen(false) }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-on-surface hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px] text-primary">download</span>
            Descargar
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(doc.id); setOpen(false) }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-on-surface hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px] text-outline">content_copy</span>
            Copiar número
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(doc.name); setOpen(false) }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs text-on-surface hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-[15px] text-outline">share</span>
            Copiar nombre
          </button>
        </div>
      )}
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function DocumentosPage() {
  const [categoria, setCategoria] = useState<typeof CATEGORIAS[number]>('Todas')
  const [search, setSearch]       = useState('')
  const [vista, setVista]         = useState<'grid' | 'lista'>('grid')

  const { data: facturas = [], isLoading: loadingF } =
    useErpQuery<Factura[]>(QK.ventas.facturas(), '/ventas/facturas')

  const { data: ordenes = [], isLoading: loadingOC } =
    useErpQuery<OrdenCompra[]>(QK.compras.ordenes(), '/compras/ordenes')

  const documents = useMemo<Doc[]>(() => [
    ...facturas.map((f): Doc => ({
      id:       f.numero,
      name:     `Factura ${f.numero} — ${f.cliente.nombre}`,
      type:     'PDF',
      categoria:'Facturas',
      date:     formatDate(f.createdAt),
      autor:    f.cliente.nombre,
      estado:   mapEstadoFactura(f.estado),
    })),
    ...ordenes.map((oc): Doc => ({
      id:       oc.numero,
      name:     `Orden de Compra ${oc.numero} — ${oc.proveedor.nombre}`,
      type:     'PDF',
      categoria:'Compras',
      date:     formatDate(oc.createdAt),
      autor:    oc.proveedor.nombre,
      estado:   mapEstadoOC(oc.estado),
    })),
  ], [facturas, ordenes])

  const filtered = useMemo(() => documents.filter((d) => {
    const matchCat    = categoria === 'Todas' || d.categoria === categoria
    const matchSearch = !search ||
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.autor.toLowerCase().includes(search.toLowerCase()) ||
      d.id.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  }), [documents, categoria, search])

  const pendientesFirma = documents.filter(d => d.estado === 'Pendiente Firma').length
  const isLoading       = loadingF || loadingOC

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Documentos" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Gestión Documental</h2>
            <p className="text-on-surface-variant mt-1">Facturas y órdenes de compra generadas por el sistema.</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
          <div className="flex items-center gap-2 bg-primary/10 rounded-xl px-3 py-1.5 shrink-0">
            <span className="material-symbols-outlined text-primary text-[16px]">search</span>
            <span className="text-xs font-bold text-primary font-spartan uppercase tracking-widest">Buscar</span>
          </div>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar por nombre, autor o número..."
            className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-outline focus:outline-none"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-outline hover:text-on-surface">
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Documentos',  value: isLoading ? '…' : String(documents.length),  icon: 'description',  color: 'text-primary',    bg: 'bg-primary/10' },
            { label: 'Facturas',          value: isLoading ? '…' : String(facturas.length),   icon: 'receipt_long', color: 'text-tertiary',   bg: 'bg-tertiary/10' },
            { label: 'Órdenes de Compra', value: isLoading ? '…' : String(ordenes.length),    icon: 'shopping_cart',color: 'text-emerald-400',bg: 'bg-emerald-400/10' },
            { label: 'Pendientes Firma',  value: isLoading ? '…' : String(pendientesFirma),   icon: 'draw',         color: 'text-amber-400',  bg: 'bg-amber-400/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5">
              <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center mb-3`}>
                <span className={`material-symbols-outlined text-[20px] ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-[10px] text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Filtros + Vista */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                  categoria === cat
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 glass-panel rounded-xl p-1 self-start sm:self-auto">
            <button onClick={() => setVista('grid')}
              className={`p-1.5 rounded-lg transition-all ${vista === 'grid' ? 'bg-surface-container-highest text-on-surface' : 'text-outline hover:text-on-surface'}`}>
              <span className="material-symbols-outlined text-[18px]">grid_view</span>
            </button>
            <button onClick={() => setVista('lista')}
              className={`p-1.5 rounded-lg transition-all ${vista === 'lista' ? 'bg-surface-container-highest text-on-surface' : 'text-outline hover:text-on-surface'}`}>
              <span className="material-symbols-outlined text-[18px]">list</span>
            </button>
          </div>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-20 gap-3 text-outline">
            <span className="material-symbols-outlined text-3xl animate-spin">progress_activity</span>
            <span className="text-sm">Cargando documentos...</span>
          </div>
        )}

        {/* Documentos — Grid */}
        {!isLoading && vista === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((doc) => (
              <div key={doc.id} className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl text-error">picture_as_pdf</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-1 rounded-lg text-error bg-error/10">PDF</span>
                </div>
                <p className="font-medium text-on-surface text-sm mb-1 group-hover:text-primary transition-colors leading-snug line-clamp-2">{doc.name}</p>
                <p className="text-[10px] text-outline mb-3 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">{categoriaIcon[doc.categoria]}</span>
                  {doc.categoria} · {doc.autor}
                </p>
                <div className="flex items-center justify-between text-xs text-outline">
                  <span>{doc.date}</span>
                  <span className="font-mono text-[10px]">{doc.id}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${estadoBadge[doc.estado]}`}>
                    <span className="material-symbols-outlined text-[12px]">{estadoIcon[doc.estado]}</span>
                    {doc.estado}
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <button
                      onClick={() => downloadDoc(doc)}
                      className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors"
                      title="Descargar"
                    >
                      <span className="material-symbols-outlined text-[16px]">download</span>
                    </button>
                    <DocMenu doc={doc} />
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-20 gap-3 text-center">
                <span className="material-symbols-outlined text-5xl text-outline/30">folder_open</span>
                <p className="text-on-surface-variant text-sm">No hay documentos con los filtros aplicados.</p>
              </div>
            )}
          </div>
        )}

        {/* Documentos — Lista */}
        {!isLoading && vista === 'lista' && (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  <th className="px-3 py-3">Documento</th>
                  <th className="px-3 py-3 whitespace-nowrap">Categoría</th>
                  <th className="px-3 py-3">Autor / Contraparte</th>
                  <th className="px-3 py-3 whitespace-nowrap">Fecha</th>
                  <th className="px-3 py-3">Estado</th>
                  <th className="px-3 py-3 text-right">Acc.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((doc) => (
                  <tr key={doc.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-error shrink-0">picture_as_pdf</span>
                        <div>
                          <p className="text-xs font-semibold text-on-surface max-w-[220px] truncate">{doc.name}</p>
                          <p className="text-[10px] text-outline font-mono">{doc.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 text-[10px] text-on-surface-variant">
                        <span className="material-symbols-outlined text-[12px]">{categoriaIcon[doc.categoria]}</span>
                        {doc.categoria}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant max-w-[160px] truncate">{doc.autor}</td>
                    <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">{doc.date}</td>
                    <td className="px-3 py-3">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${estadoBadge[doc.estado]}`}>
                        <span className="material-symbols-outlined text-[12px]">{estadoIcon[doc.estado]}</span>
                        {doc.estado}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => downloadDoc(doc)}
                          className="p-1 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors"
                          title="Descargar"
                        >
                          <span className="material-symbols-outlined text-[16px]">download</span>
                        </button>
                        <DocMenu doc={doc} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No hay documentos con los filtros aplicados.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
