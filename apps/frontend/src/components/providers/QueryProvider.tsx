'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { bus, ERP_EVENTS } from '@/lib/eventBus'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,   // 5 min
        gcTime: 1000 * 60 * 10,     // 10 min en caché
        retry: 1,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (error: unknown) => {
          const msg = error instanceof Error ? error.message : 'Error desconocido'
          // 401 → emitir evento de sesión expirada
          if (msg.includes('401')) bus.emit(ERP_EVENTS.SESSION_EXPIRED, {})
        },
      },
    },
  }))
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
