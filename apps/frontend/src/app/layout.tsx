import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider } from '@/components/providers/QueryProvider'

export const metadata: Metadata = {
  title: 'ERP ZENITH',
  description: 'Sistema ERP Profesional para Venezuela',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
