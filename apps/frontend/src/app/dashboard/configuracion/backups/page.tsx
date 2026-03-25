'use client'
import { useEffect, useState } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { safeStorage } from '@/lib/safeStorage'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001'

interface DbInfo { dbSize: string; totalRows: number; totalTables: number; activeConnections: number }

export default function BackupsPage() {
  const [dbInfo, setDbInfo] = useState<DbInfo | null>(null)

  useEffect(() => {
    const token = safeStorage.getItem('accessToken')
    fetch(`${API}/configuracion/db-info`, { headers: { Authorization: `Bearer ${token}` } })
      .then(r => r.json()).then(setDbInfo).catch(() => {})
  }, [])

  return (
    <div className="flex flex-col min-h-full">
      <TopBar title="Seguridad, Backups y Resiliencia" />
      <div className="flex-1 p-8 max-w-[1600px] mx-auto w-full space-y-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight">Centro de Seguridad y Resiliencia</h1>
            <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Gestión de backups, monitoreo de seguridad y configuración de resiliencia del sistema.</p>
          </div>
          <button className="flex items-center gap-2 px-5 h-11 rounded-xl bg-primary/20 text-primary border border-primary/20 hover:bg-primary/30 text-sm font-spartan uppercase tracking-widest transition-all">
            <span className="material-symbols-outlined text-[18px]">backup</span>Backup Manual
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Último Backup', valor: 'Sin datos', icon: 'backup', iconColor: 'text-tertiary bg-tertiary/10', badge: 'Pendiente', badgeColor: 'text-outline bg-white/10' },
            { label: 'Tablas en BD', valor: dbInfo ? String(dbInfo.totalTables) : '—', icon: 'table', iconColor: 'text-primary bg-primary/10', badge: 'Tablas', badgeColor: 'text-primary bg-primary/10' },
            { label: 'Tamaño BD', valor: dbInfo?.dbSize ?? '—', icon: 'storage', iconColor: 'text-secondary bg-secondary/10', badge: 'PostgreSQL', badgeColor: 'text-secondary bg-secondary/10' },
            { label: 'Conexiones Activas', valor: dbInfo ? String(dbInfo.activeConnections) : '—', icon: 'cable', iconColor: 'text-amber-400 bg-amber-500/10', badge: 'Activas', badgeColor: 'text-amber-400 bg-amber-500/10' },
          ].map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${k.iconColor}`}>
                  <span className="material-symbols-outlined text-[20px]">{k.icon}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{k.label}</p>
              </div>
              <p className="text-3xl font-bold text-on-surface">{k.valor}</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded w-fit ${k.badgeColor}`}>{k.badge}</span>
            </div>
          ))}
        </div>

        {/* Configuración + Estado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">settings_backup_restore</span>Configuración de Backups
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Frecuencia', value: 'Cada 6 horas', options: ['Cada hora', 'Cada 6 horas', 'Cada 12 horas', 'Diario'] },
                { label: 'Retención', value: '30 días', options: ['7 días', '15 días', '30 días', '90 días'] },
                { label: 'Destino', value: 'Cloudflare R2', options: ['Local', 'Cloudflare R2', 'AWS S3'] },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-[10px] font-bold tracking-[0.2em] text-outline uppercase block mb-2">{f.label}</label>
                  <select defaultValue={f.value}
                    className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface text-sm focus:ring-2 focus:ring-primary/50">
                    {f.options.map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              ))}
              <div className="flex items-center justify-between p-3 bg-surface-container rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-on-surface">Cifrado AES-256</p>
                  <p className="text-xs text-outline">Todos los backups se cifran antes de almacenarse</p>
                </div>
                <div className="w-10 h-6 bg-tertiary rounded-full flex items-center justify-end px-1 cursor-pointer">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <h3 className="font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">shield</span>Estado de Seguridad
            </h3>
            <div className="space-y-3">
              {[
                { label: 'SSL/TLS Activo', estado: true, desc: 'Certificado válido hasta Dic 2026' },
                { label: 'Autenticación 2FA', estado: false, desc: 'No configurado para todos los usuarios' },
                { label: 'Firewall Activo', estado: true, desc: 'Reglas actualizadas hace 2 días' },
                { label: 'Monitoreo de Intrusiones', estado: true, desc: 'Sin alertas en las últimas 24h' },
                { label: 'Backup Automático', estado: true, desc: 'Último backup exitoso hace 2h' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 p-3 bg-surface-container rounded-xl">
                  <span className={`material-symbols-outlined text-[20px] ${s.estado ? 'text-tertiary' : 'text-amber-400'}`}>
                    {s.estado ? 'check_circle' : 'warning'}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-on-surface">{s.label}</p>
                    <p className="text-xs text-outline">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Historial de Backups */}
        <div className="glass-panel rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-white/5">
            <h3 className="font-semibold text-on-surface">Historial de Backups</h3>
          </div>
          <div className="py-16 text-center">
            <span className="material-symbols-outlined text-4xl text-outline/30 block mb-2">backup</span>
            <p className="text-sm text-outline">Sin historial de backups registrado.</p>
            <p className="text-xs text-outline/60 mt-1">Los backups automáticos se configurarán con Cloudflare R2.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
