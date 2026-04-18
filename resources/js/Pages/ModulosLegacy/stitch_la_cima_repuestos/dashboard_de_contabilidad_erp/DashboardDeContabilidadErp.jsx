import React from 'react';
import { Link } from '@inertiajs/react';

export default function DashboardDeContabilidadErp() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<nav className="bg-stone-950/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-3 fixed top-0 z-50 border-b-0">
<div className="flex items-center gap-8">
<div className="text-xl font-bold tracking-tighter text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight">
                TITAN ERP: ACCOUNTING
            </div>
<div className="hidden md:flex items-center bg-stone-900 px-4 py-1.5 rounded-lg border border-stone-800">
<span className="material-symbols-outlined text-stone-500 text-sm mr-2">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs font-['Inter'] tracking-widest text-stone-300 w-64 uppercase" placeholder="SEARCH LEDGER..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:text-orange-400 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-stone-400 hover:text-orange-400 transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-sm bg-orange-500 flex items-center justify-center overflow-hidden">
<img className="object-cover h-full w-full" data-alt="close up headshot of a professional accountant in a modern office with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClf1fha07q6lWYz-a5dCUfZuBSx1ovgfiwuOhMrYq10_myDX7iL9kf1wcNWF8U6QiDyjifboM9BkSpfyznMTsLOVXcfIw-rGa-DEPgVXwjnVCZejsc5GrbdFPqmWagAEAaEhPaGymexxCTkH-BEwSr9AJ2V4fM03XK0KBgRz___pxqvdFFXrRO3VYfHa17_neqmhNJkz-0SFepR8dJnFOiwsrubVAR_zk_fDCFewodjDNWH_JECc4qwpKiWYlc-YAqqu9DaJ3qsZA"/>
</div>
</div>
</nav>
<div className="flex">
{/* Comentario remanente */}
<aside className="bg-stone-900 flex flex-col h-screen fixed left-0 top-0 pt-16 w-64 border-r-0 hidden md:flex">
<div className="p-6">
<div className="text-orange-500 font-black font-['Inter'] text-sm font-semibold tracking-wide">FINANCE</div>
<div className="text-stone-500 text-[10px] uppercase tracking-tighter">Precision Ledger v4.2</div>
</div>
<nav className="flex-1 px-2">
<a className="bg-stone-800 text-orange-400 border-l-4 border-orange-500 py-3 px-4 flex items-center gap-3 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined" >dashboard</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Dashboard</span>
</a>
<a className="text-stone-500 hover:text-stone-200 py-3 px-4 flex items-center gap-3 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Chart of Accounts</span>
</a>
<a className="text-stone-500 hover:text-stone-200 py-3 px-4 flex items-center gap-3 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Journal Entries</span>
</a>
<a className="text-stone-500 hover:text-stone-200 py-3 px-4 flex items-center gap-3 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Ledger</span>
</a>
<a className="text-stone-500 hover:text-stone-200 py-3 px-4 flex items-center gap-3 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined">balance</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Trial Balance</span>
</a>
<a className="text-stone-500 hover:text-stone-200 py-3 px-4 flex items-center gap-3 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150 mb-1" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Financial Statements</span>
</a>
</nav>
<div className="p-4 border-t border-stone-800">
<button className="w-full bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold py-3 text-xs tracking-tighter uppercase transition-all active:scale-95">
                    NEW ENTRY
                </button>
</div>
<div className="p-2">
<a className="text-stone-500 hover:text-stone-200 py-2 px-4 flex items-center gap-3 text-xs" href="#">
<span className="material-symbols-outlined text-sm">help</span>
                    Support
                </a>
<a className="text-stone-500 hover:text-stone-200 py-2 px-4 flex items-center gap-3 text-xs" href="#">
<span className="material-symbols-outlined text-sm">history</span>
                    Logs
                </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 pt-16 min-h-screen bg-stone-950">
