'use client'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Modulo { id: string; label: string; icon: string; color: string }
interface Conexion { from: string; to: string }
interface StackItem { capa: string; tecnologias: string[]; color: string }

export default function ArquitecturaPage() {
  const { data: modulos = [] } = useErpQuery<Modulo[]>(QK.configuracion.arquitectura.modulos(), '/configuracion/arquitectura/modulos', { refetchInterval: 60_000 })
  const { data: conexiones = [] } = useErpQuery<Conexion[]>(QK.configuracion.arquitectura.conexiones(), '/configuracion/arquitectura/conexiones', { refetchInterval: 60_000 })
  const { data: stack = [] } = useErpQuery<StackItem[]>(QK.configuracion.arquitectura.stack(), '/configuracion/arquitectura/stack', { refetchInterval: 60_000 })

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">
        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Arquitectura del ERP</h2>
          <p className="text-on-surface-variant mt-1">Diagrama de flujo, módulos y stack tecnológico</p>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="font-headline font-bold text-on-surface mb-6">Mapa de Módulos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
            {modulos.map(m => (
              <div key={m.id} className={`glass-panel rounded-2xl p-4 border text-center ${m.color} cursor-pointer hover:scale-105 transition-transform`}>
                <span className="material-symbols-outlined text-2xl">{m.icon}</span>
                <p className="text-xs font-bold mt-2">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {conexiones.slice(0, 5).map((c, i) => (
              <div key={i} className="flex items-center gap-2 glass-panel rounded-lg px-3 py-1.5 text-xs text-on-surface-variant">
                <span className="font-bold text-on-surface capitalize">{c.from}</span>
                <span className="material-symbols-outlined text-[14px] text-outline">arrow_forward</span>
                <span className="font-bold text-on-surface capitalize">{c.to}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="font-headline font-bold text-on-surface mb-5">Stack Tecnológico</h3>
          <div className="space-y-4">
            {stack.map(s => (
              <div key={s.capa} className={`rounded-xl p-4 border ${s.color}`}>
                <p className="font-bold text-on-surface mb-3">{s.capa}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tecnologias.map(t => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-white/10 text-on-surface-variant font-bold">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
