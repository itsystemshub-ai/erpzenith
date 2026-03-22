'use client'
import { useEffect } from 'react'
import { useThemeStore } from '@/stores/themeStore'

/**
 * ThemeProvider — sincroniza el store de tema con la clase .dark en <html>.
 * Es el único lugar donde se toca el DOM para el tema.
 * El store solo guarda el valor; este componente lo aplica.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return <>{children}</>
}
