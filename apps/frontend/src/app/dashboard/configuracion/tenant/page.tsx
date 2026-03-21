'use client'
import { useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'

export default function TenantPage() {
  const [form, setForm] = useState({
    nombre: 'Empresa Zenith S.A.',
    rif: 'J-12345678-9',
    email: 'admin@zenith.com',
    telefono: '+58 212 555-0100',
    direccion: 'Av. Principal, Caracas, Venezuela',
    moneda: 'USD',
    idioma: 'es',
    zona_horaria: 'America/Caracas',
    logo: '',
    color_primario: '#6366f1',
  })

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Configuración" />
      <div className="flex-1 p-8 space-y-8 max-w-[1200px] mx-auto w-full">

        <div>
          <h2 className="text-4xl font-headline font-bold text-on-surface">Identidad del Tenant</h2>
          <p className="text-on-surface-variant mt-1">Configura la información y apariencia de tu empresa</p>
        </div>

        {/* Logo & Brand */}
        <div className="glass-panel rounded-2xl p-6 space-y-5">
          <h3 className="font-headline font-bold text-on-surface text-lg">Marca y Apariencia</h3>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-primary/20 border-2 border-dashed border-primary/40 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
              <span className="material-symbols-outlined text-primary text-3xl">add_photo_alternate</span>
            </div>
            <div>
              <p className="font-bold text-on-surface">Logo de la empresa</p>
              <p className="text-sm text-on-surface-variant mt-1">PNG, JPG o SVG · Máx 2MB · Recomendado 200x200px</p>
              <button className="mt-2 text-xs text-primary hover:text-primary/80 font-bold transition-colors">Subir logo</button>
            </div>
          </div>
          <div>
            <label className="text-xs text-outline font-bold uppercase tracking-wide block mb-2">Color Primario</label>
            <div className="flex items-center gap-3">
              <input type="color" value={form.color_primario} onChange={e => update('color_primario', e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0" />
              <span className="font-mono text-sm text-on-surface">{form.color_primario}</span>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="glass-panel rounded-2xl p-6 space-y-5">
          <h3 className="font-headline font-bold text-on-surface text-lg">Información de la Empresa</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: 'Nombre de la Empresa', key: 'nombre', type: 'text' },
              { label: 'RIF / NIT', key: 'rif', type: 'text' },
              { label: 'Email Corporativo', key: 'email', type: 'email' },
              { label: 'Teléfono', key: 'telefono', type: 'tel' },
            ].map(f => (
              <div key={f.key}>
                <label className="text-xs text-outline font-bold uppercase tracking-wide block mb-2">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.key as keyof typeof form]}
                  onChange={e => update(f.key, e.target.value)}
                  className="w-full glass-panel rounded-xl px-4 py-3 text-sm text-on-surface bg-transparent outline-none focus:border focus:border-primary/40"
                />
              </div>
            ))}
            <div className="md:col-span-2">
              <label className="text-xs text-outline font-bold uppercase tracking-wide block mb-2">Dirección</label>
              <input
                value={form.direccion}
                onChange={e => update('direccion', e.target.value)}
                className="w-full glass-panel rounded-xl px-4 py-3 text-sm text-on-surface bg-transparent outline-none focus:border focus:border-primary/40"
              />
            </div>
          </div>
        </div>

        {/* Regional Settings */}
        <div className="glass-panel rounded-2xl p-6 space-y-5">
          <h3 className="font-headline font-bold text-on-surface text-lg">Configuración Regional</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { label: 'Moneda', key: 'moneda', options: [{ v: 'USD', l: 'USD — Dólar' }, { v: 'VES', l: 'VES — Bolívar' }, { v: 'EUR', l: 'EUR — Euro' }] },
              { label: 'Idioma', key: 'idioma', options: [{ v: 'es', l: 'Español' }, { v: 'en', l: 'English' }, { v: 'pt', l: 'Português' }] },
              { label: 'Zona Horaria', key: 'zona_horaria', options: [{ v: 'America/Caracas', l: 'Caracas (UTC-4)' }, { v: 'America/Bogota', l: 'Bogotá (UTC-5)' }, { v: 'America/New_York', l: 'New York (UTC-5)' }] },
            ].map(f => (
              <div key={f.key}>
                <label className="text-xs text-outline font-bold uppercase tracking-wide block mb-2">{f.label}</label>
                <select
                  value={form[f.key as keyof typeof form]}
                  onChange={e => update(f.key, e.target.value)}
                  className="w-full glass-panel rounded-xl px-4 py-3 text-sm text-on-surface bg-transparent outline-none">
                  {f.options.map(o => <option key={o.v} value={o.v} className="bg-surface">{o.l}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button className="glass-panel hover:bg-white/10 text-on-surface-variant font-bold text-sm px-6 py-3 rounded-xl transition-colors">Cancelar</button>
          <button className="bg-primary text-on-primary font-bold text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">Guardar Cambios</button>
        </div>
      </div>
    </div>
  )
}
