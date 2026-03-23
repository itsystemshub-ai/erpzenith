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

interface Vendedor {
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
  ciudad: string | null
  notas: string | null
  isActive: boolean
  createdAt: string
}

interface VendedorForm {
  idcima: string; rif: string; nombre: string; region: string; estado: string
  municipio: string; personaContacto: string; direccion: string
  telefonoPersonal: string; telefonoFijo: string; ciudad: string; notas: string
}

const EMPTY_FORM: VendedorForm = {
  idcima: '', rif: '', nombre: '', region: '', estado: '', municipio: '',
  personaContacto: '', direccion: '', telefonoPersonal: '', telefonoFijo: '', ciudad: '', notas: '',
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

export default function VendedoresPage() {
  const [vendedores, setVendedores] = useState<Vendedor[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo'>('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Vendedor | null }>({ open: false, editing: null })
  const [form, setForm] = useState<VendedorForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [importedRows, setImportedRows] = useState(0)
  const [deleteAll, setDeleteAll] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addNotification = useNotificationStore(s => s.add)

  const fetchVendedores = useCallback(async (search?: string) => {
    setLoading(true)
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : ''
      const res = await api.get(`/ventas/vendedores${params}`)
      setVendedores(res.data)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

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
        const res = await api.post('/ventas/vendedores/bulk', { rows: mapped })
        setImportedRows(res.data.created + res.data.updated)
        await fetchVendedores()
        if (res.data.emptyCells?.length > 0) {
          addNotification({ type: 'warning', title: 'Vendedores con celdas vacías', message: `${res.data.emptyCells.length} vendedor(es) importados sin RIF. Revisa y completa los datos.`, module: 'Ventas' })
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

  const handleDeleteAll = async () => {
    try {
      for (const v of vendedores) await api.delete(`/ventas/vendedores/${v.id}`)
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
      ciudad: v.ciudad ?? '', notas: v.notas ?? '',
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

  const filtered = vendedores.filter((v) => {
    if (filtroEstado === 'Activo') return v.isActive
    if (filtroEstado === 'Inactivo') return !v.isActive
    return true
  })
  const activos = vendedores.filter((v) => v.isActive).length

  const FORM_FIELDS: { key: keyof VendedorForm; label: string }[] = [
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
    { key: 'ciudad', label: 'Ciudad' },
    { key: 'notas', label: 'Notas' },
  ]

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

        <div className="grid grid-cols-3 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Vendedores</p>
            <h3 className="text-xl font-headline font-bold text-primary">{vendedores.length.toLocaleString()}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">badge</span>En base de datos</p>
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
        </div>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2">
              {(['Todos', 'Activo', 'Inactivo'] as const).map((e) => (
                <button key={e} onClick={() => setFiltroEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${filtroEstado === e ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'}`}>
                  {e}
                </button>
              ))}
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar por nombre, RIF..."
                className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-80 focus:ring-2 focus:ring-primary/40 text-on-surface" />
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-primary/40 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary/70">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-4 py-4">N°</th>
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
                  <tr><td colSpan={10} className="py-16 text-center text-outline text-sm">Cargando vendedores...</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={10} className="py-16 text-center text-outline text-sm">No se encontraron vendedores.</td></tr>
                ) : filtered.map((v, i) => (
                  <tr key={v.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-[11px] font-mono text-outline">{i + 1}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.region ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.estado ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.municipio ?? '—'}</td>
                    <td className="px-4 py-3 text-xs font-mono text-outline">{v.rif ?? '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-primary">{v.nombre.split(' ').map((n: string) => n[0]).slice(0, 2).join('')}</span>
                        </div>
                        <p className="text-sm font-semibold text-on-surface">{v.nombre}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-outline">{v.personaContacto ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.direccion ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface">{v.telefonoPersonal ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface">{v.telefonoFijo ?? '—'}</td>
                    <td className="px-4 py-3 text-xs text-outline">{v.email ?? '—'}</td>
                    <td className="px-4 py-3"><Badge variant={v.isActive ? 'success' : 'error'}>{v.isActive ? 'Activo' : 'Inactivo'}</Badge></td>
                    <td className="px-4 py-3 text-right">
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
        </section>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-md p-6 space-y-3 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-headline font-bold text-on-surface">{modal.editing ? 'Editar Vendedor' : 'Nuevo Vendedor'}</h3>
            {FORM_FIELDS.filter(f => !['region','estado','municipio'].includes(f.key)).map(({ key, label }) => (
              <div key={key}>
                <label className="text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1">{label}</label>
                <input value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none" />
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
    </div>
  )
}