<header className="p-8 pb-4">
<div className="flex justify-between items-end">
<div>
<h1 className="text-4xl font-bold tracking-tighter text-stone-100 uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</h1>
<p className="text-orange-500 font-mono text-sm tracking-widest mt-1">RIF: J-40308741-5 • FISCAL PERIOD: OCT 2023</p>
</div>
<div className="text-right">
<div className="text-[10px] text-stone-500 uppercase tracking-[0.2em]">Current Exchange Rate</div>
<div className="text-xl font-bold text-stone-200">BCV: 34.82 VES/USD</div>
</div>
</div>
</header>
<div className="p-8 grid grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">account_balance_wallet</span>
</div>
<div className="text-[10px] text-stone-500 uppercase tracking-widest mb-2">Total Assets</div>
<div className="text-2xl font-bold text-stone-100">842,391.00 <span className="text-xs text-stone-500 ml-1">VES</span></div>
<div className="mt-4 flex items-center text-[10px] text-primary-container">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                            +4.2% vs LAST MONTH
                        </div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">payments</span>
</div>
<div className="text-[10px] text-stone-500 uppercase tracking-widest mb-2">Total Liabilities</div>
<div className="text-2xl font-bold text-stone-100">312,105.50 <span className="text-xs text-stone-500 ml-1">VES</span></div>
<div className="mt-4 flex items-center text-[10px] text-error">
<span className="material-symbols-outlined text-sm mr-1">trending_down</span>
                            -1.8% REDUCTION
                        </div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 relative overflow-hidden group border-b-2 border-orange-500">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl">pie_chart</span>
</div>
<div className="text-[10px] text-stone-500 uppercase tracking-widest mb-2">Net Equity</div>
<div className="text-2xl font-bold text-orange-400">530,285.50 <span className="text-xs text-stone-500 ml-1">VES</span></div>
<div className="mt-4 flex items-center text-[10px] text-stone-400">
                            RATIO: 1.69 ASSET/LIAB
                        </div>
</div>
{/* Comentario remanente */}
<div className="col-span-3 bg-stone-900/50">
<div className="px-6 py-4 flex justify-between items-center border-b border-stone-800">
<h3 className="text-xs font-bold uppercase tracking-widest">Recent Journal Entries (Automatic)</h3>
<button className="text-[10px] text-orange-500 hover:underline uppercase">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-stone-900 text-stone-500 text-[10px] uppercase tracking-tighter">
<th className="px-6 py-3 font-medium">Ref #</th>
<th className="px-6 py-3 font-medium">Origin</th>
<th className="px-6 py-3 font-medium">Description</th>
<th className="px-6 py-3 font-medium">Debit</th>
<th className="px-6 py-3 font-medium">Credit</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-800/50">
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4 text-xs font-mono">AS-2023-0941</td>
<td className="px-6 py-4 text-xs"><span className="bg-primary/20 text-primary-container px-2 py-0.5 rounded-sm uppercase text-[9px] font-bold">SALES</span></td>
<td className="px-6 py-4 text-xs text-stone-300">Daily Sales Batch: Retail POS 04</td>
<td className="px-6 py-4 text-xs font-semibold">12,450.00</td>
<td className="px-6 py-4 text-xs font-semibold">0.00</td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-primary-container text-sm">verified</span></td>
</tr>
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4 text-xs font-mono">AS-2023-0940</td>
<td className="px-6 py-4 text-xs"><span className="bg-stone-800 text-stone-400 px-2 py-0.5 rounded-sm uppercase text-[9px] font-bold">PURCHASE</span></td>
<td className="px-6 py-4 text-xs text-stone-300">Inv: #X992 - Global Parts Inc.</td>
<td className="px-6 py-4 text-xs font-semibold">0.00</td>
<td className="px-6 py-4 text-xs font-semibold">8,200.00</td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-primary-container text-sm">verified</span></td>
</tr>
<tr className="hover:bg-stone-800/30 transition-colors">
<td className="px-6 py-4 text-xs font-mono">AS-2023-0939</td>
<td className="px-6 py-4 text-xs"><span className="bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-sm uppercase text-[9px] font-bold">INVENTORY</span></td>
<td className="px-6 py-4 text-xs text-stone-300">Stock Adjustment: Core Engine Block #4</td>
<td className="px-6 py-4 text-xs font-semibold">1,200.00</td>
<td className="px-6 py-4 text-xs font-semibold">1,200.00</td>
<td className="px-6 py-4"><span className="material-symbols-outlined text-stone-500 text-sm">pending</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-4 space-y-6">
{/* Comentario remanente */}
<div className="bg-stone-900 p-6 border-l-4 border-primary-container">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xs font-bold uppercase tracking-widest text-stone-100">Fiscal Compliance</h3>
<p className="text-[10px] text-stone-500 uppercase mt-1">Agency: SENIAT</p>
</div>
<div className="bg-primary/20 text-primary-container px-2 py-1 text-[10px] font-bold rounded">VALID</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-stone-400">IVA Retention (LXV)</span>
<span className="text-stone-200">Submitted</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-stone-400">ISLR Advance</span>
<span className="text-stone-200">Paid 15/10</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-stone-400">Municipal Taxes</span>
<span className="text-stone-200">Up to date</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-stone-800">
<div className="flex items-center gap-2 text-[10px] text-stone-500">
<span className="material-symbols-outlined text-sm">schedule</span>
                                NEXT FILING: NOV 05, 2023
                            </div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-stone-900 p-6">
