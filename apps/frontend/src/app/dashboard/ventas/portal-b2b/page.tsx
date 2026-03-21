'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Clientes B2B', value: '48', icon: 'corporate_fare', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Pedidos Activos', value: '12', icon: 'shopping_cart', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Facturas Pendientes', value: '5', icon: 'receipt_long', color: 'text-amber-400', bg: 'bg-amber-400/10' },
  { label: 'Crédito Utilizado', value: '34%', icon: 'credit_score', color: 'text-secondary', bg: 'bg-secondary/10' },
]

const clients = [
  { cliente: 'Distribuidora Carabobo C.A.', rif: 'J-30495822-1', pedidos: 8, credito: '$50,000', saldo: '$17,200', estado: 'Activo' },
  { cliente: 'Inversiones Bolívar S.A.', rif: 'J-29384710-5', pedidos: 3, credito: '$30,000', saldo: '$8,400', estado: 'Activo' },
  { cliente: 'Grupo Empresarial Zulia', rif: 'J-40182930-2', pedidos: 1, credito: '$20,000', saldo: '$20,000', estado: 'Pendiente' },
  { cliente: 'Comercial Andina C.A.', rif: 'J-31029384-7', pedidos: 0, credito: '$15,000', saldo: '$0', estado: 'Inactivo' },
]

const estadoColor: Record<string, string> = {
  Activo: 'text-tertiary bg-tertiary/10',
  Pendiente: 'text-amber-400 bg-amber-400/10',
  Inactivo: 'text-outline bg-surface-container-highest',
}

export default function PortalB2BPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Portal B2B" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Portal de Clientes B2B</h2>
            <p className="text-on-surface-variant mt-1">Autoservicio corporativo: pedidos, facturas y crédito en un solo lugar.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Invitar Cliente
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Clients Table */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-headline font-bold text-on-surface">Clientes Corporativos</h3>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input
                placeholder="Buscar cliente..."
                className="bg-surface-container-highest border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 w-56"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Cliente', 'RIF', 'Pedidos', 'Crédito', 'Saldo', 'Estado', ''].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {clients.map((c) => (
                  <tr key={c.rif} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-on-surface">{c.cliente}</td>
                    <td className="px-6 py-4 font-mono text-on-surface-variant text-xs">{c.rif}</td>
                    <td className="px-6 py-4 text-on-surface">{c.pedidos}</td>
                    <td className="px-6 py-4 text-on-surface">{c.credito}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{c.saldo}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${estadoColor[c.estado]}`}>{c.estado}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary text-xs font-bold hover:underline">Ver Portal</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  )
}
