'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useNotificationStore } from '@/stores/notificationStore'
import api from '@/lib/api'
import * as XLSX from 'xlsx'
import { GeoSelector } from '@/components/ui/GeoSelector'

interface Proveedor {
  id: string
  idcima: string | null
  rif: string | null
  nombre: string
  region: string | null
  estado: string | null
  municipio: string | null
  personaContacto: string | null
  direccion: string | null
  telefonoPersonal: string | null
  telefonoFijo: string | null
  email: string | null
  isActive: boolean
  createdAt: string
}

interface ProveedorForm {
  idcima: string; rif: string; nombre: string; region: string; estado: string
  municipio: string; personaContacto: string; direccion: string
  telefonoPersonal: string; telefonoFijo: string; email: string
}

const EMPTY_FORM: ProveedorForm = {
  idcima: '', rif: '', nombre: '', region: '', estado: '', municipio: '',
  personaContacto: '', direccion: '', telefonoPersonal: '', telefonoFijo: '', email: '',
}

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const getCol = (r: any, ...keys: string[]): string | null => {
  const rKeys = Object.keys(r)
  for (const k of keys) {
    const found = rKeys.find(rk => norm(rk) === norm(k))
    if (found !== undefined) { const v = String(r[found] ?? '').trim(); if (v) return v }
  }
  return null
}

