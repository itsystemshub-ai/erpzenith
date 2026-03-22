'use client'
import { useState, useEffect } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { useErpQuery, useErpMutation } from '@/hooks/useErpQuery'
import { useNotificationStore } from '@/stores/notificationStore'
import { QK } from '@/lib/queryKeys'

interface ConfigItem { clave: string; valor: string }
interface TasaBCV { tasa: number; fecha: string }

export default function LocalizacionPage() {
  const { data: configs = [], isLoading } = useErpQuery<ConfigItem[]>(QK.configuracion.all(), '/configuracion')
  const { data: bcvData, refetch: refetchBCV } = useErpQuery<TasaBCV>(QK.configuracion.bcvTasa(), '/configuracion/bcv/tasa')

  const getConfig = (clave: string, fallback = '') =>
    configs.find(c => c.clave === clave)?.valor ?? fallback

  const [form, setForm] = useState({
    moneda: 'VES',
    idioma: 'es',
    zona_horaria: 'America/Caracas',
    iva_pct: '16',
    formato_fecha: 'DD/MM/YYYY',
    formato_hora: '24h',
    sep_decimal: ',',
    sep_miles: '.',
  })
  const [bcv, setBcv] = useState('')
  const [saved, setSaved] = useState(false)

  // Sincronizar form con datos del backend cuando cargan
  useEffect(() => {
    if (configs.length > 0) {
      setForm({
        moneda:        getConfig('moneda', 'VES'),
        idioma:        getConfig('idioma', 'es'),
        zona_horaria:  getConfig('zona_horaria', 'America/Caracas'),
        iva_pct:       getConfig('iva_pct', '16'),
        formato_fecha: getConfig('formato_fecha', 'DD/MM/YYYY'),
        formato_hora:  getConfig('formato_hora', '24h'),
        sep_decimal:   getConfig('sep_decimal', ','),
        sep_miles:     getConfig('sep_miles', '.'),
      })
    }
  }, [configs])

  useEffect(() => {
    if (bcvData?.tasa) setBcv(String(Number(bcvData.tasa).toFixed(2)))
  }, [bcvData])

  const { add: addNotification } = useNotificationStore()

  const saveConfig = useErpMutation<ConfigItem, { clave: string; valor: string }>({
    endpoint: '/configuracion',
    method: 'post',
  })

  const saveBCV = useErpMutation<TasaBCV, { tasa: number }>({
    endpoint: '/configuracion/bcv/tasa',
    method: 'post',
    invalidateKeys: [QK.configuracion.bcvTasa()],
  })

  const handleSave = async () => {
    const entries = Object.entries(form) as [string, string][]
    try {
      await Promise.all(
        entries.map(([clave, valor]) =>
          saveConfig.mutateAsync({ clave, valor })
        )
      )
      setSaved(true)
      addNotification({
        type: 'success',
        title: 'Configuración guardada',
        message: 'Los parámetros de localización fueron actualizados correctamente.',
        module: 'configuracion/localizacion',
      })
      setTimeout(() => setSaved(false), 2500)
    } catch {
      // silencioso — el error ya lo maneja useErpMutation si se configura errorMessage
    }
  }

  const handleUpdateBCV = () => {
    const tasa = parseFloat(bcv)
    if (!isNaN(tasa) && tasa > 0) {
      saveBCV.mutate({ tasa }, {
        onSuccess: () => {
          addNotification({
            type: 'success',
            title: 'Tasa BCV actualizada',
            message: `Nueva tasa: ${tasa.toFixed(2)} VES/USD`,
            module: 'configuracion/localizacion',
          })
        },
      })
    }
  }

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }))

  const fechaBCV = bcvData?.fecha ? new Date(bcvData.fecha).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Localización y Parámetros Globales" />
      <div className="flex-1 p-8 max-w-[1200px] mx-auto w-full space-y-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Localización y Parámetros Globales</h1>
            <p className="text-on-surface-variant text-sm mt-1">Gestione la configuración regional, monedas, impuestos y parámetros del sistema.</p>
          </div>
          <button onClick={handleSave} disabled={saveConfig.isPending || isLoading}
            className={`flex items-center gap-2 px-5 h-11 rounded-xl text-sm font-spartan uppercase tracking-widest transition-all ${saved ? 'bg-tertiary/20 text-tertiary border border-tertiary/20' : 'bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30'}`}>
            <span className="material-symbols-outlined text-[18px]">{saved ? 'check' : 'save'}</span>
            {saved ? 'Guardado' : saveConfig.isPending ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Regional */}
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">language</span>Configuración Regional
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">País</label>
                <div className="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                  <span className="text-2xl">🇻🇪</span>
                  <div>
                    <p className="text-sm font-semibold text-on-surface">Venezuela</p>
                    <p className="text-xs text-outline">VE • UTC-4</p>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Idioma del Sistema</label>
                <select value={form.idioma} onChange={set('idioma')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Zona Horaria</label>
                <select value={form.zona_horaria} onChange={set('zona_horaria')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  <option value="America/Caracas">America/Caracas (UTC-4)</option>
                  <option value="America/Bogota">America/Bogota (UTC-5)</option>
                  <option value="America/New_York">America/New_York (UTC-5)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Monedas */}
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">payments</span>Monedas y Tasas
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Moneda Principal</label>
                <select value={form.moneda} onChange={set('moneda')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  <option value="VES">Bolívar Venezolano (VES)</option>
                  <option value="USD">Dólar Americano (USD)</option>
                  <option value="EUR">Euro (EUR)</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Tasa BCV (USD/VES)</label>
                <div className="flex gap-2">
                  <input value={bcv} onChange={e => setBcv(e.target.value)}
                    className="flex-1 bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50" />
                  <button onClick={handleUpdateBCV} disabled={saveBCV.isPending}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-semibold hover:bg-primary/20 transition-colors disabled:opacity-50">
                    {saveBCV.isPending ? '...' : 'Actualizar BCV'}
                  </button>
                </div>
                <p className="text-xs text-outline mt-1">Última actualización: {fechaBCV}</p>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">IVA (%)</label>
                <input value={form.iva_pct} onChange={set('iva_pct')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50" />
              </div>
            </div>
          </div>

          {/* Formatos */}
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">format_list_bulleted</span>Formatos
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Formato de Fecha</label>
                <select value={form.formato_fecha} onChange={set('formato_fecha')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  {['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Formato de Hora</label>
                <select value={form.formato_hora} onChange={set('formato_hora')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  {['24h', '12h (AM/PM)'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Separador Decimal</label>
                <select value={form.sep_decimal} onChange={set('sep_decimal')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  {[',', '.'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Separador de Miles</label>
                <select value={form.sep_miles} onChange={set('sep_miles')}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  {['.', ',', ' '].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Empresa */}
          {/* Movido a /configuracion/tenant */}
        </div>
      </div>
    </div>
  )
}
