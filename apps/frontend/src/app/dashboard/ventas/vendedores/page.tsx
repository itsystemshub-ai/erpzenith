'use client'
import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { TopBar } from '@/components/layout/TopBar'
import { GlassCard } from '@/components/ui/GlassCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { useNotificationStore } from '@/stores/notificationStore'
import api from '@/lib/api'
import * as XLSX from 'xlsx'
import { GeoSelector } from '@/components/ui/GeoSelector'

interface Vendedor {
  id: string
  idcima: string | null
  rif: string | null
  nombre: string
  region: string | null
  estado: string | null
  municipio: string | null
  personaContacto: string | null
  direccion: string | null
  telefonoPersonal: string | null
  telefonoFijo: string | null
  email: string | null
  ciudad: string | null
  notas: string | null
  isActive: boolean
  createdAt: string
}

interface VendedorForm {
  idcima: string; rif: string; nombre: string; region: string; estado: string
  municipio: string; personaContacto: string; direccion: string
  telefonoPersonal: string; telefonoFijo: string; ciudad: string; notas: string
}

const EMPTY_FORM: VendedorForm = {
  idcima: '', rif: '', nombre: '', region: '', estado: '', municipio: '',
  personaContacto: '', direccion: '', telefonoPersonal: '', telefonoFijo: '', ciudad: '', notas: '',
}

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, ' ').trim()
const getCol = (r: any, ...keys: string[]): string | null => {
  const rKeys = Object.keys(r)
  for (const k of keys) {
    const found = rKeys.find(rk => norm(rk) === norm(k))
    if (found !== undefined) {
      const raw = r[found]
      if (raw === null || raw === undefined) continue
      const v = String(raw).trim()
      if (v) return v
    }
  }
  return null
}

