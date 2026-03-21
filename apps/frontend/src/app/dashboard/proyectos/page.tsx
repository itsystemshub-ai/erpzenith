'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Proyectos Activos', value: '8', icon: 'folder_open', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Tareas Pendientes', value: '34', icon: 'task_alt', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Horas Esta Semana', value: '142', icon: 'schedule', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'En Riesgo', value: '2', icon: 'warning', color: 'text-error', bg: 'bg-error/10' },
]

type Priority = 'Alta' | 'Media' | 'Baja'

interface Task {
  title: string
  assignee: string
  priority: Priority
  due: string
}

interface Column {
  id: string
  label: string
  color: string
  tasks: Task[]
}

const columns: Column[] = [
  {
    id: 'todo',
    label: 'Por Hacer',
    color: 'text-outline',
    tasks: [
      { title: 'Diseño de módulo de reportes', assignee: 'ML', priority: 'Alta', due: '25 Mar' },
      { title: 'Migración de base de datos v2', assignee: 'CR', priority: 'Media', due: '28 Mar' },
      { title: 'Documentación API REST', assignee: 'AR', priority: 'Baja', due: '01 Abr' },
    ],
  },
  {
    id: 'inprogress',
    label: 'En Progreso',
    color: 'text-primary',
    tasks: [
      { title: 'Integración pasarela de pagos', assignee: 'VT', priority: 'Alta', due: '22 Mar' },
      { title: 'Optimización de consultas SQL', assignee: 'SM', priority: 'Media', due: '24 Mar' },
    ],
  },
  {
    id: 'done',
    label: 'Completado',
    color: 'text-tertiary',
    tasks: [
      { title: 'Setup CI/CD pipeline', assignee: 'CH', priority: 'Alta', due: '15 Mar' },
      { title: 'Diseño sistema de notificaciones', assignee: 'ML', priority: 'Media', due: '14 Mar' },
      { title: 'Pruebas de carga módulo ventas', assignee: 'AR', priority: 'Baja', due: '12 Mar' },
    ],
  },
]

const priorityColor: Record<Priority, string> = {
  Alta: 'text-error bg-error/10',
  Media: 'text-amber-400 bg-amber-400/10',
  Baja: 'text-tertiary bg-tertiary/10',
}

export default function ProyectosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Proyectos" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Gestión de Proyectos y Tiempos</h2>
            <p className="text-on-surface-variant mt-1">Seguimiento de tareas, sprints y horas del equipo.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nuevo Proyecto
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Kanban */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <div key={col.id} className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`font-headline font-bold ${col.color}`}>{col.label}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-surface-container-highest text-outline">
                    {col.tasks.length}
                  </span>
                </div>
                <button className="text-outline hover:text-on-surface">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </button>
              </div>
              <div className="p-4 space-y-3">
                {col.tasks.map((task) => (
                  <div key={task.title} className="bg-surface-container-highest/50 rounded-xl p-4 hover:bg-surface-container-highest transition-colors cursor-pointer">
                    <p className="text-sm font-medium text-on-surface mb-3 leading-snug">{task.title}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-primary">{task.assignee}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${priorityColor[task.priority]}`}>
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-outline">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        <span className="text-[10px]">{task.due}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
