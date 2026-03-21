/**
 * Event Bus — comunicación asíncrona desacoplada entre módulos.
 * Permite que un módulo emita eventos sin conocer quién los escucha.
 */

type EventHandler<T = unknown> = (payload: T) => void

class EventBus {
  private listeners = new Map<string, Set<EventHandler>>()

  on<T>(event: string, handler: EventHandler<T>) {
    if (!this.listeners.has(event)) this.listeners.set(event, new Set())
    this.listeners.get(event)!.add(handler as EventHandler)
    // Retorna función de cleanup
    return () => this.off(event, handler)
  }

  off<T>(event: string, handler: EventHandler<T>) {
    this.listeners.get(event)?.delete(handler as EventHandler)
  }

  emit<T>(event: string, payload: T) {
    this.listeners.get(event)?.forEach((h) => h(payload))
  }

  once<T>(event: string, handler: EventHandler<T>) {
    const wrapper: EventHandler<T> = (payload) => {
      handler(payload)
      this.off(event, wrapper)
    }
    return this.on(event, wrapper)
  }
}

export const bus = new EventBus()

// ─── Catálogo de eventos del sistema ───────────────────────────────────────
export const ERP_EVENTS = {
  // Inventario
  STOCK_UPDATED:        'inventario:stock_updated',
  STOCK_LOW:            'inventario:stock_low',
  MOVIMIENTO_CREATED:   'inventario:movimiento_created',

  // Ventas
  FACTURA_CREATED:      'ventas:factura_created',
  FACTURA_PAID:         'ventas:factura_paid',
  COTIZACION_APPROVED:  'ventas:cotizacion_approved',

  // Compras
  ORDEN_COMPRA_CREATED: 'compras:orden_created',
  ORDEN_COMPRA_RECEIVED:'compras:orden_received',

  // Contabilidad
  ASIENTO_CREATED:      'contabilidad:asiento_created',

  // Auth
  SESSION_EXPIRED:      'auth:session_expired',
  PERMISSION_DENIED:    'auth:permission_denied',

  // UI
  GLOBAL_SEARCH:        'ui:global_search',
  MODULE_REFRESH:       'ui:module_refresh',
} as const

export type ErpEvent = typeof ERP_EVENTS[keyof typeof ERP_EVENTS]
