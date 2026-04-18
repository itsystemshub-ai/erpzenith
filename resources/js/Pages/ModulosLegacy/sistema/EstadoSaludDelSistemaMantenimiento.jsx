import React from 'react';
import { Link } from '@inertiajs/react';

export default function EstadoSaludDelSistemaMantenimiento() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-stone-50 dark:bg-stone-900 shadow-[4px_0px_24px_rgba(0,0,0,0.04)] flex flex-col h-full py-6">
<div className="px-6 mb-10">
<h1 className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-white text-xl tracking-tighter">FORGE SYSTEMS</h1>
<p className="font-['Inter'] font-semibold uppercase text-[10px] tracking-widest text-stone-500">High-Performance ERP</p>
</div>
<nav className="flex-1 space-y-1">
<div className="px-3">
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">inventory_2</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Inventario</span>
</a>
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">point_of_sale</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Ventas</span>
</a>
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">shopping_cart</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Compras</span>
</a>
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">payments</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Finanzas</span>
</a>
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">account_balance</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Contabilidad</span>
</a>
<a className="flex items-center px-3 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">groups</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">RRHH</span>
</a>
<a className="flex items-center px-3 py-2 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 transition-transform duration-200 hover:translate-x-1 group" href="#">
<span className="material-symbols-outlined mr-3">admin_panel_settings</span>
<span className="font-['Inter'] font-semibold uppercase text-xs tracking-widest">Administración</span>
</a>
</div>
</nav>
<div className="mt-auto px-6 space-y-4">
<button className="w-full bg-primary py-3 px-4 text-white text-[10px] font-bold tracking-[0.2em] uppercase transition-transform active:scale-95">
                TECHNICAL REPORT
            </button>
<div className="pt-4 border-t border-stone-200 dark:border-stone-800">
<a className="flex items-center py-2 text-stone-500 text-xs font-semibold tracking-widest uppercase hover:text-white" href="#">
<span className="material-symbols-outlined mr-3 text-sm">security</span> Security
                </a>
