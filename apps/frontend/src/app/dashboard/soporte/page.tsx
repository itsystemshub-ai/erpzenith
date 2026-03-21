'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const articulos = [
  { id: 1, titulo: 'Cómo crear una factura de venta', categoria: 'Ventas', vistas: 1247, tiempo: '3 min' },
  { id: 2, titulo: 'Configurar impuestos y retenciones', categoria: 'Contabilidad', vistas: 892, tiempo: '5 min' },
  { id: 3, titulo: 'Gestión de inventario y stock mínimo', categoria: 'Inventario', vistas: 756, tiempo: '4 min' },
  { id: 4, titulo: 'Crear y gestionar usuarios y roles', categoria: 'Configuración', vistas: 634, tiempo: '3 min' },
  { id: 5, titulo: 'Integración con API externa', categoria: 'API', vistas: 521, tiempo: '8 min' },
  { id: 6, titulo: 'Exportar reportes en PDF y Excel', categoria: 'Reportes', vistas: 489, tiempo: '2 min' },
]

const tickets = [
  { id: 'TKT-0124', asunto: 'Error al generar reporte mensual', estado: 'abierto', prioridad: 'alta', fecha: 'Hace 2h' },
  { id: 'TKT-0123', asunto: 'Consulta sobre integración bancaria', estado: 'en_progreso', prioridad: 'media', fecha: 'Hace 1 día' },
  { id: 'TKT-0122', asunto: 'Solicitud de nueva funcionalidad', estado: 'resuelto', prioridad: 'baja', fecha: 'Hace 3 días' },
]

const estadoBadge: Record<string, string> = {
  abierto: 'bg-yellow-500/20 text-yellow-400',
  en_progreso: 'bg-primary/20 text-primary',
  resuelto: 'bg-tertiary/20 text-tertiary',
}

const prioridadBadge: Record<string, string> = {
  alta: 'bg-error/20 text-error',
  media: 'bg-orange-500/20 text-orange-400',
  baja: 'bg-white/10 text-outline',
}

export default function SoportePage() {
  const [tab, setTab] = useState<'chat' | 'articulos' | 'tickets'>('chat')
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hola, soy el asistente de soporte de NexusCore. ¿En qué puedo ayudarte hoy?' },
  ])
  const [input, setInput] = useState('')
  const [search, setSearch] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages(m => [...m, { role: 'user', text: input }, { role: 'ai', text: 'Entendido. Estoy buscando la mejor solución para tu consulta. Un momento...' }])
    setInput('')
  }

  const filteredArticulos = articulos.filter(a =>
    a.titulo.toLowerCase().includes(search.toLowerCase()) ||
    a.categoria.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Soporte" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Soporte y Base de Conocimientos</h2>
          <p className="text-on-surface-variant mt-1">Asistente IA, artículos de ayuda y tickets de soporte</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['chat', 'articulos', 'tickets'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'chat' ? 'Asistente IA' : t === 'articulos' ? 'Base de Conocimientos' : 'Mis Tickets'}
            </button>
          ))}
        </div>

        {tab === 'chat' && (
          <div className="glass-panel rounded-2xl overflow-hidden flex flex-col" style={{ height: '60vh' }}>
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[16px]">psychology</span>
              </div>
              <div>
                <p className="font-bold text-on-surface text-sm">Asistente NexusCore</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                  <p className="text-xs text-outline">En línea</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] px-4 py-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-on-primary' : 'glass-panel text-on-surface'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/10 flex gap-3">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Escribe tu consulta..."
                className="flex-1 glass-panel rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none"
              />
              <button onClick={sendMessage}
                className="bg-primary text-on-primary px-4 py-3 rounded-xl hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </div>
          </div>
        )}

        {tab === 'articulos' && (
          <div className="space-y-5">
            <div className="relative max-w-lg">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Buscar artículos..."
                className="w-full glass-panel rounded-xl pl-9 pr-4 py-3 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredArticulos.map(a => (
                <div key={a.id} className="glass-panel rounded-2xl p-5 cursor-pointer hover:bg-white/5 transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">{a.categoria}</span>
                      <h4 className="font-bold text-on-surface mt-2">{a.titulo}</h4>
                    </div>
                    <span className="material-symbols-outlined text-outline text-[18px]">arrow_forward</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3 text-xs text-outline">
                    <span>{a.vistas.toLocaleString()} vistas</span>
                    <span>{a.tiempo} de lectura</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'tickets' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Nuevo Ticket
              </button>
            </div>
            {tickets.map(t => (
              <div key={t.id} className="glass-panel rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-outline">{t.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${prioridadBadge[t.prioridad]}`}>{t.prioridad}</span>
                  </div>
                  <p className="font-bold text-on-surface mt-1">{t.asunto}</p>
                  <p className="text-xs text-outline mt-1">{t.fecha}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${estadoBadge[t.estado]}`}>
                    {t.estado.replace('_', ' ')}
                  </span>
                  <button className="text-xs text-primary hover:text-primary/80 font-bold transition-colors">Ver</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
