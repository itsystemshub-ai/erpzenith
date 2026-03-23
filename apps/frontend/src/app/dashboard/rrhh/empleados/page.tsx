'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { useRrhhStore } from '@/stores/rrhhStore'
import { QK } from '@/lib/queryKeys'
import api from '@/lib/api'
import { GeoSelector } from '@/components/ui/GeoSelector'

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
const ESTADOS_FILTRO = ['Todos', 'ACTIVO', 'VACACIONES', 'BAJA_TEMPORAL']

const EMPTY_FORM = {
  cedula: '', nombre: '', apellido: '', email: '', cargo: '', departamento: '',
  salarioUSD: '', fechaIngreso: '', estado: 'ACTIVO',
  estadoGeo: '', municipio: '', direccion: '', telefono: '',
}

const inputClass = 'w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none'
const labelClass = 'text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1'

export default function EmpleadosPage() {
  const { filtros, setFiltro } = useRrhhStore()
  const [estadoFiltro, setEstadoFiltro] = useState('Todos')
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [saving, setSaving] = useState(false)

  const { data: empleados = [], isLoading, refetch } = useErpQuery<Empleado[]>(
    QK.rrhh.empleados(), '/rrhh/empleados', { refetchInterval: 60_000 }
  )

  const filtrados = empleados.filter((e) => {
    const q = filtros.search.toLowerCase()
    const matchSearch = !q || e.nombre.toLowerCase().includes(q) || e.apellido.toLowerCase().includes(q) || e.cedula.includes(q)
    const matchDepto = !filtros.departamento || e.departamento === filtros.departamento
    const matchEstado = estadoFiltro === 'Todos' || e.estado === estadoFiltro
    return matchSearch && matchDepto && matchEstado
  })

  const activos = empleados.filter((e) => e.estado === 'ACTIVO').length
  const vacaciones = empleados.filter((e) => e.estado === 'VACACIONES').length
  const deptos = [...new Set(empleados.map((e) => e.departamento))].sort()
  const initials = (e: Empleado) => (e.nombre[0] ?? '') + (e.apellido[0] ?? '')

  const setF = (k: keyof typeof EMPTY_FORM) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: ev.target.value }))

  const handleSave = async () => {
    if (!form.cedula || !form.nombre || !form.apellido) return
    setSaving(true)
    try {
      await api.post('/rrhh/empleados', {
        ...form,
        salarioUSD: parseFloat(form.salarioUSD) || 0,
        fechaIngreso: new Date(form.fechaIngreso).toISOString(),
      })
      setModal(false); setForm({ ...EMPTY_FORM }); refetch()
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Directorio de Empleados" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Empleados</h2>
            <p className="text-on-surface-variant mt-1">Directorio completo del personal activo.</p>
          </div>
          <Button size="sm" onClick={() => setModal(true)}>
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Nuevo Empleado
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Total Empleados</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl"><span className="material-symbols-outlined text-[20px]">group</span></div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{isLoading ? '—' : empleados.length}</p>
            <p className="text-xs text-outline mt-1">en nómina activa</p>
          </GlassCard>
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Activos</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl"><span className="material-symbols-outlined text-[20px]">check_circle</span></div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{isLoading ? '—' : activos}</p>
            {empleados.length > 0 && (
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(activos / empleados.length) * 100}%` }} />
              </div>
            )}
          </GlassCard>
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">En Vacaciones</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl"><span className="material-symbols-outlined text-[20px]">beach_access</span></div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{isLoading ? '—' : vacaciones}</p>
            <p className="text-xs text-outline mt-1">empleados ausentes</p>
          </GlassCard>
        </div>

        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-on-surface font-headline">Directorio</h3>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input value={filtros.search} onChange={(e) => setFiltro('search', e.target.value)} placeholder="Nombre o cédula..."
                  className="pl-9 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-48" />
              </div>
              <select value={filtros.departamento} onChange={(e) => setFiltro('departamento', e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Todos los deptos</option>
                {deptos.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <select value={estadoFiltro} onChange={(e) => setEstadoFiltro(e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                {ESTADOS_FILTRO.map((s) => <option key={s} value={s}>{s === 'Todos' ? 'Todos' : estadoLabel[s]}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Empleado', 'Cédula', 'Cargo', 'Depto.', 'Estado Vzla', 'Municipio', 'Ingreso', 'Salario', 'Estatus', ''].map((h) => (
                    <th key={h} className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i}>{Array.from({ length: 10 }).map((_, j) => (
                      <td key={j} className="px-3 py-3"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                    ))}</tr>
                  ))
                ) : filtrados.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">{initials(emp)}</div>
                        <p className="text-xs font-semibold text-on-surface">{emp.nombre} {emp.apellido}</p>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs font-mono text-on-surface-variant">{emp.cedula}</td>
                    <td className="px-3 py-3 text-xs text-on-surface max-w-[140px] truncate">{emp.cargo}</td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant">{emp.departamento}</td>
                    <td className="px-3 py-3 text-xs text-outline">{emp.estadoGeo ?? '—'}</td>
                    <td className="px-3 py-3 text-xs text-outline">{emp.municipio ?? '—'}</td>
                    <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">{new Date(emp.fechaIngreso).toLocaleDateString('es-VE')}</td>
                    <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">${Number(emp.salarioUSD).toLocaleString()}</td>
                    <td className="px-3 py-3"><Badge variant={estadoVariant[emp.estado] ?? 'info'}>{estadoLabel[emp.estado] ?? emp.estado}</Badge></td>
                    <td className="px-3 py-3">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[18px]">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-white/5">
            <p className="text-sm text-outline">Mostrando <span className="text-on-surface font-medium">{filtrados.length}</span> de <span className="text-on-surface font-medium">{empleados.length}</span> empleados</p>
          </div>
        </GlassCard>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-3xl bg-surface-container rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
              <h3 className="text-sm font-headline font-bold text-on-surface">Nuevo Empleado</h3>
              <button onClick={() => setModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
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
              <Button variant="secondary" onClick={() => setModal(false)} className="flex-1">Cancelar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
