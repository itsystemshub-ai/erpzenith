import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNTicketsSoporte() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 border-b-0 bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 w-full">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-white tracking-tighter uppercase font-['Space_Grotesk']">INDUSTRIAL FORGE ERP</span>
<div className="hidden md:flex gap-6">
<a className="text-stone-400 font-medium hover:text-lime-300 transition-colors font-['Space_Grotesk'] uppercase tracking-tight" href="#">Dashboard</a>
<a className="text-stone-400 font-medium hover:text-lime-300 transition-colors font-['Space_Grotesk'] uppercase tracking-tight" href="#">Analytics</a>
<a className="text-lime-400 font-bold border-b-2 border-lime-600 font-['Space_Grotesk'] uppercase tracking-tight" href="#">Support</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:text-white transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant/20" data-alt="close-up portrait of a professional engineer in high-contrast lighting with a neutral gray background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATx7ImX5e7KL_JDKgH2K-k5Gd9P32nXK3jcrh6sg_n6RPLvMaPWo2CPosW6TEvoLerJ30zfM_XfglQui8drknnWTcBZEm0iww22gcSrA46GgivIyqEYPUjAatsLkxGxcEOy_JqD7NYirkkI5RC8d35SXIA_B1ZcoLYCGBats2KViEjhh1hA8K_WSJa0PT9_0fXg085H88Fe0zOfAWJuqTuY9iRn8381lQvxDcYmtGCvmCsJqj2Rm0q9BrLb8dHQN_AnLDkqGPhvxk"/>
</div>
</nav>
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-40 bg-stone-900 shadow-[4px_0px_24px_rgba(0,0,0,0.04)] hidden lg:flex flex-col h-full py-6">
<div className="px-6 mb-10 mt-14">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-lime-600 flex items-center justify-center rounded-sm">
<span className="material-symbols-outlined text-stone-900" >precision_manufacturing</span>
</div>
<div>
<h2 className="font-['Space_Grotesk'] font-black text-white leading-none">FORGE SYSTEMS</h2>
<p className="text-[10px] text-stone-500 font-bold tracking-widest uppercase">High-Performance ERP</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">inventory_2</span> Inventario
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">point_of_sale</span> Ventas
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">shopping_cart</span> Compras
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">payments</span> Finanzas
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">account_balance</span> Contabilidad
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">groups</span> RRHH
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-stone-400 hover:bg-stone-800 hover:translate-x-1 transition-transform duration-200 font-['Inter'] font-semibold uppercase text-xs tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">admin_panel_settings</span> Administración
            </a>
</nav>
<div className="px-6 mt-auto">
<button className="w-full py-3 bg-lime-600/10 text-lime-400 border border-lime-600/30 font-['Inter'] font-bold text-[10px] tracking-widest uppercase hover:bg-lime-600 hover:text-on-primary-fixed transition-all active:scale-95">
                TECHNICAL REPORT
            </button>
<div className="mt-6 space-y-1">
<a className="flex items-center gap-3 py-2 text-stone-500 hover:text-stone-300 font-['Inter'] font-semibold uppercase text-[10px] tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">security</span> Security
                </a>
<a className="flex items-center gap-3 py-2 text-stone-500 hover:text-error font-['Inter'] font-semibold uppercase text-[10px] tracking-widest" href="#">
<span className="material-symbols-outlined text-sm">logout</span> Log Out
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="lg:ml-64 pt-24 pb-12 px-6 md:px-10 max-w-7xl">
{/* Comentario remanente */}
<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<p className="text-lime-500 font-['Space_Grotesk'] font-bold uppercase tracking-widest text-xs mb-2">Technical Support Center</p>
<h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">Ticket <span className="text-stone-500">Pipeline</span></h1>
</div>
<button className="group relative inline-flex items-center gap-3 bg-gradient-to-b from-primary to-primary-container px-8 py-4 text-on-primary font-bold uppercase tracking-tighter hover:scale-[1.02] transition-transform duration-150">
<span className="material-symbols-outlined">add_task</span>
                CREATE NEW TICKET
                <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
