import React from 'react';
import { Link } from '@inertiajs/react';

export default function ErpDashboardForgeOps() {
    return (
        <div className="bg-zinc-950 font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col items-center justify-center p-6 bg-industrial-mesh">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 z-50 flex flex-col bg-stone-100 border-r border-stone-200">
<div className="flex flex-col h-full py-6 px-4">
<div className="mb-10 px-2">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-stone-900 flex items-center justify-center rounded-sm">
<span className="material-symbols-outlined text-primary-container" >precision_manufacturing</span>
</div>
<div>
<h2 className="font-headline font-bold text-stone-900 leading-none">HEAVY-DUTY OPS</h2>
<span className="text-[10px] font-mono text-stone-500">V2.0.4-STABLE</span>
</div>
</div>
<p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">Mayor de Repuesto La Cima</p>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
{/* Comentario remanente */}
<Link className="flex items-center gap-3 px-3 py-2.5 bg-lime-500/10 text-lime-700 font-bold border-r-4 border-lime-500 transition-transform duration-150" href="/modulo/erp/dashboard/ErpDashboardForgeOps">
<span className="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
<span className="text-sm font-medium tracking-wide">Dashboard</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 text-stone-600 hover:bg-stone-200 transition-transform duration-150" href="/modulo/erp/inventario/CentroDeReportesDeInventario">
<span className="material-symbols-outlined text-[20px]" data-icon="inventory_2">inventory_2</span>
<span className="text-sm font-medium tracking-wide">Inventory</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 text-stone-600 hover:bg-stone-200 transition-transform duration-150" href="/modulo/erp/ventas/DashboardDeVentasKpis">
<span className="material-symbols-outlined text-[20px]" data-icon="payments">payments</span>
<span className="text-sm font-medium tracking-wide">Sales</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 text-stone-600 hover:bg-stone-200 transition-transform duration-150" href="/modulo/erp/compras/DashboardDeComprasErp">
<span className="material-symbols-outlined text-[20px]" data-icon="shopping_cart">shopping_cart</span>
<span className="text-sm font-medium tracking-wide">Purchases</span>
</Link>
<Link className="flex items-center gap-3 px-3 py-2.5 text-stone-600 hover:bg-stone-200 transition-transform duration-150" href="/modulo/configuracion/ConfiguraciNDeParMetrosGlobales">
<span className="material-symbols-outlined text-[20px]" data-icon="settings_input_component">settings_input_component</span>
<span className="text-sm font-medium tracking-wide">Configuration</span>
</Link>
{/* Comentario remanente */}
<div className="pt-4 pb-2 px-3">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Internal / WIP</span>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-400 cursor-not-allowed group" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="account_balance">account_balance</span>
<span className="text-sm font-medium tracking-wide">Accounting (WIP)</span>
<span className="ml-auto text-[8px] bg-stone-200 px-1 rounded">PROJ</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-400 cursor-not-allowed group" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="monetization_on">monetization_on</span>
<span className="text-sm font-medium tracking-wide">Finance (WIP)</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-stone-400 cursor-not-allowed group" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="groups">groups</span>
<span className="text-sm font-medium tracking-wide">HR (WIP)</span>
</a>
</nav>
<div className="mt-auto border-t border-stone-200 pt-6">
<button className="w-full bg-stone-900 text-primary-container font-headline font-bold py-3 px-4 flex items-center justify-center gap-2 hover:bg-stone-800 transition-all active:scale-95 mb-4">
<span className="material-symbols-outlined text-sm" data-icon="article">article</span>
                    GENERATE REPORT
                </button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-1.5 text-stone-500 hover:text-stone-900 transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]" data-icon="help">help</span>
<span className="text-xs font-medium">Support</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 text-stone-500 hover:text-stone-900 transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]" data-icon="sensors">sensors</span>
<span className="text-xs font-medium">System Status</span>
</a>
</div>
</div>
</div>
</aside>
{/* Comentario remanente */}
<header className="fixed top-0 left-64 right-0 bg-stone-50/80 backdrop-blur-xl z-40 border-b border-stone-200">
<div className="flex justify-between items-center w-full px-8 py-4">
<div className="flex items-center gap-8">
<h1 className="text-2xl font-headline font-black text-stone-900 tracking-tighter">FORGE ERP</h1>
<div className="hidden lg:flex items-center gap-6">
<a className="text-lime-600 font-headline uppercase tracking-tight font-bold border-b-2 border-lime-600 pb-1" href="#">Dashboard</a>
<a className="text-stone-500 font-headline uppercase tracking-tight font-bold hover:text-stone-900 transition-colors" href="#">Analytics</a>
<a className="text-stone-500 font-headline uppercase tracking-tight font-bold hover:text-stone-900 transition-colors" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
<span className="material-symbols-outlined text-lg" data-icon="search">search</span>
</span>
<input className="bg-stone-100 border-none text-sm px-10 py-2 w-64 rounded-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Search engine parts..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-sm transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-stone-500 hover:bg-stone-100 rounded-sm transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="h-8 w-[1px] bg-stone-200 mx-2"></div>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-xs font-bold text-stone-900 leading-none">CHIEF ENGINEER</p>
<p className="text-[10px] text-stone-500">OPERATIONS CONTROL</p>
</div>
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover border border-stone-200" data-alt="Professional headshot of a middle-aged male operations manager with a confident expression, neutral industrial background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGeNkIVZC8Frr1cPNC8YP5SGv9MYLLMIkj6Z4qt3qaXEvLXhPxgVnyjmT7H8XBK9w8V_M-7ppkZbSFc1GBn2zkSMYv4SpTINxBP5XvVpNmR3yfpRHgY9eotdVY5i4u6XaR2Bkh-t-NI7znxkeC943txyWZA-hEoPsQWuTP2_qEwMR5unmjdYj4DeNQbrN_K2PCTCG1b8ZoUesprO08RtwIDCHi0OEbB_O87yyC4eaYvx_2jW1USB3h6QPRu6U8TRHoIfgi9BHb6-g"/>
</div>
</div>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="ml-64 mt-[73px] min-h-[calc(100vh-73px)] p-8">
{/* Comentario remanente */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
<div>
<p className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-1">Fleet Overview</p>
<h2 className="text-4xl font-headline font-black text-stone-900 tracking-tighter uppercase">MAYOR DE REPUESTO LA CIMA, C.A.</h2>
<p className="text-stone-500 font-medium">RIF: J-40308741-5 • VALENCIA, VENEZUELA</p>
</div>
<div className="flex gap-3">
<div className="bg-surface-container-high px-4 py-2 flex flex-col">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Uptime</span>
<span className="text-xl font-headline font-bold text-stone-900">99.98%</span>
</div>
<div className="bg-primary text-white px-4 py-2 flex flex-col">
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">System Load</span>
<span className="text-xl font-headline font-bold">OPTIMAL</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/* Comentario remanente */}
<div className="md:col-span-8 bg-surface-container-lowest overflow-hidden group">
<div className="p-8">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-100 flex items-center justify-center">
<span className="material-symbols-outlined text-stone-900" data-icon="inventory_2" >inventory_2</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold text-stone-900 uppercase">Inventory Control</h3>
<p className="text-sm text-stone-500">Real-time stock movement tracking</p>
</div>
</div>
<button className="text-[10px] font-bold text-primary border-b-2 border-primary hover:text-stone-900 hover:border-stone-900 transition-all uppercase tracking-widest">Manage Catalog</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
<div className="border-l-4 border-stone-200 pl-4 py-2">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Active Stock</p>
<p className="text-3xl font-headline font-bold text-stone-900">14,204 <span className="text-sm font-medium text-stone-500">Units</span></p>
</div>
<div className="border-l-4 border-error-container pl-4 py-2">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Critical Alerts</p>
<p className="text-3xl font-headline font-bold text-error">05 <span className="text-sm font-medium text-stone-500">Items</span></p>
</div>
<div className="border-l-4 border-primary pl-4 py-2">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Turnover Rate</p>
<p className="text-3xl font-headline font-bold text-stone-900">12.4%</p>
</div>
</div>
{/* Comentario remanente */}
<div className="mt-8 h-32 w-full bg-stone-50 relative flex items-end gap-1 px-4 overflow-hidden">
<div className="flex-1 bg-stone-200 h-[40%]"></div>
<div className="flex-1 bg-stone-300 h-[60%]"></div>
<div className="flex-1 bg-stone-200 h-[55%]"></div>
<div className="flex-1 bg-primary-container h-[85%]"></div>
<div className="flex-1 bg-stone-300 h-[45%]"></div>
<div className="flex-1 bg-stone-200 h-[30%]"></div>
<div className="flex-1 bg-stone-900 h-[95%]"></div>
<div className="flex-1 bg-stone-200 h-[50%]"></div>
<div className="flex-1 bg-stone-300 h-[70%]"></div>
<div className="flex-1 bg-primary h-[100%]"></div>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 bg-stone-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" data-icon="trending_up">trending_up</span>
</div>
<div className="p-8 h-full flex flex-col">
<p className="text-[10px] font-bold text-primary-container uppercase tracking-[0.3em] mb-4">Revenue Performance</p>
<div className="mb-auto">
<p className="text-xs text-stone-400 mb-1">Weekly Gross Revenue</p>
<h3 className="text-4xl font-headline font-black text-primary-container tracking-tighter mb-6">$128,450.00</h3>
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-sm" data-icon="shopping_bag">shopping_bag</span>
</div>
<span className="text-sm font-medium">24 Pending Orders</span>
<span className="ml-auto text-xs text-stone-400">+12% vs last week</span>
</div>
</div>
<div className="flex items-center gap-4 mt-4">
<button className="flex-1 bg-primary text-on-primary py-3 font-headline font-bold text-sm tracking-tight hover:brightness-110 active:scale-95 transition-all">
                            VIEW DETAILS
                        </button>
