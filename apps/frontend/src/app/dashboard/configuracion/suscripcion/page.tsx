'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { TopBar } from '@/components/layout/TopBar'
import { useNotificationStore } from '@/stores/notificationStore'
import { useAuthStore } from '@/stores/authStore'
import { safeStorage } from '@/lib/safeStorage'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

interface Empresa {
  id: string; nombre: string; rif: string; plan: string; status: string
  mrr: number; users: number; createdAt: string; color: string; logo?: string
}
interface SistemaInfo { ram: { used: number; total: number; pct: number }; uptime: { texto: string }; nodeVersion: string; platform: string }
interface DbInfo { dbSize: string; totalTables: number; totalRows: number; activeConnections: number }
interface SeguridadStats { activeUsers: number; totalUsers: number; totalRoles: number }

const PLAN_MRR:     Record<string, number>   = { Starter: 49, Business: 149, Enterprise: 399 }
const PLAN_USERS:   Record<string, number>   = { Starter: 5, Business: 25, Enterprise: -1 }
const PLAN_MODULES: Record<string, string[]> = {
  Starter:    ['Ventas', 'Inventario', 'Contabilidad básica'],
  Business:   ['Todo Starter', 'RRHH', 'Compras', 'Reportes avanzados', 'API Access'],
  Enterprise: ['Todo Business', 'Multi-empresa', 'IA avanzada', 'SLA 99.9%', 'Soporte dedicado'],
}
const PLANES = ['Starter', 'Business', 'Enterprise']

// Historial de facturas simulado basado en la fecha de creación de la empresa
function buildInvoiceHistory(empresa: Empresa): { fecha: string; monto: number; estado: string; numero: string }[] {
  const start = new Date(empresa.createdAt)
  const now   = new Date()
  const rows  = []
  let d = new Date(start)
  d.setDate(1)
  let idx = 1
  while (d <= now) {
    rows.push({
      numero: `INV-${empresa.id.slice(-4).toUpperCase()}-${String(idx).padStart(3,'0')}`,
      fecha:  d.toISOString().slice(0, 10),
      monto:  empresa.mrr,
      estado: d < now ? 'Pagada' : 'Pendiente',
    })
    d = new Date(d.getFullYear(), d.getMonth() + 1, 1)
    idx++
  }
  return rows.reverse().slice(0, 12)
}

