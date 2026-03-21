'use client'
import { create } from 'zustand'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

interface Producto {
  id: string
  nombre: string
  sku: string
  stock: number
  stockMinimo: number
  precio: number
}

interface InventarioState {
  // Selección activa (compartida entre sub-páginas)
  selectedProductoId: string | null
  selectProducto: (id: string | null) => void

  // Filtros persistentes dentro de la sesión
  filtros: { categoria: string; almacen: string; search: string }
  setFiltro: (key: keyof InventarioState['filtros'], value: string) => void
  resetFiltros: () => void

  // Cache local de productos con stock bajo (para alertas)
  stockBajoIds: string[]
  checkStockBajo: (productos: Producto[]) => void
}

const defaultFiltros = { categoria: '', almacen: '', search: '' }

export const useInventarioStore = create<InventarioState>((set, get) => ({
  selectedProductoId: null,
  selectProducto: (id) => set({ selectedProductoId: id }),

  filtros: defaultFiltros,
  setFiltro: (key, value) =>
    set((s) => ({ filtros: { ...s.filtros, [key]: value } })),
  resetFiltros: () => set({ filtros: defaultFiltros }),

  stockBajoIds: [],
  checkStockBajo: (productos) => {
    const bajos = productos.filter((p) => p.stock <= p.stockMinimo)
    const ids = bajos.map((p) => p.id)
    const prev = get().stockBajoIds

    // Solo emite evento si hay nuevos productos con stock bajo
    const nuevos = bajos.filter((p) => !prev.includes(p.id))
    nuevos.forEach((p) =>
      bus.emit(ERP_EVENTS.STOCK_LOW, { id: p.id, nombre: p.nombre, stock: p.stock })
    )

    set({ stockBajoIds: ids })
  },
}))
