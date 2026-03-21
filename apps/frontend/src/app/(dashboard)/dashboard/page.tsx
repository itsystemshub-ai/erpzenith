'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { cn } from '@/lib/utils';
import { KPICard } from '@/ui/KPICard';
import { motion } from 'framer-motion';
import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { useCurrencyStore } from '@/stores/currencyStore';
import {
  TrendingUp,
  DollarSign,
  Users,
  Package,
  ShoppingCart,
  Download,
  Sparkles,
  ArrowRight,
  TrendingDown,
  LayoutDashboard,
  Calendar,
  Zap,
  ShieldCheck,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function DashboardPage() {
  const format = useFormatCurrency();
  const { exchangeRate } = useCurrencyStore();
  
  const { data: dashboard, isLoading: loadingDash } = useQuery({
    queryKey: ['dashboard-general'],
    queryFn: () => api.get('/reportes/dashboard').then(r => r.data),
  });

  // Fetch sales for the last 30 days to build the chart
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  const { data: salesData } = useQuery({
    queryKey: ['dashboard-sales-trend'],
    queryFn: () => api.get('/reportes/ventas-periodo', { 
      params: { from: thirtyDaysAgo.toISOString(), to: new Date().toISOString() } 
    }).then(r => r.data),
  });

  // Real chart aggregation logic
  const chartData = salesData?.ventas?.map((v: any) => ({
    name: new Date(v.date).toLocaleDateString('es-VE', { weekday: 'short' }),
    total: v.total
  })).reverse() || [];

  if (loadingDash) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative p-12 rounded-[3.5rem] bg-white/60 dark:bg-slate-950/60 backdrop-blur-2xl border border-white/20 dark:border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col items-center"
        >
          <div className="relative w-28 h-28 mb-10">
            <div className="absolute inset-0 border-4 border-slate-100 dark:border-slate-800 rounded-full" />
            <motion.div 
              className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full shadow-[0_0_20px] shadow-primary/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-full animate-pulse blur-2xl" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-3">
            Iniciando <span className="text-primary italic">Zenith</span>
          </h2>
          <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 animate-pulse">
            Sincronización de Inteligencia Ejecutiva
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-12 transition-all duration-500">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h1 className="text-5xl font-black text-slate-900 dark:text-white tracking-[calc(-0.02em)] uppercase leading-[0.9]">
            PANEL <span className="text-primary italic text-glow-primary">EJECUTIVO</span>
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px] shadow-emerald-500/50 animate-pulse" />
              <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Sistemas Online</span>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] ml-2">
              Tasa BCV: {exchangeRate} Bs/$ • {new Date().toLocaleDateString('es-VE', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="inline-flex bg-slate-100/50 dark:bg-slate-900/50 p-1.5 rounded-2xl border border-white/20 dark:border-slate-800 shadow-inner backdrop-blur-sm">
            {['24h', '7d', '30d', '1y'].map((period) => (
              <button
                key={period}
                className={cn(
                  "px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-[0.9rem] transition-all duration-300",
                  period === '30d' 
                    ? "bg-white dark:bg-slate-800 text-primary shadow-md border border-primary/10" 
                    : "text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                {period}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-3 px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:shadow-xl hover:border-primary/20 transition-all text-slate-700 dark:text-slate-300 active:scale-95 group">
            <Download className="w-4 h-4 group-hover:text-primary transition-colors" />
            Descargar BI
          </button>
        </div>
      </section>

      {/* KPI Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Facturación Bruta"
          value={format(dashboard?.ventas?.total || 0)}
          change={12.5}
          isPositive={true}
          Icon={DollarSign}
          color="#3B82F6"
        />
        <KPICard
          title="Nuevos Clientes"
          value={dashboard?.customers || 0}
          change={8.2}
          isPositive={true}
          Icon={Users}
          color="#10B981"
        />
        <KPICard
          title="Valor del Inventario"
          value={format(dashboard?.inventory?.totalValue || 0)}
          change={-2.4}
          isPositive={true}
          Icon={Package}
          color="#F59E0B"
        />
        <KPICard
          title="Órdenes de Compra"
          value={dashboard?.purchases?.pendingCount || 0}
          change={5.4}
          isPositive={true}
          Icon={ShoppingCart}
          color="#F43F5E"
        />
      </section>

      {/* Main Content Area */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Charts & Insights */}
        <div className="lg:col-span-2 space-y-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card group"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-[0.2em]">Proyección de Ingresos</h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Facturación Real</span>
              </div>
            </div>
            
            <div className="h-[380px] w-full">
              {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 900}}
                      dy={15}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 900}}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        backdropFilter: 'blur(16px)',
                        borderRadius: '24px', 
                        border: '1px solid rgba(255, 255, 255, 0.2)', 
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
                        padding: '16px 20px',
                        fontSize: '12px',
                        fontWeight: '900',
                        textTransform: 'uppercase'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stroke="#3B82F6" 
                      strokeWidth={4}
                      fillOpacity={1} 
                      fill="url(#colorTotal)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="flex items-center justify-center h-full border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl bg-slate-50/50 dark:bg-slate-900/10">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sin datos de facturación en el período</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* AI Insight Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 dark:bg-slate-950 p-12 lg:p-16 rounded-[4rem] text-white overflow-hidden relative border border-white/10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.5)] group hover:border-primary/40 transition-all duration-700"
          >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -mr-64 -mt-64 group-hover:bg-primary/20 transition-colors" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-primary/20 rounded-2xl border border-primary/30 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                  <Zap className="w-7 h-7 text-primary text-glow-primary" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">
                    Zenith Intelligence Engine
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mt-1">Análisis Predictivo V2.4</span>
                </div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-[1.1] tracking-tighter uppercase">
                Optimización de <span className="text-primary italic text-glow-primary">Flujo de Caja</span> Detectada
              </h2>
              
              <p className="text-slate-400 text-xl mb-12 leading-relaxed font-semibold">
                Nuestro motor ha identificado una oportunidad de liquidez inmediata. Al optimizar los términos de pago con <span className="text-white">Corporación XYZ</span> basándose en el historial de facturación reciente, podrías liberar un excedente de <span className="text-white italic text-glow-primary">{format(12450)}</span> para reinversión operativa.
              </p>

              <div className="flex flex-wrap items-center gap-8">
                <button className="bg-primary text-white px-12 py-5 rounded-2xl text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-5 group/btn border border-white/10">
                  Ejecutar Estrategia
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" strokeWidth={3} />
                </button>
                <div className="flex items-center gap-6">
                  <div className="h-10 w-px bg-white/10" />
                  <button className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-all hover:tracking-[0.3em]">
                    Ver Detalles Analíticos
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Widgets & Secondary Data */}
        <aside className="space-y-8">
          {/* Quick Actions / Activity */}
          <div className="bg-white dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-card">
            <h4 className="text-[11px] font-black text-slate-800 dark:text-white uppercase tracking-[0.25em] mb-10">Actividad del Sistema</h4>
            <div className="space-y-8">
              {dashboard?.recentActivity?.map((item: any, i: number) => {
                const Icon = item.type === 'SALE' ? DollarSign : item.type === 'PURCHASE' ? ShoppingCart : Package;
                const color = item.type === 'SALE' ? 'text-emerald-500 bg-emerald-500/10' : item.type === 'PURCHASE' ? 'text-primary bg-primary/10' : 'text-rose-500 bg-rose-500/10';
                
                return (
                  <div key={i} className="flex gap-5 group cursor-pointer">
                    <div className={cn("size-12 rounded-2xl flex items-center justify-center border border-transparent transition-all group-hover:scale-110", color)}>
                      <Icon className="size-6" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-100 dark:border-slate-800 last:border-none last:pb-0">
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                      <p className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">{item.description}</p>
                      <p className="text-[10px] font-bold text-slate-500 mt-1 italic">{new Date(item.date).toLocaleTimeString('es-VE')}</p>
                    </div>
                  </div>
                );
              })}
              {(!dashboard?.recentActivity || dashboard.recentActivity.length === 0) && (
                <div className="text-center py-10 opacity-50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">No hay actividad reciente</p>
                </div>
              )}
            </div>
            <button className="w-full mt-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-primary border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl transition-all">
              Ver Auditoría Global
            </button>
          </div>

          {/* Core Health Monitor */}
          <div className="bg-slate-900 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl">
            <div className="flex items-center gap-3 mb-10">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Estado de Integridad</h4>
            </div>
            <div className="space-y-8">
              {[
                { label: 'Consistencia Contable', p: 100, color: 'bg-emerald-500' },
                { label: 'Seguridad de Datos', p: 98, color: 'bg-primary' },
              ].map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <span>{m.label}</span>
                    <span className="text-white">{m.p}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${m.p}%` }}
                      className={cn("h-full", m.color)} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl text-center">
              <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Todos los sistemas operativos</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
