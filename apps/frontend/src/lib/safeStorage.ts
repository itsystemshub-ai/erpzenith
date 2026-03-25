/**
 * Safe Storage - Wrapper seguro para localStorage
 * 
 * Previene errores durante SSR/build estático donde window/localStorage no existen
 * 
 * Uso:
 *   import { safeStorage } from '@/lib/safeStorage'
 *   safeStorage.getItem('key')
 *   safeStorage.setItem('key', 'value')
 *   safeStorage.removeItem('key')
 */

export const safeStorage = {
  /**
   * Obtiene un valor del localStorage de forma segura
   * @param key - Clave del item
   * @returns El valor o null si no existe o estamos en SSR
   */
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },

  /**
   * Establece un valor en localStorage de forma segura
   * @param key - Clave del item
   * @param value - Valor a guardar
   */
  setItem: (key: string, value: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, value)
    } catch {
      // Ignorar errores de quota o privacidad
    }
  },

  /**
   * Remueve un item del localStorage de forma segura
   * @param key - Clave del item
   */
  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch {
      // Ignorar errores
    }
  },

  /**
   * Parsea JSON del localStorage de forma segura
   * @param key - Clave del item
   * @returns El objeto parseado o null
   */
  getJSON: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch {
      return null
    }
  },

  /**
   * Guarda un objeto JSON en localStorage de forma segura
   * @param key - Clave del item
   * @param value - Objeto a guardar
   */
  setJSON: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Ignorar errores
    }
  },
}
