'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const planes = [
  {
    name: 'Starter', price: 49, users: 5, modules: ['Ventas', 'Inventario', 'Contabilidad básica'],
    color: 'border-white/20', badge: '',
  },
  {
    name: 'Business', price: 149, users: 25, modules: ['Todo Starter', 'RRHH', 'Compras', 'Reportes avanzados', 'API Access'],
    color: 'border-primary/40 bg-primary/5', badge: 'Popular',
  },
  {
    name: 'Enterprise', price: 399, users: -1, modules: ['Todo Business', 'Multi-empresa', 'IA avanzada', 'SLA 99.9%', 'Soporte dedicado'],
    color: 'border-secondary/40 bg-secondary/5', badge: 'Actual',
  },
]

const facturas = [
  { fecha: '2024-12-01', monto: 399, estado: 'Pagado', periodo: 'Dic 2024' },
  { fecha: '2024-11-01', monto: 399, estado: 'Pagado', periodo: 'Nov 2024' },
  { fecha: '2024-10-01', monto: 399, estado: 'Pagado', periodo: 'Oct 2024' },
  { fecha: '2024-09-01', monto: 399, estado: 'Pagado', periodo: 'Sep 2024' },
]

export default function SuscripcionPage() {
  const [tab, setTab] = useState<'plan' | 'facturacion' | 'uso'>('plan')

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Mi Suscripción</h2>
          <p className="text-on-surface-variant mt-1">Gestiona tu plan, facturación y uso de recursos</p>
        </div>

        {/* Current plan banner */}
        <div className="glass-panel rounded-2xl p-6 border border-secondary/30 bg-secondary/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-2xl">workspace_premium</span>
            </div>
            <div>
              <p className="text-xs text-outline font-bold uppercase tracking-wide">Plan Actual</p>
              <p className="text-2xl font-headline font-bold text-on-surface">Enterprise</p>
              <p className="text-sm text-on-surface-variant">Próxima facturación: 1 Enero 2025 · $399/mes</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="glass-panel hover:bg-white/10 text-on-surface-variant font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">Cancelar plan</button>
            <button className="bg-primary text-on-primary font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors">Gestionar</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['plan', 'facturacion', 'uso'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'plan' ? 'Planes' : t === 'facturacion' ? 'Facturación' : 'Uso de Recursos'}
            </button>
          ))}
        </div>

        {tab === 'plan' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planes.map(plan => (
              <div key={plan.name} className={`glass-panel rounded-2xl p-6 border relative ${plan.color}`}>
                {plan.badge && (
                  <span className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full ${plan.badge === 'Actual' ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-headline font-bold text-on-surface">{plan.name}</h3>
                <div className="mt-3 mb-5">
                  <span className="text-4xl font-headline font-bold text-on-surface">${plan.price}</span>
                  <span className="text-on-surface-variant text-sm">/mes</span>
                </div>
                <p className="text-xs text-outline mb-3">{plan.users === -1 ? 'Usuarios ilimitados' : `Hasta ${plan.users} usuarios`}</p>
                <ul className="space-y-2 mb-6">
                  {plan.modules.map(m => (
                    <li key={m} className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span className="material-symbols-outlined text-tertiary text-[16px]">check</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2.5 rounded-xl font-bold text-sm transition-colors ${plan.badge === 'Actual' ? 'bg-white/10 text-outline cursor-default' : 'bg-primary text-on-primary hover:bg-primary/90'}`}>
                  {plan.badge === 'Actual' ? 'Plan Actual' : 'Cambiar a este plan'}
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === 'facturacion' && (
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">•••• •••• •••• 4242</p>
                  <p className="text-xs text-outline">Vence 12/2026</p>
                </div>
              </div>
              <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">Cambiar tarjeta</button>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="font-headline font-bold text-on-surface">Historial de Facturas</h3>
              </div>
              <div className="divide-y divide-white/5">
                {facturas.map((f, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors">
                    <div>
                      <p className="font-bold text-on-surface">Plan Enterprise — {f.periodo}</p>
                      <p className="text-xs text-outline">{f.fecha}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-on-surface">${f.monto}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-tertiary/20 text-tertiary font-bold">{f.estado}</span>
                      <button className="text-xs text-primary hover:text-primary/80 font-bold transition-colors">PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'uso' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Usuarios Activos', used: 18, total: -1, unit: 'usuarios', color: 'bg-primary' },
              { label: 'Almacenamiento', used: 12.4, total: 100, unit: 'GB', color: 'bg-secondary' },
              { label: 'Llamadas API (mes)', used: 48200, total: -1, unit: 'requests', color: 'bg-tertiary' },
              { label: 'Documentos Generados', used: 1247, total: -1, unit: 'docs', color: 'bg-orange-500' },
            ].map(r => (
              <div key={r.label} className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between mb-3">
                  <p className="font-bold text-on-surface">{r.label}</p>
                  <p className="text-on-surface-variant text-sm">
                    <span className="font-bold text-on-surface">{typeof r.used === 'number' && r.used > 1000 ? r.used.toLocaleString() : r.used}</span>
                    {r.total !== -1 ? ` / ${r.total}` : ''} {r.unit}
                  </p>
                </div>
                {r.total !== -1 ? (
                  <>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className={`h-full ${r.color} rounded-full`} style={{ width: `${(Number(r.used) / r.total) * 100}%` }} />
                    </div>
                    <p className="text-xs text-outline mt-2">{((Number(r.used) / r.total) * 100).toFixed(1)}% utilizado</p>
                  </>
                ) : (
                  <p className="text-xs text-tertiary font-bold">Ilimitado en plan Enterprise</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