<a className="flex items-center py-2 text-stone-500 text-xs font-semibold tracking-widest uppercase hover:text-white" href="#">
<span className="material-symbols-outlined mr-3 text-sm">logout</span> Log Out
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen">
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-64 z-50 bg-white/80 dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-8 py-3">
<div className="flex items-center gap-8">
<span className="font-['Space_Grotesk'] uppercase tracking-tight font-bold text-stone-900 dark:text-white">INDUSTRIAL FORGE ERP</span>
<nav className="hidden md:flex gap-6">
<a className="text-stone-500 dark:text-stone-400 font-medium hover:text-lime-500 dark:hover:text-lime-300 transition-colors uppercase text-xs tracking-widest" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-medium hover:text-lime-500 dark:hover:text-lime-300 transition-colors uppercase text-xs tracking-widest" href="#">Analytics</a>
<a className="text-stone-500 dark:text-stone-400 font-medium hover:text-lime-500 dark:hover:text-lime-300 transition-colors uppercase text-xs tracking-widest" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-stone-100 dark:bg-stone-900 px-4 py-1.5 rounded-sm">
<span className="material-symbols-outlined text-stone-500 text-lg mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-[10px] tracking-widest uppercase text-stone-400 w-48" placeholder="SEARCH SYSTEM..." type="text"/>
</div>
<div className="flex gap-2">
<span className="material-symbols-outlined text-stone-500 hover:text-white cursor-pointer p-2">notifications</span>
<span className="material-symbols-outlined text-stone-500 hover:text-white cursor-pointer p-2">settings</span>
<span className="material-symbols-outlined text-stone-500 hover:text-white cursor-pointer p-2">help</span>
</div>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-sm object-cover" data-alt="professional male engineer portrait in workshop environment with dramatic industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYE_ou131N3gmEkKpEI_NAAEAQtDWLZK_118lJkk_H9mJHwoC9y1N2PZNG_PVjZnsoMfF69r72PIUYreDazyN1GctYqeKE7unt-04n9dN45a8YuQpIT_WIVRI48E3n3Kkcj_sPBH4AgFw3ig-bFCnPYxlBHMTZo-T1JVYbUYtWwtSAWt00FBcTiQwtS_RZnrXwNopzOhQVwFG-hUh-BJkWCsqgzf1lgqG8DGpGGyuebA21wOnTUBZ5Qf679Nza0l8NpvmYpPrdmak"/>
</div>
</header>
{/* Comentario remanente */}
<section className="pt-24 px-12 pb-16">
{/* Comentario remanente */}
<div className="relative overflow-hidden mb-12 bg-surface-container-lowest dark:bg-stone-900/50 p-12 rounded-sm border-l-4 border-lime-500">
<div className="absolute top-0 right-0 p-8 opacity-10">
<span className="material-symbols-outlined text-[120px]" >power_settings_new</span>
</div>
<div className="relative z-10">
<p className="font-label text-xs tracking-[0.3em] text-primary uppercase mb-2">Operational Health Indicator</p>
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter mb-4 text-stone-900 dark:text-white">All Systems: <span className="text-primary">Nominal</span></h2>
<div className="flex items-center gap-6 mt-8">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Uptime (30d)</span>
<span className="font-headline text-2xl font-bold text-stone-900 dark:text-white">99.98%</span>
</div>
<div className="w-px h-10 bg-stone-800"></div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-stone-500 mb-1">Avg Latency</span>
<span className="font-headline text-2xl font-bold text-stone-900 dark:text-white">42ms</span>
</div>
<div className="ml-auto">
<button className="bg-error hover:bg-error/90 text-white font-bold py-4 px-8 flex items-center gap-3 transition-transform active:scale-95 group">
<span className="material-symbols-outlined group-hover:rotate-12 transition-transform">report_problem</span>
<span className="uppercase tracking-widest text-xs">Incident Report</span>
</button>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
{/* Comentario remanente */}
<div className="bg-surface-container-lowest dark:bg-stone-900 p-6 rounded-sm flex flex-col justify-between group hover:bg-stone-800 transition-colors">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-stone-500 group-hover:text-primary">inventory_2</span>
<div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
</div>
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">Inventario</h3>
<p className="text-[10px] uppercase tracking-widest text-stone-500">Last Synced: 2m ago</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest dark:bg-stone-900 p-6 rounded-sm flex flex-col justify-between group hover:bg-stone-800 transition-colors">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-stone-500 group-hover:text-primary">point_of_sale</span>
<div className="h-2 w-2 rounded-full bg-primary"></div>
</div>
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">Ventas</h3>
<p className="text-[10px] uppercase tracking-widest text-stone-500">Live Transaction Stream</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest dark:bg-stone-900 p-6 rounded-sm border-b-2 border-amber-500 flex flex-col justify-between group hover:bg-stone-800 transition-colors">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-amber-500">local_shipping</span>
<div className="h-2 w-2 rounded-full bg-amber-500"></div>
</div>
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">Logística</h3>
<p className="text-[10px] uppercase tracking-widest text-amber-500">High Latency Detected</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest dark:bg-stone-900 p-6 rounded-sm flex flex-col justify-between group hover:bg-stone-800 transition-colors">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-stone-500 group-hover:text-primary">payments</span>
<div className="h-2 w-2 rounded-full bg-primary"></div>
</div>
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight text-white">Finanzas</h3>
<p className="text-[10px] uppercase tracking-widest text-stone-500">Secure Ledger Verified</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Comentario remanente */}
<div className="lg:col-span-2">
<div className="flex justify-between items-end mb-6">
<h3 className="font-headline text-2xl font-black uppercase tracking-tighter text-white">Maintenance History</h3>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">Audit Trail v2.4</span>
</div>
<div className="bg-stone-900 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-950 border-b border-stone-800">
<th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Date/Time</th>
<th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Module/System</th>
<th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Action Type</th>
<th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Technician</th>
<th className="p-4 text-[10px] uppercase tracking-widest font-bold text-stone-400">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800">
<tr className="hover:bg-stone-800 transition-colors">
<td className="p-4 font-label text-xs text-stone-300">2023-10-24 04:00</td>
<td className="p-4 font-label text-xs text-stone-100 font-bold">Main DB Cluster</td>
<td className="p-4 font-label text-xs text-stone-400 italic">Scheduled Optimization</td>
<td className="p-4 font-label text-xs text-stone-300 uppercase">SYS-ADM-01</td>
<td className="p-4">
<span className="text-[9px] font-bold uppercase tracking-widest bg-lime-500/10 text-lime-400 px-2 py-1">Success</span>
</td>
</tr>
<tr className="hover:bg-stone-800 transition-colors">
<td className="p-4 font-label text-xs text-stone-300">2023-10-22 18:15</td>
<td className="p-4 font-label text-xs text-stone-100 font-bold">API Gateway</td>
<td className="p-4 font-label text-xs text-stone-400 italic">Emergency Hotfix</td>
<td className="p-4 font-label text-xs text-stone-300 uppercase">DEV-SEC-09</td>
<td className="p-4">
<span className="text-[9px] font-bold uppercase tracking-widest bg-lime-500/10 text-lime-400 px-2 py-1">Success</span>
</td>
</tr>
<tr className="hover:bg-stone-800 transition-colors">
<td className="p-4 font-label text-xs text-stone-300">2023-10-21 02:00</td>
<td className="p-4 font-label text-xs text-stone-100 font-bold">Inventario Node</td>
<td className="p-4 font-label text-xs text-stone-400 italic">Hardware Migration</td>
<td className="p-4 font-label text-xs text-stone-300 uppercase">INF-OPS-04</td>
<td className="p-4">
<span className="text-[9px] font-bold uppercase tracking-widest bg-stone-700 text-stone-300 px-2 py-1">Deferred</span>
</td>
</tr>
<tr className="hover:bg-stone-800 transition-colors">
<td className="p-4 font-label text-xs text-stone-300">2023-10-18 11:30</td>
<td className="p-4 font-label text-xs text-stone-100 font-bold">RRHH Portal</td>
<td className="p-4 font-label text-xs text-stone-400 italic">Security Patch 8.1</td>
<td className="p-4 font-label text-xs text-stone-300 uppercase">AUT-SYS-01</td>
<td className="p-4">
<span className="text-[9px] font-bold uppercase tracking-widest bg-lime-500/10 text-lime-400 px-2 py-1">Success</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div>
<h3 className="font-headline text-2xl font-black uppercase tracking-tighter text-white mb-6">Traffic Load</h3>
<div className="bg-stone-900 p-8 rounded-sm h-[320px] flex flex-col justify-end">
<div className="flex items-end gap-1 h-full mb-4">
<div className="flex-1 bg-stone-800 h-[20%]"></div>
<div className="flex-1 bg-stone-800 h-[35%]"></div>
<div className="flex-1 bg-stone-800 h-[45%]"></div>
<div className="flex-1 bg-stone-800 h-[30%]"></div>
<div className="flex-1 bg-stone-800 h-[60%]"></div>
<div className="flex-1 bg-primary h-[85%]"></div>
<div className="flex-1 bg-primary h-[95%]"></div>
<div className="flex-1 bg-primary h-[75%]"></div>
<div className="flex-1 bg-stone-800 h-[40%]"></div>
<div className="flex-1 bg-stone-800 h-[25%]"></div>
<div className="flex-1 bg-stone-800 h-[35%]"></div>
<div className="flex-1 bg-stone-800 h-[50%]"></div>
</div>
<div className="flex justify-between items-center pt-4 border-t border-stone-800">
<div>
<p className="text-[9px] uppercase tracking-widest text-stone-500">Peak Load</p>
<p className="font-headline text-lg font-bold text-white">842 req/s</p>
</div>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12">
<div className="bg-primary/5 p-8 border border-primary/20 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary">calendar_clock</span>
<span className="uppercase tracking-widest text-[10px] font-bold text-primary">Upcoming Window</span>
</div>
<h4 className="font-headline text-2xl font-black uppercase text-white">Core Engine Upgrade - v3.0 Staging</h4>
</div>
<div className="flex flex-col items-center px-8 border-x border-stone-800">
<span className="text-[10px] uppercase tracking-widest text-stone-500">Days Remaining</span>
<span className="font-headline text-4xl font-black text-white">04</span>
</div>
<div className="flex-1 text-right">
<p className="text-stone-400 text-xs mb-4">Scheduled for Saturday, Oct 28 at 02:00 AM UTC. Expected downtime: 15 minutes.</p>
<button className="text-primary hover:text-white transition-colors uppercase text-[10px] font-bold tracking-widest border-b border-primary pb-1">Review Technical Blueprint</button>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<footer className="bg-stone-950 px-12 py-16 mt-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h5 className="font-headline text-3xl font-black uppercase tracking-tighter text-white mb-6">FORGE<span className="text-primary">SYSTEMS</span></h5>
<p className="text-stone-500 text-sm max-w-md leading-relaxed">
                        The definitive operating system for modern heavy-duty manufacturing. Built for the grit of the shop floor and the precision of the executive suite.
                    </p>
