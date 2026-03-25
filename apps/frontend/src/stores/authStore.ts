'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeStorage } from '@/lib/safeStorage'

interface User {
  id: string
  name: string
  email: string
  role: string
  permissions: string[]
  avatar?: string
}

interface AuthState {
  user: User | null
  accessToken: string | null
  isAuthenticated: boolean
  login: (token: string, user: User) => void
  logout: () => void
  hasPermission: (permission: string) => boolean
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      login: (accessToken, user) => {
        safeStorage.setItem('accessToken', accessToken)
        set({ accessToken, user, isAuthenticated: true })
      },
      logout: () => {
        safeStorage.removeItem('accessToken')
        set({ accessToken: null, user: null, isAuthenticated: false })
      },
      hasPermission: (permission) => {
        const { user } = get()
        if (!user) return false
        if (user.role === 'ADMIN') return true
        if (permission.endsWith(':*')) {
          const mod = permission.split(':')[0]
          return user.permissions?.some((p) => p.startsWith(`${mod}:`)) ?? false
        }
        return user.permissions?.includes(permission) ?? false
      },
    }),
    {
      name: 'auth-storage',
      partialize: (s) => ({ user: s.user, accessToken: s.accessToken, isAuthenticated: s.isAuthenticated }),
      storage: {
        getItem: (key) => safeStorage.getJSON(key),
        setItem: (key, v) => safeStorage.setJSON(key, v),
        removeItem: (key) => safeStorage.removeItem(key),
      },
    }
  )
)
