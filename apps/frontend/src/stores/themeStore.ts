'use client'
import { create } from 'zustand'
import { isRealBrowser } from '@/lib/clientOnly'

type Theme = 'light' | 'dark'
interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const readTheme = (): Theme => {
  if (!isRealBrowser()) return 'light'
  try {
    const raw = window.localStorage.getItem('theme-storage')
    if (!raw) return 'light'
    const p = JSON.parse(raw)
    return p?.state?.theme === 'dark' ? 'dark' : 'light'
  } catch { return 'light' }
}

export const useThemeStore = create<ThemeState>()((set) => ({
  theme: readTheme(),
  setTheme: (theme) => {
    if (isRealBrowser()) {
      try { window.localStorage.setItem('theme-storage', JSON.stringify({ state: { theme } })) } catch {}
    }
    set({ theme })
  },
}))