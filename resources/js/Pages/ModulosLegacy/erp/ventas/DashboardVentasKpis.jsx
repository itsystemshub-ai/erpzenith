import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardVentasKpis() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-50 bg-stone-900/90 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full shadow-none border-b-0">
<div className="flex items-center gap-8">
<h1 className="text-xl font-bold text-lime-400 tracking-tighter font-['Space_Grotesk'] uppercase tracking-tight">TITAN ENGINE ERP</h1>
<div className="hidden md:flex items-center bg-stone-800 px-4 py-1.5 rounded-lg border-0">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-0 focus:ring-0 text-sm text-stone-200 placeholder-stone-500 w-64" placeholder="Search operations..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-stone-700 flex items-center justify-center overflow-hidden">
<img alt="User profile avatar" className="h-full w-full object-cover" data-alt="professional male executive portrait with corporate attire in high-end office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFuDVQDmw4NQGB3PCKQ9C9W70Koz3oqeM8vVRSDHTBbOiBAnCDEOtsGMZHbjDt3JsH4pa6UMEZSVwiFo9ElVrnzsVs72iD1cM1AEFx-iosHrfHeJcNtXnGNrBatmONtX5SGRxg1O9hPLlrvV6ydbVSEFchAgoY_VSenUIdMXN_EialOuuiDa_uehpu9oKhVpDHLClXcLql5zBTZtVOeu4U7omD9bgUfvbrIsJlGdij4n9YnWQsFDPwaMihtQHU9eLtlHbncXRlWSM"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<nav className="fixed left-0 top-0 h-screen w-64 bg-stone-950 flex flex-col py-8 px-4 gap-2 hidden md:flex pt-20 z-40">
<div className="mb-8 px-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-lime-500 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-950 font-bold">engineering</span>
</div>
<div>
<div className="text-lg font-black text-white leading-tight">ENGINE OPS</div>
<div className="text-[10px] text-stone-500 font-bold tracking-widest uppercase">High Performance Industrial</div>
</div>
</div>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-3 text-lime-400 border-r-4 border-lime-500 bg-stone-900/50 font-['Inter'] text-sm font-semibold uppercase transition-all duration-300" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 font-['Inter'] text-sm font-semibold uppercase transition-all duration-300" href="#">
<span className="material-symbols-outlined">add_shopping_cart</span> New Sale
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 font-['Inter'] text-sm font-semibold uppercase transition-all duration-300" href="#">
<span className="material-symbols-outlined">history</span> Sales History
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 font-['Inter'] text-sm font-semibold uppercase transition-all duration-300" href="#">
<span className="material-symbols-outlined">group</span> Customers
            </a>
<a className="flex items-center gap-3 px-3 py-3 text-stone-500 hover:text-stone-200 hover:bg-stone-900 font-['Inter'] text-sm font-semibold uppercase transition-all duration-300" href="#">
<span className="material-symbols-outlined">analytics</span> Reports
            </a>
</div>
<div className="mt-8">
<button className="w-full py-3 bg-primary text-on-primary font-bold uppercase text-xs tracking-widest hover:scale-[1.02] active:opacity-80 transition-all">
                INITIATE SALE
            </button>
</div>
<div className="mt-auto pt-8 border-t border-stone-800 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">help</span> Support
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">logout</span> Logout
            </a>
