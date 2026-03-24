'use client'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useInventarioStore } from '@/stores/inventarioStore'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'
import { useEffect, useMemo } from 'react'

type StockStatus = 'critical' | 'low' | 'normal'

interface Producto {
  id: string; nombre: string; categoria: string; sku: string; lote: string
  almacen: string; stockActual: number; stockMinimo: number; vencimiento?: string
  valoracion: number; metodo: string; estado: StockStatus
}

const MOCK_PRODUCTOS: Producto[] = [
  { id: '1', nombre: 'Hyperion Sensor V2', categoria: 'Óptica & Precisión', sku: 'SKU-8829-X', lote: 'B2024-001', almacen: 'Almacén Principal', stockActual: 12, stockMinimo: 20, vencimiento: '12/10/2026', valoracion: 4280, metodo: 'PEPS', estado: 'critical' },
  { id: '2', nombre: 'Zenith Control Unit', categoria: 'Procesadores', sku: 'SKU-1102-P', lote: 'C2024-042', almacen: 'Hub Norte', stockActual: 452, stockMinimo: 50, vencimiento: '05/02/2028', valoracion: 12850, metodo: 'PEPS', estado: 'normal' },
  { id: '3', nombre: 'Titanium Flex Cable', categoria: 'Cables & Cableado', sku: 'SKU-4401-T', lote: 'T2023-991', almacen: 'Sucursal Sur', stockActual: 84, stockMinimo: 100, vencimiento: undefined, valoracion: 1450, metodo: 'PEPS', estado: 'low' },
]

const almacenes = [
  { nombre: 'Almacén Principal', capacidad: 84, color: 'bg-primary', borderColor: 'border-primary', textColor: 'text-primary', icon: 'warehouse' },
  { nombre: 'Hub Norte', capacidad: 32, color: 'bg-tertiary', borderColor: 'border-tertiary', textColor: 'text-tertiary', icon: 'location_on' },
  { nombre: 'Sucursal Sur', capacidad: 59, color: 'bg-secondary', borderColor: 'border-secondary', textColor: 'text-secondary', icon: 'store' },
]

const estadoConfig: Record<StockStatus, { label: string; variant: 'error' | 'warning' | 'success'; dot: string }> = {
  critical: { label: 'Crítico', variant: 'error', dot: 'bg-error animate-pulse' },
  low: { label: 'Bajo', variant: 'warning', dot: 'bg-amber-400' },
  normal: { label: 'Normal', variant: 'success', dot: 'bg-emerald-500' },
}

// Fuera del componente para evitar recreación en cada render
function normalizar(raw: any[]): Producto[] {
  return raw.map(p => {
    const stockActual = p.stockActual ?? p.stocks?.reduce((s: number, st: any) => s + (st.cantidad ?? 0), 0) ?? 0
    const stockMinimo = p.stockMinimo ?? p.stockMin ?? 0
    let estado: StockStatus = 'normal'
    if (stockActual === 0 || stockActual < stockMinimo * 0.5) estado = 'critical'
    else if (stockActual < stockMinimo) estado = 'low'
    return {
      id: p.id,
      nombre: p.nombre,
      categoria: p.categoria ?? '—',
      sku: p.sku,
      lote: p.lote ?? '—',
      almacen: p.almacen ?? p.stocks?.[0]?.almacen?.nombre ?? '—',
      stockActual,
      stockMinimo,
      vencimiento: p.vencimiento,
      valoracion: p.valoracion ?? (p.precioUSD ? parseFloat(p.precioUSD) * stockActual : 0),
      metodo: p.metodo ?? 'PEPS',
      estado,
    }
  })
}