<button className="w-12 h-12 border border-stone-700 flex items-center justify-center hover:bg-stone-800 transition-colors">
<span className="material-symbols-outlined" data-icon="share">share</span>
</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 bg-surface-container-low p-8 border-l-8 border-stone-800">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-stone-600" data-icon="local_shipping">local_shipping</span>
<h3 className="text-lg font-headline font-bold text-stone-900 uppercase">Incoming Logistics</h3>
</div>
<div className="space-y-6">
<div>
<p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Shipments in Transit (3)</p>
<div className="space-y-3">
<div className="flex items-center justify-between bg-white p-3 border-l-2 border-primary">
<span className="text-xs font-bold text-stone-800">CUMMINS PARTS #402</span>
<span className="text-[10px] text-stone-400">ETA: 24H</span>
</div>
<div className="flex items-center justify-between bg-white p-3 border-l-2 border-stone-300">
<span className="text-xs font-bold text-stone-800">VOLVO ASSEMBLIES</span>
<span className="text-[10px] text-stone-400">ETA: 4D</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-stone-200">
<p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Total Pending Payments</p>
<p className="text-2xl font-headline font-bold text-stone-900">$12,400.00</p>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 bg-surface-container p-8">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-stone-600" data-icon="settings_suggest">settings_suggest</span>
<h3 className="text-lg font-headline font-bold text-stone-900 uppercase">System Health</h3>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-stone-600">Core API Status</span>
<span className="px-2 py-0.5 bg-lime-500/20 text-lime-700 text-[10px] font-bold rounded-sm uppercase tracking-tighter">OPERATIONAL</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-stone-600">User Management</span>
<span className="text-xs font-bold text-stone-900">12 Active Admin</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-stone-600">Backup Sequence</span>
<span className="text-[10px] text-stone-400">45 MIN AGO</span>
</div>
<div className="mt-6 pt-4 border-t border-stone-300">
<button className="w-full text-xs font-bold text-stone-900 border border-stone-900 py-2 hover:bg-stone-900 hover:text-white transition-all">ACCESS DEV TOOLS</button>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="md:col-span-4 grid grid-rows-3 gap-2">
{/* Comentario remanente */}
<div className="bg-surface-container-high/50 p-4 flex items-center gap-4 border border-dashed border-stone-300 grayscale opacity-60 relative group">
<div className="w-10 h-10 bg-stone-200 flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400" data-icon="account_balance">account_balance</span>
</div>
<div>
<h4 className="text-xs font-bold text-stone-500 uppercase leading-none mb-1">Contabilidad</h4>
<span className="text-[9px] font-medium text-stone-400 italic">Work in Progress</span>
</div>
<div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] font-black text-stone-900 tracking-tighter bg-primary-container px-2 py-1">EN CONSTRUCCIÓN</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-high/50 p-4 flex items-center gap-4 border border-dashed border-stone-300 grayscale opacity-60 relative group">
<div className="w-10 h-10 bg-stone-200 flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400" data-icon="monetization_on">monetization_on</span>
</div>
<div>
<h4 className="text-xs font-bold text-stone-500 uppercase leading-none mb-1">Finanzas</h4>
<span className="text-[9px] font-medium text-stone-400 italic">Phase 2: Alpha Testing</span>
</div>
<div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] font-black text-stone-900 tracking-tighter bg-primary-container px-2 py-1">EN CONSTRUCCIÓN</span>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-surface-container-high/50 p-4 flex items-center gap-4 border border-dashed border-stone-300 grayscale opacity-60 relative group">
<div className="w-10 h-10 bg-stone-200 flex items-center justify-center">
<span className="material-symbols-outlined text-stone-400" data-icon="groups">groups</span>
</div>
<div>
<h4 className="text-xs font-bold text-stone-500 uppercase leading-none mb-1">RRHH</h4>
<span className="text-[9px] font-medium text-stone-400 italic">Module Pending Release</span>
</div>
<div className="absolute inset-0 bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] font-black text-stone-900 tracking-tighter bg-primary-container px-2 py-1">EN CONSTRUCCIÓN</span>
</div>
</div>
</div>
</div>
{/* Comentario remanente */}
<footer className="mt-20 border-t border-stone-200 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<h3 className="text-xl font-headline font-black text-stone-900 tracking-tighter uppercase mb-4">MAYOR DE REPUESTO LA CIMA, C.A.</h3>
<p className="text-xs text-stone-500 max-w-sm mb-6 leading-relaxed">
                    Leader in high-performance industrial engine parts distribution. Engineering reliability and supply chain precision for Venezuela's heavy machinery sector.
                </p>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center bg-stone-100 text-stone-600 hover:bg-primary-container hover:text-on-primary-container transition-all" href="#">
