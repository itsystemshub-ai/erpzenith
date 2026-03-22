'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  module?: string
  read: boolean
  createdAt: string
}

interface NotificationState {
  notifications: Notification[]
  add: (n: Omit<Notification, 'id' | 'read' | 'createdAt'>) => void
  markRead: (id: string) => void
  markAllRead: () => void
  remove: (id: string) => void
  clear: () => void
  unreadCount: () => number
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],
      add: (n) => {
        const notification: Notification = {
          ...n,
          id: crypto.randomUUID(),
          read: false,
          createdAt: new Date().toISOString(),
        }
        set((s) => ({ notifications: [notification, ...s.notifications].slice(0, 50) }))
      },
      markRead: (id) =>
        set((s) => ({
          notifications: s.notifications.map((n) => (n.id === id ? { ...n, read: true } : n)),
        })),
      markAllRead: () =>
        set((s) => ({ notifications: s.notifications.map((n) => ({ ...n, read: true })) })),
      remove: (id) =>
        set((s) => ({ notifications: s.notifications.filter((n) => n.id !== id) })),
      clear: () => set({ notifications: [] }),
      unreadCount: () => get().notifications.filter((n) => !n.read).length,
    }),
    { name: 'zenith-notifications',
      skipHydration: true,
      storage: {
        getItem: (key) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null } catch { return null } },
        setItem: (key, v) => { try { localStorage.setItem(key, JSON.stringify(v)) } catch {} },
        removeItem: (key) => { try { localStorage.removeItem(key) } catch {} },
      },
    }
  )
)
