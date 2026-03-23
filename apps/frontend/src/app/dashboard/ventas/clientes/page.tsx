'use client'
import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useNotificationStore } from '@/stores/notificationStore'
import api from '@/lib/api'
import * as XLSX from 'xlsx'
import { GeoSelector } from '@/components/ui/GeoSelector'

interface Cliente {
  id: string
  idcima: string | null
  rif: string | null
  nombre: string
  region: string | null
  estado: string | null
  municipio: string | null
  personaContacto: string | null
  telefonoPersonal: string | null
  telefonoFijo: string | null
  direccion: string | null
  email: string | null
  isActive: boolean
  createdAt: string
}

interface ClienteForm {
  idcima: string; rif: string; nombre: string; region: string; estado: string
  municipio: string; personaContacto: string; telefonoPersonal: string
  telefonoFijo: string; direccion: string; email: string
}

const EMPTY_FORM: ClienteForm = {
  idcima: '', rif: '', nombre: '', region: '', estado: '', municipio: '',
  personaContacto: '', telefonoPersonal: '', telefonoFijo: '', direccion: '', email: '',
}

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim()
const getCol = (r: any, ...keys: string[]): string | null => {
  const rKeys = Object.keys(r)
  for (const k of keys) {
    const found = rKeys.find(rk => norm(rk) === norm(k))
    if (found !== undefined) {
      const raw = r[found]
      if (raw === null || raw === undefined) continue
      const v = String(raw).trim()
      if (v) return v
    }
  }
  return null
}

// --- Búsqueda inteligente ---
function scoreCliente(c: Cliente, tokens: string[]): number {
  if (tokens.length === 0) return 1
  const fields = [
    { v: c.nombre,           w: 10 },
    { v: c.rif,              w: 8  },
    { v: c.idcima,           w: 6  },
    { v: c.estado,           w: 5  },
    { v: c.municipio,        w: 5  },
    { v: c.region,           w: 4  },
    { v: c.personaContacto,  w: 4  },
    { v: c.telefonoPersonal, w: 3  },
    { v: c.telefonoFijo,     w: 3  },
    { v: c.email,            w: 3  },
    { v: c.direccion,        w: 2  },
  ]
  let total = 0
  for (const token of tokens) {
    let tokenScore = 0
    for (const { v, w } of fields) {
      if (!v) continue
      const nv = norm(v)
      if (nv === token) { tokenScore = Math.max(tokenScore, w * 3); continue }
      if (nv.startsWith(token)) { tokenScore = Math.max(tokenScore, w * 2); continue }
      if (nv.includes(token)) { tokenScore = Math.max(tokenScore, w); continue }
      // fuzzy: tolera 1 carácter diferente si token >= 4 chars
      if (token.length >= 4 && fuzzyMatch(nv, token)) tokenScore = Math.max(tokenScore, Math.floor(w * 0.6))
    }
    if (tokenScore === 0) return 0 // todos los tokens deben matchear
    total += tokenScore
  }
  return total
}

