import React from 'react';
import { Link } from '@inertiajs/react';

export default function CierreContableYLiquidaciNDeImpuestos() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<header className="fixed top-0 z-50 flex justify-between items-center w-full px-6 py-3 bg-stone-950/80 backdrop-blur-xl border-b-0">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-100 font-['Space_Grotesk'] uppercase tracking-tight">TITAN ERP: ACCOUNTING</span>
<div className="hidden md:flex items-center bg-stone-900 px-4 py-1.5 rounded-lg border border-stone-800">
<span className="material-symbols-outlined text-stone-400 mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-stone-300 text-xs font-label uppercase tracking-widest w-64" placeholder="SEARCH LEDGER..." type="text"/>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-stone-400 hover:bg-stone-800/50 p-2 transition-colors duration-200 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-stone-400 hover:bg-stone-800/50 p-2 transition-colors duration-200 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<img alt="User Profile" className="w-8 h-8 rounded-full border border-orange-500/30" data-alt="professional headshot of a senior accountant in a modern office with subtle industrial lighting and warm tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2kP1FgGxo1d0odb15KiBTBkF-vU0DJsn0TfNYHeOEg-vb4rKEYSEypAIToJRKQLUPVTiQtCsty-64L8DwfNKXbbyHHImLQPDKA2RspAZ1BCkakTn5jmgv3yYbYipozay-mZegaTJbWloZpAaHqUF0dsx6sxnuYCqtcNPWFxNp16vp6sK73rPXkPMti-UVAyfzlpqkWFgJsC6aAPXeJ_NG80EU2gAL0ravLUXBmER88VaYSmy1nBCAGd9AJ8i_sioHcxg5xHhXFWw"/>
</div>
</header>
{/* Comentario remanente */}
<aside className="flex flex-col h-screen fixed left-0 top-0 pt-16 bg-stone-900 w-64 border-r-0 z-40 hidden md:flex">
<div className="px-6 py-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded">
<span className="material-symbols-outlined text-stone-950" data-icon="account_balance">account_balance</span>
</div>
<div>
<h2 className="text-orange-500 font-black font-['Inter'] text-sm font-semibold tracking-wide">FINANCE</h2>
<p className="text-[10px] text-stone-500 font-label">Precision Ledger v4.2</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span>Chart of Accounts</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Journal Entries</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>Ledger</span>
</a>
<a className="flex items-center gap-4 text-stone-500 hover:text-stone-200 py-3 px-6 hover:bg-stone-800/80 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="balance">balance</span>
<span>Trial Balance</span>
</a>
<a className="bg-stone-800 text-orange-400 border-l-4 border-orange-500 flex items-center gap-4 py-3 px-6 transition-all font-label text-sm font-semibold tracking-wide active:translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span>Financial Statements</span>
</a>
</nav>
<div className="px-6 py-6 border-t border-stone-800/50">
<button className="w-full bg-orange-500 hover:bg-orange-400 text-stone-950 font-bold py-3 text-xs tracking-tighter uppercase transition-colors">
                NEW ENTRY
            </button>
</div>
<div className="px-6 py-4 space-y-2">
<a className="flex items-center gap-3 text-stone-500 text-xs hover:text-stone-300" href="#">
<span className="material-symbols-outlined text-sm" data-icon="help">help</span> Support
            </a>
<a className="flex items-center gap-3 text-stone-500 text-xs hover:text-stone-300" href="#">
<span className="material-symbols-outlined text-sm" data-icon="history">history</span> Logs
            </a>
