'use client'
import { useState, useRef, useMemo, useCallback, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useThemeStore } from '@/stores/themeStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'
import api from '@/lib/api'
import * as XLSX from 'xlsx'

type StockStatus = 'ok' | 'bajo' | 'critico'

interface Producto {
  id: string
  sku: string
  tipo?: string | null
  fabricante?: string | null
  marca?: string | null
  material?: string | null
  espesor?: string | null
  nombre: string
  descripcion?: string | null
  medidas?: string | null
  unidad: string
  precioUSD: number
  stockMin: number
  isActive: boolean
  createdAt: string
  stocks: { cantidad: number; almacen: { nombre: string } }[]
}

interface ProductoForm {
  sku: string; tipo: string; fabricante: string; marca: string
  material: string; espesor: string; nombre: string; descripcion: string
  medidas: string; unidad: string; precioUSD: string; stockMin: string
}

const EMPTY_FORM: ProductoForm = {
  sku: '', tipo: '', fabricante: '', marca: '', material: '',
  espesor: '', nombre: '', descripcion: '', medidas: '',
  unidad: 'UND', precioUSD: '', stockMin: '',
}

interface TasaBCV { tasa: number; fecha: string }

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim()

function fuzzyMatch(text: string, token: string): boolean {
  if (token.length > text.length + 1) return false
  for (let i = 0; i <= text.length - token.length + 1; i++) {
    let diff = 0
    for (let j = 0; j < token.length; j++) {
      if (text[i + j] !== token[j]) diff++
      if (diff > 1) break
    }
    if (diff <= 1) return true
  }
  return false
}

function scoreProducto(p: Producto, tokens: string[]): number {
  if (tokens.length === 0) return 1
  const fields = [
    { v: p.nombre,      w: 10 },
    { v: p.sku,         w: 8  },
    { v: p.marca,       w: 6  },
    { v: p.fabricante,  w: 5  },
    { v: p.tipo,        w: 5  },
    { v: p.material,    w: 4  },
    { v: p.espesor,     w: 4  },
    { v: p.medidas,     w: 4  },
    { v: p.descripcion, w: 3  },
  ]
  let total = 0
  for (const token of tokens) {
    let best = 0
    for (const { v, w } of fields) {
      if (!v) continue
      const nv = norm(v)
      if (nv === token)         { best = Math.max(best, w * 3); continue }
      if (nv.startsWith(token)) { best = Math.max(best, w * 2); continue }
      if (nv.includes(token))   { best = Math.max(best, w); continue }
      if (token.length >= 4 && fuzzyMatch(nv, token)) best = Math.max(best, Math.floor(w * 0.6))
    }
    if (best === 0) return 0
    total += best
  }
  return total
}

