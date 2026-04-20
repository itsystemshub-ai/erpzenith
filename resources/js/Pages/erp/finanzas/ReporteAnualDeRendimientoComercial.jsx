import React from 'react';
import { Link } from '@inertiajs/react';

export default function ReporteAnualDeRendimientoComercial() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<header className="fixed top-0 w-full z-40 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-[0_24px_40px_rgba(26,28,28,0.04)] border-b border-stone-200/10">
<div className="flex justify-between items-center px-6 py-3">
<div className="flex items-center gap-4">
<span className="font-['Space_Grotesk'] tracking-tighter text-xl font-bold text-stone-900">TITAN ERP</span>
<span className="h-6 w-px bg-outline-variant opacity-20"></span>
<nav className="hidden md:flex gap-6">
<a className="text-stone-500 hover:bg-stone-200/50 transition-all px-2 py-1 rounded" href="#">Inventory</a>
<a className="text-lime-600 font-bold px-2 py-1 rounded" href="#">Reports</a>
<a className="text-stone-500 hover:bg-stone-200/50 transition-all px-2 py-1 rounded" href="#">Logistics</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden lg:block">
<input className="bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Search data points..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2 text-stone-400">search</span>
</div>
<button className="material-symbols-outlined p-2 text-stone-600 hover:bg-stone-200/50 transition-all active:scale-95">notifications</button>
<button className="material-symbols-outlined p-2 text-stone-600 hover:bg-stone-200/50 transition-all active:scale-95">settings</button>
<img alt="Manager Profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqy_1Xf_HlwREO2VEApTJSNT0wWYEjzbGOIs5Wbwdexn3UMAtOkvi1tElQUoSrXKpxgYmSzWORP5M-USeqpTZ7mPa-fjMXsznVyA26MjIbtJEScloIOgr1iv3VeYq9-TaBdi6ous4vlr1bZN2F-2zxQyGYR4jkOlcjGe1tjMtKm36hKXrCFx68ic_-N9Ad_HS-yw4qtl86RSpryu_2mIkYszdD4RI-TpncVwLz7HbJ630y2htNFbtVmdBh-DzHO2kIz40hWa8ZKs"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<aside className="flex flex-col fixed left-0 top-0 h-full z-50 w-64 bg-stone-100 hidden lg:flex">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-primary flex items-center justify-center rounded">
<span className="material-symbols-outlined text-on-primary">engineering</span>
</div>
<div>
<h2 className="font-['Space_Grotesk'] font-black text-stone-950 text-sm tracking-widest uppercase">SALES UNIT</h2>
<p className="text-[10px] text-stone-500 font-medium">Precision Module v2.4</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-3 px-4 hover:bg-stone-200 hover:translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-3 px-4 hover:bg-stone-200 hover:translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined">point_of_sale</span>
<span className="font-medium text-sm">POS</span>
</a>
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-3 px-4 hover:bg-stone-200 hover:translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined">badge</span>
<span className="font-medium text-sm">Sellers</span>
</a>
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-3 px-4 hover:bg-stone-200 hover:translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-medium text-sm">Customers</span>
</a>
<a className="flex items-center gap-3 bg-stone-50 text-lime-600 border-l-4 border-lime-500 py-3 px-4 transition-all" href="#">
<span className="material-symbols-outlined" >analytics</span>
<span className="font-medium text-sm">Reports</span>
</a>
</nav>
<button className="mt-8 w-full bg-primary text-on-primary py-3 font-['Inter'] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm">add</span>
                New Sale
            </button>
</div>
<div className="mt-auto p-6 space-y-1">
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-2 px-4 hover:bg-stone-200 transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-medium text-sm">Support</span>
</a>
<a className="flex items-center gap-3 text-stone-600 opacity-80 py-2 px-4 hover:bg-stone-200 transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-medium text-sm">Logout</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<main className="lg:ml-64 pt-20 pb-12 px-6">
<header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<nav className="flex text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-2">
<span className="font-bold">Analíticas</span>
<span className="mx-2">/</span>
<span className="text-lime-600 font-black">Reporte Anual 2023</span>
</nav>
<h1 className="font-headline font-bold text-4xl lg:text-5xl uppercase tracking-tighter text-on-background max-w-2xl leading-none">
                    Reporte Anual de Ventas por <span className="text-primary italic">Vendedor y Cliente</span>
</h1>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-high px-4 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-sm">file_download</span> Export PDF
                </button>
<button className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm">calendar_month</span> FY 2023
                </button>