export default function InventarioPage() {
  const { filtros, setFiltro, checkStockBajo } = useInventarioStore()

  // Intentar cargar desde backend; si falla, usa mock
  const { data: productosData } = useErpQuery<any[]>(
    QK.inventario.productos(),
    '/inventario/productos',
    { retry: false }
  )

  // Normalizar con useMemo para evitar nuevo array en cada render
  const productos = useMemo(
    () => productosData ? normalizar(productosData) : MOCK_PRODUCTOS,
    [productosData]
  )

  // Detectar stock bajo — depende de productosData (referencia estable de react-query)
  useEffect(() => {
    if (productos.length === 0) return
    checkStockBajo(productos.map(p => ({
      id: p.id,
      nombre: p.nombre,
      sku: p.sku,
      stock: p.stockActual,
      stockMinimo: p.stockMinimo,
      precio: p.valoracion,
    })))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productosData])

  const filtered = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtros.search.toLowerCase()) ||
    p.sku.toLowerCase().includes(filtros.search.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Inventario" />
      <div className="flex-1 p-8 space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <GlassCard glow className="p-8 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
            <p className="text-[0.625rem] font-spartan uppercase tracking-[0.2em] text-primary mb-2">Valor Total Inventario</p>
            <h3 className="text-4xl font-headline font-bold text-on-surface tracking-tighter">1,248.4k</h3>
            <p className="text-xs text-tertiary mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>+12.4% vs mes anterior
            </p>
          </GlassCard>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {almacenes.map((a) => (
              <div key={a.nombre} className={`bg-surface-container-low rounded-2xl p-6 border-l-2 ${a.borderColor}`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[0.6875rem] font-spartan uppercase tracking-widest text-outline">{a.nombre}</span>
                  <span className={`material-symbols-outlined text-xl ${a.textColor}`}>{a.icon}</span>
                </div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-headline font-semibold text-on-surface">{a.capacidad}%</span>
                  <span className="text-[0.625rem] text-outline mb-1">Capacidad</span>
                </div>
                <div className="w-full bg-surface-container-highest h-1 rounded-full mt-4">
                  <div className={`${a.color} h-full rounded-full`} style={{ width: `${a.capacidad}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h4 className="text-xl font-spartan font-bold text-on-surface">Matriz de Control de Stock</h4>
              <p className="text-sm text-outline">Valuación PEPS · Trazabilidad por Lotes Activa</p>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
                <input
                  value={filtros.search}
                  onChange={(e) => setFiltro('search', e.target.value)}
                  placeholder="Buscar por SKU o nombre..."
                  className="bg-surface-container-highest border-none rounded-xl pl-10 pr-4 py-2.5 text-xs w-64 focus:ring-2 focus:ring-primary/40 text-on-surface"
                />
              </div>
              <Button variant="secondary" size="sm">
                <span className="material-symbols-outlined text-[16px]">filter_list</span>Filtrar
              </Button>
              <Button size="sm">
                <span className="material-symbols-outlined text-[16px]">add</span>Nuevo Producto
              </Button>
            </div>
          </div>
          <GlassCard glow className="overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5 border-b border-white/5 font-spartan text-[0.625rem] uppercase tracking-[0.2em] text-outline">
                  {['Producto', 'SKU / Lote', 'Ubicación', 'Estado Stock', 'Vencimiento', 'Valoración', 'Acciones'].map((h) => (
                    <th key={h} className={`px-6 py-5 ${h === 'Valoración' || h === 'Acciones' ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((p) => {
                  const cfg = estadoConfig[p.estado] ?? estadoConfig['normal']
                  return (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-105 transition-transform border border-white/10">
                            <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-on-surface font-spartan">{p.nombre}</p>
                            <p className="text-[0.625rem] text-outline uppercase tracking-tighter">{p.categoria}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs text-on-surface font-mono">{p.sku}</p>
                        <p className="text-[10px] text-outline mt-1">LOT: {p.lote}</p>
                      </td>
                      <td className="px-6 py-5"><Badge variant="info">{p.almacen}</Badge></td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${cfg.dot}`} />
                          <div>
                            <Badge variant={cfg.variant}>{cfg.label}</Badge>
                            <p className="text-[10px] text-outline mt-0.5">{p.stockActual} unidades</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-xs text-outline font-mono">{p.vencimiento ?? '--/--/----'}</span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <p className="text-sm font-semibold text-on-surface">$ {p.valoracion.toLocaleString()}</p>
                        <p className="text-[10px] text-outline">{p.metodo}</p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        {p.estado !== 'normal' ? (
                          <Button size="sm" className="text-[10px] bg-gradient-to-r from-tertiary to-tertiary-container text-on-tertiary">
                            Smart Reorder <span className="text-[8px] opacity-70 ml-1">IA GROQ</span>
                          </Button>
                        ) : (
                          <Button variant="secondary" size="sm" className="text-[10px]">Ver Detalle</Button>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </GlassCard>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-spartan font-bold text-on-surface">Movimientos Recientes</h4>
              <button className="text-[0.625rem] text-primary font-spartan font-bold uppercase tracking-widest">Ver Historial</button>
            </div>
            <div className="space-y-3">
              {[
                { icon: 'south_west', color: 'text-emerald-500 bg-emerald-500/10', title: 'Entrada: Hyperion Sensor', sub: 'Almacén Principal · Lote #B2024-001', qty: '+250 unidades', qtyColor: 'text-emerald-500', time: 'Hace 24 min' },
                { icon: 'north_east', color: 'text-error bg-error/10', title: 'Salida: Control Processor', sub: 'Hub Norte · Orden #88210', qty: '-12 unidades', qtyColor: 'text-error', time: 'Hace 1 hora' },
                { icon: 'swap_horiz', color: 'text-primary bg-primary/10', title: 'Traslado Inter-Almacén', sub: 'Principal → Sucursal Sur', qty: '40 unidades', qtyColor: 'text-primary', time: 'Hace 3 horas' },
              ].map((m, i) => (
                <div key={i} className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between hover:bg-surface-container transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.color}`}>
                      <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-on-surface font-spartan">{m.title}</p>
                      <p className="text-[0.625rem] text-outline uppercase tracking-widest">{m.sub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold font-headline ${m.qtyColor}`}>{m.qty}</p>
                    <p className="text-[10px] text-outline">{m.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <GlassCard className="p-8 relative overflow-hidden flex flex-col border-l-4 border-tertiary">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <h4 className="text-sm font-spartan font-bold uppercase tracking-widest text-on-surface">AI Insights</h4>
            </div>
            <div className="space-y-6">
              <div className="p-4 bg-tertiary/5 rounded-2xl border border-tertiary/10">
                <p className="text-xs text-on-surface leading-relaxed italic">
                  "Basado en tiempos de entrega actuales y demanda histórica, recomiendo aumentar el stock de seguridad para <strong>SKU-8829-X</strong> en un 15% antes del ciclo de mantenimiento Q3."
                </p>
                <p className="mt-4 text-[10px] text-tertiary font-bold uppercase tracking-[0.2em]">⚡ Powered by Groq LPU™</p>
              </div>
              <div className="space-y-2">
                <p className="text-[0.625rem] font-spartan uppercase tracking-[0.2em] text-outline">Precisión del Pronóstico</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full" style={{ width: '98.2%' }} />
                  </div>
                  <span className="text-xs font-headline font-bold text-tertiary">98.2%</span>
                </div>
              </div>
              <Button variant="secondary" size="sm" className="w-full">Generar Reporte Completo</Button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  )
}
