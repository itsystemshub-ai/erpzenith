'use client'
import { useState, useEffect } from 'react'
import api from '@/lib/api'

interface GeoItem { id: string; nombre: string }

interface GeoSelectorProps {
  region?: string
  estado?: string
  municipio?: string
  onChange: (field: 'region' | 'estado' | 'municipio', value: string) => void
  hideRegion?: boolean
  /** Render only the region select (no label, just the select) */
  onlyRegion?: boolean
  /** Render only the estado select */
  onlyEstado?: boolean
  /** Render only the municipio select */
  onlyMunicipio?: boolean
}

const selectClass = 'w-full bg-surface-container-highest border border-white/10 rounded-xl px-3 py-2 text-sm text-on-surface focus:ring-2 focus:ring-primary/40 outline-none disabled:opacity-40'
const labelClass = 'text-[10px] font-spartan uppercase tracking-widest text-outline block mb-1'

export function GeoSelector({
  region = '', estado = '', municipio = '', onChange,
  hideRegion = false, onlyRegion, onlyEstado, onlyMunicipio,
}: GeoSelectorProps) {
  const [regiones, setRegiones] = useState<GeoItem[]>([])
  const [estados, setEstados] = useState<GeoItem[]>([])
  const [municipios, setMunicipios] = useState<GeoItem[]>([])

  useEffect(() => {
    if (hideRegion) {
      api.get('/geo/estados/all').then(r => setEstados(r.data)).catch(() => {})
    } else {
      api.get('/geo/regiones').then(r => setRegiones(r.data)).catch(() => {})
    }
  }, [hideRegion])

  useEffect(() => {
    if (hideRegion) return
    if (!region) { setEstados([]); setMunicipios([]); return }
    const reg = regiones.find(r => r.nombre === region)
    if (!reg) return
    api.get(`/geo/estados/${reg.id}`).then(r => setEstados(r.data)).catch(() => {})
    setMunicipios([])
  }, [region, regiones, hideRegion])

  useEffect(() => {
    if (!estado) { setMunicipios([]); return }
    const est = estados.find(e => e.nombre === estado)
    if (!est) return
    api.get(`/geo/municipios/${est.id}`).then(r => setMunicipios(r.data)).catch(() => {})
  }, [estado, estados])

  const handleRegion = (v: string) => { onChange('region', v); onChange('estado', ''); onChange('municipio', '') }
  const handleEstado = (v: string) => { onChange('estado', v); onChange('municipio', '') }

  // Partial renders
  if (onlyRegion) return (
    <select value={region} onChange={e => handleRegion(e.target.value)} className={selectClass}>
      <option value="">— Seleccionar —</option>
      {regiones.map(r => <option key={r.id} value={r.nombre}>{r.nombre}</option>)}
    </select>
  )

  if (onlyEstado) return (
    <select value={estado} onChange={e => handleEstado(e.target.value)} className={selectClass}
      disabled={!hideRegion && (!region || estados.length === 0)}>
      <option value="">— Seleccionar —</option>
      {estados.map(e => <option key={e.id} value={e.nombre}>{e.nombre}</option>)}
    </select>
  )

  if (onlyMunicipio) return (
    <select value={municipio} onChange={e => onChange('municipio', e.target.value)} className={selectClass}
      disabled={!estado || municipios.length === 0}>
      <option value="">— Seleccionar —</option>
      {municipios.map(m => <option key={m.id} value={m.nombre}>{m.nombre}</option>)}
    </select>
  )

  // Full render (default)
  return (
    <>
      {!hideRegion && (
        <div>
          <label className={labelClass}>Región</label>
          <select value={region} onChange={e => handleRegion(e.target.value)} className={selectClass}>
            <option value="">— Seleccionar —</option>
            {regiones.map(r => <option key={r.id} value={r.nombre}>{r.nombre}</option>)}
          </select>
        </div>
      )}
      <div>
        <label className={labelClass}>Estado</label>
        <select value={estado} onChange={e => handleEstado(e.target.value)} className={selectClass}
          disabled={!hideRegion && (!region || estados.length === 0)}>
          <option value="">— Seleccionar —</option>
          {estados.map(e => <option key={e.id} value={e.nombre}>{e.nombre}</option>)}
        </select>
      </div>
      <div>
        <label className={labelClass}>Municipio</label>
        <select value={municipio} onChange={e => onChange('municipio', e.target.value)} className={selectClass}
          disabled={!estado || municipios.length === 0}>
          <option value="">— Seleccionar —</option>
          {municipios.map(m => <option key={m.id} value={m.nombre}>{m.nombre}</option>)}
        </select>
      </div>
    </>
  )
}
