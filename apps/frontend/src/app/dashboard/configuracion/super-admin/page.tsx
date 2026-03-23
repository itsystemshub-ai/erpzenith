'use client'
import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { TopBar } from '@/components/layout/TopBar'
import { useNotificationStore } from '@/stores/notificationStore'
import { api } from '@/lib/api'

interface Empresa {
  id: string
  nombre: string
  rif: string
  email?: string
  telefono?: string
  direccion?: string
  color: string
  logo?: string
  plan: string
  users: number
  status: string
  mrr: number
  createdAt: string
}

const PLAN_MRR: Record<string, number> = { Starter: 49, Business: 149, Enterprise: 399 }

const planBadge: Record<string, string> = {
  Enterprise: 'bg-secondary/20 text-secondary',
  Business:   'bg-primary/20 text-primary',
  Starter:    'bg-white/10 text-on-surface-variant',
}
const statusBadge: Record<string, string> = {
  activo:     'bg-tertiary/20 text-tertiary',
  suspendido: 'bg-error/20 text-error',
  trial:      'bg-yellow-500/20 text-yellow-400',
}

const EMPTY_FORM = {
  nombre: '', rif: '', email: '', telefono: '', direccion: '',
  plan: 'Starter', status: 'activo', color: '#6366f1', logo: '',
}