<div className="bg-stone-900 p-6 relative overflow-hidden">
<span className="text-stone-600 font-black text-4xl absolute -right-2 -bottom-2 opacity-20">01</span>
<p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Critical Pulse</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-black text-error">03</span>
<span className="text-xs text-error/60 font-bold mb-2 uppercase">Active</span>
</div>
<div className="h-1 bg-stone-800 mt-4 overflow-hidden">
<div className="h-full bg-error w-[65%]"></div>
</div>
</div>
<div className="bg-stone-900 p-6 relative overflow-hidden">
<span className="text-stone-600 font-black text-4xl absolute -right-2 -bottom-2 opacity-20">02</span>
<p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">In Progress</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-black text-lime-400">12</span>
<span className="text-xs text-lime-400/60 font-bold mb-2 uppercase">Tickets</span>
</div>
<div className="h-1 bg-stone-800 mt-4 overflow-hidden">
<div className="h-full bg-lime-400 w-[42%]"></div>
</div>
</div>
<div className="bg-stone-900 p-6 relative overflow-hidden">
<span className="text-stone-600 font-black text-4xl absolute -right-2 -bottom-2 opacity-20">03</span>
<p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Response Time</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-black text-white">1.2h</span>
<span className="text-xs text-stone-500 font-bold mb-2 uppercase">Avg</span>
</div>
<div className="h-1 bg-stone-800 mt-4 overflow-hidden">
<div className="h-full bg-white/40 w-[88%]"></div>
</div>
</div>
<div className="bg-stone-900 p-6 relative overflow-hidden">
<span className="text-stone-600 font-black text-4xl absolute -right-2 -bottom-2 opacity-20">04</span>
<p className="text-xs font-bold text-stone-500 uppercase tracking-widest mb-4">Resolution Rate</p>
<div className="flex items-end gap-2">
<span className="text-4xl font-black text-white">94%</span>
<span className="text-xs text-stone-500 font-bold mb-2 uppercase">Weekly</span>
</div>
<div className="h-1 bg-stone-800 mt-4 overflow-hidden">
<div className="h-full bg-lime-600 w-[94%]"></div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 overflow-hidden">
<div className="p-6 border-b border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<button className="text-sm font-bold uppercase tracking-widest text-lime-400 border-b-2 border-lime-400 pb-1">Active Tickets</button>
<button className="text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-stone-300 transition-colors pb-1">Closed Archive</button>
</div>
<div className="flex gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 text-lg">search</span>
<input className="bg-stone-800 border-none text-[10px] font-bold tracking-widest uppercase pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-lime-500" placeholder="SEARCH ID OR MODULE..." type="text"/>
</div>
<button className="bg-stone-800 p-2 text-stone-400 hover:text-white"><span className="material-symbols-outlined">filter_list</span></button>
</div>
</div>
{/* Comentario remanente */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-800/50">
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Ticket ID</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Status</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Module / System</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Priority</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500">Last Update</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-stone-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800">
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-5">
<span className="font-['Space_Grotesk'] font-bold text-white">#TKT-4921-X</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-error/10 text-error text-[10px] font-black uppercase border border-error/20">
<span className="w-1.5 h-1.5 bg-error rounded-full animate-pulse"></span>
                                    Critical
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">Assembly Line API</span>
<span className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Manufacturing Control Unit</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-error font-black uppercase text-xs">P0 - Immediate</span>
</td>
<td className="px-6 py-5 text-stone-400 text-xs font-medium">14 mins ago</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-5">
<span className="font-['Space_Grotesk'] font-bold text-white">#TKT-4918-B</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-lime-500/10 text-lime-400 text-[10px] font-black uppercase border border-lime-500/20">
                                    In Progress
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">Global Inventory Sync</span>
<span className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Warehouse Mgmt System</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-lime-500 font-black uppercase text-xs">P1 - High</span>
</td>
<td className="px-6 py-5 text-stone-400 text-xs font-medium">2.5 hours ago</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-5">
<span className="font-['Space_Grotesk'] font-bold text-white">#TKT-4915-A</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-stone-700/30 text-stone-300 text-[10px] font-black uppercase border border-stone-600/50">
                                    Open
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">Fleet Telemetry Delay</span>
<span className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Logistics Engine</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-stone-400 font-black uppercase text-xs">P2 - Normal</span>
</td>
<td className="px-6 py-5 text-stone-400 text-xs font-medium">Yesterday</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors opacity-60">
<td className="px-6 py-5">
<span className="font-['Space_Grotesk'] font-bold text-white">#TKT-4912-F</span>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/10 text-white text-[10px] font-black uppercase border border-white/20">
                                    Resolved
                                </span>
</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm font-bold text-white">Payroll Export Failure</span>
<span className="text-[10px] text-stone-500 font-bold uppercase tracking-tighter">Financials Core</span>
</div>
</td>
<td className="px-6 py-5">
<span className="text-stone-600 font-black uppercase text-xs">P2 - Normal</span>
</td>
<td className="px-6 py-5 text-stone-400 text-xs font-medium">2 days ago</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-500 hover:text-white transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-stone-800 flex items-center justify-between">
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Showing 4 of 128 active cases</span>
<div className="flex gap-4">
<button className="text-xs font-bold text-stone-500 hover:text-white uppercase tracking-widest flex items-center gap-2">
<span className="material-symbols-outlined text-sm">arrow_back_ios</span> Prev
                    </button>
<button className="text-xs font-bold text-lime-400 hover:text-lime-300 uppercase tracking-widest flex items-center gap-2">
                        Next <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 bg-gradient-to-br from-stone-900 to-stone-950 border-l-4 border-lime-600">
<h3 className="text-2xl font-black uppercase tracking-tighter mb-4">System <span className="text-lime-500">Status Report</span></h3>
<p className="text-stone-400 text-sm leading-relaxed mb-6 font-medium">
                    All core ERP modules are operating within defined latency parameters. Automated diagnostic routines have been prioritized for assembly line API nodes. No scheduled maintenance for the next 48 hours.
                </p>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-lime-500 rounded-full"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-white">Database Cluster 01: UP</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-lime-500 rounded-full"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-white">API Gateway: ACTIVE</span>
</div>
</div>
</div>
<div className="relative group cursor-pointer overflow-hidden">
<img alt="Technical Team" className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" data-alt="industrial control room with engineers monitoring large glowing screens and high-tech equipment in a dark sleek environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC670IKTO0vUAEpfjmaOaa7jH4ILqV98Lbf7FIjlGJVyTBlRwA5nKK-9nP4LROyivK6S6RLu99naosAzgal1Ppzo59adaP1f95OvA-adwW5qFmFx2GqEPsK-R4tyikAcik_1zMZnlFfNCpska5kf-fkM0vIMu9LTUVYX5xd8Y2GhdtTd-NcdbhUqxbV9JAYBppK7vCITB6ruMxDMrpv9dMdtI6k6Uxd0kJvDNJjTdQ1e8IPt-9nQd1WB5x9DvkmxMQDXEmR8p0R2rE"/>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-8">
<p className="text-xs font-bold text-lime-400 uppercase tracking-[0.3em] mb-1">Direct Assistance</p>
<h3 className="text-2xl font-black uppercase tracking-tighter">Contact Field Engineering</h3>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="lg:ml-64 border-t border-stone-800 bg-stone-950 py-12 px-6 md:px-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl">
<div>
<h4 className="font-['Space_Grotesk'] font-black text-white text-lg tracking-tighter uppercase mb-6">Industrial Forge ERP</h4>
<p className="text-stone-500 text-xs font-bold leading-relaxed uppercase tracking-widest">
                    Precision engineering for global infrastructure. Powering the world's most resilient industrial ecosystems through advanced data integration.
                </p>
</div>
<div>
<h4 className="font-['Space_Grotesk'] font-black text-stone-500 text-sm tracking-widest uppercase mb-6">Corporate Identity</h4>
<ul className="space-y-3">
<li className="text-xs font-bold tracking-widest text-white uppercase flex justify-between">
<span className="text-stone-500">RIF:</span> J-29384756-0
                    </li>
<li className="text-xs font-bold tracking-widest text-white uppercase flex justify-between">
<span className="text-stone-500">Registry:</span> FORGE-OPS-0441
                    </li>
<li className="text-xs font-bold tracking-widest text-white uppercase flex justify-between">
<span className="text-stone-500">Location:</span> Industrial Zone IV
                    </li>
</ul>
</div>
<div>
<h4 className="font-['Space_Grotesk'] font-black text-stone-500 text-sm tracking-widest uppercase mb-6">Support Channels</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500 text-sm">support_agent</span>
<span className="text-xs font-bold tracking-widest text-white uppercase">+1-800-FORGE-TECH</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500 text-sm">mail</span>
<span className="text-xs font-bold tracking-widest text-white uppercase">ops.critical@forge-erp.com</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-lime-500 text-sm">terminal</span>
<span className="text-xs font-bold tracking-widest text-white uppercase">forge-ssh.internal.net</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] font-black text-stone-600 uppercase tracking-[0.5em]">© 2024 FORGE SYSTEMS GLOBAL. ALL PARAMETERS NOMINAL.</span>
<div className="flex gap-6">
<a className="text-[10px] font-black text-stone-600 hover:text-white uppercase tracking-widest" href="#">Privacy Protocol</a>
<a className="text-[10px] font-black text-stone-600 hover:text-white uppercase tracking-widest" href="#">Service Level Agreement</a>
</div>
</div>
</footer>

        </div>
    );
};
