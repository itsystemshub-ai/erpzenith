/**
 * useModuleSync — orquesta la sincronización entre módulos.
 *
 * Escucha eventos del bus y reacciona:
 * - Stock bajo → notificación automática
 * - Factura creada → invalida contabilidad + ventas dashboard
 * - Orden recibida → invalida inventario
 * - Sesión expirada → logout
 */
import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { bus, ERP_EVENTS } from '@/lib/eventBus'
import { useNotificationStore } from '@/stores/notificationStore'
import { useAuthStore } from '@/stores/authStore'
import { QK } from '@/lib/queryKeys'

export function useModuleSync() {
  const qc = useQueryClient()
  const { add } = useNotificationStore()
  const { logout } = useAuthStore()

  useEffect(() => {
    const unsubs = [

      // Inventario: stock bajo → notificación
      bus.on<{ id: string; nombre: string; stock: number }>(
        ERP_EVENTS.STOCK_LOW,
        ({ nombre, stock }) => {
          add({
            type: 'warning',
            title: 'Stock crítico',
            message: `${nombre} tiene solo ${stock} unidades disponibles`,
            module: 'inventario',
          })
        }
      ),

      // Ventas: factura creada → invalida ventas + contabilidad
      bus.on<{ facturaId: string; monto: number }>(
        ERP_EVENTS.FACTURA_CREATED,
        () => {
          qc.invalidateQueries({ queryKey: QK.ventas.facturas() })
          qc.invalidateQueries({ queryKey: QK.ventas.dashboard() })
          qc.invalidateQueries({ queryKey: QK.contabilidad.asientos() })
          qc.invalidateQueries({ queryKey: QK.ejecutivo.kpis() })
        }
      ),

      // Ventas: factura pagada → invalida tesorería + contabilidad
      bus.on<{ facturaId: string }>(
        ERP_EVENTS.FACTURA_PAID,
        () => {
          qc.invalidateQueries({ queryKey: QK.ventas.facturas() })
          qc.invalidateQueries({ queryKey: QK.contabilidad.balance() })
          qc.invalidateQueries({ queryKey: QK.ejecutivo.kpis() })
        }
      ),

      // Compras: orden recibida → invalida inventario
      bus.on<{ ordenId: string }>(
        ERP_EVENTS.ORDEN_COMPRA_RECEIVED,
        () => {
          qc.invalidateQueries({ queryKey: QK.inventario.all() })
          qc.invalidateQueries({ queryKey: QK.compras.ordenes() })
        }
      ),

      // Contabilidad: asiento creado → invalida balance
      bus.on(
        ERP_EVENTS.ASIENTO_CREATED,
        () => {
          qc.invalidateQueries({ queryKey: QK.contabilidad.all() })
        }
      ),

      // Auth: sesión expirada → logout
      bus.on(ERP_EVENTS.SESSION_EXPIRED, () => {
        add({ type: 'error', title: 'Sesión expirada', message: 'Tu sesión ha caducado. Inicia sesión nuevamente.' })
        logout()
      }),

    ]

    return () => unsubs.forEach((u) => u())
  }, [qc, add, logout])
}
