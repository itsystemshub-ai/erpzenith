'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { 
  ShoppingCart, 
  AlertCircle, 
  CheckCircle, 
  Plus, 
  Search, 
  Filter, 
  ArrowRight,
  Clock,
  ChevronRight,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { KPICard } from '@/ui/KPICard';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ComprasPage() {
  const format = useFormatCurrency();
  
  const { data: compras, isLoading } = useQuery({
    queryKey: ['compras'],
    queryFn: () => api.get('/compras').then(r => r.data),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 animate-pulse">Sincronizando Órdenes...</p>
        </div>
      </div>
    );
  }

  const pendientes = compras?.filter((c: any) => c.status === 'PENDING') || [];
  const recibidas = compras?.filter((c: any) => c.status === 'RECEIVED') || [];
  const totalInversion = compras?.reduce((sum: number, c: any) => sum + c.total, 0) || 0;

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-12 transition-all duration-500">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
            Aprovisionamiento <span className="text-primary italic">& Compras</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
              Gestión de Suministros • {compras?.length || 0} Órdenes de Compra
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            <Filter className="w-4 h-4" />
            Filtrar
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            <Plus className="w-4 h-4" strokeWidth={3} />
            Nueva Órden
          </button>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="Inversión Total"
          value={format(totalInversion)}
          change={8.4}
          isPositive={false}
          Icon={ShoppingCart}
          color="#3B82F6"
        />
        <KPICard
          title="Por Recibir"
          value={pendientes.length}
          change={-2}
          isPositive={true}
          Icon={Clock}
          color="#F59E0B"
        />
        <KPICard
          title="Órdenes Recibidas"
          value={recibidas.length}
          change={15.2}
          isPositive={true}
          Icon={CheckCircle2}
          color="#10B981"
        />
      </section>

      {/* Status Columns */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pending Orders */}
        <div className="space-y-6">
          <div className="flex justify-between items-center px-4">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Pendientes de Recepción
            </h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">({pendientes.length})</span>
          </div>
          
          <div className="space-y-4">
            {pendientes.map((compra: any) => (
              <motion.div
                key={compra.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-card hover:border-primary/40 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{compra.number}</p>
                    <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                      {compra.supplier?.businessName}
                    </h4>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-black text-slate-800 dark:text-white tabular-nums">{format(compra.total)}</p>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Fecha Emisión</p>
                    <p className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                      {new Date(compra.date).toLocaleDateString('es-VE')}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.15em]">{compra.items?.length || 0} Productos Solicitados</span>
                  <button className="flex items-center gap-2 text-[9px] font-black text-primary uppercase tracking-widest hover:underline group-hover:translate-x-1 transition-transform">
                    Procesar Recepción <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
            {pendientes.length === 0 && (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Sin órdenes pendientes</p>
              </div>
            )}
          </div>
        </div>

        {/* Received Orders */}
        <div className="space-y-6">
          <div className="flex justify-between items-center px-4">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Historial de Ingresos
            </h3>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">({recibidas.length})</span>
          </div>

          <div className="space-y-4">
            {recibidas.map((compra: any) => (
              <div 
                key={compra.id} 
                className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/30 transition-all relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{compra.number}</p>
                    <h4 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-tight">
                      {compra.supplier?.businessName}
                    </h4>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full text-[8px] font-black uppercase tracking-widest">
                    Recibida
                  </span>
                </div>
                
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-black text-slate-800 dark:text-white tabular-nums">{format(compra.total)}</p>
                  <div className="text-right">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Fecha Ingreso</p>
                    <p className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">
                      {new Date(compra.receivedAt || compra.date).toLocaleDateString('es-VE')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {recibidas.length === 0 && (
              <div className="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Sin órdenes recibidas</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
