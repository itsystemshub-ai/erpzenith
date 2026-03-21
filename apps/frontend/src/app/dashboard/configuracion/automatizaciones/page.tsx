'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const workflows = [
  {
    id: 1, name: 'Alerta de Stock Bajo', trigger: 'Inventario < mínimo', actions: ['Notificar a compras', 'Crear orden de compra borrador'], enabled: true, runs: 47, lastRun: 'Hace 2h',
  },
  {
    id: 2, name: 'Factura Vencida', trigger: 'Factura > 30 días sin pago', actions: ['Email recordatorio al cliente', 'Notificar a cobranzas'], enabled: true, runs: 12, lastRun: 'Hace 1 día',
  },
  {
    id: 3, name: 'Bienvenida Nuevo Cliente', trigger: 'Cliente creado', actions: ['Email de bienvenida', 'Asignar vendedor', 'Crear tarea de seguimiento'], enabled: true, runs: 8, lastRun: 'Hace 3 días',
  },
  {
    id: 4, name: 'Backup Automático', trigger: 'Diario a las 2:00 AM', actions: ['Exportar base de datos', 'Subir a almacenamiento'], enabled: false, runs: 0, lastRun: 'Nunca',
  },
]

const triggerIcons: Record<string, string> = {
  'Inventario < mínimo': 'inventory_2',
  'Factura > 30 días sin pago': 'receipt_long',
  'Cliente creado': 'person_add',
  'Diario a las 2:00 AM': 'schedule',
}

export default function AutomatizacionesPage() {
  const [selected, setSelected] = useState<typeof workflows[0] | null>(null)
  const [showNew, setShowNew] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Constructor de Automatizaciones</h2>
            <p className="text-on-surface-variant mt-1">Crea workflows para automatizar procesos del ERP</p>
          </div>
          <button onClick={() => setShowNew(true)}
            className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nuevo Workflow
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Workflows Activos', value: String(workflows.filter(w => w.enabled).length), icon: 'play_circle', color: 'text-tertiary' },
            { label: 'Ejecuciones Hoy', value: '23', icon: 'bolt', color: 'text-primary' },
            { label: 'Tasa de Éxito', value: '98.5%', icon: 'check_circle', color: 'text-tertiary' },
            { label: 'Tiempo Ahorrado', value: '4.2h', icon: 'timer', color: 'text-secondary' },
          ].map(s => (
            <div key={s.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${s.color}`}>{s.icon}</span>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{s.value}</p>
                <p className="text-xs text-outline">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workflow list */}
          <div className="lg:col-span-1 space-y-3">
            {workflows.map(wf => (
              <div key={wf.id}
                onClick={() => setSelected(wf)}
                className={`glass-panel rounded-2xl p-5 cursor-pointer transition-all hover:bg-white/5 ${selected?.id === wf.id ? 'border border-primary/40' : ''}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${wf.enabled ? 'bg-primary/20' : 'bg-white/10'}`}>
                      <span className={`material-symbols-outlined text-[18px] ${wf.enabled ? 'text-primary' : 'text-outline'}`}>
                        {triggerIcons[wf.trigger] || 'bolt'}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{wf.name}</p>
                      <p className="text-xs text-outline">{wf.runs} ejecuciones</p>
                    </div>
                  </div>
                  <div className={`w-10 h-5 rounded-full transition-colors ${wf.enabled ? 'bg-primary' : 'bg-white/20'}`}>
                    <div className={`w-4 h-4 bg-white rounded-full mt-0.5 transition-all ${wf.enabled ? 'ml-5.5' : 'ml-0.5'}`} />
                  </div>
                </div>
                <p className="text-xs text-outline">Trigger: {wf.trigger}</p>
                <p className="text-xs text-outline mt-1">Última ejecución: {wf.lastRun}</p>
              </div>
            ))}
          </div>

          {/* Detail / Builder */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className="glass-panel rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline font-bold text-on-surface text-lg">{selected.name}</h3>
                  <div className="flex gap-2">
                    <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">Editar</button>
                    <button className="bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold px-4 py-2 rounded-xl transition-colors">Ejecutar ahora</button>
                  </div>
                </div>

                {/* Flow diagram */}
                <div className="space-y-3">
                  {/* Trigger */}
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                    <div>
                      <p className="text-xs text-outline font-bold uppercase">Disparador</p>
                      <p className="text-sm font-bold text-on-surface">{selected.trigger}</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-white/20" />
                  </div>

                  {/* Actions */}
                  {selected.actions.map((action, i) => (
                    <div key={i}>
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-bold text-secondary">{i + 1}</div>
                        <div>
                          <p className="text-xs text-outline font-bold uppercase">Acción</p>
                          <p className="text-sm font-bold text-on-surface">{action}</p>
                        </div>
                      </div>
                      {i < selected.actions.length - 1 && (
                        <div className="flex justify-center my-1">
                          <div className="w-0.5 h-4 bg-white/20" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-2">
                  {[
                    { label: 'Ejecuciones', value: String(selected.runs) },
                    { label: 'Última vez', value: selected.lastRun },
                    { label: 'Estado', value: selected.enabled ? 'Activo' : 'Inactivo' },
                  ].map(s => (
                    <div key={s.label} className="text-center p-3 rounded-xl bg-white/5">
                      <p className="text-xs text-outline">{s.label}</p>
                      <p className="font-bold text-on-surface mt-1">{s.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="glass-panel rounded-2xl p-6 flex items-center justify-center h-full min-h-[300px]">
                <div className="text-center text-outline">
                  <span className="material-symbols-outlined text-5xl">account_tree</span>
                  <p className="text-sm mt-2">Selecciona un workflow para ver detalles</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
