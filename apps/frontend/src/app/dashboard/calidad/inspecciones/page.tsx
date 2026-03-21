'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const inspecciones = [
  { lote: 'LOT-2025-1142', producto: 'Harina de Maíz Precocida 1kg', inspector: 'Ing. Carmen Salcedo', fecha: '28/11/2025 08:30', resultado: 'Aprobado', observaciones: 'Cumple todos los parámetros fisicoquímicos.' },
  { lote: 'LOT-2025-1143', producto: 'Aceite Vegetal 1L', inspector: 'Ing. Pedro Vargas', fecha: '28/11/2025 09:15', resultado: 'Aprobado', observaciones: 'Acidez dentro del rango permitido.' },
  { lote: 'LOT-2025-1144', producto: 'Pasta Corta 500g', inspector: 'Ing. Carmen Salcedo', fecha: '28/11/2025 10:00', resultado: 'Rechazado', observaciones: 'Humedad fuera de rango (14.2% vs máx 12.5%).' },
  { lote: 'LOT-2025-1145', producto: 'Arroz Blanco 1kg', inspector: 'Ing. Luis Briceño', fecha: '28/11/2025 10:45', resultado: 'Aprobado', observaciones: 'Sin observaciones.' },
  { lote: 'LOT-2025-1146', producto: 'Azúcar Refinada 1kg', inspector: 'Ing. Pedro Vargas', fecha: '28/11/2025 11:30', resultado: 'Pendiente', observaciones: 'En espera de resultados de laboratorio.' },
  { lote: 'LOT-2025-1147', producto: 'Café Molido 250g', inspector: 'Ing. Luis Briceño', fecha: '28/11/2025 12:00', resultado: 'Aprobado', observaciones: 'Granulometría y aroma conformes.' },
  { lote: 'LOT-2025-1148', producto: 'Leche en Polvo 400g', inspector: 'Ing. Carmen Salcedo', fecha: '28/11/2025 13:15', resultado: 'Rechazado', observaciones: 'Presencia de grumos. Lote retenido para reproceso.' },
  { lote: 'LOT-2025-1149', producto: 'Jabón de Tocador 100g', inspector: 'Ing. Pedro Vargas', fecha: '28/11/2025 14:00', resultado: 'Pendiente', observaciones: 'Análisis microbiológico en proceso.' },
]

const resultadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Aprobado: 'success',
  Pendiente: 'warning',
  Rechazado: 'error',
}

export default function InspeccionesPage() {
  const aprobadas = inspecciones.filter((i) => i.resultado === 'Aprobado').length
  const rechazadas = inspecciones.filter((i) => i.resultado === 'Rechazado').length
  const pendientes = inspecciones.filter((i) => i.resultado === 'Pendiente').length
  const tasaAprobacion = Math.round((aprobadas / (aprobadas + rechazadas)) * 100)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Inspecciones de Calidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Inspecciones</h2>
            <p className="text-on-surface-variant mt-1">Control de calidad de lotes de producción.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nueva Inspección
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Inspecciones Hoy</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">fact_check</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{inspecciones.length}</p>
            <p className="text-xs text-outline mt-1">lotes inspeccionados</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Aprobadas</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">check_circle</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{aprobadas}</p>
            <p className="text-xs text-emerald-400 mt-1">lotes conformes</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Rechazadas</p>
              <div className="p-2 bg-error/10 text-error rounded-xl">
                <span className="material-symbols-outlined text-[20px]">cancel</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{rechazadas}</p>
            <p className="text-xs text-error mt-1">requieren reproceso</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Tasa Aprobación</p>
              <div className="p-2 bg-tertiary/10 text-tertiary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">percent</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{tasaAprobacion}%</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div
                className={`h-1.5 rounded-full ${tasaAprobacion >= 80 ? 'bg-emerald-500' : 'bg-amber-500'}`}
                style={{ width: `${tasaAprobacion}%` }}
              />
            </div>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Registro de Inspecciones</h3>
            <div className="flex items-center gap-2 text-xs text-outline">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>{pendientes} pendientes</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Lote', 'Producto', 'Inspector', 'Fecha / Hora', 'Resultado', 'Observaciones'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {inspecciones.map((ins) => (
                  <tr key={ins.lote} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-primary font-bold">{ins.lote}</td>
                    <td className="px-6 py-4 text-sm font-medium text-on-surface">{ins.producto}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">{ins.inspector}</td>
                    <td className="px-6 py-4 text-sm text-outline">{ins.fecha}</td>
                    <td className="px-6 py-4">
                      <Badge variant={resultadoVariant[ins.resultado]}>{ins.resultado}</Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant max-w-xs truncate">{ins.observaciones}</td>
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