</div>
</aside>
{/* Comentario remanente */}
<main className="md:ml-64 pt-24 pb-12 px-8 min-h-screen">
<header className="mb-10 relative">
<div className="absolute -left-8 top-0 w-1 h-16 bg-primary"></div>
<p className="text-primary font-label text-xs font-bold tracking-widest uppercase mb-1">Module: FISCAL_CLOSURE_v4</p>
<h1 className="text-on-background font-headline text-5xl font-bold uppercase tracking-tighter leading-none">Fiscal Closing &amp; <br/><span className="text-primary">Tax Summary</span></h1>
<div className="mt-4 flex gap-4 items-center">
<span className="bg-surface-container-highest px-3 py-1 text-[10px] font-bold tracking-widest uppercase">PERIOD: DEC 2023</span>
<span className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-[10px] font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span> IN PROGRESS
                </span>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6 items-stretch">
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-7 space-y-6">
{/* Comentario remanente */}
<section className="bg-surface-container-lowest p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-low -mr-12 -mt-12 rotate-45 transition-transform group-hover:scale-110"></div>
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-primary" data-icon="account_balance_wallet">account_balance_wallet</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight">Pending Reconciliations</h3>
</div>
<div className="space-y-6">
<div className="flex items-start justify-between bg-surface-container-low p-4 relative">
<div className="absolute left-0 top-0 h-full w-1 bg-primary"></div>
<div>
<p className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-1">Bank vs Ledger</p>
<p className="font-headline text-2xl font-bold">$14,203.45 <span className="text-sm font-medium text-error ml-2 uppercase tracking-normal font-body">Unmatched Variance</span></p>
</div>
<button className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all">Review Details</button>
</div>
<div className="flex items-start justify-between bg-surface-container-low p-4 relative">
<div className="absolute left-0 top-0 h-full w-1 bg-secondary"></div>
<div>
<p className="font-label text-xs font-bold text-secondary uppercase tracking-widest mb-1">Inventory vs Ledger</p>
<p className="font-headline text-2xl font-bold">$2,840.10 <span className="text-sm font-medium text-primary ml-2 uppercase tracking-normal font-body">Within Margin</span></p>
</div>
<button className="bg-surface-container-highest px-4 py-2 text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all">Audit Logs</button>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-surface-container-low p-8 border border-outline-variant/15">
<h3 className="font-headline text-xl font-bold uppercase tracking-tight mb-6">Closure Integrity Checklist</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface p-4 flex items-center gap-4">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
<div>
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Asset Depreciation</p>
<p className="text-sm font-bold uppercase">Finalized</p>
</div>
</div>
<div className="bg-surface p-4 flex items-center gap-4">
<span className="material-symbols-outlined text-primary" data-icon="check_circle" >check_circle</span>
<div>
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Accounts Payable</p>
<p className="text-sm font-bold uppercase">Locked</p>
</div>
</div>
<div className="bg-surface p-4 flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Payroll Accrual</p>
<p className="text-sm font-bold uppercase">Awaiting HR</p>
</div>
</div>
<div className="bg-surface p-4 flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Inter-Co. Balance</p>
<p className="text-sm font-bold uppercase">Pending Sync</p>
</div>
</div>
</div>
</section>
</div>
{/* Comentario remanente */}
<div className="col-span-12 lg:col-span-5 space-y-6">
{/* Comentario remanente */}
<section className="bg-stone-900 text-stone-100 p-8 flex flex-col justify-between min-h-[400px] relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="material-symbols-outlined text-orange-500 text-4xl opacity-20" data-icon="description">description</span>
</div>
<div>
<h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-8">Tax Provision <span className="text-orange-500">FY2023</span></h3>
<div className="space-y-8">
<div className="border-l-2 border-orange-500/50 pl-6">
<p className="text-stone-400 font-label text-[10px] font-bold uppercase tracking-widest mb-2">ISLR Calculation (34%)</p>
<p className="font-headline text-4xl font-bold text-stone-50!">$184,290.00</p>
<p className="text-stone-500 text-xs mt-1">Estimated Net Taxable Income: $542,029.41</p>
</div>
<div className="border-l-2 border-stone-700 pl-6">
<p className="text-stone-400 font-label text-[10px] font-bold uppercase tracking-widest mb-2">IVA Liquidations (NET)</p>
<p className="font-headline text-3xl font-bold text-stone-300!">$42,105.12</p>
<div className="flex gap-4 mt-2">
<span className="text-[10px] text-stone-500 uppercase">Input: $82K</span>
<span className="text-[10px] text-stone-500 uppercase">Output: $124K</span>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-800">
<button className="w-full bg-orange-500 text-stone-950 font-bold py-4 uppercase tracking-tighter hover:bg-orange-400 transition-all active:scale-95">
                            PROVISION SETTLEMENT
                        </button>
