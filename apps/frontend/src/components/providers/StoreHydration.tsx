'use client'
import { useEffect } from 'react'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { useThemeStore } from '@/stores/themeStore'

/**
 * StoreHydration — rehydrates Zustand persist stores on the client only.
 * Prevents SSR/client mismatch (hydration errors) by deferring localStorage reads.
 */
export function StoreHydration() {
  useEffect(() => {
    useAuthStore.persist.rehydrate()
    useNotificationStore.persist.rehydrate()
    useThemeStore.persist.rehydrate()
  }, [])

  return null
}
