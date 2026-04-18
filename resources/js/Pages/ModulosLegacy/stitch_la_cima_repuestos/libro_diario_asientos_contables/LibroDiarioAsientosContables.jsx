import React from 'react';
import { Link } from '@inertiajs/react';

export default function LibroDiarioAsientosContables() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 z-50 flex justify-between items-center w-full px-6 py-3 bg-stone-950/80 backdrop-blur-xl border-b-0 flat no shadows">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight">TITAN ERP: ACCOUNTING</span>
<div className="hidden md:flex items-center bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
<span className="material-symbols-outlined text-stone-500 text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs text-stone-300 font-label placeholder:text-stone-600 w-64 uppercase tracking-widest" placeholder="GLOBAL COMMAND SEARCH" type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:bg-stone-800/50 transition-colors duration-200 p-2 rounded active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 transition-colors duration-200 p-2 rounded active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-8 rounded bg-stone-800 flex items-center justify-center overflow-hidden border border-stone-700">
<img alt="User Profile" data-alt="close-up portrait of a professional accountant in a high-tech industrial office, cool lighting, metallic accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdf7LWIBeutoDA4LlP-bZqDpTOAm4KMWLz6x96C7FhpCoRxfXGXEE1dook2xL_6hoblFaiWPA3JApXJDnLSO3nZPQuWGiRSTC4H-UDxnkO-7aJuDPNOdmLNlF0r9DJXbQMS4h3rr4L1E0Yl733IcVcYfTpZbRFTTcTNLoH1JImxUQr3I10It5ONHmPh00OOjRwT8OSsY0FMKdWnPJJiwpA8KY97dOPkl4FvrYhtd2Vqib2GXWrnfYV0QRI8RV52MaBJgFG5ozvRqE"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<nav className="flex flex-col h-screen fixed left-0 top-0 pt-16 bg-stone-900 w-64 border-r-0 docked h-full flat no shadows z-40 hidden md:flex">
<div className="px-6 py-8">
<div className="flex items-center gap-3 mb-2">
<div className="bg-orange-500 w-2 h-8"></div>
<div>
<h2 className="text-orange-500 font-black font-['Inter'] text-sm font-semibold tracking-wide uppercase">FINANCE</h2>
<p className="text-[10px] text-stone-500 font-label uppercase tracking-[0.2em]">Precision Ledger v4.2</p>
</div>
</div>
<button className="w-full mt-6 bg-orange-500 text-stone-950 font-bold py-3 px-4 flex items-center justify-center gap-2 active:translate-x-1 duration-150 transition-all hover:bg-orange-400">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span className="font-headline tracking-tighter uppercase text-sm">NEW ENTRY</span>
</button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar px-2 space-y-1">
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 hover:bg-stone-800/80 transition-all font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 hover:bg-stone-800/80 transition-all font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span>Chart of Accounts</span>
</a>
<a className="bg-stone-800 text-orange-400 border-l-4 border-orange-500 py-3 px-4 flex items-center gap-3 font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Journal Entries</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 hover:bg-stone-800/80 transition-all font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Ledger</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 hover:bg-stone-800/80 transition-all font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="balance">balance</span>
<span>Trial Balance</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 hover:bg-stone-800/80 transition-all font-['Inter'] text-sm font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>Financial Statements</span>
</a>
</div>
<div className="p-4 border-t border-stone-800 bg-stone-950/30">
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-2 px-4 text-xs font-semibold" href="#">
<span className="material-symbols-outlined scale-75" data-icon="help">help</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-2 px-4 text-xs font-semibold" href="#">
<span className="material-symbols-outlined scale-75" data-icon="history">history</span>
<span>Logs</span>
</a>
</div>
</nav>
{/* Comentario remanente */}
<main className="md:ml-64 pt-20 pb-12 px-6 lg:px-10 bg-surface">
{/* Comentario remanente */}
<div className="mb-10">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div>
<span className="text-primary font-bold font-label tracking-widest text-[10px] uppercase">Transaction Ledger</span>
<h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase mt-1">General Journal</h1>
<div className="h-1 w-24 bg-primary mt-4"></div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
<div className="bg-surface-container-high p-4 flex flex-col min-w-[140px]">
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-tighter">Total Debits</span>
<span className="text-xl font-headline font-bold">$1,240,502.50</span>
</div>
<div className="bg-surface-container-high p-4 flex flex-col min-w-[140px]">
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-tighter">Total Credits</span>
<span className="text-xl font-headline font-bold">$1,240,502.50</span>
</div>
<div className="bg-primary/10 border-l-2 border-primary p-4 flex flex-col min-w-[140px]">
<span className="text-[10px] font-bold text-primary uppercase tracking-tighter">Auto-Generated</span>
<span className="text-xl font-headline font-bold">142</span>
</div>
<div className="bg-surface-container-high p-4 flex flex-col min-w-[140px]">
<span className="text-[10px] font-bold text-stone-500 uppercase tracking-tighter">Manual Entries</span>
<span className="text-xl font-headline font-bold">18</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-low p-6 mb-8 flex flex-wrap items-end gap-6 shadow-sm">
<div className="flex-1 min-w-[280px]">
<label className="block text-[10px] font-bold text-stone-500 uppercase mb-2 tracking-widest">Search by Account / Description</label>
<div className="relative">
<input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary h-12 px-10 text-sm font-label tracking-wide uppercase" placeholder="ENTER KEYWORDS..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-icon="search">search</span>
</div>
</div>
<div className="flex gap-4">
<div>
<label className="block text-[10px] font-bold text-stone-500 uppercase mb-2 tracking-widest">Date From</label>
<input className="bg-surface-container-highest border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm font-label uppercase" type="date"/>
</div>
<div>
<label className="block text-[10px] font-bold text-stone-500 uppercase mb-2 tracking-widest">Date To</label>
<input className="bg-surface-container-highest border-none focus:ring-2 focus:ring-primary h-12 px-4 text-sm font-label uppercase" type="date"/>
</div>
</div>
<button className="bg-on-background text-surface h-12 px-8 font-headline font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
                Apply Filter
            </button>