function SuscripcionContent() {
  const searchParams  = useSearchParams()
  const router        = useRouter()
  const { add: notify } = useNotificationStore()
  const accessToken   = useAuthStore(s => s.accessToken)
  const empresaId     = searchParams.get('empresaId')

  const [tab,      setTab]      = useState<'plan' | 'facturacion' | 'uso'>('plan')
  const [empresa,  setEmpresa]  = useState<Empresa | null>(null)
  const [sistema,  setSistema]  = useState<SistemaInfo | null>(null)
  const [dbInfo,   setDbInfo]   = useState<DbInfo | null>(null)
  const [segStats, setSegStats] = useState<SeguridadStats | null>(null)
  const [loading,  setLoading]  = useState(true)
  const [saving,   setSaving]   = useState(false)

  // Modal cambio de tarjeta
  const [cardModal, setCardModal] = useState(false)
  const [cardForm,  setCardForm]  = useState({ numero: '', vence: '', cvv: '', nombre: '' })

  // Modal confirmar cancelación
  const [cancelModal, setCancelModal] = useState(false)

  const getHeaders = () => {
    const token = accessToken ?? safeStorage.getItem('accessToken')
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  }

  const loadEmpresa = async () => {
    const h = getHeaders()
    if (empresaId) {
      const r = await fetch(`${API}/empresas/${empresaId}`, { headers: h })
      return r.ok ? r.json() : null
    }
    const r = await fetch(`${API}/empresas`, { headers: h })
    const arr = await r.json()
    return Array.isArray(arr) ? arr[0] : null
  }

  useEffect(() => {
    const h = getHeaders()
    setLoading(true)
    Promise.all([
      fetch(`${API}/configuracion/sistema/info`,    { headers: h }).then(r => r.json()).catch(() => null),
      fetch(`${API}/configuracion/db-info`,         { headers: h }).then(r => r.json()).catch(() => null),
      fetch(`${API}/configuracion/seguridad/stats`, { headers: h }).then(r => r.json()).catch(() => null),
      loadEmpresa(),
    ]).then(([s, d, sg, emp]) => {
      setSistema(s); setDbInfo(d); setSegStats(sg); setEmpresa(emp ?? null)
    }).finally(() => setLoading(false))
  }, [empresaId, accessToken])

  const planActual = empresa?.plan ?? 'Enterprise'
  const mrrActual  = empresa?.mrr  ?? PLAN_MRR[planActual] ?? 399
  const invoices   = empresa ? buildInvoiceHistory(empresa) : []

  // Cambiar plan
  const handleChangePlan = async (newPlan: string) => {
    if (!empresa || newPlan === planActual) return
    setSaving(true)
    try {
      const newMrr = empresa.status === 'activo' ? PLAN_MRR[newPlan] : 0
      const r = await fetch(`${API}/empresas/${empresa.id}`, {
        method: 'PATCH', headers: getHeaders(),
        body: JSON.stringify({ plan: newPlan, mrr: newMrr }),
      })
      if (!r.ok) throw new Error()
      setEmpresa(prev => prev ? { ...prev, plan: newPlan, mrr: newMrr } : prev)
      notify({ type: 'success', title: 'Plan actualizado', message: `Cambiado a ${newPlan} ($${newMrr}/mes).`, module: 'suscripcion' })
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo cambiar el plan.', module: 'suscripcion' })
    } finally { setSaving(false) }
  }

  // Cancelar / suspender plan
  const handleCancelPlan = async () => {
    if (!empresa) return
    setSaving(true)
    try {
      const r = await fetch(`${API}/empresas/${empresa.id}`, {
        method: 'PATCH', headers: getHeaders(),
        body: JSON.stringify({ status: 'suspendido', mrr: 0 }),
      })
      if (!r.ok) throw new Error()
      setEmpresa(prev => prev ? { ...prev, status: 'suspendido', mrr: 0 } : prev)
      notify({ type: 'info', title: 'Plan cancelado', message: 'La suscripción fue suspendida.', module: 'suscripcion' })
      setCancelModal(false)
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo cancelar el plan.', module: 'suscripcion' })
    } finally { setSaving(false) }
  }

  // Reactivar plan
  const handleReactivate = async () => {
    if (!empresa) return
    setSaving(true)
    try {
      const r = await fetch(`${API}/empresas/${empresa.id}`, {
        method: 'PATCH', headers: getHeaders(),
        body: JSON.stringify({ status: 'activo', mrr: PLAN_MRR[planActual] }),
      })
      if (!r.ok) throw new Error()
      setEmpresa(prev => prev ? { ...prev, status: 'activo', mrr: PLAN_MRR[planActual] } : prev)
      notify({ type: 'success', title: 'Plan reactivado', message: `${planActual} activo nuevamente.`, module: 'suscripcion' })
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo reactivar.', module: 'suscripcion' })
    } finally { setSaving(false) }
  }

  const isSuspended = empresa?.status === 'suspendido'

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Mi Suscripción</h2>
            <p className="text-on-surface-variant mt-1">Gestiona tu plan, facturación y uso de recursos</p>
          </div>
          {empresaId && (
            <button onClick={() => router.push('/dashboard/configuracion/super-admin')}
              className="flex items-center gap-2 glass-panel hover:bg-white/10 text-on-surface-variant text-sm font-bold px-4 py-2.5 rounded-xl transition-colors">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Volver a Super Admin
            </button>
          )}
        </div>

        {/* Banner plan actual */}
        <div className={`glass-panel rounded-2xl p-6 border flex items-center justify-between flex-wrap gap-4 ${isSuspended ? 'border-error/30 bg-error/5' : 'border-secondary/30 bg-secondary/5'}`}>
          <div className="flex items-center gap-4">
            {empresa?.logo
              ? <img src={empresa.logo} alt={empresa.nombre} className="w-12 h-12 rounded-xl object-cover" />
              : <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isSuspended ? 'bg-error/20' : 'bg-secondary/20'}`}>
                  <span className={`material-symbols-outlined text-2xl ${isSuspended ? 'text-error' : 'text-secondary'}`}>workspace_premium</span>
                </div>
            }
            <div>
              <p className="text-xs text-outline font-bold uppercase tracking-wide">
                {loading ? 'Cargando...' : (empresa?.nombre ?? 'Plan Actual')}
              </p>
              <p className="text-2xl font-headline font-bold text-on-surface">{planActual}</p>
              <p className="text-sm text-on-surface-variant">
                MRR: <span className={`font-bold font-mono ${isSuspended ? 'text-error' : 'text-tertiary'}`}>${mrrActual}/mes</span>
                {empresa && (
                  <span className={`ml-3 text-xs font-bold px-2 py-0.5 rounded-full ${
                    empresa.status === 'activo'     ? 'bg-tertiary/20 text-tertiary' :
                    empresa.status === 'trial'      ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-error/20 text-error'
                  }`}>{empresa.status}</span>
                )}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            {isSuspended
              ? <button onClick={handleReactivate} disabled={saving}
                  className="flex items-center gap-2 bg-tertiary text-on-primary font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-tertiary/90 disabled:opacity-50 transition-colors">
                  {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
                  Reactivar plan
                </button>
              : <>
                  <button onClick={() => setCancelModal(true)}
                    className="glass-panel hover:bg-error/10 text-error font-bold text-sm px-4 py-2.5 rounded-xl transition-colors">
                    Cancelar plan
                  </button>
                  <button onClick={() => setTab('plan')}
                    className="bg-primary text-on-primary font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-primary/90 transition-colors">
                    Cambiar plan
                  </button>
                </>
            }
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['plan', 'facturacion', 'uso'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'plan' ? 'Planes' : t === 'facturacion' ? 'Facturación' : 'Uso de Recursos'}
            </button>
          ))}
        </div>

        {/* ── Tab Planes ── */}
        {tab === 'plan' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PLANES.map(name => {
              const isActual  = name === planActual
              const price     = PLAN_MRR[name]
              const maxUsers  = PLAN_USERS[name]
              const mods      = PLAN_MODULES[name]
              const colorClass = name === 'Enterprise' ? 'border-secondary/40 bg-secondary/5'
                : name === 'Business' ? 'border-primary/40 bg-primary/5' : 'border-white/20'
              return (
                <div key={name} className={`glass-panel rounded-2xl p-6 border relative flex flex-col ${colorClass} ${isActual ? 'ring-2 ring-secondary/40' : ''}`}>
                  {isActual && <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full bg-secondary/20 text-secondary">Actual</span>}
                  {!isActual && name === 'Business' && <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full bg-primary/20 text-primary">Popular</span>}
                  <h3 className="text-xl font-headline font-bold text-on-surface">{name}</h3>
                  <div className="mt-3 mb-5">
                    <span className="text-4xl font-headline font-bold text-on-surface">${price}</span>
                    <span className="text-on-surface-variant text-sm">/mes</span>
                  </div>
                  <p className="text-xs text-outline mb-3">{maxUsers === -1 ? 'Usuarios ilimitados' : `Hasta ${maxUsers} usuarios`}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {mods.map(m => (
                      <li key={m} className="flex items-center gap-2 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-tertiary text-[16px]">check</span>{m}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChangePlan(name)}
                    disabled={isActual || saving || isSuspended}
                    className={`w-full py-2.5 rounded-xl font-bold text-sm transition-colors ${
                      isActual ? 'bg-white/10 text-outline cursor-default'
                      : isSuspended ? 'bg-white/5 text-outline cursor-not-allowed'
                      : 'bg-primary text-on-primary hover:bg-primary/90 disabled:opacity-50'
                    }`}>
                    {saving && !isActual ? <span className="material-symbols-outlined text-[14px] animate-spin mr-1">progress_activity</span> : null}
                    {isActual ? 'Plan Actual' : isSuspended ? 'Reactiva para cambiar' : `Cambiar a ${name}`}
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* ── Tab Facturación ── */}
        {tab === 'facturacion' && (
          <div className="space-y-5">
            {/* KPIs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'MRR Actual',   value: `$${mrrActual}/mes`, icon: 'payments',          color: 'text-tertiary' },
                { label: 'Plan',         value: planActual,           icon: 'workspace_premium', color: 'text-secondary' },
                { label: 'Usuarios',     value: empresa ? String(empresa.users) : '—', icon: 'group', color: 'text-primary' },
              ].map(k => (
                <div key={k.label} className="glass-panel rounded-2xl p-5 flex items-center gap-4">
                  <span className={`material-symbols-outlined text-3xl ${k.color}`}>{k.icon}</span>
                  <div>
                    <p className="text-xl font-headline font-bold text-on-surface">{k.value}</p>
                    <p className="text-xs text-outline">{k.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Método de pago */}
            <div className="glass-panel rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">•••• •••• •••• 4242</p>
                  <p className="text-xs text-outline">Vence 12/2026</p>
                </div>
              </div>
              <button onClick={() => setCardModal(true)}
                className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-4 py-2 rounded-xl transition-colors">
                Cambiar tarjeta
              </button>
            </div>

            {/* Historial de facturas */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <h3 className="font-headline font-bold text-on-surface">Historial de Facturas</h3>
                <span className="text-xs text-outline">{invoices.length} registros</span>
              </div>
              {invoices.length === 0
                ? <div className="py-16 text-center">
                    <span className="material-symbols-outlined text-4xl text-outline/30 block mb-2">receipt_long</span>
                    <p className="text-sm text-outline">Sin historial disponible.</p>
                  </div>
                : <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          {['Número', 'Fecha', 'Monto', 'Estado', 'Acción'].map(h => (
                            <th key={h} className="text-left px-5 py-3 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {invoices.map(inv => (
                          <tr key={inv.numero} className="hover:bg-white/5 transition-colors">
                            <td className="px-5 py-3 font-mono text-xs text-primary">{inv.numero}</td>
                            <td className="px-5 py-3 text-on-surface-variant">{inv.fecha}</td>
                            <td className="px-5 py-3 font-bold text-on-surface font-mono">${inv.monto}</td>
                            <td className="px-5 py-3">
                              <span className={`text-xs font-bold px-2 py-1 rounded-full ${inv.estado === 'Pagada' ? 'bg-tertiary/20 text-tertiary' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                {inv.estado}
                              </span>
                            </td>
                            <td className="px-5 py-3">
                              <button className="flex items-center gap-1 text-xs text-outline hover:text-on-surface transition-colors">
                                <span className="material-symbols-outlined text-[14px]">download</span>PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              }
            </div>
          </div>
        )}

        {/* ── Tab Uso de Recursos ── */}
        {tab === 'uso' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Usuarios activos */}
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between mb-3">
                  <p className="font-bold text-on-surface">Usuarios Activos</p>
                  <p className="text-sm text-on-surface-variant">
                    <span className="font-bold text-on-surface">{segStats?.activeUsers ?? 0}</span>
                    {PLAN_USERS[planActual] !== -1 && ` / ${PLAN_USERS[planActual]}`} usuarios
                  </p>
                </div>
                {PLAN_USERS[planActual] !== -1 ? (
                  <>
                    <div className="h-2 bg-white/10 rounded-full">
                      <div className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${Math.min(((segStats?.activeUsers ?? 0) / PLAN_USERS[planActual]) * 100, 100)}%` }} />
                    </div>
                    <p className="text-xs text-outline mt-2">
                      {(((segStats?.activeUsers ?? 0) / PLAN_USERS[planActual]) * 100).toFixed(1)}% del límite del plan
                    </p>
                  </>
                ) : <p className="text-xs text-tertiary font-bold mt-2">Ilimitado en plan Enterprise</p>}
              </div>

              {/* Tamaño BD */}
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between mb-3">
                  <p className="font-bold text-on-surface">Tamaño de Base de Datos</p>
                  <span className="font-bold text-on-surface">{dbInfo?.dbSize ?? '—'}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-secondary">{dbInfo?.totalTables ?? '—'}</p>
                    <p className="text-[10px] text-outline uppercase tracking-wide">Tablas</p>
                  </div>
                  <div className="bg-surface-container-highest rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-primary">{dbInfo?.totalRows?.toLocaleString() ?? '—'}</p>
                    <p className="text-[10px] text-outline uppercase tracking-wide">Registros</p>
                  </div>
                </div>
              </div>

              {/* RAM */}
              <div className="glass-panel rounded-2xl p-6">
                <div className="flex justify-between mb-3">
                  <p className="font-bold text-on-surface">RAM del Servidor</p>
                  <p className="text-sm text-on-surface-variant">
                    <span className="font-bold text-on-surface">{sistema?.ram.used ?? 0} MB</span> / {sistema?.ram.total ?? 0} MB
                  </p>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className={`h-full rounded-full transition-all ${(sistema?.ram.pct ?? 0) > 80 ? 'bg-error' : 'bg-tertiary'}`}
                    style={{ width: `${sistema?.ram.pct ?? 0}%` }} />
                </div>
                <p className="text-xs text-outline mt-2">{sistema?.ram.pct ?? 0}% utilizado</p>
              </div>

              {/* Uptime + info servidor */}
              <div className="glass-panel rounded-2xl p-6">
                <p className="font-bold text-on-surface mb-4">Información del Servidor</p>
                <div className="space-y-3">
                  {[
                    { label: 'Uptime',      value: sistema?.uptime.texto ?? '—',  icon: 'timer',   color: 'text-tertiary' },
                    { label: 'Node.js',     value: sistema?.nodeVersion ?? '—',   icon: 'code',    color: 'text-primary' },
                    { label: 'Plataforma',  value: sistema?.platform ?? '—',      icon: 'dns',     color: 'text-secondary' },
                    { label: 'Conexiones',  value: String(dbInfo?.activeConnections ?? 0), icon: 'cable', color: 'text-orange-400' },
                  ].map(s => (
                    <div key={s.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-[16px] ${s.color}`}>{s.icon}</span>
                        <span className="text-sm text-on-surface-variant">{s.label}</span>
                      </div>
                      <span className="text-sm font-bold text-on-surface font-mono">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Modal Cancelar Plan */}
    {cancelModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-sm">
          <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">warning</span>
            <h3 className="font-headline font-bold text-on-surface">Cancelar Suscripción</h3>
          </div>
          <div className="p-6 space-y-3">
            <p className="text-sm text-on-surface-variant">
              ¿Estás seguro de cancelar el plan <span className="font-bold text-on-surface">{planActual}</span> de{' '}
              <span className="font-bold text-on-surface">{empresa?.nombre}</span>?
            </p>
            <div className="bg-error/10 border border-error/20 rounded-xl p-3">
              <p className="text-xs text-error font-bold">El acceso quedará suspendido inmediatamente.</p>
              <p className="text-xs text-error/70 mt-1">MRR pasará a $0/mes. Puedes reactivar en cualquier momento.</p>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-white/5 flex justify-end gap-3">
            <button onClick={() => setCancelModal(false)}
              className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface">Cancelar</button>
            <button onClick={handleCancelPlan} disabled={saving}
              className="flex items-center gap-2 bg-error text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-error/90 disabled:opacity-50 transition-colors">
              {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
              Confirmar cancelación
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Modal Cambiar Tarjeta */}
    {cardModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-md">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">credit_card</span>
              </div>
              <div>
                <p className="font-bold text-on-surface">Cambiar Método de Pago</p>
                <p className="text-[10px] text-outline">Ingresa los datos de tu nueva tarjeta</p>
              </div>
            </div>
            <button onClick={() => setCardModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Nombre en la tarjeta</label>
              <input value={cardForm.nombre} onChange={e => setCardForm(p => ({ ...p, nombre: e.target.value }))}
                placeholder="JUAN PEREZ"
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
            </div>
            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Número de tarjeta</label>
              <input value={cardForm.numero} onChange={e => setCardForm(p => ({ ...p, numero: e.target.value }))}
                placeholder="•••• •••• •••• ••••" maxLength={19}
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Vencimiento</label>
                <input value={cardForm.vence} onChange={e => setCardForm(p => ({ ...p, vence: e.target.value }))}
                  placeholder="MM/AA" maxLength={5}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">CVV</label>
                <input value={cardForm.cvv} onChange={e => setCardForm(p => ({ ...p, cvv: e.target.value }))}
                  placeholder="•••" maxLength={4} type="password"
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-outline bg-surface-container-highest rounded-xl px-4 py-3">
              <span className="material-symbols-outlined text-[16px] text-tertiary">lock</span>
              Tus datos están cifrados con TLS 1.3. No almacenamos números de tarjeta.
            </div>
          </div>
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
            <button onClick={() => setCardModal(false)}
              className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">Cancelar</button>
            <button
              onClick={() => {
                notify({ type: 'success', title: 'Tarjeta actualizada', message: 'Método de pago guardado correctamente.', module: 'suscripcion' })
                setCardModal(false)
                setCardForm({ numero: '', vence: '', cvv: '', nombre: '' })
              }}
              disabled={!cardForm.numero || !cardForm.vence || !cardForm.cvv || !cardForm.nombre}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
              <span className="material-symbols-outlined text-[16px]">save</span>
              Guardar tarjeta
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default function SuscripcionPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <span className="material-symbols-outlined animate-spin text-primary text-4xl">progress_activity</span>
      </div>
    }>
      <SuscripcionContent />
    </Suspense>
  )
}
