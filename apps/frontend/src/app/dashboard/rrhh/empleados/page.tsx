'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { useRrhhStore } from '@/stores/rrhhStore'
import { QK } from '@/lib/queryKeys'

interface Empleado {
  id: string; cedula: string; nombre: string; apellido: string
  email: string; cargo: string; departamento: string
  salarioUSD: number; fechaIngreso: string; estado: string
}

const estadoVariant: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  ACTIVO: 'success', VACACIONES: 'warning', BAJA_TEMPORAL: 'error', INACTIVO: 'info',
}
const estadoLabel: Record<string, string> = {
  ACTIVO: 'Activo', VACACIONES: 'Vacaciones', BAJA_TEMPORAL: 'Baja Temporal', INACTIVO: 'Inactivo',
}

const ESTADOS = ['Todos', 'ACTIVO', 'VACACIONES', 'BAJA_TEMPORAL']

export default function EmpleadosPage() {
  const { filtros, setFiltro } = useRrhhStore()
  const [estadoFiltro, setEstadoFiltro] = useState('Todos')

  const { data: empleados = [], isLoading } = useErpQuery<Empleado[]>(
    QK.rrhh.empleados(),
    '/rrhh/empleados',
    { refetchInterval: 60_000 }
  )

  const filtrados = empleados.filter((e) => {
    const q = filtros.search.toLowerCase()
    const matchSearch = !q ||
      e.nombre.toLowerCase().includes(q) ||
      e.apellido.toLowerCase().includes(q) ||
      e.cedula.includes(q)
    const matchDepto = !filtros.departamento || e.departamento === filtros.departamento
    const matchEstado = estadoFiltro === 'Todos' || e.estado === estadoFiltro
    return matchSearch && matchDepto && matchEstado
  })

  const activos = empleados.filter((e) => e.estado === 'ACTIVO').length
  const vacaciones = empleados.filter((e) => e.estado === 'VACACIONES').length
  const deptos = [...new Set(empleados.map((e) => e.departamento))].sort()

  function initials(e: Empleado) {
    return (e.nombre[0] ?? '') + (e.apellido[0] ?? '')
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
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Nuevo Empleado
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Total Empleados</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">group</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{isLoading ? '—' : empleados.length}</p>
            <p className="text-xs text-outline mt-1">en nómina activa</p>
          </GlassCard>
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Activos</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
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
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">beach_access</span>
              </div>
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
                <input
                  value={filtros.search}
                  onChange={(e) => setFiltro('search', e.target.value)}
                  placeholder="Nombre o cédula..."
                  className="pl-9 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-48"
                />
              </div>
              <select
                value={filtros.departamento}
                onChange={(e) => setFiltro('departamento', e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Todos los deptos</option>
                {deptos.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <select
                value={estadoFiltro}
                onChange={(e) => setEstadoFiltro(e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {ESTADOS.map((s) => <option key={s} value={s}>{s === 'Todos' ? 'Todos' : estadoLabel[s]}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
          <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Empleado', 'Cédula', 'Cargo', 'Depto.', 'Ingreso', 'Salario', 'Estado', ''].map((h) => (
                    <th key={h} className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 4 }).map((_, i) => (
                    <tr key={i}>
                      {Array.from({ length: 8 }).map((_, j) => (
                        <td key={j} className="px-3 py-3"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                      ))}
                    </tr>
                  ))
                ) : filtrados.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                          {initials(emp)}
                        </div>
                        <p className="text-xs font-semibold text-on-surface">{emp.nombre} {emp.apellido}</p>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-xs font-mono text-on-surface-variant">{emp.cedula}</td>
                    <td className="px-3 py-3 text-xs text-on-surface max-w-[140px] truncate">{emp.cargo}</td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant">{emp.departamento}</td>
                    <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">{new Date(emp.fechaIngreso).toLocaleDateString('es-VE')}</td>
                    <td className="px-3 py-3 text-xs font-bold text-on-surface whitespace-nowrap">${Number(emp.salarioUSD).toLocaleString()}</td>
                    <td className="px-3 py-3">
                      <Badge variant={estadoVariant[emp.estado] ?? 'info'}>{estadoLabel[emp.estado] ?? emp.estado}</Badge>
                    </td>
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
            <p className="text-sm text-outline">
              Mostrando <span className="text-on-surface font-medium">{filtrados.length}</span> de{' '}
              <span className="text-on-surface font-medium">{empleados.length}</span> empleados
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
  { id: 'MR', nombre: 'Mariana Rodríguez', cedula: 'V-18.432.901', cargo: 'Gerente de Ventas', depto: 'Comercial', ingreso: '15/03/2019', salarioUSD: 1800, estado: 'Activo', color: 'bg-primary/20 text-primary' },
  { id: 'JL', nombre: 'Jorge Luis Medina', cedula: 'V-22.104.567', cargo: 'Desarrollador Senior', depto: 'Tecnología', ingreso: '02/07/2020', salarioUSD: 2200, estado: 'Activo', color: 'bg-secondary/20 text-secondary' },
  { id: 'AS', nombre: 'Ana Sofía Blanco', cedula: 'V-25.678.234', cargo: 'Analista de Marketing', depto: 'Marketing', ingreso: '10/01/2021', salarioUSD: 1200, estado: 'Vacaciones', color: 'bg-amber-500/20 text-amber-400' },
  { id: 'RT', nombre: 'Roberto Torres', cedula: 'V-19.887.432', cargo: 'Diseñador UX/UI', depto: 'Producto', ingreso: '22/09/2021', salarioUSD: 1500, estado: 'Activo', color: 'bg-tertiary/20 text-tertiary' },
  { id: 'YG', nombre: 'Yolanda González', cedula: 'V-20.345.678', cargo: 'Contadora', depto: 'Finanzas', ingreso: '05/04/2018', salarioUSD: 1650, estado: 'Activo', color: 'bg-emerald-500/20 text-emerald-400' },
  { id: 'CM', nombre: 'Carlos Martínez', cedula: 'V-23.901.234', cargo: 'Supervisor de Almacén', depto: 'Logística', ingreso: '18/11/2020', salarioUSD: 980, estado: 'Activo', color: 'bg-blue-500/20 text-blue-400' },
  { id: 'LP', nombre: 'Luisa Pérez', cedula: 'V-26.543.210', cargo: 'Cajera Senior', depto: 'Operaciones', ingreso: '01/06/2022', salarioUSD: 750, estado: 'Activo', color: 'bg-pink-500/20 text-pink-400' },
  { id: 'AR', nombre: 'Andrés Rivas', cedula: 'V-21.765.432', cargo: 'Técnico de Soporte', depto: 'Tecnología', ingreso: '14/02/2022', salarioUSD: 900, estado: 'Baja Temporal', color: 'bg-outline/20 text-outline' },
]

const DEPTOS = ['Todos', 'Comercial', 'Tecnología', 'Marketing', 'Producto', 'Finanzas', 'Logística', 'Operaciones']
const ESTADOS = ['Todos', 'Activo', 'Vacaciones', 'Baja Temporal']

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Activo: 'success',
  Vacaciones: 'warning',
  'Baja Temporal': 'error',
}

export default function EmpleadosPage() {
  const [busqueda, setBusqueda] = useState('')
  const [deptoFiltro, setDeptoFiltro] = useState('Todos')
  const [estadoFiltro, setEstadoFiltro] = useState('Todos')

  const filtrados = empleados.filter((e) => {
    const matchSearch =
      e.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      e.cedula.includes(busqueda)
    const matchDepto = deptoFiltro === 'Todos' || e.depto === deptoFiltro
    const matchEstado = estadoFiltro === 'Todos' || e.estado === estadoFiltro
    return matchSearch && matchDepto && matchEstado
  })

  const activos = empleados.filter((e) => e.estado === 'Activo').length
  const vacaciones = empleados.filter((e) => e.estado === 'Vacaciones').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Directorio de Empleados" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Empleados</h2>
            <p className="text-on-surface-variant mt-1">Directorio completo del personal activo.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Nuevo Empleado
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Total Empleados</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">group</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{empleados.length}</p>
            <p className="text-xs text-outline mt-1">en nómina activa</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Activos</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{activos}</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(activos / empleados.length) * 100}%` }} />
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">En Vacaciones</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">beach_access</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{vacaciones}</p>
            <p className="text-xs text-outline mt-1">empleados ausentes</p>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-on-surface font-headline">Directorio</h3>
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Nombre o cédula..."
                  className="pl-9 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-48"
                />
              </div>
              <select
                value={deptoFiltro}
                onChange={(e) => setDeptoFiltro(e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {DEPTOS.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <select
                value={estadoFiltro}
                onChange={(e) => setEstadoFiltro(e.target.value)}
                className="px-3 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {ESTADOS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Empleado', 'Cédula', 'Cargo', 'Departamento', 'Fecha Ingreso', 'Salario USD', 'Estado', ''].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtrados.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-bold text-sm ${emp.color}`}>
                          {emp.id}
                        </div>
                        <p className="text-sm font-semibold text-on-surface">{emp.nombre}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">{emp.cedula}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{emp.cargo}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{emp.depto}</td>
                    <td className="px-6 py-4 text-sm text-outline">{emp.ingreso}</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">${emp.salarioUSD.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[emp.estado]}>{emp.estado}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-white/5">
            <p className="text-sm text-outline">
              Mostrando <span className="text-on-surface font-medium">{filtrados.length}</span> de{' '}
              <span className="text-on-surface font-medium">{empleados.length}</span> empleados
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
