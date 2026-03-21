'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

export default function LocalizacionPage() {
  const [moneda, setMoneda] = useState('VES')
  const [idioma, setIdioma] = useState('es')
  const [zona, setZona] = useState('America/Caracas')
  const [iva, setIva] = useState('16')
  const [bcv, setBcv] = useState('36.50')
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Localización y Parámetros Globales" />
      <div className="flex-1 p-8 max-w-[1200px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Localización y Parámetros Globales</h1>
            <p className="text-on-surface-variant text-sm mt-1">Gestione la configuración regional, monedas, impuestos y parámetros del sistema.</p>
          </div>
          <button onClick={handleSave}
            className={`flex items-center gap-2 px-5 h-11 rounded-xl text-sm font-spartan uppercase tracking-widest transition-all ${saved ? 'bg-tertiary/20 text-tertiary border border-tertiary/20' : 'bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30'}`}>
            <span className="material-symbols-outlined text-[18px]">{saved ? 'check' : 'save'}</span>
            {saved ? 'Guardado' : 'Guardar Cambios'}
          </button>
        </div>

        {/* Secciones */}
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
                <select value={idioma} onChange={e => setIdioma(e.target.value)}
                  className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="pt">Português</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">Zona Horaria</label>
                <select value={zona} onChange={e => setZona(e.target.value)}
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
                <select value={moneda} onChange={e => setMoneda(e.target.value)}
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
                  <button className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-xs font-semibold hover:bg-primary/20 transition-colors">
                    Actualizar BCV
                  </button>
                </div>
                <p className="text-xs text-outline mt-1">Última actualización: Hoy 08:00 AM</p>
              </div>
              <div>
                <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">IVA (%)</label>
                <input value={iva} onChange={e => setIva(e.target.value)}
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
              {[
                { label: 'Formato de Fecha', value: 'DD/MM/YYYY', options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'] },
                { label: 'Formato de Hora', value: '24h', options: ['24h', '12h (AM/PM)'] },
                { label: 'Separador Decimal', value: ',', options: [',', '.'] },
                { label: 'Separador de Miles', value: '.', options: ['.', ',', ' '] },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">{f.label}</label>
                  <select defaultValue={f.value}
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                    {f.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-outline">business</span>Datos de la Empresa
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Nombre de la Empresa', placeholder: 'Zenith Enterprise C.A.' },
                { label: 'RIF', placeholder: 'J-12345678-9' },
                { label: 'Dirección', placeholder: 'Caracas, Venezuela' },
                { label: 'Teléfono', placeholder: '+58 412-680-2831' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">{f.label}</label>
                  <input placeholder={f.placeholder}
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50 placeholder:text-outline" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
