'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeStorage } from '@/lib/safeStorage'

export interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  timestamp: number
}

interface NotificationState {
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],
      addNotification: (notification) => {
        const id = Math.random().toString(36).substring(7)
        const newNotification: Notification = {
          ...notification,
          id,
          timestamp: Date.now(),
        }
        set((state) => ({
          notifications: [...state.notifications, newNotification],
        }))
        // Auto-remove después de 5 segundos
        setTimeout(() => {
          get().removeNotification(id)
        }, 5000)
      },
      removeNotification: (id) =>
        set((state) => ({
          notifications: state.notifications.filter((n) => n.id !== id),
        })),
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'notification-storage',
      storage: {
        getItem: (key) => safeStorage.getJSON(key),
        setItem: (key, v) => safeStorage.setJSON(key, v),
        removeItem: (key) => safeStorage.removeItem(key),
      },
    }
  )
)
