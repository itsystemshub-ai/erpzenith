import React from 'react';
import { Link } from '@inertiajs/react';

export default function BalanceDeComprobaciNSumasYSaldos() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<nav className="fixed top-0 z-50 w-full px-6 py-3 flex justify-between items-center bg-stone-950/80 backdrop-blur-xl border-b-0 transition-all">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight">TITAN ERP: ACCOUNTING</span>
<div className="hidden md:flex items-center bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
<span className="material-symbols-outlined text-stone-400 text-sm mr-2">search</span>
<input className="bg-transparent border-none text-sm text-stone-200 focus:ring-0 w-64 placeholder-stone-500" placeholder="Search accounts..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-stone-400 hover:bg-stone-800/50 transition-colors duration-200 rounded-lg active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-stone-400 hover:bg-stone-800/50 transition-colors duration-200 rounded-lg active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center overflow-hidden">
<img alt="User Profile" data-alt="close-up professional portrait of a financial officer in a modern industrial office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Rf9xYoPU2mhEyYDPuHFtEJ6xagQJbHdTEdxHuCwiM0E6EuW4pGB-e0fzC3UOC1aZ9njANkI2W8bLqo_kYFDMeIzgKjWnfMDDPbPXREEfaPnTTbhEz6ceyw9yvI5SvsxUebk4D0IeXeph2d1s_FB3qlqwxeM7r_6AQxXUbIjcYmmmGg7YFH2Vxje6chVEfUTtQ81wRZHIMUbG4R4nSfH0VioW-Yx0FCVXVkHYsgRwPAJ58-1FlsqWwjHMkWxZIZJsJpC53G6Su88"/>
</div>
</div>
</nav>
{/* Comentario remanente */}
<aside className="flex flex-col h-screen fixed left-0 top-0 pt-16 bg-stone-900 w-64 border-r-0 z-40 hidden md:flex">
<div className="px-6 py-8 border-b border-stone-800/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-900 font-bold">account_balance</span>
</div>
<div>
<div className="text-orange-500 font-black font-['Inter'] text-sm font-semibold tracking-wide uppercase">FINANCE</div>
<div className="text-[10px] text-stone-500 font-mono">Precision Ledger v4.2</div>
</div>
</div>
</div>
<nav className="flex-1 py-6 overflow-y-auto">
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Dashboard</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Chart of Accounts</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Journal Entries</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Ledger</span>
</a>
<a className="flex items-center gap-4 bg-stone-800 text-orange-400 border-l-4 border-orange-500 py-3 px-6 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">balance</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Trial Balance</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Financial Statements</span>
</a>
</nav>
<div className="p-6">
<button className="w-full bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold py-3 rounded flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined">add</span>
<span className="text-xs uppercase tracking-widest">NEW ENTRY</span>
</button>
</div>
<div className="px-6 py-6 border-t border-stone-800/50 mt-auto">
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-2 hover:bg-stone-800/80 transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Support</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-2 hover:bg-stone-800/80 transition-all" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-['Inter'] text-sm font-semibold tracking-wide">Logs</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 px-8 pb-12">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<nav className="flex text-[10px] uppercase tracking-[0.2em] text-secondary mb-2">
<span className="opacity-50">FINANCE</span>
<span className="mx-2 opacity-30">/</span>
<span className="text-primary font-bold">TRIAL BALANCE</span>
</nav>
<h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-on-background leading-none">Balance de Comprobación</h1>
<p className="mt-4 text-secondary max-w-xl font-body leading-relaxed">
                    Financial period overview for <span className="text-on-background font-semibold">Q3 Fiscal Year 2024</span>. 
                    Ensuring equilibrium through high-precision ledger validation and automated reconciliation of all active accounts.
                </p>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-surface-container rounded-lg p-1">
<button className="flex items-center gap-2 px-4 py-2 rounded bg-surface-container-lowest text-on-surface text-xs font-bold uppercase tracking-wider shadow-sm transition-all">
<span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                        PDF
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded text-secondary text-xs font-bold uppercase tracking-wider hover:text-on-surface transition-all">
<span className="material-symbols-outlined text-sm">table_view</span>
                        EXCEL
                    </button>
</div>
<button className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs uppercase tracking-[0.15em] px-6 py-3 rounded transition-all flex items-center gap-2 group">
<span className="material-symbols-outlined text-sm">lock</span>
                    CLOSE MONTH
                </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Accounts Verified</span>
