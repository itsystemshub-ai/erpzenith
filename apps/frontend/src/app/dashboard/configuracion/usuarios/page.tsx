'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { TopBar } from '@/components/layout/TopBar'
import { useNotificationStore } from '@/stores/notificationStore'
import { useAuthStore } from '@/stores/authStore'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

interface Role { id: string; name: string }
interface Empresa { id: string; nombre: string; color: string; logo?: string }
interface Usuario {
  id: string; name: string; username: string; isActive: boolean; createdAt: string
  roles: Role[]; empresa?: Empresa; empresaId?: string; _showPass?: boolean
}

// Misma función determinista del seed para mostrar contraseña por username
function getDefaultPass(username: string): string {
  const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ'
  const lower = 'abcdefghjkmnpqrstuvwxyz'
  const digits = '23456789'
  const symbols = '@#$%&!'
  const hash = username.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  const u1 = upper[(hash * 3) % upper.length]
  const u2 = upper[(hash * 7) % upper.length]
  const u3 = upper[(hash * 11) % upper.length]
  const d1 = digits[(hash * 5) % digits.length]
  const d2 = digits[(hash * 13) % digits.length]
  const d3 = digits[(hash * 17) % digits.length]
  const d4 = digits[(hash * 19) % digits.length]
  const l1 = lower[(hash * 23) % lower.length]
  const l2 = lower[(hash * 29) % lower.length]
  const sym = symbols[(hash * 31) % symbols.length]
  return `${u1}${u2}${d1}${d2}${l1}${l2}${u3}${d3}${d4}${sym}`
}

const EMPTY_FORM = { name: '', username: '', password: '', roleIds: [] as string[], empresaId: '' }

const roleBadge: Record<string, string> = {
  SUPERDEV:   'bg-error/20 text-error',
  ADMIN:      'bg-primary/20 text-primary',
  INVENTARIO: 'bg-secondary/20 text-secondary',
  VENTAS:     'bg-tertiary/20 text-tertiary',
  COMPRAS:    'bg-orange-500/20 text-orange-400',
  RRHH:       'bg-pink-500/20 text-pink-400',
  REPORTES:   'bg-indigo-500/20 text-indigo-400',
  USER:       'bg-white/10 text-outline',
}

// Departamento por rol — alineado con grupos del sidebar
const ROLE_DEPT: Record<string, string> = {
  SUPERDEV:   'Sistema',
  ADMIN:      'Sistema',
  INVENTARIO: 'Operaciones',
  COMPRAS:    'Operaciones',
  VENTAS:     'Comercial',
  RRHH:       'Administración',
  REPORTES:   'Herramientas',
  USER:       'Sistema',
}

const DEPT_ICON: Record<string, string> = {
  'Operaciones':    'precision_manufacturing',
  'Comercial':      'storefront',
  'Gestión':        'groups',
  'Administración': 'account_balance',
  'Herramientas':   'build_circle',
  'Sistema':        'settings',
}

// Mismo orden que el sidebar
const DEPT_ORDER = ['Operaciones', 'Comercial', 'Gestión', 'Administración', 'Herramientas', 'Sistema']

function Avatar({ u }: { u: Usuario }) {
  if (u.empresa?.logo) return <img src={u.empresa.logo} className="w-8 h-8 rounded-lg object-cover" alt="" />
  const color = u.empresa?.color ?? '#6366f1'
  return (
    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold"
      style={{ backgroundColor: color }}>
      {u.name.charAt(0).toUpperCase()}
    </div>
  )
}

