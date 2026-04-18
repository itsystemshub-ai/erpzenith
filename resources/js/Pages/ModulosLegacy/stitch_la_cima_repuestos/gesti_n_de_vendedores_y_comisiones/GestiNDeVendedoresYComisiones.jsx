import React from 'react';
import { Link } from '@inertiajs/react';

export default function GestiNDeVendedoresYComisiones() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="flex flex-col fixed left-0 top-0 h-full z-50 bg-[#161818] w-64 border-r border-outline-variant/10">
<div className="p-6">
<h1 className="font-headline font-black text-white text-2xl tracking-tighter">TITAN ERP</h1>
<p className="text-[10px] uppercase tracking-[0.2em] text-primary mt-1 font-bold">Precision Module v2.4</p>
</div>
<nav className="flex-1 mt-4 px-2 space-y-1">
<div className="text-stone-600 dark:text-stone-400 py-3 px-4 opacity-80 hover:bg-stone-800 transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label text-sm font-medium tracking-wide">Dashboard</span>
</div>
<div className="text-stone-600 dark:text-stone-400 py-3 px-4 opacity-80 hover:bg-stone-800 transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined">point_of_sale</span>
<span className="font-label text-sm font-medium tracking-wide">POS</span>
</div>
{/* Comentario remanente */}
<div className="bg-[#1a1c1c] text-lime-400 border-l-4 border-lime-500 py-3 px-4 flex items-center gap-3 cursor-default">
<span className="material-symbols-outlined">badge</span>
<span className="font-label text-sm font-bold tracking-wide">Sellers</span>
</div>
<div className="text-stone-600 dark:text-stone-400 py-3 px-4 opacity-80 hover:bg-stone-800 transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined">group</span>
<span className="font-label text-sm font-medium tracking-wide">Customers</span>
</div>
<div className="text-stone-600 dark:text-stone-400 py-3 px-4 opacity-80 hover:bg-stone-800 transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label text-sm font-medium tracking-wide">Reports</span>
</div>
</nav>
<div className="p-4 border-t border-outline-variant/5">
<button className="w-full bg-primary py-3 px-4 text-on-primary font-headline font-bold uppercase text-xs tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add_circle</span>
                New Sale
            </button>
<div className="mt-6 flex flex-col gap-1">
<div className="text-stone-500 hover:text-white py-2 px-4 flex items-center gap-3 text-xs cursor-pointer transition-colors">
<span className="material-symbols-outlined text-sm">help</span>
                    Support
                </div>
<div className="text-stone-500 hover:text-error py-2 px-4 flex items-center gap-3 text-xs cursor-pointer transition-colors">
<span className="material-symbols-outlined text-sm">logout</span>
                    Logout
                </div>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 min-h-screen">
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-64 h-16 glass-panel z-40 flex justify-between items-center px-8 border-b border-outline-variant/10">
<div className="flex items-center gap-4">
<span className="text-white/50 font-label text-xs uppercase tracking-widest">Navigation /</span>
<h2 className="text-white font-headline font-bold text-sm tracking-tight uppercase">Gestión de Vendedores y Comisiones</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative flex items-center bg-white/5 px-4 py-1.5 rounded-lg border border-white/10">
<span className="material-symbols-outlined text-stone-400 text-lg">search</span>
<input className="bg-transparent border-none text-xs text-white focus:ring-0 w-48" placeholder="Search sellers..." type="text"/>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-white transition-colors">notifications</span>
<span className="material-symbols-outlined text-stone-400 cursor-pointer hover:text-white transition-colors">settings</span>
<div className="w-8 h-8 rounded bg-primary/20 border border-primary/30 overflow-hidden">
<img alt="Manager Profile" className="w-full h-full object-cover" data-alt="professional portrait of a manager in a high-tech industrial office setting with soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOulNFI4GYXmMfki0DfdUZS0zT55PdZkSYijOggfluE5OZZKnLs1GlfDa34g6onlVdv0kipl9LdzZhbugs2czZM-Rrj_6u7wxHMRxB5ft6fD81WkTuxO6o6W4a7BSMyh0EwyMrq-bfKvI9fN3He-aJOTWJO6IWBtTSHx67zxXitH3_Rq_pxl-FJA59jDkXoxq2fdRuMjfG3JKKC_bdEr6gjUtzVY9SxZoquhz1Z4GYXw2OiCFGznTIyVpZFi6E8eoxJadh1BTMiYk"/>
</div>
</div>
</div>
</header>
<div className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
{/* Comentario remanente */}
<div className="mb-10 flex justify-between items-end">
<div>
<h3 className="font-headline text-primary font-black text-4xl uppercase tracking-tighter">MAYOR DE REPUESTO LA CIMA, C.A.</h3>
<p className="font-label text-stone-500 text-sm mt-1">Industrial Distribution Management System</p>
</div>
<div className="text-right">
<p className="font-headline text-stone-400 text-xs tracking-widest uppercase">Registry ID</p>
<p className="font-headline text-white font-bold text-xl">J-40308741-5</p>
</div>
</div>
<div className="grid grid-cols-12 gap-8">
{/* Comentario remanente */}
<section className="col-span-12 lg:col-span-4 space-y-6">
<div className="p-6 bg-[#1a1c1c] rounded-lg shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -mr-8 -mt-8 rotate-45 group-hover:bg-primary/10 transition-colors"></div>
<h4 className="font-headline text-white font-bold text-lg mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person_add</span>
                            REPRESENTATIVE REGISTRY
                        </h4>