function fuzzyMatch(text: string, token: string): boolean {
  // sliding window: busca subcadena con máx 1 diferencia
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

function highlight(text: string | null, tokens: string[]): React.ReactNode {
  if (!text || tokens.length === 0) return text ?? '—'
  const escaped = tokens.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  const regex = new RegExp(`(${escaped})`, 'gi')
  const parts = text.split(regex)
  return parts.map((p, i) =>
    regex.test(p) ? <mark key={i} className="bg-primary/30 text-primary rounded px-0.5">{p}</mark> : p
  )
}

export default function ClientesPage() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo' | 'Duplicados'>('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Cliente | null }>({ open: false, editing: null })
  const [form, setForm] = useState<ClienteForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [importedRows, setImportedRows] = useState(0)
  const [deleteAll, setDeleteAll] = useState(false)
  const [mergeModal, setMergeModal] = useState<{ open: boolean; rif: string; group: Cliente[] } | null>(null)
  const [merging, setMerging] = useState(false)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 100
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addNotification = useNotificationStore(s => s.add)

  useEffect(() => { setPage(1) }, [busqueda, filtroEstado])

  const fetchClientes = useCallback(async (search?: string) => {
    setLoading(true)
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : ''
      const res = await api.get(`/ventas/clientes${params}`)
      setClientes(res.data)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  // Notify when RIF duplicates are detected (only on full load, no search filter)
  const prevDupCount = useRef(0)
  useEffect(() => {
    if (loading) return
    const rifCount = new Map<string, number>()
    for (const c of clientes) {
      if (!c.rif) continue
      const key = c.rif.trim().toUpperCase()
      rifCount.set(key, (rifCount.get(key) ?? 0) + 1)
    }
    let dupRecords = 0
    for (const count of rifCount.values()) {
      if (count > 1) dupRecords += count
    }
    if (dupRecords > 0 && dupRecords !== prevDupCount.current) {
      prevDupCount.current = dupRecords
      addNotification({
        type: 'warning',
        title: 'RIFs duplicados detectados',
        message: `${dupRecords} registros tienen un RIF que aparece más de una vez. Revisa la sección de Clientes.`,
        module: 'Ventas',
      })
    } else if (dupRecords === 0) {
      prevDupCount.current = 0
    }
  }, [clientes, loading])

  useEffect(() => { fetchClientes() }, [fetchClientes])
  useEffect(() => {
    const t = setTimeout(() => fetchClientes(busqueda), 300)
    return () => clearTimeout(t)
  }, [busqueda, fetchClientes])

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' })

      if (rows.length > 0) {
        console.log('[Import] Columnas detectadas en Excel:', Object.keys(rows[0]))
        console.log('[Import] Primera fila de ejemplo:', rows[0])
      }

      const formatRif = (raw: any): string | null => {
        if (raw === null || raw === undefined || raw === '') return null
        // Excel may store RIF as a number — convert first
        const v = String(raw).trim()
        if (!v || v === '0') return null
        // Already formatted: J-12345678-9
        if (/^[JVEGjveg]-\d/.test(v)) return v.toUpperCase()
        // Missing dash: J12345678
        if (/^[JVEGjveg]\d/.test(v)) return `${v[0].toUpperCase()}-${v.slice(1)}`
        // Pure number — keep as-is (cedula sin prefijo)
        return v
      }

      const mapped = rows
        .map((r) => ({
          idcima:           getCol(r, 'idcima', 'IDCIMA', 'Id CIMA', 'IDCIMA', 'Id', 'ID') ?? undefined,
          rif:              formatRif(getCol(r, 'RIF', 'rif', 'R.I.F', 'R.I.F.', 'CEDULA', 'cedula', 'Cedula', 'CI', 'C.I', 'C.I.')) ?? undefined,
          nombre:           getCol(r, 'EMPRESA', 'empresa', 'NOMBRE', 'nombre', 'RAZON SOCIAL', 'Razon Social', 'RAZÓN SOCIAL', 'CLIENTE', 'cliente', 'DENOMINACION', 'Denominacion') ?? undefined,
          region:           getCol(r, 'REGIÓN', 'REGION', 'region', 'Región', 'ZONA', 'zona') ?? undefined,
          estado:           getCol(r, 'ESTADO', 'estado', 'Estado', 'ENTIDAD', 'entidad') ?? undefined,
          municipio:        getCol(r, 'MUNICIPIO', 'municipio', 'Municipio', 'CIUDAD', 'ciudad') ?? undefined,
          direccion:        getCol(r, 'DIRECCION', 'DIRECCIÓN', 'direccion', 'Dirección', 'DIRECCION FISCAL', 'Direccion Fiscal') ?? undefined,
          telefonoPersonal: getCol(r, 'TELEFONO PERSONAL', 'TELEFONO', 'telefono', 'Teléfono', 'TELF', 'TELF.', 'TEL', 'TEL.', 'CELULAR', 'celular', 'MOVIL', 'movil') ?? undefined,
          telefonoFijo:     getCol(r, 'TELEFONO FIJO', 'FIJO', 'telefonoFijo', 'TELF FIJO', 'TEL FIJO') ?? undefined,
          email:            getCol(r, 'EMAIL', 'email', 'Email', 'CORREO', 'correo', 'E-MAIL', 'CORREO ELECTRONICO') ?? undefined,
        }))
        // Only skip rows where ALL mapped fields are undefined (truly empty row)
        .filter(r => Object.values(r).some(v => v !== undefined && String(v).trim() !== ''))
        // nombre is required by DB — fallback only after filter
        .map(r => ({ ...r, nombre: r.nombre ?? 'Sin nombre' }))

      console.log(`[Import] ${rows.length} filas en Excel → ${mapped.length} filas a importar (${rows.length - mapped.length} filas completamente vacías omitidas)`)

      try {
        const res = await api.post('/ventas/clientes/bulk', { rows: mapped })
        setImportedRows(res.data.created + res.data.updated)
        await fetchClientes()
        if (res.data.emptyCells?.length > 0) {
          addNotification({ type: 'warning', title: 'Clientes sin RIF', message: `${res.data.emptyCells.length} cliente(s) importados sin RIF.`, module: 'Ventas' })
        }
        if (res.data.errors?.length > 0) {
          console.warn('[Import] Filas con error:', res.data.errors)
          addNotification({ type: 'warning', title: 'Registros con error', message: `${res.data.skipped} registro(s) fallaron. Ver consola para detalles.`, module: 'Ventas' })
        }
        alert(`Importación completada: ${res.data.created} creados, ${res.data.updated} actualizados${res.data.skipped ? `, ${res.data.skipped} con error (ver consola)` : ''}.`)
      } catch (err: any) {
        const msg = err?.response?.data?.message ?? err?.response?.data ?? err?.message ?? String(err)
        console.error('[Import] Error:', err)
        alert(`Error al importar: ${msg}`)
      }
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }

  const handleDeleteAll = async () => {
    try {
      await api.delete('/ventas/clientes')
      setDeleteAll(false); setImportedRows(0); fetchClientes()
    } catch { alert('Error al eliminar.') }
  }

  const openCreate = () => { setForm(EMPTY_FORM); setModal({ open: true, editing: null }) }
  const openEdit = (c: Cliente) => {
    setForm({
      idcima: c.idcima ?? '', rif: c.rif ?? '', nombre: c.nombre,
      region: c.region ?? '', estado: c.estado ?? '', municipio: c.municipio ?? '',
      personaContacto: c.personaContacto ?? '', telefonoPersonal: c.telefonoPersonal ?? '',
      telefonoFijo: c.telefonoFijo ?? '', direccion: c.direccion ?? '', email: c.email ?? '',
    })
    setModal({ open: true, editing: c })
  }

  const handleSave = async () => {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      if (modal.editing) await api.patch(`/ventas/clientes/${modal.editing.id}`, form)
      else await api.post('/ventas/clientes', form)
      setModal({ open: false, editing: null }); fetchClientes(busqueda)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/ventas/clientes/${id}`); setDeleteId(null); fetchClientes(busqueda) }
    catch (e) { console.error(e) }
  }

  const searchTokens = useMemo(() => norm(busqueda).split(/\s+/).filter(Boolean), [busqueda])

  // Detect duplicates by RIF — build both a Set of ids and a Map of rif→group
  const { duplicateIds, rifGroups } = useMemo(() => {
    const rifMap = new Map<string, Cliente[]>()
    for (const c of clientes) {
      if (!c.rif) continue
      const key = c.rif.trim().toUpperCase()
      if (!rifMap.has(key)) rifMap.set(key, [])
      rifMap.get(key)!.push(c)
    }
    const ids = new Set<string>()
    const groups = new Map<string, Cliente[]>()
    for (const [rif, group] of rifMap) {
      if (group.length > 1) {
        group.forEach(c => ids.add(c.id))
        groups.set(rif, group)
      }
    }
    return { duplicateIds: ids, rifGroups: groups }
  }, [clientes])

  const duplicateCount = duplicateIds.size

  const openMergeModal = (c: Cliente) => {
    if (!c.rif) return
    const key = c.rif.trim().toUpperCase()
    const group = rifGroups.get(key)
    if (group) setMergeModal({ open: true, rif: key, group })
  }

  const handleMerge = async (keepId: string) => {
    if (!mergeModal) return
    setMerging(true)
    try {
      // Delete all others in the group, keep only the selected one
      const toDelete = mergeModal.group.filter(c => c.id !== keepId)
      await Promise.all(toDelete.map(c => api.delete(`/ventas/clientes/${c.id}`)))
      setMergeModal(null)
      await fetchClientes()
    } catch (e) { console.error(e) }
    finally { setMerging(false) }
  }

  const filtered = useMemo(() => {
    const scored = clientes
      .map(c => ({ c, score: scoreCliente(c, searchTokens) }))
      .filter(({ c, score }) => {
        if (score === 0) return false
        if (filtroEstado === 'Activo') return c.isActive
        if (filtroEstado === 'Inactivo') return !c.isActive
        if (filtroEstado === 'Duplicados') return duplicateIds.has(c.id)
        return true
      })
    if (searchTokens.length > 0) scored.sort((a, b) => b.score - a.score)
    // When viewing duplicates, group by RIF so they appear together
    else if (filtroEstado === 'Duplicados') {
      scored.sort((a, b) => {
        const ra = (a.c.rif ?? '').toUpperCase()
        const rb = (b.c.rif ?? '').toUpperCase()
        return ra.localeCompare(rb)
      })
    }
    return scored.map(({ c }) => c)
  }, [clientes, searchTokens, filtroEstado, duplicateIds])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const activos = clientes.filter((c) => c.isActive).length

  const FORM_FIELDS: { key: keyof ClienteForm; label: string }[] = [
    { key: 'rif',             label: 'RIF' },
    { key: 'nombre',          label: 'Empresa / Nombre *' },
    { key: 'personaContacto', label: 'Persona de Contacto' },
    { key: 'telefonoPersonal',label: 'Teléfono Personal' },
    { key: 'telefonoFijo',    label: 'Teléfono Fijo' },
    { key: 'direccion',       label: 'Dirección' },
    { key: 'email',           label: 'Email' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Clientes" />
      <div className="flex-1 p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Directorio de Clientes</h2>
            <p className="text-on-surface-variant mt-1 text-xs">{activos} clientes activos registrados.</p>
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
              <span className="material-symbols-outlined text-[16px]">person_add</span>
              Nuevo Cliente
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Clientes</p>
            <h3 className="text-xl font-headline font-bold text-primary">{clientes.length.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">groups</span>En base de datos</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-tertiary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Clientes Activos</p>
            <h3 className="text-xl font-headline font-bold text-tertiary">{activos.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">check_circle</span>Habilitados</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-outline">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Inactivos</p>
            <h3 className="text-xl font-headline font-bold text-outline">{(clientes.length - activos).toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">block</span>Deshabilitados</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-amber-400 cursor-pointer hover:bg-amber-400/5 transition-colors" onClick={() => setFiltroEstado('Duplicados')}>
            <p className="text-[9px] font-spartan uppercase tracking-widest text-amber-400 mb-1">Duplicados</p>
            <h3 className="text-xl font-headline font-bold text-amber-400">{duplicateCount.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">warning</span>Mismo RIF</p>
          </GlassCard>
        </div>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2">
              {(['Todos', 'Activo', 'Inactivo', 'Duplicados'] as const).map((e) => (
                <button key={e} onClick={() => setFiltroEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    filtroEstado === e
                      ? e === 'Duplicados'
                        ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40'
                        : 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}>
                  {e}{e === 'Duplicados' && duplicateCount > 0 && ` (${duplicateCount})`}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar por nombre, RIF, estado, municipio..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-10 py-2.5 text-xs w-80 focus:ring-2 focus:ring-primary/40 text-on-surface" />
              {busqueda && (
                <button onClick={() => setBusqueda('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface transition-colors">
                  <span className="material-symbols-outlined text-[16px]">close</span>
                </button>
              )}
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-3 py-4 w-10 text-center">N°</th>
                  <th className="px-4 py-4">Región</th>
                  <th className="px-4 py-4">Estado</th>
                  <th className="px-4 py-4">Municipio</th>
                  <th className="px-4 py-4">RIF</th>
                  <th className="px-4 py-4">Empresa</th>
                  <th className="px-4 py-4">Persona de<br/>Contacto</th>
                  <th className="px-4 py-4">Dirección</th>
                  <th className="px-4 py-4">Teléfono<br/>Personal</th>
                  <th className="px-4 py-4">Teléfono Fijo</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Estatus</th>
                  <th className="px-4 py-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loading ? (
                  <tr><td colSpan={12} className="py-16 text-center text-outline text-sm">Cargando clientes...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={12} className="py-16 text-center text-outline text-sm">No se encontraron clientes.</td></tr>
                ) : paginated.map((c, i) => (
                  <tr key={c.id} className={`transition-colors align-top ${
                    duplicateIds.has(c.id)
                      ? 'bg-amber-400/10 hover:bg-amber-400/20 border-l-2 border-amber-400'
                      : 'hover:bg-white/5'
                  }`}>
                    <td className="px-3 py-3 text-center text-[11px] font-mono text-outline">{(safePage - 1) * PAGE_SIZE + i + 1}</td>
                    <td className="px-4 py-3 text-xs text-outline">{highlight(c.region, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs text-outline">{highlight(c.estado, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs text-outline">{highlight(c.municipio, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs font-mono text-outline whitespace-nowrap">{highlight(c.rif, searchTokens)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {duplicateIds.has(c.id) && (
                          <button onClick={() => openMergeModal(c)} title="Ver duplicados y unificar"
                            className="shrink-0 hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                          </button>
                        )}
                        <p className={`text-sm font-semibold leading-snug ${duplicateIds.has(c.id) ? 'text-amber-300' : 'text-on-surface'}`}>{highlight(c.nombre, searchTokens)}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-outline">{highlight(c.personaContacto, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs text-outline max-w-[200px]"><span className="block whitespace-normal leading-snug">{highlight(c.direccion, searchTokens)}</span></td>
                    <td className="px-4 py-3 text-xs text-on-surface">{highlight(c.telefonoPersonal, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs text-on-surface">{highlight(c.telefonoFijo, searchTokens)}</td>
                    <td className="px-4 py-3 text-xs text-outline">{highlight(c.email, searchTokens)}</td>
                    <td className="px-4 py-3 whitespace-nowrap"><Badge variant={c.isActive ? 'success' : 'error'}>{c.isActive ? 'Activo' : 'Inactivo'}</Badge></td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(c)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                        <button onClick={() => setDeleteId(c.id)} className="p-1.5 rounded-lg hover:bg-error/20 text-outline hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </GlassCard>

          {totalPages > 1 && (
            <div className="flex items-center justify-between pt-2">
              <p className="text-xs text-outline">Mostrando {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} de {filtered.length.toLocaleString()} clientes</p>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage(1)} disabled={safePage === 1} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">first_page</span></button>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={safePage === 1} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                {Array.from({ length: Math.min(7, totalPages) }, (_, i) => {
                  let p: number
                  if (totalPages <= 7) p = i + 1
                  else if (safePage <= 4) p = i + 1
                  else if (safePage >= totalPages - 3) p = totalPages - 6 + i
                  else p = safePage - 3 + i
                  return <button key={p} onClick={() => setPage(p)} className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${p === safePage ? 'bg-primary text-on-primary' : 'hover:bg-white/10 text-outline'}`}>{p}</button>
                })}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={safePage === totalPages} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
                <button onClick={() => setPage(totalPages)} disabled={safePage === totalPages} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30 transition-colors"><span className="material-symbols-outlined text-[18px]">last_page</span></button>
              </div>
            </div>
          )}
        </section>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-3xl bg-surface-container rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            {/* header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <h3 className="text-sm font-headline font-bold text-on-surface">
                {modal.editing ? 'Editar Cliente' : 'Nuevo Cliente'}
              </h3>
              <button onClick={() => setModal({ open: false, editing: null })}
                className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* body */}
            <div className="px-6 py-3 flex flex-col gap-2.5 overflow-y-auto">
              {/* row 1 */}
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">RIF</label>
                  <input value={form.rif} onChange={e => setForm({ ...form, rif: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Empresa / Nombre *</label>
                  <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>

              {/* row 2 */}
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Persona de Contacto</label>
                  <input value={form.personaContacto} onChange={e => setForm({ ...form, personaContacto: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Teléfono Personal</label>
                  <input value={form.telefonoPersonal} onChange={e => setForm({ ...form, telefonoPersonal: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>

              {/* row 3 */}
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Teléfono Fijo</label>
                  <input value={form.telefonoFijo} onChange={e => setForm({ ...form, telefonoFijo: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Región</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio}
                    onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyRegion />
                </div>
              </div>

              {/* row 4 */}
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Estado</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio}
                    onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyEstado />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Municipio</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio}
                    onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyMunicipio />
                </div>
              </div>

              {/* row 5 — full width */}
              <div>
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Dirección</label>
                <input value={form.direccion} onChange={e => setForm({ ...form, direccion: e.target.value })}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>

              {/* row 6 — left only */}
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Email</label>
                  <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>
            </div>

            {/* footer */}
            <div className="flex gap-3 px-6 py-3 border-t border-white/10 shrink-0">
              <Button onClick={handleSave} disabled={saving} className="flex-1">{saving ? 'Guardando...' : 'Guardar'}</Button>
              <Button variant="secondary" onClick={() => setModal({ open: false, editing: null })} className="flex-1">Cancelar</Button>
            </div>
          </div>
        </div>
      )}

      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-sm p-6 space-y-4 text-center">
            <span className="material-symbols-outlined text-error text-5xl">warning</span>
            <p className="text-on-surface font-semibold">¿Eliminar este cliente?</p>
            <p className="text-outline text-sm">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(deleteId)} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}

      {deleteAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-sm p-6 space-y-4 text-center">
            <span className="material-symbols-outlined text-error text-5xl">delete_sweep</span>
            <p className="text-on-surface font-semibold">¿Eliminar todos los clientes?</p>
            <p className="text-outline text-sm">Se eliminarán {clientes.length} registros. Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={handleDeleteAll} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar todos</button>
              <button onClick={() => setDeleteAll(false)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* ── Modal Unificar Duplicados ─────────────────────────────────────── */}
      {mergeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl bg-surface-container rounded-2xl border border-amber-400/30 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            {/* header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                <div>
                  <h3 className="text-sm font-headline font-bold text-on-surface">RIF Duplicado</h3>
                  <p className="text-[11px] text-amber-400 font-mono mt-0.5">{mergeModal.rif} — {mergeModal.group.length} registros</p>
                </div>
              </div>
              <button onClick={() => setMergeModal(null)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* instrucción */}
            <div className="px-6 py-3 bg-amber-400/5 border-b border-amber-400/10 shrink-0">
              <p className="text-xs text-amber-300">Estos registros comparten el mismo RIF. Pulsa <span className="font-bold">Conservar este</span> en el que quieras mantener — los demás serán eliminados.</p>
            </div>

            {/* tabla comparativa */}
            <div className="overflow-y-auto flex-1">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="sticky top-0 bg-surface-container z-10">
                  <tr className="border-b border-white/10 font-spartan text-[9px] uppercase tracking-widest text-outline">
                    <th className="px-4 py-3">Empresa / Nombre</th>
                    <th className="px-4 py-3">Región</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3">Municipio</th>
                    <th className="px-4 py-3">Persona Contacto</th>
                    <th className="px-4 py-3">Tel. Personal</th>
                    <th className="px-4 py-3">Tel. Fijo</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Dirección</th>
                    <th className="px-4 py-3 text-center">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {mergeModal.group.map((c, idx) => (
                    <tr key={c.id} className={`align-top ${idx % 2 === 0 ? 'bg-amber-400/5' : 'bg-amber-400/10'}`}>
                      <td className="px-4 py-3 font-semibold text-amber-200">{c.nombre}</td>
                      <td className="px-4 py-3 text-outline">{c.region ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{c.estado ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{c.municipio ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{c.personaContacto ?? '—'}</td>
                      <td className="px-4 py-3 text-on-surface">{c.telefonoPersonal ?? '—'}</td>
                      <td className="px-4 py-3 text-on-surface">{c.telefonoFijo ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{c.email ?? '—'}</td>
                      <td className="px-4 py-3 text-outline max-w-[160px]"><span className="block whitespace-normal leading-snug">{c.direccion ?? '—'}</span></td>
                      <td className="px-4 py-3 text-center">
                        <button
                          onClick={() => handleMerge(c.id)}
                          disabled={merging}
                          className="px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 text-[10px] font-spartan font-bold uppercase tracking-widest transition-colors disabled:opacity-50 whitespace-nowrap"
                        >
                          {merging ? '...' : 'Conservar este'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* footer */}
            <div className="px-6 py-3 border-t border-white/10 flex justify-end shrink-0">
              <button onClick={() => setMergeModal(null)} className="px-4 py-2 rounded-xl text-sm text-outline hover:text-on-surface transition-colors">
                Cerrar sin unificar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
