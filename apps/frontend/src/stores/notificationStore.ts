'use client'
import { create } from 'zustand'

export interface Notification {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  timestamp: number
}

interface NotificationState {
  notifications: Notification[]
  add: (n: Omit<Notification, 'id' | 'timestamp'>) => void
  addNotification: (n: Omit<Notification, 'id' | 'timestamp'>) => void
  remove: (id: string) => void
  removeNotification: (id: string) => void
  clear: () => void
}

export const useNotificationStore = create<NotificationState>()((set, get) => ({
  notifications: [],
  add: (notification) => {
    const id = Math.random().toString(36).substring(7)
    const item: Notification = { ...notification, id, timestamp: Date.now() }
    set((s) => ({ notifications: [...s.notifications, item] }))
    setTimeout(() => get().remove(id), 5000)
  },
  addNotification: (n) => get().add(n),
  remove: (id) => set((s) => ({ notifications: s.notifications.filter((n) => n.id !== id) })),
  removeNotification: (id) => get().remove(id),
  clear: () => set({ notifications: [] }),
}))