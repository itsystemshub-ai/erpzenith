'use client'
import { TopBar } from '@/components/layout/TopBar'

const kpis = [
  { label: 'Documentos', value: '1,248', icon: 'description', color: 'text-primary', bg: 'bg-primary/10' },
  { label: 'Carpetas', value: '42', icon: 'folder', color: 'text-tertiary', bg: 'bg-tertiary/10' },
  { label: 'Compartidos', value: '18', icon: 'share', color: 'text-secondary', bg: 'bg-secondary/10' },
  { label: 'Pendientes Firma', value: '5', icon: 'draw', color: 'text-amber-400', bg: 'bg-amber-400/10' },
]

type DocType = 'PDF' | 'DOCX' | 'XLSX'

interface Doc {
  name: string
  type: DocType
  date: string
  size: string
  icon: string
}

const documents: Doc[] = [
  { name: 'Contrato Marco 2026', type: 'PDF', date: '18 Mar 2026', size: '2.4 MB', icon: 'picture_as_pdf' },
  { name: 'Propuesta Comercial Q1', type: 'DOCX', date: '15 Mar 2026', size: '840 KB', icon: 'article' },
  { name: 'Reporte Financiero Feb', type: 'XLSX', date: '12 Mar 2026', size: '1.1 MB', icon: 'table_chart' },
  { name: 'Política de Calidad ISO', type: 'PDF', date: '08 Mar 2026', size: '3.2 MB', icon: 'picture_as_pdf' },
  { name: 'Nómina Marzo 2026', type: 'XLSX', date: '05 Mar 2026', size: '560 KB', icon: 'table_chart' },
  { name: 'Manual de Procedimientos', type: 'DOCX', date: '01 Mar 2026', size: '4.8 MB', icon: 'article' },
]

const typeBadge: Record<DocType, string> = {
  PDF: 'text-error bg-error/10',
  DOCX: 'text-primary bg-primary/10',
  XLSX: 'text-tertiary bg-tertiary/10',
}

const typeIconColor: Record<DocType, string> = {
  PDF: 'text-error',
  DOCX: 'text-primary',
  XLSX: 'text-tertiary',
}

export default function DocumentosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Documentos" />
      <div className="flex-1 p-8 space-y-8 max-w-[1600px] mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">Gestión Documental con IA</h2>
            <p className="text-on-surface-variant mt-1">Búsqueda semántica, firma digital y organización inteligente de documentos.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-primary/90 transition-colors w-fit">
            <span className="material-symbols-outlined text-[18px]">upload</span>
            Subir Documento
          </button>
        </div>

        {/* AI Search Bar */}
        <div className="glass-panel rounded-2xl p-4 flex items-center gap-4">
          <div className="flex items-center gap-2 bg-primary/10 rounded-xl px-3 py-1.5 shrink-0">
            <span className="material-symbols-outlined text-primary text-[16px] animate-pulse">auto_awesome</span>
            <span className="text-xs font-bold text-primary font-spartan uppercase tracking-widest">IA</span>
          </div>
          <input
            placeholder="Busca documentos con lenguaje natural... ej: 'contratos de 2026 pendientes de firma'"
            className="flex-1 bg-transparent text-sm text-on-surface placeholder:text-outline focus:outline-none"
          />
          <button className="text-outline hover:text-on-surface">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div key={k.label} className="glass-panel rounded-2xl p-6">
              <div className={`w-10 h-10 rounded-xl ${k.bg} flex items-center justify-center mb-4`}>
                <span className={`material-symbols-outlined ${k.color}`}>{k.icon}</span>
              </div>
              <p className="text-xs text-outline uppercase tracking-widest font-spartan font-bold">{k.label}</p>
              <p className={`text-3xl font-headline font-bold mt-1 ${k.color}`}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Document Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-headline font-bold text-on-surface">Documentos Recientes</h3>
            <button className="text-sm text-primary font-bold hover:underline">Ver todos</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.name} className="glass-panel rounded-2xl p-5 hover:bg-white/5 transition-colors cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-2xl ${typeIconColor[doc.type]}`}>{doc.icon}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${typeBadge[doc.type]}`}>{doc.type}</span>
                </div>
                <p className="font-medium text-on-surface text-sm mb-1 group-hover:text-primary transition-colors">{doc.name}</p>
                <div className="flex items-center justify-between text-xs text-outline mt-2">
                  <span>{doc.date}</span>
                  <span>{doc.size}</span>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <button className="text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">download</span>
                    Descargar
                  </button>
                  <button className="text-xs text-on-surface-variant hover:text-on-surface flex items-center gap-1 ml-auto">
                    <span className="material-symbols-outlined text-[14px]">share</span>
                    Compartir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
