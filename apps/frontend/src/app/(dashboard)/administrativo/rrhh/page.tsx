'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { 
  Users, 
  Building2, 
  UserPlus, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Plus,
  Search,
  Filter,
  Mail,
  Phone,
  ChevronRight,
  MoreVertical,
  ShieldCheck,
  TrendingUp,
  CreditCard
} from 'lucide-react';
import { KPICard } from '@/ui/KPICard';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RrhhPage() {
  const format = useFormatCurrency();
  
  const { data: dashboard, isLoading: loadingDash } = useQuery({
    queryKey: ['rrhh-dashboard'],
    queryFn: () => api.get('/rrhh/dashboard').then(r => r.data),
  });

  const { data: empleados, isLoading: loadingEmpleados } = useQuery({
    queryKey: ['rrhh-empleados'],
    queryFn: () => api.get('/rrhh/empleados').then(r => r.data),
  });

  const isLoading = loadingDash || loadingEmpleados;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-500 animate-pulse">Sincronizando Nómina...</p>
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
            Recursos <span className="text-primary italic">Humanos (RRHH)</span>
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
              Gestión de Talento • {dashboard?.totalEmpleados || 0} Colaboradores Activos
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition-all">
            <Calendar className="w-4 h-4" />
            Asistencia
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
            <Plus className="w-4 h-4" strokeWidth={3} />
            Nuevo Empleado
          </button>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Colaboradores"
          value={dashboard?.totalEmpleados || 0}
          change={2.1}
          isPositive={true}
          Icon={Users}
          color="#3B82F6"
        />
        <KPICard
          title="Departamentos"
          value={dashboard?.departamentoCount || 0}
          change={0}
          isPositive={true}
          Icon={Building2}
          color="#8B5CF6"
        />
        <KPICard
          title="Nómina Mensual Est."
          value={format(dashboard?.nominaEstimada || 45000)}
          change={4.5}
          isPositive={false}
          Icon={CreditCard}
          color="#10B981"
        />
        <KPICard
          title="Tasa Retención"
          value="98.5%"
          change={0.5}
          isPositive={true}
          Icon={ShieldCheck}
          color="#F59E0B"
        />
      </section>

      {/* Main Content Split */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Employee Directory List */}
        <div className="xl:col-span-2 space-y-6">
          <div className="flex justify-between items-center px-4">
            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">Directorio de Personal</h3>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="BUSCAR EMPLEADO..." 
                  className="bg-slate-50 dark:bg-slate-900/50 border-none rounded-lg pl-9 pr-3 py-2 text-[9px] font-black uppercase tracking-widest w-48"
                />
              </div>
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 transition-colors">
                <Filter className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {empleados?.map((empleado: any) => (
              <motion.div
                key={empleado.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card group hover:border-primary transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center overflow-hidden">
                      <div className="text-xl font-black text-slate-300 uppercase">
                        {empleado.firstName[0]}{empleado.lastName[0]}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                        {empleado.firstName} {empleado.lastName}
                      </h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">
                        {empleado.position?.name || empleado.position || 'SIN CARGO'}
                      </p>
                    </div>
                  </div>
                  <MoreVertical className="w-5 h-5 text-slate-300" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-y border-slate-100 dark:border-slate-800/50">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">{empleado.department?.name || 'Varios'}</span>
                    </div>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border",
                      empleado.isActive 
                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                      : "bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                    )}>
                      {empleado.isActive ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <Mail className="w-3.5 h-3.5" />
                      {empleado.email || 'N/A'}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      <Phone className="w-3.5 h-3.5" />
                      {empleado.cedula || 'N/A'}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-[9px] font-black text-primary uppercase tracking-widest underline underline-offset-4">Ver Expediente Completo</p>
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </motion.div>
            ))}
            {(!empleados || empleados.length === 0) && (
              <div className="col-span-full py-20 bg-white dark:bg-slate-950 rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center">
                <Users className="w-12 h-12 text-slate-200 mb-4" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">No hay colaboradores registrados</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Info Panels */}
        <div className="space-y-8">
          {/* Internal Stats */}
          <div className="bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-xl">
            <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10">Antigüedad por Depto</h4>
            <div className="space-y-8">
              {dashboard?.estabilidadPorDepto?.map((item: any, idx: number) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                    <span className="text-[11px] font-black text-white tabular-nums">{item.percent}% Estabilidad</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      className="h-full bg-primary" 
                    />
                  </div>
                </div>
              ))}
              {(!dashboard?.estabilidadPorDepto || dashboard.estabilidadPorDepto.length === 0) && (
                <div className="text-center py-10 opacity-50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">No hay métricas de estabilidad disponibles</p>
                </div>
              )}
            </div>
          </div>

          {/* Planned Events */}
          <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Próximos Eventos</h3>
              <Calendar className="w-5 h-5 text-primary" />
            </div>

            <div className="space-y-6">
              {dashboard?.events?.map((ev: any, i: number) => (
                <div key={i} className="flex gap-6 group cursor-pointer">
                  <div className="flex flex-col items-center">
                    <div className={cn("w-2 h-2 rounded-full bg-primary")} />
                    <div className="w-px h-full bg-slate-100 dark:bg-slate-800 my-2" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-800 group-last:border-none group-last:pb-0">
                    <p className="text-[11px] font-black text-slate-500 uppercase tracking-widest mb-1 font-mono">{ev.date}</p>
                    <p className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">{ev.text}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
              {(!dashboard?.events || dashboard.events.length === 0) && (
                <div className="text-center py-10 opacity-50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">No hay eventos próximos registrados</p>
                </div>
              )}
            </div>
          </div>

          {/* Support Banner */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
              <GraduationCap className="w-32 h-32" />
            </div>
            <h5 className="text-lg font-black uppercase tracking-tight mb-2">Zenith Academy</h5>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-6 leading-relaxed">Capacitación y desarrollo continuo para tu equipo.</p>
            <button className="px-6 py-3 bg-white text-indigo-700 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg hover:bg-slate-50 transition-colors">
              Explorar Cursos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
