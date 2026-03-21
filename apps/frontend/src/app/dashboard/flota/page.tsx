'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const vehiculos = [
  { placa: 'ABC-123', modelo: 'Ford Transit 2022', conductor: 'Pedro Ramírez', ruta: 'Caracas → Valencia', km: 45230, estado: 'En Ruta', combustible: 72 },
  { placa: 'XYZ-456', modelo: 'Toyota Hilux 2021', conductor: 'Juan Flores', ruta: 'Maracaibo → Barquisimeto', km: 62100, estado: 'Disponible', combustible: 90 },
  { placa: 'DEF-789', modelo: 'Chevrolet NPR 2020', conductor: 'Luis Torres', ruta: 'Puerto Ordaz → Caracas', km: 88450, estado: 'Mantenimiento', combustible: 30 },
  { placa: 'GHI-012', modelo: 'Mercedes Sprinter 2023', conductor: 'Carlos Díaz', ruta: 'Valencia → Maracaibo', km: 12800, estado: 'En Ruta', combustible: 55 },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Disponible: 'success', 'En Ruta': 'warning', Mantenimiento: 'error',
}

export default function FlotaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Gestión de Flota" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Gestión de Flota</h2>
            <p className="text-on-surface-variant mt-1">Monitoreo de vehículos, rutas y consumo de combustible.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Registrar Vehículo
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Vehículos Activos', valor: '18', icon: 'local_shipping', color: 'bg-primary/10 text-primary' },
            { label: 'En Ruta Ahora', valor: '11', icon: 'route', color: 'bg-tertiary/10 text-tertiary' },
            { label: 'Km Recorridos (Mes)', valor: '42,800', icon: 'speed', color: 'bg-emerald-500/10 text-emerald-400' },
            { label: 'Costo Combustible', valor: '$3,240', icon: 'local_gas_station', color: 'bg-amber-500/10 text-amber-400' },
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

        {/* Tabla Vehículos */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Estado de Flota</h3>
            <div className="flex items-center gap-2 text-xs text-outline">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Actualización en tiempo real
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                <tr>
                  {['Placa', 'Vehículo', 'Conductor', 'Ruta Actual', 'Km Total', 'Combustible', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vehiculos.map((v) => (
                  <tr key={v.placa} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-primary font-medium">{v.placa}</td>
                    <td className="px-6 py-4 text-on-surface">{v.modelo}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{v.conductor}</td>
                    <td className="px-6 py-4 text-on-surface-variant text-xs">{v.ruta}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{v.km.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${v.combustible > 60 ? 'bg-emerald-500' : v.combustible > 30 ? 'bg-amber-500' : 'bg-error'}`}
                            style={{ width: `${v.combustible}%` }}
                          />
                        </div>
                        <span className="text-xs text-outline">{v.combustible}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[v.estado]}>{v.estado}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>

        {/* Mapa placeholder */}
        <GlassCard className="p-6">
          <h3 className="text-lg font-bold text-on-surface font-headline mb-4">Mapa de Flota en Tiempo Real</h3>
          <div className="h-64 bg-surface-container-highest/50 rounded-2xl flex items-center justify-center border border-white/5">
            <div className="text-center">
              <span className="material-symbols-outlined text-[48px] text-outline">map</span>
              <p className="text-outline text-sm mt-2">Integración con Google Maps / OpenStreetMap</p>
              <p className="text-[10px] text-outline/60 mt-1">Requiere API Key configurada en Configuración</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
