'use client'
import { create } from 'zustand'
import { isRealBrowser } from '@/lib/clientOnly'

interface User {
  id: string
  name: string
  email?: string
  role: string
  roles?: string[]
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

const STORAGE_KEY = 'auth-storage'

const readStorage = () => {
  if (!isRealBrowser()) return { user: null, accessToken: null, isAuthenticated: false }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return { user: null, accessToken: null, isAuthenticated: false }
    const p = JSON.parse(raw)
    return { user: p.user ?? null, accessToken: p.accessToken ?? null, isAuthenticated: p.isAuthenticated ?? false }
  } catch {
    return { user: null, accessToken: null, isAuthenticated: false }
  }
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  ...readStorage(),
  login: (accessToken, user) => {
    if (isRealBrowser()) {
      try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, accessToken, isAuthenticated: true })) } catch {}
    }
    set({ accessToken, user, isAuthenticated: true })
  },
  logout: () => {
    if (isRealBrowser()) try { window.localStorage.removeItem(STORAGE_KEY) } catch {}
    set({ accessToken: null, user: null, isAuthenticated: false })
  },
  hasPermission: (permission) => {
    const { user } = get()
    if (!user) return false
    if (user.role === 'ADMIN' || user.role === 'SUPERDEV') return true
    if (permission.endsWith(':*')) {
      const mod = permission.split(':')[0]
      return user.permissions?.some((p) => p.startsWith(mod + ':')) ?? false
    }
    return user.permissions?.includes(permission) ?? false
  },
}))