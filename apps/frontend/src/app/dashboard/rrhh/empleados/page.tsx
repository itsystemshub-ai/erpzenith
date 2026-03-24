'use client'
import { useState, useCallback, useRef, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { useRrhhStore } from '@/stores/rrhhStore'
import { QK } from '@/lib/queryKeys'
import api from '@/lib/api'
import { GeoSelector } from '@/components/ui/GeoSelector'
import * as XLSX from 'xlsx'

interface Empleado {
  id: string; cedula: string; nombre: string; apellido: string
  email: string; cargo: string; departamento: string
  salarioUSD: number; fechaIngreso: string; estado: string
  estadoGeo?: string; municipio?: string; direccion?: string; telefono?: string
}

const estadoVariant: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  ACTIVO: 'success', VACACIONES: 'warning', BAJA_TEMPORAL: 'error', INACTIVO: 'info',
}
const estadoLabel: Record<string, string> = {
  ACTIVO: 'Activo', VACACIONES: 'Vacaciones', BAJA_TEMPORAL: 'Baja Temporal', INACTIVO: 'Inactivo',
}
const ESTADOS_FILTRO = ['Todos', 'ACTIVO', 'VACACIONES', 'BAJA_TEMPORAL', 'INACTIVO']

const EMPTY_FORM = {
  cedula: '', nombre: '', apellido: '', email: '', cargo: '', departamento: '',
  salarioUSD: '', fechaIngreso: '', estado: 'ACTIVO',
  estadoGeo: '', municipio: '', direccion: '', telefono: '',
}

const inputClass = 'w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none [&>option]:bg-[#222a3d] [&>option]:text-on-surface'
const labelClass = 'text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1'

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

