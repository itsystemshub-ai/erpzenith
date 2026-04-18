import React from 'react';
import { Link } from '@inertiajs/react';

export default function TareasProgramadasCronJobs() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="bg-stone-950/80 backdrop-blur-xl text-lime-500 font-['Space_Grotesk'] uppercase tracking-tight docked full-width top-0 sticky z-50 flex justify-between items-center w-full px-6 py-3">
<div className="text-xl font-bold text-lime-400 tracking-tighter">TITAN INDUSTRIAL ERP</div>
<div className="hidden md:flex items-center gap-8">
<nav className="flex gap-6 text-sm font-medium">
<a className="text-stone-400 hover:text-stone-100 transition-colors" href="#">Dashboard</a>
<a className="text-stone-400 hover:text-stone-100 transition-colors" href="#">Inventario</a>
<a className="text-stone-400 hover:text-stone-100 transition-colors" href="#">Producción</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-400" href="#">ADMINISTRACIÓN</a>
</nav>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all">notifications</button>
<button className="material-symbols-outlined text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all">settings</button>
<button className="material-symbols-outlined text-stone-400 hover:bg-stone-800/50 p-2 rounded transition-all">help_outline</button>
<img alt="Administrator Profile" className="w-8 h-8 rounded-full border border-lime-900/30" data-alt="professional portrait of a senior system administrator in a clean modern office with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO7AQn7DBly5h_tBiWh2OxLWjrNE6_OfvJudtH3KDVndKk0NlFGW9Zh1NpknOWJMHVfoOuyRwptMeW46XReVrDJ5eV6r4QO15dteaR_lQ_Es-0Cj4NAtkBtqlmkSIC9XtDT2X-TQXkswJcOXASRjhNUBOm9BOfANqwub4MWz-Z1a80CkdFQ0KsOmJ2BoflYapZKiEyGwSMow-rK-M-zvu99hLjWUv2ySidVeSaF5cYCKw5VUNaglT9buUlzTrCiX-KOQtyK3z1doA"/>
</div>
</div>
</header>
<div className="flex">
{/* Comentario remanente */}
<aside className="bg-stone-900 dark:bg-stone-950 h-screen w-64 border-r border-stone-800/50 shadow-[40px_0_40px_-20px_rgba(0,0,0,0.3)] fixed left-0 top-0 h-full flex flex-col pt-16 z-40 hidden md:flex">
<div className="px-6 py-8">
<div className="text-stone-200 font-black tracking-widest text-xs mb-1 uppercase">Administración</div>
<div className="text-stone-500 text-[10px] font-mono">V2.4.0-STABLE</div>
</div>
<nav className="flex-1 space-y-1">
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-['Inter'] text-sm font-medium tracking-wide">Usuarios</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-['Inter'] text-sm font-medium tracking-wide">Roles</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">database</span>
<span className="font-['Inter'] text-sm font-medium tracking-wide">Base de Datos</span>
</a>
<a className="bg-stone-800/50 text-lime-400 border-l-4 border-lime-500 px-4 py-3 flex items-center gap-3 active:opacity-80" href="#">
<span className="material-symbols-outlined" >account_tree</span>
<span className="font-['Inter'] text-sm font-medium tracking-wide">Flujos</span>
</a>
<a className="text-stone-400 hover:bg-stone-800/30 px-4 py-3 flex items-center gap-3 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">settings_input_component</span>
<span className="font-['Inter'] text-sm font-medium tracking-wide">Parámetros</span>
</a>
</nav>
<div className="p-4 border-t border-stone-800/50">
<button className="w-full bg-lime-500 text-stone-950 text-[10px] font-black py-2 tracking-widest hover:bg-lime-400 transition-colors uppercase">
                    EJECUTAR DIAGNÓSTICO
                </button>
</div>
<div className="p-2 space-y-1 mb-4">
<a className="text-stone-500 hover:text-stone-300 px-4 py-2 flex items-center gap-3 text-xs" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span> Soporte
                </a>