</div>
</header>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
{/* Comentario remanente */}
<div className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-lime-500/5 -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150"></div>
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Revenue Anual Total</p>
<p className="text-3xl font-headline font-bold text-on-background">$4,829,102.50</p>
<div className="flex items-center gap-1 mt-2 text-lime-600">
<span className="material-symbols-outlined text-sm">trending_up</span>
<span className="text-[10px] font-bold">+12.4% vs LY</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150"></div>
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Promedio Cuota</p>
<p className="text-3xl font-headline font-bold text-on-background">94.2%</p>
<div className="flex items-center gap-1 mt-2 text-amber-600">
<span className="material-symbols-outlined text-sm">priority_high</span>
<span className="text-[10px] font-bold">-2.1% Target</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Clientes Activos</p>
<p className="text-3xl font-headline font-bold text-on-background">1,204</p>
<div className="flex items-center gap-1 mt-2 text-lime-600">
<span className="material-symbols-outlined text-sm">group_add</span>
<span className="text-[10px] font-bold">+45 Nuevos</span>
</div>
</div>
<div className="bg-surface-container-lowest p-6 rounded-lg border-l-4 border-primary">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Comisiones Devengadas</p>
<p className="text-3xl font-headline font-bold text-on-background">$241,455</p>
<p className="text-[10px] font-bold text-primary mt-2">Provisionado Oct-Dic</p>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-lg">
<div className="flex justify-between items-center mb-10">
<h3 className="font-headline font-bold text-xl uppercase tracking-tighter">Monthly Sales Trend</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary rounded-full"></div>
<span className="text-[10px] font-bold uppercase">Actual</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-stone-200 rounded-full"></div>
<span className="text-[10px] font-bold uppercase">Forecast</span>
</div>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-2 px-2">
{/* Comentario remanente */}
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-40 group-hover:bg-primary/20 transition-colors"></div>
<div className="w-full bg-primary rounded-t h-32 absolute bottom-6 group-hover:h-36 transition-all"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">JAN</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-44"></div>
<div className="w-full bg-primary rounded-t h-36 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">FEB</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-48"></div>
<div className="w-full bg-primary rounded-t h-40 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">MAR</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-52"></div>
<div className="w-full bg-primary rounded-t h-48 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">APR</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-40"></div>
<div className="w-full bg-primary rounded-t h-28 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">MAY</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-56"></div>
<div className="w-full bg-primary rounded-t h-52 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">JUN</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-60"></div>
<div className="w-full bg-amber-500 rounded-t h-58 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">JUL</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-52"></div>
<div className="w-full bg-primary rounded-t h-46 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">AUG</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-48"></div>
<div className="w-full bg-primary rounded-t h-42 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">SEP</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-56"></div>
<div className="w-full bg-primary rounded-t h-50 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">OCT</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-44"></div>
<div className="w-full bg-primary rounded-t h-38 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">NOV</span>
</div>
<div className="group relative flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-stone-100 rounded-t h-64"></div>
<div className="w-full bg-primary rounded-t h-60 absolute bottom-6"></div>
<span className="text-[9px] font-bold text-stone-400 absolute -bottom-6">DEC</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-lg flex flex-col">
<h3 className="font-headline font-bold text-xl uppercase tracking-tighter mb-8">Distribution by Seller</h3>
<div className="flex-1 flex flex-col items-center justify-center relative">
{/* Comentario remanente */}
<div className="w-48 h-48 rounded-full border-[20px] border-stone-100 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-[20px] border-primary border-t-transparent border-l-transparent transform -rotate-45"></div>
<div className="absolute inset-0 rounded-full border-[20px] border-amber-500 border-b-transparent border-r-transparent transform rotate-12 opacity-80"></div>
<div className="text-center">
<span className="block text-2xl font-headline font-black">100%</span>
<span className="text-[8px] font-bold uppercase text-stone-400">Quota Reach</span>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-primary"></div>
<span className="font-medium">V. Rodriguez</span>
</div>
<span className="font-bold">42%</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-amber-500"></div>
<span className="font-medium">M. Delgado</span>
</div>
<span className="font-bold">28%</span>
</div>
<div className="flex justify-between items-center text-xs text-stone-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-stone-300"></div>
<span className="font-medium">Otros (4)</span>
</div>
<span className="font-bold">30%</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-12 overflow-x-auto">
<div className="bg-surface-container-lowest rounded-lg overflow-hidden">
<div className="px-8 py-6 border-b border-stone-100 flex justify-between items-center">
<h3 className="font-headline font-bold text-xl uppercase tracking-tighter">Performance Breakdown</h3>
<div className="flex gap-2">
<span className="text-[10px] bg-stone-100 px-3 py-1 rounded-full font-bold text-stone-500">Total 12 Sellers</span>
</div>
</div>
<table className="w-full text-left">
<thead className="bg-surface-container-low text-[10px] font-black uppercase tracking-widest text-stone-500">
<tr>
<th className="px-8 py-4">Seller Name</th>
<th className="px-8 py-4">Total Sales (USD)</th>
<th className="px-8 py-4">Quota Achievement %</th>
<th className="px-8 py-4">Top Client</th>
<th className="px-8 py-4 text-right">Commission Earned</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100 text-sm">
<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-5 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-lime-100 flex items-center justify-center text-primary font-black text-xs">VR</div>
<span className="font-bold">Valentina Rodriguez</span>
</td>
<td className="px-8 py-5 font-mono text-xs">$1,240,500.00</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[115%]"></div>
</div>
<span className="font-bold text-xs text-primary">115%</span>
</div>
</td>
<td className="px-8 py-5 text-stone-600">Industrial Sol. SA</td>
<td className="px-8 py-5 text-right font-black">$62,025</td>
</tr>
<tr className="bg-stone-50/30 hover:bg-stone-50 transition-colors">
<td className="px-8 py-5 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-amber-100 flex items-center justify-center text-amber-600 font-black text-xs">MD</div>
<span className="font-bold">Marcos Delgado</span>
</td>
<td className="px-8 py-5 font-mono text-xs">$985,200.00</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden w-24">
<div className="h-full bg-amber-500 w-[92%]"></div>
</div>
<span className="font-bold text-xs text-amber-600">92%</span>
</div>
</td>
<td className="px-8 py-5 text-stone-600">Petro-Titan Corp</td>
<td className="px-8 py-5 text-right font-black">$49,260</td>
</tr>
<tr className="hover:bg-stone-50 transition-colors">
<td className="px-8 py-5 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-200 flex items-center justify-center text-stone-600 font-black text-xs">AC</div>
<span className="font-bold">Ana Castellanos</span>
</td>
<td className="px-8 py-5 font-mono text-xs">$820,000.00</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[88%]"></div>
</div>
<span className="font-bold text-xs">88%</span>
</div>
</td>
<td className="px-8 py-5 text-stone-600">Logistics Group LP</td>
<td className="px-8 py-5 text-right font-black">$41,000</td>
</tr>
<tr className="bg-stone-50/30 hover:bg-stone-50 transition-colors">
<td className="px-8 py-5 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-stone-200 flex items-center justify-center text-stone-600 font-black text-xs">JR</div>
<span className="font-bold">Jorge Rivas</span>
</td>
<td className="px-8 py-5 font-mono text-xs">$755,000.00</td>
<td className="px-8 py-5">
<div className="flex items-center gap-3">
<div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden w-24">
<div className="h-full bg-primary w-[102%]"></div>
</div>
<span className="font-bold text-xs text-primary">102%</span>
</div>
</td>
<td className="px-8 py-5 text-stone-600">Constructora Bolivar</td>
<td className="px-8 py-5 text-right font-black">$37,750</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
<div className="h-40 relative rounded-lg overflow-hidden grayscale contrast-125 opacity-40">
<img alt="Industrial Infrastructure" className="object-cover w-full h-full" data-alt="dramatic wide shot of precision engine parts assembly line with clinical lighting and sharp steel textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Bxinnokvtt5oYa7onK8lfHSpcRNqvQdRpj-unX1jcfUPI3EvFJvai8GhN7tt_oNwYnwQwTDd9kuBoc2EhJdx7QQL2QFOhFiYwvoIDKIIIFFxIXXix3ZdDjGTEbRaF158gIpDubtMPGzBohm178iSzK81dHRpkL_LKLRVVcR2fYo5N4THgtEViAlbyZ89S91IezwWJo4B0Op8mtysFB6Ar92yuNGapnvXrfVqEzNAsUMH8coYZY4IudHdXPt-gFvbTK5g2NHhPNo"/>
<div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
</div>
<div className="bg-stone-900 p-8 rounded-lg flex flex-col justify-center border-l-4 border-amber-500">
<div className="flex items-center gap-2 mb-4 text-amber-500">
<span className="material-symbols-outlined">warning</span>
<span className="text-[10px] font-black uppercase tracking-widest">Notice: Year End Review</span>
</div>
<p className="text-stone-300 text-sm font-medium leading-relaxed">
                        Sales commissions are currently in "Pending Review" status for Q4. Final adjustments based on credit note reconciliations will be applied by January 15th.
                    </p>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<footer className="lg:ml-64 border-t border-stone-200 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<h4 className="font-headline font-black text-stone-950 uppercase tracking-tighter text-lg leading-none">TITAN INDUSTRIAL SOLUTIONS</h4>
