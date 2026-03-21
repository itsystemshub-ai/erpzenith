'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const tenants = [
  { id: 'T001', name: 'Empresa Zenith S.A.', plan: 'Enterprise', users: 18, status: 'activo', mrr: 399, since: '2024-01-15' },
  { id: 'T002', name: 'Distribuidora Norte C.A.', plan: 'Business', users: 12, status: 'activo', mrr: 149, since: '2024-03-20' },
  { id: 'T003', name: 'Comercial Sur S.R.L.', plan: 'Starter', users: 4, status: 'activo', mrr: 49, since: '2024-06-10' },
  { id: 'T004', name: 'Tech Solutions VE', plan: 'Business', users: 8, status: 'suspendido', mrr: 0, since: '2024-02-28' },
  { id: 'T005', name: 'Grupo Industrial ABC', plan: 'Enterprise', users: 35, status: 'activo', mrr: 399, since: '2023-11-05' },
]

const planBadge: Record<string, string> = {
  Enterprise: 'bg-secondary/20 text-secondary',
  Business: 'bg-primary/20 text-primary',
  Starter: 'bg-white/10 text-on-surface-variant',
}

const statusBadge: Record<string, string> = {
  activo: 'bg-tertiary/20 text-tertiary',
  suspendido: 'bg-error/20 text-error',
  trial: 'bg-yellow-500/20 text-yellow-400',
}

export default function SuperAdminPage() {
  const [tab, setTab] = useState<'tenants' | 'metricas' | 'sistema'>('tenants')
  const [search, setSearch] = useState('')

  const totalMRR = tenants.filter(t => t.status === 'activo').reduce((s, t) => s + t.mrr, 0)
  const totalUsers = tenants.reduce((s, t) => s + t.users, 0)
  const filtered = tenants.filter(t => t.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Panel Super-Admin</h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-error/20 text-error">ADMIN</span>
            </div>
            <p className="text-on-surface-variant mt-1">Control total del sistema SaaS multi-tenant</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'MRR Total', value: `$${totalMRR.toLocaleString()}`, icon: 'payments', color: 'text-tertiary' },
            { label: 'Tenants Activos', value: String(tenants.filter(t => t.status === 'activo').length), icon: 'business', color: 'text-primary' },
            { label: 'Usuarios Totales', value: String(totalUsers), icon: 'group', color: 'text-secondary' },
            { label: 'Uptime', value: '99.97%', icon: 'monitoring', color: 'text-tertiary' },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
              <span className={`material-symbols-outlined text-3xl ${k.color}`}>{k.icon}</span>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
                <p className="text-xs text-outline">{k.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['tenants', 'metricas', 'sistema'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'tenants' ? 'Tenants' : t === 'metricas' ? 'Métricas' : 'Sistema'}
            </button>
          ))}
        </div>

        {tab === 'tenants' && (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input value={search} onChange={e => setSearch(e.target.value)}
                  placeholder="Buscar tenant..."
                  className="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none" />
              </div>
              <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Nuevo Tenant
              </button>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    {['ID', 'Empresa', 'Plan', 'Usuarios', 'MRR', 'Desde', 'Estado', ''].map(h => (
                      <th key={h} className="text-left px-6 py-4 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filtered.map(t => (
                    <tr key={t.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-mono text-xs text-outline">{t.id}</td>
                      <td className="px-6 py-4 font-bold text-on-surface">{t.name}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${planBadge[t.plan]}`}>{t.plan}</span>
                      </td>
                      <td className="px-6 py-4 text-on-surface-variant">{t.users}</td>
                      <td className="px-6 py-4 font-bold text-on-surface font-mono">${t.mrr}</td>
                      <td className="px-6 py-4 text-on-surface-variant text-xs">{t.since}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusBadge[t.status]}`}>{t.status}</span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-xs text-primary hover:text-primary/80 font-bold transition-colors">Gestionar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {tab === 'metricas' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Crecimiento MRR', value: '+12.4%', sub: 'vs mes anterior', icon: 'trending_up', color: 'text-tertiary' },
              { label: 'Churn Rate', value: '2.1%', sub: 'últimos 30 días', icon: 'trending_down', color: 'text-error' },
              { label: 'NPS Score', value: '72', sub: 'Excelente', icon: 'sentiment_very_satisfied', color: 'text-primary' },
              { label: 'Tickets Soporte', value: '8', sub: 'abiertos hoy', icon: 'support_agent', color: 'text-orange-400' },
            ].map(m => (
              <div key={m.label} className="glass-panel rounded-2xl p-6 flex items-center gap-5">
                <span className={`material-symbols-outlined text-4xl ${m.color}`}>{m.icon}</span>
                <div>
                  <p className="text-3xl font-headline font-bold text-on-surface">{m.value}</p>
                  <p className="font-bold text-on-surface-variant">{m.label}</p>
                  <p className="text-xs text-outline">{m.sub}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'sistema' && (
          <div className="space-y-4">
            {[
              { label: 'CPU', value: 34, unit: '%', color: 'bg-tertiary' },
              { label: 'Memoria RAM', value: 62, unit: '%', color: 'bg-primary' },
              { label: 'Disco', value: 48, unit: '%', color: 'bg-secondary' },
              { label: 'Ancho de Banda', value: 23, unit: '%', color: 'bg-orange-500' },
            ].map(r => (
              <div key={r.label} className="glass-panel rounded-2xl p-5">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-on-surface">{r.label}</span>
                  <span className="font-bold text-on-surface">{r.value}{r.unit}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className={`h-full ${r.color} rounded-full transition-all`} style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