export default function ProveedoresPage() {
  const [proveedores, setProveedores] = useState<Proveedor[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo'>('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Proveedor | null }>({ open: false, editing: null })
  const [form, setForm] = useState<ProveedorForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleteAll, setDeleteAll] = useState(false)
  const [importedRows, setImportedRows] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addNotification = useNotificationStore(s => s.add)

  const fetchProveedores = useCallback(async (search?: string) => {
    setLoading(true)
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : ''
      const res = await api.get(`/compras/proveedores${params}`)
      setProveedores(res.data)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  useEffect(() => { fetchProveedores() }, [fetchProveedores])
  useEffect(() => {
    const t = setTimeout(() => fetchProveedores(busqueda), 300)
    return () => clearTimeout(t)
  }, [busqueda, fetchProveedores])

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' })
      const mapped = rows.map((r) => ({
        idcima:          getCol(r, 'idcima', 'IDCIMA', 'Id', 'ID') ?? undefined,
        rif:             getCol(r, 'RIF', 'rif', 'Rif') ?? undefined,
        nombre:          getCol(r, 'EMPRESA', 'empresa', 'NOMBRE', 'nombre', 'RAZON SOCIAL', 'Razon Social') ?? 'Sin nombre',
        region:          getCol(r, 'REGIÓN', 'REGION', 'region', 'Región') ?? undefined,
        estado:          getCol(r, 'ESTADO', 'estado', 'Estado') ?? undefined,
        municipio:       getCol(r, 'MUNICIPIO', 'municipio', 'Municipio') ?? undefined,
        personaContacto: getCol(r, 'PERSONA DE CONTACTO', 'PERSONA DE', 'CONTACTO', 'contacto') ?? undefined,
        direccion:       getCol(r, 'DIRECCION', 'DIRECCIÓN', 'direccion', 'Dirección') ?? undefined,
        telefonoPersonal:getCol(r, 'TELEFONO PERSONAL', 'TELEFONO', 'telefono', 'Teléfono', 'TELF') ?? undefined,
        telefonoFijo:    getCol(r, 'TELEFONO FIJO', 'telefonoFijo', 'FIJO') ?? undefined,
        email:           getCol(r, 'EMAIL', 'email', 'Email', 'CORREO') ?? undefined,
      }))
      try {
        const res = await api.post('/compras/proveedores/bulk', { rows: mapped })
        setImportedRows(res.data.created + res.data.updated)
        await fetchProveedores()
        if (res.data.emptyCells?.length > 0) {
          addNotification({ type: 'warning', title: 'Proveedores con celdas vacías', message: `${res.data.emptyCells.length} proveedor(es) importados sin RIF. Revisa y completa los datos.`, module: 'Compras' })
        }
        alert(`Importación completada: ${res.data.created} creados, ${res.data.updated} actualizados.`)
      } catch (err: any) {
        console.error('Import error:', err?.response?.data ?? err)
        alert(`Error al importar: ${err?.response?.data?.message ?? err?.message ?? 'desconocido'}`)
      }
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }

  const openCreate = () => { setForm(EMPTY_FORM); setModal({ open: true, editing: null }) }
  const openEdit = (p: Proveedor) => {
    setForm({
      idcima: p.idcima ?? '', rif: p.rif ?? '', nombre: p.nombre,
      region: p.region ?? '', estado: p.estado ?? '', municipio: p.municipio ?? '',
      personaContacto: p.personaContacto ?? '', direccion: p.direccion ?? '',
      telefonoPersonal: p.telefonoPersonal ?? '', telefonoFijo: p.telefonoFijo ?? '', email: p.email ?? '',
    })
    setModal({ open: true, editing: p })
  }

  const handleSave = async () => {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      if (modal.editing) await api.patch(`/compras/proveedores/${modal.editing.id}`, form)
      else await api.post('/compras/proveedores', form)
      setModal({ open: false, editing: null }); fetchProveedores(busqueda)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/compras/proveedores/${id}`); setDeleteId(null); fetchProveedores(busqueda) }
    catch (e) { console.error(e) }
  }

  const handleDeleteAll = async () => {
    try {
      for (const p of proveedores) await api.delete(`/compras/proveedores/${p.id}`)
      setDeleteAll(false); setImportedRows(0); fetchProveedores()
    } catch { alert('Error al eliminar.') }
  }

  const filtered = proveedores.filter((p) => {
    if (filtroEstado === 'Activo') return p.isActive
    if (filtroEstado === 'Inactivo') return !p.isActive
    return true
  })
  const activos = proveedores.filter(p => p.isActive).length

  const FORM_FIELDS: { key: keyof ProveedorForm; label: string }[] = [
    { key: 'nombre', label: 'Empresa / Nombre *' },
    { key: 'idcima', label: 'ID CIMA' },
    { key: 'rif', label: 'RIF' },
    { key: 'region', label: 'Región' },
    { key: 'estado', label: 'Estado (Venezuela)' },
    { key: 'municipio', label: 'Municipio' },
    { key: 'personaContacto', label: 'Persona de Contacto' },
    { key: 'direccion', label: 'Dirección' },
    { key: 'telefonoPersonal', label: 'Teléfono Personal' },
    { key: 'telefonoFijo', label: 'Teléfono Fijo' },
    { key: 'email', label: 'Email' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Proveedores" />
      <div className="flex-1 p-6 space-y-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Directorio de Proveedores</h2>
            <p className="text-on-surface-variant mt-1 text-xs">{activos} proveedores activos registrados.</p>
          </div>
          <div className="flex gap-2 items-center">
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleImport} />
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              Importar Excel
              {importedRows > 0 && (
                <span className="ml-1 bg-primary/30 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">+{importedRows}</span>
              )}
            </Button>
            <button
              onClick={() => setDeleteAll(true)}
              title="Eliminar todos los proveedores"
              className="p-1.5 rounded-lg bg-error/10 hover:bg-error/20 text-error transition-colors border border-error/20"
            >
              <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
            </button>
            <Button size="sm" onClick={openCreate}>
              <span className="material-symbols-outlined text-[16px]">add_circle</span>
              Nuevo Proveedor
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Proveedores</p>
            <h3 className="text-xl font-headline font-bold text-primary">{proveedores.length.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">business</span>En base de datos</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-tertiary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Activos</p>
            <h3 className="text-xl font-headline font-bold text-tertiary">{activos.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">check_circle</span>Habilitados</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-outline">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Inactivos</p>
            <h3 className="text-xl font-headline font-bold text-outline">{(proveedores.length - activos).toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">block</span>Deshabilitados</p>
          </GlassCard>
        </div>

        {/* Filtros y tabla */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2">
              {(['Todos', 'Activo', 'Inactivo'] as const).map((e) => (
                <button key={e} onClick={() => setFiltroEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    filtroEstado === e ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}>{e}</button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre, RIF o región..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-80 focus:ring-2 focus:ring-primary/40 text-on-surface" />
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
                  <tr><td colSpan={13} className="py-16 text-center text-outline text-sm">Cargando proveedores...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={13} className="py-16 text-center text-outline text-sm">No se encontraron proveedores.</td></tr>
                ) : filtered.map((p, i) => (
                  <tr key={p.id} className="hover:bg-white/5 transition-colors align-top">
                    <td className="px-3 py-3 text-center text-[11px] font-mono text-outline">{i + 1}</td>
                    <td className="px-4 py-3 text-xs text-outline">{p.region ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{p.estado ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{p.municipio ?? '—'}</td>
                    <td className="px-4 py-3 text-xs font-mono text-outline whitespace-nowrap">{p.rif ?? '—'}</td>
                    <td className="px-4 py-3"><p className="text-sm font-semibold text-on-surface leading-snug">{p.nombre}</p></td>
                    <td className="px-4 py-3 text-xs text-outline">{p.personaContacto ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline max-w-[200px]"><span className="block whitespace-normal leading-snug">{p.direccion ?? '—'}</span></td>
                    <td className="px-4 py-3 text-xs text-on-surface">{p.telefonoPersonal ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface">{p.telefonoFijo ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{p.email ?? '—'}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Badge variant={p.isActive ? 'success' : 'error'}>{p.isActive ? 'Activo' : 'Inactivo'}</Badge>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
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
                ))}
              </tbody>
            </table>
            </div>
          </GlassCard>
        </section>
      </div>

      {/* Modal crear/editar */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-md p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-headline font-bold text-on-surface">
              {modal.editing ? 'Editar Proveedor' : 'Nuevo Proveedor'}
            </h3>
            {FORM_FIELDS.filter(f => !['region','estado','municipio'].includes(f.key)).map(({ key, label }) => (
              <div key={key}>
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">{label}</label>
                <input value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
              </div>
            ))}
            <GeoSelector
              region={form.region} estado={form.estado} municipio={form.municipio}
              onChange={(field, value) => setForm(f => ({ ...f, [field]: value }))}
            />
            <div className="flex gap-3 pt-2">
              <Button onClick={handleSave} disabled={saving} className="flex-1">{saving ? 'Guardando...' : 'Guardar'}</Button>
              <Button variant="secondary" onClick={() => setModal({ open: false, editing: null })} className="flex-1">Cancelar</Button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Modal confirmar eliminar */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-sm p-6 space-y-4 text-center">
            <span className="material-symbols-outlined text-error text-5xl">warning</span>
            <p className="text-on-surface font-semibold">¿Eliminar este proveedor?</p>
            <p className="text-outline text-sm">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(deleteId)} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Modal confirmar eliminar todos */}
      {deleteAll && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-sm p-6 space-y-4 text-center">
            <span className="material-symbols-outlined text-error text-5xl">delete_sweep</span>
            <p className="text-on-surface font-semibold">¿Eliminar todos los proveedores?</p>
            <p className="text-outline text-sm">Se eliminarán {proveedores.length} registros. Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={handleDeleteAll} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar todos</button>
              <button onClick={() => setDeleteAll(false)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  )
}
