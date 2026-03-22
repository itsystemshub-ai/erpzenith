'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useErpQuery, useErpMutation } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface ConfigItem { clave: string; valor: string; descripcion?: string }
interface TasaBCV { tasa: number; fecha: string }
interface Permission { id: string; module: string; action: string }
interface Role { id: string; name: string; permissions: Permission[]; _count?: { users: number } }

const motoresIA = [
  { nombre: 'Gemini 1.5 Pro', desc: 'API Endpoint: Active', icon: 'smart_toy', color: 'bg-gradient-to-tr from-blue-600 to-cyan-400', estado: 'active' },
  { nombre: 'Groq Llama 3', desc: 'Ultra-low Latency', icon: 'bolt', color: 'bg-black border border-white/10', estado: 'active' },
  { nombre: 'n8n Workflows', desc: '12 Automations', icon: 'account_tree', color: 'bg-orange-500/20 border border-orange-500/50 text-orange-400', estado: 'warning' },
]

export default function ConfiguracionPage() {
  const { data: configs = [] } = useErpQuery<ConfigItem[]>(QK.configuracion.all(), '/configuracion')
  const { data: bcvData } = useErpQuery<TasaBCV>(QK.configuracion.bcvTasa(), '/configuracion/bcv/tasa')
  const { data: roles = [] } = useErpQuery<Role[]>(QK.configuracion.roles(), '/configuracion/sistema/roles')

  const getConfig = (clave: string) => configs.find(c => c.clave === clave)?.valor ?? ''

  const [razonSocial, setRazonSocial] = useState<string | null>(null)
  const [rif, setRif] = useState<string | null>(null)

  const razonSocialVal = razonSocial ?? getConfig('empresa_nombre')
  const rifVal = rif ?? getConfig('empresa_rif')

  const saveConfig = useErpMutation({
    endpoint: '/configuracion',
    method: 'post',
    invalidateKeys: [QK.configuracion.all()],
    successMessage: 'Configuración guardada',
  })

  const handleSave = () => {
    if (razonSocial) saveConfig.mutate({ clave: 'empresa_nombre', valor: razonSocial } as any)
    if (rif) saveConfig.mutate({ clave: 'empresa_rif', valor: rif } as any)
  }

  const roleIcons: Record<string, { icon: string; color: string }> = {
    SUPERDEV: { icon: 'grade', color: 'bg-primary/20 text-primary' },
    ADMIN: { icon: 'manage_accounts', color: 'bg-primary/20 text-primary' },
    VENDEDOR: { icon: 'point_of_sale', color: 'bg-tertiary/20 text-tertiary' },
    ALMACÉN: { icon: 'inventory_2', color: 'bg-secondary/20 text-secondary' },
    AUDITOR: { icon: 'visibility', color: 'bg-outline/20 text-outline' },
  }

  const getRoleStyle = (name: string) => roleIcons[name] ?? { icon: 'shield_person', color: 'bg-outline/20 text-outline' }

  const tasaDisplay = bcvData?.tasa ? Number(bcvData.tasa).toFixed(2) : '—'
  const fechaBCV = bcvData?.fecha ? new Date(bcvData.fecha).toLocaleDateString('es-VE') : '—'

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración Avanzada" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-5xl font-spartan font-bold text-on-surface tracking-tight" style={{ textShadow: '0 0 15px rgba(192,193,255,0.3)' }}>
              Configuración Avanzada
            </h2>
            <p className="text-outline mt-2 max-w-2xl">
              Gestión técnica centralizada de identidad corporativa, protocolos de seguridad y motores de inteligencia artificial.
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-error text-[18px]">restart_alt</span>
              Reset Sistema
            </Button>
            <Button onClick={handleSave} disabled={saveConfig.isPending}>
              <span className="material-symbols-outlined text-[18px]">save</span>
              {saveConfig.isPending ? 'Guardando...' : 'Guardar Cambios'}
            </Button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Datos de Empresa */}
          <GlassCard className="md:col-span-8 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors" />
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-tertiary">domain</span>
              <h3 className="text-xl font-spartan font-bold uppercase tracking-widest text-primary">Datos de Empresa</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[0.6875rem] uppercase tracking-[0.1em] text-outline font-spartan">Razón Social</label>
                <input
                  value={razonSocialVal}
                  onChange={(e) => setRazonSocial(e.target.value)}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 text-on-surface font-medium focus:outline-none focus:border-tertiary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] uppercase tracking-[0.1em] text-outline font-spartan">Registro RIF</label>
                <input
                  value={rifVal}
                  onChange={(e) => setRif(e.target.value)}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 text-on-surface font-medium focus:outline-none focus:border-tertiary transition-all"
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <div className="bg-surface-container p-6 rounded-2xl flex items-center justify-between border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-tertiary/10 rounded-xl">
                      <span className="material-symbols-outlined text-tertiary">currency_exchange</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">Tasa Cambiaria BCV</h4>
                      <p className="text-xs text-outline">Última actualización: {fechaBCV}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-spartan font-bold text-tertiary">
                      {tasaDisplay} <span className="text-sm font-normal text-outline">VES/USD</span>
                    </div>
                    <span className="text-[0.6rem] bg-tertiary/20 text-tertiary px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">
                      Sincronizado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Motores IA */}
          <GlassCard className="md:col-span-4 p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
              <h3 className="text-xl font-spartan font-bold uppercase tracking-widest text-primary">Motores IA</h3>
            </div>
            <div className="space-y-6 flex-1">
              {motoresIA.map((motor) => (
                <div key={motor.nombre} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${motor.color}`}>
                      <span className="material-symbols-outlined text-white text-sm">{motor.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface leading-none">{motor.nombre}</p>
                      <p className="text-xs text-outline">{motor.desc}</p>
                    </div>
                  </div>
                  <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${motor.estado === 'active' ? 'bg-emerald-500 shadow-emerald-500/80' : 'bg-amber-500 shadow-amber-500/80'}`} />
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-3 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest text-outline hover:bg-white/5 transition-all">
              Ver Todas las Llaves API
            </button>
          </GlassCard>

          {/* Gestión de Roles */}
          <GlassCard className="md:col-span-5 p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">shield_person</span>
              <h3 className="text-xl font-spartan font-bold uppercase tracking-widest text-primary">Gestión de Roles</h3>
            </div>
            <div className="space-y-3">
              {roles.map((rol) => {
                const style = getRoleStyle(rol.name)
                return (
                  <div key={rol.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${style.color}`}>
                        <span className="material-symbols-outlined text-sm">{style.icon}</span>
                      </div>
                      <span className="font-bold font-spartan tracking-wider text-on-surface">{rol.name}</span>
                    </div>
                    <span className="text-xs text-outline font-spartan">{rol.permissions.length} permisos</span>
                  </div>
                )
              })}
            </div>
            <button className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-white/5 rounded-xl border border-dashed border-white/20 text-primary font-bold hover:bg-primary/10 transition-all group">
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
              Nuevo Rol Personalizado
            </button>
            <a
              href="/dashboard/configuracion/reset-requests"
              className="mt-4 flex items-center justify-between w-full px-4 py-3 bg-error/5 border border-error/20 rounded-xl hover:bg-error/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-error text-sm">lock_reset</span>
                <span className="text-xs font-spartan uppercase tracking-widest text-error">Solicitudes de Contraseña</span>
              </div>
              <span className="material-symbols-outlined text-error/50 text-sm group-hover:text-error transition-colors">arrow_forward</span>
            </a>
          </GlassCard>

          {/* Auditoría en Tiempo Real */}
          <GlassCard className="md:col-span-7 p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history_edu</span>
                <h3 className="text-xl font-spartan font-bold uppercase tracking-widest text-primary">Auditoría en Tiempo Real</h3>
              </div>
              <a href="/dashboard/configuracion/auditoria"
                className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Ver Historial Completo
              </a>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 gap-3 text-center py-8">
              <span className="material-symbols-outlined text-4xl text-outline/40">history_edu</span>
              <p className="text-sm text-outline">Los logs de auditoría se registran en tiempo real.</p>
              <a href="/dashboard/configuracion/auditoria"
                className="mt-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary/20 transition-all">
                Abrir Historial
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { label: 'Roles Configurados', valor: String(roles.length), bar: null, sub: null },
            { label: 'Parámetros del Sistema', valor: String(configs.length), sub: null, bar: null },
            { label: 'Tasa BCV Actual', valor: tasaDisplay ? `${tasaDisplay} Bs` : '—', sub: `Actualizado: ${fechaBCV}`, bar: null },
          ].map((s) => (
            <GlassCard key={s.label} className="p-6 relative overflow-hidden">
              <p className="text-[0.6rem] font-spartan uppercase tracking-widest text-outline mb-2">{s.label}</p>
              <div className="text-3xl font-spartan font-bold text-on-surface">{s.valor}</div>
              {s.sub && <p className="text-[0.65rem] text-tertiary mt-2">{s.sub}</p>}
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
