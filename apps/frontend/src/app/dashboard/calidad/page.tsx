'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const inspecciones = [
  { id: 'INS-2024-0055', lote: 'LOTE-2024-0082', producto: 'Válvula V-200', inspector: 'Ing. Rodríguez', fecha: '14 Oct 2024', resultado: 'Aprobado' },
  { id: 'INS-2024-0054', lote: 'LOTE-2024-0081', producto: 'Conector CH-50', inspector: 'Ing. Martínez', fecha: '13 Oct 2024', resultado: 'Rechazado' },
  { id: 'INS-2024-0053', lote: 'LOTE-2024-0080', producto: 'Bomba BC-100', inspector: 'Ing. García', fecha: '12 Oct 2024', resultado: 'En Revisión' },
  { id: 'INS-2024-0052', lote: 'LOTE-2024-0079', producto: 'Filtro FI-30', inspector: 'Ing. López', fecha: '11 Oct 2024', resultado: 'Aprobado' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Aprobado: 'success', 'En Revisión': 'warning', Rechazado: 'error',
}

const metricas = [
  { label: 'Tasa de Aprobación', valor: '94.2%', icon: 'verified', color: 'bg-emerald-500/10 text-emerald-400', trend: '↑ 1.2%' },
  { label: 'No Conformidades', valor: '7', icon: 'report_problem', color: 'bg-error/10 text-error', trend: '↓ 3 vs mes ant.' },
  { label: 'Inspecciones Hoy', valor: '12', icon: 'fact_check', color: 'bg-primary/10 text-primary', trend: '4 pendientes' },
  { label: 'Índice Cpk', valor: '1.42', icon: 'analytics', color: 'bg-tertiary/10 text-tertiary', trend: 'Proceso capaz' },
]

export default function CalidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Calidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Control de Calidad</h2>
            <p className="text-on-surface-variant mt-1">Inspecciones, no conformidades y cumplimiento ISO.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Inspección
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricas.map((m) => (
            <GlassCard key={m.label} className="p-6">
              <div className={`p-2 rounded-xl w-fit mb-4 ${m.color}`}>
                <span className="material-symbols-outlined">{m.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan">{m.label}</p>
              <p className="text-3xl font-headline font-bold text-on-surface mt-1">{m.valor}</p>
              <p className="text-xs text-on-surface-variant mt-2">{m.trend}</p>
            </GlassCard>
          ))}
        </div>

        {/* Tabla Inspecciones */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Registro de Inspecciones</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                <tr>
                  {['ID Inspección', 'Lote', 'Producto', 'Inspector', 'Fecha', 'Resultado'].map((h) => (
                    <th key={h} className="px-6 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {inspecciones.map((ins) => (
                  <tr key={ins.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{ins.id}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{ins.lote}</td>
                    <td className="px-6 py-4 text-on-surface">{ins.producto}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{ins.inspector}</td>
                    <td className="px-6 py-4 text-outline text-xs">{ins.fecha}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[ins.resultado]}>{ins.resultado}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Cumplimiento ISO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { norma: 'ISO 9001:2015', estado: 'Certificado', vence: 'Mar 2026', pct: 98 },
            { norma: 'ISO 14001:2015', estado: 'En Auditoría', vence: 'Nov 2024', pct: 72 },
            { norma: 'ISO 45001:2018', estado: 'Certificado', vence: 'Jun 2025', pct: 95 },
          ].map((iso) => (
            <GlassCard key={iso.norma} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-on-surface font-headline">{iso.norma}</h4>
                <Badge variant={iso.estado === 'Certificado' ? 'success' : 'warning'}>{iso.estado}</Badge>
              </div>
              <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary rounded-full" style={{ width: `${iso.pct}%` }} />
              </div>
              <div className="flex justify-between text-xs text-outline">
                <span>Cumplimiento: {iso.pct}%</span>
                <span>Vence: {iso.vence}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