<p className="text-[10px] text-stone-400 font-bold tracking-[0.2em]">RIF J-40308741-5</p>
</div>
<div className="flex gap-8">
<div className="text-center">
<span className="block text-[8px] font-bold text-stone-400 uppercase mb-1">Status</span>
<span className="text-[10px] font-black text-lime-600 uppercase flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-lime-600 rounded-full"></span> Operational
                </span>
</div>
<div className="text-center">
<span className="block text-[8px] font-bold text-stone-400 uppercase mb-1">Region</span>
<span className="text-[10px] font-black text-stone-950 uppercase">LATAM HQ</span>
</div>
<div className="text-center">
<span className="block text-[8px] font-bold text-stone-400 uppercase mb-1">Generated</span>
<span className="text-[10px] font-black text-stone-950 uppercase">2023-12-31</span>
</div>
</div>
</footer>
{/* Comentario remanente */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-stone-50 border-t border-stone-200 z-40 flex justify-around py-3">
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-bold">Main</span>
</a>
<a className="flex flex-col items-center gap-1 text-lime-600" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-bold">Reports</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">badge</span>
<span className="text-[10px] font-bold">Sellers</span>
</a>
<a className="flex flex-col items-center gap-1 text-stone-400" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-bold">More</span>
</a>
</div>

        </div>
    );
};
