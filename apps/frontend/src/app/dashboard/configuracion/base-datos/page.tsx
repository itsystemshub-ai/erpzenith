'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const tables = [
  { name: 'usuarios', rows: 48, size: '2.4 MB', columns: 12, lastUpdate: 'Hace 5 min' },
  { name: 'productos', rows: 1247, size: '8.1 MB', columns: 18, lastUpdate: 'Hace 1h' },
  { name: 'facturas', rows: 8934, size: '45.2 MB', columns: 22, lastUpdate: 'Hace 2 min' },
  { name: 'clientes', rows: 523, size: '3.8 MB', columns: 15, lastUpdate: 'Hace 30 min' },
  { name: 'ordenes_compra', rows: 312, size: '5.6 MB', columns: 20, lastUpdate: 'Hace 3h' },
  { name: 'empleados', rows: 87, size: '1.2 MB', columns: 25, lastUpdate: 'Hace 1 día' },
  { name: 'inventario_movimientos', rows: 24891, size: '112 MB', columns: 14, lastUpdate: 'Hace 10 min' },
  { name: 'asientos_contables', rows: 5621, size: '28.4 MB', columns: 16, lastUpdate: 'Hace 2h' },
]

const schemaColumns = [
  { name: 'id', type: 'UUID', nullable: false, pk: true, default: 'gen_random_uuid()' },
  { name: 'nombre', type: 'VARCHAR(255)', nullable: false, pk: false, default: null },
  { name: 'precio', type: 'DECIMAL(12,2)', nullable: false, pk: false, default: '0.00' },
  { name: 'stock', type: 'INTEGER', nullable: false, pk: false, default: '0' },
  { name: 'categoria_id', type: 'UUID', nullable: true, pk: false, default: null },
  { name: 'activo', type: 'BOOLEAN', nullable: false, pk: false, default: 'true' },
  { name: 'created_at', type: 'TIMESTAMP', nullable: false, pk: false, default: 'NOW()' },
  { name: 'updated_at', type: 'TIMESTAMP', nullable: false, pk: false, default: 'NOW()' },
]

export default function BaseDatosPage() {
  const [selectedTable, setSelectedTable] = useState<typeof tables[0]>(tables[1])
  const [tab, setTab] = useState<'schema' | 'datos' | 'query'>('schema')
  const [query, setQuery] = useState('SELECT * FROM productos LIMIT 10;')

  const totalRows = tables.reduce((s, t) => s + t.rows, 0)
  const totalSize = '206.7 MB'

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">Base de Datos</h2>
            <p className="text-on-surface-variant mt-1">Editor de esquema, tablas y consultas SQL</p>
          </div>
          <div className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-sm text-on-surface-variant">PostgreSQL 15 · Conectado</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Tablas', value: String(tables.length), icon: 'table_chart', color: 'text-primary' },
            { label: 'Total Registros', value: totalRows.toLocaleString(), icon: 'database', color: 'text-secondary' },
            { label: 'Tamaño Total', value: totalSize, icon: 'storage', color: 'text-tertiary' },
            { label: 'Conexiones Activas', value: '12', icon: 'cable', color: 'text-orange-400' },
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Table list */}
          <div className="lg:col-span-1 glass-panel rounded-2xl overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <p className="text-xs text-outline font-bold uppercase tracking-wide">Tablas</p>
            </div>
            <div className="divide-y divide-white/5">
              {tables.map(t => (
                <button key={t.name}
                  onClick={() => setSelectedTable(t)}
                  className={`w-full text-left px-4 py-3 transition-all hover:bg-white/5 ${selectedTable.name === t.name ? 'bg-primary/10 border-l-2 border-primary' : ''}`}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-outline">table_chart</span>
                    <span className="text-sm font-mono text-on-surface">{t.name}</span>
                  </div>
                  <p className="text-xs text-outline mt-0.5 pl-5">{t.rows.toLocaleString()} filas</p>
                </button>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-on-surface text-lg font-mono">{selectedTable.name}</h3>
              <div className="flex gap-1 glass-panel rounded-xl p-1">
                {(['schema', 'datos', 'query'] as const).map(t => (
                  <button key={t} onClick={() => setTab(t)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
                    {t === 'schema' ? 'Esquema' : t === 'datos' ? 'Datos' : 'SQL'}
                  </button>
                ))}
              </div>
            </div>

            {tab === 'schema' && (
              <div className="glass-panel rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      {['Columna', 'Tipo', 'Nullable', 'PK', 'Default'].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs text-outline font-bold uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {schemaColumns.map(col => (
                      <tr key={col.name} className="hover:bg-white/5 transition-colors">
                        <td className="px-5 py-3 font-mono text-on-surface font-bold">{col.name}</td>
                        <td className="px-5 py-3 font-mono text-primary text-xs">{col.type}</td>
                        <td className="px-5 py-3">
                          <span className={`text-xs font-bold ${col.nullable ? 'text-outline' : 'text-error'}`}>{col.nullable ? 'YES' : 'NO'}</span>
                        </td>
                        <td className="px-5 py-3">
                          {col.pk && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 font-bold">PK</span>}
                        </td>
                        <td className="px-5 py-3 font-mono text-xs text-outline">{col.default || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {tab === 'datos' && (
              <div className="glass-panel rounded-2xl p-6 text-center text-outline">
                <span className="material-symbols-outlined text-4xl">table_rows</span>
                <p className="text-sm mt-2">Vista de datos — {selectedTable.rows.toLocaleString()} registros</p>
                <p className="text-xs mt-1">Usa la pestaña SQL para consultas personalizadas</p>
              </div>
            )}

            {tab === 'query' && (
              <div className="space-y-4">
                <div className="glass-panel rounded-2xl overflow-hidden">
                  <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <span className="text-xs text-outline font-bold uppercase">Editor SQL</span>
                    <button className="flex items-center gap-1.5 bg-primary text-on-primary text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined text-[14px]">play_arrow</span>
                      Ejecutar
                    </button>
                  </div>
                  <textarea
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    rows={5}
                    className="w-full bg-black/40 p-4 text-sm font-mono text-tertiary outline-none resize-none"
                  />
                </div>
                <div className="glass-panel rounded-2xl p-4 text-center text-outline text-sm">
                  Ejecuta una consulta para ver resultados
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
