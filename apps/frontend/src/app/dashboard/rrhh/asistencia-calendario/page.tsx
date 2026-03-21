'use client'
import { TopBar } from '@/components/layout/TopBar'

// March 2026: starts on Sunday (day index 0)
// We'll display Mon-Sun, so offset = 6 (Sunday is last col)
const DAYS_OF_WEEK = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']

type DayStatus = 'presente' | 'ausente' | 'tardanza' | 'finde' | 'empty'

interface CalendarDay {
  day: number | null
  status: DayStatus
}

// March 2026: 1st is Sunday → in Mon-Sun grid, Sunday is col index 6 → offset = 6
const march2026: CalendarDay[] = [
  // Week 1: Mon 23 Feb – Sun 1 Mar (only Mar 1 = Sunday)
  { day: null, status: 'empty' }, { day: null, status: 'empty' }, { day: null, status: 'empty' },
  { day: null, status: 'empty' }, { day: null, status: 'empty' }, { day: null, status: 'empty' },
  { day: 1, status: 'finde' },
  // Week 2
  { day: 2, status: 'presente' }, { day: 3, status: 'presente' }, { day: 4, status: 'presente' },
  { day: 5, status: 'presente' }, { day: 6, status: 'presente' }, { day: 7, status: 'finde' },
  { day: 8, status: 'finde' },
  // Week 3
  { day: 9, status: 'presente' }, { day: 10, status: 'tardanza' }, { day: 11, status: 'presente' },
  { day: 12, status: 'presente' }, { day: 13, status: 'presente' }, { day: 14, status: 'finde' },
  { day: 15, status: 'finde' },
  // Week 4
  { day: 16, status: 'presente' }, { day: 17, status: 'presente' }, { day: 18, status: 'ausente' },
  { day: 19, status: 'presente' }, { day: 20, status: 'presente' }, { day: 21, status: 'finde' },
  { day: 22, status: 'finde' },
  // Week 5
  { day: 23, status: 'presente' }, { day: 24, status: 'presente' }, { day: 25, status: 'presente' },
  { day: 26, status: 'ausente' }, { day: 27, status: 'presente' }, { day: 28, status: 'finde' },
  { day: 29, status: 'finde' },
  // Week 6
  { day: 30, status: 'presente' }, { day: 31, status: 'presente' },
]

const statusStyle: Record<DayStatus, string> = {
  presente: 'bg-tertiary/20 text-tertiary border border-tertiary/30',
  ausente: 'bg-error/20 text-error border border-error/30',
  tardanza: 'bg-amber-400/20 text-amber-400 border border-amber-400/30',
  finde: 'bg-surface-container-highest/40 text-outline',
  empty: 'opacity-0 pointer-events-none',
}

const stats = [
  { label: 'Presencias', value: '18', icon: 'check_circle', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Ausencias', value: '2', icon: 'cancel', color: 'text-error', bg: 'bg-error/10' },
  { label: 'Tardanzas', value: '1', icon: 'schedule', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Horas Trabajadas', value: '144h', icon: 'timer', color: 'text-primary', bg: 'bg-primary/10' },
]

export default function AsistenciaCalendarioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="RRHH" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div>
          <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Asistencia y Expediente</h2>
          <p className="text-on-surface-variant mt-1">Registro de asistencia mensual y resumen del empleado.</p>
        </div>

        {/* Employee Info Card */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
            <span className="text-3xl font-headline font-bold text-secondary">ML</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <h3 className="text-2xl font-headline font-bold text-on-surface">Mariana López</h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-tertiary/10 text-tertiary">Activo</span>
            </div>
            <p className="text-on-surface-variant">Diseñadora UX Senior</p>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-xs text-outline font-spartan uppercase tracking-widest">ID Empleado</span>
            <span className="font-mono font-bold text-primary">EMP-2023-045</span>
          </div>
        </div>

        {/* Calendar */}
        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-headline font-bold text-on-surface">Marzo 2026</h3>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-tertiary/30 border border-tertiary/40" />Presente</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-error/30 border border-error/40" />Ausente</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-amber-400/30 border border-amber-400/40" />Tardanza</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-surface-container-highest/60" />Fin de semana</span>
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {DAYS_OF_WEEK.map((d) => (
              <div key={d} className="text-center text-[10px] font-spartan font-bold uppercase tracking-widest text-outline py-1">{d}</div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-2">
            {march2026.map((cell, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${statusStyle[cell.status]}`}
              >
                {cell.day}
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${s.color}`}>{s.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{s.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
