'use client'
import { useState, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Empleado {
  id: string; nombre: string; apellido: string; cargo: string
  departamento: string; estado: string
}

type EstadoAsistencia = 'Presente' | 'Ausente' | 'Tardanza' | 'Vacaciones'

interface RegistroAsistencia {
  empleadoId: string
  entrada: string | null
  salida: string | null
  estado: EstadoAsistencia
}

const estadoVariant: Record<EstadoAsistencia, 'success' | 'warning' | 'error'> = {
  Presente: 'success', Tardanza: 'warning', Ausente: 'error', Vacaciones: 'warning',
}

const HORA_LIMITE_TARDANZA = '08:10'

function nowTime() {
  return new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export default function AsistenciaPage() {
  const today = new Date()
  const todayStr = today.toLocaleDateString('es-VE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  const mesActual = today.toLocaleDateString('es-VE', { month: 'long', year: 'numeric' })

  const { data: empleados = [], isLoading } = useErpQuery<Empleado[]>(
    QK.rrhh.empleados(), '/rrhh/empleados'
  )

  // Local attendance state — keyed by empleadoId
  const [registros, setRegistros] = useState<Record<string, RegistroAsistencia>>({})
  const [busqueda, setBusqueda] = useState('')

  // Build merged list: empleados + their attendance record
  const lista = useMemo(() => {
    return empleados.map(emp => {
      const reg = registros[emp.id]
      let estado: EstadoAsistencia = emp.estado === 'VACACIONES' ? 'Vacaciones' : 'Ausente'
      if (reg) estado = reg.estado
      return { emp, reg: reg ?? null, estado }
    }).filter(({ emp }) => {
      const q = busqueda.toLowerCase().trim()
      if (!q) return true
      return (emp.nombre + ' ' + emp.apellido).toLowerCase().includes(q) ||
        emp.departamento.toLowerCase().includes(q)
    })
  }, [empleados, registros, busqueda])

  const presentes = Object.values(registros).filter(r => r.estado === 'Presente' || r.estado === 'Tardanza').length
  const ausentes = lista.filter(({ estado }) => estado === 'Ausente').length
  const tardanzas = Object.values(registros).filter(r => r.estado === 'Tardanza').length
  const vacaciones = empleados.filter(e => e.estado === 'VACACIONES').length

  const registrarEntrada = (empId: string) => {
    const hora = nowTime()
    const estado: EstadoAsistencia = hora > HORA_LIMITE_TARDANZA ? 'Tardanza' : 'Presente'
    setRegistros(prev => ({
      ...prev,
      [empId]: { empleadoId: empId, entrada: hora, salida: null, estado },
    }))
  }

  const registrarSalida = (empId: string) => {
    const hora = nowTime()
    setRegistros(prev => ({
      ...prev,
      [empId]: { ...prev[empId], salida: hora },
    }))
  }

  const marcarAusente = (empId: string) => {
    setRegistros(prev => ({
      ...prev,
      [empId]: { empleadoId: empId, entrada: null, salida: null, estado: 'Ausente' },
    }))
  }

  // Calendar for current month
  const year = today.getFullYear()
  const month = today.getMonth()
  const diasEnMes = new Date(year, month + 1, 0).getDate()
  const primerDia = new Date(year, month, 1).getDay()
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Control de Asistencia" />
      <div className="flex-1 p-6 space-y-6 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-on-surface font-headline tracking-tight">Asistencia</h2>
            <p className="text-on-surface-variant mt-1 text-sm capitalize">{todayStr}</p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500/30 border border-emerald-500/50" />Presente</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-500/30 border border-amber-500/50" />Tardanza</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-error/30 border border-error/50" />Ausente</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <GlassCard className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">Presentes</p>
              <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{presentes}</p>
            {empleados.length > 0 && (
              <div className="w-full bg-surface-container-highest rounded-full h-1 mt-2">
                <div className="bg-emerald-500 h-1 rounded-full transition-all" style={{ width: `${(presentes / empleados.length) * 100}%` }} />
              </div>
            )}
            <p className="text-[10px] text-outline mt-1">{empleados.length > 0 ? Math.round((presentes / empleados.length) * 100) : 0}% del personal</p>
          </GlassCard>

          <GlassCard className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">Ausentes</p>
              <div className="p-1.5 bg-error/10 text-error rounded-lg">
                <span className="material-symbols-outlined text-[18px]">person_off</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{ausentes}</p>
            <p className="text-[10px] text-outline mt-1">sin registro hoy</p>
          </GlassCard>

          <GlassCard className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">Tardanzas</p>
              <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">schedule</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{tardanzas}</p>
            <p className="text-[10px] text-outline mt-1">después de 08:10</p>
          </GlassCard>

          <GlassCard className="p-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">Vacaciones</p>
              <div className="p-1.5 bg-amber-500/10 text-amber-400 rounded-lg">
                <span className="material-symbols-outlined text-[18px]">beach_access</span>
              </div>
            </div>
            <p className="text-2xl font-headline font-bold text-on-surface">{vacaciones}</p>
            <p className="text-[10px] text-outline mt-1">ausentes programados</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Registro del día */}
          <div className="lg:col-span-2">
            <GlassCard className="overflow-hidden">
              <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-on-surface font-headline">Registro de Hoy</h3>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[16px]">search</span>
                  <input value={busqueda} onChange={e => setBusqueda(e.target.value)} placeholder="Buscar empleado..."
                    className="pl-8 pr-4 py-1.5 bg-surface-container-highest/50 border border-white/10 rounded-xl text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-48" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white/5 font-spartan text-[9px] uppercase tracking-widest text-outline">
                      <th className="px-4 py-3">Empleado</th>
                      <th className="px-4 py-3">Depto.</th>
                      <th className="px-4 py-3 text-center">Entrada</th>
                      <th className="px-4 py-3 text-center">Salida</th>
                      <th className="px-4 py-3 text-center">Estado</th>
                      <th className="px-4 py-3 text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {isLoading ? (
                      Array.from({ length: 6 }).map((_, i) => (
                        <tr key={i}>{Array.from({ length: 6 }).map((_, j) => (
                          <td key={j} className="px-4 py-3"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                        ))}</tr>
                      ))
                    ) : lista.length === 0 ? (
                      <tr><td colSpan={6} className="py-12 text-center text-outline text-sm">No hay empleados registrados.</td></tr>
                    ) : lista.map(({ emp, reg, estado }) => (
                      <tr key={emp.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-7 w-7 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">
                              {emp.nombre[0]}{emp.apellido[0]}
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-on-surface whitespace-nowrap">{emp.nombre} {emp.apellido}</p>
                              <p className="text-[10px] text-outline">{emp.cargo}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-xs text-outline">{emp.departamento}</td>
                        <td className="px-4 py-3 text-center text-xs font-mono text-on-surface">{reg?.entrada ?? '—'}</td>
                        <td className="px-4 py-3 text-center text-xs font-mono text-on-surface">{reg?.salida ?? '—'}</td>
                        <td className="px-4 py-3 text-center">
                          <Badge variant={estadoVariant[estado]}>{estado}</Badge>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-center gap-1">
                            {emp.estado === 'VACACIONES' ? (
                              <span className="text-[10px] text-amber-400 font-spartan uppercase tracking-widest">Vacaciones</span>
                            ) : !reg ? (
                              <>
                                <button onClick={() => registrarEntrada(emp.id)}
                                  className="px-2 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-[10px] font-spartan font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                                  Entrada
                                </button>
                                <button onClick={() => marcarAusente(emp.id)}
                                  className="px-2 py-1 rounded-lg bg-error/20 hover:bg-error/30 text-error text-[10px] font-spartan font-bold uppercase tracking-widest transition-colors">
                                  Ausente
                                </button>
                              </>
                            ) : !reg.salida && reg.entrada ? (
                              <button onClick={() => registrarSalida(emp.id)}
                                className="px-2 py-1 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary text-[10px] font-spartan font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                                Salida
                              </button>
                            ) : (
                              <span className="text-[10px] text-outline font-spartan uppercase tracking-widest">Completo</span>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </div>

          {/* Calendario del mes */}
          <GlassCard className="p-5">
            <h3 className="text-sm font-bold text-on-surface font-headline mb-4 capitalize">{mesActual}</h3>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {diasSemana.map(d => (
                <div key={d} className="text-center text-[9px] font-spartan uppercase tracking-widest text-outline py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: primerDia }).map((_, i) => <div key={`e-${i}`} />)}
              {Array.from({ length: diasEnMes }, (_, i) => i + 1).map(dia => {
                const isToday = dia === today.getDate()
                const isPast = dia < today.getDate()
                const isWeekend = new Date(year, month, dia).getDay() === 0 || new Date(year, month, dia).getDay() === 6
                return (
                  <div key={dia} className={`aspect-square flex items-center justify-center rounded-lg text-xs font-medium transition-all
                    ${isToday ? 'bg-primary text-on-primary font-bold ring-2 ring-primary/50' :
                      isWeekend ? 'bg-surface-container text-outline/40' :
                      isPast ? 'bg-emerald-500/10 text-emerald-400/70' :
                      'bg-surface-container-high text-outline/60'}`}>
                    {dia}
                  </div>
                )
              })}
            </div>
            <div className="mt-4 space-y-2 text-xs">
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-primary shrink-0" /><span className="text-outline">Hoy</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-emerald-500/20 shrink-0" /><span className="text-outline">Días pasados</span></div>
              <div className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-surface-container shrink-0" /><span className="text-outline">Fin de semana</span></div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
