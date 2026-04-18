import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNProductosInventario() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="h-screen w-64 fixed left-0 top-0 bg-stone-100 dark:bg-stone-950 flex flex-col py-6 border-r border-stone-200/50 dark:border-stone-800/50 z-50">
<div className="px-6 mb-10">
<h1 className="font-['Space_Grotesk'] font-black text-stone-900 dark:text-stone-50 text-2xl tracking-tighter uppercase">TRUCKPRO</h1>
<p className="text-[10px] font-bold text-lime-600 dark:text-lime-400 tracking-[0.2em] mt-1">INDUSTRIAL OPS</p>
</div>
<div className="flex-1 space-y-1 px-3">
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 bg-lime-600/10 text-lime-700 dark:text-lime-400 font-bold font-['Inter'] text-sm transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">inventory_2</span> Inventory
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">gavel</span> SENIAT Compliance
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">conveyor_belt</span> Warehouse
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">local_shipping</span> Orders
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-sm font-medium" href="#">
<span className="material-symbols-outlined">analytics</span> Reporting
            </a>
</div>
<div className="px-3 border-t border-stone-800/50 pt-4 mt-auto">
<div className="flex items-center gap-3 px-4 py-4 mb-4 bg-stone-900/50 rounded-lg">
<img alt="User" className="w-8 h-8 rounded bg-lime-600/20" data-alt="minimalist user avatar silhouette on a muted industrial background with lime green highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCu43SM_s47daEW2bsgXjSD55F_3Ej03xN4-pkx8vW0INCuMIkeMYmUq5iE0FJYH2WAPRhRuXZshyZU-PgSfjH99xZVLlzcPSSHZaVJKacHyyOPVyzb_LkhRhXaaUYm-QrqzO299s7gn0Ks6cGBukDAm1U1i8_lJU_SuuUoNt1r-HLl7SuJ7owP6_SiF684phpPFZ5a0ja6wyAkPX9caHdDSsUy0aoUDA10BeacSCWSYdXXjC1h5oWICmrJvQ4kW1Ni86Ozl_hPKw"/>
<div className="overflow-hidden">
<p className="text-xs font-bold text-white truncate">Warehouse A-12</p>
<p className="text-[10px] text-stone-500">System Operator</p>
</div>
</div>
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-xs" href="#">
<span className="material-symbols-outlined text-sm">dns</span> System Status
            </a>
<a className="flex items-center gap-3 px-4 py-2 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-900 transition-all duration-200 ease-in-out font-['Inter'] text-xs" href="#">
<span className="material-symbols-outlined text-sm">help_outline</span> Support
            </a>
</div>
</nav>
{/* Comentario remanente */}
<header className="w-full sticky top-0 z-40 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 ml-64 w-[calc(100%-16rem)]">
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-lime-500 transition-colors">search</span>
<input className="bg-stone-100 dark:bg-stone-800 border-none rounded text-sm pl-10 pr-4 py-2 w-80 focus:ring-1 focus:ring-lime-500 text-stone-200" placeholder="Search components, SKUs..." type="text"/>
</div>
<div className="flex gap-4">
<span className="text-[10px] font-black font-headline uppercase text-lime-600 bg-lime-600/10 px-2 py-1 rounded">MAYOR DE REPUESTO LA CIMA, C.A.</span>
<div className="flex items-center gap-1 text-[10px] font-bold text-stone-400 uppercase tracking-widest border-l border-stone-700 pl-4">
<span className="material-symbols-outlined text-xs text-lime-400" >verified</span>
                    Sello del Registro Mercantil
                </div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-lime-600 text-white px-4 py-2 text-[11px] font-black uppercase tracking-tighter hover:bg-lime-500 transition-all flex items-center gap-2">
                Legal Alert
            </button>
