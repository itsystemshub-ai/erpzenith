'use client'
import { useState, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useNotificationStore } from '@/stores/notificationStore'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

interface Empresa {
  id: string; nombre: string; rif: string; email?: string; telefono?: string
  direccion?: string; color?: string; logo?: string; isActive: boolean; createdAt: string
}

const EMPTY_FORM = { nombre: '', rif: '', email: '', telefono: '', direccion: '', color: '#6366f1' }

function authHeaders() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
}

export default function TenantPage() {
  const { add: addNotification } = useNotificationStore()
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [saving, setSaving] = useState(false)

  const load = () => {
    setLoading(true)
    fetch(`${API}/empresas`, { headers: authHeaders() })
      .then(r => r.json()).then(d => setEmpresas(Array.isArray(d) ? d : []))
      .finally(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleAgregar = async () => {
    if (!form.nombre || !form.rif) return
    setSaving(true)
    try {
      const res = await fetch(`${API}/empresas`, {
        method: 'POST', headers: authHeaders(), body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Error al crear empresa')
      addNotification({ type: 'success', title: 'Empresa registrada', message: `${form.nombre} fue agregada correctamente.`, module: 'configuracion/tenant' })
      setForm({ ...EMPTY_FORM })
      setModal(false)
      load()
    } catch {
      addNotification({ type: 'error', title: 'Error', message: 'No se pudo registrar la empresa.', module: 'configuracion/tenant' })
    } finally { setSaving(false) }
  }

  const handleEliminar = async (id: string, nombre: string) => {
    if (!confirm(`¿Eliminar "${nombre}"?`)) return
    try {
      await fetch(`${API}/empresas/${id}`, { method: 'DELETE', headers: authHeaders() })
      addNotification({ type: 'info', title: 'Empresa eliminada', message: `${nombre} fue eliminada.`, module: 'configuracion/tenant' })
      load()
    } catch {
      addNotification({ type: 'error', title: 'Error', message: 'No se pudo eliminar la empresa.', module: 'configuracion/tenant' })
    }
  }

  const activas = empresas.filter(e => e.isActive).length
  const conLogo = empresas.filter(e => e.logo).length

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1400px] mx-auto w-full">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Identidad del Tenant</h2>
            <p className="text-on-surface-variant mt-1">Gestiona las empresas registradas en el sistema.</p>
          </div>
          <button onClick={() => setModal(true)}
            className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">add</span>Agregar Empresa
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Empresas',   value: String(empresas.length), icon: 'domain',       color: 'text-primary',     bg: 'bg-primary/10' },
            { label: 'Activas',    value: String(activas),         icon: 'check_circle', color: 'text-tertiary',    bg: 'bg-tertiary/10' },
            { label: 'Con Logo',   value: String(conLogo),         icon: 'image',        color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
            { label: 'Inactivas',  value: String(empresas.length - activas), icon: 'block', color: 'text-amber-400', bg: 'bg-amber-400/10' },
          ].map(k => (
            <div key={k.label} className="glass-panel rounded-2xl p-5">
              <div className={`w-9 h-9 rounded-xl ${k.bg} flex items-center justify-center mb-3`}>
                <span className={`material-symbols-outlined text-[20px] ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-[10px] text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Tabla */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          {loading ? (
            <div className="py-16 text-center text-outline text-sm">Cargando empresas...</div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['Logo', 'RIF / NIT', 'Empresa', 'Email', 'Teléfono', 'Dirección', 'Registrada', 'Acc.'].map(h => (
                    <th key={h} className={`px-3 py-3 whitespace-nowrap ${h === 'Acc.' ? 'text-right' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {empresas.map(e => (
                  <tr key={e.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-3 py-3">
                      {e.logo ? (
                        <img src={e.logo} alt={e.nombre} className="w-9 h-9 rounded-xl object-cover" />
                      ) : (
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                          style={{ backgroundColor: e.color ?? '#6366f1' }}>
                          {e.nombre.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-3 text-xs font-mono text-on-surface-variant whitespace-nowrap">{e.rif}</td>
                    <td className="px-3 py-3 text-xs font-semibold text-on-surface max-w-[160px] truncate">{e.nombre}</td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant max-w-[160px] truncate">{e.email || '—'}</td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant whitespace-nowrap">{e.telefono || '—'}</td>
                    <td className="px-3 py-3 text-xs text-on-surface-variant max-w-[160px] truncate">{e.direccion || '—'}</td>
                    <td className="px-3 py-3 text-xs text-outline whitespace-nowrap">
                      {new Date(e.createdAt).toLocaleDateString('es-VE')}
                    </td>
                    <td className="px-3 py-3 text-right">
                      <button onClick={() => handleEliminar(e.id, e.nombre)}
                        className="p-1 rounded-lg hover:bg-error/10 text-outline hover:text-error transition-colors">
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && empresas.length === 0 && (
            <div className="py-16 text-center">
              <span className="material-symbols-outlined text-4xl text-outline/30 block mb-2">domain_disabled</span>
              <p className="text-sm text-outline">No hay empresas registradas.</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModal(false)} />
          <div className="relative z-10 w-full max-w-[600px] glass-panel rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[20px]">domain_add</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface text-sm">Nueva Empresa</p>
                  <p className="text-[10px] text-outline">Completa los datos para registrar</p>
                </div>
              </div>
              <button onClick={() => setModal(false)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="flex items-center gap-5 p-4 bg-surface-container rounded-xl">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shrink-0"
                  style={{ backgroundColor: form.color }}>
                  {form.nombre ? form.nombre.charAt(0).toUpperCase() : '?'}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-on-surface">Color de la empresa</p>
                  <p className="text-[10px] text-outline mt-0.5">Se usará como avatar hasta subir un logo</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <input type="color" value={form.color} onChange={set('color')}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0" />
                  <span className="font-mono text-[10px] text-outline">{form.color}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {([
                  { label: 'Nombre de la Empresa *', key: 'nombre',   placeholder: 'NexusCore Zenith C.A.' },
                  { label: 'RIF / NIT *',            key: 'rif',      placeholder: 'J-40000001-0' },
                  { label: 'Email Corporativo',      key: 'email',    placeholder: 'admin@empresa.com' },
                  { label: 'Teléfono',               key: 'telefono', placeholder: '+58 412-000-0000' },
                ] as { label: string; key: keyof typeof form; placeholder: string }[]).map(f => (
                  <div key={f.key}>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-1.5">{f.label}</label>
                    <input value={form[f.key]} onChange={set(f.key)} placeholder={f.placeholder}
                      className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-2.5 text-on-surface text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-outline outline-none" />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-1.5">Dirección</label>
                  <input value={form.direccion} onChange={set('direccion')} placeholder="Av. Principal, Caracas, Venezuela"
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-2.5 text-on-surface text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-outline outline-none" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
              <button onClick={() => setModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-outline hover:text-on-surface hover:bg-white/10 transition-colors uppercase tracking-widest font-spartan">
                Cancelar
              </button>
              <button onClick={handleAgregar} disabled={saving || !form.nombre || !form.rif}
                className="flex items-center gap-2 px-5 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 uppercase tracking-widest font-spartan">
                <span className="material-symbols-outlined text-[16px]">{saving ? 'hourglass_empty' : 'add'}</span>
                {saving ? 'Guardando...' : 'Agregar Empresa'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
