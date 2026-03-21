'use client';
export const dynamic = 'force-dynamic';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { GlassCard } from '@/ui/GlassCard';
import { formatCurrency } from '@/lib/utils';
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react';
import { KPICard } from '@/ui/KPICard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function ReportesPage() {
  const { data: dashboard, isLoading } = useQuery({
    queryKey: ['reportes-dashboard'],
    queryFn: () => api.get('/reportes/dashboard').then(r => r.data),
  });

  const { data: kpis } = useQuery({
    queryKey: ['reportes-kpis'],
    queryFn: () => api.get('/reportes/kpis').then(r => r.data),
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Cargando reportes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reportes</h1>
          <p className="text-gray-500 mt-1">Dashboard general y KPIs</p>
        </div>
      </div>

      {/* KPIs Generales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard
          title="Ventas del Mes"
          value={formatCurrency(kpis?.ventasMes || 0)}
          icon={<DollarSign className="w-8 h-8" />}
          gradient="from-success-500 to-emerald-500"
        />
        <KPICard
          title="Compras del Mes"
          value={formatCurrency(kpis?.comprasMes || 0)}
          icon={<BarChart3 className="w-8 h-8" />}
          gradient="from-primary-500 to-purple-500"
        />
        <KPICard
          title="Stock Bajo"
          value={kpis?.stockBajo || 0}
          icon={<TrendingUp className="w-8 h-8" />}
          gradient="from-warning-500 to-orange-500"
        />
        <KPICard
          title="Clientes Nuevos"
          value={kpis?.clientesNuevos || 0}
          icon={<Users className="w-8 h-8" />}
          gradient="from-info-500 to-blue-500"
        />
      </div>

      {/* Resumen General */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ventas */}
        <GlassCard>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen de Ventas</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Vendido:</span>
              <span className="font-bold text-lg">
                {formatCurrency(dashboard?.ventas?.total || 0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Número de Ventas:</span>
              <span className="font-bold text-lg">
                {dashboard?.ventas?.count || 0}
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Compras */}
        <GlassCard>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Resumen de Compras</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Comprado:</span>
              <span className="font-bold text-lg">
                {formatCurrency(dashboard?.compras?.total || 0)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Número de Compras:</span>
              <span className="font-bold text-lg">
                {dashboard?.compras?.count || 0}
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Inventario */}
        <GlassCard>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Inventario</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Productos:</span>
              <span className="font-bold text-lg">
                {dashboard?.inventory?.products || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Stock Total:</span>
              <span className="font-bold text-lg">
                {dashboard?.inventory?.totalStock || 0}
              </span>
            </div>
          </div>
        </GlassCard>

        {/* Clientes y Empleados */}
        <GlassCard>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Personal y Clientes</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Clientes:</span>
              <span className="font-bold text-lg">
                {dashboard?.customers || 0}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Empleados:</span>
              <span className="font-bold text-lg">
                {dashboard?.employees || 0}
              </span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
