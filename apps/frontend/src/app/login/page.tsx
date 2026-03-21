'use client'
import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/stores/authStore'
import { api } from '@/lib/api'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mfaCode, setMfaCode] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const mfaRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleMfaInput = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return
    const next = [...mfaCode]
    next[index] = value
    setMfaCode(next)
    if (value && index < 5) mfaRefs.current[index + 1]?.focus()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await api.post('/auth/login', {
        email,
        password,
        mfaCode: mfaCode.join(''),
      })
      login(data.accessToken, data.user)
      router.push('/dashboard')
    } catch {
      setError('Credenciales inválidas. Verifica tu email y contraseña.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Atmospheric orbs */}
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
                label="Email / Usuario"
                icon="person"
                type="email"
                placeholder="nombre@zenith.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline">Contraseña</label>
                  <a href="#" className="text-xs text-primary hover:text-tertiary transition-colors">¿Olvidaste tu contraseña?</a>
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

              {/* MFA */}
              <div className="pt-4 border-t border-outline-variant/20">
                <label className="text-[10px] font-spartan font-bold uppercase tracking-widest text-outline mb-4 block">
                  Código MFA (opcional)
                </label>
                <div className="flex justify-between gap-2">
                  {mfaCode.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { mfaRefs.current[i] = el }}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleMfaInput(i, e.target.value)}
                      className="w-12 h-14 bg-surface-container-highest border-none rounded-xl text-center text-xl font-headline font-bold text-primary focus:ring-2 focus:ring-tertiary/40"
                    />
                  ))}
                </div>
                <p className="text-[10px] text-outline text-center mt-3 uppercase tracking-widest">
                  Código de 6 dígitos de tu app autenticadora
                </p>
              </div>

              {error && (
                <p className="text-xs text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3">{error}</p>
              )}

              <Button type="submit" className="w-full py-4 text-sm" disabled={loading}>
                {loading ? 'Verificando...' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-outline-variant/10">
              <a href="#" className="flex items-center text-xs text-outline hover:text-on-surface transition-colors group">
                <span className="material-symbols-outlined text-sm mr-2 group-hover:text-primary">help</span>
                Ayuda
              </a>
              <a href="#" className="flex items-center text-xs text-outline hover:text-on-surface transition-colors group">
                <span className="material-symbols-outlined text-sm mr-2 group-hover:text-primary">contact_support</span>
                Soporte
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 opacity-40 flex items-center space-x-4">
        <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-spartan text-outline">
          <span className="material-symbols-outlined text-sm mr-2">verified_user</span>
          Cifrado Militar Activo
        </div>
        <div className="w-1 h-1 rounded-full bg-outline" />
        <div className="flex items-center text-[10px] uppercase tracking-[0.2em] font-spartan text-outline">
          <span className="material-symbols-outlined text-sm mr-2">shield</span>
          ZENITH PROTECT V4.2
        </div>
      </footer>

      <div className="fixed bottom-10 left-10 hidden lg:block pointer-events-none select-none">
        <div className="text-[140px] font-spartan font-black text-white/[0.02] leading-none">ZENITH</div>
      </div>
    </div>
  )
}