</div>
<div>
<h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">Contact Control</h6>
<ul className="space-y-3 text-stone-500 text-xs font-semibold uppercase tracking-widest">
<li><a className="hover:text-primary" href="#">Tech Support Hot-Line</a></li>
<li><a className="hover:text-primary" href="#">Regional Data Centers</a></li>
<li><a className="hover:text-primary" href="#">Security Protocols</a></li>
</ul>
</div>
<div>
<h6 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">Location Authority</h6>
<p className="text-stone-500 text-xs font-semibold uppercase tracking-widest leading-loose">
                        Unit 412, Ironclad Industrial Estate<br/>
                        Sheffield, United Kingdom<br/>
                        S9 2TW
                    </p>
</div>
</div>
<div className="pt-12 border-t border-stone-900 flex justify-between items-center">
<span className="text-[9px] uppercase tracking-[0.3em] text-stone-600">© 2023 INDUSTRIAL FORGE ERP. ALL CORE RIGHTS RESERVED.</span>
<div className="flex gap-8">
<span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 hover:text-white cursor-pointer">PRIVACY_SHIELD</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 hover:text-white cursor-pointer">SERVICE_SLA</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-stone-600 hover:text-white cursor-pointer">ISO_27001</span>
</div>
</div>
</footer>
</main>

        </div>
    );
};
