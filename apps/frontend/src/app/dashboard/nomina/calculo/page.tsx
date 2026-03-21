'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

type Periodo = 'quincenal' | 'mensual'

const empleados = [
  { id: 'AA', nombre: 'Andrés Arreaza', cargo: 'Gerente de IT', salarioBase: 2200, color: 'bg-primary/20 text-primary' },
  { id: 'MC', nombre: 'Mariana Colmenares', cargo: 'Analista Senior', salarioBase: 1450, color: 'bg-tertiary/20 text-tertiary' },
  { id: 'JG', nombre: 'Jesús Guzmán', cargo: 'Diseñador UI/UX', salarioBase: 1800, color: 'bg-secondary/20 text-secondary' },
  { id: 'YG', nombre: 'Yolanda González', cargo: 'Contadora', salarioBase: 1650, color: 'bg-emerald-500/20 text-emerald-400' },
  { id: 'CM', nombre: 'Carlos Martínez', cargo: 'Supervisor Almacén', salarioBase: 980, color: 'bg-blue-500/20 text-blue-400' },
  { id: 'LP', nombre: 'Luisa Pérez', cargo: 'Cajera Senior', salarioBase: 750, color: 'bg-pink-500/20 text-pink-400' },
]

function calcularDeducciones(salario: number, periodo: Periodo) {
  const base = periodo === 'quincenal' ? salario / 2 : salario
  const ivss = base * 0.04
  const faov = base * 0.01
  const inces = base * 0.005
  const islr = base > 1000 ? (base - 1000) * 0.06 : 0
  const totalDed = ivss + faov + inces + islr
  const neto = base - totalDed
  return { base, ivss, faov, inces, islr, totalDed, neto }
}

export default function CalculoNominaPage() {
  const [periodo, setPeriodo] = useState<Periodo>('quincenal')
  const [procesando, setProcesando] = useState(false)
  const [procesado, setProcesado] = useState(false)

  const filas = empleados.map((e) => ({ ...e, ...calcularDeducciones(e.salarioBase, periodo) }))
  const totalBruto = filas.reduce((acc, f) => acc + f.base, 0)
  const totalDeducciones = filas.reduce((acc, f) => acc + f.totalDed, 0)
  const totalNeto = filas.reduce((acc, f) => acc + f.neto, 0)

  const handleProcesar = () => {
    setProcesando(true)
    setTimeout(() => {
      setProcesando(false)
      setProcesado(true)
    }, 1800)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Cálculo de Nómina" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold text-on-surface font-headline tracking-tight">Cálculo de Nómina</h2>
            <p className="text-on-surface-variant mt-1">Deducciones LOTTT — IVSS, FAOV, INCES, ISLR</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Selector de período */}
            <div className="flex items-center bg-surface-container-highest rounded-xl p-1 gap-1">
              {(['quincenal', 'mensual'] as Periodo[]).map((p) => (
                <button
                  key={p}
                  onClick={() => { setPeriodo(p); setProcesado(false) }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                    periodo === p
                      ? 'bg-primary text-on-primary shadow-lg shadow-primary/20'
                      : 'text-on-surface/60 hover:text-on-surface'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <Button onClick={handleProcesar} disabled={procesando || procesado}>
              {procesando ? (
                <><span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>Procesando...</>
              ) : procesado ? (
                <><span className="material-symbols-outlined text-[18px]">check_circle</span>Procesada</>
              ) : (
                <><span className="material-symbols-outlined text-[18px]">calculate</span>Procesar Nómina</>
              )}
            </Button>
          </div>
        </div>

        {/* Indicador de ciclo */}
        <GlassCard className="p-6 border-l-4 border-primary">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-spartan uppercase tracking-widest text-outline">Ciclo Actual</p>
              <p className="text-lg font-bold text-on-surface mt-0.5">
                {periodo === 'quincenal' ? '01 Nov — 15 Nov 2025' : 'Noviembre 2025'}
              </p>
            </div>
            <Badge variant={procesado ? 'success' : 'warning'}>
              {procesado ? 'Procesada' : 'Pendiente'}
            </Badge>
          </div>
          <div className="flex justify-between text-sm font-medium text-on-surface mb-1">
            <span>Progreso del ciclo</span>
            <span>{procesado ? '100%' : '85%'}</span>
          </div>
          <div className="w-full bg-primary/10 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(192,193,255,0.4)]"
              style={{ width: procesado ? '100%' : '85%' }}
            />
          </div>
          <p className="text-xs text-outline mt-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Incidencias procesadas automáticamente
          </p>
        </GlassCard>

        {/* Tabla */}
        <GlassCard className="overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-lg font-bold text-on-surface font-headline">
              Detalle de Nómina — {periodo === 'quincenal' ? 'Quincenal' : 'Mensual'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-white/5">
                  {['Empleado', 'Salario Base', 'IVSS (4%)', 'FAOV (1%)', 'INCES (0.5%)', 'ISLR', 'Total Ded.', 'Neto a Pagar'].map((h) => (
                    <th key={h} className="px-5 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filas.map((f) => (
                  <tr key={f.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${f.color}`}>{f.id}</div>
                        <div>
                          <p className="font-medium text-on-surface">{f.nombre}</p>
                          <p className="text-xs text-outline">{f.cargo}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 font-bold text-on-surface">${f.base.toFixed(2)}</td>
                    <td className="px-5 py-4 text-error/80">${f.ivss.toFixed(2)}</td>
                    <td className="px-5 py-4 text-error/80">${f.faov.toFixed(2)}</td>
                    <td className="px-5 py-4 text-error/80">${f.inces.toFixed(2)}</td>
                    <td className="px-5 py-4 text-error/80">${f.islr.toFixed(2)}</td>
                    <td className="px-5 py-4 text-error font-semibold">${f.totalDed.toFixed(2)}</td>
                    <td className="px-5 py-4 font-headline font-bold text-primary text-base">${f.neto.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-surface-container-highest/50 border-t-2 border-primary/20">
                  <td className="px-5 py-4 font-bold text-on-surface uppercase text-xs tracking-widest font-spartan">Totales</td>
                  <td className="px-5 py-4 font-bold text-on-surface">${totalBruto.toFixed(2)}</td>
                  <td colSpan={4} />
                  <td className="px-5 py-4 font-bold text-error">${totalDeducciones.toFixed(2)}</td>
                  <td className="px-5 py-4 font-headline font-bold text-primary text-lg">${totalNeto.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