<a className="text-stone-500 hover:text-stone-300 px-4 py-2 flex items-center gap-3 text-xs" href="#">
<span className="material-symbols-outlined text-sm">logout</span> Cerrar Sesión
                </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 p-6 lg:p-10">
{/* Comentario remanente */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-on-surface mb-2">Cron Jobs</h1>
<p className="text-secondary max-w-2xl font-medium border-l-4 border-primary pl-4">Gestión y monitoreo de procesos automatizados de alto rendimiento. Control de redundancia y disparadores manuales del sistema central.</p>
</div>
<div className="flex gap-3">
<button className="bg-surface-container-high text-on-surface font-bold uppercase text-xs px-6 py-3 flex items-center gap-2 hover:scale-[1.02] transition-transform">
<span className="material-symbols-outlined text-lg">refresh</span> Recargar Estados
                    </button>
<button className="bg-primary text-on-primary font-black uppercase text-xs px-6 py-3 flex items-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">add</span> Nueva Tarea
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="bg-surface-container-lowest p-6 flex flex-col gap-1 relative overflow-hidden">
<div className="text-[10px] font-black text-secondary tracking-widest uppercase">Tareas Activas</div>
<div className="text-4xl font-black headline">12</div>
<div className="absolute -right-4 -bottom-4 opacity-5">
<span className="material-symbols-outlined text-8xl">settings_suggest</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-1 relative overflow-hidden border-b-4 border-primary">
<div className="text-[10px] font-black text-secondary tracking-widest uppercase">Éxito Últimas 24h</div>
<div className="text-4xl font-black headline text-primary">99.8%</div>
<div className="absolute -right-4 -bottom-4 opacity-5">
<span className="material-symbols-outlined text-8xl">check_circle</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-1 relative overflow-hidden">
<div className="text-[10px] font-black text-secondary tracking-widest uppercase">Próximo Disparo</div>
<div className="text-2xl font-black headline">14:00:00</div>
<div className="text-[10px] text-secondary">SYNC_INV_01</div>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col gap-1 relative overflow-hidden">
<div className="text-[10px] font-black text-secondary tracking-widest uppercase">Alertas Sistema</div>
<div className="text-4xl font-black headline text-error">0</div>
<div className="absolute -right-4 -bottom-4 opacity-5">
<span className="material-symbols-outlined text-8xl">warning</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="space-y-4">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest flex flex-col lg:flex-row items-center gap-6 p-6 group hover:bg-white transition-colors relative overflow-hidden">
<div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">account_balance_wallet</span>
</div>
<div className="flex-1 w-full lg:w-auto">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-bold headline uppercase">Cierre de Período Contable</h3>
<span className="px-2 py-0.5 bg-primary/20 text-on-primary-container text-[10px] font-bold uppercase tracking-tighter">Diario</span>
</div>
<p className="text-xs text-secondary font-medium uppercase">Consolidación de asientos contables y generación de balance de sumas y saldos.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto text-center lg:text-left">
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Frecuencia</div>
<div className="text-sm font-mono font-bold">0 0 * * *</div>
</div>
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Última Ejecución</div>
<div className="text-sm font-bold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                Éxito <span className="text-[10px] font-normal text-secondary">hace 14h</span>
</div>
</div>
<div className="hidden md:block">
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Carga CPU</div>
<div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden mt-2">
<div className="bg-primary h-full w-[15%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-2 w-full lg:w-auto shrink-0">
<button className="flex-1 lg:flex-none px-4 py-2 bg-stone-900 text-stone-100 text-[10px] font-black uppercase hover:bg-primary hover:text-on-primary transition-all active:scale-95">Disparar</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-on-surface">settings_applications</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-error">history</button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest flex flex-col lg:flex-row items-center gap-6 p-6 group hover:bg-white transition-colors">
<div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-stone-500 text-3xl">cleaning_services</span>
</div>
<div className="flex-1 w-full lg:w-auto">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-bold headline uppercase">Purga de Logs de Auditoría</h3>
<span className="px-2 py-0.5 bg-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-tighter">Semanal</span>
</div>
<p className="text-xs text-secondary font-medium uppercase">Eliminación de registros históricos superiores a 180 días según política de privacidad.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto text-center lg:text-left">
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Frecuencia</div>
<div className="text-sm font-mono font-bold">0 2 * * 0</div>
</div>
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Última Ejecución</div>
<div className="text-sm font-bold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                                Éxito <span className="text-[10px] font-normal text-secondary">hace 3d</span>
</div>
</div>
<div className="hidden md:block">
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Carga CPU</div>
<div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden mt-2">
<div className="bg-primary h-full w-[45%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-2 w-full lg:w-auto shrink-0">
<button className="flex-1 lg:flex-none px-4 py-2 bg-stone-900 text-stone-100 text-[10px] font-black uppercase hover:bg-primary hover:text-on-primary transition-all active:scale-95">Disparar</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-on-surface">settings_applications</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-error">history</button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest flex flex-col lg:flex-row items-center gap-6 p-6 group hover:bg-white transition-colors border-l-4 border-primary">
<div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-3xl">sync_alt</span>
</div>
<div className="flex-1 w-full lg:w-auto">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-bold headline uppercase">Sincronización de Inventario</h3>
<span className="px-2 py-0.5 bg-primary/20 text-on-primary-container text-[10px] font-bold uppercase tracking-tighter">5 Minutos</span>
</div>
<p className="text-xs text-secondary font-medium uppercase">Matching de stock entre almacenes centrales y puntos de distribución externos.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto text-center lg:text-left">
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Frecuencia</div>
<div className="text-sm font-mono font-bold">*/5 * * * *</div>
</div>
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Última Ejecución</div>
<div className="text-sm font-bold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                En Proceso <span className="text-[10px] font-normal text-secondary">ahora</span>
</div>
</div>
<div className="hidden md:block">
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Carga CPU</div>
<div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden mt-2">
<div className="bg-primary h-full w-[82%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-2 w-full lg:w-auto shrink-0">
<button className="flex-1 lg:flex-none px-4 py-2 bg-stone-950 text-lime-400 text-[10px] font-black uppercase opacity-50 cursor-not-allowed">Ejecutando</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-on-surface">settings_applications</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-error">history</button>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest flex flex-col lg:flex-row items-center gap-6 p-6 group hover:bg-white transition-colors">
<div className="w-12 h-12 bg-stone-200 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-stone-500 text-3xl">mail</span>
</div>
<div className="flex-1 w-full lg:w-auto">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-bold headline uppercase">Envío de Reportes Automáticos</h3>
<span className="px-2 py-0.5 bg-stone-200 text-stone-600 text-[10px] font-bold uppercase tracking-tighter">Personalizado</span>
</div>
<p className="text-xs text-secondary font-medium uppercase">Distribución de KPIs de producción a la junta directiva y jefes de planta.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto text-center lg:text-left">
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Frecuencia</div>
<div className="text-sm font-mono font-bold">0 8 1 * *</div>
</div>
<div>
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Última Ejecución</div>
<div className="text-sm font-bold flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-error"></span>
                                Fallido <span className="text-[10px] font-normal text-secondary">hace 24d</span>
</div>
</div>
<div className="hidden md:block">
<div className="text-[10px] font-bold text-secondary uppercase mb-1">Carga CPU</div>
<div className="w-24 h-2 bg-surface-container rounded-full overflow-hidden mt-2">
<div className="bg-error h-full w-[5%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-2 w-full lg:w-auto shrink-0">
<button className="flex-1 lg:flex-none px-4 py-2 bg-stone-900 text-stone-100 text-[10px] font-black uppercase hover:bg-primary hover:text-on-primary transition-all active:scale-95">Disparar</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-on-surface">settings_applications</button>
<button className="material-symbols-outlined p-2 text-secondary hover:text-error">history</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-12 pt-8 border-t border-surface-container flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
<div className="flex gap-6">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Motor de Cron: Activo</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Queue Worker: 4 Hilos</span>
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-stone-400 rounded-full"></span> Latencia: 14ms</span>
</div>
<div>Titan Systems © 2024 - Industrial Infrastructure Unit</div>
</footer>
</main>
</div>
{/* Comentario remanente */}
<div className="fixed top-0 right-0 w-1/2 h-full -z-10 opacity-[0.02] pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 100 100">
<pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"></path>
</pattern>
<rect fill="url(#grid)" height="100" width="100"></rect>
</svg>
</div>

        </div>
    );
};
