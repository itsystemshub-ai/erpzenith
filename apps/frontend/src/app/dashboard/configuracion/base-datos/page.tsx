'use client'
import { useEffect, useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useAuthStore } from '@/stores/authStore'
import { api } from '@/lib/api'

interface TableInfo {
  table: string
  rows: number
}

interface DbInfo {
  tables: TableInfo[]
  totalTables: number
  totalRows: number
  dbSize: string
  activeConnections: number
  pgVersion: string
}

// Schema estático de cada tabla (columnas conocidas del schema Prisma)
const TABLE_SCHEMAS: Record<string, { column: string; type: string; nullable: boolean; pk: boolean; default?: string }[]> = {
  users: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'name', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'username', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'password', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'roleId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'mfaEnabled', type: 'BOOLEAN', nullable: false, pk: false, default: 'false' },
    { column: 'mfaSecret', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'passwordChangedAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  roles: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'name', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  permissions: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'module', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'action', type: 'VARCHAR(255)', nullable: false, pk: false },
  ],
  password_reset_requests: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'userId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'newPassword', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'status', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'PENDIENTE' },
    { column: 'reviewedBy', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'reviewedAt', type: 'TIMESTAMP', nullable: true, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  productos: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'sku', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'descripcion', type: 'TEXT', nullable: true, pk: false },
    { column: 'categoria', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'unidad', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'UND' },
    { column: 'precioUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false, default: '0.00' },
    { column: 'stockMin', type: 'INTEGER', nullable: false, pk: false, default: '0' },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  almacenes: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'codigo', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'ubicacion', type: 'TEXT', nullable: true, pk: false },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
  ],
  stocks: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'productoId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'almacenId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'cantidad', type: 'INTEGER', nullable: false, pk: false, default: '0' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  movimientos_stock: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'productoId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'tipo', type: 'VARCHAR(50)', nullable: false, pk: false },
    { column: 'cantidad', type: 'INTEGER', nullable: false, pk: false },
    { column: 'referencia', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'notas', type: 'TEXT', nullable: true, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  proveedores: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'rif', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'email', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'telefono', type: 'VARCHAR(50)', nullable: true, pk: false },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  ordenes_compra: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'numero', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'proveedorId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'estado', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'BORRADOR' },
    { column: 'subtotalUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'ivaUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'totalUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'tasaBCV', type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  clientes: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'rif', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'email', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'telefono', type: 'VARCHAR(50)', nullable: true, pk: false },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  facturas: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'numero', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'clienteId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'estado', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'PENDIENTE' },
    { column: 'subtotalVES', type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'ivaVES', type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'totalVES', type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'totalUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'tasaBCV', type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  empleados: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'cedula', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'apellido', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'email', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'cargo', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'departamento', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'salarioUSD', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'fechaIngreso', type: 'TIMESTAMP', nullable: false, pk: false },
    { column: 'estado', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'ACTIVO' },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  nominas: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'empleadoId', type: 'VARCHAR(25)', nullable: false, pk: false },
    { column: 'periodo', type: 'VARCHAR(50)', nullable: false, pk: false },
    { column: 'salarioBruto', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'ivss', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'faov', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'inces', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'islr', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'salarioNeto', type: 'DECIMAL(10,2)', nullable: false, pk: false },
    { column: 'tasaBCV', type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  ordenes_produccion: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'numero', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'estado', type: 'VARCHAR(50)', nullable: false, pk: false, default: 'PLANIFICADA' },
    { column: 'progreso', type: 'INTEGER', nullable: false, pk: false, default: '0' },
    { column: 'fechaInicio', type: 'TIMESTAMP', nullable: false, pk: false },
    { column: 'fechaFin', type: 'TIMESTAMP', nullable: false, pk: false },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  configuracion: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'clave', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'valor', type: 'TEXT', nullable: false, pk: false },
    { column: 'descripcion', type: 'TEXT', nullable: true, pk: false },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
  tasas_bcv: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'tasa', type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'fecha', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
  ],
  empresas: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'rif', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'email', type: 'VARCHAR(255)', nullable: true, pk: false },
    { column: 'telefono', type: 'VARCHAR(50)', nullable: true, pk: false },
    { column: 'direccion', type: 'TEXT', nullable: true, pk: false },
    { column: 'color', type: 'VARCHAR(50)', nullable: false, pk: false, default: '#6366f1' },
    { column: 'logo', type: 'TEXT', nullable: true, pk: false },
    { column: 'isActive', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP', nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP', nullable: false, pk: false },
  ],
}

type TabType = 'Esquema' | 'Datos' | 'SQL'

