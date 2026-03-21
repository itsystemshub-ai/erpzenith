'use client'
import { TopBar } from '@/components/layout/TopBar'
import Link from 'next/link'

const cliente = {
  nombre: 'Corporación Nova S.A.',
  rif: 'J-12345678-9',
  email: 'contacto@corporacionnova.com',
  telefono: '+58 212-555-0100',
  direccion: 'Av. Francisco de Miranda, Caracas',
  tipo: 'Corporativo',
  estado: 'Activo',
  desde: 'Enero 2022',
  vendedor: 'Alejandro Rivas',
  credito: '$50,000',
  saldo: '$4,930',
}

const historial = [
  { folio: 'FAC-2024-1248', fecha: '21 Mar 2024', monto: '$4,930.00', estado: 'Pagada', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20' },
  { folio: 'FAC-2024-1102', fecha: '05 Mar 2024', monto: '$2,150.00', estado: 'Pagada', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20' },
  { folio: 'FAC-2024-0988', fecha: '18 Feb 2024', monto: '$8,400.00', estado: 'Pagada', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20' },
  { folio: 'FAC-2024-0850', fecha: '02 Feb 2024', monto: '$1,200.00', estado: 'Pendiente', estadoColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
]

export default function ClienteDetailPage() {
  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Perfil del Cliente" />
      <div className="flex-1 p-8 max-w-[1400px] mx-auto w-full space-y-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-outline">
          <Link href="/dashboard/ventas/clientes" className="hover:text-primary transition-colors">Clientes</Link>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface">{cliente.nombre}</span>
        </div>

        {/* Header */}
        <div className="glass-panel rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-3xl">corporate_fare</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-headline text-3xl font-bold text-on-surface">{cliente.nombre}</h1>
              <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary border border-tertiary/20 text-xs font-bold">{cliente.estado}</span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold">{cliente.tipo}</span>
            </div>
            <p className="text-outline text-sm mt-1">RIF: {cliente.rif} • Cliente desde {cliente.desde}</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">edit</span>Editar
            </button>
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">receipt_long</span>Nueva Factura
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info */}
          <div className="space-y-4">
            <div className="glass-panel rounded-2xl p-5 space-y-4">
              <h3 className="font-semibold text-on-surface">Información de Contacto</h3>
              {[
                { icon: 'email', label: 'Email', value: cliente.email },
                { icon: 'phone', label: 'Teléfono', value: cliente.telefono },
                { icon: 'location_on', label: 'Dirección', value: cliente.direccion },
                { icon: 'person', label: 'Vendedor', value: cliente.vendedor },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-outline text-[18px] mt-0.5">{f.icon}</span>
                  <div>
                    <p className="text-[10px] text-outline uppercase tracking-widest">{f.label}</p>
                    <p className="text-sm text-on-surface">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="glass-panel rounded-2xl p-5 space-y-3">
              <h3 className="font-semibold text-on-surface">Crédito</h3>
              <div className="flex justify-between text-sm">
                <span className="text-outline">Límite</span>
                <span className="font-bold text-on-surface">{cliente.credito}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-outline">Saldo Pendiente</span>
                <span className="font-bold text-amber-400">{cliente.saldo}</span>
              </div>
              <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '10%' }} />
              </div>
              <p className="text-xs text-outline">10% del límite utilizado</p>
            </div>
          </div>

          {/* KPIs + Historial */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Total Compras', valor: '$48,200', icon: 'payments', color: 'text-primary bg-primary/10' },
                { label: 'Facturas', valor: '24', icon: 'receipt_long', color: 'text-tertiary bg-tertiary/10' },
                { label: 'Cotizaciones', valor: '8', icon: 'description', color: 'text-secondary bg-secondary/10' },
                { label: 'Ticket Prom.', valor: '$2,008', icon: 'trending_up', color: 'text-outline bg-outline/10' },
              ].map((k) => (
                <div key={k.label} className="glass-panel rounded-2xl p-4 flex flex-col gap-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${k.color}`}>
                    <span className="material-symbols-outlined text-[18px]">{k.icon}</span>
                  </div>
                  <p className="text-xl font-bold text-on-surface">{k.valor}</p>
                  <p className="text-xs text-outline">{k.label}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="p-5 border-b border-white/5">
                <h3 className="font-semibold text-on-surface">Historial de Facturas</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                      {['Folio', 'Fecha', 'Monto', 'Estado', ''].map(h => <th key={h} className="px-5 py-4">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {historial.map((f, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="px-5 py-4 text-sm font-medium text-primary">{f.folio}</td>
                        <td className="px-5 py-4 text-sm text-on-surface-variant">{f.fecha}</td>
                        <td className="px-5 py-4 font-bold text-on-surface">{f.monto}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${f.estadoColor}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current" />{f.estado}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <button className="text-outline hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">visibility</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
