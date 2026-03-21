'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const historialNominas = [
  { periodo: '01 Nov — 15 Nov 2025', tipo: 'Quincenal', empleados: 48, brutoUSD: 38420.50, deducciones: 3842.05, netoUSD: 34578.45, estado: 'Procesada' },
  { periodo: '16 Oct — 31 Oct 2025', tipo: 'Quincenal', empleados: 48, brutoUSD: 38420.50, deducciones: 3842.05, netoUSD: 34578.45, estado: 'Procesada' },
  { periodo: '01 Oct — 15 Oct 2025', tipo: 'Quincenal', empleados: 47, brutoUSD: 37890.00, deducciones: 3789.00, netoUSD: 34101.00, estado: 'Procesada' },
  { periodo: 'Octubre 2025', tipo: 'Mensual', empleados: 48, brutoUSD: 76841.00, deducciones: 7684.10, netoUSD: 69156.90, estado: 'Procesada' },
  { periodo: '16 Sep — 30 Sep 2025', tipo: 'Quincenal', empleados: 46, brutoUSD: 36950.00, deducciones: 3695.00, netoUSD: 33255.00, estado: 'Procesada' },
  { periodo: '01 Sep — 15 Sep 2025', tipo: 'Quincenal', empleados: 46, brutoUSD: 36950.00, deducciones: 3695.00, netoUSD: 33255.00, estado: 'Procesada' },
  { periodo: 'Septiembre 2025', tipo: 'Mensual', empleados: 46, brutoUSD: 73900.00, deducciones: 7390.00, netoUSD: 66510.00, estado: 'Procesada' },
  { periodo: '16 Nov — 30 Nov 2025', tipo: 'Quincenal', empleados: 48, brutoUSD: 38420.50, deducciones: 3842.05, netoUSD: 34578.45, estado: 'Pendiente' },
]

const estadoVariant: Record<string, 'success' | 'warning'> = {
  Procesada: 'success',
  Pendiente: 'warning',
}

export default function HistorialNominaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Historial de Nóminas" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Historial de Nóminas</h2>
            <p className="text-on-surface-variant mt-1">Registro de todos los períodos procesados.</p>
          </div>
          <Button variant="outline" size="sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar Todo
          </Button>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Total Pagado 2025</p>
            <p className="text-3xl font-headline font-bold text-on-surface">$312,450.00</p>
            <p className="text-xs text-tertiary mt-1">acumulado del año</p>
          </GlassCard>
          <GlassCard className="p-5">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Períodos Procesados</p>
            <p className="text-3xl font-headline font-bold text-on-surface">
              {historialNominas.filter((n) => n.estado === 'Procesada').length}
            </p>
            <p className="text-xs text-outline mt-1">de {historialNominas.length} en el registro</p>
          </GlassCard>
          <GlassCard className="p-5">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Deducciones Totales</p>
            <p className="text-3xl font-headline font-bold text-error">
              ${historialNominas.reduce((acc, n) => acc + n.deducciones, 0).toFixed(2)}
            </p>
            <p className="text-xs text-outline mt-1">IVSS + FAOV + INCES + ISLR</p>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">Períodos de Nómina</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Período', 'Tipo', 'Empleados', 'Total Bruto USD', 'Deducciones', 'Total Neto', 'Estado', 'Exportar'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {historialNominas.map((n, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-on-surface">{n.periodo}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        n.tipo === 'Mensual'
                          ? 'bg-tertiary/10 text-tertiary'
                          : 'bg-primary/10 text-primary'
                      }`}>
                        {n.tipo}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant text-center">{n.empleados}</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">${n.brutoUSD.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4 text-sm text-error">${n.deducciones.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4 text-sm font-bold text-primary">${n.netoUSD.toLocaleString('es-VE', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[n.estado]}>{n.estado}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                          n.estado === 'Procesada'
                            ? 'text-outline hover:text-primary'
                            : 'text-outline/30 cursor-not-allowed'
                        }`}
                        disabled={n.estado !== 'Procesada'}
                      >
                        <span className="material-symbols-outlined text-[16px]">download</span>
                        PDF
                      </button>
                    </td>
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