</div>
</section>
{/* Comentario remanente */}
<section className="bg-surface-container-high p-8 border-l-[8px] border-primary">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline text-lg font-bold uppercase tracking-tight">Certificate of Integrity</h3>
<p className="text-xs text-secondary mt-1">Validation Hash: 8F-22-E9-01-TITAN</p>
</div>
<span className="material-symbols-outlined text-primary text-3xl" data-icon="verified">verified</span>
</div>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-4 font-mono text-[11px] leading-relaxed border border-outline-variant/30">
<p className="text-on-surface-variant italic mb-2">"I hereby certify that the financial records presented for the period ending DEC-2023 reflect the true industrial fiscal position of TITAN ERP according to International Accounting Standards..."</p>
<div className="flex justify-between items-end border-t border-dashed border-outline-variant pt-2 mt-4">
<div>
<p className="font-bold text-on-surface">DR. ELARA VANCE</p>
<p className="text-[9px] text-secondary">Chief Financial Officer</p>
</div>
<div className="text-right">
<p className="font-bold text-on-surface">SENIAT AUTH CODE</p>
<p className="text-[10px] text-primary tracking-widest">#SNT-2023-X99L-412</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
{/* Comentario remanente */}
<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface p-6 border-b-2 border-primary/20">
<div className="flex justify-between items-center mb-4">
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">EBITDA Margin</p>
<span className="text-primary text-xs font-bold">+2.4%</span>
</div>
<div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-[74%]"></div>
</div>
<p className="font-headline text-xl font-bold mt-4">32.4% <span className="text-xs font-medium text-secondary">vs prev. yr</span></p>
</div>
<div className="bg-surface p-6 border-b-2 border-primary/20">
<div className="flex justify-between items-center mb-4">
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Liquidity Ratio</p>
<span className="text-error text-xs font-bold">-0.1%</span>
</div>
<div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[62%]"></div>
</div>
<p className="font-headline text-xl font-bold mt-4">1.8 <span className="text-xs font-medium text-secondary">Quick Ratio</span></p>
</div>
<div className="bg-surface p-6 border-b-2 border-primary/20">
<div className="flex justify-between items-center mb-4">
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Deferred Taxes</p>
<span className="text-secondary text-xs font-bold">Stable</span>
</div>
<div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[45%]"></div>
</div>
<p className="font-headline text-xl font-bold mt-4">$12,400 <span className="text-xs font-medium text-secondary">Asset value</span></p>
</div>
</section>
</main>
{/* Comentario remanente */}
<footer className="md:ml-64 bg-stone-950 text-stone-500 py-12 px-8 border-t border-stone-900">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h4 className="text-stone-100 font-headline text-lg font-bold uppercase tracking-tight mb-4">TITAN INDUSTRIAL SOLUTIONS</h4>
<p className="text-sm max-w-md leading-relaxed">Advanced ERP infrastructure for heavy industrial operations. Precision engineering applied to financial ledger integrity and fiscal compliance across all global jurisdictions.</p>
</div>
<div>
<h5 className="text-stone-300 font-bold text-xs uppercase tracking-widest mb-4">Core Modules</h5>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-orange-500 transition-colors" href="#">Advanced Ledger Control</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Asset Management</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Tax Compliance Engine</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Audit &amp; Transparency</a></li>
</ul>
</div>
<div>
<h5 className="text-stone-300 font-bold text-xs uppercase tracking-widest mb-4">Technical</h5>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-orange-500 transition-colors" href="#">System Logs</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">API Documentation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Security Certifications</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Infrastructure Status</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-6">
<span className="text-[10px] tracking-widest uppercase">© 2023 TITAN FORGE SYSTEMS</span>
<span className="text-[10px] tracking-widest uppercase text-stone-700">Encrypted AES-256</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] uppercase tracking-widest hover:text-stone-100" href="#">Privacy Protocol</a>
<a className="text-[10px] uppercase tracking-widest hover:text-stone-100" href="#">Terms of Operation</a>
<a className="text-[10px] uppercase tracking-widest hover:text-stone-100" href="#">Support</a>
</div>
</div>
</footer>

        </div>
    );
};
