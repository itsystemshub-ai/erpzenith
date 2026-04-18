import React from 'react';
import { Link } from '@inertiajs/react';

export default function PlanDeCuentasContable() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 left-0 w-full z-50 bg-stone-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 border-b-0 flat no shadows">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight">TITAN ERP: ACCOUNTING</span>
<div className="hidden md:flex items-center bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
<span className="material-symbols-outlined text-stone-400 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm text-stone-200 placeholder-stone-500 w-64" placeholder="Search accounts..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-orange-400 hover:bg-stone-800/50 p-2 rounded transition-colors active:scale-95">notifications</button>
<button className="material-symbols-outlined text-orange-400 hover:bg-stone-800/50 p-2 rounded transition-colors active:scale-95">settings</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-orange-500/30">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="professional headshot of a financial manager in a modern industrial office setting, soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEBd3Ol4W7h7n_O0WotxF1x9DEw41ku6CxSVXRiriAwSSRZqVq8iEbubAkIoiU-YyaqQbX0ciWQjur_uVz7O-nQHoTuLuEKweFmQtNhMT7lkdjmuI3C2YbhBGFAH3RcEX8sUVLwYzJXZu0LmQAKt53ElSYp1_u1GYd96nhF0zpkyrlwAkubBtTkn41aTChAXozc17TdSKM0XZO8Oo5O5MZKyEjUczMlmprdjBsojiidGuk5lSHUlXp5grq50CYG2_k9ZZdFegugEo"/>
</div>
</div>
</header>
<div className="flex pt-16 min-h-screen">
{/* Comentario remanente */}
<aside className="hidden md:flex flex-col h-screen fixed left-0 top-0 pt-16 bg-stone-900 w-64 border-r-0 flat no shadows overflow-y-auto">
<div className="px-6 py-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-900" >precision_manufacturing</span>
</div>
<div>
<h2 className="text-orange-500 font-black font-headline tracking-wide leading-none">FINANCE</h2>
<p className="text-[10px] text-stone-500 font-medium uppercase tracking-widest">Precision Ledger v4.2</p>
</div>
</div>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide hover:bg-stone-800/80 transition-all active:translate-x-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 bg-stone-800 text-orange-400 border-l-4 border-orange-500 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide active:translate-x-1" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span>Chart of Accounts</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide hover:bg-stone-800/80 transition-all active:translate-x-1" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span>Journal Entries</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide hover:bg-stone-800/80 transition-all active:translate-x-1" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span>Ledger</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide hover:bg-stone-800/80 transition-all active:translate-x-1" href="#">
<span className="material-symbols-outlined">balance</span>
<span>Trial Balance</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-3 px-4 font-['Inter'] text-sm font-semibold tracking-wide hover:bg-stone-800/80 transition-all active:translate-x-1" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Financial Statements</span>
</a>
</nav>
<div className="px-4 py-6 mt-auto">
<button className="w-full bg-primary py-3 flex items-center justify-center gap-2 text-on-primary font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">add</span>
<span>NEW ENTRY</span>
</button>
</div>
<div className="p-2 border-t border-stone-800/50 space-y-1 mb-16">
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-2 px-4 text-xs font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined text-base">help</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 text-stone-500 hover:text-stone-200 py-2 px-4 text-xs font-semibold tracking-wide" href="#">
<span className="material-symbols-outlined text-base">history</span>
<span>Logs</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 p-8 bg-surface">
{/* Comentario remanente */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
<div className="space-y-1">
<div className="flex items-center gap-2 mb-2">
<span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 font-bold tracking-widest uppercase">Precision Forge System</span>
</div>
<h1 className="text-4xl font-headline font-bold uppercase tracking-tight text-on-background">Chart of Accounts</h1>
<p className="text-secondary font-medium tracking-tight">MAYOR DE REPUESTO LA CIMA <span className="mx-2">|</span> Plan de Cuentas Jerárquico</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-surface-container-high border-0 px-6 py-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-all active:scale-95">
<span className="material-symbols-outlined text-sm">upload_file</span>
                        Export to Excel
                    </button>
<button className="bg-primary text-on-primary px-6 py-2.5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all active:scale-95 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-sm">add_circle</span>
                        Add Account
                    </button>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-12">
<div className="bg-surface-container p-6 border-l-4 border-primary">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Total Assets</p>
<p className="text-2xl font-headline font-bold text-on-background">$2,450,892.40</p>
</div>
<div className="bg-surface-container-low p-6">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Total Liabilities</p>
<p className="text-2xl font-headline font-bold text-on-background">$842,110.15</p>
</div>
<div className="bg-surface-container-low p-6">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Total Equity</p>
<p className="text-2xl font-headline font-bold text-on-background">$1,608,782.25</p>
</div>
<div className="bg-surface-container-low p-6">
<p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-1">Account Count</p>
<p className="text-2xl font-headline font-bold text-on-background">142 Entries</p>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-lowest overflow-hidden">
{/* Comentario remanente */}
<div className="grid grid-cols-12 bg-on-background text-background py-4 px-6 text-[11px] font-bold uppercase tracking-widest">
<div className="col-span-2">Account Code</div>
<div className="col-span-4">Account Name</div>
<div className="col-span-2">Type</div>
<div className="col-span-2 text-right">Current Balance</div>
<div className="col-span-2 text-right">Actions</div>
</div>
{/* Comentario remanente */}
{/* Comentario remanente */}
<div className="grid grid-cols-12 py-4 px-6 border-b border-surface-container text-sm font-bold bg-surface-container-low">
<div className="col-span-2 tracking-tighter">1.0.00.00</div>
<div className="col-span-4 uppercase">ACTIVOS</div>
<div className="col-span-2">ASSET</div>
<div className="col-span-2 text-right">$2,450,892.40</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary">
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">visibility</span>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 py-3.5 px-6 border-b border-surface-container text-sm font-semibold bg-surface-container-lowest pl-10">
<div className="col-span-2 tracking-tighter">1.1.00.00</div>
<div className="col-span-4 uppercase">Activos Corrientes</div>
<div className="col-span-2">ASSET</div>
<div className="col-span-2 text-right">$1,120,440.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary">
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">visibility</span>
</div>
</div>
{/* Comentario remanente */}
<div className="account-row grid grid-cols-12 py-3 px-6 border-b border-surface-container text-xs pl-16">
<div className="col-span-2 font-mono text-secondary">1.1.01.01</div>
<div className="col-span-4 font-medium">Caja General - Principal</div>
<div className="col-span-2 text-secondary">LIQUID ASSET</div>
<div className="col-span-2 text-right font-bold">$12,450.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary/50">
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">delete</span>
</div>
</div>
<div className="account-row grid grid-cols-12 py-3 px-6 border-b border-surface-container text-xs pl-16">
<div className="col-span-2 font-mono text-secondary">1.1.01.02</div>
<div className="col-span-4 font-medium">Bancos - Operativo Central</div>
<div className="col-span-2 text-secondary">LIQUID ASSET</div>
<div className="col-span-2 text-right font-bold">$458,990.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary/50">
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">delete</span>
</div>
</div>
<div className="account-row grid grid-cols-12 py-3 px-6 border-b border-surface-container text-xs pl-16">
<div className="col-span-2 font-mono text-secondary">1.1.05.01</div>
<div className="col-span-4 font-medium">Inventario de Repuestos Pesados</div>
<div className="col-span-2 text-secondary">INVENTORY</div>
<div className="col-span-2 text-right font-bold">$649,000.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary/50">
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">delete</span>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 py-4 px-6 border-b border-surface-container text-sm font-bold bg-surface-container-low mt-4">
<div className="col-span-2 tracking-tighter">2.0.00.00</div>
<div className="col-span-4 uppercase">PASIVOS</div>
<div className="col-span-2">LIABILITY</div>
<div className="col-span-2 text-right">$842,110.15</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary">
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">visibility</span>
</div>
</div>
<div className="grid grid-cols-12 py-3.5 px-6 border-b border-surface-container text-sm font-semibold bg-surface-container-lowest pl-10">
<div className="col-span-2 tracking-tighter">2.1.00.00</div>
<div className="col-span-4 uppercase">Pasivos a Corto Plazo</div>
<div className="col-span-2">LIABILITY</div>
<div className="col-span-2 text-right">$312,400.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary">
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">visibility</span>
</div>
</div>
<div className="account-row grid grid-cols-12 py-3 px-6 border-b border-surface-container text-xs pl-16">
<div className="col-span-2 font-mono text-secondary">2.1.01.01</div>
<div className="col-span-4 font-medium">Proveedores Nacionales</div>
<div className="col-span-2 text-secondary">PAYABLE</div>
<div className="col-span-2 text-right font-bold">$198,000.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary/50">
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">delete</span>
</div>
</div>
<div className="account-row grid grid-cols-12 py-3 px-6 border-b border-surface-container text-xs pl-16">
<div className="col-span-2 font-mono text-secondary">2.1.05.10</div>
<div className="col-span-4 font-medium">Impuestos por Pagar (IVA)</div>
<div className="col-span-2 text-secondary">TAX</div>
<div className="col-span-2 text-right font-bold">$114,400.00</div>
<div className="col-span-2 flex justify-end gap-3 text-secondary/50">
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">edit</span>
<span className="material-symbols-outlined text-base cursor-pointer hover:text-primary">delete</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
<div className="flex gap-8">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> DATABASE ONLINE</span>
<span>LAST SYNC: 2023-10-27 09:42:12</span>
</div>
<div>
                    TERMINAL ID: T-XC44-LEGER
                </div>
</div>
</main>
</div>
{/* Comentario remanente */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-stone-900 border-t-0 flex justify-around py-3 px-2 z-50">
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] uppercase font-bold">Dash</span>
</button>
<button className="flex flex-col items-center gap-1 text-orange-400">
<span className="material-symbols-outlined" >account_tree</span>
<span className="text-[10px] uppercase font-bold">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">receipt_long</span>
<span className="text-[10px] uppercase font-bold">Entries</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] uppercase font-bold">Reports</span>
</button>
</nav>

        </div>
    );
};
