'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const TASA_BCV = 46.82

const transacciones = [
  { ticket: 'T-00841', hora: '08:12', cajero: 'Luisa Pérez', items: 4, totalUSD: 12.40, metodo: 'Transferencia', estado: 'Completada' },
  { ticket: 'T-00842', hora: '08:35', cajero: 'Carlos Medina', items: 2, totalUSD: 3.70, metodo: 'Efectivo', estado: 'Completada' },
  { ticket: 'T-00843', hora: '09:01', cajero: 'Luisa Pérez', items: 7, totalUSD: 28.90, metodo: 'Punto', estado: 'Completada' },
  { ticket: 'T-00844', hora: '09:22', cajero: 'Andrés Rivas', items: 1, totalUSD: 1.80, metodo: 'Efectivo', estado: 'Completada' },
  { ticket: 'T-00845', hora: '09:48', cajero: 'Carlos Medina', items: 5, totalUSD: 18.60, metodo: 'Transferencia', estado: 'Completada' },
  { ticket: 'T-00846', hora: '10:15', cajero: 'Luisa Pérez', items: 3, totalUSD: 9.20, metodo: 'Punto', estado: 'Anulada' },
  { ticket: 'T-00847', hora: '10:42', cajero: 'Andrés Rivas', items: 6, totalUSD: 34.50, metodo: 'Transferencia', estado: 'Completada' },
  { ticket: 'T-00848', hora: '11:05', cajero: 'Luisa Pérez', items: 2, totalUSD: 5.60, metodo: 'Efectivo', estado: 'Completada' },
  { ticket: 'T-00849', hora: '11:30', cajero: 'Carlos Medina', items: 8, totalUSD: 47.20, metodo: 'Punto', estado: 'Completada' },
  { ticket: 'T-00850', hora: '11:58', cajero: 'Andrés Rivas', items: 3, totalUSD: 14.10, metodo: 'Transferencia', estado: 'Pendiente' },
]

const totalHoyUSD = transacciones
  .filter((t) => t.estado === 'Completada')
  .reduce((acc, t) => acc + t.totalUSD, 0)

const ticketPromedio =
  totalHoyUSD / transacciones.filter((t) => t.estado === 'Completada').length

const metodoBadge: Record<string, string> = {
  Efectivo: 'bg-emerald-500/10 text-emerald-400',
  Transferencia: 'bg-primary/10 text-primary',
  Punto: 'bg-tertiary/10 text-tertiary',
}

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Completada: 'success',
  Pendiente: 'warning',
  Anulada: 'error',
}

export default function HistorialPOSPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Historial de Transacciones" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Historial POS</h2>
            <p className="text-on-surface-variant mt-1">Registro de todas las transacciones del día.</p>
          </div>
          <Button variant="outline" size="sm">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Exportar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ventas Hoy</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">receipt_long</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">
              {transacciones.filter((t) => t.estado === 'Completada').length}
            </p>
            <p className="text-xs text-outline mt-1">transacciones completadas</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ingresos Hoy</p>
              <div className="p-2 bg-tertiary/10 text-tertiary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">payments</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">${totalHoyUSD.toFixed(2)}</p>
            <p className="text-xs text-tertiary mt-1">Bs. {(totalHoyUSD * TASA_BCV).toFixed(2)}</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ticket Promedio</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">analytics</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">${ticketPromedio.toFixed(2)}</p>
            <p className="text-xs text-outline mt-1">por transacción</p>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Transacciones del Día</h3>
            <div className="flex items-center gap-2 text-xs text-outline">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>En vivo</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Ticket #', 'Hora', 'Cajero', 'Items', 'Total USD', 'Total Bs.', 'Método', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {transacciones.map((t) => (
                  <tr key={t.ticket} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm text-primary font-bold">{t.ticket}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{t.hora}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{t.cajero}</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant text-center">{t.items}</td>
                    <td className="px-6 py-4 text-sm font-bold text-on-surface">${t.totalUSD.toFixed(2)}</td>
                    <td className="px-6 py-4 text-sm text-tertiary">Bs. {(t.totalUSD * TASA_BCV).toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${metodoBadge[t.metodo]}`}>
                        {t.metodo}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[t.estado]}>{t.estado}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <p className="text-sm text-outline">
              Mostrando <span className="text-on-surface font-medium">{transacciones.length}</span> transacciones
            </p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 border border-white/10 rounded-lg text-sm text-outline hover:bg-white/5 disabled:opacity-50" disabled>
                Anterior
              </button>
              <button className="px-3 py-1 border border-white/10 rounded-lg text-sm text-outline hover:bg-white/5">
                Siguiente
              </button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
