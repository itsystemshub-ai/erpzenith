'use client'
import Link from 'next/link'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

export const runtime = 'edge'

interface ContabilidadModule {
  href: string
  label: string
  icon: string
  desc: string
  color: string
}

interface ContabilidadStat {
  label: string
  value: string
  change: string
  up: boolean
}

const { data: modulos = [], isLoading: modulosLoading } = useErpQuery<ContabilidadModule[]>(
  QK.contabilidad.all(),
  '/contabilidad',
  { refetchInterval: 60_000 }
)

const { data: stats = [], isLoading: statsLoading } = useErpQuery<ContabilidadStat[]>(
  QK.contabilidad.stats(),
  '/contabilidad/stats',
  { refetchInterval: 60_000 }
)

export default function ContabilidadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Contabilidad</h2>
          <p className="text-on-surface-variant mt-1">Gestión financiera completa — balances, P&L, fiscal y conciliación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulos.map(m => (
            <Link key={m.href} href={m.href}
              className="glass-panel rounded-2xl p-6 hover:bg-white/5 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <span className={`material-symbols-outlined text-2xl ${m.color}`}>{m.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-headline font-bold text-on-surface">{m.label}</h3>
                  <p className="text-sm text-on-surface-variant mt-1">{m.desc}</p>
                </div>
                <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Ingresos del Mes', value: '$5,565,000', change: '+12.4%', up: true },
            { label: 'Utilidad Neta', value: '$1,024,200', change: '+8.2%', up: true },
            { label: 'Impuestos Pendientes', value: '$1,149,000', change: '4 declaraciones', up: false },
            { label: 'Partidas sin Conciliar', value: '3', change: '$152,500 diferencia', up: false },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <p className="text-xs text-outline uppercase tracking-widest font-bold mb-2">{k.label}</p>
              <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
              <p className={`text-xs mt-1 font-bold ${k.up ? 'text-tertiary' : 'text-yellow-400'}`}>{k.change}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