<form className="space-y-4">
<div className="space-y-1">
<label className="font-label text-[10px] text-stone-500 uppercase tracking-widest">Full Name</label>
<input className="w-full bg-stone-900 border-none rounded p-3 text-white focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="e.g. ALEJANDRO RAMIREZ" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="font-label text-[10px] text-stone-500 uppercase tracking-widest">ID / RIF</label>
<input className="w-full bg-stone-900 border-none rounded p-3 text-white focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="V-00.000.000" type="text"/>
</div>
<div className="space-y-1">
<label className="font-label text-[10px] text-stone-500 uppercase tracking-widest">Commission %</label>
<div className="relative">
<input className="w-full bg-stone-900 border-none rounded p-3 text-white focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="5.0" type="number"/>
<span className="absolute right-3 top-3 text-stone-600">%</span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="font-label text-[10px] text-stone-500 uppercase tracking-widest">Assigned Region</label>
<select className="w-full bg-stone-900 border-none rounded p-3 text-white focus:ring-2 focus:ring-primary text-sm font-medium">
<option>Región Central</option>
<option>Región Occidente</option>
<option>Región Oriente</option>
<option>Región Los Andes</option>
</select>
</div>
<div className="space-y-1">
<label className="font-label text-[10px] text-stone-500 uppercase tracking-widest">Active Customers Base</label>
<input className="w-full bg-stone-900 border-none rounded p-3 text-white focus:ring-2 focus:ring-primary text-sm font-medium" placeholder="0" type="number"/>
</div>
<button className="w-full bg-stone-100 hover:bg-primary py-3 rounded text-stone-950 hover:text-white font-headline font-black uppercase text-xs tracking-[0.2em] transition-all mt-4">
                                Save Representative
                            </button>
