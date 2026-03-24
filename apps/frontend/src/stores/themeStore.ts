'use client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark'
export type Currency = 'USD' | 'VES'

interface ThemeState {
  theme: Theme
  toggle: () => void
  setTheme: (t: Theme) => void
  currency: Currency
  toggleCurrency: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',

      toggle: () => {
        const next: Theme = get().theme === 'light' ? 'dark' : 'light'
        set({ theme: next })
      },

      setTheme: (theme) => set({ theme }),

      currency: 'USD',
      toggleCurrency: () => set((s) => ({ currency: s.currency === 'USD' ? 'VES' : 'USD' })),
    }),
    { name: 'zenith-theme',
      skipHydration: true,
      storage: {
        getItem: (key) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null } catch { return null } },
        setItem: (key, v) => { try { localStorage.setItem(key, JSON.stringify(v)) } catch {} },
        removeItem: (key) => { try { localStorage.removeItem(key) } catch {} },
      },
    }
  )
)
