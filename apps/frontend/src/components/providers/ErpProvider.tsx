'use client'
/**
 * ErpProvider — provider raíz que activa la sincronización entre módulos.
 * Se monta una sola vez en el layout del dashboard.
 * Combina: React Query + Zustand + EventBus
 */
import { useModuleSync } from '@/hooks/useModuleSync'

export function ErpProvider({ children }: { children: React.ReactNode }) {
  // Activa todos los listeners de sincronización cross-módulo
  useModuleSync()
  return <>{children}</>
}
