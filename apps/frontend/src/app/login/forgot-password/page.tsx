'use client'
import { useState } from 'react'
import { api } from '@/lib/api'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function ForgotPasswordPage() {
  const [username, setUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirm) { setError('Las contraseñas no coinciden.'); return }
    if (newPassword.length < 8) { setError('La contraseña debe tener al menos 8 caracteres.'); return }
    setLoading(true)
    setError('')
    try {
      await api.post('/auth/forgot-password', { username, newPassword })
      setSent(true)
    } catch {
      setError('No se encontró el usuario. Verifica el nombre de usuario.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-surface font-body min-h-[calc(100vh-60px)] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="glass-panel ambient-glow rounded-2xl w-full max-w-[440px] p-10 flex flex-col z-10 mx-4">
        <a href="/login" className="flex items-center gap-2 text-xs text-outline hover:text-on-surface transition-colors mb-8 group">
          <span className="material-symbols-outlined text-sm group-hover:text-primary">arrow_back</span>
          Volver al inicio de sesión
        </a>

        <div className="mb-8">
          <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>lock_reset</span>
          </div>
          <h3 className="font-headline text-2xl font-semibold text-on-surface">Restablecer contraseña</h3>
          <p className="text-on-surface-variant text-sm mt-1">
            Ingresa tu usuario y define tu nueva contraseña. El administrador deberá aprobarla.
          </p>
        </div>

        {sent ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pending_actions</span>
            </div>
            <p className="text-sm font-semibold text-on-surface">Solicitud enviada</p>
            <p className="text-xs text-outline">Tu solicitud está pendiente de aprobación por el administrador. Una vez aprobada, podrás iniciar sesión con tu nueva contraseña.</p>
            <a href="/login">
              <Button className="w-full mt-4">Volver al login</Button>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input label="Nombre de usuario" icon="person" type="text" placeholder="tuusuario"
              value={username} onChange={(e) => setUsername(e.target.value)} required />
            <Input label="Nueva contraseña" icon="lock_open" type="password" placeholder="••••••••"
              value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            <Input label="Confirmar contraseña" icon="lock_open" type="password" placeholder="••••••••"
              value={confirm} onChange={(e) => setConfirm(e.target.value)} required />

            {error && (
              <p className="text-xs text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3">{error}</p>
            )}
            <Button type="submit" className="w-full py-4 text-sm" disabled={loading}>
              {loading ? 'Enviando...' : 'Solicitar restablecimiento'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
