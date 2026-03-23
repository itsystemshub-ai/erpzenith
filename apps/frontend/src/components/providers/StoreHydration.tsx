'use client'
import { useEffect } from 'react'
import { useNotificationStore } from '@/stores/notificationStore'
import { useThemeStore } from '@/stores/themeStore'

/**
 * StoreHydration — rehydrates Zustand persist stores that use skipHydration.
 * authStore ya no usa skipHydration, se hidrata automáticamente.
 */
export function StoreHydration() {
  useEffect(() => {
    useNotificationStore.persist.rehydrate()
    useThemeStore.persist.rehydrate()
  }, [])

  return null
}
