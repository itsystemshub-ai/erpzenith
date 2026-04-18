import React from 'react';
import { Link } from '@inertiajs/react';

export default function CentroDeReportesDeCompras() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<div className="flex min-h-screen">
{/* Comentario remanente */}
<aside className="hidden md:flex flex-col h-screen w-64 docked left-0 border-r-0 bg-stone-50 dark:bg-stone-900 shadow-[4px_0_24px_rgba(0,0,0,0.04)] fixed z-40">
<div className="flex flex-col h-full py-8 gap-2">
<div className="px-6 mb-8">
<h2 className="text-lg font-black text-stone-800 dark:text-stone-100 font-headline tracking-tight uppercase">REPORTING SUITE</h2>
<p className="text-[10px] font-bold text-lime-600 dark:text-lime-400 tracking-widest opacity-80 uppercase">V2.4 Precision Engine</p>
</div>
<nav className="flex-1 space-y-1">
{/* Comentario remanente */}
<a className="flex items-center px-6 py-3 gap-4 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl">inventory_2</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Inventory</span>
</a>
<a className="flex items-center px-6 py-3 gap-4 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl">trending_up</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Sales</span>
</a>
{/* Comentario remanente */}
<a className="flex items-center px-6 py-3 gap-4 bg-lime-500/10 text-lime-700 dark:text-lime-400 border-r-4 border-lime-600 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl" >shopping_cart</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Purchases</span>
</a>
<a className="flex items-center px-6 py-3 gap-4 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl">payments</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Finance</span>
</a>
<a className="flex items-center px-6 py-3 gap-4 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl">account_balance</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">Accounting</span>
</a>
<a className="flex items-center px-6 py-3 gap-4 text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1 transition-transform ease-in-out duration-150" href="#">
<span className="material-symbols-outlined text-xl">groups</span>
<span className="font-['Inter'] font-semibold tracking-wide text-xs uppercase">HR</span>
</a>
</nav>
<div className="px-6 mt-auto space-y-4">
<button className="w-full py-3 bg-primary text-on-primary font-headline text-xs font-bold tracking-widest hover:brightness-110 transition-all uppercase">
                        EXPORT ALL DATA
                    </button>
<div className="pt-4 border-t border-stone-200 dark:border-stone-800">
<a className="flex items-center py-2 gap-3 text-stone-500 dark:text-stone-400 text-xs font-semibold uppercase" href="#">
<span className="material-symbols-outlined text-sm">support_agent</span>
                            Support
                        </a>
<a className="flex items-center py-2 gap-3 text-stone-500 dark:text-stone-400 text-xs font-semibold uppercase" href="#">
<span className="material-symbols-outlined text-sm">history_edu</span>
                            Logs
                        </a>
