import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardRrhhControlIndustrial() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_24px_40px_rgba(26,28,28,0.06)] flex justify-between items-center px-6 py-3">
<div className="flex items-center gap-8">
<span className="font-['Space_Grotesk'] uppercase tracking-tight text-xl font-bold tracking-tighter text-neutral-900 dark:text-neutral-50">FORGE INDUSTRIAL ERP</span>
<div className="hidden md:flex gap-6">
<a className="text-lime-600 dark:text-lime-400 font-bold border-b-2 border-lime-600 uppercase text-xs tracking-widest font-['Space_Grotesk']" href="#">Dashboard</a>
<a className="text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 px-3 py-1 rounded uppercase text-xs tracking-widest font-['Space_Grotesk']" href="#">Operations</a>
<a className="text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 px-3 py-1 rounded uppercase text-xs tracking-widest font-['Space_Grotesk'] flex items-center gap-2" href="#">
                    Finance <span className="bg-amber-500/20 text-amber-500 text-[10px] px-1.5 py-0.5 rounded font-bold">WIP</span>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined text-neutral-400">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-lime-500 rounded-full"></span>
</div>
<span className="material-symbols-outlined text-neutral-400">cake</span>
<span className="material-symbols-outlined text-neutral-400">settings</span>
<img alt="HR Manager Profile" className="w-8 h-8 rounded-full border border-neutral-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdLBPS3JT8irFYlEMyosD8B7OJ-ixAa6C4P43NSe8yEEeDug9IBoSeTZpec-CPJFALvjZhkdgUxLPPFgw4F-LMWjrAnJMAPE1De5EPEnTZk_46z8ubIK3HQOrjImjV-0mfy_V7P1TfhZA8cJ8yY6wst6bJkK3imJQO0tpAXSVBVE7QxWzHnvovugkprtPHWa0jH-1oabUm1BC1R7iFKiQmq2rzbXezIKh9VTx0jEWzpjEWMOctoDrttpSK2mLqKTmIGQHsJNyctr4"/>
</div>
</nav>
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-neutral-50 dark:bg-neutral-950 flex flex-col border-r border-neutral-200 dark:border-neutral-800 pt-20">
<div className="px-6 py-4">
<h2 className="font-['Space_Grotesk'] font-black text-lime-700 dark:text-lime-400 text-lg">HR MODULE</h2>
<p className="font-['Inter'] font-semibold text-xs uppercase text-neutral-500 dark:text-neutral-400 tracking-tighter">Industrial Control</p>
</div>
<nav className="flex-1 px-3 space-y-1 mt-4">
<a className="flex items-center gap-3 px-4 py-3 bg-lime-50 dark:bg-lime-900/20 text-lime-700 dark:text-lime-300 border-r-4 border-lime-600 font-['Inter'] font-semibold text-sm uppercase" href="#">
<span className="material-symbols-outlined">badge</span> Employee Files
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200 font-['Inter'] font-semibold text-sm uppercase" href="#">
<span className="material-symbols-outlined">payments</span> Payroll
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200 font-['Inter'] font-semibold text-sm uppercase" href="#">
<span className="material-symbols-outlined">account_balance</span> Social Benefits
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200 font-['Inter'] font-semibold text-sm uppercase" href="#">
<span className="material-symbols-outlined">event_busy</span> Leave Mgmt
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-200 font-['Inter'] font-semibold text-sm uppercase" href="#">
<span className="material-symbols-outlined">gavel</span> Legal Reports
            </a>
</nav>
<div className="p-6">
<button className="w-full bg-primary text-on-primary py-3 font-bold uppercase tracking-widest text-xs hover:scale-102 active:scale-95 transition-all">
                Generate Report
            </button>
