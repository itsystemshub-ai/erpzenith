'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface Proveedor {
  id: string
  rif: string
  nombre: string
  categoria: string
  contacto: string
  telefono: string
  email: string
  rating: number
  terminosCredito: string
  estado: 'Activo' | 'Inactivo'
}

const MOCK_PROVEEDORES: Proveedor[] = [
  {
    id: '1', rif: 'J-30495822-1', nombre: 'TechSolutions C.A.', categoria: 'Tecnología',
    contacto: 'Ing. Roberto Salazar', telefono: '+58 212-555-0101', email: 'ventas@techsolutions.com.ve',
    rating: 5, terminosCredito: '30 días', estado: 'Activo',
  },
  {
    id: '2', rif: 'J-29384756-3', nombre: 'Distribuidora Electrónica del Centro', categoria: 'Electrónica',
    contacto: 'Lcda. María Pérez', telefono: '+58 241-555-0202', email: 'compras@distrelec.com.ve',
    rating: 4, terminosCredito: '15 días', estado: 'Activo',
  },
  {
    id: '3', rif: 'J-12345678-9', nombre: 'Papelería El Norte C.A.', categoria: 'Papelería',
    contacto: 'Sr. José Ramírez', telefono: '+58 251-555-0303', email: 'info@papelerianorte.com.ve',
    rating: 3, terminosCredito: 'Contado', estado: 'Activo',
  },
  {
    id: '4', rif: 'J-40192837-5', nombre: 'Energía Total Corp.', categoria: 'Energía',
    contacto: 'Ing. Ana Castillo', telefono: '+58 212-555-0404', email: 'proveedores@energiatotal.com.ve',
    rating: 5, terminosCredito: '45 días', estado: 'Activo',
  },
  {
    id: '5', rif: 'J-31827465-2', nombre: 'Suministros Industriales Bolívar', categoria: 'Industrial',
    contacto: 'Sr. Carlos Herrera', telefono: '+58 286-555-0505', email: 'ventas@suministrosbolivar.com.ve',
    rating: 4, terminosCredito: '30 días', estado: 'Activo',
  },
  {
    id: '6', rif: 'J-28374651-7', nombre: 'Global Logistics S.A.', categoria: 'Logística',
    contacto: 'Lcda. Patricia Mora', telefono: '+58 212-555-0606', email: 'ops@globallogistics.com.ve',
    rating: 2, terminosCredito: 'Contado', estado: 'Inactivo',
  },
]

const CATEGORIAS = ['Todas', 'Tecnología', 'Electrónica', 'Papelería', 'Energía', 'Industrial', 'Logística']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className="material-symbols-outlined text-[14px]"
          style={{
            fontVariationSettings: s <= rating ? "'FILL' 1" : "'FILL' 0",
            color: s <= rating ? '#fbbf24' : '#464554',
          }}
        >
          star
        </span>
      ))}
    </div>
  )
}

export default function ProveedoresPage() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtered = MOCK_PROVEEDORES.filter((p) => {
    const matchBusqueda =
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.rif.toLowerCase().includes(busqueda.toLowerCase())
    const matchCat = categoria === 'Todas' || p.categoria === categoria
    return matchBusqueda && matchCat
  })

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Directorio de Proveedores" />
      <div className="flex-1 p-8 space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Directorio de Proveedores</h2>
            <p className="text-on-surface-variant mt-1 text-sm">{MOCK_PROVEEDORES.filter(p => p.estado === 'Activo').length} proveedores activos registrados.</p>
          </div>
          <Button>
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Nuevo Proveedor
          </Button>
        </div>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-spartan font-bold uppercase tracking-widest transition-all ${
                  categoria === cat
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'bg-surface-container-low text-outline hover:bg-surface-container border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative ml-auto">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
            <input
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre o RIF..."
              className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-72 focus:ring-2 focus:ring-primary/40 text-on-surface"
            />
          </div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <GlassCard key={p.id} className="p-6 hover:border-primary/20 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-primary text-[24px]">business</span>
                </div>
                <Badge variant={p.estado === 'Activo' ? 'success' : 'error'}>{p.estado}</Badge>
              </div>

              <h3 className="font-headline font-bold text-on-surface text-base leading-tight">{p.nombre}</h3>
              <p className="text-[10px] text-outline uppercase tracking-widest mt-1">RIF: {p.rif}</p>

              <div className="mt-3 flex items-center gap-2">
                <Badge variant="info">{p.categoria}</Badge>
                <StarRating rating={p.rating} />
              </div>

              <div className="mt-4 space-y-2 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2 text-xs text-outline">
                  <span className="material-symbols-outlined text-[14px]">person</span>
                  {p.contacto}
                </div>
                <div className="flex items-center gap-2 text-xs text-outline">
                  <span className="material-symbols-outlined text-[14px]">phone</span>
                  {p.telefono}
                </div>
                <div className="flex items-center gap-2 text-xs text-outline">
                  <span className="material-symbols-outlined text-[14px]">mail</span>
                  {p.email}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="bg-surface-container-highest px-3 py-1.5 rounded-xl">
                  <p className="text-[10px] text-outline">Crédito</p>
                  <p className="text-xs font-bold text-primary">{p.terminosCredito}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[16px]">edit</span>
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-outline text-sm">
            No se encontraron proveedores con los filtros aplicados.
          </div>
        )}
      </div>
    </div>
  )
}
