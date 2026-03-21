'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const ordenes = [
  { id: 'OT-2024-0112', equipo: 'Compresor Industrial CI-400', tipo: 'Preventivo', tecnico: 'Carlos Pérez', fecha: '14 Oct 2024', estado: 'Programado' },
  { id: 'OT-2024-0111', equipo: 'Bomba Hidráulica BH-200', tipo: 'Correctivo', tecnico: 'Ana Martínez', fecha: '12 Oct 2024', estado: 'En Curso' },
  { id: 'OT-2024-0110', equipo: 'Generador Eléctrico GE-50', tipo: 'Predictivo', tecnico: 'Luis García', fecha: '10 Oct 2024', estado: 'Completado' },
  { id: 'OT-2024-0109', equipo: 'Torno CNC TC-800', tipo: 'Correctivo', tecnico: 'María López', fecha: '08 Oct 2024', estado: 'Completado' },
]

const equipos = [
  { nombre: 'Compresor CI-400', estado: 'Operativo', salud: 92, proxMant: '14 Oct' },
  { nombre: 'Bomba BH-200', estado: 'En Mantenimiento', salud: 45, proxMant: 'Hoy' },
  { nombre: 'Generador GE-50', estado: 'Operativo', salud: 88, proxMant: '20 Oct' },
  { nombre: 'Torno CNC TC-800', estado: 'Operativo', salud: 76, proxMant: '18 Oct' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Completado: 'success', 'En Curso': 'warning', Programado: 'error',
}

export default function MantenimientoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Mantenimiento" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Gestión de Mantenimiento</h2>
            <p className="text-on-surface-variant mt-1">Control de órdenes de trabajo y estado de equipos.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Orden de Trabajo
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'OT Abiertas', valor: '8', icon: 'build', color: 'bg-primary/10 text-primary' },
            { label: 'Equipos Operativos', valor: '94%', icon: 'check_circle', color: 'bg-emerald-500/10 text-emerald-400' },
            { label: 'MTTR Promedio', valor: '4.2h', icon: 'timer', color: 'bg-tertiary/10 text-tertiary' },
            { label: 'Costo del Mes', valor: '$8,420', icon: 'payments', color: 'bg-amber-500/10 text-amber-400' },
          ].map((kpi) => (
            <GlassCard key={kpi.label} className="p-6">
              <div className={`p-2 rounded-xl w-fit mb-4 ${kpi.color}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan">{kpi.label}</p>
              <p className="text-3xl font-headline font-bold text-on-surface mt-1">{kpi.valor}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Órdenes de Trabajo */}
          <GlassCard className="lg:col-span-2 overflow-hidden">
            <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-on-surface font-headline">Órdenes de Trabajo</h3>
              <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                  <tr>
                    {['ID', 'Equipo', 'Tipo', 'Técnico', 'Fecha', 'Estado'].map((h) => (
                      <th key={h} className="px-6 py-4">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {ordenes.map((ot) => (
                    <tr key={ot.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-primary font-medium">{ot.id}</td>
                      <td className="px-6 py-4 text-on-surface">{ot.equipo}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{ot.tipo}</td>
                      <td className="px-6 py-4 text-on-surface-variant">{ot.tecnico}</td>
                      <td className="px-6 py-4 text-outline text-xs">{ot.fecha}</td>
                      <td className="px-6 py-4">
                        <Badge variant={estadoVariant[ot.estado]}>{ot.estado}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* Estado de Equipos */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-on-surface font-headline mb-6">Estado de Equipos</h3>
            <div className="space-y-4">
              {equipos.map((eq) => (
                <div key={eq.nombre} className="p-4 bg-surface-container-low rounded-xl border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-on-surface">{eq.nombre}</p>
                    <Badge variant={eq.estado === 'Operativo' ? 'success' : 'warning'}>{eq.estado}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${eq.salud > 80 ? 'bg-emerald-500' : eq.salud > 60 ? 'bg-amber-500' : 'bg-error'}`}
                        style={{ width: `${eq.salud}%` }}
                      />
                    </div>
                    <span className="text-xs text-outline">{eq.salud}%</span>
                  </div>
                  <p className="text-[10px] text-outline">Próx. mantenimiento: {eq.proxMant}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