</div>
{/* Comentario remanente */}
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="bg-stone-900 text-stone-100 font-headline uppercase text-xs tracking-widest">
<th className="px-6 py-4 text-left font-medium">Date</th>
<th className="px-6 py-4 text-left font-medium">Seat #</th>
<th className="px-6 py-4 text-left font-medium">Account</th>
<th className="px-6 py-4 text-left font-medium">Description</th>
<th className="px-6 py-4 text-right font-medium">Debit</th>
<th className="px-6 py-4 text-right font-medium">Credit</th>
<th className="px-6 py-4 text-center font-medium">Type</th>
</tr>
</thead>
<tbody className="text-sm font-body">
{/* Comentario remanente */}
<tr className="bg-surface-container-lowest border-l-4 border-primary">
<td className="px-6 py-5 text-stone-500 font-medium">2023-10-24</td>
<td className="px-6 py-5 font-bold">#GJ-8842</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">1100-00</span>
<span className="text-[10px] text-stone-500 uppercase">Cash &amp; Bank</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600">Sales Receipt: INV-9901 / Customer: ForgeWorks Ltd</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 12,500.00</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-center">
<span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-sm border border-primary/20">Automatic</span>
</td>
</tr>
<tr className="bg-surface-container-lowest border-l-4 border-primary">
<td className="px-6 py-5 text-stone-500 font-medium opacity-0">2023-10-24</td>
<td className="px-6 py-5 font-bold opacity-0">#GJ-8842</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface pl-4">4000-01</span>
<span className="text-[10px] text-stone-500 uppercase pl-4">Product Sales - Domestic</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600 italic">Corresponding Credit Entry</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 12,500.00</td>
<td className="px-6 py-5 text-center opacity-0"></td>
</tr>
{/* Comentario remanente */}
<tr className="bg-surface-container border-l-4 border-stone-400">
<td className="px-6 py-5 text-stone-500 font-medium">2023-10-23</td>
<td className="px-6 py-5 font-bold">#GJ-8841</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">6100-05</span>
<span className="text-[10px] text-stone-500 uppercase">Office Maintenance</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600">Quarterly AC Service Adjustment - Manual Correction</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 850.00</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-center">
<span className="inline-block px-2 py-1 bg-stone-200 text-stone-600 text-[9px] font-black uppercase tracking-widest rounded-sm">Manual</span>
</td>
</tr>
<tr className="bg-surface-container border-l-4 border-stone-400">
<td className="px-6 py-5 text-stone-500 font-medium opacity-0">2023-10-23</td>
<td className="px-6 py-5 font-bold opacity-0">#GJ-8841</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface pl-4">1100-00</span>
<span className="text-[10px] text-stone-500 uppercase pl-4">Cash &amp; Bank</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600 italic">Corresponding Credit Entry</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 850.00</td>
<td className="px-6 py-5 text-center opacity-0"></td>
</tr>
{/* Comentario remanente */}
<tr className="bg-surface-container-lowest border-l-4 border-primary">
<td className="px-6 py-5 text-stone-500 font-medium">2023-10-22</td>
<td className="px-6 py-5 font-bold">#GJ-8840</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface">1500-00</span>
<span className="text-[10px] text-stone-500 uppercase">Inventory - Raw Materials</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600">Purchase Order: PO-4552 / Supplier: SteelCore Ind.</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 45,200.00</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-center">
<span className="inline-block px-2 py-1 bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest rounded-sm border border-primary/20">Automatic</span>
</td>
</tr>
<tr className="bg-surface-container-lowest border-l-4 border-primary">
<td className="px-6 py-5 text-stone-500 font-medium opacity-0">2023-10-22</td>
<td className="px-6 py-5 font-bold opacity-0">#GJ-8840</td>
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="font-bold text-on-surface pl-4">2100-00</span>
<span className="text-[10px] text-stone-500 uppercase pl-4">Accounts Payable</span>
</div>
</td>
<td className="px-6 py-5 text-stone-600 italic">Corresponding Credit Entry</td>
<td className="px-6 py-5 text-right font-mono text-stone-400">—</td>
<td className="px-6 py-5 text-right font-mono font-bold">$ 45,200.00</td>
<td className="px-6 py-5 text-center opacity-0"></td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<button className="p-2 border border-stone-300 hover:bg-stone-200"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
<div className="flex gap-1">
<span className="px-3 py-1 bg-on-background text-surface font-bold">1</span>
<span className="px-3 py-1 bg-surface-container hover:bg-stone-200 cursor-pointer">2</span>
<span className="px-3 py-1 bg-surface-container hover:bg-stone-200 cursor-pointer">3</span>
<span className="px-3 py-1">...</span>
<span className="px-3 py-1 bg-surface-container hover:bg-stone-200 cursor-pointer">24</span>
</div>
<button className="p-2 border border-stone-300 hover:bg-stone-200"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
</div>
<div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span>System Sync Active</span>
</div>
<div>Showing 50 of 1,242 entries</div>
<button className="flex items-center gap-1 text-primary hover:underline">
<span className="material-symbols-outlined text-[14px]" data-icon="download">download</span>
<span>Export Ledger (PDF/CSV)</span>
</button>
</div>
</div>
</main>
{/* Comentario remanente */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-stone-950 border-t border-stone-800 flex justify-around py-3 z-50">
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[10px] font-bold uppercase">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-orange-400">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="text-[10px] font-bold uppercase">Journal</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="text-[10px] font-bold uppercase">Ledger</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="text-[10px] font-bold uppercase">Stats</span>
</button>
</nav>
{/* Comentario remanente */}
<div className="md:hidden fixed bottom-20 right-6">
<button className="w-14 h-14 bg-orange-500 text-stone-950 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
<span className="material-symbols-outlined text-3xl font-bold" data-icon="add">add</span>
</button>
</div>

        </div>
    );
};
