'use client'
import { useState, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'
import Link from 'next/link'
import api from '@/lib/api'

interface Empleado {
  id: string; nombre: string; apellido: string; email: string
  cargo: string; departamento: string; estado: string; salarioUSD: number
}

const estadoVariant: Record<string, 'success' | 'warning' | 'error' | 'info'> = {
  ACTIVO: 'success', VACACIONES: 'warning', BAJA_TEMPORAL: 'error', INACTIVO: 'info',
}
const estadoLabel: Record<string, string> = {
  ACTIVO: 'Activo', VACACIONES: 'Vacaciones', BAJA_TEMPORAL: 'Baja Temporal', INACTIVO: 'Inactivo',
}

const inputClass = 'w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none [&>option]:bg-[#222a3d] [&>option]:text-on-surface'
const labelClass = 'text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1'

export default function RrhhPage() {
  const [busqueda, setBusqueda] = useState('')
  const [nominaModal, setNominaModal] = useState(false)
  const [nominaPeriodo, setNominaPeriodo] = useState(() => new Date().toISOString().slice(0, 7))
  const [nominaLoading, setNominaLoading] = useState(false)
  const [nominaResult, setNominaResult] = useState<any>(null)

  const { data: empleados = [], isLoading, refetch } = useErpQuery<Empleado[]>(
    QK.rrhh.empleados(), '/rrhh/empleados'
  )

  const filtrados = useMemo(() => {
    const q = busqueda.toLowerCase().trim()
    if (!q) return empleados
    return empleados.filter(e =>
      e.nombre.toLowerCase().includes(q) ||
      e.apellido.toLowerCase().includes(q) ||
      e.cargo.toLowerCase().includes(q) ||
      e.departamento.toLowerCase().includes(q)
    )
  }, [empleados, busqueda])

  const activos = empleados.filter(e => e.estado === 'ACTIVO').length
  const vacaciones = empleados.filter(e => e.estado === 'VACACIONES').length
  const initials = (e: Empleado) => (e.nombre[0] ?? '') + (e.apellido[0] ?? '')

  const handleNomina = async () => {
    setNominaLoading(true)
    try {
      const res = await api.post('/rrhh/nomina/calcular', { periodo: nominaPeriodo + '-01' })
      setNominaResult(res.data)
    } catch (e: any) {
      alert(`Error: ${e?.response?.data?.message ?? e?.message}`)
    } finally { setNominaLoading(false) }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="RRHH" />
      <div className="flex-1 p-6 space-y-6 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-on-surface font-headline tracking-tight">Gestión de RRHH</h2>
            <p className="text-on-surface-variant mt-1 text-sm">Administra tu equipo y automatiza pagos.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard/rrhh/empleados">
              <Button variant="secondary" size="sm">
                <span className="material-symbols-outlined text-[18px]">group</span>
                Ver Empleados
              </Button>
            </Link>
            <Button size="sm" onClick={() => { setNominaResult(null); setNominaModal(true) }}>
              <span className="material-symbols-outlined text-[18px]">payments</span>
              Generar Nómina
            </Button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <GlassCard className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-on-surface-variant text-sm font-medium">Total Empleados</h3>
                <div className="p-2 bg-primary/10 text-primary rounded-xl">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-on-surface font-headline">{isLoading ? '—' : empleados.length}</span>
              </div>
              <p className="text-xs text-outline mt-1">Activos en nómina</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-on-surface-variant text-sm font-medium">Activos</h3>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-on-surface font-headline">{isLoading ? '—' : activos}</span>
                <span className="text-xs text-outline">de {empleados.length}</span>
              </div>
              {empleados.length > 0 && (
                <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(activos / empleados.length) * 100}%` }} />
                </div>
              )}
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-on-surface-variant text-sm font-medium">En Vacaciones</h3>
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                  <span className="material-symbols-outlined text-[20px]">beach_access</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-on-surface font-headline">{isLoading ? '—' : vacaciones}</span>
              </div>
              <p className="text-xs text-outline mt-1">Ausentes temporalmente</p>
            </GlassCard>
          </div>

          {/* AI Payroll Card */}
          <GlassCard className="p-6 relative overflow-hidden group border-l-4 border-primary">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-primary">smart_toy</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <h3 className="text-primary font-bold text-sm uppercase tracking-wider">Zenith AI Payroll</h3>
              </div>
              <h2 className="text-lg font-bold text-on-surface mb-1">Cálculo de Nómina</h2>
              <p className="text-sm text-on-surface-variant mb-4">
                Período: {new Date().toLocaleDateString('es-VE', { month: 'long', year: 'numeric' })}
              </p>
              <p className="text-xs text-outline mb-6 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                Deducciones IVSS, FAOV, INCES e ISLR según LOTTT
              </p>
              <Button className="w-full justify-center" onClick={() => { setNominaResult(null); setNominaModal(true) }}>
                <span className="material-symbols-outlined text-[18px]">payments</span>
                Generar Nómina
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Empleados', icon: 'badge', href: '/dashboard/rrhh/empleados', color: 'text-primary' },
            { label: 'Asistencia', icon: 'event_available', href: '/dashboard/rrhh/asistencia', color: 'text-emerald-400' },
            { label: 'Nómina', icon: 'payments', href: '#', color: 'text-amber-400', onClick: () => { setNominaResult(null); setNominaModal(true) } },
            { label: 'Calendario', icon: 'calendar_month', href: '/dashboard/rrhh/asistencia-calendario', color: 'text-tertiary' },
          ].map(({ label, icon, href, color, onClick }) => (
            onClick
              ? <button key={label} onClick={onClick} className="w-full">
                  <GlassCard className="p-4 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                    <span className={`material-symbols-outlined text-[24px] ${color}`}>{icon}</span>
                    <span className="text-sm font-semibold text-on-surface">{label}</span>
                    <span className="material-symbols-outlined text-outline text-[16px] ml-auto">arrow_forward</span>
                  </GlassCard>
                </button>
              : <Link key={label} href={href}>
                  <GlassCard className="p-4 flex items-center gap-3 hover:bg-white/5 transition-colors cursor-pointer">
                    <span className={`material-symbols-outlined text-[24px] ${color}`}>{icon}</span>
                    <span className="text-sm font-semibold text-on-surface">{label}</span>
                    <span className="material-symbols-outlined text-outline text-[16px] ml-auto">arrow_forward</span>
                  </GlassCard>
                </Link>
          ))}
        </div>

        {/* Tabla de Empleados */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-on-surface font-headline">Expedientes de Empleados</h3>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar empleado..."
                  className="w-full pl-10 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <Link href="/dashboard/rrhh/empleados">
                <button className="p-2 border border-white/10 rounded-xl hover:bg-white/5 text-outline" title="Ver todos">
                  <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                  <th className="px-6 py-4">Empleado</th>
                  <th className="px-6 py-4">Cargo</th>
                  <th className="px-6 py-4">Departamento</th>
                  <th className="px-6 py-4">Salario USD</th>
                  <th className="px-6 py-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}>{Array.from({ length: 5 }).map((_, j) => (
                      <td key={j} className="px-6 py-4"><div className="h-4 bg-white/5 rounded animate-pulse" /></td>
                    ))}</tr>
                  ))
                ) : filtrados.length === 0 ? (
                  <tr><td colSpan={5} className="py-16 text-center text-outline text-sm">No se encontraron empleados.</td></tr>
                ) : filtrados.slice(0, 20).map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                          {initials(emp)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{emp.nombre} {emp.apellido}</p>
                          <p className="text-xs text-outline">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">{emp.cargo}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{emp.departamento}</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">${Number(emp.salarioUSD).toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[emp.estado] ?? 'info'}>{estadoLabel[emp.estado] ?? emp.estado}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-sm text-outline">
              Mostrando <span className="text-on-surface font-medium">{Math.min(filtrados.length, 20)}</span> de <span className="text-on-surface font-medium">{empleados.length}</span> empleados
            </p>
            <Link href="/dashboard/rrhh/empleados">
              <Button variant="secondary" size="sm">Ver todos</Button>
            </Link>
          </div>
        </GlassCard>
      </div>

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
                    <input type="month" value={nominaPeriodo} onChange={e => setNominaPeriodo(e.target.value)} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {[['IVSS', '4%'], ['FAOV', '1%'], ['INCES', '2%']].map(([k, v]) => (
                      <div key={k} className="bg-surface-container-high rounded-xl p-3">
                        <p className="text-outline text-[10px] uppercase tracking-widest">{k}</p>
                        <p className="text-on-surface font-bold mt-1">{v}</p>
                      </div>
                    ))}
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
                    {[
                      ['Período', nominaResult.periodo],
                      ['Empleados procesados', nominaResult.empleadosProcesados],
                      ['Total Bruto USD', `$${Number(nominaResult.totalBruto).toLocaleString('es-VE', { minimumFractionDigits: 2 })}`],
                      ['Total Neto USD', `$${Number(nominaResult.totalNeto).toLocaleString('es-VE', { minimumFractionDigits: 2 })}`],
                    ].map(([label, value], i, arr) => (
                      <div key={label} className={`flex justify-between text-xs py-2 ${i < arr.length - 1 ? 'border-b border-white/5' : ''}`}>
                        <span className="text-outline">{label}</span>
                        <span className={`font-bold ${i === arr.length - 1 ? 'text-tertiary text-sm' : 'text-on-surface font-mono'}`}>{value}</span>
                      </div>
                    ))}
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