function highlight(text: string | null | undefined, tokens: string[]): React.ReactNode {
  if (!text || tokens.length === 0) return text ?? '—'
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${escaped})`, 'gi')
  const parts = text.split(regex)
  return parts.map((p, i) =>
    regex.test(p) ? <mark key={i} className="bg-primary/30 text-primary rounded px-0.5">{p}</mark> : p
  )
}

// Normalización agresiva: solo letras y números
const normKey = (s: string) =>
  s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '')

function getStockTotal(p: Producto): number {
  return p.stocks?.reduce((acc, s) => acc + s.cantidad, 0) ?? 0
}

function getEstado(p: Producto): StockStatus {
  const total = getStockTotal(p)
  if (total === 0) return 'critico'
  if (total <= p.stockMin) return 'bajo'
  return 'ok'
}

const estadoConfig: Record<StockStatus, { label: string; variant: 'success' | 'warning' | 'error'; dot: string }> = {
  ok:      { label: 'OK',      variant: 'success', dot: 'bg-emerald-500' },
  bajo:    { label: 'Bajo',    variant: 'warning',  dot: 'bg-amber-400' },
  critico: { label: 'Crítico', variant: 'error',    dot: 'bg-error animate-pulse' },
}

export default function ProductosPage() {
  const [busqueda, setBusqueda]   = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'ok' | 'bajo' | 'critico' | 'duplicados'>('Todos')
  const [modal, setModal]         = useState<{ open: boolean; editing: Producto | null }>({ open: false, editing: null })
  const [form, setForm]           = useState<ProductoForm>(EMPTY_FORM)
  const [saving, setSaving]       = useState(false)
  const [deleteId, setDeleteId]   = useState<string | null>(null)
  const [deleteAll, setDeleteAll] = useState(false)
  const [importedRows, setImportedRows] = useState(0)
  const [importProgress, setImportProgress] = useState<{ active: boolean; done: number; total: number; error: string | null }>({ active: false, done: 0, total: 0, error: null })
  const [page, setPage]           = useState(1)
  const PAGE_SIZE = 50
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { currency } = useThemeStore()
  const addNotification = useNotificationStore(s => s.add)

  const { data: rawProductos = [], refetch } = useErpQuery<Producto[]>(
    QK.inventario.productos(),
    '/inventario/productos',
  )

  const { data: bcvData } = useErpQuery<TasaBCV>(
    QK.configuracion.bcvTasa(),
    '/configuracion/bcv/tasa',
    { staleTime: 5 * 60 * 1000 }
  )
  const tasa = bcvData?.tasa ? Number(bcvData.tasa) : 1

  useEffect(() => { setPage(1) }, [busqueda, filtroEstado])

  const searchTokens = useMemo(() => norm(busqueda).split(/\s+/).filter(Boolean), [busqueda])

  // Detectar SKUs duplicados
  const { duplicateSkuIds } = useMemo(() => {
    const skuMap = new Map<string, string[]>()
    for (const p of rawProductos) {
      const key = p.sku.trim().toUpperCase()
      if (!skuMap.has(key)) skuMap.set(key, [])
      skuMap.get(key)!.push(p.id)
    }
    const ids = new Set<string>()
    for (const group of skuMap.values()) {
      if (group.length > 1) group.forEach(id => ids.add(id))
    }
    return { duplicateSkuIds: ids }
  }, [rawProductos])

  const filtered = useMemo(() => {
    const scored = rawProductos
      .map(p => ({ p, score: scoreProducto(p, searchTokens) }))
      .filter(({ p, score }) => {
        if (score === 0) return false
        if (filtroEstado === 'duplicados') return duplicateSkuIds.has(p.id)
        if (filtroEstado !== 'Todos') return getEstado(p) === filtroEstado
        return true
      })
    if (searchTokens.length > 0) scored.sort((a, b) => b.score - a.score)
    else {
      scored.sort((a, b) => {
        const aDup = duplicateSkuIds.has(a.p.id) ? 0 : 1
        const bDup = duplicateSkuIds.has(b.p.id) ? 0 : 1
        if (aDup !== bDup) return aDup - bDup
        if (aDup === 0) return a.p.sku.localeCompare(b.p.sku)
        return a.p.nombre.localeCompare(b.p.nombre)
      })
    }
    return scored.map(({ p }) => p)
  }, [rawProductos, searchTokens, filtroEstado, duplicateSkuIds])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage   = Math.min(page, totalPages)
  const paginated  = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  const totalProductos  = rawProductos.length
  const stockCritico    = rawProductos.filter(p => getEstado(p) === 'critico').length
  const stockBajo       = rawProductos.filter(p => getEstado(p) === 'bajo').length
  const valorTotal      = rawProductos.reduce((acc, p) => acc + getStockTotal(p) * Number(p.precioUSD), 0)
  const totalDuplicados = duplicateSkuIds.size

  const formatPrecio = (usd: number) =>
    currency === 'USD' ? `${usd.toFixed(2)}` : `Bs. ${(usd * tasa).toLocaleString('es-VE', { minimumFractionDigits: 2 })}`

  const formatValor = (usd: number) =>
    currency === 'USD'
      ? `${usd.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
      : `Bs. ${(usd * tasa).toLocaleString('es-VE', { minimumFractionDigits: 2 })}`

  // ── Import ──────────────────────────────────────────────────────────
  const handleImport = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb   = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws   = wb.Sheets[wb.SheetNames[0]]
      const rows: Record<string, unknown>[] = XLSX.utils.sheet_to_json(ws, { defval: '' })

      if (rows.length > 0) {
        console.log('[Import Productos] Columnas detectadas:', Object.keys(rows[0]))
        Object.entries(rows[0]).forEach(([k, v]) => console.log(`  col "${k}" → "${v}"`))
      }

      const headers = rows.length > 0 ? Object.keys(rows[0]) : []

      // Detectar header por normKey (solo alfanumérico, sin símbolos)
      const findHeader = (...candidates: string[]): string | null => {
        for (const c of candidates) {
          const nc = normKey(c)
          const match = headers.find(h => normKey(h) === nc)
          if (match) return match
        }
        // fallback: match parcial
        for (const c of candidates) {
          const nc = normKey(c)
          const match = headers.find(h => normKey(h).includes(nc) || nc.includes(normKey(h)))
          if (match) return match
        }
        return null
      }

      // Mapear headers una sola vez
      // Encabezados reales del Excel: N°, Código, Tipo, Fabricante, Marca, Material, espesor, Descripción, Medidas, Precio, Stock / Min.
      const hSku    = findHeader('Codigo', 'Código', 'SKU', 'COD', 'Referencia', 'REF')
      const hTipo   = findHeader('Tipo', 'Type')
      const hFab    = findHeader('Fabricante', 'Manufacturer')
      const hMarca  = findHeader('Marca', 'Brand')
      const hMat    = findHeader('Material')
      const hEsp    = findHeader('espesor', 'Espesor', 'Thickness')
      const hNombre = findHeader('Descripcion', 'Descripción', 'Nombre', 'Producto', 'Name')
      const hMed    = findHeader('Medidas', 'Medida', 'Dimensiones')
      const hUnidad = findHeader('Unidad', 'UND', 'Unit')
      const hPrecio = findHeader('Precio', 'Price', 'Costo', 'PVP', 'Valor', 'PrecioUSD', 'PrecioUsd')
      // "Stock / Min." → normKey → "stockmin"
      const hStock  = findHeader('Stock / Min.', 'Stock / Mín.', 'StockMin', 'Stock Min', 'Minimo', 'Mínimo', 'Stock', 'Cantidad', 'Existencia', 'QTY')

      console.log('[Import Productos] Headers mapeados:', { hSku, hTipo, hFab, hMarca, hMat, hEsp, hNombre, hMed, hUnidad, hPrecio, hStock })

      const getVal = (r: Record<string, unknown>, h: string | null): string | null => {
        if (!h) return null
        const v = r[h]
        if (v === null || v === undefined || String(v).trim() === '') return null
        return String(v).trim()
      }

      const mapped = rows
        .map((r, idx) => {
          const skuRaw = getVal(r, hSku)
          const precioRaw = getVal(r, hPrecio)
          const stockRaw  = getVal(r, hStock)
          return {
            sku:        skuRaw || `IMP-${String(idx).padStart(5, '0')}-${Math.random().toString(36).slice(2, 6)}`,
            tipo:       getVal(r, hTipo)   ?? undefined,
            fabricante: getVal(r, hFab)    ?? undefined,
            marca:      getVal(r, hMarca)  ?? undefined,
            material:   getVal(r, hMat)    ?? undefined,
            espesor:    getVal(r, hEsp)    ?? undefined,
            nombre:     getVal(r, hNombre) ?? undefined,
            medidas:    getVal(r, hMed)    ?? undefined,
            unidad:     getVal(r, hUnidad) ?? 'UND',
            precioUSD:  precioRaw ? parseFloat(precioRaw.replace(/[^0-9.,]/g, '').replace(',', '.')) || 0 : 0,
            stockMin:   stockRaw  ? parseFloat(stockRaw.replace(/[^0-9.,]/g, '').replace(',', '.'))  || 0 : 0,
          }
        })
        .filter(r => Object.values(r).some(v => v !== undefined && String(v).trim() !== ''))
        .map(r => ({ ...r, nombre: r.nombre ?? 'Sin nombre' }))

      console.log(`[Import Productos] ${rows.length} filas → ${mapped.length} a importar`)
      if (mapped.length > 0) console.log('[Import Productos] Primera fila mapeada:', mapped[0])

      if (mapped.length === 0) {
        addNotification({ type: 'warning', title: 'Sin datos', message: 'No se encontraron filas válidas en el archivo.', module: 'Inventario' })
        return
      }

      const BATCH = 100
      const total = mapped.length
      setImportProgress({ active: true, done: 0, total, error: null })
      let done = 0, created = 0, updated = 0, skipped = 0

      try {
        for (let i = 0; i < mapped.length; i += BATCH) {
          const batch = mapped.slice(i, i + BATCH)
          const res = await api.post('/inventario/productos/bulk', { rows: batch })
          created += res.data.created ?? 0
          updated += res.data.updated ?? 0
          skipped += res.data.skipped ?? 0
          done += batch.length
          setImportProgress({ active: true, done, total, error: null })
        }
        setImportedRows(created + updated)
        setImportProgress({ active: false, done: total, total, error: null })
        refetch()
        addNotification({
          type: 'success',
          title: 'Importación completada',
          message: `${created} creados, ${updated} actualizados${skipped ? `, ${skipped} con error` : ''}.`,
          module: 'Inventario',
        })
        if (skipped > 0) addNotification({ type: 'warning', title: 'Registros con error', message: `${skipped} producto(s) fallaron. Ver consola.`, module: 'Inventario' })
      } catch (err: unknown) {
        const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? String(err)
        console.error('[Import Productos] Error:', err)
        setImportProgress({ active: false, done, total, error: `Error: ${msg}` })
        addNotification({ type: 'error', title: 'Error al importar', message: msg, module: 'Inventario' })
      }
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }, [refetch, addNotification])

  // ── CRUD ────────────────────────────────────────────────────────────
  const openCreate = () => { setForm(EMPTY_FORM); setModal({ open: true, editing: null }) }
  const openEdit   = (p: Producto) => {
    setForm({
      sku: p.sku, tipo: p.tipo ?? '', fabricante: p.fabricante ?? '',
      marca: p.marca ?? '', material: p.material ?? '', espesor: p.espesor ?? '',
      nombre: p.nombre, descripcion: p.descripcion ?? '', medidas: p.medidas ?? '',
      unidad: p.unidad, precioUSD: String(p.precioUSD), stockMin: String(p.stockMin),
    })
    setModal({ open: true, editing: p })
  }

  const handleSave = async () => {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      const payload = { ...form, precioUSD: Number(form.precioUSD) || 0, stockMin: Number(form.stockMin) || 0 }
      if (modal.editing) await api.put(`/inventario/productos/${modal.editing.id}`, payload)
      else await api.post('/inventario/productos', payload)
      setModal({ open: false, editing: null })
      refetch()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/inventario/productos/${id}`); setDeleteId(null); refetch() }
    catch (e) { console.error(e) }
  }

  const handleDeleteAll = async () => {
    try {
      await api.delete('/inventario/productos/all')
      setDeleteAll(false); setImportedRows(0); refetch()
    } catch (e) { console.error(e) }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Catálogo de Productos" />
      <div className="flex-1 p-6 space-y-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Inventario de Productos</h2>
            <p className="text-on-surface-variant mt-1 text-xs">{totalProductos} productos registrados en catálogo.</p>
          </div>
          <div className="flex gap-2 items-center">
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleImport} />
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              Importar Excel
              {importedRows > 0 && <span className="ml-1 bg-primary/30 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">+{importedRows}</span>}
            </Button>
            <button onClick={() => setDeleteAll(true)} title="Eliminar todos" className="p-1.5 rounded-lg bg-error/10 hover:bg-error/20 text-error transition-colors border border-error/20">
              <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
            </button>
            <Button size="sm" onClick={openCreate}>
              <span className="material-symbols-outlined text-[16px]">add</span>
              Nuevo Producto
            </Button>
          </div>
        </div>

        {/* Import progress banner */}
        {(importProgress.active || importProgress.error || (importProgress.done > 0 && importProgress.done === importProgress.total)) && (
          <div className={`rounded-xl px-4 py-3 flex items-center gap-3 text-sm border ${
            importProgress.error ? 'bg-error/10 border-error/30 text-error' :
            importProgress.active ? 'bg-primary/10 border-primary/30 text-primary' :
            'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
          }`}>
            {importProgress.active && <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>}
            {!importProgress.active && !importProgress.error && <span className="material-symbols-outlined text-[18px]">check_circle</span>}
            {importProgress.error && <span className="material-symbols-outlined text-[18px]">error</span>}
            <div className="flex-1">
              {importProgress.active
                ? <><span className="font-bold">Importando...</span> {importProgress.done} / {importProgress.total} productos</>
                : importProgress.error ? importProgress.error
                : <><span className="font-bold">Importación completada.</span> {importProgress.done} productos procesados.</>
              }
              {importProgress.active && (
                <div className="mt-1.5 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${Math.round((importProgress.done / importProgress.total) * 100)}%` }} />
                </div>
              )}
            </div>
            {!importProgress.active && (
              <button onClick={() => setImportProgress({ active: false, done: 0, total: 0, error: null })}
                className="p-1 rounded hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Productos</p>
            <h3 className="text-xl font-headline font-bold text-primary">{totalProductos.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">inventory_2</span>En catálogo</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-tertiary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Valor Total {currency}</p>
            <h3 className="text-lg font-headline font-bold text-tertiary truncate">{formatValor(valorTotal)}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">trending_up</span>Valoración actual</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-amber-400 cursor-pointer hover:bg-amber-400/5 transition-colors" onClick={() => setFiltroEstado('bajo')}>
            <p className="text-[9px] font-spartan uppercase tracking-widest text-amber-400 mb-1">Stock Bajo</p>
            <h3 className="text-xl font-headline font-bold text-amber-400">{stockBajo.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">warning</span>Por reponer</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-error cursor-pointer hover:bg-error/5 transition-colors" onClick={() => setFiltroEstado('critico')}>
            <p className="text-[9px] font-spartan uppercase tracking-widest text-error mb-1">Stock Crítico</p>
            <h3 className="text-xl font-headline font-bold text-error">{stockCritico.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">error</span>Urgente</p>
          </GlassCard>
        </div>

        {/* Filtros + búsqueda */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2 flex-wrap">
              {(['Todos', 'ok', 'bajo', 'critico', 'duplicados'] as const).map((e) => (
                <button key={e} onClick={() => setFiltroEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    filtroEstado === e
                      ? e === 'critico'     ? 'bg-error/20 text-error border border-error/40'
                        : e === 'bajo'      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                        : e === 'duplicados'? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                        : 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}>
                  {e === 'ok' ? 'OK' : e === 'bajo' ? 'Bajo' : e === 'critico' ? 'Crítico'
                    : e === 'duplicados' ? `Duplicados${totalDuplicados > 0 ? ` (${totalDuplicados})` : ''}` : 'Todos'}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={busqueda} onChange={e => setBusqueda(e.target.value)}
                placeholder="Buscar por código, marca, fabricante, material..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-10 py-2.5 text-xs w-80 focus:ring-2 focus:ring-primary/40 text-on-surface" />
              {busqueda && (
                <button onClick={() => setBusqueda('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>
          </div>

          {/* Tabla */}
          <GlassCard glow className="overflow-hidden">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
              <table style={{ tableLayout: 'fixed', width: '1380px', borderCollapse: 'collapse' }} className="text-left">
                <colgroup>
                  <col style={{ width: 38 }} />
                  <col style={{ width: 100 }} />
                  <col style={{ width: 90 }} />
                  <col style={{ width: 120 }} />
                  <col style={{ width: 110 }} />
                  <col style={{ width: 110 }} />
                  <col style={{ width: 75 }} />
                  <col style={{ width: 210 }} />
                  <col style={{ width: 105 }} />
                  <col style={{ width: 95 }} />
                  <col style={{ width: 85 }} />
                  <col style={{ width: 78 }} />
                  <col style={{ width: 64 }} />
                </colgroup>
                <thead>
                  <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                    <th className="px-2 py-4 text-center">N°</th>
                    <th className="px-2 py-4">Código</th>
                    <th className="px-2 py-4">Tipo</th>
                    <th className="px-2 py-4">Fabricante</th>
                    <th className="px-2 py-4">Marca</th>
                    <th className="px-2 py-4">Material</th>
                    <th className="px-2 py-4">Espesor</th>
                    <th className="px-2 py-4">Descripción</th>
                    <th className="px-2 py-4">Medidas</th>
                    <th className="px-2 py-4 text-right">Precio $</th>
                    <th className="px-2 py-4">Stock/Mín</th>
                    <th className="px-2 py-4">Estado</th>
                    <th className="px-2 py-4 text-right">Acc.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {paginated.length === 0 ? (
                    <tr><td colSpan={13} className="py-16 text-center text-outline text-sm">No se encontraron productos.</td></tr>
                  ) : paginated.map((p, i) => {
                    const estado = getEstado(p)
                    const cfg    = estadoConfig[estado]
                    const stock  = getStockTotal(p)
                    const cell   = 'px-2 py-3 text-xs align-top'
                    const wrap   = { overflowWrap: 'break-word' as const, wordBreak: 'break-word' as const }
                    return (
                      <tr key={p.id} className={`transition-colors ${
                        duplicateSkuIds.has(p.id)
                          ? 'bg-amber-400/10 hover:bg-amber-400/20 border-l-2 border-amber-400'
                          : 'hover:bg-white/5'
                      }`}>
                        <td className={`${cell} text-center font-mono text-[11px] text-outline`}>{(safePage - 1) * PAGE_SIZE + i + 1}</td>
                        <td className={`${cell} font-mono text-[10px] text-on-surface`} style={wrap}>{highlight(p.sku, searchTokens)}</td>
                        <td className={`${cell} text-outline`} style={wrap}>{highlight(p.tipo, searchTokens) || '—'}</td>
                        <td className={`${cell} text-outline`} style={wrap}>{highlight(p.fabricante, searchTokens) || '—'}</td>
                        <td className={`${cell} text-on-surface font-medium`} style={wrap}>{highlight(p.marca, searchTokens) || '—'}</td>
                        <td className={`${cell} text-outline`} style={wrap}>{highlight(p.material, searchTokens) || '—'}</td>
                        <td className={`${cell} text-outline`} style={wrap}>{highlight(p.espesor, searchTokens) || '—'}</td>
                        <td className={cell} style={wrap}>
                          <p className="text-xs font-semibold text-on-surface">{highlight(p.nombre, searchTokens)}</p>
                          {p.descripcion && <p className="text-[10px] text-outline mt-0.5">{highlight(p.descripcion, searchTokens)}</p>}
                        </td>
                        <td className={`${cell} text-outline font-mono`} style={wrap}>{highlight(p.medidas, searchTokens) || '—'}</td>
                        <td className={`${cell} text-right`}>
                          <span className="text-xs font-bold text-on-surface">{formatPrecio(Number(p.precioUSD))}</span>
                        </td>
                        <td className={cell}>
                          <p className="text-xs font-bold text-on-surface">{stock}</p>
                          <p className="text-[10px] text-outline">Mín: {p.stockMin}</p>
                        </td>
                        <td className={cell}>
                          <div className="flex items-center gap-1">
                            <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${cfg.dot}`} />
                            <Badge variant={cfg.variant}>{cfg.label}</Badge>
                          </div>
                        </td>
                        <td className={`${cell} text-right`}>
                          <div className="flex items-center justify-end gap-1">
                            <button onClick={() => openEdit(p)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                              <span className="material-symbols-outlined text-[16px]">edit</span>
                            </button>
                            <button onClick={() => setDeleteId(p.id)} className="p-1.5 rounded-lg hover:bg-error/20 text-outline hover:text-error transition-colors">
                              <span className="material-symbols-outlined text-[16px]">delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-outline">Mostrando {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} de {filtered.length.toLocaleString()} productos</p>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage(1)} disabled={safePage === 1} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">first_page</span></button>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let pg: number
                  if (totalPages <= 7) pg = i + 1
                  else if (safePage <= 4) pg = i + 1
                  else if (safePage >= totalPages - 3) pg = totalPages - 6 + i
                  else pg = safePage - 3 + i
                  return <button key={pg} onClick={() => setPage(pg)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${pg === safePage ? 'bg-primary text-on-primary' : 'hover:bg-white/10 text-outline'}`}>{pg}</button>
                })}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                <button onClick={() => setPage(totalPages)} disabled={safePage === totalPages} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">last_page</span></button>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* ── Modal Crear / Editar ─────────────────────────────────────── */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface-container rounded-2xl border border-white/10 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <h3 className="font-headline font-bold text-on-surface text-base">
                {modal.editing ? 'Editar Producto' : 'Nuevo Producto'}
              </h3>
              <button onClick={() => setModal({ open: false, editing: null })} className="p-1.5 rounded-lg hover:bg-white/10 text-outline transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Código (SKU) *</label>
                <input value={form.sku} onChange={e => setForm(f => ({ ...f, sku: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Tipo</label>
                <input value={form.tipo} onChange={e => setForm(f => ({ ...f, tipo: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Fabricante</label>
                <input value={form.fabricante} onChange={e => setForm(f => ({ ...f, fabricante: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Marca</label>
                <input value={form.marca} onChange={e => setForm(f => ({ ...f, marca: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Material</label>
                <input value={form.material} onChange={e => setForm(f => ({ ...f, material: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Espesor</label>
                <input value={form.espesor} onChange={e => setForm(f => ({ ...f, espesor: e.target.value }))}
                  placeholder='ej: 3mm, 1/4"'
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Descripción *</label>
                <input value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Medidas</label>
                <input value={form.medidas} onChange={e => setForm(f => ({ ...f, medidas: e.target.value }))}
                  placeholder="ej: 1.22 x 2.44 m"
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Unidad</label>
                <input value={form.unidad} onChange={e => setForm(f => ({ ...f, unidad: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Precio USD</label>
                <input type="number" min="0" step="0.01" value={form.precioUSD} onChange={e => setForm(f => ({ ...f, precioUSD: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline">Stock Mínimo</label>
                <input type="number" min="0" value={form.stockMin} onChange={e => setForm(f => ({ ...f, stockMin: e.target.value }))}
                  className="bg-surface-container-highest rounded-xl px-3 py-2 text-xs text-on-surface border border-white/10 focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
            </div>
            <div className="flex justify-end gap-3 p-5 border-t border-white/10">
              <Button variant="secondary" onClick={() => setModal({ open: false, editing: null })}>Cancelar</Button>
              <Button onClick={handleSave} disabled={saving || !form.nombre.trim()}>
                {saving ? 'Guardando...' : modal.editing ? 'Guardar cambios' : 'Crear producto'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal Eliminar uno ───────────────────────────────────────── */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface-container rounded-2xl border border-white/10 shadow-2xl w-full max-w-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-error text-[28px]">delete</span>
              <h3 className="font-headline font-bold text-on-surface">Eliminar producto</h3>
            </div>
            <p className="text-sm text-on-surface-variant">¿Estás seguro? Esta acción desactivará el producto del catálogo.</p>
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setDeleteId(null)}>Cancelar</Button>
              <Button variant="danger" onClick={() => handleDelete(deleteId)}>Eliminar</Button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal Eliminar todos ─────────────────────────────────────── */}
      {deleteAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-surface-container rounded-2xl border border-white/10 shadow-2xl w-full max-w-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-error text-[28px]">delete_sweep</span>
              <h3 className="font-headline font-bold text-on-surface">Eliminar todos los productos</h3>
            </div>
            <p className="text-sm text-on-surface-variant">Esta acción eliminará <strong className="text-error">{totalProductos} productos</strong> y todos sus registros de stock. No se puede deshacer.</p>
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setDeleteAll(false)}>Cancelar</Button>
              <Button variant="danger" onClick={handleDeleteAll}>Eliminar todo</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
