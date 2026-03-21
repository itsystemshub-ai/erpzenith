'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { api } from '@/lib/api'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const { add: addNotification } = useNotificationStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await api.post('/auth/login', { username, password })
      login(data.access_token, data.user)
      addNotification({
        type: 'success',
        title: 'Sesión iniciada',
        message: `Bienvenido de vuelta, ${data.user.name}.`,
      })
      router.push('/dashboard')
    } catch {
      setError('Credenciales inválidas. Verifica tu usuario y contraseña.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none" />

      <main className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-0 z-10 p-6">
        {/* Left branding */}
        <div className="hidden md:flex md:col-span-7 flex-col justify-center pr-12">
          <div className="mb-8">
            <h1 className="font-spartan text-5xl font-black tracking-widest text-primary uppercase mb-2">ZENITH</h1>
            <div className="h-1 w-24 bg-tertiary" />
          </div>
          <h2 className="font-headline text-6xl font-light text-on-surface leading-tight mb-6">
            El Centro de<br />
            <span className="font-bold italic">Comando Empresarial.</span>
          </h2>
          <p className="text-on-surface-variant text-lg max-w-md font-light leading-relaxed">
            Gestiona activos, analíticas y operaciones globales a través de una interfaz unificada diseñada para Venezuela.
          </p>
        </div>

        {/* Login card */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div className="glass-panel ambient-glow rounded-2xl w-full max-w-[440px] p-10 flex flex-col">
            <header className="mb-8 md:hidden">
              <h1 className="font-spartan text-3xl font-black tracking-widest text-primary uppercase">ZENITH</h1>
            </header>

            <div className="mb-8">
              <h3 className="font-headline text-2xl font-semibold text-on-surface">Iniciar Sesión</h3>
              <p className="text-on-surface-variant text-sm mt-1">Ingresa tus credenciales para continuar.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Usuario"
                icon="person"
                type="text"
                placeholder="superadminzenith"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">Contraseña</label>
                  <a href="/login/forgot-password" className="text-xs text-primary hover:text-tertiary transition-colors">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <Input
                  type="password"
                  icon="lock"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <p className="text-xs text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3">{error}</p>
              )}

              <Button type="submit" className="w-full py-4 text-sm" disabled={loading}>
                {loading ? 'Verificando...' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-outline-variant/10">
              <a href="/login/ayuda" className="flex items-center text-xs text-outline hover:text-on-surface transition-colors group">
                <span className="material-symbols-outlined text-sm mr-2 group-hover:text-primary">help</span>
                Ayuda
              </a>
              <a href="/login/soporte" className="flex items-center text-xs text-outline hover:text-on-surface transition-colors group">
                <span className="material-symbols-outlined text-sm mr-2 group-hover:text-primary">contact_support</span>
                Soporte
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-10 left-10 hidden lg:block pointer-events-none select-none">
        <div className="text-[140px] font-spartan font-black text-white/[0.02] leading-none">ZENITH</div>
      </div>
    </div>
  )
}