export default function EmpleadosPage() {
  const { filtros, setFiltro } = useRrhhStore()
  const [estadoFiltro, setEstadoFiltro] = useState('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Empleado | null }>({ open: false, editing: null })
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [nominaModal, setNominaModal] = useState(false)
  const [nominaPeriodo, setNominaPeriodo] = useState(() => new Date().toISOString().slice(0, 7))
  const [nominaLoading, setNominaLoading] = useState(false)
  const [nominaResult, setNominaResult] = useState<any>(null)
  const [page, setPage] = useState(1)
  const PAGE_SIZE = 100
  const fileInputRef = useRef<HTMLInputElement>(null)

  const { data: empleados = [], isLoading, refetch } = useErpQuery<Empleado[]>(
    QK.rrhh.empleados(), '/rrhh/empleados', { refetchInterval: 60_000 }
  )

  const filtrados = useMemo(() => {
    return empleados.filter((e) => {
      const q = norm(filtros.search)
      const matchSearch = !q || norm(e.nombre).includes(q) || norm(e.apellido).includes(q) || e.cedula.includes(q) || norm(e.cargo).includes(q)
      const matchDepto = !filtros.departamento || e.departamento === filtros.departamento
      const matchEstado = estadoFiltro === 'Todos' || e.estado === estadoFiltro
      return matchSearch && matchDepto && matchEstado
    })
  }, [empleados, filtros, estadoFiltro])

  const activos = empleados.filter((e) => e.estado === 'ACTIVO').length
  const vacaciones = empleados.filter((e) => e.estado === 'VACACIONES').length
  const deptos = [...new Set(empleados.map((e) => e.departamento))].filter(Boolean).sort()
  const initials = (e: Empleado) => (e.nombre[0] ?? '') + (e.apellido[0] ?? '')

  const setF = (k: keyof typeof EMPTY_FORM) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: ev.target.value }))

  const openCreate = () => { setForm({ ...EMPTY_FORM }); setModal({ open: true, editing: null }) }
  const openEdit = (emp: Empleado) => {
    setForm({
      cedula: emp.cedula, nombre: emp.nombre, apellido: emp.apellido,
      email: emp.email ?? '', cargo: emp.cargo, departamento: emp.departamento,
      salarioUSD: String(emp.salarioUSD), fechaIngreso: emp.fechaIngreso?.slice(0, 10) ?? '',
      estado: emp.estado, estadoGeo: emp.estadoGeo ?? '', municipio: emp.municipio ?? '',
      direccion: emp.direccion ?? '', telefono: emp.telefono ?? '',
    })
    setModal({ open: true, editing: emp })
  }

  const handleSave = async () => {
    if (!form.cedula || !form.nombre || !form.apellido) return
    setSaving(true)
    try {
      const payload = {
        ...form,
        salarioUSD: parseFloat(form.salarioUSD) || 0,
        fechaIngreso: form.fechaIngreso ? new Date(form.fechaIngreso).toISOString() : undefined,
      }
      if (modal.editing) await api.patch(`/rrhh/empleados/${modal.editing.id}`, payload)
      else await api.post('/rrhh/empleados', payload)
      setModal({ open: false, editing: null }); refetch()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/rrhh/empleados/${id}`); setDeleteId(null); refetch() }
    catch (e) { console.error(e) }
  }

  const handleImport = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' })
      const mapped = rows
        .map(r => ({
          cedula:       getCol(r, 'CEDULA', 'cedula', 'Cédula', 'CI') ?? '',
          nombre:       getCol(r, 'NOMBRE', 'nombre', 'Nombre') ?? '',
          apellido:     getCol(r, 'APELLIDO', 'apellido', 'Apellido') ?? '',
          email:        getCol(r, 'EMAIL', 'email', 'Email', 'CORREO') ?? '',
          cargo:        getCol(r, 'CARGO', 'cargo', 'Cargo', 'PUESTO') ?? '',
          departamento: getCol(r, 'DEPARTAMENTO', 'departamento', 'Depto', 'DEPTO') ?? '',
          salarioUSD:   parseFloat(getCol(r, 'SALARIO', 'salarioUSD', 'SALARIO USD', 'Salario') ?? '0') || 0,
          fechaIngreso: getCol(r, 'FECHA INGRESO', 'fechaIngreso', 'INGRESO') ?? new Date().toISOString(),
          estado:       getCol(r, 'ESTADO', 'estado', 'Estado', 'ESTATUS') ?? 'ACTIVO',
          estadoGeo:    getCol(r, 'ESTADO GEO', 'estadoGeo', 'ESTADO VZL') ?? undefined,
          municipio:    getCol(r, 'MUNICIPIO', 'municipio', 'Municipio') ?? undefined,
          telefono:     getCol(r, 'TELEFONO', 'telefono', 'Teléfono', 'TEL') ?? undefined,
          direccion:    getCol(r, 'DIRECCION', 'direccion', 'Dirección') ?? undefined,
        }))
        .filter(r => r.cedula && r.nombre)
      let created = 0, errors = 0
      for (const row of mapped) {
        try { await api.post('/rrhh/empleados', row); created++ }
        catch { errors++ }
      }
      refetch()
      alert(`Importación: ${created} creados${errors ? `, ${errors} con error` : ''}.`)
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }, [refetch])

  const handleNomina = async () => {
    setNominaLoading(true)
    try {
      const res = await api.post('/rrhh/nomina/calcular', { periodo: nominaPeriodo + '-01' })
      setNominaResult(res.data)
    } catch (e: any) {
      alert(`Error: ${e?.response?.data?.message ?? e?.message}`)
    } finally { setNominaLoading(false) }
  }

  const totalPages = Math.max(1, Math.ceil(filtrados.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginated = filtrados.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Directorio de Empleados" />
      <div className="flex-1 p-6 space-y-4 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-on-surface font-headline tracking-tight">Empleados</h2>
            <p className="text-on-surface-variant mt-0.5 text-xs">Directorio completo del personal.</p>
          </div>
          <div className="flex gap-2 items-center">
            <input ref={fileInputRef} type="file" accept=".xlsx,.xls,.csv" className="hidden" onChange={handleImport} />
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
              <span className="material-symbols-outlined text-[16px]">upload_file</span>
              Importar
            </Button>
            <Button variant="secondary" size="sm" onClick={() => { setNominaResult(null); setNominaModal(true) }}>
              <span className="material-symbols-outlined text-[16px]">payments</span>
              Nómina
            </Button>
            <Button size="sm" onClick={openCreate}>
              <span className="material-symbols-outlined text-[16px]">person_add</span>
              Nuevo Empleado
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <GlassCard className="p-3 border-l-2 border-primary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Total Empleados</p>
            <h3 className="text-xl font-headline font-bold text-primary">{isLoading ? '—' : empleados.length}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">group</span>En nómina</p>
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-tertiary">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">Activos</p>
            <h3 className="text-xl font-headline font-bold text-tertiary">{isLoading ? '—' : activos}</h3>
            {empleados.length > 0 && (
              <div className="w-full bg-surface-container-highest rounded-full h-1 mt-2">
                <div className="bg-tertiary h-1 rounded-full" style={{ width: `${(activos / empleados.length) * 100}%` }} />
              </div>
            )}
          </GlassCard>
          <GlassCard className="p-3 border-l-2 border-amber-400">
            <p className="text-[9px] font-spartan uppercase tracking-widest text-outline mb-1">En Vacaciones</p>
            <h3 className="text-xl font-headline font-bold text-amber-400">{isLoading ? '—' : vacaciones}</h3>
            <p className="text-[10px] text-outline mt-1 flex items-center gap-1"><span className="material-symbols-outlined text-xs">beach_access</span>Ausentes</p>
          </GlassCard>
        </div>

        <GlassCard className="overflow-hidden">
          <div className="px-4 py-3 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <h3 className="text-sm font-bold text-on-surface font-headline">Directorio</h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[16px]">search</span>
                <input value={filtros.search} onChange={(e) => setFiltro('search', e.target.value)} placeholder="Nombre, cédula, cargo..."
                  className="pl-8 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-48" />
              </div>
              <select value={filtros.departamento} onChange={(e) => setFiltro('departamento', e.target.value)}
                className="px-3 py-2 bg-surface-container-high border border-white/10 rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 [&>option]:bg-[#222a3d] [&>option]:text-on-surface">
                <option value="">Todos los deptos</option>
                {deptos.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <select value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}
                className="px-3 py-2 bg-surface-container-high border border-white/10 rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 [&>option]:bg-[#222a3d] [&>option]:text-on-surface">
                {ESTADOS_FILTRO.map((s) => <option key={s} value={s}>{s === 'Todos' ? 'Todos' : estadoLabel[s]}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-3 py-3 w-8 text-center">N°</th>
                  <th className="px-3 py-3">Empleado</th>
                  <th className="px-3 py-3">Cédula</th>
                  <th className="px-3 py-3">Cargo</th>
                  <th className="px-3 py-3">Depto.</th>
                  <th className="px-3 py-3">Estado Vzla</th>
                  <th className="px-3 py-3">Municipio</th>
                  <th className="px-3 py-3">Ingreso</th>
                  <th className="px-3 py-3">Salario USD</th>
                  <th className="px-3 py-3">Estatus</th>
                  <th className="px-3 py-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}>{Array.from({ length: 11 }).map((_, j) => (
                      <td key={j} className="px-3 py-3"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                    ))}</tr>
                  ))
                ) : filtrados.length === 0 ? (
                  <tr><td colSpan={11} className="py-16 text-center text-outline text-sm">No se encontraron empleados.</td></tr>
                ) : paginated.map((emp, i) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors align-top">
                    <td className="px-3 py-3 text-center text-[11px] font-mono text-outline">{(safePage - 1) * PAGE_SIZE + i + 1}</td>
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">{initials(emp)}</div>
                        <p className="text-xs font-semibold text-on-surface whitespace-nowrap">{emp.nombre} {emp.apellido}</p>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs font-mono text-outline">{emp.cedula}</td>
                    <td className="px-3 py-3 text-xs text-on-surface max-w-[140px] truncate">{emp.cargo}</td>
                    <td className="px-3 py-3 text-xs text-outline">{emp.departamento}</td>
                    <td className="px-3 py-3 text-xs text-outline">{emp.estadoGeo ?? '—'}</td>
                    <td className="px-3 py-3 text-xs text-outline">{emp.municipio ?? '—'}</td>
                    <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">{new Date(emp.fechaIngreso).toLocaleDateString('es-VE')}</td>
                    <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">${Number(emp.salarioUSD).toLocaleString()}</td>
                    <td className="px-3 py-3"><Badge variant={estadoVariant[emp.estado] ?? 'info'}>{estadoLabel[emp.estado] ?? emp.estado}</Badge></td>
                    <td className="px-3 py-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => openEdit(emp)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                        <button onClick={() => setDeleteId(emp.id)} className="p-1.5 rounded-lg hover:bg-error/20 text-outline hover:text-error transition-colors">
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {totalPages > 1 ? (
            <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between">
              <p className="text-xs text-outline">Mostrando {(safePage-1)*PAGE_SIZE+1}–{Math.min(safePage*PAGE_SIZE, filtrados.length)} de {filtrados.length}</p>
              <div className="flex items-center gap-1">
                <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={safePage===1} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
                <span className="text-xs text-outline px-2">{safePage} / {totalPages}</span>
                <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={safePage===totalPages} className="p-1.5 rounded-lg hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
              </div>
            </div>
          ) : (
            <div className="px-4 py-3 border-t border-white/5">
              <p className="text-xs text-outline">Mostrando <span className="text-on-surface font-medium">{filtrados.length}</span> de <span className="text-on-surface font-medium">{empleados.length}</span> empleados</p>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Modal Crear/Editar */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-3xl bg-surface-container rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <h3 className="text-sm font-headline font-bold text-on-surface">{modal.editing ? 'Editar Empleado' : 'Nuevo Empleado'}</h3>
              <button onClick={() => setModal({ open: false, editing: null })} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="px-6 py-3 flex flex-col gap-2.5 overflow-y-auto">
              <div className="grid grid-cols-2 gap-x-6">
                <div><label className={labelClass}>Nombre *</label><input type="text" value={form.nombre} onChange={setF('nombre')} className={inputClass} /></div>
                <div><label className={labelClass}>Apellido *</label><input type="text" value={form.apellido} onChange={setF('apellido')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div><label className={labelClass}>Cédula *</label><input type="text" value={form.cedula} onChange={setF('cedula')} className={inputClass} /></div>
                <div><label className={labelClass}>Email</label><input type="text" value={form.email} onChange={setF('email')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div><label className={labelClass}>Cargo</label><input type="text" value={form.cargo} onChange={setF('cargo')} className={inputClass} /></div>
                <div><label className={labelClass}>Departamento</label><input type="text" value={form.departamento} onChange={setF('departamento')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div><label className={labelClass}>Salario USD</label><input type="number" value={form.salarioUSD} onChange={setF('salarioUSD')} className={inputClass} /></div>
                <div><label className={labelClass}>Fecha Ingreso</label><input type="date" value={form.fechaIngreso} onChange={setF('fechaIngreso')} className={inputClass} /></div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div><label className={labelClass}>Teléfono</label><input type="text" value={form.telefono} onChange={setF('telefono')} className={inputClass} /></div>
                <div>
                  <label className={labelClass}>Estatus</label>
                  <select value={form.estado} onChange={setF('estado')} className={inputClass}>
                    <option value="ACTIVO">Activo</option>
                    <option value="VACACIONES">Vacaciones</option>
                    <option value="BAJA_TEMPORAL">Baja Temporal</option>
                    <option value="INACTIVO">Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-6">
                <div>
                  <label className={labelClass}>Estado Venezuela</label>
                  <GeoSelector region="" estado={form.estadoGeo} municipio={form.municipio}
                    onChange={(field, value) => {
                      if (field === 'estado') setForm(f => ({ ...f, estadoGeo: value, municipio: '' }))
                      else if (field === 'municipio') setForm(f => ({ ...f, municipio: value }))
                    }} onlyEstado hideRegion />
                </div>
                <div>
                  <label className={labelClass}>Municipio</label>
                  <GeoSelector region="" estado={form.estadoGeo} municipio={form.municipio}
                    onChange={(field, value) => {
                      if (field === 'estado') setForm(f => ({ ...f, estadoGeo: value, municipio: '' }))
                      else if (field === 'municipio') setForm(f => ({ ...f, municipio: value }))
                    }} onlyMunicipio hideRegion />
                </div>
              </div>
              <div>
                <label className={labelClass}>Dirección</label>
                <input type="text" value={form.direccion} onChange={setF('direccion')} className={inputClass} />
              </div>
            </div>
            <div className="flex gap-3 px-6 py-3 border-t border-white/10 shrink-0">
              <Button onClick={handleSave} disabled={saving} className="flex-1">{saving ? 'Guardando...' : 'Guardar'}</Button>
              <Button variant="secondary" onClick={() => setModal({ open: false, editing: null })} className="flex-1">Cancelar</Button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmar eliminar */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <GlassCard className="w-full max-w-sm p-6 space-y-4 text-center">
            <span className="material-symbols-outlined text-error text-5xl">warning</span>
            <p className="text-on-surface font-semibold">¿Eliminar este empleado?</p>
            <p className="text-outline text-sm">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button onClick={() => handleDelete(deleteId)} className="flex-1 bg-error text-white py-2.5 rounded-xl font-bold text-sm hover:bg-error/80 transition-colors">Eliminar</button>
              <button onClick={() => setDeleteId(null)} className="flex-1 bg-surface-container text-on-surface py-2.5 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors">Cancelar</button>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Modal Nómina */}
      {nominaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-md bg-surface-container rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
                <h3 className="text-sm font-headline font-bold text-on-surface">Generar Nómina</h3>
              </div>
              <button onClick={() => setNominaModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            <div className="px-6 py-4 flex flex-col gap-4">
              {!nominaResult ? (
                <>
                  <p className="text-xs text-outline">Calcula la nómina para todos los empleados activos aplicando deducciones IVSS (4%), FAOV (1%), INCES (2%) e ISLR según la LOTTT.</p>
                  <div>
                    <label className={labelClass}>Período</label>
                    <input type="month" value={nominaPeriodo} onChange={e => setNominaPeriodo(e.target.value)}
                      className={inputClass} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-surface-container-high rounded-xl p-3">
                      <p className="text-outline text-[10px] uppercase tracking-widest">IVSS</p>
                      <p className="text-on-surface font-bold mt-1">4%</p>
                    </div>
                    <div className="bg-surface-container-high rounded-xl p-3">
                      <p className="text-outline text-[10px] uppercase tracking-widest">FAOV</p>
                      <p className="text-on-surface font-bold mt-1">1%</p>
                    </div>
                    <div className="bg-surface-container-high rounded-xl p-3">
                      <p className="text-outline text-[10px] uppercase tracking-widest">INCES</p>
                      <p className="text-on-surface font-bold mt-1">2%</p>
                    </div>
                  </div>
                  <Button onClick={handleNomina} disabled={nominaLoading} className="w-full justify-center">
                    {nominaLoading ? 'Calculando...' : 'Calcular y Generar'}
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-tertiary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <p className="text-sm font-semibold">Nómina generada exitosamente</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-outline">Período</span>
                      <span className="text-on-surface font-mono">{nominaResult.periodo}</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-outline">Empleados procesados</span>
                      <span className="text-on-surface font-bold">{nominaResult.empleadosProcesados}</span>
                    </div>
                    <div className="flex justify-between text-xs py-2 border-b border-white/5">
                      <span className="text-outline">Total Bruto USD</span>
                      <span className="text-on-surface font-bold">${Number(nominaResult.totalBruto).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-xs py-2">
                      <span className="text-outline">Total Neto USD</span>
                      <span className="text-tertiary font-bold text-sm">${Number(nominaResult.totalNeto).toLocaleString('es-VE', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                  <Button variant="secondary" onClick={() => setNominaModal(false)} className="w-full justify-center">Cerrar</Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
