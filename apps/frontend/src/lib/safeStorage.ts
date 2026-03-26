// Detecta si estamos en un browser real (no Node.js v25+ con localStorage mock)
const isBrowser = (): boolean => {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined' &&
      Object.prototype.toString.call(window) === '[object Window]'
    )
  } catch {
    return false
  }
}

export const safeStorage = {
  getItem: (key: string): string | null => {
    if (!isBrowser()) return null
    try { return window.localStorage.getItem(key) } catch { return null }
  },
  setItem: (key: string, value: string): void => {
    if (!isBrowser()) return
    try { window.localStorage.setItem(key, value) } catch {}
  },
  removeItem: (key: string): void => {
    if (!isBrowser()) return
    try { window.localStorage.removeItem(key) } catch {}
  },
  getJSON: <T>(key: string): T | null => {
    if (!isBrowser()) return null
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch { return null }
  },
  setJSON: <T>(key: string, value: T): void => {
    if (!isBrowser()) return
    try { window.localStorage.setItem(key, JSON.stringify(value)) } catch {}
  },
}
