'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'

const roles = [
  { id: 'ADMIN', label: 'ADMIN', desc: 'Acceso Total', icon: 'grade', color: 'bg-primary/20 text-primary' },
  { id: 'ALMACENISTA', label: 'ALMACENISTA', desc: 'Stock & Despacho', icon: 'inventory_2', color: 'bg-tertiary/20 text-tertiary' },
  { id: 'AUDITOR', label: 'AUDITOR', desc: 'Solo Lectura', icon: 'visibility', color: 'bg-outline/20 text-outline' },
]

const motoresIA = [
  { nombre: 'Gemini 1.5 Pro', desc: 'API Endpoint: Active', icon: 'smart_toy', color: 'bg-gradient-to-tr from-blue-600 to-cyan-400', estado: 'active' },
  { nombre: 'Groq Llama 3', desc: 'Ultra-low Latency', icon: 'bolt', color: 'bg-black border border-white/10', estado: 'active' },
  { nombre: 'n8n Workflows', desc: '12 Automations', icon: 'account_tree', color: 'bg-orange-500/20 border border-orange-500/50 text-orange-400', estado: 'warning' },
]

const logs = [
  { hora: '14:22:05', usuario: 'ADMIN', msg: 'Cambio de tasa BCV detectado', meta: 'IP: 190.204.12.1 • Chrome/124.0', tipo: 'info' },
  { hora: '14:18:42', usuario: 'SYSTEM', msg: 'Sincronización exitosa con Groq API', meta: 'LATENCY: 42ms • MODEL: Llama-3-70b', tipo: 'info' },
  { hora: '14:15:10', usuario: 'ALMACENISTA', msg: 'Intento fallido de borrado de stock', meta: 'AUTH_ERROR: Insufficient Permissions', tipo: 'error' },
  { hora: '13:55:00', usuario: 'USER_ROOT', msg: 'Login exitoso desde dispositivo nuevo', meta: 'MFA_VERIFIED: SMS Token', tipo: 'info' },
]

const stats = [
  { label: 'Uptime Sistema', valor: '99.99%', sub: null, bar: 99 },
  { label: 'Peticiones IA (24h)', valor: '12,482', sub: '↑ 14% vs ayer', bar: null },
  { label: 'Usuarios Activos', valor: '458', sub: null, bar: null },
]

export default function ConfiguracionPage() {
  const [razonSocial, setRazonSocial] = useState('Corporación Tecnológica ERPX S.A.')
  const [rif, setRif] = useState('J-40592831-0')

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
            <Button>
              <span className="material-symbols-outlined text-[18px]">save</span>
              Guardar Cambios
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
                  value={razonSocial}
                  onChange={(e) => setRazonSocial(e.target.value)}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 text-on-surface font-medium focus:outline-none focus:border-tertiary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.6875rem] uppercase tracking-[0.1em] text-outline font-spartan">Registro RIF</label>
                <input
                  value={rif}
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
                      <p className="text-xs text-outline">Actualización automática cada 12 horas</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-spartan font-bold text-tertiary">
                      36.50 <span className="text-sm font-normal text-outline">VES/USD</span>
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
              {roles.map((rol) => (
                <div key={rol.id} className="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl hover:bg-surface-container transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-xl ${rol.color}`}>
                      <span className="material-symbols-outlined text-sm">{rol.icon}</span>
                    </div>
                    <span className="font-bold font-spartan tracking-wider text-on-surface">{rol.label}</span>
                  </div>
                  <span className="text-xs text-outline font-spartan">{rol.desc}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-white/5 rounded-xl border border-dashed border-white/20 text-primary font-bold hover:bg-primary/10 transition-all group">
              <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
              Nuevo Rol Personalizado
            </button>
          </GlassCard>

          {/* Auditoría en Tiempo Real */}
          <GlassCard className="md:col-span-7 p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">history_edu</span>
                <h3 className="text-xl font-spartan font-bold uppercase tracking-widest text-primary">Auditoría en Tiempo Real</h3>
              </div>
              <span className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-widest text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Streaming
              </span>
            </div>
            <div className="space-y-3 overflow-y-auto max-h-[280px] pr-1">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-all ${log.tipo === 'error' ? 'border-l-2 border-error/40 bg-error/5' : ''}`}
                >
                  <div className={`text-xs font-mono pt-1 ${log.tipo === 'error' ? 'text-error' : 'text-primary'}`}>{log.hora}</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-on-surface">
                      <span className={log.tipo === 'error' ? 'text-error' : 'text-primary'}>{log.usuario}:</span> {log.msg}
                    </p>
                    <p className="text-[0.65rem] text-outline uppercase tracking-wider mt-1">{log.meta}</p>
                  </div>
                  <span className={`material-symbols-outlined text-lg ${log.tipo === 'error' ? 'text-error' : 'text-outline'}`}>
                    {log.tipo === 'error' ? 'warning' : 'chevron_right'}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-6 relative overflow-hidden">
              <p className="text-[0.6rem] font-spartan uppercase tracking-widest text-outline mb-2">{s.label}</p>
              <div className="text-3xl font-spartan font-bold text-on-surface">{s.valor}</div>
              {s.sub && <p className="text-[0.65rem] text-tertiary mt-2">{s.sub}</p>}
              {s.bar !== null && (
                <div className="w-full bg-white/5 h-1 mt-4 rounded-full">
                  <div className="bg-primary h-full rounded-full" style={{ width: `${s.bar}%` }} />
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
