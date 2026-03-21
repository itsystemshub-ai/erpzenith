'use client'
import { useState } from 'react'

const canales = [
  {
    icon: 'mail',
    label: 'Correo Electrónico',
    valor: 'it.systems.hub@gmail.com',
    desc: 'Respuesta en menos de 24 horas hábiles',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: 'phone',
    label: 'Teléfono / WhatsApp',
    valor: '+58 412-680-2831',
    desc: 'Lunes a viernes, 8am – 6pm',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
  },
  {
    icon: 'schedule',
    label: 'Horario de Atención',
    valor: 'Lun – Vie: 8:00am – 6:00pm',
    desc: 'Hora de Venezuela (VET, UTC-4)',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
]

export default function SoportePage() {
  const [nombre, setNombre] = useState('')
  const [usuario, setUsuario] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En producción esto enviaría al backend / email
    setEnviado(true)
  }

  return (
    <div className="bg-background text-on-surface font-body min-h-[calc(100vh-60px)] flex items-start justify-center py-16 px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-2xl z-10">
        <a href="/login" className="flex items-center gap-2 text-xs text-outline hover:text-on-surface transition-colors mb-10 group">
          <span className="material-symbols-outlined text-sm group-hover:text-primary">arrow_back</span>
          Volver al inicio de sesión
        </a>

        <div className="mb-10">
          <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-on-primary-container text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>contact_support</span>
          </div>
          <h1 className="font-headline text-3xl font-semibold text-on-surface">Soporte Técnico</h1>
          <p className="text-on-surface-variant text-sm mt-2">Estamos aquí para ayudarte. Contáctanos por cualquiera de estos canales.</p>
        </div>

        {/* Canales de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {canales.map((c) => (
            <div key={c.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                <span className={`material-symbols-outlined ${c.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
              </div>
              <div>
                <p className="text-[10px] font-spartan uppercase tracking-widest text-outline">{c.label}</p>
                <p className={`text-sm font-semibold mt-0.5 ${c.color}`}>{c.valor}</p>
                <p className="text-[11px] text-on-surface-variant mt-1">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div className="glass-panel rounded-2xl p-8">
          <h2 className="font-headline text-lg font-semibold text-on-surface mb-6">Enviar un mensaje</h2>

          {enviado ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>mark_email_read</span>
              </div>
              <p className="text-sm font-semibold text-on-surface">Mensaje enviado</p>
              <p className="text-xs text-on-surface-variant">Nuestro equipo te contactará a la brevedad posible.</p>
              <button
                onClick={() => { setEnviado(false); setNombre(''); setUsuario(''); setMensaje('') }}
                className="text-xs text-primary hover:text-tertiary transition-colors font-spartan uppercase tracking-widest"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">Nombre completo</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">person</span>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      className="w-full bg-surface-container-highest border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">Usuario del sistema</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">badge</span>
                    <input
                      type="text"
                      placeholder="tuusuario"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      className="w-full bg-surface-container-highest border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">Describe tu problema</label>
                <textarea
                  placeholder="Explica detalladamente el problema que estás experimentando..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-on-primary rounded-xl font-spartan font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>

        <div className="mt-6 text-center">
          <a href="/login/ayuda" className="text-xs text-outline hover:text-primary transition-colors font-spartan uppercase tracking-widest">
            Ver preguntas frecuentes →
          </a>
        </div>
      </div>
    </div>
  )
}
