'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const empleados = [
  { id: 'MR', nombre: 'Mariana Rodríguez', email: 'mariana.r@empresa.com', cargo: 'Gerente de Ventas', depto: 'Comercial', estado: 'Activo', color: 'bg-primary/20 text-primary' },
  { id: 'JL', nombre: 'Jorge López', email: 'jorge.lopez@empresa.com', cargo: 'Desarrollador Senior', depto: 'Tecnología', estado: 'Activo', color: 'bg-secondary/20 text-secondary' },
  { id: 'AS', nombre: 'Ana Sánchez', email: 'ana.sanchez@empresa.com', cargo: 'Analista de Marketing', depto: 'Marketing', estado: 'Vacaciones', color: 'bg-amber-500/20 text-amber-400' },
  { id: 'RT', nombre: 'Roberto Torres', email: 'roberto.t@empresa.com', cargo: 'Diseñador UX', depto: 'Producto', estado: 'Baja Temporal', color: 'bg-outline/20 text-outline' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Activo: 'success', Vacaciones: 'warning', 'Baja Temporal': 'error',
}

export default function RrhhPage() {
  const [busqueda, setBusqueda] = useState('')

  const filtrados = empleados.filter(
    (e) => e.nombre.toLowerCase().includes(busqueda.toLowerCase()) || e.cargo.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Recursos Humanos" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Gestión de RRHH</h2>
            <p className="text-on-surface-variant mt-1">Administra tu equipo y automatiza pagos con IA.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-[18px]">print</span>
              Reportes
            </Button>
            <Button size="sm">
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Agregar Empleado
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
                <span className="text-3xl font-bold text-on-surface font-headline">142</span>
                <Badge variant="success">+2.4%</Badge>
              </div>
              <p className="text-xs text-outline mt-1">Activos en nómina</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-on-surface-variant text-sm font-medium">Asistencia Hoy</h3>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <span className="material-symbols-outlined text-[20px]">event_available</span>
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-on-surface font-headline">128</span>
                <span className="text-xs text-outline">de 142</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
                <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '90%' }} />
              </div>
              <p className="text-xs text-outline mt-1">90% Presentes</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-on-surface-variant text-sm font-medium">Próximas Vacaciones</h3>
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                  <span className="material-symbols-outlined text-[20px]">beach_access</span>
                </div>
              </div>
              <div className="space-y-2">
                {[{ nombre: 'Ana G.', cuando: 'Mañana' }, { nombre: 'Carlos M.', cuando: '12 Nov' }].map((v) => (
                  <div key={v.nombre} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest" />
                    <span className="text-sm font-medium text-on-surface">{v.nombre}</span>
                    <span className="text-xs text-outline ml-auto">{v.cuando}</span>
                  </div>
                ))}
              </div>
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
              <p className="text-sm text-on-surface-variant mb-6">Periodo: 01 Nov - 15 Nov</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium text-on-surface mb-1">
                  <span>Progreso del ciclo</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-primary/10 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full shadow-[0_0_10px_rgba(192,193,255,0.5)]" style={{ width: '85%' }} />
                </div>
                <p className="text-xs text-outline mt-2 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Incidencias procesadas automáticamente
                </p>
              </div>
              <Button className="w-full justify-center">
                <span className="material-symbols-outlined text-[18px]">payments</span>
                Generar Nómina
              </Button>
            </div>
          </GlassCard>
        </div>

        {/* Tabla de Empleados */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-on-surface font-headline">Expedientes de Empleados</h3>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar empleado..."
                  className="w-full pl-10 pr-4 py-2 bg-surface-container-highest/50 border border-white/10 rounded-xl text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="p-2 border border-white/10 rounded-xl hover:bg-white/5 text-outline">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                  <th className="px-6 py-4">Empleado</th>
                  <th className="px-6 py-4">Cargo</th>
                  <th className="px-6 py-4">Departamento</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Acciones</th>
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
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{emp.nombre}</p>
                          <p className="text-xs text-outline">{emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface">{emp.cargo}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{emp.depto}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[emp.estado]}>{emp.estado}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-sm text-outline">Mostrando <span className="text-on-surface font-medium">{filtrados.length}</span> de <span className="text-on-surface font-medium">142</span> resultados</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-white/10 rounded-lg text-sm text-outline hover:bg-white/5 disabled:opacity-50" disabled>Anterior</button>
              <button className="px-3 py-1 border border-white/10 rounded-lg text-sm text-outline hover:bg-white/5">Siguiente</button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
