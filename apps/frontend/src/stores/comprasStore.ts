'use client'
import { create } from 'zustand'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

interface ComprasState {
  selectedOrdenId: string | null
  selectOrden: (id: string | null) => void

  filtros: { estado: string; proveedorId: string; desde: string; hasta: string }
  setFiltro: (key: keyof ComprasState['filtros'], value: string) => void
  resetFiltros: () => void

  emitOrdenRecibida: (ordenId: string) => void
}

const defaultFiltros = { estado: '', proveedorId: '', desde: '', hasta: '' }

export const useComprasStore = create<ComprasState>((set) => ({
  selectedOrdenId: null,
  selectOrden: (id) => set({ selectedOrdenId: id }),

  filtros: defaultFiltros,
  setFiltro: (key, value) =>
    set((s) => ({ filtros: { ...s.filtros, [key]: value } })),
  resetFiltros: () => set({ filtros: defaultFiltros }),

  emitOrdenRecibida: (ordenId) => {
    bus.emit(ERP_EVENTS.ORDEN_COMPRA_RECEIVED, { ordenId })
  },
}))