<div className="flex items-center gap-2 text-stone-400">
<button className="p-2 hover:bg-stone-800 rounded transition-colors"><span className="material-symbols-outlined">settings</span></button>
<button className="p-2 hover:bg-stone-800 rounded transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
</button>
<button className="p-2 hover:bg-stone-800 rounded transition-colors"><span className="material-symbols-outlined">account_circle</span></button>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="ml-64 p-8 min-h-screen">
{/* Comentario remanente */}
<div className="mb-10 flex justify-between items-end">
<div>
<h2 className="font-headline text-5xl font-black text-white tracking-tighter uppercase mb-2">Inventory Management</h2>
<div className="flex items-center gap-4">
<div className="h-1 w-24 bg-lime-600"></div>
<span className="text-stone-500 text-xs font-bold uppercase tracking-widest">Global Stock Control Panel v4.2</span>
</div>
</div>
<button className="group relative bg-white text-stone-950 px-8 py-4 font-black uppercase tracking-tighter flex items-center gap-3 hover:bg-lime-500 transition-all active:scale-95">
<span className="material-symbols-outlined font-bold">add</span>
                New Product Entry
            </button>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-4 gap-4 mb-8">
<div className="col-span-1 bg-stone-900/50 p-6 flex flex-col justify-between group hover:bg-stone-900 transition-all border-b-4 border-transparent hover:border-lime-600">
<span className="text-[10px] text-stone-500 font-bold uppercase mb-4 tracking-widest">Category Filter</span>
<select className="bg-transparent border-none text-white font-headline text-xl font-bold p-0 focus:ring-0 cursor-pointer">
<option>ALL MOTOR PARTS</option>
<option>CYLINDER HEADS</option>
<option>PISTON KITS</option>
<option>CRANKSHAFTS</option>
</select>
</div>
<div className="col-span-1 bg-stone-900/50 p-6 flex flex-col justify-between group hover:bg-stone-900 transition-all border-b-4 border-transparent hover:border-lime-600">
<span className="text-[10px] text-stone-500 font-bold uppercase mb-4 tracking-widest">Brand Line</span>
<select className="bg-transparent border-none text-white font-headline text-xl font-bold p-0 focus:ring-0 cursor-pointer">
<option>ANY BRAND</option>
<option>CUMMINS HEAVY</option>
<option>CATERPILLAR GEN</option>
<option>PERKINS IND</option>
</select>
</div>
<div className="col-span-1 bg-stone-900/50 p-6 flex flex-col justify-between group hover:bg-stone-900 transition-all border-b-4 border-transparent hover:border-lime-600">
<span className="text-[10px] text-stone-500 font-bold uppercase mb-4 tracking-widest">Stock Health</span>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-amber-500"></span>
<span className="text-white font-headline text-xl font-bold">LOW STOCK (4)</span>
</div>
</div>
<div className="col-span-1 bg-stone-950 p-4 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-10" ></div>
<div className="text-center z-10">
<p className="text-[32px] font-black text-lime-500 leading-none">1,402</p>
<p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Total SKU Count</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900/20 backdrop-blur-sm overflow-hidden">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-950/80">
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800">SKU Code</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800">Component Name</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800">Category</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800">Stock Status</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800 text-right">Cost (USD)</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800 text-right">Price + IVA</th>
<th className="p-4 text-[10px] font-black text-stone-400 uppercase tracking-widest border-b border-stone-800 text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800/50">
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#CP-8842-12</td>
<td className="p-4">
<p className="text-sm font-bold text-white uppercase">Cylinder Head Gasket</p>
<p className="text-[10px] text-stone-500 font-medium">Cummins ISX Series</p>
</td>
<td className="p-4">
<span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Engine Seals</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden">
<div className="bg-lime-500 h-full w-[85%]"></div>
</div>
<span className="text-xs font-bold text-white">42 <span className="text-stone-500 font-medium text-[10px]">/ 50</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$124.50</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$144.42</td>
<td className="p-4">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-amber-900/5 hover:bg-amber-900/10 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-amber-500/70">#PK-1102-X</td>
<td className="p-4 border-l-2 border-amber-500">
<p className="text-sm font-bold text-white uppercase">Main Bearing Set</p>
<p className="text-[10px] text-amber-500/60 font-medium tracking-tighter">Perkins 1104D-44TA</p>
</td>
<td className="p-4">
<span className="bg-amber-900/20 text-amber-500 text-[10px] font-bold px-2 py-0.5 uppercase">Internal Parts</span>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden">
<div className="bg-amber-500 h-full w-[15%]"></div>
</div>
<span className="text-xs font-bold text-amber-500">03 <span className="text-stone-500 font-medium text-[10px]">/ 20</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$82.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$95.12</td>
<td className="p-4 text-center">
<span className="material-symbols-outlined text-amber-500 text-lg animate-pulse" >error</span>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#FP-9931-B</td>
<td className="p-4"><p className="text-sm font-bold text-white uppercase">Fuel Injection Pump</p><p className="text-[10px] text-stone-500 font-medium">Bosch Heavy Duty</p></td>
<td className="p-4"><span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Fuel Systems</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-lime-500 h-full w-[60%]"></div></div>
<span className="text-xs font-bold text-white">08 <span className="text-stone-500 font-medium text-[10px]">/ 12</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$1,840.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$2,134.40</td>
<td className="p-4 text-center">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#TU-4420-W</td>
<td className="p-4"><p className="text-sm font-bold text-white uppercase">Turbocharger Assembly</p><p className="text-[10px] text-stone-500 font-medium">Holset HE351CW</p></td>
<td className="p-4"><span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Air Intake</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-lime-500 h-full w-[40%]"></div></div>
<span className="text-xs font-bold text-white">02 <span className="text-stone-500 font-medium text-[10px]">/ 05</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$645.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$748.20</td>
<td className="p-4 text-center">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-amber-900/5 hover:bg-amber-900/10 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-amber-500/70">#VL-0012-S</td>
<td className="p-4 border-l-2 border-amber-500">
<p className="text-sm font-bold text-white uppercase">Exhaust Valve Set</p>
<p className="text-[10px] text-amber-500/60 font-medium tracking-tighter">CAT 3406E Industrial</p>
</td>
<td className="p-4"><span className="bg-amber-900/20 text-amber-500 text-[10px] font-bold px-2 py-0.5 uppercase">Valve Train</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-amber-500 h-full w-[5%]"></div></div>
<span className="text-xs font-bold text-amber-500">01 <span className="text-stone-500 font-medium text-[10px]">/ 24</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$18.40</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$21.34</td>
<td className="p-4 text-center">
<span className="material-symbols-outlined text-amber-500 text-lg" >warning</span>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#OP-5521-X</td>
<td className="p-4"><p className="text-sm font-bold text-white uppercase">Oil Pump Assembly</p><p className="text-[10px] text-stone-500 font-medium">Detroit Diesel Series 60</p></td>
<td className="p-4"><span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Lubrication</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-lime-500 h-full w-[100%]"></div></div>
<span className="text-xs font-bold text-white">12 <span className="text-stone-500 font-medium text-[10px]">/ 12</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$312.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$361.92</td>
<td className="p-4 text-center">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#RA-2211-L</td>
<td className="p-4"><p className="text-sm font-bold text-white uppercase">Heavy Duty Radiator</p><p className="text-[10px] text-stone-500 font-medium">Kenworth T800 Core</p></td>
<td className="p-4"><span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Cooling</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-lime-500 h-full w-[30%]"></div></div>
<span className="text-xs font-bold text-white">03 <span className="text-stone-500 font-medium text-[10px]">/ 10</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$940.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$1,090.40</td>
<td className="p-4 text-center">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="p-4 font-headline text-sm font-bold text-stone-400">#ST-6600-A</td>
<td className="p-4"><p className="text-sm font-bold text-white uppercase">24V Heavy Starter Motor</p><p className="text-[10px] text-stone-500 font-medium">Delco Remy 39MT</p></td>
<td className="p-4"><span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 uppercase">Electrical</span></td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="flex-1 bg-stone-800 h-1 max-w-[60px] rounded-full overflow-hidden"><div className="bg-lime-500 h-full w-[75%]"></div></div>
<span className="text-xs font-bold text-white">15 <span className="text-stone-500 font-medium text-[10px]">/ 20</span></span>
</div>
</td>
<td className="p-4 text-right font-headline font-bold text-stone-300">$425.00</td>
<td className="p-4 text-right font-headline font-bold text-lime-400">$493.00</td>
<td className="p-4 text-center">
<div className="flex justify-center gap-2">
<button className="p-1.5 hover:bg-lime-600/20 hover:text-lime-400 rounded transition-all"><span className="material-symbols-outlined text-lg">edit</span></button>
<button className="p-1.5 hover:bg-stone-700 rounded transition-all text-stone-500"><span className="material-symbols-outlined text-lg">archive</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="flex justify-between items-center p-6 bg-stone-950/50">
<p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Showing 15 of 1,402 line items</p>
<div className="flex gap-1">
<button className="w-8 h-8 flex items-center justify-center bg-stone-800 text-stone-400 hover:bg-lime-600 hover:text-white transition-all text-xs font-bold">1</button>
<button className="w-8 h-8 flex items-center justify-center bg-lime-600 text-white text-xs font-bold">2</button>
<button className="w-8 h-8 flex items-center justify-center bg-stone-800 text-stone-400 hover:bg-lime-600 hover:text-white transition-all text-xs font-bold">3</button>
<span className="px-2 py-1 text-stone-600">...</span>
<button className="w-8 h-8 flex items-center justify-center bg-stone-800 text-stone-400 hover:bg-lime-600 hover:text-white transition-all text-xs font-bold">94</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6 mt-10">
<div className="col-span-8 bg-stone-900/40 p-6 flex items-center justify-between overflow-hidden relative border-l-4 border-lime-600">
<div className="absolute right-0 top-0 opacity-5 rotate-12 scale-150 pointer-events-none">
<span className="material-symbols-outlined text-[160px]">precision_manufacturing</span>
</div>
<div className="z-10">
<h3 className="font-headline text-2xl font-black text-white uppercase tracking-tight">Active Inventory Value</h3>
<p className="text-[10px] text-stone-500 font-bold uppercase tracking-[0.3em] mb-4">Live Warehouse Appraisal</p>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-black text-lime-500">$1,452,310.00</span>
<span className="text-[10px] text-stone-400 font-bold">USD</span>
</div>
</div>
<div className="z-10 flex flex-col items-end gap-2">
<div className="text-right">
<p className="text-[10px] text-stone-500 font-bold uppercase">IVA Liability (16%)</p>
<p className="text-lg font-bold text-white">$232,369.60</p>
</div>
<div className="text-right">
<p className="text-[10px] text-stone-500 font-bold uppercase">Pre-Tax Cost</p>
<p className="text-lg font-bold text-white">$1,219,940.40</p>
</div>
</div>
</div>
<div className="col-span-4 bg-stone-900/40 p-6 border-l-4 border-amber-500">
<h3 className="font-headline text-xl font-black text-white uppercase tracking-tight mb-4">Restock Pipeline</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-[10px] text-stone-400 font-bold uppercase">Critical Low</span>
<span className="bg-amber-500 text-stone-950 text-[10px] font-black px-2 py-0.5">04 SKUs</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-stone-400 font-bold uppercase">Pending Orders</span>
<span className="text-white text-sm font-bold">12 Shipments</span>
</div>
<button className="w-full py-2 bg-stone-800 text-[10px] font-black uppercase text-amber-500 border border-amber-500/20 hover:bg-amber-500 hover:text-stone-950 transition-all mt-2">
                        Generate Restock Report
                    </button>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="ml-64 px-8 py-6 border-t border-stone-800 text-stone-600 text-[9px] font-bold uppercase tracking-[0.2em] flex justify-between items-center">
<div>© 2024 MAYOR DE REPUESTO LA CIMA, C.A. - ALL RIGHTS RESERVED</div>
<div className="flex gap-6">
<a className="hover:text-lime-500 transition-colors" href="#">Operational Terms</a>
<a className="hover:text-lime-500 transition-colors" href="#">Privacy Shield</a>
<a className="hover:text-lime-500 transition-colors" href="#">VAT Registry: J-29931881-2</a>
</div>
</footer>

        </div>
    );
};
