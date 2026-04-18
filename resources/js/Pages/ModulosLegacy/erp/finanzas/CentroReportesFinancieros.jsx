import React from 'react';
import { Link } from '@inertiajs/react';

export default function CentroReportesFinancieros() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="hidden md:flex flex-col h-screen w-64 docked left-0 bg-stone-50 dark:bg-stone-900 shadow-[4px_0_24px_rgba(0,0,0,0.04)] fixed z-40 py-8 gap-2 border-r-0">
<div className="px-6 mb-8">
<h2 className="text-lg font-black text-stone-800 dark:text-stone-100 font-headline tracking-tighter uppercase">INDUSTRIAL FORGE</h2>
<p className="text-[10px] font-bold text-lime-600 dark:text-lime-400 tracking-widest mt-1 opacity-80">REPORTING SUITE V2.4</p>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-transform hover:translate-x-1 duration-150 group" href="/modulo/erp/inventario/CentroDeReportesDeInventario">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="inventory_2">inventory_2</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Inventory</span>
</Link>
<a className="flex items-center px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-transform hover:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="trending_up">trending_up</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Sales</span>
</a>
<Link className="flex items-center px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-transform hover:translate-x-1 duration-150" href="/modulo/erp/compras/DashboardDeComprasErp">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="shopping_cart">shopping_cart</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Purchases</span>
</Link>
<a className="flex items-center px-6 py-3 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 transition-transform hover:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="payments">payments</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Finance</span>
</a>
<a className="flex items-center px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-transform hover:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="account_balance">account_balance</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Accounting</span>
</a>
<a className="flex items-center px-6 py-3 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 transition-transform hover:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined mr-3 text-lg" data-icon="groups">groups</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">HR</span>
</a>
</nav>
<div className="px-6 mt-auto space-y-4">
<button className="w-full bg-primary text-on-primary text-[10px] font-extrabold tracking-widest py-3 px-4 flex items-center justify-center gap-2 hover:bg-primary-container hover:text-on-primary-container transition-all scale-98-on-click">
<span className="material-symbols-outlined text-sm" data-icon="file_download">file_download</span>
                EXPORT ALL DATA
            </button>
<div className="flex flex-col gap-1 border-t border-stone-200 dark:border-stone-800 pt-4 pb-4">
<a className="flex items-center text-stone-500 hover:text-lime-600 text-[10px] font-bold tracking-widest uppercase transition-colors" href="#">
<span className="material-symbols-outlined text-sm mr-2" data-icon="support_agent">support_agent</span> Support
                </a>
