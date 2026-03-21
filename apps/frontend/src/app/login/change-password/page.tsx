'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { useAuthStore } from '@/stores/authStore'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function ChangePasswordPage() {
  const router = useRouter()
  const { accessToken } = useAuthStore()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirm) {
      setError('Las contraseñas nuevas no coinciden.')
      return
    }
    if (newPassword.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await api.patch('/auth/change-password', { currentPassword, newPassword }, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setSuccess(true)
      setTimeout(() => router.push('/dashboard'), 2000)
    } catch {
      setError('Contraseña actual incorrecta.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background text-on-surface font-body min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="glass-panel ambient-glow rounded-2xl w-full max-w-[440px] p-10 flex flex-col z-10 mx-4">
        <div className="mb-8">
          <div className="w-12 h-12 bg-primary-container rounded-2xl flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>key</span>
          </div>
          <h3 className="font-headline text-2xl font-semibold text-on-surface">Cambiar contraseña</h3>
          <p className="text-on-surface-variant text-sm mt-1">Actualiza tu contraseña de acceso.</p>
        </div>

        {success ? (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <p className="text-sm text-on-surface">Contraseña actualizada correctamente.</p>
            <p className="text-xs text-outline">Redirigiendo al dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Contraseña actual"
              icon="lock"
              type="password"
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <Input
              label="Nueva contraseña"
              icon="lock_open"
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <Input
              label="Confirmar nueva contraseña"
              icon="lock_open"
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />

            {error && (
              <p className="text-xs text-error bg-error/10 border border-error/20 rounded-xl px-4 py-3">{error}</p>
            )}

            <Button type="submit" className="w-full py-4 text-sm" disabled={loading}>
              {loading ? 'Actualizando...' : 'Cambiar contraseña'}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