</div>
<div className="border-t border-neutral-200 dark:border-neutral-800 p-4 space-y-2">
<a className="flex items-center gap-3 px-4 py-2 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase" href="#">
<span className="material-symbols-outlined text-lg">help_center</span> Support
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-neutral-600 dark:text-neutral-400 text-xs font-bold uppercase" href="#">
<span className="material-symbols-outlined text-lg">logout</span> Logout
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 pt-24 px-8 pb-12">
{/* Comentario remanente */}
<header className="mb-10 flex justify-between items-end">
<div>
<h1 className="font-headline font-extrabold text-4xl uppercase tracking-tighter text-on-surface">MAYOR DE REPUESTO LA CIMA, C.A.</h1>
<p className="font-label text-secondary font-medium tracking-[0.2em] uppercase text-sm mt-1">RIF: J-40308741-5 • HR OPERATIONS CENTER</p>
</div>
<div className="text-right">
<div className="text-xs font-bold text-neutral-500 uppercase">System Integrity</div>
<div className="flex items-center gap-2 text-lime-500 font-headline font-bold text-xl">
<span className="material-symbols-outlined">verified</span> OPTIMAL
                </div>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-3 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 rounded-md shadow-sm border-l-4 border-primary">
<div className="text-secondary text-xs font-bold uppercase mb-4 tracking-wider">Total Workforce</div>
<div className="text-5xl font-headline font-black text-on-surface mb-2">142</div>
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] text-secondary uppercase font-bold">Active</span>
<span className="text-lime-600 font-bold">138</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-secondary uppercase font-bold">Inactive</span>
<span className="text-neutral-400 font-bold">4</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-highest p-6 rounded-md">
<div className="text-secondary text-xs font-bold uppercase mb-4 tracking-wider">Masa Salarial (Mensual)</div>
<div className="text-3xl font-headline font-bold text-on-surface mb-1">$42,850.00</div>
<div className="text-[10px] text-lime-600 font-bold uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> +2.4% vs last month
                    </div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-highest p-6 rounded-md">
