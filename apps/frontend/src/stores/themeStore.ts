'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { safeStorage } from '@/lib/safeStorage'

type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
      storage: {
        getItem: (key) => safeStorage.getJSON(key),
        setItem: (key, v) => safeStorage.setJSON(key, v),
        removeItem: (key) => safeStorage.removeItem(key),
      },
    }
  )
)