export default function UsuariosPage() {
  const { add: notify } = useNotificationStore()
  const accessToken = useAuthStore(s => s.accessToken)

  const getHeaders = () => {
    const token = accessToken ?? (typeof window !== 'undefined' ? localStorage.getItem('token') : null)
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  }

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [roles, setRoles] = useState<Role[]>([])
  const [empresas, setEmpresas] = useState<Empresa[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState<'create' | 'edit' | null>(null)
  const [form, setForm] = useState({ ...EMPTY_FORM })
  const [editTarget, setEditTarget] = useState<Usuario | null>(null)
  const [saving, setSaving] = useState(false)
  const [visiblePass, setVisiblePass] = useState<Set<string>>(new Set())
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 })
  const menuRef = useRef<HTMLDivElement>(null)
  const rolePopRef = useRef<HTMLDivElement>(null)

  // Popover de roles inline
  const [rolePopUser, setRolePopUser] = useState<Usuario | null>(null)
  const [rolePopPos, setRolePopPos] = useState({ top: 0, left: 0 })
  const [rolePopIds, setRolePopIds] = useState<string[]>([])
  const [savingRoles, setSavingRoles] = useState(false)

  const load = async () => {
    setLoading(true)
    const headers = getHeaders()
    try {
      const [u, r, e] = await Promise.all([
        fetch(`${API}/usuarios`, { headers }).then(r => r.json()),
        fetch(`${API}/configuracion/sistema/roles`, { headers }).then(r => r.json()),
        fetch(`${API}/empresas`, { headers }).then(r => r.json()),
      ])
      setUsuarios(Array.isArray(u) ? u : [])
      setRoles(Array.isArray(r) ? r : [])
      setEmpresas(Array.isArray(e) ? e : [])
    } finally { setLoading(false) }
  }

  useEffect(() => { load() }, [accessToken])

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(ev.target as Node)) setOpenMenu(null)
      if (rolePopRef.current && !rolePopRef.current.contains(ev.target as Node)) setRolePopUser(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const toggleRole = (id: string) =>
    setForm(p => ({
      ...p,
      roleIds: p.roleIds.includes(id) ? p.roleIds.filter(r => r !== id) : [...p.roleIds, id],
    }))

  const openCreate = () => { setForm({ ...EMPTY_FORM }); setEditTarget(null); setModal('create') }
  const openEdit = (u: Usuario) => {
    setEditTarget(u)
    setForm({ name: u.name, username: u.username, password: '', roleIds: u.roles.map(r => r.id), empresaId: u.empresa?.id ?? '' })
    setModal('edit')
    setOpenMenu(null)
  }

  const handleSave = async () => {
    if (!form.name || !form.username || form.roleIds.length === 0) return
    if (modal === 'create' && !form.password) return
    setSaving(true)
    const headers = getHeaders()
    try {
      if (modal === 'create') {
        await fetch(`${API}/usuarios`, { method: 'POST', headers, body: JSON.stringify({ ...form, empresaId: form.empresaId || undefined }) })
        notify({ type: 'success', title: 'Usuario creado', message: `${form.name} fue registrado.`, module: 'configuracion/usuarios' })
      } else if (editTarget) {
        const body: any = { name: form.name, username: form.username, roleIds: form.roleIds, empresaId: form.empresaId || undefined }
        if (form.password) body.password = form.password
        await fetch(`${API}/usuarios/${editTarget.id}`, { method: 'PATCH', headers, body: JSON.stringify(body) })
        notify({ type: 'success', title: 'Usuario actualizado', message: `${form.name} fue actualizado.`, module: 'configuracion/usuarios' })
      }
      setModal(null)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo guardar el usuario.', module: 'configuracion/usuarios' })
    } finally { setSaving(false) }
  }

  const handleToggle = async (u: Usuario) => {
    const headers = getHeaders()
    await fetch(`${API}/usuarios/${u.id}`, { method: 'PATCH', headers, body: JSON.stringify({ isActive: !u.isActive }) })
    setOpenMenu(null)
    await load()
  }

  const handleDelete = async (u: Usuario) => {
    if (!confirm(`¿Eliminar a "${u.name}"?`)) return
    const headers = getHeaders()
    try {
      await fetch(`${API}/usuarios/${u.id}`, { method: 'DELETE', headers })
      notify({ type: 'info', title: 'Usuario eliminado', message: `${u.name} fue eliminado.`, module: 'configuracion/usuarios' })
      setOpenMenu(null)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudo eliminar.', module: 'configuracion/usuarios' })
    }
  }

  const openRolePop = (u: Usuario, ev: React.MouseEvent) => {
    const rect = (ev.currentTarget as HTMLElement).getBoundingClientRect()
    const popH = 320
    const top = window.innerHeight - rect.bottom < popH + 10 ? rect.top - popH - 6 : rect.bottom + 6
    const left = Math.min(rect.left, window.innerWidth - 260)
    setRolePopUser(u)
    setRolePopIds(u.roles.map(r => r.id))
    setRolePopPos({ top, left })
  }

  const handleSaveRoles = async () => {
    if (!rolePopUser) return
    setSavingRoles(true)
    try {
      await fetch(`${API}/usuarios/${rolePopUser.id}`, {
        method: 'PATCH',
        headers: getHeaders(),
        body: JSON.stringify({ roleIds: rolePopIds }),
      })
      notify({ type: 'success', title: 'Roles actualizados', message: `Roles de ${rolePopUser.name} guardados.`, module: 'configuracion/usuarios' })
      setRolePopUser(null)
      await load()
    } catch {
      notify({ type: 'error', title: 'Error', message: 'No se pudieron guardar los roles.', module: 'configuracion/usuarios' })
    } finally { setSavingRoles(false) }
  }

  const filtered = usuarios.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.roles.some(r => r.name.toLowerCase().includes(search.toLowerCase()))
  )

  const activos = usuarios.filter(u => u.isActive).length

  // Rol principal por jerarquía
  const hierarchy = ['SUPERDEV', 'ADMIN', 'INVENTARIO', 'VENTAS', 'COMPRAS', 'RRHH', 'REPORTES', 'USER']
  const primaryRole = (u: Usuario) =>
    u.roles.sort((a, b) => hierarchy.indexOf(a.name) - hierarchy.indexOf(b.name))[0]?.name ?? 'USER'

  // Agrupar por departamento
  const grouped = DEPT_ORDER.reduce<Record<string, Usuario[]>>((acc, dept) => {
    const members = filtered.filter(u => (ROLE_DEPT[primaryRole(u)] ?? 'Sistema') === dept)
    if (members.length > 0) acc[dept] = members
    return acc
  }, {})

  return (
    <>
    <div className="w-full p-6 space-y-6">
      <TopBar title="Configuración" />

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Gestión de Usuarios</h2>
          <p className="text-on-surface-variant mt-1">Usuarios del sistema, roles asignados y empresa asociada</p>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Usuarios',  value: String(usuarios.length),  icon: 'group',            color: 'text-primary' },
          { label: 'Activos',         value: String(activos),           icon: 'check_circle',     color: 'text-tertiary' },
          { label: 'Inactivos',       value: String(usuarios.length - activos), icon: 'block',   color: 'text-error' },
          { label: 'Roles Distintos', value: String(new Set(usuarios.flatMap(u => u.roles.map(r => r.name))).size), icon: 'admin_panel_settings', color: 'text-secondary' },
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

      {/* Toolbar */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar por nombre, usuario o rol..."
            className="w-full glass-panel rounded-xl pl-9 pr-4 py-2.5 text-sm text-on-surface placeholder:text-outline bg-transparent outline-none" />
        </div>
        <button onClick={openCreate}
          className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-[18px]">person_add</span>Nuevo Usuario
        </button>
      </div>

      {/* Tablas por departamento */}
      {loading
        ? (
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ minWidth: '800px' }}>
                <thead>
                  <tr className="border-b border-white/10">
                    {['Avatar', 'Nombre', 'Usuario', 'Contraseña', 'Rol', 'Empresa ID', 'Estado', 'Registrado', 'Acc.'].map(h => (
                      <th key={h} className={`text-left px-4 py-4 text-xs text-outline font-bold uppercase tracking-wide whitespace-nowrap ${h === 'Acc.' ? 'text-right' : ''}`}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i}><td colSpan={10} className="px-4 py-4">
                      <div className="h-4 bg-white/10 rounded animate-pulse w-3/4" />
                    </td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
        : Object.keys(grouped).length === 0
          ? <div className="glass-panel rounded-2xl py-12 text-center text-outline text-sm">No hay usuarios que coincidan.</div>
          : Object.entries(grouped).map(([dept, members]) => (
            <div key={dept} className="glass-panel rounded-2xl overflow-hidden">
              {/* Cabecera de departamento */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-white/10 bg-white/5">
                <span className="material-symbols-outlined text-[18px] text-primary">{DEPT_ICON[dept] ?? 'folder'}</span>
                <span className="text-sm font-bold text-on-surface">{dept}</span>
                <span className="ml-auto text-xs text-outline">{members.length} usuario{members.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
                <table className="w-full text-sm" style={{ minWidth: '800px' }}>
                  <thead>
                    <tr className="border-b border-white/10">
                      {['Avatar', 'Nombre', 'Usuario', 'Contraseña', 'Rol', 'Departamento', 'Empresa ID', 'Estado', 'Registrado', 'Acc.'].map(h => (
                        <th key={h} className={`text-left px-4 py-4 text-xs text-outline font-bold uppercase tracking-wide whitespace-nowrap ${h === 'Acc.' ? 'text-right' : ''}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {members.map(u => (
                      <tr key={u.id} className="hover:bg-white/5 transition-colors">
                        <td className="px-4 py-3"><Avatar u={u} /></td>
                        <td className="px-4 py-3 font-bold text-on-surface max-w-[140px]">
                          <span className="block truncate">{u.name}</span>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-on-surface-variant whitespace-nowrap">{u.username}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-on-surface-variant tracking-widest">
                              {visiblePass.has(u.id)
                                ? (u.username === 'superadminzenith' ? 'Zenith@2026!' : getDefaultPass(u.username))
                                : '••••••••••••'}
                            </span>
                            <button onClick={() => setVisiblePass(prev => {
                              const next = new Set(prev)
                              next.has(u.id) ? next.delete(u.id) : next.add(u.id)
                              return next
                            })} className="text-outline hover:text-on-surface transition-colors">
                              <span className="material-symbols-outlined text-[14px]">
                                {visiblePass.has(u.id) ? 'visibility_off' : 'visibility'}
                              </span>
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div
                            className="flex flex-wrap gap-1 cursor-pointer group"
                            onClick={ev => openRolePop(u, ev)}
                            title="Click para editar roles"
                          >
                            {u.roles.map(r => (
                              <span key={r.id} className={`text-xs px-2 py-0.5 rounded-full font-bold ${roleBadge[r.name] ?? 'bg-white/10 text-outline'}`}>
                                {r.name}
                              </span>
                            ))}
                            <span className="material-symbols-outlined text-[13px] text-outline opacity-0 group-hover:opacity-100 transition-opacity self-center">edit</span>
                          </div>
                        </td>
                        {/* Departamento */}
                        <td className="px-4 py-3">
                          {(() => {
                            const dept = ROLE_DEPT[primaryRole(u)] ?? 'Sistema'
                            return (
                              <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[14px] text-outline">{DEPT_ICON[dept] ?? 'folder'}</span>
                                <span className="text-xs text-on-surface-variant whitespace-nowrap">{dept}</span>
                              </div>
                            )
                          })()}
                        </td>
                        <td className="px-4 py-3 text-xs text-on-surface-variant max-w-[140px]">
                          {u.empresaId
                            ? <span className="font-mono text-primary/70 text-[10px] block truncate">{u.empresaId}</span>
                            : <span className="text-outline">—</span>
                          }
                        </td>
                        <td className="px-4 py-3">
                          <span className={`text-xs px-2 py-1 rounded-full font-bold ${u.isActive ? 'bg-tertiary/20 text-tertiary' : 'bg-error/20 text-error'}`}>
                            {u.isActive ? 'Activo' : 'Inactivo'}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-outline whitespace-nowrap">{u.createdAt?.slice(0, 10)}</td>
                        <td className="px-4 py-3 text-right">
                          <button
                            onClick={(ev) => {
                              const rect = (ev.currentTarget as HTMLButtonElement).getBoundingClientRect()
                              const menuHeight = 130
                              const top = window.innerHeight - rect.bottom < menuHeight + 10 ? rect.top - menuHeight - 6 : rect.bottom + 6
                              setMenuPos({ top, left: rect.right - 176 })
                              setOpenMenu(openMenu === u.id ? null : u.id)
                            }}
                            className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
                            <span className="material-symbols-outlined text-[18px]">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
      }
    </div>

    {/* Dropdown portal */}
    {openMenu && (() => {
      const u = usuarios.find(x => x.id === openMenu)
      if (!u) return null
      return createPortal(
        <div ref={menuRef} className="fixed z-[9999] w-44 glass-panel rounded-xl shadow-2xl border border-white/10 overflow-hidden"
          style={{ top: menuPos.top, left: menuPos.left }}>
          <button onClick={() => openEdit(u)}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-on-surface hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[16px] text-primary">edit</span>Editar
          </button>
          <button onClick={() => handleToggle(u)}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-on-surface hover:bg-white/10 transition-colors">
            <span className={`material-symbols-outlined text-[16px] ${u.isActive ? 'text-error' : 'text-tertiary'}`}>
              {u.isActive ? 'person_off' : 'person'}
            </span>
            {u.isActive ? 'Desactivar' : 'Activar'}
          </button>
          {u.username !== 'superadminzenith' && (
            <>
              <div className="border-t border-white/10" />
              <button onClick={() => handleDelete(u)}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-error hover:bg-error/10 transition-colors">
                <span className="material-symbols-outlined text-[16px]">delete</span>Eliminar
              </button>
            </>
          )}
        </div>,
        document.body
      )
    })()}

    {/* Modal crear/editar */}
    {modal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">{modal === 'create' ? 'person_add' : 'edit'}</span>
              </div>
              <div>
                <p className="font-bold text-on-surface">{modal === 'create' ? 'Nuevo Usuario' : 'Editar Usuario'}</p>
                <p className="text-[10px] text-outline">{modal === 'create' ? 'Completa los datos del nuevo usuario' : editTarget?.username}</p>
              </div>
            </div>
            <button onClick={() => setModal(null)} className="p-1.5 rounded-lg hover:bg-white/10 text-outline hover:text-on-surface transition-colors">
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="p-6 space-y-4 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([
                { label: 'Nombre completo *', key: 'name',     placeholder: 'Juan Pérez', type: 'text' },
                { label: 'Usuario *',         key: 'username', placeholder: 'juanperez',  type: 'text' },
              ] as any[]).map(f => (
                <div key={f.key}>
                  <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">{f.label}</label>
                  <input value={(form as any)[f.key]} onChange={set(f.key as any)} placeholder={f.placeholder}
                    disabled={f.disabled} type={f.type}
                    className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline disabled:opacity-50" />
                </div>
              ))}
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">
                {modal === 'edit' ? 'Nueva Contraseña (dejar vacío para no cambiar)' : 'Contraseña *'}
              </label>
              <input value={form.password} onChange={set('password')} type="password"
                placeholder={modal === 'edit' ? '••••••••' : 'Mínimo 8 caracteres'}
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block">
                Roles * — selecciona uno o más departamentos
              </label>
              <div className="bg-surface-container-highest rounded-xl p-3 grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
                {roles.map(r => {
                  const active = form.roleIds.includes(r.id)
                  const colorClass = roleBadge[r.name] ?? 'bg-white/10 text-outline'
                  const textColor = colorClass.split(' ').find(c => c.startsWith('text-')) ?? 'text-outline'
                  const bgColor  = colorClass.split(' ').find(c => c.startsWith('bg-')) ?? 'bg-white/10'
                  const dept = ROLE_DEPT[r.name] ?? 'Sistema'
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => toggleRole(r.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all text-left ${
                        active
                          ? `${bgColor} border-transparent ring-1 ring-white/20`
                          : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-primary' : 'bg-white/10'}`}>
                        {active && <span className="material-symbols-outlined text-[11px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[11px] font-bold leading-tight ${active ? textColor : 'text-outline'}`}>{r.name}</p>
                        <p className="text-[9px] text-outline leading-tight truncate">{dept}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
              {/* Departamentos activos derivados */}
              {form.roleIds.length > 0 && (() => {
                const selectedRoleNames = roles.filter(r => form.roleIds.includes(r.id)).map(r => r.name)
                const depts = [...new Set(selectedRoleNames.map(n => ROLE_DEPT[n] ?? 'Sistema'))]
                return (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] text-outline">Departamentos:</span>
                    {depts.map(d => (
                      <div key={d} className="flex items-center gap-1 bg-white/5 rounded-lg px-2 py-1">
                        <span className="material-symbols-outlined text-[11px] text-primary">{DEPT_ICON[d] ?? 'folder'}</span>
                        <span className="text-[10px] font-bold text-on-surface-variant">{d}</span>
                      </div>
                    ))}
                  </div>
                )
              })()}
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-widest text-outline uppercase block mb-1.5">Empresa</label>
              <select value={form.empresaId} onChange={set('empresaId')}
                className="w-full bg-surface-container-highest rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50">
                <option value="">Sin empresa (superadmin)</option>
                {empresas.map(e => <option key={e.id} value={e.id}>{e.nombre}</option>)}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 px-6 py-4 border-t border-white/10">
            <button onClick={() => setModal(null)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface hover:bg-white/10 transition-colors">
              Cancelar
            </button>
            <button onClick={handleSave} disabled={saving || !form.name || !form.username || form.roleIds.length === 0 || (modal === 'create' && !form.password)}
              className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
              {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
              {saving ? 'Guardando...' : modal === 'create' ? 'Crear Usuario' : 'Guardar Cambios'}
            </button>
          </div>
        </div>
      </div>
    )}
    {/* Popover de roles inline */}
    {rolePopUser && createPortal(
      <div ref={rolePopRef}
        className="fixed z-[9999] w-64 glass-panel rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
        style={{ top: rolePopPos.top, left: rolePopPos.left }}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div>
            <p className="text-xs font-bold text-on-surface">{rolePopUser.name}</p>
            <p className="text-[10px] text-outline">Asignar roles</p>
          </div>
          <button onClick={() => setRolePopUser(null)} className="text-outline hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
        {/* Lista de roles */}
        <div className="p-3 space-y-1 max-h-52 overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
          {roles.map(r => {
            const active = rolePopIds.includes(r.id)
            const colorClass = roleBadge[r.name] ?? 'bg-white/10 text-outline'
            const textColor = colorClass.split(' ').find(c => c.startsWith('text-')) ?? 'text-outline'
            const bgColor   = colorClass.split(' ').find(c => c.startsWith('bg-')) ?? 'bg-white/10'
            return (
              <button key={r.id} type="button"
                onClick={() => setRolePopIds(prev => prev.includes(r.id) ? prev.filter(x => x !== r.id) : [...prev, r.id])}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all ${active ? `${bgColor} bg-opacity-20` : 'hover:bg-white/5'}`}>
                <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${active ? 'bg-primary' : 'bg-white/10'}`}>
                  {active && <span className="material-symbols-outlined text-[11px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>}
                </div>
                <span className={`text-xs font-bold flex-1 text-left ${active ? textColor : 'text-outline'}`}>{r.name}</span>
                {active && <span className="material-symbols-outlined text-[12px] text-outline">radio_button_checked</span>}
              </button>
            )
          })}
        </div>
        {/* Footer */}
        <div className="px-3 py-3 border-t border-white/10 flex items-center justify-between gap-2">
          <span className="text-[10px] text-outline">{rolePopIds.length} rol{rolePopIds.length !== 1 ? 'es' : ''}</span>
          <button
            onClick={handleSaveRoles}
            disabled={savingRoles || rolePopIds.length === 0}
            className="flex items-center gap-1.5 bg-primary text-on-primary px-4 py-1.5 rounded-xl text-xs font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors">
            {savingRoles
              ? <span className="material-symbols-outlined text-[13px] animate-spin">progress_activity</span>
              : <span className="material-symbols-outlined text-[13px]">save</span>}
            {savingRoles ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </div>,
      document.body
    )}

    </>
  )
}
