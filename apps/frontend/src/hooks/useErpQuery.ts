/**
 * useErpQuery — wrapper sobre React Query con:
 * - Auth token automático
 * - Manejo de errores centralizado
 * - Integración con notificationStore
 * - Invalidación cruzada vía eventBus
 */
import { useQuery, useMutation, useQueryClient, type UseQueryOptions } from '@tanstack/react-query'
import { api } from '@/lib/api'
import { useNotificationStore } from '@/stores/notificationStore'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

// ─── Query genérica ──────────────────────────────────────────────────────────
export function useErpQuery<T>(
  queryKey: readonly unknown[],
  endpoint: string,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T>({
    queryKey,
    queryFn: async () => {
      const { data } = await api.get<T>(endpoint)
      return data
    },
    ...options,
  })
}

// ─── Mutation genérica con invalidación y eventos ────────────────────────────
interface MutationOptions<TData, TVariables> {
  endpoint: string
  method?: 'post' | 'put' | 'patch' | 'delete'
  invalidateKeys?: readonly unknown[][]
  onSuccessEvent?: string
  successMessage?: string
  errorMessage?: string
  onSuccess?: (data: TData, variables: TVariables) => void
}

export function useErpMutation<TData = unknown, TVariables = unknown>(
  opts: MutationOptions<TData, TVariables>
) {
  const qc = useQueryClient()
  const { add } = useNotificationStore()

  return useMutation<TData, Error, TVariables>({
    mutationFn: async (variables) => {
      const method = opts.method ?? 'post'
      const { data } = await api[method]<TData>(opts.endpoint, variables)
      return data
    },
    onSuccess: (data, variables) => {
      // Invalidar queries relacionadas
      opts.invalidateKeys?.forEach((key) => qc.invalidateQueries({ queryKey: key }))

      // Emitir evento al bus
      if (opts.onSuccessEvent) bus.emit(opts.onSuccessEvent, { data, variables })

      // Notificación de éxito
      if (opts.successMessage) {
        add({ type: 'success', title: 'Operación exitosa', message: opts.successMessage })
      }

      opts.onSuccess?.(data, variables)
    },
    onError: (error) => {
      add({
        type: 'error',
        title: 'Error',
        message: opts.errorMessage ?? error.message ?? 'Ocurrió un error inesperado',
      })
    },
  })
}

// ─── Hook de invalidación cruzada ────────────────────────────────────────────
export function useInvalidateModule() {
  const qc = useQueryClient()
  return (moduleKey: readonly unknown[]) => qc.invalidateQueries({ queryKey: moduleKey })
}
