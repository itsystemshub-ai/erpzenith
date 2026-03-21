'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface Cliente {
  id: string
  rif: string
  nombre: string
  telefono: string
  email: string
  ciudad: string
  facturasEmitidas: number
  saldoPendienteVES: number
  estado: 'Activo' | 'Inactivo'
}

const BCV = 46.82

const MOCK_CLIENTES: Cliente[] = [
  {
    id: '1', rif: 'J-30495822-1', nombre: 'Inversiones Globales C.A.',
    telefono: '+58 212-555-0101', email: 'admin@invglobales.com.ve',
    ciudad: 'Caracas', facturasEmitidas: 24, saldoPendienteVES: 0, estado: 'Activo',
  },
  {
    id: '2', rif: 'J-29384756-3', nombre: 'Soluciones Tech Andina C.A.',
    telefono: '+58 241-555-0202', email: 'compras@techAndina.com.ve',
    ciudad: 'Valencia', facturasEmitidas: 12, saldoPendienteVES: 57_340, estado: 'Activo',
  },
  {
    id: '3', rif: 'J-00012345-6', nombre: 'Alimentos Polar S.A.',
    telefono: '+58 212-555-0303', email: 'proveedores@polar.com.ve',
    ciudad: 'Caracas', facturasEmitidas: 38, saldoPendienteVES: 0, estado: 'Activo',
  },
  {
    id: '4', rif: 'J-40192837-5', nombre: 'Distribuidora Norte C.A.',
    telefono: '+58 261-555-0404', email: 'info@distnorte.com.ve',
    ciudad: 'Maracaibo', facturasEmitidas: 7, saldoPendienteVES: 155_000, estado: 'Activo',
  },
  {
    id: '5', rif: 'J-31827465-2', nombre: 'Constructora Orinoco S.A.',
    telefono: '+58 286-555-0505', email: 'admin@conorinoco.com.ve',
    ciudad: 'Puerto Ordaz', facturasEmitidas: 15, saldoPendienteVES: 0, estado: 'Activo',
  },
  {
    id: '6', rif: 'J-19283746-4', nombre: 'Ferretería Industrial Caracas',
    telefono: '+58 212-555-0606', email: 'ventas@ferrindustrial.com.ve',
    ciudad: 'Caracas', facturasEmitidas: 5, saldoPendienteVES: 0, estado: 'Inactivo',
  },
  {
    id: '7', rif: 'J-28374651-7', nombre: 'Clínica Santa María C.A.',
    telefono: '+58 212-555-0707', email: 'administracion@clinicasm.com.ve',
    ciudad: 'Caracas', facturasEmitidas: 9, saldoPendienteVES: 78_200, estado: 'Activo',
  },
]

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo'>('Todos')

  const filtered = MOCK_CLIENTES.filter((c) => {
    const matchBusqueda =
      c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.rif.toLowerCase().includes(busqueda.toLowerCase()) ||
      c.ciudad.toLowerCase().includes(busqueda.toLowerCase())
    const matchEstado = filtroEstado === 'Todos' || c.estado === filtroEstado
    return matchBusqueda && matchEstado
  })

  const totalClientes = MOCK_CLIENTES.filter((c) => c.estado === 'Activo').length
  const totalSaldo = MOCK_CLIENTES.reduce((acc, c) => acc + c.saldoPendienteVES, 0)
  const conSaldo = MOCK_CLIENTES.filter((c) => c.saldoPendienteVES > 0).length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Clientes" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Directorio de Clientes</h2>
            <p className="text-on-surface-variant mt-1 text-sm">{totalClientes} clientes activos registrados.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Nuevo Cliente
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="p-6 border-l-4 border-primary">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Clientes Activos</p>
            <h3 className="text-3xl font-headline font-bold text-primary">{totalClientes}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">groups</span>
              En base de datos
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-amber-400">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Saldo Pendiente Total</p>
            <h3 className="text-2xl font-headline font-bold text-amber-400">
              {totalSaldo.toLocaleString('es-VE')} Bs.
            </h3>
            <p className="text-xs text-outline mt-2">
              ≈ ${(totalSaldo / BCV).toFixed(2)} USD
            </p>
          </GlassCard>

          <GlassCard className="p-6 border-l-4 border-error">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline mb-3">Con Saldo Pendiente</p>
            <h3 className="text-3xl font-headline font-bold text-error">{conSaldo}</h3>
            <p className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">warning</span>
              Clientes con deuda activa
            </p>
          </GlassCard>
        </div>

        {/* Filtros y tabla */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-2">
              {(['Todos', 'Activo', 'Inactivo'] as const).map((e) => (
                <button
                  key={e}
                  onClick={() => setFiltroEstado(e)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                    filtroEstado === e
                      ? 'bg-primary/20 text-primary border border-primary/30'
                      : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  placeholder="Buscar por nombre, RIF o ciudad..."
                  className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-72 focus:ring-2 focus:ring-primary/40 text-on-surface"
                />
              </div>
              <Button variant="secondary" size="sm">
                <span className="material-symbols-outlined text-[16px]">download</span>
                Exportar
              </Button>
            </div>
          </div>

          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  <th className="px-6 py-5">Cliente</th>
                  <th className="px-6 py-5">RIF</th>
                  <th className="px-6 py-5">Teléfono</th>
                  <th className="px-6 py-5">Ciudad</th>
                  <th className="px-6 py-5 text-right">Facturas</th>
                  <th className="px-6 py-5 text-right">Saldo Pendiente</th>
                  <th className="px-6 py-5">Estado</th>
                  <th className="px-6 py-5 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-white/5 transition-colors cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-surface-container-highest flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[18px]">business</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-on-surface">{c.nombre}</p>
                          <p className="text-[10px] text-outline">{c.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs font-mono text-outline">{c.rif}</td>
                    <td className="px-6 py-4 text-sm text-on-surface">{c.telefono}</td>
                    <td className="px-6 py-4 text-sm text-outline">{c.ciudad}</td>
                    <td className="px-6 py-4 text-right font-bold text-on-surface">{c.facturasEmitidas}</td>
                    <td className="px-6 py-4 text-right">
                      {c.saldoPendienteVES > 0 ? (
                        <div>
                          <p className="text-sm font-bold text-amber-400">
                            {c.saldoPendienteVES.toLocaleString('es-VE')} Bs.
                          </p>
                          <p className="text-[10px] text-outline">
                            ≈ ${(c.saldoPendienteVES / BCV).toFixed(2)} USD
                          </p>
                        </div>
                      ) : (
                        <span className="text-xs text-emerald-400 font-bold">Al día</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={c.estado === 'Activo' ? 'success' : 'error'}>{c.estado}</Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[16px]">receipt_long</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-16 text-center text-outline text-sm">
                No se encontraron clientes con los filtros aplicados.
              </div>
            )}
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
