'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useNotificationStore } from '@/stores/notificationStore'

interface Tenant {
  id: string
  name: string
  rif: string
  email: string
  telefono: string
  direccion: string
  plan: 'Starter' | 'Business' | 'Enterprise'
  users: number
  status: 'activo' | 'suspendido' | 'trial'
  mrr: number
  since: string
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

const EMPTY_FORM = { name: '', rif: '', email: '', telefono: '', direccion: '', plan: 'Starter' as Tenant['plan'], status: 'activo' as Tenant['status'], color: '#6366f1' }

const INITIAL_TENANTS: Tenant[] = [
  { id: 'T001', name: 'Empresa Zenith S.A.',      rif: 'J-40000001-0', email: 'admin@zenith.com',   telefono: '+58 412-000-0001', direccion: 'Caracas, Venezuela',       plan: 'Enterprise', users: 18, status: 'activo',     mrr: 399, since: '2024-01-15' },
  { id: 'T002', name: 'Distribuidora Norte C.A.', rif: 'J-40000002-0', email: 'norte@dist.com',     telefono: '+58 412-000-0002', direccion: 'Maracaibo, Venezuela',      plan: 'Business',   users: 12, status: 'activo',     mrr: 149, since: '2024-03-20' },
  { id: 'T003', name: 'Comercial Sur S.R.L.',     rif: 'J-40000003-0', email: 'sur@comercial.com',  telefono: '+58 412-000-0003', direccion: 'Valencia, Venezuela',       plan: 'Starter',    users:  4, status: 'activo',     mrr:  49, since: '2024-06-10' },
  { id: 'T004', name: 'Tech Solutions VE',        rif: 'J-40000004-0', email: 'tech@solutions.com', telefono: '+58 412-000-0004', direccion: 'Barquisimeto, Venezuela',   plan: 'Business',   users:  8, status: 'suspendido', mrr:   0, since: '2024-02-28' },
  { id: 'T005', name: 'Grupo Industrial ABC',     rif: 'J-40000005-0', email: 'abc@grupo.com',      telefono: '+58 412-000-0005', direccion: 'Maturín, Venezuela',        plan: 'Enterprise', users: 35, status: 'activo',     mrr: 399, since: '2023-11-05' },
]

export default function SuperAdminPage() {
  const { add: notify } = useNotificationStore()
  const [tab, setTab]         = useState<'tenants' | 'metricas' | 'sistema'>('tenants')
  const [search, setSearch]   = useState('')
  const [tenants, setTenants] = useState<Tenant[]>(INITIAL_TENANTS)
  const [modal, setModal]     = useState(false)
  const [form, setForm]       = useState({ ...EMPTY_FORM })
  const [saving, setSaving]   = useState(false)
  const [deleteTarget, setDeleteTarget] = useState<Tenant | null>(null)

  const totalMRR   = tenants.filter(t => t.status === 'activo').reduce((s, t) => s + t.mrr, 0)
  const totalUsers = tenants.reduce((s, t) => s + t.users, 0)
  const filtered   = tenants.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.rif.toLowerCase().includes(search.toLowerCase())
  )

  const nextId = () => `T${String(tenants.length + 1).padStart(3, '0')}`

  const handleAgregar = async () => {
    if (!form.name || !form.rif) return
    setSaving(true)
    await new Promise(r => setTimeout(r, 400))
    const nuevo: Tenant = {
      id: nextId(),
      name: form.name,
      rif: form.rif,
      email: form.email,
      telefono: form.telefono,
      direccion: form.direccion,
      plan: form.plan,
      status: form.status,
      users: 0,
      mrr: form.status === 'activo' ? PLAN_MRR[form.plan] : 0,
      since: new Date().toISOString().slice(0, 10),
    }
    setTenants(prev => [...prev, nuevo])
    notify({ type: 'success', title: 'Tenant creado', message: `${form.name} fue registrado correctamente.`, module: 'super-admin' })
    setForm({ ...EMPTY_FORM })
    setSaving(false)
    setModal(false)
  }

