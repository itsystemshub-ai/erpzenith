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

interface Vendedor {
  id: string; idcima: string | null; rif: string | null; nombre: string
  region: string | null; estado: string | null; municipio: string | null
  personaContacto: string | null; direccion: string | null
  telefonoPersonal: string | null; telefonoFijo: string | null
  email: string | null; ciudad: string | null; notas: string | null
  isActive: boolean; createdAt: string
}

interface VendedorForm {
  idcima: string; rif: string; nombre: string; region: string; estado: string
  municipio: string; personaContacto: string; direccion: string
  telefonoPersonal: string; telefonoFijo: string; email: string; ciudad: string; notas: string
}

const EMPTY_FORM: VendedorForm = {
  idcima: '', rif: '', nombre: '', region: '', estado: '', municipio: '',
  personaContacto: '', direccion: '', telefonoPersonal: '', telefonoFijo: '',
  email: '', ciudad: '', notas: '',
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
      if (v !== '') return v
    }
  }
  return null
}

export default function VendedoresPage() {
  const [vendedores, setVendedores] = useState<Vendedor[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo' | 'Duplicados'>('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Vendedor | null }>({ open: false, editing: null })
  const [form, setForm] = useState<VendedorForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [importedRows, setImportedRows] = useState(0)
  const [deleteAll, setDeleteAll] = useState(false)
  const [page, setPage] = useState(1)
  const [mergeModal, setMergeModal] = useState<{ rif: string; group: Vendedor[] } | null>(null)
  const [merging, setMerging] = useState(false)
  const PAGE_SIZE = 100
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addNotification = useNotificationStore(s => s.add)

  useEffect(() => { setPage(1) }, [busqueda, filtroEstado])

  const fetchVendedores = useCallback(async (search?: string) => {
    setLoading(true)
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : ''
      const res = await api.get(`/ventas/vendedores${params}`)
      setVendedores(res.data)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  const prevDupCount = useRef(0)
  useEffect(() => {
    if (loading) return
    const rifCount = new Map<string, number>()
    for (const v of vendedores) {
      if (!v.rif) continue
      const key = v.rif.trim().toUpperCase()
      rifCount.set(key, (rifCount.get(key) ?? 0) + 1)
    }
    let dupRecords = 0
    for (const count of rifCount.values()) { if (count > 1) dupRecords += count }
    if (dupRecords > 0 && dupRecords !== prevDupCount.current) {
      prevDupCount.current = dupRecords
      addNotification({ type: 'warning', title: 'RIFs duplicados en Vendedores', message: `${dupRecords} vendedores tienen un RIF que aparece más de una vez.`, module: 'Ventas' })
    } else if (dupRecords === 0) { prevDupCount.current = 0 }
  }, [vendedores, loading])

  useEffect(() => { fetchVendedores() }, [fetchVendedores])
  useEffect(() => {
    const t = setTimeout(() => fetchVendedores(busqueda), 300)
    return () => clearTimeout(t)
  }, [busqueda, fetchVendedores])

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' })
      if (rows.length > 0) console.log('[Import] Columnas:', Object.keys(rows[0]))
      const mapped = rows
        .map((r) => ({
          idcima:           getCol(r, 'idcima', 'IDCIMA', 'Id CIMA', 'Id', 'ID') ?? undefined,
          rif:              getCol(r, 'RIF', 'rif', 'R.I.F', 'R.I.F.', 'CEDULA', 'cedula') ?? undefined,
          nombre:           getCol(r, 'EMPRESA', 'empresa', 'NOMBRE', 'nombre', 'RAZON SOCIAL', 'Razon Social') ?? undefined,
          region:           getCol(r, 'REGIÓN', 'REGION', 'region', 'Región', 'ZONA') ?? undefined,
          estado:           getCol(r, 'ESTADO', 'estado', 'Estado', 'ENTIDAD') ?? undefined,
          municipio:        getCol(r, 'MUNICIPIO', 'municipio', 'Municipio', 'CIUDAD') ?? undefined,
          personaContacto:  getCol(r, 'PERSONA DE CONTACTO', 'PERSONA DE', 'CONTACTO', 'contacto') ?? undefined,
          direccion:        getCol(r, 'DIRECCION', 'DIRECCIÓN', 'direccion', 'Dirección') ?? undefined,
          telefonoPersonal: getCol(r, 'TELEFONO PERSONAL', 'TELEFONO', 'telefono', 'Teléfono', 'TELF', 'TEL') ?? undefined,
          telefonoFijo:     getCol(r, 'TELEFONO FIJO', 'FIJO', 'telefonoFijo', 'TELF FIJO') ?? undefined,
          email:            getCol(r, 'EMAIL', 'email', 'Email', 'CORREO', 'correo') ?? undefined,
          ciudad:           getCol(r, 'CIUDAD', 'ciudad', 'City') ?? undefined,
          notas:            getCol(r, 'NOTAS', 'notas', 'Notas', 'OBSERVACIONES') ?? undefined,
        }))
        .filter(r => Object.values(r).some(v => v !== undefined && String(v).trim() !== ''))
        .map(r => ({ ...r, nombre: r.nombre ?? 'Sin nombre' }))
      console.log(`[Import] ${rows.length} filas → ${mapped.length} a importar`)
      try {
        const res = await api.post('/ventas/vendedores/bulk', { rows: mapped })
        setImportedRows(res.data.created + res.data.updated)
        await fetchVendedores()
        if (res.data.errors?.length > 0) {
          console.warn('[Import] Errores:', res.data.errors)
          addNotification({ type: 'warning', title: 'Registros con error', message: `${res.data.skipped} registro(s) fallaron.`, module: 'Ventas' })
        }
        alert(`Importación completada: ${res.data.created} creados, ${res.data.updated} actualizados${res.data.skipped ? `, ${res.data.skipped} con error` : ''}.`)
      } catch (err: any) {
        alert(`Error al importar: ${err?.response?.data?.message ?? err?.message ?? 'desconocido'}`)
      }
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }

  const handleDeleteAll = async () => {
    try {
      await api.delete('/ventas/vendedores')
      setDeleteAll(false); setImportedRows(0); fetchVendedores()
    } catch { alert('Error al eliminar.') }
  }

  const openCreate = () => { setForm(EMPTY_FORM); setModal({ open: true, editing: null }) }
  const openEdit = (v: Vendedor) => {
    setForm({
      idcima: v.idcima ?? '', rif: v.rif ?? '', nombre: v.nombre,
      region: v.region ?? '', estado: v.estado ?? '', municipio: v.municipio ?? '',
      personaContacto: v.personaContacto ?? '', direccion: v.direccion ?? '',
      telefonoPersonal: v.telefonoPersonal ?? '', telefonoFijo: v.telefonoFijo ?? '',
      email: v.email ?? '', ciudad: v.ciudad ?? '', notas: v.notas ?? '',
    })
    setModal({ open: true, editing: v })
  }

  const handleSave = async () => {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      if (modal.editing) await api.patch(`/ventas/vendedores/${modal.editing.id}`, form)
      else await api.post('/ventas/vendedores', form)
      setModal({ open: false, editing: null }); fetchVendedores(busqueda)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/ventas/vendedores/${id}`); setDeleteId(null); fetchVendedores(busqueda) }
    catch (e) { console.error(e) }
  }

  const { duplicateIds, rifGroups } = useMemo(() => {
    const rifMap = new Map<string, Vendedor[]>()
    for (const v of vendedores) {
      if (!v.rif) continue
      const key = v.rif.trim().toUpperCase()
      if (!rifMap.has(key)) rifMap.set(key, [])
      rifMap.get(key)!.push(v)
    }
    const ids = new Set<string>()
    const groups = new Map<string, Vendedor[]>()
    for (const [rif, group] of rifMap) {
      if (group.length > 1) { group.forEach(v => ids.add(v.id)); groups.set(rif, group) }
    }
    return { duplicateIds: ids, rifGroups: groups }
  }, [vendedores])

  const duplicateCount = duplicateIds.size

  const openMergeModal = (v: Vendedor) => {
    if (!v.rif) return
    const key = v.rif.trim().toUpperCase()
    const group = rifGroups.get(key)
    if (group) setMergeModal({ rif: key, group })
  }

  const handleMerge = async (keepId: string) => {
    if (!mergeModal) return
    setMerging(true)
    try {
      const toDelete = mergeModal.group.filter(v => v.id !== keepId)
      await Promise.all(toDelete.map(v => api.delete(`/ventas/vendedores/${v.id}`)))
      setMergeModal(null)
      await fetchVendedores()
    } catch (e) { console.error(e) }
    finally { setMerging(false) }
  }

  const filtered = useMemo(() => {
    let list = vendedores.filter(v => {
      if (filtroEstado === 'Activo') return v.isActive
      if (filtroEstado === 'Inactivo') return !v.isActive
      if (filtroEstado === 'Duplicados') return duplicateIds.has(v.id)
      return true
    })
    if (busqueda.trim()) {
      const q = norm(busqueda)
      list = list.filter(v =>
        norm(v.nombre).includes(q) || norm(v.rif ?? '').includes(q) ||
        norm(v.estado ?? '').includes(q) || norm(v.municipio ?? '').includes(q) ||
        norm(v.personaContacto ?? '').includes(q)
      )
    }
    if (filtroEstado === 'Duplicados' && !busqueda.trim()) {
      list = [...list].sort((a, b) => (a.rif ?? '').toUpperCase().localeCompare((b.rif ?? '').toUpperCase()))
    }
    return list
  }, [vendedores, busqueda, filtroEstado, duplicateIds])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const activos = vendedores.filter(v => v.isActive).length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Vendedores" />
      <div className="flex-1 p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Directorio de Vendedores</h2>
            <p className="text-on-surface-variant mt-1 text-xs">{activos} vendedores activos registrados.</p>
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
              Nuevo Vendedor
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Vendedores</p>
            <h3 className="text-xl font-headline font-bold text-primary">{vendedores.length.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">groups</span>En base de datos</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-tertiary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Activos</p>
            <h3 className="text-xl font-headline font-bold text-tertiary">{activos.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">check_circle</span>Habilitados</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-outline">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Inactivos</p>
            <h3 className="text-xl font-headline font-bold text-outline">{(vendedores.length - activos).toLocaleString()}</h3>
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
                      ? e === 'Duplicados' ? 'bg-amber-400/20 text-amber-400 border border-amber-400/40' : 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}>
                  {e}{e === 'Duplicados' && duplicateCount > 0 && ` (${duplicateCount})`}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar por nombre, RIF, estado..."
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
                  <tr><td colSpan={13} className="py-16 text-center text-outline text-sm">Cargando vendedores...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={13} className="py-16 text-center text-outline text-sm">No se encontraron vendedores.</td></tr>
                ) : paginated.map((v, i) => (
                  <tr key={v.id} className={`transition-colors align-top ${
                    duplicateIds.has(v.id) ? 'bg-amber-400/10 hover:bg-amber-400/20 border-l-2 border-amber-400' : 'hover:bg-white/5'
                  }`}>
                    <td className="px-3 py-3 text-center text-[11px] font-mono text-outline">{(safePage - 1) * PAGE_SIZE + i + 1}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.region ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.estado ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.municipio ?? '—'}</td>
                    <td className="px-4 py-3 text-xs font-mono text-outline whitespace-nowrap">{v.rif ?? '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1.5">
                        {duplicateIds.has(v.id) && (
                          <button onClick={() => openMergeModal(v)} title="Ver duplicados y unificar" className="shrink-0 hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-amber-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                          </button>
                        )}
                        <p className={`text-sm font-semibold leading-snug ${duplicateIds.has(v.id) ? 'text-amber-300' : 'text-on-surface'}`}>{v.nombre}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-outline">{v.personaContacto ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline max-w-[200px]"><span className="block whitespace-normal leading-snug">{v.direccion ?? '—'}</span></td>
                    <td className="px-4 py-3 text-xs text-on-surface">{v.telefonoPersonal ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface">{v.telefonoFijo ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.email ?? '—'}</td>
                    <td className="px-4 py-3 whitespace-nowrap"><Badge variant={v.isActive ? 'success' : 'error'}>{v.isActive ? 'Activo' : 'Inactivo'}</Badge></td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(v)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                        <button onClick={() => setDeleteId(v.id)} className="p-1.5 rounded-lg hover:bg-error/20 text-outline hover:text-error transition-colors">
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
              <p className="text-xs text-outline">Mostrando {(safePage - 1) * PAGE_SIZE + 1}–{Math.min(safePage * PAGE_SIZE, filtered.length)} de {filtered.length.toLocaleString()} vendedores</p>
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

      {/* Modal Crear/Editar */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-3xl bg-surface-container rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <h3 className="text-sm font-headline font-bold text-on-surface">{modal.editing ? 'Editar Vendedor' : 'Nuevo Vendedor'}</h3>
              <button onClick={() => setModal({ open: false, editing: null })} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="px-6 py-3 flex flex-col gap-2.5 overflow-y-auto">
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">RIF</label>
                  <input value={form.rif} onChange={e => setForm({ ...form, rif: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Empresa / Nombre *</label>
                  <input value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Persona de Contacto</label>
                  <input value={form.personaContacto} onChange={e => setForm({ ...form, personaContacto: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Teléfono Personal</label>
                  <input value={form.telefonoPersonal} onChange={e => setForm({ ...form, telefonoPersonal: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Teléfono Fijo</label>
                  <input value={form.telefonoFijo} onChange={e => setForm({ ...form, telefonoFijo: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Región</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio} onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyRegion />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Estado</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio} onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyEstado />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Municipio</label>
                  <GeoSelector region={form.region} estado={form.estado} municipio={form.municipio} onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))} onlyMunicipio />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Dirección</label>
                <input value={form.direccion} onChange={e => setForm({ ...form, direccion: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Email</label>
                  <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Ciudad</label>
                  <input value={form.ciudad} onChange={e => setForm({ ...form, ciudad: e.target.value })} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">Notas</label>
                <textarea value={form.notas} onChange={e => setForm({ ...form, notas: e.target.value })} rows={2} className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none resize-none" />
              </div>
            </div>
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
            <p className="text-on-surface font-semibold">¿Eliminar este vendedor?</p>
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
            <p className="text-on-surface font-semibold">¿Eliminar todos los vendedores?</p>
            <p className="text-outline text-sm">Se eliminarán {vendedores.length} registros. Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={handleDeleteAll} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar todos</button>
              <button onClick={() => setDeleteAll(false)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Modal Unificar Duplicados */}
      {mergeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-4xl bg-surface-container rounded-2xl border border-amber-400/30 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
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
            <div className="px-6 py-3 bg-amber-400/5 border-b border-amber-400/10 shrink-0">
              <p className="text-xs text-amber-300">Estos registros comparten el mismo RIF. Pulsa <span className="font-bold">Conservar este</span> en el que quieras mantener — los demás serán eliminados.</p>
            </div>
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
                  {mergeModal.group.map((v, idx) => (
                    <tr key={v.id} className={`align-top ${idx % 2 === 0 ? 'bg-amber-400/5' : 'bg-amber-400/10'}`}>
                      <td className="px-4 py-3 font-semibold text-amber-200">{v.nombre}</td>
                      <td className="px-4 py-3 text-outline">{v.region ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{v.estado ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{v.municipio ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{v.personaContacto ?? '—'}</td>
                      <td className="px-4 py-3 text-on-surface">{v.telefonoPersonal ?? '—'}</td>
                      <td className="px-4 py-3 text-on-surface">{v.telefonoFijo ?? '—'}</td>
                      <td className="px-4 py-3 text-outline">{v.email ?? '—'}</td>
                      <td className="px-4 py-3 text-outline max-w-[160px]"><span className="block whitespace-normal leading-snug">{v.direccion ?? '—'}</span></td>
                      <td className="px-4 py-3 text-center">
                        <button onClick={() => handleMerge(v.id)} disabled={merging}
                          className="px-3 py-1.5 rounded-lg bg-amber-400/20 hover:bg-amber-400/40 text-amber-300 text-[10px] font-spartan font-bold uppercase tracking-widest transition-colors disabled:opacity-50 whitespace-nowrap">
                          {merging ? '...' : 'Conservar este'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
