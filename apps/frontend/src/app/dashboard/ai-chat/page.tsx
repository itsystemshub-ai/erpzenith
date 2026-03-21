'use client'
import { useState, useRef, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'

type Msg = { role: 'user' | 'ai'; text: string; time: string }

const sugerencias = [
  '¿Cuáles son los productos con mayor rotación este mes?',
  '¿Qué vendedor tiene mejor rendimiento?',
  'Muéstrame el resumen de compras de la semana',
  '¿Cuántos empleados están activos hoy?',
]

const initialMsgs: Msg[] = [
  { role: 'ai', text: 'Hola, soy el Analista de Negocios IA de Zenith ERP. Puedo ayudarte a analizar datos, generar reportes y responder preguntas sobre tu negocio. ¿En qué puedo ayudarte hoy?', time: 'Ahora' },
]

export default function AIChatPage() {
  const [msgs, setMsgs] = useState<Msg[]>(initialMsgs)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [msgs])

  const send = (text?: string) => {
    const msg = text ?? input
    if (!msg.trim()) return
    const now = new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit' })
    setMsgs(prev => [...prev, { role: 'user', text: msg, time: now }])
    setInput('')
    setLoading(true)
    setTimeout(() => {
      setMsgs(prev => [...prev, {
        role: 'ai',
        text: `Analizando tu consulta: "${msg}"... Basado en los datos del sistema, he identificado los siguientes insights relevantes para tu negocio. Esta es una respuesta de demostración — en producción se conectará con el motor IA de Zenith.`,
        time: new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit' }),
      }])
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Analista de Negocios IA" />
      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-6 gap-4">

        {/* Header */}
        <div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
          </div>
          <div className="flex-1">
            <h1 className="font-bold text-on-surface">Analista de Negocios IA</h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
              </span>
              <span className="text-xs text-outline">Potenciado por Zenith AI</span>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>Nueva Sesión
          </button>
        </div>

        {/* Mensajes */}
        <div className="flex-1 glass-panel rounded-2xl p-5 overflow-y-auto space-y-4 min-h-[400px] max-h-[500px]">
          {msgs.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === 'ai' ? 'bg-primary/10' : 'bg-surface-container-highest'}`}>
                <span className="material-symbols-outlined text-[18px] text-primary">{m.role === 'ai' ? 'smart_toy' : 'person'}</span>
              </div>
              <div className={`max-w-[75%] ${m.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${m.role === 'ai' ? 'bg-surface-container text-on-surface' : 'bg-primary/20 text-on-surface'}`}>
                  {m.text}
                </div>
                <span className="text-[10px] text-outline">{m.time}</span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px] text-primary">smart_toy</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-surface-container flex items-center gap-1">
                {[0,1,2].map(i => (
                  <span key={i} className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: `${i * 0.16}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Sugerencias */}
        <div className="flex flex-wrap gap-2">
          {sugerencias.map((s) => (
            <button key={s} onClick={() => send(s)}
              className="px-3 py-1.5 glass-panel rounded-xl text-xs text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all border border-white/10">
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="glass-panel rounded-2xl p-3 flex items-center gap-3">
          <input value={input} onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !e.shiftKey && send()}
            placeholder="Pregunta algo sobre tu negocio..."
            className="flex-1 bg-transparent border-none text-on-surface placeholder:text-outline text-sm focus:ring-0 focus:outline-none" />
          <button onClick={() => send()} disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-all disabled:opacity-40">
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>
        </div>
      </div>
    </div>
  )
}