</div>
</nav>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 pb-12 px-6 md:px-10 min-h-screen">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<h2 className="text-4xl font-headline font-extrabold uppercase tracking-tighter text-white">Operational Hub</h2>
<p className="text-stone-500 font-medium uppercase text-xs tracking-widest mt-1">Real-time Industrial Sales Metrics</p>
</div>
<div className="flex items-center gap-2 bg-stone-900 p-1 rounded-lg">
<button className="px-4 py-2 text-xs font-bold uppercase text-lime-400 bg-stone-800 rounded">Day</button>
<button className="px-4 py-2 text-xs font-bold uppercase text-stone-500 hover:text-stone-300 transition-colors">Week</button>
<button className="px-4 py-2 text-xs font-bold uppercase text-stone-500 hover:text-stone-300 transition-colors">Month</button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
<div className="bg-stone-900 p-6 rounded-md group hover:bg-stone-800 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Total Sales Daily</span>
<span className="material-symbols-outlined text-lime-500">trending_up</span>
</div>
<div className="text-3xl font-headline font-bold text-white tracking-tighter">$14,280.00</div>
<div className="mt-2 flex items-center gap-1">
<span className="text-lime-500 text-[10px] font-bold">+12.4%</span>
<span className="text-stone-600 text-[10px] uppercase font-bold tracking-tighter">vs yesterday</span>
</div>
</div>
<div className="bg-stone-900 p-6 rounded-md group hover:bg-stone-800 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Monthly Revenue</span>
<span className="material-symbols-outlined text-stone-500">payments</span>
</div>
<div className="text-3xl font-headline font-bold text-white tracking-tighter">$428,950.00</div>
<div className="mt-2 flex items-center gap-1">
<span className="text-lime-500 text-[10px] font-bold">+5.2%</span>
<span className="text-stone-600 text-[10px] uppercase font-bold tracking-tighter">vs target</span>
</div>
</div>
<div className="bg-stone-900 p-6 rounded-md group hover:bg-stone-800 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Inventory Turnover</span>
<span className="material-symbols-outlined text-stone-500">sync_alt</span>
</div>
<div className="text-3xl font-headline font-bold text-white tracking-tighter">8.4x</div>
<div className="mt-2 flex items-center gap-1">
<span className="text-amber-500 text-[10px] font-bold">Stable</span>
<span className="text-stone-600 text-[10px] uppercase font-bold tracking-tighter">annual cycle</span>
</div>
</div>
<div className="bg-stone-900 p-6 rounded-md group hover:bg-stone-800 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Active Quotations</span>
<span className="material-symbols-outlined text-stone-500">description</span>
</div>
<div className="text-3xl font-headline font-bold text-white tracking-tighter">342</div>
<div className="mt-2 flex items-center gap-1">
<span className="text-stone-400 text-[10px] font-bold">24</span>
<span className="text-stone-600 text-[10px] uppercase font-bold tracking-tighter">awaiting approval</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
{/* Comentario remanente */}
<div className="lg:col-span-2 bg-stone-900 p-8 rounded-md relative overflow-hidden">
<div className="flex justify-between items-center mb-10">
<h3 className="font-headline font-bold uppercase text-white tracking-tight">Monthly Sales Performance Trend</h3>
<div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
<div className="flex items-center gap-2 text-lime-400">
<span className="w-2 h-2 bg-lime-500"></span> Current Year
                        </div>
<div className="flex items-center gap-2 text-stone-500">
<span className="w-2 h-2 bg-stone-700"></span> Previous Year
                        </div>
