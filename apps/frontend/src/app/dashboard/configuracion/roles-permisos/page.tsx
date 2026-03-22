'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Permission { id: string; module: string; action: string }
interface Role { id: string; name: string; permissions: Permission[]; users?: { id: string }[] }

// Módulos por departamento — alineados con el sidebar
const DEPT_MODULES: Record<string, { nombre: string; desc: string; icon: string }[]> = {
  'Operaciones': [
    { nombre: 'inventario',    desc: 'Stock y SKUs',           icon: 'inventory_2' },
    { nombre: 'compras',       desc: 'Órdenes y Proveedores',  icon: 'shopping_cart' },
    { nombre: 'produccion',    desc: 'Órdenes y BOM',          icon: 'factory' },
    { nombre: 'mantenimiento', desc: 'Activos y Equipos',      icon: 'build' },
    { nombre: 'calidad',       desc: 'Inspecciones',           icon: 'verified' },
    { nombre: 'flota',         desc: 'Vehículos y Rutas',      icon: 'local_shipping' },
  ],
  'Comercial': [
    { nombre: 'ventas',    desc: 'Facturas y Clientes', icon: 'point_of_sale' },
    { nombre: 'pos',       desc: 'Terminal de Venta',   icon: 'storefront' },
    { nombre: 'marketing', desc: 'Campañas',            icon: 'campaign' },
  ],
  'Gestión': [
    { nombre: 'proyectos',  desc: 'Proyectos y Tareas', icon: 'folder_open' },
    { nombre: 'documentos', desc: 'Archivos y Docs',    icon: 'description' },
  ],
  'Administración': [
    { nombre: 'rrhh',         desc: 'Planillas y Asistencia', icon: 'group' },
    { nombre: 'nomina',       desc: 'Cálculo de Nómina',      icon: 'payments' },
    { nombre: 'contabilidad', desc: 'Libros y Asientos',      icon: 'account_balance' },
    { nombre: 'tesoreria',    desc: 'Flujo de Caja',          icon: 'account_balance_wallet' },
    { nombre: 'activos',      desc: 'Activos Fijos',          icon: 'domain' },
  ],
  'Herramientas': [
    { nombre: 'reportes',  desc: 'BI y Análisis',        icon: 'bar_chart' },
    { nombre: 'marketing', desc: 'Campañas y Segmentos', icon: 'campaign' },
  ],
  'Sistema': [
    { nombre: 'configuracion', desc: 'Parámetros del Sistema', icon: 'settings' },
  ],
}

const DEPT_ORDER = ['Operaciones', 'Comercial', 'Gestión', 'Administración', 'Herramientas', 'Sistema']

const DEPT_ICON: Record<string, string> = {
  'Operaciones':    'precision_manufacturing',
  'Comercial':      'storefront',
  'Gestión':        'groups',
  'Administración': 'account_balance',
  'Herramientas':   'build_circle',
  'Sistema':        'settings',
}

const DEPT_COLOR: Record<string, string> = {
  'Operaciones':    'text-secondary',
  'Comercial':      'text-tertiary',
  'Gestión':        'text-primary',
  'Administración': 'text-orange-400',
  'Herramientas':   'text-cyan-400',
  'Sistema':        'text-error',
}

const ROLE_DEPT: Record<string, string> = {
  SUPERDEV:   'Sistema',
  ADMIN:      'Sistema',
  INVENTARIO: 'Operaciones',
  COMPRAS:    'Operaciones',
  PRODUCCION: 'Operaciones',
  CALIDAD:    'Operaciones',
  VENTAS:     'Comercial',
  RRHH:       'Administración',
  REPORTES:   'Herramientas',
  USER:       'Sistema',
}

const ROLE_ICON: Record<string, string> = {
  SUPERDEV:   'admin_panel_settings',
  ADMIN:      'manage_accounts',
  INVENTARIO: 'inventory_2',
  COMPRAS:    'shopping_cart',
  PRODUCCION: 'factory',
  CALIDAD:    'verified',
  VENTAS:     'point_of_sale',
  RRHH:       'group',
  REPORTES:   'bar_chart',
  USER:       'person',
}

