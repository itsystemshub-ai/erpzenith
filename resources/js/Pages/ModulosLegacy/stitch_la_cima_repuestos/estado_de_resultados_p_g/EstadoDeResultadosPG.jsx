import React from 'react';
import { Link } from '@inertiajs/react';

export default function EstadoDeResultadosPG() {
    return (
        <div className="legacy-view min-h-screen bg-surface">
            
{/* Comentario remanente */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-zinc-900 flex flex-col py-8 gap-4 shadow-[40px_0_40px_-40px_rgba(0,0,0,0.1)] z-40">
<div className="px-6 mb-8">
<h1 className="text-lg font-black text-zinc-50 uppercase tracking-tighter">Industrial ERP</h1>
<p className="font-['Space_Grotesk'] font-medium text-xs uppercase tracking-wider text-amber-400">Finance Module</p>
</div>
<nav className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-3 px-6 py-3 text-zinc-400 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-amber-500/10 text-amber-400 border-r-4 border-amber-500 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider transition-all duration-200" href="#">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span>Financial Reports</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-zinc-400 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Accounts Receivable</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-zinc-400 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span>Expenses</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-zinc-400 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Budgets</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-zinc-400 font-['Space_Grotesk'] font-medium text-sm uppercase tracking-wider hover:bg-zinc-800 transition-all duration-200 hover:translate-x-1" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span>Taxes</span>
</a>
</nav>
<div className="px-6 pt-4 border-t border-zinc-800 flex flex-col gap-1">
<a className="flex items-center gap-3 py-2 text-zinc-500 font-['Space_Grotesk'] font-medium text-xs uppercase tracking-wider hover:text-zinc-300" href="#">
<span className="material-symbols-outlined text-sm">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 py-2 text-zinc-500 font-['Space_Grotesk'] font-medium text-xs uppercase tracking-wider hover:text-zinc-300" href="#">
<span className="material-symbols-outlined text-sm">help</span>
<span>Support</span>
</a>
</div>
</aside>
{/* Comentario remanente */}
<header className="fixed top-0 right-0 left-64 h-16 bg-zinc-950/80 backdrop-blur-xl flex justify-between items-center px-8 z-30">
<div className="flex items-center gap-4">
<span className="text-xl font-bold tracking-tighter text-zinc-50 uppercase font-['Space_Grotesk']">FINANCE_ENGINE</span>
<span className="w-px h-6 bg-zinc-800"></span>
<div className="relative">
<input className="bg-zinc-900 border-none text-xs font-['Space_Grotesk'] tracking-widest uppercase py-2 pl-10 pr-4 focus:ring-1 focus:ring-amber-500 w-64" placeholder="SEARCH REPORTS..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-amber-400 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-zinc-400 hover:text-amber-400 transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="flex items-center gap-3">
<div className="text-right">
<p className="text-[10px] text-zinc-500 uppercase font-bold leading-none">ADMINISTRATOR</p>
<p className="text-xs text-zinc-300 font-medium leading-tight">M. DE REPUESTO LA CIMA</p>
</div>
<img className="w-8 h-8 object-cover rounded-sm grayscale contrast-125" data-alt="professional corporate executive headshot in industrial setting with clean background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjd3zwPamnpXVYKGppmbQcgerAYX_CpioXQeDrRCMyVDgGhzoF0VY2eJ-gNDQnC-CVYu17ubuqs31lnOLwYqR3h1Owo6Ntfys4QoswR7CsujJGPRVIcPwJUlsHqyKiNN-lsan-gQrXJcOxD4V-Usj2p_ocWU9iUzNKY2twzJgFiQ1f2CZ7d_FypwYrjj_lwpR4ELc_FDyOaTB3unPojbE9LJ9ApjNZJ89QixpB66jKSYJiGXuvPCWIb8EqVQnINDqD7ZzFgosEYL8"/>
</div>
</div>
</header>
{/* Comentario remanente */}
<main className="ml-64 pt-16 h-screen overflow-y-auto custom-scrollbar bg-zinc-950">
<div className="max-w-6xl mx-auto p-12">
{/* Comentario remanente */}
<div className="flex justify-between items-end mb-12 relative">
<div className="space-y-2">
<h2 className="text-xs font-bold text-amber-500 uppercase tracking-[0.3em]">ESTADO DE RESULTADOS (P&amp;G)</h2>
<h1 className="text-5xl font-black text-zinc-50 uppercase tracking-tighter leading-none">MAYOR DE REPUESTO<br/>LA CIMA, C.A.</h1>
<p className="text-zinc-500 font-['Space_Grotesk'] text-sm tracking-widest mt-4">PERÍODO FISCAL 2023 | ESTRUCTURA NIIF (IFRS)</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-zinc-900 px-6 py-3 text-zinc-300 font-['Inter'] font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all border border-zinc-800">
<span className="material-symbols-outlined text-sm">download</span>
<span>EXPORT PDF</span>
</button>
<button className="flex items-center gap-2 bg-amber-500 px-6 py-3 text-zinc-950 font-['Inter'] font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">table_view</span>
<span>EXPORT EXCEL</span>
</button>
</div>
{/* Comentario remanente */}
<div className="absolute -bottom-4 left-0 w-full h-[1px] bg-zinc-800"></div>
</div>
{/* Comentario remanente */}
<div className="grid grid-cols-12 gap-6 mb-12">
{/* Comentario remanente */}
<div className="col-span-12 md:col-span-4 bg-zinc-900/50 p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 -mr-16 -mt-16 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors"></div>
<p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">UTILIDAD BRUTA</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-black text-zinc-100">$ 1.452.890,00</p>
<span className="text-amber-500 text-xs font-bold font-['Space_Grotesk']">+14%</span>
</div>
<div className="mt-6 w-full bg-zinc-800 h-1">
<div className="bg-amber-500 h-1 w-[68%]"></div>
</div>
</div>
{/* Comentario remanente */}
<div className="col-span-12 md:col-span-4 bg-zinc-900/50 p-8">
<p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">MARGEN OPERACIONAL</p>
<p className="text-3xl font-black text-zinc-100">32.4%</p>
<p className="text-[10px] text-zinc-600 mt-4 uppercase font-bold">OPTIMIZADO SEGÚN ART. 177</p>
</div>
{/* Comentario remanente */}
<div className="col-span-12 md:col-span-4 bg-amber-500 p-8">
<p className="text-xs font-bold text-amber-950 uppercase tracking-widest mb-1">UTILIDAD NETA DISPONIBLE</p>
<p className="text-3xl font-black text-amber-950">$ 628.430,22</p>
<div className="flex items-center gap-1 mt-4">
<span className="material-symbols-outlined text-xs text-amber-900">verified</span>
<span className="text-[10px] text-amber-900 font-bold uppercase">POST-ISLR (34%)</span>
</div>
</div>
</div>
{/* Comentario remanente */}
<div className="bg-zinc-900/30 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-900 border-b border-zinc-800">
<th className="py-5 px-8 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">CÓDIGO CUENTA</th>
<th className="py-5 px-8 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">DESCRIPCIÓN DE PARTIDA</th>
<th className="py-5 px-8 text-right text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">VALOR (USD)</th>
<th className="py-5 px-8 text-right text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">% INC.</th>
</tr>
</thead>
<tbody className="font-['Inter']">
{/* Comentario remanente */}
<tr className="bg-zinc-800/30">
<td className="py-4 px-8 text-[10px] font-black text-amber-500 uppercase tracking-widest" colspan="4">INGRESOS OPERACIONALES</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">4.1.01.01</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-300 uppercase tracking-tight">VENTAS NETAS DE REPUESTOS INDUSTRIALES</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-100">$ 4.250.000,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-500">100%</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">4.1.01.05</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-300 uppercase tracking-tight">SERVICIOS DE MECÁNICA DE PRECISIÓN</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-100">$ 180.450,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-500">4.2%</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-zinc-800/30">
<td className="py-4 px-8 text-[10px] font-black text-amber-500 uppercase tracking-widest" colspan="4">COSTO DE VENTAS (ART. 177)</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">5.1.01.10</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">INVENTARIO INICIAL DE MERCANCÍA</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">$ 950.000,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">--</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">5.1.01.20</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">COMPRAS NETAS NACIONALES/IMPORTADAS</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">$ 2.650.000,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">--</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors border-b border-zinc-800">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">5.1.01.99</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">INVENTARIO FINAL DE MERCANCÍA</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">($ 622.440,00)</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">--</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-zinc-900 border-t-2 border-amber-500/20">
<td className="py-6 px-8 text-sm font-black text-zinc-50 uppercase tracking-widest" colspan="2">UTILIDAD BRUTA EN VENTAS</td>
<td className="py-6 px-8 text-right text-lg font-black text-amber-400">$ 1.452.890,00</td>
<td className="py-6 px-8 text-right text-xs font-bold text-zinc-500">32.8%</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-zinc-800/30">
<td className="py-4 px-8 text-[10px] font-black text-amber-500 uppercase tracking-widest" colspan="4">GASTOS OPERACIONALES</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">6.1.01.00</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">GASTOS DE PERSONAL Y PRESTACIONES</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">$ 320.000,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">7.2%</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">6.1.05.00</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">MANTENIMIENTO DE PLANTA E INDUSTRIAL</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">$ 85.000,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">1.9%</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="py-4 px-8 text-xs font-mono text-zinc-500">6.1.08.00</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight">PUBLICIDAD Y LOGÍSTICA DE DISTRIBUCIÓN</td>
<td className="py-4 px-8 text-right text-xs font-bold text-zinc-300">$ 95.500,00</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">2.1%</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-zinc-900 border-t border-zinc-800">
<td className="py-6 px-8 text-sm font-black text-zinc-50 uppercase tracking-widest" colspan="2">UTILIDAD ANTES DE IMPUESTOS</td>
<td className="py-6 px-8 text-right text-lg font-black text-zinc-100">$ 952.390,00</td>
<td className="py-6 px-8 text-right text-xs font-bold text-zinc-500">21.5%</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-zinc-800/10">
<td className="py-4 px-8 text-xs font-mono text-amber-600">8.1.01.01</td>
<td className="py-4 px-8 text-xs font-semibold text-zinc-400 uppercase tracking-tight italic">PROVISIÓN IMPUESTO SOBRE LA RENTA (34%)</td>
<td className="py-4 px-8 text-right text-xs font-bold text-error">($ 323.812,78)</td>
<td className="py-4 px-8 text-right text-[10px] font-bold text-zinc-600">--</td>
</tr>
{/* Comentario remanente */}
<tr className="bg-amber-500">
<td className="py-8 px-8 text-base font-black text-amber-950 uppercase tracking-[0.2em]" colspan="2">UTILIDAD NETA DEL EJERCICIO</td>
<td className="py-8 px-8 text-right text-2xl font-black text-amber-950">$ 628.577,22</td>
<td className="py-8 px-8 text-right text-xs font-black text-amber-900">14.2%</td>
</tr>
</tbody>
</table>
</div>
{/* Comentario remanente */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="p-8 border border-zinc-800/50 bg-zinc-900/20">
<h4 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-xs">analytics</span>
                        NOTAS COMPLEMENTARIAS
                    </h4>
<p className="text-xs text-zinc-500 leading-relaxed font-['Inter']">
                        Este reporte ha sido generado bajo los estándares internacionales de información financiera (NIIF). El costo de ventas incluye los ajustes por desvalorización de inventarios obsoletos según las políticas internas de gestión de almacén. Los gastos operativos han sido prorrateados en base al consumo directo por departamento.
                    </p>
</div>
<div className="flex flex-col justify-end items-end gap-2 px-8">
<div className="w-48 h-px bg-zinc-800"></div>
<p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">DEPARTAMENTO DE FINANZAS</p>
<p className="text-[10px] font-medium text-zinc-600 uppercase tracking-tighter leading-none">Generado automáticamente: 24 MAY 2024 - 14:35 UTC</p>
</div>
</div>
</div>
</main>
{/* Comentario remanente */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-zinc-950" >add</span>
</button>

```
        </div>
    );
};
