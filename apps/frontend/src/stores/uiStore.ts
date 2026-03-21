'use client'
import { create } from 'zustand'

/**
 * UI Store — estado global de interfaz compartido entre módulos.
 * Síncrono, sin persistencia (se resetea en cada sesión).
 */

interface UiState {
  // Sidebar
  sidebarCollapsed: boolean
  toggleSidebar: () => void

  // Modal global
  modal: { id: string; props?: Record<string, unknown> } | null
  openModal: (id: string, props?: Record<string, unknown>) => void
  closeModal: () => void

  // Loading global (para operaciones cross-módulo)
  globalLoading: boolean
  setGlobalLoading: (v: boolean) => void

  // Módulo activo (para breadcrumbs y contexto)
  activeModule: string
  setActiveModule: (m: string) => void

  // Búsqueda global
  globalSearch: string
  setGlobalSearch: (q: string) => void
}

export const useUiStore = create<UiState>((set) => ({
  sidebarCollapsed: false,
  toggleSidebar: () => set((s) => ({ sidebarCollapsed: !s.sidebarCollapsed })),

  modal: null,
  openModal: (id, props) => set({ modal: { id, props } }),
  closeModal: () => set({ modal: null }),

  globalLoading: false,
  setGlobalLoading: (v) => set({ globalLoading: v }),

  activeModule: 'dashboard',
  setActiveModule: (m) => set({ activeModule: m }),

  globalSearch: '',
  setGlobalSearch: (q) => set({ globalSearch: q }),
}))
