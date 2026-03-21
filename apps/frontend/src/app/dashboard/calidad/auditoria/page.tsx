'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const hallazgos = [
  { id: 'HAL-001', area: 'Producción', descripcion: 'Temperatura de pasteurización fuera de rango en turno nocturno (3 eventos)', severidad: 'Alta', estado: 'En Proceso', responsable: 'Ing. Carmen Salcedo', fecha: '15/11/2025' },
  { id: 'HAL-002', area: 'Almacén', descripcion: 'Productos sin etiqueta de fecha de vencimiento en zona de cuarentena', severidad: 'Media', estado: 'Abierto', responsable: 'Carlos Martínez', fecha: '18/11/2025' },
  { id: 'HAL-003', area: 'Logística', descripcion: 'Vehículo de reparto sin certificado de fumigación vigente', severidad: 'Alta', estado: 'Cerrado', responsable: 'Andrés Rivas', fecha: '10/11/2025' },
  { id: 'HAL-004', area: 'RRHH', descripcion: 'Expedientes de 3 empleados sin examen médico pre-empleo actualizado', severidad: 'Baja', estado: 'Cerrado', responsable: 'Yolanda González', fecha: '05/11/2025' },
  { id: 'HAL-005', area: 'Calidad', descripcion: 'Equipo de medición de pH sin calibración desde hace 45 días', severidad: 'Media', estado: 'En Proceso', responsable: 'Ing. Pedro Vargas', fecha: '20/11/2025' },
  { id: 'HAL-006', area: 'Producción', descripcion: 'Falta de registro de limpieza en línea de envasado durante 2 días', severidad: 'Media', estado: 'Abierto', responsable: 'Ing. Luis Briceño', fecha: '25/11/2025' },
  { id: 'HAL-007', area: 'Compras', descripcion: 'Proveedor de empaques sin certificado ISO 9001 vigente', severidad: 'Baja', estado: 'Abierto', responsable: 'Jorge Luis Medina', fecha: '26/11/2025' },
  { id: 'HAL-008', area: 'Almacén', descripcion: 'Incumplimiento FIFO en despacho de materia prima (lote antiguo no rotado)', severidad: 'Alta', estado: 'Abierto', responsable: 'Carlos Martínez', fecha: '27/11/2025' },
]

const severidadVariant: Record<string, 'error' | 'warning' | 'success'> = {
  Alta: 'error',
  Media: 'warning',
  Baja: 'success',
}

const estadoColor: Record<string, string> = {
  Abierto: 'bg-error/10 text-error',
  'En Proceso': 'bg-amber-500/10 text-amber-400',
  Cerrado: 'bg-emerald-500/10 text-emerald-400',
}

export default function AuditoriaPage() {
  const alta = hallazgos.filter((h) => h.severidad === 'Alta').length
  const media = hallazgos.filter((h) => h.severidad === 'Media').length
  const baja = hallazgos.filter((h) => h.severidad === 'Baja').length
  const abiertos = hallazgos.filter((h) => h.estado === 'Abierto').length
  const enProceso = hallazgos.filter((h) => h.estado === 'En Proceso').length
  const cerrados = hallazgos.filter((h) => h.estado === 'Cerrado').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Auditoría Interna" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Auditoría Interna</h2>
            <p className="text-on-surface-variant mt-1">Seguimiento de hallazgos y acciones correctivas.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nuevo Hallazgo
          </Button>
        </div>

        {/* Stats por severidad */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="p-5 border-l-4 border-error">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Severidad Alta</p>
              <div className="p-2 bg-error/10 text-error rounded-xl">
                <span className="material-symbols-outlined text-[20px]">priority_high</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{alta}</p>
            <p className="text-xs text-error mt-1">requieren atención inmediata</p>
          </GlassCard>

          <GlassCard className="p-5 border-l-4 border-amber-500">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Severidad Media</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">warning</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{media}</p>
            <p className="text-xs text-amber-400 mt-1">en seguimiento</p>
          </GlassCard>

          <GlassCard className="p-5 border-l-4 border-emerald-500">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Severidad Baja</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">info</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{baja}</p>
            <p className="text-xs text-outline mt-1">observaciones menores</p>
          </GlassCard>
        </div>

        {/* Resumen de estados */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Abiertos', value: abiertos, color: 'text-error', bg: 'bg-error/10' },
            { label: 'En Proceso', value: enProceso, color: 'text-amber-400', bg: 'bg-amber-500/10' },
            { label: 'Cerrados', value: cerrados, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} rounded-2xl p-4 flex items-center gap-4`}>
              <p className={`text-3xl font-headline font-bold ${s.color}`}>{s.value}</p>
              <p className="text-sm font-medium text-on-surface">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">Registro de Hallazgos</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['ID', 'Área', 'Descripción', 'Severidad', 'Estado', 'Responsable', 'Fecha'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {hallazgos.map((h) => (
                  <tr key={h.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-primary font-bold">{h.id}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{h.area}</td>
                    <td className="px-6 py-4 text-sm text-on-surface max-w-xs">
                      <p className="truncate">{h.descripcion}</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={severidadVariant[h.severidad]}>{h.severidad}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${estadoColor[h.estado]}`}>
                        {h.estado}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{h.responsable}</td>
                    <td className="px-6 py-4 text-sm text-outline">{h.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
