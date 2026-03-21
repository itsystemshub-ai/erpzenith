'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const roles = [
  { nombre: 'SUPERDEV', desc: 'Acceso total sin restricciones en todos los niveles del ERP.', icon: 'admin_panel_settings', iconColor: 'text-primary bg-primary/10', badge: 'Sistema', badgeColor: 'text-primary bg-primary/10', usuarios: 1, borderColor: '' },
  { nombre: 'ADMIN', desc: 'Administración completa del sistema y usuarios.', icon: 'manage_accounts', iconColor: 'text-primary bg-primary/10', badge: 'Sistema', badgeColor: 'text-primary bg-primary/10', usuarios: 3, borderColor: '' },
  { nombre: 'VENDEDOR', desc: 'Enfocado en transacciones, clientes y gestión de inventario básico.', icon: 'point_of_sale', iconColor: 'text-tertiary bg-tertiary/10', badge: 'Comercial', badgeColor: 'text-tertiary bg-tertiary/10', usuarios: 12, borderColor: 'border-l-4 border-l-tertiary' },
  { nombre: 'ALMACÉN', desc: 'Gestión de stock, recepciones y despachos de mercadería.', icon: 'inventory_2', iconColor: 'text-secondary bg-secondary/10', badge: 'Logística', badgeColor: 'text-secondary bg-secondary/10', usuarios: 5, borderColor: '' },
  { nombre: 'AUDITOR', desc: 'Lectura de logs, reportes financieros y auditoría de acciones.', icon: 'history_edu', iconColor: 'text-outline bg-outline/10', badge: 'Revisión', badgeColor: 'text-outline bg-outline/10', usuarios: 1, borderColor: '' },
]

const modulos = [
  { nombre: 'Inventario', desc: 'Gestión de Stock y SKUs', icon: 'inventory', permisos: { read: true, create: false, update: false, delete: false, export: true } },
  { nombre: 'Ventas', desc: 'POS, Facturación y Devoluciones', icon: 'shopping_cart', permisos: { read: true, create: true, update: true, delete: false, export: true } },
  { nombre: 'RRHH', desc: 'Planillas y Asistencia', icon: 'groups', permisos: { read: true, create: false, update: false, delete: false, export: false } },
  { nombre: 'Compras', desc: 'Órdenes y Proveedores', icon: 'shopping_bag', permisos: { read: true, create: true, update: false, delete: false, export: true } },
  { nombre: 'Reportes', desc: 'BI y Análisis', icon: 'analytics', permisos: { read: true, create: false, update: false, delete: false, export: true } },
  { nombre: 'Configuración', desc: 'Parámetros del Sistema', icon: 'settings', permisos: { read: false, create: false, update: false, delete: false, export: false } },
]

type PermisoKey = 'read' | 'create' | 'update' | 'delete' | 'export'
const permKeys: PermisoKey[] = ['read', 'create', 'update', 'delete', 'export']

export default function RolesPermisosPage() {
  const [selectedRole, setSelectedRole] = useState(2)
  const [permisos, setPermisos] = useState(modulos.map(m => ({ ...m.permisos })))

  const toggle = (modIdx: number, key: PermisoKey) => {
    setPermisos(prev => prev.map((p, i) => i === modIdx ? { ...p, [key]: !p[key] } : p))
  }

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {roles.map((r, i) => (
            <div key={r.nombre} onClick={() => setSelectedRole(i)}
              className={`glass-panel p-5 rounded-2xl cursor-pointer transition-all ${r.borderColor} ${selectedRole === i ? 'ring-2 ring-primary/50 bg-white/10' : 'hover:bg-white/10'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${r.iconColor}`}>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{r.icon}</span>
                </div>
                <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded ${r.badgeColor}`}>{r.badge}</span>
              </div>
              <h3 className="font-bold text-on-surface mb-1">{r.nombre}</h3>
              <p className="text-outline text-xs mb-4 leading-snug">{r.desc}</p>
              <p className="text-[10px] text-outline">{r.usuarios} usuario{r.usuarios !== 1 ? 's' : ''}</p>
            </div>
          ))}
        </div>

        {/* Editor */}
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
                    defaultValue={roles[selectedRole].nombre} key={selectedRole} />
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Descripción</label>
                  <textarea className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                    rows={3} defaultValue={roles[selectedRole].desc} key={`desc-${selectedRole}`} />
                </div>
              </div>
            </div>
            <div className="glass-panel p-6 rounded-2xl">
              <h4 className="font-bold text-on-surface mb-4">Zenith Health Check</h4>
              <div className="flex items-center gap-4 mb-3">
                <div className="text-4xl font-bold text-tertiary">92%</div>
                <div className="text-xs text-outline uppercase tracking-widest leading-tight">Cumplimiento<br/>Seguridad</div>
              </div>
              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary h-full rounded-full" style={{ width: '92%' }} />
              </div>
            </div>
          </div>

          {/* Matriz */}
          <div className="xl:col-span-8">
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="px-6 py-4 bg-white/5 flex justify-between items-center border-b border-white/5">
                <h2 className="font-bold text-on-surface">Matriz de Permisos Granulares</h2>
                <span className="text-[10px] font-bold text-outline uppercase bg-surface-container-highest px-3 py-1 rounded-full">RBAC Level 2</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                      <th className="px-6 py-4">Módulo</th>
                      {permKeys.map(k => <th key={k} className="px-4 py-4 text-center">{k}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {modulos.map((m, mi) => (
                      <tr key={m.nombre} className="hover:bg-white/5 transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">{m.icon}</span>
                            <div>
                              <p className="text-sm font-semibold text-on-surface">{m.nombre}</p>
                              <p className="text-[10px] text-outline">{m.desc}</p>
                            </div>
                          </div>
                        </td>
                        {permKeys.map(k => (
                          <td key={k} className="px-4 py-4 text-center">
                            <input type="checkbox" checked={permisos[mi][k]} onChange={() => toggle(mi, k)}
                              className="w-5 h-5 rounded bg-surface-container-highest border-none text-primary focus:ring-0 cursor-pointer" />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 bg-white/5 flex justify-end gap-3 border-t border-white/5">
                <button className="px-5 py-2 rounded-xl text-sm font-semibold text-outline hover:text-on-surface transition-colors">Descartar</button>
                <button className="bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-xl text-sm font-semibold hover:bg-primary/30 transition-all">Guardar Cambios</button>
              </div>
            </div>
          </div>
        </div>

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
