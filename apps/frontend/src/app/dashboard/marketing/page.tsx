'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const campanas = [
  { nombre: 'Lanzamiento Q4 2024', canal: 'Email + Social', presupuesto: '$2,400', alcance: '12,400', estado: 'Activa' },
  { nombre: 'Black Friday Venezuela', canal: 'Instagram + TikTok', presupuesto: '$1,800', alcance: '8,200', estado: 'Planificada' },
  { nombre: 'Campaña Fidelización', canal: 'WhatsApp + Email', presupuesto: '$600', alcance: '3,100', estado: 'Completada' },
  { nombre: 'Reactivación Clientes', canal: 'Email', presupuesto: '$400', alcance: '1,850', estado: 'Pausada' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Activa: 'success', Planificada: 'warning', Completada: 'success', Pausada: 'error',
}

const conversionData = [
  { mes: 'Jul', leads: 320, conversiones: 48 },
  { mes: 'Ago', leads: 410, conversiones: 72 },
  { mes: 'Sep', leads: 380, conversiones: 65 },
  { mes: 'Oct', leads: 520, conversiones: 98 },
]

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Marketing" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Marketing & Campañas</h2>
            <p className="text-on-surface-variant mt-1">Gestión de campañas, leads y análisis de conversión.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Campaña
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Leads del Mes', valor: '520', icon: 'person_add', color: 'bg-primary/10 text-primary', trend: '+28% vs mes ant.' },
            { label: 'Tasa Conversión', valor: '18.8%', icon: 'trending_up', color: 'bg-emerald-500/10 text-emerald-400', trend: '↑ 2.1%' },
            { label: 'Campañas Activas', valor: '4', icon: 'campaign', color: 'bg-tertiary/10 text-tertiary', trend: '2 en planificación' },
            { label: 'ROI Campañas', valor: '3.4x', icon: 'monetization_on', color: 'bg-amber-500/10 text-amber-400', trend: 'Objetivo: 3.0x' },
          ].map((kpi) => (
            <GlassCard key={kpi.label} className="p-6">
              <div className={`p-2 rounded-xl w-fit mb-4 ${kpi.color}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan">{kpi.label}</p>
              <p className="text-3xl font-headline font-bold text-on-surface mt-1">{kpi.valor}</p>
              <p className="text-xs text-on-surface-variant mt-2">{kpi.trend}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gráfico Conversión */}
          <GlassCard className="lg:col-span-2 p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-on-surface font-headline">Leads vs Conversiones</h3>
              <p className="text-sm text-outline">Últimos 4 meses</p>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={conversionData}>
                <defs>
                  <linearGradient id="leadsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#c0c1ff" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c0c1ff" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4cd7f6" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#4cd7f6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" stroke="#2d3449" />
                <XAxis dataKey="mes" tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#908fa0', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#171f33', border: '1px solid #464554', borderRadius: '12px', color: '#dae2fd' }} />
                <Area type="monotone" dataKey="leads" stroke="#c0c1ff" strokeWidth={2} fill="url(#leadsGrad)" name="Leads" />
                <Area type="monotone" dataKey="conversiones" stroke="#4cd7f6" strokeWidth={2} fill="url(#convGrad)" name="Conversiones" />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>

          {/* Canales */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-on-surface font-headline mb-6">Canales Activos</h3>
            <div className="space-y-4">
              {[
                { canal: 'Email Marketing', leads: 210, pct: 40, color: 'bg-primary' },
                { canal: 'Instagram', leads: 156, pct: 30, color: 'bg-tertiary' },
                { canal: 'WhatsApp', leads: 98, pct: 19, color: 'bg-emerald-500' },
                { canal: 'TikTok', leads: 56, pct: 11, color: 'bg-amber-500' },
              ].map((c) => (
                <div key={c.canal}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-on-surface-variant">{c.canal}</span>
                    <span className="text-on-surface font-medium">{c.leads} leads</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Tabla Campañas */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Campañas</h3>
            <button className="text-sm text-primary font-medium hover:underline">Ver Todo</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-[10px] uppercase font-spartan font-bold text-outline">
                <tr>
                  {['Campaña', 'Canal', 'Presupuesto', 'Alcance', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {campanas.map((c) => (
                  <tr key={c.nombre} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface">{c.nombre}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{c.canal}</td>
                    <td className="px-6 py-4 text-on-surface">{c.presupuesto}</td>
                    <td className="px-6 py-4 text-on-surface-variant">{c.alcance}</td>
                    <td className="px-6 py-4">
                      <Badge variant={estadoVariant[c.estado]}>{c.estado}</Badge>
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
