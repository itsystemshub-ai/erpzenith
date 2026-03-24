'use client'
import { useEffect, useState, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useAuthStore } from '@/stores/authStore'
import { api } from '@/lib/api'

interface TableInfo { table: string; rows: number }
interface DbInfo {
  tables: TableInfo[]
  totalTables: number
  totalRows: number
  dbSize: string
  activeConnections: number
  pgVersion: string
}

const TABLE_SCHEMAS: Record<string, { column: string; type: string; nullable: boolean; pk: boolean; default?: string; unique?: boolean }[]> = {
  // ─── Auth ────────────────────────────────────────────────────────────────
  users: [
    { column: 'id',                type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'username',          type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'password',          type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'name',              type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'empresaId',         type: 'VARCHAR(25)',  nullable: true,  pk: false },
    { column: 'isActive',          type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'mfaEnabled',        type: 'BOOLEAN',      nullable: false, pk: false, default: 'false' },
    { column: 'mfaSecret',         type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'passwordChangedAt', type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
    { column: 'createdAt',         type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt',         type: 'TIMESTAMP',    nullable: false, pk: false },
  ],
  password_reset_requests: [
    { column: 'id',          type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'userId',      type: 'VARCHAR(25)',  nullable: false, pk: false },
    { column: 'newPassword', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'status',      type: 'VARCHAR(50)',  nullable: false, pk: false, default: 'PENDIENTE' },
    { column: 'reviewedBy',  type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'reviewedAt',  type: 'TIMESTAMP',    nullable: true,  pk: false },
    { column: 'createdAt',   type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
  ],
  roles: [
    { column: 'id',        type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'name',      type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'createdAt', type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
  ],
  permissions: [
    { column: 'id',     type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'module', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'action', type: 'VARCHAR(255)', nullable: false, pk: false },
  ],
  // ─── Inventario ──────────────────────────────────────────────────────────
  productos: [
    { column: 'id',          type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'sku',         type: 'VARCHAR(255)',  nullable: false, pk: false, unique: true },
    { column: 'nombre',      type: 'VARCHAR(255)',  nullable: false, pk: false },
    { column: 'tipo',        type: 'VARCHAR(255)',  nullable: true,  pk: false },
    { column: 'fabricante',  type: 'VARCHAR(255)',  nullable: true,  pk: false },
    { column: 'marca',       type: 'VARCHAR(255)',  nullable: true,  pk: false },
    { column: 'material',    type: 'VARCHAR(255)',  nullable: true,  pk: false },
    { column: 'espesor',     type: 'VARCHAR(100)',  nullable: true,  pk: false },
    { column: 'descripcion', type: 'TEXT',          nullable: true,  pk: false },
    { column: 'unidad',      type: 'VARCHAR(50)',   nullable: false, pk: false, default: 'UND' },
    { column: 'medidas',     type: 'VARCHAR(255)',  nullable: true,  pk: false },
    { column: 'precioUSD',   type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'stockMin',    type: 'INTEGER',       nullable: false, pk: false, default: '0' },
    { column: 'isActive',    type: 'BOOLEAN',       nullable: false, pk: false, default: 'true' },
    { column: 'createdAt',   type: 'TIMESTAMP',     nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt',   type: 'TIMESTAMP',     nullable: false, pk: false },
  ],
  almacenes: [
    { column: 'id', type: 'VARCHAR(25)', nullable: false, pk: true, default: 'cuid()' },
    { column: 'codigo', type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
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
    { column: 'id',               type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'idcima',           type: 'VARCHAR(25)',  nullable: true,  pk: false },
    { column: 'rif',              type: 'VARCHAR(255)', nullable: true,  pk: false, unique: true },
    { column: 'nombre',           type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'region',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'estado',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'municipio',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'persona_contacto', type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'direccion',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'telefono_personal',type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'telefono_fijo',    type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'email',            type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'isActive',         type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'createdAt',        type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
  ],
  ordenes_compra: [
    { column: 'id',          type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'numero',      type: 'VARCHAR(255)',  nullable: false, pk: false, unique: true },
    { column: 'proveedorId', type: 'VARCHAR(25)',   nullable: false, pk: false },
    { column: 'estado',      type: 'VARCHAR(50)',   nullable: false, pk: false, default: 'BORRADOR' },
    { column: 'subtotalUSD', type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'ivaUSD',      type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'totalUSD',    type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'tasaBCV',     type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'createdAt',   type: 'TIMESTAMP',     nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt',   type: 'TIMESTAMP',     nullable: false, pk: false },
  ],
  items_orden_compra: [
    { column: 'id',         type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'ordenId',    type: 'VARCHAR(25)',   nullable: false, pk: false },
    { column: 'productoId', type: 'VARCHAR(25)',   nullable: false, pk: false },
    { column: 'cantidad',   type: 'INTEGER',       nullable: false, pk: false },
    { column: 'precioUSD',  type: 'DECIMAL(12,2)', nullable: false, pk: false },
  ],
  // ─── Ventas ──────────────────────────────────────────────────────────────
  clientes: [
    { column: 'id',               type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'idcima',           type: 'VARCHAR(25)',  nullable: true,  pk: false },
    { column: 'rif',              type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'nombre',           type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'region',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'estado',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'municipio',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'persona_contacto', type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'direccion',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'telefono_personal',type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'telefono_fijo',    type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'email',            type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'isActive',         type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'createdAt',        type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
  ],
  vendedores: [
    { column: 'id',               type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'idcima',           type: 'VARCHAR(25)',  nullable: true,  pk: false },
    { column: 'rif',              type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'nombre',           type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'region',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'estado',           type: 'TEXT',         nullable: true,  pk: false },
    { column: 'municipio',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'persona_contacto', type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'direccion',        type: 'TEXT',         nullable: true,  pk: false },
    { column: 'telefono_personal',type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'telefono_fijo',    type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'email',            type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'ciudad',           type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'notas',            type: 'TEXT',         nullable: true,  pk: false },
    { column: 'isActive',         type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'createdAt',        type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
  ],
  facturas: [
    { column: 'id',          type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'numero',      type: 'VARCHAR(255)',  nullable: false, pk: false, unique: true },
    { column: 'clienteId',   type: 'VARCHAR(25)',   nullable: false, pk: false },
    { column: 'estado',      type: 'VARCHAR(50)',   nullable: false, pk: false, default: 'PENDIENTE' },
    { column: 'subtotalVES', type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'ivaVES',      type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'totalVES',    type: 'DECIMAL(14,2)', nullable: false, pk: false },
    { column: 'totalUSD',    type: 'DECIMAL(12,2)', nullable: false, pk: false },
    { column: 'tasaBCV',     type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'createdAt',   type: 'TIMESTAMP',     nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt',   type: 'TIMESTAMP',     nullable: false, pk: false },
  ],
  items_factura: [
    { column: 'id',          type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'facturaId',   type: 'VARCHAR(25)',   nullable: false, pk: false },
    { column: 'descripcion', type: 'VARCHAR(255)',  nullable: false, pk: false },
    { column: 'cantidad',    type: 'INTEGER',       nullable: false, pk: false },
    { column: 'precioVES',   type: 'DECIMAL(12,2)', nullable: false, pk: false },
  ],
  // ─── RRHH ────────────────────────────────────────────────────────────────
  empleados: [
    { column: 'id',           type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'cedula',       type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'nombre',       type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'apellido',     type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'email',        type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'cargo',        type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'departamento', type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'salarioUSD',   type: 'DECIMAL(10,2)',nullable: false, pk: false },
    { column: 'fechaIngreso', type: 'TIMESTAMP',    nullable: false, pk: false },
    { column: 'estado',       type: 'VARCHAR(50)',  nullable: false, pk: false, default: 'ACTIVO' },
    { column: 'estado_geo',   type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'municipio',    type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'direccion',    type: 'TEXT',         nullable: true,  pk: false },
    { column: 'telefono',     type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'isActive',     type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'createdAt',    type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt',    type: 'TIMESTAMP',    nullable: false, pk: false },
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
  // ─── Geografía ───────────────────────────────────────────────────────────
  geo_regiones: [
    { column: 'id',     type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
  ],
  geo_estados: [
    { column: 'id',       type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'nombre',   type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'regionId', type: 'VARCHAR(25)',  nullable: false, pk: false },
  ],
  geo_municipios: [
    { column: 'id',       type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'nombre',   type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'estadoId', type: 'VARCHAR(25)',  nullable: false, pk: false },
  ],
  // ─── Configuración ───────────────────────────────────────────────────────
  configuracion: [
    { column: 'id',          type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'clave',       type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'valor',       type: 'TEXT',         nullable: false, pk: false },
    { column: 'descripcion', type: 'TEXT',         nullable: true,  pk: false },
    { column: 'updatedAt',   type: 'TIMESTAMP',    nullable: false, pk: false },
  ],
  tasas_bcv: [
    { column: 'id',    type: 'VARCHAR(25)',   nullable: false, pk: true,  default: 'cuid()' },
    { column: 'tasa',  type: 'DECIMAL(10,4)', nullable: false, pk: false },
    { column: 'fecha', type: 'TIMESTAMP',     nullable: false, pk: false, default: 'now()' },
  ],
  // ─── Empresas ────────────────────────────────────────────────────────────
  empresas: [
    { column: 'id',        type: 'VARCHAR(25)',  nullable: false, pk: true,  default: 'cuid()' },
    { column: 'nombre',    type: 'VARCHAR(255)', nullable: false, pk: false },
    { column: 'rif',       type: 'VARCHAR(255)', nullable: false, pk: false, unique: true },
    { column: 'email',     type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'telefono',  type: 'VARCHAR(50)',  nullable: true,  pk: false },
    { column: 'direccion', type: 'TEXT',         nullable: true,  pk: false },
    { column: 'estado',    type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'municipio', type: 'VARCHAR(255)', nullable: true,  pk: false },
    { column: 'color',     type: 'VARCHAR(50)',  nullable: false, pk: false, default: '#6366f1' },
    { column: 'logo',      type: 'TEXT',         nullable: true,  pk: false },
    { column: 'plan',      type: 'VARCHAR(50)',  nullable: false, pk: false, default: 'Starter' },
    { column: 'users',     type: 'INTEGER',      nullable: false, pk: false, default: '0' },
    { column: 'status',    type: 'VARCHAR(50)',  nullable: false, pk: false, default: 'activo' },
    { column: 'mrr',       type: 'INTEGER',      nullable: false, pk: false, default: '49' },
    { column: 'isActive',  type: 'BOOLEAN',      nullable: false, pk: false, default: 'true' },
    { column: 'createdAt', type: 'TIMESTAMP',    nullable: false, pk: false, default: 'now()' },
    { column: 'updatedAt', type: 'TIMESTAMP',    nullable: false, pk: false },
  ],
}

type TabType = 'Esquema' | 'Datos' | 'SQL'

// Anchos fijos por columna
const COL_WIDTHS: Record<string, number> = {
  id: 90, roleId: 90, userId: 90, productoId: 90, almacenId: 90,
  proveedorId: 90, clienteId: 90, empleadoId: 90, empresaId: 90,
  roles: 180, empresa: 160, departamento: 130,
  isActive: 68, mfaEnabled: 76, mfaSecret: 68,
  name: 120, username: 100, password: 180, newPassword: 180,
  passwordChangedAt: 120, createdAt: 120, updatedAt: 120,
  reviewedAt: 120, fechaIngreso: 120, fecha: 100,
}
const colWidth = (col: string) => COL_WIDTHS[col] ?? 130

function formatCell(val: unknown, col?: string): string {
  if (val === null || val === undefined) return 'NULL'
  if (typeof val === 'boolean') return val ? 'true' : 'false'
  if (typeof val === 'object') return JSON.stringify(val)
  const str = String(val)
  if (col && (col.endsWith('At') || col === 'fecha' || col.endsWith('Ingreso')) && str.includes('T')) {
    return str.replace('T', ' ').replace(/\.\d+Z$/, '').replace('Z', '')
  }
  return str.length > 80 ? str.slice(0, 80) + '…' : str
}

export default function BaseDatosPage() {
  const { accessToken } = useAuthStore()
  const [dbInfo, setDbInfo] = useState<DbInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [selectedTable, setSelectedTable] = useState<string>('users')
  const [activeTab, setActiveTab] = useState<TabType>('Esquema')
  const [sqlQuery, setSqlQuery] = useState('SELECT * FROM users LIMIT 10;')
  const [tableData, setTableData] = useState<Record<string, unknown>[]>([])
  const [dataLoading, setDataLoading] = useState(false)
  // Modales
  const [editRow, setEditRow] = useState<Record<string, unknown> | null>(null)
  const [deleteRow, setDeleteRow] = useState<Record<string, unknown> | null>(null)
  const [saving, setSaving] = useState(false)
  // Contraseñas visibles: Set de "rowIndex-colName"
  const [visiblePasswords, setVisiblePasswords] = useState<Set<string>>(new Set())
  // Paginación
  const PAGE_SIZE = 15
  const [schemaPage, setSchemaPage] = useState(1)
  const [dataPage,   setDataPage]   = useState(1)

  const togglePassword = (key: string) => {
    setVisiblePasswords(prev => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  }

  useEffect(() => {
    const token = accessToken || localStorage.getItem('accessToken')
    if (!token) return
    api.get('/configuracion/db-info', { headers: { Authorization: `Bearer ${token}` } })
      .then(({ data }) => setDbInfo(data))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [accessToken])

  const loadTableData = async (table: string) => {
    setDataLoading(true)
    setTableData([])
    try {
      const { data } = await api.get(`/configuracion/db-table/${table}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setTableData(Array.isArray(data) ? data : [])
    } catch { setTableData([]) }
    finally { setDataLoading(false) }
  }

  const handleSelectTable = (table: string) => {
    setSelectedTable(table)
    setActiveTab('Esquema')
    setSqlQuery(`SELECT * FROM ${table} LIMIT 10;`)
    setTableData([])
    setSchemaPage(1)
    setDataPage(1)
  }

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab)
    if (tab === 'Datos' && tableData.length === 0) loadTableData(selectedTable)
    if (tab === 'Esquema') setSchemaPage(1)
    if (tab === 'Datos') setDataPage(1)
  }

  const schema = TABLE_SCHEMAS[selectedTable] ?? []
  const selectedRows = dbInfo?.tables.find((t) => t.table === selectedTable)?.rows ?? 0
  const isCimaTable = false

  const USER_COL_ORDER = ['empresaId','id','name','username','password','roles','departamento','isActive','mfaEnabled','mfaSecret','passwordChangedAt','createdAt','updatedAt']
  const rawColumns = tableData.length > 0 ? Object.keys(tableData[0]) : schema.map((s) => s.column)
  const dataColumnsRaw = selectedTable === 'users'
    ? [...USER_COL_ORDER.filter(c => rawColumns.includes(c)), ...rawColumns.filter(c => !USER_COL_ORDER.includes(c))]
    : rawColumns
  const dataColumns = [...new Set(dataColumnsRaw)]

  const tableWidthPx = dataColumns.reduce((sum, col) => sum + colWidth(col), 0)

  // Paginación — Esquema
  const schemaTotalPages = Math.max(1, Math.ceil(schema.length / PAGE_SIZE))
  const schemaSafePage   = Math.min(schemaPage, schemaTotalPages)
  const schemaPagedRows  = useMemo(
    () => schema.slice((schemaSafePage - 1) * PAGE_SIZE, schemaSafePage * PAGE_SIZE),
    [schema, schemaSafePage, PAGE_SIZE]
  )

  // Paginación — Datos
  const dataTotalPages = Math.max(1, Math.ceil(tableData.length / PAGE_SIZE))
  const dataSafePage   = Math.min(dataPage, dataTotalPages)
  const dataPagedRows  = useMemo(
    () => tableData.slice((dataSafePage - 1) * PAGE_SIZE, dataSafePage * PAGE_SIZE),
    [tableData, dataSafePage, PAGE_SIZE]
  )

  const handleSaveEdit = async () => {
    if (!editRow) return
    setSaving(true)
    try {
      await api.patch(`/configuracion/db-table/${selectedTable}/${editRow.id}`, editRow, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setEditRow(null)
      loadTableData(selectedTable)
    } catch { /* silencioso */ }
    finally { setSaving(false) }
  }

  const handleConfirmDelete = async () => {
    if (!deleteRow) return
    setSaving(true)
    try {
      await api.delete(`/configuracion/db-table/${selectedTable}/${deleteRow.id}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      setDeleteRow(null)
      loadTableData(selectedTable)
    } catch { /* silencioso */ }
    finally { setSaving(false) }
  }

  return (
    <>
    <div className="w-full p-6 space-y-6">
      <TopBar title="Configuración" />

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

      {/* Main layout — tabla de tablas + panel principal */}
      <div className="flex gap-6">

        {/* Lista de tablas */}
        <div className="w-52 shrink-0 glass-panel rounded-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-white/5">
            <p className="text-[10px] font-spartan uppercase tracking-widest text-outline font-bold">TABLAS</p>
          </div>
          <div>
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
                      selectedTable === t.table ? 'bg-primary/10 border-l-2 border-l-primary' : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="material-symbols-outlined text-[14px] text-outline">table_chart</span>
                      <span className="text-sm font-medium text-on-surface break-words">{t.table}</span>
                    </div>
                    <p className="text-[10px] text-outline pl-5">{t.rows.toLocaleString()} filas</p>
                  </button>
                ))
            }
          </div>
        </div>

        {/* Panel principal */}
        <div className="flex-1 min-w-0 glass-panel rounded-2xl">

          {/* Cabecera con tabs */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">table_chart</span>
              <h3 className="text-lg font-headline font-bold text-on-surface">{selectedTable}</h3>
              <span className="text-xs text-outline bg-surface-container-highest px-2 py-0.5 rounded-full">
                {selectedRows.toLocaleString()} filas
              </span>
              {isCimaTable && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-400">
                  CIMA2026 · Solo lectura
                </span>
              )}
            </div>
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

          {/* Tab: Esquema */}
          {activeTab === 'Esquema' && (
            <>
            <table className="w-full text-left text-sm">
              <thead className="bg-surface-container sticky top-0 z-10">
                <tr>
                  {['COLUMNA', 'TIPO', 'NULLABLE', 'PK', 'UNIQUE', 'DEFAULT'].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold border-b border-white/10">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {schemaPagedRows.map((col) => (
                  <tr key={col.column} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-3 font-mono font-bold text-on-surface">{col.column}</td>
                    <td className="px-6 py-3 font-mono text-secondary text-xs">{col.type}</td>
                    <td className="px-6 py-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${col.nullable ? 'text-outline bg-surface-container-highest' : 'text-error bg-error/10'}`}>
                        {col.nullable ? 'YES' : 'NO'}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      {col.pk && <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-400">PK</span>}
                    </td>
                    <td className="px-6 py-3">
                      {col.unique && <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary/20 text-primary">UQ</span>}
                    </td>
                    <td className="px-6 py-3 font-mono text-xs text-outline">{col.default ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {schemaTotalPages > 1 && (
              <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-outline">
                  Mostrando {(schemaSafePage - 1) * PAGE_SIZE + 1}–{Math.min(schemaSafePage * PAGE_SIZE, schema.length)} de {schema.length} columnas
                </span>
                <div className="flex items-center gap-1">
                  <button onClick={() => setSchemaPage(1)} disabled={schemaSafePage === 1} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">first_page</span></button>
                  <button onClick={() => setSchemaPage(p => Math.max(1, p - 1))} disabled={schemaSafePage === 1} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
                  {Array.from({ length: schemaTotalPages }, (_, i) => i + 1).map(pg => (
                    <button key={pg} onClick={() => setSchemaPage(pg)} className={`w-7 h-7 rounded text-xs font-bold transition-colors ${pg === schemaSafePage ? 'bg-primary text-on-primary' : 'hover:bg-white/10 text-outline'}`}>{pg}</button>
                  ))}
                  <button onClick={() => setSchemaPage(p => Math.min(schemaTotalPages, p + 1))} disabled={schemaSafePage === schemaTotalPages} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
                  <button onClick={() => setSchemaPage(schemaTotalPages)} disabled={schemaSafePage === schemaTotalPages} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">last_page</span></button>
                </div>
              </div>
            )}
            </>
          )}

          {/* Tab: Datos */}
          {activeTab === 'Datos' && (
            <div>
              {dataLoading ? (
                <div className="flex items-center justify-center h-40 gap-3 text-outline">
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Cargando datos...
                </div>
              ) : (
                <>
                  {/* Contenedor con scroll horizontal SOLO aquí */}
                  <div className="overflow-x-auto">
                    <table style={{ tableLayout: 'fixed', width: tableWidthPx + 90, borderCollapse: 'collapse' }} className="text-xs text-left">
                      <thead className="bg-surface-container sticky top-0 z-10">
                        <tr>
                          {dataColumns.map((col) => (
                            <th
                              key={col}
                              style={{ width: colWidth(col), minWidth: colWidth(col) }}
                              className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold border-r border-white/5 border-b border-b-white/10"
                            >
                              {col}
                            </th>
                          ))}
                          <th style={{ width: 90, minWidth: 90 }} className="px-3 py-3 text-[10px] font-spartan uppercase tracking-widest text-outline font-bold text-center border-b border-b-white/10">
                            ACCIONES
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.length === 0 ? (
                          <tr>
                            <td colSpan={dataColumns.length + 1} className="px-6 py-10 text-center text-outline">
                              <div className="flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-3xl">inbox</span>
                                <span className="text-sm">Sin registros</span>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                        {dataPagedRows.map((row, i) => {
                          const absIdx = (dataSafePage - 1) * PAGE_SIZE + i
                          return (
                          <tr key={absIdx} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                            {dataColumns.map((col) => {
                              const val = (row as Record<string, unknown>)[col]
                              const isNull = val === null || val === undefined
                              const isBool = typeof val === 'boolean'
                              const isId = col === 'id' || col.endsWith('Id')
                              const isPassword = col === 'password' || col === 'newPassword'
                              const pwKey = `${absIdx}-${col}`
                              const pwVisible = visiblePasswords.has(pwKey)
                              return (
                                <td
                                  key={col}
                                  style={{ width: colWidth(col), minWidth: colWidth(col) }}
                                  className="px-3 py-2 border-r border-white/5 align-top overflow-hidden"
                                >
                                  {isNull ? (
                                    <span className="text-outline italic text-[10px]">NULL</span>
                                  ) : isBool ? (
                                    <span className={`font-bold text-xs ${val ? 'text-tertiary' : 'text-error'}`}>
                                      {val ? 'true' : 'false'}
                                    </span>
                                  ) : isPassword ? (
                                    <div className="flex items-start gap-1">
                                      <span className="font-mono text-[10px] break-all whitespace-normal text-amber-400/80 flex-1">
                                        {pwVisible ? String(val) : '••••••••••••'}
                                      </span>
                                      <button
                                        onClick={() => togglePassword(pwKey)}
                                        className="shrink-0 text-outline hover:text-on-surface transition-colors mt-0.5"
                                        title={pwVisible ? 'Ocultar' : 'Mostrar hash'}
                                      >
                                        <span className="material-symbols-outlined text-[14px]">
                                          {pwVisible ? 'visibility_off' : 'visibility'}
                                        </span>
                                      </button>
                                    </div>
                                  ) : isId ? (
                                    <span className="font-mono text-primary/70 text-[10px] block break-all whitespace-normal">{formatCell(val, col)}</span>
                                  ) : (
                                    <span className="text-on-surface text-xs block break-words whitespace-normal">{formatCell(val, col)}</span>
                                  )}
                                </td>
                              )
                            })}
                            <td style={{ width: 90, minWidth: 90 }} className="px-2 py-2 align-middle">
                              <div className="flex items-center justify-center gap-1">
                                <button
                                  title="Modificar"
                                  onClick={() => setEditRow({ ...row })}
                                  className="p-1 rounded-lg hover:bg-primary/20 text-primary transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                                <button
                                  title="Eliminar"
                                  onClick={() => setDeleteRow(row)}
                                  className="p-1 rounded-lg hover:bg-error/20 text-error transition-colors"
                                >
                                  <span className="material-symbols-outlined text-[16px]">delete</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-outline">
                      {tableData.length === 0
                        ? 'Sin registros'
                        : `Mostrando ${(dataSafePage - 1) * PAGE_SIZE + 1}–${Math.min(dataSafePage * PAGE_SIZE, tableData.length)} de ${tableData.length} filas`}
                    </span>
                    <div className="flex items-center gap-2">
                      {dataTotalPages > 1 && (
                        <div className="flex items-center gap-1">
                          <button onClick={() => setDataPage(1)} disabled={dataSafePage === 1} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">first_page</span></button>
                          <button onClick={() => setDataPage(p => Math.max(1, p - 1))} disabled={dataSafePage === 1} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">chevron_left</span></button>
                          {Array.from({ length: Math.min(7, dataTotalPages) }, (_, i) => {
                            let pg: number
                            if (dataTotalPages <= 7) pg = i + 1
                            else if (dataSafePage <= 4) pg = i + 1
                            else if (dataSafePage >= dataTotalPages - 3) pg = dataTotalPages - 6 + i
                            else pg = dataSafePage - 3 + i
                            return <button key={pg} onClick={() => setDataPage(pg)} className={`w-7 h-7 rounded text-xs font-bold transition-colors ${pg === dataSafePage ? 'bg-primary text-on-primary' : 'hover:bg-white/10 text-outline'}`}>{pg}</button>
                          })}
                          <button onClick={() => setDataPage(p => Math.min(dataTotalPages, p + 1))} disabled={dataSafePage === dataTotalPages} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
                          <button onClick={() => setDataPage(dataTotalPages)} disabled={dataSafePage === dataTotalPages} className="p-1 rounded hover:bg-white/10 text-outline disabled:opacity-30"><span className="material-symbols-outlined text-[16px]">last_page</span></button>
                        </div>
                      )}
                      <button onClick={() => loadTableData(selectedTable)} className="text-xs text-primary hover:underline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">refresh</span>
                        Recargar
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Tab: SQL */}
          {activeTab === 'SQL' && (
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                <span className="text-sm font-bold text-on-surface">Consola SQL</span>
                <span className="text-xs text-outline ml-2">(solo lectura en esta vista)</span>
              </div>
              <textarea
                value={sqlQuery}
                onChange={(e) => setSqlQuery(e.target.value)}
                rows={6}
                className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-4 py-3 font-mono text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                spellCheck={false}
              />
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined text-[16px]">play_arrow</span>
                  Ejecutar
                </button>
                <button onClick={() => setSqlQuery(`SELECT * FROM ${selectedTable} LIMIT 10;`)} className="text-sm text-on-surface-variant hover:text-on-surface">
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

      {/* Modal Editar */}
      {editRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="glass-panel rounded-2xl w-full max-w-lg shadow-2xl flex flex-col max-h-[calc(100vh-2rem)]">
            <div className="px-6 py-3 border-b border-white/5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">edit</span>
                <h3 className="font-headline font-bold text-on-surface">Editar registro — {selectedTable}</h3>
              </div>
              <button onClick={() => setEditRow(null)} className="text-outline hover:text-on-surface">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {Object.entries(editRow).map(([key, val]) => (
                <div key={key}>
                  <label className="text-[10px] font-spartan uppercase tracking-widest text-outline font-bold block mb-1">{key}</label>
                  <input
                    type="text"
                    value={val === null || val === undefined ? '' : String(val)}
                    onChange={(e) => setEditRow((prev) => prev ? { ...prev, [key]: e.target.value } : prev)}
                    disabled={key === 'id' || key === 'createdAt'}
                    className="w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface font-mono focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-40 disabled:cursor-not-allowed"
                  />
                </div>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setEditRow(null)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface">
                Cancelar
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={saving}
                className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-xl text-sm font-bold hover:bg-primary/90 disabled:opacity-50 transition-colors"
              >
                {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Eliminar */}
      {deleteRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="glass-panel rounded-2xl w-full max-w-sm">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
              <span className="material-symbols-outlined text-error">warning</span>
              <h3 className="font-headline font-bold text-on-surface">Eliminar registro</h3>
            </div>
            <div className="p-6 space-y-2">
              <p className="text-sm text-on-surface-variant">¿Estás seguro de eliminar este registro de <span className="font-bold text-on-surface">{selectedTable}</span>?</p>
              <p className="text-xs font-mono text-outline bg-surface-container-highest px-3 py-2 rounded-lg break-all">
                id: {String(deleteRow.id)}
              </p>
              <p className="text-xs text-error">Esta acción no se puede deshacer.</p>
            </div>
            <div className="px-6 py-4 border-t border-white/5 flex justify-end gap-3">
              <button onClick={() => setDeleteRow(null)} className="px-4 py-2 rounded-xl text-sm text-on-surface-variant hover:text-on-surface">
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={saving}
                className="flex items-center gap-2 bg-error text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-error/90 disabled:opacity-50 transition-colors"
              >
                {saving && <span className="material-symbols-outlined text-[14px] animate-spin">progress_activity</span>}
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
