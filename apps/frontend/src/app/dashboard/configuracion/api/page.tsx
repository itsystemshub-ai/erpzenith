'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

const endpoints = [
  { method: 'GET', path: '/api/v1/productos', description: 'Listar todos los productos', auth: true, params: [] },
  { method: 'POST', path: '/api/v1/productos', description: 'Crear nuevo producto', auth: true, params: ['nombre', 'precio', 'stock'] },
  { method: 'GET', path: '/api/v1/productos/:id', description: 'Obtener producto por ID', auth: true, params: ['id'] },
  { method: 'PUT', path: '/api/v1/productos/:id', description: 'Actualizar producto', auth: true, params: ['id', 'nombre', 'precio'] },
  { method: 'DELETE', path: '/api/v1/productos/:id', description: 'Eliminar producto', auth: true, params: ['id'] },
  { method: 'GET', path: '/api/v1/clientes', description: 'Listar clientes', auth: true, params: [] },
  { method: 'POST', path: '/api/v1/facturas', description: 'Crear factura', auth: true, params: ['cliente_id', 'items', 'fecha'] },
  { method: 'GET', path: '/api/v1/reportes/ventas', description: 'Reporte de ventas', auth: true, params: ['desde', 'hasta'] },
  { method: 'POST', path: '/api/v1/webhooks', description: 'Registrar webhook', auth: true, params: ['url', 'eventos'] },
]

const apiKeys = [
  { name: 'Producción Principal', key: 'nxc_live_sk_••••••••••••••••4f2a', created: '2024-01-15', lastUsed: 'Hace 2 min', status: 'activo' },
  { name: 'Integración Contabilidad', key: 'nxc_live_sk_••••••••••••••••8b3c', created: '2024-06-20', lastUsed: 'Hace 1h', status: 'activo' },
  { name: 'Test / Desarrollo', key: 'nxc_test_sk_••••••••••••••••1d9e', created: '2024-11-01', lastUsed: 'Hace 3 días', status: 'activo' },
]

const methodColor: Record<string, string> = {
  GET: 'bg-tertiary/20 text-tertiary',
  POST: 'bg-primary/20 text-primary',
  PUT: 'bg-yellow-500/20 text-yellow-400',
  DELETE: 'bg-error/20 text-error',
}

export default function ApiPage() {
  const [tab, setTab] = useState<'endpoints' | 'keys' | 'webhooks'>('endpoints')
  const [selected, setSelected] = useState<typeof endpoints[0] | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-headline font-bold text-on-surface">API & Webhooks</h2>
            <p className="text-on-surface-variant mt-1">Documentación de la API REST y gestión de integraciones</p>
          </div>
          <div className="flex items-center gap-2 glass-panel rounded-xl px-4 py-2.5">
            <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
            <span className="text-sm text-on-surface-variant">API v1.4.2 · Online</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 glass-panel rounded-xl p-1 w-fit">
          {(['endpoints', 'keys', 'webhooks'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all ${tab === t ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
              {t === 'endpoints' ? 'Endpoints' : t === 'keys' ? 'API Keys' : 'Webhooks'}
            </button>
          ))}
        </div>

        {tab === 'endpoints' && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-2">
              {endpoints.map((ep, i) => (
                <div key={i}
                  onClick={() => setSelected(ep)}
                  className={`glass-panel rounded-xl p-3 cursor-pointer transition-all hover:bg-white/5 flex items-center gap-3 ${selected?.path === ep.path && selected?.method === ep.method ? 'border border-primary/40' : ''}`}>
                  <span className={`text-xs font-bold px-2 py-1 rounded-lg w-16 text-center ${methodColor[ep.method]}`}>{ep.method}</span>
                  <span className="text-sm font-mono text-on-surface-variant truncate">{ep.path}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              {selected ? (
                <div className="glass-panel rounded-2xl p-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold px-3 py-1.5 rounded-lg ${methodColor[selected.method]}`}>{selected.method}</span>
                    <code className="text-sm font-mono text-on-surface">{selected.path}</code>
                  </div>
                  <p className="text-on-surface-variant">{selected.description}</p>

                  <div>
                    <p className="text-xs text-outline font-bold uppercase tracking-wide mb-2">Autenticación</p>
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-white/5">
                      <span className="material-symbols-outlined text-primary text-[16px]">lock</span>
                      <span className="text-sm text-on-surface-variant">Bearer Token requerido</span>
                    </div>
                  </div>

                  {selected.params.length > 0 && (
                    <div>
                      <p className="text-xs text-outline font-bold uppercase tracking-wide mb-2">Parámetros</p>
                      <div className="space-y-2">
                        {selected.params.map(p => (
                          <div key={p} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5">
                            <code className="text-xs text-primary font-mono">{p}</code>
                            <span className="text-xs text-outline">string · requerido</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-outline font-bold uppercase tracking-wide mb-2">Ejemplo de Respuesta</p>
                    <pre className="bg-black/40 rounded-xl p-4 text-xs text-tertiary font-mono overflow-x-auto">
{`{
  "success": true,
  "data": { ... },
  "meta": {
    "total": 100,
    "page": 1
  }
}`}
                    </pre>
                  </div>
                </div>
              ) : (
                <div className="glass-panel rounded-2xl p-6 flex items-center justify-center h-full min-h-[300px]">
                  <div className="text-center text-outline">
                    <span className="material-symbols-outlined text-5xl">api</span>
                    <p className="text-sm mt-2">Selecciona un endpoint para ver documentación</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === 'keys' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Generar API Key
              </button>
            </div>
            {apiKeys.map((k, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-on-surface">{k.name}</p>
                  <code className="text-xs text-outline font-mono mt-1 block">{k.key}</code>
                  <p className="text-xs text-outline mt-1">Creada: {k.created} · Último uso: {k.lastUsed}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-tertiary/20 text-tertiary font-bold">{k.status}</span>
                  <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-3 py-2 rounded-xl transition-colors">Copiar</button>
                  <button className="bg-error/20 hover:bg-error/30 text-error text-xs font-bold px-3 py-2 rounded-xl transition-colors">Revocar</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'webhooks' && (
          <div className="space-y-4">
            <div className="flex justify-end">
              <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Nuevo Webhook
              </button>
            </div>
            {[
              { url: 'https://contabilidad.empresa.com/webhook', eventos: ['factura.creada', 'pago.recibido'], activo: true, entregas: 142 },
              { url: 'https://crm.empresa.com/api/erp-events', eventos: ['cliente.creado', 'venta.completada'], activo: true, entregas: 89 },
              { url: 'https://slack.com/api/webhook/xyz', eventos: ['alerta.stock', 'error.sistema'], activo: false, entregas: 0 },
            ].map((wh, i) => (
              <div key={i} className="glass-panel rounded-2xl p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <code className="text-sm text-primary font-mono">{wh.url}</code>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {wh.eventos.map(e => (
                        <span key={e} className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-on-surface-variant font-mono">{e}</span>
                      ))}
                    </div>
                    <p className="text-xs text-outline mt-2">{wh.entregas} entregas exitosas</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-bold ${wh.activo ? 'bg-tertiary/20 text-tertiary' : 'bg-white/10 text-outline'}`}>
                      {wh.activo ? 'Activo' : 'Inactivo'}
                    </span>
                    <button className="glass-panel hover:bg-white/10 text-on-surface-variant text-xs font-bold px-3 py-2 rounded-xl transition-colors">Editar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
