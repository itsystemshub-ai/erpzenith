'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery } from '@/hooks/useErpQuery'
import { QK } from '@/lib/queryKeys'

interface Permission { id: string; module: string; action: string }
interface Role { id: string; name: string; permissions: Permission[]; users?: { id: string }[] }

const modulos = [
  { nombre: 'Inventario', desc: 'Gestión de Stock y SKUs', icon: 'inventory' },
  { nombre: 'Ventas', desc: 'POS, Facturación y Devoluciones', icon: 'shopping_cart' },
  { nombre: 'RRHH', desc: 'Planillas y Asistencia', icon: 'groups' },
  { nombre: 'Compras', desc: 'Órdenes y Proveedores', icon: 'shopping_bag' },
  { nombre: 'Reportes', desc: 'BI y Análisis', icon: 'analytics' },
  { nombre: 'Configuración', desc: 'Parámetros del Sistema', icon: 'settings' },
]

const permKeys = ['read', 'create', 'update', 'delete', 'export'] as const
type PermKey = typeof permKeys[number]

const roleStyles: Record<string, { icon: string; iconColor: string; badge: string; badgeColor: string; borderColor: string }> = {
  SUPERDEV: { icon: 'admin_panel_settings', iconColor: 'text-primary bg-primary/10', badge: 'Sistema', badgeColor: 'text-primary bg-primary/10', borderColor: '' },
  ADMIN: { icon: 'manage_accounts', iconColor: 'text-primary bg-primary/10', badge: 'Sistema', badgeColor: 'text-primary bg-primary/10', borderColor: '' },
  VENDEDOR: { icon: 'point_of_sale', iconColor: 'text-tertiary bg-tertiary/10', badge: 'Comercial', badgeColor: 'text-tertiary bg-tertiary/10', borderColor: 'border-l-4 border-l-tertiary' },
  ALMACÉN: { icon: 'inventory_2', iconColor: 'text-secondary bg-secondary/10', badge: 'Logística', badgeColor: 'text-secondary bg-secondary/10', borderColor: '' },
  AUDITOR: { icon: 'history_edu', iconColor: 'text-outline bg-outline/10', badge: 'Revisión', badgeColor: 'text-outline bg-outline/10', borderColor: '' },
}

const defaultStyle = { icon: 'shield_person', iconColor: 'text-outline bg-outline/10', badge: 'Custom', badgeColor: 'text-outline bg-outline/10', borderColor: '' }

function hasPermission(role: Role, module: string, action: string): boolean {
  return role.permissions.some(
    p => p.module.toLowerCase() === module.toLowerCase() && p.action.toLowerCase() === action.toLowerCase()
  )
}

export default function RolesPermisosPage() {
  const { data: roles = [], isLoading } = useErpQuery<Role[]>(QK.configuracion.roles(), '/configuracion/sistema/roles')
  const [selectedIdx, setSelectedIdx] = useState(0)

  const selectedRole = roles[selectedIdx]

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Roles y Permisos" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Control de Acceso</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Gestione la jerarquía organizativa y los privilegios granulares. Defina cómo cada entidad interactúa con los módulos críticos del sistema.</p>
          </div>
          <button className="flex items-center gap-2 px-5 h-11 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">add</span>Crear Nuevo Rol
          </button>
        </div>

        {/* Roles Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="glass-panel p-5 rounded-2xl skeleton h-36" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {roles.map((r, i) => {
              const style = roleStyles[r.name] ?? defaultStyle
              return (
                <div key={r.id} onClick={() => setSelectedIdx(i)}
                  className={`glass-panel p-5 rounded-2xl cursor-pointer transition-all ${style.borderColor} ${selectedIdx === i ? 'ring-2 ring-primary/50 bg-white/10' : 'hover:bg-white/10'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${style.iconColor}`}>
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{style.icon}</span>
                    </div>
                    <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded ${style.badgeColor}`}>{style.badge}</span>
                  </div>
                  <h3 className="font-bold text-on-surface mb-1">{r.name}</h3>
                  <p className="text-outline text-xs mb-4 leading-snug">{r.permissions.length} permisos asignados</p>
                  <p className="text-[10px] text-outline">{r.users?.length ?? 0} usuario{(r.users?.length ?? 0) !== 1 ? 's' : ''}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* Editor */}
        {selectedRole && (
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            {/* Identidad */}
            <div className="xl:col-span-4 space-y-4">
              <div className="glass-panel p-6 rounded-2xl">
                <h2 className="font-bold text-on-surface mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">edit</span>Detalle del Rol
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Nombre del Rol</label>
                    <input className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 text-sm"
                      defaultValue={selectedRole.name} key={selectedRole.id} readOnly />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Permisos Totales</label>
                    <div className="p-3 bg-surface-container rounded-xl text-sm text-on-surface font-semibold">
                      {selectedRole.permissions.length} permisos activos
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <h4 className="font-bold text-on-surface mb-4">Zenith Health Check</h4>
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-tertiary">
                    {Math.min(100, Math.round((selectedRole.permissions.length / (modulos.length * permKeys.length)) * 100))}%
                  </div>
                  <div className="text-xs text-outline uppercase tracking-widest leading-tight">Cobertura<br/>de Permisos</div>
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full rounded-full transition-all"
                    style={{ width: `${Math.min(100, Math.round((selectedRole.permissions.length / (modulos.length * permKeys.length)) * 100))}%` }} />
                </div>
              </div>
            </div>

            {/* Matriz */}
            <div className="xl:col-span-8">
              <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="px-6 py-4 bg-white/5 flex justify-between items-center border-b border-white/5">
                  <h2 className="font-bold text-on-surface">Matriz de Permisos — {selectedRole.name}</h2>
                  <span className="text-[10px] font-bold text-outline uppercase bg-surface-container-highest px-3 py-1 rounded-full">RBAC Level 2</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                        <th className="px-3 py-3">Módulo</th>
                        {permKeys.map(k => <th key={k} className="px-3 py-3 text-center">{k}</th>)}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {modulos.map((m) => (
                        <tr key={m.nombre} className="hover:bg-white/5 transition-colors group">
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-2">
                              <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[18px]">{m.icon}</span>
                              <div>
                                <p className="text-xs font-semibold text-on-surface">{m.nombre}</p>
                                <p className="text-[10px] text-outline">{m.desc}</p>
                              </div>
                            </div>
                          </td>
                          {permKeys.map(k => {
                            const active = hasPermission(selectedRole, m.nombre, k)
                            return (
                              <td key={k} className="px-3 py-3 text-center">
                                <span className={`inline-flex items-center justify-center w-5 h-5 rounded ${active ? 'text-primary' : 'text-outline/30'}`}>
                                  <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: `'FILL' ${active ? 1 : 0}` }}>
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
                <div className="px-6 py-4 bg-white/5 flex justify-end gap-3 border-t border-white/5">
                  <p className="text-xs text-outline flex-1 self-center">Los permisos se gestionan desde el backend. Contacte al administrador del sistema para modificarlos.</p>
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
              { icon: 'layers', color: 'text-primary bg-primary/10', title: 'Capa de Identidad', desc: 'Los usuarios se autentican con credenciales seguras. Las contraseñas se almacenan con hash bcrypt.' },
              { icon: 'key', color: 'text-tertiary bg-tertiary/10', title: 'Motor RBAC', desc: 'Nuestro motor de reglas evalúa cada solicitud contra la matriz de permisos granular definida por el administrador.' },
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
