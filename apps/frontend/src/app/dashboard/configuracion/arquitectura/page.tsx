'use client'
import { TopBar } from '@/components/layout/TopBar'

const modulos = [
  { id: 'ventas', label: 'Ventas', icon: 'point_of_sale', color: 'bg-tertiary/20 border-tertiary/40 text-tertiary', x: 50, y: 10 },
  { id: 'compras', label: 'Compras', icon: 'shopping_cart', color: 'bg-primary/20 border-primary/40 text-primary', x: 10, y: 35 },
  { id: 'inventario', label: 'Inventario', icon: 'inventory_2', color: 'bg-secondary/20 border-secondary/40 text-secondary', x: 50, y: 35 },
  { id: 'contabilidad', label: 'Contabilidad', icon: 'account_balance', color: 'bg-orange-500/20 border-orange-500/40 text-orange-400', x: 90, y: 35 },
  { id: 'rrhh', label: 'RRHH', icon: 'group', color: 'bg-purple-500/20 border-purple-500/40 text-purple-400', x: 10, y: 65 },
  { id: 'produccion', label: 'Producción', icon: 'precision_manufacturing', color: 'bg-blue-500/20 border-blue-500/40 text-blue-400', x: 50, y: 65 },
  { id: 'reportes', label: 'Reportes & BI', icon: 'bar_chart', color: 'bg-pink-500/20 border-pink-500/40 text-pink-400', x: 90, y: 65 },
]

const conexiones = [
  { from: 'ventas', to: 'inventario' },
  { from: 'ventas', to: 'contabilidad' },
  { from: 'compras', to: 'inventario' },
  { from: 'compras', to: 'contabilidad' },
  { from: 'inventario', to: 'produccion' },
  { from: 'rrhh', to: 'contabilidad' },
  { from: 'produccion', to: 'inventario' },
  { from: 'contabilidad', to: 'reportes' },
  { from: 'ventas', to: 'reportes' },
]

const stack = [
  { capa: 'Frontend', tecnologias: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Query'], color: 'border-primary/30 bg-primary/5' },
  { capa: 'Backend API', tecnologias: ['NestJS', 'TypeScript', 'JWT Auth', 'REST API'], color: 'border-secondary/30 bg-secondary/5' },
  { capa: 'Base de Datos', tecnologias: ['PostgreSQL 15', 'Prisma ORM', 'Redis Cache'], color: 'border-tertiary/30 bg-tertiary/5' },
  { capa: 'Infraestructura', tecnologias: ['Docker', 'Nginx', 'SSL/TLS', 'Backups automáticos'], color: 'border-orange-500/30 bg-orange-500/5' },
]

export default function ArquitecturaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Arquitectura del ERP</h2>
          <p className="text-on-surface-variant mt-1">Diagrama de flujo, módulos y stack tecnológico</p>
        </div>

        {/* Module diagram */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="font-headline font-bold text-on-surface mb-6">Mapa de Módulos e Integraciones</h3>

          {/* Central hub */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-32 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center border border-primary/40">
              <div className="text-center">
                <span className="material-symbols-outlined text-white text-[20px]">hub</span>
                <p className="text-white text-xs font-bold">NexusCore</p>
                <p className="text-white/70 text-[10px]">ERP Core</p>
              </div>
            </div>

            {/* Modules grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
              {modulos.map(m => (
                <div key={m.id} className={`glass-panel rounded-2xl p-4 border text-center ${m.color} cursor-pointer hover:scale-105 transition-transform`}>
                  <span className={`material-symbols-outlined text-2xl`}>{m.icon}</span>
                  <p className="text-xs font-bold mt-2">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Connections legend */}
            <div className="flex flex-wrap gap-3 justify-center">
              {conexiones.slice(0, 5).map((c, i) => (
                <div key={i} className="flex items-center gap-2 glass-panel rounded-lg px-3 py-1.5 text-xs text-on-surface-variant">
                  <span className="font-bold text-on-surface capitalize">{c.from}</span>
                  <span className="material-symbols-outlined text-[14px] text-outline">arrow_forward</span>
                  <span className="font-bold text-on-surface capitalize">{c.to}</span>
                </div>
              ))}
              <div className="glass-panel rounded-lg px-3 py-1.5 text-xs text-outline">+{conexiones.length - 5} más</div>
            </div>
          </div>
        </div>

        {/* Tech stack */}
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

        {/* Data flow */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="font-headline font-bold text-on-surface mb-5">Flujo de Datos Principal</h3>
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {[
              { label: 'Usuario', icon: 'person' },
              { label: 'Frontend\nNext.js', icon: 'web' },
              { label: 'API Gateway\nNestJS', icon: 'api' },
              { label: 'Servicios\nde Negocio', icon: 'settings' },
              { label: 'Base de\nDatos', icon: 'database' },
              { label: 'Cache\nRedis', icon: 'memory' },
            ].map((step, i, arr) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <div className="glass-panel rounded-xl p-4 text-center w-24">
                  <span className="material-symbols-outlined text-primary text-2xl">{step.icon}</span>
                  <p className="text-xs text-on-surface font-bold mt-1 whitespace-pre-line leading-tight">{step.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <span className="material-symbols-outlined text-outline">arrow_forward</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