<div className="text-secondary text-xs font-bold uppercase mb-4 tracking-wider">Pasivo Laboral Acumulado</div>
<div className="text-3xl font-headline font-bold text-on-surface mb-1">$156,210.00</div>
<div className="text-[10px] text-secondary font-bold uppercase">Prestaciones Sociales Totales</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 rounded-md shadow-sm border-l-4 border-error">
<div className="text-secondary text-xs font-bold uppercase mb-4 tracking-wider">Turnover Rate</div>
<div className="text-4xl font-headline font-black text-on-surface mb-2">1.8%</div>
<div className="w-full bg-neutral-200 h-1 mt-2">
<div className="bg-error h-full" ></div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-6 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-low p-8 rounded-md relative overflow-hidden h-[340px] flex flex-col">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Payroll Cost Trend</h3>
<p className="text-xs text-secondary font-bold uppercase">Year-to-date projection</p>
</div>
<span className="material-symbols-outlined text-neutral-400">monitoring</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex items-end justify-between gap-2 relative z-10">
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[40%]" title="Jan"></div>
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[45%]" title="Feb"></div>
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[42%]" title="Mar"></div>
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[55%]" title="Apr"></div>
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[60%]" title="May"></div>
<div className="w-full bg-primary/20 hover:bg-primary transition-all rounded-t-sm h-[75%]" title="Jun"></div>
<div className="w-full bg-primary h-full" title="Jul"></div>
</div>
{/* Comentario remanente */}
<div className="absolute inset-0 opacity-5 pointer-events-none">
<div className="h-full w-full" ></div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container-low p-6 rounded-md">
<div className="text-xs font-bold text-secondary uppercase mb-4">Department Load</div>
<div className="flex flex-col gap-3">
<div className="flex justify-between items-center text-xs">
<span className="font-bold">Logistics</span>
<span className="text-neutral-500">45%</span>
</div>
<div className="w-full bg-neutral-200 h-1.5"><div className="bg-primary h-full" ></div></div>
<div className="flex justify-between items-center text-xs">
<span className="font-bold">Sales</span>
<span className="text-neutral-500">30%</span>
</div>
<div className="w-full bg-neutral-200 h-1.5"><div className="bg-primary-container h-full" ></div></div>
<div className="flex justify-between items-center text-xs">
<span className="font-bold">Admin</span>
<span className="text-neutral-500">25%</span>
</div>
<div className="w-full bg-neutral-200 h-1.5"><div className="bg-secondary h-full" ></div></div>
</div>
</div>
<div className="bg-surface-container-low p-6 rounded-md flex flex-col items-center justify-center text-center">
<div className="text-xs font-bold text-secondary uppercase mb-4 w-full text-left">Attendance Rate</div>
<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-200" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-lime-600" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="12.5" stroke-width="8"></circle>
</svg>
<span className="absolute text-xl font-headline font-black">95%</span>
</div>
<div className="mt-4 text-[10px] font-bold text-secondary uppercase tracking-widest">Absenteeism: 5%</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-3 space-y-6">
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 rounded-md h-full">
<h3 className="font-headline font-bold text-sm uppercase tracking-wider mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">Upcoming Schedule</h3>
<div className="space-y-6">
{/* Comentario remanente */}
<div className="flex gap-4">
<div className="bg-lime-100 dark:bg-lime-900/30 p-2 rounded flex flex-col items-center justify-center min-w-[50px] h-[50px]">
<span className="text-[10px] font-bold uppercase text-lime-700 dark:text-lime-400">JUL</span>
<span className="text-lg font-headline font-bold text-lime-800 dark:text-lime-200">12</span>
</div>
<div>
<div className="text-xs font-bold uppercase">Vacation Start</div>
<div className="text-sm font-medium text-on-surface">Carlos Mendoza</div>
<div className="text-[10px] text-secondary font-bold uppercase mt-1">Warehouse Ops • 15 Days</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex gap-4">
<div className="bg-secondary-container p-2 rounded flex flex-col items-center justify-center min-w-[50px] h-[50px]">
<span className="text-[10px] font-bold uppercase text-secondary">JUL</span>
<span className="text-lg font-headline font-bold text-on-surface">15</span>
</div>
<div>
<div className="text-xs font-bold uppercase">Employee Birthday</div>
<div className="text-sm font-medium text-on-surface">Elena Rodriguez</div>
<div className="text-[10px] text-secondary font-bold uppercase mt-1">HR Generalist</div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex gap-4">
<div className="bg-error-container p-2 rounded flex flex-col items-center justify-center min-w-[50px] h-[50px]">
<span className="text-[10px] font-bold uppercase text-error">JUL</span>
<span className="text-lg font-headline font-bold text-error">20</span>
</div>
<div>
<div className="text-xs font-bold uppercase">IVSS Filing</div>
<div className="text-sm font-medium text-on-surface">Monthly Contribution</div>
<div className="text-[10px] text-error font-bold uppercase mt-1">Status: Urgent</div>
</div>
</div>
</div>
<div className="mt-10 p-4 bg-surface-container-highest border border-dashed border-outline-variant rounded">
<div className="flex items-center gap-2 text-secondary mb-2">
<span className="material-symbols-outlined text-sm">precision_manufacturing</span>
<span className="text-[10px] font-bold uppercase tracking-widest">Module Status</span>
</div>
<div className="text-xs font-medium text-on-surface-variant">Accounting &amp; Finance integration is currently in development.</div>
<div className="mt-3 flex items-center gap-2">
<span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
<span className="text-[10px] font-black uppercase text-amber-600">Work in Progress</span>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800 pt-12 pb-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
<div>
<h4 className="font-headline font-black text-xl text-primary mb-4">LA CIMA ERP</h4>
<p className="text-xs text-secondary leading-relaxed uppercase font-medium">Precision industrial parts management and human capital administration. Built for the high-performance demands of modern industry.</p>
</div>
<div className="space-y-4">
<div className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">Legal Entity</div>
<div className="text-sm font-headline font-bold uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</div>
<div className="text-xs font-mono text-neutral-500">RIF: J-40308741-5</div>
</div>
<div className="space-y-4 text-right">
<div className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">Corporate Contact</div>
<div className="text-xs font-bold">INFO@LACIMAREPUESTOS.COM</div>
<div className="text-xs font-bold">+58 (212) 555-0199</div>
<div className="text-[10px] text-neutral-500 uppercase mt-4">Valencia, Edo. Carabobo, Venezuela</div>
</div>
</div>
<div className="mt-16 flex justify-between items-center text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
<span>© 2024 FORGE INDUSTRIAL SYSTEMS</span>
<span className="flex items-center gap-4">
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-primary transition-colors" href="#">Term of Service</a>
</span>
</div>
</footer>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 bg-primary text-on-primary w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">add</span>
</button>

        </div>
    );
};