const permKeys = ['read', 'create', 'update', 'delete', 'export'] as const

// Nivel 1 = solo read | Nivel 2 = read+create+update | Nivel 3 = todo
const LEVEL_PERMS: Record<number, string[]> = {
  1: ['read'],
  2: ['read', 'create', 'update'],
  3: ['read', 'create', 'update', 'delete', 'export'],
}

const LEVEL_LABEL: Record<number, { label: string; desc: string; color: string }> = {
  1: { label: 'Nivel 1 — Básico',       desc: 'Solo lectura',              color: 'text-outline' },
  2: { label: 'Nivel 2 — Intermedio',   desc: 'Lectura, crear y editar',   color: 'text-tertiary' },
  3: { label: 'Nivel 3 — Acceso Total', desc: 'Todos los permisos',        color: 'text-error' },
}

function hasPermission(role: Role, module: string, action: string): boolean {
  return role.permissions.some(
    p => p.module.toLowerCase() === module.toLowerCase() && p.action.toLowerCase() === action.toLowerCase()
  )
}

function detectLevel(role: Role): number {
  const actions = new Set(role.permissions.map(p => p.action.toLowerCase()))
  if (actions.has('delete') || actions.has('export')) return 3
  if (actions.has('create') || actions.has('update')) return 2
  return 1
}

