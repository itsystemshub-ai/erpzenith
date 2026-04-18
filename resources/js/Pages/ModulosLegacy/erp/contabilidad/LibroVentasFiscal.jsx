import React from 'react';
import { Link } from '@inertiajs/react';

export default function LibroVentasFiscal() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-50 bg-stone-900/90 backdrop-blur-xl flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="text-xl font-bold text-lime-400 tracking-tighter font-['Space_Grotesk'] uppercase">TITAN ENGINE ERP</span>
<div className="hidden md:flex items-center bg-stone-800 px-3 py-1.5 rounded-lg border border-transparent focus-within:border-primary transition-all">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-stone-500 w-64" placeholder="Quick search..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg scale-95 active:opacity-80 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:bg-stone-800 transition-colors duration-200 rounded-lg scale-95 active:opacity-80 transition-transform">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-stone-700 bg-stone-800">
<img alt="User profile avatar" className="h-full w-full object-cover" data-alt="Close-up portrait of a professional male engineer in a technical workspace with soft blue industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfXEqXA79_FwN97ucITypV2bER6RMiuPw6_PMeCIccRU8cBjV4W0uvEdOzsb3ZCmVm2PJzvBb2zKYmtjypMphHPBBcryqLiwuhsSdITiPX1ZUaUbAH3D9iZfNANSeTWzX8qyQfoxRy4UBomJs1FoxO1gviSDa5jpGxu71mBHHjcF6GfVdacpPtLMb1MmRrwJZvda2YbTvB_hAnJoNfk1SJMv1OhkYi0bOO_rj-3IDg7jaa0CyZejxOldP1oH6bupSBaxv4W7HyAEg"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<aside className="fixed left-0 top-0 h-screen w-64 bg-stone-950 flex flex-col py-8 px-4 gap-2 hidden md:flex">
<div className="mb-10 px-2">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-lime-500 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-stone-950 font-bold" data-icon="settings_input_component">settings_input_component</span>
</div>
<div>
<h2 className="text-lg font-black text-white leading-tight">ENGINE OPS</h2>
<p className="text-[10px] text-stone-500 uppercase tracking-widest">High Performance Industrial</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span>
                New Sale
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-lime-400 border-r-4 border-lime-500 bg-stone-900/50 transition-all duration-300 translate-x-1" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
                Sales History
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                Customers
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Reports
            </a>
</nav>
<div className="mt-auto pt-6 space-y-1 border-t border-stone-800/50">
<button className="w-full mb-4 bg-lime-500 hover:bg-lime-400 text-stone-950 font-bold py-3 px-4 rounded font-['Inter'] text-xs uppercase tracking-widest transition-all active:scale-95">
                INITIATE SALE
            </button>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
                Support
            </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Inter'] text-sm font-semibold uppercase text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Logout
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 px-6 pb-12">
{/* Comentario remanente */}
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<div className="flex items-center gap-2 text-lime-500 mb-2">
<span className="text-xs font-bold uppercase tracking-[0.3em]">Compliance Module</span>
<div className="h-[1px] w-12 bg-lime-500/30"></div>
</div>
<h1 className="text-5xl md:text-6xl font-headline font-bold uppercase tracking-tighter text-on-surface leading-[0.9]">
                    Libro de <span className="text-lime-500">Ventas</span> Fiscal
                </h1>
<p className="mt-4 text-stone-400 font-body text-lg border-l-2 border-stone-800 pl-6">
                    SENIAT Compliance (Art. 58). Chronological record of operations for the fiscal period.
                </p>
</div>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-200 px-5 py-3 rounded-lg font-['Inter'] text-xs font-bold uppercase tracking-widest transition-all active:scale-95">
<span className="material-symbols-outlined text-sm" data-icon="picture_as_pdf">picture_as_pdf</span>
                    Export PDF
                </button>
<button className="flex items-center gap-2 bg-primary hover:bg-lime-600 text-white px-5 py-3 rounded-lg font-['Inter'] text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-primary/10">
<span className="material-symbols-outlined text-sm" data-icon="table_view">table_view</span>
                    Export Excel
                </button>
