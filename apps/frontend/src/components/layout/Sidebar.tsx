'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/stores/authStore';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Building2,
  Factory,
  ShoppingCart,
  Settings,
  ChevronRight,
  LogOut,
  LayoutGrid
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

const MODULE_GROUPS = [
  {
    id: 'administrativo',
    name: 'Administrativo',
    icon: Building2,
    color: '#3B82F6',
    modules: [
      { id: 'contabilidad', name: 'Contabilidad', route: '/administrativo/contabilidad', exists: true },
      { id: 'tesoreria', name: 'Tesorería', route: '/administrativo/tesoreria', exists: true },
      { id: 'rrhh', name: 'RRHH', route: '/administrativo/rrhh', exists: true },
      { id: 'finanzas', name: 'Finanzas', route: '/administrativo/finanzas', exists: false },
    ],
  },
  {
    id: 'operativo',
    name: 'Operativo',
    icon: Factory,
    color: '#10B981',
    modules: [
      { id: 'inventario', name: 'Inventario', route: '/operativo/inventario', exists: true },
      { id: 'compras', name: 'Compras', route: '/operativo/compras', exists: true },
    ],
  },
  {
    id: 'comercial',
    name: 'Comercial',
    icon: ShoppingCart,
    color: '#F43F5E',
    modules: [
      { id: 'ventas', name: 'Ventas', route: '/comercial/ventas', exists: true },
      { id: 'crm', name: 'CRM', route: '/comercial/crm', exists: true },
    ],
  },
  {
    id: 'configuracion',
    name: 'Configuración',
    icon: Settings,
    color: '#94A3B8',
    modules: [
      { id: 'empresa', name: 'Empresa', route: '/configuracion/empresa', exists: false },
      { id: 'usuarios', name: 'Usuarios', route: '/configuracion/usuarios', exists: false },
    ],
  },
];

export function Sidebar({ open, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['administrativo']);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div
      className={cn(
        'h-screen fixed left-0 top-0 flex flex-col transition-all duration-300 z-50',
        'bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 shadow-xl',
        open ? 'w-72' : 'w-20'
      )}
    >
      {/* Header / Logo */}
      <div className="p-8 flex items-center gap-5 border-b border-slate-100 dark:border-slate-900 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center rounded-[1rem] shadow-lg shadow-primary/20 border border-white/20 ring-1 ring-primary/20">
          <LayoutGrid className="w-6 h-6 text-white text-glow-primary" strokeWidth={2.5} />
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white leading-none">
              ZENITH<span className="text-primary italic">.</span>
            </h1>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70 mt-1">
              Corporate
            </span>
          </motion.div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-8 mt-4">
        {/* Main Dashboard Link */}
        <Link
          href="/dashboard"
          className={cn(
            'flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group relative overflow-hidden',
            pathname === '/dashboard' 
              ? 'bg-primary/10 text-primary' 
              : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-900/50 hover:text-slate-900 dark:hover:text-white'
          )}
        >
          {pathname === '/dashboard' && (
            <motion.div 
              layoutId="activeIndicator"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-[6px] h-10 bg-primary rounded-r-full shadow-[0_0_15px_rgba(14,165,233,0.6)]" 
            />
          )}
          <div className={cn(
            "p-2.5 rounded-xl transition-all", 
            pathname === '/dashboard' 
              ? "text-primary bg-white dark:bg-slate-800 shadow-sm border border-primary/20" 
              : "text-slate-400 group-hover:text-primary group-hover:bg-primary/5"
          )}>
            <LayoutDashboard className="w-5 h-5 transition-transform group-hover:scale-110" strokeWidth={2.5} />
          </div>
          {open && <span className="text-sm font-black tracking-tight uppercase">Panel Principal</span>}
        </Link>

        {MODULE_GROUPS.filter(group => group.modules.some(m => m.exists)).map((group) => {
          const isGroupActive = group.modules.some(m => pathname === m.route);
          const isGroupOpen = expandedGroups.includes(group.id) || isGroupActive;
          const Icon = group.icon;

          return (
            <div key={group.id} className="space-y-2">
              <button
                onClick={() => toggleGroup(group.id)}
                className={cn(
                  'w-full flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all group',
                  isGroupOpen 
                    ? 'bg-slate-100/50 dark:bg-slate-900/30' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-900/20'
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-2.5 rounded-xl transition-all",
                    isGroupActive ? "text-primary bg-white dark:bg-slate-800 shadow-sm border border-primary/20" : "text-slate-400 dark:text-slate-600"
                  )}>
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  {open && (
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-[0.25em] transition-colors",
                      isGroupActive ? "text-slate-900 dark:text-white" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-600"
                    )}>
                      {group.name}
                    </span>
                  )}
                </div>
                {open && (
                  <ChevronRight
                    className={cn(
                      'w-3.5 h-3.5 text-slate-300 dark:text-slate-700 transition-transform duration-500',
                      isGroupOpen && 'rotate-90 text-primary scale-110'
                    )}
                    strokeWidth={4}
                  />
                )}
              </button>

              <AnimatePresence initial={false}>
                {isGroupOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, x: -10 }}
                    animate={{ height: 'auto', opacity: 1, x: 0 }}
                    exit={{ height: 0, opacity: 0, x: -10 }}
                    className="ml-7 space-y-1.5 overflow-hidden border-l-2 border-slate-100 dark:border-slate-800/50 mt-2 pl-4"
                  >
                    {group.modules.map(module => {
                      const isActive = pathname === module.route;
                      
                      if (!module.exists) return null;

                      return (
                        <Link
                          key={module.id}
                          href={module.route}
                          className={cn(
                            'w-full flex items-center gap-4 py-2.5 px-4 text-[13px] transition-all relative group/item rounded-2xl',
                            isActive
                              ? 'text-primary font-black bg-primary/5'
                              : 'text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900/50 font-semibold'
                          )}
                        >
                          {isActive && (
                            <motion.div 
                              layoutId={`moduleIndicator-${group.id}`}
                              className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-[5px] h-6 bg-primary rounded-r-full shadow-[0_0_12px_rgba(14,165,233,0.5)]" 
                            />
                          )}
                          <span className="tracking-tight">{module.name}</span>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-100 dark:border-slate-900">
        <button
          onClick={handleLogout}
          type="button"
          className="w-full flex items-center gap-4 px-4 py-3.5 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 hover:text-rose-600 transition-all rounded-2xl active:scale-95 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-rose-600/0 group-hover:bg-rose-600/5 transition-colors" />
          <LogOut className="w-4 h-4 flex-shrink-0 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
          {open && <span className="relative z-10">Cerrar Sesión</span>}
        </button>
      </div>
    </div>
  );
}
