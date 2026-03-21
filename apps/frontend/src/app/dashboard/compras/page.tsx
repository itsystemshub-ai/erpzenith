'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const ordenes = [
  { ref: 'OC-2024-0082', proveedor: 'TechSolutions C.A.', fecha: '12 Oct 2024', total: '$1,250.00', estado: 'Emitida' },
  { ref: 'OC-2024-0081', proveedor: 'Global Logistics S.A.', fecha: '10 Oct 2024', total: '$4,890.50', estado: 'Pendiente' },
  { ref: 'OC-2024-0080', proveedor: 'Papelería El Norte', fecha: '09 Oct 2024', total: '$210.00', estado: 'Borrador' },
  { ref: 'OC-2024-0079', proveedor: 'Energía Total Corp.', fecha: '05 Oct 2024', total: '$12,400.00', estado: 'Recibida' },
]

const estadoVariant: Record<string, 'success' | 'warning' | 'error'> = {
  Recibida: 'success', Pendiente: 'warning', Emitida: 'warning', Borrador: 'error',
}

const ocSeleccionada = {
  ref: 'OC-2024-0081',
  proveedor: 'Global Logistics S.A.',
  rif: 'J-30495822-1',
  items: [
    { desc: 'Servicio de Flete Internacional', qty: 1, precio: 3500 },
    { desc: 'Gestión Aduanera Premium', qty: 1, precio: 715.95 },
  ],
  subtotal: 4215.95,
  iva: 674.55,
  total: 4890.50,
  bcv: 36.50,
}

export default function ComprasPage() {
  const [busqueda, setBusqueda] = useState('')

  const filtradas = ordenes.filter(
    (o) => o.ref.toLowerCase().includes(busqueda.toLowerCase()) || o.proveedor.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Órdenes de Compra" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Órdenes de Compra</h2>
            <p className="text-on-surface-variant mt-1">Gestión centralizada de abastecimiento y solicitudes corporativas.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nueva Solicitud de Compra
          </Button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-primary blur-[100px] opacity-5" />
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-4 font-bold">Total Compras del Mes</p>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-primary">$42,850.22</h3>
              <span className="text-tertiary text-xs font-bold">+12.5%</span>
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[70%]" />
            </div>
          </GlassCard>

          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-primary blur-[100px] opacity-5" />
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-4 font-bold">OC por Recibir</p>
            <div className="flex items-baseline gap-2">
              <h3 className="font-headline text-3xl font-bold text-on-surface">14</h3>
              <span className="text-outline text-xs">Unidades en tránsito</span>
            </div>
            <div className="mt-6 flex gap-2">
              {[1, 0.4, 0.1].map((op, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-tertiary" style={{ opacity: op }} />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 relative overflow-hidden border-l-4 border-tertiary">
            <div className="absolute inset-0 bg-gradient-to-tr from-tertiary/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <p className="text-xs font-spartan uppercase tracking-widest text-tertiary font-bold">Ahorro Estimado por IA</p>
                <span className="material-symbols-outlined text-tertiary animate-pulse">auto_awesome</span>
              </div>
              <h3 className="font-headline text-3xl font-bold text-tertiary">$3,240.00</h3>
              <p className="text-xs text-outline mt-4 leading-relaxed">Basado en optimización de proveedores y consolidación de fletes.</p>
            </div>
          </GlassCard>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start">
          {/* Tabla */}
          <div className="flex-1 w-full">
            <GlassCard className="overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <h2 className="font-headline text-xl font-medium text-on-surface">Órdenes Recientes</h2>
                <div className="flex gap-3">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                    <input
                      value={busqueda}
                      onChange={(e) => setBusqueda(e.target.value)}
                      placeholder="Buscar orden..."
                      className="bg-surface-container-highest border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-64"
                    />
                  </div>
                  <button className="p-2 bg-surface-container-highest rounded-xl text-outline hover:text-on-surface border border-white/10">
                    <span className="material-symbols-outlined">filter_list</span>
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-surface-container-low">
                    <tr>
                      {['Referencia', 'Proveedor', 'Fecha', 'Total', 'Estado', ''].map((h) => (
                        <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {filtradas.map((oc) => (
                      <tr key={oc.ref} className="hover:bg-white/5 transition-colors cursor-pointer">
                        <td className="px-6 py-5 font-medium text-primary">{oc.ref}</td>
                        <td className="px-6 py-5 text-on-surface">{oc.proveedor}</td>
                        <td className="px-6 py-5 text-on-surface-variant text-sm">{oc.fecha}</td>
                        <td className="px-6 py-5 font-bold text-on-surface">{oc.total}</td>
                        <td className="px-6 py-5">
                          <Badge variant={estadoVariant[oc.estado]}>{oc.estado}</Badge>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <span className="material-symbols-outlined text-outline">chevron_right</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 border-t border-white/5 text-center">
                <button className="text-sm text-primary font-bold hover:underline">Ver todas las órdenes</button>
              </div>
            </GlassCard>
          </div>

          {/* Vista Rápida */}
          <div className="w-full xl:w-[400px]">
            <GlassCard className="overflow-hidden sticky top-24">
              <div className="p-6 bg-surface-container-highest/30 border-b border-white/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-on-surface">Vista Rápida</h3>
                    <p className="text-xs text-primary font-medium">{ocSeleccionada.ref}</p>
                  </div>
                  <button className="p-1 hover:bg-white/10 rounded-full">
                    <span className="material-symbols-outlined text-outline">close</span>
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">business</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{ocSeleccionada.proveedor}</p>
                    <p className="text-[10px] text-outline uppercase tracking-tighter">RIF: {ocSeleccionada.rif}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[10px] font-spartan uppercase tracking-widest text-outline font-bold mb-4">Ítems de la Orden</p>
                <div className="space-y-4 mb-8">
                  {ocSeleccionada.items.map((item) => (
                    <div key={item.desc} className="flex justify-between items-center text-sm">
                      <div>
                        <p className="font-medium text-on-surface">{item.desc}</p>
                        <p className="text-xs text-outline">Cantidad: {item.qty}.00</p>
                      </div>
                      <p className="font-bold text-on-surface">${item.precio.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-white/5 space-y-3">
                  <div className="flex justify-between text-sm text-outline">
                    <span>Subtotal</span>
                    <span>${ocSeleccionada.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-outline">
                    <span>IVA (16%)</span>
                    <span>${ocSeleccionada.iva.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-end pt-4 border-t border-white/5">
                    <span className="font-bold text-on-surface">TOTAL USD</span>
                    <span className="text-2xl font-headline font-bold text-primary">${ocSeleccionada.total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center bg-surface-container-low p-3 rounded-xl border border-primary/10 mt-4">
                    <span className="text-xs font-bold text-primary">Equivalente VES</span>
                    <span className="font-bold text-primary">{(ocSeleccionada.total * ocSeleccionada.bcv).toLocaleString('es-VE')} VES</span>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-center">Rechazar</Button>
                  <Button className="justify-center">Aprobar Orden</Button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}