<a className="flex items-center text-stone-500 hover:text-lime-600 text-[10px] font-bold tracking-widest uppercase transition-colors" href="#">
<span className="material-symbols-outlined text-sm mr-2" data-icon="history_edu">history_edu</span> Logs
                </a>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 relative">
{/* Comentario remanente */}
<header className="sticky top-0 z-50 bg-surface dark:bg-stone-950/80 backdrop-blur-xl flex justify-between items-center w-full px-6 py-4 mx-auto tonal-shift-no-borders bg-stone-100 dark:bg-stone-900">
<div className="flex items-center gap-8">
<span className="font-['Space_Grotesk'] uppercase tracking-tight text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50">FINANCE REPORTING CENTER</span>
<div className="hidden lg:flex items-center bg-surface-container-high px-4 py-1.5 rounded-full border-none">
<span className="material-symbols-outlined text-stone-400 text-lg mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs font-semibold placeholder:text-stone-400 w-48 uppercase tracking-tighter" placeholder="Search Ledgers..." type="text"/>
</div>
</div>
<nav className="hidden xl:flex items-center gap-6">
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight text-xs font-bold hover:text-lime-500 transition-colors" href="#">Dashboard</a>
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight text-xs font-bold hover:text-lime-500 transition-colors" href="#">Analytics</a>
<a className="text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400 pb-1 font-['Space_Grotesk'] uppercase tracking-tight text-xs font-bold" href="#">Reports</a>
<a className="text-stone-500 dark:text-stone-400 font-['Space_Grotesk'] uppercase tracking-tight text-xs font-bold hover:text-lime-500 transition-colors" href="#">Settings</a>
</nav>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-500 hover:text-lime-600 transition-colors scale-98-on-click relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-error rounded-full"></span>
</button>
<button className="p-2 text-stone-500 hover:text-lime-600 transition-colors scale-98-on-click">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-container">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="professional portrait of a senior financial analyst in a modern office setting with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe42fUkrjhvmK3DZ3j_jvedDN0Hm8k6ZLgaVaJ02evniV26hestvRuDU6LcNhDHA9XPNynP8SWQoRvDpQb-i3iO96tBWIGJXaQ0AQ9FUd2N_XF4AkHZFjT_XnpC4gguB9voapk8AclBJmSGCoI_JTS_9nbCTgqqciQei_iTtbVjMn5tr4-m5PDecCWClPgH6UGffUFJXa8c99ch-e2Foe6YqzpxXSr05bkGiVbBM7fLp6fDgJrEh_7bwxrYbGzDV2zKKuvIIaiASs"/>
</div>
</div>
</header>
<div className="p-6 lg:p-8 space-y-8">
{/* Comentario remanente */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between shadow-[24px_24px_40px_rgba(26,28,28,0.04)]">
<span className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-70">Current Ratio</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-headline font-bold">2.41</span>
<span className="text-xs font-bold text-lime-600 uppercase tracking-tighter">+12%</span>
</div>
<div className="mt-2 h-1 w-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary" ></div>
</div>
<p className="mt-4 text-[10px] font-semibold text-stone-500 uppercase">Optimal Threshold: 2.0</p>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between shadow-[24px_24px_40px_rgba(26,28,28,0.04)] border-l-4 border-primary">
<span className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-70">Quick Ratio (Acid Test)</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-headline font-bold">1.85</span>
<span className="text-xs font-bold text-lime-600 uppercase tracking-tighter">+4%</span>
</div>
<div className="mt-2 h-1 w-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container" ></div>
</div>
<p className="mt-4 text-[10px] font-semibold text-stone-500 uppercase">Liquidity: Strong</p>
</div>
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between shadow-[24px_24px_40px_rgba(26,28,28,0.04)]">
<span className="text-[10px] font-black uppercase tracking-widest text-secondary opacity-70">Operating Cash Flow</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-headline font-bold">$1.2M</span>
<span className="text-xs font-bold text-stone-400 uppercase tracking-tighter">Stable</span>
</div>
<div className="mt-2 h-1 w-full bg-surface-container overflow-hidden">
<div className="h-full bg-stone-400" ></div>
</div>
<p className="mt-4 text-[10px] font-semibold text-stone-500 uppercase">Monthly Avg Performance</p>
</div>
<div className="bg-error-container/20 p-6 flex flex-col justify-between shadow-[24px_24px_40px_rgba(26,28,28,0.04)] border-l-4 border-error">
<span className="text-[10px] font-black uppercase tracking-widest text-error opacity-70">Budget Deviation</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-headline font-bold text-error">14.2%</span>
<span className="material-symbols-outlined text-error text-lg" data-icon="warning">warning</span>
</div>
<div className="mt-2 h-1 w-full bg-surface-container overflow-hidden">
<div className="h-full bg-error" ></div>
</div>
<p className="mt-4 text-[10px] font-bold text-error uppercase">Action Required: R&amp;D Dept</p>
</div>
</section>
{/* Comentario remanente */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
{/* Comentario remanente */}
<div className="lg:col-span-8 bg-surface-container-lowest p-8 shadow-[24px_24px_40px_rgba(26,28,28,0.04)] relative overflow-hidden">
<div className="flex justify-between items-start mb-10">
<div>
<h3 className="text-2xl font-headline font-bold uppercase tracking-tighter">Cash Flow Statement</h3>
<p className="text-xs font-bold text-stone-500 uppercase tracking-widest mt-1">Direct vs Indirect Analysis Method</p>
</div>
<div className="flex gap-2">
<button className="text-[10px] font-bold border border-stone-200 px-3 py-1.5 uppercase hover:bg-stone-50 transition-colors">Direct</button>
<button className="text-[10px] font-bold bg-stone-900 text-stone-50 px-3 py-1.5 uppercase transition-colors">Indirect</button>
</div>
</div>
{/* Comentario remanente */}
<div className="relative h-64 w-full flex items-end gap-2 px-2 border-b border-stone-100">
{/* Comentario remanente */}
<div className="flex-1 bg-primary/20 h-[60%] group relative transition-all hover:bg-primary/40">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] px-2 py-1 hidden group-hover:block">$450k</div>
</div>
<div className="flex-1 bg-primary/40 h-[75%] group relative transition-all hover:bg-primary/60"></div>
<div className="flex-1 bg-primary h-[90%] group relative transition-all"></div>
<div className="flex-1 bg-primary-container h-[45%] group relative transition-all"></div>
<div className="flex-1 bg-primary/30 h-[80%] group relative transition-all"></div>
<div className="flex-1 bg-primary h-[100%] group relative transition-all"></div>
<div className="flex-1 bg-stone-200 h-[30%] group relative transition-all"></div>
<div className="flex-1 bg-stone-300 h-[55%] group relative transition-all"></div>
<div className="flex-1 bg-primary/80 h-[85%] group relative transition-all"></div>
<div className="flex-1 bg-primary/50 h-[65%] group relative transition-all"></div>
<div className="flex-1 bg-primary-container/80 h-[40%] group relative transition-all"></div>
<div className="flex-1 bg-stone-900 h-[70%] group relative transition-all"></div>
</div>
<div className="flex justify-between mt-4">
<span className="text-[9px] font-bold text-stone-400 uppercase">Q3 2023</span>
<span className="text-[9px] font-bold text-stone-400 uppercase">Fiscal Period Finalized Oct 14</span>
<span className="text-[9px] font-bold text-stone-400 uppercase">Current Forecast</span>
</div>
{/* Comentario remanente */}
<div className="mt-8 grid grid-cols-2 gap-8 border-t border-stone-100 pt-8">
<div>
<span className="text-[10px] font-black uppercase text-secondary">Operating Activities</span>
<div className="flex justify-between items-center mt-3">
<span className="text-xs font-semibold text-stone-600">Net Income Adjustment</span>
<span className="text-xs font-bold text-stone-900">+$242,500</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-semibold text-stone-600">Depreciation / Amortization</span>
<span className="text-xs font-bold text-stone-900">+$88,000</span>
</div>
</div>
<div>
<span className="text-[10px] font-black uppercase text-secondary">Financing Activities</span>
<div className="flex justify-between items-center mt-3">
<span className="text-xs font-semibold text-stone-600">Dividend Payments</span>
<span className="text-xs font-bold text-error">-($45,000)</span>
</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-semibold text-stone-600">Loan Repayments</span>
<span className="text-xs font-bold text-error">-($112,000)</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="lg:col-span-4 space-y-6">
<div className="bg-stone-900 text-stone-50 p-8 shadow-[24px_24px_40px_rgba(0,0,0,0.1)] relative">
<h3 className="text-lg font-headline font-bold uppercase tracking-tighter mb-6">AR Aging Summary</h3>
<div className="space-y-6">
<div className="flex flex-col gap-1">
<div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
<span>Current (0-30 Days)</span>
<span>72%</span>
</div>
<div className="h-1.5 w-full bg-stone-800">
<div className="h-full bg-lime-400" ></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
<span>Overdue (31-60 Days)</span>
<span>18%</span>
</div>
<div className="h-1.5 w-full bg-stone-800">
<div className="h-full bg-lime-600" ></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
<span>Critical (61-90+ Days)</span>
<span>10%</span>
</div>
<div className="h-1.5 w-full bg-stone-800">
<div className="h-full bg-error" ></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-stone-800">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Total Outstanding Balance</p>
<p className="text-3xl font-headline font-bold">$3,842,900.00</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-highest p-8">
<h3 className="text-sm font-headline font-bold uppercase tracking-widest mb-6">Revenue vs Expenses</h3>
<div className="flex items-center gap-4 mb-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-primary"></span>
<span className="text-[10px] font-bold uppercase">Revenue</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-stone-400"></span>
<span className="text-[10px] font-bold uppercase">Expenses</span>
</div>
</div>
{/* Comentario remanente */}
<div className="flex items-end gap-1 h-32">
<div className="w-2 bg-primary" ></div>
<div className="w-2 bg-stone-400" ></div>
<div className="w-1"></div>
<div className="w-2 bg-primary" ></div>
<div className="w-2 bg-stone-400" ></div>
<div className="w-1"></div>
<div className="w-2 bg-primary" ></div>
<div className="w-2 bg-stone-400" ></div>
<div className="w-1"></div>
<div className="w-2 bg-primary" ></div>
<div className="w-2 bg-stone-400" ></div>
</div>
<button className="w-full mt-6 py-3 border-2 border-stone-300 text-[10px] font-black uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all scale-98-on-click">View Breakdown</button>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-surface-container-lowest shadow-[24px_24px_40px_rgba(26,28,28,0.04)] overflow-hidden">
<div className="px-8 py-6 flex justify-between items-center bg-stone-50 border-b border-stone-100">
<h3 className="text-sm font-headline font-bold uppercase tracking-widest">Active Accounts Receivable Aging Ledger</h3>
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold text-stone-400 uppercase">Sort by: Date</span>
<span className="material-symbols-outlined text-stone-400 cursor-pointer" data-icon="filter_list">filter_list</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-stone-50 border-b border-stone-100">
<th className="px-8 py-4 text-[10px] font-black text-secondary uppercase tracking-widest">Entity Name</th>
<th className="px-8 py-4 text-[10px] font-black text-secondary uppercase tracking-widest">Inv. Number</th>
<th className="px-8 py-4 text-[10px] font-black text-secondary uppercase tracking-widest">Status</th>
<th className="px-8 py-4 text-[10px] font-black text-secondary uppercase tracking-widest">Amount</th>
<th className="px-8 py-4 text-[10px] font-black text-secondary uppercase tracking-widest text-right">Age</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center font-headline font-bold text-xs">TH</div>
<span className="text-xs font-bold uppercase">Turbine Heavy Industries</span>
</div>
</td>
<td className="px-8 py-4 font-mono text-[11px] text-stone-500">#INV-88219-B</td>
<td className="px-8 py-4">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[9px] font-black uppercase tracking-tighter">Current</span>
</td>
<td className="px-8 py-4 text-xs font-bold">$124,500.00</td>
<td className="px-8 py-4 text-xs font-mono font-bold text-right">12d</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-stone-50/50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center font-headline font-bold text-xs">AS</div>
<span className="text-xs font-bold uppercase">Aerospace Solutions Ltd</span>
</div>
</td>
<td className="px-8 py-4 font-mono text-[11px] text-stone-500">#INV-90122-C</td>
<td className="px-8 py-4">
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[9px] font-black uppercase tracking-tighter">Current</span>
</td>
<td className="px-8 py-4 text-xs font-bold">$98,000.00</td>
<td className="px-8 py-4 text-xs font-mono font-bold text-right">18d</td>
</tr>
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center font-headline font-bold text-xs">FM</div>
<span className="text-xs font-bold uppercase">Forge Manufacturing Gmbh</span>
</div>
</td>
<td className="px-8 py-4 font-mono text-[11px] text-stone-500">#INV-77121-A</td>
<td className="px-8 py-4">
<span className="px-2 py-0.5 bg-error text-white text-[9px] font-black uppercase tracking-tighter">Critical</span>
</td>
<td className="px-8 py-4 text-xs font-bold">$442,150.00</td>
<td className="px-8 py-4 text-xs font-mono font-bold text-right text-error">94d</td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-stone-50/50 transition-colors">
<td className="px-8 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center font-headline font-bold text-xs">PC</div>
<span className="text-xs font-bold uppercase">Precision Castings Inc</span>
</div>
</td>
<td className="px-8 py-4 font-mono text-[11px] text-stone-500">#INV-88331-Z</td>
<td className="px-8 py-4">
<span className="px-2 py-0.5 bg-stone-900 text-white text-[9px] font-black uppercase tracking-tighter">30+ Days</span>
</td>
<td className="px-8 py-4 text-xs font-bold">$21,200.00</td>
<td className="px-8 py-4 text-xs font-mono font-bold text-right">42d</td>
</tr>
</tbody>
</table>
</div>
<div className="px-8 py-4 bg-stone-50 border-t border-stone-100 flex justify-end">
<button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 hover:translate-x-2 transition-transform">View Full Ledger <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></button>
</div>
</section>
</div>
{/* Comentario remanente */}
<footer className="sticky bottom-0 bg-stone-900 text-stone-400 py-2 px-6 flex justify-between items-center z-50">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
<span className="text-[9px] font-bold uppercase tracking-widest">System Online</span>
</div>
<span className="text-[9px] font-bold uppercase tracking-widest opacity-50">Last Sync: 14:22:10 EST</span>
</div>
<div className="flex items-center gap-4">
<span className="text-[9px] font-bold uppercase tracking-widest">Forge Engine V2.4.1</span>
<span className="material-symbols-outlined text-sm" data-icon="terminal">terminal</span>
</div>
</footer>
</main>

        </div>
    );
};
