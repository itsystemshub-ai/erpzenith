'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const vendedores = [
  { nombre: 'Alejandro Rivas', ventas: '$48,200', meta: 92, pedidos: 124, clientes: 38, tendencia: '+14%', color: 'bg-primary' },
  { nombre: 'Sofia Mendoza', ventas: '$41,500', meta: 83, pedidos: 98, clientes: 31, tendencia: '+8%', color: 'bg-tertiary' },
  { nombre: 'Carlos Pérez', ventas: '$35,800', meta: 71, pedidos: 87, clientes: 27, tendencia: '+3%', color: 'bg-secondary' },
  { nombre: 'María González', ventas: '$29,100', meta: 58, pedidos: 72, clientes: 22, tendencia: '-2%', color: 'bg-error' },
]

const barras = [
  { label: 'Ene', h: 'h-16', color: 'bg-primary/60' },
  { label: 'Feb', h: 'h-24', color: 'bg-primary/60' },
  { label: 'Mar', h: 'h-20', color: 'bg-primary/60' },
  { label: 'Abr', h: 'h-32', color: 'bg-primary/60' },
  { label: 'May', h: 'h-28', color: 'bg-primary/60' },
  { label: 'Jun', h: 'h-36', color: 'bg-primary/60' },
  { label: 'Jul', h: 'h-44', color: 'bg-primary' },
  { label: 'Ago', h: 'h-40', color: 'bg-primary/60' },
  { label: 'Sep', h: 'h-48', color: 'bg-primary/60' },
  { label: 'Oct', h: 'h-52', color: 'bg-primary' },
  { label: 'Nov', h: 'h-40', color: 'bg-primary/40' },
  { label: 'Dic', h: 'h-32', color: 'bg-primary/30' },
]

const categorias = [
  { nombre: 'Electrónica', pct: 42, color: 'bg-primary', valor: '$119,280' },
  { nombre: 'Alimentos', pct: 28, color: 'bg-tertiary', valor: '$79,520' },
  { nombre: 'Calzado', pct: 18, color: 'bg-secondary', valor: '$51,120' },
  { nombre: 'Otros', pct: 12, color: 'bg-outline', valor: '$34,080' },
]

const periodos = ['Hoy', 'Esta Semana', 'Este Mes', 'Este Año']

export default function VentasBIPage() {
  const [periodo, setPeriodo] = useState(2)

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Reporte Maestro de Ventas BI" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
              <span className="text-[10px] font-spartan uppercase tracking-widest text-primary">Business Intelligence</span>
            </div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Reporte Maestro de Ventas</h1>
            <p className="text-on-surface-variant text-sm mt-1">Análisis global de rendimiento comercial con predicciones IA.</p>
          </div>
          <div className="flex gap-3">
            <div className="flex space-x-1 bg-surface-container p-1 rounded-xl">
              {periodos.map((p, i) => (
                <button key={p} onClick={() => setPeriodo(i)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${periodo === i ? 'bg-surface-container-highest text-on-surface shadow' : 'text-outline hover:text-on-surface'}`}>
                  {p}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 h-10 rounded-xl border border-white/10 bg-surface-container text-on-surface-variant hover:bg-white/5 text-sm font-spartan uppercase tracking-widest transition-all">
              <span className="material-symbols-outlined text-[18px]">download</span>Exportar
            </button>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Ingresos Totales', valor: '$284,000', badge: '+18.4%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'payments', iconColor: 'text-primary bg-primary/10' },
            { label: 'Facturas Emitidas', valor: '1,248', badge: '+12.1%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'receipt_long', iconColor: 'text-tertiary bg-tertiary/10' },
            { label: 'Ticket Promedio', valor: '$227.6', badge: '+5.3%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'shopping_bag', iconColor: 'text-secondary bg-secondary/10' },
            { label: 'Tasa de Conversión', valor: '68.4%', badge: '+2.1%', badgeColor: 'text-tertiary bg-tertiary/10', icon: 'trending_up', iconColor: 'text-primary bg-primary/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${k.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-3xl font-bold text-on-surface">{k.valor}</p>
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded mb-1 ${k.badgeColor}`}>{k.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gráfico + Categorías */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-on-surface">Evolución de Ventas</h3>
                <p className="text-on-surface-variant text-xs">Ingresos mensuales vs. año anterior</p>
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-52 px-2 pb-2 pt-4 relative">
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none px-2 pb-8 pt-4">
                {[0,1,2,3,4].map(i => <div key={i} className="w-full h-px bg-white/5" />)}
              </div>
              {barras.map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1 z-10 flex-1">
                  <div className="w-full flex items-end justify-center h-48">
                    <div className={`w-full ${b.color} rounded-t-lg ${b.h} transition-all duration-500 hover:opacity-80`} />
                  </div>
                  <span className="text-[9px] text-outline font-spartan">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-on-surface">Ventas por Categoría</h3>
            <div className="space-y-4">
              {categorias.map((c) => (
                <div key={c.nombre}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-on-surface-variant">{c.nombre}</span>
                    <div className="text-right">
                      <span className="font-semibold text-on-surface">{c.valor}</span>
                      <span className="text-outline text-xs ml-2">{c.pct}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                    <div className={`${c.color} h-full rounded-full`} style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabla Vendedores */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/5">
            <h3 className="font-semibold text-on-surface">Rendimiento por Vendedor</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['Vendedor', 'Ventas', 'Meta', 'Pedidos', 'Clientes', 'Tendencia'].map(h => (
                    <th key={h} className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {vendedores.map((v, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${v.color} flex items-center justify-center text-white text-xs font-bold`}>
                          {v.nombre.charAt(0)}
                        </div>
                        <span className="text-sm font-semibold text-on-surface">{v.nombre}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-bold text-on-surface">{v.ventas}</td>
                    <td className="px-5 py-4 w-36">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-surface-container-highest h-2 rounded-full overflow-hidden">
                          <div className={`${v.color} h-full rounded-full`} style={{ width: `${v.meta}%` }} />
                        </div>
                        <span className="text-xs text-on-surface-variant">{v.meta}%</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{v.pedidos}</td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{v.clientes}</td>
                    <td className="px-5 py-4">
                      <span className={`text-sm font-bold ${v.tendencia.startsWith('+') ? 'text-tertiary' : 'text-error'}`}>{v.tendencia}</span>
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
