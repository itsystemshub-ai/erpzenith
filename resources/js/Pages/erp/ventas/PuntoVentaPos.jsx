import React from 'react';
import { Link } from '@inertiajs/react';

export default function PuntoVentaPos() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 w-full bg-stone-900/90 backdrop-blur-xl">
<div className="flex items-center gap-8">
<span className="text-xl font-bold text-lime-400 tracking-tighter font-['Space_Grotesk'] uppercase tracking-tight">TITAN ENGINE ERP</span>
<div className="hidden md:flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-none text-sm text-stone-200 w-64 placeholder-stone-500" placeholder="Search components..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-stone-700">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="Close-up professional portrait of an industrial engineer wearing a dark polo shirt against a blurred workshop background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlVkfWnNjQlTO4L7Hvl7DhkPjqqdSItlMGYh2sDxAQ5Jmp6LcCbYzijK7YJx0STOMljGX6iY-x14k-aTtlHOmR6if2enyS7l1v3zofdwiaKZW6e9SGxtJtR62SiXHOnAGEDwXV7WxFLOk_-zL7XvkO4zeUEe4C6iaAc73OF69z3pBcoFN5bzclQBZ8r3a4QJZf891-Dq4dBh3T-IAjnTqkPXgctKoRTvAYaRRT2WbNVoxXToxxkQ8e4VOcknOUmJDiM4wIHI-vVHI"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 bg-stone-950 flex flex-col py-8 px-4 gap-2 pt-20 border-r border-stone-800/50">
<div className="mb-8 px-2">
<div className="flex items-center gap-3 mb-1">
<div className="w-8 h-8 bg-lime-500 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-black text-xl" >engineering</span>
</div>
<span className="text-lg font-black text-white font-['Inter'] uppercase">ENGINE OPS</span>
</div>
<p className="text-[10px] text-stone-500 font-semibold tracking-widest uppercase px-1">High Performance Industrial</p>
</div>
<div className="flex flex-col gap-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase group" href="#">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-lime-400 border-r-4 border-lime-500 bg-stone-900/50 font-['Inter'] text-sm font-semibold uppercase group" href="#">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">add_shopping_cart</span>
<span>New Sale</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase group" href="#">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">history</span>
<span>Sales History</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase group" href="#">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">group</span>
<span>Customers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase group" href="#">
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">analytics</span>
<span>Reports</span>
</a>
</div>
<div className="mt-auto flex flex-col gap-1 border-t border-stone-800 pt-4">
<button className="bg-lime-500 text-black py-3 text-xs font-bold uppercase tracking-widest hover:bg-lime-400 transition-colors mb-4">INITIATE SALE</button>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">help</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-500 hover:text-stone-200 transition-all duration-300 font-['Inter'] text-sm font-semibold uppercase" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Logout</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="ml-64 pt-16 h-screen flex flex-col bg-stone-900 overflow-hidden">
{/* Comentario remanente */}
<div className="p-6 bg-stone-950/50 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800/40">
<div className="flex-1 max-w-2xl">
<h1 className="font-headline text-3xl font-extrabold text-white uppercase tracking-tighter mb-4">Terminal 04: New Transaction</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="font-label text-[10px] text-stone-500 font-bold uppercase tracking-wider">Product Entry (SKU / Name)</label>
<div className="flex items-center bg-stone-900 px-4 h-12 rounded border-l-4 border-lime-500">
<span className="material-symbols-outlined text-lime-500 mr-3">barcode_scanner</span>
<input className="bg-transparent border-none text-white w-full placeholder-stone-600 font-medium" placeholder="Scan or type item..." type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="font-label text-[10px] text-stone-500 font-bold uppercase tracking-wider">Customer Selection</label>
<div className="relative">
<select className="appearance-none bg-stone-900 text-white w-full h-12 px-4 rounded border-none font-medium cursor-pointer focus:ring-1 focus:ring-lime-500">
<option>Consumidor Final</option>
<option>Transporte Carabobo</option>
<option>Industrial Parts S.A.</option>
<option>Constructora Master</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-3 text-stone-500 pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="h-12 px-6 flex items-center justify-center gap-2 bg-stone-800 text-stone-300 font-bold uppercase text-xs tracking-widest hover:bg-stone-700 transition-all border border-stone-700">
<span className="material-symbols-outlined text-sm">print</span>
                    Hold
                </button>
<button className="h-12 px-6 flex items-center justify-center gap-2 bg-stone-800 text-error font-bold uppercase text-xs tracking-widest hover:bg-stone-700 transition-all border border-stone-700">
<span className="material-symbols-outlined text-sm">delete</span>
                    Cancel
                </button>