<span className="material-symbols-outlined text-sm" data-icon="public">public</span>
</a>
<a className="w-8 h-8 flex items-center justify-center bg-stone-100 text-stone-600 hover:bg-primary-container hover:text-on-primary-container transition-all" href="#">
<span className="material-symbols-outlined text-sm" data-icon="corporate_fare">corporate_fare</span>
</a>
</div>
</div>
<div className="lg:col-span-3">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">HEADQUARTERS</p>
<p className="text-xs font-bold text-stone-900 uppercase leading-tight">AV. 119, EDIF. MULTICENTRO PASEO EL PARRAL</p>
<p className="text-xs text-stone-600">VALENCIA, EDO. CARABOBO</p>
<p className="text-[10px] text-stone-400 mt-1 uppercase">VENEZUELA (CP 2001)</p>
</div>
<div className="lg:col-span-4">
<p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">COMMUNICATIONS</p>
<div className="grid grid-cols-1 gap-3">
<div>
<p className="text-[9px] text-stone-400 uppercase mb-0.5">Phones</p>
<p className="text-xs font-bold text-stone-900 tracking-tight">+58 424-4582766 / +58 424-4042558</p>
</div>
<div>
<p className="text-[9px] text-stone-400 uppercase mb-0.5">Email Channels</p>
<p className="text-xs font-bold text-stone-900">LACIMA.REPUESTOS@GMAIL.COM</p>
<p className="text-xs font-bold text-stone-900 uppercase">PEDIDOSLACIMA@GMAIL.COM</p>
</div>
</div>
</div>
</footer>
{/* Comentario remanente */}
<div className="mt-8 pt-6 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] font-bold text-stone-400">RIF: J-40308741-5 • ALL RIGHTS RESERVED © 2024</span>
<div className="flex items-center gap-6">
<a className="text-[10px] font-bold text-stone-500 hover:text-stone-900" href="#">Privacy Policy</a>
<a className="text-[10px] font-bold text-stone-500 hover:text-stone-900" href="#">Terms of Service</a>
<span className="text-[10px] font-black text-stone-900 tracking-tighter px-2 border-x border-stone-200">POWERED BY FORGE ERP</span>
</div>
</div>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-stone-900 text-primary-container shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-2xl" data-icon="add" >add</span>
</button>

        </div>
    );
};
