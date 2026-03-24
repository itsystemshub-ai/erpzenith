'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Campana {
  nombre: string
  canal: string
  audiencia: number
  enviados: number
  abiertos: number
  conversiones: number
  estado: 'Activa' | 'Completada' | 'Pausada' | 'Borrador'
  icon: string
  color: string
}
const campanas = [
  {
    nombre: 'Promo Navidad 2025',
    canal: 'WhatsApp',
    audiencia: 4820,
    enviados: 4820,
    abiertos: 2312,
    conversiones: 384,
    estado: 'Activa',
    icon: 'chat',
    color: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    nombre: 'Newsletter Noviembre',
    canal: 'Email',
    audiencia: 12400,
    enviados: 12400,
    abiertos: 5308,
    conversiones: 1502,
    estado: 'Activa',
    icon: 'mail',
    color: 'bg-primary/10 text-primary',
  },
  {
    nombre: 'Oferta Black Friday',
    canal: 'SMS',
    audiencia: 8900,
    enviados: 8900,
    abiertos: 3204,
    conversiones: 890,
    estado: 'Completada',
    icon: 'sms',
    color: 'bg-tertiary/10 text-tertiary',
  },
  {
    nombre: 'Reactivación Clientes',
    canal: 'Email',
    audiencia: 3200,
    enviados: 3200,
    abiertos: 1024,
    conversiones: 256,
    estado: 'Activa',
    icon: 'mail',
    color: 'bg-primary/10 text-primary',
  },
  {
    nombre: 'Lanzamiento Producto X',
    canal: 'WhatsApp',
    audiencia: 6100,
    enviados: 0,
    abiertos: 0,
    conversiones: 0,
    estado: 'Borrador',
    icon: 'chat',
    color: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    nombre: 'Encuesta Satisfacción',
    canal: 'SMS',
    audiencia: 2400,
    enviados: 2400,
    abiertos: 960,
    conversiones: 192,
    estado: 'Pausada',
    icon: 'sms',
    color: 'bg-tertiary/10 text-tertiary',
  },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Activa: 'success',
  Completada: 'success',
  Pausada: 'warning',
  Borrador: 'warning',
}

export default function CampanasPage() {
  const activas = campanas.filter((c) => c.estado === 'Activa').length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Campañas de Marketing" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Campañas</h2>
            <p className="text-on-surface-variant mt-1">Gestión de campañas multicanal.</p>
          </div>
          <Button size="sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nueva Campaña
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Campañas Activas</p>
              <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">campaign</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">{activas}</p>
            <p className="text-xs text-outline mt-1">en ejecución ahora</p>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Open Rate</p>
              <div className="p-2 bg-primary/10 text-primary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">42.8%</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '42.8%' }} />
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">CTR</p>
              <div className="p-2 bg-tertiary/10 text-tertiary rounded-xl">
                <span className="material-symbols-outlined text-[20px]">ads_click</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">12.1%</p>
            <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-2">
              <div className="bg-tertiary h-1.5 rounded-full" style={{ width: '12.1%' }} />
            </div>
          </GlassCard>

          <GlassCard className="p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">ROAS</p>
              <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
              </div>
            </div>
            <p className="text-3xl font-headline font-bold text-on-surface">4.2x</p>
            <p className="text-xs text-emerald-400 mt-1">↑ +0.3x vs mes anterior</p>
          </GlassCard>
        </div>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">Todas las Campañas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Campaña', 'Canal', 'Audiencia', 'Enviados', 'Abiertos', 'Conversiones', 'Conv. Rate', 'Estado'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {campanas.map((c) => {
                  const convRate = c.enviados > 0 ? ((c.conversiones / c.enviados) * 100).toFixed(1) : '0.0'
                  return (
                    <tr key={c.nombre} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-on-surface">{c.nombre}</td>
                      <td className="px-6 py-4">
                        <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${c.color}`}>
                          <span className="material-symbols-outlined text-[14px]">{c.icon}</span>
                          {c.canal}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">{c.audiencia.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-on-surface-variant">{c.enviados.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-on-surface">{c.abiertos.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-bold text-primary">{c.conversiones.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm text-tertiary font-bold">{convRate}%</td>
                      <td className="px-6 py-4">
                        <Badge variant={estadoVariant[c.estado]}>{c.estado}</Badge>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