export default function RolesPermisosPage() {
  const { data: roles = [], isLoading } = useErpQuery<Role[]>(QK.configuracion.roles(), '/configuracion/sistema/roles')
  const [selectedRole, setSelectedRole] = useState<Role | null>(null)
  const [activeDept, setActiveDept] = useState<string>('Operaciones')
  const [roleLevel, setRoleLevel] = useState<Record<string, number>>({})
  const [saving, setSaving] = useState(false)

  const grouped = DEPT_ORDER.reduce<Record<string, Role[]>>((acc, dept) => {
    const members = roles.filter(r => (ROLE_DEPT[r.name] ?? 'Sistema') === dept)
    if (members.length > 0) acc[dept] = members
    return acc
  }, {})

  const displayRole = selectedRole ?? roles[0] ?? null
  const deptModules = DEPT_MODULES[activeDept] ?? []

  const currentLevel = displayRole ? (roleLevel[displayRole.id] ?? detectLevel(displayRole)) : 2

  // Nivel 3 = acceso total sin importar permisos en BD
  const isPermActive = (module: string, action: string) => {
    if (!displayRole) return false
    const level = roleLevel[displayRole.id] ?? detectLevel(displayRole)
    if (level === 3) return true
    return LEVEL_PERMS[level].includes(action.toLowerCase()) && hasPermission(displayRole, module, action)
  }

  const handleSaveLevel = async () => {
    if (!displayRole) return
    setSaving(true)
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
      await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'}/configuracion/sistema/roles/${displayRole.id}/nivel`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ level: currentLevel }),
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Roles y Permisos" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Control de Acceso</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Roles organizados por departamento. Selecciona un rol para ver su matriz de permisos.</p>
          </div>
          <button className="flex items-center gap-2 px-5 h-11 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>Crear Nuevo Rol
          </button>
        </div>

        {/* Roles agrupados por departamento */}
        {isLoading
          ? <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="glass-panel p-5 rounded-2xl h-32 animate-pulse bg-white/5" />
              ))}
            </div>
          : (
            <div className="space-y-6">
              {Object.entries(grouped).map(([dept, deptRoles]) => (
                <div key={dept}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`material-symbols-outlined text-[18px] ${DEPT_COLOR[dept]}`}>{DEPT_ICON[dept]}</span>
                    <span className="font-spartan text-[0.6875rem] uppercase tracking-widest font-bold text-outline">{dept}</span>
                    <div className="flex-1 h-px bg-white/10 ml-2" />
                    <span className="text-[10px] text-outline">{deptRoles.length} rol{deptRoles.length !== 1 ? 'es' : ''}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {deptRoles.map(r => {
                      const isSelected = displayRole?.id === r.id
                      const coverage = Math.min(100, Math.round((r.permissions.length / 30) * 100))
                      const deptColor = DEPT_COLOR[dept]
                      return (
                        <div key={r.id}
                          onClick={() => { setSelectedRole(r); setActiveDept(ROLE_DEPT[r.name] ?? 'Operaciones') }}
                          className={`glass-panel p-5 rounded-2xl cursor-pointer transition-all ${isSelected ? 'ring-2 ring-primary/50 bg-white/10' : 'hover:bg-white/5'}`}>
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5">
                              <span className={`material-symbols-outlined text-[20px] ${deptColor}`}
                                style={{ fontVariationSettings: "'FILL' 1" }}>
                                {ROLE_ICON[r.name] ?? 'shield_person'}
                              </span>
                            </div>
                            <span className={`text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-white/5 ${deptColor}`}>{dept}</span>
                          </div>
                          <p className="font-bold text-on-surface text-sm mb-1">{r.name}</p>
                          <p className="text-[10px] text-outline mb-3">{r.permissions.length} permisos · {r.users?.length ?? 0} usuarios</p>
                          <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full transition-all ${deptColor.replace('text-', 'bg-')}`}
                              style={{ width: `${coverage}%` }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )
        }

        {/* Editor de permisos */}
        {displayRole && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Panel izquierdo */}
            <div className="xl:col-span-4 space-y-4">
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="font-bold text-on-surface mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">edit</span>Detalle del Rol
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Nombre del Rol</label>
                    <input className="w-full bg-surface-container-highest rounded-xl px-4 py-3 text-on-surface text-sm focus:outline-none"
                      defaultValue={displayRole.name} key={displayRole.id} readOnly />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Departamento</label>
                    <div className="flex items-center gap-2 p-3 bg-surface-container rounded-xl">
                      <span className={`material-symbols-outlined text-[16px] ${DEPT_COLOR[ROLE_DEPT[displayRole.name] ?? 'Sistema']}`}>
                        {DEPT_ICON[ROLE_DEPT[displayRole.name] ?? 'Sistema']}
                      </span>
                      <span className="text-sm text-on-surface font-semibold">{ROLE_DEPT[displayRole.name] ?? 'Sistema'}</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Permisos Totales</label>
                    <div className="p-3 bg-surface-container rounded-xl text-sm text-on-surface font-semibold">
                      {displayRole.permissions.length} permisos activos
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="font-bold text-on-surface mb-4">Cobertura de Permisos</h4>
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-tertiary">
                    {Math.min(100, Math.round((displayRole.permissions.length / 30) * 100))}%
                  </div>
                  <div className="text-xs text-outline uppercase tracking-widest leading-tight">Sobre todos<br/>los módulos</div>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full transition-all"
                    style={{ width: `${Math.min(100, Math.round((displayRole.permissions.length / 30) * 100))}%` }} />
                </div>
              </div>
            </div>

            {/* Matriz de permisos */}
            <div className="xl:col-span-8">
              <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 border-b border-white/5">
                  <div className="flex items-center gap-2 justify-between mb-3">
                    <h2 className="font-bold text-on-surface">Matriz — {displayRole.name}</h2>
                    <div className="flex items-center gap-2">
                      {/* Selector de nivel RBAC */}
                      <div className="relative">
                        <select
                          value={currentLevel}
                          onChange={e => {
                            if (!displayRole) return
                            setRoleLevel(prev => ({ ...prev, [displayRole.id]: Number(e.target.value) }))
                          }}
                          className={`appearance-none bg-surface-container-highest border border-white/10 rounded-xl pl-3 pr-8 py-1.5 text-[11px] font-bold uppercase tracking-widest cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors ${LEVEL_LABEL[currentLevel].color}`}
                        >
                          {[1, 2, 3].map(lvl => (
                            <option key={lvl} value={lvl}>{LEVEL_LABEL[lvl].label}</option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined text-[14px] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                          expand_more
                        </span>
                      </div>
                      {/* Botón guardar */}
                      <button
                        onClick={handleSaveLevel}
                        disabled={saving}
                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-primary text-on-primary text-[11px] font-bold uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50 transition-colors"
                      >
                        {saving
                          ? <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>
                          : <span className="material-symbols-outlined text-[14px]">save</span>
                        }
                        {saving ? 'Guardando...' : 'Guardar'}
                      </button>
                    </div>
                  </div>
                  {/* Tabs de departamento */}
                  <div className="flex gap-1 flex-wrap">
                    {DEPT_ORDER.map(dept => (
                      <button key={dept} onClick={() => setActiveDept(dept)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-spartan uppercase tracking-widest transition-all ${
                          activeDept === dept
                            ? `bg-white/10 ${DEPT_COLOR[dept]}`
                            : 'text-outline hover:text-on-surface hover:bg-white/5'
                        }`}>
                        <span className="material-symbols-outlined text-[12px]">{DEPT_ICON[dept]}</span>
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                        <th className="px-4 py-3">Módulo</th>
                        {permKeys.map(k => <th key={k} className="px-3 py-3 text-center">{k}</th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {deptModules.map((m) => (
                        <tr key={m.nombre} className="hover:bg-white/5 transition-colors group">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-[18px] text-outline group-hover:text-primary transition-colors">{m.icon}</span>
                              <div>
                                <p className="text-xs font-semibold text-on-surface capitalize">{m.nombre}</p>
                                <p className="text-[10px] text-outline">{m.desc}</p>
                              </div>
                            </div>
                          </td>
                          {permKeys.map(k => {
                            const active = isPermActive(m.nombre, k)
                            return (
                              <td key={k} className="px-3 py-3 text-center">
                                <span className={`inline-flex items-center justify-center w-5 h-5 rounded ${active ? 'text-primary' : 'text-outline/30'}`}>
                                  <span className="material-symbols-outlined text-[18px]"
                                    style={{ fontVariationSettings: `'FILL' ${active ? 1 : 0}` }}>
                                    {active ? 'check_circle' : 'radio_button_unchecked'}
                                  </span>
                                </span>
                              </td>
                            )
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-white/5 border-t border-white/5">
                  <p className="text-xs text-outline">
                    <span className={`font-bold ${LEVEL_LABEL[currentLevel].color}`}>{LEVEL_LABEL[currentLevel].label}</span>
                    {' '}— {LEVEL_LABEL[currentLevel].desc}. Los permisos se gestionan desde el backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Arquitectura */}
        <div>
          <h2 className="font-bold text-xl text-on-surface mb-5">Arquitectura de Seguridad</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {[
              { icon: 'layers',         color: 'text-primary bg-primary/10',     title: 'Capa de Identidad', desc: 'Los usuarios se autentican con credenciales seguras. Las contraseñas se almacenan con hash bcrypt.' },
              { icon: 'key',            color: 'text-tertiary bg-tertiary/10',   title: 'Motor RBAC',        desc: 'Nuestro motor de reglas evalúa cada solicitud contra la matriz de permisos granular definida por el administrador.' },
              { icon: 'visibility_off', color: 'text-secondary bg-secondary/10', title: 'Segregación Total', desc: 'La UI se adapta dinámicamente. Los módulos sin permiso de lectura son completamente invisibles para el usuario final.' },
            ].map((c) => (
              <div key={c.title} className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${c.color}`}>
                    <span className="material-symbols-outlined">{c.icon}</span>
                  </div>
                  <h4 className="font-bold text-on-surface">{c.title}</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
