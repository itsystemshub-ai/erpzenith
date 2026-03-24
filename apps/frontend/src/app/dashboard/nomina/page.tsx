'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Empleado {
  id: string
  nombre: string
  empId: string
  cargo: string
  salario: string
  ingreso: string
  prestaciones: string
  color: string
}

interface Deduccion {
  label: string
  valor: string
}
const empleados = [
  { id: 'AA', nombre: 'Andrés Arreaza', empId: '10293', cargo: 'Gerente de IT', salario: '$2,200.00', ingreso: '15/05/2021', prestaciones: '$4,850.20', color: 'bg-primary/20 text-primary' },
  { id: 'MC', nombre: 'Mariana Colmenares', empId: '10294', cargo: 'Analista Senior', salario: '$1,450.00', ingreso: '10/01/2022', prestaciones: '$2,120.15', color: 'bg-tertiary/20 text-tertiary' },
  { id: 'JG', nombre: 'Jesús Guzmán', empId: '10298', cargo: 'Diseñador UI/UX', salario: '$1,800.00', ingreso: '22/03/2022', prestaciones: '$2,640.00', color: 'bg-secondary/20 text-secondary' },
]

const deducciones = [
  { label: 'IVSS', valor: '$498.00' },
  { label: 'FAOV', valor: '$124.50' },
  { label: 'INCES', valor: '$249.00' },
  { label: 'ISLR', valor: '$871.50' },
]

export default function NominaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Nómina LOTTT" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tighter">Nómina (RRHH)</h2>
            <p className="text-on-surface-variant mt-2 font-spartan text-lg">Gestión estratégica de capital humano y cumplimiento LOTTT.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <span className="material-symbols-outlined text-error text-[18px]">picture_as_pdf</span>
              Exportar PDF
            </Button>
            <Button>
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              Calcular Período Actual
            </Button>
          </div>
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <GlassCard className="p-6 relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all" />
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Total Nómina Bruta</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-headline font-bold text-on-surface">$12,450.00</span>
              <span className="text-tertiary text-xs font-medium">↑ 4.2%</span>
            </div>
            <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full primary-gradient w-3/4" />
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-2 p-6 border-l-4 border-tertiary">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-4">Desglose de Deducciones de Ley</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {deducciones.map((d) => (
                <div key={d.label}>
                  <p className="text-[10px] text-outline font-bold uppercase">{d.label}</p>
                  <p className="text-xl font-headline text-on-surface">{d.valor}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-surface-container-highest/30">
            <p className="text-xs font-spartan uppercase tracking-widest text-outline mb-2">Pago Neto Total</p>
            <p className="text-3xl font-headline font-bold text-tertiary">$10,707.00</p>
            <p className="text-[10px] text-outline mt-2 italic">Fecha de pago: 30 Oct 2023</p>
          </GlassCard>
        </div>

        {/* Tabla de Personal */}
        <GlassCard className="overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-lg font-headline font-semibold text-on-surface">Listado de Personal</h3>
            <div className="flex items-center gap-2 text-xs text-outline">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>12 Empleados Activos</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-low/50">
                  {['Nombre', 'Cargo', 'Salario Base', 'Fecha Ingreso', 'LOTTT Prestaciones', 'Acción'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {empleados.map((emp) => (
                  <tr key={emp.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${emp.color}`}>
                          {emp.id}
                        </div>
                        <div>
                          <p className="font-medium text-on-surface">{emp.nombre}</p>
                          <p className="text-xs text-outline">ID: {emp.empId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant font-spartan text-sm">{emp.cargo}</td>
                    <td className="px-6 py-4 font-headline text-on-surface">{emp.salario}</td>
                    <td className="px-6 py-4 text-sm text-outline">{emp.ingreso}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-headline text-primary">{emp.prestaciones}</span>
                        <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg transition-all text-outline group-hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-container-low/30 border-t border-white/5 flex justify-center">
            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:text-primary/80 transition-colors">
              Ver todos los empleados
            </button>
          </div>
        </GlassCard>

        {/* LOTTT & Pasivos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-primary/20 text-6xl">gavel</span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-4 text-on-surface">Cumplimiento LOTTT</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              El sistema ZENITH realiza el cálculo automático de prestaciones sociales basado en el artículo 142 literal a, b y c, asegurando el depósito trimestral de 15 días de salario integral.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-outline font-bold uppercase">Estado Auditoría</span>
                <span className="text-emerald-400 font-bold">Cumplimiento 100%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-outline font-bold uppercase">Próximo Depósito</span>
                <span className="text-on-surface font-medium">15 Ene 2024</span>
              </div>
            </div>
          </GlassCard>

          <div className="bg-primary/10 border border-primary/20 p-8 rounded-2xl backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-headline font-bold mb-2 text-on-surface">Resumen de Pasivos</h4>
              <p className="text-on-surface-variant text-sm">Proyección total de liquidaciones acumuladas a la fecha.</p>
            </div>
            <div className="mt-8">
              <div className="text-4xl font-headline font-bold text-primary">$42,890.45</div>
              <p className="text-[10px] text-primary/70 font-spartan uppercase tracking-[0.2em] mt-1">Estimado Global de Prestaciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