<span className="material-symbols-outlined text-primary">done_all</span>
</div>
<div>
<div className="text-3xl font-bold font-headline tracking-tighter">142</div>
<div className="text-[10px] text-primary font-bold uppercase mt-1">Status: Operational</div>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-stone-900 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Total Ledger Value</span>
<span className="material-symbols-outlined text-stone-400">payments</span>
</div>
<div>
<div className="text-3xl font-bold font-headline tracking-tighter">$4,289,500.00</div>
<div className="text-[10px] text-stone-400 font-bold uppercase mt-1">Currency: USD</div>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-orange-500 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Integrity Check</span>
<span className="material-symbols-outlined text-orange-500">verified_user</span>
</div>
<div>
<div className="text-3xl font-bold font-headline tracking-tighter text-orange-500">BALANCED</div>
<div className="text-[10px] text-stone-400 font-bold uppercase mt-1">Delta: 0.000</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-highest text-on-surface-variant">
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest w-24">Code</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest">Account Description</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Opening Balance</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Debit Total</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Credit Total</th>
<th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-right">Closing Balance</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10">
<tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors group">
<td className="px-6 py-4 text-[11px] font-mono text-secondary font-bold">10100</td>
<td className="px-6 py-4 text-sm font-bold text-on-background">CASH AND BANK EQUIVALENTS</td>
<td className="px-6 py-4 text-sm font-mono text-right">$450,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-primary font-bold">$125,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-error">$85,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right font-bold">$490,000.00</td>
</tr>
<tr className="bg-surface hover:bg-surface-bright transition-colors group">
<td className="px-6 py-4 text-[11px] font-mono text-secondary font-bold">11200</td>
<td className="px-6 py-4 text-sm font-bold text-on-background">ACCOUNTS RECEIVABLE</td>
<td className="px-6 py-4 text-sm font-mono text-right">$820,500.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-primary font-bold">$340,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-error">$210,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right font-bold">$950,500.00</td>
</tr>
<tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors group">
<td className="px-6 py-4 text-[11px] font-mono text-secondary font-bold">12100</td>
<td className="px-6 py-4 text-sm font-bold text-on-background">INVENTORY: RAW MATERIALS</td>
<td className="px-6 py-4 text-sm font-mono text-right">$1,200,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-primary font-bold">$450,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-error">$600,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right font-bold">$1,050,000.00</td>
</tr>
<tr className="bg-surface hover:bg-surface-bright transition-colors group">
<td className="px-6 py-4 text-[11px] font-mono text-secondary font-bold">20100</td>
<td className="px-6 py-4 text-sm font-bold text-on-background">ACCOUNTS PAYABLE</td>
<td className="px-6 py-4 text-sm font-mono text-right">$650,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-primary font-bold">$180,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-error">$240,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right font-bold">$710,000.00</td>
</tr>
<tr className="bg-surface-container-lowest hover:bg-surface-bright transition-colors group">
<td className="px-6 py-4 text-[11px] font-mono text-secondary font-bold">30100</td>
<td className="px-6 py-4 text-sm font-bold text-on-background">RETAINED EARNINGS</td>
<td className="px-6 py-4 text-sm font-mono text-right">$1,169,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-primary font-bold">$0.00</td>
<td className="px-6 py-4 text-sm font-mono text-right text-error">$85,000.00</td>
<td className="px-6 py-4 text-sm font-mono text-right font-bold">$1,084,000.00</td>
</tr>
</tbody>
<tfoot>
<tr className="bg-stone-900 text-stone-100">
<td className="px-6 py-5" colspan="2">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-xs font-black uppercase tracking-[0.2em] font-headline">TOTALS VALIDATED</span>
</div>
</td>
<td className="px-6 py-5 text-right font-mono font-bold text-sm">$4,289,500.00</td>
<td className="px-6 py-5 text-right font-mono font-bold text-sm text-primary-fixed">$1,095,000.00</td>
<td className="px-6 py-5 text-right font-mono font-bold text-sm text-primary-fixed">$1,095,000.00</td>
<td className="px-6 py-5 text-right font-mono font-bold text-sm">$4,289,500.00</td>
</tr>
</tfoot>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 bg-primary-container/10 p-10 rounded-2xl border-2 border-dashed border-primary/30">
<div className="flex items-center gap-6">
<div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-4xl" >security</span>
</div>
<div>
<h3 className="text-2xl font-bold uppercase tracking-tight text-on-background font-headline">Partida Doble Validation</h3>
<p className="text-sm text-secondary font-body mt-1">The fundamental accounting equation is satisfied for this period.</p>
</div>
</div>
<div className="flex items-center gap-8 divide-x divide-outline-variant/30">
<div className="text-center">
<div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">Σ Total Debits</div>
<div className="text-3xl font-headline font-bold text-on-background tracking-tighter">$1,095,000.00</div>
</div>
<div className="pl-8 flex flex-col items-center">
<span className="material-symbols-outlined text-primary text-3xl font-bold">equalizer</span>
<span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">VERIFIED</span>
</div>
<div className="pl-8 text-center">
<div className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mb-1">Σ Total Credits</div>
<div className="text-3xl font-headline font-bold text-on-background tracking-tighter">$1,095,000.00</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-20 pt-10 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-4">
<div className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">Titan Accounting Module</div>
<div className="w-1 h-1 rounded-full bg-outline-variant"></div>
<div className="text-[10px] font-medium text-stone-400">Node-A19 // Ledger ID: 899321</div>
</div>
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Last Sync</span>
<span className="text-xs font-mono font-bold">2024-10-27 09:42:15 GMT</span>
</div>
<div className="flex flex-col">
<span className="text-[9px] font-black uppercase text-stone-400 tracking-widest">Compliance</span>
<span className="text-xs font-bold uppercase text-primary">ISO-9001 VALIDATED</span>
</div>
</div>
</footer>
</main>
{/* Comentario remanente */}

        </div>
    );
};
