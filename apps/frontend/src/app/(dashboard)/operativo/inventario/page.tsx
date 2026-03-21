'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { 
  Package, 
  AlertTriangle, 
  TrendingUp, 
  DollarSign, 
  Plus, 
  Search, 
  Filter, 
  Boxes,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { KPICard } from '@/ui/KPICard';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function InventarioPage() {
  const format = useFormatCurrency();
  
  const { data: productos, isLoading } = useQuery({
    queryKey: ['inventario-productos'],
    queryFn: () => api.get('/inventario/productos').then(r => r.data),
  });

  const { data: stockBajo } = useQuery({
    queryKey: ['inventario-stock-bajo'],
    queryFn: () => api.get('/inventario/alertas/stock-bajo').then(r => r.data),
  });

  const { data: valuation } = useQuery({
    queryKey: ['inventario-valuation'],
    queryFn: () => api.get('/inventario/reportes/valoracion').then(r => r.data),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 animate-pulse">Auditando Existencias...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-12 transition-all duration-500">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
            Gestión de <span className="text-primary italic">Inventarios</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
              Control de Stock Centralizado • {productos?.length || 0} SKUs Registrados
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            <Boxes className="w-4 h-4" />
            Almacenes
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            <Plus className="w-4 h-4" strokeWidth={3} />
            Nuevo Producto
          </button>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Valor del Activo"
          value={format(valuation?.totalValue || 0)}
          change={4.2}
          isPositive={true}
          Icon={DollarSign}
          color="#3B82F6"
        />
        <KPICard
          title="Stock Crítico"
          value={stockBajo?.length || 0}
          change={-12}
          isPositive={true}
          Icon={AlertTriangle}
          color="#F43F5E"
        />
        <KPICard
          title="SKUs Activos"
          value={productos?.length || 0}
          change={1.5}
          isPositive={true}
          Icon={Package}
          color="#8B5CF6"
        />
        <KPICard
          title="Rotación Promedio"
          value="24.5%"
          change={2.1}
          isPositive={true}
          Icon={TrendingUp}
          color="#10B981"
        />
      </section>

      {/* Alerts & Table Split */}
      <section className="grid grid-cols-1 xl:grid-cols-4 gap-8">
        {/* Main List */}
        <div className="xl:col-span-3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Kardex de Existencias</h3>
              <div className="relative group w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="BUSCAR SKU O NOMBRE..."
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border-none rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-white placeholder:text-slate-400 focus:ring-1 ring-primary/30 transition-all"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900/50">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Código</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Producto</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Costo Unit.</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Precio Venta</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-center">Stock</th>
                    <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Estatus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {productos?.map((producto: any) => (
                    <tr key={producto.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer">
                      <td className="px-8 py-6">
                        <span className="text-[11px] font-black text-primary uppercase tracking-widest">{producto.code}</span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{producto.name}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mt-1">{producto.category?.name || 'GENÉRICO'}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[12px] font-bold text-slate-500 tabular-nums">{format(producto.cost)}</p>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm font-black text-slate-800 dark:text-white tabular-nums">{format(producto.price)}</p>
                      </td>
                      <td className="px-8 py-6 text-center">
                        <span className={cn(
                          "text-sm font-black tabular-nums transition-colors",
                          producto.stock <= (producto.minStock || 0) ? "text-rose-500" : "text-slate-800 dark:text-white"
                        )}>
                          {producto.stock}
                        </span>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mt-1">UND</p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        {producto.stock <= (producto.minStock || 0) ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 text-rose-600 border border-rose-500/20 rounded-full text-[8px] font-black uppercase tracking-widest animate-pulse">
                            CRÍTICO
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[8px] font-black uppercase tracking-widest">
                            OPTIMO
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* Right Aside: Alerts & Valuation */}
        <aside className="space-y-8">
          {/* Stock Alerts */}
          <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Reposición Urgente</h4>
              <AlertTriangle className={cn("w-5 h-5", stockBajo?.length > 0 ? "text-rose-500" : "text-slate-200")} />
            </div>

            <div className="space-y-4">
              {stockBajo?.map((item: any) => (
                <div key={item.productId} className="p-5 bg-rose-500/5 border border-rose-500/10 rounded-2xl group cursor-pointer hover:bg-rose-500/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-tight">{item.name}</p>
                    <ArrowRight className="w-3.5 h-3.5 text-rose-500 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>Stock: <span className="text-rose-600">{item.currentStock}</span></span>
                    <span>Min: {item.minStock}</span>
                  </div>
                </div>
              ))}
              {(!stockBajo || stockBajo.length === 0) && (
                <div className="text-center py-10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Existencias Sostenibles</p>
                </div>
              )}
            </div>
          </div>

          {/* Valuation by Category */}
          <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl">
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10">Valoración por Sector</h4>
            <div className="space-y-8">
              {valuation?.byCategory && Object.entries(valuation.byCategory).map(([cat, data]: [string, any]) => (
                <div key={cat} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{cat}</span>
                    <span className="text-[11px] font-black text-white tabular-nums">{format(data.value)}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: valuation.totalValue > 0 ? `${(data.value / valuation.totalValue) * 100}%` : '0%' }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
