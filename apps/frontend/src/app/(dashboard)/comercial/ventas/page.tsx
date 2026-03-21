'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { 
  DollarSign, 
  TrendingUp, 
  AlertTriangle, 
  Plus, 
  ArrowRight, 
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { KPICard } from '@/ui/KPICard';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function VentasPage() {
  const format = useFormatCurrency();
  
  const { data: ventas, isLoading } = useQuery({
    queryKey: ['ventas'],
    queryFn: () => api.get('/ventas').then(r => r.data),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 animate-pulse">Sincronizando Correntista...</p>
        </div>
      </div>
    );
  }

  const facturadas = ventas?.filter((v: any) => v.status === 'INVOICED') || [];
  const borrador = ventas?.filter((v: any) => v.status === 'DRAFT') || [];
  const totalVentas = facturadas.reduce((sum: number, v: any) => sum + v.total, 0);

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-12 transition-all duration-500">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
            Comercial <span className="text-primary italic">& Ventas</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
              Operación Comercial en Tiempo Real • {ventas?.length || 0} Operaciones Totales
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <Link 
            href="/comercial/ventas/nueva"
            className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Plus className="w-4 h-4" strokeWidth={3} />
            Nueva Venta
          </Link>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="Facturación Bruta"
          value={format(totalVentas)}
          change={12.5}
          isPositive={true}
          Icon={TrendingUp}
          color="#3B82F6"
        />
        <KPICard
          title="Ventas Facturadas"
          value={facturadas.length}
          change={2.1}
          isPositive={true}
          Icon={CheckCircle2}
          color="#10B981"
        />
        <KPICard
          title="Presupuestos (Draft)"
          value={borrador.length}
          change={-5.4}
          isPositive={false}
          Icon={Clock}
          color="#F59E0B"
        />
      </section>

      {/* Main Content Split */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Sales Table (Facturadas) */}
        <div className="xl:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Historial de Facturación</h3>
              <div className="relative group w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="BUSCAR FACTURA..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-1 ring-primary/30 transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Referencia</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cliente</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Fecha Emisión</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Operación</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Estatus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {facturadas.map((venta: any, i: number) => (
                    <tr key={venta.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer">
                      <td className="px-8 py-6">
                        <span className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-widest group-hover:text-primary transition-colors">
                          {venta.number}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{venta.customer?.businessName}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mt-1">{venta.customer?.rif}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                          {new Date(venta.date).toLocaleDateString('es-VE', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-lg font-black text-slate-800 dark:text-white tabular-nums">{format(venta.total)}</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[9px] font-black uppercase tracking-widest">
                          <CheckCircle2 className="w-3 h-3" />
                          Facturada
                        </span>
                      </td>
                    </tr>
                  ))}
                  {facturadas.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-8 py-20 text-center">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Sin operaciones facturadas</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Sales in Draft (Borradores) */}
        <aside className="space-y-8">
          <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-10">
              <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Presupuestos en Curso</h4>
              <div className="px-3 py-1 bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-full text-[8px] font-black uppercase tracking-widest">
                {borrador.length} Pendientes
              </div>
            </div>

            <div className="space-y-5">
              {borrador.map((venta: any) => (
                <div key={venta.id} className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-amber-500/40 rounded-3xl transition-all cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{venta.number}</p>
                      <p className="text-sm font-black text-slate-800 dark:text-white group-hover:text-amber-600 transition-colors uppercase tracking-tight">
                        {venta.customer?.businessName}
                      </p>
                    </div>
                    <MoreVertical className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-xl font-black text-slate-800 dark:text-white tabular-nums">{format(venta.total)}</p>
                    <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" />
                      {new Date(venta.date).toLocaleDateString('es-VE')}
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">{venta.items?.length || 0} Items Registrados</span>
                    <button className="text-[9px] font-black text-amber-600 uppercase tracking-widest hover:underline">Gestionar &rarr;</button>
                  </div>
                </div>
              ))}
              {borrador.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No hay presupuestos</p>
                </div>
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