</div>
</div>
{/* Comentario remanente */}
<div className="flex items-end justify-between h-64 gap-2 md:gap-4">
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[60%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[75%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">JAN</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[55%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[80%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">FEB</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[70%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[90%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">MAR</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[65%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[85%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">APR</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[80%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[100%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">MAY</span>
</div>
{/* Comentario remanente */}
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full flex items-end gap-1 h-full">
<div className="w-full bg-stone-800 h-[50%] group-hover:bg-stone-700 transition-all"></div>
<div className="w-full bg-lime-500 h-[70%] group-hover:bg-lime-400 transition-all"></div>
</div>
<span className="text-[10px] text-stone-500 font-bold">JUN</span>
</div>
</div>
{/* Comentario remanente */}
<div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
</div>
{/* Comentario remanente */}
<div className="flex flex-col gap-6">
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 rounded-md">
<h3 className="font-headline font-bold uppercase text-white tracking-tight mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-lime-500 text-lg">workspace_premium</span>
                        Top Selling Products
                    </h3>
<div className="space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-400">settings_input_component</span>
</div>
<div>
<div className="text-sm font-bold text-white uppercase tracking-tight">Gaskets</div>
<div className="text-[10px] text-stone-500 font-bold">1,240 Units</div>
</div>
</div>
<div className="text-lime-400 font-bold text-xs">$45,200</div>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-400">dynamic_form</span>
</div>
<div>
<div className="text-sm font-bold text-white uppercase tracking-tight">Pistons</div>
<div className="text-[10px] text-stone-500 font-bold">842 Units</div>
</div>
</div>
<div className="text-lime-400 font-bold text-xs">$112,800</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 rounded-md border-l-4 border-lime-500">
<h3 className="font-headline font-bold uppercase text-white tracking-tight mb-4 text-xs tracking-widest text-stone-500">Elite Account</h3>
<div className="flex items-center gap-4 mb-4">
<div className="h-12 w-12 rounded bg-primary-container/20 flex items-center justify-center border border-primary/20">
<span className="material-symbols-outlined text-lime-500 text-2xl">stars</span>
</div>
<div>
<div className="text-lg font-headline font-extrabold text-white uppercase tracking-tighter">Transporte Carabobo</div>
<div className="text-[10px] text-lime-400 font-bold uppercase tracking-widest">Strategic Partner</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-stone-800">
<div>
<div className="text-[9px] text-stone-500 uppercase font-bold">Total Lifetime</div>
<div className="text-sm font-bold text-white">$1.2M</div>
</div>
<div>
<div className="text-[9px] text-stone-500 uppercase font-bold">Orders YTD</div>
<div className="text-sm font-bold text-white">48</div>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 rounded-md overflow-hidden">
<div className="px-8 py-6 flex justify-between items-center border-b border-stone-800/50">
<h3 className="font-headline font-bold uppercase text-white tracking-tight">Recent Sales Operations</h3>
<button className="text-[10px] font-bold text-lime-400 uppercase tracking-widest hover:underline transition-all">Download Manifest</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-950/50">
<th className="px-8 py-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Reference ID</th>
<th className="px-8 py-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Client Name</th>
<th className="px-8 py-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Item Description</th>
<th className="px-8 py-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest">Status</th>
<th className="px-8 py-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest text-right">Value (USD)</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800/30">
<tr className="hover:bg-stone-800/50 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-lime-500">TX-902341</td>
<td className="px-8 py-4 text-sm font-bold text-white uppercase">Inversiones Navas</td>
<td className="px-8 py-4 text-xs text-stone-400">Engine Block Assy (V8)</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-lime-500/10 text-lime-500 text-[9px] font-bold uppercase tracking-widest">Shipped</span>
</td>
<td className="px-8 py-4 text-right text-sm font-bold text-white">$4,850.00</td>
</tr>
<tr className="bg-stone-950/20 hover:bg-stone-800/50 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-lime-500">TX-902342</td>
<td className="px-8 py-4 text-sm font-bold text-white uppercase">Logística Central</td>
<td className="px-8 py-4 text-xs text-stone-400">Fuel Injector Set x6</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[9px] font-bold uppercase tracking-widest">Processing</span>
</td>
<td className="px-8 py-4 text-right text-sm font-bold text-white">$1,220.00</td>
</tr>
<tr className="hover:bg-stone-800/50 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-lime-500">TX-902343</td>
<td className="px-8 py-4 text-sm font-bold text-white uppercase">Transporte Carabobo</td>
<td className="px-8 py-4 text-xs text-stone-400">Head Gasket Multi-Pack</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-lime-500/10 text-lime-500 text-[9px] font-bold uppercase tracking-widest">Delivered</span>
</td>
<td className="px-8 py-4 text-right text-sm font-bold text-white">$890.00</td>
</tr>
<tr className="bg-stone-950/20 hover:bg-stone-800/50 transition-colors">
<td className="px-8 py-4 font-mono text-xs text-lime-500">TX-902344</td>
<td className="px-8 py-4 text-sm font-bold text-white uppercase">Mining Ops Corp</td>
<td className="px-8 py-4 text-xs text-stone-400">Turbocharger Unit T3</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-lime-500/10 text-lime-500 text-[9px] font-bold uppercase tracking-widest">Shipped</span>
</td>
<td className="px-8 py-4 text-right text-sm font-bold text-white">$3,100.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="md:ml-64 bg-stone-950 px-10 py-12 border-t border-stone-900">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
<div className="space-y-4">
<h4 className="text-lime-400 font-headline font-bold uppercase tracking-tight">TITAN ENGINE ERP</h4>
<p className="text-stone-500 text-xs leading-relaxed max-w-xs">
                    Supplying the mechanical backbone for Venezuela's industrial heavy-duty performance. High precision engine components engineered for maximum uptime.
                </p>
<div className="text-[10px] text-stone-600 font-black tracking-widest">RIF J-40308741-5</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-headline font-bold uppercase text-xs tracking-widest">Corporate HQ</h4>
<div className="text-stone-500 text-xs space-y-2">
<p className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">location_on</span> Zona Industrial I, Valencia, Edo. Carabobo</p>
<p className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">phone</span> +58 (241) 555-0100</p>
<p className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">mail</span> operations@titanengine.com.ve</p>
</div>
</div>
<div className="space-y-4">
<h4 className="text-white font-headline font-bold uppercase text-xs tracking-widest">System Status</h4>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
<span className="text-stone-400 text-xs font-bold">ALL MODULES OPERATIONAL</span>
</div>
<div className="text-stone-600 text-[10px] font-bold uppercase tracking-tighter">Server Latency: 14ms | Last Update: 2 mins ago</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-900 text-center">
<p className="text-[9px] text-stone-600 uppercase font-bold tracking-[0.3em]">© 2024 TITAN ENGINE SOLUTIONS S.A. | All Rights Reserved</p>
</div>
</footer>
{/* Comentario remanente */}
<div className="fixed bottom-8 right-8 z-50 md:hidden">
<button className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center transition-transform active:scale-95">
<span className="material-symbols-outlined">add</span>
</button>
</div>

        </div>
    );
};