export default function BaseDatosPage() {
  const { accessToken } = useAuthStore()
  const [dbInfo, setDbInfo] = useState<DbInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTable, setSelectedTable] = useState<string>('users')
  const [activeTab, setActiveTab] = useState<TabType>('Esquema')
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;')
  // Datos tab state
  const [tableData, setTableData] = useState<Record<string, unknown>[]>([])
  const [dataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await api.get('/configuracion/db-info', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        setDbInfo(data)
      } catch {
        // fallback silencioso
      } finally {
        setLoading(false)
      }
    }
    if (accessToken) fetch()
  }, [accessToken])

  const loadTableData = async (table: string) => {
    setDataLoading(true)
    setTableData([])
    try {
      const { data } = await api.get(`/configuracion/db-table/${table}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setTableData(Array.isArray(data) ? data : [])
    } catch {
      setTableData([])
    } finally {
      setDataLoading(false)
    }
  }

  const handleSelectTable = (table: string) => {
    setSelectedTable(table)
    setActiveTab('Esquema')
    setSqlQuery(`SELECT * FROM ${table} LIMIT 10;`)
    setTableData([])
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    if (tab === 'Datos' && tableData.length === 0) {
      loadTableData(selectedTable)
    }
  }

  const schema = TABLE_SCHEMAS[selectedTable] ?? []
  const selectedRows = dbInfo?.tables.find((t) => t.table === selectedTable)?.rows ?? 0
  // Columnas dinámicas de los datos reales
  // Para 'users' forzamos el orden: username → password adyacentes
  const USER_COL_ORDER = ['id','name','username','password','roleId','isActive','mfaEnabled','mfaSecret','passwordChangedAt','createdAt','updatedAt']
  const rawColumns = tableData.length > 0 ? Object.keys(tableData[0]) : schema.map((s) => s.column)
  const dataColumns = selectedTable === 'users'
    ? [...USER_COL_ORDER.filter(c => rawColumns.includes(c)), ...rawColumns.filter(c => !USER_COL_ORDER.includes(c))]
    : rawColumns

  // Columnas con ancho reducido
  const NARROW_COLS: Record<string, number> = {
    isActive: 80,
    mfaEnabled: 90,
    mfaSecret: 90,
  }
  const colWidth = (col: string) => NARROW_COLS[col] ?? 160
  const totalTableWidth = dataColumns.reduce((sum, col) => sum + colWidth(col), 0)

  const formatCell = (val: unknown): string => {
    if (val === null || val === undefined) return 'NULL'
    if (typeof val === 'boolean') return val ? 'true' : 'false'
    if (typeof val === 'object') return JSON.stringify(val)
    const str = String(val)
    // Truncate long strings
    return str.length > 60 ? str.slice(0, 60) + '…' : str
  }

  return (
    <div className="flex flex-col flex-1">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-6 max-w-[1800px] mx-auto w-full overflow-y-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Base de Datos</h2>
            <p className="text-on-surface-variant mt-1">Editor de esquema, tablas y consultas SQL</p>
          </div>
          <div className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-sm font-bold text-tertiary">
              {loading ? 'Conectando...' : `${dbInfo?.pgVersion ?? 'PostgreSQL'} · Conectado`}
            </span>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Tablas', value: loading ? '...' : String(dbInfo?.totalTables ?? 0), icon: 'table' },
            { label: 'Total Registros', value: loading ? '...' : (dbInfo?.totalRows ?? 0).toLocaleString(), icon: 'database' },
            { label: 'Tamaño Total', value: loading ? '...' : (dbInfo?.dbSize ?? 'N/A'), icon: 'storage' },
            { label: 'Conexiones Activas', value: loading ? '...' : String(dbInfo?.activeConnections ?? 0), icon: 'cable' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">{k.icon}</span>
              </div>
              <div>
                <p className="text-2xl font-headline font-bold text-on-surface">{k.value}</p>
                <p className="text-xs text-outline font-spartan uppercase tracking-widest">{k.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main layout */}
        <div className="flex gap-6 w-full">

          {/* Table list sidebar */}
          <div className="w-56 shrink-0 glass-panel rounded-2xl overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-white/5">
              <p className="text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">TABLAS</p>
            </div>
            <div className="overflow-y-auto">
              {loading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="px-4 py-3 border-b border-white/5 animate-pulse">
                      <div className="h-3 bg-white/10 rounded w-3/4 mb-1" />
                      <div className="h-2 bg-white/5 rounded w-1/2" />
                    </div>
                  ))
                : dbInfo?.tables.map((t) => (
                    <button
                      key={t.table}
                      onClick={() => handleSelectTable(t.table)}
                      className={`w-full text-left px-4 py-3 border-b border-white/5 transition-colors ${
                        selectedTable === t.table
                          ? 'bg-primary/10 border-l-2 border-l-primary'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="material-symbols-outlined text-[14px] text-outline">table_chart</span>
                        <span className="text-sm font-medium text-on-surface truncate">{t.table}</span>
                      </div>
                      <p className="text-[10px] text-outline pl-5">{t.rows.toLocaleString()} filas</p>
                    </button>
                  ))
              }
            </div>
          </div>

          {/* Main panel */}
          <div className="flex-1 min-w-0 glass-panel rounded-2xl flex flex-col">
            {/* Table header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">table_chart</span>
                <h3 className="text-lg font-headline font-bold text-on-surface">{selectedTable}</h3>
                <span className="text-xs text-outline bg-surface-container-highest px-2 py-0.5 rounded-full">
                  {selectedRows.toLocaleString()} filas
                </span>
              </div>
              {/* Tabs */}
              <div className="flex glass-panel rounded-xl p-1 gap-1">
                {(['Esquema', 'Datos', 'SQL'] as TabType[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${
                      activeTab === tab ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            <div>
              {activeTab === 'Esquema' && (
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      {['COLUMNA', 'TIPO', 'NULLABLE', 'PK', 'DEFAULT'].map((h) => (
                        <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {schema.map((col) => (
                      <tr key={col.column} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-3 font-mono font-bold text-on-surface">{col.column}</td>
                        <td className="px-6 py-3 font-mono text-secondary text-xs">{col.type}</td>
                        <td className="px-6 py-3">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${col.nullable ? 'text-outline bg-surface-container-highest' : 'text-error bg-error/10'}`}>
                            {col.nullable ? 'YES' : 'NO'}
                          </span>
                        </td>
                        <td className="px-6 py-3">
                          {col.pk && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-400">PK</span>
                          )}
                        </td>
                        <td className="px-6 py-3 font-mono text-xs text-outline">{col.default ?? '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === 'Datos' && (
                <div>
                  {dataLoading ? (
                    <div className="flex items-center justify-center h-40 gap-3 text-outline">
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Cargando datos...
                    </div>
                  ) : tableData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-40 text-outline gap-2">
                      <span className="material-symbols-outlined text-3xl">inbox</span>
                      <span className="text-sm">Sin registros</span>
                    </div>
                  ) : (
                    <>
                      <div className="overflow-x-auto">
                        <table className="text-left text-xs border-collapse" style={{ tableLayout: 'fixed', width: `${totalTableWidth}px`, minWidth: '100%' }}>
                          <thead className="bg-white/5">
                            <tr>
                              {dataColumns.map((col) => (
                                <th key={col} style={{ width: colWidth(col), minWidth: colWidth(col) }} className="px-4 py-3 font-spartan uppercase tracking-widest text-outline font-bold border-r border-white/5 last:border-0">
                                  <span className="block break-words">{col}</span>
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {tableData.map((row, i) => (
                              <tr key={i} className="hover:bg-white/5 transition-colors">
                                {dataColumns.map((col) => {
                                  const val = (row as Record<string, unknown>)[col]
                                  const isNull = val === null || val === undefined
                                  const isBool = typeof val === 'boolean'
                                  const isId = col === 'id' || col.endsWith('Id')
                                  return (
                                    <td key={col} style={{ width: colWidth(col), minWidth: colWidth(col) }} className="px-4 py-2.5 border-r border-white/5 last:border-0 align-top">
                                      {isNull ? (
                                        <span className="text-outline italic">NULL</span>
                                      ) : isBool ? (
                                        <span className={`font-bold ${val ? 'text-tertiary' : 'text-error'}`}>
                                          {val ? 'true' : 'false'}
                                        </span>
                                      ) : isId ? (
                                        <span className="font-mono text-primary/70 text-[10px] break-all">{formatCell(val)}</span>
                                      ) : (
                                        <span className="text-on-surface break-words">{formatCell(val)}</span>
                                      )}
                                    </td>
                                  )
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs text-outline">Mostrando {tableData.length} de {selectedRows.toLocaleString()} filas</span>
                        <button
                          onClick={() => loadTableData(selectedTable)}
                          className="text-xs text-primary hover:underline flex items-center gap-1"
                        >
                          <span className="material-symbols-outlined text-[14px]">refresh</span>
                          Recargar
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'SQL' && (
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                    <span className="text-sm font-bold text-on-surface">Consola SQL</span>
                    <span className="text-xs text-outline ml-2">(solo lectura en esta vista)</span>
                  </div>
                  <textarea
                    value={sqlQuery}
                    onChange={(e) => setSqlQuery(e.target.value)}
                    rows={6}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    spellCheck={false}
                  />
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                      Ejecutar
                    </button>
                    <button
                      onClick={() => setSqlQuery(`SELECT * FROM ${selectedTable} LIMIT 10;`)}
                      className="text-sm text-on-surface-variant hover:text-on-surface"
                    >
                      Resetear
                    </button>
                  </div>
                  <div className="bg-surface-container-highest/50 rounded-xl p-8 font-mono text-xs text-outline flex items-center justify-center border border-white/5">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-2xl mb-2 block">info</span>
                      Ejecuta una consulta para ver resultados
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