export default function VendedoresPage() {
  const [vendedores, setVendedores] = useState<Vendedor[]>([])
  const [loading, setLoading] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState<'Todos' | 'Activo' | 'Inactivo' | 'Duplicados'>('Todos')
  const [modal, setModal] = useState<{ open: boolean; editing: Vendedor | null }>({ open: false, editing: null })
  const [form, setForm] = useState<VendedorForm>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [importedRows, setImportedRows] = useState(0)
  const [deleteAll, setDeleteAll] = useState(false)
  const [page, setPage] = useState(1)
  const [mergeModal, setMergeModal] = useState<{ rif: string; group: Vendedor[] } | null>(null)
  const [merging, setMerging] = useState(false)
  const PAGE_SIZE = 100
  const fileInputRef = useRef<HTMLInputElement>(null)
  const addNotification = useNotificationStore(s => s.add)

  useEffect(() => { setPage(1) }, [busqueda, filtroEstado])

  const fetchVendedores = useCallback(async (search?: string) => {
    setLoading(true)
    try {
      const params = search ? `?search=${encodeURIComponent(search)}` : ''
      const res = await api.get(`/ventas/vendedores${params}`)
      setVendedores(res.data)
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  // Notificar duplicados por RIF
  const prevDupCount = useRef(0)
  useEffect(() => {
    if (loading) return
    const rifCount = new Map<string, number>()
    for (const v of vendedores) {
      if (!v.rif) continue
      const key = v.rif.trim().toUpperCase()
      rifCount.set(key, (rifCount.get(key) ?? 0) + 1)
    }
    let dupRecords = 0
    for (const count of rifCount.values()) { if (count > 1) dupRecords += count }
    if (dupRecords > 0 && dupRecords !== prevDupCount.current) {
      prevDupCount.current = dupRecords
      addNotification({ type: 'warning', title: 'RIFs duplicados en Vendedores', message: `${dupRecords} vendedores tienen un RIF que aparece más de una vez.`, module: 'Ventas' })
    } else if (dupRecords === 0) { prevDupCount.current = 0 }
  }, [vendedores, loading])

  useEffect(() => { fetchVendedores() }, [fetchVendedores])
  useEffect(() => {
    const t = setTimeout(() => fetchVendedores(busqueda), 300)
    return () => clearTimeout(t)
  }, [busqueda, fetchVendedores])

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (ev) => {
      const wb = XLSX.read(ev.target?.result, { type: 'binary' })
      const ws = wb.Sheets[wb.SheetNames[0]]
      const rows: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' })
      const mapped = rows
        .map((r) => ({
          idcima:           getCol(r, 'idcima', 'IDCIMA', 'Id CIMA', 'Id', 'ID') ?? undefined,
          rif:              getCol(r, 'RIF', 'rif', 'R.I.F', 'R.I.F.', 'CEDULA', 'cedula') ?? undefined,
          nombre:           getCol(r, 'EMPRESA', 'empresa', 'NOMBRE', 'nombre', 'RAZON SOCIAL', 'Razon Social') ?? undefined,
          region:           getCol(r, 'REGIÓN', 'REGION', 'region', 'Región', 'ZONA') ?? undefined,
          estado:           getCol(r, 'ESTADO', 'estado', 'Estado', 'ENTIDAD') ?? undefined,
          municipio:        getCol(r, 'MUNICIPIO', 'municipio', 'Municipio', 'CIUDAD') ?? undefined,
          personaContacto:  getCol(r, 'PERSONA DE CONTACTO', 'PERSONA DE', 'CONTACTO', 'contacto') ?? undefined,
          direccion:        getCol(r, 'DIRECCION', 'DIRECCIÓN', 'direccion', 'Dirección') ?? undefined,
          telefonoPersonal: getCol(r, 'TELEFONO PERSONAL', 'TELEFONO', 'telefono', 'Teléfono', 'TELF', 'TEL') ?? undefined,
          telefonoFijo:     getCol(r, 'TELEFONO FIJO', 'FIJO', 'telefonoFijo', 'TELF FIJO') ?? undefined,
          email:            getCol(r, 'EMAIL', 'email', 'Email', 'CORREO', 'correo') ?? undefined,
        }))
        .filter(r => Object.values(r).some(v => v !== undefined && String(v).trim() !== ''))
        .map(r => ({ ...r, nombre: r.nombre ?? 'Sin nombre' }))
      try {
        const res = await api.post('/ventas/vendedores/bulk', { rows: mapped })
        setImportedRows(res.data.created + res.data.updated)
        await fetchVendedores()
        if (res.data.errors?.length > 0) console.warn('[Import] Errores:', res.data.errors)
        alert(`Importación completada: ${res.data.created} creados, ${res.data.updated} actualizados${res.data.skipped ? `, ${res.data.skipped} con error` : ''}.`)
      } catch (err: any) {
        alert(`Error al importar: ${err?.response?.data?.message ?? err?.message ?? 'desconocido'}`)
      }
    }
    reader.readAsBinaryString(file)
    e.target.value = ''
  }

  const handleDeleteAll = async () => {
    try {
      for (const v of vendedores) await api.delete(`/ventas/vendedores/${v.id}`)
      setDeleteAll(false); setImportedRows(0); fetchVendedores()
    } catch { alert('Error al eliminar.') }
  }

  const openCreate = () => { setForm(EMPTY_FORM); setModal({ open: true, editing: null }) }
  const openEdit = (v: Vendedor) => {
    setForm({
      idcima: v.idcima ?? '', rif: v.rif ?? '', nombre: v.nombre,
      region: v.region ?? '', estado: v.estado ?? '', municipio: v.municipio ?? '',
      personaContacto: v.personaContacto ?? '', direccion: v.direccion ?? '',
      telefonoPersonal: v.telefonoPersonal ?? '', telefonoFijo: v.telefonoFijo ?? '',
      ciudad: v.ciudad ?? '', notas: v.notas ?? '',
    })
    setModal({ open: true, editing: v })
  }

  const handleSave = async () => {
    if (!form.nombre.trim()) return
    setSaving(true)
    try {
      if (modal.editing) await api.patch(`/ventas/vendedores/${modal.editing.id}`, form)
      else await api.post('/ventas/vendedores', form)
      setModal({ open: false, editing: null }); fetchVendedores(busqueda)
    } catch (e) { console.error(e) }
    finally { setSaving(false) }
  }

  const handleDelete = async (id: string) => {
    try { await api.delete(`/ventas/vendedores/${id}`); setDeleteId(null); fetchVendedores(busqueda) }
    catch (e) { console.error(e) }
  }

  // Duplicados por RIF
  const { duplicateIds, rifGroups } = useMemo(() => {
    const rifMap = new Map<string, Vendedor[]>()
    for (const v of vendedores) {
      if (!v.rif) continue
      const key = v.rif.trim().toUpperCase()
      if (!rifMap.has(key)) rifMap.set(key, [])
      rifMap.get(key)!.push(v)
    }
    const ids = new Set<string>()
    const groups = new Map<string, Vendedor[]>()
    for (const [rif, group] of rifMap) {
      if (group.length > 1) { group.forEach(v => ids.add(v.id)); groups.set(rif, group) }
    }
    return { duplicateIds: ids, rifGroups: groups }
  }, [vendedores])

  const duplicateCount = duplicateIds.size

  const openMergeModal = (v: Vendedor) => {
    if (!v.rif) return
    const key = v.rif.trim().toUpperCase()
    const group = rifGroups.get(key)
    if (group) setMergeModal({ rif: key, group })
  }

  const handleMerge = async (keepId: string) => {
    if (!mergeModal) return
    setMerging(true)
    try {
      const toDelete = mergeModal.group.filter(v => v.id !== keepId)
      await Promise.all(toDelete.map(v => api.delete(`/ventas/vendedores/${v.id}`)))
      setMergeModal(null)
      await fetchVendedores()
    } catch (e) { console.error(e) }
    finally { setMerging(false) }
  }

  const filtered = useMemo(() => {
    let list = vendedores.filter(v => {
      if (filtroEstado === 'Activo') return v.isActive
      if (filtroEstado === 'Inactivo') return !v.isActive
      if (filtroEstado === 'Duplicados') return duplicateIds.has(v.id)
      return true
    })
    if (busqueda.trim()) {
      const q = norm(busqueda)
      list = list.filter(v =>
        norm(v.nombre).includes(q) || norm(v.rif ?? '').includes(q) ||
        norm(v.estado ?? '').includes(q) || norm(v.municipio ?? '').includes(q) ||
        norm(v.personaContacto ?? '').includes(q)
      )
    }
    if (filtroEstado === 'Duplicados' && !busqueda.trim()) {
      list.sort((a, b) => (a.rif ?? '').toUpperCase().localeCompare((b.rif ?? '').toUpperCase()))
    }
    return list
  }, [vendedores, busqueda, filtroEstado, duplicateIds])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const paginated = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE)
  const activos = vendedores.filter(v => v.isActive).length