</form>
</div>
<div className="p-6 bg-primary-container rounded-lg relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply" data-alt="extreme close up of precision engineered metal gear parts with dramatic industrial lighting and grease texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVsTqe-D9tiMD8dHYhbCCtdFQGPitHOlk5Tk-np0UAt3wUAaMg43Ocba14N4sGhQw7ImbRBpMOehvND_i9YERvN8TMyXenJdpMcp25x_yf-b9ljlHCoPbpjm-8ssxv4iO7gvenFjOQgPm8G0li-Ne0GDiQ12DA14mTo39VQTtB68S2hLPD-PAF83aGPc_VLfJB37cXbHJsTOTfNKwZ647G0AYgMXAjmfLiC_h2rppAyx2yBAPArD41siWhdopuL5R9XFtf6xM4WCU"/>
<div className="relative z-10">
<h5 className="font-headline text-on-primary-container font-black text-xl uppercase italic tracking-tighter">Performance Targets</h5>
<p className="text-on-primary-container/80 text-xs font-bold uppercase mt-2">Current Quarter: Q3 2024</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-headline font-black text-on-primary-container">$450K</span>
<span className="text-xs font-bold text-on-primary-container/60 uppercase">Threshold</span>
</div>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="col-span-12 lg:col-span-8">
<div className="bg-[#1a1c1c] rounded-lg overflow-hidden border border-white/5">
<div className="px-6 py-4 bg-stone-900/50 flex justify-between items-center border-b border-white/5">
<h4 className="font-headline text-white font-bold text-sm tracking-widest uppercase">Active Sales Force</h4>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-white/10 rounded transition-colors">
<span className="material-symbols-outlined text-stone-400 text-sm">filter_list</span>
</button>
<button className="p-1.5 hover:bg-white/10 rounded transition-colors">
<span className="material-symbols-outlined text-stone-400 text-sm">download</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-stone-900/20 text-[10px] text-stone-500 uppercase tracking-widest font-bold">
<tr>
<th className="px-6 py-4">Seller Details</th>
<th className="px-6 py-4">Region</th>
<th className="px-6 py-4">Commission</th>
<th className="px-6 py-4">Customers</th>
<th className="px-6 py-4">Performance</th>
<th className="px-6 py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">
{/* Comentario remanente */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center font-headline font-bold text-primary">RM</div>
<div>
<p className="text-white font-bold uppercase tracking-tight">Ricardo Mendoza</p>
<p className="text-[10px] text-stone-500">ID: V-14.822.391</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2 py-1 bg-stone-800 text-stone-400 text-[10px] font-bold uppercase tracking-tighter">Región Central</span>
</td>
<td className="px-6 py-5 text-white font-mono">8.5%</td>
<td className="px-6 py-5 text-white font-bold">142</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[82%]"></div>
</div>
<span className="text-[10px] text-primary font-black tracking-tighter">82%</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="material-symbols-outlined text-stone-600 hover:text-white transition-colors">edit_note</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center font-headline font-bold text-primary">SC</div>
<div>
<p className="text-white font-bold uppercase tracking-tight">Sofia Castellanos</p>
<p className="text-[10px] text-stone-500">ID: V-20.119.504</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2 py-1 bg-stone-800 text-stone-400 text-[10px] font-bold uppercase tracking-tighter">Región Oriente</span>
</td>
<td className="px-6 py-5 text-white font-mono">10.0%</td>
<td className="px-6 py-5 text-white font-bold">89</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[95%]"></div>
</div>
<span className="text-[10px] text-primary font-black tracking-tighter">95%</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="material-symbols-outlined text-stone-600 hover:text-white transition-colors">edit_note</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center font-headline font-bold text-primary">JP</div>
<div>
<p className="text-white font-bold uppercase tracking-tight">Javier Peraza</p>
<p className="text-[10px] text-stone-500">ID: V-17.443.109</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2 py-1 bg-stone-800 text-stone-400 text-[10px] font-bold uppercase tracking-tighter">Región Occidente</span>
</td>
<td className="px-6 py-5 text-white font-mono">6.5%</td>
<td className="px-6 py-5 text-white font-bold">215</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden w-24">
<div className="h-full bg-stone-600 w-[45%]"></div>
</div>
<span className="text-[10px] text-stone-500 font-black tracking-tighter">45%</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="material-symbols-outlined text-stone-600 hover:text-white transition-colors">edit_note</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-800 flex items-center justify-center font-headline font-bold text-primary">EL</div>
<div>
<p className="text-white font-bold uppercase tracking-tight">Elena Lugo</p>
<p className="text-[10px] text-stone-500">ID: V-23.900.221</p>
</div>
</div>
</td>
<td className="px-6 py-5">
<span className="px-2 py-1 bg-stone-800 text-stone-400 text-[10px] font-bold uppercase tracking-tighter">Región Central</span>
</td>
<td className="px-6 py-5 text-white font-mono">7.5%</td>
<td className="px-6 py-5 text-white font-bold">110</td>
<td className="px-6 py-5">
<div className="flex items-center gap-2">
<div className="flex-1 h-1.5 bg-stone-800 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[68%]"></div>
</div>
<span className="text-[10px] text-primary font-black tracking-tighter">68%</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="material-symbols-outlined text-stone-600 hover:text-white transition-colors">edit_note</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-stone-900/50 flex justify-between items-center">
<p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">Showing 4 of 12 sales agents</p>
<div className="flex gap-2">
<button className="px-3 py-1 bg-stone-800 text-stone-400 text-xs font-bold rounded disabled:opacity-50" disabled="">PREV</button>
<button className="px-3 py-1 bg-stone-800 text-white text-xs font-bold rounded">NEXT</button>
</div>
</div>
</div>
</section>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-auto border-t border-white/5 py-8 px-8 bg-[#0f1111]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<p className="font-headline font-black text-white tracking-tight">TITAN INDUSTRIAL FORGE</p>
<p className="text-[10px] text-stone-600 font-medium tracking-[0.2em] uppercase">Supply Chain Precision Engine</p>
</div>
<div className="flex flex-col items-center">
<p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">Official Registry</p>
<p className="text-primary font-headline font-bold text-sm tracking-widest">RIF J-40308741-5</p>
</div>
<div className="text-right">
<p className="text-stone-600 text-[10px] font-medium">© 2024 MAYOR DE REPUESTO LA CIMA, C.A.</p>
<p className="text-stone-600 text-[10px] font-medium">All rights reserved. Engineering Division.</p>
</div>
</div>
</footer>
</main>

        </div>
    );
};
