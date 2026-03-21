'use client'
import { create } from 'zustand'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

interface ContabilidadState {
  selectedAsientoId: string | null
  selectAsiento: (id: string | null) => void

  filtros: { tipo: string; cuenta: string; desde: string; hasta: string }
  setFiltro: (key: keyof ContabilidadState['filtros'], value: string) => void
  resetFiltros: () => void

  emitAsientoCreado: (asientoId: string, monto: number) => void
}

const defaultFiltros = { tipo: '', cuenta: '', desde: '', hasta: '' }

export const useContabilidadStore = create<ContabilidadState>((set) => ({
  selectedAsientoId: null,
  selectAsiento: (id) => set({ selectedAsientoId: id }),

  filtros: defaultFiltros,
  setFiltro: (key, value) =>
    set((s) => ({ filtros: { ...s.filtros, [key]: value } })),
  resetFiltros: () => set({ filtros: defaultFiltros }),

  emitAsientoCreado: (asientoId, monto) => {
    bus.emit(ERP_EVENTS.ASIENTO_CREATED, { asientoId, monto })
  },
}))
