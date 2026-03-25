import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-surface">
      <h1 className="text-6xl font-bold text-on-surface mb-4">404</h1>
      <p className="text-on-surface-variant mb-8">Página no encontrada</p>
      <Link href="/login" className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90">
        Ir al Login
      </Link>
    </div>
  )
}
