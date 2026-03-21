'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const clientes = [
  { id: 1, nombre: 'Empresa XYZ C.A.', rif: 'J-98765432-1', vendedor: 'Carlos M.', valor: 1250000 },
  { id: 2, nombre: 'Distribuidora Norte', rif: 'J-11223344-5', vendedor: 'María G.', valor: 680000 },
  { id: 3, nombre: 'Tech Solutions VE', rif: 'J-55667788-9', vendedor: 'Pedro R.', valor: 320000 },
]

const eventos: Record<number, Array<{ tipo: string; descripcion: string; fecha: string; usuario: string; monto?: number }>> = {
  1: [
    { tipo: 'llamada', descripcion: 'Llamada de prospección inicial', fecha: '2024-10-05', usuario: 'Carlos M.' },
    { tipo: 'reunion', descripcion: 'Reunión de presentación de producto', fecha: '2024-10-15', usuario: 'Carlos M.' },
    { tipo: 'cotizacion', descripcion: 'Cotización enviada COT-2024-0089', fecha: '2024-10-20', usuario: 'Carlos M.', monto: 1250000 },
    { tipo: 'seguimiento', descripcion: 'Seguimiento por email — sin respuesta', fecha: '2024-10-28', usuario: 'Carlos M.' },
    { tipo: 'negociacion', descripcion: 'Negociación de términos y descuentos', fecha: '2024-11-05', usuario: 'Carlos M.' },
    { tipo: 'factura', descripcion: 'Factura emitida F-2024-1205', fecha: '2024-11-15', usuario: 'Sistema', monto: 1250000 },
    { tipo: 'pago', descripcion: 'Pago recibido — Transferencia bancaria', fecha: '2024-11-20', usuario: 'Sistema', monto: 1250000 },
  ],
  2: [
    { tipo: 'llamada', descripcion: 'Contacto inicial por referido', fecha: '2024-11-01', usuario: 'María G.' },
    { tipo: 'cotizacion', descripcion: 'Cotización enviada COT-2024-0102', fecha: '2024-11-08', usuario: 'María G.', monto: 680000 },
    { tipo: 'factura', descripcion: 'Factura emitida F-2024-1198', fecha: '2024-11-20', usuario: 'Sistema', monto: 680000 },
  ],
  3: [
    { tipo: 'reunion', descripcion: 'Demo del sistema ERP', fecha: '2024-12-01', usuario: 'Pedro R.' },
    { tipo: 'seguimiento', descripcion: 'Propuesta técnica enviada', fecha: '2024-12-10', usuario: 'Pedro R.' },
  ],
}

const tipoConfig: Record<string, { icon: string; color: string; label: string }> = {
  llamada: { icon: 'call', color: 'bg-primary/20 text-primary', label: 'Llamada' },
  reunion: { icon: 'groups', color: 'bg-secondary/20 text-secondary', label: 'Reunión' },
  cotizacion: { icon: 'request_quote', color: 'bg-yellow-500/20 text-yellow-400', label: 'Cotización' },
  seguimiento: { icon: 'mark_email_read', color: 'bg-orange-500/20 text-orange-400', label: 'Seguimiento' },
  negociacion: { icon: 'handshake', color: 'bg-purple-500/20 text-purple-400', label: 'Negociación' },
  factura: { icon: 'receipt_long', color: 'bg-tertiary/20 text-tertiary', label: 'Factura' },
  pago: { icon: 'payments', color: 'bg-tertiary/20 text-tertiary', label: 'Pago' },
}

const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

export default function TimelinePage() {
  const [selected, setSelected] = useState(clientes[0])

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Ventas" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Timeline de Clientes</h2>
            <p className="text-on-surface-variant mt-1">Historial completo de interacciones por cliente</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Registrar Interacción
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Client list */}
          <div className="lg:col-span-1 space-y-3">
            {clientes.map(c => (
              <div key={c.id}
                onClick={() => setSelected(c)}
                className={`glass-panel rounded-2xl p-4 cursor-pointer transition-all hover:bg-white/5 ${selected.id === c.id ? 'border border-primary/40' : ''}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-[18px]">business</span>
                  </div>
                  <div>
                    <p className="font-bold text-on-surface text-sm">{c.nombre}</p>
                    <p className="text-xs text-outline">{c.rif}</p>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-xs text-outline">
                  <span>{c.vendedor}</span>
                  <span className="font-bold text-on-surface">{fmt(c.valor)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="glass-panel rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-headline font-bold text-on-surface text-lg">{selected.nombre}</h3>
                  <p className="text-sm text-on-surface-variant">{eventos[selected.id]?.length || 0} interacciones registradas</p>
                </div>
                <span className="font-bold text-on-surface text-xl">{fmt(selected.valor)}</span>
              </div>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-white/10" />
                <div className="space-y-6">
                  {(eventos[selected.id] || []).map((ev, i) => {
                    const cfg = tipoConfig[ev.tipo] || { icon: 'circle', color: 'bg-white/10 text-outline', label: ev.tipo }
                    return (
                      <div key={i} className="flex gap-4 relative">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 z-10 ${cfg.color}`}>
                          <span className="material-symbols-outlined text-[18px]">{cfg.icon}</span>
                        </div>
                        <div className="flex-1 glass-panel rounded-xl p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.color}`}>{cfg.label}</span>
                              <p className="font-bold text-on-surface mt-1.5">{ev.descripcion}</p>
                              <p className="text-xs text-outline mt-1">{ev.fecha} · {ev.usuario}</p>
                            </div>
                            {ev.monto && (
                              <span className="font-bold text-tertiary font-mono text-sm">{fmt(ev.monto)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
