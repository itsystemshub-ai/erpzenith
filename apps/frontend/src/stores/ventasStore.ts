'use client'
import { create } from 'zustand'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

interface VentasState {
  // Factura en progreso (nueva factura)
  facturaEnProgreso: {
    clienteId: string | null
    items: Array<{ productoId: string; cantidad: number; precio: number }>
    descuento: number
  }
  setCliente: (id: string) => void
  addItem: (item: { productoId: string; cantidad: number; precio: number }) => void
  removeItem: (productoId: string) => void
  setDescuento: (v: number) => void
  resetFactura: () => void

  // Filtros de lista
  filtros: { estado: string; clienteId: string; desde: string; hasta: string }
  setFiltro: (key: keyof VentasState['filtros'], value: string) => void

  // Emitir evento cuando se crea una factura
  emitFacturaCreada: (facturaId: string, monto: number) => void
}

const defaultFactura = { clienteId: null, items: [], descuento: 0 }
const defaultFiltros = { estado: '', clienteId: '', desde: '', hasta: '' }

export const useVentasStore = create<VentasState>((set) => ({
  facturaEnProgreso: defaultFactura,

  setCliente: (id) =>
    set((s) => ({ facturaEnProgreso: { ...s.facturaEnProgreso, clienteId: id } })),

  addItem: (item) =>
    set((s) => {
      const exists = s.facturaEnProgreso.items.find((i) => i.productoId === item.productoId)
      const items = exists
        ? s.facturaEnProgreso.items.map((i) =>
            i.productoId === item.productoId
              ? { ...i, cantidad: i.cantidad + item.cantidad }
              : i
          )
        : [...s.facturaEnProgreso.items, item]
      return { facturaEnProgreso: { ...s.facturaEnProgreso, items } }
    }),

  removeItem: (productoId) =>
    set((s) => ({
      facturaEnProgreso: {
        ...s.facturaEnProgreso,
        items: s.facturaEnProgreso.items.filter((i) => i.productoId !== productoId),
      },
    })),

  setDescuento: (v) =>
    set((s) => ({ facturaEnProgreso: { ...s.facturaEnProgreso, descuento: v } })),

  resetFactura: () => set({ facturaEnProgreso: defaultFactura }),

  filtros: defaultFiltros,
  setFiltro: (key, value) =>
    set((s) => ({ filtros: { ...s.filtros, [key]: value } })),

  emitFacturaCreada: (facturaId, monto) => {
    bus.emit(ERP_EVENTS.FACTURA_CREATED, { facturaId, monto })
    // También emite evento de asiento contable automático
    bus.emit(ERP_EVENTS.ASIENTO_CREATED, { origen: 'factura', referenciaId: facturaId, monto })
  },
}))
