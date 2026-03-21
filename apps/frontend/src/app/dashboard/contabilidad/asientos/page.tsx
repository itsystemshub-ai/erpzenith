'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const asientos = [
  {
    id: 'AST-2024-0847',
    fecha: '2024-12-15',
    descripcion: 'Venta de mercancía al contado - Factura F-2024-1205',
    tipo: 'Venta',
    estado: 'Validado',
    usuario: 'Carlos M.',
    lineas: [
      { cuenta: '1.1.1.01', nombre: 'Caja Principal', debe: 1250000, haber: 0 },
      { cuenta: '4.1.1.01', nombre: 'Ventas de Mercancía', debe: 0, haber: 1063830 },
      { cuenta: '2.1.5.01', nombre: 'IVA por Pagar (16%)', debe: 0, haber: 186170 },
    ],
  },
  {
    id: 'AST-2024-0846',
    fecha: '2024-12-15',
    descripcion: 'Pago a proveedor Distribuidora ABC - OC-2024-0312',
    tipo: 'Compra',
    estado: 'Validado',
    usuario: 'María G.',
    lineas: [
      { cuenta: '2.1.1.01', nombre: 'Cuentas por Pagar', debe: 850000, haber: 0 },
      { cuenta: '1.1.1.01', nombre: 'Caja Principal', debe: 0, haber: 850000 },
    ],
  },
  {
    id: 'AST-2024-0845',
    fecha: '2024-12-14',
    descripcion: 'Nómina quincenal - Período 01-15 Dic 2024',
    tipo: 'Nómina',
    estado: 'Validado',
    usuario: 'Sistema',
    lineas: [
      { cuenta: '5.1.1.01', nombre: 'Sueldos y Salarios', debe: 2400000, haber: 0 },
      { cuenta: '2.1.3.01', nombre: 'Retenciones ISLR', debe: 0, haber: 240000 },
      { cuenta: '2.1.3.02', nombre: 'Seguro Social', debe: 0, haber: 120000 },
      { cuenta: '1.1.1.01', nombre: 'Caja Principal', debe: 0, haber: 2040000 },
    ],
  },
  {
    id: 'AST-2024-0844',
    fecha: '2024-12-14',
    descripcion: 'Ajuste de inventario por diferencia de conteo',
    tipo: 'Ajuste',
    estado: 'Pendiente',
    usuario: 'Pedro R.',
    lineas: [
      { cuenta: '5.2.1.05', nombre: 'Pérdida por Ajuste Inventario', debe: 45000, haber: 0 },
      { cuenta: '1.1.3.01', nombre: 'Inventario de Mercancías', debe: 0, haber: 45000 },
    ],
  },
]

const tipoBadge: Record<string, string> = {
  Venta: 'bg-tertiary/20 text-tertiary',
  Compra: 'bg-primary/20 text-primary',
  Nómina: 'bg-secondary/20 text-secondary',
  Ajuste: 'bg-orange-500/20 text-orange-400',
}

const estadoBadge: Record<string, string> = {
  Validado: 'bg-tertiary/20 text-tertiary',
  Pendiente: 'bg-yellow-500/20 text-yellow-400',
}

const fmt = (n: number) => n > 0 ? `$${n.toLocaleString('en-US')}` : '-'

export default function AsientosPage() {
  const [selected, setSelected] = useState<typeof asientos[0]>(asientos[0])
  const [search, setSearch] = useState('')

  const filtered = asientos.filter(a =>
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.descripcion.toLowerCase().includes(search.toLowerCase())
  )

  const totalDebe = selected.lineas.reduce((s, l) => s + l.debe, 0)
  const totalHaber = selected.lineas.reduce((s, l) => s + l.haber, 0)
  const balanceado = totalDebe === totalHaber

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Contabilidad" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Libro Diario — Asientos</h2>
            <p className="text-on-surface-variant mt-1">Trazabilidad completa de movimientos contables</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nuevo Asiento
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* List */}
          <div className="lg:col-span-2 space-y-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Buscar asiento..."
                className="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none"
              />
            </div>
            {filtered.map(a => (
              <div key={a.id}
                onClick={() => setSelected(a)}
                className={`glass-panel rounded-2xl p-4 cursor-pointer transition-all hover:bg-white/5 ${selected.id === a.id ? 'border border-primary/40' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-mono text-outline">{a.id}</span>
                  <div className="flex gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${tipoBadge[a.tipo]}`}>{a.tipo}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${estadoBadge[a.estado]}`}>{a.estado}</span>
                  </div>
                </div>
                <p className="text-sm text-on-surface font-medium line-clamp-2">{a.descripcion}</p>
                <div className="flex items-center gap-3 mt-2 text-xs text-outline">
                  <span>{a.fecha}</span>
                  <span>·</span>
                  <span>{a.usuario}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detail */}
          <div className="lg:col-span-3 space-y-5">
            <div className="glass-panel rounded-2xl p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-mono text-outline">{selected.id}</p>
                  <h3 className="font-headline font-bold text-on-surface text-lg mt-1">{selected.descripcion}</h3>
                  <div className="flex items-center gap-3 mt-2 text-xs text-outline">
                    <span>{selected.fecha}</span>
                    <span>·</span>
                    <span>Por: {selected.usuario}</span>
                  </div>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full font-bold ${estadoBadge[selected.estado]}`}>{selected.estado}</span>
              </div>

              {/* Lines table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-xs text-outline font-bold uppercase tracking-wide">Cuenta</th>
                      <th className="text-left py-2 text-xs text-outline font-bold uppercase tracking-wide">Nombre</th>
                      <th className="text-right py-2 text-xs text-outline font-bold uppercase tracking-wide">Debe</th>
                      <th className="text-right py-2 text-xs text-outline font-bold uppercase tracking-wide">Haber</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {selected.lineas.map((l, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 font-mono text-xs text-outline">{l.cuenta}</td>
                        <td className="py-2.5 text-on-surface-variant">{l.nombre}</td>
                        <td className="py-2.5 text-right font-mono text-on-surface">{fmt(l.debe)}</td>
                        <td className="py-2.5 text-right font-mono text-on-surface">{fmt(l.haber)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t border-white/10">
                      <td colSpan={2} className="py-2.5 font-bold text-on-surface text-xs uppercase">Totales</td>
                      <td className="py-2.5 text-right font-bold font-mono text-on-surface">{fmt(totalDebe)}</td>
                      <td className="py-2.5 text-right font-bold font-mono text-on-surface">{fmt(totalHaber)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className={`flex items-center gap-2 p-3 rounded-xl text-sm font-bold ${balanceado ? 'bg-tertiary/10 text-tertiary' : 'bg-error/10 text-error'}`}>
                <span className="material-symbols-outlined text-[18px]">{balanceado ? 'check_circle' : 'error'}</span>
                {balanceado ? 'Asiento balanceado — Debe = Haber' : 'Asiento desbalanceado'}
              </div>
            </div>

            {/* AI Trazabilidad */}
            <div className="glass-panel rounded-2xl p-5 border border-primary/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary">psychology</span>
                <h4 className="font-bold text-on-surface">Trazabilidad IA</h4>
              </div>
              <p className="text-sm text-on-surface-variant">
                Este asiento fue generado automáticamente a partir de la factura <span className="text-primary font-bold">F-2024-1205</span>.
                El IVA calculado corresponde al 16% sobre la base imponible. No se detectaron anomalías contables.
              </p>
              <div className="flex gap-3 mt-4">
                <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">Ver documento origen</button>
                <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">Historial de cambios</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
