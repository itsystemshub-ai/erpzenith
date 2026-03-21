'use client';

import { useState, useEffect } from 'react';
import { useAuthStore } from '@/stores/authStore';
import { useCurrencyStore } from '@/stores/currencyStore';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { Bell, Menu, Search, Sun, Moon, User, Settings, LogOut, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TopBarProps {
  sidebarOpen: boolean;
  onToggle: () => void;
}

export function TopBar({ sidebarOpen, onToggle }: TopBarProps) {
  const { user } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const { currency, toggleCurrency } = useCurrencyStore();
  const [mounted, setMounted] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-30 w-full px-8 py-4 transition-all duration-300 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-b border-white/20 dark:border-white/5">
      <div className="flex items-center justify-between gap-8">
        {/* Left: Mobile Toggle & Search */}
        <div className="flex items-center gap-8 flex-1">
          <button
            onClick={onToggle}
            className="p-3 text-slate-500 hover:bg-white dark:hover:bg-slate-900 rounded-2xl border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all shadow-sm hover:shadow-md active:scale-95 group"
          >
            <Menu className="w-5 h-5 group-hover:text-primary transition-colors" strokeWidth={2.5} />
          </button>

          <div className="hidden md:flex relative max-w-2xl w-full group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-300" strokeWidth={2.5} />
            <input
              type="text"
              placeholder="Buscar inteligencia de negocio o módulos..."
              className="w-full pl-14 pr-8 py-3.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-[1.25rem] text-[11px] font-black uppercase tracking-[0.2em] focus:ring-8 focus:ring-primary/5 focus:border-primary/40 focus:bg-white dark:focus:bg-slate-950 transition-all duration-500 outline-none shadow-inner placeholder:text-slate-400/60 placeholder:font-bold"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-[9px] font-black text-slate-400 border border-slate-200 dark:border-slate-700 hidden lg:block opacity-0 group-focus-within:opacity-100 transition-opacity">
              ESC
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-slate-100/30 dark:bg-slate-900/40 p-1.5 rounded-[1.25rem] border border-white/20 dark:border-slate-800/50 shadow-sm backdrop-blur-md">
            {/* Currency Toggle */}
            <button
              onClick={toggleCurrency}
              className="px-4 py-2.5 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary hover:bg-white dark:hover:bg-slate-800 rounded-2xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 active:scale-95 shadow-sm group/currency"
              title="Cambiar Moneda (Bs / USD)"
            >
              <Coins className={cn("w-4 h-4 transition-transform group-hover/currency:rotate-12", currency === 'USD' ? "text-emerald-500 text-glow-primary" : "text-primary")} strokeWidth={2.5} />
              <div className="flex items-center gap-1.5 font-black">
                <span className={cn(currency === 'BS' ? "text-primary" : "text-slate-400")}>BS</span>
                <span className="text-slate-300 dark:text-slate-700">/</span>
                <span className={cn(currency === 'USD' ? "text-emerald-500" : "text-slate-400")}>USD</span>
              </div>
            </button>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 text-slate-500 hover:text-primary transition-all hover:bg-white dark:hover:bg-slate-800 rounded-xl active:scale-90"
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={2.5} /> : <Moon className="w-4 h-4" strokeWidth={2.5} />}
                </motion.div>
              </AnimatePresence>
            </button>
            
            <button className="p-2.5 text-slate-500 hover:text-primary transition-all hover:bg-white dark:hover:bg-slate-800 rounded-xl relative active:scale-90">
              <Bell className="w-4 h-4" strokeWidth={2.5} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm animate-pulse" />
            </button>
          </div>

          <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 mx-2 opacity-50" />

          {/* User Profile */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-5 pl-3 group cursor-pointer"
            >
              <div className="flex flex-col items-end hidden sm:flex space-y-1">
                <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  {user?.nombre || 'Administrador'}
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] opacity-70 group-hover:opacity-100 transition-opacity">
                  {user?.rol || 'Super Admin'}
                </span>
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-[1.25rem] bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border-2 border-primary/20 flex items-center justify-center text-primary font-black text-xl shadow-md group-hover:border-primary group-hover:shadow-primary/10 transition-all active:scale-95">
                  {user?.nombre?.[0] || 'A'}
                </div>
                <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-emerald-500 border-[3.5px] border-white dark:border-slate-950 rounded-full shadow-sm" />
              </div>
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowUserMenu(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: 20, scale: 0.9, filter: 'blur(10px)' }}
                    className="absolute right-0 mt-6 w-72 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/5 overflow-hidden z-50"
                  >
                    <div className="p-8 border-b border-slate-100 dark:border-slate-900/50 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
                      <p className="font-black text-lg text-slate-900 dark:text-white uppercase tracking-tighter leading-none relative z-10">{user?.nombre}</p>
                      <p className="text-[10px] font-black text-slate-400 truncate uppercase mt-2 tracking-widest relative z-10">{user?.email}</p>
                    </div>
                    <div className="p-4 space-y-1">
                      <button 
                        onClick={() => alert('Perfil: Fase Premium V2.')}
                        className="w-full flex items-center gap-4 px-5 py-4 text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 rounded-[1.25rem] transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800 shadow-sm hover:shadow-md"
                      >
                        <User className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        <span>Perfil Corporativo</span>
                      </button>
                      <button 
                        onClick={() => alert('Configuración: Mantenimiento Preventivo.')}
                        className="w-full flex items-center gap-4 px-5 py-4 text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 rounded-[1.25rem] transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800 shadow-sm hover:shadow-md"
                      >
                        <Settings className="w-4 h-4 text-primary" strokeWidth={2.5} />
                        <span>Configuración</span>
                      </button>
                      <div className="h-px bg-slate-100 dark:bg-slate-900 my-4 mx-6 opacity-50" />
                      <button 
                        onClick={() => {
                          const { logout } = useAuthStore.getState();
                          logout();
                          window.location.href = '/login';
                        }}
                        className="w-full flex items-center gap-4 px-5 py-4 text-[11px] font-black uppercase tracking-widest text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-[1.25rem] transition-all border border-transparent hover:border-rose-100/50 dark:hover:border-rose-900/50"
                      >
                        <LogOut className="w-4 h-4" strokeWidth={2.5} />
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
