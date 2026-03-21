'use client'
import { create } from 'zustand'

interface RrhhState {
  selectedEmpleadoId: string | null
  selectEmpleado: (id: string | null) => void

  filtros: { departamento: string; cargo: string; search: string }
  setFiltro: (key: keyof RrhhState['filtros'], value: string) => void
  resetFiltros: () => void
}

const defaultFiltros = { departamento: '', cargo: '', search: '' }

export const useRrhhStore = create<RrhhState>((set) => ({
  selectedEmpleadoId: null,
  selectEmpleado: (id) => set({ selectedEmpleadoId: id }),

  filtros: defaultFiltros,
  setFiltro: (key, value) =>
    set((s) => ({ filtros: { ...s.filtros, [key]: value } })),
  resetFiltros: () => set({ filtros: defaultFiltros }),
}))
