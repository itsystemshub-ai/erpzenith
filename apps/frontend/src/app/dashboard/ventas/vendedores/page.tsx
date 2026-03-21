'use client'
import Link from 'next/link'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Vendedores Activos', value: '6', icon: 'group', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Meta Promedio', value: '82%', icon: 'flag', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Ventas del Mes', value: '$214,800', icon: 'payments', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Comisiones Totales', value: '$8,240', icon: 'account_balance_wallet', color: 'text-amber-400', bg: 'bg-amber-400/10' },
]

const vendedores = [
  { id: '1', nombre: 'Alejandro Rivas', iniciales: 'AR', region: 'Región Centro', ventas: '$48,200', meta: 92, clientes: 38, estado: 'Activo' },
  { id: '2', nombre: 'Sofía Mendoza', iniciales: 'SM', region: 'Región Occidente', ventas: '$35,600', meta: 78, clientes: 29, estado: 'Activo' },
  { id: '3', nombre: 'Carlos Herrera', iniciales: 'CH', region: 'Región Oriente', ventas: '$29,100', meta: 65, clientes: 21, estado: 'Activo' },
  { id: '4', nombre: 'Valentina Torres', iniciales: 'VT', region: 'Región Capital', ventas: '$52,800', meta: 105, clientes: 44, estado: 'Activo' },
  { id: '5', nombre: 'Miguel Ángel Díaz', iniciales: 'MD', region: 'Región Llanos', ventas: '$28,400', meta: 71, clientes: 18, estado: 'Activo' },
  { id: '6', nombre: 'Laura Castillo', iniciales: 'LC', region: 'Región Andes', ventas: '$20,700', meta: 58, clientes: 15, estado: 'Inactivo' },
]

const estadoColor: Record<string, string> = {
  Activo: 'text-tertiary bg-tertiary/10',
  Inactivo: 'text-outline bg-surface-container-highest',
}

export default function VendedoresPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Ventas" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Equipo de Vendedores</h2>
            <p className="text-on-surface-variant mt-1">Rendimiento y seguimiento del equipo comercial.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Nuevo Vendedor
          </button>
        </div>

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

        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/5">
            <h3 className="text-lg font-headline font-bold text-on-surface">Vendedores</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5">
                <tr>
                  {['Vendedor', 'Región', 'Ventas Mes', 'Meta %', 'Clientes', 'Estado', ''].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vendedores.map((v) => (
                  <tr key={v.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold text-primary">{v.iniciales}</span>
                        </div>
                        <span className="font-medium text-on-surface">{v.nombre}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{v.region}</td>
                    <td className="px-6 py-4 font-bold text-on-surface">{v.ventas}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${v.meta >= 100 ? 'bg-tertiary' : v.meta >= 75 ? 'bg-primary' : 'bg-amber-400'}`}
                            style={{ width: `${Math.min(v.meta, 100)}%` }}
                          />
                        </div>
                        <span className={`font-bold text-xs ${v.meta >= 100 ? 'text-tertiary' : v.meta >= 75 ? 'text-primary' : 'text-amber-400'}`}>
                          {v.meta}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{v.clientes}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${estadoColor[v.estado]}`}>{v.estado}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/dashboard/ventas/vendedores/${v.id}`} className="text-primary text-xs font-bold hover:underline">
                        Ver perfil
                      </Link>
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
