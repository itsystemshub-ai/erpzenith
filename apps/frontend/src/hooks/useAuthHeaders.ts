'use client'
import { useAuthStore } from '@/stores/authStore'

/**
 * Hook para obtener headers de autenticación de forma segura
 * Retorna headers listos para usar en fetch/axios
 */
export function useAuthHeaders() {
  const accessToken = useAuthStore((s) => s.accessToken)
  
  return {
    'Content-Type': 'application/json',
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  }
}

/**
 * Función helper para obtener token de forma segura (SSR-safe)
 * Solo usar en componentes cliente
 */
export function getSafeToken(accessToken?: string | null): string | null {
  // Si ya tenemos el token, usarlo
  if (accessToken) return accessToken
  // Si estamos en cliente, obtener del store
  if (typeof window !== 'undefined') {
    return useAuthStore.getState().accessToken
  }
  // En SSR, retornar null
  return null
}