export default function SuperAdminPage() {
  const { add: notify } = useNotificationStore()
  const router = useRouter()

  const [tab, setTab]           = useState<'tenants' | 'metricas' | 'sistema'>('tenants')
  const [search, setSearch]     = useState('')
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [loading, setLoading]   = useState(true)
  const [modal, setModal]       = useState(false)
  const [form, setForm]         = useState({ ...EMPTY_FORM })
  const [saving, setSaving]     = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<Empresa | null>(null)
  const [editTarget, setEditTarget]     = useState<Empresa | null>(null)
  const [editForm, setEditForm]         = useState({ ...EMPTY_FORM })
  const [editSaving, setEditSaving]     = useState(false)
  const [openMenu, setOpenMenu]         = useState<string | null>(null)
  const [menuPos, setMenuPos]           = useState<{ top: number; left: number }>({ top: 0, left: 0 })
  const menuRef = useRef<HTMLDivElement>(null)
  const [metricas, setMetricas] = useState<any>(null)
  const [sistema, setSistema]   = useState<any>(null)

  const load = async () => {
    try {
      setLoading(true)
      const [dataEmpresas, dataMetricas, dataSistema] = await Promise.all([
        api.get('/empresas').then(r => r.data),
        api.get('/empresas/metricas').then(r => r.data),
        api.get('/empresas/sistema').then(r => r.data),
      ])
      setEmpresas(dataEmpresas)
      setMetricas(dataMetricas)
      setSistema(dataSistema)
    } catch { /* silencioso */ }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [])

  const totalMRR   = empresas.filter(e => e.status === 'activo').reduce((s, e) => s + (e.mrr ?? 0), 0)
  const totalUsers = empresas.reduce((s, e) => s + (e.users ?? 0), 0)
  const filtered   = empresas.filter(e =>
    e.nombre.toLowerCase().includes(search.toLowerCase()) ||
    e.rif.toLowerCase().includes(search.toLowerCase())
  )

  const handleAgregar = async () => {
    if (!form.nombre || !form.rif) return
    setSaving(true)
    try {
      await api.post('/empresas', {
        ...form,
        mrr: form.status === 'activo' ? PLAN_MRR[form.plan] : 0,
      })
      notify({ type: 'success', title: 'Tenant creado', message: `${form.nombre} fue registrado.`, module: 'super-admin' })
      setForm({ ...EMPTY_FORM })
      setModal(false)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo crear el tenant.', module: 'super-admin' })
    } finally { setSaving(false) }
  }

  const confirmDelete = async () => {
    if (!deleteTarget) return
    try {
      await api.delete(`/empresas/${deleteTarget.id}`)
      notify({ type: 'info', title: 'Tenant eliminado', message: `${deleteTarget.nombre} fue eliminado.`, module: 'super-admin' })
      setDeleteTarget(null)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo eliminar.', module: 'super-admin' })
    }
  }

  const toggleStatus = async (e: Empresa) => {
    const next = e.status === 'activo' ? 'suspendido' : 'activo'
    try {
      await api.patch(`/empresas/${e.id}`, { status: next, mrr: next === 'activo' ? PLAN_MRR[e.plan] : 0 })
      await load()
    } catch { /* silencioso */ }
  }

  const openEdit = (e: Empresa) => {
    setEditTarget(e)
    setEditForm({ nombre: e.nombre, rif: e.rif, email: e.email ?? '', telefono: e.telefono ?? '', direccion: e.direccion ?? '', plan: e.plan, status: e.status, color: e.color, logo: e.logo ?? '' })
    setOpenMenu(null)
  }

  const confirmEdit = async () => {
    if (!editTarget) return
    setEditSaving(true)
    try {
      await api.patch(`/empresas/${editTarget.id}`, { ...editForm, mrr: editForm.status === 'activo' ? PLAN_MRR[editForm.plan] : 0 })
      notify({ type: 'success', title: 'Tenant actualizado', message: `${editForm.nombre} fue actualizado.`, module: 'super-admin' })
      setEditTarget(null)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo actualizar el tenant.', module: 'super-admin' })
    } finally { setEditSaving(false) }
  }

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(ev.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const set = (k: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: ev.target.value }))

  const handleLogoUpload = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) {
      notify({ type: 'error', title: 'Archivo muy grande', message: 'El logo no puede superar 2MB.', module: 'super-admin' })
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => setForm(prev => ({ ...prev, logo: e.target?.result as string }))
    reader.readAsDataURL(file)
  }

  return (
    <>
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-6 space-y-6 max-w-[1800px] mx-auto w-full">

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-headline font-bold text-on-surface">Panel Super-Admin</h2>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-error/20 text-error">ADMIN</span>
          </div>
          <p className="text-on-surface-variant mt-1">Control total del sistema SaaS multi-tenant</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'MRR Total',        value: `$${totalMRR.toLocaleString()}`, icon: 'payments',   color: 'text-tertiary' },
          { label: 'Tenants Activos',  value: String(empresas.filter(e => e.status === 'activo').length), icon: 'business', color: 'text-primary' },
          { label: 'Usuarios Totales', value: String(totalUsers), icon: 'group', color: 'text-secondary' },
          { label: 'Uptime',           value: '99.97%', icon: 'monitoring', color: 'text-tertiary' },
        ].map(k => (
          <div key={k.label} className="glass-panel rounded-2xl p-6 flex items-center gap-4">
            <span className={`material-symbols-outlined text-3xl ${k.color}`}>{k.icon}</span>
            <div>
              <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
              <p className="text-xs text-outline">{k.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
        {(['tenants', 'metricas', 'sistema'] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-5 py-2 rounded-lg text-sm font-bold transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
            {t === 'tenants' ? 'Tenants' : t === 'metricas' ? 'Métricas' : 'Sistema'}
          </button>
        ))}
      </div>

      {/* Tab Tenants */}
      {tab === 'tenants' && (
        <div className="space-y-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="relative flex-1 min-w-[200px] max-w-sm">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
              <input value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Buscar por nombre o RIF..."
                className="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none" />
            </div>
            <button onClick={() => setModal(true)}
              className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Nuevo Tenant
            </button>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
              <table className="w-full text-sm" style={{ minWidth: '980px' }}>
                <thead>
                  <tr className="border-b border-white/10">
                    {['Foto', 'Empresa', 'RIF', 'Email', 'Teléfono', 'Dirección', 'Plan', 'Usuarios', 'MRR', 'Desde', 'Estado', 'Acciones'].map(h => (
                      <th key={h} className="text-left px-4 py-4 text-xs text-outline font-bold uppercase tracking-wide whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <tr key={i}><td colSpan={12} className="px-4 py-4">
                          <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
                        </td></tr>
                      ))
                    : filtered.map(e => (
                        <tr key={e.id} className="hover:bg-white/5 transition-colors">
                          <td className="px-4 py-3">
                            {e.logo
                              ? <img src={e.logo} alt={e.nombre} className="w-8 h-8 rounded-lg object-cover" />
                              : <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${e.color}33` }}>
                                  <span className="material-symbols-outlined text-[14px]" style={{ color: e.color }}>business</span>
                                </div>
                            }
                          </td>
                          <td className="px-4 py-3 font-bold text-on-surface max-w-[120px]">
                            <span className="block truncate">{e.nombre}</span>
                          </td>
                          <td className="px-4 py-3 font-mono text-xs text-on-surface-variant whitespace-nowrap">{e.rif}</td>
                          <td className="px-4 py-3 text-xs text-on-surface-variant max-w-[130px]">
                            <span className="block truncate">{e.email || '—'}</span>
                          </td>
                          <td className="px-4 py-3 text-xs text-on-surface-variant whitespace-nowrap">{e.telefono || '—'}</td>
                          <td className="px-4 py-3 text-xs text-on-surface-variant max-w-[160px] truncate">{e.direccion || '—'}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${planBadge[e.plan] ?? 'bg-white/10 text-on-surface-variant'}`}>{e.plan}</span>
                          </td>
                          <td className="px-4 py-3 text-on-surface-variant text-center">{e.users}</td>
                          <td className="px-4 py-3 font-bold text-on-surface font-mono">
                            <button
                              onClick={() => router.push(`/dashboard/configuracion/suscripcion?empresaId=${e.id}`)}
                              className="flex items-center gap-1.5 text-tertiary hover:text-tertiary/80 hover:underline transition-colors group"
                              title="Ver suscripción"
                            >
                              <span className="font-mono font-bold">${e.mrr}</span>
                              <span className="material-symbols-outlined text-[13px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                            </button>
                          </td>
                          <td className="px-4 py-3 text-on-surface-variant text-xs whitespace-nowrap">{e.createdAt?.slice(0, 10)}</td>
                          <td className="px-4 py-3">
                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusBadge[e.status] ?? 'bg-white/10 text-on-surface-variant'}`}>{e.status}</span>
                          </td>
                          <td className="px-4 py-3">
                            <button
                              onClick={(ev) => {
                                const rect = (ev.currentTarget as HTMLButtonElement).getBoundingClientRect()
                                const menuHeight = 130 // approx height of 3 items
                                const spaceBelow = window.innerHeight - rect.bottom
                                const top = spaceBelow < menuHeight + 10
                                  ? rect.top - menuHeight - 6
                                  : rect.bottom + 6
                                setMenuPos({ top, left: rect.right - 176 })
                                setOpenMenu(openMenu === e.id ? null : e.id)
                              }}
                              className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                              <span className="material-symbols-outlined text-[18px]">more_vert</span>
                            </button>
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
            {!loading && filtered.length === 0 && (
              <div className="py-12 text-center text-outline text-sm">No hay tenants registrados. Crea el primero.</div>
            )}
          </div>
        </div>
      )}

      {/* Tab Métricas */}
      {tab === 'metricas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {metricas ? [
            { label: 'MRR Total',        value: `$${metricas.mrrTotal.toLocaleString()}`, sub: `${metricas.activos} tenants activos`,   icon: 'payments',             color: 'text-tertiary' },
            { label: 'Churn Rate',       value: metricas.churnRate,                       sub: `${metricas.suspendidos} suspendidos`,    icon: 'trending_down',        color: 'text-error' },
            { label: 'Total Tenants',    value: String(metricas.totalTenants),             sub: `${metricas.trial} en trial`,             icon: 'business',             color: 'text-primary' },
            { label: 'Usuarios Totales', value: String(metricas.totalUsers),               sub: 'en todos los tenants',                   icon: 'group',                color: 'text-secondary' },
          ].map(m => (
            <div key={m.label} className="glass-panel rounded-2xl p-6 flex items-center gap-5">
              <span className={`material-symbols-outlined text-4xl ${m.color}`}>{m.icon}</span>
              <div>
                <p className="text-3xl font-headline font-bold text-on-surface">{m.value}</p>
                <p className="font-bold text-on-surface-variant">{m.label}</p>
                <p className="text-xs text-outline">{m.sub}</p>
              </div>
            </div>
          )) : (
            <div className="col-span-2 py-12 text-center text-outline text-sm">Cargando métricas...</div>
          )}
        </div>
      )}

      {/* Tab Sistema */}
      {tab === 'sistema' && (
        <div className="space-y-4">
          {sistema ? (
            <>
              {/* RAM */}
              <div className="glass-panel rounded-2xl p-5">
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-on-surface">Memoria RAM (Heap Node.js)</span>
                  <span className="font-bold text-on-surface">{sistema.ram.used} MB / {sistema.ram.total} MB — {sistema.ram.pct}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${sistema.ram.pct}%` }} />
                </div>
              </div>

              {/* Info del servidor */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Uptime del servidor', value: sistema.uptime.texto, icon: 'timer', color: 'text-tertiary' },
                  { label: 'Versión Node.js',     value: sistema.nodeVersion,  icon: 'code',  color: 'text-primary' },
                  { label: 'Plataforma',          value: sistema.platform,     icon: 'dns',   color: 'text-secondary' },
                ].map(s => (
                  <div key={s.label} className="glass-panel rounded-2xl p-5 flex items-center gap-4">
                    <span className={`material-symbols-outlined text-3xl ${s.color}`}>{s.icon}</span>
                    <div>
                      <p className="font-headline font-bold text-on-surface">{s.value}</p>
                      <p className="text-xs text-outline">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-outline text-sm">Cargando datos del sistema...</div>
          )}
        </div>
      )}
    </div>
    </div>

    {/* Modal Nuevo Tenant */}
    {modal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">business</span>
              </div>
              <div>
                <p className="font-bold text-on-surface">Nuevo Tenant</p>
                <p className="text-[10px] text-outline">Registra una nueva empresa en el sistema</p>
              </div>
            </div>
            <button onClick={() => setModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
              {/* Preview / trigger */}
              <label htmlFor="logo-upload" className="w-14 h-14 rounded-xl border-2 border-dashed border-primary/40 flex items-center justify-center shrink-0 cursor-pointer hover:border-primary transition-colors overflow-hidden"
                style={{ background: form.logo ? 'transparent' : undefined }}>
                {form.logo
                  ? <img src={form.logo} alt="logo" className="w-full h-full object-cover rounded-xl" />
                  : <span className="material-symbols-outlined text-primary text-2xl">add_photo_alternate</span>
                }
              </label>
              <input id="logo-upload" type="file" accept="image/png,image/jpeg,image/svg+xml"
                className="hidden" onChange={handleLogoUpload} />
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface">Logo de la empresa</p>
                <p className="text-[10px] text-outline mt-0.5">PNG, JPG o SVG · Máx 2MB</p>
                {form.logo && (
                  <button type="button" onClick={() => setForm(p => ({ ...p, logo: '' }))}
                    className="mt-1 text-[10px] text-error hover:text-error/80 font-bold transition-colors">
                    Quitar logo
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <input type="color" value={form.color} onChange={set('color')}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0" />
                <span className="font-mono text-[10px] text-outline">{form.color}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { label: 'Nombre de la Empresa *', key: 'nombre',   placeholder: 'Empresa S.A.' },
                { label: 'RIF / NIT *',            key: 'rif',      placeholder: 'J-40000000-0' },
                { label: 'Email Corporativo',      key: 'email',    placeholder: 'admin@empresa.com' },
                { label: 'Teléfono',               key: 'telefono', placeholder: '+58 412-000-0000' },
              ] as { label: string; key: keyof typeof form; placeholder: string }[]).map(f => (
                <div key={f.key}>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">{f.label}</label>
                  <input value={form[f.key]} onChange={set(f.key)} placeholder={f.placeholder}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
                </div>
              ))}
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Dirección</label>
              <input value={form.direccion} onChange={set('direccion')} placeholder="Av. Principal, Caracas, Venezuela"
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Plan</label>
                <select value={form.plan} onChange={set('plan')}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="Starter">Starter — $49/mes</option>
                  <option value="Business">Business — $149/mes</option>
                  <option value="Enterprise">Enterprise — $399/mes</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Estado inicial</label>
                <select value={form.status} onChange={set('status')}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="activo">Activo</option>
                  <option value="trial">Trial</option>
                  <option value="suspendido">Suspendido</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between bg-surface-container-highest rounded-xl px-4 py-3">
              <span className="text-xs text-outline">MRR estimado</span>
              <span className="font-mono font-bold text-tertiary">
                ${form.status === 'activo' || form.status === 'trial' ? PLAN_MRR[form.plan] : 0}/mes
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
            <button onClick={() => setModal(false)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">
              Cancelar
            </button>
            <button onClick={handleAgregar} disabled={saving || !form.nombre || !form.rif}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
              {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
              {saving ? 'Guardando...' : 'Crear Tenant'}
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Dropdown acciones — portal para salir de cualquier overflow/stacking context */}
    {openMenu && (() => {
      const e = empresas.find(x => x.id === openMenu)
      if (!e) return null
      return createPortal(
        <div ref={menuRef}
          className="fixed z-[9999] w-44 glass-panel rounded-xl shadow-2xl border border-white/10 overflow-hidden"
          style={{ top: menuPos.top, left: menuPos.left }}>
          <button onClick={() => openEdit(e)}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-on-surface hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[16px] text-primary">edit</span>
            Editar
          </button>
          <button onClick={() => { toggleStatus(e); setOpenMenu(null) }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-on-surface hover:bg-white/10 transition-colors">
            <span className={`material-symbols-outlined text-[16px] ${e.status === 'activo' ? 'text-error' : 'text-tertiary'}`}>
              {e.status === 'activo' ? 'pause_circle' : 'play_circle'}
            </span>
            {e.status === 'activo' ? 'Suspender' : 'Activar'}
          </button>
          <div className="border-t border-white/10" />
          <button onClick={() => { setDeleteTarget(e); setOpenMenu(null) }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-error hover:bg-error/10 transition-colors">
            <span className="material-symbols-outlined text-[16px]">delete</span>
            Eliminar
          </button>
        </div>,
        document.body
      )
    })()}

    {/* Modal Editar Tenant */}
    {editTarget && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">edit</span>
              </div>
              <div>
                <p className="font-bold text-on-surface">Editar Tenant</p>
                <p className="text-[10px] text-outline">{editTarget.nombre}</p>
              </div>
            </div>
            <button onClick={() => setEditTarget(null)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Logo + color */}
            <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
              <label htmlFor="edit-logo-upload" className="w-14 h-14 rounded-xl border-2 border-dashed border-primary/40 flex items-center justify-center shrink-0 cursor-pointer hover:border-primary transition-colors overflow-hidden">
                {editForm.logo
                  ? <img src={editForm.logo} alt="logo" className="w-full h-full object-cover rounded-xl" />
                  : <span className="material-symbols-outlined text-primary text-2xl">add_photo_alternate</span>
                }
              </label>
              <input id="edit-logo-upload" type="file" accept="image/png,image/jpeg,image/svg+xml" className="hidden"
                onChange={(ev) => {
                  const file = ev.target.files?.[0]
                  if (!file) return
                  if (file.size > 2 * 1024 * 1024) {
                    notify({ type: 'error', title: 'Archivo muy grande', message: 'El logo no puede superar 2MB.', module: 'super-admin' })
                    return
                  }
                  const reader = new FileReader()
                  reader.onload = (e) => setEditForm(p => ({ ...p, logo: e.target?.result as string }))
                  reader.readAsDataURL(file)
                }} />
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface">Logo de la empresa</p>
                <p className="text-[10px] text-outline mt-0.5">PNG, JPG o SVG · Máx 2MB</p>
                {editForm.logo && (
                  <button type="button" onClick={() => setEditForm(p => ({ ...p, logo: '' }))}
                    className="mt-1 text-[10px] text-error hover:text-error/80 font-bold transition-colors">
                    Quitar logo
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <input type="color" value={editForm.color} onChange={e => setEditForm(p => ({ ...p, color: e.target.value }))}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0" />
                <span className="font-mono text-[10px] text-outline">{editForm.color}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { label: 'Nombre de la Empresa *', key: 'nombre',   placeholder: 'Empresa S.A.' },
                { label: 'RIF / NIT *',            key: 'rif',      placeholder: 'J-40000000-0' },
                { label: 'Email Corporativo',      key: 'email',    placeholder: 'admin@empresa.com' },
                { label: 'Teléfono',               key: 'telefono', placeholder: '+58 412-000-0000' },
              ] as { label: string; key: keyof typeof editForm; placeholder: string }[]).map(f => (
                <div key={f.key}>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">{f.label}</label>
                  <input value={editForm[f.key]} onChange={e => setEditForm(p => ({ ...p, [f.key]: e.target.value }))} placeholder={f.placeholder}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
                </div>
              ))}
            </div>
            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Dirección</label>
              <input value={editForm.direccion} onChange={e => setEditForm(p => ({ ...p, direccion: e.target.value }))} placeholder="Av. Principal, Caracas, Venezuela"
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Plan</label>
                <select value={editForm.plan} onChange={e => setEditForm(p => ({ ...p, plan: e.target.value }))}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="Starter">Starter — $49/mes</option>
                  <option value="Business">Business — $149/mes</option>
                  <option value="Enterprise">Enterprise — $399/mes</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Estado</label>
                <select value={editForm.status} onChange={e => setEditForm(p => ({ ...p, status: e.target.value }))}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option value="activo">Activo</option>
                  <option value="trial">Trial</option>
                  <option value="suspendido">Suspendido</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between bg-surface-container-highest rounded-xl px-4 py-3">
              <span className="text-xs text-outline">MRR estimado</span>
              <span className="font-mono font-bold text-tertiary">
                ${editForm.status === 'activo' ? PLAN_MRR[editForm.plan] : 0}/mes
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
            <button onClick={() => setEditTarget(null)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">
              Cancelar
            </button>
            <button onClick={confirmEdit} disabled={editSaving || !editForm.nombre || !editForm.rif}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
              {editSaving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
              {editSaving ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Modal Confirmar Eliminar */}
    {deleteTarget && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-sm">
          <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
            <span className="material-symbols-outlined text-error">warning</span>
            <h3 className="font-headline font-bold text-on-surface">Eliminar Tenant</h3>
          </div>
          <div className="p-6 space-y-2">
            <p className="text-sm text-on-surface-variant">¿Eliminar <span className="font-bold text-on-surface">{deleteTarget.nombre}</span>?</p>
            <p className="text-xs font-mono text-outline bg-surface-container-highest px-3 py-2 rounded-lg">{deleteTarget.rif}</p>
            <p className="text-xs text-error">Esta acción no se puede deshacer.</p>
          </div>
          <div className="px-6 py-4 border-t border-white/5 flex justify-end gap-3">
            <button onClick={() => setDeleteTarget(null)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface">Cancelar</button>
            <button onClick={confirmDelete} className="bg-error text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-error/90 transition-colors">Eliminar</button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
