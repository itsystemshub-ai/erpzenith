'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'

// Noviembre 2025
const diasMes = Array.from({ length: 30 }, (_, i) => i + 1)
const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
// Nov 1 2025 = Sábado (offset 6)
const offsetInicio = 6

const estadoDia: Record<number, 'presente' | 'ausente' | 'vacaciones' | 'finde'> = {
  1: 'finde', 2: 'finde',
  3: 'presente', 4: 'presente', 5: 'presente', 6: 'presente', 7: 'presente',
  8: 'finde', 9: 'finde',
  10: 'presente', 11: 'presente', 12: 'ausente', 13: 'presente', 14: 'presente',
  15: 'finde', 16: 'finde',
  17: 'presente', 18: 'presente', 19: 'presente', 20: 'vacaciones', 21: 'presente',
  22: 'finde', 23: 'finde',
  24: 'presente', 25: 'presente', 26: 'presente', 27: 'presente', 28: 'presente',
  29: 'finde', 30: 'finde',
}

const asistenciaHoy = [
  { nombre: 'Mariana Rodríguez', entrada: '07:58', salida: '17:02', estado: 'Presente' },
  { nombre: 'Jorge Luis Medina', entrada: '08:05', salida: '17:00', estado: 'Presente' },
  { nombre: 'Ana Sofía Blanco', entrada: '—', salida: '—', estado: 'Vacaciones' },
  { nombre: 'Roberto Torres', entrada: '08:22', salida: '17:00', estado: 'Tardanza' },
  { nombre: 'Yolanda González', entrada: '07:55', salida: '17:05', estado: 'Presente' },
  { nombre: 'Carlos Martínez', entrada: '08:00', salida: '17:00', estado: 'Presente' },
  { nombre: 'Luisa Pérez', entrada: '07:50', salida: '16:55', estado: 'Presente' },
  { nombre: 'Andrés Rivas', entrada: '—', salida: '—', estado: 'Ausente' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Presente: 'success',
  Tardanza: 'warning',
  Ausente: 'error',
  Vacaciones: 'warning',
}

const diaColor: Record<string, string> = {
  presente: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
  ausente: 'bg-error/20 text-error border border-error/30',
  vacaciones: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  finde: 'bg-surface-container text-outline/40',
}

export default function AsistenciaPage() {
  const presentes = asistenciaHoy.filter((a) => a.estado === 'Presente').length
  const ausentes = asistenciaHoy.filter((a) => a.estado === 'Ausente').length
  const tardanzas = asistenciaHoy.filter((a) => a.estado === 'Tardanza').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Control de Asistencia" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Asistencia</h2>
            <p className="text-on-surface-variant mt-1">Control de asistencia — Noviembre 2025</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-emerald-500/30 border border-emerald-500/50" />Presente</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-error/30 border border-error/50" />Ausente</span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-500/30 border border-amber-500/50" />Vacaciones</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Presentes Hoy</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{presentes}</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${(presentes / asistenciaHoy.length) * 100}%` }} />
            </div>
            <p className="text-xs text-outline mt-1">{Math.round((presentes / asistenciaHoy.length) * 100)}% del personal</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ausentes</p>
              <div className="p-2 bg-error/10 text-error rounded-xl">
                <span className="material-symbols-outlined text-[20px]">person_off</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{ausentes}</p>
            <p className="text-xs text-outline mt-1">sin justificación</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Tardanzas</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">schedule</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{tardanzas}</p>
            <p className="text-xs text-outline mt-1">llegaron después de 08:10</p>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendario */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-on-surface font-headline mb-4">Noviembre 2025</h3>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {diasSemana.map((d) => (
                <div key={d} className="text-center text-[10px] font-spartan uppercase tracking-widest text-outline py-1">
                  {d}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: offsetInicio }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {diasMes.map((dia) => (
                <div
                  key={dia}
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all ${diaColor[estadoDia[dia] || 'finde']}`}
                >
                  {dia}
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Tabla del día */}
          <GlassCard className="overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="text-lg font-bold text-on-surface font-headline">Registro de Hoy</h3>
              <p className="text-xs text-outline mt-0.5">Viernes, 28 de Noviembre 2025</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5">
                    {['Empleado', 'Entrada', 'Salida', 'Estado'].map((h) => (
                      <th key={h} className="px-4 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {asistenciaHoy.map((a) => (
                    <tr key={a.nombre} className="hover:bg-white/5 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-on-surface">{a.nombre}</td>
                      <td className="px-4 py-3 text-sm font-mono text-on-surface-variant">{a.entrada}</td>
                      <td className="px-4 py-3 text-sm font-mono text-on-surface-variant">{a.salida}</td>
                      <td className="px-4 py-3">
                        <Badge variant={estadoVariant[a.estado]}>{a.estado}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
