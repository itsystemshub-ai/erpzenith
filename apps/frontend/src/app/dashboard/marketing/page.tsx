'use client'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Metrica { label: string; valor: string; trend: string; up: boolean; color: string; pct: number }
interface Campana { nombre: string; canal: string; performance: string; estado: string; estadoColor: string; icon: string; iconBg: string; iconColor: string }
interface Segmento { nombre: string; clientes: string; pct: string; color: string }
interface FunnelItem { label: string; h: string; color: string }

export default function MarketingPage() {
  const { data: metricas = [] } = useErpQuery<Metrica[]>(QK.marketing.metricas(), '/marketing/metricas', { refetchInterval: 60_000 })
  const { data: campanas = [] } = useErpQuery<Campana[]>(QK.marketing.campanas(), '/marketing/campanas', { refetchInterval: 60_000 })
  const { data: segmentos = [] } = useErpQuery<Segmento[]>(QK.marketing.segmentos(), '/marketing/segmentos', { refetchInterval: 60_000 })
  const { data: funnel = [] } = useErpQuery<FunnelItem[]>(QK.marketing.funnel(), '/marketing/funnel', { refetchInterval: 60_000 })

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Marketing Hub" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Marketing Hub</h2>
            <p className="text-on-surface-variant mt-1">Gestion de campanas, leads y analisis de conversion en tiempo real.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>Nueva Campana
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricas.map((m) => (
            <div key={m.label} className="glass-panel rounded-2xl p-6 relative overflow-hidden">
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
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="font-headline text-xl font-semibold text-on-surface mb-6">Lead Acquisition Funnel</h3>
              <div className="relative h-64 flex items-end gap-2">
                {funnel.map((f, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div className={`${f.color} transition-all rounded-t-xl w-full relative`} style={{ height: f.h }}>
                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary whitespace-nowrap">{f.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-8">
              <h3 className="font-headline text-xl font-semibold text-on-surface mb-6">Campanas Activas</h3>
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
                      <span className={`px-3 py-1 text-[10px] font-bold rounded-full ${c.estadoColor}`}>{c.estado}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-2xl p-6">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
