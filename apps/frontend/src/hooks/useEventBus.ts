/**
 * useEventBus — hook para suscribirse a eventos del bus dentro de componentes React.
 * Se limpia automáticamente al desmontar el componente.
 */
import { useEffect } from 'react'
import { bus, type ErpEvent } from '@/lib/eventBus'

export function useEventBus<T = unknown>(
  event: ErpEvent | string,
  handler: (payload: T) => void,
  deps: unknown[] = []
) {
  useEffect(() => {
    const unsub = bus.on<T>(event, handler)
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
