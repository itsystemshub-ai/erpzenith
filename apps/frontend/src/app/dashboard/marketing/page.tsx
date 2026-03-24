'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Metrica {
  label: string
  valor: string
  trend: string
  up: boolean
  color: string
  pct: number
}

interface Campana {
  nombre: string
  canal: string
  performance: string
  estado: 'RUNNING' | 'SCHEDULED' | 'DRAFT' | 'PAUSED'
  estadoColor: string
  icon: string
  iconBg: string
  iconColor: string
}

interface Segmento {
  nombre: string
  clientes: string
  pct: string
  color: string
}

interface FunnelItem {
  label: string
  h: string
  color: string
}

const { data: metricas = [], isLoading: metricasLoading } = useErpQuery<Metrica[]>(
  QK.marketing.metricas(),
  '/marketing/metricas',
  { refetchInterval: 60_000 }
)

const { data: campanas = [], isLoading: campanasLoading } = useErpQuery<Campana[]>(
  QK.marketing.campanas(),
  '/marketing/campanas',
  { refetchInterval: 60_000 }
)

const { data: segmentos = [], isLoading: segmentosLoading } = useErpQuery<Segmento[]>(
  QK.marketing.segmentos(),
  '/marketing/segmentos',
  { refetchInterval: 60_000 }
)

const { data: funnel = [], isLoading: funnelLoading } = useErpQuery<FunnelItem[]>(
  QK.marketing.funnel(),
  '/marketing/funnel',
  { refetchInterval: 60_000 }
)
export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Marketing Hub" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Marketing Hub</h2>
            <p className="text-on-surface-variant mt-1">Gestión de campañas, leads y análisis de conversión en tiempo real.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Campaña
          </Button>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricas.map((m) => (
            <GlassCard key={m.label} className="p-6 relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl" />
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] uppercase tracking-widest text-outline font-spartan">{m.label}</span>
                <span className={`text-xs font-medium flex items-center gap-0.5 ${m.up ? 'text-tertiary' : 'text-error'}`}>
                  {m.trend}
                  <span className="material-symbols-outlined text-xs">{m.up ? 'trending_up' : 'trending_down'}</span>
                </span>
              </div>
              <div className="font-headline text-4xl font-bold text-on-surface mb-2">{m.valor}</div>
              <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                <div className={`${m.color} h-full`} style={{ width: `${m.pct}%` }} />
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Funnel + Campañas */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <GlassCard className="p-8">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-on-surface">Lead Acquisition Funnel</h3>
                  <p className="text-sm text-outline">AI-tracked transition from visitor to MQL/SQL</p>
                </div>
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] text-primary border border-primary/20">LIVE DATA</span>
              </div>
              <div className="relative h-64 flex items-end gap-2">
                {funnel.map((f, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end group">
                    <div className={`${f.color} transition-all rounded-t-xl w-full relative`} style={{ height: f.h }}>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary whitespace-nowrap">{f.label}</span>
                    </div>
                    <div className="text-[10px] mt-4 text-center text-outline">Semana {i + 1}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline text-xl font-semibold text-on-surface">Campañas Activas</h3>
                <button className="text-sm text-primary hover:underline">Ver Todo</button>
              </div>
              <div className="space-y-4">
                {campanas.map((c) => (
                  <div key={c.nombre} className="flex items-center justify-between p-4 bg-surface-container-low/50 rounded-2xl hover:bg-surface-container-low transition-all">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${c.iconBg}`}>
                        <span className={`material-symbols-outlined ${c.iconColor}`}>{c.icon}</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm text-on-surface">{c.nombre}</div>
                        <div className="text-xs text-outline">{c.canal}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden md:block">
                        <div className="text-xs text-outline mb-1">Performance</div>
                        <div className="text-sm font-semibold text-tertiary">{c.performance}</div>
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${c.estadoColor}`}>{c.estado}</span>
                      <button className="p-2 text-outline hover:text-on-surface">
                        <span className="material-symbols-outlined">more_vert</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* AI Widget + Segmentos */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-tertiary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <GlassCard className="relative p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  </div>
                  <h3 className="font-headline font-semibold text-on-surface">Marketing Strategy Insights</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-xs text-primary font-bold mb-1">SEGMENT OPTIMIZATION</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Tu segmento "Platinum" muestra 40% mayor churn en EMEA. Se sugiere redirigir presupuesto a campañas de prueba social regional.
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-xs text-tertiary font-bold mb-1">CAMPAIGN TIMING</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Pico de engagement para Email Hub: <span className="text-on-surface font-semibold">Martes 10:15 AM</span>. ¿Ajustar scheduler?
                    </p>
                    <button className="mt-3 text-[10px] bg-tertiary text-on-tertiary font-bold px-3 py-1 rounded-full uppercase">
                      Aplicar Sugerencia
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>

            <GlassCard className="p-6">
              <h3 className="font-headline font-semibold mb-6 text-on-surface">Segmentos de Audiencia</h3>
              <div className="space-y-5">
                {segmentos.map((s) => (
                  <div key={s.nombre} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-8 ${s.color} rounded-full`} />
                      <div>
                        <div className="text-sm font-medium text-on-surface">{s.nombre}</div>
                        <div className="text-[10px] text-outline">{s.clientes} Clientes</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-on-surface">{s.pct}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-surface-container-highest/30 rounded-2xl border border-outline-variant/10">
                <div className="text-[10px] text-outline uppercase tracking-widest mb-2 text-center">AI Lead Score Distribution</div>
                <div className="flex items-center gap-1 h-3">
                  <div className="bg-primary h-full w-[15%] rounded-l-full" />
                  <div className="bg-primary/60 h-full w-[25%]" />
                  <div className="bg-primary/30 h-full w-[40%]" />
                  <div className="bg-surface-container-highest h-full w-[20%] rounded-r-full" />
                </div>
                <div className="flex justify-between text-[8px] text-outline mt-2">
                  <span>High Intent</span><span>Low Intent</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 relative overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
              <h3 className="font-headline font-semibold mb-4 text-on-surface">Último Experimento A/B</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-outline uppercase mb-1">Variant A</div>
                  <div className="text-lg font-bold text-on-surface">3.2%</div>
                </div>
                <div className="text-primary font-bold">VS</div>
                <div className="flex-1 text-center">
                  <div className="text-[10px] text-tertiary uppercase mb-1">Variant B</div>
                  <div className="text-lg font-bold text-tertiary">4.8%</div>
                </div>
              </div>
              <p className="text-[11px] text-on-surface-variant text-center border-t border-white/5 pt-4">
                <span className="text-tertiary font-bold">Variant B</span> ganando con 98.4% de significancia estadística.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