</div>
</div>
<div className="flex flex-1 overflow-hidden">
{/* Comentario remanente */}
<div className="flex-1 p-6 overflow-y-auto">
<div className="bg-stone-950 rounded-lg overflow-hidden border border-stone-800/30">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-900/50">
<th className="px-6 py-4 font-headline text-[11px] font-bold text-stone-500 uppercase tracking-widest">Part Identification</th>
<th className="px-6 py-4 font-headline text-[11px] font-bold text-stone-500 uppercase tracking-widest text-center">Qty</th>
<th className="px-6 py-4 font-headline text-[11px] font-bold text-stone-500 uppercase tracking-widest text-right">Unit Price</th>
<th className="px-6 py-4 font-headline text-[11px] font-bold text-stone-500 uppercase tracking-widest text-right">Subtotal</th>
<th className="px-6 py-4 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-stone-900">
{/* Comentario remanente */}
<tr className="hover:bg-stone-900/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-900 rounded flex items-center justify-center border border-stone-800">
<span className="material-symbols-outlined text-stone-500">settings_input_component</span>
</div>
<div>
<div className="text-white font-bold text-sm tracking-tight">Cummins Gasket</div>
<div className="text-xs text-stone-500 font-medium">SKU: CU-982-GK</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-center gap-3">
<button className="w-7 h-7 flex items-center justify-center rounded bg-stone-900 text-stone-400 hover:text-white transition-colors border border-stone-800">-</button>
<span className="text-white font-mono font-bold">04</span>
<button className="w-7 h-7 flex items-center justify-center rounded bg-stone-900 text-stone-400 hover:text-white transition-colors border border-stone-800">+</button>
</div>
</td>
<td className="px-6 py-5 text-right font-mono text-sm text-stone-300">$ 142.50</td>
<td className="px-6 py-5 text-right font-mono font-bold text-white">$ 570.00</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-700 hover:text-error transition-colors">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</td>
</tr>
{/* Comentario remanente */}
<tr className="hover:bg-stone-900/30 transition-colors">
<td className="px-6 py-5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-900 rounded flex items-center justify-center border border-stone-800">
<span className="material-symbols-outlined text-stone-500">filter_list</span>
</div>
<div>
<div className="text-white font-bold text-sm tracking-tight">Volvo Filter</div>
<div className="text-xs text-stone-500 font-medium">SKU: VO-FL-002</div>
</div>
</div>
</td>
<td className="px-6 py-5">
<div className="flex items-center justify-center gap-3">
<button className="w-7 h-7 flex items-center justify-center rounded bg-stone-900 text-stone-400 hover:text-white transition-colors border border-stone-800">-</button>
<span className="text-white font-mono font-bold">12</span>
<button className="w-7 h-7 flex items-center justify-center rounded bg-stone-900 text-stone-400 hover:text-white transition-colors border border-stone-800">+</button>
</div>
</td>
<td className="px-6 py-5 text-right font-mono text-sm text-stone-300">$ 45.00</td>
<td className="px-6 py-5 text-right font-mono font-bold text-white">$ 540.00</td>
<td className="px-6 py-5 text-right">
<button className="text-stone-700 hover:text-error transition-colors">
<span className="material-symbols-outlined text-lg">close</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-stone-950/30 p-4 border border-dashed border-stone-800 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-stone-950 transition-colors">
<span className="material-symbols-outlined text-stone-600 group-hover:text-lime-500">barcode</span>
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Rapid SKU Entry</span>
</div>
<div className="bg-stone-950/30 p-4 border border-dashed border-stone-800 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-stone-950 transition-colors">
<span className="material-symbols-outlined text-stone-600 group-hover:text-lime-500">sell</span>
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Apply Discount</span>
</div>
<div className="bg-stone-950/30 p-4 border border-dashed border-stone-800 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-stone-950 transition-colors">
<span className="material-symbols-outlined text-stone-600 group-hover:text-lime-500">history</span>
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Repeat Order</span>
</div>
<div className="bg-stone-950/30 p-4 border border-dashed border-stone-800 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-stone-950 transition-colors">
<span className="material-symbols-outlined text-stone-600 group-hover:text-lime-500">inventory_2</span>
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">Inventory Check</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="w-96 bg-stone-950 border-l border-stone-800/60 p-8 flex flex-col">
<div className="mb-10">
<h2 className="font-headline text-lg font-bold text-stone-400 uppercase tracking-widest mb-6 border-b border-stone-800 pb-2">Order Summary</h2>
<div className="space-y-4">
<div className="flex justify-between items-center text-stone-400">
<span className="text-xs font-semibold uppercase">Subtotal</span>
<span className="font-mono">$ 1,110.00</span>
</div>
<div className="flex justify-between items-center text-stone-400">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold uppercase">VAT (16%)</span>
<span className="text-[10px] bg-stone-900 px-1.5 py-0.5 text-stone-500 rounded font-bold">TAX CODE V2</span>
</div>
<span className="font-mono">$ 177.60</span>
</div>
<div className="flex justify-between items-center text-stone-500 text-xs">
<span className="font-semibold uppercase italic">Estimated Shipping</span>
<span className="font-mono">TBD</span>
</div>
</div>
</div>
<div className="mt-auto">
<div className="bg-stone-900/50 p-6 mb-8 border-l-4 border-lime-500">
<div className="text-[10px] font-bold text-lime-500 uppercase tracking-[0.2em] mb-1">Grand Total Due</div>
<div className="text-4xl font-headline font-black text-white">$ 1,287.60</div>
</div>
<div className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<button className="h-14 flex flex-col items-center justify-center gap-0.5 bg-stone-800 border border-stone-700 hover:border-lime-500/50 transition-all rounded">
<span className="material-symbols-outlined text-sm text-stone-400">payments</span>
<span className="text-[9px] font-bold uppercase text-stone-500 tracking-wider">Cash</span>
</button>
<button className="h-14 flex flex-col items-center justify-center gap-0.5 bg-stone-800 border border-stone-700 hover:border-lime-500/50 transition-all rounded">
<span className="material-symbols-outlined text-sm text-stone-400">credit_card</span>
<span className="text-[9px] font-bold uppercase text-stone-500 tracking-wider">Card</span>
</button>
</div>
<button className="w-full h-16 bg-gradient-to-b from-primary to-primary-container text-black font-headline font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(73,104,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-200">
                            Process Sale
                        </button>
</div>
<div className="mt-6 text-center">
<p className="text-[10px] text-stone-600 font-medium uppercase tracking-widest">Operator: ADM_SHIFT_012</p>
</div>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1] overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full" ></div>
</div>

```
        </div>
    );
};
