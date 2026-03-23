'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const segmentos = [
  {
    nombre: 'Platinum',
    porcentaje: 24,
    criterio: '> $5,000 / mes',
    clientes: 1152,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    icon: 'workspace_premium',
    valorPromedio: 8420,
  },
  {
    nombre: 'Gold',
    porcentaje: 42,
    criterio: '$1,000 — $5,000 / mes',
    clientes: 2016,
    color: 'text-primary',
    bg: 'bg-primary/10',
    border: 'border-primary/30',
    icon: 'star',
    valorPromedio: 2840,
  },
  {
    nombre: 'Silver',
    porcentaje: 34,
    criterio: '< $1,000 / mes',
    clientes: 1632,
    color: 'text-on-surface-variant',
    bg: 'bg-surface-container-highest',
    border: 'border-outline-variant/30',
    icon: 'grade',
    valorPromedio: 620,
  },
]

const clientes = [
  { nombre: 'Inversiones Bolívar C.A.', rif: 'J-30.421.890-1', segmento: 'Platinum', score: 98, ultimaCompra: '28/11/2025', valorTotal: 142800 },
  { nombre: 'Distribuidora Los Andes', rif: 'J-29.876.543-2', segmento: 'Platinum', score: 95, ultimaCompra: '27/11/2025', valorTotal: 98400 },
  { nombre: 'Comercial Maracaibo S.R.L.', rif: 'J-31.234.567-8', segmento: 'Gold', score: 82, ultimaCompra: '25/11/2025', valorTotal: 34200 },
  { nombre: 'Ferretería El Progreso', rif: 'J-28.901.234-5', segmento: 'Gold', score: 78, ultimaCompra: '24/11/2025', valorTotal: 28900 },
  { nombre: 'Supermercado La Familia', rif: 'J-32.456.789-3', segmento: 'Gold', score: 74, ultimaCompra: '22/11/2025', valorTotal: 21400 },
  { nombre: 'Panadería San José', rif: 'J-27.654.321-9', segmento: 'Silver', score: 61, ultimaCompra: '20/11/2025', valorTotal: 8900 },
  { nombre: 'Librería El Saber', rif: 'J-30.987.654-4', segmento: 'Silver', score: 55, ultimaCompra: '18/11/2025', valorTotal: 5400 },
  { nombre: 'Farmacia Salud Total', rif: 'J-29.123.456-7', segmento: 'Silver', score: 48, ultimaCompra: '15/11/2025', valorTotal: 3200 },
]

const segmentoBadge: Record<string, 'success' | 'warning' | 'error'> = {
  Platinum: 'warning',
  Gold: 'success',
  Silver: 'error',
}

export default function SegmentacionPage() {
  const [filtroSegmento, setFiltroSegmento] = useState('Todos')

  const clientesFiltrados = filtroSegmento === 'Todos'
    ? clientes
    : clientes.filter((c) => c.segmento === filtroSegmento)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Segmentación de Clientes" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Segmentación</h2>
            <p className="text-on-surface-variant mt-1">Clasificación inteligente de clientes por valor.</p>
          </div>
          <Button variant="outline" size="sm">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            Re-segmentar con IA
          </Button>
        </div>

        {/* Cards de segmentos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {segmentos.map((s) => (
            <div key={s.nombre} onClick={() => setFiltroSegmento(s.nombre === filtroSegmento ? 'Todos' : s.nombre)} className="cursor-pointer hover:scale-[1.02] transition-transform">
            <GlassCard className={`p-6 border ${s.border}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${s.bg}`}>
                  <span className={`material-symbols-outlined text-[24px] ${s.color}`}>{s.icon}</span>
                </div>
                <span className={`text-4xl font-headline font-bold ${s.color}`}>{s.porcentaje}%</span>
              </div>
              <h3 className={`text-xl font-headline font-bold ${s.color} mb-1`}>{s.nombre}</h3>
              <p className="text-sm text-outline mb-3">{s.criterio}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-on-surface-variant">{s.clientes.toLocaleString()} clientes</span>
                <span className={`font-bold ${s.color}`}>Ø ${s.valorPromedio.toLocaleString()}/mes</span>
              </div>
              <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-3">
                <div className={`h-1.5 rounded-full ${s.nombre === 'Platinum' ? 'bg-amber-500' : s.nombre === 'Gold' ? 'bg-primary' : 'bg-outline'}`}
                  style={{ width: `${s.porcentaje}%` }} />
              </div>
            </GlassCard>
            </div>
          ))}
        </div>

        {/* Tabla de clientes */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">Clientes</h3>
            <div className="flex items-center gap-2">
              {['Todos', 'Platinum', 'Gold', 'Silver'].map((s) => (
                <button
                  key={s}
                  onClick={() => setFiltroSegmento(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    filtroSegmento === s
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-highest text-outline hover:text-on-surface'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5">
                  {['Cliente', 'RIF', 'Segmento', 'Score IA', 'Última Compra', 'Valor Total'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {clientesFiltrados.map((c) => (
                  <tr key={c.rif} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-on-surface">{c.nombre}</td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface-variant">{c.rif}</td>
                    <td className="px-6 py-4">
                      <Badge variant={segmentoBadge[c.segmento]}>{c.segmento}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-surface-container-highest rounded-full h-1.5">
                          <div
                            className={`h-1.5 rounded-full ${c.score >= 90 ? 'bg-amber-500' : c.score >= 70 ? 'bg-primary' : 'bg-outline'}`}
                            style={{ width: `${c.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-on-surface">{c.score}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-outline">{c.ultimaCompra}</td>
                    <td className="px-6 py-4 text-sm font-bold text-primary">${c.valorTotal.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