</div>
</header>
{/* Comentario remanente */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
{/* Comentario remanente */}
<div className="col-span-1 md:col-span-2 bg-surface-container-lowest p-6 rounded-xl flex flex-col justify-between">
<div>
<h3 className="font-headline text-xs font-bold uppercase tracking-widest text-stone-500 mb-4">Period Selection</h3>
<div className="flex flex-wrap gap-4">
<div className="flex-1 min-w-[150px]">
<label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">Fiscal Year</label>
<select className="w-full bg-stone-900 border-none rounded-lg text-sm text-white focus:ring-1 focus:ring-lime-500 py-2.5">
<option>2024</option>
<option>2023</option>
</select>
</div>
<div className="flex-1 min-w-[150px]">
<label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">Month</label>
<select className="w-full bg-stone-900 border-none rounded-lg text-sm text-white focus:ring-1 focus:ring-lime-500 py-2.5">
<option>October</option>
<option selected="">November</option>
<option>December</option>
</select>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-2 text-lime-400 text-xs font-bold">
<span className="material-symbols-outlined text-sm" data-icon="info">info</span>
<span>Currently viewing November 2024 (Art. 58 Validated)</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-lime-500">
<h3 className="font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">VAT Debit Total</h3>
<p className="text-3xl font-headline font-bold text-white mb-2">Bs. 42.105,50</p>
<div className="text-[10px] text-lime-400 font-bold uppercase flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                    +12.4% vs prev. month
                </div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-stone-800">
<h3 className="font-headline text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">Exempt Sales</h3>
<p className="text-3xl font-headline font-bold text-white mb-2">Bs. 8.420,00</p>
<div className="text-[10px] text-stone-500 font-bold uppercase">Representing 16.5% of total</div>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-surface-container-lowest rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-900/50">
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400">Invoice No.</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400">Date</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400">Customer RIF</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400">Customer Name</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">Exempt</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">Tax Base</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">VAT (16%)</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-stone-400 text-right">Retentions</th>
<th className="px-6 py-4 font-headline text-[10px] font-bold uppercase tracking-widest text-lime-500 text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-900">
<tr className="bg-surface hover:bg-stone-900 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-stone-200">INV-2024-001</td>
<td className="px-6 py-4 text-xs text-stone-400">01/11/2024</td>
<td className="px-6 py-4 text-xs text-stone-400">J-12345678-9</td>
<td className="px-6 py-4 text-sm font-semibold text-white">Siderúrgica del Turbio S.A.</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">0,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">12.500,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">2.000,00</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">1.500,00</td>
<td className="px-6 py-4 text-sm font-bold text-white text-right">13.000,00</td>
</tr>
<tr className="bg-stone-900/20 hover:bg-stone-900 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-stone-200">INV-2024-002</td>
<td className="px-6 py-4 text-xs text-stone-400">02/11/2024</td>
<td className="px-6 py-4 text-xs text-stone-400">J-98765432-1</td>
<td className="px-6 py-4 text-sm font-semibold text-white">Corp. Eléctrica Nacional</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">8.420,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">0,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">0,00</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">0,00</td>
<td className="px-6 py-4 text-sm font-bold text-white text-right">8.420,00</td>
</tr>
<tr className="bg-surface hover:bg-stone-900 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-stone-200">INV-2024-003</td>
<td className="px-6 py-4 text-xs text-stone-400">05/11/2024</td>
<td className="px-6 py-4 text-xs text-stone-400">G-20001234-5</td>
<td className="px-6 py-4 text-sm font-semibold text-white">Ministerio de Transporte</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">0,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">45.200,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">7.232,00</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">5.424,00</td>
<td className="px-6 py-4 text-sm font-bold text-white text-right">47.008,00</td>
</tr>
<tr className="bg-stone-900/20 hover:bg-stone-900 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-stone-200">INV-2024-004</td>
<td className="px-6 py-4 text-xs text-stone-400">08/11/2024</td>
<td className="px-6 py-4 text-xs text-stone-400">J-55443322-1</td>
<td className="px-6 py-4 text-sm font-semibold text-white">Inversiones Hidráulicas C.A.</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">0,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">22.150,00</td>
<td className="px-6 py-4 text-xs text-stone-200 text-right">3.544,00</td>
<td className="px-6 py-4 text-xs text-stone-400 text-right">0,00</td>
<td className="px-6 py-4 text-sm font-bold text-white text-right">25.694,00</td>
</tr>
</tbody>
<tfoot>
<tr className="bg-stone-900/80">
<td className="px-6 py-5 font-headline text-xs font-bold uppercase tracking-widest text-stone-400" colspan="4">Monthly Period Totals</td>
<td className="px-6 py-5 text-xs font-bold text-white text-right">Bs. 8.420,00</td>
<td className="px-6 py-5 text-xs font-bold text-white text-right">Bs. 79.850,00</td>
<td className="px-6 py-5 text-xs font-bold text-white text-right">Bs. 12.776,00</td>
<td className="px-6 py-5 text-xs font-bold text-white text-right">Bs. 6.924,00</td>
<td className="px-6 py-5 text-lg font-headline font-bold text-lime-400 text-right">Bs. 94.122,00</td>
</tr>
</tfoot>
</table>
</div>
</section>
{/* Comentario remanente */}
<footer className="mt-12 flex flex-col md:flex-row justify-between items-start gap-8 opacity-60">
<div className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500">
<p>TITAN ENGINE ERP - FISCAL MODULE v4.2.1</p>
<p>Digital Stamp: 0X992-B7F-1120-CC</p>
</div>
<div className="text-[10px] text-right uppercase font-bold tracking-[0.2em] text-stone-500">
<p>Certified Document under Venezuelan Law</p>
<p>Electronic signature valid for SENIAT audits</p>
</div>
</footer>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all md:hidden">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>

        </div>
    );
};
