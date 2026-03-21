'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const movimientos = [
  { id: 1, fecha: '2024-12-15', descripcion: 'Depósito cliente Empresa XYZ', banco: 1250000, libro: 1250000, estado: 'conciliado' },
  { id: 2, fecha: '2024-12-15', descripcion: 'Pago proveedor Distribuidora ABC', banco: -850000, libro: -850000, estado: 'conciliado' },
  { id: 3, fecha: '2024-12-14', descripcion: 'Transferencia recibida - Ref. 20241214-001', banco: 320000, libro: 0, estado: 'pendiente_libro' },
  { id: 4, fecha: '2024-12-14', descripcion: 'Comisión bancaria mensual', banco: -12500, libro: 0, estado: 'pendiente_libro' },
  { id: 5, fecha: '2024-12-13', descripcion: 'Cheque #00847 emitido', banco: 0, libro: -180000, estado: 'pendiente_banco' },
  { id: 6, fecha: '2024-12-12', descripcion: 'Pago nómina quincenal', banco: -2040000, libro: -2040000, estado: 'conciliado' },
  { id: 7, fecha: '2024-12-12', descripcion: 'Cobro factura F-2024-1198', banco: 680000, libro: 680000, estado: 'conciliado' },
]

const estadoBadge: Record<string, { label: string; cls: string }> = {
  conciliado: { label: 'Conciliado', cls: 'bg-tertiary/20 text-tertiary' },
  pendiente_libro: { label: 'Falta en Libro', cls: 'bg-yellow-500/20 text-yellow-400' },
  pendiente_banco: { label: 'Falta en Banco', cls: 'bg-orange-500/20 text-orange-400' },
}

const fmt = (n: number) => {
  if (n === 0) return '-'
  return `${n < 0 ? '-' : ''}$${Math.abs(n).toLocaleString('en-US')}`
}

export default function ConciliacionPage() {
  const [filter, setFilter] = useState<'todos' | 'conciliado' | 'pendiente'>('todos')

  const saldoBanco = 8450000
  const saldoLibro = 8297500
  const diferencia = saldoBanco - saldoLibro

  const filtered = movimientos.filter(m => {
    if (filter === 'conciliado') return m.estado === 'conciliado'
    if (filter === 'pendiente') return m.estado !== 'conciliado'
    return true
  })

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Conciliación Bancaria</h2>
            <p className="text-on-surface-variant mt-1">Banco Principal · Diciembre 2024</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5 text-sm text-on-surface-variant hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[18px]">upload_file</span>
              Importar Extracto
            </button>
            <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              Conciliar con IA
            </button>
          </div>
        </div>

        {/* Saldos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-xs text-outline uppercase tracking-widest font-bold mb-2">Saldo Banco</p>
            <p className="text-3xl font-headline font-bold text-on-surface">${saldoBanco.toLocaleString('en-US')}</p>
            <p className="text-xs text-outline mt-1">Extracto bancario al 15/12/2024</p>
          </div>
          <div className="glass-panel rounded-2xl p-6">
            <p className="text-xs text-outline uppercase tracking-widest font-bold mb-2">Saldo Libro</p>
            <p className="text-3xl font-headline font-bold text-on-surface">${saldoLibro.toLocaleString('en-US')}</p>
            <p className="text-xs text-outline mt-1">Según registros contables</p>
          </div>
          <div className={`glass-panel rounded-2xl p-6 border ${diferencia === 0 ? 'border-tertiary/30 bg-tertiary/5' : 'border-yellow-500/30 bg-yellow-500/5'}`}>
            <p className="text-xs text-outline uppercase tracking-widest font-bold mb-2">Diferencia</p>
            <p className={`text-3xl font-headline font-bold ${diferencia === 0 ? 'text-tertiary' : 'text-yellow-400'}`}>
              ${Math.abs(diferencia).toLocaleString('en-US')}
            </p>
            <p className="text-xs text-outline mt-1">{diferencia === 0 ? 'Conciliación perfecta' : `${movimientos.filter(m => m.estado !== 'conciliado').length} partidas pendientes`}</p>
          </div>
        </div>

        {/* AI Insight */}
        <div className="glass-panel rounded-2xl p-5 border border-primary/20 flex items-start gap-4">
          <span className="material-symbols-outlined text-primary text-2xl mt-0.5">psychology</span>
          <div>
            <p className="font-bold text-on-surface">Análisis IA</p>
            <p className="text-sm text-on-surface-variant mt-1">
              Se detectaron <span className="text-yellow-400 font-bold">3 partidas sin conciliar</span>: 1 transferencia recibida no registrada en libro ($320,000),
              1 comisión bancaria ($12,500) y 1 cheque emitido pendiente de cobro ($180,000).
              La diferencia neta es de <span className="text-yellow-400 font-bold">$152,500</span>.
            </p>
          </div>
        </div>

        {/* Filter + Table */}
        <div className="space-y-4">
          <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
            {(['todos', 'conciliado', 'pendiente'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${filter === f ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
                {f === 'todos' ? 'Todos' : f === 'conciliado' ? 'Conciliados' : 'Pendientes'}
              </button>
            ))}
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['Fecha', 'Descripción', 'Banco', 'Libro', 'Diferencia', 'Estado'].map(h => (
                    <th key={h} className="text-left px-6 py-4 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(m => {
                  const diff = m.banco - m.libro
                  return (
                    <tr key={m.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-outline text-xs">{m.fecha}</td>
                      <td className="px-6 py-4 text-on-surface">{m.descripcion}</td>
                      <td className={`px-6 py-4 font-mono font-bold ${m.banco < 0 ? 'text-error' : m.banco > 0 ? 'text-tertiary' : 'text-outline'}`}>{fmt(m.banco)}</td>
                      <td className={`px-6 py-4 font-mono font-bold ${m.libro < 0 ? 'text-error' : m.libro > 0 ? 'text-tertiary' : 'text-outline'}`}>{fmt(m.libro)}</td>
                      <td className={`px-6 py-4 font-mono font-bold ${diff !== 0 ? 'text-yellow-400' : 'text-outline'}`}>{diff !== 0 ? fmt(diff) : '—'}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${estadoBadge[m.estado].cls}`}>{estadoBadge[m.estado].label}</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
