'use client'
import { TopBar } from '@/components/layout/TopBar'

const backups = [
  { nombre: 'backup_2026-03-21_14-00.sql', tamaño: '248 MB', tipo: 'Automático', estado: 'Completado', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', fecha: '21 Mar 2026 14:00' },
  { nombre: 'backup_2026-03-21_08-00.sql', tamaño: '247 MB', tipo: 'Automático', estado: 'Completado', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', fecha: '21 Mar 2026 08:00' },
  { nombre: 'backup_2026-03-20_manual.sql', tamaño: '245 MB', tipo: 'Manual', estado: 'Completado', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', fecha: '20 Mar 2026 16:30' },
  { nombre: 'backup_2026-03-20_14-00.sql', tamaño: '244 MB', tipo: 'Automático', estado: 'Completado', estadoColor: 'bg-tertiary/10 text-tertiary border-tertiary/20', fecha: '20 Mar 2026 14:00' },
  { nombre: 'backup_2026-03-19_14-00.sql', tamaño: '241 MB', tipo: 'Automático', estado: 'Error', estadoColor: 'bg-error/10 text-error border-error/20', fecha: '19 Mar 2026 14:00' },
]

export default function BackupsPage() {
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
            { label: 'Último Backup', valor: 'Hace 2h', icon: 'backup', iconColor: 'text-tertiary bg-tertiary/10', badge: 'OK', badgeColor: 'text-tertiary bg-tertiary/10' },
            { label: 'Backups Este Mes', valor: '62', icon: 'history', iconColor: 'text-primary bg-primary/10', badge: 'Automáticos', badgeColor: 'text-primary bg-primary/10' },
            { label: 'Espacio Usado', valor: '14.8 GB', icon: 'storage', iconColor: 'text-secondary bg-secondary/10', badge: '74%', badgeColor: 'text-secondary bg-secondary/10' },
            { label: 'Alertas Activas', valor: '1', icon: 'security', iconColor: 'text-amber-400 bg-amber-500/10', badge: 'Revisar', badgeColor: 'text-amber-400 bg-amber-500/10' },
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
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-highest/30 text-outline text-[10px] uppercase tracking-widest font-spartan">
                  {['Archivo', 'Tamaño', 'Tipo', 'Estado', 'Fecha', ''].map(h => (
                    <th key={h} className="px-5 py-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {backups.map((b, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4 text-sm font-mono text-on-surface-variant">{b.nombre}</td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{b.tamaño}</td>
                    <td className="px-5 py-4 text-sm text-on-surface-variant">{b.tipo}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${b.estadoColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />{b.estado}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs text-outline">{b.fecha}</td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