<h3 className="text-xs font-bold uppercase tracking-widest text-stone-100 mb-4">OCTOBER Period Closure</h3>
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-400 bg-orange-900/30">
                                        In Progress
                                    </span>
</div>
<div className="text-right">
<span className="text-xs font-semibold inline-block text-stone-200">
                                        78%
                                    </span>
</div>
</div>
<div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-stone-800">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500" ></div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
<span className="text-xs text-stone-300">Bank Reconciliation</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
<span className="text-xs text-stone-300">Payroll Finalization</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<span className="text-xs text-stone-500">Inventory Valuation Batch</span>
</div>
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-600"></div>
<span className="text-xs text-stone-500">Depreciation Run</span>
</div>
</div>
<button className="w-full mt-6 py-2 border border-stone-700 text-[10px] uppercase tracking-widest font-bold text-stone-300 hover:bg-stone-800 transition-colors">
                            INITIATE PRE-CLOSE
                        </button>
</div>
{/* Comentario remanente */}
<div className="h-32 bg-stone-900 relative overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-700" data-alt="extreme close up of industrial engine gears with golden metallic sheen and mechanical precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSQGMby3WFR2id5M4z11jVdQd5elD2cCWTsYArCKdYSD8WaeDZsLjSolAARjdFes6IX1uDvQCyir_Izw53J-7UhqtAkn_PnVXsTn325BAXt_CrnD79QdJJFggQBPUOEwfdiF3Lc7fc7jxYf6siOkaFBj3Q8oKj80yWrJGGhboWTvrs9QZO32d-VBV2b-SOsbzPSpxvcS4sB_IXWZ6RTclD7kaFIcx5L-IJ_qH1UdN_z-ocz5STXlBSyDriTeAtFbiXkABwbjJKBZ4"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="text-[10px] text-stone-500 uppercase tracking-widest">System Engine</div>
<div className="text-xs font-bold text-stone-200">CORE ANALYTICS V4</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-12 p-8 border-t border-stone-900 bg-stone-950">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<div className="text-orange-500 font-bold text-sm tracking-tighter mb-4">MAYOR DE REPUESTO LA CIMA, C.A.</div>
<div className="text-stone-500 text-xs leading-relaxed max-w-xs">
                            Leading industrial spare parts supplier in Venezuela. High-precision distribution and accounting standards.
                        </div>
</div>
<div className="space-y-4">
<h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Contact Information</h4>
<div className="flex items-center gap-3 text-xs text-stone-300">
<span className="material-symbols-outlined text-sm text-orange-500">location_on</span>
                            Av. Principal de Los Ruices, Edif. La Cima, Piso 4. Caracas, Venezuela.
                        </div>
<div className="flex items-center gap-3 text-xs text-stone-300">
<span className="material-symbols-outlined text-sm text-orange-500">phone</span>
                            +58 (212) 555-0192 / +58 (212) 555-0193
                        </div>
<div className="flex items-center gap-3 text-xs text-stone-300">
<span className="material-symbols-outlined text-sm text-orange-500">mail</span>
                            contabilidad@lacima.com.ve / admin@lacima.com.ve
                        </div>
</div>
<div className="flex flex-col items-end justify-between">
<div className="text-right">
<div className="text-[10px] text-stone-600 uppercase mb-2">Platform provided by</div>
<div className="text-xl font-black text-stone-800 tracking-tighter">TITAN ERP SYSTEM</div>
</div>
<div className="text-[10px] text-stone-600">
                            © 2023 MAYOR DE REPUESTO LA CIMA, C.A. ALL RIGHTS RESERVED.
                        </div>
</div>
</div>
</footer>
</main>
</div>

        </div>
    );
};
