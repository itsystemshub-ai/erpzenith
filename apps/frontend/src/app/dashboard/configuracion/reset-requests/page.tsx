'use client'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { useAuthStore } from '@/stores/authStore'
import { useNotificationStore } from '@/stores/notificationStore'
import { TopBar } from '@/components/layout/TopBar'

interface ResetRequest {
  id: string
  createdAt: string
  status: string
  user: { id: string; name: string; username: string }
}

export default function ResetRequestsPage() {
  const { accessToken } = useAuthStore()
  const { add: addNotification } = useNotificationStore()
  const [requests, setRequests] = useState<ResetRequest[]>([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState<string | null>(null)

  const fetchRequests = async () => {
    try {
      const { data } = await api.get('/auth/reset-requests', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setRequests(data)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchRequests() }, [])

  const handle = async (req: ResetRequest, action: 'approve' | 'reject') => {
    setProcessing(req.id)
    try {
      await api.patch(`/auth/reset-requests/${req.id}/${action}`, {}, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      addNotification({
        type: action === 'approve' ? 'success' : 'warning',
        title: action === 'approve' ? 'Contraseña aprobada' : 'Solicitud rechazada',
        message: action === 'approve'
          ? `La nueva contraseña de @${req.user.username} fue aprobada y aplicada.`
          : `La solicitud de cambio de contraseña de @${req.user.username} fue rechazada.`,
        module: 'configuracion',
      })
      await fetchRequests()
    } catch {
      addNotification({
        type: 'error',
        title: 'Error al procesar',
        message: `No se pudo ${action === 'approve' ? 'aprobar' : 'rechazar'} la solicitud de @${req.user.username}.`,
        module: 'configuracion',
      })
    } finally {
      setProcessing(null)
    }
  }

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Solicitudes de Contraseña" />
      <div className="flex-1 p-8 max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="font-headline text-3xl font-semibold text-on-surface">Solicitudes de Contraseña</h1>
          <p className="text-on-surface-variant text-sm mt-1">Aprueba o rechaza las solicitudes de restablecimiento. Cada acción genera una notificación.</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
          </div>
        ) : requests.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center">
            <span className="material-symbols-outlined text-5xl text-outline mb-4 block" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <p className="text-on-surface font-semibold mb-1">Todo al día</p>
            <p className="text-on-surface-variant text-sm">No hay solicitudes pendientes.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((req) => (
              <div key={req.id} className="glass-panel rounded-2xl p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold font-spartan text-sm">
                    {req.user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">{req.user.name}</p>
                    <p className="text-xs text-outline">@{req.user.username}</p>
                    <p className="text-[10px] text-outline mt-0.5 uppercase tracking-widest font-spartan">
                      {new Date(req.createdAt).toLocaleString('es-VE')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-spartan uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {req.status}
                  </span>
                  <button
                    onClick={() => handle(req, 'approve')}
                    disabled={processing === req.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-tertiary/10 text-tertiary hover:bg-tertiary/20 transition-all text-xs font-spartan uppercase tracking-widest disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-sm">check</span>
                    Aprobar
                  </button>
                  <button
                    onClick={() => handle(req, 'reject')}
                    disabled={processing === req.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-error/10 text-error hover:bg-error/20 transition-all text-xs font-spartan uppercase tracking-widest disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined text-sm">close</span>
                    Rechazar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