</div>
</div>
</div>
</aside>
{/* Comentario remanente */}
<main className="flex-1 md:ml-64 min-h-screen flex flex-col relative bg-surface">
{/* Comentario remanente */}
<header className="sticky top-0 z-50 bg-surface dark:bg-stone-950/80 backdrop-blur-xl tonal-shift-no-borders bg-stone-100 dark:bg-stone-900 w-full px-6 py-4 mx-auto flex justify-between items-center h-16">
<div className="flex items-center gap-8">
<span className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 font-headline uppercase">INDUSTRIAL FORGE ERP</span>
<nav className="hidden lg:flex items-center gap-6">
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-500 dark:text-stone-400 text-xs hover:text-lime-500 dark:hover:text-lime-300 transition-colors" href="#">Dashboard</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-500 dark:text-stone-400 text-xs hover:text-lime-500 dark:hover:text-lime-300 transition-colors" href="#">Analytics</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-lime-600 dark:text-lime-400 border-b-2 border-lime-600 dark:border-lime-400 pb-1 text-xs" href="#">Reports</a>
<a className="font-['Space_Grotesk'] uppercase tracking-tight text-stone-500 dark:text-stone-400 text-xs hover:text-lime-500 dark:hover:text-lime-300 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm">search</span>
<input className="bg-surface-container-high border-none rounded-none text-[10px] font-bold tracking-widest py-2 pl-9 pr-4 w-48 focus:ring-1 focus:ring-lime-500 transition-all uppercase" placeholder="SEARCH SYSTEM..." type="text"/>
</div>
<button className="material-symbols-outlined text-stone-500 hover:text-lime-600 transition-colors">notifications</button>
<button className="material-symbols-outlined text-stone-500 hover:text-lime-600 transition-colors">help_outline</button>
<div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden ring-1 ring-lime-500/20">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="professional portrait of a high-level industrial operations manager wearing a safety vest in a modern factory setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0MwdhcSguLzHZ9oSSQBmIzf9y-FcgTp_JnVoRfgd5sduKv-UuQRa1VnhMuwALhL0tsXfKRBDKELX3KATfHxLgt0sArrv3StZfV_MuqAaRsT5X-1Ue0A0n4sM4hW3Z9_uM9fgPrNAUECw8HXrwvTigRDDg_tdAaqrspUWtBxI2ocUNJ2ekmB3uCQu_blm28woMfS2JoD-pUTacUVAbt7YHCboJZWfH7IzJFXltJhzPpmP4yP3htqzT9NZZmyPi3sH5AajLJJ9tnJ4"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<div className="p-8 space-y-8">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/20 pb-8">
<div>
<span className="text-primary font-headline font-bold text-xs tracking-[0.3em] uppercase mb-2 block">Procurement Intelligence</span>
<h1 className="text-5xl font-headline font-black tracking-tighter uppercase leading-none text-on-surface">PURCHASES REPORTING<br/><span className="text-primary">CENTER</span></h1>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-low px-6 py-4 flex flex-col items-end">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Total Monthly Spend</span>
<span className="text-2xl font-headline font-bold text-on-surface">$1,420,890.00</span>
</div>
<div className="bg-primary px-6 py-4 flex flex-col items-end text-on-primary">
<span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Pending Orders</span>
<span className="text-2xl font-headline font-bold">142 UNIT</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Comentario remanente */}
<section className="md:col-span-8 bg-surface-container-lowest p-8 relative overflow-hidden flex flex-col gap-8">
<div className="flex justify-between items-start">
<div className="flex gap-2 items-center">
<div className="w-2 h-8 bg-primary"></div>
<h3 className="text-xl font-headline font-black uppercase tracking-tight">Supplier Performance Index</h3>
</div>
<button className="text-[10px] font-bold text-primary tracking-widest uppercase border-b border-primary hover:pb-1 transition-all">Deep Analysis</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="space-y-2">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Precision Machining Co.</span>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-1 bg-primary w-[98%]"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-headline uppercase tracking-tighter">98.2% Uptime</span>
<span className="material-symbols-outlined text-primary text-sm">trending_up</span>
</div>
</div>
<div className="space-y-2">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Alloy Steel Foundry Ltd.</span>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-1 bg-primary w-[84%]"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-headline uppercase tracking-tighter">84.5% Uptime</span>
<span className="material-symbols-outlined text-error text-sm">trending_down</span>
</div>
</div>
<div className="space-y-2">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Hydraulic Systems Inc.</span>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-1 bg-primary w-[92%]"></div>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-bold font-headline uppercase tracking-tighter">92.0% Uptime</span>
<span className="material-symbols-outlined text-primary text-sm">trending_up</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="h-48 bg-stone-100 flex relative items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="abstract satellite view of a shipping network with glowing lime green nodes connecting global industrial ports" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmn_pQWVBiQ__f820JcLdg4inaYp8sszJJ7cyeP_RszhyeAHvr3kp3cFNLytpeEeam7wAnjFRmVHmJp88O_tmrIxX7UbTutC2cNKjxVgznK9Bq9Z88KP5Lg4nAwqdc1j3NuAYNXc6DruD54Bu9B_wTsC9dUiUMdRgCj3lYIP0Os-YKFRnzq1KuHZZjWkmuadFzncURyxq804cxOlAsShtkoP5HiKuLC3Z7gu_KM3fQSyyzqmmtJoB0ndZeca27DERuYSlWDX6VZ7I"/>
<div className="relative z-10 bg-surface/90 backdrop-blur-md p-4 text-center border-l-4 border-primary">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Global Logistics Status</p>
<p className="text-sm font-headline font-black uppercase">3 Active Shipments En Route</p>
</div>
</div>
</section>
{/* Comentario remanente */}
<section className="md:col-span-4 bg-inverse-surface text-on-primary-fixed p-8 flex flex-col justify-between">
<div className="space-y-6">
<h3 className="text-xl font-headline font-black uppercase tracking-tight text-white">AP Aging Summary</h3>
<div className="space-y-4">
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Current</span>
<span className="text-lg font-headline font-bold text-primary-fixed">$412.5K</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-[10px] font-bold uppercase tracking-widest opacity-60">1-30 Days</span>
<span className="text-lg font-headline font-bold">$128.2K</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-[10px] font-bold uppercase tracking-widest opacity-60">31-60 Days</span>
<span className="text-lg font-headline font-bold">$45.0K</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-[10px] font-bold uppercase tracking-widest opacity-60">60+ Days</span>
<span className="text-lg font-headline font-bold text-error">CRITICAL: $12.4K</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-[10px] leading-relaxed opacity-50 uppercase font-bold tracking-widest mb-4">Urgent Attention Required for Vendor ID #8812 - Logistics Net 60</p>
<button className="w-full py-4 bg-primary-fixed text-on-primary-fixed font-headline font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all">Process Settlements</button>
</div>
</section>
{/* Comentario remanente */}
<section className="md:col-span-5 bg-surface-container p-8 flex flex-col gap-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">analytics</span>
<h3 className="text-lg font-headline font-bold uppercase tracking-tight">Cost Variance Trend</h3>
</div>
<div className="flex-1 flex items-end gap-1 min-h-[160px]">
<div className="bg-primary/20 w-full hover:bg-primary transition-colors cursor-help group relative h-[40%]">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">JAN</span>
</div>
<div className="bg-primary/20 w-full hover:bg-primary transition-colors cursor-help group relative h-[55%]"></div>
<div className="bg-primary/20 w-full hover:bg-primary transition-colors cursor-help group relative h-[45%]"></div>
<div className="bg-primary/40 w-full hover:bg-primary transition-colors cursor-help group relative h-[75%]"></div>
<div className="bg-primary/60 w-full hover:bg-primary transition-colors cursor-help group relative h-[90%]"></div>
<div className="bg-primary w-full group relative h-[100%]">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary">JUN</span>
</div>
</div>
<div className="bg-white/50 p-4">
<div className="flex justify-between items-center">
<span className="text-[10px] font-bold uppercase tracking-widest">Average Part Cost</span>
<span className="text-sm font-headline font-black">+14.2% YoY</span>
</div>
<p className="text-[10px] text-secondary mt-2">Primary driver: Raw material surcharge in Cast Alloy segment.</p>
</div>
</section>
{/* Comentario remanente */}
<section className="md:col-span-7 bg-surface-container-lowest p-0 flex flex-col overflow-hidden">
<div className="p-8 pb-4">
<h3 className="text-lg font-headline font-bold uppercase tracking-tight">Purchase Categorization</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low">
<tr>
<th className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary">Asset Category</th>
<th className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary">Volume</th>
<th className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary">Total Value</th>
<th className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-secondary">Status</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-surface-container">
<tr className="hover:bg-primary/5 transition-colors">
<td className="px-8 py-4 font-bold uppercase font-headline">Raw Metallurgy</td>
<td className="px-8 py-4">42.5 Tons</td>
<td className="px-8 py-4">$642,000</td>
<td className="px-8 py-4"><span className="px-2 py-0.5 bg-lime-100 text-lime-800 text-[9px] font-bold uppercase">Stable</span></td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors">
<td className="px-8 py-4 font-bold uppercase font-headline">Precision Tooling</td>
<td className="px-8 py-4">840 Units</td>
<td className="px-8 py-4">$285,120</td>
<td className="px-8 py-4"><span className="px-2 py-0.5 bg-error-container text-on-error-container text-[9px] font-bold uppercase">Escalating</span></td>
</tr>
<tr className="hover:bg-primary/5 transition-colors">
<td className="px-8 py-4 font-bold uppercase font-headline">Hydraulic Components</td>
<td className="px-8 py-4">122 Assemblies</td>
<td className="px-8 py-4">$154,200</td>
<td className="px-8 py-4"><span className="px-2 py-0.5 bg-stone-200 text-stone-600 text-[9px] font-bold uppercase">Contracted</span></td>
</tr>
<tr className="bg-surface-container-low/30 hover:bg-primary/5 transition-colors">
<td className="px-8 py-4 font-bold uppercase font-headline">Abrasives &amp; Finishing</td>
<td className="px-8 py-4">12 Pallets</td>
<td className="px-8 py-4">$45,800</td>
<td className="px-8 py-4"><span className="px-2 py-0.5 bg-lime-100 text-lime-800 text-[9px] font-bold uppercase">Stable</span></td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Comentario remanente */}
<div className="relative bg-surface-container-highest p-8 md:p-12 overflow-hidden">
{/* Comentario remanente */}
<div className="absolute -right-4 top-0 opacity-5 select-none pointer-events-none">
<span className="text-[12rem] font-black leading-none font-headline tracking-tighter">FORGE</span>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
<div>
<span className="material-symbols-outlined text-4xl text-primary mb-4">precision_manufacturing</span>
<h2 className="text-3xl font-headline font-black uppercase tracking-tight mb-4">Pending Purchase<br/>Orders Status</h2>
<p className="text-xs text-secondary leading-relaxed font-medium">Real-time telemetry of all currently open requisition cycles from RFQ to final dock arrival. 14 orders currently flagged for "Fast Track" priority.</p>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-6 flex items-center justify-between group hover:bg-primary transition-all duration-300">
<div>
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary/70 uppercase tracking-widest">In Transit (Overseas)</p>
<h4 className="text-2xl font-headline font-bold group-hover:text-on-primary">PO-88219-B</h4>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-primary group-hover:text-on-primary uppercase">ETA: 48H</p>
<span className="material-symbols-outlined group-hover:text-on-primary">sailing</span>
</div>
</div>
<div className="bg-white p-6 flex items-center justify-between group hover:bg-primary transition-all duration-300">
<div>
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary/70 uppercase tracking-widest">Awaiting QC Sign-off</p>
<h4 className="text-2xl font-headline font-bold group-hover:text-on-primary">PO-89100-D</h4>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary uppercase">STATION 4</p>
<span className="material-symbols-outlined group-hover:text-on-primary text-error">emergency</span>
</div>
</div>
<div className="bg-white p-6 flex items-center justify-between group hover:bg-primary transition-all duration-300">
<div>
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary/70 uppercase tracking-widest">Released for Pickup</p>
<h4 className="text-2xl font-headline font-bold group-hover:text-on-primary">PO-88542-C</h4>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-primary group-hover:text-on-primary uppercase">READY</p>
<span className="material-symbols-outlined group-hover:text-on-primary">local_shipping</span>
</div>
</div>
<div className="bg-white p-6 flex items-center justify-between group hover:bg-primary transition-all duration-300">
<div>
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary/70 uppercase tracking-widest">Manufacturing Phase</p>
<h4 className="text-2xl font-headline font-bold group-hover:text-on-primary">PO-90012-A</h4>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-secondary group-hover:text-on-primary uppercase">65% COMP</p>
<span className="material-symbols-outlined group-hover:text-on-primary">settings_backup_restore</span>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="md:hidden sticky bottom-0 z-50 bg-surface border-t border-surface-container-highest">
<nav className="flex justify-around items-center h-16">
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold uppercase">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-bold uppercase">Metrics</span>
</button>
<button className="flex flex-col items-center gap-1 text-lime-600">
<span className="material-symbols-outlined" >shopping_cart</span>
<span className="text-[10px] font-bold uppercase">Purchases</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-500">
<span className="material-symbols-outlined">account_circle</span>
<span className="text-[10px] font-bold uppercase">Me</span>
</button>
</nav>
</footer>
</main>
</div>

        </div>
    );
};
