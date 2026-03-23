'use client'
import { useRouter } from 'next/navigation'
import { TopBar } from '@/components/layout/TopBar'

const MODULOS = [
  {
    href: '/dashboard/migracion/paso-1-conectar',
    icon: 'storage',
    color: 'text-primary',
    bg: 'bg-primary/10',
    titulo: 'Paso 1 — Conectar archivo',
    desc: 'Sube el archivo .accdb y extrae la lista de tablas disponibles.',
    estado: 'Pendiente',
    estadoColor: 'bg-white/10 text-outline',
  },
  {
    href: '/dashboard/migracion/paso-2-mapeo',
    icon: 'account_tree',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    titulo: 'Paso 2 — Mapeo de tablas',
    desc: 'Relaciona cada tabla de Access con su equivalente en ZENITH.',
    estado: 'Bloqueado',
    estadoColor: 'bg-white/10 text-outline',
  },
  {
    href: '/dashboard/migracion/paso-3-preview',
    icon: 'preview',
    color: 'text-tertiary',
    bg: 'bg-tertiary/10',
    titulo: 'Paso 3 — Preview de datos',
    desc: 'Revisa los primeros registros antes de importar.',
    estado: 'Bloqueado',
    estadoColor: 'bg-white/10 text-outline',
  },
  {
    href: '/dashboard/migracion/paso-4-importar',
    icon: 'upload_file',
    color: 'text-error',
    bg: 'bg-error/10',
    titulo: 'Paso 4 — Importar a ZENITH',
    desc: 'Ejecuta la migración final hacia PostgreSQL.',
    estado: 'Bloqueado',
    estadoColor: 'bg-white/10 text-outline',
  },
]

export default function MigracionPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Migración" />
      <div className="flex-1 p-6 space-y-6 max-w-[1400px] mx-auto w-full">

        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-headline font-bold text-on-surface">Migración CIMA → ZENITH</h2>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary">BETA</span>
            </div>
            <p className="text-on-surface-variant mt-1">
              Importa datos desde tu base de datos Microsoft Access (.accdb) al sistema ERP ZENITH.
            </p>
          </div>
        </div>

        {/* Info del archivo detectado */}
        <div className="glass-panel rounded-2xl p-5 flex items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">folder_open</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-on-surface">CIMA2026.accdb</p>
            <p className="text-xs text-outline mt-0.5">Microsoft Access Database · 7.47 MB · Última modificación: 13/03/2026</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-tertiary font-bold">
            <span className="material-symbols-outlined text-[16px]">check_circle</span>
            Archivo detectado
          </div>
        </div>

        {/* Tablas detectadas en el análisis */}
        <div className="glass-panel rounded-2xl p-5 space-y-3">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-secondary text-xl">table_chart</span>
            <h3 className="font-bold text-on-surface">Tablas detectadas en CIMA2026</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-secondary/20 text-secondary font-bold ml-auto">Análisis estático</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {TABLAS_DETECTADAS.map(t => (
              <div key={t.nombre} className="flex items-center gap-3 bg-surface-container-highest rounded-xl px-4 py-3">
                <span className="material-symbols-outlined text-outline text-[18px]">table_rows</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-on-surface truncate">{t.nombre}</p>
                  <p className="text-[10px] text-outline">{t.desc}</p>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.mapColor}`}>{t.mapLabel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MODULOS.map((m, i) => (
            <button
              key={m.href}
              onClick={() => router.push(m.href)}
              className="glass-panel rounded-2xl p-6 text-left hover:bg-white/5 transition-all group flex items-start gap-4"
            >
              <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center shrink-0`}>
                <span className={`material-symbols-outlined text-2xl ${m.color}`}>{m.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-on-surface">{m.titulo}</p>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${m.estadoColor}`}>{m.estado}</span>
                </div>
                <p className="text-sm text-on-surface-variant">{m.desc}</p>
              </div>
              <span className="material-symbols-outlined text-outline group-hover:text-on-surface transition-colors">chevron_right</span>
            </button>
          ))}
        </div>

        {/* Nota informativa */}
        <div className="glass-panel rounded-2xl p-5 flex items-start gap-4 border border-primary/20">
          <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">info</span>
          <div className="space-y-1">
            <p className="font-bold text-on-surface text-sm">¿Cómo funciona la migración?</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              El proceso lee el archivo .accdb usando el driver OLEDB de Microsoft Access (requiere Office o Access Runtime instalado).
              Los datos se transforman y se insertan en las tablas correspondientes de PostgreSQL respetando las relaciones existentes.
              Puedes hacer una migración parcial seleccionando solo las tablas que necesitas.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

const TABLAS_DETECTADAS = [
  { nombre: 'Productos / Repuestos', desc: 'Códigos, descripciones, aplicaciones', mapLabel: 'Inventario', mapColor: 'bg-primary/20 text-primary' },
  { nombre: 'Clientes', desc: 'Datos de clientes y contactos', mapLabel: 'Ventas', mapColor: 'bg-secondary/20 text-secondary' },
  { nombre: 'Facturas / Notas', desc: 'Historial de ventas y notas de entrega', mapLabel: 'Ventas', mapColor: 'bg-secondary/20 text-secondary' },
  { nombre: 'Proveedores', desc: 'Datos de proveedores', mapLabel: 'Compras', mapColor: 'bg-tertiary/20 text-tertiary' },
  { nombre: 'Órdenes de Compra', desc: 'Historial de compras', mapLabel: 'Compras', mapColor: 'bg-tertiary/20 text-tertiary' },
  { nombre: 'Precios / Listas', desc: 'Listas de precios en BsS y USD', mapLabel: 'Inventario', mapColor: 'bg-primary/20 text-primary' },
  { nombre: 'Vehículos / Aplicaciones', desc: 'Marcas, modelos y compatibilidades', mapLabel: 'Nuevo', mapColor: 'bg-white/10 text-outline' },
  { nombre: 'Usuarios / Vendedores', desc: 'Personal y vendedores del sistema', mapLabel: 'RRHH', mapColor: 'bg-error/20 text-error' },
]