  const handleDelete = (t: Tenant) => setDeleteTarget(t)
  const confirmDelete = () => {
    if (!deleteTarget) return
    setTenants(prev => prev.filter(t => t.id !== deleteTarget.id))
    notify({ type: 'info', title: 'Tenant eliminado', message: `${deleteTarget.name} fue eliminado.`, module: 'super-admin' })
    setDeleteTarget(null)
  }

  const toggleStatus = (id: string) => {
    setTenants(prev => prev.map(t => {
      if (t.id !== id) return t
      const next = t.status === 'activo' ? 'suspendido' : 'activo'
      return { ...t, status: next, mrr: next === 'activo' ? PLAN_MRR[t.plan] : 0 }
    }))
  }

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  return (
    <>
    <div className="w-full p-6 space-y-6">
      <TopBar title="Configuración" />

      {/* Header */}
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
          { label: 'MRR Total',       value: `$${totalMRR.toLocaleString()}`, icon: 'payments',   color: 'text-tertiary' },
          { label: 'Tenants Activos', value: String(tenants.filter(t => t.status === 'activo').length), icon: 'business', color: 'text-primary' },
          { label: 'Usuarios Totales',value: String(totalUsers),              icon: 'group',       color: 'text-secondary' },
          { label: 'Uptime',          value: '99.97%',                        icon: 'monitoring',  color: 'text-tertiary' },
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
            <button
              onClick={() => setModal(true)}
              className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              Nuevo Tenant
            </button>
          </div>

          <div className="glass-panel rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {['ID', 'Empresa', 'RIF', 'Email', 'Teléfono', 'Dirección', 'Plan', 'Usuarios', 'MRR', 'Desde', 'Estado', 'Acciones'].map(h => (
                    <th key={h} className="text-left px-4 py-4 text-xs text-outline font-bold uppercase tracking-wide whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(t => (
                  <tr key={t.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs text-outline">{t.id}</td>
                    <td className="px-4 py-3 font-bold text-on-surface">{t.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">{t.rif}</td>
                    <td className="px-4 py-3 text-xs text-on-surface-variant">{t.email || '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface-variant whitespace-nowrap">{t.telefono || '—'}</td>
                    <td className="px-4 py-3 text-xs text-on-surface-variant max-w-[160px] truncate">{t.direccion || '—'}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${planBadge[t.plan]}`}>{t.plan}</span>
                    </td>
                    <td className="px-4 py-3 text-on-surface-variant text-center">{t.users}</td>
                    <td className="px-4 py-3 font-bold text-on-surface font-mono">${t.mrr}</td>
                    <td className="px-4 py-3 text-on-surface-variant text-xs whitespace-nowrap">{t.since}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${statusBadge[t.status]}`}>{t.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleStatus(t.id)}
                          title={t.status === 'activo' ? 'Suspender' : 'Activar'}
                          className={`p-1 rounded-lg transition-colors ${t.status === 'activo' ? 'hover:bg-error/20 text-outline hover:text-error' : 'hover:bg-tertiary/20 text-outline hover:text-tertiary'}`}
                        >
                          <span className="material-symbols-outlined text-[16px]">{t.status === 'activo' ? 'pause_circle' : 'play_circle'}</span>
                        </button>
                        <button
                          onClick={() => handleDelete(t)}
                          title="Eliminar"
                          className="p-1 rounded-lg hover:bg-error/20 text-outline hover:text-error transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div className="py-12 text-center text-outline text-sm">No se encontraron tenants.</div>
            )}
          </div>
        </div>
      )}

      {/* Tab Métricas */}
      {tab === 'metricas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Crecimiento MRR', value: '+12.4%', sub: 'vs mes anterior',  icon: 'trending_up',              color: 'text-tertiary' },
            { label: 'Churn Rate',      value: '2.1%',   sub: 'últimos 30 días',  icon: 'trending_down',            color: 'text-error' },
            { label: 'NPS Score',       value: '72',     sub: 'Excelente',         icon: 'sentiment_very_satisfied', color: 'text-primary' },
            { label: 'Tickets Soporte', value: '8',      sub: 'abiertos hoy',      icon: 'support_agent',            color: 'text-orange-400' },
          ].map(m => (
            <div key={m.label} className="glass-panel rounded-2xl p-6 flex items-center gap-5">
              <span className={`material-symbols-outlined text-4xl ${m.color}`}>{m.icon}</span>
              <div>
                <p className="text-3xl font-headline font-bold text-on-surface">{m.value}</p>
                <p className="font-bold text-on-surface-variant">{m.label}</p>
                <p className="text-xs text-outline">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Sistema */}
      {tab === 'sistema' && (
        <div className="space-y-4">
          {[
            { label: 'CPU',            value: 34, unit: '%', color: 'bg-tertiary' },
            { label: 'Memoria RAM',    value: 62, unit: '%', color: 'bg-primary' },
            { label: 'Disco',          value: 48, unit: '%', color: 'bg-secondary' },
            { label: 'Ancho de Banda', value: 23, unit: '%', color: 'bg-orange-500' },
          ].map(r => (
            <div key={r.label} className="glass-panel rounded-2xl p-5">
              <div className="flex justify-between mb-2">
                <span className="font-bold text-on-surface">{r.label}</span>
                <span className="font-bold text-on-surface">{r.value}{r.unit}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full">
                <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    {/* Modal Nuevo Tenant */}
    {modal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
          {/* Header */}
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

          {/* Body */}
          <div className="p-6 space-y-4">

            {/* Logo + color */}
            <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
              <div className="w-14 h-14 rounded-xl bg-primary/20 border-2 border-dashed border-primary/40 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">add_photo_alternate</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-on-surface">Logo de la empresa</p>
                <p className="text-[10px] text-outline mt-0.5">PNG, JPG o SVG · Máx 2MB · 200×200px</p>
                <button className="mt-1.5 text-[10px] text-primary font-bold hover:text-primary/80 transition-colors">Subir logo</button>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <input
                  type="color"
                  value={form.color}
                  onChange={set('color')}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <span className="font-mono text-[10px] text-outline">{form.color}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { label: 'Nombre de la Empresa *', key: 'name',     placeholder: 'Empresa S.A.' },
                { label: 'RIF / NIT *',            key: 'rif',      placeholder: 'J-40000000-0' },
                { label: 'Email Corporativo',      key: 'email',    placeholder: 'admin@empresa.com' },
                { label: 'Teléfono',               key: 'telefono', placeholder: '+58 412-000-0000' },
              ] as { label: string; key: keyof typeof form; placeholder: string }[]).map(f => (
                <div key={f.key}>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">{f.label}</label>
                  <input
                    value={form[f.key] as string}
                    onChange={set(f.key)}
                    placeholder={f.placeholder}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline"
                  />
                </div>
              ))}
            </div>

            {/* Dirección — full width */}
            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Dirección</label>
              <input
                value={form.direccion}
                onChange={set('direccion')}
                placeholder="Av. Principal, Caracas, Venezuela"
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Plan</label>
                <select
                  value={form.plan}
                  onChange={set('plan')}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="Starter">Starter — $49/mes</option>
                  <option value="Business">Business — $149/mes</option>
                  <option value="Enterprise">Enterprise — $399/mes</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Estado inicial</label>
                <select
                  value={form.status}
                  onChange={set('status')}
                  className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="activo">Activo</option>
                  <option value="trial">Trial</option>
                  <option value="suspendido">Suspendido</option>
                </select>
              </div>
            </div>

            {/* Preview MRR */}
            <div className="flex items-center justify-between bg-surface-container-highest rounded-xl px-4 py-3">
              <span className="text-xs text-outline">MRR estimado</span>
              <span className="font-mono font-bold text-tertiary">
                ${form.status === 'activo' || form.status === 'trial' ? PLAN_MRR[form.plan] : 0}/mes
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
            <button onClick={() => setModal(false)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">
              Cancelar
            </button>
            <button
              onClick={handleAgregar}
              disabled={saving || !form.name || !form.rif}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors"
            >
              {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
              {saving ? 'Guardando...' : 'Crear Tenant'}
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
            <p className="text-sm text-on-surface-variant">¿Eliminar <span className="font-bold text-on-surface">{deleteTarget.name}</span>?</p>
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
